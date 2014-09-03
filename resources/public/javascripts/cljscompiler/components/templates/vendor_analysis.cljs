(ns components.templates.vendor-analysis
  (:require [antares.core :as antares]))

(def buyer-score
  (antares/stateless-component
   {:ident :buyer-score

    :render (fn [data]
              [:div.buyer-score
               [:div.buyer-score-section.very-below-average]
               [:div.buyer-score-section.below-averge]
               [:div.buyer-score-section.good-value]
               [:div.buyer-score-section.great-value]
               [:p (-> data :buyer-score)]])

    :style [:div.buyer-score
            [:div.buyer-score-section
             {:width "50px"
              :height "50px"}]]}))

(def vendor-analysis
  (antares/stateful-component
   {:ident :vendor-analysis

    :render (fn [data]
              [:div.vendor-analysis
               (for [vendor (data :vendors)]
                 (antares/render-html buyer-score (data :buyer-score)))])

    :style []

    :event-mappings []

    :controls []}))
