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
var textarea__GT_codemirror__2 = (function (app_cursor,dom_cursor){return textarea__GT_codemirror.call(null,app_cursor,dom_cursor,new cljs.core.PersistentArrayMap(null, 4, ["theme","solarized light","mode","clojure","matchBrackets",true,"lineNumbers",true], null));
});
var textarea__GT_codemirror__3 = (function (app_cursor,dom_cursor,options){return (function (){var codemirror = CodeMirror.fromTextArea(document.querySelector(dom_cursor),cljs.core.PersistentArrayMap.EMPTY);var seq__15042_15048 = cljs.core.seq.call(null,options);var chunk__15043_15049 = null;var count__15044_15050 = (0);var i__15045_15051 = (0);while(true){
if((i__15045_15051 < count__15044_15050))
{var vec__15046_15052 = cljs.core._nth.call(null,chunk__15043_15049,i__15045_15051);var option_key_15053 = cljs.core.nth.call(null,vec__15046_15052,(0),null);var option_value_15054 = cljs.core.nth.call(null,vec__15046_15052,(1),null);codemirror.setOption(option_key_15053,option_value_15054);
{
var G__15055 = seq__15042_15048;
var G__15056 = chunk__15043_15049;
var G__15057 = count__15044_15050;
var G__15058 = (i__15045_15051 + (1));
seq__15042_15048 = G__15055;
chunk__15043_15049 = G__15056;
count__15044_15050 = G__15057;
i__15045_15051 = G__15058;
continue;
}
} else
{var temp__4126__auto___15059 = cljs.core.seq.call(null,seq__15042_15048);if(temp__4126__auto___15059)
{var seq__15042_15060__$1 = temp__4126__auto___15059;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15042_15060__$1))
{var c__4299__auto___15061 = cljs.core.chunk_first.call(null,seq__15042_15060__$1);{
var G__15062 = cljs.core.chunk_rest.call(null,seq__15042_15060__$1);
var G__15063 = c__4299__auto___15061;
var G__15064 = cljs.core.count.call(null,c__4299__auto___15061);
var G__15065 = (0);
seq__15042_15048 = G__15062;
chunk__15043_15049 = G__15063;
count__15044_15050 = G__15064;
i__15045_15051 = G__15065;
continue;
}
} else
{var vec__15047_15066 = cljs.core.first.call(null,seq__15042_15060__$1);var option_key_15067 = cljs.core.nth.call(null,vec__15047_15066,(0),null);var option_value_15068 = cljs.core.nth.call(null,vec__15047_15066,(1),null);codemirror.setOption(option_key_15067,option_value_15068);
{
var G__15069 = cljs.core.next.call(null,seq__15042_15060__$1);
var G__15070 = null;
var G__15071 = (0);
var G__15072 = (0);
seq__15042_15048 = G__15069;
chunk__15043_15049 = G__15070;
count__15044_15050 = G__15071;
i__15045_15051 = G__15072;
continue;
}
}
} else
{}
}
break;
}
return codemirror.on("blur",((function (codemirror){
return (function (self,event){return antares.core.update_cursor.call(null,app_cursor,((function (codemirror){
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
antares.core.create_component.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"html-fn","html-fn",-1459449141),new cljs.core.Keyword(null,"data-type","data-type",-326421468),"string",new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"html-fn","html-fn",-1459449141)], null),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),"#html-fn",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),data], null);
}),new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),template_builder.core.textarea__GT_codemirror.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"html-fn","html-fn",-1459449141)], null),"#html-fn textarea")], null));

//# sourceMappingURL=core.js.map