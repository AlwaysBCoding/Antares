(ns data.db.config
  (:require [datomic.api :as d]
            [environ.core :refer :all]))

(def db-uri (env :codon-datomic-uri))
(defn connection [] (d/connect db-uri))
(defn create-db  [] (d/create-database db-uri))
(defn delete-db  [] (d/delete-database db-uri))
(defn db         [] (d/db (connection)))
