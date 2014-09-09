(ns antares.helpers
  (:require [ajax.core :as ajax]
            [cljs.reader :as cljs-reader]))

;; READERS
(defn string->data
  [string]
  (cljs-reader/read-string string))

;; ASYNC
(defn get
  [request]
  (ajax/GET (-> request :uri) {:params (request :params)
                               :handler (request :handler)}))

(defn post
  [request]
  (ajax/POST (-> request :uri) {:params (request :params)
                                :handler (request :handler)}))
