// Compiled by ClojureScript 0.0-2277
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj10220 = {};return obj10220;
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
{var str_10223 = node_str.substring(base_idx);while(true){
var next_idx_10224 = dommy.template.next_css_index.call(null,str_10223,(1));var frag_10225 = (((next_idx_10224 >= (0)))?str_10223.substring((0),next_idx_10224):str_10223);var G__10222_10226 = frag_10225.charAt((0));switch (G__10222_10226) {
case ".":
dommy.attrs.add_class_BANG_.call(null,node,frag_10225.substring((1)));

break;
case "#":
node.setAttribute("id",frag_10225.substring((1)));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frag_10225.charAt((0))))));

}
if((next_idx_10224 >= (0)))
{{
var G__10228 = str_10223.substring(next_idx_10224);
str_10223 = G__10228;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__10234 = data;if(G__10234)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__10234.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__10234.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__10234);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__10234);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__10235_10239 = cljs.core.seq.call(null,data);var chunk__10236_10240 = null;var count__10237_10241 = (0);var i__10238_10242 = (0);while(true){
if((i__10238_10242 < count__10237_10241))
{var child_10243 = cljs.core._nth.call(null,chunk__10236_10240,i__10238_10242);__GT_document_fragment.call(null,result_frag,child_10243);
{
var G__10244 = seq__10235_10239;
var G__10245 = chunk__10236_10240;
var G__10246 = count__10237_10241;
var G__10247 = (i__10238_10242 + (1));
seq__10235_10239 = G__10244;
chunk__10236_10240 = G__10245;
count__10237_10241 = G__10246;
i__10238_10242 = G__10247;
continue;
}
} else
{var temp__4126__auto___10248 = cljs.core.seq.call(null,seq__10235_10239);if(temp__4126__auto___10248)
{var seq__10235_10249__$1 = temp__4126__auto___10248;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10235_10249__$1))
{var c__4299__auto___10250 = cljs.core.chunk_first.call(null,seq__10235_10249__$1);{
var G__10251 = cljs.core.chunk_rest.call(null,seq__10235_10249__$1);
var G__10252 = c__4299__auto___10250;
var G__10253 = cljs.core.count.call(null,c__4299__auto___10250);
var G__10254 = (0);
seq__10235_10239 = G__10251;
chunk__10236_10240 = G__10252;
count__10237_10241 = G__10253;
i__10238_10242 = G__10254;
continue;
}
} else
{var child_10255 = cljs.core.first.call(null,seq__10235_10249__$1);__GT_document_fragment.call(null,result_frag,child_10255);
{
var G__10256 = cljs.core.next.call(null,seq__10235_10249__$1);
var G__10257 = null;
var G__10258 = (0);
var G__10259 = (0);
seq__10235_10239 = G__10256;
chunk__10236_10240 = G__10257;
count__10237_10241 = G__10258;
i__10238_10242 = G__10259;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__10261 = data;if(G__10261)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__10261.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__10261.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__10261);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__10261);
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
dommy.template.compound_element = (function compound_element(p__10262){var vec__10282 = p__10262;var tag_name = cljs.core.nth.call(null,vec__10282,(0),null);var maybe_attrs = cljs.core.nth.call(null,vec__10282,(1),null);var children = cljs.core.nthnext.call(null,vec__10282,(2));var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__10284 = maybe_attrs;if(G__10284)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__10284.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__10284.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__10284);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__10284);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__10285_10301 = cljs.core.seq.call(null,attrs);var chunk__10286_10302 = null;var count__10287_10303 = (0);var i__10288_10304 = (0);while(true){
if((i__10288_10304 < count__10287_10303))
{var vec__10289_10305 = cljs.core._nth.call(null,chunk__10286_10302,i__10288_10304);var k_10306 = cljs.core.nth.call(null,vec__10289_10305,(0),null);var v_10307 = cljs.core.nth.call(null,vec__10289_10305,(1),null);var G__10290_10308 = (((k_10306 instanceof cljs.core.Keyword))?k_10306.fqn:null);switch (G__10290_10308) {
case "classes":
var seq__10291_10310 = cljs.core.seq.call(null,v_10307);var chunk__10292_10311 = null;var count__10293_10312 = (0);var i__10294_10313 = (0);while(true){
if((i__10294_10313 < count__10293_10312))
{var c_10314 = cljs.core._nth.call(null,chunk__10292_10311,i__10294_10313);dommy.attrs.add_class_BANG_.call(null,n,c_10314);
{
var G__10315 = seq__10291_10310;
var G__10316 = chunk__10292_10311;
var G__10317 = count__10293_10312;
var G__10318 = (i__10294_10313 + (1));
seq__10291_10310 = G__10315;
chunk__10292_10311 = G__10316;
count__10293_10312 = G__10317;
i__10294_10313 = G__10318;
continue;
}
} else
{var temp__4126__auto___10319 = cljs.core.seq.call(null,seq__10291_10310);if(temp__4126__auto___10319)
{var seq__10291_10320__$1 = temp__4126__auto___10319;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10291_10320__$1))
{var c__4299__auto___10321 = cljs.core.chunk_first.call(null,seq__10291_10320__$1);{
var G__10322 = cljs.core.chunk_rest.call(null,seq__10291_10320__$1);
var G__10323 = c__4299__auto___10321;
var G__10324 = cljs.core.count.call(null,c__4299__auto___10321);
var G__10325 = (0);
seq__10291_10310 = G__10322;
chunk__10292_10311 = G__10323;
count__10293_10312 = G__10324;
i__10294_10313 = G__10325;
continue;
}
} else
{var c_10326 = cljs.core.first.call(null,seq__10291_10320__$1);dommy.attrs.add_class_BANG_.call(null,n,c_10326);
{
var G__10327 = cljs.core.next.call(null,seq__10291_10320__$1);
var G__10328 = null;
var G__10329 = (0);
var G__10330 = (0);
seq__10291_10310 = G__10327;
chunk__10292_10311 = G__10328;
count__10293_10312 = G__10329;
i__10294_10313 = G__10330;
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
dommy.attrs.add_class_BANG_.call(null,n,v_10307);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_10306,v_10307);

}
{
var G__10331 = seq__10285_10301;
var G__10332 = chunk__10286_10302;
var G__10333 = count__10287_10303;
var G__10334 = (i__10288_10304 + (1));
seq__10285_10301 = G__10331;
chunk__10286_10302 = G__10332;
count__10287_10303 = G__10333;
i__10288_10304 = G__10334;
continue;
}
} else
{var temp__4126__auto___10335 = cljs.core.seq.call(null,seq__10285_10301);if(temp__4126__auto___10335)
{var seq__10285_10336__$1 = temp__4126__auto___10335;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10285_10336__$1))
{var c__4299__auto___10337 = cljs.core.chunk_first.call(null,seq__10285_10336__$1);{
var G__10338 = cljs.core.chunk_rest.call(null,seq__10285_10336__$1);
var G__10339 = c__4299__auto___10337;
var G__10340 = cljs.core.count.call(null,c__4299__auto___10337);
var G__10341 = (0);
seq__10285_10301 = G__10338;
chunk__10286_10302 = G__10339;
count__10287_10303 = G__10340;
i__10288_10304 = G__10341;
continue;
}
} else
{var vec__10295_10342 = cljs.core.first.call(null,seq__10285_10336__$1);var k_10343 = cljs.core.nth.call(null,vec__10295_10342,(0),null);var v_10344 = cljs.core.nth.call(null,vec__10295_10342,(1),null);var G__10296_10345 = (((k_10343 instanceof cljs.core.Keyword))?k_10343.fqn:null);switch (G__10296_10345) {
case "classes":
var seq__10297_10347 = cljs.core.seq.call(null,v_10344);var chunk__10298_10348 = null;var count__10299_10349 = (0);var i__10300_10350 = (0);while(true){
if((i__10300_10350 < count__10299_10349))
{var c_10351 = cljs.core._nth.call(null,chunk__10298_10348,i__10300_10350);dommy.attrs.add_class_BANG_.call(null,n,c_10351);
{
var G__10352 = seq__10297_10347;
var G__10353 = chunk__10298_10348;
var G__10354 = count__10299_10349;
var G__10355 = (i__10300_10350 + (1));
seq__10297_10347 = G__10352;
chunk__10298_10348 = G__10353;
count__10299_10349 = G__10354;
i__10300_10350 = G__10355;
continue;
}
} else
{var temp__4126__auto___10356__$1 = cljs.core.seq.call(null,seq__10297_10347);if(temp__4126__auto___10356__$1)
{var seq__10297_10357__$1 = temp__4126__auto___10356__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10297_10357__$1))
{var c__4299__auto___10358 = cljs.core.chunk_first.call(null,seq__10297_10357__$1);{
var G__10359 = cljs.core.chunk_rest.call(null,seq__10297_10357__$1);
var G__10360 = c__4299__auto___10358;
var G__10361 = cljs.core.count.call(null,c__4299__auto___10358);
var G__10362 = (0);
seq__10297_10347 = G__10359;
chunk__10298_10348 = G__10360;
count__10299_10349 = G__10361;
i__10300_10350 = G__10362;
continue;
}
} else
{var c_10363 = cljs.core.first.call(null,seq__10297_10357__$1);dommy.attrs.add_class_BANG_.call(null,n,c_10363);
{
var G__10364 = cljs.core.next.call(null,seq__10297_10357__$1);
var G__10365 = null;
var G__10366 = (0);
var G__10367 = (0);
seq__10297_10347 = G__10364;
chunk__10298_10348 = G__10365;
count__10299_10349 = G__10366;
i__10300_10350 = G__10367;
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
dommy.attrs.add_class_BANG_.call(null,n,v_10344);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_10343,v_10344);

}
{
var G__10368 = cljs.core.next.call(null,seq__10285_10336__$1);
var G__10369 = null;
var G__10370 = (0);
var G__10371 = (0);
seq__10285_10301 = G__10368;
chunk__10286_10302 = G__10369;
count__10287_10303 = G__10370;
i__10288_10304 = G__10371;
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
}catch (e10372){if((e10372 instanceof ReferenceError))
{var __10373 = e10372;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10372;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__10375 = data;if(G__10375)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__10375.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__10375.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__10375);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__10375);
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