(defproject sandbox "0.1.0-SNAPSHOT"
  :description "FIXME: write description"

  :url "http://example.com/FIXME"
  
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2311"]
                 [org.clojure/core.async "0.1.303.0-886421-alpha"]
                 [com.datomic/datomic-pro "0.9.4815.12"]

                 [om "0.7.1"]
                 [sablono "0.2.22"]
                 [prismatic/om-tools "0.3.2"]

                 [reagent "0.4.2"]

                 [com.cognitect/transit-clj "0.8.247"]

                 [environ "0.5.0"]
                 [prismatic/plumbing "0.2.2"]

                 [http-kit "2.1.16"]
                 [ring "1.3.0"]
                 [fogus/ring-edn "0.2.0"]
                 [compojure "1.1.8"]
                 
                 [cljs-http "0.1.15"]
                 [cljs-ajax "0.2.6"]
                 [hiccups "0.3.0"]
                 [garden "1.2.1"]]

  :plugins [[lein-cljsbuild "1.0.3"]]

  :source-paths ["clj"]
  
  :jvm-opts ["-Xss1g" "-Xmx4g"]
  
  :repositories {"my.datomic.com" {:url "https://my.datomic.com/repo"
                                   :username ~(System/getenv "ANTARES_DATOMIC_USERNAME")
                                   :password ~(System/getenv "ANTARES_DATOMIC_PASSWORD")}}

  :repl-options {:init-ns dev.repl}
  
  :main web.core

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["cljs"]
                        :compiler {:optimizations :none
                                   :output-to "resources/public/javascripts/cljscompiler/dev.js"
                                   :output-dir "resources/public/javascripts/cljscompiler/"
                                   :pretty-print true
                                   :source-map true}}]})
