(ns web.routes
  (:require [compojure.core :refer (GET POST defroutes)]
            [compojure.route :as route]
            [web.controllers.core :as controllers]))

(defroutes app-routes
  (GET "/" [] "HELLO WORLD!")
  (POST "/transit-test"         [] controllers/transit-test)
  (POST "/compile-template"     [] controllers/compile-template)
  (POST "/compile-clojure-fn"   [] controllers/compile-clojure-fn)
  (GET "/template/:id"          [] controllers/get-template)
  (POST "/template/:id/save"    [] controllers/save-template)
  (POST "/datomic/query"        [] controllers/datomic-query))
