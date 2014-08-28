(ns antares.core
  (:require-macros [cljs.core.async.macros :refer (go go-loop)]
                   [hiccups.core :as html-renderer])
  (:require [goog.dom :as dom]
            [goog.dom.classes :as classes]
            [goog.events :as events]
            [cljs.reader :as cljs-reader]
            [clojure.string :as str]
            [ajax.core :as ajax]
            [cljs.core.async :refer (chan <! >! put!)]
            [hiccups.runtime :as hiccupsrt]
            [garden.core :as css-renderer]))

(defn string->data
  [string]
  (cljs-reader/read-string string))

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
   style]
  
  Registerable
  (register-component [self]
    (swap! registered-components conj self))

  Renderable
  (render-html [self data]
    (if-let [render-fn (-> self :render)]
      (html-renderer/html (render-fn data))))

  (render-css [self]
    (if-let [css-data (-> self :style)]
      (css-renderer/css css-data)))

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
      (component-did-mount component app-cursor dom-cursor))
    (component-did-mount component app-cursor dom-cursor)))

;; EVENT DISPATCHER
(def event-list ["click" "keydown" "focusout"])
(def event-stream (chan))
(def control-stream (chan))

(let [root-node (.querySelector js/document "body")]
  (doseq [event-name event-list]
    (events/listen root-node event-name (fn [event]
                                          (put! event-stream event)))))

(defn event-loop
  [event-mappings controller]
  
  (go
    (while true
      (>! control-stream (event-mappings (<! event-stream)))))

  (go
    (while true
      (controller (<! control-stream)))))

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
