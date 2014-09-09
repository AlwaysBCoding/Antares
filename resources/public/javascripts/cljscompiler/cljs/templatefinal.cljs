(ns cljs.templatefinal
  (:require [reagent.core :as reagent :refer (atom)]
            [antares.helpers :as antares]
            [clojure.string :as string]))

;; Global State
(def files-list-state (atom []))
(def active-file-state (atom ""))

(def templates-list-state (atom ["Template 1" "Template 2" "Template 3"]))
(def active-template-state (atom ""))

(def active-file-data-state (atom {:filename ""
                                   :filecontent ""}))

;; Initializers
(antares/get {:uri "http://localhost:8889/services/s3/vendoriq-data-imports/list-objects"
              :params {}
              :handler (fn [response]
                         (reset! files-list-state response))})


;; COMPONENTS
(defn files-list []
  [:div
   [:h1 "Files List"]
   [:ul.files-list
    (let [active-file @active-file-state]
      (for [file @files-list-state]
        [:li.file
         {:class (if (= file active-file) "active" "")
          :data-file-name file
          :on-click (fn [event]
                      (reset! active-file-state (-> event .-target .-dataset .-fileName)))}
         file]))]])

(defn templates-list []
  [:div
   [:h1 "Templates List"]
   [:ul.templates-list
    (let [active-template @active-template-state]
      (for [template @templates-list-state]
        [:li.template
         {:class (if (= template active-template) "active" "")
          :data-template-name template
          :on-click (fn [event]
                      (reset! active-template-state (-> event .-target .-dataset .-templateName)))}
         template]))]])

(defn active-file []
  (let [active-file-data @active-file-data-state
        file-lines (-> (active-file-data :filecontent)
                       (string/split #"[\n\r]"))
        file-header (first file-lines)
        file-headers (string/split file-header #",")
        file-body (rest file-lines)]
    [:div.active-file
     [:h1 (active-file-data :filename)]
     [:div.active-file-data
      [:table
       [:thead
        [:tr
         (for [header file-headers]
           [:th header])]]
       [:tbody
        (for [row file-body]
          [:tr
           (for [column (string/split row #",")]
             [:td column])])]]]]))

(defn code-editor []
  [:textarea.code-editor-text ""])

(def codemirror-code-editor
  (with-meta code-editor
    {:component-did-mount
     (fn [self]
       (let [codemirror (js/CodeMirror.fromTextArea (reagent/dom-node self) {})
             options {"theme" "solarized light"
                      "mode" "clojure"
                      "matchBrackets" true
                      "lineNumbers" true}]

         (doseq [[option-key option-value] options]
           (.setOption codemirror option-key option-value))))}))

(defn mapping-workbench []
  [:div.mapping-workbench
   [:div.mapping-fn
    [:h1 "Mapping Function"]
    [:div.code-editor
     [codemirror-code-editor]]]
   [:div.data-structure
    [:h1 "Data Structure"]
    [:pre "{}"]]])

;; APP
(defn app []
  [:div.container.ui.grid
   [:div.row
    [:div.column.wide.two
     [files-list]
     [templates-list]]
    [:div.column.wide.six
     [active-file]]
    [:div.column.wide.six
     [mapping-workbench]]]])

;; BINDINGS
(reagent/render-component [app] (js/document.querySelector "#app-target"))

;; TRANSITIONS
(add-watch
 active-file-state
 :load-file-from-s3
 (fn [key ref old-value new-value]
   (antares/get {:uri (str "http://localhost:8889/services/s3/vendoriq-data-imports/get-object/" new-value)
                 :params {}
                 :handler (fn [response]
                            (reset! active-file-data-state
                                    {:filename (get response "filename")
                                     :filecontent (get response "filecontent")}))})))
