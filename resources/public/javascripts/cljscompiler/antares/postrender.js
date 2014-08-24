// Compiled by ClojureScript 0.0-2311
goog.provide('antares.postrender');
goog.require('cljs.core');
goog.require('antares.core');
goog.require('antares.core');
antares.postrender.textarea__GT_codemirror = (function() {
var textarea__GT_codemirror = null;
var textarea__GT_codemirror__1 = (function (component_binding){return textarea__GT_codemirror.call(null,component_binding,new cljs.core.PersistentArrayMap(null, 4, ["theme","solarized light","mode","clojure","matchBrackets",true,"lineNumbers",true], null));
});
var textarea__GT_codemirror__2 = (function (component_binding,options){var codemirror = CodeMirror.fromTextArea(document.querySelector((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(component_binding))+" .code-editor textarea")),cljs.core.PersistentArrayMap.EMPTY);var seq__17577_17583 = cljs.core.seq.call(null,options);var chunk__17578_17584 = null;var count__17579_17585 = (0);var i__17580_17586 = (0);while(true){
if((i__17580_17586 < count__17579_17585))
{var vec__17581_17587 = cljs.core._nth.call(null,chunk__17578_17584,i__17580_17586);var option_key_17588 = cljs.core.nth.call(null,vec__17581_17587,(0),null);var option_value_17589 = cljs.core.nth.call(null,vec__17581_17587,(1),null);codemirror.setOption(option_key_17588,option_value_17589);
{
var G__17590 = seq__17577_17583;
var G__17591 = chunk__17578_17584;
var G__17592 = count__17579_17585;
var G__17593 = (i__17580_17586 + (1));
seq__17577_17583 = G__17590;
chunk__17578_17584 = G__17591;
count__17579_17585 = G__17592;
i__17580_17586 = G__17593;
continue;
}
} else
{var temp__4126__auto___17594 = cljs.core.seq.call(null,seq__17577_17583);if(temp__4126__auto___17594)
{var seq__17577_17595__$1 = temp__4126__auto___17594;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17577_17595__$1))
{var c__4324__auto___17596 = cljs.core.chunk_first.call(null,seq__17577_17595__$1);{
var G__17597 = cljs.core.chunk_rest.call(null,seq__17577_17595__$1);
var G__17598 = c__4324__auto___17596;
var G__17599 = cljs.core.count.call(null,c__4324__auto___17596);
var G__17600 = (0);
seq__17577_17583 = G__17597;
chunk__17578_17584 = G__17598;
count__17579_17585 = G__17599;
i__17580_17586 = G__17600;
continue;
}
} else
{var vec__17582_17601 = cljs.core.first.call(null,seq__17577_17595__$1);var option_key_17602 = cljs.core.nth.call(null,vec__17582_17601,(0),null);var option_value_17603 = cljs.core.nth.call(null,vec__17582_17601,(1),null);codemirror.setOption(option_key_17602,option_value_17603);
{
var G__17604 = cljs.core.next.call(null,seq__17577_17595__$1);
var G__17605 = null;
var G__17606 = (0);
var G__17607 = (0);
seq__17577_17583 = G__17604;
chunk__17578_17584 = G__17605;
count__17579_17585 = G__17606;
i__17580_17586 = G__17607;
continue;
}
}
} else
{}
}
break;
}
return codemirror.on("blur",((function (codemirror){
return (function (self,event){return antares.core.cursor__GT_value.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(component_binding),self.getValue());
});})(codemirror))
);
});
textarea__GT_codemirror = function(component_binding,options){
switch(arguments.length){
case 1:
return textarea__GT_codemirror__1.call(this,component_binding);
case 2:
return textarea__GT_codemirror__2.call(this,component_binding,options);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
textarea__GT_codemirror.cljs$core$IFn$_invoke$arity$1 = textarea__GT_codemirror__1;
textarea__GT_codemirror.cljs$core$IFn$_invoke$arity$2 = textarea__GT_codemirror__2;
return textarea__GT_codemirror;
})()
;

//# sourceMappingURL=postrender.js.map