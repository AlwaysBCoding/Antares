(ns antares.postrender
  (:require [antares.core :as antares]))

;; Convert a textarea to a codemirror component that's data-bound on blur to the cursor
;; Takes a cursor + a dom-cursor that must be a textarea
;; Takes an optional map of codemirror options
(defn textarea->codemirror
  ([component-binding]
     (textarea->codemirror component-binding {"theme" "solarized light"
                                              "mode" "clojure"
                                              "matchBrackets" true
                                              "lineNumbers" true}))
  ([component-binding options]
     (let [codemirror (.fromTextArea js/CodeMirror (.querySelector js/document (str (-> component-binding :dom-cursor) " .code-editor textarea")) {})]
       (doseq [[option-key option-value] options]
         (.setOption codemirror option-key option-value))
       (.on codemirror "blur" (fn [self event]
                                (antares/cursor->value (conj (-> component-binding :app-cursor) :code-editor) (.getValue self)))))))
