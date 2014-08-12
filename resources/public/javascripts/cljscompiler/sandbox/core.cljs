(ns sandbox.core
  (:require [antares.core :as antares]))

(antares/two-way-bind [:firstname] ".firstname-input")
(antares/data-bind [:firstname] ".firstname-binding" (fn [data] data))

(def test-file (antares/map->S3File {:bucket-name "refsareblind-gamelogs-basketball-reference"
                                     :file-name "bulls--wizards--20140425.txt"}))

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
)
