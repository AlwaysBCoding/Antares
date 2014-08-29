// Compiled by ClojureScript 0.0-2311
goog.provide('shaun_example.core');
goog.require('cljs.core');
goog.require('antares.core');
goog.require('antares.core');
shaun_example.core.event_mappings = (function event_mappings(event){if((cljs.core._EQ_.call(null,event.type,"click")) && (cljs.core._EQ_.call(null,event.target.textContent,"Clojure")))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clojure-triggered","clojure-triggered",-1134419286),cljs.core.PersistentArrayMap.EMPTY], null);
} else
{if(cljs.core._EQ_.call(null,event.type,"click"))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click-triggered","click-triggered",-2031684297),cljs.core.PersistentArrayMap.EMPTY], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"no-action","no-action",-517532536),cljs.core.PersistentArrayMap.EMPTY], null);

}
}
});
shaun_example.core.controller = (function controller(p__37539){var vec__37541 = p__37539;var control = cljs.core.nth.call(null,vec__37541,(0),null);var data = cljs.core.nth.call(null,vec__37541,(1),null);if(cljs.core._EQ_.call(null,control,new cljs.core.Keyword(null,"click-triggered","click-triggered",-2031684297)))
{return "";
} else
{return null;
}
});
cljs.core.reset_BANG_.call(null,antares.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"language-list","language-list",683279548),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"languages","languages",1471910331),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Clojure"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Ruby"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Javascript"], null)], null)], null)], null));
shaun_example.core.language_item = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"language-item","language-item",527029197),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.language-item","li.language-item",-1075950542),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(data)], null);
})], null));
shaun_example.core.language_list = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"language-list","language-list",683279548),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.language-list","ul.language-list",582032623),(function (){var iter__4278__auto__ = (function iter__37542(s__37543){return (new cljs.core.LazySeq(null,(function (){var s__37543__$1 = s__37543;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__37543__$1);if(temp__4126__auto__)
{var s__37543__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37543__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__37543__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__37545 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__37544 = (0);while(true){
if((i__37544 < size__4277__auto__))
{var item = cljs.core._nth.call(null,c__4276__auto__,i__37544);cljs.core.chunk_append.call(null,b__37545,antares.core.render_html.call(null,shaun_example.core.language_item,item));
{
var G__37546 = (i__37544 + (1));
i__37544 = G__37546;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37545),iter__37542.call(null,cljs.core.chunk_rest.call(null,s__37543__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37545),null);
}
} else
{var item = cljs.core.first.call(null,s__37543__$2);return cljs.core.cons.call(null,antares.core.render_html.call(null,shaun_example.core.language_item,item),iter__37542.call(null,cljs.core.rest.call(null,s__37543__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,new cljs.core.Keyword(null,"languages","languages",1471910331).cljs$core$IFn$_invoke$arity$1(data));
})()], null);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.language-list","ul.language-list",582032623),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none"], null)], null)], null));
shaun_example.core.root = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"HELLO WORLD!"], null),antares.core.render_html.call(null,shaun_example.core.language_list,cljs.core.get_in.call(null,cljs.core.deref.call(null,antares.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"language-list","language-list",683279548)], null)))], null);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(shaun_example.core.language_list),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null)], null)], null)], null));
antares.core.bind.call(null,shaun_example.core.root,cljs.core.PersistentVector.EMPTY,"#antares");
antares.core.event_loop.call(null,shaun_example.core.event_mappings,shaun_example.core.controller);
antares.core.renderer.call(null,shaun_example.core.root);

//# sourceMappingURL=core.js.map