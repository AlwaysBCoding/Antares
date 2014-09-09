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
cljs.templatefinal.templates_list_state = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Template 1","Template 2","Template 3"], null));
cljs.templatefinal.active_template_state = reagent.core.atom.call(null,"");
cljs.templatefinal.active_file_data_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filename","filename",-1428840783),"",new cljs.core.Keyword(null,"filecontent","filecontent",-1743873514),""], null));
cljs.templatefinal.mapping_fn_state = reagent.core.atom.call(null,"");
cljs.templatefinal.mapping_fn_result_state = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
antares.helpers.get.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8889/services/s3/vendoriq-data-imports/list-objects",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){return cljs.core.reset_BANG_.call(null,cljs.templatefinal.files_list_state,response);
})], null));
cljs.templatefinal.files_list = (function files_list(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Files List"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.files-list","ul.files-list",216080587),(function (){var active_file = cljs.core.deref.call(null,cljs.templatefinal.active_file_state);var iter__4278__auto__ = ((function (active_file){
return (function iter__20524(s__20525){return (new cljs.core.LazySeq(null,((function (active_file){
return (function (){var s__20525__$1 = s__20525;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20525__$1);if(temp__4126__auto__)
{var s__20525__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20525__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__20525__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__20527 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__20526 = (0);while(true){
if((i__20526 < size__4277__auto__))
{var file = cljs.core._nth.call(null,c__4276__auto__,i__20526);cljs.core.chunk_append.call(null,b__20527,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.file","li.file",565448558),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,file,active_file))?"active":""),new cljs.core.Keyword(null,"data-file-name","data-file-name",1306288466),file,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__20526,file,c__4276__auto__,size__4277__auto__,b__20527,s__20525__$2,temp__4126__auto__,active_file){
return (function (event){return cljs.core.reset_BANG_.call(null,cljs.templatefinal.active_file_state,event.target.dataset.fileName);
});})(i__20526,file,c__4276__auto__,size__4277__auto__,b__20527,s__20525__$2,temp__4126__auto__,active_file))
], null),file], null));
{
var G__20528 = (i__20526 + (1));
i__20526 = G__20528;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20527),iter__20524.call(null,cljs.core.chunk_rest.call(null,s__20525__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20527),null);
}
} else
{var file = cljs.core.first.call(null,s__20525__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.file","li.file",565448558),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,file,active_file))?"active":""),new cljs.core.Keyword(null,"data-file-name","data-file-name",1306288466),file,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (file,s__20525__$2,temp__4126__auto__,active_file){
return (function (event){return cljs.core.reset_BANG_.call(null,cljs.templatefinal.active_file_state,event.target.dataset.fileName);
});})(file,s__20525__$2,temp__4126__auto__,active_file))
], null),file], null),iter__20524.call(null,cljs.core.rest.call(null,s__20525__$2)));
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
cljs.templatefinal.templates_list = (function templates_list(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Templates List"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.templates-list","ul.templates-list",1756693904),(function (){var active_template = cljs.core.deref.call(null,cljs.templatefinal.active_template_state);var iter__4278__auto__ = ((function (active_template){
return (function iter__20533(s__20534){return (new cljs.core.LazySeq(null,((function (active_template){
return (function (){var s__20534__$1 = s__20534;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20534__$1);if(temp__4126__auto__)
{var s__20534__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20534__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__20534__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__20536 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__20535 = (0);while(true){
if((i__20535 < size__4277__auto__))
{var template = cljs.core._nth.call(null,c__4276__auto__,i__20535);cljs.core.chunk_append.call(null,b__20536,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.template","li.template",1287563891),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,template,active_template))?"active":""),new cljs.core.Keyword(null,"data-template-name","data-template-name",1267270877),template,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__20535,template,c__4276__auto__,size__4277__auto__,b__20536,s__20534__$2,temp__4126__auto__,active_template){
return (function (event){return cljs.core.reset_BANG_.call(null,cljs.templatefinal.active_template_state,event.target.dataset.templateName);
});})(i__20535,template,c__4276__auto__,size__4277__auto__,b__20536,s__20534__$2,temp__4126__auto__,active_template))
], null),template], null));
{
var G__20537 = (i__20535 + (1));
i__20535 = G__20537;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20536),iter__20533.call(null,cljs.core.chunk_rest.call(null,s__20534__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20536),null);
}
} else
{var template = cljs.core.first.call(null,s__20534__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.template","li.template",1287563891),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,template,active_template))?"active":""),new cljs.core.Keyword(null,"data-template-name","data-template-name",1267270877),template,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (template,s__20534__$2,temp__4126__auto__,active_template){
return (function (event){return cljs.core.reset_BANG_.call(null,cljs.templatefinal.active_template_state,event.target.dataset.templateName);
});})(template,s__20534__$2,temp__4126__auto__,active_template))
], null),template], null),iter__20533.call(null,cljs.core.rest.call(null,s__20534__$2)));
}
} else
{return null;
}
break;
}
});})(active_template))
,null,null));
});})(active_template))
;return iter__4278__auto__.call(null,cljs.core.deref.call(null,cljs.templatefinal.templates_list_state));
})()], null)], null);
});
cljs.templatefinal.active_file = (function active_file(){var active_file_data = cljs.core.deref.call(null,cljs.templatefinal.active_file_data_state);var file_lines = clojure.string.split.call(null,active_file_data.call(null,new cljs.core.Keyword(null,"filecontent","filecontent",-1743873514)),/[\n\r]/);var file_header = cljs.core.first.call(null,file_lines);var file_headers = clojure.string.split.call(null,file_header,/,/);var file_body = cljs.core.rest.call(null,file_lines);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.active-file","div.active-file",1856107304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),active_file_data.call(null,new cljs.core.Keyword(null,"filename","filename",-1428840783))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.active-file-data","div.active-file-data",-1886355927),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.ui.table.segment","table.ui.table.segment",2020284650),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4278__auto__ = ((function (active_file_data,file_lines,file_header,file_headers,file_body){
return (function iter__20562(s__20563){return (new cljs.core.LazySeq(null,((function (active_file_data,file_lines,file_header,file_headers,file_body){
return (function (){var s__20563__$1 = s__20563;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20563__$1);if(temp__4126__auto__)
{var s__20563__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20563__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__20563__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__20565 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__20564 = (0);while(true){
if((i__20564 < size__4277__auto__))
{var header = cljs.core._nth.call(null,c__4276__auto__,i__20564);cljs.core.chunk_append.call(null,b__20565,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),header], null));
{
var G__20586 = (i__20564 + (1));
i__20564 = G__20586;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20565),iter__20562.call(null,cljs.core.chunk_rest.call(null,s__20563__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20565),null);
}
} else
{var header = cljs.core.first.call(null,s__20563__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),header], null),iter__20562.call(null,cljs.core.rest.call(null,s__20563__$2)));
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
return (function iter__20566(s__20567){return (new cljs.core.LazySeq(null,((function (active_file_data,file_lines,file_header,file_headers,file_body){
return (function (){var s__20567__$1 = s__20567;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20567__$1);if(temp__4126__auto__)
{var s__20567__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20567__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__20567__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__20569 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__20568 = (0);while(true){
if((i__20568 < size__4277__auto__))
{var row = cljs.core._nth.call(null,c__4276__auto__,i__20568);cljs.core.chunk_append.call(null,b__20569,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4278__auto__ = ((function (i__20568,row,c__4276__auto__,size__4277__auto__,b__20569,s__20567__$2,temp__4126__auto__,active_file_data,file_lines,file_header,file_headers,file_body){
return (function iter__20578(s__20579){return (new cljs.core.LazySeq(null,((function (i__20568,row,c__4276__auto__,size__4277__auto__,b__20569,s__20567__$2,temp__4126__auto__,active_file_data,file_lines,file_header,file_headers,file_body){
return (function (){var s__20579__$1 = s__20579;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20579__$1);if(temp__4126__auto____$1)
{var s__20579__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20579__$2))
{var c__4276__auto____$1 = cljs.core.chunk_first.call(null,s__20579__$2);var size__4277__auto____$1 = cljs.core.count.call(null,c__4276__auto____$1);var b__20581 = cljs.core.chunk_buffer.call(null,size__4277__auto____$1);if((function (){var i__20580 = (0);while(true){
if((i__20580 < size__4277__auto____$1))
{var column = cljs.core._nth.call(null,c__4276__auto____$1,i__20580);cljs.core.chunk_append.call(null,b__20581,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),column], null));
{
var G__20587 = (i__20580 + (1));
i__20580 = G__20587;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20581),iter__20578.call(null,cljs.core.chunk_rest.call(null,s__20579__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20581),null);
}
} else
{var column = cljs.core.first.call(null,s__20579__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),column], null),iter__20578.call(null,cljs.core.rest.call(null,s__20579__$2)));
}
} else
{return null;
}
break;
}
});})(i__20568,row,c__4276__auto__,size__4277__auto__,b__20569,s__20567__$2,temp__4126__auto__,active_file_data,file_lines,file_header,file_headers,file_body))
,null,null));
});})(i__20568,row,c__4276__auto__,size__4277__auto__,b__20569,s__20567__$2,temp__4126__auto__,active_file_data,file_lines,file_header,file_headers,file_body))
;return iter__4278__auto__.call(null,clojure.string.split.call(null,row,/,/));
})()], null));
{
var G__20588 = (i__20568 + (1));
i__20568 = G__20588;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20569),iter__20566.call(null,cljs.core.chunk_rest.call(null,s__20567__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20569),null);
}
} else
{var row = cljs.core.first.call(null,s__20567__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4278__auto__ = ((function (row,s__20567__$2,temp__4126__auto__,active_file_data,file_lines,file_header,file_headers,file_body){
return (function iter__20582(s__20583){return (new cljs.core.LazySeq(null,((function (row,s__20567__$2,temp__4126__auto__,active_file_data,file_lines,file_header,file_headers,file_body){
return (function (){var s__20583__$1 = s__20583;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20583__$1);if(temp__4126__auto____$1)
{var s__20583__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20583__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__20583__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__20585 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__20584 = (0);while(true){
if((i__20584 < size__4277__auto__))
{var column = cljs.core._nth.call(null,c__4276__auto__,i__20584);cljs.core.chunk_append.call(null,b__20585,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),column], null));
{
var G__20589 = (i__20584 + (1));
i__20584 = G__20589;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20585),iter__20582.call(null,cljs.core.chunk_rest.call(null,s__20583__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20585),null);
}
} else
{var column = cljs.core.first.call(null,s__20583__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),column], null),iter__20582.call(null,cljs.core.rest.call(null,s__20583__$2)));
}
} else
{return null;
}
break;
}
});})(row,s__20567__$2,temp__4126__auto__,active_file_data,file_lines,file_header,file_headers,file_body))
,null,null));
});})(row,s__20567__$2,temp__4126__auto__,active_file_data,file_lines,file_header,file_headers,file_body))
;return iter__4278__auto__.call(null,clojure.string.split.call(null,row,/,/));
})()], null),iter__20566.call(null,cljs.core.rest.call(null,s__20567__$2)));
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
})()], null)], null)], null)], null);
});
cljs.templatefinal.code_editor = (function code_editor(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.code-editor-text","textarea.code-editor-text",-973678235),cljs.core.deref.call(null,cljs.templatefinal.mapping_fn_state)], null);
});
cljs.templatefinal.codemirror_code_editor = cljs.core.with_meta.call(null,cljs.templatefinal.code_editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (self){var codemirror = CodeMirror.fromTextArea(reagent.core.dom_node.call(null,self),cljs.core.PersistentArrayMap.EMPTY);var options = new cljs.core.PersistentArrayMap(null, 4, ["theme","solarized light","mode","clojure","matchBrackets",true,"lineNumbers",true], null);var seq__20590_20596 = cljs.core.seq.call(null,options);var chunk__20591_20597 = null;var count__20592_20598 = (0);var i__20593_20599 = (0);while(true){
if((i__20593_20599 < count__20592_20598))
{var vec__20594_20600 = cljs.core._nth.call(null,chunk__20591_20597,i__20593_20599);var option_key_20601 = cljs.core.nth.call(null,vec__20594_20600,(0),null);var option_value_20602 = cljs.core.nth.call(null,vec__20594_20600,(1),null);codemirror.setOption(option_key_20601,option_value_20602);
{
var G__20603 = seq__20590_20596;
var G__20604 = chunk__20591_20597;
var G__20605 = count__20592_20598;
var G__20606 = (i__20593_20599 + (1));
seq__20590_20596 = G__20603;
chunk__20591_20597 = G__20604;
count__20592_20598 = G__20605;
i__20593_20599 = G__20606;
continue;
}
} else
{var temp__4126__auto___20607 = cljs.core.seq.call(null,seq__20590_20596);if(temp__4126__auto___20607)
{var seq__20590_20608__$1 = temp__4126__auto___20607;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20590_20608__$1))
{var c__4309__auto___20609 = cljs.core.chunk_first.call(null,seq__20590_20608__$1);{
var G__20610 = cljs.core.chunk_rest.call(null,seq__20590_20608__$1);
var G__20611 = c__4309__auto___20609;
var G__20612 = cljs.core.count.call(null,c__4309__auto___20609);
var G__20613 = (0);
seq__20590_20596 = G__20610;
chunk__20591_20597 = G__20611;
count__20592_20598 = G__20612;
i__20593_20599 = G__20613;
continue;
}
} else
{var vec__20595_20614 = cljs.core.first.call(null,seq__20590_20608__$1);var option_key_20615 = cljs.core.nth.call(null,vec__20595_20614,(0),null);var option_value_20616 = cljs.core.nth.call(null,vec__20595_20614,(1),null);codemirror.setOption(option_key_20615,option_value_20616);
{
var G__20617 = cljs.core.next.call(null,seq__20590_20608__$1);
var G__20618 = null;
var G__20619 = (0);
var G__20620 = (0);
seq__20590_20596 = G__20617;
chunk__20591_20597 = G__20618;
count__20592_20598 = G__20619;
i__20593_20599 = G__20620;
continue;
}
}
} else
{}
}
break;
}
return codemirror.on("change",((function (codemirror,options){
return (function (self__$1,event){return cljs.core.reset_BANG_.call(null,cljs.templatefinal.mapping_fn_state,self__$1.getValue());
});})(codemirror,options))
);
})], null));
cljs.templatefinal.mapping_workbench = (function mapping_workbench(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mapping-workbench","div.mapping-workbench",-685064912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mapping-fn","div.mapping-fn",-674221866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Mapping Function"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.code-editor","div.code-editor",-1539435275),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.templatefinal.codemirror_code_editor], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mapping-fn-result","div.mapping-fn-result",-1581984400),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Mapping Function Result"], null),(function (){var mapping_fn_result = antares.helpers.string__GT_data.call(null,cljs.core.deref.call(null,cljs.templatefinal.mapping_fn_result_state));var result_headers = cljs.core.first.call(null,mapping_fn_result);var result_body = cljs.core.rest.call(null,mapping_fn_result);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.ui.table.segment","table.ui.table.segment",2020284650),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4278__auto__ = ((function (mapping_fn_result,result_headers,result_body){
return (function iter__20645(s__20646){return (new cljs.core.LazySeq(null,((function (mapping_fn_result,result_headers,result_body){
return (function (){var s__20646__$1 = s__20646;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20646__$1);if(temp__4126__auto__)
{var s__20646__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20646__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__20646__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__20648 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__20647 = (0);while(true){
if((i__20647 < size__4277__auto__))
{var header = cljs.core._nth.call(null,c__4276__auto__,i__20647);cljs.core.chunk_append.call(null,b__20648,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),header], null));
{
var G__20669 = (i__20647 + (1));
i__20647 = G__20669;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20648),iter__20645.call(null,cljs.core.chunk_rest.call(null,s__20646__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20648),null);
}
} else
{var header = cljs.core.first.call(null,s__20646__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),header], null),iter__20645.call(null,cljs.core.rest.call(null,s__20646__$2)));
}
} else
{return null;
}
break;
}
});})(mapping_fn_result,result_headers,result_body))
,null,null));
});})(mapping_fn_result,result_headers,result_body))
;return iter__4278__auto__.call(null,result_headers);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4278__auto__ = ((function (mapping_fn_result,result_headers,result_body){
return (function iter__20649(s__20650){return (new cljs.core.LazySeq(null,((function (mapping_fn_result,result_headers,result_body){
return (function (){var s__20650__$1 = s__20650;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20650__$1);if(temp__4126__auto__)
{var s__20650__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20650__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__20650__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__20652 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__20651 = (0);while(true){
if((i__20651 < size__4277__auto__))
{var row = cljs.core._nth.call(null,c__4276__auto__,i__20651);cljs.core.chunk_append.call(null,b__20652,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4278__auto__ = ((function (i__20651,row,c__4276__auto__,size__4277__auto__,b__20652,s__20650__$2,temp__4126__auto__,mapping_fn_result,result_headers,result_body){
return (function iter__20661(s__20662){return (new cljs.core.LazySeq(null,((function (i__20651,row,c__4276__auto__,size__4277__auto__,b__20652,s__20650__$2,temp__4126__auto__,mapping_fn_result,result_headers,result_body){
return (function (){var s__20662__$1 = s__20662;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20662__$1);if(temp__4126__auto____$1)
{var s__20662__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20662__$2))
{var c__4276__auto____$1 = cljs.core.chunk_first.call(null,s__20662__$2);var size__4277__auto____$1 = cljs.core.count.call(null,c__4276__auto____$1);var b__20664 = cljs.core.chunk_buffer.call(null,size__4277__auto____$1);if((function (){var i__20663 = (0);while(true){
if((i__20663 < size__4277__auto____$1))
{var column = cljs.core._nth.call(null,c__4276__auto____$1,i__20663);cljs.core.chunk_append.call(null,b__20664,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),column], null));
{
var G__20670 = (i__20663 + (1));
i__20663 = G__20670;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20664),iter__20661.call(null,cljs.core.chunk_rest.call(null,s__20662__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20664),null);
}
} else
{var column = cljs.core.first.call(null,s__20662__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),column], null),iter__20661.call(null,cljs.core.rest.call(null,s__20662__$2)));
}
} else
{return null;
}
break;
}
});})(i__20651,row,c__4276__auto__,size__4277__auto__,b__20652,s__20650__$2,temp__4126__auto__,mapping_fn_result,result_headers,result_body))
,null,null));
});})(i__20651,row,c__4276__auto__,size__4277__auto__,b__20652,s__20650__$2,temp__4126__auto__,mapping_fn_result,result_headers,result_body))
;return iter__4278__auto__.call(null,row);
})()], null));
{
var G__20671 = (i__20651 + (1));
i__20651 = G__20671;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20652),iter__20649.call(null,cljs.core.chunk_rest.call(null,s__20650__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20652),null);
}
} else
{var row = cljs.core.first.call(null,s__20650__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4278__auto__ = ((function (row,s__20650__$2,temp__4126__auto__,mapping_fn_result,result_headers,result_body){
return (function iter__20665(s__20666){return (new cljs.core.LazySeq(null,((function (row,s__20650__$2,temp__4126__auto__,mapping_fn_result,result_headers,result_body){
return (function (){var s__20666__$1 = s__20666;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20666__$1);if(temp__4126__auto____$1)
{var s__20666__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20666__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__20666__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__20668 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__20667 = (0);while(true){
if((i__20667 < size__4277__auto__))
{var column = cljs.core._nth.call(null,c__4276__auto__,i__20667);cljs.core.chunk_append.call(null,b__20668,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),column], null));
{
var G__20672 = (i__20667 + (1));
i__20667 = G__20672;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20668),iter__20665.call(null,cljs.core.chunk_rest.call(null,s__20666__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20668),null);
}
} else
{var column = cljs.core.first.call(null,s__20666__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),column], null),iter__20665.call(null,cljs.core.rest.call(null,s__20666__$2)));
}
} else
{return null;
}
break;
}
});})(row,s__20650__$2,temp__4126__auto__,mapping_fn_result,result_headers,result_body))
,null,null));
});})(row,s__20650__$2,temp__4126__auto__,mapping_fn_result,result_headers,result_body))
;return iter__4278__auto__.call(null,row);
})()], null),iter__20649.call(null,cljs.core.rest.call(null,s__20650__$2)));
}
} else
{return null;
}
break;
}
});})(mapping_fn_result,result_headers,result_body))
,null,null));
});})(mapping_fn_result,result_headers,result_body))
;return iter__4278__auto__.call(null,result_body);
})()], null)], null);
})()], null)], null);
});
cljs.templatefinal.app = (function app(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.ui.grid","div.container.ui.grid",1464028043),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.wide.two","div.column.wide.two",1340900383),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.templatefinal.files_list], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.templatefinal.templates_list], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.wide.six","div.column.wide.six",331820255),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.templatefinal.active_file], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.wide.six","div.column.wide.six",331820255),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.templatefinal.mapping_workbench], null)], null)], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.templatefinal.app], null),document.querySelector("#app-target"));
cljs.core.add_watch.call(null,cljs.templatefinal.active_file_state,new cljs.core.Keyword(null,"load-file-from-s3","load-file-from-s3",2116992617),(function (key,ref,old_value,new_value){return antares.helpers.get.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uri","uri",-774711847),("http://localhost:8889/services/s3/vendoriq-data-imports/get-object/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_value)),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){return cljs.core.reset_BANG_.call(null,cljs.templatefinal.active_file_data_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filename","filename",-1428840783),cljs.core.get.call(null,response,"filename"),new cljs.core.Keyword(null,"filecontent","filecontent",-1743873514),cljs.core.get.call(null,response,"filecontent")], null));
})], null));
}));
cljs.core.add_watch.call(null,cljs.templatefinal.mapping_fn_state,new cljs.core.Keyword(null,"compile-clojure-fn","compile-clojure-fn",-851005078),(function (key,ref,old_value,new_value){return antares.helpers.post.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8989/compile-clojure-fn",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"compile-fn","compile-fn",754690489),cljs.core.deref.call(null,cljs.templatefinal.mapping_fn_state),new cljs.core.Keyword(null,"compile-data","compile-data",-1472149691),cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.templatefinal.active_file_data_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filecontent","filecontent",-1743873514)], null))], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){return cljs.core.reset_BANG_.call(null,cljs.templatefinal.mapping_fn_result_state,response);
})], null));
}));

//# sourceMappingURL=templatefinal.js.map