(ns cljs.hackpad
  (:require [antares.core :as antares]
            [components.color-picker :as color-picker]))

(def root
  (antares/component
   {:ident :root
    :render (fn [data]
              [:div.container
               [:h1 "Hello World!"]
               (antares/render-html color-picker/color-picker {:colors [{:color "red"}
                                                                        {:color "lime"}
                                                                        {:color "blue"}]})])
    :style [:div.container
            (:style color-picker/color-picker)]

    :event-mappings (concat
                     []
                     (:event-mappings color-picker/color-picker))

    :controls (concat
               [{}]
               (:controls color-picker/color-picker))}))

(antares/bind root [] "#antares")
(antares/renderer root)
(antares/event-loop (:event-mappings root) (:controls root))
