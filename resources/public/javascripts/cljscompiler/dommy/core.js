// Compiled by ClojureScript 0.0-2277
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.toggle_attr_BANG_ = dommy.attrs.toggle_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.scroll_into_view = dommy.attrs.scroll_into_view;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var or__3543__auto__ = elem.textContent;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return elem.innerText;
}
});
dommy.core.value = (function value(elem){return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.value = value;
return elem__$1;
});
/**
* append `child` to `parent`. 'parent' and 'child' should be node-like
* (work with dommy.template/->node-like). The node-like projection
* of parent is returned after appending child.
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__14959 = dommy.template.__GT_node_like.call(null,parent);G__14959.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__14959;
});
var append_BANG___3 = (function() { 
var G__14964__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__14960_14965 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__14961_14966 = null;var count__14962_14967 = (0);var i__14963_14968 = (0);while(true){
if((i__14963_14968 < count__14962_14967))
{var c_14969 = cljs.core._nth.call(null,chunk__14961_14966,i__14963_14968);append_BANG_.call(null,parent__$1,c_14969);
{
var G__14970 = seq__14960_14965;
var G__14971 = chunk__14961_14966;
var G__14972 = count__14962_14967;
var G__14973 = (i__14963_14968 + (1));
seq__14960_14965 = G__14970;
chunk__14961_14966 = G__14971;
count__14962_14967 = G__14972;
i__14963_14968 = G__14973;
continue;
}
} else
{var temp__4126__auto___14974 = cljs.core.seq.call(null,seq__14960_14965);if(temp__4126__auto___14974)
{var seq__14960_14975__$1 = temp__4126__auto___14974;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14960_14975__$1))
{var c__4299__auto___14976 = cljs.core.chunk_first.call(null,seq__14960_14975__$1);{
var G__14977 = cljs.core.chunk_rest.call(null,seq__14960_14975__$1);
var G__14978 = c__4299__auto___14976;
var G__14979 = cljs.core.count.call(null,c__4299__auto___14976);
var G__14980 = (0);
seq__14960_14965 = G__14977;
chunk__14961_14966 = G__14978;
count__14962_14967 = G__14979;
i__14963_14968 = G__14980;
continue;
}
} else
{var c_14981 = cljs.core.first.call(null,seq__14960_14975__$1);append_BANG_.call(null,parent__$1,c_14981);
{
var G__14982 = cljs.core.next.call(null,seq__14960_14975__$1);
var G__14983 = null;
var G__14984 = (0);
var G__14985 = (0);
seq__14960_14965 = G__14982;
chunk__14961_14966 = G__14983;
count__14962_14967 = G__14984;
i__14963_14968 = G__14985;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__14964 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14964__delegate.call(this,parent,child,more_children);};
G__14964.cljs$lang$maxFixedArity = 2;
G__14964.cljs$lang$applyTo = (function (arglist__14986){
var parent = cljs.core.first(arglist__14986);
arglist__14986 = cljs.core.next(arglist__14986);
var child = cljs.core.first(arglist__14986);
var more_children = cljs.core.rest(arglist__14986);
return G__14964__delegate(parent,child,more_children);
});
G__14964.cljs$core$IFn$_invoke$arity$variadic = G__14964__delegate;
return G__14964;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* prepend `child` to `parent`, both node-like
* return ->node-like projection of `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);return parent__$1.insertBefore(dommy.template.__GT_node_like.call(null,child),parent__$1.firstChild);
});
var prepend_BANG___3 = (function() { 
var G__14995__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__14991_14996 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__14992_14997 = null;var count__14993_14998 = (0);var i__14994_14999 = (0);while(true){
if((i__14994_14999 < count__14993_14998))
{var c_15000 = cljs.core._nth.call(null,chunk__14992_14997,i__14994_14999);prepend_BANG_.call(null,parent__$1,c_15000);
{
var G__15001 = seq__14991_14996;
var G__15002 = chunk__14992_14997;
var G__15003 = count__14993_14998;
var G__15004 = (i__14994_14999 + (1));
seq__14991_14996 = G__15001;
chunk__14992_14997 = G__15002;
count__14993_14998 = G__15003;
i__14994_14999 = G__15004;
continue;
}
} else
{var temp__4126__auto___15005 = cljs.core.seq.call(null,seq__14991_14996);if(temp__4126__auto___15005)
{var seq__14991_15006__$1 = temp__4126__auto___15005;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14991_15006__$1))
{var c__4299__auto___15007 = cljs.core.chunk_first.call(null,seq__14991_15006__$1);{
var G__15008 = cljs.core.chunk_rest.call(null,seq__14991_15006__$1);
var G__15009 = c__4299__auto___15007;
var G__15010 = cljs.core.count.call(null,c__4299__auto___15007);
var G__15011 = (0);
seq__14991_14996 = G__15008;
chunk__14992_14997 = G__15009;
count__14993_14998 = G__15010;
i__14994_14999 = G__15011;
continue;
}
} else
{var c_15012 = cljs.core.first.call(null,seq__14991_15006__$1);prepend_BANG_.call(null,parent__$1,c_15012);
{
var G__15013 = cljs.core.next.call(null,seq__14991_15006__$1);
var G__15014 = null;
var G__15015 = (0);
var G__15016 = (0);
seq__14991_14996 = G__15013;
chunk__14992_14997 = G__15014;
count__14993_14998 = G__15015;
i__14994_14999 = G__15016;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__14995 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14995__delegate.call(this,parent,child,more_children);};
G__14995.cljs$lang$maxFixedArity = 2;
G__14995.cljs$lang$applyTo = (function (arglist__15017){
var parent = cljs.core.first(arglist__15017);
arglist__15017 = cljs.core.next(arglist__15017);
var child = cljs.core.first(arglist__15017);
var more_children = cljs.core.rest(arglist__15017);
return G__14995__delegate(parent,child,more_children);
});
G__14995.cljs$core$IFn$_invoke$arity$variadic = G__14995__delegate;
return G__14995;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",-1418255893,null),new cljs.core.Symbol(null,"other","other",-1658642225,null)))))));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4124__auto___15018 = other__$1.nextSibling;if(cljs.core.truth_(temp__4124__auto___15018))
{var next_15019 = temp__4124__auto___15018;parent.insertBefore(actual_node,next_15019);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var new$__$1 = dommy.template.__GT_node_like.call(null,new$);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",-1418255893,null),new cljs.core.Symbol(null,"elem","elem",-2035804713,null)))))));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__15021 = dommy.template.__GT_node_like.call(null,parent);G__15021.innerHTML = "";
dommy.core.append_BANG_.call(null,G__15021,node_like);
return G__15021;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__15023 = elem__$1.parentNode;G__15023.removeChild(elem__$1);
return G__15023;
});
/**
* clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML = "";
});
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
dommy.core.selector_map = (function selector_map(template,key_selectors_map){var container = dommy.template.__GT_node_like.call(null,template);if(!(cljs.core.contains_QMARK_.call(null,key_selectors_map,new cljs.core.Keyword(null,"container","container",-1736937707))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",1212911103,null),new cljs.core.Keyword(null,"container","container",-1736937707))))))));
}
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",-1736937707),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (container){
return (function (p__15029){var vec__15030 = p__15029;var k = cljs.core.nth.call(null,vec__15030,(0),null);var v = cljs.core.nth.call(null,vec__15030,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",-1610148039).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t15031 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t15031 = (function (v,k,vec__15030,p__15029,container,key_selectors_map,template,selector_map,meta15032){
this.v = v;
this.k = k;
this.vec__15030 = vec__15030;
this.p__15029 = p__15029;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta15032 = meta15032;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t15031.cljs$lang$type = true;
dommy.core.t15031.cljs$lang$ctorStr = "dommy.core/t15031";
dommy.core.t15031.cljs$lang$ctorPrWriter = ((function (vec__15030,k,v,container){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"dommy.core/t15031");
});})(vec__15030,k,v,container))
;
dommy.core.t15031.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__15030,k,v,container){
return (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});})(vec__15030,k,v,container))
;
dommy.core.t15031.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__15030,k,v,container){
return (function (_15033){var self__ = this;
var _15033__$1 = this;return self__.meta15032;
});})(vec__15030,k,v,container))
;
dommy.core.t15031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__15030,k,v,container){
return (function (_15033,meta15032__$1){var self__ = this;
var _15033__$1 = this;return (new dommy.core.t15031(self__.v,self__.k,self__.vec__15030,self__.p__15029,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta15032__$1));
});})(vec__15030,k,v,container))
;
dommy.core.__GT_t15031 = ((function (vec__15030,k,v,container){
return (function __GT_t15031(v__$1,k__$1,vec__15030__$1,p__15029__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta15032){return (new dommy.core.t15031(v__$1,k__$1,vec__15030__$1,p__15029__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta15032));
});})(vec__15030,k,v,container))
;
}
return (new dommy.core.t15031(v,k,vec__15030,p__15029,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
});})(container))
,key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__15034_SHARP_){return p1__15034_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));return ((function (matches){
return (function (elem){return (matches.indexOf(elem) >= (0));
});
;})(matches))
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,((function (base__$1,elem__$1){
return (function (p1__15035_SHARP_){return !((p1__15035_SHARP_ === base__$1));
});})(base__$1,elem__$1))
,dommy.core.ancestor_nodes.call(null,elem__$1))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << (4))) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__15036){var vec__15037 = p__15036;var special_mouse_event = cljs.core.nth.call(null,vec__15037,(0),null);var real_mouse_event = cljs.core.nth.call(null,vec__15037,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__15037,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__15037,special_mouse_event,real_mouse_event){
return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3543__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3531__auto__ = related_target;if(cljs.core.truth_(and__3531__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3531__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
;})(vec__15037,special_mouse_event,real_mouse_event))
});})(vec__15037,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__3531__auto__ = selected_target;if(cljs.core.truth_(and__3531__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else
{return and__3531__auto__;
}
})()))
{event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__3543__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15038){
var elem = cljs.core.first(arglist__15038);
arglist__15038 = cljs.core.next(arglist__15038);
var f = cljs.core.first(arglist__15038);
var args = cljs.core.rest(arglist__15038);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__15039_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__15039_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.template.__GT_node_like.call(null,elem_sel),null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__15063_15086 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_15087 = cljs.core.nth.call(null,vec__15063_15086,(0),null);var selector_15088 = cljs.core.nth.call(null,vec__15063_15086,(1),null);var seq__15064_15089 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__15071_15090 = null;var count__15072_15091 = (0);var i__15073_15092 = (0);while(true){
if((i__15073_15092 < count__15072_15091))
{var vec__15080_15093 = cljs.core._nth.call(null,chunk__15071_15090,i__15073_15092);var orig_type_15094 = cljs.core.nth.call(null,vec__15080_15093,(0),null);var f_15095 = cljs.core.nth.call(null,vec__15080_15093,(1),null);var seq__15074_15096 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_15094,new cljs.core.PersistentArrayMap.fromArray([orig_type_15094,cljs.core.identity], true, false)));var chunk__15076_15097 = null;var count__15077_15098 = (0);var i__15078_15099 = (0);while(true){
if((i__15078_15099 < count__15077_15098))
{var vec__15081_15100 = cljs.core._nth.call(null,chunk__15076_15097,i__15078_15099);var actual_type_15101 = cljs.core.nth.call(null,vec__15081_15100,(0),null);var factory_15102 = cljs.core.nth.call(null,vec__15081_15100,(1),null);var canonical_f_15103 = (cljs.core.truth_(selector_15088)?cljs.core.partial.call(null,dommy.core.live_listener,elem_15087,selector_15088):cljs.core.identity).call(null,factory_15102.call(null,f_15095));dommy.core.update_event_listeners_BANG_.call(null,elem_15087,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15088,actual_type_15101,f_15095], null),canonical_f_15103);
if(cljs.core.truth_(elem_15087.addEventListener))
{elem_15087.addEventListener(cljs.core.name.call(null,actual_type_15101),canonical_f_15103);
} else
{elem_15087.attachEvent(cljs.core.name.call(null,actual_type_15101),canonical_f_15103);
}
{
var G__15104 = seq__15074_15096;
var G__15105 = chunk__15076_15097;
var G__15106 = count__15077_15098;
var G__15107 = (i__15078_15099 + (1));
seq__15074_15096 = G__15104;
chunk__15076_15097 = G__15105;
count__15077_15098 = G__15106;
i__15078_15099 = G__15107;
continue;
}
} else
{var temp__4126__auto___15108 = cljs.core.seq.call(null,seq__15074_15096);if(temp__4126__auto___15108)
{var seq__15074_15109__$1 = temp__4126__auto___15108;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15074_15109__$1))
{var c__4299__auto___15110 = cljs.core.chunk_first.call(null,seq__15074_15109__$1);{
var G__15111 = cljs.core.chunk_rest.call(null,seq__15074_15109__$1);
var G__15112 = c__4299__auto___15110;
var G__15113 = cljs.core.count.call(null,c__4299__auto___15110);
var G__15114 = (0);
seq__15074_15096 = G__15111;
chunk__15076_15097 = G__15112;
count__15077_15098 = G__15113;
i__15078_15099 = G__15114;
continue;
}
} else
{var vec__15082_15115 = cljs.core.first.call(null,seq__15074_15109__$1);var actual_type_15116 = cljs.core.nth.call(null,vec__15082_15115,(0),null);var factory_15117 = cljs.core.nth.call(null,vec__15082_15115,(1),null);var canonical_f_15118 = (cljs.core.truth_(selector_15088)?cljs.core.partial.call(null,dommy.core.live_listener,elem_15087,selector_15088):cljs.core.identity).call(null,factory_15117.call(null,f_15095));dommy.core.update_event_listeners_BANG_.call(null,elem_15087,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15088,actual_type_15116,f_15095], null),canonical_f_15118);
if(cljs.core.truth_(elem_15087.addEventListener))
{elem_15087.addEventListener(cljs.core.name.call(null,actual_type_15116),canonical_f_15118);
} else
{elem_15087.attachEvent(cljs.core.name.call(null,actual_type_15116),canonical_f_15118);
}
{
var G__15119 = cljs.core.next.call(null,seq__15074_15109__$1);
var G__15120 = null;
var G__15121 = (0);
var G__15122 = (0);
seq__15074_15096 = G__15119;
chunk__15076_15097 = G__15120;
count__15077_15098 = G__15121;
i__15078_15099 = G__15122;
continue;
}
}
} else
{}
}
break;
}
{
var G__15123 = seq__15064_15089;
var G__15124 = chunk__15071_15090;
var G__15125 = count__15072_15091;
var G__15126 = (i__15073_15092 + (1));
seq__15064_15089 = G__15123;
chunk__15071_15090 = G__15124;
count__15072_15091 = G__15125;
i__15073_15092 = G__15126;
continue;
}
} else
{var temp__4126__auto___15127 = cljs.core.seq.call(null,seq__15064_15089);if(temp__4126__auto___15127)
{var seq__15064_15128__$1 = temp__4126__auto___15127;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15064_15128__$1))
{var c__4299__auto___15129 = cljs.core.chunk_first.call(null,seq__15064_15128__$1);{
var G__15130 = cljs.core.chunk_rest.call(null,seq__15064_15128__$1);
var G__15131 = c__4299__auto___15129;
var G__15132 = cljs.core.count.call(null,c__4299__auto___15129);
var G__15133 = (0);
seq__15064_15089 = G__15130;
chunk__15071_15090 = G__15131;
count__15072_15091 = G__15132;
i__15073_15092 = G__15133;
continue;
}
} else
{var vec__15083_15134 = cljs.core.first.call(null,seq__15064_15128__$1);var orig_type_15135 = cljs.core.nth.call(null,vec__15083_15134,(0),null);var f_15136 = cljs.core.nth.call(null,vec__15083_15134,(1),null);var seq__15065_15137 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_15135,new cljs.core.PersistentArrayMap.fromArray([orig_type_15135,cljs.core.identity], true, false)));var chunk__15067_15138 = null;var count__15068_15139 = (0);var i__15069_15140 = (0);while(true){
if((i__15069_15140 < count__15068_15139))
{var vec__15084_15141 = cljs.core._nth.call(null,chunk__15067_15138,i__15069_15140);var actual_type_15142 = cljs.core.nth.call(null,vec__15084_15141,(0),null);var factory_15143 = cljs.core.nth.call(null,vec__15084_15141,(1),null);var canonical_f_15144 = (cljs.core.truth_(selector_15088)?cljs.core.partial.call(null,dommy.core.live_listener,elem_15087,selector_15088):cljs.core.identity).call(null,factory_15143.call(null,f_15136));dommy.core.update_event_listeners_BANG_.call(null,elem_15087,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15088,actual_type_15142,f_15136], null),canonical_f_15144);
if(cljs.core.truth_(elem_15087.addEventListener))
{elem_15087.addEventListener(cljs.core.name.call(null,actual_type_15142),canonical_f_15144);
} else
{elem_15087.attachEvent(cljs.core.name.call(null,actual_type_15142),canonical_f_15144);
}
{
var G__15145 = seq__15065_15137;
var G__15146 = chunk__15067_15138;
var G__15147 = count__15068_15139;
var G__15148 = (i__15069_15140 + (1));
seq__15065_15137 = G__15145;
chunk__15067_15138 = G__15146;
count__15068_15139 = G__15147;
i__15069_15140 = G__15148;
continue;
}
} else
{var temp__4126__auto___15149__$1 = cljs.core.seq.call(null,seq__15065_15137);if(temp__4126__auto___15149__$1)
{var seq__15065_15150__$1 = temp__4126__auto___15149__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15065_15150__$1))
{var c__4299__auto___15151 = cljs.core.chunk_first.call(null,seq__15065_15150__$1);{
var G__15152 = cljs.core.chunk_rest.call(null,seq__15065_15150__$1);
var G__15153 = c__4299__auto___15151;
var G__15154 = cljs.core.count.call(null,c__4299__auto___15151);
var G__15155 = (0);
seq__15065_15137 = G__15152;
chunk__15067_15138 = G__15153;
count__15068_15139 = G__15154;
i__15069_15140 = G__15155;
continue;
}
} else
{var vec__15085_15156 = cljs.core.first.call(null,seq__15065_15150__$1);var actual_type_15157 = cljs.core.nth.call(null,vec__15085_15156,(0),null);var factory_15158 = cljs.core.nth.call(null,vec__15085_15156,(1),null);var canonical_f_15159 = (cljs.core.truth_(selector_15088)?cljs.core.partial.call(null,dommy.core.live_listener,elem_15087,selector_15088):cljs.core.identity).call(null,factory_15158.call(null,f_15136));dommy.core.update_event_listeners_BANG_.call(null,elem_15087,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15088,actual_type_15157,f_15136], null),canonical_f_15159);
if(cljs.core.truth_(elem_15087.addEventListener))
{elem_15087.addEventListener(cljs.core.name.call(null,actual_type_15157),canonical_f_15159);
} else
{elem_15087.attachEvent(cljs.core.name.call(null,actual_type_15157),canonical_f_15159);
}
{
var G__15160 = cljs.core.next.call(null,seq__15065_15150__$1);
var G__15161 = null;
var G__15162 = (0);
var G__15163 = (0);
seq__15065_15137 = G__15160;
chunk__15067_15138 = G__15161;
count__15068_15139 = G__15162;
i__15069_15140 = G__15163;
continue;
}
}
} else
{}
}
break;
}
{
var G__15164 = cljs.core.next.call(null,seq__15064_15128__$1);
var G__15165 = null;
var G__15166 = (0);
var G__15167 = (0);
seq__15064_15089 = G__15164;
chunk__15071_15090 = G__15165;
count__15072_15091 = G__15166;
i__15073_15092 = G__15167;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__15168){
var elem_sel = cljs.core.first(arglist__15168);
var type_fs = cljs.core.rest(arglist__15168);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__15192_15215 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_15216 = cljs.core.nth.call(null,vec__15192_15215,(0),null);var selector_15217 = cljs.core.nth.call(null,vec__15192_15215,(1),null);var seq__15193_15218 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__15200_15219 = null;var count__15201_15220 = (0);var i__15202_15221 = (0);while(true){
if((i__15202_15221 < count__15201_15220))
{var vec__15209_15222 = cljs.core._nth.call(null,chunk__15200_15219,i__15202_15221);var orig_type_15223 = cljs.core.nth.call(null,vec__15209_15222,(0),null);var f_15224 = cljs.core.nth.call(null,vec__15209_15222,(1),null);var seq__15203_15225 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_15223,new cljs.core.PersistentArrayMap.fromArray([orig_type_15223,cljs.core.identity], true, false)));var chunk__15205_15226 = null;var count__15206_15227 = (0);var i__15207_15228 = (0);while(true){
if((i__15207_15228 < count__15206_15227))
{var vec__15210_15229 = cljs.core._nth.call(null,chunk__15205_15226,i__15207_15228);var actual_type_15230 = cljs.core.nth.call(null,vec__15210_15229,(0),null);var __15231 = cljs.core.nth.call(null,vec__15210_15229,(1),null);var keys_15232 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15217,actual_type_15230,f_15224], null);var canonical_f_15233 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_15216),keys_15232);dommy.core.update_event_listeners_BANG_.call(null,elem_15216,dommy.utils.dissoc_in,keys_15232);
if(cljs.core.truth_(elem_15216.removeEventListener))
{elem_15216.removeEventListener(cljs.core.name.call(null,actual_type_15230),canonical_f_15233);
} else
{elem_15216.detachEvent(cljs.core.name.call(null,actual_type_15230),canonical_f_15233);
}
{
var G__15234 = seq__15203_15225;
var G__15235 = chunk__15205_15226;
var G__15236 = count__15206_15227;
var G__15237 = (i__15207_15228 + (1));
seq__15203_15225 = G__15234;
chunk__15205_15226 = G__15235;
count__15206_15227 = G__15236;
i__15207_15228 = G__15237;
continue;
}
} else
{var temp__4126__auto___15238 = cljs.core.seq.call(null,seq__15203_15225);if(temp__4126__auto___15238)
{var seq__15203_15239__$1 = temp__4126__auto___15238;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15203_15239__$1))
{var c__4299__auto___15240 = cljs.core.chunk_first.call(null,seq__15203_15239__$1);{
var G__15241 = cljs.core.chunk_rest.call(null,seq__15203_15239__$1);
var G__15242 = c__4299__auto___15240;
var G__15243 = cljs.core.count.call(null,c__4299__auto___15240);
var G__15244 = (0);
seq__15203_15225 = G__15241;
chunk__15205_15226 = G__15242;
count__15206_15227 = G__15243;
i__15207_15228 = G__15244;
continue;
}
} else
{var vec__15211_15245 = cljs.core.first.call(null,seq__15203_15239__$1);var actual_type_15246 = cljs.core.nth.call(null,vec__15211_15245,(0),null);var __15247 = cljs.core.nth.call(null,vec__15211_15245,(1),null);var keys_15248 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15217,actual_type_15246,f_15224], null);var canonical_f_15249 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_15216),keys_15248);dommy.core.update_event_listeners_BANG_.call(null,elem_15216,dommy.utils.dissoc_in,keys_15248);
if(cljs.core.truth_(elem_15216.removeEventListener))
{elem_15216.removeEventListener(cljs.core.name.call(null,actual_type_15246),canonical_f_15249);
} else
{elem_15216.detachEvent(cljs.core.name.call(null,actual_type_15246),canonical_f_15249);
}
{
var G__15250 = cljs.core.next.call(null,seq__15203_15239__$1);
var G__15251 = null;
var G__15252 = (0);
var G__15253 = (0);
seq__15203_15225 = G__15250;
chunk__15205_15226 = G__15251;
count__15206_15227 = G__15252;
i__15207_15228 = G__15253;
continue;
}
}
} else
{}
}
break;
}
{
var G__15254 = seq__15193_15218;
var G__15255 = chunk__15200_15219;
var G__15256 = count__15201_15220;
var G__15257 = (i__15202_15221 + (1));
seq__15193_15218 = G__15254;
chunk__15200_15219 = G__15255;
count__15201_15220 = G__15256;
i__15202_15221 = G__15257;
continue;
}
} else
{var temp__4126__auto___15258 = cljs.core.seq.call(null,seq__15193_15218);if(temp__4126__auto___15258)
{var seq__15193_15259__$1 = temp__4126__auto___15258;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15193_15259__$1))
{var c__4299__auto___15260 = cljs.core.chunk_first.call(null,seq__15193_15259__$1);{
var G__15261 = cljs.core.chunk_rest.call(null,seq__15193_15259__$1);
var G__15262 = c__4299__auto___15260;
var G__15263 = cljs.core.count.call(null,c__4299__auto___15260);
var G__15264 = (0);
seq__15193_15218 = G__15261;
chunk__15200_15219 = G__15262;
count__15201_15220 = G__15263;
i__15202_15221 = G__15264;
continue;
}
} else
{var vec__15212_15265 = cljs.core.first.call(null,seq__15193_15259__$1);var orig_type_15266 = cljs.core.nth.call(null,vec__15212_15265,(0),null);var f_15267 = cljs.core.nth.call(null,vec__15212_15265,(1),null);var seq__15194_15268 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_15266,new cljs.core.PersistentArrayMap.fromArray([orig_type_15266,cljs.core.identity], true, false)));var chunk__15196_15269 = null;var count__15197_15270 = (0);var i__15198_15271 = (0);while(true){
if((i__15198_15271 < count__15197_15270))
{var vec__15213_15272 = cljs.core._nth.call(null,chunk__15196_15269,i__15198_15271);var actual_type_15273 = cljs.core.nth.call(null,vec__15213_15272,(0),null);var __15274 = cljs.core.nth.call(null,vec__15213_15272,(1),null);var keys_15275 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15217,actual_type_15273,f_15267], null);var canonical_f_15276 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_15216),keys_15275);dommy.core.update_event_listeners_BANG_.call(null,elem_15216,dommy.utils.dissoc_in,keys_15275);
if(cljs.core.truth_(elem_15216.removeEventListener))
{elem_15216.removeEventListener(cljs.core.name.call(null,actual_type_15273),canonical_f_15276);
} else
{elem_15216.detachEvent(cljs.core.name.call(null,actual_type_15273),canonical_f_15276);
}
{
var G__15277 = seq__15194_15268;
var G__15278 = chunk__15196_15269;
var G__15279 = count__15197_15270;
var G__15280 = (i__15198_15271 + (1));
seq__15194_15268 = G__15277;
chunk__15196_15269 = G__15278;
count__15197_15270 = G__15279;
i__15198_15271 = G__15280;
continue;
}
} else
{var temp__4126__auto___15281__$1 = cljs.core.seq.call(null,seq__15194_15268);if(temp__4126__auto___15281__$1)
{var seq__15194_15282__$1 = temp__4126__auto___15281__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15194_15282__$1))
{var c__4299__auto___15283 = cljs.core.chunk_first.call(null,seq__15194_15282__$1);{
var G__15284 = cljs.core.chunk_rest.call(null,seq__15194_15282__$1);
var G__15285 = c__4299__auto___15283;
var G__15286 = cljs.core.count.call(null,c__4299__auto___15283);
var G__15287 = (0);
seq__15194_15268 = G__15284;
chunk__15196_15269 = G__15285;
count__15197_15270 = G__15286;
i__15198_15271 = G__15287;
continue;
}
} else
{var vec__15214_15288 = cljs.core.first.call(null,seq__15194_15282__$1);var actual_type_15289 = cljs.core.nth.call(null,vec__15214_15288,(0),null);var __15290 = cljs.core.nth.call(null,vec__15214_15288,(1),null);var keys_15291 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15217,actual_type_15289,f_15267], null);var canonical_f_15292 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_15216),keys_15291);dommy.core.update_event_listeners_BANG_.call(null,elem_15216,dommy.utils.dissoc_in,keys_15291);
if(cljs.core.truth_(elem_15216.removeEventListener))
{elem_15216.removeEventListener(cljs.core.name.call(null,actual_type_15289),canonical_f_15292);
} else
{elem_15216.detachEvent(cljs.core.name.call(null,actual_type_15289),canonical_f_15292);
}
{
var G__15293 = cljs.core.next.call(null,seq__15194_15282__$1);
var G__15294 = null;
var G__15295 = (0);
var G__15296 = (0);
seq__15194_15268 = G__15293;
chunk__15196_15269 = G__15294;
count__15197_15270 = G__15295;
i__15198_15271 = G__15296;
continue;
}
}
} else
{}
}
break;
}
{
var G__15297 = cljs.core.next.call(null,seq__15193_15259__$1);
var G__15298 = null;
var G__15299 = (0);
var G__15300 = (0);
seq__15193_15218 = G__15297;
chunk__15200_15219 = G__15298;
count__15201_15220 = G__15299;
i__15202_15221 = G__15300;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__15301){
var elem_sel = cljs.core.first(arglist__15301);
var type_fs = cljs.core.rest(arglist__15301);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__15309_15316 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_15317 = cljs.core.nth.call(null,vec__15309_15316,(0),null);var selector_15318 = cljs.core.nth.call(null,vec__15309_15316,(1),null);var seq__15310_15319 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__15311_15320 = null;var count__15312_15321 = (0);var i__15313_15322 = (0);while(true){
if((i__15313_15322 < count__15312_15321))
{var vec__15314_15323 = cljs.core._nth.call(null,chunk__15311_15320,i__15313_15322);var type_15324 = cljs.core.nth.call(null,vec__15314_15323,(0),null);var f_15325 = cljs.core.nth.call(null,vec__15314_15323,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_15324,((function (seq__15310_15319,chunk__15311_15320,count__15312_15321,i__15313_15322,vec__15314_15323,type_15324,f_15325,vec__15309_15316,elem_15317,selector_15318){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_15324,this_fn);
return f_15325.call(null,e);
});})(seq__15310_15319,chunk__15311_15320,count__15312_15321,i__15313_15322,vec__15314_15323,type_15324,f_15325,vec__15309_15316,elem_15317,selector_15318))
);
{
var G__15326 = seq__15310_15319;
var G__15327 = chunk__15311_15320;
var G__15328 = count__15312_15321;
var G__15329 = (i__15313_15322 + (1));
seq__15310_15319 = G__15326;
chunk__15311_15320 = G__15327;
count__15312_15321 = G__15328;
i__15313_15322 = G__15329;
continue;
}
} else
{var temp__4126__auto___15330 = cljs.core.seq.call(null,seq__15310_15319);if(temp__4126__auto___15330)
{var seq__15310_15331__$1 = temp__4126__auto___15330;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15310_15331__$1))
{var c__4299__auto___15332 = cljs.core.chunk_first.call(null,seq__15310_15331__$1);{
var G__15333 = cljs.core.chunk_rest.call(null,seq__15310_15331__$1);
var G__15334 = c__4299__auto___15332;
var G__15335 = cljs.core.count.call(null,c__4299__auto___15332);
var G__15336 = (0);
seq__15310_15319 = G__15333;
chunk__15311_15320 = G__15334;
count__15312_15321 = G__15335;
i__15313_15322 = G__15336;
continue;
}
} else
{var vec__15315_15337 = cljs.core.first.call(null,seq__15310_15331__$1);var type_15338 = cljs.core.nth.call(null,vec__15315_15337,(0),null);var f_15339 = cljs.core.nth.call(null,vec__15315_15337,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_15338,((function (seq__15310_15319,chunk__15311_15320,count__15312_15321,i__15313_15322,vec__15315_15337,type_15338,f_15339,seq__15310_15331__$1,temp__4126__auto___15330,vec__15309_15316,elem_15317,selector_15318){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_15338,this_fn);
return f_15339.call(null,e);
});})(seq__15310_15319,chunk__15311_15320,count__15312_15321,i__15313_15322,vec__15315_15337,type_15338,f_15339,seq__15310_15331__$1,temp__4126__auto___15330,vec__15309_15316,elem_15317,selector_15318))
);
{
var G__15340 = cljs.core.next.call(null,seq__15310_15331__$1);
var G__15341 = null;
var G__15342 = (0);
var G__15343 = (0);
seq__15310_15319 = G__15340;
chunk__15311_15320 = G__15341;
count__15312_15321 = G__15342;
i__15313_15322 = G__15343;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__15344){
var elem_sel = cljs.core.first(arglist__15344);
var type_fs = cljs.core.rest(arglist__15344);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
/**
* NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
* event types or their bubbling behaviours
* 
* Creates an event of type `event-type`, optionally having
* `update-event!` mutate and return an updated event object,
* and fires it on `node`.
* Only works when `node` is in the DOM
* @param {...*} var_args
*/
dommy.core.fire_BANG_ = (function() { 
var fire_BANG___delegate = function (node,event_type,p__15345){var vec__15347 = p__15345;var update_event_BANG_ = cljs.core.nth.call(null,vec__15347,(0),null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1027057938,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",1597931428,null)))))));
}
var update_event_BANG___$1 = (function (){var or__3543__auto__ = update_event_BANG_;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent(("on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,event_type))),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__15345 = null;if (arguments.length > 2) {
  p__15345 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__15345);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__15348){
var node = cljs.core.first(arglist__15348);
arglist__15348 = cljs.core.next(arglist__15348);
var event_type = cljs.core.first(arglist__15348);
var p__15345 = cljs.core.rest(arglist__15348);
return fire_BANG___delegate(node,event_type,p__15345);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map