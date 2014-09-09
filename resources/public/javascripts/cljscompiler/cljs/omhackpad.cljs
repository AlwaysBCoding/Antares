(ns cljs.omhackpad
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer-macros (html)]
            [cljs.core.async :refer (chan <! put!)])
  (:require-macros [cljs.core.async.macros :refer (go)]))

;; (def app-state (atom {:courses [{:display "Course 1"}
;;                                 {:display "Course 2"}
;;                                 {:display "Course 3"}]
;;                       :classes [{:display "Class 1"}
;;                                 {:display "Class 2"}
;;                                 {:display "Class 3"}]}))

;; (defn app
;;   [cursor owner]

;;   (reify

;;     om/IRender
;;     (render [self]
;;       (html
;;        [:div.container
;;         [:h1 "Go Win"]]))))

;; (om/root app app-state {:target (js/document.querySelector "#app-target")})

;; ;; (defn map-hotkey [event]
;; ;;   (when (and (.-ctrlKey event) (.-shiftKey event))
;; ;;     (cond
;; ;;      (= (.-keyCode event) 88) :eval-tlf
;; ;;      (= (.-keyCode event) 90) :load-buf)))

;; ;; (defn code-editor [code owner]
;; ;;   (reify

;; ;;     om/IRenderState
;; ;;     (render-state [self {:keys [control-stream]}]
;; ;;       (html [:div
;; ;;              {:on-key-down (fn [event]
;; ;;                              (some->> (map-hotkey event)
;; ;;                                       (put! control-stream)))}]))

;; ;;     om/IDidMount
;; ;;     (did-mount [self]
;; ;;       (js/CodeMirror (om/get-node owner) #js {:matchBrackets true
;; ;;                                               :autoCloseBrackets true
;; ;;                                               :theme "solarized light"
;; ;;                                               :mode "clojure"}))))

;; ;; (defn codemirror-app [app-state owner]
;; ;;   (reify

;; ;;     om/IWillMount
;; ;;     (will-mount [self]
;; ;;       (let [control-stream (chan)]
;; ;;         (om/set-state! owner :control-stream control-stream)
;; ;;         (go
;; ;;           (while true
;; ;;             (let [control (<! control-stream)]
;; ;;               (println "control: " control))))))

;; ;;     om/IRenderState
;; ;;     (render-state [self {:keys [control-stream]}]
;; ;;       (html [:div.container
;; ;;              [:div.code-editor
;; ;;               (om/build code-editor app-state
;; ;;                         {:init-state {:control-stream control-stream}})]]))))

;; ;; (om/root codemirror-app app-state {:target (js/document.querySelector "#app-target")})
