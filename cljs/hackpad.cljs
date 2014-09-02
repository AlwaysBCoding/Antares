(ns cljs.hackpad
  (:require [antares.core :as antares]
            [components.color-picker :as color-picker]))

;; INITIALIZE DATA
(reset! antares/app-state {:root
                           {:color-picker
                            {:colors [{:color "red"}
                                      {:color "lime"}
                                      {:color "blue"}
                                      {:color "orange"}]
                             :active-color {:color "lime"}
                             :color-swatch {}}}})

(def root
  (antares/component
   {:ident :root
    :render (fn [data]
              [:div.container
               (antares/render-html color-picker/color-picker (get-in @antares/app-state [:root :color-picker]))])
    :style [:div.container
            (:style color-picker/color-picker)]

    :event-mappings (concat
                     [{:condition (fn [event] false)
                       :action (fn [event] [:no-action {}])}]
                     (:event-mappings color-picker/color-picker))

    :controls (concat
               [{:command :no-action
                 :action (fn [data] (js/console.log "this will never happen"))}]
               (:controls color-picker/color-picker))}))

(antares/bind root [:root] "#antares")
(antares/renderer root)
(antares/event-loop (:event-mappings root) (:controls root))
