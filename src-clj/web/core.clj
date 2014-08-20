(ns web.core
  (:require [web.server :as server]))

(defn -main
  []
  (println "Server starting on port 8989")
  (server/start-server {:port 8989}))
