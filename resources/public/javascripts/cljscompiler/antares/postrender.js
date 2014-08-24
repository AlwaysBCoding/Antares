// Compiled by ClojureScript 0.0-2311
goog.provide('antares.postrender');
goog.require('cljs.core');
goog.require('antares.core');
goog.require('antares.core');
antares.postrender.textarea__GT_codemirror = (function() {
var textarea__GT_codemirror = null;
var textarea__GT_codemirror__1 = (function (component_binding){return textarea__GT_codemirror.call(null,component_binding,new cljs.core.PersistentArrayMap(null, 4, ["theme","solarized light","mode","clojure","matchBrackets",true,"lineNumbers",true], null));
});
var textarea__GT_codemirror__2 = (function (component_binding,options){var codemirror = CodeMirror.fromTextArea(document.querySelector((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(component_binding))+" .code-editor textarea")),cljs.core.PersistentArrayMap.EMPTY);var seq__17856_17862 = cljs.core.seq.call(null,options);var chunk__17857_17863 = null;var count__17858_17864 = (0);var i__17859_17865 = (0);while(true){
if((i__17859_17865 < count__17858_17864))
{var vec__17860_17866 = cljs.core._nth.call(null,chunk__17857_17863,i__17859_17865);var option_key_17867 = cljs.core.nth.call(null,vec__17860_17866,(0),null);var option_value_17868 = cljs.core.nth.call(null,vec__17860_17866,(1),null);codemirror.setOption(option_key_17867,option_value_17868);
{
var G__17869 = seq__17856_17862;
var G__17870 = chunk__17857_17863;
var G__17871 = count__17858_17864;
var G__17872 = (i__17859_17865 + (1));
seq__17856_17862 = G__17869;
chunk__17857_17863 = G__17870;
count__17858_17864 = G__17871;
i__17859_17865 = G__17872;
continue;
}
} else
{var temp__4126__auto___17873 = cljs.core.seq.call(null,seq__17856_17862);if(temp__4126__auto___17873)
{var seq__17856_17874__$1 = temp__4126__auto___17873;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17856_17874__$1))
{var c__4324__auto___17875 = cljs.core.chunk_first.call(null,seq__17856_17874__$1);{
var G__17876 = cljs.core.chunk_rest.call(null,seq__17856_17874__$1);
var G__17877 = c__4324__auto___17875;
var G__17878 = cljs.core.count.call(null,c__4324__auto___17875);
var G__17879 = (0);
seq__17856_17862 = G__17876;
chunk__17857_17863 = G__17877;
count__17858_17864 = G__17878;
i__17859_17865 = G__17879;
continue;
}
} else
{var vec__17861_17880 = cljs.core.first.call(null,seq__17856_17874__$1);var option_key_17881 = cljs.core.nth.call(null,vec__17861_17880,(0),null);var option_value_17882 = cljs.core.nth.call(null,vec__17861_17880,(1),null);codemirror.setOption(option_key_17881,option_value_17882);
{
var G__17883 = cljs.core.next.call(null,seq__17856_17874__$1);
var G__17884 = null;
var G__17885 = (0);
var G__17886 = (0);
seq__17856_17862 = G__17883;
chunk__17857_17863 = G__17884;
count__17858_17864 = G__17885;
i__17859_17865 = G__17886;
continue;
}
}
} else
{}
}
break;
}
return codemirror.on("blur",((function (codemirror){
return (function (self,event){return antares.core.cursor__GT_value.call(null,cljs.core.conj.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(component_binding),new cljs.core.Keyword(null,"code-editor","code-editor",1902143804)),self.getValue());
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