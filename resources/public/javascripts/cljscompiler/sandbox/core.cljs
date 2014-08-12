(ns sandbox.core
  (:require [antares.core :as antares]))

(antares/two-way-bind [:firstname] ".firstname-input")
(antares/data-bind [:firstname] ".firstname-binding" (fn [data] data))

(antares/create-data-component {:app-cursor [:game-data]
                                :dom-cursor ".game-data-table"
                                :interactions {}
                                :render-fn (fn [data]
                                             (let [headers (first data)
                                                   rows    (rest data)]
                                               [[:thead
                                                 [:tr
                                                  (map (fn [header] [:th header]) headers)]]
                                                [:tbody
                                                 (map (fn [row] [:tr (map (fn [row-item]
                                                                           [:td row-item]) row)]) rows)]]))
                                :data {:source "s3"
                                       :bucket-name "refsareblind-gamelogs-basketball-reference"
                                       :file-name "bulls--wizards--20140427.txt"}})

;; REPL
#_
(

 ;; Config
 (require 'weasel.repl.websocket)
 (cemerick.piggieback/cljs-repl
        :repl-env (weasel.repl.websocket/repl-env
                   :ip "0.0.0.0" :port 9001))

 ;; Interactive
 (antares/update-cursor [:firstname] (fn [old-value] "Greg"))
 (antares/import-data antares/test-file)
 antares/test-file

 ;; Testing
 (.log js/console "from the repl")
)
