(ns antares.core
  (:require-macros
    [cljs.core.async.macros :refer (go)]
    [dommy.macros :refer [node]])
  (:require
    [antares.importers :as importers]
    [antares.repl :as repl]
    [dommy.core :as dommy]
    [cljs.reader :as edn]
    [clojure.string :as str]
    [cljs.core.async :refer (<!)]))

;; GLOBAL ATOMS
(def app-state (atom {}))
(def registered-bindings (atom []))
(def registered-components (atom []))

;; HELPER API ENDPOINTS
(defn read-data
  [data-string]
  (edn/read-string data-string))

(defn split-last
  [regex data]
  (str/split data regex))

(defn string->matrix
  [string]
  (->> (str/split string #"\n")
       (map (fn [string] (str/split string #",")))))

(defn cursor->value
  [cursor new-value]
  (swap! app-state (fn [app-value]
                     (update-in app-value cursor (fn [old-value] new-value)))))

;; RENDERABLE PROTOCOL
(defprotocol Renderable
  (render [self]))

(defrecord DataBinding
  [app-cursor dom-cursor render-fn]
  
  Renderable
  (render [self]
    (let [target-node (.querySelector js/document dom-cursor)
          target-data (if (= (type app-cursor) cljs.core/List)
                        (render-fn (map (fn [cursor]
                                          (if-let [app-data (get-in @app-state cursor)]
                                            app-data
                                            "")) app-cursor))
                        (render-fn (if-let [app-data (get-in @app-state app-cursor)]
                                     app-data
                                     "")))]
      (case (.-tagName target-node)
        "INPUT" (set! (.-value target-node) target-data)
        "TEXTAREA" (set! (.-value target-node) target-data)
        (set! (.-innerText target-node) target-data)))))

(defrecord Component
  [app-cursor dom-cursor render-fn interactions]

  Renderable
  (render [self]
    (let [target-node (.querySelector js/document dom-cursor)
          new-nodes-data (render-fn (get-in @app-state app-cursor))]
      (set! (.-innerHTML target-node) "")
      (doseq [new-node-data new-nodes-data]
        (let [node-to-append (node new-node-data)]
          (dommy/append! target-node node-to-append))))))

;; DATA SOURCE PROTOCOL
(defprotocol DataSource
  (load-data [self]))

(defrecord DataComponent
  [app-cursor dom-cursor render-fn interactions data]

  Renderable
  (render [self]
    (let [target-node (.querySelector js/document dom-cursor)
          new-nodes-data (render-fn (get-in @app-state app-cursor))]
      (set! (.-innerHTML target-node) "")
      (doseq [new-node-data new-nodes-data]
        (let [node-to-append (node new-node-data)]
          (dommy/append! target-node node-to-append)))))
  
  DataSource
  (load-data [self]
    (go 
      (->>
       (importers/s3File (-> self :data :bucket-name) (-> self :data :file-name))
       (<!)
       (:body)
       (string->matrix)
       (cursor->value app-cursor)))))

;; LIBRARY CODE
(defn register-app-state-cursor
  [cursor value]
  (if (nil? (get-in @app-state cursor))
    (swap! app-state (fn [app-value]
                       (update-in app-value cursor (fn [old-value] value))))))

(defn register-binding
  [data-binding]
  (swap! registered-bindings conj data-binding))

(defn render-bindings
  [data-bindings]
  (doseq [data-binding data-bindings]
    (render data-binding)))

(defn register-component
  [component]
  (swap! registered-components conj component))

(defn render-components
  [components]
  (doseq [component components]
    (render component)))

;; CURSOR API ENDPOINTS
(defn update-cursor
  [cursor update-fn]
  (swap! app-state (fn [state]
                     (update-in state cursor update-fn))))

(defn update-app-state
  [update-fn]
  (reset! app-state (update-fn)))

;; CREATE COMPONENTS
(defn create-component
  [source-map]
  (let [component (map->Component source-map)]
    (register-app-state-cursor (-> source-map :app-cursor) [])
    (register-component component)
    (render component)
    component))

;; CREATE DATA COMPONENT
(defn create-data-component
  [source-map]
  (let [component (map->DataComponent source-map)]
    (register-app-state-cursor (-> source-map :app-cursor) [[][]])
    (register-component component)
    (render component)
    (load-data component)
    component))

;; CREATE DATA BINDINGS [can take lists for app-cursor or dom-cursor]
(defmulti create-data-binding (fn [app-cursor dom-cursor render-fn]
                                (= (type app-cursor) cljs.core/List)))

(defmethod create-data-binding false [app-cursor dom-cursor render-fn]
  (let [data-binding (map->DataBinding
                      {:app-cursor app-cursor
                       :dom-cursor dom-cursor
                       :render-fn  render-fn})]
    (register-app-state-cursor app-cursor "")
    (register-binding data-binding)
    (render data-binding)
    data-binding))

(defmethod create-data-binding true [app-cursor dom-cursor render-fn]
  (let [data-binding (map->DataBinding
                      {:app-cursor app-cursor
                       :dom-cursor dom-cursor
                       :render-fn render-fn})]
    (doseq [cursor app-cursor]
      (register-app-state-cursor cursor ""))
    (register-binding data-binding)
    (render data-binding)
    data-binding))

(defmulti data-bind (fn [app-cursor dom-cursors render-fn]
                      (= (type dom-cursors) cljs.core/List)))

(defmethod data-bind false [app-cursor dom-cursor render-fn]
  (create-data-binding app-cursor dom-cursor render-fn))

(defmethod data-bind true [app-cursor dom-cursors render-fn]
  (doseq [dom-cursor dom-cursors]
    (create-data-binding app-cursor dom-cursor render-fn)))

;; CREATE EVENT BINDINGS
(defn bind-event [dom-cursor event-type action]
  (.addEventListener (.querySelector js/document dom-cursor) event-type action))

;; CREATE TWO WAY BINDINGS (Data Binding + Event Binding)
(defn two-way-bind
  [app-cursor dom-cursor]
  (data-bind app-cursor dom-cursor (fn [data] data))
  (bind-event dom-cursor "input" (fn [event] (update-cursor app-cursor (fn [old-value] (-> event .-target .-value))))))

;; CREATE RENDER WATCHERS
(add-watch app-state :render-bindings
  (fn [k r old-state new-state] (render-bindings @registered-bindings)))
(add-watch app-state :render-components
  (fn [k r old-state new-state] (render-components @registered-components)))

;; CREATE ATOM COMPONENTS
(dommy/prepend! (.querySelector js/document "body") (node [:div.antares.app-state
                                                           [:textarea.antares.app-state-inspector
                                                            {:style
                                                             {:width "100%"
                                                              :height "80px"
                                                              :font-size ".8rem"}}]]))

(data-bind
 []
 ".antares.app-state-inspector"
 (fn [data]
   (pr-str data)))

(bind-event
  ".antares.app-state-inspector"
  "input"
  (fn [event]
    (update-app-state (fn [] (read-data (-> event .-target .-value))))))
