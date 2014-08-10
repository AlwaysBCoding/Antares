(ns sandbox.core
  (:require [antares.core :as antares]))

(antares/create-component {:app-cursor [:items]
                           :dom-cursor ".items"
                           :interactions {}
                           :render-fn (fn [[& data]]
                                        (map (fn [datum] [:li.item (-> datum)]) data))})

(.addEventListener (.querySelector js/document ".add-item")
                   "click"
                   (fn []
                     (swap! antares/app-state update-in [:items] conj "item")))
