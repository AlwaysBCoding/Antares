(ns sandbox.core
  (:require [antares.core :as antares]))

(antares/data-bind '([:firstname] [:lastname])
                   ".display-name"
                   (fn [[firstname lastname]]
                     (str firstname " " lastname)))

(antares/bind-event ".input-first-name"
                    "input"
                    (fn [event]
                      (antares/update-cursor [:firstname] (.-value (.-target event)))))

(antares/bind-event ".input-last-name"
                    "input"
                    (fn [event]
                      (antares/update-cursor [:lastname] (.-value (.-target event)))))
