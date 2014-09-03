// Compiled by ClojureScript 0.0-2311
goog.provide('components.codeeditor');
goog.require('cljs.core');
goog.require('antares.core');
goog.require('antares.core');
components.codeeditor.code_editor = antares.core.stateful_component.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"code-editor","code-editor",1902143804),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.code-editor","div.code-editor",-1539435275),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),data.call(null,new cljs.core.Keyword(null,"display","display",242065432))], null)], null);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (self){var nodelist = antares.core.nodelist__GT_array.call(null,document.querySelectorAll(".code-editor textarea"));var codemirrors = cljs.core.map.call(null,((function (nodelist){
return (function (p1__17897_SHARP_){return CodeMirror.fromTextArea(p1__17897_SHARP_);
});})(nodelist))
,nodelist);var options = new cljs.core.PersistentArrayMap(null, 4, ["theme","solarized light","mode","clojure","matchBrackets",true,"lineNumbers",true], null);var seq__17898 = cljs.core.seq.call(null,codemirrors);var chunk__17899 = null;var count__17900 = (0);var i__17901 = (0);while(true){
if((i__17901 < count__17900))
{var codemirror = cljs.core._nth.call(null,chunk__17899,i__17901);var seq__17902_17914 = cljs.core.seq.call(null,options);var chunk__17903_17915 = null;var count__17904_17916 = (0);var i__17905_17917 = (0);while(true){
if((i__17905_17917 < count__17904_17916))
{var vec__17906_17918 = cljs.core._nth.call(null,chunk__17903_17915,i__17905_17917);var option_key_17919 = cljs.core.nth.call(null,vec__17906_17918,(0),null);var option_value_17920 = cljs.core.nth.call(null,vec__17906_17918,(1),null);codemirror.setOption(option_key_17919,option_value_17920);
{
var G__17921 = seq__17902_17914;
var G__17922 = chunk__17903_17915;
var G__17923 = count__17904_17916;
var G__17924 = (i__17905_17917 + (1));
seq__17902_17914 = G__17921;
chunk__17903_17915 = G__17922;
count__17904_17916 = G__17923;
i__17905_17917 = G__17924;
continue;
}
} else
{var temp__4126__auto___17925 = cljs.core.seq.call(null,seq__17902_17914);if(temp__4126__auto___17925)
{var seq__17902_17926__$1 = temp__4126__auto___17925;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17902_17926__$1))
{var c__4309__auto___17927 = cljs.core.chunk_first.call(null,seq__17902_17926__$1);{
var G__17928 = cljs.core.chunk_rest.call(null,seq__17902_17926__$1);
var G__17929 = c__4309__auto___17927;
var G__17930 = cljs.core.count.call(null,c__4309__auto___17927);
var G__17931 = (0);
seq__17902_17914 = G__17928;
chunk__17903_17915 = G__17929;
count__17904_17916 = G__17930;
i__17905_17917 = G__17931;
continue;
}
} else
{var vec__17907_17932 = cljs.core.first.call(null,seq__17902_17926__$1);var option_key_17933 = cljs.core.nth.call(null,vec__17907_17932,(0),null);var option_value_17934 = cljs.core.nth.call(null,vec__17907_17932,(1),null);codemirror.setOption(option_key_17933,option_value_17934);
{
var G__17935 = cljs.core.next.call(null,seq__17902_17926__$1);
var G__17936 = null;
var G__17937 = (0);
var G__17938 = (0);
seq__17902_17914 = G__17935;
chunk__17903_17915 = G__17936;
count__17904_17916 = G__17937;
i__17905_17917 = G__17938;
continue;
}
}
} else
{}
}
break;
}
codemirror.on("keydown",((function (seq__17898,chunk__17899,count__17900,i__17901,codemirror,nodelist,codemirrors,options){
return (function (self__$1,event){if(cljs.core.truth_((function (){var and__3541__auto__ = cljs.core._EQ_.call(null,event.keyCode,(13));if(and__3541__auto__)
{return event.shiftKey;
} else
{return and__3541__auto__;
}
})()))
{return antares.core.emit_control_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-editor","update-editor",-1809006313),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"value","value",305978217),self__$1.getValue()], null)], null));
} else
{return null;
}
});})(seq__17898,chunk__17899,count__17900,i__17901,codemirror,nodelist,codemirrors,options))
);
{
var G__17939 = seq__17898;
var G__17940 = chunk__17899;
var G__17941 = count__17900;
var G__17942 = (i__17901 + (1));
seq__17898 = G__17939;
chunk__17899 = G__17940;
count__17900 = G__17941;
i__17901 = G__17942;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__17898);if(temp__4126__auto__)
{var seq__17898__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17898__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__17898__$1);{
var G__17943 = cljs.core.chunk_rest.call(null,seq__17898__$1);
var G__17944 = c__4309__auto__;
var G__17945 = cljs.core.count.call(null,c__4309__auto__);
var G__17946 = (0);
seq__17898 = G__17943;
chunk__17899 = G__17944;
count__17900 = G__17945;
i__17901 = G__17946;
continue;
}
} else
{var codemirror = cljs.core.first.call(null,seq__17898__$1);var seq__17908_17947 = cljs.core.seq.call(null,options);var chunk__17909_17948 = null;var count__17910_17949 = (0);var i__17911_17950 = (0);while(true){
if((i__17911_17950 < count__17910_17949))
{var vec__17912_17951 = cljs.core._nth.call(null,chunk__17909_17948,i__17911_17950);var option_key_17952 = cljs.core.nth.call(null,vec__17912_17951,(0),null);var option_value_17953 = cljs.core.nth.call(null,vec__17912_17951,(1),null);codemirror.setOption(option_key_17952,option_value_17953);
{
var G__17954 = seq__17908_17947;
var G__17955 = chunk__17909_17948;
var G__17956 = count__17910_17949;
var G__17957 = (i__17911_17950 + (1));
seq__17908_17947 = G__17954;
chunk__17909_17948 = G__17955;
count__17910_17949 = G__17956;
i__17911_17950 = G__17957;
continue;
}
} else
{var temp__4126__auto___17958__$1 = cljs.core.seq.call(null,seq__17908_17947);if(temp__4126__auto___17958__$1)
{var seq__17908_17959__$1 = temp__4126__auto___17958__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17908_17959__$1))
{var c__4309__auto___17960 = cljs.core.chunk_first.call(null,seq__17908_17959__$1);{
var G__17961 = cljs.core.chunk_rest.call(null,seq__17908_17959__$1);
var G__17962 = c__4309__auto___17960;
var G__17963 = cljs.core.count.call(null,c__4309__auto___17960);
var G__17964 = (0);
seq__17908_17947 = G__17961;
chunk__17909_17948 = G__17962;
count__17910_17949 = G__17963;
i__17911_17950 = G__17964;
continue;
}
} else
{var vec__17913_17965 = cljs.core.first.call(null,seq__17908_17959__$1);var option_key_17966 = cljs.core.nth.call(null,vec__17913_17965,(0),null);var option_value_17967 = cljs.core.nth.call(null,vec__17913_17965,(1),null);codemirror.setOption(option_key_17966,option_value_17967);
{
var G__17968 = cljs.core.next.call(null,seq__17908_17959__$1);
var G__17969 = null;
var G__17970 = (0);
var G__17971 = (0);
seq__17908_17947 = G__17968;
chunk__17909_17948 = G__17969;
count__17910_17949 = G__17970;
i__17911_17950 = G__17971;
continue;
}
}
} else
{}
}
break;
}
codemirror.on("keydown",((function (seq__17898,chunk__17899,count__17900,i__17901,codemirror,seq__17898__$1,temp__4126__auto__,nodelist,codemirrors,options){
return (function (self__$1,event){if(cljs.core.truth_((function (){var and__3541__auto__ = cljs.core._EQ_.call(null,event.keyCode,(13));if(and__3541__auto__)
{return event.shiftKey;
} else
{return and__3541__auto__;
}
})()))
{return antares.core.emit_control_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-editor","update-editor",-1809006313),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"value","value",305978217),self__$1.getValue()], null)], null));
} else
{return null;
}
});})(seq__17898,chunk__17899,count__17900,i__17901,codemirror,seq__17898__$1,temp__4126__auto__,nodelist,codemirrors,options))
);
{
var G__17972 = cljs.core.next.call(null,seq__17898__$1);
var G__17973 = null;
var G__17974 = (0);
var G__17975 = (0);
seq__17898 = G__17972;
chunk__17899 = G__17973;
count__17900 = G__17974;
i__17901 = G__17975;
continue;
}
}
} else
{return null;
}
}
break;
}
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"controls","controls",1340701452),cljs.core.PersistentVector.EMPTY], null));

//# sourceMappingURL=codeeditor.js.map