(ns web.controllers.core
  (:require [data.queries.core :as queries]
            [data.transactions.core :as transactions]))

(defn compile-template
  [request]
  (println (-> request :params :template))
  (println (-> request :params :compile-data))
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
  (let [eid (-> request :params :eid)
        html-fn (-> request :params :html-fn)
        css-data (-> request :params :css-data)
        test-data (-> request :params :test-data)]
    (-> (transactions/save-template 
         {:eid eid
          :html-fn html-fn
          :css-data css-data
          :test-data test-data})))
  "Save Successful")
