(ns sandbox.core
  (:require-macros [hiccups.core :as renderer])
  (:require [antares.core :as antares]
            [cljs-http.client :as http]
            [hiccups.runtime :as hiccupsrt]))

;; (antares/create-data-component {:app-cursor [:game-data]
;;                                 :dom-cursor ".game-data-table"
;;                                 :interactions {}
;;                                 :render-fn (fn [data]
;;                                              (let [headers (first data)
;;                                                    rows    (rest data)]
;;                                                [[:thead
;;                                                  [:tr
;;                                                   (map-indexed (fn [index header]
;;                                                                  [:th header]) headers)]]
;;                                                 [:tbody.editable-rows
;;                                                  (map-indexed (fn [row-index row]
;;                                                                 [:tr
;;                                                                  (map-indexed (fn [column-index row-item]
;;                                                                            [:td.editable-cell
;;                                                                             {:contenteditable true
;;                                                                              :data-rowindex row-index
;;                                                                              :data-columnindex column-index} row-item]) row)]) rows)]]))
;;                                 :data {:source "s3File"
;;                                        :bucket-name "refsareblind-gamelogs-basketball-reference"
;;                                        :file-name "bulls--wizards--20140427.txt"}})

;; (dommy/listen! [(.querySelector js/document ".editable-rows") ".editable-cell"]
;;                          "focusout"
;;                          (fn [event]
;;                            (let [row (-> event .-target .-dataset .-rowindex read-data)
;;                                  column (-> event .-target .-dataset .-columnindex read-data)
;;                                  new-cell-value (-> event .-target .-innerText)]
;;                              (swap! app-state (fn [app-value]
;;                                                 (update-in app-value app-cursor (fn [old-value]
;;                                                                                   (update-in old-value [(+ row 1) column] (fn [old-cell-value] new-cell-value)))))))))

;; 1 - Files List

(defn activate-file
  [event]
  (antares/update-cursor-async
   [:active-file]
   (str "http://antares-services.herokuapp.com/services/s3/vendoriq-data-imports/get-object/" (-> event .-target .-dataset .-fileName)))
  (antares/update-cursor
   [:active-template]
   (fn [old-value] {:invoice-number "123456"
                   :invoice-amount "$125.35"
                   :items [{:item-name "Tomatoes"
                            :overpayment-percentage "20"}
                           {:item-name "Celery"
                            :overpayment-percentage "11"}]})))

(renderer/defhtml render-files-list
  [data]
  (map (fn [file-name]
         [:li.file-name
          {:data-file-name file-name} file-name]) data))

(antares/create-component {:app-cursor [:files-list]
                           :dom-cursor ".files-list"
                           :interactions [{:event-type "click"
                                           :event-selector "li.file-name"
                                           :event-action activate-file}]
                           :render-fn render-files-list
                           :data {:source "s3Bucket"
                                  :bucket-name "vendoriq-data-imports"}})

;; 2 - Active File

(renderer/defhtml render-active-file-content
  [data]
  [:pre (-> data :filecontent)])

(antares/create-component {:app-cursor [:active-file]
                           :dom-cursor ".active-file-content"
                           :render-fn render-active-file-content})

;; 3 - Week 1 Template

(renderer/defhtml render-week1-template
  [data]
  [:div.template.week1
   [:div.header
    [:img {:src ""}]]
   [:div.subheader
    [:p.invoice-number (-> data :invoice-number)]
    [:p.invoice-amount (-> data :invoice-amount)]]
   [:div.items
    (mapcat
     (fn [item]
       [[:p.item-name (-> item :item-name)]
        [:p.overpayment (-> item :overpayment-percentage)]
        [:div.overpayment-slider
         [:div.slider-segment.segment1
          [:p.segment-text "GREAT VALUE"]]
         [:div.slider-segment.segment2
          [:p.segment-text "TARGET VALUE"]]
         [:div.slider-segment.segment3
          [:p.segment-text "OVERPAYING"]]
         [:div.slider-marker
          {:style "left: 90%"}]]
        [:hr]])
     (-> data :items))]])

(antares/create-component {:app-cursor [:active-template]
                           :dom-cursor ".active-template-content"
                           :render-fn render-week1-template})

;; REPL
#_
(

 ;; Config
 (require 'weasel.repl.websocket)
 (cemerick.piggieback/cljs-repl
        :repl-env (weasel.repl.websocket/repl-env
                   :ip "0.0.0.0" :port 9001))

 ;; Testing
 (.log js/console "from the repl")
)
