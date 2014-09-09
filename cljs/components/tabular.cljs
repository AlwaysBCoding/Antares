(ns components.tabular
  (:require [antares.core :as antares]))

(def matrix-table
  (antares/stateful-component
   {:ident :matrix-table

    :render (fn [data]
              [:div.matrixtable
               [:table.ui.table.segment
                [:thead]
                [:tbody
                 (for [row (data :response)]
                   [:tr
                    (for [column row]
                      [:td column])])]]])

    :style []}))

(def raw-data
  (antares/stateless-component
   {:ident :raw-data

    :render (fn [data]
              (js/console.log (pr-str data))
              [:pre (data :display)])

    :style []}))
