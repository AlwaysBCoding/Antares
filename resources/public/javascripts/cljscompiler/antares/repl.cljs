(ns antares.repl
  (:require [weasel.repl :as ws-repl]))

(.log js/console "WEASEL REPL ACTIVATED")
(ws-repl/connect "ws://localhost:9001" :verbose true)
