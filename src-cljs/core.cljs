(ns sandbox.core
  (:require [antares.core :as antares]
            [components.core :as components]))

(antares/create-component components/files-list)
(antares/create-component components/templates-list)
(antares/create-component components/active-file)
(antares/create-component components/week1-template)

(defn create-output-structure
  [input-data]
  (let [create-map (fn [input-csv]
                     (let [matrix (antares/string->matrix input-data)
                           headers (first matrix)
                           rows (rest matrix)]
                       headers))]
    (antares/string->matrix (pr-str input-data))))
;
;; (let [file (get-in @antares/app-state [:active-file-data :filecontent])]
;;   (.log js/console (create-output-structure file)))

;; (.log js/console (pr-str (get-in @antares/app-state [:active-file-data :filecontent])))

;; (defn create-output-structure-week-one
;;   [input-data]
;;   (let [create-map (fn [input-csv]
;;                     (let [lines      (clojure.string/split input-csv #"\r")
;;                           headers    (map #(keyword %)(clojure.string/split (first lines) #","))
;;                           rows      (rest lines)]
;;                       (map #(zipmap headers (clojure.string/split % #","))rows)))
;;                     input-data-map  (vec(create-map input-data))
;;                     vendor          (:vendor_invoiceanalyzer (first input-data-map))
;;                     invoice-number  (:invoicenumber_invoiceanalyzer (first input-data-map))
;;                     invoice-amount  (:invoiceamount_invoiceanalyzer (first input-data-map))
;;                     items            (filter (fn [x] (not (nil? x)))
;;                                               (map #(if (not (= "" (:variance_invoiceanalyzer %)))
;;                                                       (zipmap [:itemname
;;                                                               :overpaymentpercentage]
;;                                                               [(:description_invoiceanalyzer %)
;;                                                               (int (* 100 (read-string (:variance_invoiceanalyzer %))))])) input-data-map))]
;;     {;:vendor          vendor
;;     :invoice_number  invoice-number
;;     :invoice_amount  invoice-amount
;;     :items        (vec items)}))

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
