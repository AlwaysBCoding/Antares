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
            [garden.core :as css-renderer]
            [antares.repl :as repl]))

(defn string->data
  [string]
  (cljs-reader/read-string string))

(def app-state (atom {}))
(def registered-components (atom []))

(defprotocol LifeCycle
  (initialize-state [self])
  (component-will-mount [self])
  (componnet-did-mount [self])
  (component-will-update [self])
  (component-did-update [self])
  (component-will-unmount [self]))

(defprotocol Registerable
  (register-component [self]))

(defprotocol Renderable
  (render-html [self data])
  (render-css [self]))

(defprotocol Mountable
  (mount-component [self dom-cursor])
  (unmount-component [self]))

(defrecord Component
  [ident
   render-fn
   css-data]
  
  Registerable
  (register-component [self]
    (swap! registered-components conj self))

  Renderable
  (render-html [self data]
    (html-renderer/html ((-> self :render-fn) data)))
  (render-css [self]
    (css-renderer/css (-> self :css-data)))

  Mountable
  (mount-component [self dom-cursor]
    (dom/appendChild (.querySelector js/document dom-cursor) (dom/htmlToDocumentFragment (render-html self {})))
    (let [text-node (dom/createTextNode (render-css self))
          style-node (dom/createDom "style" text-node)]
      (dom/appendChild (.querySelector js/document "#antares-styles") style-node)))
  (unmount-component [self])

  LifeCycle
  (initialize-state [self])
  (component-will-mount [self])
  (component-did-mount [self])
  (component-will-update [self])
  (component-did-update [self])
  (component-will-unmount [self]))

(defn component
 [source-map]
 (let [component (map->Component source-map)]
   (register-component component)
   component))
