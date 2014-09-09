(ns web.server
  (:require [org.httpkit.server :refer (run-server)]
            [ring.middleware.resource :refer (wrap-resource)]
            [ring.middleware.file-info :refer (wrap-file-info)]
            [ring.middleware.edn :refer (wrap-edn-params)]            
            [web.routes :as routes]))

(def app
  (-> routes/app-routes
      (wrap-edn-params)
      (wrap-resource "public")
      (wrap-file-info)))

(def server (atom nil))

(defn stop-server []
  (when @server
    (@server))
  (reset! server nil))

(defn start-server [config]
  (stop-server)
  (reset! server (run-server app config)))
