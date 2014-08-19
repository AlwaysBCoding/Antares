(ns template-builder.core
  (:require-macros [hiccups.core :as renderer])
  (:require [antares.core :as antares]
            [cljs-http.client :as http]
            [hiccups.runtime :as hiccupsrt]))

;; Helper Functions
(defn textarea->codemirror
  [app-cursor dom-cursor options]
  (fn []
    (let [codemirror (.fromTextArea js/CodeMirror (.querySelector js/document dom-cursor) options)]
      (.on codemirror "blur" (fn [self event]
                               (antares/update-cursor
                                app-cursor
                                (fn [old-value] (.getValue self))))))))

;; HTML Binding
(renderer/defhtml render-dynamic-html
  [data]
  (if (not-empty data)
    [:textarea data]
    [:textarea ""]))

(def dynamic-html
  {:app-cursor [:dynamic-html]
   :dom-cursor ".dynamic-html"
   :render-fn render-dynamic-html
   :post-render-fn (textarea->codemirror [:dynamic-html] ".dynamic-html textarea" {:mode "clojure"})})

(antares/create-component dynamic-html)

;; CSS Binding

;; Input Data Structure Binding

;; REPL
#_
(
 (require 'weasel.repl.websocket)
 (cemerick.piggieback/cljs-repl
  :repl-env (weasel.repl.websocket/repl-env
             :ip "0.0.0.0" :port 9001))
)
