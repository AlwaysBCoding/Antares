(ns web.routes
  (:require [compojure.core :refer (GET POST defroutes)]
            [compojure.route :as route]
            [web.controllers.core :as controllers]))

(defroutes app-routes
  (GET "/"                  [] controllers/hello-world)
  (GET "/compile-template"  [] controllers/compile-template)
  (POST "/compile-template" [] controllers/compile-template))
