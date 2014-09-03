(ns data.queries.core
  (:require [datomic.api :as d]
            [data.db.config :as config]
            [plumbing.core :refer (defnk)]))

(defnk get-template
  [eid]
  (d/entity (config/db) eid))

(defnk basic-query
  [query]
  (d/q
   query
   (config/db)))
