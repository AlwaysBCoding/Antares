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
                           :render {:display "(fn [data] \n  [:div.template\n   [:h1 (-> data :display)]\n   [:h2 (-> data :subtitle)]])"}
                           :style {:display "[:div.template\n [:h1 {:color \"orange\"\n       :text-align \"center\"\n       :background-color \"gray\"}]\n [:h2 {:text-align \"center\"\n       :color \"gray\"\n       :background-color \"orange\"}]]"}
                           :test-data {:display "{:display \"Something\"\n :subtitle \"This is a subtitle\"}"}
                           :initialize {:display ""}
                           :component-did-update {:display ""}
                           :event-mappings {:display "[{}]"}
                           :controller-actions {:display ""}
                           :component {:html ""
                                       :css ""}})

;; INITIAL STATE ASYNC

;; EVENT MAPPINGS
(defn event-mappings
  [event]

  (let [static-mappings [{:condition (and (= (-> event .-type) "click")
                                          (antares/has-class? (-> event .-target) "tab"))
                          :control [:activate-tab {:display (-> event .-target .-textContent)
                                                   :ident (-> event .-target .-dataset .-ident keyword)}]}
                         {:condition (and (= (-> event .-type) "click")
                                          (= (-> event .-target .-tagName) "H1"))
                          :control [:activate-header {:target (-> event .-target)}]}]
        app-mappings static-mappings]

    (doseq [event-mapping app-mappings]
      (if (:condition event-mapping)
        (controller (:control event-mapping))))))

;; EVENT CONTROLLER
(defn controller
  [[control data]]

  (let [static-controls [{:control :activate-tab
                          :action (fn [data]
                                    (antares/cursor->value [:active-tab] data)
                                    (antares/cursor->value [:code-editor] (antares/get-value [(-> data :ident)])))}
                          
                         {:control :update-code
                          :action (fn [data]
                                    (antares/cursor->value [:code-editor] {:display (.getValue data)})
                                    (antares/cursor->value [(-> (antares/get-value [:active-tab]) :ident)] {:display (.getValue data)})
                                    (cond
                                     (or (= (-> (antares/get-value [:active-tab]) :ident) :render) (= (-> (antares/get-value [:active-tab]) :ident) :test-data))
                                     (antares/post {:uri "http://localhost:8989/compile-template"
                                                    :params {:compile-data (-> (antares/get-value [:test-data]) :display)
                                                             :template (-> (antares/get-value [:render]) :display)}
                                                    :handler (fn [response]
                                                               (antares/cursor->value [:component :html] (antares/compile-html! (antares/string->data response))))})
                                     
                                     (= (-> (antares/get-value [:active-tab]) :ident) :style) (antares/cursor->value [:component :css] (antares/compile-css! (antares/string->data (-> (antares/get-value [:style]) :display))))))}

                         {:control :activate-header
                          :action (fn [data]
                                    (antares/toggle-class (-> data :target) "active"))}]]

    (doseq [static-control static-controls]
      (if (= control (-> static-control :control))
        ((-> static-control :action) data)))))

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
                 (antares/render-html code-editor (-> data :code-editor))]
                [:div.column.wide.eight
                 [:div#component-preview]
                 [:style#component-preview-styles]]]])
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

(add-watch
 antares/app-state
 :component-preview
 (fn [key reference old-value new-value]
   (set! (.-innerHTML (.querySelector js/document "#component-preview")) (get-in new-value [:component :html]))
   (set! (.-innerHTML (.querySelector js/document "#component-preview-styles")) (get-in new-value [:component :css]))))
