(ns template-builder.core
  (:require [antares.core :as antares]
            [antares.postrender :as postrender]
            [antares.interactions :as interactions]))

(def tab-list
  (antares/component
   {:ident :tab-list
    :data-type :vector
    :render-data-fn (fn [data]
                      [:div.ui.horizontal.list.tab-list
                       (map (fn [tab]
                              [:div.item
                               [:div.content
                                (if (= (-> tab :name) (-> data :active-tab))
                                  [:div.header.active
                                   {:data-name (-> tab :name)} (-> tab :display)]
                                  [:div.header.inactive
                                   {:data-name (-> tab :name)} (-> tab :display)])]]) (-> data :tabs))])
    :style-data [:div.tab-list
                 [:div.item
                  [:div.content
                   [:div.header {:color "green"}]
                   [:div.header.active {:color "red"}]]]]}))

(def code-editor
  (antares/component
   {:ident :code-editor
    :data-type :string
    :render-data-fn (fn [data]
                      [:div.code-editor
                       [:textarea data]])}))

(def template-editor
  (antares/component
   {:ident :template-editor
    :data-type :map
    :subcomponents [tab-list code-editor]
    :render-data-fn (fn [data]
                      [:div.template-editor
                       [:h1 "Template Editor"]
                       (antares/render tab-list (-> data :tab-list))
                       (antares/render code-editor (-> data :code-editor))])
    :style-data [:div.template-editor
                 (antares/get-attr tab-list :style-data)
                 (antares/get-attr code-editor :style-data)]}))

(def template-editor-binding
  (antares/component-binding
   {:ident :template-editor-binding
    :component template-editor
    :app-cursor [:template-editor]
    :dom-cursor "#test-area"
    :post-render-fn (fn [component-binding]
                      (postrender/textarea->codemirror component-binding))}))

(antares/app-state->value {:template-editor {:tab-list {:tabs [{:name "html"
                                                                :display "HTML"}
                                                               {:name "css"
                                                                :display "CSS"}
                                                               {:name "test-data"
                                                                :display "TEST DATA"}]
                                                        :active-tab "html"}
                                             :code-editor "(+ 1 2 3)"}})


(interactions/listen template-editor-binding "click" (fn [event]
                                                       (if-let [name (interactions/get-data (.-target event) "name")]
                                                         (antares/cursor->value [:template-editor :tab-list :active-tab] name))))

;; ;; INITIALIZE FUNCTIONS
;; (def load-html-fn
;;   (fn []
;;     (let [template-id 17592186045418]
;;       (antares/http-get (str "http://localhost:8989/template/" template-id)
;;                         {:handler (fn [response]
;;                                     (antares/cursor->value [:html-fn] (-> response antares/read-string :html-fn)))})
;;       "Loading...")))

;; (def load-css-data
;;   (fn []
;;     (let [template-id 17592186045418]
;;       (antares/http-get (str "http://localhost:8989/template/" template-id)
;;                         {:handler (fn [response] (antares/cursor->value [:css-data] (-> response antares/read-string :css-data)))})
;;       "Loading...")))

;; (def load-test-data
;;   (fn []
;;     (let [template-id 17592186045418]
;;       (antares/http-get (str "http://localhost:8989/template/" template-id)
;;                         {:handler (fn [response] (antares/cursor->value [:test-data] (-> response antares/read-string :test-data)))})
;;       "Loading...")))

;; ;; DATA WATCH FUNCTIONS
;; (def compile-template!
;;   (fn []
;;     (let [template (get-in @antares/app-state [:html-fn])
;;           test-data (get-in @antares/app-state [:test-data])]
;;       (antares/http-post "http://localhost:8989/compile-template"
;;                          {:params {:compile-data test-data
;;                                    :template template}
;;                           :handler (fn [response]
;;                                      (antares/cursor->value [:compiled-template] response))}))))

;; (def compile-css!
;;   (fn []
;;     (let [css-data (get-in @antares/app-state [:css-data])
;;           target-node (.querySelector js/document ".template-css-render")]
;;       (set! (.-innerHTML target-node) (antares/compile-css css-data)))))

;; ;; EVENT ACTIONS
;; (def save-template!
;;   (fn [event]
;;     (let [template-id 17592186045418
;;           html-fn (get-in @antares/app-state [:html-fn])
;;           css-data (get-in @antares/app-state [:css-data])
;;           test-data (get-in @antares/app-state [:test-data])]
;;       (antares/http-post (str "http://localhost:8989/template/" template-id "/save")
;;                          {:params {:eid template-id
;;                                    :html-fn html-fn
;;                                    :css-data css-data
;;                                    :test-data test-data}
;;                           :handler (fn [response] (.log js/console response))}))))

;; ;; HTML FN
;; (antares/create-component
;;  {:ident :html-fn
;;   :data-type :string
;;   :app-cursor [:html-fn]
;;   :dom-cursor "#html-fn"
;;   :initialize-fn load-html-fn
;;   :render-fn (fn [data]
;;                [:textarea data])
;;   :post-render-fn (postrender/textarea->codemirror [:html-fn] "#html-fn textarea")})

;; ;; CSS DATA
;; (antares/create-component
;;  {:ident :css-data
;;   :data-type :string
;;   :app-cursor [:css-data]
;;   :dom-cursor "#css-data"
;;   :initialize-fn load-css-data
;;   :render-fn (fn [data]
;;                [:textarea data])
;;   :post-render-fn (postrender/textarea->codemirror [:css-data] "#css-data textarea")})

;; ;; TEST DATA
;; (antares/create-component
;;  {:ident :test-data
;;   :data-type :string
;;   :app-cursor [:test-data]
;;   :dom-cursor "#test-data"
;;   :initialize-fn load-test-data
;;   :render-fn (fn [data]
;;                [:textarea data])
;;   :post-render-fn (postrender/textarea->codemirror [:test-data] "#test-data textarea")})

;; ;; Compiled Template HTML
;; (antares/create-component
;;  {:ident :compiled-template
;;   :data-type :string
;;   :app-cursor [:compiled-template]
;;   :dom-cursor "#compiled-template-render"
;;   :initialize-fn (fn [] "[:div.template]")
;;   :render-fn (fn [data] (antares/read-string data))})

;; ;; Save Template Button
;; (antares/create-component
;;  {:ident :save-template-button
;;   :data-type :string
;;   :app-cursor [:save-template-button-text]
;;   :dom-cursor "#save-template-action"
;;   :initialize-fn (fn [] "Save Template")
;;   :render-fn (fn [data]
;;                [:div {:class "ui button"} data])
;;   :interactions [{:event-type "click"
;;                   :event-action save-template!}]})

;; (antares/create-data-watcher
;;  {:ident :compile-template-from-html
;;   :app-cursor [:html-fn]
;;   :watch-fn compile-template!})

;; (antares/create-data-watcher
;;  {:ident :compile-template-from-test-data
;;   :app-cursor [:test-data]
;;   :watch-fn compile-template!})

;; (antares/create-data-watcher
;;  {:ident :compile-css-data
;;   :app-cursor [:css-data]
;;   :watch-fn compile-css!})

;; REPL

#_
(
 (require 'weasel.repl.websocket)
 (cemerick.piggieback/cljs-repl
  :repl-env (weasel.repl.websocket/repl-env
             :ip "0.0.0.0" :port 9001))
)
