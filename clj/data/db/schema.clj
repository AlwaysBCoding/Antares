(ns data.db.schema
  (:require [datomic.api :as d]))

(defn schema []
  [

   {:db/id (d/tempid :db.part/db)
    :db/ident :msg.template/html-fn
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db.install/_attribute :db.part/db}
   
   {:db/id (d/tempid :db.part/db)
    :db/ident :msg.template/css-data
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db.install/_attribute :db.part/db}
   
   {:db/id (d/tempid :db.part/db)
    :db/ident :msg.template/clj-mapping-fn
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db.install/_attribute :db.part/db}
   
   {:db/id (d/tempid :db.part/db)
    :db/ident :msg.template/test-data
    :db/valueType :db.type/string
    :db/cardinality :db.cardinality/one
    :db.install/_attribute :db.part/db}

  ])
