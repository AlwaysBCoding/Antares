(ns web.serializers.core)

(defn get-template
  [input]
  (-> {:html-fn (-> input :msg.template/html-fn)
       :css-data (-> input :msg.template/css-data)
       :test-data (-> input :msg.template/test-data)}
      (pr-str)))
