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
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__7268__auto__ = v;if(cljs.core.truth_(and__7268__auto__))
{return (v > (0));
} else
{return and__7268__auto__;
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
{return cljs.core.reduce.call(null,(function (p1__15504_SHARP_,p2__15503_SHARP_){var vec__15506 = clojure.string.split.call(null,p2__15503_SHARP_,/=/);var k = cljs.core.nth.call(null,vec__15506,(0),null);var v = cljs.core.nth.call(null,vec__15506,(1),null);return cljs.core.assoc.call(null,p1__15504_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__15507_SHARP_){return cljs_http.client.encode_val.call(null,k,p1__15507_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__15508){var vec__15510 = p__15508;var k = cljs.core.nth.call(null,vec__15510,(0),null);var v = cljs.core.nth.call(null,vec__15510,(1),null);if(cljs.core.coll_QMARK_.call(null,v))
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
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){if(cljs.core.truth_((function (){var and__7268__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);if(and__7268__auto__)
{return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,("(?i)"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(content_type))),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))));
} else
{return and__7268__auto__;
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
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__10229__auto___15547 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10229__auto___15547,channel){
return (function (){var f__10230__auto__ = (function (){var switch__10164__auto__ = ((function (c__10229__auto___15547,channel){
return (function (state_15537){var state_val_15538 = (state_15537[(1)]);if((state_val_15538 === (2)))
{var inst_15531 = (state_15537[(2)]);var inst_15532 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_15533 = cljs_http.client.decode_body.call(null,inst_15531,cljs.reader.read_string,"application/edn",inst_15532);var inst_15534 = cljs.core.async.put_BANG_.call(null,channel,inst_15533);var inst_15535 = cljs.core.async.close_BANG_.call(null,channel);var state_15537__$1 = (function (){var statearr_15539 = state_15537;(statearr_15539[(7)] = inst_15534);
return statearr_15539;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15537__$1,inst_15535);
} else
{if((state_val_15538 === (1)))
{var inst_15529 = client.call(null,request);var state_15537__$1 = state_15537;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15537__$1,(2),inst_15529);
} else
{return null;
}
}
});})(c__10229__auto___15547,channel))
;return ((function (switch__10164__auto__,c__10229__auto___15547,channel){
return (function() {
var state_machine__10165__auto__ = null;
var state_machine__10165__auto____0 = (function (){var statearr_15543 = [null,null,null,null,null,null,null,null];(statearr_15543[(0)] = state_machine__10165__auto__);
(statearr_15543[(1)] = (1));
return statearr_15543;
});
var state_machine__10165__auto____1 = (function (state_15537){while(true){
var ret_value__10166__auto__ = (function (){try{while(true){
var result__10167__auto__ = switch__10164__auto__.call(null,state_15537);if(cljs.core.keyword_identical_QMARK_.call(null,result__10167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10167__auto__;
}
break;
}
}catch (e15544){if((e15544 instanceof Object))
{var ex__10168__auto__ = e15544;var statearr_15545_15548 = state_15537;(statearr_15545_15548[(5)] = ex__10168__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15537);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15544;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15549 = state_15537;
state_15537 = G__15549;
continue;
}
} else
{return ret_value__10166__auto__;
}
break;
}
});
state_machine__10165__auto__ = function(state_15537){
switch(arguments.length){
case 0:
return state_machine__10165__auto____0.call(this);
case 1:
return state_machine__10165__auto____1.call(this,state_15537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10165__auto____0;
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10165__auto____1;
return state_machine__10165__auto__;
})()
;})(switch__10164__auto__,c__10229__auto___15547,channel))
})();var state__10231__auto__ = (function (){var statearr_15546 = f__10230__auto__.call(null);(statearr_15546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10229__auto___15547);
return statearr_15546;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10231__auto__);
});})(c__10229__auto___15547,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__15550){var vec__15552 = p__15550;var accept = cljs.core.nth.call(null,vec__15552,(0),null);return ((function (vec__15552,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__7280__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__7280__auto__))
{return or__7280__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else
{return client.call(null,request);
}
});
;})(vec__15552,accept))
};
var wrap_accept = function (client,var_args){
var p__15550 = null;if (arguments.length > 1) {
  p__15550 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__15550);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__15553){
var client = cljs.core.first(arglist__15553);
var p__15550 = cljs.core.rest(arglist__15553);
return wrap_accept__delegate(client,p__15550);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__15554){var vec__15556 = p__15554;var content_type = cljs.core.nth.call(null,vec__15556,(0),null);return ((function (vec__15556,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__7280__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__7280__auto__))
{return or__7280__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else
{return client.call(null,request);
}
});
;})(vec__15556,content_type))
};
var wrap_content_type = function (client,var_args){
var p__15554 = null;if (arguments.length > 1) {
  p__15554 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__15554);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__15557){
var client = cljs.core.first(arglist__15557);
var p__15554 = cljs.core.rest(arglist__15557);
return wrap_content_type__delegate(client,p__15554);
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
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__10229__auto___15594 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10229__auto___15594,channel){
return (function (){var f__10230__auto__ = (function (){var switch__10164__auto__ = ((function (c__10229__auto___15594,channel){
return (function (state_15584){var state_val_15585 = (state_15584[(1)]);if((state_val_15585 === (2)))
{var inst_15578 = (state_15584[(2)]);var inst_15579 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);var inst_15580 = cljs_http.client.decode_body.call(null,inst_15578,cljs_http.util.json_decode,"application/json",inst_15579);var inst_15581 = cljs.core.async.put_BANG_.call(null,channel,inst_15580);var inst_15582 = cljs.core.async.close_BANG_.call(null,channel);var state_15584__$1 = (function (){var statearr_15586 = state_15584;(statearr_15586[(7)] = inst_15581);
return statearr_15586;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15584__$1,inst_15582);
} else
{if((state_val_15585 === (1)))
{var inst_15576 = client.call(null,request);var state_15584__$1 = state_15584;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15584__$1,(2),inst_15576);
} else
{return null;
}
}
});})(c__10229__auto___15594,channel))
;return ((function (switch__10164__auto__,c__10229__auto___15594,channel){
return (function() {
var state_machine__10165__auto__ = null;
var state_machine__10165__auto____0 = (function (){var statearr_15590 = [null,null,null,null,null,null,null,null];(statearr_15590[(0)] = state_machine__10165__auto__);
(statearr_15590[(1)] = (1));
return statearr_15590;
});
var state_machine__10165__auto____1 = (function (state_15584){while(true){
var ret_value__10166__auto__ = (function (){try{while(true){
var result__10167__auto__ = switch__10164__auto__.call(null,state_15584);if(cljs.core.keyword_identical_QMARK_.call(null,result__10167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10167__auto__;
}
break;
}
}catch (e15591){if((e15591 instanceof Object))
{var ex__10168__auto__ = e15591;var statearr_15592_15595 = state_15584;(statearr_15592_15595[(5)] = ex__10168__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15584);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15591;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15596 = state_15584;
state_15584 = G__15596;
continue;
}
} else
{return ret_value__10166__auto__;
}
break;
}
});
state_machine__10165__auto__ = function(state_15584){
switch(arguments.length){
case 0:
return state_machine__10165__auto____0.call(this);
case 1:
return state_machine__10165__auto____1.call(this,state_15584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10165__auto____0;
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10165__auto____1;
return state_machine__10165__auto__;
})()
;})(switch__10164__auto__,c__10229__auto___15594,channel))
})();var state__10231__auto__ = (function (){var statearr_15593 = f__10230__auto__.call(null);(statearr_15593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10229__auto___15594);
return statearr_15593;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10231__auto__);
});})(c__10229__auto___15594,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__15599){var map__15600 = p__15599;var map__15600__$1 = ((cljs.core.seq_QMARK_.call(null,map__15600))?cljs.core.apply.call(null,cljs.core.hash_map,map__15600):map__15600);var req = map__15600__$1;var query_params = cljs.core.get.call(null,map__15600__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));if(cljs.core.truth_(query_params))
{return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__15603){var map__15604 = p__15603;var map__15604__$1 = ((cljs.core.seq_QMARK_.call(null,map__15604))?cljs.core.apply.call(null,cljs.core.hash_map,map__15604):map__15604);var request = map__15604__$1;var request_method = cljs.core.get.call(null,map__15604__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));var form_params = cljs.core.get.call(null,map__15604__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));if(cljs.core.truth_((function (){var and__7268__auto__ = form_params;if(cljs.core.truth_(and__7268__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else
{return and__7268__auto__;
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
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__15605_SHARP_){return client.call(null,cljs.core.assoc.call(null,p1__15605_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__15609){var map__15610 = p__15609;var map__15610__$1 = ((cljs.core.seq_QMARK_.call(null,map__15610))?cljs.core.apply.call(null,cljs.core.hash_map,map__15610):map__15610);var req = map__15610__$1;var query_params = cljs.core.get.call(null,map__15610__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));var temp__4124__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4124__auto__,map__15610,map__15610__$1,req,query_params){
return (function (p1__15606_SHARP_){return cljs.core.merge.call(null,p1__15606_SHARP_,query_params);
});})(spec,temp__4124__auto__,map__15610,map__15610__$1,req,query_params))
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
var wrap_basic_auth__delegate = function (client,p__15611){var vec__15613 = p__15611;var credentials = cljs.core.nth.call(null,vec__15613,(0),null);return ((function (vec__15613,credentials){
return (function (req){var credentials__$1 = (function (){var or__7280__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__7280__auto__))
{return or__7280__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_.call(null,credentials__$1)))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else
{return client.call(null,req);
}
});
;})(vec__15613,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__15611 = null;if (arguments.length > 1) {
  p__15611 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__15611);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__15614){
var client = cljs.core.first(arglist__15614);
var p__15611 = cljs.core.rest(arglist__15614);
return wrap_basic_auth__delegate(client,p__15611);
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
var delete$__delegate = function (url,p__15615){var vec__15617 = p__15615;var req = cljs.core.nth.call(null,vec__15617,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var delete$ = function (url,var_args){
var p__15615 = null;if (arguments.length > 1) {
  p__15615 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__15615);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__15618){
var url = cljs.core.first(arglist__15618);
var p__15615 = cljs.core.rest(arglist__15618);
return delete$__delegate(url,p__15615);
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
var get__delegate = function (url,p__15619){var vec__15621 = p__15619;var req = cljs.core.nth.call(null,vec__15621,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var get = function (url,var_args){
var p__15619 = null;if (arguments.length > 1) {
  p__15619 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__15619);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__15622){
var url = cljs.core.first(arglist__15622);
var p__15619 = cljs.core.rest(arglist__15622);
return get__delegate(url,p__15619);
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
var head__delegate = function (url,p__15623){var vec__15625 = p__15623;var req = cljs.core.nth.call(null,vec__15625,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var head = function (url,var_args){
var p__15623 = null;if (arguments.length > 1) {
  p__15623 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__15623);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__15626){
var url = cljs.core.first(arglist__15626);
var p__15623 = cljs.core.rest(arglist__15626);
return head__delegate(url,p__15623);
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
var move__delegate = function (url,p__15627){var vec__15629 = p__15627;var req = cljs.core.nth.call(null,vec__15629,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var move = function (url,var_args){
var p__15627 = null;if (arguments.length > 1) {
  p__15627 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__15627);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__15630){
var url = cljs.core.first(arglist__15630);
var p__15627 = cljs.core.rest(arglist__15630);
return move__delegate(url,p__15627);
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
var options__delegate = function (url,p__15631){var vec__15633 = p__15631;var req = cljs.core.nth.call(null,vec__15633,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var options = function (url,var_args){
var p__15631 = null;if (arguments.length > 1) {
  p__15631 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__15631);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__15634){
var url = cljs.core.first(arglist__15634);
var p__15631 = cljs.core.rest(arglist__15634);
return options__delegate(url,p__15631);
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
var patch__delegate = function (url,p__15635){var vec__15637 = p__15635;var req = cljs.core.nth.call(null,vec__15637,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var patch = function (url,var_args){
var p__15635 = null;if (arguments.length > 1) {
  p__15635 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__15635);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__15638){
var url = cljs.core.first(arglist__15638);
var p__15635 = cljs.core.rest(arglist__15638);
return patch__delegate(url,p__15635);
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
var post__delegate = function (url,p__15639){var vec__15641 = p__15639;var req = cljs.core.nth.call(null,vec__15641,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var post = function (url,var_args){
var p__15639 = null;if (arguments.length > 1) {
  p__15639 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__15639);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__15642){
var url = cljs.core.first(arglist__15642);
var p__15639 = cljs.core.rest(arglist__15642);
return post__delegate(url,p__15639);
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
var put__delegate = function (url,p__15643){var vec__15645 = p__15643;var req = cljs.core.nth.call(null,vec__15645,(0),null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var put = function (url,var_args){
var p__15643 = null;if (arguments.length > 1) {
  p__15643 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__15643);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__15646){
var url = cljs.core.first(arglist__15646);
var p__15643 = cljs.core.rest(arglist__15646);
return put__delegate(url,p__15643);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
