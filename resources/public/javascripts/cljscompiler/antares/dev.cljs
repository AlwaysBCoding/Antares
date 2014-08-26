(ns antares.dev
  (:require [antares.core :as antares]))

(def comp1
  (antares/component {:ident :comp1
                      :render-fn (fn [data]
                                   [:h1 "Hello from a component"])
                      :css-data [:h1 {:color "red"}]}))

(antares/mount-component comp1 "#test-area")
