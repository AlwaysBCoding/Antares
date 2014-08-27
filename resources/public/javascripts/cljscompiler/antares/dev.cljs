(ns antares.dev
  (:require [antares.core :as antares]))

;; COMPONENT DEFINITIONS
(def nav-list
  (antares/component {:ident :nav-list
                      :render (fn [data]
                                [:div.nav-list
                                 [:div.ui.horizontal.list
                                  (for [item (-> data :items)]
                                    [:div.item
                                     [:div.content
                                      [:div.header (-> :header item)]
                                      (-> :content item)]])]])
                      :styles [:div.nav-list
                               [:div.header {:color "orange"}]]}))

(def code-editor
  (antares/component {:ident :code-editor
                      :render (fn [data]
                                [:div.code-editor
                                 [:textarea data]])
                      :component-did-mount (fn [component app-cursor dom-cursor]
                                             (let [codemirror (.fromTextArea js/CodeMirror (.querySelector js/document (str dom-cursor " .code-editor textarea")))
                                                   options {"theme" "solarized light"
                                                            "mode" "clojure"
                                                            "matchBrackets" "true"
                                                            "lineNumber" true}]
                                               (doseq [[option-key option-value] options]
                                                 (.setOption codemirror option-key option-value))))}))

(def template-editor
  (antares/component {:ident :template-editor
                      :subcomponents [nav-list code-editor]
                      :render (fn [data]
                                [:div.template-editor
                                 [:h1 "Template Editor"]
                                 (antares/render-html nav-list (-> data :nav-list))
                                 (antares/render-html code-editor (-> data :code-editor))])
                      :styles [:div.template-editor
                               (-> nav-list :styles)
                               (-> code-editor :styles)]}))

(def add-item-button
  (antares/component {:ident :add-item-button
                      :render (fn [data]
                                [:div#add-item-button.ui.button.tiny data])}))

(def list-area
  (antares/component {:ident :list-area
                      :subcomponents [add-item-button]
                      :render (fn [data]
                                [:div.list-area
                                 [:ul.list
                                  (for [item (-> data :items)]
                                    [:li item])]
                                 (antares/render-html add-item-button (-> data :button-text))])}))

;; COMPONENT BINDINGS
(antares/bind list-area [:list-area] "#nav-list")
(antares/bind template-editor [:template-editor] "#template-editor")

;; ACTIVATE EVENT LOOP
(defn event-mappings
  [event]
  (cond
   (and (= (-> event .-type) "click")
        (= (-> event .-target .-tagName) "H1")) :show-alert
   (and (= (-> event .-type) "click")
        (= (-> event .-target .-id) "add-item-button")) :add-item
   (= (-> event .-type) "click") :click
   (= (-> event .-keyCode) 13) :show-alert
   :else :no-action))

(defn controller
  [control]
  (cond
   (= control :add-item) (antares/cursor->fn [:list-area :items] (fn [old-value] (conj old-value (str "Item " (+ 1 (count old-value))))))
   (= control :show-alert) (js/alert "Alert Shown")))

(antares/activate-event-loop event-mappings controller)

;; (antares/bind antares/app-state-detective [] "#app-state-detective")
;; (antares/bind antares/registered-components-detective [] "#registered-components-detective")
