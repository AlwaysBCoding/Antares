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

                                (.on codemirror "keydown" (fn [self event]
                                                            (if (and
                                                                 (= (.-keyCode event) 13)
                                                                 (.-shiftKey event))
                                                              (antares/emit-control! [:update-editor {:event event
                                                                                                      :value (.getValue self)}])))))))

    :style []

    :event-mappings []

    :controls []}))
