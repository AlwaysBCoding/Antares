(ns shaun-example.core
  (:require [antares.core :as antares]))

(defn event-mappings
  [event]
  (cond
   (and (= (-> event .-type) "click")
        (= (-> event .-target .-textContent) "Clojure")) [:clojure-triggered {}]
   (= (-> event .-type) "click") [:click-triggered {}]
   :else [:no-action {}]))

(defn controller
  [[control data]]  
  (cond
   (= control :click-triggered) ""))

;; INITIALIZE STATE
(reset! antares/app-state {:language-list {:languages [{:display "Clojure"}
                                                       {:display "Ruby"}
                                                       {:display "Javascript"}]}})

(def language-item
  (antares/component
   {:ident :language-item
    :render (fn [data]
              [:li.language-item (-> data :display)])}))

(def language-list
  (antares/component
   {:ident :language-list
    :render (fn [data]
              [:ul.language-list
               (for [item (-> data :languages)]
                 (antares/render-html language-item item))])
    :style [:ul.language-list
            {:list-style-type "none"}]}))

(def root
  (antares/component
   {:ident :root
    :render (fn [data]
              [:div.container
               [:h1 "HELLO WORLD!"]
               (antares/render-html language-list (get-in @antares/app-state [:language-list]))])
    :style [:div.container
            (:style language-list)
            [:h1 {:color "green"}]]}))

(antares/bind root [] "#antares")
(antares/event-loop event-mappings controller)
(antares/renderer root)
