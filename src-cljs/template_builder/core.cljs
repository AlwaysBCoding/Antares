(ns template-builder.core
  (:require [antares.core :as antares]
            [antares.postrender :as postrender]))

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

;; ;; Arrange Components

;; (antares/data-bind [:dynamic-html] ".template-html-render" (fn [template]
;;                                                              (->> template
;;                                                                   (antares/compile-template (get-in @antares/app-state [:dynamic-test-data])))))

;; (antares/data-bind [:dynamic-css] ".template-css-render" (fn [data]
;;                                                            (antares/render-css data)))

;; (antares/data-bind [:compiled-html] ".template-render" (fn [template]
;;                                                          (->> template
;;                                                               (antares/render-html))))

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
