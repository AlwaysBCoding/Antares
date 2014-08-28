(ns template-builder.core
  (:require [antares.core :as antares]))

;; INITIAL STATE
(reset! antares/app-state {:tabs [{:display "HTML FN"}
                                  {:display "CSS"}
                                  {:display "TEST DATA"}]
                           :active-tab {}})

;; DEFINE COMPONENTS
(def tab-list
  (antares/component
   {:ident :tab-list
    :render (fn [data]
              [:div.tab-list.ui.divided.horizontal.list
               (for [tab data]
                 (if (= tab (get-in @antares/app-state [:active-tab]))
                   [:div.tab.item.active (-> tab :display)]
                   [:div.tab.item (-> tab :display)]))])
    :style [:div.tab-list
            {:cursor "pointer"}
            [:div.tab
             [:&.active {:color "red"}]]]}))

(def root
  (antares/component
   {:ident :root
    :render (fn [data]
              [:div.container.ui.grid
               [:div.row
                [:div.column.wide.sixteen
                 [:h1 "Template Builder"]]]
               [:div.row
                [:div.column.wide.six
                 (antares/render-html tab-list (-> data :tabs))]]])
    :style [:div.container
            (-> tab-list :style)]}))

;; BIND COMPONENTS
(antares/bind root [] "#antares")

;; EVENT MAPPINGS
(defn event-mappings
  [event]
  (cond
   (and (= (-> event .-type) "click")
        (.contains (-> event .-target .-classList) "tab")) [:activate-tab {:display (-> event .-target .-textContent)}]
   :else [:no-action {}]))

;; EVENT CONTROLLER
(defn controller
  [[control data]]
  (cond
   (= control :activate-tab) (antares/cursor->value [:active-tab] data)))

;; EVENT LOOP
(antares/event-loop event-mappings controller)

;; RENDERER
(antares/renderer root)
