(ns template-builder.core
  (:require-macros [hiccups.core :as renderer])
  (:require [antares.core :as antares]
            [cljs-http.client :as http]
            [hiccups.runtime :as hiccupsrt]))

;; Helper Functions
(defn textarea->codemirror
  [dom-cursor options]
  (fn [] (.fromTextArea js/CodeMirror (.querySelector js/document dom-cursor) options)))

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
   :interactions [{:event-type "blur"
                   :event-selector "textarea"
                   :event-action (fn [event]
                                   (antares/update-cursor
                                    [:dynamic-html]
                                    (fn [old-value] (-> event .-target .-value))))}]})

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
