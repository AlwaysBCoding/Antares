// Compiled by ClojureScript 0.0-2311
goog.provide('components.codeeditor');
goog.require('cljs.core');
goog.require('antares.core');
goog.require('antares.core');
components.codeeditor.code_editor = antares.core.stateful_component.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"code-editor","code-editor",1902143804),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.code-editor","div.code-editor",-1539435275),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),data.call(null,new cljs.core.Keyword(null,"display","display",242065432))], null)], null);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (self){var codemirror = CodeMirror.fromTextArea(document.querySelector(".code-editor textarea"),cljs.core.PersistentArrayMap.EMPTY);var options = new cljs.core.PersistentArrayMap(null, 4, ["theme","solarized light","mode","clojure","matchBrackets",true,"lineNumbers",true], null);var seq__14989_14995 = cljs.core.seq.call(null,options);var chunk__14990_14996 = null;var count__14991_14997 = (0);var i__14992_14998 = (0);while(true){
if((i__14992_14998 < count__14991_14997))
{var vec__14993_14999 = cljs.core._nth.call(null,chunk__14990_14996,i__14992_14998);var option_key_15000 = cljs.core.nth.call(null,vec__14993_14999,(0),null);var option_value_15001 = cljs.core.nth.call(null,vec__14993_14999,(1),null);codemirror.setOption(option_key_15000,option_value_15001);
{
var G__15002 = seq__14989_14995;
var G__15003 = chunk__14990_14996;
var G__15004 = count__14991_14997;
var G__15005 = (i__14992_14998 + (1));
seq__14989_14995 = G__15002;
chunk__14990_14996 = G__15003;
count__14991_14997 = G__15004;
i__14992_14998 = G__15005;
continue;
}
} else
{var temp__4126__auto___15006 = cljs.core.seq.call(null,seq__14989_14995);if(temp__4126__auto___15006)
{var seq__14989_15007__$1 = temp__4126__auto___15006;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14989_15007__$1))
{var c__4309__auto___15008 = cljs.core.chunk_first.call(null,seq__14989_15007__$1);{
var G__15009 = cljs.core.chunk_rest.call(null,seq__14989_15007__$1);
var G__15010 = c__4309__auto___15008;
var G__15011 = cljs.core.count.call(null,c__4309__auto___15008);
var G__15012 = (0);
seq__14989_14995 = G__15009;
chunk__14990_14996 = G__15010;
count__14991_14997 = G__15011;
i__14992_14998 = G__15012;
continue;
}
} else
{var vec__14994_15013 = cljs.core.first.call(null,seq__14989_15007__$1);var option_key_15014 = cljs.core.nth.call(null,vec__14994_15013,(0),null);var option_value_15015 = cljs.core.nth.call(null,vec__14994_15013,(1),null);codemirror.setOption(option_key_15014,option_value_15015);
{
var G__15016 = cljs.core.next.call(null,seq__14989_15007__$1);
var G__15017 = null;
var G__15018 = (0);
var G__15019 = (0);
seq__14989_14995 = G__15016;
chunk__14990_14996 = G__15017;
count__14991_14997 = G__15018;
i__14992_14998 = G__15019;
continue;
}
}
} else
{}
}
break;
}
return codemirror.on("blur",((function (codemirror,options){
return (function (self__$1,event){return antares.core.emit_event_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-editor","update-editor",-1809006313),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),self__$1.getValue()], null)], null));
});})(codemirror,options))
);
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"controls","controls",1340701452),cljs.core.PersistentVector.EMPTY], null));

//# sourceMappingURL=codeeditor.js.map