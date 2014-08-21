(ns antares.core
  (:require-macros
    [cljs.core.async.macros :refer (go)]
    [dommy.macros :refer [node]]
    [hiccups.core :as htmlrenderer])
  (:require
    [antares.repl :as repl]
    [dommy.core :as dommy]
    [cljs.reader :as edn]
    [clojure.string :as str]
    [cljs-http.client :as http]
    [ajax.core :as ajax]
    [cljs.core.async :refer (<!)]
    [hiccups.runtime :as hiccupsrt]
    [garden.core :as cssrenderer]))

;; GLOBAL ATOMS
(def app-state (atom {}))
(def registered-components (atom []))

;; PROTOCOLS
(defprotocol Renderable
  (pre-render [self])
  (render [self])
  (post-render [self]))

(defprotocol AntaresComponent
  (initial-cursor [self])
  (bind-events [self])
  (register-cursor [self])
  (register-watcher [self]))

;; API METHODS
(defn update-cursor
  [cursor update-fn]
  (swap! app-state (fn [state]
                     (update-in state cursor update-fn))))

;; COMPONENTS
(defrecord Component
  [ident
   data-type
   app-cursor
   dom-cursor
   initialize-fn
   pre-render-fn
   render-fn
   post-render-fn
   interactions]

  AntaresComponent
  (initial-cursor [self]
    (case (-> self :data-type)
      "string"  ""
      "map"     {}
      "vector"  []
      "matrix"  [[]]
      "number"  0))

  (bind-events [self]
    (when-let [interactions (-> self :interactions)]
      (doseq [interaction interactions]
        (.addEventListener (.querySelector js/document dom-cursor) (-> interaction :event-type) (-> interaction :event-action) true))))

  (register-cursor [self]
    (if (nil? (get-in @app-state (-> self :app-cursor)))
      (update-cursor (-> self :app-cursor) (fn [old-value] (initial-cursor self)))))

  (register-watcher [self]
    (add-watch
     app-state
     (-> self :ident)
     (fn [key reference old-state new-state]
       (if (not= (get-in old-state (-> self :app-cursor)) (get-in new-state (-> self :app-cursor)))
         (render self)))))

  Renderable
  (pre-render [self]
    (if (-> self :pre-render-fn)
      (pre-render-fn)))
  
  (render [self]
    (let [target-node (.querySelector js/document dom-cursor)
          new-nodes-data (render-fn (get-in @app-state app-cursor))]
      (set! (.-innerHTML target-node) (htmlrenderer/html new-nodes-data))))

  (post-render [self]
    (if (-> self :post-render-fn)
      (post-render-fn))))
  
(defn register-component
  [component]
  (register-cursor component)
  (register-watcher component)
  (swap! registered-components conj component)
  (bind-events component))

(defn create-component
  [source-map]
  (let [component (map->Component source-map)]
    (register-component component)
    (render component)
    component))

;; HELPER API ENDPOINTS
;; (defn read-data
;;   [data-string]
;;   (edn/read-string data-string))

;; (defn split-threadlast
;;   [regex data]
;;   (str/split data regex))

;; (defn nth-threadlast
;;   [index collection]
;;   (nth collection index))

;; (defn string->matrix
;;   [string]
;;   (if string
;;     (let [formatted-string (str/replace string #"\r" "\n")]
;;       (->> (str/split formatted-string #"\n")
;;            (map (fn [string] (str/split string #",")))))))

;; (defn cursor->value
;;   [cursor new-value]
;;   (swap! app-state (fn [app-value]
;;                      (update-in app-value cursor (fn [old-value] new-value)))))

;; RENDERER ENDPOINTS
;; (defn render-css
;;   [data]
;;   (cssrenderer/css (read-data data)))

;; (defn render-html
;;   [template]
;;   (htmlrenderer/html (read-data template)))

;; (defn compile-template
;;   [compile-data template]
;;   (ajax/POST "http://localhost:8989/compile-template" {:params {:compile-data compile-data
;;                                                                 :template template}
;;                                                        :handler (fn [response]
;;                                                                   (update-cursor [:compiled-html] (fn [old-value] response)))}))

;; CORE RECORDS
;; (defrecord DataBinding
;;   [app-cursor dom-cursor render-fn]
  
;;   Renderable
;;   (render [self]
;;     (let [target-node (.querySelector js/document dom-cursor)
;;           target-data (if (= (type app-cursor) cljs.core/List)
;;                         (render-fn (map (fn [cursor]
;;                                           (if-let [app-data (get-in @app-state cursor)]
;;                                             app-data
;;                                             "")) app-cursor))
;;                         (render-fn (if-let [app-data (get-in @app-state app-cursor)]
;;                                      app-data
;;                                      "")))]
;;       (case (.-tagName target-node
;;         "INPUT" (set! (.-value target-node) target-data)
;;         "TEXTAREA" (set! (.-value target-node) target-data)
;;         (set! (.-innerHTML target-node) target-data)))))

;; (defn register-binding
;;   [data-binding]
;;   (swap! registered-bindings conj data-binding))

;; (defn render-bindings
;;   [data-bindings]
;;   (doseq [data-binding data-bindings]
;;     (render data-binding)))

;; CURSOR API ENDPOINTS
;; (defn update-cursor-async
;;   [cursor resource-url]
;;   (go
;;     (let [response 
;;           (->> (http/get resource-url {})
;;                (<!)
;;                (:body))]
;;       (swap! app-state (fn [state]
;;                          (update-in state cursor (fn [old-value] response)))))))

;; (defn update-app-state
;;   [update-fn]
;;   (reset! app-state (update-fn)))

;; CREATE DATA BINDINGS [can take lists for app-cursor or dom-cursor]
;; (defmulti create-data-binding (fn [app-cursor dom-cursor render-fn]
;;                                 (= (type app-cursor) cljs.core/List)))

;; (defmethod create-data-binding false [app-cursor dom-cursor render-fn]
;;   (let [data-binding (map->DataBinding
;;                       {:app-cursor app-cursor
;;                        :dom-cursor dom-cursor
;;                        :render-fn  render-fn})]
;;     (register-app-state-cursor app-cursor "")
;;     (register-binding data-binding)
;;     (render data-binding)
;;     data-binding))

;; (defmethod create-data-binding true [app-cursor dom-cursor render-fn]
;;   (let [data-binding (map->DataBinding
;;                       {:app-cursor app-cursor
;;                        :dom-cursor dom-cursor
;;                        :render-fn render-fn})]
;;     (doseq [cursor app-cursor]
;;       (register-app-state-cursor cursor ""))
;;     (register-binding data-binding)
;;     (render data-binding)
;;     data-binding))

;; (defmulti data-bind (fn [app-cursor dom-cursors render-fn]
;;                       (= (type dom-cursors) cljs.core/List)))

;; (defmethod data-bind false [app-cursor dom-cursor render-fn]
;;   (create-data-binding app-cursor dom-cursor render-fn))

;; (defmethod data-bind true [app-cursor dom-cursors render-fn]
;;   (doseq [dom-cursor dom-cursors]
;;     (create-data-binding app-cursor dom-cursor render-fn)))

;; CREATE EVENT BINDINGS
;; (defn bind-event [dom-cursor event-type action]
;;   (.addEventListener (.querySelector js/document dom-cursor) event-type action))

;; CREATE TWO WAY BINDINGS (Data Binding + Event Binding)
;; (defn two-way-bind
;;   [app-cursor dom-cursor]
;;   (data-bind app-cursor dom-cursor (fn [data] data))
;;   (bind-event dom-cursor "input" (fn [event] (update-cursor app-cursor (fn [old-value] (-> event .-target .-value))))))

;; CREATE RENDER WATCHERS
;; (add-watch app-state :render-bindings
;;  (fn [k r old-state new-state] (if (not= old-state new-state)
;;                                 (render-bindings @registered-bindings))))

;; ASYNC HANDLING
;; (defn async
;;   [request]
;;   (case (-> request :method)
;;     "GET" '()
;;     "POST" (ajax/POST
;;             (-> request :uri)
;;             {:params (-> request :params)
;;              :handler (-> request :handler)})))

;; CREATE ATOM COMPONENTS
;; (dommy/prepend! (.querySelector js/document "body") (node [:div.antares.app-state
;;                                                            [:textarea.antares.app-state-inspector
;;                                                             {:style
;;                                                              {:width "100%"
;;                                                               :height "80px"
;;                                                               :font-size ".8rem"
;;                                                               }}]]))

;; (data-bind
;;  []
;;  ".antares.app-state-inspector"
;;  (fn [data]
;;    (pr-str data)))

;; (bind-event
;;   ".antares.app-state-inspector"
;;   "input"
;;   (fn [event]
;;     (update-app-state (fn [] (read-data (-> event .-target .-value))))))
