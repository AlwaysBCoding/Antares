(ns antares.core
  (:require-macros
    [cljs.core.async.macros :refer (go)]
    [hiccups.core :as htmlrenderer])
  (:require
    [goog.dom :as gcc-dom]
    [goog.events :as gcc-events]
    [goog.dom.classes :as gcc-classes]
    [antares.repl :as repl]
    [cljs.reader :as edn]
    [clojure.string :as str]
    [ajax.core :as ajax]
    [cljs.core.async :refer (<!)]
    [hiccups.runtime :as hiccupsrt]
    [garden.core :as cssrenderer]))

;; GLOBAL ATOMS
(def app-state (atom {}))
(def registered-components (atom []))
(def registered-data-watchers (atom []))

;; GLOBAL HELPERS
(defn read-string
  [data-string]
  (edn/read-string data-string))

;; PROTOCOLS
(defprotocol Renderable
  (pre-render [self])
  (render [self])
  (post-render [self]))

(defprotocol AntaresComponent
  (initial-cursor [self])
  (initialize [self])
  (bind-events [self])
  (register-cursor [self])
  (register-watcher [self]))

(defprotocol AntaresDataWatcher
  (register-data-watcher [self]))

;; API METHODS
(defn cursor->fn
  [cursor update-fn]
  (swap! app-state (fn [state]
                     (update-in state cursor update-fn))))

(defn cursor->value
  [cursor new-value]
  (swap! app-state (fn [app-value]
                     (update-in app-value cursor (fn [old-value] new-value)))))

(defn reset-app-state
  [value]
  (reset! app-state value))

;; DATA WATCHERS
(defrecord DataWatcher
  [ident
   app-cursor
   watch-fn]

  AntaresDataWatcher
  (register-data-watcher [self]
    (add-watch
     app-state
     (-> self :ident)
     (fn [key reference old-state new-state]
       (when (not= (get-in old-state (-> self :app-cursor)) (get-in new-state (-> self :app-cursor)))
         ((-> self :watch-fn)))))))

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

  (initialize [self]
    (if (-> self :initialize-fn)
      (cursor->fn (-> self :app-cursor) (-> self :initialize-fn))))

  (bind-events [self]
    (when-let [interactions (-> self :interactions)]
      (doseq [interaction interactions]
        (gcc-events/listen (.querySelector js/document dom-cursor) (-> interaction :event-type) (-> interaction :event-action)))))

  (register-cursor [self]
    (if (nil? (get-in @app-state (-> self :app-cursor)))
      (cursor->value (-> self :app-cursor) (initial-cursor self))))

  (register-watcher [self]
    (add-watch
     app-state
     (-> self :ident)
     (fn [key reference old-state new-state]
       (when (not= (get-in old-state (-> self :app-cursor)) (get-in new-state (-> self :app-cursor)))
         (pre-render self)
         (render self)
         (post-render self)))))

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

(defn unregister-component
  [component]
  (remove-watch app-state (-> component :ident))
  (swap! registered-components (fn [components]
                                 (remove #(= (-> % :ident) (-> component :ident)) components))))

(defn create-component
  [source-map]
  (let [component (map->Component source-map)]
    (register-component component)
    (initialize component)
    (pre-render component)
    (render component)
    (post-render component)
    component))

(defn destroy-component
  [ident]
  (let [component (first (filter #(= (-> % :ident) ident) @registered-components))]
    (unregister-component component)
    (let [target-node (.querySelector js/document (-> component :dom-cursor))
          clone-node (.cloneNode target-node false)
          parent-node (.-parentNode target-node)]
      (.remove target-node)
      (.appendChild parent-node clone-node)
      (set! (.-innerHTML target-node) ""))))

;; DATA WATCHER
(defn create-data-watcher
  [source-map]
  (let [data-watcher (map->DataWatcher source-map)]
    (register-data-watcher data-watcher)
    data-watcher))

;; ASYNC
(defn http-get
  [uri options]
  (ajax/GET uri options))

(defn http-post
  [uri options]
  (ajax/POST uri options))

;; COMPILE SERVICES
(defn compile-css
  [css-data]
  (cssrenderer/css (read-string css-data)))

;; DETECTIVE MODE
(create-component
 {:ident :app-state-inspector
  :data-type "map"
  :app-cursor []
  :dom-cursor ".antares.app-state"
  :render-fn (fn [data]
               [:textarea.antares.app-state-inspector (pr-str data)])
  :interactions [{:event-type "blur"
                  :event-action (fn [event]
                                  (reset-app-state (-> event .-target .-value read-string)))}]})

;; (gcc-events/listen (.querySelector js/document "body") "click" (fn [event]
;;                                                                  (if-let [element (.querySelector js/document ".active-component")]
;;                                                                    (gcc-classes/remove element "active-component"))
;;                                                                  (gcc-classes/add (-> event .-target) "active-component")))

;; INTERACTIVE REPL
#_(
   (update-cursor [:firstname] (fn [old-value] "Jordan"))
   (destroy-component :firstname)
)

;; HELPER API ENDPOINTS
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
