(ns template-builder.core
  (:require-macros [hiccups.core :as htmlrenderer])
  (:require [antares.core :as antares]
            [cljs-http.client :as http]
            [hiccups.runtime :as hiccupsrt]))

;; Helper Functions
(defn textarea->codemirror
  ([app-cursor dom-cursor]
     (textarea->codemirror app-cursor dom-cursor {}))
  ([app-cursor dom-cursor options]
     (fn []
       (let [codemirror
             (.fromTextArea js/CodeMirror (.querySelector js/document dom-cursor) options)]
         (.setOption codemirror "theme" "solarized light")
         (.setOption codemirror "mode" "clojure")
         (.setOption codemirror "matchBrackets" true)
         (.setOption codemirror "lineNumbers" true)
         (.on codemirror "blur" (fn [self event]
                                  (antares/update-cursor
                                   app-cursor
                                   (fn [old-value] (.getValue self)))))))))

;; HTML Binding
(htmlrenderer/defhtml render-dynamic-html
  [data]
  (if (not-empty data)
    [:textarea data]
    [:textarea ""]))

(def dynamic-html
  {:app-cursor [:dynamic-html]
   :dom-cursor ".dynamic-html"
   :render-fn render-dynamic-html
   :post-render-fn (textarea->codemirror [:dynamic-html] ".dynamic-html textarea")})

;; CSS Binding
(htmlrenderer/defhtml render-dynamic-css
  [data]
  (if (not-empty data)
    [:textarea data]
    [:textarea ""]))

(def dynamic-css
  {:app-cursor [:dynamic-css]
   :dom-cursor ".dynamic-css"
   :render-fn render-dynamic-css
   :post-render-fn (textarea->codemirror [:dynamic-css] ".dynamic-css textarea")})

;; Input Data Structure Binding
(htmlrenderer/defhtml render-dynamic-test-data
  [data]
  (if (not-empty data)
    [:textarea data]
    [:textarea ""]))

(def dynamic-test-data
  {:app-cursor [:dynamic-test-data]
   :dom-cursor ".dynamic-test-data"
   :render-fn render-dynamic-test-data
   :post-render-fn (textarea->codemirror [:dynamic-test-data] ".dynamic-test-data textarea")})

;; Arrange Components

(antares/create-component dynamic-html)
(antares/create-component dynamic-css)
(antares/create-component dynamic-test-data)

(antares/data-bind [:dynamic-html] ".template-render" (fn [template]
                                                        (->> template
                                                            (antares/compile-template (get-in @antares/app-state [:dynamic-test-data]))
                                                            (antares/render-html))))

(antares/data-bind [:dynamic-css] ".template-css-render" (fn [data]
                                                           (antares/render-css data)))

;; REPL
#_
(
 (require 'weasel.repl.websocket)
 (cemerick.piggieback/cljs-repl
  :repl-env (weasel.repl.websocket/repl-env
             :ip "0.0.0.0" :port 9001))
)
