(ns cljs.hackpad
  (:require [antares.core :as antares]
            [components.templates.vendoranalysis :as vendor-analysis]))

(reset! antares/app-state {:root
                           {:vendor-analysis
                            {:vendors [{:name "Kelly Produce"
                                        :buyer-score 40
                                        :deliveries 21
                                        :last-month "$4,250"
                                        :key-opportunities [{:display "Vendor Consolidation"}
                                                            {:display "Online Ordering"}
                                                            {:display "Reduce Deliveries"}
                                                            {:display "Pay Earlier"}]}

                                       {:name "City Meats"
                                        :buyer-score 60
                                        :deliveries 12
                                        :last-month "$4,250"
                                        :key-opportunities [{:display "Limit Case Breaking"}
                                                            {:display "Pay Earlier"}]}

                                       {:name "American Foods"
                                        :buyer-score 25
                                        :deliveries 25
                                        :last-month "$4,250"
                                        :key-opportunities [{:display "Vendor Consolidation"}
                                                            {:display "Limit Weekend Deliveries"}
                                                            {:display "Eliminate 2x day"}
                                                            {:display "Deliveries"}]}

                                       {:name "Johnson Seafood"
                                        :buyer-score 80
                                        :deliveries 21
                                        :last-month "$4,250"
                                        :key-opportunities [{:display "Increase Seasonal Buying"}
                                                            {:display "None"}]}]}}})

(def root
  (antares/stateful-component
   {:ident :root

    :render (fn [data]
              [:div.container
               (antares/render-html vendor-analysis/vendor-analysis (data :vendor-analysis))])

    :style [:div.container
            {:margin-top "25px"}
            (:style vendor-analysis/vendor-analysis)]

    :event-mappings []

    :controls []}))

(antares/bind root [:root] "#antares")
(antares/renderer root)
(antares/event-loop (:event-mappings root) (:controls root))

;; CACHE

;; (ns cljs.hackpad
;;   (:require [antares.core :as antares]
;;             [components.color-picker :as color-picker]))

;; ;; INITIALIZE DATA
;; (reset! antares/app-state {:root
;;                            {:color-picker {}}})

;; (antares/cursor->value
;;  [:root :color-picker]
;;  {:colors [{:color "red"}
;;            {:color "lime"}
;;            {:color "blue"}
;;            {:color "orange"}]
;;   :active-color {:color "red"}})

;; (def root
;;   (antares/component
;;    {:ident :root
;;     :render (fn [data]
;;               [:div.container
;;                (antares/render-html color-picker/color-picker (get-in @antares/app-state [:root :color-picker]))])
;;     :style [:div.container
;;             (:style color-picker/color-picker)]

;;     :event-mappings (concat
;;                      [{:condition (fn [event] false)
;;                        :action (fn [event] [:no-action {}])}]
;;                      (:event-mappings color-picker/color-picker))

;;     :controls (concat
;;                [{:command :no-action
;;                  :action (fn [data] (js/console.log "this will never happen"))}]
;;                (:controls color-picker/color-picker))}))

;; (antares/bind root [:root] "#antares")
;; (antares/renderer root)
;; (antares/event-loop (:event-mappings root) (:controls root))
