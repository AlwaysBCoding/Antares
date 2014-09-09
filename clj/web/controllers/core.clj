(ns web.controllers.core
  (:require [datomic.api :as d]
            [data.db.config :as config]
            [data.queries.core :as queries]
            [data.transactions.core :as transactions]
            [web.serializers.core :as serializers]
            [cognitect.transit :as transit]))

(defn compile-template
  [request]
  (let [compile-data (if (not-empty (-> request :params :compile-data))
                       (-> request :params :compile-data read-string)
                       "")
        template     (if (not-empty (-> request :params :template))
                       (-> request :params :template read-string)
                       "")]
    (if (= template "")
      (pr-str [:div.template])
      (pr-str ((eval template) compile-data)))))

(defn save-template
  [request]
  (-> {:eid (-> request :params :eid)
       :html-fn (-> request :params :html-fn)
       :css-data (-> request :params :css-data)
       :test-data (-> request :params :test-data)}
      (transactions/save-template!)
      (str)))

(defn get-template
  [request]
  (->> {:eid (-> request :params :id read-string)}
       (queries/get-template)
       (d/touch)
       (serializers/get-template)))

(defn datomic-query
  [request]  
  (->> {:query (-> request :params :query eval)}
       (queries/basic-query)
       (pr-str)))

(defn transit-test
  [request]
  (prn request)
  "okay")
