(ns refsareblind.test
  (:require [antares.core :as antares]))

;; GLOBAL STATE
(reset! antares/app-state {:sports [{:display "NBA"}
                                    {:display "NFL"}
                                    {:display "EPL"}
                                    {:display "MLB"}
                                    {:display "NHL"}]
                           :active-sport ""})

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
                                 [:h1 (-> data :display)]])}))

(def root
  (antares/component {:ident :root
                      :render (fn [data]
                                [:h1 "Refs Are Blind Test App"]
                                [:div.container
                                 (antares/render-html active-sport (-> data :active-sport))
                                 (antares/render-html sports-list (-> data :sports))])
                      :style [:div.container
                              (-> active-sport :style)
                              (-> sports-list :style)]}))

;; BIND COMPONENTS
(antares/bind root [] "#antares")

;; HANDLE EVENTS
(defn event-mappings
  [event]
  (cond
   (and (= (-> event .-type) "click")
        (.contains (-> event .-target .-classList) "sport")) [:activate-sport {:display (-> event .-target .-textContent)}]
   :else [:no-action {}]))

(defn controller
  [[control data]]
  (cond
   (= control :activate-sport) (antares/cursor->value [:active-sport] data)))

;; EVENT LOOP + RENDERER
(antares/event-loop event-mappings controller)
(antares/renderer root)
