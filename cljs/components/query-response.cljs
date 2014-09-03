(ns components.queryresponse
  (:require [antares.core :as antares]))

(def query-response
  (antares/stateful-component
   {:ident :query-response

    :render (fn [data]
              [:div.query-response
               [:table.ui.table.segment
                [:thead]
                [:tbody
                 (for [row (data :response)]
                   [:tr
                    (for [column row]
                      [:td column])])]]])

    :style []}))
