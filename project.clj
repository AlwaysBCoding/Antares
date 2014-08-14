(defproject sandbox "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2277"]
                 [org.clojure/core.async "0.1.303.0-886421-alpha"]

                 [com.cemerick/piggieback "0.1.3"]
                 [weasel "0.3.0"]
                 
                 [cljs-http "0.1.15"]
                 [hiccups "0.3.0"]

                 [prismatic/dommy "0.1.2"]]

  :plugins [[lein-cljsbuild "1.0.3"]]

  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src-cljs"]
                        :compiler {:optimizations :none
                                   :output-to "resources/public/javascripts/cljscompiler/dev.js"
                                   :output-dir "resources/public/javascripts/cljscompiler/"
                                   :pretty-print true
                                   :source-map true}}]})
