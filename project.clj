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

                 [environ "0.5.0"]
                 [http-kit "2.1.16"]
                 [ring "1.3.0"]
                 [fogus/ring-edn "0.2.0"]
                 [compojure "1.1.8"]
                 
                 [cljs-http "0.1.15"]
                 [cljs-ajax "0.2.6"]
                 [hiccups "0.3.0"]
                 [garden "1.2.1"]

                 [prismatic/dommy "0.1.2"]]

  :plugins [[lein-cljsbuild "1.0.3"]]

  :source-paths ["src-clj"]
  
  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

  :main web.core

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src-cljs"]
                        :compiler {:optimizations :none
                                   :output-to "resources/public/javascripts/cljscompiler/dev.js"
                                   :output-dir "resources/public/javascripts/cljscompiler/"
                                   :pretty-print true
                                   :source-map true}}]})
