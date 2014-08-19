// Compiled by ClojureScript 0.0-2277
goog.provide('template_builder.core');
goog.require('cljs.core');
goog.require('hiccups.runtime');
goog.require('hiccups.runtime');
goog.require('cljs_http.client');
goog.require('cljs_http.client');
goog.require('antares.core');
goog.require('antares.core');
template_builder.core.textarea__GT_codemirror = (function textarea__GT_codemirror(dom_cursor,options){return (function (){return CodeMirror.fromTextArea(document.querySelector(dom_cursor),options);
});
});
template_builder.core.render_dynamic_html = (function render_dynamic_html(data){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.not_empty.call(null,data))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs12559 = data;if(cljs.core.map_QMARK_.call(null,attrs12559))
{return ("<textarea"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs12559)))+"></textarea>");
} else
{return ("<textarea>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs12559))+"</textarea>");
}
})())):("<textarea></textarea>"))));
});
template_builder.core.dynamic_html = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-html","dynamic-html",-919120810)], null),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),".dynamic-html",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),template_builder.core.render_dynamic_html,new cljs.core.Keyword(null,"interactions","interactions",550841811),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-type","event-type",319722813),"blur",new cljs.core.Keyword(null,"event-selector","event-selector",1193857930),"textarea",new cljs.core.Keyword(null,"event-action","event-action",-974748529),(function (event){return antares.core.update_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-html","dynamic-html",-919120810)], null),(function (old_value){return event.target.value;
}));
})], null)], null)], null);
antares.core.create_component.call(null,template_builder.core.dynamic_html);

//# sourceMappingURL=core.js.map