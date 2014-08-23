// Compiled by ClojureScript 0.0-2311
goog.provide('antares.postrender');
goog.require('cljs.core');
goog.require('antares.core');
goog.require('antares.core');
antares.postrender.textarea__GT_codemirror = (function() {
var textarea__GT_codemirror = null;
var textarea__GT_codemirror__2 = (function (app_cursor,dom_cursor){return textarea__GT_codemirror.call(null,app_cursor,dom_cursor,new cljs.core.PersistentArrayMap(null, 4, ["theme","solarized light","mode","clojure","matchBrackets",true,"lineNumbers",true], null));
});
var textarea__GT_codemirror__3 = (function (app_cursor,dom_cursor,options){return (function (){var codemirror = CodeMirror.fromTextArea(document.querySelector(dom_cursor),cljs.core.PersistentArrayMap.EMPTY);var seq__10379_10385 = cljs.core.seq.call(null,options);var chunk__10380_10386 = null;var count__10381_10387 = (0);var i__10382_10388 = (0);while(true){
if((i__10382_10388 < count__10381_10387))
{var vec__10383_10389 = cljs.core._nth.call(null,chunk__10380_10386,i__10382_10388);var option_key_10390 = cljs.core.nth.call(null,vec__10383_10389,(0),null);var option_value_10391 = cljs.core.nth.call(null,vec__10383_10389,(1),null);codemirror.setOption(option_key_10390,option_value_10391);
{
var G__10392 = seq__10379_10385;
var G__10393 = chunk__10380_10386;
var G__10394 = count__10381_10387;
var G__10395 = (i__10382_10388 + (1));
seq__10379_10385 = G__10392;
chunk__10380_10386 = G__10393;
count__10381_10387 = G__10394;
i__10382_10388 = G__10395;
continue;
}
} else
{var temp__4126__auto___10396 = cljs.core.seq.call(null,seq__10379_10385);if(temp__4126__auto___10396)
{var seq__10379_10397__$1 = temp__4126__auto___10396;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10379_10397__$1))
{var c__4309__auto___10398 = cljs.core.chunk_first.call(null,seq__10379_10397__$1);{
var G__10399 = cljs.core.chunk_rest.call(null,seq__10379_10397__$1);
var G__10400 = c__4309__auto___10398;
var G__10401 = cljs.core.count.call(null,c__4309__auto___10398);
var G__10402 = (0);
seq__10379_10385 = G__10399;
chunk__10380_10386 = G__10400;
count__10381_10387 = G__10401;
i__10382_10388 = G__10402;
continue;
}
} else
{var vec__10384_10403 = cljs.core.first.call(null,seq__10379_10397__$1);var option_key_10404 = cljs.core.nth.call(null,vec__10384_10403,(0),null);var option_value_10405 = cljs.core.nth.call(null,vec__10384_10403,(1),null);codemirror.setOption(option_key_10404,option_value_10405);
{
var G__10406 = cljs.core.next.call(null,seq__10379_10397__$1);
var G__10407 = null;
var G__10408 = (0);
var G__10409 = (0);
seq__10379_10385 = G__10406;
chunk__10380_10386 = G__10407;
count__10381_10387 = G__10408;
i__10382_10388 = G__10409;
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

//# sourceMappingURL=postrender.js.map