// Compiled by ClojureScript 0.0-2277
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj37906 = {};return obj37906;
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
{var str_37909 = node_str.substring(base_idx);while(true){
var next_idx_37910 = dommy.template.next_css_index.call(null,str_37909,(1));var frag_37911 = (((next_idx_37910 >= (0)))?str_37909.substring((0),next_idx_37910):str_37909);var G__37908_37912 = frag_37911.charAt((0));switch (G__37908_37912) {
case ".":
dommy.attrs.add_class_BANG_.call(null,node,frag_37911.substring((1)));

break;
case "#":
node.setAttribute("id",frag_37911.substring((1)));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frag_37911.charAt((0))))));

}
if((next_idx_37910 >= (0)))
{{
var G__37914 = str_37909.substring(next_idx_37910);
str_37909 = G__37914;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__37920 = data;if(G__37920)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__37920.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__37920.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__37920);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__37920);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__37921_37925 = cljs.core.seq.call(null,data);var chunk__37922_37926 = null;var count__37923_37927 = (0);var i__37924_37928 = (0);while(true){
if((i__37924_37928 < count__37923_37927))
{var child_37929 = cljs.core._nth.call(null,chunk__37922_37926,i__37924_37928);__GT_document_fragment.call(null,result_frag,child_37929);
{
var G__37930 = seq__37921_37925;
var G__37931 = chunk__37922_37926;
var G__37932 = count__37923_37927;
var G__37933 = (i__37924_37928 + (1));
seq__37921_37925 = G__37930;
chunk__37922_37926 = G__37931;
count__37923_37927 = G__37932;
i__37924_37928 = G__37933;
continue;
}
} else
{var temp__4126__auto___37934 = cljs.core.seq.call(null,seq__37921_37925);if(temp__4126__auto___37934)
{var seq__37921_37935__$1 = temp__4126__auto___37934;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37921_37935__$1))
{var c__4299__auto___37936 = cljs.core.chunk_first.call(null,seq__37921_37935__$1);{
var G__37937 = cljs.core.chunk_rest.call(null,seq__37921_37935__$1);
var G__37938 = c__4299__auto___37936;
var G__37939 = cljs.core.count.call(null,c__4299__auto___37936);
var G__37940 = (0);
seq__37921_37925 = G__37937;
chunk__37922_37926 = G__37938;
count__37923_37927 = G__37939;
i__37924_37928 = G__37940;
continue;
}
} else
{var child_37941 = cljs.core.first.call(null,seq__37921_37935__$1);__GT_document_fragment.call(null,result_frag,child_37941);
{
var G__37942 = cljs.core.next.call(null,seq__37921_37935__$1);
var G__37943 = null;
var G__37944 = (0);
var G__37945 = (0);
seq__37921_37925 = G__37942;
chunk__37922_37926 = G__37943;
count__37923_37927 = G__37944;
i__37924_37928 = G__37945;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__37947 = data;if(G__37947)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__37947.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__37947.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__37947);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__37947);
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
dommy.template.compound_element = (function compound_element(p__37948){var vec__37968 = p__37948;var tag_name = cljs.core.nth.call(null,vec__37968,(0),null);var maybe_attrs = cljs.core.nth.call(null,vec__37968,(1),null);var children = cljs.core.nthnext.call(null,vec__37968,(2));var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__37970 = maybe_attrs;if(G__37970)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__37970.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__37970.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__37970);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__37970);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__37971_37987 = cljs.core.seq.call(null,attrs);var chunk__37972_37988 = null;var count__37973_37989 = (0);var i__37974_37990 = (0);while(true){
if((i__37974_37990 < count__37973_37989))
{var vec__37975_37991 = cljs.core._nth.call(null,chunk__37972_37988,i__37974_37990);var k_37992 = cljs.core.nth.call(null,vec__37975_37991,(0),null);var v_37993 = cljs.core.nth.call(null,vec__37975_37991,(1),null);var G__37976_37994 = (((k_37992 instanceof cljs.core.Keyword))?k_37992.fqn:null);switch (G__37976_37994) {
case "classes":
var seq__37977_37996 = cljs.core.seq.call(null,v_37993);var chunk__37978_37997 = null;var count__37979_37998 = (0);var i__37980_37999 = (0);while(true){
if((i__37980_37999 < count__37979_37998))
{var c_38000 = cljs.core._nth.call(null,chunk__37978_37997,i__37980_37999);dommy.attrs.add_class_BANG_.call(null,n,c_38000);
{
var G__38001 = seq__37977_37996;
var G__38002 = chunk__37978_37997;
var G__38003 = count__37979_37998;
var G__38004 = (i__37980_37999 + (1));
seq__37977_37996 = G__38001;
chunk__37978_37997 = G__38002;
count__37979_37998 = G__38003;
i__37980_37999 = G__38004;
continue;
}
} else
{var temp__4126__auto___38005 = cljs.core.seq.call(null,seq__37977_37996);if(temp__4126__auto___38005)
{var seq__37977_38006__$1 = temp__4126__auto___38005;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37977_38006__$1))
{var c__4299__auto___38007 = cljs.core.chunk_first.call(null,seq__37977_38006__$1);{
var G__38008 = cljs.core.chunk_rest.call(null,seq__37977_38006__$1);
var G__38009 = c__4299__auto___38007;
var G__38010 = cljs.core.count.call(null,c__4299__auto___38007);
var G__38011 = (0);
seq__37977_37996 = G__38008;
chunk__37978_37997 = G__38009;
count__37979_37998 = G__38010;
i__37980_37999 = G__38011;
continue;
}
} else
{var c_38012 = cljs.core.first.call(null,seq__37977_38006__$1);dommy.attrs.add_class_BANG_.call(null,n,c_38012);
{
var G__38013 = cljs.core.next.call(null,seq__37977_38006__$1);
var G__38014 = null;
var G__38015 = (0);
var G__38016 = (0);
seq__37977_37996 = G__38013;
chunk__37978_37997 = G__38014;
count__37979_37998 = G__38015;
i__37980_37999 = G__38016;
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
dommy.attrs.add_class_BANG_.call(null,n,v_37993);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_37992,v_37993);

}
{
var G__38017 = seq__37971_37987;
var G__38018 = chunk__37972_37988;
var G__38019 = count__37973_37989;
var G__38020 = (i__37974_37990 + (1));
seq__37971_37987 = G__38017;
chunk__37972_37988 = G__38018;
count__37973_37989 = G__38019;
i__37974_37990 = G__38020;
continue;
}
} else
{var temp__4126__auto___38021 = cljs.core.seq.call(null,seq__37971_37987);if(temp__4126__auto___38021)
{var seq__37971_38022__$1 = temp__4126__auto___38021;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37971_38022__$1))
{var c__4299__auto___38023 = cljs.core.chunk_first.call(null,seq__37971_38022__$1);{
var G__38024 = cljs.core.chunk_rest.call(null,seq__37971_38022__$1);
var G__38025 = c__4299__auto___38023;
var G__38026 = cljs.core.count.call(null,c__4299__auto___38023);
var G__38027 = (0);
seq__37971_37987 = G__38024;
chunk__37972_37988 = G__38025;
count__37973_37989 = G__38026;
i__37974_37990 = G__38027;
continue;
}
} else
{var vec__37981_38028 = cljs.core.first.call(null,seq__37971_38022__$1);var k_38029 = cljs.core.nth.call(null,vec__37981_38028,(0),null);var v_38030 = cljs.core.nth.call(null,vec__37981_38028,(1),null);var G__37982_38031 = (((k_38029 instanceof cljs.core.Keyword))?k_38029.fqn:null);switch (G__37982_38031) {
case "classes":
var seq__37983_38033 = cljs.core.seq.call(null,v_38030);var chunk__37984_38034 = null;var count__37985_38035 = (0);var i__37986_38036 = (0);while(true){
if((i__37986_38036 < count__37985_38035))
{var c_38037 = cljs.core._nth.call(null,chunk__37984_38034,i__37986_38036);dommy.attrs.add_class_BANG_.call(null,n,c_38037);
{
var G__38038 = seq__37983_38033;
var G__38039 = chunk__37984_38034;
var G__38040 = count__37985_38035;
var G__38041 = (i__37986_38036 + (1));
seq__37983_38033 = G__38038;
chunk__37984_38034 = G__38039;
count__37985_38035 = G__38040;
i__37986_38036 = G__38041;
continue;
}
} else
{var temp__4126__auto___38042__$1 = cljs.core.seq.call(null,seq__37983_38033);if(temp__4126__auto___38042__$1)
{var seq__37983_38043__$1 = temp__4126__auto___38042__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37983_38043__$1))
{var c__4299__auto___38044 = cljs.core.chunk_first.call(null,seq__37983_38043__$1);{
var G__38045 = cljs.core.chunk_rest.call(null,seq__37983_38043__$1);
var G__38046 = c__4299__auto___38044;
var G__38047 = cljs.core.count.call(null,c__4299__auto___38044);
var G__38048 = (0);
seq__37983_38033 = G__38045;
chunk__37984_38034 = G__38046;
count__37985_38035 = G__38047;
i__37986_38036 = G__38048;
continue;
}
} else
{var c_38049 = cljs.core.first.call(null,seq__37983_38043__$1);dommy.attrs.add_class_BANG_.call(null,n,c_38049);
{
var G__38050 = cljs.core.next.call(null,seq__37983_38043__$1);
var G__38051 = null;
var G__38052 = (0);
var G__38053 = (0);
seq__37983_38033 = G__38050;
chunk__37984_38034 = G__38051;
count__37985_38035 = G__38052;
i__37986_38036 = G__38053;
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
dommy.attrs.add_class_BANG_.call(null,n,v_38030);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_38029,v_38030);

}
{
var G__38054 = cljs.core.next.call(null,seq__37971_38022__$1);
var G__38055 = null;
var G__38056 = (0);
var G__38057 = (0);
seq__37971_37987 = G__38054;
chunk__37972_37988 = G__38055;
count__37973_37989 = G__38056;
i__37974_37990 = G__38057;
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
}catch (e38058){if((e38058 instanceof ReferenceError))
{var __38059 = e38058;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e38058;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__38061 = data;if(G__38061)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__38061.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__38061.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__38061);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__38061);
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