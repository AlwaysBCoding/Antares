// Compiled by ClojureScript 0.0-2311
goog.provide('antares.dev');
goog.require('cljs.core');
goog.require('antares.core');
goog.require('antares.core');
antares.dev.nav_list = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"nav-list","nav-list",-1143702338),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav-list","div.nav-list",744700876),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.horizontal.list","div.ui.horizontal.list",115744158),(function (){var iter__4278__auto__ = (function iter__19024(s__19025){return (new cljs.core.LazySeq(null,(function (){var s__19025__$1 = s__19025;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19025__$1);if(temp__4126__auto__)
{var s__19025__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19025__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__19025__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__19027 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__19026 = (0);while(true){
if((i__19026 < size__4277__auto__))
{var item = cljs.core._nth.call(null,c__4276__auto__,i__19026);cljs.core.chunk_append.call(null,b__19027,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header","div.header",1964513620),item.call(null,new cljs.core.Keyword(null,"header","header",119441134))], null),item.call(null,new cljs.core.Keyword(null,"content","content",15833224))], null)], null));
{
var G__19028 = (i__19026 + (1));
i__19026 = G__19028;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19027),iter__19024.call(null,cljs.core.chunk_rest.call(null,s__19025__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19027),null);
}
} else
{var item = cljs.core.first.call(null,s__19025__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header","div.header",1964513620),item.call(null,new cljs.core.Keyword(null,"header","header",119441134))], null),item.call(null,new cljs.core.Keyword(null,"content","content",15833224))], null)], null),iter__19024.call(null,cljs.core.rest.call(null,s__19025__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(data));
})()], null)], null);
}),new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav-list","div.nav-list",744700876),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header","div.header",1964513620),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"orange"], null)], null)], null)], null));
antares.dev.code_editor = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"code-editor","code-editor",1902143804),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.code-editor","div.code-editor",-1539435275),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),data], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (component,app_cursor,dom_cursor){var codemirror = CodeMirror.fromTextArea(document.querySelector((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dom_cursor)+" .code-editor textarea")));var options = new cljs.core.PersistentArrayMap(null, 4, ["theme","solarized light","mode","clojure","matchBrackets","true","lineNumber",true], null);var seq__19029 = cljs.core.seq.call(null,options);var chunk__19030 = null;var count__19031 = (0);var i__19032 = (0);while(true){
if((i__19032 < count__19031))
{var vec__19033 = cljs.core._nth.call(null,chunk__19030,i__19032);var option_key = cljs.core.nth.call(null,vec__19033,(0),null);var option_value = cljs.core.nth.call(null,vec__19033,(1),null);codemirror.setOption(option_key,option_value);
{
var G__19035 = seq__19029;
var G__19036 = chunk__19030;
var G__19037 = count__19031;
var G__19038 = (i__19032 + (1));
seq__19029 = G__19035;
chunk__19030 = G__19036;
count__19031 = G__19037;
i__19032 = G__19038;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19029);if(temp__4126__auto__)
{var seq__19029__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19029__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__19029__$1);{
var G__19039 = cljs.core.chunk_rest.call(null,seq__19029__$1);
var G__19040 = c__4309__auto__;
var G__19041 = cljs.core.count.call(null,c__4309__auto__);
var G__19042 = (0);
seq__19029 = G__19039;
chunk__19030 = G__19040;
count__19031 = G__19041;
i__19032 = G__19042;
continue;
}
} else
{var vec__19034 = cljs.core.first.call(null,seq__19029__$1);var option_key = cljs.core.nth.call(null,vec__19034,(0),null);var option_value = cljs.core.nth.call(null,vec__19034,(1),null);codemirror.setOption(option_key,option_value);
{
var G__19043 = cljs.core.next.call(null,seq__19029__$1);
var G__19044 = null;
var G__19045 = (0);
var G__19046 = (0);
seq__19029 = G__19043;
chunk__19030 = G__19044;
count__19031 = G__19045;
i__19032 = G__19046;
continue;
}
}
} else
{return null;
}
}
break;
}
})], null));
antares.dev.template_editor = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"template-editor","template-editor",1369101151),new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antares.dev.nav_list,antares.dev.code_editor], null),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.template-editor","div.template-editor",1082306488),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Template Editor"], null),antares.core.render_html.call(null,antares.dev.nav_list,new cljs.core.Keyword(null,"nav-list","nav-list",-1143702338).cljs$core$IFn$_invoke$arity$1(data)),antares.core.render_html.call(null,antares.dev.code_editor,new cljs.core.Keyword(null,"code-editor","code-editor",1902143804).cljs$core$IFn$_invoke$arity$1(data))], null);
}),new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.template-editor","div.template-editor",1082306488),new cljs.core.Keyword(null,"styles","styles",1954480375).cljs$core$IFn$_invoke$arity$1(antares.dev.nav_list),new cljs.core.Keyword(null,"styles","styles",1954480375).cljs$core$IFn$_invoke$arity$1(antares.dev.code_editor)], null)], null));
antares.core.bind.call(null,antares.dev.template_editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template-editor","template-editor",1369101151)], null),"#template-editor");
antares.dev.event_mappings = (function event_mappings(event){if(cljs.core._EQ_.call(null,event.type,"click"))
{return new cljs.core.Keyword(null,"click","click",1912301393);
} else
{if(cljs.core._EQ_.call(null,event.keyCode,(13)))
{return new cljs.core.Keyword(null,"show-alert","show-alert",-906612167);
} else
{return new cljs.core.Keyword(null,"no-action","no-action",-517532536);

}
}
});
antares.dev.controller = (function controller(control){console.log(cljs.core.pr_str.call(null,control));
if(cljs.core._EQ_.call(null,control,new cljs.core.Keyword(null,"show-alert","show-alert",-906612167)))
{return alert("Alert Shown");
} else
{return null;
}
});
antares.core.activate_event_loop.call(null,antares.dev.event_mappings,antares.dev.controller);

//# sourceMappingURL=dev.js.map