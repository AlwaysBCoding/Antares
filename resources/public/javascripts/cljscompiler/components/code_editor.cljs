(ns components.code-editor
  (:require [antares.core :as antares]))

(def code-editor
  (antares/stateful-component
   {:ident :code-editor

    :render (fn [data]
              [:div.code-editor
               [:textarea (data :display)]])

    :component-did-update (fn [self]
                            (let [codemirror (js/CodeMirror.fromTextArea (js/document.querySelector ".code-editor textarea") {})
                                  optiojns {"theme" "solarized light"
                                            "mode" "clojure"
                                            "matchBrackets" true
                                            "lineNumbers" true}]
                              (doseq [[option-key option-value] options]
                                (.setOption codemirror option-key option-value))
                              (.on codemirror "blur" (fn [self event]
                                                       (antares/dispatch-event! [:say-hello {}])))))

    :style []

    :event-mappings []

    :controls [{:command :say-hello
                :action (js/console.log "hello!!")}]}))
