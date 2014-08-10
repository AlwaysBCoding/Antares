// Compiled by ClojureScript 0.0-2277
goog.provide('sandbox.core');
goog.require('cljs.core');
goog.require('antares.core');
goog.require('antares.core');
antares.core.data_bind.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display-name","display-name",694513143)], null),".display-name",(function (data){return data;
}));
antares.core.data_bind.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display-name","display-name",694513143)], null),".input-name",(function (data){return data;
}));
antares.core.bind_event.call(null,".input-name","input",(function (event){return antares.core.update_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display-name","display-name",694513143)], null),event.target.value);
}));
antares.core.bind_event.call(null,".reset-button","click",(function (event){return antares.core.update_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display-name","display-name",694513143)], null),"reset!!");
}));

//# sourceMappingURL=core.js.map