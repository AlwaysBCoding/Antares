(ns antares.macros)

(defmacro dom
  [& nodes]
  `(.log js/console "from heah!"))
