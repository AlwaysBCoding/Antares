(ns components.templates.vendoranalysis
  (:require [antares.core :as antares]))

(def buyer-score
  (antares/stateless-component
   {:ident :buyer-score

    :render (fn [data]
              [:div.buyer-score
               [:div.buyer-score-section.very-below-average]
               [:div.buyer-score-section.below-average]
               [:div.buyer-score-section.good-value]
               [:div.buyer-score-section.great-value]
               [:div.marker.buyer-score-marker
                {:style (str "left: " (* 1.85 (data :buyer-score)) "px;")}]])

    :style [:div.buyer-score
            {:height "25px"
             :vertical-align "middle"
             :margin "auto"}
            [:div.buyer-score-section
             {:float "left"
              :width "50px"
              :height "25px"}
             [:&.very-below-average
              {:background-color "red"}]
             [:&.below-average
              {:background-color "orange"}]
             [:&.good-value
              {:background-color "yellow"}]
             [:&.great-value
              {:background-color "green"}]]
            [:div.buyer-score-marker
             {:position "relative"
              :width "0px"
              :height "0px"
              :top "-10px"
              :border-left "12px solid transparent"
              :border-right "12px solid transparent"
              :border-top "25px solid blue"}]]}))

(def vendor-analysis-table
  (antares/stateless-component
   {:ident :vendor-analysis-table

    :render (fn [data]
              [:table.ui.table.vendor-analysis-table
               [:thead
                [:tr
                 [:th "VENDOR"]
                 [:th "BUYER SCORE"]
                 [:th "DELIVERIES"]
                 [:th "LAST MONTH"]
                 [:th "KEY OPPORTUNITIES"]]]
               [:tbody
                (for [vendor (data :vendors)]
                  [:tr.vendor-row
                   {:data-vendor (pr-str vendor)}
                   [:td (vendor :name)]
                   [:td (antares/render-html buyer-score vendor)]
                   [:td (vendor :deliveries)]
                   [:td (vendor :last-month)]
                   [:td [:ul.key-opportunities
                         (for [opportunity (vendor :key-opportunities)]
                           [:li.key-opportunity (opportunity :display)])]]])]])

    :style [:table.vendor-analysis-table
            [:thead
             [:tr
              {:padding-bottom "5px"
               :border-bottom "2px solid black"}]]
            [:tbody
             [:tr
              {:padding-bottom "5px"
               :border-bottom "2px solid black"
               :cursor "pointer"}
              [:&.active
               [:td {:background-color "yellow"}]]]]
            (:style buyer-score)]}))

(def vendor-analysis
  (antares/stateful-component
   {:ident :vendor-analysis

    :render (fn [data]
              [:div.vendor-analysis
               [:div.header
                [:h2
                 [:span.emphasized "Your Vendors."]
                 [:span.unemphasized "Here are your key vendors we analyzed"]]]
               (antares/render-html vendor-analysis-table data)
               [:div.footer
                [:h1 "Key Opportunities"]
                [:p "How can you improve your Buyer Score? We have analyzed each of your vendors and looked for key opportunities for you to change your buying behavior and improve your Buyer Score. Improved Buyer Scores often lead to improved vendor pricing or terms."]
                [:a.learn-more "Learn More"]]])

    :style [:div.vendor-analysis
            [:div.header
             {:font-family "museo-slab"
              :color "rgb(55,58,64)"}
             [:h2
              [:span.emphasized
               {:font-weight "900"
                :margin-right "10px"
                :margin-left "10px"}]]]
            (:style vendor-analysis-table)
            [:div.footer
             {:background-color "rgb(182,210,235)"
              :position "relative"
              :font-family "Futura"}
             [:h1
              {:margin-left "10px"
               :margin-top "10px"}]
             [:p
              {:width "75%"
               :margin "0 auto"}]
             [:a
              {:color "rgb(10,90,177)"
               :text-decoration "underline"
               :cursor "pointer"}
              [:&:after
               {:content "' >'"}]]]]

    :event-mappings []

    :controls []}))
