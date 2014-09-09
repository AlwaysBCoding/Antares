(ns cljs.hackpad.reagent
  (:require [reagent.core :as reagent :refer (atom)]))

(defn some-component []
  [:div
   [:h3 "I am a component!"]
   [:p.some-class
    "I have " [:strong "bold"]
    [:span {:style {:color "red"}} " and red"]
    " text."]])

(defn parent-component []
  [:div
   [:p "I am a parent component"]
   [some-component]])

(defn hello-component [name]
  [:p "Hello, " name "!"])

(defn say-hello []
  [hello-component "world"])

(defn lister [items]
  [:ul
   (for [item items]
     ^{:key item} [:li "Item " item])])

(defn lister-user []
  [:div
   "Here is a list:"
   [lister (range 5)]])

;; Stateful

(defn counting-component-2 []
  (let [click-count (atom 0)]
    (fn []
      [:div
       [:p "The atom " [:code "click-count"] " has value: " @click-count "."]
       [:input {:type "button"
                :value "Click me!"
                :on-click #(swap! click-count inc)}]])))

(defn counting-component []
  (let [click-count (atom 0)]
    (fn []
      [:div
       [:p "The atom " [:code "click-count"] " has value: " @click-count "."]
       [:input {:type "button"
                :value "Click me!"
                :on-click #(swap! click-count inc)}]
       [counting-component-2]])))

#_(reagent/render-component [counting-component] (js/document.querySelector "#app-target"))

(defn atom-input [value]
  [:input {:type "text"
           :value @value
           :on-change #(reset! value (-> % .-target .-value))}])

(defn shared-state []
  (let [initial-value (atom "initial value...")]
    (fn []
      [:div
       [:p "This is two way data binding by passing the atom as property of sub-component"]
       [:pre @initial-value]
       [:p "Change it here: " [atom-input initial-value]]])))

#_(reagent/render-component [shared-state] (js/document.querySelector "#app-target"))

(def bmi-data (atom {:height 180
                     :weight 80}))

(defn calculate-bmi []
  (let [{:keys [height weight bmi] :as data} @bmi-data]
    (if (nil? bmi)
      (assoc data :bmi (/ weight (* (/ height 100) (/ height 100))))
      (assoc data :weight (* bmi (/ height 100) (/ height 100))))))

(defn slider [param value min max]
  (let [reset (case param :bmi :weight :bmi)]
    [:input {:type "range"
             :value value
             :min min
             :max max
             :style {:width "100%"}
             :on-change #(swap! bmi-data assoc
                                param (-> % .-target .-value)
                                reset nil)}]))

(defn bmi-component []
  (let [{:keys [weight height bmi]} (calculate-bmi)
        [color diagnose] (cond
                          (< bmi 18.5) ["orange" "underweight"]
                          (< bmi 25)   ["inherit" "normal"]
                          (< bmi 30)   ["orange" "overweight"]
                          :else ["red" "obese"])]

    [:div
     [:h3 "BMI Calculator"]
     [:div
      "Height: " (int height) "cm"
      [slider :height height 100 220]]
     [:div
      "Weight: " (int weight) "kg"
      [slider :weight weight 30 150]]
     [:div
      "BMI: " (int bmi) " "
      [:span {:style {:color color}} diagnose]
      [slider :bmi bmi 10 50]]]))

#_(reagent/render-component [bmi-component] (js/document.querySelector "#app-target"))

;; Example 1

;; Ambient State
(def timer (atom (js/Date.)))
(def time-color (atom "coral"))

;; Util Fns
(defn update-time [time]
  (js/setTimeout #(reset! time (js/Date.)) 100))

(defn greeting [message]
  [:h1 message])

(defn clock []
  (update-time timer)
  (let [time-string (-> @timer
                        .toTimeString
                        (clojure.string/split " ")
                        first)]

    [:div.example-clock
     {:style {:color @time-color}}
     time-string]))

(defn color-input []
  [:div.color-input
   "Time Color: "
   [:input {:type "text"
            :value @time-color
            :on-change #(reset! time-color (-> % .-target .-value))}]])

(defn simple-example []
  [:div
   [greeting "Hello world, it is now"]
   [clock]
   [color-input]])

;; Jordan Example

;; State
(def sports-list (atom [{:display "NBA"}
                        {:display "NFL"}
                        {:display "MLB"}
                        {:display "NHL"}
                        {:display "MMA"}]))

(def active-sport (atom {}))

(def teams-list (atom []))
(def active-team (atom {}))

(def nba-teams [{:display "Wizards"}
                {:display "Bucks"}
                {:display "Spurs"}
                {:display "TrailBlazers"}])

(defn activate-team!
  [team]
  (case (team :display)
        "NBA" (reset! teams-list nba-teams)
        :else (reset! teams-list [])))


(defn activatable-item-component [item active-item activate-fn]
  (let [stateful-mappings (if (= item @active-item)
                            (do
                              (js/console.log "active item...")
                              {:class "active"
                               :style {:color "red"}})
                            {})]
    (fn []
      [:li (into stateful-mappings {:on-click #(do
                                                 (reset! active-item item))})
       (item :display)])))

(defn activatable-items-list-component [items active-item activate-fn]
  [:ul
   {:style {:cursor "pointer"}}
   (for [item @items]
     [activatable-item-component item active-item activate-fn])])

(defn app []
  [:div
   [:h1 "Hello from the most logical framework I've ever seen..."]
   [activatable-items-list-component sports-list active-sport (fn [item])]])

(reagent/render-component [app] (js/document.querySelector "#app-target"))

;; Todo Example

(def todos (atom (sorted-map)))
(def counter (atom 0))

(defn add-todo [text]
  (let [id (swap! counter inc)]
    (swap! todos assoc id {:id id :title text :done false})))

(defn toggle [id] (swap! todos update-in [id :done] not))
(defn save [id title] (swap! todos assoc-in [id :title] title))
(defn delete [id] (swap! todos dissoc id))

(defn mmap [m f a] (->> m (f a) (into (empty m))))
(defn complete-all [v] (swap! todos mmap map #(assoc-in % [1 :done] v)))
(defn clear-done [] (swap! todos mmap remove #(get-in % [1 :done])))

(add-todo "Rename Cloact to Reagent")
(add-todo "Add undo demo")
(add-todo "Make all rendering async")
(add-todo "Allow any arguments to component functions")
(complete-all true)

(defn todo-input [{:keys [title on-save on-stop]}]
  (let [val (atom title)
        stop #(do (reset! val " ")
                  (if on-stop (on-stop)))
        save #(let [v (-> @val str clojure.string/trim)]
                (if-not (empty? v) (on-save v))
                (stop))]

    (fn [props]
      [:input (merge props
                     {:type "text"
                      :value @val
                      :on-blur save
                      :on-change #(reset! val (-> % .-target .-value))
                      :on-key-up #(case (.-which %)
                                    13 (save)
                                    27 (stop)
                                    nil)})])))

(def todo-edit
  (with-meta todo-input
    {:component-did-mount #(.focus (reagent/dom-node %))}))

(defn todo-stats [{:keys [filt active done]}]
  (let [props-for (fn [name]
                    {:class (if (= name @filt) "selected")
                     :on-click #(reset! filt name)})]
    [:div
     [:span#todo-count
      [:strong active] " " (case active 1 "item" "items") " left"]
     [:ul#filters
      [:li [:a (props-for :all) "All"]]
      [:li [:a (props-for :active) "Active"]]
      [:li [:a (props-for :done) "Completed"]]]

     (when (pos? done)
       [:button#clear-completed {:on-click clear-done}
        "Clear completed" done])]))

(defn todo-item []
  (let [editing (atom false)]
    (fn [{:keys [id done title]}]
      [:li {:class (str (if done "completed ")
                        (if @editing "editing"))}
       [:div.view
        [:input.toggle {:type "checkbox"
                        :checked done
                        :on-change #(toggle id)}]
        [:label {:on-double-click #(reset! editing true)} title]
        [:button.destroy {:on-click #(delete id)}]]]

      (when @editing
        [todo-edit {:class "edit"
                    :title title
                    :on-save #(save id %)
                    :on-stop #(reset! editing false)}]))))

(defn todo-app [props]
  (let [filt (atom :all)]
    (fn []
      (let [items (vals @todos)
            done (->> items (filter :done) count)
            active (- (count items) done)]

        [:div
         [:section#todoapp
          [:header#header
           [:h1 "Todos"]
           [todo-input {:id "new-todo"
                        :placeholder "What needs to be done?"
                        :on-save add-todo}]]
          (when (-> items count pos?)
            [:div
             [:section#main
              [:input#toggle-all {:type "checkbox"
                                  :checked (zero? active)
                                  :on-change #(complete-all (pos? active))}]
              [:label {:for "toggle-all"} "Mark all as complete"]
              [:ul#todo-list
               (for [todo (filter (case @filt
                                    :active (complement :done)
                                    :done :done
                                    :all identity) items)]
                 ^{:key (:id todo)} [todo-item todo])]]])]]))))

#_(reagent/render-component [todo-app] (js/document.querySelector "#app-target"))
