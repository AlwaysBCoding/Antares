(ns antares.dev
  (:require [antares.core :as antares]))

(def nav-list
  (antares/component {:ident :nav-list
                      :render (fn [data]
                                [:div.nav-list
                                 [:div.ui.horizontal.list
                                  (for [item (-> data :items)]
                                    [:div.item
                                     [:div.content
                                      [:div.header (-> :header item)]
                                      (-> :content item)]])]])
                      :styles [:div.nav-list
                               [:div.header {:color "orange"}]]}))

(def code-editor
  (antares/component {:ident :code-editor
                      :render (fn [data]
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

(def template-editor
  (antares/component {:ident :template-editor
                      :subcomponents [nav-list code-editor]
                      :render (fn [data]
                                [:div.template-editor
                                 [:h1 "Template Editor"]
                                 (antares/render-html nav-list (-> data :nav-list))
                                 (antares/render-html code-editor (-> data :code-editor))])
                      :styles [:div.template-editor
                               (-> nav-list :styles)
                               (-> code-editor :styles)]}))

(antares/bind template-editor [:template-editor] "#template-editor")

(antares/bind antares/app-state-detective [] "#app-state-detective")
(antares/bind antares/registered-components-detective [] "#registered-components-detective")
