// Compiled by ClojureScript 0.0-2311
goog.provide('component_builder.core');
goog.require('cljs.core');
goog.require('antares.core');
goog.require('antares.core');
cljs.core.reset_BANG_.call(null,antares.core.app_state,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"test-data","test-data",805102338),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"initialize","initialize",609952913),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"controller-actions","controller-actions",-1362885998),new cljs.core.Keyword(null,"active-tab","active-tab",1102432568),new cljs.core.Keyword(null,"code-editor","code-editor",1902143804),new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"{:display \"Something\"}"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"Render",new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"render","render",-1408033454)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"Style",new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"style","style",-496642736)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"Test Data",new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"test-data","test-data",805102338)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"Initialize",new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"initialize","initialize",609952913)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"Component Did Update",new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"Event Mappings",new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"Controller Actions",new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"controller-actions","controller-actions",-1362885998)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"html","html",-998796897),"",new cljs.core.Keyword(null,"css","css",1135045163),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"[:h1 {:color \"orange\"}]"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"(fn [data] [:h1 (-> data :display)])"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),""], null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),""], null)]));
component_builder.core.event_mappings = (function event_mappings(event){if(cljs.core.truth_((function (){var and__3541__auto__ = cljs.core._EQ_.call(null,event.type,"click");if(and__3541__auto__)
{return antares.core.has_class_QMARK_.call(null,event.target,"tab");
} else
{return and__3541__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activate-tab","activate-tab",-2038420470),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),event.target.textContent,new cljs.core.Keyword(null,"ident","ident",-742346),cljs.core.keyword.call(null,event.target.dataset.ident)], null)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"no-action","no-action",-517532536),cljs.core.PersistentArrayMap.EMPTY], null);

}
});
component_builder.core.controller = (function controller(p__32811){var vec__32813 = p__32811;var control = cljs.core.nth.call(null,vec__32813,(0),null);var data = cljs.core.nth.call(null,vec__32813,(1),null);if(cljs.core._EQ_.call(null,control,new cljs.core.Keyword(null,"activate-tab","activate-tab",-2038420470)))
{antares.core.cursor__GT_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-tab","active-tab",1102432568)], null),data);
return antares.core.cursor__GT_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code-editor","code-editor",1902143804)], null),antares.core.get_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(data)], null)));
} else
{if(cljs.core._EQ_.call(null,control,new cljs.core.Keyword(null,"update-code","update-code",-918863393)))
{antares.core.cursor__GT_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code-editor","code-editor",1902143804)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),data.getValue()], null));
antares.core.cursor__GT_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(antares.core.get_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-tab","active-tab",1102432568)], null)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),data.getValue()], null));
return antares.core.post.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8989/compile-template",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"compile-data","compile-data",-1472149691),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(antares.core.get_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test-data","test-data",805102338)], null))),new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(antares.core.get_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render","render",-1408033454)], null)))], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__32813,control,data){
return (function (response){return antares.core.cursor__GT_value.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"html","html",-998796897)], null),antares.core.compile_html_BANG_.call(null,antares.core.string__GT_data.call(null,response)));
});})(vec__32813,control,data))
], null));
} else
{return null;
}
}
});
component_builder.core.tab_list = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"tab-list","tab-list",684589107),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tab-list.ui.divided.horizontal.list","div.tab-list.ui.divided.horizontal.list",-1960950234),(function (){var iter__4278__auto__ = (function iter__32814(s__32815){return (new cljs.core.LazySeq(null,(function (){var s__32815__$1 = s__32815;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32815__$1);if(temp__4126__auto__)
{var s__32815__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32815__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__32815__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__32817 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__32816 = (0);while(true){
if((i__32816 < size__4277__auto__))
{var tab = cljs.core._nth.call(null,c__4276__auto__,i__32816);cljs.core.chunk_append.call(null,b__32817,((cljs.core._EQ_.call(null,tab,cljs.core.get_in.call(null,cljs.core.deref.call(null,antares.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-tab","active-tab",1102432568)], null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tab.item.active","div.tab.item.active",-1806488493),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-ident","data-ident",2070785937),new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(tab)], null),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(tab)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tab.item","div.tab.item",-1027314266),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-ident","data-ident",2070785937),new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(tab)], null),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(tab)], null)));
{
var G__32818 = (i__32816 + (1));
i__32816 = G__32818;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32817),iter__32814.call(null,cljs.core.chunk_rest.call(null,s__32815__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32817),null);
}
} else
{var tab = cljs.core.first.call(null,s__32815__$2);return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,tab,cljs.core.get_in.call(null,cljs.core.deref.call(null,antares.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-tab","active-tab",1102432568)], null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tab.item.active","div.tab.item.active",-1806488493),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-ident","data-ident",2070785937),new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(tab)], null),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(tab)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tab.item","div.tab.item",-1027314266),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-ident","data-ident",2070785937),new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(tab)], null),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(tab)], null)),iter__32814.call(null,cljs.core.rest.call(null,s__32815__$2)));
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
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#template-code-editor","div#template-code-editor",1823628109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.CodeMirror","div.CodeMirror",578823828),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"600px"], null)], null)], null),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (self){var codemirror = CodeMirror.fromTextArea(document.querySelector("#template-code-editor textarea"),cljs.core.PersistentArrayMap.EMPTY);var options = new cljs.core.PersistentArrayMap(null, 4, ["theme","solarized light","mode","clojure","matchBrackets",true,"lineNumbers",true], null);var seq__32819_32825 = cljs.core.seq.call(null,options);var chunk__32820_32826 = null;var count__32821_32827 = (0);var i__32822_32828 = (0);while(true){
if((i__32822_32828 < count__32821_32827))
{var vec__32823_32829 = cljs.core._nth.call(null,chunk__32820_32826,i__32822_32828);var option_key_32830 = cljs.core.nth.call(null,vec__32823_32829,(0),null);var option_value_32831 = cljs.core.nth.call(null,vec__32823_32829,(1),null);codemirror.setOption(option_key_32830,option_value_32831);
{
var G__32832 = seq__32819_32825;
var G__32833 = chunk__32820_32826;
var G__32834 = count__32821_32827;
var G__32835 = (i__32822_32828 + (1));
seq__32819_32825 = G__32832;
chunk__32820_32826 = G__32833;
count__32821_32827 = G__32834;
i__32822_32828 = G__32835;
continue;
}
} else
{var temp__4126__auto___32836 = cljs.core.seq.call(null,seq__32819_32825);if(temp__4126__auto___32836)
{var seq__32819_32837__$1 = temp__4126__auto___32836;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32819_32837__$1))
{var c__4309__auto___32838 = cljs.core.chunk_first.call(null,seq__32819_32837__$1);{
var G__32839 = cljs.core.chunk_rest.call(null,seq__32819_32837__$1);
var G__32840 = c__4309__auto___32838;
var G__32841 = cljs.core.count.call(null,c__4309__auto___32838);
var G__32842 = (0);
seq__32819_32825 = G__32839;
chunk__32820_32826 = G__32840;
count__32821_32827 = G__32841;
i__32822_32828 = G__32842;
continue;
}
} else
{var vec__32824_32843 = cljs.core.first.call(null,seq__32819_32837__$1);var option_key_32844 = cljs.core.nth.call(null,vec__32824_32843,(0),null);var option_value_32845 = cljs.core.nth.call(null,vec__32824_32843,(1),null);codemirror.setOption(option_key_32844,option_value_32845);
{
var G__32846 = cljs.core.next.call(null,seq__32819_32837__$1);
var G__32847 = null;
var G__32848 = (0);
var G__32849 = (0);
seq__32819_32825 = G__32846;
chunk__32820_32826 = G__32847;
count__32821_32827 = G__32848;
i__32822_32828 = G__32849;
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
component_builder.core.root = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.ui.grid","div.container.ui.grid",1464028043),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.wide.sixteen","div.column.wide.sixteen",-661719409),antares.core.render_html.call(null,component_builder.core.app_state_inspector,data)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.wide.eight","div.column.wide.eight",-797783451),antares.core.render_html.call(null,component_builder.core.tab_list,new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(data)),antares.core.render_html.call(null,component_builder.core.code_editor,new cljs.core.Keyword(null,"code-editor","code-editor",1902143804).cljs$core$IFn$_invoke$arity$1(data))], null)], null)], null);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(component_builder.core.app_state_inspector),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(component_builder.core.tab_list),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(component_builder.core.code_editor)], null)], null));
antares.core.bind.call(null,component_builder.core.root,cljs.core.PersistentVector.EMPTY,"#antares");
antares.core.event_loop.call(null,component_builder.core.event_mappings,component_builder.core.controller);
antares.core.renderer.call(null,component_builder.core.root);

//# sourceMappingURL=core.js.map