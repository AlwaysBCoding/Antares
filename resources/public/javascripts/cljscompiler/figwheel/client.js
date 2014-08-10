// Compiled by ClojureScript 0.0-2277
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
figwheel.client.log_style = "color:rgb(0,128,0);";
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__8872,args){var map__8874 = p__8872;var map__8874__$1 = ((cljs.core.seq_QMARK_.call(null,map__8874))?cljs.core.apply.call(null,cljs.core.hash_map,map__8874):map__8874);var debug = cljs.core.get.call(null,map__8874__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__8872,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__8872,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__8875){
var p__8872 = cljs.core.first(arglist__8875);
var args = cljs.core.rest(arglist__8875);
return log__delegate(p__8872,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__8876){var map__8878 = p__8876;var map__8878__$1 = ((cljs.core.seq_QMARK_.call(null,map__8878))?cljs.core.apply.call(null,cljs.core.hash_map,map__8878):map__8878);var websocket_url = cljs.core.get.call(null,map__8878__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__8879,callback){var map__8881 = p__8879;var map__8881__$1 = ((cljs.core.seq_QMARK_.call(null,map__8881))?cljs.core.apply.call(null,cljs.core.hash_map,map__8881):map__8881);var msg = map__8881__$1;var dependency_file = cljs.core.get.call(null,map__8881__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__8881__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__8881__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3543__auto__ = dependency_file;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__8881,map__8881__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__8881,map__8881__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__8882,p__8883){var map__8886 = p__8882;var map__8886__$1 = ((cljs.core.seq_QMARK_.call(null,map__8886))?cljs.core.apply.call(null,cljs.core.hash_map,map__8886):map__8886);var opts = map__8886__$1;var url_rewriter = cljs.core.get.call(null,map__8886__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__8887 = p__8883;var map__8887__$1 = ((cljs.core.seq_QMARK_.call(null,map__8887))?cljs.core.apply.call(null,cljs.core.hash_map,map__8887):map__8887);var d = map__8887__$1;var file = cljs.core.get.call(null,map__8887__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__8888,p__8889){var map__8930 = p__8888;var map__8930__$1 = ((cljs.core.seq_QMARK_.call(null,map__8930))?cljs.core.apply.call(null,cljs.core.hash_map,map__8930):map__8930);var opts = map__8930__$1;var on_jsload = cljs.core.get.call(null,map__8930__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__8930__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__8931 = p__8889;var map__8931__$1 = ((cljs.core.seq_QMARK_.call(null,map__8931))?cljs.core.apply.call(null,cljs.core.hash_map,map__8931):map__8931);var files = cljs.core.get.call(null,map__8931__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__6245__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6245__auto__,map__8930,map__8930__$1,opts,on_jsload,before_jsload,map__8931,map__8931__$1,files){
return (function (){var f__6246__auto__ = (function (){var switch__6180__auto__ = ((function (c__6245__auto__,map__8930,map__8930__$1,opts,on_jsload,before_jsload,map__8931,map__8931__$1,files){
return (function (state_8953){var state_val_8954 = (state_8953[(1)]);if((state_val_8954 === (6)))
{var inst_8936 = (state_8953[(7)]);var inst_8945 = (state_8953[(2)]);var inst_8946 = [inst_8936];var inst_8947 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_8946,null));var inst_8948 = cljs.core.apply.call(null,on_jsload,inst_8947);var state_8953__$1 = (function (){var statearr_8955 = state_8953;(statearr_8955[(8)] = inst_8945);
return statearr_8955;
})();var statearr_8956_8970 = state_8953__$1;(statearr_8956_8970[(2)] = inst_8948);
(statearr_8956_8970[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8954 === (5)))
{var inst_8951 = (state_8953[(2)]);var state_8953__$1 = state_8953;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8953__$1,inst_8951);
} else
{if((state_val_8954 === (4)))
{var state_8953__$1 = state_8953;var statearr_8957_8971 = state_8953__$1;(statearr_8957_8971[(2)] = null);
(statearr_8957_8971[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8954 === (3)))
{var inst_8936 = (state_8953[(7)]);var inst_8939 = console.log("%cFigwheel: loaded these files",figwheel.client.log_style);var inst_8940 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_8936);var inst_8941 = cljs.core.prn_str.call(null,inst_8940);var inst_8942 = console.log(inst_8941);var inst_8943 = cljs.core.async.timeout.call(null,(10));var state_8953__$1 = (function (){var statearr_8958 = state_8953;(statearr_8958[(9)] = inst_8939);
(statearr_8958[(10)] = inst_8942);
return statearr_8958;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8953__$1,(6),inst_8943);
} else
{if((state_val_8954 === (2)))
{var inst_8936 = (state_8953[(7)]);var inst_8936__$1 = (state_8953[(2)]);var inst_8937 = cljs.core.not_empty.call(null,inst_8936__$1);var state_8953__$1 = (function (){var statearr_8959 = state_8953;(statearr_8959[(7)] = inst_8936__$1);
return statearr_8959;
})();if(cljs.core.truth_(inst_8937))
{var statearr_8960_8972 = state_8953__$1;(statearr_8960_8972[(1)] = (3));
} else
{var statearr_8961_8973 = state_8953__$1;(statearr_8961_8973[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8954 === (1)))
{var inst_8932 = before_jsload.call(null,files);var inst_8933 = figwheel.client.add_request_urls.call(null,opts,files);var inst_8934 = figwheel.client.load_all_js_files.call(null,inst_8933);var state_8953__$1 = (function (){var statearr_8962 = state_8953;(statearr_8962[(11)] = inst_8932);
return statearr_8962;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8953__$1,(2),inst_8934);
} else
{return null;
}
}
}
}
}
}
});})(c__6245__auto__,map__8930,map__8930__$1,opts,on_jsload,before_jsload,map__8931,map__8931__$1,files))
;return ((function (switch__6180__auto__,c__6245__auto__,map__8930,map__8930__$1,opts,on_jsload,before_jsload,map__8931,map__8931__$1,files){
return (function() {
var state_machine__6181__auto__ = null;
var state_machine__6181__auto____0 = (function (){var statearr_8966 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_8966[(0)] = state_machine__6181__auto__);
(statearr_8966[(1)] = (1));
return statearr_8966;
});
var state_machine__6181__auto____1 = (function (state_8953){while(true){
var ret_value__6182__auto__ = (function (){try{while(true){
var result__6183__auto__ = switch__6180__auto__.call(null,state_8953);if(cljs.core.keyword_identical_QMARK_.call(null,result__6183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6183__auto__;
}
break;
}
}catch (e8967){if((e8967 instanceof Object))
{var ex__6184__auto__ = e8967;var statearr_8968_8974 = state_8953;(statearr_8968_8974[(5)] = ex__6184__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8953);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e8967;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__8975 = state_8953;
state_8953 = G__8975;
continue;
}
} else
{return ret_value__6182__auto__;
}
break;
}
});
state_machine__6181__auto__ = function(state_8953){
switch(arguments.length){
case 0:
return state_machine__6181__auto____0.call(this);
case 1:
return state_machine__6181__auto____1.call(this,state_8953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6181__auto____0;
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6181__auto____1;
return state_machine__6181__auto__;
})()
;})(switch__6180__auto__,c__6245__auto__,map__8930,map__8930__$1,opts,on_jsload,before_jsload,map__8931,map__8931__$1,files))
})();var state__6247__auto__ = (function (){var statearr_8969 = f__6246__auto__.call(null);(statearr_8969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6245__auto__);
return statearr_8969;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6247__auto__);
});})(c__6245__auto__,map__8930,map__8930__$1,opts,on_jsload,before_jsload,map__8931,map__8931__$1,files))
);
return c__6245__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__8976,link_href){var map__8978 = p__8976;var map__8978__$1 = ((cljs.core.seq_QMARK_.call(null,map__8978))?cljs.core.apply.call(null,cljs.core.hash_map,map__8978):map__8978);var request_url = cljs.core.get.call(null,map__8978__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__8978__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__6245__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6245__auto__,parent){
return (function (){var f__6246__auto__ = (function (){var switch__6180__auto__ = ((function (c__6245__auto__,parent){
return (function (state_8999){var state_val_9000 = (state_8999[(1)]);if((state_val_9000 === (2)))
{var inst_8996 = (state_8999[(2)]);var inst_8997 = parent.removeChild(orig_link);var state_8999__$1 = (function (){var statearr_9001 = state_8999;(statearr_9001[(7)] = inst_8996);
return statearr_9001;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8999__$1,inst_8997);
} else
{if((state_val_9000 === (1)))
{var inst_8994 = cljs.core.async.timeout.call(null,(200));var state_8999__$1 = state_8999;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8999__$1,(2),inst_8994);
} else
{return null;
}
}
});})(c__6245__auto__,parent))
;return ((function (switch__6180__auto__,c__6245__auto__,parent){
return (function() {
var state_machine__6181__auto__ = null;
var state_machine__6181__auto____0 = (function (){var statearr_9005 = [null,null,null,null,null,null,null,null];(statearr_9005[(0)] = state_machine__6181__auto__);
(statearr_9005[(1)] = (1));
return statearr_9005;
});
var state_machine__6181__auto____1 = (function (state_8999){while(true){
var ret_value__6182__auto__ = (function (){try{while(true){
var result__6183__auto__ = switch__6180__auto__.call(null,state_8999);if(cljs.core.keyword_identical_QMARK_.call(null,result__6183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6183__auto__;
}
break;
}
}catch (e9006){if((e9006 instanceof Object))
{var ex__6184__auto__ = e9006;var statearr_9007_9009 = state_8999;(statearr_9007_9009[(5)] = ex__6184__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8999);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9006;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9010 = state_8999;
state_8999 = G__9010;
continue;
}
} else
{return ret_value__6182__auto__;
}
break;
}
});
state_machine__6181__auto__ = function(state_8999){
switch(arguments.length){
case 0:
return state_machine__6181__auto____0.call(this);
case 1:
return state_machine__6181__auto____1.call(this,state_8999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6181__auto____0;
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6181__auto____1;
return state_machine__6181__auto__;
})()
;})(switch__6180__auto__,c__6245__auto__,parent))
})();var state__6247__auto__ = (function (){var statearr_9008 = f__6246__auto__.call(null);(statearr_9008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6245__auto__);
return statearr_9008;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6247__auto__);
});})(c__6245__auto__,parent))
);
return c__6245__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__9011){var map__9013 = p__9011;var map__9013__$1 = ((cljs.core.seq_QMARK_.call(null,map__9013))?cljs.core.apply.call(null,cljs.core.hash_map,map__9013):map__9013);var f_data = map__9013__$1;var request_url = cljs.core.get.call(null,map__9013__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__9013__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__9014,files_msg){var map__9036 = p__9014;var map__9036__$1 = ((cljs.core.seq_QMARK_.call(null,map__9036))?cljs.core.apply.call(null,cljs.core.hash_map,map__9036):map__9036);var opts = map__9036__$1;var on_cssload = cljs.core.get.call(null,map__9036__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__9037_9057 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__9038_9058 = null;var count__9039_9059 = (0);var i__9040_9060 = (0);while(true){
if((i__9040_9060 < count__9039_9059))
{var f_9061 = cljs.core._nth.call(null,chunk__9038_9058,i__9040_9060);figwheel.client.reload_css_file.call(null,f_9061);
{
var G__9062 = seq__9037_9057;
var G__9063 = chunk__9038_9058;
var G__9064 = count__9039_9059;
var G__9065 = (i__9040_9060 + (1));
seq__9037_9057 = G__9062;
chunk__9038_9058 = G__9063;
count__9039_9059 = G__9064;
i__9040_9060 = G__9065;
continue;
}
} else
{var temp__4126__auto___9066 = cljs.core.seq.call(null,seq__9037_9057);if(temp__4126__auto___9066)
{var seq__9037_9067__$1 = temp__4126__auto___9066;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9037_9067__$1))
{var c__4299__auto___9068 = cljs.core.chunk_first.call(null,seq__9037_9067__$1);{
var G__9069 = cljs.core.chunk_rest.call(null,seq__9037_9067__$1);
var G__9070 = c__4299__auto___9068;
var G__9071 = cljs.core.count.call(null,c__4299__auto___9068);
var G__9072 = (0);
seq__9037_9057 = G__9069;
chunk__9038_9058 = G__9070;
count__9039_9059 = G__9071;
i__9040_9060 = G__9072;
continue;
}
} else
{var f_9073 = cljs.core.first.call(null,seq__9037_9067__$1);figwheel.client.reload_css_file.call(null,f_9073);
{
var G__9074 = cljs.core.next.call(null,seq__9037_9067__$1);
var G__9075 = null;
var G__9076 = (0);
var G__9077 = (0);
seq__9037_9057 = G__9074;
chunk__9038_9058 = G__9075;
count__9039_9059 = G__9076;
i__9040_9060 = G__9077;
continue;
}
}
} else
{}
}
break;
}
var c__6245__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6245__auto__,map__9036,map__9036__$1,opts,on_cssload){
return (function (){var f__6246__auto__ = (function (){var switch__6180__auto__ = ((function (c__6245__auto__,map__9036,map__9036__$1,opts,on_cssload){
return (function (state_9047){var state_val_9048 = (state_9047[(1)]);if((state_val_9048 === (2)))
{var inst_9043 = (state_9047[(2)]);var inst_9044 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_9045 = on_cssload.call(null,inst_9044);var state_9047__$1 = (function (){var statearr_9049 = state_9047;(statearr_9049[(7)] = inst_9043);
return statearr_9049;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9047__$1,inst_9045);
} else
{if((state_val_9048 === (1)))
{var inst_9041 = cljs.core.async.timeout.call(null,(100));var state_9047__$1 = state_9047;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9047__$1,(2),inst_9041);
} else
{return null;
}
}
});})(c__6245__auto__,map__9036,map__9036__$1,opts,on_cssload))
;return ((function (switch__6180__auto__,c__6245__auto__,map__9036,map__9036__$1,opts,on_cssload){
return (function() {
var state_machine__6181__auto__ = null;
var state_machine__6181__auto____0 = (function (){var statearr_9053 = [null,null,null,null,null,null,null,null];(statearr_9053[(0)] = state_machine__6181__auto__);
(statearr_9053[(1)] = (1));
return statearr_9053;
});
var state_machine__6181__auto____1 = (function (state_9047){while(true){
var ret_value__6182__auto__ = (function (){try{while(true){
var result__6183__auto__ = switch__6180__auto__.call(null,state_9047);if(cljs.core.keyword_identical_QMARK_.call(null,result__6183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6183__auto__;
}
break;
}
}catch (e9054){if((e9054 instanceof Object))
{var ex__6184__auto__ = e9054;var statearr_9055_9078 = state_9047;(statearr_9055_9078[(5)] = ex__6184__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9047);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9054;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9079 = state_9047;
state_9047 = G__9079;
continue;
}
} else
{return ret_value__6182__auto__;
}
break;
}
});
state_machine__6181__auto__ = function(state_9047){
switch(arguments.length){
case 0:
return state_machine__6181__auto____0.call(this);
case 1:
return state_machine__6181__auto____1.call(this,state_9047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6181__auto____0;
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6181__auto____1;
return state_machine__6181__auto__;
})()
;})(switch__6180__auto__,c__6245__auto__,map__9036,map__9036__$1,opts,on_cssload))
})();var state__6247__auto__ = (function (){var statearr_9056 = f__6246__auto__.call(null);(statearr_9056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6245__auto__);
return statearr_9056;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6247__auto__);
});})(c__6245__auto__,map__9036,map__9036__$1,opts,on_cssload))
);
return c__6245__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__9080){var map__9085 = p__9080;var map__9085__$1 = ((cljs.core.seq_QMARK_.call(null,map__9085))?cljs.core.apply.call(null,cljs.core.hash_map,map__9085):map__9085);var opts = map__9085__$1;var on_compile_fail = cljs.core.get.call(null,map__9085__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__9085__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__9085__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__9085__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.log("%cFigwheel: trying to open cljs reload socket",figwheel.client.log_style);
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__9085,map__9085__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__9086 = cljs.core._EQ_;var expr__9087 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__9086.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__9087)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__9086.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__9087)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__9086.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__9087)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__9085,map__9085__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__9085,map__9085__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.log("%cFigwheel: socket connection established",figwheel.client.log_style);
});})(socket,map__9085,map__9085__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__9085,map__9085__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__9085,map__9085__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__9085,map__9085__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__9085,map__9085__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__9085,map__9085__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__9085,map__9085__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj9092 = {"detail":url};return obj9092;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__9093){var map__9095 = p__9093;var map__9095__$1 = ((cljs.core.seq_QMARK_.call(null,map__9095))?cljs.core.apply.call(null,cljs.core.hash_map,map__9095):map__9095);var class$ = cljs.core.get.call(null,map__9095__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__9095__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__9096){var map__9102 = p__9096;var map__9102__$1 = ((cljs.core.seq_QMARK_.call(null,map__9102))?cljs.core.apply.call(null,cljs.core.hash_map,map__9102):map__9102);var ed = map__9102__$1;var exception_data = cljs.core.get.call(null,map__9102__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__9102__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.log("%cFigwheel: Compile Exception",figwheel.client.log_style);
var seq__9103_9107 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__9104_9108 = null;var count__9105_9109 = (0);var i__9106_9110 = (0);while(true){
if((i__9106_9110 < count__9105_9109))
{var msg_9111 = cljs.core._nth.call(null,chunk__9104_9108,i__9106_9110);console.log(msg_9111);
{
var G__9112 = seq__9103_9107;
var G__9113 = chunk__9104_9108;
var G__9114 = count__9105_9109;
var G__9115 = (i__9106_9110 + (1));
seq__9103_9107 = G__9112;
chunk__9104_9108 = G__9113;
count__9105_9109 = G__9114;
i__9106_9110 = G__9115;
continue;
}
} else
{var temp__4126__auto___9116 = cljs.core.seq.call(null,seq__9103_9107);if(temp__4126__auto___9116)
{var seq__9103_9117__$1 = temp__4126__auto___9116;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9103_9117__$1))
{var c__4299__auto___9118 = cljs.core.chunk_first.call(null,seq__9103_9117__$1);{
var G__9119 = cljs.core.chunk_rest.call(null,seq__9103_9117__$1);
var G__9120 = c__4299__auto___9118;
var G__9121 = cljs.core.count.call(null,c__4299__auto___9118);
var G__9122 = (0);
seq__9103_9107 = G__9119;
chunk__9104_9108 = G__9120;
count__9105_9109 = G__9121;
i__9106_9110 = G__9122;
continue;
}
} else
{var msg_9123 = cljs.core.first.call(null,seq__9103_9117__$1);console.log(msg_9123);
{
var G__9124 = cljs.core.next.call(null,seq__9103_9117__$1);
var G__9125 = null;
var G__9126 = (0);
var G__9127 = (0);
seq__9103_9107 = G__9124;
chunk__9104_9108 = G__9125;
count__9105_9109 = G__9126;
i__9106_9110 = G__9127;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.log("%cFigwheel: loading files",figwheel.client.log_style);
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.log("%cFigwheel: loaded CSS files",figwheel.client.log_style);
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__3543__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__9128){var map__9130 = p__9128;var map__9130__$1 = ((cljs.core.seq_QMARK_.call(null,map__9130))?cljs.core.apply.call(null,cljs.core.hash_map,map__9130):map__9130);var opts = map__9130__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__9128 = null;if (arguments.length > 0) {
  p__9128 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__9128);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__9131){
var p__9128 = cljs.core.seq(arglist__9131);
return watch_and_reload__delegate(p__9128);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map