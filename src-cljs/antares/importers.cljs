(ns antares.importers
  (:require [cljs-http.client :as http]))

(defn s3File
  [bucket-name file-name]
  (-> (str "http://s3.amazonaws.com/" bucket-name "/" file-name)
      (http/get {:with-credentials? false})))
