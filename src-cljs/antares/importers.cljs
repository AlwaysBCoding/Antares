;; (ns antares.importers
;;   (:require-macros [antares.macros :refer [slurp]]))

;; (defn s3File
;;   [bucket-name file-name]
;;   (slurp (str "https://s3.amazonaws.com/refsareblind-gamelogs-basketball-reference/bulls--wizards--20140425.txt")))

;; (ns antares.importers
;;   (:require-macros [cljs.core.async.macros :refer (go)])
;;   (:require [cljs-http.client :as http]
;;             [cljs.core.async :refer (<!)]
;;             [cljs.reader :as edn]))

;; (defn s3File
;;   [bucket-name file-name]
;;   (go
;;     (let [response (-> (str "https://s3.amazonaws.com/" bucket-name "/" file-name)
;;                        (http/get {})
;;                        (<!)
;;                        (:body)
;;                        (edn/read-string))]
;;       (.log js/console response))))

(ns antares.importers)

(defn s3File
  [bucket-name file-name]
  (.log js/console "import-data called")
  (str bucket-name "/" file-name))
