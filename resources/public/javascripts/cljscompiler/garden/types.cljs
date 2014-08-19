(ns garden.types
  "Internal types used by Garden.")

(defrecord CSSUnit [unit magnitude])

(defrecord CSSFunction [function args])

(defrecord CSSAtRule [identifier value])

;;;;;;;;;;;; This file autogenerated from src/cljx/garden/types.cljx
