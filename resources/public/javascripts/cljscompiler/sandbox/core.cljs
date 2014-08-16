(ns sandbox.core
  (:require [antares.core :as antares]
            [components.core :as components]))

(antares/create-component components/files-list)
(antares/create-component components/templates-list)
(antares/create-component components/active-file)
(antares/create-component components/week1-template)

(defn create-output-structure
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

(def input-data (get-in @antares/app-state [:active-file-data :filecontent]))
(create-output-structure input-data)

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
