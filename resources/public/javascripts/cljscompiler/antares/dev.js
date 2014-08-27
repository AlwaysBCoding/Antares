// Compiled by ClojureScript 0.0-2311
goog.provide('antares.dev');
goog.require('cljs.core');
goog.require('antares.core');
goog.require('antares.core');
antares.dev.nav_list = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"nav-list","nav-list",-1143702338),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav-list","div.nav-list",744700876),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.horizontal.list","div.ui.horizontal.list",115744158),(function (){var iter__4278__auto__ = (function iter__22060(s__22061){return (new cljs.core.LazySeq(null,(function (){var s__22061__$1 = s__22061;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22061__$1);if(temp__4126__auto__)
{var s__22061__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22061__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__22061__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__22063 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__22062 = (0);while(true){
if((i__22062 < size__4277__auto__))
{var item = cljs.core._nth.call(null,c__4276__auto__,i__22062);cljs.core.chunk_append.call(null,b__22063,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header","div.header",1964513620),item.call(null,new cljs.core.Keyword(null,"header","header",119441134))], null),item.call(null,new cljs.core.Keyword(null,"content","content",15833224))], null)], null));
{
var G__22064 = (i__22062 + (1));
i__22062 = G__22064;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22063),iter__22060.call(null,cljs.core.chunk_rest.call(null,s__22061__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22063),null);
}
} else
{var item = cljs.core.first.call(null,s__22061__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header","div.header",1964513620),item.call(null,new cljs.core.Keyword(null,"header","header",119441134))], null),item.call(null,new cljs.core.Keyword(null,"content","content",15833224))], null)], null),iter__22060.call(null,cljs.core.rest.call(null,s__22061__$2)));
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
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (component,app_cursor,dom_cursor){var codemirror = CodeMirror.fromTextArea(document.querySelector((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dom_cursor)+" .code-editor textarea")));var options = new cljs.core.PersistentArrayMap(null, 4, ["theme","solarized light","mode","clojure","matchBrackets","true","lineNumber",true], null);var seq__22065 = cljs.core.seq.call(null,options);var chunk__22066 = null;var count__22067 = (0);var i__22068 = (0);while(true){
if((i__22068 < count__22067))
{var vec__22069 = cljs.core._nth.call(null,chunk__22066,i__22068);var option_key = cljs.core.nth.call(null,vec__22069,(0),null);var option_value = cljs.core.nth.call(null,vec__22069,(1),null);codemirror.setOption(option_key,option_value);
{
var G__22071 = seq__22065;
var G__22072 = chunk__22066;
var G__22073 = count__22067;
var G__22074 = (i__22068 + (1));
seq__22065 = G__22071;
chunk__22066 = G__22072;
count__22067 = G__22073;
i__22068 = G__22074;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__22065);if(temp__4126__auto__)
{var seq__22065__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22065__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__22065__$1);{
var G__22075 = cljs.core.chunk_rest.call(null,seq__22065__$1);
var G__22076 = c__4309__auto__;
var G__22077 = cljs.core.count.call(null,c__4309__auto__);
var G__22078 = (0);
seq__22065 = G__22075;
chunk__22066 = G__22076;
count__22067 = G__22077;
i__22068 = G__22078;
continue;
}
} else
{var vec__22070 = cljs.core.first.call(null,seq__22065__$1);var option_key = cljs.core.nth.call(null,vec__22070,(0),null);var option_value = cljs.core.nth.call(null,vec__22070,(1),null);codemirror.setOption(option_key,option_value);
{
var G__22079 = cljs.core.next.call(null,seq__22065__$1);
var G__22080 = null;
var G__22081 = (0);
var G__22082 = (0);
seq__22065 = G__22079;
chunk__22066 = G__22080;
count__22067 = G__22081;
i__22068 = G__22082;
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
antares.dev.add_item_button = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"add-item-button","add-item-button",1874626894),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#add-item-button.ui.button.tiny","div#add-item-button.ui.button.tiny",-427421790),data], null);
})], null));
antares.dev.list_area = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"list-area","list-area",1480052289),new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [antares.dev.add_item_button], null),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.list-area","div.list-area",-1275138536),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list","ul.list",816202489),(function (){var iter__4278__auto__ = (function iter__22083(s__22084){return (new cljs.core.LazySeq(null,(function (){var s__22084__$1 = s__22084;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22084__$1);if(temp__4126__auto__)
{var s__22084__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22084__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__22084__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__22086 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__22085 = (0);while(true){
if((i__22085 < size__4277__auto__))
{var item = cljs.core._nth.call(null,c__4276__auto__,i__22085);cljs.core.chunk_append.call(null,b__22086,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),item], null));
{
var G__22087 = (i__22085 + (1));
i__22085 = G__22087;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22086),iter__22083.call(null,cljs.core.chunk_rest.call(null,s__22084__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22086),null);
}
} else
{var item = cljs.core.first.call(null,s__22084__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),item], null),iter__22083.call(null,cljs.core.rest.call(null,s__22084__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(data));
})()], null),antares.core.render_html.call(null,antares.dev.add_item_button,new cljs.core.Keyword(null,"button-text","button-text",-1800441720).cljs$core$IFn$_invoke$arity$1(data))], null);
})], null));
antares.core.bind.call(null,antares.dev.list_area,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"list-area","list-area",1480052289)], null),"#nav-list");
antares.core.bind.call(null,antares.dev.template_editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template-editor","template-editor",1369101151)], null),"#template-editor");
antares.dev.event_mappings = (function event_mappings(event){if((cljs.core._EQ_.call(null,event.type,"click")) && (cljs.core._EQ_.call(null,event.target.tagName,"H1")))
{return new cljs.core.Keyword(null,"show-alert","show-alert",-906612167);
} else
{if((cljs.core._EQ_.call(null,event.type,"click")) && (cljs.core._EQ_.call(null,event.target.id,"add-item-button")))
{return new cljs.core.Keyword(null,"add-item","add-item",715813891);
} else
{if(cljs.core._EQ_.call(null,event.type,"click"))
{return new cljs.core.Keyword(null,"click","click",1912301393);
} else
{if(cljs.core._EQ_.call(null,event.keyCode,(13)))
{return new cljs.core.Keyword(null,"show-alert","show-alert",-906612167);
} else
{return new cljs.core.Keyword(null,"no-action","no-action",-517532536);

}
}
}
}
});
antares.dev.controller = (function controller(control){if(cljs.core._EQ_.call(null,control,new cljs.core.Keyword(null,"add-item","add-item",715813891)))
{return antares.core.cursor__GT_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"list-area","list-area",1480052289),new cljs.core.Keyword(null,"items","items",1031954938)], null),(function (old_value){return cljs.core.conj.call(null,old_value,("Item "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((1) + cljs.core.count.call(null,old_value)))));
}));
} else
{if(cljs.core._EQ_.call(null,control,new cljs.core.Keyword(null,"show-alert","show-alert",-906612167)))
{return alert("Alert Shown");
} else
{return null;
}
}
});
antares.core.event_loop.call(null,antares.dev.event_mappings,antares.dev.controller);

//# sourceMappingURL=dev.js.map