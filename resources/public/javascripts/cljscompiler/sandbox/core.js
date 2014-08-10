// Compiled by ClojureScript 0.0-2277
goog.provide('sandbox.core');
goog.require('cljs.core');
goog.require('antares.core');
goog.require('antares.core');
antares.core.data_bind.call(null,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"firstname","firstname",1659984849)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lastname","lastname",-265181465)], null)),".display-name",(function (p__16582){var vec__16583 = p__16582;var firstname = cljs.core.nth.call(null,vec__16583,(0),null);var lastname = cljs.core.nth.call(null,vec__16583,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(firstname)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lastname));
}));
antares.core.bind_event.call(null,".input-first-name","input",(function (event){return antares.core.update_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"firstname","firstname",1659984849)], null),event.target.value);
}));
antares.core.bind_event.call(null,".input-last-name","input",(function (event){return antares.core.update_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lastname","lastname",-265181465)], null),event.target.value);
}));

//# sourceMappingURL=core.js.map