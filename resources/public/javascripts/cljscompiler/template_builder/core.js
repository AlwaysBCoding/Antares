// Compiled by ClojureScript 0.0-2311
goog.provide('template_builder.core');
goog.require('cljs.core');
goog.require('antares.core');
goog.require('antares.core');
cljs.core.reset_BANG_.call(null,antares.core.app_state,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"HTML FN"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"CSS"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"TEST DATA"], null)], null),new cljs.core.Keyword(null,"active-tab","active-tab",1102432568),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"active-template-id","active-template-id",1119840035),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(17592186045418)], null),new cljs.core.Keyword(null,"code-editor","code-editor",1902143804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),""], null),new cljs.core.Keyword(null,"html-fn","html-fn",-1459449141),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),""], null),new cljs.core.Keyword(null,"css-data","css-data",2133231584),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),""], null),new cljs.core.Keyword(null,"test-data","test-data",805102338),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),""], null)], null));
antares.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uri","uri",-774711847),("http://localhost:8989/template/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,cljs.core.deref.call(null,antares.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-template-id","active-template-id",1119840035)], null))))),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){var response_data = antares.core.string__GT_data.call(null,response);antares.core.cursor__GT_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"html-fn","html-fn",-1459449141)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"html-fn","html-fn",-1459449141).cljs$core$IFn$_invoke$arity$1(response_data)], null));
antares.core.cursor__GT_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"css-data","css-data",2133231584)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"css-data","css-data",2133231584).cljs$core$IFn$_invoke$arity$1(response_data)], null));
return antares.core.cursor__GT_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test-data","test-data",805102338)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"test-data","test-data",805102338).cljs$core$IFn$_invoke$arity$1(response_data)], null));
})], null));
template_builder.core.event_mappings = (function event_mappings(event){if(cljs.core.truth_((function (){var and__3541__auto__ = cljs.core._EQ_.call(null,event.type,"click");if(and__3541__auto__)
{return antares.core.has_class_QMARK_.call(null,event.target,"tab");
} else
{return and__3541__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activate-tab","activate-tab",-2038420470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),event.target.textContent], null)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"no-action","no-action",-517532536),cljs.core.PersistentArrayMap.EMPTY], null);

}
});
template_builder.core.controller = (function controller(p__25074){var vec__25078 = p__25074;var control = cljs.core.nth.call(null,vec__25078,(0),null);var data = cljs.core.nth.call(null,vec__25078,(1),null);if(cljs.core._EQ_.call(null,control,new cljs.core.Keyword(null,"activate-tab","activate-tab",-2038420470)))
{var G__25079_25081 = new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(data);switch (G__25079_25081) {
case "HTML FN":
antares.core.cursor__GT_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code-editor","code-editor",1902143804)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,antares.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"html-fn","html-fn",-1459449141)], null)));

break;
case "CSS":
antares.core.cursor__GT_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code-editor","code-editor",1902143804)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,antares.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"css-data","css-data",2133231584)], null)));

break;
case "TEST DATA":
antares.core.cursor__GT_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code-editor","code-editor",1902143804)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,antares.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test-data","test-data",805102338)], null)));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(data)))));

}
return antares.core.cursor__GT_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-tab","active-tab",1102432568)], null),data);
} else
{if(cljs.core._EQ_.call(null,control,new cljs.core.Keyword(null,"update-code","update-code",-918863393)))
{var G__25080_25083 = new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,cljs.core.deref.call(null,antares.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-tab","active-tab",1102432568)], null)));switch (G__25080_25083) {
case "HTML FN":
antares.core.cursor__GT_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"html-fn","html-fn",-1459449141)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),data.getValue()], null));

break;
case "CSS":
antares.core.cursor__GT_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"css-data","css-data",2133231584)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),data.getValue()], null));

break;
case "TEST DATA":
antares.core.cursor__GT_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test-data","test-data",805102338)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),data.getValue()], null));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,cljs.core.deref.call(null,antares.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-tab","active-tab",1102432568)], null)))))));

}
return antares.core.cursor__GT_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code-editor","code-editor",1902143804)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),data.getValue()], null));
} else
{return null;
}
}
});
template_builder.core.tab_list = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"tab-list","tab-list",684589107),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tab-list.ui.divided.horizontal.list","div.tab-list.ui.divided.horizontal.list",-1960950234),(function (){var iter__4278__auto__ = (function iter__25085(s__25086){return (new cljs.core.LazySeq(null,(function (){var s__25086__$1 = s__25086;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25086__$1);if(temp__4126__auto__)
{var s__25086__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__25086__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__25086__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__25088 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__25087 = (0);while(true){
if((i__25087 < size__4277__auto__))
{var tab = cljs.core._nth.call(null,c__4276__auto__,i__25087);cljs.core.chunk_append.call(null,b__25088,((cljs.core._EQ_.call(null,tab,cljs.core.get_in.call(null,cljs.core.deref.call(null,antares.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-tab","active-tab",1102432568)], null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tab.item.active","div.tab.item.active",-1806488493),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(tab)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tab.item","div.tab.item",-1027314266),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(tab)], null)));
{
var G__25089 = (i__25087 + (1));
i__25087 = G__25089;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25088),iter__25085.call(null,cljs.core.chunk_rest.call(null,s__25086__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25088),null);
}
} else
{var tab = cljs.core.first.call(null,s__25086__$2);return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,tab,cljs.core.get_in.call(null,cljs.core.deref.call(null,antares.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-tab","active-tab",1102432568)], null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tab.item.active","div.tab.item.active",-1806488493),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(tab)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tab.item","div.tab.item",-1027314266),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(tab)], null)),iter__25085.call(null,cljs.core.rest.call(null,s__25086__$2)));
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
template_builder.core.code_editor = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"code-editor","code-editor",1902143804),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#template-code-editor","div#template-code-editor",1823628109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.code-editor","textarea.code-editor",2046334400),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(data)], null)], null);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (self){var codemirror = CodeMirror.fromTextArea(document.querySelector("#template-code-editor textarea"),cljs.core.PersistentArrayMap.EMPTY);var options = new cljs.core.PersistentArrayMap(null, 4, ["theme","solarized light","mode","clojure","matchBrackets",true,"lineNumbers",true], null);var seq__25090_25096 = cljs.core.seq.call(null,options);var chunk__25091_25097 = null;var count__25092_25098 = (0);var i__25093_25099 = (0);while(true){
if((i__25093_25099 < count__25092_25098))
{var vec__25094_25100 = cljs.core._nth.call(null,chunk__25091_25097,i__25093_25099);var option_key_25101 = cljs.core.nth.call(null,vec__25094_25100,(0),null);var option_value_25102 = cljs.core.nth.call(null,vec__25094_25100,(1),null);codemirror.setOption(option_key_25101,option_value_25102);
{
var G__25103 = seq__25090_25096;
var G__25104 = chunk__25091_25097;
var G__25105 = count__25092_25098;
var G__25106 = (i__25093_25099 + (1));
seq__25090_25096 = G__25103;
chunk__25091_25097 = G__25104;
count__25092_25098 = G__25105;
i__25093_25099 = G__25106;
continue;
}
} else
{var temp__4126__auto___25107 = cljs.core.seq.call(null,seq__25090_25096);if(temp__4126__auto___25107)
{var seq__25090_25108__$1 = temp__4126__auto___25107;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25090_25108__$1))
{var c__4309__auto___25109 = cljs.core.chunk_first.call(null,seq__25090_25108__$1);{
var G__25110 = cljs.core.chunk_rest.call(null,seq__25090_25108__$1);
var G__25111 = c__4309__auto___25109;
var G__25112 = cljs.core.count.call(null,c__4309__auto___25109);
var G__25113 = (0);
seq__25090_25096 = G__25110;
chunk__25091_25097 = G__25111;
count__25092_25098 = G__25112;
i__25093_25099 = G__25113;
continue;
}
} else
{var vec__25095_25114 = cljs.core.first.call(null,seq__25090_25108__$1);var option_key_25115 = cljs.core.nth.call(null,vec__25095_25114,(0),null);var option_value_25116 = cljs.core.nth.call(null,vec__25095_25114,(1),null);codemirror.setOption(option_key_25115,option_value_25116);
{
var G__25117 = cljs.core.next.call(null,seq__25090_25108__$1);
var G__25118 = null;
var G__25119 = (0);
var G__25120 = (0);
seq__25090_25096 = G__25117;
chunk__25091_25097 = G__25118;
count__25092_25098 = G__25119;
i__25093_25099 = G__25120;
continue;
}
}
} else
{}
}
break;
}
return codemirror.on("blur",((function (codemirror,options){
return (function (self__$1,event){return template_builder.core.controller.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-code","update-code",-918863393),self__$1], null));
});})(codemirror,options))
);
})], null));
template_builder.core.app_state_inspector = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"app-state-inspector","app-state-inspector",780117083),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#app-state-inspector","div#app-state-inspector",-1565249574),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea#app-state-inspector-data","textarea#app-state-inspector-data",-11848463),cljs.core.pr_str.call(null,data)], null)], null);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#app-state-inspector","div#app-state-inspector",-1565249574),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),".8rem"], null)], null)], null)], null));
template_builder.core.root = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.ui.grid","div.container.ui.grid",1464028043),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.wide.sixteen","div.column.wide.sixteen",-661719409),antares.core.render_html.call(null,template_builder.core.app_state_inspector,data)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.wide.sixteen","div.column.wide.sixteen",-661719409),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Template Builder"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.wide.six","div.column.wide.six",331820255),antares.core.render_html.call(null,template_builder.core.tab_list,new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(data)),antares.core.render_html.call(null,template_builder.core.code_editor,new cljs.core.Keyword(null,"code-editor","code-editor",1902143804).cljs$core$IFn$_invoke$arity$1(data))], null)], null)], null);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(template_builder.core.app_state_inspector),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(template_builder.core.tab_list)], null)], null));
antares.core.bind.call(null,template_builder.core.root,cljs.core.PersistentVector.EMPTY,"#antares");
antares.core.event_loop.call(null,template_builder.core.event_mappings,template_builder.core.controller);
antares.core.renderer.call(null,template_builder.core.root);

//# sourceMappingURL=core.js.map