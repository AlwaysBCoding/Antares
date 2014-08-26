(ns antares.dev
  (:require [antares.core :as antares]))

(reset! antares/app-state {:nav-list {:items [{:header "Item 1" :content "Content 1"}
                                              {:header "Item 2" :content "Content 2"}
                                              {:header "Item 3" :content "Content 3"}]}
                           :code-editor "(+ 1 2 3)"})

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

(def code-editor
  (antares/component {:ident :comp2
                      :render-fn (fn [data]
                                   [:div.code-editor
                                    [:textarea data]])
                      :component-did-mount (fn [component app-cursor dom-cursor]
                                             (let [codemirror (.fromTextArea js/CodeMirror (.querySelector js/document (str dom-cursor " .code-editor textarea")))
                                                   options {"theme" "solarized light"
                                                            "mode" "clojure"
                                                            "matchBrackets" "true"
                                                            "lineNumber" true}]
                                               (doseq [[option-key option-value] options]
                                                 (.setOption codemirror option-key option-value))))}))

(antares/bind nav-list [:nav-list] "#test-area")
(antares/bind code-editor [:code-editor] "#test-area2")
