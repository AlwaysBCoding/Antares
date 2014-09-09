// Compiled by ClojureScript 0.0-2311
goog.provide('components.tabular');
goog.require('cljs.core');
goog.require('antares.core');
goog.require('antares.core');
components.tabular.matrix_table = antares.core.stateful_component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"matrix-table","matrix-table",827347993),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.matrixtable","div.matrixtable",22529655),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.ui.table.segment","table.ui.table.segment",2020284650),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4278__auto__ = (function iter__19039(s__19040){return (new cljs.core.LazySeq(null,(function (){var s__19040__$1 = s__19040;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19040__$1);if(temp__4126__auto__)
{var s__19040__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19040__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__19040__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__19042 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__19041 = (0);while(true){
if((i__19041 < size__4277__auto__))
{var row = cljs.core._nth.call(null,c__4276__auto__,i__19041);cljs.core.chunk_append.call(null,b__19042,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4278__auto__ = ((function (i__19041,row,c__4276__auto__,size__4277__auto__,b__19042,s__19040__$2,temp__4126__auto__){
return (function iter__19051(s__19052){return (new cljs.core.LazySeq(null,((function (i__19041,row,c__4276__auto__,size__4277__auto__,b__19042,s__19040__$2,temp__4126__auto__){
return (function (){var s__19052__$1 = s__19052;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__19052__$1);if(temp__4126__auto____$1)
{var s__19052__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__19052__$2))
{var c__4276__auto____$1 = cljs.core.chunk_first.call(null,s__19052__$2);var size__4277__auto____$1 = cljs.core.count.call(null,c__4276__auto____$1);var b__19054 = cljs.core.chunk_buffer.call(null,size__4277__auto____$1);if((function (){var i__19053 = (0);while(true){
if((i__19053 < size__4277__auto____$1))
{var column = cljs.core._nth.call(null,c__4276__auto____$1,i__19053);cljs.core.chunk_append.call(null,b__19054,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),column], null));
{
var G__19059 = (i__19053 + (1));
i__19053 = G__19059;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19054),iter__19051.call(null,cljs.core.chunk_rest.call(null,s__19052__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19054),null);
}
} else
{var column = cljs.core.first.call(null,s__19052__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),column], null),iter__19051.call(null,cljs.core.rest.call(null,s__19052__$2)));
}
} else
{return null;
}
break;
}
});})(i__19041,row,c__4276__auto__,size__4277__auto__,b__19042,s__19040__$2,temp__4126__auto__))
,null,null));
});})(i__19041,row,c__4276__auto__,size__4277__auto__,b__19042,s__19040__$2,temp__4126__auto__))
;return iter__4278__auto__.call(null,row);
})()], null));
{
var G__19060 = (i__19041 + (1));
i__19041 = G__19060;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19042),iter__19039.call(null,cljs.core.chunk_rest.call(null,s__19040__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19042),null);
}
} else
{var row = cljs.core.first.call(null,s__19040__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4278__auto__ = ((function (row,s__19040__$2,temp__4126__auto__){
return (function iter__19055(s__19056){return (new cljs.core.LazySeq(null,((function (row,s__19040__$2,temp__4126__auto__){
return (function (){var s__19056__$1 = s__19056;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__19056__$1);if(temp__4126__auto____$1)
{var s__19056__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__19056__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__19056__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__19058 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__19057 = (0);while(true){
if((i__19057 < size__4277__auto__))
{var column = cljs.core._nth.call(null,c__4276__auto__,i__19057);cljs.core.chunk_append.call(null,b__19058,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),column], null));
{
var G__19061 = (i__19057 + (1));
i__19057 = G__19061;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19058),iter__19055.call(null,cljs.core.chunk_rest.call(null,s__19056__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19058),null);
}
} else
{var column = cljs.core.first.call(null,s__19056__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),column], null),iter__19055.call(null,cljs.core.rest.call(null,s__19056__$2)));
}
} else
{return null;
}
break;
}
});})(row,s__19040__$2,temp__4126__auto__))
,null,null));
});})(row,s__19040__$2,temp__4126__auto__))
;return iter__4278__auto__.call(null,row);
})()], null),iter__19039.call(null,cljs.core.rest.call(null,s__19040__$2)));
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
components.tabular.raw_data = antares.core.stateless_component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"raw-data","raw-data",617791828),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){console.log(cljs.core.pr_str.call(null,data));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),data.call(null,new cljs.core.Keyword(null,"display","display",242065432))], null);
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentVector.EMPTY], null));

//# sourceMappingURL=tabular.js.map