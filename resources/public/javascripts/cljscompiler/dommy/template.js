// Compiled by ClojureScript 0.0-2277
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj147233 = {};return obj147233;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__3531__auto__ = this$;if(and__3531__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3531__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__4170__auto__ = (((this$ == null))?null:this$);return (function (){var or__3543__auto__ = (dommy.template._elem[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (dommy.template._elem["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
{var str_147236 = node_str.substring(base_idx);while(true){
var next_idx_147237 = dommy.template.next_css_index.call(null,str_147236,(1));var frag_147238 = (((next_idx_147237 >= (0)))?str_147236.substring((0),next_idx_147237):str_147236);var G__147235_147239 = frag_147238.charAt((0));switch (G__147235_147239) {
case ".":
dommy.attrs.add_class_BANG_.call(null,node,frag_147238.substring((1)));

break;
case "#":
node.setAttribute("id",frag_147238.substring((1)));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frag_147238.charAt((0))))));

}
if((next_idx_147237 >= (0)))
{{
var G__147241 = str_147236.substring(next_idx_147237);
str_147236 = G__147241;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__147247 = data;if(G__147247)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__147247.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__147247.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__147247);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__147247);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__147248_147252 = cljs.core.seq.call(null,data);var chunk__147249_147253 = null;var count__147250_147254 = (0);var i__147251_147255 = (0);while(true){
if((i__147251_147255 < count__147250_147254))
{var child_147256 = cljs.core._nth.call(null,chunk__147249_147253,i__147251_147255);__GT_document_fragment.call(null,result_frag,child_147256);
{
var G__147257 = seq__147248_147252;
var G__147258 = chunk__147249_147253;
var G__147259 = count__147250_147254;
var G__147260 = (i__147251_147255 + (1));
seq__147248_147252 = G__147257;
chunk__147249_147253 = G__147258;
count__147250_147254 = G__147259;
i__147251_147255 = G__147260;
continue;
}
} else
{var temp__4126__auto___147261 = cljs.core.seq.call(null,seq__147248_147252);if(temp__4126__auto___147261)
{var seq__147248_147262__$1 = temp__4126__auto___147261;if(cljs.core.chunked_seq_QMARK_.call(null,seq__147248_147262__$1))
{var c__4299__auto___147263 = cljs.core.chunk_first.call(null,seq__147248_147262__$1);{
var G__147264 = cljs.core.chunk_rest.call(null,seq__147248_147262__$1);
var G__147265 = c__4299__auto___147263;
var G__147266 = cljs.core.count.call(null,c__4299__auto___147263);
var G__147267 = (0);
seq__147248_147252 = G__147264;
chunk__147249_147253 = G__147265;
count__147250_147254 = G__147266;
i__147251_147255 = G__147267;
continue;
}
} else
{var child_147268 = cljs.core.first.call(null,seq__147248_147262__$1);__GT_document_fragment.call(null,result_frag,child_147268);
{
var G__147269 = cljs.core.next.call(null,seq__147248_147262__$1);
var G__147270 = null;
var G__147271 = (0);
var G__147272 = (0);
seq__147248_147252 = G__147269;
chunk__147249_147253 = G__147270;
count__147250_147254 = G__147271;
i__147251_147255 = G__147272;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__147274 = data;if(G__147274)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__147274.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__147274.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__147274);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__147274);
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
dommy.template.compound_element = (function compound_element(p__147275){var vec__147295 = p__147275;var tag_name = cljs.core.nth.call(null,vec__147295,(0),null);var maybe_attrs = cljs.core.nth.call(null,vec__147295,(1),null);var children = cljs.core.nthnext.call(null,vec__147295,(2));var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__147297 = maybe_attrs;if(G__147297)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__147297.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__147297.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__147297);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__147297);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__147298_147314 = cljs.core.seq.call(null,attrs);var chunk__147299_147315 = null;var count__147300_147316 = (0);var i__147301_147317 = (0);while(true){
if((i__147301_147317 < count__147300_147316))
{var vec__147302_147318 = cljs.core._nth.call(null,chunk__147299_147315,i__147301_147317);var k_147319 = cljs.core.nth.call(null,vec__147302_147318,(0),null);var v_147320 = cljs.core.nth.call(null,vec__147302_147318,(1),null);var G__147303_147321 = (((k_147319 instanceof cljs.core.Keyword))?k_147319.fqn:null);switch (G__147303_147321) {
case "classes":
var seq__147304_147323 = cljs.core.seq.call(null,v_147320);var chunk__147305_147324 = null;var count__147306_147325 = (0);var i__147307_147326 = (0);while(true){
if((i__147307_147326 < count__147306_147325))
{var c_147327 = cljs.core._nth.call(null,chunk__147305_147324,i__147307_147326);dommy.attrs.add_class_BANG_.call(null,n,c_147327);
{
var G__147328 = seq__147304_147323;
var G__147329 = chunk__147305_147324;
var G__147330 = count__147306_147325;
var G__147331 = (i__147307_147326 + (1));
seq__147304_147323 = G__147328;
chunk__147305_147324 = G__147329;
count__147306_147325 = G__147330;
i__147307_147326 = G__147331;
continue;
}
} else
{var temp__4126__auto___147332 = cljs.core.seq.call(null,seq__147304_147323);if(temp__4126__auto___147332)
{var seq__147304_147333__$1 = temp__4126__auto___147332;if(cljs.core.chunked_seq_QMARK_.call(null,seq__147304_147333__$1))
{var c__4299__auto___147334 = cljs.core.chunk_first.call(null,seq__147304_147333__$1);{
var G__147335 = cljs.core.chunk_rest.call(null,seq__147304_147333__$1);
var G__147336 = c__4299__auto___147334;
var G__147337 = cljs.core.count.call(null,c__4299__auto___147334);
var G__147338 = (0);
seq__147304_147323 = G__147335;
chunk__147305_147324 = G__147336;
count__147306_147325 = G__147337;
i__147307_147326 = G__147338;
continue;
}
} else
{var c_147339 = cljs.core.first.call(null,seq__147304_147333__$1);dommy.attrs.add_class_BANG_.call(null,n,c_147339);
{
var G__147340 = cljs.core.next.call(null,seq__147304_147333__$1);
var G__147341 = null;
var G__147342 = (0);
var G__147343 = (0);
seq__147304_147323 = G__147340;
chunk__147305_147324 = G__147341;
count__147306_147325 = G__147342;
i__147307_147326 = G__147343;
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
dommy.attrs.add_class_BANG_.call(null,n,v_147320);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_147319,v_147320);

}
{
var G__147344 = seq__147298_147314;
var G__147345 = chunk__147299_147315;
var G__147346 = count__147300_147316;
var G__147347 = (i__147301_147317 + (1));
seq__147298_147314 = G__147344;
chunk__147299_147315 = G__147345;
count__147300_147316 = G__147346;
i__147301_147317 = G__147347;
continue;
}
} else
{var temp__4126__auto___147348 = cljs.core.seq.call(null,seq__147298_147314);if(temp__4126__auto___147348)
{var seq__147298_147349__$1 = temp__4126__auto___147348;if(cljs.core.chunked_seq_QMARK_.call(null,seq__147298_147349__$1))
{var c__4299__auto___147350 = cljs.core.chunk_first.call(null,seq__147298_147349__$1);{
var G__147351 = cljs.core.chunk_rest.call(null,seq__147298_147349__$1);
var G__147352 = c__4299__auto___147350;
var G__147353 = cljs.core.count.call(null,c__4299__auto___147350);
var G__147354 = (0);
seq__147298_147314 = G__147351;
chunk__147299_147315 = G__147352;
count__147300_147316 = G__147353;
i__147301_147317 = G__147354;
continue;
}
} else
{var vec__147308_147355 = cljs.core.first.call(null,seq__147298_147349__$1);var k_147356 = cljs.core.nth.call(null,vec__147308_147355,(0),null);var v_147357 = cljs.core.nth.call(null,vec__147308_147355,(1),null);var G__147309_147358 = (((k_147356 instanceof cljs.core.Keyword))?k_147356.fqn:null);switch (G__147309_147358) {
case "classes":
var seq__147310_147360 = cljs.core.seq.call(null,v_147357);var chunk__147311_147361 = null;var count__147312_147362 = (0);var i__147313_147363 = (0);while(true){
if((i__147313_147363 < count__147312_147362))
{var c_147364 = cljs.core._nth.call(null,chunk__147311_147361,i__147313_147363);dommy.attrs.add_class_BANG_.call(null,n,c_147364);
{
var G__147365 = seq__147310_147360;
var G__147366 = chunk__147311_147361;
var G__147367 = count__147312_147362;
var G__147368 = (i__147313_147363 + (1));
seq__147310_147360 = G__147365;
chunk__147311_147361 = G__147366;
count__147312_147362 = G__147367;
i__147313_147363 = G__147368;
continue;
}
} else
{var temp__4126__auto___147369__$1 = cljs.core.seq.call(null,seq__147310_147360);if(temp__4126__auto___147369__$1)
{var seq__147310_147370__$1 = temp__4126__auto___147369__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__147310_147370__$1))
{var c__4299__auto___147371 = cljs.core.chunk_first.call(null,seq__147310_147370__$1);{
var G__147372 = cljs.core.chunk_rest.call(null,seq__147310_147370__$1);
var G__147373 = c__4299__auto___147371;
var G__147374 = cljs.core.count.call(null,c__4299__auto___147371);
var G__147375 = (0);
seq__147310_147360 = G__147372;
chunk__147311_147361 = G__147373;
count__147312_147362 = G__147374;
i__147313_147363 = G__147375;
continue;
}
} else
{var c_147376 = cljs.core.first.call(null,seq__147310_147370__$1);dommy.attrs.add_class_BANG_.call(null,n,c_147376);
{
var G__147377 = cljs.core.next.call(null,seq__147310_147370__$1);
var G__147378 = null;
var G__147379 = (0);
var G__147380 = (0);
seq__147310_147360 = G__147377;
chunk__147311_147361 = G__147378;
count__147312_147362 = G__147379;
i__147313_147363 = G__147380;
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
dommy.attrs.add_class_BANG_.call(null,n,v_147357);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_147356,v_147357);

}
{
var G__147381 = cljs.core.next.call(null,seq__147298_147349__$1);
var G__147382 = null;
var G__147383 = (0);
var G__147384 = (0);
seq__147298_147314 = G__147381;
chunk__147299_147315 = G__147382;
count__147300_147316 = G__147383;
i__147301_147317 = G__147384;
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
}catch (e147385){if((e147385 instanceof ReferenceError))
{var __147386 = e147385;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e147385;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__147388 = data;if(G__147388)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__147388.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__147388.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__147388);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__147388);
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

//# sourceMappingURL=template.js.map