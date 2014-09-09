(ns antares.helpers
  (:require [ajax.core :as ajax]))

;; ASYNC
(defn get
  [request]
  (ajax/GET (-> request :uri) {:params (request :params)
                               :handler (request :handler)}))

(defn post
  [request]
  (ajax/POST (-> request :uri) {:params (request :params)
                                :handler (request :handler)}))
