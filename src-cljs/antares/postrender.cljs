(ns antares.postrender
  (:require [antares.core :as antares]))

;; Convert a textarea to a codemirror component that's data-bound on blur to the cursor
;; Takes a cursor + a dom-cursor that must be a textarea
;; Takes an optional map of codemirror options
(defn textarea->codemirror
  ([app-cursor dom-cursor]
     (textarea->codemirror app-cursor dom-cursor {"theme" "solarized light"
                                                  "mode" "clojure"
                                                  "matchBrackets" true
                                                  "lineNumbers" true}))
  ([app-cursor dom-cursor options]
     (fn []
       (let [codemirror (.fromTextArea js/CodeMirror (.querySelector js/document dom-cursor) {})]
         (doseq [[option-key option-value] options]
           (.setOption codemirror option-key option-value))
         (.on codemirror "blur" (fn [self event]
                                  (antares/update-cursor
                                   app-cursor
                                   (fn [old-value] (.getValue self)))))))))

