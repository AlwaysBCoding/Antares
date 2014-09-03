(ns cljs.hackpad
  (:require [antares.core :as antares]
            [components.codeeditor :as code-editor]
            [components.templates.vendoranalysis :as vendor-analysis]))

(reset! antares/app-state {:root

                           {:code-editor
                            {:display "Hello Code!"}
                            
                            :vendor-analysis
                            {:active-vendor {}
                             :vendors [{:name "Kelly Produce"
                                        :buyer-score 40
                                        :deliveries 21
                                        :last-month "$4,250"
                                        :key-opportunities [{:display "Vendor Consolidation"}
                                                            {:display "Online Ordering"}
                                                            {:display "Reduce Deliveries"}
                                                            {:display "Pay Earlier"}]}

                                       {:name "City Meats"
                                        :buyer-score 60
                                        :deliveries 12
                                        :last-month "$4,250"
                                        :key-opportunities [{:display "Limit Case Breaking"}
                                                            {:display "Pay Earlier"}]}

                                       {:name "American Foods"
                                        :buyer-score 25
                                        :deliveries 25
                                        :last-month "$4,250"
                                        :key-opportunities [{:display "Vendor Consolidation"}
                                                            {:display "Limit Weekend Deliveries"}
                                                            {:display "Eliminate 2x day"}
                                                            {:display "Deliveries"}]}

                                       {:name "Johnson Seafood"
                                        :buyer-score 80
                                        :deliveries 21
                                        :last-month "$4,250"
                                        :key-opportunities [{:display "Increase Seasonal Buying"}
                                                            {:display "None"}]}]}}})

(def root
  (antares/stateful-component
   {:ident :root

    :render (fn [data]
              [:div.container
               (antares/render-html code-editor/code-editor (-> data :root :code-editor))
               (antares/render-html vendor-analysis/vendor-analysis (-> data :root :vendor-analysis))])

    :style [:div.container
            {:margin-top "25px"}
            (:style vendor-analysis/vendor-analysis)]

    :event-mappings (concat [] (:event-mappings vendor-analysis/vendor-analysis))

    :controls (concat
               [{:command :update-editor
                 :action (fn [data]
                           (antares/cursor->value [:root :code-editor] {:display (data :value)}))}]
               (:controls vendor-analysis/vendor-analysis)
               (:controls code-editor/code-editor))}))

(antares/bind root [] "#antares")
(antares/renderer root)
(antares/event-loop (:event-mappings root) (:controls root))

(antares/on-transition
 :query-database
 [:root :code-editor]
 (fn [key reference old-value new-value]
   (if (not= old-value new-value)
     (js/console.log "TRANSITION ACTIVATED"))))
