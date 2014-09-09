// Compiled by ClojureScript 0.0-2311
goog.provide('cljs.templatefinal');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('antares.helpers');
goog.require('antares.helpers');
goog.require('reagent.core');
goog.require('reagent.core');
cljs.templatefinal.files_list_state = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cljs.templatefinal.active_file_state = reagent.core.atom.call(null,"");
cljs.templatefinal.active_file_data_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filename","filename",-1428840783),"",new cljs.core.Keyword(null,"filecontent","filecontent",-1743873514),""], null));
antares.helpers.get.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8889/services/s3/vendoriq-data-imports/list-objects",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){return cljs.core.reset_BANG_.call(null,cljs.templatefinal.files_list_state,response);
})], null));
cljs.templatefinal.files_list = (function files_list(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Files List"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.files-list","ul.files-list",216080587),(function (){var active_file = cljs.core.deref.call(null,cljs.templatefinal.active_file_state);var iter__4278__auto__ = ((function (active_file){
return (function iter__13502(s__13503){return (new cljs.core.LazySeq(null,((function (active_file){
return (function (){var s__13503__$1 = s__13503;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13503__$1);if(temp__4126__auto__)
{var s__13503__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13503__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__13503__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__13505 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__13504 = (0);while(true){
if((i__13504 < size__4277__auto__))
{var file = cljs.core._nth.call(null,c__4276__auto__,i__13504);cljs.core.chunk_append.call(null,b__13505,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.file","li.file",565448558),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,file,active_file))?"active":""),new cljs.core.Keyword(null,"data-file-name","data-file-name",1306288466),file,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__13504,file,c__4276__auto__,size__4277__auto__,b__13505,s__13503__$2,temp__4126__auto__,active_file){
return (function (event){return cljs.core.reset_BANG_.call(null,cljs.templatefinal.active_file_state,event.target.dataset.fileName);
});})(i__13504,file,c__4276__auto__,size__4277__auto__,b__13505,s__13503__$2,temp__4126__auto__,active_file))
], null),file], null));
{
var G__13506 = (i__13504 + (1));
i__13504 = G__13506;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13505),iter__13502.call(null,cljs.core.chunk_rest.call(null,s__13503__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13505),null);
}
} else
{var file = cljs.core.first.call(null,s__13503__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.file","li.file",565448558),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,file,active_file))?"active":""),new cljs.core.Keyword(null,"data-file-name","data-file-name",1306288466),file,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (file,s__13503__$2,temp__4126__auto__,active_file){
return (function (event){return cljs.core.reset_BANG_.call(null,cljs.templatefinal.active_file_state,event.target.dataset.fileName);
});})(file,s__13503__$2,temp__4126__auto__,active_file))
], null),file], null),iter__13502.call(null,cljs.core.rest.call(null,s__13503__$2)));
}
} else
{return null;
}
break;
}
});})(active_file))
,null,null));
});})(active_file))
;return iter__4278__auto__.call(null,cljs.core.deref.call(null,cljs.templatefinal.files_list_state));
})()], null)], null);
});
cljs.templatefinal.active_file = (function active_file(){var active_file_data = cljs.core.deref.call(null,cljs.templatefinal.active_file_data_state);var file_lines = clojure.string.split.call(null,active_file_data.call(null,new cljs.core.Keyword(null,"filecontent","filecontent",-1743873514)),/[\n\r]/);var file_header = cljs.core.first.call(null,file_lines);var file_headers = clojure.string.split.call(null,file_header,/,/);var file_body = cljs.core.rest.call(null,file_lines);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.active-file","div.active-file",1856107304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),active_file_data.call(null,new cljs.core.Keyword(null,"filename","filename",-1428840783))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4278__auto__ = ((function (active_file_data,file_lines,file_header,file_headers,file_body){
return (function iter__13531(s__13532){return (new cljs.core.LazySeq(null,((function (active_file_data,file_lines,file_header,file_headers,file_body){
return (function (){var s__13532__$1 = s__13532;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13532__$1);if(temp__4126__auto__)
{var s__13532__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13532__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__13532__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__13534 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__13533 = (0);while(true){
if((i__13533 < size__4277__auto__))
{var header = cljs.core._nth.call(null,c__4276__auto__,i__13533);cljs.core.chunk_append.call(null,b__13534,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),header], null));
{
var G__13555 = (i__13533 + (1));
i__13533 = G__13555;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13534),iter__13531.call(null,cljs.core.chunk_rest.call(null,s__13532__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13534),null);
}
} else
{var header = cljs.core.first.call(null,s__13532__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),header], null),iter__13531.call(null,cljs.core.rest.call(null,s__13532__$2)));
}
} else
{return null;
}
break;
}
});})(active_file_data,file_lines,file_header,file_headers,file_body))
,null,null));
});})(active_file_data,file_lines,file_header,file_headers,file_body))
;return iter__4278__auto__.call(null,file_headers);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4278__auto__ = ((function (active_file_data,file_lines,file_header,file_headers,file_body){
return (function iter__13535(s__13536){return (new cljs.core.LazySeq(null,((function (active_file_data,file_lines,file_header,file_headers,file_body){
return (function (){var s__13536__$1 = s__13536;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13536__$1);if(temp__4126__auto__)
{var s__13536__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13536__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__13536__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__13538 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__13537 = (0);while(true){
if((i__13537 < size__4277__auto__))
{var row = cljs.core._nth.call(null,c__4276__auto__,i__13537);cljs.core.chunk_append.call(null,b__13538,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4278__auto__ = ((function (i__13537,row,c__4276__auto__,size__4277__auto__,b__13538,s__13536__$2,temp__4126__auto__,active_file_data,file_lines,file_header,file_headers,file_body){
return (function iter__13547(s__13548){return (new cljs.core.LazySeq(null,((function (i__13537,row,c__4276__auto__,size__4277__auto__,b__13538,s__13536__$2,temp__4126__auto__,active_file_data,file_lines,file_header,file_headers,file_body){
return (function (){var s__13548__$1 = s__13548;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__13548__$1);if(temp__4126__auto____$1)
{var s__13548__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__13548__$2))
{var c__4276__auto____$1 = cljs.core.chunk_first.call(null,s__13548__$2);var size__4277__auto____$1 = cljs.core.count.call(null,c__4276__auto____$1);var b__13550 = cljs.core.chunk_buffer.call(null,size__4277__auto____$1);if((function (){var i__13549 = (0);while(true){
if((i__13549 < size__4277__auto____$1))
{var column = cljs.core._nth.call(null,c__4276__auto____$1,i__13549);cljs.core.chunk_append.call(null,b__13550,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),column], null));
{
var G__13556 = (i__13549 + (1));
i__13549 = G__13556;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13550),iter__13547.call(null,cljs.core.chunk_rest.call(null,s__13548__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13550),null);
}
} else
{var column = cljs.core.first.call(null,s__13548__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),column], null),iter__13547.call(null,cljs.core.rest.call(null,s__13548__$2)));
}
} else
{return null;
}
break;
}
});})(i__13537,row,c__4276__auto__,size__4277__auto__,b__13538,s__13536__$2,temp__4126__auto__,active_file_data,file_lines,file_header,file_headers,file_body))
,null,null));
});})(i__13537,row,c__4276__auto__,size__4277__auto__,b__13538,s__13536__$2,temp__4126__auto__,active_file_data,file_lines,file_header,file_headers,file_body))
;return iter__4278__auto__.call(null,clojure.string.split.call(null,row,/,/));
})()], null));
{
var G__13557 = (i__13537 + (1));
i__13537 = G__13557;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13538),iter__13535.call(null,cljs.core.chunk_rest.call(null,s__13536__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13538),null);
}
} else
{var row = cljs.core.first.call(null,s__13536__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4278__auto__ = ((function (row,s__13536__$2,temp__4126__auto__,active_file_data,file_lines,file_header,file_headers,file_body){
return (function iter__13551(s__13552){return (new cljs.core.LazySeq(null,((function (row,s__13536__$2,temp__4126__auto__,active_file_data,file_lines,file_header,file_headers,file_body){
return (function (){var s__13552__$1 = s__13552;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__13552__$1);if(temp__4126__auto____$1)
{var s__13552__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__13552__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__13552__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__13554 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__13553 = (0);while(true){
if((i__13553 < size__4277__auto__))
{var column = cljs.core._nth.call(null,c__4276__auto__,i__13553);cljs.core.chunk_append.call(null,b__13554,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),column], null));
{
var G__13558 = (i__13553 + (1));
i__13553 = G__13558;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13554),iter__13551.call(null,cljs.core.chunk_rest.call(null,s__13552__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13554),null);
}
} else
{var column = cljs.core.first.call(null,s__13552__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),column], null),iter__13551.call(null,cljs.core.rest.call(null,s__13552__$2)));
}
} else
{return null;
}
break;
}
});})(row,s__13536__$2,temp__4126__auto__,active_file_data,file_lines,file_header,file_headers,file_body))
,null,null));
});})(row,s__13536__$2,temp__4126__auto__,active_file_data,file_lines,file_header,file_headers,file_body))
;return iter__4278__auto__.call(null,clojure.string.split.call(null,row,/,/));
})()], null),iter__13535.call(null,cljs.core.rest.call(null,s__13536__$2)));
}
} else
{return null;
}
break;
}
});})(active_file_data,file_lines,file_header,file_headers,file_body))
,null,null));
});})(active_file_data,file_lines,file_header,file_headers,file_body))
;return iter__4278__auto__.call(null,file_body);
})()], null)], null)], null);
});
cljs.templatefinal.app = (function app(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.ui.grid","div.container.ui.grid",1464028043),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.wide.two","div.column.wide.two",1340900383),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.templatefinal.files_list], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.wide.eight","div.column.wide.eight",-797783451),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.templatefinal.active_file], null)], null)], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.templatefinal.app], null),document.querySelector("#app-target"));
cljs.core.add_watch.call(null,cljs.templatefinal.active_file_state,new cljs.core.Keyword(null,"load-file-from-s3","load-file-from-s3",2116992617),(function (key,ref,old_value,new_value){return antares.helpers.get.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uri","uri",-774711847),("http://localhost:8889/services/s3/vendoriq-data-imports/get-object/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_value)),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){return cljs.core.reset_BANG_.call(null,cljs.templatefinal.active_file_data_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filename","filename",-1428840783),cljs.core.get.call(null,response,"filename"),new cljs.core.Keyword(null,"filecontent","filecontent",-1743873514),cljs.core.get.call(null,response,"filecontent")], null));
})], null));
}));

//# sourceMappingURL=templatefinal.js.map