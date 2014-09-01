(ns antares.importers
  (:require [cljs-http.client :as http]))

(defn s3File
  [bucket-name file-name]
  (-> (str "http://s3.amazonaws.com/" bucket-name "/" file-name)
      (http/get {:with-credentials? false})))

(defn s3Bucket
  [bucket-name]
  (-> (str "http://antares-services.herokuapp.com/services/s3/" bucket-name "/list-objects")
      (http/get {})))
