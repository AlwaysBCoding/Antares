(ns components.color-picker
  (:require [antares.core :as antares]))

(def color-swatch
  (antares/stateless-component
   {:ident :color-swatch

    :render (fn [data]
              (if (= (data :active-color) (data :color))
                [:div.color-swatch.active
                 {:data-color (-> data :color :color)}]
                [:div.color-swatch
                 {:data-color (-> data :color :color)}]))

    :style [:div.color-swatch
            {:height "40px"
             :width "40px"
             :background-color "lime"
             :float "left"
             :margin-right "10px"
             :cursor "pointer"
             :box-sizing "border-box"}
            [:&:last-child
             {:margin-right "0px"}]
            [:&.active
             {:border "3px solid red"}]]}))

(def active-color-display
  (antares/stateless-component
   {:ident :active-color-display

    :render (fn [data]
              [:div.active-color
               [:p
                [:span "Active Color: "]
                [:span.active-color-name (.toUpperCase (:color data))]]])

    :style [:div.active-color
            [:span.active-color-name
             {:color "red"
              :font-weight "bold"}]]}))

(def color-picker
  (antares/stateful-component
   {:ident :color-picker
    :render (fn [data]
              [:div.color-picker
               [:h1 "Color Picker"]
               (antares/render-html active-color-display (data :active-color))
               [:div.color-swatches
                (for [color (data :colors)]
                  (antares/render-html color-swatch {:color color
                                                     :active-color (data :active-color)}))]])

    :style [:div.color-picker
            (:style active-color-display)
            [:div.color-swatches
             (:style color-swatch)]]

    :event-mappings [{:condition (fn [event]
                                   (and
                                    (= (-> event .-type) "click")
                                    (antares/has-class? (-> event .-target) "color-swatch")))
                      :action (fn [event]
                                [:activate-color-swatch {:target (-> event .-target)}])}]
    
    :controls [{:command :activate-color-swatch
                :action (fn [data]
                          (antares/cursor->value
                           [:root :color-picker :active-color]
                           {:color (antares/get-data (data :target) "color")}))}]}))
