(ns antares.core
  (:require-macros
    [dommy.macros :refer [node sel sel1]])
  (:require
    [dommy.core :as dommy]
    [dommy.utils :as utils]
    [dommy.attrs :as attrs]
    [cljs.reader :as edn]))

;; GLOBAL ATOMS
(def app-state (atom {}))
(def registered-bindings (atom []))

(add-watch app-state :render-bindings
  (fn [k r old-state new-state] (render-bindings @registered-bindings new-state)))

;; RENDERABLE PROTOCOL
(defprotocol Renderable
  (render [self]))

(defrecord DataBinding
  [app-cursor dom-cursor render-fn]
  
  Renderable
  (render [self]
    (let [target-node (sel1 dom-cursor)
          target-data (if (= (type app-cursor) cljs.core/List)
                        (render-fn (map (fn [cursor]
                                          (if-let [app-data (get-in @app-state cursor)]
                                            app-data
                                            "")) app-cursor))
                        (render-fn (if-let [app-data (get-in @app-state app-cursor)]
                                     app-data
                                     "")))]
      (dommy/set-text! target-node target-data))))

;; LIBRARY CODE
(defn register-app-state-cursor
  [cursor]
  (if (nil? (get-in @app-state cursor))
    (swap! app-state (fn [app-value]
                       (update-in app-value cursor (fn [old-value] nil))))))

(defn register-binding
  [data-binding]
  (swap! registered-bindings conj data-binding))

(defn render-bindings
  [data-bindings]
  (doseq [data-binding data-bindings]
    (render data-binding)))


;; CREATE DATA BINDINGS [can take lists for app-cursor or dom-cursor]
(defmulti create-data-binding (fn [app-cursors dom-cursor render-fn]
                                (= (type app-cursors) cljs.core/List)))

(defmethod create-data-binding false [app-cursor dom-cursor render-fn]
  (let [data-binding (map->DataBinding
                      {:app-cursor app-cursor
                       :dom-cursor dom-cursor
                       :render-fn  render-fn})]
    (register-app-state-cursor app-cursor)
    (register-binding data-binding)
    (render data-binding)
    data-binding))

(defmethod create-data-binding true [app-cursors dom-cursor render-fn]
  (let [data-binding (map->DataBinding
                      {:app-cursor app-cursors
                       :dom-cursor dom-cursor
                       :render-fn  render-fn})]
    (doseq [app-cursor app-cursors]
      (register-app-state-cursor app-cursor))
    (register-binding data-binding)
    (render data-binding)
    data-binding))

(defmulti data-bind (fn [app-cursors dom-cursors render-fn]
                      (= (type dom-cursors) cljs.core/List)))

(defmethod data-bind false [app-cursor dom-cursor render-fn]
  (create-data-binding app-cursor dom-cursor render-fn))

(defmethod data-bind true [app-cursor dom-cursors render-fn]
  (doseq [dom-cursor dom-cursors]
    (create-data-binding app-cursor dom-cursor render-fn)))
