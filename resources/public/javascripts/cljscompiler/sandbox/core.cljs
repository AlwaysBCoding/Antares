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


(antares/data-bind '([:teams :nba] [:teams :nfl])
                   '(".sportsTeams1" ".sportsTeams2")
                   (fn [[nba-team nfl-team]]
                     (str nba-team "--" (.toUpperCase nfl-team))))

(reset! antares/app-state {:firstname "jordan"
                           :lastname  "leigh"
                           :teams {:nba "wizards"
                                   :nfl "redskins"}})

(js/setTimeout (fn []
                 (reset! antares/app-state {:firstname "dexter"
                                            :lastname "jackson"
                                            :teams {:nba "bulls"
                                                    :nfl "bears"}})) 2500)
