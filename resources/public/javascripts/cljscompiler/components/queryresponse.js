// Compiled by ClojureScript 0.0-2311
goog.provide('components.queryresponse');
goog.require('cljs.core');
goog.require('antares.core');
goog.require('antares.core');
components.queryresponse.query_response = antares.core.stateful_component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"query-response","query-response",-1581615719),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.query-response","div.query-response",-244385969),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.ui.table.segment","table.ui.table.segment",2020284650),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4278__auto__ = (function iter__16513(s__16514){return (new cljs.core.LazySeq(null,(function (){var s__16514__$1 = s__16514;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16514__$1);if(temp__4126__auto__)
{var s__16514__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16514__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__16514__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__16516 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__16515 = (0);while(true){
if((i__16515 < size__4277__auto__))
{var row = cljs.core._nth.call(null,c__4276__auto__,i__16515);cljs.core.chunk_append.call(null,b__16516,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4278__auto__ = ((function (i__16515,row,c__4276__auto__,size__4277__auto__,b__16516,s__16514__$2,temp__4126__auto__){
return (function iter__16525(s__16526){return (new cljs.core.LazySeq(null,((function (i__16515,row,c__4276__auto__,size__4277__auto__,b__16516,s__16514__$2,temp__4126__auto__){
return (function (){var s__16526__$1 = s__16526;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__16526__$1);if(temp__4126__auto____$1)
{var s__16526__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__16526__$2))
{var c__4276__auto____$1 = cljs.core.chunk_first.call(null,s__16526__$2);var size__4277__auto____$1 = cljs.core.count.call(null,c__4276__auto____$1);var b__16528 = cljs.core.chunk_buffer.call(null,size__4277__auto____$1);if((function (){var i__16527 = (0);while(true){
if((i__16527 < size__4277__auto____$1))
{var column = cljs.core._nth.call(null,c__4276__auto____$1,i__16527);cljs.core.chunk_append.call(null,b__16528,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),column], null));
{
var G__16533 = (i__16527 + (1));
i__16527 = G__16533;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16528),iter__16525.call(null,cljs.core.chunk_rest.call(null,s__16526__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16528),null);
}
} else
{var column = cljs.core.first.call(null,s__16526__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),column], null),iter__16525.call(null,cljs.core.rest.call(null,s__16526__$2)));
}
} else
{return null;
}
break;
}
});})(i__16515,row,c__4276__auto__,size__4277__auto__,b__16516,s__16514__$2,temp__4126__auto__))
,null,null));
});})(i__16515,row,c__4276__auto__,size__4277__auto__,b__16516,s__16514__$2,temp__4126__auto__))
;return iter__4278__auto__.call(null,row);
})()], null));
{
var G__16534 = (i__16515 + (1));
i__16515 = G__16534;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16516),iter__16513.call(null,cljs.core.chunk_rest.call(null,s__16514__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16516),null);
}
} else
{var row = cljs.core.first.call(null,s__16514__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4278__auto__ = ((function (row,s__16514__$2,temp__4126__auto__){
return (function iter__16529(s__16530){return (new cljs.core.LazySeq(null,((function (row,s__16514__$2,temp__4126__auto__){
return (function (){var s__16530__$1 = s__16530;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__16530__$1);if(temp__4126__auto____$1)
{var s__16530__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__16530__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__16530__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__16532 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__16531 = (0);while(true){
if((i__16531 < size__4277__auto__))
{var column = cljs.core._nth.call(null,c__4276__auto__,i__16531);cljs.core.chunk_append.call(null,b__16532,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),column], null));
{
var G__16535 = (i__16531 + (1));
i__16531 = G__16535;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16532),iter__16529.call(null,cljs.core.chunk_rest.call(null,s__16530__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16532),null);
}
} else
{var column = cljs.core.first.call(null,s__16530__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),column], null),iter__16529.call(null,cljs.core.rest.call(null,s__16530__$2)));
}
} else
{return null;
}
break;
}
});})(row,s__16514__$2,temp__4126__auto__))
,null,null));
});})(row,s__16514__$2,temp__4126__auto__))
;return iter__4278__auto__.call(null,row);
})()], null),iter__16513.call(null,cljs.core.rest.call(null,s__16514__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,data.call(null,new cljs.core.Keyword(null,"response","response",-1068424192)));
})()], null)], null)], null);
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentVector.EMPTY], null));

//# sourceMappingURL=queryresponse.js.map