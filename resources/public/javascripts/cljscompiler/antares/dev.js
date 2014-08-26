// Compiled by ClojureScript 0.0-2311
goog.provide('antares.dev');
goog.require('cljs.core');
goog.require('antares.core');
goog.require('antares.core');
cljs.core.reset_BANG_.call(null,antares.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-list","nav-list",-1143702338),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"Item 1",new cljs.core.Keyword(null,"content","content",15833224),"Content 1"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"Item 2",new cljs.core.Keyword(null,"content","content",15833224),"Content 2"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"Item 3",new cljs.core.Keyword(null,"content","content",15833224),"Content 3"], null)], null)], null)], null));
antares.dev.nav_list = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"comp1","comp1",796464557),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav-list","div.nav-list",744700876),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.horizontal.list","div.ui.horizontal.list",115744158),(function (){var iter__4278__auto__ = (function iter__10811(s__10812){return (new cljs.core.LazySeq(null,(function (){var s__10812__$1 = s__10812;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10812__$1);if(temp__4126__auto__)
{var s__10812__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10812__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__10812__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__10814 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__10813 = (0);while(true){
if((i__10813 < size__4277__auto__))
{var item = cljs.core._nth.call(null,c__4276__auto__,i__10813);cljs.core.chunk_append.call(null,b__10814,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header","div.header",1964513620),item.call(null,new cljs.core.Keyword(null,"header","header",119441134))], null),item.call(null,new cljs.core.Keyword(null,"content","content",15833224))], null)], null));
{
var G__10815 = (i__10813 + (1));
i__10813 = G__10815;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10814),iter__10811.call(null,cljs.core.chunk_rest.call(null,s__10812__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10814),null);
}
} else
{var item = cljs.core.first.call(null,s__10812__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header","div.header",1964513620),item.call(null,new cljs.core.Keyword(null,"header","header",119441134))], null),item.call(null,new cljs.core.Keyword(null,"content","content",15833224))], null)], null),iter__10811.call(null,cljs.core.rest.call(null,s__10812__$2)));
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
antares.core.bind.call(null,antares.dev.nav_list,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-list","nav-list",-1143702338)], null),"#test-area");

//# sourceMappingURL=dev.js.map