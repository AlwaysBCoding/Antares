(ns template-builder.core
  (:require [antares.core :as antares]
            [antares.postrender :as postrender]))

;; INITIALIZE FUNCTIONS
(def load-html-fn
  (fn []
    (let [template-id 17592186045418]
      (antares/http-get (str "http://localhost:8989/template/" template-id)
                        {:handler (fn [response]
                                    (antares/cursor->value [:html-fn] (-> response antares/read-string :html-fn)))})
      "Loading...")))

(def load-css-data
  (fn []
    (let [template-id 17592186045418]
      (antares/http-get (str "http://localhost:8989/template/" template-id)
                        {:handler (fn [response] (antares/cursor->value [:css-data] (-> response antares/read-string :css-data)))})
      "Loading...")))

(def load-test-data
  (fn []
    (let [template-id 17592186045418]
      (antares/http-get (str "http://localhost:8989/template/" template-id)
                        {:handler (fn [response] (antares/cursor->value [:test-data] (-> response antares/read-string :test-data)))})
      "Loading...")))

;; DATA WATCH FUNCTIONS
(def compile-template!
  (fn []
    (let [template (get-in @antares/app-state [:html-fn])
          test-data (get-in @antares/app-state [:test-data])]
      (antares/http-post "http://localhost:8989/compile-template"
                         {:params {:compile-data test-data
                                   :template template}
                          :handler (fn [response]
                                     (antares/cursor->value [:compiled-template] response))}))))

(def compile-css!
  (fn []
    (let [css-data (get-in @antares/app-state [:css-data])
          target-node (.querySelector js/document ".template-css-render")]
      (set! (.-innerHTML target-node) (antares/compile-css css-data)))))

;; EVENT ACTIONS
(def save-template!
  (fn [event]
    (let [template-id 17592186045418
          html-fn (get-in @antares/app-state [:html-fn])
          css-data (get-in @antares/app-state [:css-data])
          test-data (get-in @antares/app-state [:test-data])]
      (antares/http-post (str "http://localhost:8989/template/" template-id "/save")
                         {:params {:eid template-id
                                   :html-fn html-fn
                                   :css-data css-data
                                   :test-data test-data}
                          :handler (fn [response] (.log js/console response))}))))

;; COMPONENTS

;; Tab List

;; Template Data Editor
(antares/create-component {:ident :template-data-editor
                           :data-type "map"
                           :app-cursor [:template-data-editor]
                           :dom-cursor "#template-data-editor"
                           :initialize-fn (fn [] {:tabs [{:display "HTML"}
                                                        {:display "CSS"}
                                                        {:display "TEST DATA"}]
                                                 :active-tab {}})
                           :render-fn (fn [data] [:div.ui.horizontal.list
                                                 (map (fn [tab]
                                                        [:div.item
                                                         [:div.content
                                                          [:div.header (-> tab :display)]]]) (-> data :tabs))])})

;; HTML FN
(antares/create-component {:ident :html-fn
                           :data-type "string"
                           :app-cursor [:html-fn]
                           :dom-cursor "#html-fn"
                           :initialize-fn load-html-fn
                           :render-fn (fn [data]
                                        [:textarea data])
                           :post-render-fn (postrender/textarea->codemirror [:html-fn] "#html-fn textarea")})

;; CSS DATA
(antares/create-component {:ident :css-data
                           :data-type "string"
                           :app-cursor [:css-data]
                           :dom-cursor "#css-data"
                           :initialize-fn load-css-data
                           :render-fn (fn [data]
                                        [:textarea data])
                           :post-render-fn (postrender/textarea->codemirror [:css-data] "#css-data textarea")})

;; TEST DATA
(antares/create-component {:ident :test-data
                           :data-type "string"
                           :app-cursor [:test-data]
                           :dom-cursor "#test-data"
                           :initialize-fn load-test-data
                           :render-fn (fn [data]
                                        [:textarea data])
                           :post-render-fn (postrender/textarea->codemirror [:test-data] "#test-data textarea")})

;; Compiled Template HTML
(antares/create-component {:ident :compiled-template
                           :data-type "string"
                           :app-cursor [:compiled-template]
                           :dom-cursor "#compiled-template-render"
                           :initialize-fn (fn [] "[:div.template]")
                           :render-fn (fn [data] (antares/read-string data))})

;; Save Template Button
(antares/create-component {:ident :save-template-button
                           :data-type "string"
                           :app-cursor [:save-template-button-text]
                           :dom-cursor "#save-template-action"
                           :initialize-fn (fn [] "Save Template")
                           :render-fn (fn [data]
                                        [:div {:class "ui button"} data])
                           :interactions [{:event-type "click"
                                           :event-action save-template!}]})

(antares/create-data-watcher {:ident :compile-template-from-html
                              :app-cursor [:html-fn]
                              :watch-fn compile-template!})

(antares/create-data-watcher {:ident :compile-template-from-test-data
                              :app-cursor [:test-data]
                              :watch-fn compile-template!})

(antares/create-data-watcher {:ident :compile-css-data
                              :app-cursor [:css-data]
                              :watch-fn compile-css!})

;; REPL

#_
(
 (require 'weasel.repl.websocket)
 (cemerick.piggieback/cljs-repl
  :repl-env (weasel.repl.websocket/repl-env
             :ip "0.0.0.0" :port 9001))
)
