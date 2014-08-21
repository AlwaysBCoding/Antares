// Compiled by ClojureScript 0.0-2277
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj15637 = {};return obj15637;
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
{var str_15640 = node_str.substring(base_idx);while(true){
var next_idx_15641 = dommy.template.next_css_index.call(null,str_15640,(1));var frag_15642 = (((next_idx_15641 >= (0)))?str_15640.substring((0),next_idx_15641):str_15640);var G__15639_15643 = frag_15642.charAt((0));switch (G__15639_15643) {
case ".":
dommy.attrs.add_class_BANG_.call(null,node,frag_15642.substring((1)));

break;
case "#":
node.setAttribute("id",frag_15642.substring((1)));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frag_15642.charAt((0))))));

}
if((next_idx_15641 >= (0)))
{{
var G__15645 = str_15640.substring(next_idx_15641);
str_15640 = G__15645;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__15651 = data;if(G__15651)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__15651.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__15651.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__15651);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__15651);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__15652_15656 = cljs.core.seq.call(null,data);var chunk__15653_15657 = null;var count__15654_15658 = (0);var i__15655_15659 = (0);while(true){
if((i__15655_15659 < count__15654_15658))
{var child_15660 = cljs.core._nth.call(null,chunk__15653_15657,i__15655_15659);__GT_document_fragment.call(null,result_frag,child_15660);
{
var G__15661 = seq__15652_15656;
var G__15662 = chunk__15653_15657;
var G__15663 = count__15654_15658;
var G__15664 = (i__15655_15659 + (1));
seq__15652_15656 = G__15661;
chunk__15653_15657 = G__15662;
count__15654_15658 = G__15663;
i__15655_15659 = G__15664;
continue;
}
} else
{var temp__4126__auto___15665 = cljs.core.seq.call(null,seq__15652_15656);if(temp__4126__auto___15665)
{var seq__15652_15666__$1 = temp__4126__auto___15665;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15652_15666__$1))
{var c__4299__auto___15667 = cljs.core.chunk_first.call(null,seq__15652_15666__$1);{
var G__15668 = cljs.core.chunk_rest.call(null,seq__15652_15666__$1);
var G__15669 = c__4299__auto___15667;
var G__15670 = cljs.core.count.call(null,c__4299__auto___15667);
var G__15671 = (0);
seq__15652_15656 = G__15668;
chunk__15653_15657 = G__15669;
count__15654_15658 = G__15670;
i__15655_15659 = G__15671;
continue;
}
} else
{var child_15672 = cljs.core.first.call(null,seq__15652_15666__$1);__GT_document_fragment.call(null,result_frag,child_15672);
{
var G__15673 = cljs.core.next.call(null,seq__15652_15666__$1);
var G__15674 = null;
var G__15675 = (0);
var G__15676 = (0);
seq__15652_15656 = G__15673;
chunk__15653_15657 = G__15674;
count__15654_15658 = G__15675;
i__15655_15659 = G__15676;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__15678 = data;if(G__15678)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__15678.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__15678.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__15678);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__15678);
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
dommy.template.compound_element = (function compound_element(p__15679){var vec__15699 = p__15679;var tag_name = cljs.core.nth.call(null,vec__15699,(0),null);var maybe_attrs = cljs.core.nth.call(null,vec__15699,(1),null);var children = cljs.core.nthnext.call(null,vec__15699,(2));var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__15701 = maybe_attrs;if(G__15701)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__15701.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__15701.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__15701);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__15701);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__15702_15718 = cljs.core.seq.call(null,attrs);var chunk__15703_15719 = null;var count__15704_15720 = (0);var i__15705_15721 = (0);while(true){
if((i__15705_15721 < count__15704_15720))
{var vec__15706_15722 = cljs.core._nth.call(null,chunk__15703_15719,i__15705_15721);var k_15723 = cljs.core.nth.call(null,vec__15706_15722,(0),null);var v_15724 = cljs.core.nth.call(null,vec__15706_15722,(1),null);var G__15707_15725 = (((k_15723 instanceof cljs.core.Keyword))?k_15723.fqn:null);switch (G__15707_15725) {
case "classes":
var seq__15708_15727 = cljs.core.seq.call(null,v_15724);var chunk__15709_15728 = null;var count__15710_15729 = (0);var i__15711_15730 = (0);while(true){
if((i__15711_15730 < count__15710_15729))
{var c_15731 = cljs.core._nth.call(null,chunk__15709_15728,i__15711_15730);dommy.attrs.add_class_BANG_.call(null,n,c_15731);
{
var G__15732 = seq__15708_15727;
var G__15733 = chunk__15709_15728;
var G__15734 = count__15710_15729;
var G__15735 = (i__15711_15730 + (1));
seq__15708_15727 = G__15732;
chunk__15709_15728 = G__15733;
count__15710_15729 = G__15734;
i__15711_15730 = G__15735;
continue;
}
} else
{var temp__4126__auto___15736 = cljs.core.seq.call(null,seq__15708_15727);if(temp__4126__auto___15736)
{var seq__15708_15737__$1 = temp__4126__auto___15736;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15708_15737__$1))
{var c__4299__auto___15738 = cljs.core.chunk_first.call(null,seq__15708_15737__$1);{
var G__15739 = cljs.core.chunk_rest.call(null,seq__15708_15737__$1);
var G__15740 = c__4299__auto___15738;
var G__15741 = cljs.core.count.call(null,c__4299__auto___15738);
var G__15742 = (0);
seq__15708_15727 = G__15739;
chunk__15709_15728 = G__15740;
count__15710_15729 = G__15741;
i__15711_15730 = G__15742;
continue;
}
} else
{var c_15743 = cljs.core.first.call(null,seq__15708_15737__$1);dommy.attrs.add_class_BANG_.call(null,n,c_15743);
{
var G__15744 = cljs.core.next.call(null,seq__15708_15737__$1);
var G__15745 = null;
var G__15746 = (0);
var G__15747 = (0);
seq__15708_15727 = G__15744;
chunk__15709_15728 = G__15745;
count__15710_15729 = G__15746;
i__15711_15730 = G__15747;
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
dommy.attrs.add_class_BANG_.call(null,n,v_15724);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_15723,v_15724);

}
{
var G__15748 = seq__15702_15718;
var G__15749 = chunk__15703_15719;
var G__15750 = count__15704_15720;
var G__15751 = (i__15705_15721 + (1));
seq__15702_15718 = G__15748;
chunk__15703_15719 = G__15749;
count__15704_15720 = G__15750;
i__15705_15721 = G__15751;
continue;
}
} else
{var temp__4126__auto___15752 = cljs.core.seq.call(null,seq__15702_15718);if(temp__4126__auto___15752)
{var seq__15702_15753__$1 = temp__4126__auto___15752;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15702_15753__$1))
{var c__4299__auto___15754 = cljs.core.chunk_first.call(null,seq__15702_15753__$1);{
var G__15755 = cljs.core.chunk_rest.call(null,seq__15702_15753__$1);
var G__15756 = c__4299__auto___15754;
var G__15757 = cljs.core.count.call(null,c__4299__auto___15754);
var G__15758 = (0);
seq__15702_15718 = G__15755;
chunk__15703_15719 = G__15756;
count__15704_15720 = G__15757;
i__15705_15721 = G__15758;
continue;
}
} else
{var vec__15712_15759 = cljs.core.first.call(null,seq__15702_15753__$1);var k_15760 = cljs.core.nth.call(null,vec__15712_15759,(0),null);var v_15761 = cljs.core.nth.call(null,vec__15712_15759,(1),null);var G__15713_15762 = (((k_15760 instanceof cljs.core.Keyword))?k_15760.fqn:null);switch (G__15713_15762) {
case "classes":
var seq__15714_15764 = cljs.core.seq.call(null,v_15761);var chunk__15715_15765 = null;var count__15716_15766 = (0);var i__15717_15767 = (0);while(true){
if((i__15717_15767 < count__15716_15766))
{var c_15768 = cljs.core._nth.call(null,chunk__15715_15765,i__15717_15767);dommy.attrs.add_class_BANG_.call(null,n,c_15768);
{
var G__15769 = seq__15714_15764;
var G__15770 = chunk__15715_15765;
var G__15771 = count__15716_15766;
var G__15772 = (i__15717_15767 + (1));
seq__15714_15764 = G__15769;
chunk__15715_15765 = G__15770;
count__15716_15766 = G__15771;
i__15717_15767 = G__15772;
continue;
}
} else
{var temp__4126__auto___15773__$1 = cljs.core.seq.call(null,seq__15714_15764);if(temp__4126__auto___15773__$1)
{var seq__15714_15774__$1 = temp__4126__auto___15773__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15714_15774__$1))
{var c__4299__auto___15775 = cljs.core.chunk_first.call(null,seq__15714_15774__$1);{
var G__15776 = cljs.core.chunk_rest.call(null,seq__15714_15774__$1);
var G__15777 = c__4299__auto___15775;
var G__15778 = cljs.core.count.call(null,c__4299__auto___15775);
var G__15779 = (0);
seq__15714_15764 = G__15776;
chunk__15715_15765 = G__15777;
count__15716_15766 = G__15778;
i__15717_15767 = G__15779;
continue;
}
} else
{var c_15780 = cljs.core.first.call(null,seq__15714_15774__$1);dommy.attrs.add_class_BANG_.call(null,n,c_15780);
{
var G__15781 = cljs.core.next.call(null,seq__15714_15774__$1);
var G__15782 = null;
var G__15783 = (0);
var G__15784 = (0);
seq__15714_15764 = G__15781;
chunk__15715_15765 = G__15782;
count__15716_15766 = G__15783;
i__15717_15767 = G__15784;
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
dommy.attrs.add_class_BANG_.call(null,n,v_15761);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_15760,v_15761);

}
{
var G__15785 = cljs.core.next.call(null,seq__15702_15753__$1);
var G__15786 = null;
var G__15787 = (0);
var G__15788 = (0);
seq__15702_15718 = G__15785;
chunk__15703_15719 = G__15786;
count__15704_15720 = G__15787;
i__15705_15721 = G__15788;
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
}catch (e15789){if((e15789 instanceof ReferenceError))
{var __15790 = e15789;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15789;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__15792 = data;if(G__15792)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__15792.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__15792.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__15792);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__15792);
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