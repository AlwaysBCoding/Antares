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
                               [:h1 {:color "orange"}]]}))

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
                      :render (fn [data])
                      :styles []}))

(antares/bind nav-list [:nav-list] "#nav-list")
(antares/bind code-editor [:code-editor] "#code-editor")

(antares/bind antares/app-state-detective [] "#app-state-detective")
(antares/bind antares/registered-components-detective [] "#registered-components-detective")
(antares/bind antares/mounted-components-detective [] "#mounted-components-detective")
