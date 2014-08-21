(ns data.core
  (:require [datomic.api :as d]
            [plumbing.core :refer (defnk)]
            [data.db.config :as config]
            [data.db.schema :refer (schema)]
            [data.db.seeds :as seeds]))

(defnk transact-schema
  [connection]
  @(d/transact connection (schema)))

(defn reset-db
  []
  (config/delete-db)
  (config/create-db)
  (transact-schema {:connection (config/connection)}))
