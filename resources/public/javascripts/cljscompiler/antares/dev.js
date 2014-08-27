// Compiled by ClojureScript 0.0-2311
goog.provide('antares.dev');
goog.require('cljs.core');
goog.require('antares.core');
goog.require('antares.core');
antares.dev.nav_list = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"nav-list","nav-list",-1143702338),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav-list","div.nav-list",744700876),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.horizontal.list","div.ui.horizontal.list",115744158),(function (){var iter__4278__auto__ = (function iter__12743(s__12744){return (new cljs.core.LazySeq(null,(function (){var s__12744__$1 = s__12744;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12744__$1);if(temp__4126__auto__)
{var s__12744__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12744__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__12744__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__12746 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__12745 = (0);while(true){
if((i__12745 < size__4277__auto__))
{var item = cljs.core._nth.call(null,c__4276__auto__,i__12745);cljs.core.chunk_append.call(null,b__12746,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header","div.header",1964513620),item.call(null,new cljs.core.Keyword(null,"header","header",119441134))], null),item.call(null,new cljs.core.Keyword(null,"content","content",15833224))], null)], null));
{
var G__12747 = (i__12745 + (1));
i__12745 = G__12747;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12746),iter__12743.call(null,cljs.core.chunk_rest.call(null,s__12744__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12746),null);
}
} else
{var item = cljs.core.first.call(null,s__12744__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header","div.header",1964513620),item.call(null,new cljs.core.Keyword(null,"header","header",119441134))], null),item.call(null,new cljs.core.Keyword(null,"content","content",15833224))], null)], null),iter__12743.call(null,cljs.core.rest.call(null,s__12744__$2)));
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
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (component,app_cursor,dom_cursor){var codemirror = CodeMirror.fromTextArea(document.querySelector((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dom_cursor)+" .code-editor textarea")));var options = new cljs.core.PersistentArrayMap(null, 4, ["theme","solarized light","mode","clojure","matchBrackets","true","lineNumber",true], null);var seq__12748 = cljs.core.seq.call(null,options);var chunk__12749 = null;var count__12750 = (0);var i__12751 = (0);while(true){
if((i__12751 < count__12750))
{var vec__12752 = cljs.core._nth.call(null,chunk__12749,i__12751);var option_key = cljs.core.nth.call(null,vec__12752,(0),null);var option_value = cljs.core.nth.call(null,vec__12752,(1),null);codemirror.setOption(option_key,option_value);
{
var G__12754 = seq__12748;
var G__12755 = chunk__12749;
var G__12756 = count__12750;
var G__12757 = (i__12751 + (1));
seq__12748 = G__12754;
chunk__12749 = G__12755;
count__12750 = G__12756;
i__12751 = G__12757;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12748);if(temp__4126__auto__)
{var seq__12748__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12748__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__12748__$1);{
var G__12758 = cljs.core.chunk_rest.call(null,seq__12748__$1);
var G__12759 = c__4309__auto__;
var G__12760 = cljs.core.count.call(null,c__4309__auto__);
var G__12761 = (0);
seq__12748 = G__12758;
chunk__12749 = G__12759;
count__12750 = G__12760;
i__12751 = G__12761;
continue;
}
} else
{var vec__12753 = cljs.core.first.call(null,seq__12748__$1);var option_key = cljs.core.nth.call(null,vec__12753,(0),null);var option_value = cljs.core.nth.call(null,vec__12753,(1),null);codemirror.setOption(option_key,option_value);
{
var G__12762 = cljs.core.next.call(null,seq__12748__$1);
var G__12763 = null;
var G__12764 = (0);
var G__12765 = (0);
seq__12748 = G__12762;
chunk__12749 = G__12763;
count__12750 = G__12764;
i__12751 = G__12765;
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
antares.core.bind.call(null,antares.core.app_state_detective,cljs.core.PersistentVector.EMPTY,"#app-state-detective");
antares.core.bind.call(null,antares.core.registered_components_detective,cljs.core.PersistentVector.EMPTY,"#registered-components-detective");

//# sourceMappingURL=dev.js.map