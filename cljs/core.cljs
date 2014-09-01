(ns sandbox.core
  (:require [antares.core :as antares]
            [components.core :as components]))

;; (antares/create-component components/files-list)
;; (antares/create-component components/templates-list)
;; (antares/create-component components/active-file)
;; (antares/create-component components/week1-template)
;; (antares/create-component components/active-template-mapping-fn)

;; REPL
#_
(
 ;; Config
 (require 'weasel.repl.websocket)
 (cemerick.piggieback/cljs-repl
        :repl-env (weasel.repl.websocket/repl-env
                   :ip "0.0.0.0" :port 9001))
)
