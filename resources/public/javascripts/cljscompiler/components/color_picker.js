// Compiled by ClojureScript 0.0-2311
goog.provide('components.color_picker');
goog.require('cljs.core');
goog.require('antares.core');
goog.require('antares.core');
components.color_picker.color_swatch = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"color-swatch","color-swatch",-938411798),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-swatch","div.color-swatch",-1486767626),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),data.call(null,new cljs.core.Keyword(null,"color","color",1011675173))], null)], null);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-swatch","div.color-swatch",-1486767626),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"height","height",1025178622),"40px",new cljs.core.Keyword(null,"width","width",-384071477),"40px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"lime",new cljs.core.Keyword(null,"float","float",-1732389368),"left",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:last-child","&:last-child",1329794843),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.active","&.active",1160418114),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"3px solid red"], null)], null)], null),new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"condition","condition",1668437652),(function (event){var and__3541__auto__ = cljs.core._EQ_.call(null,event.type,"click");if(and__3541__auto__)
{return antares.core.has_class_QMARK_.call(null,event.target,"color-swatch");
} else
{return and__3541__auto__;
}
}),new cljs.core.Keyword(null,"action","action",-811238024),(function (event){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activate-color-swatch","activate-color-swatch",-408544392),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),event.target], null)], null);
})], null)], null),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"activate-color-swatch","activate-color-swatch",-408544392),new cljs.core.Keyword(null,"action","action",-811238024),(function (data){var seq__24730_24734 = cljs.core.seq.call(null,antares.core.nodelist__GT_array.call(null,document.querySelectorAll(".color-swatch.active")));var chunk__24731_24735 = null;var count__24732_24736 = (0);var i__24733_24737 = (0);while(true){
if((i__24733_24737 < count__24732_24736))
{var node_24738 = cljs.core._nth.call(null,chunk__24731_24735,i__24733_24737);antares.core.remove_class.call(null,node_24738,"active");
{
var G__24739 = seq__24730_24734;
var G__24740 = chunk__24731_24735;
var G__24741 = count__24732_24736;
var G__24742 = (i__24733_24737 + (1));
seq__24730_24734 = G__24739;
chunk__24731_24735 = G__24740;
count__24732_24736 = G__24741;
i__24733_24737 = G__24742;
continue;
}
} else
{var temp__4126__auto___24743 = cljs.core.seq.call(null,seq__24730_24734);if(temp__4126__auto___24743)
{var seq__24730_24744__$1 = temp__4126__auto___24743;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24730_24744__$1))
{var c__4309__auto___24745 = cljs.core.chunk_first.call(null,seq__24730_24744__$1);{
var G__24746 = cljs.core.chunk_rest.call(null,seq__24730_24744__$1);
var G__24747 = c__4309__auto___24745;
var G__24748 = cljs.core.count.call(null,c__4309__auto___24745);
var G__24749 = (0);
seq__24730_24734 = G__24746;
chunk__24731_24735 = G__24747;
count__24732_24736 = G__24748;
i__24733_24737 = G__24749;
continue;
}
} else
{var node_24750 = cljs.core.first.call(null,seq__24730_24744__$1);antares.core.remove_class.call(null,node_24750,"active");
{
var G__24751 = cljs.core.next.call(null,seq__24730_24744__$1);
var G__24752 = null;
var G__24753 = (0);
var G__24754 = (0);
seq__24730_24734 = G__24751;
chunk__24731_24735 = G__24752;
count__24732_24736 = G__24753;
i__24733_24737 = G__24754;
continue;
}
}
} else
{}
}
break;
}
return antares.core.add_class.call(null,data.call(null,new cljs.core.Keyword(null,"target","target",253001721)),"active");
})], null)], null)], null));
components.color_picker.active_color_display = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"active-color-display","active-color-display",-992980431),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.active-color","div.active-color",-1806921261),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Active Color: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.active-color-name","span.active-color-name",1593250385),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(data).toUpperCase()], null)], null)], null);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.active-color","div.active-color",-1806921261),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.active-color-name","span.active-color-name",1593250385),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null)], null)], null));
components.color_picker.color_picker = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"color-picker","color-picker",1110838253),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-picker","div.color-picker",523708183),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Color Picker"], null),antares.core.render_html.call(null,components.color_picker.active_color_display,data.call(null,new cljs.core.Keyword(null,"active-color","active-color",298847645))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-swatches","div.color-swatches",-1565414736),(function (){var iter__4278__auto__ = (function iter__24755(s__24756){return (new cljs.core.LazySeq(null,(function (){var s__24756__$1 = s__24756;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24756__$1);if(temp__4126__auto__)
{var s__24756__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24756__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__24756__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__24758 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__24757 = (0);while(true){
if((i__24757 < size__4277__auto__))
{var color = cljs.core._nth.call(null,c__4276__auto__,i__24757);cljs.core.chunk_append.call(null,b__24758,antares.core.render_html.call(null,components.color_picker.color_swatch,color));
{
var G__24759 = (i__24757 + (1));
i__24757 = G__24759;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24758),iter__24755.call(null,cljs.core.chunk_rest.call(null,s__24756__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24758),null);
}
} else
{var color = cljs.core.first.call(null,s__24756__$2);return cljs.core.cons.call(null,antares.core.render_html.call(null,components.color_picker.color_swatch,color),iter__24755.call(null,cljs.core.rest.call(null,s__24756__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,data.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732)));
})()], null)], null);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-picker","div.color-picker",523708183),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(components.color_picker.active_color_display),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-swatches","div.color-swatches",-1565414736),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(components.color_picker.color_swatch)], null)], null),new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885),cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885).cljs$core$IFn$_invoke$arity$1(components.color_picker.color_swatch)),new cljs.core.Keyword(null,"controls","controls",1340701452),cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(components.color_picker.color_swatch))], null));

//# sourceMappingURL=color_picker.js.map