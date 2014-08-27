// Compiled by ClojureScript 0.0-2311
goog.provide('refsareblind.test');
goog.require('cljs.core');
goog.require('antares.core');
goog.require('antares.core');
cljs.core.reset_BANG_.call(null,antares.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sports","sports",1233675774),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"NBA"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"NFL"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"EPL"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"MLB"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"NHL"], null)], null),new cljs.core.Keyword(null,"active-sport","active-sport",2007602554),""], null));
refsareblind.test.sport_item = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"sport-item","sport-item",1431098311),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sport.item","div.sport.item",-1674063201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sport.content","div.sport.content",-1046199146),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(data)], null)], null);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sport","div.sport",552134301),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null)], null)], null));
refsareblind.test.sports_list = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"sports-list","sports-list",-1306646973),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sports-list","div.sports-list",-1036308293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.divided.list","div.ui.divided.list",-105123695),(function (){var iter__4278__auto__ = (function iter__12944(s__12945){return (new cljs.core.LazySeq(null,(function (){var s__12945__$1 = s__12945;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12945__$1);if(temp__4126__auto__)
{var s__12945__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12945__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__12945__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__12947 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__12946 = (0);while(true){
if((i__12946 < size__4277__auto__))
{var sport = cljs.core._nth.call(null,c__4276__auto__,i__12946);cljs.core.chunk_append.call(null,b__12947,antares.core.render_html.call(null,refsareblind.test.sport_item,sport));
{
var G__12948 = (i__12946 + (1));
i__12946 = G__12948;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12947),iter__12944.call(null,cljs.core.chunk_rest.call(null,s__12945__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12947),null);
}
} else
{var sport = cljs.core.first.call(null,s__12945__$2);return cljs.core.cons.call(null,antares.core.render_html.call(null,refsareblind.test.sport_item,sport),iter__12944.call(null,cljs.core.rest.call(null,s__12945__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,data);
})()], null)], null);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sports-list","div.sports-list",-1036308293),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(refsareblind.test.sport_item)], null)], null));
refsareblind.test.active_sport = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"active-sport","active-sport",2007602554),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.active-sport","div.active-sport",1285273255),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(data)], null)], null);
})], null));
refsareblind.test.root = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Refs Are Blind Test App"], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),antares.core.render_html.call(null,refsareblind.test.active_sport,new cljs.core.Keyword(null,"active-sport","active-sport",2007602554).cljs$core$IFn$_invoke$arity$1(data)),antares.core.render_html.call(null,refsareblind.test.sports_list,new cljs.core.Keyword(null,"sports","sports",1233675774).cljs$core$IFn$_invoke$arity$1(data))], null);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(refsareblind.test.active_sport),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(refsareblind.test.sports_list)], null)], null));
antares.core.bind.call(null,refsareblind.test.root,cljs.core.PersistentVector.EMPTY,"#antares");
refsareblind.test.event_mappings = (function event_mappings(event){if(cljs.core.truth_((function (){var and__3541__auto__ = cljs.core._EQ_.call(null,event.type,"click");if(and__3541__auto__)
{return event.target.classList.contains("sport");
} else
{return and__3541__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activate-sport","activate-sport",1606670169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),event.target.textContent], null)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"no-action","no-action",-517532536),cljs.core.PersistentArrayMap.EMPTY], null);

}
});
refsareblind.test.controller = (function controller(p__12949){var vec__12951 = p__12949;var control = cljs.core.nth.call(null,vec__12951,(0),null);var data = cljs.core.nth.call(null,vec__12951,(1),null);if(cljs.core._EQ_.call(null,control,new cljs.core.Keyword(null,"activate-sport","activate-sport",1606670169)))
{return antares.core.cursor__GT_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-sport","active-sport",2007602554)], null),data);
} else
{return null;
}
});
antares.core.event_loop.call(null,refsareblind.test.event_mappings,refsareblind.test.controller);
antares.core.renderer.call(null,refsareblind.test.root);

//# sourceMappingURL=test.js.map