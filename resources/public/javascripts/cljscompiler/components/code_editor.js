// Compiled by ClojureScript 0.0-2311
goog.provide('components.code_editor');
goog.require('cljs.core');
goog.require('antares.core');
goog.require('antares.core');
components.code_editor.code_editor = antares.core.stateful_component.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"code-editor","code-editor",1902143804),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.code-editor","div.code-editor",-1539435275),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),data.call(null,new cljs.core.Keyword(null,"display","display",242065432))], null)], null);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (self){var codemirror = CodeMirror.fromTextArea(document.querySelector(".code-editor textarea"),cljs.core.PersistentArrayMap.EMPTY);var optiojns = new cljs.core.PersistentArrayMap(null, 4, ["theme","solarized light","mode","clojure","matchBrackets",true,"lineNumbers",true], null);var seq__13921_13927 = cljs.core.seq.call(null,components.code_editor.options);var chunk__13922_13928 = null;var count__13923_13929 = (0);var i__13924_13930 = (0);while(true){
if((i__13924_13930 < count__13923_13929))
{var vec__13925_13931 = cljs.core._nth.call(null,chunk__13922_13928,i__13924_13930);var option_key_13932 = cljs.core.nth.call(null,vec__13925_13931,(0),null);var option_value_13933 = cljs.core.nth.call(null,vec__13925_13931,(1),null);codemirror.setOption(option_key_13932,option_value_13933);
{
var G__13934 = seq__13921_13927;
var G__13935 = chunk__13922_13928;
var G__13936 = count__13923_13929;
var G__13937 = (i__13924_13930 + (1));
seq__13921_13927 = G__13934;
chunk__13922_13928 = G__13935;
count__13923_13929 = G__13936;
i__13924_13930 = G__13937;
continue;
}
} else
{var temp__4126__auto___13938 = cljs.core.seq.call(null,seq__13921_13927);if(temp__4126__auto___13938)
{var seq__13921_13939__$1 = temp__4126__auto___13938;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13921_13939__$1))
{var c__4309__auto___13940 = cljs.core.chunk_first.call(null,seq__13921_13939__$1);{
var G__13941 = cljs.core.chunk_rest.call(null,seq__13921_13939__$1);
var G__13942 = c__4309__auto___13940;
var G__13943 = cljs.core.count.call(null,c__4309__auto___13940);
var G__13944 = (0);
seq__13921_13927 = G__13941;
chunk__13922_13928 = G__13942;
count__13923_13929 = G__13943;
i__13924_13930 = G__13944;
continue;
}
} else
{var vec__13926_13945 = cljs.core.first.call(null,seq__13921_13939__$1);var option_key_13946 = cljs.core.nth.call(null,vec__13926_13945,(0),null);var option_value_13947 = cljs.core.nth.call(null,vec__13926_13945,(1),null);codemirror.setOption(option_key_13946,option_value_13947);
{
var G__13948 = cljs.core.next.call(null,seq__13921_13939__$1);
var G__13949 = null;
var G__13950 = (0);
var G__13951 = (0);
seq__13921_13927 = G__13948;
chunk__13922_13928 = G__13949;
count__13923_13929 = G__13950;
i__13924_13930 = G__13951;
continue;
}
}
} else
{}
}
break;
}
return codemirror.on("blur",((function (codemirror,optiojns){
return (function (self__$1,event){return antares.core.dispatch_event_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"say-hello","say-hello",-1427060073),cljs.core.PersistentArrayMap.EMPTY], null));
});})(codemirror,optiojns))
);
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"say-hello","say-hello",-1427060073),new cljs.core.Keyword(null,"action","action",-811238024),console.log("hello!!")], null)], null)], null));

//# sourceMappingURL=code_editor.js.map