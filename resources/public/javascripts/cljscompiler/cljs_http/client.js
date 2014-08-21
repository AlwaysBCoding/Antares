// Compiled by ClojureScript 0.0-2277
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('no.en.core');
goog.require('goog.Uri');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('cljs_http.core');
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__3531__auto__ = v;if(cljs.core.truth_(and__3531__auto__))
{return (v > (0));
} else
{return and__3531__auto__;
}
})()))
{return v;
} else
{return null;
}
});
/**
* Parse `s` as query params and return a hash map.
*/
cljs_http.client.parse_query_params = (function parse_query_params(s){if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s)))
{return cljs.core.reduce.call(null,(function (p1__12003_SHARP_,p2__12002_SHARP_){var vec__12005 = clojure.string.split.call(null,p2__12002_SHARP_,/=/);var k = cljs.core.nth.call(null,vec__12005,(0),null);var v = cljs.core.nth.call(null,vec__12005,(1),null);return cljs.core.assoc.call(null,p1__12003_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,url)))
{var uri = goog.Uri.parse(url);var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data))):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,cljs.core.name.call(null,k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__12006_SHARP_){return cljs_http.client.encode_val.call(null,k,p1__12006_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__12007){var vec__12009 = p__12007;var k = cljs.core.nth.call(null,vec__12009,(0),null);var v = cljs.core.nth.call(null,vec__12009,(1),null);if(cljs.core.coll_QMARK_.call(null,v))
{return cljs_http.client.encode_vals.call(null,k,v);
} else
{return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
/**
* Decocde the :body of `response` with `decode-fn` if the content type matches.
*/
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){if(cljs.core.truth_((function (){var and__3531__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);if(and__3531__auto__)
{return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,("(?i)"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(content_type))),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))));
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else
{return response;
}
});
/**
* Encode :edn-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_edn_params = (function wrap_edn_params(client){return (function (request){var temp__4124__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/edn"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__6055__auto___12046 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6055__auto___12046,channel){
return (function (){var f__6056__auto__ = (function (){var switch__6040__auto__ = ((function (c__6055__auto___12046,channel){
return (function (state_12036){var state_val_12037 = (state_12036[(1)]);if((state_val_12037 === (2)))
{var inst_12030 = (state_12036[(2)]);var inst_12031 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_12032 = cljs_http.client.decode_body.call(null,inst_12030,cljs.reader.read_string,"application/edn",inst_12031);var inst_12033 = cljs.core.async.put_BANG_.call(null,channel,inst_12032);var inst_12034 = cljs.core.async.close_BANG_.call(null,channel);var state_12036__$1 = (function (){var statearr_12038 = state_12036;(statearr_12038[(7)] = inst_12033);
return statearr_12038;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12036__$1,inst_12034);
} else
{if((state_val_12037 === (1)))
{var inst_12028 = client.call(null,request);var state_12036__$1 = state_12036;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12036__$1,(2),inst_12028);
} else
{return null;
}
}
});})(c__6055__auto___12046,channel))
;return ((function (switch__6040__auto__,c__6055__auto___12046,channel){
return (function() {
var state_machine__6041__auto__ = null;
var state_machine__6041__auto____0 = (function (){var statearr_12042 = [null,null,null,null,null,null,null,null];(statearr_12042[(0)] = state_machine__6041__auto__);
(statearr_12042[(1)] = (1));
return statearr_12042;
});
var state_machine__6041__auto____1 = (function (state_12036){while(true){
var ret_value__6042__auto__ = (function (){try{while(true){
var result__6043__auto__ = switch__6040__auto__.call(null,state_12036);if(cljs.core.keyword_identical_QMARK_.call(null,result__6043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6043__auto__;
}
break;
}
}catch (e12043){if((e12043 instanceof Object))
{var ex__6044__auto__ = e12043;var statearr_12044_12047 = state_12036;(statearr_12044_12047[(5)] = ex__6044__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12036);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12043;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12048 = state_12036;
state_12036 = G__12048;
continue;
}
} else
{return ret_value__6042__auto__;
}
break;
}
});
state_machine__6041__auto__ = function(state_12036){
switch(arguments.length){
case 0:
return state_machine__6041__auto____0.call(this);
case 1:
return state_machine__6041__auto____1.call(this,state_12036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6041__auto____0;
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6041__auto____1;
return state_machine__6041__auto__;
})()
;})(switch__6040__auto__,c__6055__auto___12046,channel))
})();var state__6057__auto__ = (function (){var statearr_12045 = f__6056__auto__.call(null);(statearr_12045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6055__auto___12046);
return statearr_12045;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6057__auto__);
});})(c__6055__auto___12046,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__12049){var vec__12051 = p__12049;var accept = cljs.core.nth.call(null,vec__12051,(0),null);return ((function (vec__12051,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__3543__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else
{return client.call(null,request);
}
});
;})(vec__12051,accept))
};
var wrap_accept = function (client,var_args){
var p__12049 = null;if (arguments.length > 1) {
  p__12049 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__12049);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__12052){
var client = cljs.core.first(arglist__12052);
var p__12049 = cljs.core.rest(arglist__12052);
return wrap_accept__delegate(client,p__12049);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__12053){var vec__12055 = p__12053;var content_type = cljs.core.nth.call(null,vec__12055,(0),null);return ((function (vec__12055,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__3543__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else
{return client.call(null,request);
}
});
;})(vec__12055,content_type))
};
var wrap_content_type = function (client,var_args){
var p__12053 = null;if (arguments.length > 1) {
  p__12053 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__12053);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__12056){
var client = cljs.core.first(arglist__12056);
var p__12053 = cljs.core.rest(arglist__12056);
return wrap_content_type__delegate(client,p__12053);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4124__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/json"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__6055__auto___12093 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6055__auto___12093,channel){
return (function (){var f__6056__auto__ = (function (){var switch__6040__auto__ = ((function (c__6055__auto___12093,channel){
return (function (state_12083){var state_val_12084 = (state_12083[(1)]);if((state_val_12084 === (2)))
{var inst_12077 = (state_12083[(2)]);var inst_12078 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_12079 = cljs_http.client.decode_body.call(null,inst_12077,cljs_http.util.json_decode,"application/json",inst_12078);var inst_12080 = cljs.core.async.put_BANG_.call(null,channel,inst_12079);var inst_12081 = cljs.core.async.close_BANG_.call(null,channel);var state_12083__$1 = (function (){var statearr_12085 = state_12083;(statearr_12085[(7)] = inst_12080);
return statearr_12085;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12083__$1,inst_12081);
} else
{if((state_val_12084 === (1)))
{var inst_12075 = client.call(null,request);var state_12083__$1 = state_12083;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12083__$1,(2),inst_12075);
} else
{return null;
}
}
});})(c__6055__auto___12093,channel))
;return ((function (switch__6040__auto__,c__6055__auto___12093,channel){
return (function() {
var state_machine__6041__auto__ = null;
var state_machine__6041__auto____0 = (function (){var statearr_12089 = [null,null,null,null,null,null,null,null];(statearr_12089[(0)] = state_machine__6041__auto__);
(statearr_12089[(1)] = (1));
return statearr_12089;
});
var state_machine__6041__auto____1 = (function (state_12083){while(true){
var ret_value__6042__auto__ = (function (){try{while(true){
var result__6043__auto__ = switch__6040__auto__.call(null,state_12083);if(cljs.core.keyword_identical_QMARK_.call(null,result__6043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6043__auto__;
}
break;
}
}catch (e12090){if((e12090 instanceof Object))
{var ex__6044__auto__ = e12090;var statearr_12091_12094 = state_12083;(statearr_12091_12094[(5)] = ex__6044__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12083);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12090;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12095 = state_12083;
state_12083 = G__12095;
continue;
}
} else
{return ret_value__6042__auto__;
}
break;
}
});
state_machine__6041__auto__ = function(state_12083){
switch(arguments.length){
case 0:
return state_machine__6041__auto____0.call(this);
case 1:
return state_machine__6041__auto____1.call(this,state_12083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6041__auto____0;
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6041__auto____1;
return state_machine__6041__auto__;
})()
;})(switch__6040__auto__,c__6055__auto___12093,channel))
})();var state__6057__auto__ = (function (){var statearr_12092 = f__6056__auto__.call(null);(statearr_12092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6055__auto___12093);
return statearr_12092;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6057__auto__);
});})(c__6055__auto___12093,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__12098){var map__12099 = p__12098;var map__12099__$1 = ((cljs.core.seq_QMARK_.call(null,map__12099))?cljs.core.apply.call(null,cljs.core.hash_map,map__12099):map__12099);var req = map__12099__$1;var query_params = cljs.core.get.call(null,map__12099__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));if(cljs.core.truth_(query_params))
{return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__12102){var map__12103 = p__12102;var map__12103__$1 = ((cljs.core.seq_QMARK_.call(null,map__12103))?cljs.core.apply.call(null,cljs.core.hash_map,map__12103):map__12103);var request = map__12103__$1;var request_method = cljs.core.get.call(null,map__12103__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));var form_params = cljs.core.get.call(null,map__12103__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));if(cljs.core.truth_((function (){var and__3531__auto__ = form_params;if(cljs.core.truth_(and__3531__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else
{return and__3531__auto__;
}
})()))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/x-www-form-urlencoded"));
} else
{return client.call(null,request);
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function wrap_android_cors_bugfix(client){return (function (request){return client.call(null,(cljs.core.truth_(cljs_http.util.android_QMARK_.call(null))?cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"android","android",-2084094573)], null),Math.random.call(null)):request));
});
});
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var m = temp__4124__auto__;return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__12104_SHARP_){return client.call(null,cljs.core.assoc.call(null,p1__12104_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__12108){var map__12109 = p__12108;var map__12109__$1 = ((cljs.core.seq_QMARK_.call(null,map__12109))?cljs.core.apply.call(null,cljs.core.hash_map,map__12109):map__12109);var req = map__12109__$1;var query_params = cljs.core.get.call(null,map__12109__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));var temp__4124__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4124__auto__,map__12109,map__12109__$1,req,query_params){
return (function (p1__12105_SHARP_){return cljs.core.merge.call(null,p1__12105_SHARP_,query_params);
});})(spec,temp__4124__auto__,map__12109,map__12109__$1,req,query_params))
));
} else
{return client.call(null,req);
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__12110){var vec__12112 = p__12110;var credentials = cljs.core.nth.call(null,vec__12112,(0),null);return ((function (vec__12112,credentials){
return (function (req){var credentials__$1 = (function (){var or__3543__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_.call(null,credentials__$1)))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else
{return client.call(null,req);
}
});
;})(vec__12112,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__12110 = null;if (arguments.length > 1) {
  p__12110 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__12110);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__12113){
var client = cljs.core.first(arglist__12113);
var p__12110 = cljs.core.rest(arglist__12113);
return wrap_basic_auth__delegate(client,p__12110);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var oauth_token = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),("Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token))));
} else
{return client.call(null,req);
}
});
});
/**
* Returns a batteries-included HTTP request function coresponding to the given
* core client. See client/client.
*/
cljs_http.client.wrap_request = (function wrap_request(request){return cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_android_cors_bugfix.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))));
});
/**
* Executes the HTTP request corresponding to the given map and returns the
* response map for corresponding to the resulting HTTP response.
* 
* In addition to the standard Ring request keys, the following keys are also
* recognized:
* * :url
* * :method
* * :query-params
*/
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.delete$ = (function() { 
var delete$__delegate = function (url,p__12114){var vec__12116 = p__12114;var req = cljs.core.nth.call(null,vec__12116,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var delete$ = function (url,var_args){
var p__12114 = null;if (arguments.length > 1) {
  p__12114 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__12114);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__12117){
var url = cljs.core.first(arglist__12117);
var p__12114 = cljs.core.rest(arglist__12117);
return delete$__delegate(url,p__12114);
});
delete$.cljs$core$IFn$_invoke$arity$variadic = delete$__delegate;
return delete$;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.get = (function() { 
var get__delegate = function (url,p__12118){var vec__12120 = p__12118;var req = cljs.core.nth.call(null,vec__12120,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var get = function (url,var_args){
var p__12118 = null;if (arguments.length > 1) {
  p__12118 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__12118);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__12121){
var url = cljs.core.first(arglist__12121);
var p__12118 = cljs.core.rest(arglist__12121);
return get__delegate(url,p__12118);
});
get.cljs$core$IFn$_invoke$arity$variadic = get__delegate;
return get;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.head = (function() { 
var head__delegate = function (url,p__12122){var vec__12124 = p__12122;var req = cljs.core.nth.call(null,vec__12124,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var head = function (url,var_args){
var p__12122 = null;if (arguments.length > 1) {
  p__12122 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__12122);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__12125){
var url = cljs.core.first(arglist__12125);
var p__12122 = cljs.core.rest(arglist__12125);
return head__delegate(url,p__12122);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.move = (function() { 
var move__delegate = function (url,p__12126){var vec__12128 = p__12126;var req = cljs.core.nth.call(null,vec__12128,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var move = function (url,var_args){
var p__12126 = null;if (arguments.length > 1) {
  p__12126 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__12126);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__12129){
var url = cljs.core.first(arglist__12129);
var p__12126 = cljs.core.rest(arglist__12129);
return move__delegate(url,p__12126);
});
move.cljs$core$IFn$_invoke$arity$variadic = move__delegate;
return move;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.options = (function() { 
var options__delegate = function (url,p__12130){var vec__12132 = p__12130;var req = cljs.core.nth.call(null,vec__12132,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var options = function (url,var_args){
var p__12130 = null;if (arguments.length > 1) {
  p__12130 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__12130);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__12133){
var url = cljs.core.first(arglist__12133);
var p__12130 = cljs.core.rest(arglist__12133);
return options__delegate(url,p__12130);
});
options.cljs$core$IFn$_invoke$arity$variadic = options__delegate;
return options;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.patch = (function() { 
var patch__delegate = function (url,p__12134){var vec__12136 = p__12134;var req = cljs.core.nth.call(null,vec__12136,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var patch = function (url,var_args){
var p__12134 = null;if (arguments.length > 1) {
  p__12134 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__12134);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__12137){
var url = cljs.core.first(arglist__12137);
var p__12134 = cljs.core.rest(arglist__12137);
return patch__delegate(url,p__12134);
});
patch.cljs$core$IFn$_invoke$arity$variadic = patch__delegate;
return patch;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.post = (function() { 
var post__delegate = function (url,p__12138){var vec__12140 = p__12138;var req = cljs.core.nth.call(null,vec__12140,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var post = function (url,var_args){
var p__12138 = null;if (arguments.length > 1) {
  p__12138 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__12138);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__12141){
var url = cljs.core.first(arglist__12141);
var p__12138 = cljs.core.rest(arglist__12141);
return post__delegate(url,p__12138);
});
post.cljs$core$IFn$_invoke$arity$variadic = post__delegate;
return post;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.put = (function() { 
var put__delegate = function (url,p__12142){var vec__12144 = p__12142;var req = cljs.core.nth.call(null,vec__12144,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var put = function (url,var_args){
var p__12142 = null;if (arguments.length > 1) {
  p__12142 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__12142);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__12145){
var url = cljs.core.first(arglist__12145);
var p__12142 = cljs.core.rest(arglist__12145);
return put__delegate(url,p__12142);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;

//# sourceMappingURL=client.js.map