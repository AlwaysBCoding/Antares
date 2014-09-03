(ns components.codeeditor
  (:require [antares.core :as antares]))

(def code-editor
  (antares/stateful-component
   {:ident :code-editor

    :render (fn [data]
              [:div.code-editor
               [:textarea (data :display)]])

    :component-did-update (fn [self]
                            (let [nodelist (antares/nodelist->array (js/document.querySelectorAll ".code-editor textarea"))
                                  codemirrors (map #(js/CodeMirror.fromTextArea %) nodelist)
                                  options {"theme" "solarized light"
                                            "mode" "clojure"
                                            "matchBrackets" true
                                            "lineNumbers" true}]

                              (doseq [codemirror codemirrors]
                                (doseq [[option-key option-value] options]
                                  (.setOption codemirror option-key option-value))

                                (.on codemirror "blur" (fn [self event]
                                                         (antares/emit-event! [:update-editor {:value (.getValue self)}]))))))

    :style []

    :event-mappings []

    :controls []}))
