// Compiled by ClojureScript 0.0-2311
goog.provide('antares.dev');
goog.require('cljs.core');
goog.require('antares.core');
goog.require('antares.core');
cljs.core.reset_BANG_.call(null,antares.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-list","nav-list",-1143702338),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"Item 1",new cljs.core.Keyword(null,"content","content",15833224),"Content 1"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"Item 2",new cljs.core.Keyword(null,"content","content",15833224),"Content 2"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"Item 3",new cljs.core.Keyword(null,"content","content",15833224),"Content 3"], null)], null)], null),new cljs.core.Keyword(null,"code-editor","code-editor",1902143804),"(+ 1 2 3)"], null));
antares.dev.nav_list = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"comp1","comp1",796464557),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav-list","div.nav-list",744700876),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.horizontal.list","div.ui.horizontal.list",115744158),(function (){var iter__4278__auto__ = (function iter__11167(s__11168){return (new cljs.core.LazySeq(null,(function (){var s__11168__$1 = s__11168;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11168__$1);if(temp__4126__auto__)
{var s__11168__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11168__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__11168__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__11170 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__11169 = (0);while(true){
if((i__11169 < size__4277__auto__))
{var item = cljs.core._nth.call(null,c__4276__auto__,i__11169);cljs.core.chunk_append.call(null,b__11170,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header","div.header",1964513620),item.call(null,new cljs.core.Keyword(null,"header","header",119441134))], null),item.call(null,new cljs.core.Keyword(null,"content","content",15833224))], null)], null));
{
var G__11171 = (i__11169 + (1));
i__11169 = G__11171;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11170),iter__11167.call(null,cljs.core.chunk_rest.call(null,s__11168__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11170),null);
}
} else
{var item = cljs.core.first.call(null,s__11168__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header","div.header",1964513620),item.call(null,new cljs.core.Keyword(null,"header","header",119441134))], null),item.call(null,new cljs.core.Keyword(null,"content","content",15833224))], null)], null),iter__11167.call(null,cljs.core.rest.call(null,s__11168__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(data));
})()], null)], null);
}),new cljs.core.Keyword(null,"css-data","css-data",2133231584),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.comp1","div.comp1",60842867),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"orange"], null)], null)], null)], null));
antares.dev.code_editor = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"comp2","comp2",-1334834582),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.code-editor","div.code-editor",-1539435275),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),data], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (component,app_cursor,dom_cursor){var codemirror = CodeMirror.fromTextArea(document.querySelector((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dom_cursor)+" .code-editor textarea")));var options = new cljs.core.PersistentArrayMap(null, 4, ["theme","solarized light","mode","clojure","matchBrackets","true","lineNumber",true], null);var seq__11172 = cljs.core.seq.call(null,options);var chunk__11173 = null;var count__11174 = (0);var i__11175 = (0);while(true){
if((i__11175 < count__11174))
{var vec__11176 = cljs.core._nth.call(null,chunk__11173,i__11175);var option_key = cljs.core.nth.call(null,vec__11176,(0),null);var option_value = cljs.core.nth.call(null,vec__11176,(1),null);codemirror.setOption(option_key,option_value);
{
var G__11178 = seq__11172;
var G__11179 = chunk__11173;
var G__11180 = count__11174;
var G__11181 = (i__11175 + (1));
seq__11172 = G__11178;
chunk__11173 = G__11179;
count__11174 = G__11180;
i__11175 = G__11181;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11172);if(temp__4126__auto__)
{var seq__11172__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11172__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__11172__$1);{
var G__11182 = cljs.core.chunk_rest.call(null,seq__11172__$1);
var G__11183 = c__4309__auto__;
var G__11184 = cljs.core.count.call(null,c__4309__auto__);
var G__11185 = (0);
seq__11172 = G__11182;
chunk__11173 = G__11183;
count__11174 = G__11184;
i__11175 = G__11185;
continue;
}
} else
{var vec__11177 = cljs.core.first.call(null,seq__11172__$1);var option_key = cljs.core.nth.call(null,vec__11177,(0),null);var option_value = cljs.core.nth.call(null,vec__11177,(1),null);codemirror.setOption(option_key,option_value);
{
var G__11186 = cljs.core.next.call(null,seq__11172__$1);
var G__11187 = null;
var G__11188 = (0);
var G__11189 = (0);
seq__11172 = G__11186;
chunk__11173 = G__11187;
count__11174 = G__11188;
i__11175 = G__11189;
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
antares.core.bind.call(null,antares.dev.nav_list,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-list","nav-list",-1143702338)], null),"#test-area");
antares.core.bind.call(null,antares.dev.code_editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code-editor","code-editor",1902143804)], null),"#test-area2");

//# sourceMappingURL=dev.js.map