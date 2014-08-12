// Compiled by ClojureScript 0.0-2277
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj7471 = {};return obj7471;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__3551__auto__ = this$;if(and__3551__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3551__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__4190__auto__ = (((this$ == null))?null:this$);return (function (){var or__3563__auto__ = (dommy.template._elem[goog.typeOf(x__4190__auto__)]);if(or__3563__auto__)
{return or__3563__auto__;
} else
{var or__3563__auto____$1 = (dommy.template._elem["_"]);if(or__3563__auto____$1)
{return or__3563__auto____$1;
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
{var str_7474 = node_str.substring(base_idx);while(true){
var next_idx_7475 = dommy.template.next_css_index.call(null,str_7474,(1));var frag_7476 = (((next_idx_7475 >= (0)))?str_7474.substring((0),next_idx_7475):str_7474);var G__7473_7477 = frag_7476.charAt((0));switch (G__7473_7477) {
case ".":
dommy.attrs.add_class_BANG_.call(null,node,frag_7476.substring((1)));

break;
case "#":
node.setAttribute("id",frag_7476.substring((1)));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frag_7476.charAt((0))))));

}
if((next_idx_7475 >= (0)))
{{
var G__7479 = str_7474.substring(next_idx_7475);
str_7474 = G__7479;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__7485 = data;if(G__7485)
{var bit__4213__auto__ = null;if(cljs.core.truth_((function (){var or__3563__auto__ = bit__4213__auto__;if(cljs.core.truth_(or__3563__auto__))
{return or__3563__auto__;
} else
{return G__7485.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7485.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7485);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7485);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__7486_7490 = cljs.core.seq.call(null,data);var chunk__7487_7491 = null;var count__7488_7492 = (0);var i__7489_7493 = (0);while(true){
if((i__7489_7493 < count__7488_7492))
{var child_7494 = cljs.core._nth.call(null,chunk__7487_7491,i__7489_7493);__GT_document_fragment.call(null,result_frag,child_7494);
{
var G__7495 = seq__7486_7490;
var G__7496 = chunk__7487_7491;
var G__7497 = count__7488_7492;
var G__7498 = (i__7489_7493 + (1));
seq__7486_7490 = G__7495;
chunk__7487_7491 = G__7496;
count__7488_7492 = G__7497;
i__7489_7493 = G__7498;
continue;
}
} else
{var temp__4126__auto___7499 = cljs.core.seq.call(null,seq__7486_7490);if(temp__4126__auto___7499)
{var seq__7486_7500__$1 = temp__4126__auto___7499;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7486_7500__$1))
{var c__4319__auto___7501 = cljs.core.chunk_first.call(null,seq__7486_7500__$1);{
var G__7502 = cljs.core.chunk_rest.call(null,seq__7486_7500__$1);
var G__7503 = c__4319__auto___7501;
var G__7504 = cljs.core.count.call(null,c__4319__auto___7501);
var G__7505 = (0);
seq__7486_7490 = G__7502;
chunk__7487_7491 = G__7503;
count__7488_7492 = G__7504;
i__7489_7493 = G__7505;
continue;
}
} else
{var child_7506 = cljs.core.first.call(null,seq__7486_7500__$1);__GT_document_fragment.call(null,result_frag,child_7506);
{
var G__7507 = cljs.core.next.call(null,seq__7486_7500__$1);
var G__7508 = null;
var G__7509 = (0);
var G__7510 = (0);
seq__7486_7490 = G__7507;
chunk__7487_7491 = G__7508;
count__7488_7492 = G__7509;
i__7489_7493 = G__7510;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__7512 = data;if(G__7512)
{var bit__4213__auto__ = null;if(cljs.core.truth_((function (){var or__3563__auto__ = bit__4213__auto__;if(cljs.core.truth_(or__3563__auto__))
{return or__3563__auto__;
} else
{return G__7512.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7512.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7512);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7512);
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
dommy.template.compound_element = (function compound_element(p__7513){var vec__7533 = p__7513;var tag_name = cljs.core.nth.call(null,vec__7533,(0),null);var maybe_attrs = cljs.core.nth.call(null,vec__7533,(1),null);var children = cljs.core.nthnext.call(null,vec__7533,(2));var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__7535 = maybe_attrs;if(G__7535)
{var bit__4213__auto__ = null;if(cljs.core.truth_((function (){var or__3563__auto__ = bit__4213__auto__;if(cljs.core.truth_(or__3563__auto__))
{return or__3563__auto__;
} else
{return G__7535.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7535.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7535);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7535);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__7536_7552 = cljs.core.seq.call(null,attrs);var chunk__7537_7553 = null;var count__7538_7554 = (0);var i__7539_7555 = (0);while(true){
if((i__7539_7555 < count__7538_7554))
{var vec__7540_7556 = cljs.core._nth.call(null,chunk__7537_7553,i__7539_7555);var k_7557 = cljs.core.nth.call(null,vec__7540_7556,(0),null);var v_7558 = cljs.core.nth.call(null,vec__7540_7556,(1),null);var G__7541_7559 = (((k_7557 instanceof cljs.core.Keyword))?k_7557.fqn:null);switch (G__7541_7559) {
case "classes":
var seq__7542_7561 = cljs.core.seq.call(null,v_7558);var chunk__7543_7562 = null;var count__7544_7563 = (0);var i__7545_7564 = (0);while(true){
if((i__7545_7564 < count__7544_7563))
{var c_7565 = cljs.core._nth.call(null,chunk__7543_7562,i__7545_7564);dommy.attrs.add_class_BANG_.call(null,n,c_7565);
{
var G__7566 = seq__7542_7561;
var G__7567 = chunk__7543_7562;
var G__7568 = count__7544_7563;
var G__7569 = (i__7545_7564 + (1));
seq__7542_7561 = G__7566;
chunk__7543_7562 = G__7567;
count__7544_7563 = G__7568;
i__7545_7564 = G__7569;
continue;
}
} else
{var temp__4126__auto___7570 = cljs.core.seq.call(null,seq__7542_7561);if(temp__4126__auto___7570)
{var seq__7542_7571__$1 = temp__4126__auto___7570;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7542_7571__$1))
{var c__4319__auto___7572 = cljs.core.chunk_first.call(null,seq__7542_7571__$1);{
var G__7573 = cljs.core.chunk_rest.call(null,seq__7542_7571__$1);
var G__7574 = c__4319__auto___7572;
var G__7575 = cljs.core.count.call(null,c__4319__auto___7572);
var G__7576 = (0);
seq__7542_7561 = G__7573;
chunk__7543_7562 = G__7574;
count__7544_7563 = G__7575;
i__7545_7564 = G__7576;
continue;
}
} else
{var c_7577 = cljs.core.first.call(null,seq__7542_7571__$1);dommy.attrs.add_class_BANG_.call(null,n,c_7577);
{
var G__7578 = cljs.core.next.call(null,seq__7542_7571__$1);
var G__7579 = null;
var G__7580 = (0);
var G__7581 = (0);
seq__7542_7561 = G__7578;
chunk__7543_7562 = G__7579;
count__7544_7563 = G__7580;
i__7545_7564 = G__7581;
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
dommy.attrs.add_class_BANG_.call(null,n,v_7558);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_7557,v_7558);

}
{
var G__7582 = seq__7536_7552;
var G__7583 = chunk__7537_7553;
var G__7584 = count__7538_7554;
var G__7585 = (i__7539_7555 + (1));
seq__7536_7552 = G__7582;
chunk__7537_7553 = G__7583;
count__7538_7554 = G__7584;
i__7539_7555 = G__7585;
continue;
}
} else
{var temp__4126__auto___7586 = cljs.core.seq.call(null,seq__7536_7552);if(temp__4126__auto___7586)
{var seq__7536_7587__$1 = temp__4126__auto___7586;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7536_7587__$1))
{var c__4319__auto___7588 = cljs.core.chunk_first.call(null,seq__7536_7587__$1);{
var G__7589 = cljs.core.chunk_rest.call(null,seq__7536_7587__$1);
var G__7590 = c__4319__auto___7588;
var G__7591 = cljs.core.count.call(null,c__4319__auto___7588);
var G__7592 = (0);
seq__7536_7552 = G__7589;
chunk__7537_7553 = G__7590;
count__7538_7554 = G__7591;
i__7539_7555 = G__7592;
continue;
}
} else
{var vec__7546_7593 = cljs.core.first.call(null,seq__7536_7587__$1);var k_7594 = cljs.core.nth.call(null,vec__7546_7593,(0),null);var v_7595 = cljs.core.nth.call(null,vec__7546_7593,(1),null);var G__7547_7596 = (((k_7594 instanceof cljs.core.Keyword))?k_7594.fqn:null);switch (G__7547_7596) {
case "classes":
var seq__7548_7598 = cljs.core.seq.call(null,v_7595);var chunk__7549_7599 = null;var count__7550_7600 = (0);var i__7551_7601 = (0);while(true){
if((i__7551_7601 < count__7550_7600))
{var c_7602 = cljs.core._nth.call(null,chunk__7549_7599,i__7551_7601);dommy.attrs.add_class_BANG_.call(null,n,c_7602);
{
var G__7603 = seq__7548_7598;
var G__7604 = chunk__7549_7599;
var G__7605 = count__7550_7600;
var G__7606 = (i__7551_7601 + (1));
seq__7548_7598 = G__7603;
chunk__7549_7599 = G__7604;
count__7550_7600 = G__7605;
i__7551_7601 = G__7606;
continue;
}
} else
{var temp__4126__auto___7607__$1 = cljs.core.seq.call(null,seq__7548_7598);if(temp__4126__auto___7607__$1)
{var seq__7548_7608__$1 = temp__4126__auto___7607__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7548_7608__$1))
{var c__4319__auto___7609 = cljs.core.chunk_first.call(null,seq__7548_7608__$1);{
var G__7610 = cljs.core.chunk_rest.call(null,seq__7548_7608__$1);
var G__7611 = c__4319__auto___7609;
var G__7612 = cljs.core.count.call(null,c__4319__auto___7609);
var G__7613 = (0);
seq__7548_7598 = G__7610;
chunk__7549_7599 = G__7611;
count__7550_7600 = G__7612;
i__7551_7601 = G__7613;
continue;
}
} else
{var c_7614 = cljs.core.first.call(null,seq__7548_7608__$1);dommy.attrs.add_class_BANG_.call(null,n,c_7614);
{
var G__7615 = cljs.core.next.call(null,seq__7548_7608__$1);
var G__7616 = null;
var G__7617 = (0);
var G__7618 = (0);
seq__7548_7598 = G__7615;
chunk__7549_7599 = G__7616;
count__7550_7600 = G__7617;
i__7551_7601 = G__7618;
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
dommy.attrs.add_class_BANG_.call(null,n,v_7595);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_7594,v_7595);

}
{
var G__7619 = cljs.core.next.call(null,seq__7536_7587__$1);
var G__7620 = null;
var G__7621 = (0);
var G__7622 = (0);
seq__7536_7552 = G__7619;
chunk__7537_7553 = G__7620;
count__7538_7554 = G__7621;
i__7539_7555 = G__7622;
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
}catch (e7623){if((e7623 instanceof ReferenceError))
{var __7624 = e7623;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e7623;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__7626 = data;if(G__7626)
{var bit__4213__auto__ = null;if(cljs.core.truth_((function (){var or__3563__auto__ = bit__4213__auto__;if(cljs.core.truth_(or__3563__auto__))
{return or__3563__auto__;
} else
{return G__7626.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__7626.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7626);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__7626);
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