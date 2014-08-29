(ns component-builder.core
  (:require [antares.core :as antares]))

;; INITIAL STATE SYNC
(reset! antares/app-state {:tabs [{:display "Render" :ident :render}
                                  {:display "Style" :ident :style}
                                  {:display "Test Data" :ident :test-data}
                                  {:display "Initialize" :ident :initialize}
                                  {:display "Component Did Update" :ident :component-did-update}
                                  {:display "Event Mappings" :ident :event-mappings}
                                  {:display "Controller Actions" :ident :controller-actions}]
                           :active-tab {}
                           :code-editor {:display ""}
                           :render {:display "(fn [data] [:h1 (-> data :display)])"}
                           :style {:display "[:h1 {:color \"orange\"}]"}
                           :test-data {:display "{:display \"Something\"}"}
                           :initialize {:display ""}
                           :component-did-update {:display ""}
                           :event-mappings {:display ""}
                           :controller-actions {:display ""}
                           :component {:html ""
                                       :css ""}})

;; INITIAL STATE ASYNC

;; EVENT MAPPINGS
(defn event-mappings
  [event]
  (cond
   
   (and (= (-> event .-type) "click")
        (antares/has-class? (-> event .-target) "tab")) [:activate-tab {:display (-> event .-target .-textContent)
                                                                        :ident (-> event .-target .-dataset .-ident keyword)}]

   :else [:no-action {}]))

;; EVENT CONTROLLER
(defn controller
  [[control data]]
  (cond
   (= control :activate-tab) (do (antares/cursor->value [:active-tab] data)
                                 (antares/cursor->value [:code-editor] (antares/get-value [(-> data :ident)])))

   (= control :update-code) (do (antares/cursor->value [:code-editor] {:display (.getValue data)})
                                (antares/cursor->value [(-> (antares/get-value [:active-tab]) :ident)] {:display (.getValue data)})
                                (antares/post {:uri "http://localhost:8989/compile-template"
                                               :params {:compile-data (-> (antares/get-value [:test-data]) :display)
                                                        :template (-> (antares/get-value [:render]) :display)}
                                               :handler (fn [response]
                                                          (antares/cursor->value [:component :html] (antares/compile-html! (antares/string->data response))))}))))

;; DEFINE COMPONENTS
(def tab-list
  (antares/component
   {:ident :tab-list
    :render (fn [data]
              [:div.tab-list.ui.divided.horizontal.list
               (for [tab data]
                 (if (= tab (get-in @antares/app-state [:active-tab]))
                   [:div.tab.item.active
                    {:data-ident (-> tab :ident)} (-> tab :display)]
                   [:div.tab.item
                    {:data-ident (-> tab :ident)} (-> tab :display)]))]) 
    :style [:div.tab-list
            {:cursor "pointer"}
            [:div.tab
             [:&.active {:color "red"}]]]}))

(def code-editor
  (antares/component
   {:ident :code-editor
    :render (fn [data]
              [:div#template-code-editor
               [:textarea.code-editor (-> data :display)]])
    :style [:div#template-code-editor
            [:div.CodeMirror
             {:min-height "600px"}]]
    :component-did-update (fn [self]
                            (let [codemirror (.fromTextArea js/CodeMirror (.querySelector js/document "#template-code-editor textarea") {})
                                  options {"theme" "solarized light"
                                           "mode" "clojure"
                                           "matchBrackets" true
                                           "lineNumbers" true}]
                              (doseq [[option-key option-value] options]
                                (.setOption codemirror option-key option-value))
                              (.on codemirror "blur" (fn [self event]
                                (controller [:update-code (-> self)])))))}))

(def app-state-inspector
  (antares/component {:ident :app-state-inspector
                      :render (fn [data]
                                [:div#app-state-inspector
                                 [:textarea#app-state-inspector-data (pr-str data)]])
                      :style [:div#app-state-inspector
                              [:textarea {:width "100%"
                                          :height "100px"
                                          :font-size ".8rem"}]]}))

(def root
  (antares/component
   {:ident :root
    :render (fn [data]
              [:div.container.ui.grid
               [:div.row
                [:div.column.wide.sixteen
                 (antares/render-html app-state-inspector data)]]
               [:div.row
                [:div.column.wide.eight
                 (antares/render-html tab-list (-> data :tabs))
                 (antares/render-html code-editor (-> data :code-editor))]]])
    :style [:div.container
            (-> app-state-inspector :style)
            (-> tab-list :style)
            (-> code-editor :style)]}))

;; BIND COMPONENTS
(antares/bind root [] "#antares")

;; EVENT LOOP
(antares/event-loop event-mappings controller)

;; START RENDERER
(antares/renderer root)
