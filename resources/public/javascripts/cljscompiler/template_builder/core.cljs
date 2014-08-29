(ns template-builder.core
  (:require [antares.core :as antares]))

;; INITIAL STATE
(reset! antares/app-state {:tabs [{:display "HTML FN"}
                                  {:display "CSS"}
                                  {:display "TEST DATA"}]
                           :active-tab {}
                           :code-editor {:display ""}
                           :html-fn {:display "(fn [data] \n (+ 1 2 3))"}
                           :css-data {:display "[:div.template \n {:color \"green\"}]]"}
                           :test-data {:display "{:vendor-name \"Profish\"}"}})

;; EVENT MAPPINGS
(defn event-mappings
  [event]
  (cond
   
   (and (= (-> event .-type) "click")
        (antares/has-class? (-> event .-target) "tab")) [:activate-tab {:display (-> event .-target .-textContent)}]

   :else [:no-action {}]))

;; EVENT CONTROLLER
(defn controller
  [[control data]]
  (.log js/console (pr-str control))
  (cond
   (= control :activate-tab) (do (case (-> data :display)
                                   "HTML FN" (antares/cursor->value [:code-editor] (get-in @antares/app-state [:html-fn]))
                                   "CSS"     (antares/cursor->value [:code-editor] (get-in @antares/app-state [:css-data]))
                                   "TEST DATA" (antares/cursor->value [:code-editor] (get-in @antares/app-state [:test-data])))
                                 (antares/cursor->value [:active-tab] data))

   (= control :update-code) (do (case (-> (get-in @antares/app-state [:active-tab]) :display)
                                  "HTML FN" (antares/cursor->value [:html-fn] {:display (.getValue data)})
                                  "CSS"     (antares/cursor->value [:css-data] {:display (.getValue data)})
                                  "TEST DATA" (antares/cursor->value [:test-data] {:display (.getValue data)}))
                                (antares/cursor->value [:code-editor] {:display (.getValue data)}))))

;; EVENT LOOP
(antares/event-loop event-mappings controller)

;; DEFINE COMPONENTS
(def tab-list
  (antares/component
   {:ident :tab-list
    :render (fn [data]
              [:div.tab-list.ui.divided.horizontal.list
               (for [tab data]
                 (if (= tab (get-in @antares/app-state [:active-tab]))
                   [:div.tab.item.active (-> tab :display)]
                   [:div.tab.item (-> tab :display)]))]) 
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
                [:div.column.wide.sixteen
                 [:h1 "Template Builder"]]]
               [:div.row
                [:div.column.wide.six
                 (antares/render-html tab-list (-> data :tabs))
                 (antares/render-html code-editor (-> data :code-editor))]]])
    :style [:div.container
            (-> app-state-inspector :style)
            (-> tab-list :style)]}))

;; BIND COMPONENTS
(antares/bind root [] "#antares")

;; RENDERER
(antares/renderer root)
