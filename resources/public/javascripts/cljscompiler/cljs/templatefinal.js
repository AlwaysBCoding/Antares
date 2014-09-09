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
antares.helpers.get.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8889/services/s3/vendoriq-data-imports/list-objects",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){return cljs.core.reset_BANG_.call(null,cljs.templatefinal.files_list_state,response);
})], null));
cljs.templatefinal.files_list = (function files_list(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Files List"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.files-list","ul.files-list",216080587),(function (){var active_file = cljs.core.deref.call(null,cljs.templatefinal.active_file_state);var iter__4278__auto__ = ((function (active_file){
return (function iter__15840(s__15841){return (new cljs.core.LazySeq(null,((function (active_file){
return (function (){var s__15841__$1 = s__15841;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15841__$1);if(temp__4126__auto__)
{var s__15841__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15841__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__15841__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__15843 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__15842 = (0);while(true){
if((i__15842 < size__4277__auto__))
{var file = cljs.core._nth.call(null,c__4276__auto__,i__15842);cljs.core.chunk_append.call(null,b__15843,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.file","li.file",565448558),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,file,active_file))?"active":""),new cljs.core.Keyword(null,"data-file-name","data-file-name",1306288466),file,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__15842,file,c__4276__auto__,size__4277__auto__,b__15843,s__15841__$2,temp__4126__auto__,active_file){
return (function (event){return cljs.core.reset_BANG_.call(null,cljs.templatefinal.active_file_state,event.target.dataset.fileName);
});})(i__15842,file,c__4276__auto__,size__4277__auto__,b__15843,s__15841__$2,temp__4126__auto__,active_file))
], null),file], null));
{
var G__15844 = (i__15842 + (1));
i__15842 = G__15844;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15843),iter__15840.call(null,cljs.core.chunk_rest.call(null,s__15841__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15843),null);
}
} else
{var file = cljs.core.first.call(null,s__15841__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.file","li.file",565448558),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,file,active_file))?"active":""),new cljs.core.Keyword(null,"data-file-name","data-file-name",1306288466),file,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (file,s__15841__$2,temp__4126__auto__,active_file){
return (function (event){return cljs.core.reset_BANG_.call(null,cljs.templatefinal.active_file_state,event.target.dataset.fileName);
});})(file,s__15841__$2,temp__4126__auto__,active_file))
], null),file], null),iter__15840.call(null,cljs.core.rest.call(null,s__15841__$2)));
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
return (function iter__15849(s__15850){return (new cljs.core.LazySeq(null,((function (active_template){
return (function (){var s__15850__$1 = s__15850;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15850__$1);if(temp__4126__auto__)
{var s__15850__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15850__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__15850__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__15852 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__15851 = (0);while(true){
if((i__15851 < size__4277__auto__))
{var template = cljs.core._nth.call(null,c__4276__auto__,i__15851);cljs.core.chunk_append.call(null,b__15852,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.template","li.template",1287563891),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,template,active_template))?"active":""),new cljs.core.Keyword(null,"data-template-name","data-template-name",1267270877),template,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__15851,template,c__4276__auto__,size__4277__auto__,b__15852,s__15850__$2,temp__4126__auto__,active_template){
return (function (event){return cljs.core.reset_BANG_.call(null,cljs.templatefinal.active_template_state,event.target.dataset.templateName);
});})(i__15851,template,c__4276__auto__,size__4277__auto__,b__15852,s__15850__$2,temp__4126__auto__,active_template))
], null),template], null));
{
var G__15853 = (i__15851 + (1));
i__15851 = G__15853;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15852),iter__15849.call(null,cljs.core.chunk_rest.call(null,s__15850__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15852),null);
}
} else
{var template = cljs.core.first.call(null,s__15850__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.template","li.template",1287563891),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,template,active_template))?"active":""),new cljs.core.Keyword(null,"data-template-name","data-template-name",1267270877),template,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (template,s__15850__$2,temp__4126__auto__,active_template){
return (function (event){return cljs.core.reset_BANG_.call(null,cljs.templatefinal.active_template_state,event.target.dataset.templateName);
});})(template,s__15850__$2,temp__4126__auto__,active_template))
], null),template], null),iter__15849.call(null,cljs.core.rest.call(null,s__15850__$2)));
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
cljs.templatefinal.active_file = (function active_file(){var active_file_data = cljs.core.deref.call(null,cljs.templatefinal.active_file_data_state);var file_lines = clojure.string.split.call(null,active_file_data.call(null,new cljs.core.Keyword(null,"filecontent","filecontent",-1743873514)),/[\n\r]/);var file_header = cljs.core.first.call(null,file_lines);var file_headers = clojure.string.split.call(null,file_header,/,/);var file_body = cljs.core.rest.call(null,file_lines);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.active-file","div.active-file",1856107304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),active_file_data.call(null,new cljs.core.Keyword(null,"filename","filename",-1428840783))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.active-file-data","div.active-file-data",-1886355927),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4278__auto__ = ((function (active_file_data,file_lines,file_header,file_headers,file_body){
return (function iter__15878(s__15879){return (new cljs.core.LazySeq(null,((function (active_file_data,file_lines,file_header,file_headers,file_body){
return (function (){var s__15879__$1 = s__15879;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15879__$1);if(temp__4126__auto__)
{var s__15879__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15879__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__15879__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__15881 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__15880 = (0);while(true){
if((i__15880 < size__4277__auto__))
{var header = cljs.core._nth.call(null,c__4276__auto__,i__15880);cljs.core.chunk_append.call(null,b__15881,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),header], null));
{
var G__15902 = (i__15880 + (1));
i__15880 = G__15902;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15881),iter__15878.call(null,cljs.core.chunk_rest.call(null,s__15879__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15881),null);
}
} else
{var header = cljs.core.first.call(null,s__15879__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),header], null),iter__15878.call(null,cljs.core.rest.call(null,s__15879__$2)));
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
return (function iter__15882(s__15883){return (new cljs.core.LazySeq(null,((function (active_file_data,file_lines,file_header,file_headers,file_body){
return (function (){var s__15883__$1 = s__15883;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15883__$1);if(temp__4126__auto__)
{var s__15883__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15883__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__15883__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__15885 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__15884 = (0);while(true){
if((i__15884 < size__4277__auto__))
{var row = cljs.core._nth.call(null,c__4276__auto__,i__15884);cljs.core.chunk_append.call(null,b__15885,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4278__auto__ = ((function (i__15884,row,c__4276__auto__,size__4277__auto__,b__15885,s__15883__$2,temp__4126__auto__,active_file_data,file_lines,file_header,file_headers,file_body){
return (function iter__15894(s__15895){return (new cljs.core.LazySeq(null,((function (i__15884,row,c__4276__auto__,size__4277__auto__,b__15885,s__15883__$2,temp__4126__auto__,active_file_data,file_lines,file_header,file_headers,file_body){
return (function (){var s__15895__$1 = s__15895;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__15895__$1);if(temp__4126__auto____$1)
{var s__15895__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__15895__$2))
{var c__4276__auto____$1 = cljs.core.chunk_first.call(null,s__15895__$2);var size__4277__auto____$1 = cljs.core.count.call(null,c__4276__auto____$1);var b__15897 = cljs.core.chunk_buffer.call(null,size__4277__auto____$1);if((function (){var i__15896 = (0);while(true){
if((i__15896 < size__4277__auto____$1))
{var column = cljs.core._nth.call(null,c__4276__auto____$1,i__15896);cljs.core.chunk_append.call(null,b__15897,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),column], null));
{
var G__15903 = (i__15896 + (1));
i__15896 = G__15903;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15897),iter__15894.call(null,cljs.core.chunk_rest.call(null,s__15895__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15897),null);
}
} else
{var column = cljs.core.first.call(null,s__15895__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),column], null),iter__15894.call(null,cljs.core.rest.call(null,s__15895__$2)));
}
} else
{return null;
}
break;
}
});})(i__15884,row,c__4276__auto__,size__4277__auto__,b__15885,s__15883__$2,temp__4126__auto__,active_file_data,file_lines,file_header,file_headers,file_body))
,null,null));
});})(i__15884,row,c__4276__auto__,size__4277__auto__,b__15885,s__15883__$2,temp__4126__auto__,active_file_data,file_lines,file_header,file_headers,file_body))
;return iter__4278__auto__.call(null,clojure.string.split.call(null,row,/,/));
})()], null));
{
var G__15904 = (i__15884 + (1));
i__15884 = G__15904;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15885),iter__15882.call(null,cljs.core.chunk_rest.call(null,s__15883__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15885),null);
}
} else
{var row = cljs.core.first.call(null,s__15883__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4278__auto__ = ((function (row,s__15883__$2,temp__4126__auto__,active_file_data,file_lines,file_header,file_headers,file_body){
return (function iter__15898(s__15899){return (new cljs.core.LazySeq(null,((function (row,s__15883__$2,temp__4126__auto__,active_file_data,file_lines,file_header,file_headers,file_body){
return (function (){var s__15899__$1 = s__15899;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__15899__$1);if(temp__4126__auto____$1)
{var s__15899__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__15899__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__15899__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__15901 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__15900 = (0);while(true){
if((i__15900 < size__4277__auto__))
{var column = cljs.core._nth.call(null,c__4276__auto__,i__15900);cljs.core.chunk_append.call(null,b__15901,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),column], null));
{
var G__15905 = (i__15900 + (1));
i__15900 = G__15905;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15901),iter__15898.call(null,cljs.core.chunk_rest.call(null,s__15899__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15901),null);
}
} else
{var column = cljs.core.first.call(null,s__15899__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),column], null),iter__15898.call(null,cljs.core.rest.call(null,s__15899__$2)));
}
} else
{return null;
}
break;
}
});})(row,s__15883__$2,temp__4126__auto__,active_file_data,file_lines,file_header,file_headers,file_body))
,null,null));
});})(row,s__15883__$2,temp__4126__auto__,active_file_data,file_lines,file_header,file_headers,file_body))
;return iter__4278__auto__.call(null,clojure.string.split.call(null,row,/,/));
})()], null),iter__15882.call(null,cljs.core.rest.call(null,s__15883__$2)));
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
cljs.templatefinal.code_editor = (function code_editor(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.code-editor-text","textarea.code-editor-text",-973678235),""], null);
});
cljs.templatefinal.codemirror_code_editor = cljs.core.with_meta.call(null,cljs.templatefinal.code_editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (self){var codemirror = CodeMirror.fromTextArea(reagent.core.dom_node.call(null,self),cljs.core.PersistentArrayMap.EMPTY);var options = new cljs.core.PersistentArrayMap(null, 4, ["theme","solarized light","mode","clojure","matchBrackets",true,"lineNumbers",true], null);var seq__15906 = cljs.core.seq.call(null,options);var chunk__15907 = null;var count__15908 = (0);var i__15909 = (0);while(true){
if((i__15909 < count__15908))
{var vec__15910 = cljs.core._nth.call(null,chunk__15907,i__15909);var option_key = cljs.core.nth.call(null,vec__15910,(0),null);var option_value = cljs.core.nth.call(null,vec__15910,(1),null);codemirror.setOption(option_key,option_value);
{
var G__15912 = seq__15906;
var G__15913 = chunk__15907;
var G__15914 = count__15908;
var G__15915 = (i__15909 + (1));
seq__15906 = G__15912;
chunk__15907 = G__15913;
count__15908 = G__15914;
i__15909 = G__15915;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__15906);if(temp__4126__auto__)
{var seq__15906__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15906__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__15906__$1);{
var G__15916 = cljs.core.chunk_rest.call(null,seq__15906__$1);
var G__15917 = c__4309__auto__;
var G__15918 = cljs.core.count.call(null,c__4309__auto__);
var G__15919 = (0);
seq__15906 = G__15916;
chunk__15907 = G__15917;
count__15908 = G__15918;
i__15909 = G__15919;
continue;
}
} else
{var vec__15911 = cljs.core.first.call(null,seq__15906__$1);var option_key = cljs.core.nth.call(null,vec__15911,(0),null);var option_value = cljs.core.nth.call(null,vec__15911,(1),null);codemirror.setOption(option_key,option_value);
{
var G__15920 = cljs.core.next.call(null,seq__15906__$1);
var G__15921 = null;
var G__15922 = (0);
var G__15923 = (0);
seq__15906 = G__15920;
chunk__15907 = G__15921;
count__15908 = G__15922;
i__15909 = G__15923;
continue;
}
}
} else
{return null;
}
}
break;
}
})], null));
cljs.templatefinal.mapping_workbench = (function mapping_workbench(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mapping-workbench","div.mapping-workbench",-685064912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mapping-fn","div.mapping-fn",-674221866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Mapping Function"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.code-editor","div.code-editor",-1539435275),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.templatefinal.codemirror_code_editor], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.data-structure","div.data-structure",-722514084),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Data Structure"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),"{}"], null)], null)], null);
});
cljs.templatefinal.app = (function app(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.ui.grid","div.container.ui.grid",1464028043),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.wide.two","div.column.wide.two",1340900383),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.templatefinal.files_list], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.templatefinal.templates_list], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.wide.six","div.column.wide.six",331820255),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.templatefinal.active_file], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.wide.six","div.column.wide.six",331820255),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.templatefinal.mapping_workbench], null)], null)], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.templatefinal.app], null),document.querySelector("#app-target"));
cljs.core.add_watch.call(null,cljs.templatefinal.active_file_state,new cljs.core.Keyword(null,"load-file-from-s3","load-file-from-s3",2116992617),(function (key,ref,old_value,new_value){return antares.helpers.get.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uri","uri",-774711847),("http://localhost:8889/services/s3/vendoriq-data-imports/get-object/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_value)),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){return cljs.core.reset_BANG_.call(null,cljs.templatefinal.active_file_data_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filename","filename",-1428840783),cljs.core.get.call(null,response,"filename"),new cljs.core.Keyword(null,"filecontent","filecontent",-1743873514),cljs.core.get.call(null,response,"filecontent")], null));
})], null));
}));

//# sourceMappingURL=templatefinal.js.map