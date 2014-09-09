(ns cljs.templatefinal
  (:require [reagent.core :as reagent :refer (atom)]
            [antares.helpers :as antares]
            [clojure.string :as string]))

;; Global State
(def files-list-state (atom []))
(def active-file-state (atom ""))
(def active-file-data-state (atom {:filename ""
                                   :filecontent ""}))

;; Initializers
(antares/get {:uri "http://localhost:8889/services/s3/vendoriq-data-imports/list-objects"
              :params {}
              :handler (fn [response]
                         (reset! files-list-state response))})


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

(defn active-file []
  (let [active-file-data @active-file-data-state
        file-lines (-> (active-file-data :filecontent)
                       (string/split #"[\n\r]"))
        file-header (first file-lines)
        file-headers (string/split file-header #",")
        file-body (rest file-lines)]
    [:div.active-file
     [:h1 (active-file-data :filename)]
     [:table
      [:thead
       [:tr
        (for [header file-headers]
          [:th header])]]
      [:tbody
       (for [row file-body]
         [:tr
          (for [column (string/split row #",")]
            [:td column])])]]]))

(defn app []
  [:div.container.ui.grid
   [:div.row
    [:div.column.wide.two
     [files-list]]
    [:div.column.wide.eight
     [active-file]]]])

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
