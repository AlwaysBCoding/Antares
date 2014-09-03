// Compiled by ClojureScript 0.0-2311
goog.provide('components.codeeditor');
goog.require('cljs.core');
goog.require('antares.core');
goog.require('antares.core');
components.codeeditor.code_editor = antares.core.stateful_component.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"code-editor","code-editor",1902143804),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.code-editor","div.code-editor",-1539435275),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),data.call(null,new cljs.core.Keyword(null,"display","display",242065432))], null)], null);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (self){var nodelist = antares.core.nodelist__GT_array.call(null,document.querySelectorAll(".code-editor textarea"));var codemirrors = cljs.core.map.call(null,((function (nodelist){
return (function (p1__16658_SHARP_){return CodeMirror.fromTextArea(p1__16658_SHARP_);
});})(nodelist))
,nodelist);var options = new cljs.core.PersistentArrayMap(null, 4, ["theme","solarized light","mode","clojure","matchBrackets",true,"lineNumbers",true], null);var seq__16659 = cljs.core.seq.call(null,codemirrors);var chunk__16660 = null;var count__16661 = (0);var i__16662 = (0);while(true){
if((i__16662 < count__16661))
{var codemirror = cljs.core._nth.call(null,chunk__16660,i__16662);var seq__16663_16675 = cljs.core.seq.call(null,options);var chunk__16664_16676 = null;var count__16665_16677 = (0);var i__16666_16678 = (0);while(true){
if((i__16666_16678 < count__16665_16677))
{var vec__16667_16679 = cljs.core._nth.call(null,chunk__16664_16676,i__16666_16678);var option_key_16680 = cljs.core.nth.call(null,vec__16667_16679,(0),null);var option_value_16681 = cljs.core.nth.call(null,vec__16667_16679,(1),null);codemirror.setOption(option_key_16680,option_value_16681);
{
var G__16682 = seq__16663_16675;
var G__16683 = chunk__16664_16676;
var G__16684 = count__16665_16677;
var G__16685 = (i__16666_16678 + (1));
seq__16663_16675 = G__16682;
chunk__16664_16676 = G__16683;
count__16665_16677 = G__16684;
i__16666_16678 = G__16685;
continue;
}
} else
{var temp__4126__auto___16686 = cljs.core.seq.call(null,seq__16663_16675);if(temp__4126__auto___16686)
{var seq__16663_16687__$1 = temp__4126__auto___16686;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16663_16687__$1))
{var c__4309__auto___16688 = cljs.core.chunk_first.call(null,seq__16663_16687__$1);{
var G__16689 = cljs.core.chunk_rest.call(null,seq__16663_16687__$1);
var G__16690 = c__4309__auto___16688;
var G__16691 = cljs.core.count.call(null,c__4309__auto___16688);
var G__16692 = (0);
seq__16663_16675 = G__16689;
chunk__16664_16676 = G__16690;
count__16665_16677 = G__16691;
i__16666_16678 = G__16692;
continue;
}
} else
{var vec__16668_16693 = cljs.core.first.call(null,seq__16663_16687__$1);var option_key_16694 = cljs.core.nth.call(null,vec__16668_16693,(0),null);var option_value_16695 = cljs.core.nth.call(null,vec__16668_16693,(1),null);codemirror.setOption(option_key_16694,option_value_16695);
{
var G__16696 = cljs.core.next.call(null,seq__16663_16687__$1);
var G__16697 = null;
var G__16698 = (0);
var G__16699 = (0);
seq__16663_16675 = G__16696;
chunk__16664_16676 = G__16697;
count__16665_16677 = G__16698;
i__16666_16678 = G__16699;
continue;
}
}
} else
{}
}
break;
}
codemirror.on("blur",((function (seq__16659,chunk__16660,count__16661,i__16662,codemirror,nodelist,codemirrors,options){
return (function (self__$1,event){return antares.core.emit_event_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-editor","update-editor",-1809006313),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),self__$1.getValue()], null)], null));
});})(seq__16659,chunk__16660,count__16661,i__16662,codemirror,nodelist,codemirrors,options))
);
{
var G__16700 = seq__16659;
var G__16701 = chunk__16660;
var G__16702 = count__16661;
var G__16703 = (i__16662 + (1));
seq__16659 = G__16700;
chunk__16660 = G__16701;
count__16661 = G__16702;
i__16662 = G__16703;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__16659);if(temp__4126__auto__)
{var seq__16659__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16659__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__16659__$1);{
var G__16704 = cljs.core.chunk_rest.call(null,seq__16659__$1);
var G__16705 = c__4309__auto__;
var G__16706 = cljs.core.count.call(null,c__4309__auto__);
var G__16707 = (0);
seq__16659 = G__16704;
chunk__16660 = G__16705;
count__16661 = G__16706;
i__16662 = G__16707;
continue;
}
} else
{var codemirror = cljs.core.first.call(null,seq__16659__$1);var seq__16669_16708 = cljs.core.seq.call(null,options);var chunk__16670_16709 = null;var count__16671_16710 = (0);var i__16672_16711 = (0);while(true){
if((i__16672_16711 < count__16671_16710))
{var vec__16673_16712 = cljs.core._nth.call(null,chunk__16670_16709,i__16672_16711);var option_key_16713 = cljs.core.nth.call(null,vec__16673_16712,(0),null);var option_value_16714 = cljs.core.nth.call(null,vec__16673_16712,(1),null);codemirror.setOption(option_key_16713,option_value_16714);
{
var G__16715 = seq__16669_16708;
var G__16716 = chunk__16670_16709;
var G__16717 = count__16671_16710;
var G__16718 = (i__16672_16711 + (1));
seq__16669_16708 = G__16715;
chunk__16670_16709 = G__16716;
count__16671_16710 = G__16717;
i__16672_16711 = G__16718;
continue;
}
} else
{var temp__4126__auto___16719__$1 = cljs.core.seq.call(null,seq__16669_16708);if(temp__4126__auto___16719__$1)
{var seq__16669_16720__$1 = temp__4126__auto___16719__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16669_16720__$1))
{var c__4309__auto___16721 = cljs.core.chunk_first.call(null,seq__16669_16720__$1);{
var G__16722 = cljs.core.chunk_rest.call(null,seq__16669_16720__$1);
var G__16723 = c__4309__auto___16721;
var G__16724 = cljs.core.count.call(null,c__4309__auto___16721);
var G__16725 = (0);
seq__16669_16708 = G__16722;
chunk__16670_16709 = G__16723;
count__16671_16710 = G__16724;
i__16672_16711 = G__16725;
continue;
}
} else
{var vec__16674_16726 = cljs.core.first.call(null,seq__16669_16720__$1);var option_key_16727 = cljs.core.nth.call(null,vec__16674_16726,(0),null);var option_value_16728 = cljs.core.nth.call(null,vec__16674_16726,(1),null);codemirror.setOption(option_key_16727,option_value_16728);
{
var G__16729 = cljs.core.next.call(null,seq__16669_16720__$1);
var G__16730 = null;
var G__16731 = (0);
var G__16732 = (0);
seq__16669_16708 = G__16729;
chunk__16670_16709 = G__16730;
count__16671_16710 = G__16731;
i__16672_16711 = G__16732;
continue;
}
}
} else
{}
}
break;
}
codemirror.on("blur",((function (seq__16659,chunk__16660,count__16661,i__16662,codemirror,seq__16659__$1,temp__4126__auto__,nodelist,codemirrors,options){
return (function (self__$1,event){return antares.core.emit_event_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-editor","update-editor",-1809006313),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),self__$1.getValue()], null)], null));
});})(seq__16659,chunk__16660,count__16661,i__16662,codemirror,seq__16659__$1,temp__4126__auto__,nodelist,codemirrors,options))
);
{
var G__16733 = cljs.core.next.call(null,seq__16659__$1);
var G__16734 = null;
var G__16735 = (0);
var G__16736 = (0);
seq__16659 = G__16733;
chunk__16660 = G__16734;
count__16661 = G__16735;
i__16662 = G__16736;
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