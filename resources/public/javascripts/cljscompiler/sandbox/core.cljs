(ns sandbox.core
  (:require [antares.core :as antares]
            [cljs-http.client :as http]))

(antares/two-way-bind [:firstname] ".firstname-input")
(antares/data-bind [:firstname] ".firstname-binding" (fn [data] data))

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

(antares/create-component {:app-cursor [:files-list]
                           :dom-cursor ".files-list"
                           :interactions [{:event-type "click"
                                           :event-selector "li.file-name"
                                           :event-action (fn [event] (antares/update-cursor-async
                                                                     [:active-file]
                                                                     (str "http://antares-services.herokuapp.com/services/s3/vendoriq-data-imports/get-object/" (-> event .-target .-dataset .-filename))))}]
                           :render-fn (fn [data]
                                        (map (fn [file-name] [:li.file-name
                                                             {:data-filename file-name} file-name]) data))
                           :data {:source "s3Bucket"
                                  :bucket-name "vendoriq-data-imports"}})

(antares/create-component {:app-cursor [:active-file]
                           :dom-cursor ".active-file-content"
                           :render-fn (fn [data] data)})

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
