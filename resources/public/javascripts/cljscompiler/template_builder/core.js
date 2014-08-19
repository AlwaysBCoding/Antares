// Compiled by ClojureScript 0.0-2277
goog.provide('template_builder.core');
goog.require('cljs.core');
goog.require('hiccups.runtime');
goog.require('hiccups.runtime');
goog.require('cljs_http.client');
goog.require('cljs_http.client');
goog.require('antares.core');
goog.require('antares.core');
template_builder.core.textarea__GT_codemirror = (function() {
var textarea__GT_codemirror = null;
var textarea__GT_codemirror__2 = (function (app_cursor,dom_cursor){return textarea__GT_codemirror.call(null,app_cursor,dom_cursor,cljs.core.PersistentArrayMap.EMPTY);
});
var textarea__GT_codemirror__3 = (function (app_cursor,dom_cursor,options){return (function (){var codemirror = CodeMirror.fromTextArea(document.querySelector(dom_cursor),options);codemirror.setOption("theme","solarized light");
codemirror.setOption("mode","clojure");
codemirror.setOption("matchBrackets",true);
codemirror.setOption("lineNumbers",true);
return codemirror.on("blur",((function (codemirror){
return (function (self,event){console.log(self);
return antares.core.update_cursor.call(null,app_cursor,((function (codemirror){
return (function (old_value){return self.getValue();
});})(codemirror))
);
});})(codemirror))
);
});
});
textarea__GT_codemirror = function(app_cursor,dom_cursor,options){
switch(arguments.length){
case 2:
return textarea__GT_codemirror__2.call(this,app_cursor,dom_cursor);
case 3:
return textarea__GT_codemirror__3.call(this,app_cursor,dom_cursor,options);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
textarea__GT_codemirror.cljs$core$IFn$_invoke$arity$2 = textarea__GT_codemirror__2;
textarea__GT_codemirror.cljs$core$IFn$_invoke$arity$3 = textarea__GT_codemirror__3;
return textarea__GT_codemirror;
})()
;
template_builder.core.render_dynamic_html = (function render_dynamic_html(data){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.not_empty.call(null,data))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs13081 = data;if(cljs.core.map_QMARK_.call(null,attrs13081))
{return ("<textarea"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs13081)))+"></textarea>");
} else
{return ("<textarea>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs13081))+"</textarea>");
}
})())):("<textarea></textarea>"))));
});
template_builder.core.dynamic_html = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-html","dynamic-html",-919120810)], null),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),".dynamic-html",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),template_builder.core.render_dynamic_html,new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),template_builder.core.textarea__GT_codemirror.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-html","dynamic-html",-919120810)], null),".dynamic-html textarea")], null);
antares.core.create_component.call(null,template_builder.core.dynamic_html);
template_builder.core.render_dynamic_css = (function render_dynamic_css(data){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.not_empty.call(null,data))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs13087 = data;if(cljs.core.map_QMARK_.call(null,attrs13087))
{return ("<textarea"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs13087)))+"></textarea>");
} else
{return ("<textarea>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs13087))+"</textarea>");
}
})())):("<textarea></textarea>"))));
});
template_builder.core.dynamic_css = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-css","dynamic-css",585044647)], null),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),".dynamic-css",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),template_builder.core.render_dynamic_css,new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),template_builder.core.textarea__GT_codemirror.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-css","dynamic-css",585044647)], null),".dynamic-css textarea")], null);
antares.core.create_component.call(null,template_builder.core.dynamic_css);
template_builder.core.render_dynamic_test_data = (function render_dynamic_test_data(data){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.not_empty.call(null,data))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs13093 = data;if(cljs.core.map_QMARK_.call(null,attrs13093))
{return ("<textarea"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs13093)))+"></textarea>");
} else
{return ("<textarea>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs13093))+"</textarea>");
}
})())):("<textarea></textarea>"))));
});
template_builder.core.dynamic_test_data = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-test-data","dynamic-test-data",1083836493)], null),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),".dynamic-test-data",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),template_builder.core.render_dynamic_test_data,new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),template_builder.core.textarea__GT_codemirror.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-test-data","dynamic-test-data",1083836493)], null),".dynamic-test-data textarea")], null);
antares.core.create_component.call(null,template_builder.core.dynamic_test_data);

//# sourceMappingURL=core.js.map