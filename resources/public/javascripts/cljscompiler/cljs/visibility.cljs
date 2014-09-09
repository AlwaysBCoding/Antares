(ns cljs.visibility
  (:require [antares.core :as antares]))

(reset! antares/app-state {:components []})

(set! (.-innerHTML (js/document.querySelector "#antares-debug")) (antares/compile-html! [:pre (pr-str @antares/app-state)]))
