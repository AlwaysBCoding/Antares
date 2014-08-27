// Compiled by ClojureScript 0.0-2311
goog.provide('antares.dev');
goog.require('cljs.core');
goog.require('antares.core');
goog.require('antares.core');
antares.dev.nav_list = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"nav-list","nav-list",-1143702338),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav-list","div.nav-list",744700876),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.horizontal.list","div.ui.horizontal.list",115744158),(function (){var iter__4278__auto__ = (function iter__21140(s__21141){return (new cljs.core.LazySeq(null,(function (){var s__21141__$1 = s__21141;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21141__$1);if(temp__4126__auto__)
{var s__21141__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21141__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__21141__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__21143 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__21142 = (0);while(true){
if((i__21142 < size__4277__auto__))
{var item = cljs.core._nth.call(null,c__4276__auto__,i__21142);cljs.core.chunk_append.call(null,b__21143,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header","div.header",1964513620),item.call(null,new cljs.core.Keyword(null,"header","header",119441134))], null),item.call(null,new cljs.core.Keyword(null,"content","content",15833224))], null)], null));
{
var G__21144 = (i__21142 + (1));
i__21142 = G__21144;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21143),iter__21140.call(null,cljs.core.chunk_rest.call(null,s__21141__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21143),null);
}
} else
{var item = cljs.core.first.call(null,s__21141__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header","div.header",1964513620),item.call(null,new cljs.core.Keyword(null,"header","header",119441134))], null),item.call(null,new cljs.core.Keyword(null,"content","content",15833224))], null)], null),iter__21140.call(null,cljs.core.rest.call(null,s__21141__$2)));
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
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (component,app_cursor,dom_cursor){var codemirror = CodeMirror.fromTextArea(document.querySelector((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dom_cursor)+" .code-editor textarea")));var options = new cljs.core.PersistentArrayMap(null, 4, ["theme","solarized light","mode","clojure","matchBrackets","true","lineNumber",true], null);var seq__21145 = cljs.core.seq.call(null,options);var chunk__21146 = null;var count__21147 = (0);var i__21148 = (0);while(true){
if((i__21148 < count__21147))
{var vec__21149 = cljs.core._nth.call(null,chunk__21146,i__21148);var option_key = cljs.core.nth.call(null,vec__21149,(0),null);var option_value = cljs.core.nth.call(null,vec__21149,(1),null);codemirror.setOption(option_key,option_value);
{
var G__21151 = seq__21145;
var G__21152 = chunk__21146;
var G__21153 = count__21147;
var G__21154 = (i__21148 + (1));
seq__21145 = G__21151;
chunk__21146 = G__21152;
count__21147 = G__21153;
i__21148 = G__21154;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21145);if(temp__4126__auto__)
{var seq__21145__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21145__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__21145__$1);{
var G__21155 = cljs.core.chunk_rest.call(null,seq__21145__$1);
var G__21156 = c__4309__auto__;
var G__21157 = cljs.core.count.call(null,c__4309__auto__);
var G__21158 = (0);
seq__21145 = G__21155;
chunk__21146 = G__21156;
count__21147 = G__21157;
i__21148 = G__21158;
continue;
}
} else
{var vec__21150 = cljs.core.first.call(null,seq__21145__$1);var option_key = cljs.core.nth.call(null,vec__21150,(0),null);var option_value = cljs.core.nth.call(null,vec__21150,(1),null);codemirror.setOption(option_key,option_value);
{
var G__21159 = cljs.core.next.call(null,seq__21145__$1);
var G__21160 = null;
var G__21161 = (0);
var G__21162 = (0);
seq__21145 = G__21159;
chunk__21146 = G__21160;
count__21147 = G__21161;
i__21148 = G__21162;
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
antares.dev.list_area = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"list-area","list-area",1480052289),new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [antares.dev.add_item_button], null),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.list-area","div.list-area",-1275138536),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list","ul.list",816202489),(function (){var iter__4278__auto__ = (function iter__21163(s__21164){return (new cljs.core.LazySeq(null,(function (){var s__21164__$1 = s__21164;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21164__$1);if(temp__4126__auto__)
{var s__21164__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21164__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__21164__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__21166 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__21165 = (0);while(true){
if((i__21165 < size__4277__auto__))
{var item = cljs.core._nth.call(null,c__4276__auto__,i__21165);cljs.core.chunk_append.call(null,b__21166,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),item], null));
{
var G__21167 = (i__21165 + (1));
i__21165 = G__21167;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21166),iter__21163.call(null,cljs.core.chunk_rest.call(null,s__21164__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21166),null);
}
} else
{var item = cljs.core.first.call(null,s__21164__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),item], null),iter__21163.call(null,cljs.core.rest.call(null,s__21164__$2)));
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
antares.core.activate_event_loop.call(null,antares.dev.event_mappings,antares.dev.controller);

//# sourceMappingURL=dev.js.map