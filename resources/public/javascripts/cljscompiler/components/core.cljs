(ns components.core
  (:require-macros [hiccups.core :as renderer])
  (:require [antares.core :as antares]
            [cljs-http.client :as http]
            [hiccups.runtime :as hiccupsrt]))

;; 0) Domain Logic
;; ===================================
(defn create-week1-output-structure
  [input-data]
  (let [matrix  (antares/string->matrix input-data)
        headers (map #(keyword %) (first matrix))
        rows    (rest matrix)
        input-data-map (map (fn [row] (zipmap headers row)) rows)]
    {:restaurant (-> input-data-map first :restaurant)
     :vendor (-> input-data-map first :vendor_invoiceanalyzer)
     :invoice-number (-> input-data-map first :invoicenumber_invoiceanalyzer)
     :invoice-amount (-> input-data-map first :invoiceamount_invoiceanalyzer)
     :items (map
             (fn [item-row]
               {:item-name (-> item-row :description_invoiceanalyzer)
                :overpayment (-> item-row :variance_invoiceanalyzer)})
             (filter (fn [row] (not= "" (:variance_invoiceanalyzer row))) input-data-map))}))

;; 1) Collections
;;===================================

;; 1-1) Files List

(defn activate-file
  [event]
  (antares/update-cursor
   [:active-file]
   (fn [old-value] (-> event .-target .-dataset .-fileName)))
  (antares/update-cursor-async
   [:active-file-data]
   (str "http://antares-services.herokuapp.com/services/s3/vendoriq-data-imports/get-object/" (-> event .-target .-dataset .-fileName))))

(renderer/defhtml render-files-list
  [data]
  (map (fn [file-name]
         [:a
          (if (= (get-in @antares/app-state [:active-file]) file-name)
            {:data-file-name file-name :class "item file-name active"}
            {:data-file-name file-name :class "item file-name inactive"})
          [:i.right.triangle.icon]
           file-name]) data))

(def files-list {:app-cursor [:files-list]
                 :dom-cursor ".files-list"
                 :interactions [{:event-type "click"
                                 :event-selector "a.file-name"
                                 :event-action activate-file}]
                 :render-fn render-files-list
                 :data {:source "s3Bucket"
                        :bucket-name "vendoriq-data-imports"}})

;; 1-2) Templates List

(defn activate-template
  [event]
  (antares/update-cursor
   [:active-template]
   (fn [old-value] (-> event .-target .-dataset .-templateName)))
  (antares/update-cursor
   [:active-template-mapping-fn]
   (fn [old-value] (-> event .-target .-dataset .-mappingFn))))

(renderer/defhtml render-templates-list
  [data]
  (map (fn [template-info]
         [:div
          (if (= (get-in @antares/app-state [:active-template]) (-> template-info :name))
            {:data-template-name (-> template-info :name) :data-mapping-fn (-> template-info :mapping-fn) :class "item template-name active"}
            {:data-template-name (-> template-info :name) :data-mapping-fn (-> template-info :mapping-fn) :class "item template-name inactive"})
           (-> template-info :name)]) data))

(def templates-list {:app-cursor [:templates-list]
                     :dom-cursor ".templates-list"
                     :interactions [{:event-type "click"
                                     :event-selector "div.template-name"
                                     :event-action activate-template}]
                     :render-fn render-templates-list
                     :data {:source "static"
                            :initialize [{:name "template1"
                                          :mapping-fn "(+ 1 2 3)"}
                                         {:name "template2"
                                          :mapping-fn "(+ 4 5 6)"}
                                         {:name "template3"
                                          :mapping-fn "(+ 7 8 9)"}]}})

;; 2) Active Collection Items
;; ===================================

;; 2-1) Active File

(renderer/defhtml render-active-file-content
  [data]
  (let [filecontent (-> data :filecontent)
        matrix (-> filecontent antares/string->matrix)
        headers (first matrix)
        rows (rest matrix)]
    [:table.ui.table.segment.celled
     [:thead
      [:tr
       (map-indexed (fn [index header]
                      [:th header]) headers)]]
     [:tbody.editable-rows
      (map-indexed (fn [row-index row]
                     [:tr
                      (map-indexed (fn [column-index row-item]
                                     [:td.editable-cell
                                      {:data-rowindex row-index
                                       :data-columnindex column-index} row-item]) row)]) rows)]]))

(def active-file {:app-cursor [:active-file-data]
                  :dom-cursor ".active-file-content"
                  :render-fn render-active-file-content})

;; 3) TEMP
;; ===================================

;; 3-1) Week 1 Template

(renderer/defhtml render-week1-template
  [data]
  (if (= (-> @antares/app-state :active-template) "template1")
    (let [analyzed-data (create-week1-output-structure (-> data :filecontent))]
      [:div.template.week1
       [:div.header
        [:img {:src "images/viq-header.png"}]]
       [:div.subheader
        [:p.invoice-number (str "Invoice #: " (-> analyzed-data :invoice-number))]
        [:p.invoice-amount (str "$" (Math.round (-> analyzed-data :invoice-amount)))]]
       [:div.items
        (mapcat
         (fn [item]
           [[:p.item-name (-> item :item-name)]
            [:p.overpayment (str (-> item :overpayment (* 100) Math.round) "% Overpayment")]
            [:div.overpayment-slider
             [:div.slider-segment.segment1
              [:p.segment-text "GREAT VALUE"]]
             [:div.slider-segment.segment2
              [:p.segment-text "TARGET VALUE"]]
             [:div.slider-segment.segment3
              [:p.segment-text "OVERPAYING"]]
             [:div.slider-marker
              {:style (str "left: " (min (+ (-> item :overpayment (* 100) Math.round) 60) 90) "%")}]]
            [:hr]])
         (-> analyzed-data :items))]])))

(def week1-template {:app-cursor [:active-file-data]
                     :dom-cursor ".active-template-content"
                     :render-fn render-week1-template})


;; 3-2) Active Template Mapping Fn
(renderer/defhtml render-active-template-mapping-fn
  [data]
  (if (not-empty data)
    [:textarea data]
    [:textarea ""]))

(def active-template-mapping-fn {:app-cursor [:active-template-mapping-fn]
                                 :dom-cursor ".active-template-mapping-fn"
                                 :render-fn render-active-template-mapping-fn
                                 :post-render-fn (fn [] (.fromTextArea js/CodeMirror (.querySelector js/document ".active-template-mapping-fn textarea")))})
