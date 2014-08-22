// Compiled by ClojureScript 0.0-2277
goog.provide('antares.postrender');
goog.require('cljs.core');
goog.require('antares.core');
goog.require('antares.core');
antares.postrender.textarea__GT_codemirror = (function() {
var textarea__GT_codemirror = null;
var textarea__GT_codemirror__2 = (function (app_cursor,dom_cursor){return textarea__GT_codemirror.call(null,app_cursor,dom_cursor,new cljs.core.PersistentArrayMap(null, 4, ["theme","solarized light","mode","clojure","matchBrackets",true,"lineNumbers",true], null));
});
var textarea__GT_codemirror__3 = (function (app_cursor,dom_cursor,options){return (function (){var codemirror = CodeMirror.fromTextArea(document.querySelector(dom_cursor),cljs.core.PersistentArrayMap.EMPTY);var seq__15408_15414 = cljs.core.seq.call(null,options);var chunk__15409_15415 = null;var count__15410_15416 = (0);var i__15411_15417 = (0);while(true){
if((i__15411_15417 < count__15410_15416))
{var vec__15412_15418 = cljs.core._nth.call(null,chunk__15409_15415,i__15411_15417);var option_key_15419 = cljs.core.nth.call(null,vec__15412_15418,(0),null);var option_value_15420 = cljs.core.nth.call(null,vec__15412_15418,(1),null);codemirror.setOption(option_key_15419,option_value_15420);
{
var G__15421 = seq__15408_15414;
var G__15422 = chunk__15409_15415;
var G__15423 = count__15410_15416;
var G__15424 = (i__15411_15417 + (1));
seq__15408_15414 = G__15421;
chunk__15409_15415 = G__15422;
count__15410_15416 = G__15423;
i__15411_15417 = G__15424;
continue;
}
} else
{var temp__4126__auto___15425 = cljs.core.seq.call(null,seq__15408_15414);if(temp__4126__auto___15425)
{var seq__15408_15426__$1 = temp__4126__auto___15425;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15408_15426__$1))
{var c__4299__auto___15427 = cljs.core.chunk_first.call(null,seq__15408_15426__$1);{
var G__15428 = cljs.core.chunk_rest.call(null,seq__15408_15426__$1);
var G__15429 = c__4299__auto___15427;
var G__15430 = cljs.core.count.call(null,c__4299__auto___15427);
var G__15431 = (0);
seq__15408_15414 = G__15428;
chunk__15409_15415 = G__15429;
count__15410_15416 = G__15430;
i__15411_15417 = G__15431;
continue;
}
} else
{var vec__15413_15432 = cljs.core.first.call(null,seq__15408_15426__$1);var option_key_15433 = cljs.core.nth.call(null,vec__15413_15432,(0),null);var option_value_15434 = cljs.core.nth.call(null,vec__15413_15432,(1),null);codemirror.setOption(option_key_15433,option_value_15434);
{
var G__15435 = cljs.core.next.call(null,seq__15408_15426__$1);
var G__15436 = null;
var G__15437 = (0);
var G__15438 = (0);
seq__15408_15414 = G__15435;
chunk__15409_15415 = G__15436;
count__15410_15416 = G__15437;
i__15411_15417 = G__15438;
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