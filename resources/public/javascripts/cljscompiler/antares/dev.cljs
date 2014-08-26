(ns antares.dev
  (:require [antares.core :as antares]))

(reset! antares/app-state {:nav-list {:items [{:header "Item 1" :content "Content 1"}
                                              {:header "Item 2" :content "Content 2"}
                                              {:header "Item 3" :content "Content 3"}]}})

(def nav-list
  (antares/component {:ident :comp1
                      :render-fn (fn [data]
                                   [:div.nav-list
                                    [:div.ui.horizontal.list
                                     (for [item (-> data :items)]
                                       [:div.item
                                        [:div.content
                                         [:div.header (-> :header item)]
                                         (-> :content item)]])]])
                      :css-data [:div.comp1
                                 [:h1 {:color "orange"}]]}))

(antares/bind nav-list [:nav-list] "#test-area")
