(ns web.core
  (:require [web.server :as server]
            [cemerick.austin.repls :refer (browser-connected-repl-js)]))

(defn -main
  []
  (println "Server starting on port 8989")
  (server/start-server {:port 8989}))
