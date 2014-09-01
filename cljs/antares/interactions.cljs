(ns antares.interactions
  (:require [antares.core :as antares]
            [goog.dom :as gcc-dom]
            [goog.events :as gcc-events]
            [goog.dom.classes :as gcc-classes]
            [goog.dom.dataset :as gcc-dataset]))

(defn add-class
  [element class]
  (gcc-classes/add element class))

(defn remove-class
  [element class]
  (gcc-classes/remove element class))

(defn listen
  [component-binding event-type handler]
  (gcc-events/listen
   (.querySelector js/document (antares/get-attr component-binding :dom-cursor))
   event-type
   handler
   true))

(defn get-data
  [element attr]
  (gcc-dataset/get element attr))
