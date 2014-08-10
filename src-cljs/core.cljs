(ns sandbox.core
  (:require [antares.core :as antares]))

(antares/data-bind [:display-name] ".display-name" (fn [data] data))

(antares/data-bind [:display-name] ".input-name" (fn [data] data))

(antares/bind-event ".input-name"
                    "input"
                    (fn [event]
                      (antares/update-cursor [:display-name] (.-value (.-target event)))))

(antares/bind-event ".reset-button"
                    "click"
                    (fn [event]
                      (antares/update-cursor [:display-name] "reset!!")))
