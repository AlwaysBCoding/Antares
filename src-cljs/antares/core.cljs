(ns antares.core
  (:require-macros
    [dommy.macros :refer [node sel sel1]])
  (:require
    [dommy.core :as dommy]
    [dommy.utils :as utils]
    [dommy.attrs :as attrs]
    [cljs.reader :as edn]))

;; GLOBAL ATOMS
(def app-state (atom {}))
(def registered-bindings (atom []))
(def registered-components (atom []))

;; RENDERABLE PROTOCOL
(defprotocol Renderable
  (render [self]))

(defrecord DataBinding
  [app-cursor dom-cursor render-fn]
  
  Renderable
  (render [self]
    (let [target-node (sel1 dom-cursor)
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
    (let [target-node (sel1 dom-cursor)
          new-nodes-data (render-fn (get-in @app-state app-cursor))]
      (dommy/clear! target-node)
      (doseq [new-node-data new-nodes-data]
        (let [node-to-append (node new-node-data)]
          (dommy/append! target-node node-to-append))))))

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

;; CREATE COMPONENTS
(defn create-component
  [source-map]
  (let [component (map->Component source-map)]
    (register-app-state-cursor (-> source-map :app-cursor) [])
    (register-component component)
    (render component)
    component))

;; CREATE DATA BINDINGS [can take lists for app-cursor or dom-cursor]
(defmulti create-data-binding (fn [app-cursors dom-cursor render-fn]
                                (= (type app-cursors) cljs.core/List)))

(defmethod create-data-binding false [app-cursor dom-cursor render-fn]
  (let [data-binding (map->DataBinding
                      {:app-cursor app-cursor
                       :dom-cursor dom-cursor
                       :render-fn  render-fn})]
    (register-app-state-cursor app-cursor "")
    (register-binding data-binding)
    (render data-binding)
    data-binding))

(defmethod create-data-binding true [app-cursors dom-cursor render-fn]
  let [data-binding (map->DataBinding
                     {:app-cursor app-cursors
                      :dom-cursor dom-cursor
                      :render-fn  render-fn})]
  (doseq [app-cursor app-cursors]
    (register-app-state-cursor app-cursor ""))
  (register-binding data-binding)
)

(defmulti data-bind (fn [app-cursors dom-cursors render-fn]
                      (= (type dom-cursors) cljs.core/List)))

(defmethod data-bind false [app-cursor dom-cursor render-fn]
  (create-data-binding app-cursor dom-cursor render-fn))

(defmethod data-bind true [app-cursor dom-cursors render-fn]
  (doseq [dom-cursor dom-cursors]
    (create-data-binding app-cursor dom-cursor render-fn)))

;; CREATE TWO WAY DATA BINDINGS
(defn two-way-data-bind
  [app-cursor dom-cursor])

;; CREATE EVENT BINDINGS
(defn bind-event [dom-cursor event-type action]
  (.addEventListener (.querySelector js/document dom-cursor) event-type action))

;; CREATE RENDER WATCHERS
(add-watch app-state :render-bindings
  (fn [k r old-state new-state] (render-bindings @registered-bindings)))
(add-watch app-state :render-components
  (fn [k r old-state new-state] (render-components @registered-components)))

;; CURSOR API ENDPOINTS
(defn update-cursor
  [cursor new-value]
  (swap! app-state (fn [state]
                     (update-in state cursor (fn [old-value] new-value)))))
