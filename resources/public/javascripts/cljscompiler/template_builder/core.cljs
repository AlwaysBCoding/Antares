(ns template-builder.core
  (:require [antares.core :as antares]
            [antares.postrender :as postrender]))

;; DATA WATCH FUNCTIONS
(def compile-template!
  (fn []
    (let [template (get-in @antares/app-state [:html-fn])
          test-data (get-in @antares/app-state [:test-data])]
      (antares/post "http://localhost:8989/compile-template"
                    {:params {:compile-data test-data
                              :template template}
                     :handler (fn [response]
                                (antares/update-cursor [:compiled-template] (fn [old-value] response)))}))))

(def compile-css!
  (fn []
    (let [css-data (get-in @antares/app-state [:css-data])
          target-node (.querySelector js/document ".template-css-render")]
      (set! (.-innerHTML target-node) (antares/compile-css css-data)))))

;; HTML FN
(antares/create-component {:ident :html-fn
                           :data-type "string"
                           :app-cursor [:html-fn]
                           :dom-cursor "#html-fn"
                           :render-fn (fn [data]
                                        [:textarea data])
                           :post-render-fn (postrender/textarea->codemirror [:html-fn] "#html-fn textarea")})

;; CSS DATA
(antares/create-component {:ident :css-data
                           :data-type "string"
                           :app-cursor [:css-data]
                           :dom-cursor "#css-data"
                           :render-fn (fn [data]
                                        [:textarea data])
                           :post-render-fn (postrender/textarea->codemirror [:css-data] "#css-data textarea")})

;; TEST DATA
(antares/create-component {:ident :test-data
                           :data-type "string"
                           :app-cursor [:test-data]
                           :dom-cursor "#test-data"
                           :render-fn (fn [data]
                                        [:textarea data])
                           :post-render-fn (postrender/textarea->codemirror [:test-data] "#test-data textarea")})

;; Compiled Template HTML
(antares/create-component {:ident :compiled-template
                           :data-type "string"
                           :app-cursor [:compiled-template]
                           :dom-cursor "#compiled-template-render"
                           :initialize-fn (fn [] [:div.template])
                           :render-fn (fn [data]
                                        (antares/read-string data))})

;; Save Template Button
(antares/create-component {:ident :save-template-button
                           :data-type "string"
                           :app-cursor [:save-template-button-text]
                           :dom-cursor "#save-template-action"
                           :initialize-fn (fn [] "Save Template")
                           :render-fn (fn [data]
                                        [:div {:class "ui button"} data])})

(antares/create-data-watcher {:ident :compile-template-from-html
                              :app-cursor [:html-fn]
                              :watch-fn compile-template!})

(antares/create-data-watcher {:ident :compile-template-from-test-data
                              :app-cursor [:test-data]
                              :watch-fn compile-template!})

(antares/create-data-watcher {:ident :compile-css-data
                             :app-cursor [:css-data]
                             :watch-fn compile-css!})

;; ;; Save Button
;; (defn save-template
;;   [event]
;;   (let [template-id 17592186045418
;;         html-fn (get-in @antares/app-state [:dynamic-html])
;;         css-data (get-in @antares/app-state [:dynamic-css])
;;         test-data (get-in @antares/app-state [:dynamic-test-data])]
;;     (antares/async {:method "POST"
;;                     :uri (str "http://localhost:8989/template/" template-id "/save")
;;                     :params {:html-fn html-fn
;;                              :css-data css-data
;;                              :test-data test-data}
;;                     :handler (fn [response]
;;                                (.log js/console response))})))

;; (antares/data-bind [:dynamic-css] ".template-css-render" (fn [data]
;;                                                            (antares/render-css data)))

;; (antares/bind-event "#save-template" "click" (fn [event]
;;                                                (save-template event)))

;; REPL

#_
(
 (require 'weasel.repl.websocket)
 (cemerick.piggieback/cljs-repl
  :repl-env (weasel.repl.websocket/repl-env
             :ip "0.0.0.0" :port 9001))
)
