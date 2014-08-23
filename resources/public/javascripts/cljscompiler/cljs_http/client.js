// Compiled by ClojureScript 0.0-2311
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
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__3541__auto__ = v;if(cljs.core.truth_(and__3541__auto__))
{return (v > (0));
} else
{return and__3541__auto__;
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
{return cljs.core.reduce.call(null,(function (p1__14925_SHARP_,p2__14924_SHARP_){var vec__14927 = clojure.string.split.call(null,p2__14924_SHARP_,/=/);var k = cljs.core.nth.call(null,vec__14927,(0),null);var v = cljs.core.nth.call(null,vec__14927,(1),null);return cljs.core.assoc.call(null,p1__14925_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__14928_SHARP_){return cljs_http.client.encode_val.call(null,k,p1__14928_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__14929){var vec__14931 = p__14929;var k = cljs.core.nth.call(null,vec__14931,(0),null);var v = cljs.core.nth.call(null,vec__14931,(1),null);if(cljs.core.coll_QMARK_.call(null,v))
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
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){if(cljs.core.truth_((function (){var and__3541__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);if(and__3541__auto__)
{return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,("(?i)"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(content_type))),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))));
} else
{return and__3541__auto__;
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
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__5906__auto___14968 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto___14968,channel){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto___14968,channel){
return (function (state_14958){var state_val_14959 = (state_14958[(1)]);if((state_val_14959 === (2)))
{var inst_14952 = (state_14958[(2)]);var inst_14953 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_14954 = cljs_http.client.decode_body.call(null,inst_14952,cljs.reader.read_string,"application/edn",inst_14953);var inst_14955 = cljs.core.async.put_BANG_.call(null,channel,inst_14954);var inst_14956 = cljs.core.async.close_BANG_.call(null,channel);var state_14958__$1 = (function (){var statearr_14960 = state_14958;(statearr_14960[(7)] = inst_14955);
return statearr_14960;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14958__$1,inst_14956);
} else
{if((state_val_14959 === (1)))
{var inst_14950 = client.call(null,request);var state_14958__$1 = state_14958;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14958__$1,(2),inst_14950);
} else
{return null;
}
}
});})(c__5906__auto___14968,channel))
;return ((function (switch__5891__auto__,c__5906__auto___14968,channel){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_14964 = [null,null,null,null,null,null,null,null];(statearr_14964[(0)] = state_machine__5892__auto__);
(statearr_14964[(1)] = (1));
return statearr_14964;
});
var state_machine__5892__auto____1 = (function (state_14958){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_14958);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e14965){if((e14965 instanceof Object))
{var ex__5895__auto__ = e14965;var statearr_14966_14969 = state_14958;(statearr_14966_14969[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14958);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14965;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14970 = state_14958;
state_14958 = G__14970;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_14958){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_14958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto___14968,channel))
})();var state__5908__auto__ = (function (){var statearr_14967 = f__5907__auto__.call(null);(statearr_14967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto___14968);
return statearr_14967;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto___14968,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__14971){var vec__14973 = p__14971;var accept = cljs.core.nth.call(null,vec__14973,(0),null);return ((function (vec__14973,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__3553__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else
{return client.call(null,request);
}
});
;})(vec__14973,accept))
};
var wrap_accept = function (client,var_args){
var p__14971 = null;if (arguments.length > 1) {
  p__14971 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__14971);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__14974){
var client = cljs.core.first(arglist__14974);
var p__14971 = cljs.core.rest(arglist__14974);
return wrap_accept__delegate(client,p__14971);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__14975){var vec__14977 = p__14975;var content_type = cljs.core.nth.call(null,vec__14977,(0),null);return ((function (vec__14977,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__3553__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else
{return client.call(null,request);
}
});
;})(vec__14977,content_type))
};
var wrap_content_type = function (client,var_args){
var p__14975 = null;if (arguments.length > 1) {
  p__14975 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__14975);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__14978){
var client = cljs.core.first(arglist__14978);
var p__14975 = cljs.core.rest(arglist__14978);
return wrap_content_type__delegate(client,p__14975);
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
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__5906__auto___15015 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto___15015,channel){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto___15015,channel){
return (function (state_15005){var state_val_15006 = (state_15005[(1)]);if((state_val_15006 === (2)))
{var inst_14999 = (state_15005[(2)]);var inst_15000 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_15001 = cljs_http.client.decode_body.call(null,inst_14999,cljs_http.util.json_decode,"application/json",inst_15000);var inst_15002 = cljs.core.async.put_BANG_.call(null,channel,inst_15001);var inst_15003 = cljs.core.async.close_BANG_.call(null,channel);var state_15005__$1 = (function (){var statearr_15007 = state_15005;(statearr_15007[(7)] = inst_15002);
return statearr_15007;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15005__$1,inst_15003);
} else
{if((state_val_15006 === (1)))
{var inst_14997 = client.call(null,request);var state_15005__$1 = state_15005;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15005__$1,(2),inst_14997);
} else
{return null;
}
}
});})(c__5906__auto___15015,channel))
;return ((function (switch__5891__auto__,c__5906__auto___15015,channel){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_15011 = [null,null,null,null,null,null,null,null];(statearr_15011[(0)] = state_machine__5892__auto__);
(statearr_15011[(1)] = (1));
return statearr_15011;
});
var state_machine__5892__auto____1 = (function (state_15005){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_15005);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e15012){if((e15012 instanceof Object))
{var ex__5895__auto__ = e15012;var statearr_15013_15016 = state_15005;(statearr_15013_15016[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15005);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15012;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15017 = state_15005;
state_15005 = G__15017;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_15005){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_15005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto___15015,channel))
})();var state__5908__auto__ = (function (){var statearr_15014 = f__5907__auto__.call(null);(statearr_15014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto___15015);
return statearr_15014;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto___15015,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__15020){var map__15021 = p__15020;var map__15021__$1 = ((cljs.core.seq_QMARK_.call(null,map__15021))?cljs.core.apply.call(null,cljs.core.hash_map,map__15021):map__15021);var req = map__15021__$1;var query_params = cljs.core.get.call(null,map__15021__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));if(cljs.core.truth_(query_params))
{return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__15024){var map__15025 = p__15024;var map__15025__$1 = ((cljs.core.seq_QMARK_.call(null,map__15025))?cljs.core.apply.call(null,cljs.core.hash_map,map__15025):map__15025);var request = map__15025__$1;var request_method = cljs.core.get.call(null,map__15025__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));var form_params = cljs.core.get.call(null,map__15025__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));if(cljs.core.truth_((function (){var and__3541__auto__ = form_params;if(cljs.core.truth_(and__3541__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else
{return and__3541__auto__;
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
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__15026_SHARP_){return client.call(null,cljs.core.assoc.call(null,p1__15026_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__15030){var map__15031 = p__15030;var map__15031__$1 = ((cljs.core.seq_QMARK_.call(null,map__15031))?cljs.core.apply.call(null,cljs.core.hash_map,map__15031):map__15031);var req = map__15031__$1;var query_params = cljs.core.get.call(null,map__15031__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));var temp__4124__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4124__auto__,map__15031,map__15031__$1,req,query_params){
return (function (p1__15027_SHARP_){return cljs.core.merge.call(null,p1__15027_SHARP_,query_params);
});})(spec,temp__4124__auto__,map__15031,map__15031__$1,req,query_params))
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
var wrap_basic_auth__delegate = function (client,p__15032){var vec__15034 = p__15032;var credentials = cljs.core.nth.call(null,vec__15034,(0),null);return ((function (vec__15034,credentials){
return (function (req){var credentials__$1 = (function (){var or__3553__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_.call(null,credentials__$1)))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else
{return client.call(null,req);
}
});
;})(vec__15034,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__15032 = null;if (arguments.length > 1) {
  p__15032 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__15032);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__15035){
var client = cljs.core.first(arglist__15035);
var p__15032 = cljs.core.rest(arglist__15035);
return wrap_basic_auth__delegate(client,p__15032);
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
var delete$__delegate = function (url,p__15036){var vec__15038 = p__15036;var req = cljs.core.nth.call(null,vec__15038,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var delete$ = function (url,var_args){
var p__15036 = null;if (arguments.length > 1) {
  p__15036 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__15036);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__15039){
var url = cljs.core.first(arglist__15039);
var p__15036 = cljs.core.rest(arglist__15039);
return delete$__delegate(url,p__15036);
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
var get__delegate = function (url,p__15040){var vec__15042 = p__15040;var req = cljs.core.nth.call(null,vec__15042,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var get = function (url,var_args){
var p__15040 = null;if (arguments.length > 1) {
  p__15040 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__15040);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__15043){
var url = cljs.core.first(arglist__15043);
var p__15040 = cljs.core.rest(arglist__15043);
return get__delegate(url,p__15040);
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
var head__delegate = function (url,p__15044){var vec__15046 = p__15044;var req = cljs.core.nth.call(null,vec__15046,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var head = function (url,var_args){
var p__15044 = null;if (arguments.length > 1) {
  p__15044 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__15044);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__15047){
var url = cljs.core.first(arglist__15047);
var p__15044 = cljs.core.rest(arglist__15047);
return head__delegate(url,p__15044);
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
var move__delegate = function (url,p__15048){var vec__15050 = p__15048;var req = cljs.core.nth.call(null,vec__15050,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var move = function (url,var_args){
var p__15048 = null;if (arguments.length > 1) {
  p__15048 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__15048);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__15051){
var url = cljs.core.first(arglist__15051);
var p__15048 = cljs.core.rest(arglist__15051);
return move__delegate(url,p__15048);
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
var options__delegate = function (url,p__15052){var vec__15054 = p__15052;var req = cljs.core.nth.call(null,vec__15054,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var options = function (url,var_args){
var p__15052 = null;if (arguments.length > 1) {
  p__15052 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__15052);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__15055){
var url = cljs.core.first(arglist__15055);
var p__15052 = cljs.core.rest(arglist__15055);
return options__delegate(url,p__15052);
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
var patch__delegate = function (url,p__15056){var vec__15058 = p__15056;var req = cljs.core.nth.call(null,vec__15058,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var patch = function (url,var_args){
var p__15056 = null;if (arguments.length > 1) {
  p__15056 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__15056);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__15059){
var url = cljs.core.first(arglist__15059);
var p__15056 = cljs.core.rest(arglist__15059);
return patch__delegate(url,p__15056);
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
var post__delegate = function (url,p__15060){var vec__15062 = p__15060;var req = cljs.core.nth.call(null,vec__15062,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var post = function (url,var_args){
var p__15060 = null;if (arguments.length > 1) {
  p__15060 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__15060);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__15063){
var url = cljs.core.first(arglist__15063);
var p__15060 = cljs.core.rest(arglist__15063);
return post__delegate(url,p__15060);
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
var put__delegate = function (url,p__15064){var vec__15066 = p__15064;var req = cljs.core.nth.call(null,vec__15066,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var put = function (url,var_args){
var p__15064 = null;if (arguments.length > 1) {
  p__15064 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__15064);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__15067){
var url = cljs.core.first(arglist__15067);
var p__15064 = cljs.core.rest(arglist__15067);
return put__delegate(url,p__15064);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;

//# sourceMappingURL=client.js.map