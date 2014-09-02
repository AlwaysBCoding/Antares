(ns antares.core
  (:require-macros [cljs.core.async.macros :refer (go go-loop)]
                   [hiccups.core :as html-renderer])
  (:require [goog.dom :as dom]
            [goog.dom.classes :as classes]
            [goog.dom.dataset :as dataset]
            [goog.events :as events]
            [cljs.reader :as cljs-reader]
            [clojure.string :as str]
            [ajax.core :as ajax]
            [cljs.core.async :refer (chan <! >! put!)]
            [hiccups.runtime :as hiccupsrt]
            [garden.core :as css-renderer]))

;; UTILS
(defn string->data
  [string]
  (cljs-reader/read-string string))

(defn has-class?
  [node class-name]
  (.contains (-> node .-classList) class-name))

(defn has-id?
  [node id]
  (= (-> node .-id) id))

(defn add-class
  [target class]
  (classes/add target class))

(defn remove-class
  [target class]
  (classes/remove target class))

(defn toggle-class
  [target class]
  (classes/toggle target class))

(defn get-data
  [target property-name]
  (dataset/get target property-name))

(defn nodelist->array
  [nodelist]
  (.call (.-slice (.-prototype js/Array)) nodelist))

(def app-state (atom {}))
(def registered-components (atom []))

;; STATE MANIPULATION
(defn cursor->value
  [cursor new-value]
  (swap! app-state (fn [state]
                     (update-in state cursor (fn [old-value] new-value)))))

(defn cursor->fn
  [cursor update-fn]
  (swap! app-state (fn [state]
                     (update-in state cursor update-fn))))

(defn reset-state
  [new-state]
  (reset! app-state (string->data new-state)))

(defn get-value
  [cursor]
  (get-in @app-state cursor))

;; COMPILE SERVICES
(defn compile-html!
  [html-data]
  (html-renderer/html html-data))

(defn compile-css!
  [css-data]
  (css-renderer/css css-data))

(defprotocol LifeCycle
  (initialize-state [self app-cursor])
  (component-will-mount [self])
  (component-did-mount [self app-cursor dom-cursor])
  (component-will-update [self])
  (component-did-update [self])
  (component-will-unmount [self]))

(defprotocol Registerable
  (register-component [self]))

(defprotocol Renderable
  (render-html [self data])
  (render-css [self]))

(defprotocol Mountable
  (mount-component [self component-data dom-cursor])
  (unmount-component [self]))

(defrecord Component
  [ident
   render
   style
   event-mappings
   controls]
  
  Registerable
  (register-component [self]
    (swap! registered-components conj self))

  Renderable
  (render-html [self data]
    (if-let [render-fn (-> self :render)]
      (html-renderer/html (render-fn data))))

  (render-css [self]
    (if-let [style-data (-> self :style)]
      (css-renderer/css style-data)))

  Mountable
  (mount-component [self component-data dom-cursor]
    (dom/appendChild (.querySelector js/document dom-cursor) (dom/htmlToDocumentFragment (render-html self component-data)))
    (let [text-node (dom/createTextNode (render-css self))
          style-node (dom/createDom "style" text-node)]
      (dom/appendChild (.querySelector js/document "#antares-styles") style-node)))

  (unmount-component [self])

  LifeCycle
  (initialize-state [self app-cursor]
    (get-in @app-state app-cursor))

  (component-will-mount [self])

  (component-did-mount [self app-cursor dom-cursor]
    (if-let [component-did-mount-fn (-> self :component-did-mount)]
      (component-did-mount-fn self app-cursor dom-cursor)))

  (component-will-update [self]
    (if-let [component-will-update-fn (-> self :component-will-update)]
      (component-will-update-fn self)))

  (component-did-update [self]
    (if-let [component-did-update-fn (-> self :component-did-update)]
      (component-did-update-fn self)))

  (component-will-unmount [self]))

(defn component
 [source-map]
 (let [component (map->Component source-map)]
   (register-component component)
   component))

(defn bind
  [component app-cursor dom-cursor]
  (let [component-data (initialize-state component app-cursor)]
    (component-will-mount component)
    (mount-component component component-data dom-cursor)
    (doseq [component @registered-components]
      (component-did-update component))
    (component-did-mount component app-cursor dom-cursor)))

;; EVENT DISPATCHER
(def event-list ["click" "keydown" "focusout"])
(def event-stream (chan))
(def control-stream (chan))

(let [root-node (.querySelector js/document "body")]
  (doseq [event-name event-list]
    (events/listen root-node event-name (fn [event]
                                          (put! event-stream event)))))

(defn dispatch-event!
  [event event-mappings]
  (doseq [event-mapping event-mappings]
    (when ((:condition event-mapping) event)
      (put! control-stream ((:action event-mapping) event)))))

(defn controller-action!
  [[command data] controls]
  (doseq [control (filter #(= command (:command %)) controls)]
    ((:action control) data)))

(defn event-loop
  [event-mappings controls]
  
  (go
    (while true
      (dispatch-event! (<! event-stream) event-mappings)))

  (go
    (while true
      (controller-action! (<! control-stream) controls))))

(defn renderer
  [root]
  (add-watch
   app-state
   :renderer
   (fn [key reference old-value new-value]
     (let [root-node (.querySelector js/document "#antares")
           new-dom (render-html root new-value)]
       (doseq [component @registered-components]
         (component-will-update component))
       (set! (.-innerHTML root-node) new-dom)
       (doseq [component @registered-components]
         (component-did-update component))))))

;; ASYNC
(defn get
  [request]
  (ajax/GET (-> request :uri) {:params (request :params)
                               :handler (request :handler)}))

(defn post
  [request]
  (ajax/POST (-> request :uri) {:params (request :params)
                                :handler (request :handler)}))

