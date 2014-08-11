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
var log__delegate = function (p__38173,args){var map__38175 = p__38173;var map__38175__$1 = ((cljs.core.seq_QMARK_.call(null,map__38175))?cljs.core.apply.call(null,cljs.core.hash_map,map__38175):map__38175);var debug = cljs.core.get.call(null,map__38175__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__38173,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__38173,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__38176){
var p__38173 = cljs.core.first(arglist__38176);
var args = cljs.core.rest(arglist__38176);
return log__delegate(p__38173,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__38177){var map__38179 = p__38177;var map__38179__$1 = ((cljs.core.seq_QMARK_.call(null,map__38179))?cljs.core.apply.call(null,cljs.core.hash_map,map__38179):map__38179);var websocket_url = cljs.core.get.call(null,map__38179__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__38180,callback){var map__38182 = p__38180;var map__38182__$1 = ((cljs.core.seq_QMARK_.call(null,map__38182))?cljs.core.apply.call(null,cljs.core.hash_map,map__38182):map__38182);var msg = map__38182__$1;var dependency_file = cljs.core.get.call(null,map__38182__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__38182__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__38182__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3543__auto__ = dependency_file;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__38182,map__38182__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__38182,map__38182__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__38183,p__38184){var map__38187 = p__38183;var map__38187__$1 = ((cljs.core.seq_QMARK_.call(null,map__38187))?cljs.core.apply.call(null,cljs.core.hash_map,map__38187):map__38187);var opts = map__38187__$1;var url_rewriter = cljs.core.get.call(null,map__38187__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__38188 = p__38184;var map__38188__$1 = ((cljs.core.seq_QMARK_.call(null,map__38188))?cljs.core.apply.call(null,cljs.core.hash_map,map__38188):map__38188);var d = map__38188__$1;var file = cljs.core.get.call(null,map__38188__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__38189,p__38190){var map__38231 = p__38189;var map__38231__$1 = ((cljs.core.seq_QMARK_.call(null,map__38231))?cljs.core.apply.call(null,cljs.core.hash_map,map__38231):map__38231);var opts = map__38231__$1;var on_jsload = cljs.core.get.call(null,map__38231__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__38231__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__38232 = p__38190;var map__38232__$1 = ((cljs.core.seq_QMARK_.call(null,map__38232))?cljs.core.apply.call(null,cljs.core.hash_map,map__38232):map__38232);var files = cljs.core.get.call(null,map__38232__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__6934__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6934__auto__,map__38231,map__38231__$1,opts,on_jsload,before_jsload,map__38232,map__38232__$1,files){
return (function (){var f__6935__auto__ = (function (){var switch__6869__auto__ = ((function (c__6934__auto__,map__38231,map__38231__$1,opts,on_jsload,before_jsload,map__38232,map__38232__$1,files){
return (function (state_38254){var state_val_38255 = (state_38254[(1)]);if((state_val_38255 === (6)))
{var inst_38237 = (state_38254[(7)]);var inst_38246 = (state_38254[(2)]);var inst_38247 = [inst_38237];var inst_38248 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_38247,null));var inst_38249 = cljs.core.apply.call(null,on_jsload,inst_38248);var state_38254__$1 = (function (){var statearr_38256 = state_38254;(statearr_38256[(8)] = inst_38246);
return statearr_38256;
})();var statearr_38257_38271 = state_38254__$1;(statearr_38257_38271[(2)] = inst_38249);
(statearr_38257_38271[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38255 === (5)))
{var inst_38252 = (state_38254[(2)]);var state_38254__$1 = state_38254;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38254__$1,inst_38252);
} else
{if((state_val_38255 === (4)))
{var state_38254__$1 = state_38254;var statearr_38258_38272 = state_38254__$1;(statearr_38258_38272[(2)] = null);
(statearr_38258_38272[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38255 === (3)))
{var inst_38237 = (state_38254[(7)]);var inst_38240 = console.log("%cFigwheel: loaded these files",figwheel.client.log_style);var inst_38241 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38237);var inst_38242 = cljs.core.prn_str.call(null,inst_38241);var inst_38243 = console.log(inst_38242);var inst_38244 = cljs.core.async.timeout.call(null,(10));var state_38254__$1 = (function (){var statearr_38259 = state_38254;(statearr_38259[(9)] = inst_38240);
(statearr_38259[(10)] = inst_38243);
return statearr_38259;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38254__$1,(6),inst_38244);
} else
{if((state_val_38255 === (2)))
{var inst_38237 = (state_38254[(7)]);var inst_38237__$1 = (state_38254[(2)]);var inst_38238 = cljs.core.not_empty.call(null,inst_38237__$1);var state_38254__$1 = (function (){var statearr_38260 = state_38254;(statearr_38260[(7)] = inst_38237__$1);
return statearr_38260;
})();if(cljs.core.truth_(inst_38238))
{var statearr_38261_38273 = state_38254__$1;(statearr_38261_38273[(1)] = (3));
} else
{var statearr_38262_38274 = state_38254__$1;(statearr_38262_38274[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38255 === (1)))
{var inst_38233 = before_jsload.call(null,files);var inst_38234 = figwheel.client.add_request_urls.call(null,opts,files);var inst_38235 = figwheel.client.load_all_js_files.call(null,inst_38234);var state_38254__$1 = (function (){var statearr_38263 = state_38254;(statearr_38263[(11)] = inst_38233);
return statearr_38263;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38254__$1,(2),inst_38235);
} else
{return null;
}
}
}
}
}
}
});})(c__6934__auto__,map__38231,map__38231__$1,opts,on_jsload,before_jsload,map__38232,map__38232__$1,files))
;return ((function (switch__6869__auto__,c__6934__auto__,map__38231,map__38231__$1,opts,on_jsload,before_jsload,map__38232,map__38232__$1,files){
return (function() {
var state_machine__6870__auto__ = null;
var state_machine__6870__auto____0 = (function (){var statearr_38267 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38267[(0)] = state_machine__6870__auto__);
(statearr_38267[(1)] = (1));
return statearr_38267;
});
var state_machine__6870__auto____1 = (function (state_38254){while(true){
var ret_value__6871__auto__ = (function (){try{while(true){
var result__6872__auto__ = switch__6869__auto__.call(null,state_38254);if(cljs.core.keyword_identical_QMARK_.call(null,result__6872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6872__auto__;
}
break;
}
}catch (e38268){if((e38268 instanceof Object))
{var ex__6873__auto__ = e38268;var statearr_38269_38275 = state_38254;(statearr_38269_38275[(5)] = ex__6873__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38254);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e38268;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38276 = state_38254;
state_38254 = G__38276;
continue;
}
} else
{return ret_value__6871__auto__;
}
break;
}
});
state_machine__6870__auto__ = function(state_38254){
switch(arguments.length){
case 0:
return state_machine__6870__auto____0.call(this);
case 1:
return state_machine__6870__auto____1.call(this,state_38254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6870__auto____0;
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6870__auto____1;
return state_machine__6870__auto__;
})()
;})(switch__6869__auto__,c__6934__auto__,map__38231,map__38231__$1,opts,on_jsload,before_jsload,map__38232,map__38232__$1,files))
})();var state__6936__auto__ = (function (){var statearr_38270 = f__6935__auto__.call(null);(statearr_38270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6934__auto__);
return statearr_38270;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6936__auto__);
});})(c__6934__auto__,map__38231,map__38231__$1,opts,on_jsload,before_jsload,map__38232,map__38232__$1,files))
);
return c__6934__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__38277,link_href){var map__38279 = p__38277;var map__38279__$1 = ((cljs.core.seq_QMARK_.call(null,map__38279))?cljs.core.apply.call(null,cljs.core.hash_map,map__38279):map__38279);var request_url = cljs.core.get.call(null,map__38279__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__38279__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
var c__6934__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6934__auto__,parent){
return (function (){var f__6935__auto__ = (function (){var switch__6869__auto__ = ((function (c__6934__auto__,parent){
return (function (state_38300){var state_val_38301 = (state_38300[(1)]);if((state_val_38301 === (2)))
{var inst_38297 = (state_38300[(2)]);var inst_38298 = parent.removeChild(orig_link);var state_38300__$1 = (function (){var statearr_38302 = state_38300;(statearr_38302[(7)] = inst_38297);
return statearr_38302;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38300__$1,inst_38298);
} else
{if((state_val_38301 === (1)))
{var inst_38295 = cljs.core.async.timeout.call(null,(200));var state_38300__$1 = state_38300;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38300__$1,(2),inst_38295);
} else
{return null;
}
}
});})(c__6934__auto__,parent))
;return ((function (switch__6869__auto__,c__6934__auto__,parent){
return (function() {
var state_machine__6870__auto__ = null;
var state_machine__6870__auto____0 = (function (){var statearr_38306 = [null,null,null,null,null,null,null,null];(statearr_38306[(0)] = state_machine__6870__auto__);
(statearr_38306[(1)] = (1));
return statearr_38306;
});
var state_machine__6870__auto____1 = (function (state_38300){while(true){
var ret_value__6871__auto__ = (function (){try{while(true){
var result__6872__auto__ = switch__6869__auto__.call(null,state_38300);if(cljs.core.keyword_identical_QMARK_.call(null,result__6872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6872__auto__;
}
break;
}
}catch (e38307){if((e38307 instanceof Object))
{var ex__6873__auto__ = e38307;var statearr_38308_38310 = state_38300;(statearr_38308_38310[(5)] = ex__6873__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38300);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e38307;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38311 = state_38300;
state_38300 = G__38311;
continue;
}
} else
{return ret_value__6871__auto__;
}
break;
}
});
state_machine__6870__auto__ = function(state_38300){
switch(arguments.length){
case 0:
return state_machine__6870__auto____0.call(this);
case 1:
return state_machine__6870__auto____1.call(this,state_38300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6870__auto____0;
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6870__auto____1;
return state_machine__6870__auto__;
})()
;})(switch__6869__auto__,c__6934__auto__,parent))
})();var state__6936__auto__ = (function (){var statearr_38309 = f__6935__auto__.call(null);(statearr_38309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6934__auto__);
return statearr_38309;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6936__auto__);
});})(c__6934__auto__,parent))
);
return c__6934__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__38312){var map__38314 = p__38312;var map__38314__$1 = ((cljs.core.seq_QMARK_.call(null,map__38314))?cljs.core.apply.call(null,cljs.core.hash_map,map__38314):map__38314);var f_data = map__38314__$1;var request_url = cljs.core.get.call(null,map__38314__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__38314__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__38315,files_msg){var map__38337 = p__38315;var map__38337__$1 = ((cljs.core.seq_QMARK_.call(null,map__38337))?cljs.core.apply.call(null,cljs.core.hash_map,map__38337):map__38337);var opts = map__38337__$1;var on_cssload = cljs.core.get.call(null,map__38337__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__38338_38358 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__38339_38359 = null;var count__38340_38360 = (0);var i__38341_38361 = (0);while(true){
if((i__38341_38361 < count__38340_38360))
{var f_38362 = cljs.core._nth.call(null,chunk__38339_38359,i__38341_38361);figwheel.client.reload_css_file.call(null,f_38362);
{
var G__38363 = seq__38338_38358;
var G__38364 = chunk__38339_38359;
var G__38365 = count__38340_38360;
var G__38366 = (i__38341_38361 + (1));
seq__38338_38358 = G__38363;
chunk__38339_38359 = G__38364;
count__38340_38360 = G__38365;
i__38341_38361 = G__38366;
continue;
}
} else
{var temp__4126__auto___38367 = cljs.core.seq.call(null,seq__38338_38358);if(temp__4126__auto___38367)
{var seq__38338_38368__$1 = temp__4126__auto___38367;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38338_38368__$1))
{var c__4299__auto___38369 = cljs.core.chunk_first.call(null,seq__38338_38368__$1);{
var G__38370 = cljs.core.chunk_rest.call(null,seq__38338_38368__$1);
var G__38371 = c__4299__auto___38369;
var G__38372 = cljs.core.count.call(null,c__4299__auto___38369);
var G__38373 = (0);
seq__38338_38358 = G__38370;
chunk__38339_38359 = G__38371;
count__38340_38360 = G__38372;
i__38341_38361 = G__38373;
continue;
}
} else
{var f_38374 = cljs.core.first.call(null,seq__38338_38368__$1);figwheel.client.reload_css_file.call(null,f_38374);
{
var G__38375 = cljs.core.next.call(null,seq__38338_38368__$1);
var G__38376 = null;
var G__38377 = (0);
var G__38378 = (0);
seq__38338_38358 = G__38375;
chunk__38339_38359 = G__38376;
count__38340_38360 = G__38377;
i__38341_38361 = G__38378;
continue;
}
}
} else
{}
}
break;
}
var c__6934__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6934__auto__,map__38337,map__38337__$1,opts,on_cssload){
return (function (){var f__6935__auto__ = (function (){var switch__6869__auto__ = ((function (c__6934__auto__,map__38337,map__38337__$1,opts,on_cssload){
return (function (state_38348){var state_val_38349 = (state_38348[(1)]);if((state_val_38349 === (2)))
{var inst_38344 = (state_38348[(2)]);var inst_38345 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_38346 = on_cssload.call(null,inst_38345);var state_38348__$1 = (function (){var statearr_38350 = state_38348;(statearr_38350[(7)] = inst_38344);
return statearr_38350;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38348__$1,inst_38346);
} else
{if((state_val_38349 === (1)))
{var inst_38342 = cljs.core.async.timeout.call(null,(100));var state_38348__$1 = state_38348;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38348__$1,(2),inst_38342);
} else
{return null;
}
}
});})(c__6934__auto__,map__38337,map__38337__$1,opts,on_cssload))
;return ((function (switch__6869__auto__,c__6934__auto__,map__38337,map__38337__$1,opts,on_cssload){
return (function() {
var state_machine__6870__auto__ = null;
var state_machine__6870__auto____0 = (function (){var statearr_38354 = [null,null,null,null,null,null,null,null];(statearr_38354[(0)] = state_machine__6870__auto__);
(statearr_38354[(1)] = (1));
return statearr_38354;
});
var state_machine__6870__auto____1 = (function (state_38348){while(true){
var ret_value__6871__auto__ = (function (){try{while(true){
var result__6872__auto__ = switch__6869__auto__.call(null,state_38348);if(cljs.core.keyword_identical_QMARK_.call(null,result__6872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6872__auto__;
}
break;
}
}catch (e38355){if((e38355 instanceof Object))
{var ex__6873__auto__ = e38355;var statearr_38356_38379 = state_38348;(statearr_38356_38379[(5)] = ex__6873__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38348);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e38355;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38380 = state_38348;
state_38348 = G__38380;
continue;
}
} else
{return ret_value__6871__auto__;
}
break;
}
});
state_machine__6870__auto__ = function(state_38348){
switch(arguments.length){
case 0:
return state_machine__6870__auto____0.call(this);
case 1:
return state_machine__6870__auto____1.call(this,state_38348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6870__auto____0;
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6870__auto____1;
return state_machine__6870__auto__;
})()
;})(switch__6869__auto__,c__6934__auto__,map__38337,map__38337__$1,opts,on_cssload))
})();var state__6936__auto__ = (function (){var statearr_38357 = f__6935__auto__.call(null);(statearr_38357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6934__auto__);
return statearr_38357;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6936__auto__);
});})(c__6934__auto__,map__38337,map__38337__$1,opts,on_cssload))
);
return c__6934__auto__;
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__38381){var map__38386 = p__38381;var map__38386__$1 = ((cljs.core.seq_QMARK_.call(null,map__38386))?cljs.core.apply.call(null,cljs.core.hash_map,map__38386):map__38386);var opts = map__38386__$1;var on_compile_fail = cljs.core.get.call(null,map__38386__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__38386__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__38386__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__38386__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.log("%cFigwheel: trying to open cljs reload socket",figwheel.client.log_style);
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__38386,map__38386__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__38387 = cljs.core._EQ_;var expr__38388 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__38387.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__38388)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__38387.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__38388)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__38387.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38388)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__38386,map__38386__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__38386,map__38386__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.log("%cFigwheel: socket connection established",figwheel.client.log_style);
});})(socket,map__38386,map__38386__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__38386,map__38386__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__38386,map__38386__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__38386,map__38386__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__38386,map__38386__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__38386,map__38386__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__38386,map__38386__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj38393 = {"detail":url};return obj38393;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__38394){var map__38396 = p__38394;var map__38396__$1 = ((cljs.core.seq_QMARK_.call(null,map__38396))?cljs.core.apply.call(null,cljs.core.hash_map,map__38396):map__38396);var class$ = cljs.core.get.call(null,map__38396__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__38396__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__38397){var map__38403 = p__38397;var map__38403__$1 = ((cljs.core.seq_QMARK_.call(null,map__38403))?cljs.core.apply.call(null,cljs.core.hash_map,map__38403):map__38403);var ed = map__38403__$1;var exception_data = cljs.core.get.call(null,map__38403__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__38403__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.log("%cFigwheel: Compile Exception",figwheel.client.log_style);
var seq__38404_38408 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__38405_38409 = null;var count__38406_38410 = (0);var i__38407_38411 = (0);while(true){
if((i__38407_38411 < count__38406_38410))
{var msg_38412 = cljs.core._nth.call(null,chunk__38405_38409,i__38407_38411);console.log(msg_38412);
{
var G__38413 = seq__38404_38408;
var G__38414 = chunk__38405_38409;
var G__38415 = count__38406_38410;
var G__38416 = (i__38407_38411 + (1));
seq__38404_38408 = G__38413;
chunk__38405_38409 = G__38414;
count__38406_38410 = G__38415;
i__38407_38411 = G__38416;
continue;
}
} else
{var temp__4126__auto___38417 = cljs.core.seq.call(null,seq__38404_38408);if(temp__4126__auto___38417)
{var seq__38404_38418__$1 = temp__4126__auto___38417;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38404_38418__$1))
{var c__4299__auto___38419 = cljs.core.chunk_first.call(null,seq__38404_38418__$1);{
var G__38420 = cljs.core.chunk_rest.call(null,seq__38404_38418__$1);
var G__38421 = c__4299__auto___38419;
var G__38422 = cljs.core.count.call(null,c__4299__auto___38419);
var G__38423 = (0);
seq__38404_38408 = G__38420;
chunk__38405_38409 = G__38421;
count__38406_38410 = G__38422;
i__38407_38411 = G__38423;
continue;
}
} else
{var msg_38424 = cljs.core.first.call(null,seq__38404_38418__$1);console.log(msg_38424);
{
var G__38425 = cljs.core.next.call(null,seq__38404_38418__$1);
var G__38426 = null;
var G__38427 = (0);
var G__38428 = (0);
seq__38404_38408 = G__38425;
chunk__38405_38409 = G__38426;
count__38406_38410 = G__38427;
i__38407_38411 = G__38428;
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
var watch_and_reload__delegate = function (p__38429){var map__38431 = p__38429;var map__38431__$1 = ((cljs.core.seq_QMARK_.call(null,map__38431))?cljs.core.apply.call(null,cljs.core.hash_map,map__38431):map__38431);var opts = map__38431__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__38429 = null;if (arguments.length > 0) {
  p__38429 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__38429);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__38432){
var p__38429 = cljs.core.seq(arglist__38432);
return watch_and_reload__delegate(p__38429);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map