(ns refsareblind.test
  (:require [antares.core :as antares]))

;; GLOBAL STATE
(reset! antares/app-state {:sports [{:display "NBA"}
                                    {:display "NFL"}
                                    {:display "EPL"}
                                    {:display "MLB"}
                                    {:display "NHL"}]
                           :active-sport ""
                           :active-team ""
                           :active-sport-teams-list []
                           :teams {:nba [{:display "Atlanta Hawks"}
                                         {:display "Charlotte Hornets"}
                                         {:display "Miami Heat"}
                                         {:display "Orlando Magic"}
                                         {:display "Washington Wizards"}]
                                   :nfl [{:display "Dallas Cowboys"}
                                         {:display "New York Giants"}
                                         {:display "Philadelphia Eagles"}
                                         {:display "Washington Redskins"}]
                                   :nhl [{:display "New York Islanders"}
                                         {:display "New York Rangers"}
                                         {:display "Washington Capitals"}]
                                   :mlb [{:display "Boston Red Sox"}
                                         {:display "New York Yankees"}
                                         {:display "Tampa Bay Rays"}
                                         {:display "Toronto Blue Jays"}]
                                   :epl [{:display "Tottenham"}
                                         {:display "Everton"}
                                         {:display "Manchester United"}
                                         {:display "Chelsea"}]}})

;; DEFINE COMPONENTS
(def sport-item
  (antares/component {:ident :sport-item
                      :render (fn [data]
                                [:div.sport.item
                                 [:div.sport.content (-> data :display)]])
                      :style [:div.sport
                              [:div.content {:color "red"}]]}))

(def sports-list
  (antares/component {:ident :sports-list
                      :render (fn [data]
                                [:div.sports-list
                                 [:div.ui.divided.list
                                  (for [sport data]
                                    (antares/render-html sport-item sport))]])
                      :style [:div.sports-list
                              {:cursor "pointer"}
                              (-> sport-item :style)]}))

(def active-sport
  (antares/component {:ident :active-sport
                      :render (fn [data]
                                [:div.active-sport
                                 [:h1 (-> data :display)]])
                      :component-did-update (fn [self] (.log js/console (-> self :ident)))}))

(def team-item
  (antares/component {:ident :team-item
                      :render (fn [data]
                                [:div.team.item
                                 [:div.team.content (-> data :display)]])
                      :stlye [:div.sport
                              [:div.content {:color "orange"}]]}))

(def active-sport-active-team
  (antares/component {:ident :active-sport-active-team
                      :render (fn [data]
                                [:div.active-sport-active-team
                                 [:h1 (-> data :display)]])}))

(def active-sport-teams-list
  (antares/component {:ident :active-sport-team-list
                      :render (fn [data]
                                [:div.team-list
                                 [:div.ui.divided.list
                                  (for [team data]
                                    (antares/render-html team-item team))]])
                      :style [:div.team-list
                              {:cursor "pointer"}
                              (-> team-item :style)]}))

(def root
  (antares/component {:ident :root
                      :subcomponents [active-sport]
                      :render (fn [data]
                                [:h1 "Refs Are Blind Test App"]
                                [:div.container.ui.grid
                                 [:div.row
                                  [:div.column.wide.four
                                   (antares/render-html active-sport (-> data :active-sport))
                                   (antares/render-html sports-list (-> data :sports))]
                                  [:div.column.wide.four
                                   (antares/render-html active-sport-active-team (-> data :active-team))
                                   (antares/render-html active-sport-teams-list (-> data :active-sport-teams-list))]]])
                      :style [:div.container
                              (-> active-sport :style)
                              (-> sports-list :style)
                              (-> active-sport-teams-list :style)]}))

;; BIND COMPONENTS
(antares/bind root [] "#antares")

;; HANDLE EVENTS
(defn event-mappings
  [event]
  (cond
   (and (= (-> event .-type) "click")
        (.contains (-> event .-target .-classList) "sport")) [:activate-sport {:display (-> event .-target .-textContent)
                                                                               :teams-cursor (case (-> event .-target .-textContent)
                                                                                               "NBA" [:teams :nba]
                                                                                               "NHL" [:teams :nhl]
                                                                                               "MLB" [:teams :mlb]
                                                                                               "NFL" [:teams :nfl]
                                                                                               "EPL" [:teams :epl])}]
  (and (= (-> event .-type) "click")
       (.contains (-> event .-target .-classList) "team")) [:activate-team {:display (-> event .-target .-textContent)}]
  :else [:no-action {}]))

(defn controller
  [[control data]]
  (cond
   (= control :activate-sport) (do (antares/cursor->value [:active-sport] {:display (-> data :display)})
                                   (antares/cursor->value [:active-sport-teams-list] (get-in @antares/app-state (-> data :teams-cursor)))
                                   (antares/cursor->value [:active-team] ""))
   (= control :activate-team) (do (antares/cursor->value [:active-team] {:display (-> data :display)}))))

;; EVENT LOOP + RENDERER
(antares/event-loop event-mappings controller)
(antares/renderer root)
