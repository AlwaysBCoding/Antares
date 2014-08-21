(ns data.transactions.core
  (:require [datomic.api :as d]
            [data.db.config :as config]
            [plumbing.core :refer (defnk)]
            [data.queries.core :as queries]))

(defnk save-template
  [eid html-fn css-data test-data]
  (d/transact
    (config/connection)
    [{:db/id eid
     :msg.template/html-fn html-fn
     :msg.tempalte/css-data css-data
     :msg.template/test-data test-data}]))
