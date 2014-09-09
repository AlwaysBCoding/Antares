(ns cljs.hackpad
  (:require [antares.core :as antares]
            [components.codeeditor :as code-editor]
            [components.tabular :as tabular]
            [components.templates.vendoranalysis :as vendor-analysis]))

(antares/post {:uri "http://localhost:8989/transit-test"
               :params "{:data \"test-data\"}"})

(reset! antares/app-state {:root

                           {:query-editor
                            {:display "Query"}

                            :query-response
                            {:response #{[123 "Something"] [456 "Something Else"]}}

                            :query-mapping
                            {:display "Query Mapping Fn"}

                            :query-mapping-result
                            {:display "Something..."}

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
               [:div.query-editor
                [:h1 "Query Editor"]
                (antares/render-html code-editor/code-editor (-> data :root :query-editor))]
               [:div.query-response
                [:h1 "Query Response"]
                (antares/render-html tabular/matrix-table (-> data :root :query-response))]
               [:div.query-mapping
                [:h1 "Query Mapping"]
                (antares/render-html code-editor/code-editor (-> data :root :query-mapping))]
               [:div.query-mapping-result
                [:h1 "Query Mapping Result"]
                (antares/render-html tabular/raw-data (-> data :root :query-mapping-result))]
               [:div.template
                [:h1 "Template"]
                (antares/render-html vendor-analysis/vendor-analysis (-> data :root :vendor-analysis))]])

    :style [:div.container
            {:margin-top "25px"}
            [:h1 {:font-family "museo-slab"
                  :font-weight "900"
                  :border-bottom "1px solid gray"}]
            (:style vendor-analysis/vendor-analysis)]

    :event-mappings (concat [] (:event-mappings vendor-analysis/vendor-analysis))

    :controls (concat
               [{:command :update-editor
                 :action (fn [data]
                           (cond
                            (antares/has-ancestor-with-class? (-> data :event .-target) "query-editor")
                            (antares/cursor->value [:root :query-editor] {:display (data :value)})
                            (antares/has-ancestor-with-class? (-> data :event .-target) "query-mapping")
                            (antares/cursor->value [:root :query-mapping] {:display (data :value)})))}]
               (:controls vendor-analysis/vendor-analysis)
               (:controls code-editor/code-editor))}))

(antares/bind root [] "#antares")

(antares/render-loop root)
(antares/event-loop (:event-mappings root) (:controls root))

(antares/on-transition
 :query-database
 [:root :query-editor]
 (fn [key reference old-value new-value]
   (if (not= (get-in old-value [:root :query-editor]) (get-in new-value [:root :query-editor]))
     (antares/post {:uri "http://localhost:8989/datomic/query"
                    :params {:query (-> new-value :root :query-editor :display antares/string->data)}
                    :handler (fn [response]
                               (antares/cursor->value [:root :query-response :response] (antares/string->data response)))}))))

(antares/on-transition
 :query-mapping-test
 [:root :query-mapping]
 (fn [key reference old-value new-value]
   (if (not= (get-in old-value [:root :query-mapping]) (get-in new-value [:root :query-mapping]))
     (antares/cursor->value [:root :query-mapping-result] {:display "this works..."}))))
