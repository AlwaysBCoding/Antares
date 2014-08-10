// Compiled by ClojureScript 0.0-2277
goog.provide('sandbox.core');
goog.require('cljs.core');
goog.require('antares.core');
goog.require('antares.core');
antares.core.create_component.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),".items",new cljs.core.Keyword(null,"interactions","interactions",550841811),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (p__15150){var vec__15151 = p__15150;var data = cljs.core.nthnext.call(null,vec__15151,(0));return cljs.core.map.call(null,((function (vec__15151,data){
return (function (datum){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.item","li.item",1019267471),datum], null);
});})(vec__15151,data))
,data);
})], null));
document.querySelector(".add-item").addEventListener("click",(function (){return cljs.core.swap_BANG_.call(null,antares.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null),cljs.core.conj,"item");
}));

//# sourceMappingURL=core.js.map