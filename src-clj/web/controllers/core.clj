(ns web.controllers.core)

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

(defn hello-world
  [request]
  "Hello World!")
