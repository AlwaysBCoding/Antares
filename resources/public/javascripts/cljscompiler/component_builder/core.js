// Compiled by ClojureScript 0.0-2311
goog.provide('component_builder.core');
goog.require('cljs.core');
goog.require('antares.core');
goog.require('antares.core');
cljs.core.reset_BANG_.call(null,antares.core.app_state,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"test-data","test-data",805102338),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"initialize","initialize",609952913),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"controller-actions","controller-actions",-1362885998),new cljs.core.Keyword(null,"active-tab","active-tab",1102432568),new cljs.core.Keyword(null,"code-editor","code-editor",1902143804),new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"{:display \"Something\"\n :subtitle \"This is a subtitle\"}"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"Render",new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"render","render",-1408033454)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"Style",new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"style","style",-496642736)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"Test Data",new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"test-data","test-data",805102338)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"Initialize",new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"initialize","initialize",609952913)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"Component Did Update",new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"Event Mappings",new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"Controller Actions",new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"controller-actions","controller-actions",-1362885998)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"html","html",-998796897),"",new cljs.core.Keyword(null,"css","css",1135045163),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"[:div.template\n [:h1 {:color \"orange\"\n       :text-align \"center\"\n       :background-color \"gray\"}]\n [:h2 {:text-align \"center\"\n       :color \"gray\"\n       :background-color \"orange\"}]]"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"(fn [data] \n  [:div.template\n   [:h1 (-> data :display)]\n   [:h2 (-> data :subtitle)]])"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),""], null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"[{}]"], null)]));
component_builder.core.event_mappings = (function event_mappings(event){var static_mappings = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"condition","condition",1668437652),(function (){var and__3541__auto__ = cljs.core._EQ_.call(null,event.type,"click");if(and__3541__auto__)
{return antares.core.has_class_QMARK_.call(null,event.target,"tab");
} else
{return and__3541__auto__;
}
})(),new cljs.core.Keyword(null,"control","control",1892578036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activate-tab","activate-tab",-2038420470),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),event.target.textContent,new cljs.core.Keyword(null,"ident","ident",-742346),cljs.core.keyword.call(null,event.target.dataset.ident)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"condition","condition",1668437652),(cljs.core._EQ_.call(null,event.type,"click")) && (cljs.core._EQ_.call(null,event.target.tagName,"H1")),new cljs.core.Keyword(null,"control","control",1892578036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activate-header","activate-header",-2002029715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),event.target], null)], null)], null)], null);var app_mappings = static_mappings;var seq__39688 = cljs.core.seq.call(null,app_mappings);var chunk__39689 = null;var count__39690 = (0);var i__39691 = (0);while(true){
if((i__39691 < count__39690))
{var event_mapping = cljs.core._nth.call(null,chunk__39689,i__39691);if(cljs.core.truth_(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(event_mapping)))
{component_builder.core.controller.call(null,new cljs.core.Keyword(null,"control","control",1892578036).cljs$core$IFn$_invoke$arity$1(event_mapping));
} else
{}
{
var G__39692 = seq__39688;
var G__39693 = chunk__39689;
var G__39694 = count__39690;
var G__39695 = (i__39691 + (1));
seq__39688 = G__39692;
chunk__39689 = G__39693;
count__39690 = G__39694;
i__39691 = G__39695;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__39688);if(temp__4126__auto__)
{var seq__39688__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39688__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__39688__$1);{
var G__39696 = cljs.core.chunk_rest.call(null,seq__39688__$1);
var G__39697 = c__4309__auto__;
var G__39698 = cljs.core.count.call(null,c__4309__auto__);
var G__39699 = (0);
seq__39688 = G__39696;
chunk__39689 = G__39697;
count__39690 = G__39698;
i__39691 = G__39699;
continue;
}
} else
{var event_mapping = cljs.core.first.call(null,seq__39688__$1);if(cljs.core.truth_(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(event_mapping)))
{component_builder.core.controller.call(null,new cljs.core.Keyword(null,"control","control",1892578036).cljs$core$IFn$_invoke$arity$1(event_mapping));
} else
{}
{
var G__39700 = cljs.core.next.call(null,seq__39688__$1);
var G__39701 = null;
var G__39702 = (0);
var G__39703 = (0);
seq__39688 = G__39700;
chunk__39689 = G__39701;
count__39690 = G__39702;
i__39691 = G__39703;
continue;
}
}
} else
{return null;
}
}
break;
}
});
component_builder.core.controller = (function controller(p__39704){var vec__39710 = p__39704;var control = cljs.core.nth.call(null,vec__39710,(0),null);var data = cljs.core.nth.call(null,vec__39710,(1),null);var static_controls = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"control","control",1892578036),new cljs.core.Keyword(null,"activate-tab","activate-tab",-2038420470),new cljs.core.Keyword(null,"action","action",-811238024),((function (vec__39710,control,data){
return (function (data__$1){antares.core.cursor__GT_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-tab","active-tab",1102432568)], null),data__$1);
return antares.core.cursor__GT_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code-editor","code-editor",1902143804)], null),antares.core.get_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(data__$1)], null)));
});})(vec__39710,control,data))
], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"control","control",1892578036),new cljs.core.Keyword(null,"update-code","update-code",-918863393),new cljs.core.Keyword(null,"action","action",-811238024),((function (vec__39710,control,data){
return (function (data__$1){antares.core.cursor__GT_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code-editor","code-editor",1902143804)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),data__$1.getValue()], null));
antares.core.cursor__GT_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(antares.core.get_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-tab","active-tab",1102432568)], null)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),data__$1.getValue()], null));
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(antares.core.get_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-tab","active-tab",1102432568)], null))),new cljs.core.Keyword(null,"render","render",-1408033454))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(antares.core.get_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-tab","active-tab",1102432568)], null))),new cljs.core.Keyword(null,"test-data","test-data",805102338))))
{return antares.core.post.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8989/compile-template",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"compile-data","compile-data",-1472149691),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(antares.core.get_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test-data","test-data",805102338)], null))),new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(antares.core.get_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render","render",-1408033454)], null)))], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__39710,control,data){
return (function (response){return antares.core.cursor__GT_value.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"html","html",-998796897)], null),antares.core.compile_html_BANG_.call(null,antares.core.string__GT_data.call(null,response)));
});})(vec__39710,control,data))
], null));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(antares.core.get_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-tab","active-tab",1102432568)], null))),new cljs.core.Keyword(null,"style","style",-496642736)))
{return antares.core.cursor__GT_value.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"css","css",1135045163)], null),antares.core.compile_css_BANG_.call(null,antares.core.string__GT_data.call(null,new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(antares.core.get_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736)], null))))));
} else
{return null;
}
}
});})(vec__39710,control,data))
], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"control","control",1892578036),new cljs.core.Keyword(null,"activate-header","activate-header",-2002029715),new cljs.core.Keyword(null,"action","action",-811238024),((function (vec__39710,control,data){
return (function (data__$1){return antares.core.toggle_class.call(null,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(data__$1),"active");
});})(vec__39710,control,data))
], null)], null);var seq__39711 = cljs.core.seq.call(null,static_controls);var chunk__39712 = null;var count__39713 = (0);var i__39714 = (0);while(true){
if((i__39714 < count__39713))
{var static_control = cljs.core._nth.call(null,chunk__39712,i__39714);if(cljs.core._EQ_.call(null,control,new cljs.core.Keyword(null,"control","control",1892578036).cljs$core$IFn$_invoke$arity$1(static_control)))
{new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(static_control).call(null,data);
} else
{}
{
var G__39715 = seq__39711;
var G__39716 = chunk__39712;
var G__39717 = count__39713;
var G__39718 = (i__39714 + (1));
seq__39711 = G__39715;
chunk__39712 = G__39716;
count__39713 = G__39717;
i__39714 = G__39718;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__39711);if(temp__4126__auto__)
{var seq__39711__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39711__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__39711__$1);{
var G__39719 = cljs.core.chunk_rest.call(null,seq__39711__$1);
var G__39720 = c__4309__auto__;
var G__39721 = cljs.core.count.call(null,c__4309__auto__);
var G__39722 = (0);
seq__39711 = G__39719;
chunk__39712 = G__39720;
count__39713 = G__39721;
i__39714 = G__39722;
continue;
}
} else
{var static_control = cljs.core.first.call(null,seq__39711__$1);if(cljs.core._EQ_.call(null,control,new cljs.core.Keyword(null,"control","control",1892578036).cljs$core$IFn$_invoke$arity$1(static_control)))
{new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(static_control).call(null,data);
} else
{}
{
var G__39723 = cljs.core.next.call(null,seq__39711__$1);
var G__39724 = null;
var G__39725 = (0);
var G__39726 = (0);
seq__39711 = G__39723;
chunk__39712 = G__39724;
count__39713 = G__39725;
i__39714 = G__39726;
continue;
}
}
} else
{return null;
}
}
break;
}
});
component_builder.core.tab_list = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"tab-list","tab-list",684589107),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tab-list.ui.divided.horizontal.list","div.tab-list.ui.divided.horizontal.list",-1960950234),(function (){var iter__4278__auto__ = (function iter__39727(s__39728){return (new cljs.core.LazySeq(null,(function (){var s__39728__$1 = s__39728;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__39728__$1);if(temp__4126__auto__)
{var s__39728__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__39728__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__39728__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__39730 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__39729 = (0);while(true){
if((i__39729 < size__4277__auto__))
{var tab = cljs.core._nth.call(null,c__4276__auto__,i__39729);cljs.core.chunk_append.call(null,b__39730,((cljs.core._EQ_.call(null,tab,cljs.core.get_in.call(null,cljs.core.deref.call(null,antares.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-tab","active-tab",1102432568)], null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tab.item.active","div.tab.item.active",-1806488493),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-ident","data-ident",2070785937),new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(tab)], null),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(tab)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tab.item","div.tab.item",-1027314266),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-ident","data-ident",2070785937),new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(tab)], null),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(tab)], null)));
{
var G__39731 = (i__39729 + (1));
i__39729 = G__39731;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39730),iter__39727.call(null,cljs.core.chunk_rest.call(null,s__39728__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39730),null);
}
} else
{var tab = cljs.core.first.call(null,s__39728__$2);return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,tab,cljs.core.get_in.call(null,cljs.core.deref.call(null,antares.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-tab","active-tab",1102432568)], null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tab.item.active","div.tab.item.active",-1806488493),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-ident","data-ident",2070785937),new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(tab)], null),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(tab)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tab.item","div.tab.item",-1027314266),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-ident","data-ident",2070785937),new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(tab)], null),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(tab)], null)),iter__39727.call(null,cljs.core.rest.call(null,s__39728__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,data);
})()], null);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tab-list","div.tab-list",-1713189330),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tab","div.tab",40356964),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.active","&.active",1160418114),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null)], null)], null)], null));
component_builder.core.code_editor = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"code-editor","code-editor",1902143804),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#template-code-editor","div#template-code-editor",1823628109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.code-editor","textarea.code-editor",2046334400),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(data)], null)], null);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#template-code-editor","div#template-code-editor",1823628109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.CodeMirror","div.CodeMirror",578823828),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"600px"], null)], null)], null),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (self){var codemirror = CodeMirror.fromTextArea(document.querySelector("#template-code-editor textarea"),cljs.core.PersistentArrayMap.EMPTY);var options = new cljs.core.PersistentArrayMap(null, 4, ["theme","solarized light","mode","clojure","matchBrackets",true,"lineNumbers",true], null);var seq__39732_39738 = cljs.core.seq.call(null,options);var chunk__39733_39739 = null;var count__39734_39740 = (0);var i__39735_39741 = (0);while(true){
if((i__39735_39741 < count__39734_39740))
{var vec__39736_39742 = cljs.core._nth.call(null,chunk__39733_39739,i__39735_39741);var option_key_39743 = cljs.core.nth.call(null,vec__39736_39742,(0),null);var option_value_39744 = cljs.core.nth.call(null,vec__39736_39742,(1),null);codemirror.setOption(option_key_39743,option_value_39744);
{
var G__39745 = seq__39732_39738;
var G__39746 = chunk__39733_39739;
var G__39747 = count__39734_39740;
var G__39748 = (i__39735_39741 + (1));
seq__39732_39738 = G__39745;
chunk__39733_39739 = G__39746;
count__39734_39740 = G__39747;
i__39735_39741 = G__39748;
continue;
}
} else
{var temp__4126__auto___39749 = cljs.core.seq.call(null,seq__39732_39738);if(temp__4126__auto___39749)
{var seq__39732_39750__$1 = temp__4126__auto___39749;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39732_39750__$1))
{var c__4309__auto___39751 = cljs.core.chunk_first.call(null,seq__39732_39750__$1);{
var G__39752 = cljs.core.chunk_rest.call(null,seq__39732_39750__$1);
var G__39753 = c__4309__auto___39751;
var G__39754 = cljs.core.count.call(null,c__4309__auto___39751);
var G__39755 = (0);
seq__39732_39738 = G__39752;
chunk__39733_39739 = G__39753;
count__39734_39740 = G__39754;
i__39735_39741 = G__39755;
continue;
}
} else
{var vec__39737_39756 = cljs.core.first.call(null,seq__39732_39750__$1);var option_key_39757 = cljs.core.nth.call(null,vec__39737_39756,(0),null);var option_value_39758 = cljs.core.nth.call(null,vec__39737_39756,(1),null);codemirror.setOption(option_key_39757,option_value_39758);
{
var G__39759 = cljs.core.next.call(null,seq__39732_39750__$1);
var G__39760 = null;
var G__39761 = (0);
var G__39762 = (0);
seq__39732_39738 = G__39759;
chunk__39733_39739 = G__39760;
count__39734_39740 = G__39761;
i__39735_39741 = G__39762;
continue;
}
}
} else
{}
}
break;
}
return codemirror.on("blur",((function (codemirror,options){
return (function (self__$1,event){return component_builder.core.controller.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-code","update-code",-918863393),self__$1], null));
});})(codemirror,options))
);
})], null));
component_builder.core.app_state_inspector = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"app-state-inspector","app-state-inspector",780117083),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#app-state-inspector","div#app-state-inspector",-1565249574),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea#app-state-inspector-data","textarea#app-state-inspector-data",-11848463),cljs.core.pr_str.call(null,data)], null)], null);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#app-state-inspector","div#app-state-inspector",-1565249574),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),".8rem"], null)], null)], null)], null));
component_builder.core.root = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.ui.grid","div.container.ui.grid",1464028043),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.wide.sixteen","div.column.wide.sixteen",-661719409),antares.core.render_html.call(null,component_builder.core.app_state_inspector,data)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.wide.eight","div.column.wide.eight",-797783451),antares.core.render_html.call(null,component_builder.core.tab_list,new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(data)),antares.core.render_html.call(null,component_builder.core.code_editor,new cljs.core.Keyword(null,"code-editor","code-editor",1902143804).cljs$core$IFn$_invoke$arity$1(data))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.wide.eight","div.column.wide.eight",-797783451),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#component-preview","div#component-preview",533338347)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style#component-preview-styles","style#component-preview-styles",-1037216130)], null)], null)], null)], null);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(component_builder.core.app_state_inspector),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(component_builder.core.tab_list),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(component_builder.core.code_editor)], null)], null));
antares.core.bind.call(null,component_builder.core.root,cljs.core.PersistentVector.EMPTY,"#antares");
antares.core.event_loop.call(null,component_builder.core.event_mappings,component_builder.core.controller);
antares.core.renderer.call(null,component_builder.core.root);
cljs.core.add_watch.call(null,antares.core.app_state,new cljs.core.Keyword(null,"component-preview","component-preview",716018543),(function (key,reference,old_value,new_value){document.querySelector("#component-preview").innerHTML = cljs.core.get_in.call(null,new_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"html","html",-998796897)], null));
return document.querySelector("#component-preview-styles").innerHTML = cljs.core.get_in.call(null,new_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"css","css",1135045163)], null));
}));

//# sourceMappingURL=core.js.map