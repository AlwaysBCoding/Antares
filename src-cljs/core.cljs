(ns sandbox.core
  (:require [antares.core :as antares]))

(antares/create-component {:app-cursor [:shopping-list :items]
                           :dom-cursor ".items"
                           :interactions {}
                           :render-fn (fn [[& data]]
                                        (map (fn [datum] [:li.item (-> datum :name)]) data))})
