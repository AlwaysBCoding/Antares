// Compiled by ClojureScript 0.0-2277
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj10268 = {};return obj10268;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__7271__auto__ = this$;if(and__7271__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__7271__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__7910__auto__ = (((this$ == null))?null:this$);return (function (){var or__7283__auto__ = (dommy.template._elem[goog.typeOf(x__7910__auto__)]);if(or__7283__auto__)
{return or__7283__auto__;
} else
{var or__7283__auto____$1 = (dommy.template._elem["_"]);if(or__7283__auto____$1)
{return or__7283__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < (0)))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = cljs.core.name.call(null,node_key);var base_idx = dommy.template.next_css_index.call(null,node_str,(0));var tag = (((base_idx > (0)))?node_str.substring((0),base_idx):(((base_idx === (0)))?"div":((new cljs.core.Keyword(null,"else","else",-1508377146))?node_str:null)));var node = (cljs.core.truth_(dommy.template._PLUS_svg_tags_PLUS_.call(null,tag))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= (0)))
{var str_10271 = node_str.substring(base_idx);while(true){
var next_idx_10272 = dommy.template.next_css_index.call(null,str_10271,(1));var frag_10273 = (((next_idx_10272 >= (0)))?str_10271.substring((0),next_idx_10272):str_10271);var G__10270_10274 = frag_10273.charAt((0));switch (G__10270_10274) {
case ".":
dommy.attrs.add_class_BANG_.call(null,node,frag_10273.substring((1)));

break;
case "#":
node.setAttribute("id",frag_10273.substring((1)));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frag_10273.charAt((0))))));

}
if((next_idx_10272 >= (0)))
{{
var G__10276 = str_10271.substring(next_idx_10272);
str_10271 = G__10276;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw ("Don't know how to make node from: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,node_data)));
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__10282 = data;if(G__10282)
{var bit__7933__auto__ = null;if(cljs.core.truth_((function (){var or__7283__auto__ = bit__7933__auto__;if(cljs.core.truth_(or__7283__auto__))
{return or__7283__auto__;
} else
{return G__10282.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__10282.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__10282);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__10282);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__10283_10287 = cljs.core.seq.call(null,data);var chunk__10284_10288 = null;var count__10285_10289 = (0);var i__10286_10290 = (0);while(true){
if((i__10286_10290 < count__10285_10289))
{var child_10291 = cljs.core._nth.call(null,chunk__10284_10288,i__10286_10290);__GT_document_fragment.call(null,result_frag,child_10291);
{
var G__10292 = seq__10283_10287;
var G__10293 = chunk__10284_10288;
var G__10294 = count__10285_10289;
var G__10295 = (i__10286_10290 + (1));
seq__10283_10287 = G__10292;
chunk__10284_10288 = G__10293;
count__10285_10289 = G__10294;
i__10286_10290 = G__10295;
continue;
}
} else
{var temp__4126__auto___10296 = cljs.core.seq.call(null,seq__10283_10287);if(temp__4126__auto___10296)
{var seq__10283_10297__$1 = temp__4126__auto___10296;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10283_10297__$1))
{var c__8039__auto___10298 = cljs.core.chunk_first.call(null,seq__10283_10297__$1);{
var G__10299 = cljs.core.chunk_rest.call(null,seq__10283_10297__$1);
var G__10300 = c__8039__auto___10298;
var G__10301 = cljs.core.count.call(null,c__8039__auto___10298);
var G__10302 = (0);
seq__10283_10287 = G__10299;
chunk__10284_10288 = G__10300;
count__10285_10289 = G__10301;
i__10286_10290 = G__10302;
continue;
}
} else
{var child_10303 = cljs.core.first.call(null,seq__10283_10297__$1);__GT_document_fragment.call(null,result_frag,child_10303);
{
var G__10304 = cljs.core.next.call(null,seq__10283_10297__$1);
var G__10305 = null;
var G__10306 = (0);
var G__10307 = (0);
seq__10283_10287 = G__10304;
chunk__10284_10288 = G__10305;
count__10285_10289 = G__10306;
i__10286_10290 = G__10307;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return dommy.template.throw_unable_to_make_node.call(null,data);
} else
{return null;
}
}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__10309 = data;if(G__10309)
{var bit__7933__auto__ = null;if(cljs.core.truth_((function (){var or__7283__auto__ = bit__7933__auto__;if(cljs.core.truth_(or__7283__auto__))
{return or__7283__auto__;
} else
{return G__10309.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__10309.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__10309);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__10309);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__10310){var vec__10330 = p__10310;var tag_name = cljs.core.nth.call(null,vec__10330,(0),null);var maybe_attrs = cljs.core.nth.call(null,vec__10330,(1),null);var children = cljs.core.nthnext.call(null,vec__10330,(2));var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__10332 = maybe_attrs;if(G__10332)
{var bit__7933__auto__ = null;if(cljs.core.truth_((function (){var or__7283__auto__ = bit__7933__auto__;if(cljs.core.truth_(or__7283__auto__))
{return or__7283__auto__;
} else
{return G__10332.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__10332.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__10332);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__10332);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__10333_10349 = cljs.core.seq.call(null,attrs);var chunk__10334_10350 = null;var count__10335_10351 = (0);var i__10336_10352 = (0);while(true){
if((i__10336_10352 < count__10335_10351))
{var vec__10337_10353 = cljs.core._nth.call(null,chunk__10334_10350,i__10336_10352);var k_10354 = cljs.core.nth.call(null,vec__10337_10353,(0),null);var v_10355 = cljs.core.nth.call(null,vec__10337_10353,(1),null);var G__10338_10356 = (((k_10354 instanceof cljs.core.Keyword))?k_10354.fqn:null);switch (G__10338_10356) {
case "classes":
var seq__10339_10358 = cljs.core.seq.call(null,v_10355);var chunk__10340_10359 = null;var count__10341_10360 = (0);var i__10342_10361 = (0);while(true){
if((i__10342_10361 < count__10341_10360))
{var c_10362 = cljs.core._nth.call(null,chunk__10340_10359,i__10342_10361);dommy.attrs.add_class_BANG_.call(null,n,c_10362);
{
var G__10363 = seq__10339_10358;
var G__10364 = chunk__10340_10359;
var G__10365 = count__10341_10360;
var G__10366 = (i__10342_10361 + (1));
seq__10339_10358 = G__10363;
chunk__10340_10359 = G__10364;
count__10341_10360 = G__10365;
i__10342_10361 = G__10366;
continue;
}
} else
{var temp__4126__auto___10367 = cljs.core.seq.call(null,seq__10339_10358);if(temp__4126__auto___10367)
{var seq__10339_10368__$1 = temp__4126__auto___10367;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10339_10368__$1))
{var c__8039__auto___10369 = cljs.core.chunk_first.call(null,seq__10339_10368__$1);{
var G__10370 = cljs.core.chunk_rest.call(null,seq__10339_10368__$1);
var G__10371 = c__8039__auto___10369;
var G__10372 = cljs.core.count.call(null,c__8039__auto___10369);
var G__10373 = (0);
seq__10339_10358 = G__10370;
chunk__10340_10359 = G__10371;
count__10341_10360 = G__10372;
i__10342_10361 = G__10373;
continue;
}
} else
{var c_10374 = cljs.core.first.call(null,seq__10339_10368__$1);dommy.attrs.add_class_BANG_.call(null,n,c_10374);
{
var G__10375 = cljs.core.next.call(null,seq__10339_10368__$1);
var G__10376 = null;
var G__10377 = (0);
var G__10378 = (0);
seq__10339_10358 = G__10375;
chunk__10340_10359 = G__10376;
count__10341_10360 = G__10377;
i__10342_10361 = G__10378;
continue;
}
}
} else
{}
}
break;
}

break;
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_10355);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_10354,v_10355);

}
{
var G__10379 = seq__10333_10349;
var G__10380 = chunk__10334_10350;
var G__10381 = count__10335_10351;
var G__10382 = (i__10336_10352 + (1));
seq__10333_10349 = G__10379;
chunk__10334_10350 = G__10380;
count__10335_10351 = G__10381;
i__10336_10352 = G__10382;
continue;
}
} else
{var temp__4126__auto___10383 = cljs.core.seq.call(null,seq__10333_10349);if(temp__4126__auto___10383)
{var seq__10333_10384__$1 = temp__4126__auto___10383;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10333_10384__$1))
{var c__8039__auto___10385 = cljs.core.chunk_first.call(null,seq__10333_10384__$1);{
var G__10386 = cljs.core.chunk_rest.call(null,seq__10333_10384__$1);
var G__10387 = c__8039__auto___10385;
var G__10388 = cljs.core.count.call(null,c__8039__auto___10385);
var G__10389 = (0);
seq__10333_10349 = G__10386;
chunk__10334_10350 = G__10387;
count__10335_10351 = G__10388;
i__10336_10352 = G__10389;
continue;
}
} else
{var vec__10343_10390 = cljs.core.first.call(null,seq__10333_10384__$1);var k_10391 = cljs.core.nth.call(null,vec__10343_10390,(0),null);var v_10392 = cljs.core.nth.call(null,vec__10343_10390,(1),null);var G__10344_10393 = (((k_10391 instanceof cljs.core.Keyword))?k_10391.fqn:null);switch (G__10344_10393) {
case "classes":
var seq__10345_10395 = cljs.core.seq.call(null,v_10392);var chunk__10346_10396 = null;var count__10347_10397 = (0);var i__10348_10398 = (0);while(true){
if((i__10348_10398 < count__10347_10397))
{var c_10399 = cljs.core._nth.call(null,chunk__10346_10396,i__10348_10398);dommy.attrs.add_class_BANG_.call(null,n,c_10399);
{
var G__10400 = seq__10345_10395;
var G__10401 = chunk__10346_10396;
var G__10402 = count__10347_10397;
var G__10403 = (i__10348_10398 + (1));
seq__10345_10395 = G__10400;
chunk__10346_10396 = G__10401;
count__10347_10397 = G__10402;
i__10348_10398 = G__10403;
continue;
}
} else
{var temp__4126__auto___10404__$1 = cljs.core.seq.call(null,seq__10345_10395);if(temp__4126__auto___10404__$1)
{var seq__10345_10405__$1 = temp__4126__auto___10404__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10345_10405__$1))
{var c__8039__auto___10406 = cljs.core.chunk_first.call(null,seq__10345_10405__$1);{
var G__10407 = cljs.core.chunk_rest.call(null,seq__10345_10405__$1);
var G__10408 = c__8039__auto___10406;
var G__10409 = cljs.core.count.call(null,c__8039__auto___10406);
var G__10410 = (0);
seq__10345_10395 = G__10407;
chunk__10346_10396 = G__10408;
count__10347_10397 = G__10409;
i__10348_10398 = G__10410;
continue;
}
} else
{var c_10411 = cljs.core.first.call(null,seq__10345_10405__$1);dommy.attrs.add_class_BANG_.call(null,n,c_10411);
{
var G__10412 = cljs.core.next.call(null,seq__10345_10405__$1);
var G__10413 = null;
var G__10414 = (0);
var G__10415 = (0);
seq__10345_10395 = G__10412;
chunk__10346_10396 = G__10413;
count__10347_10397 = G__10414;
i__10348_10398 = G__10415;
continue;
}
}
} else
{}
}
break;
}

break;
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_10392);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_10391,v_10392);

}
{
var G__10416 = cljs.core.next.call(null,seq__10333_10384__$1);
var G__10417 = null;
var G__10418 = (0);
var G__10419 = (0);
seq__10333_10349 = G__10416;
chunk__10334_10350 = G__10417;
count__10335_10351 = G__10418;
i__10336_10352 = G__10419;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return dommy.template.compound_element.call(null,this$__$1);
});
SVGElement.prototype.dommy$template$PElement$ = true;
SVGElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
try{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
}catch (e10420){if((e10420 instanceof ReferenceError))
{var __10421 = e10420;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10420;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__10423 = data;if(G__10423)
{var bit__7933__auto__ = null;if(cljs.core.truth_((function (){var or__7283__auto__ = bit__7933__auto__;if(cljs.core.truth_(or__7283__auto__))
{return or__7283__auto__;
} else
{return G__10423.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__10423.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__10423);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__10423);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});
