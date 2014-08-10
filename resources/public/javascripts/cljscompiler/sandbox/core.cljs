(ns sandbox.core
  (:require [antares.core :as antares]))

(antares/data-bind [:firstname]
                    ".firstname"
                    (fn [data] (.toUpperCase data)))

(antares/data-bind [:lastname]
                   '(".lastname" ".lastname2")
                    (fn [data] data))

(antares/data-bind '([:firstname] [:lastname])
                   ".displayName"
                   (fn [[firstname lastname]]
                     (str (.toUpperCase firstname) " " lastname)))

(reset! antares/app-state {:firstname "jordan"
                           :lastname  "leigh"})

(js/setTimeout (fn []
                 (reset! antares/app-state {:firstname "dexter"
                                            :lastname "jackson"})) 2500)
