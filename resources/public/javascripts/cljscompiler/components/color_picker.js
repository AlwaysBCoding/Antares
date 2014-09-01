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
})], null)], null),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"activate-color-swatch","activate-color-swatch",-408544392),new cljs.core.Keyword(null,"action","action",-811238024),(function (data){var seq__24139_24143 = cljs.core.seq.call(null,antares.core.nodelist__GT_array.call(null,document.querySelectorAll(".color-swatch.active")));var chunk__24140_24144 = null;var count__24141_24145 = (0);var i__24142_24146 = (0);while(true){
if((i__24142_24146 < count__24141_24145))
{var node_24147 = cljs.core._nth.call(null,chunk__24140_24144,i__24142_24146);antares.core.remove_class.call(null,node_24147,"active");
{
var G__24148 = seq__24139_24143;
var G__24149 = chunk__24140_24144;
var G__24150 = count__24141_24145;
var G__24151 = (i__24142_24146 + (1));
seq__24139_24143 = G__24148;
chunk__24140_24144 = G__24149;
count__24141_24145 = G__24150;
i__24142_24146 = G__24151;
continue;
}
} else
{var temp__4126__auto___24152 = cljs.core.seq.call(null,seq__24139_24143);if(temp__4126__auto___24152)
{var seq__24139_24153__$1 = temp__4126__auto___24152;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24139_24153__$1))
{var c__4309__auto___24154 = cljs.core.chunk_first.call(null,seq__24139_24153__$1);{
var G__24155 = cljs.core.chunk_rest.call(null,seq__24139_24153__$1);
var G__24156 = c__4309__auto___24154;
var G__24157 = cljs.core.count.call(null,c__4309__auto___24154);
var G__24158 = (0);
seq__24139_24143 = G__24155;
chunk__24140_24144 = G__24156;
count__24141_24145 = G__24157;
i__24142_24146 = G__24158;
continue;
}
} else
{var node_24159 = cljs.core.first.call(null,seq__24139_24153__$1);antares.core.remove_class.call(null,node_24159,"active");
{
var G__24160 = cljs.core.next.call(null,seq__24139_24153__$1);
var G__24161 = null;
var G__24162 = (0);
var G__24163 = (0);
seq__24139_24143 = G__24160;
chunk__24140_24144 = G__24161;
count__24141_24145 = G__24162;
i__24142_24146 = G__24163;
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
components.color_picker.color_picker = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"color-picker","color-picker",1110838253),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-picker","div.color-picker",523708183),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Color Picker"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-swatches","div.color-swatches",-1565414736),(function (){var iter__4278__auto__ = (function iter__24164(s__24165){return (new cljs.core.LazySeq(null,(function (){var s__24165__$1 = s__24165;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24165__$1);if(temp__4126__auto__)
{var s__24165__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24165__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__24165__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__24167 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__24166 = (0);while(true){
if((i__24166 < size__4277__auto__))
{var color = cljs.core._nth.call(null,c__4276__auto__,i__24166);cljs.core.chunk_append.call(null,b__24167,antares.core.render_html.call(null,components.color_picker.color_swatch,color));
{
var G__24168 = (i__24166 + (1));
i__24166 = G__24168;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24167),iter__24164.call(null,cljs.core.chunk_rest.call(null,s__24165__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24167),null);
}
} else
{var color = cljs.core.first.call(null,s__24165__$2);return cljs.core.cons.call(null,antares.core.render_html.call(null,components.color_picker.color_swatch,color),iter__24164.call(null,cljs.core.rest.call(null,s__24165__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,data.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732)));
})()], null)], null);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-picker","div.color-picker",523708183),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-swatches","div.color-swatches",-1565414736),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(components.color_picker.color_swatch)], null)], null),new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885),cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885).cljs$core$IFn$_invoke$arity$1(components.color_picker.color_swatch)),new cljs.core.Keyword(null,"controls","controls",1340701452),cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(components.color_picker.color_swatch))], null));

//# sourceMappingURL=color_picker.js.map