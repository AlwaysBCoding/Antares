(ns sandbox.core
  (:require [antares.core :as antares]))

(def display-name
  (antares/data-bind '([:firstname] [:lastname])
                     ".display-name"
                     (fn [[firstname lastname]]
                       (str firstname " " lastname))))

(def first-name
  (antares/two-way-bind
    [:firstname]
    ".input-first-name"))

(def last-name
  (antares/two-way-bind
    [:lastname]
    ".input-last-name"))

(def items-list
  (antares/create-component {:app-cursor [:items]
                             :dom-cursor ".items-list"
                             :interactions {}
                             :render-fn (fn [data]
                                          (map (fn [datum] [:li.item (-> datum :name)]) data))}))

(def add-item
  (antares/bind-event ".add-item"
                      "click"
                      (fn [event]
                        (antares/update-cursor [:items]
                                               (fn [old-value] (conj old-value {:name "item"}))))))

(def atom-inspector
  (antares/data-bind []
                     ".app-state-inspector"
                     (fn [data]
                       (pr-str data))))

(def atom-inspector
  (antares/bind-event ".app-state-inspector"
                      "input"
                      (fn [event]
                        (antares/update-app-state
                          (fn [] (antares/read-data (-> event .-target .-value)))))))

;; RENDER DOM
(antares/dom

[:h1.display-name ~{display-name}]

[:div.firstname
  [:label "First Name"]
  [:input.first-name
   ${"input" 'update-first-name}]]

[:div.lastname
  [:label "Last Name"]
  [:input.last-name
   ${"input" 'update-last-name}]]

[:div.items
 [:ul.items-list ~@{items-list}]]

)
