// Compiled by ClojureScript 0.0-2277
goog.provide('sandbox.core');
goog.require('cljs.core');
goog.require('antares.core');
goog.require('antares.core');
antares.core.data_bind.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"firstname","firstname",1659984849)], null),".firstname",(function (data){return data.toUpperCase();
}));
antares.core.data_bind.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lastname","lastname",-265181465)], null),cljs.core.list(".lastname",".lastname2"),(function (data){return data;
}));
antares.core.data_bind.call(null,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"firstname","firstname",1659984849)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lastname","lastname",-265181465)], null)),".displayName",(function (p__11827){var vec__11828 = p__11827;var firstname = cljs.core.nth.call(null,vec__11828,(0),null);var lastname = cljs.core.nth.call(null,vec__11828,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(firstname.toUpperCase())+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lastname));
}));
cljs.core.reset_BANG_.call(null,antares.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"firstname","firstname",1659984849),"jordan",new cljs.core.Keyword(null,"lastname","lastname",-265181465),"leigh"], null));
setTimeout((function (){return cljs.core.reset_BANG_.call(null,antares.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"firstname","firstname",1659984849),"dexter",new cljs.core.Keyword(null,"lastname","lastname",-265181465),"jackson"], null));
}),(2500));

//# sourceMappingURL=core.js.map