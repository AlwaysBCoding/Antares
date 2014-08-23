(ns channels.core
  (:require-macros [cljs.core.async.macros :refer (go)])
  (:require [goog.dom :as gcc-dom]
            [goog.events :as gcc-events]
            [cljs.core.async :refer (chan put! <!)]))

(let [mouse-channel (chan)
      click-channel (chan)]
  (gcc-events/listen (gcc-dom/getDocument) "mousemove" (fn [event] (put! mouse-channel [(.-clientX event) (.-clientY event)])))
  (gcc-events/listen (gcc-dom/getDocument) "click" (fn [event] (put! click-channel (.-clientX event))))

  (go
    (loop []
      (let [[event channel-type] (alts! [click-channel mouse-channel])]
        (cond
         (= channel-type mouse-channel) (.log js/console "MOUSEMOVE")
         (= channel-type click-channel) (.log js/console "CLICK"))
        (recur)))))
