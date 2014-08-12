(ns antares.macros)

(defmacro dom
  [& nodes]
  `(.log js/console "from heah!"))

(defmacro slurp [source]
  (clojure.core/slurp source))
