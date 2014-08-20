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
var append_BANG___2 = (function (parent,child){var G__146555 = dommy.template.__GT_node_like.call(null,parent);G__146555.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__146555;
});
var append_BANG___3 = (function() { 
var G__146560__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__146556_146561 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__146557_146562 = null;var count__146558_146563 = (0);var i__146559_146564 = (0);while(true){
if((i__146559_146564 < count__146558_146563))
{var c_146565 = cljs.core._nth.call(null,chunk__146557_146562,i__146559_146564);append_BANG_.call(null,parent__$1,c_146565);
{
var G__146566 = seq__146556_146561;
var G__146567 = chunk__146557_146562;
var G__146568 = count__146558_146563;
var G__146569 = (i__146559_146564 + (1));
seq__146556_146561 = G__146566;
chunk__146557_146562 = G__146567;
count__146558_146563 = G__146568;
i__146559_146564 = G__146569;
continue;
}
} else
{var temp__4126__auto___146570 = cljs.core.seq.call(null,seq__146556_146561);if(temp__4126__auto___146570)
{var seq__146556_146571__$1 = temp__4126__auto___146570;if(cljs.core.chunked_seq_QMARK_.call(null,seq__146556_146571__$1))
{var c__4299__auto___146572 = cljs.core.chunk_first.call(null,seq__146556_146571__$1);{
var G__146573 = cljs.core.chunk_rest.call(null,seq__146556_146571__$1);
var G__146574 = c__4299__auto___146572;
var G__146575 = cljs.core.count.call(null,c__4299__auto___146572);
var G__146576 = (0);
seq__146556_146561 = G__146573;
chunk__146557_146562 = G__146574;
count__146558_146563 = G__146575;
i__146559_146564 = G__146576;
continue;
}
} else
{var c_146577 = cljs.core.first.call(null,seq__146556_146571__$1);append_BANG_.call(null,parent__$1,c_146577);
{
var G__146578 = cljs.core.next.call(null,seq__146556_146571__$1);
var G__146579 = null;
var G__146580 = (0);
var G__146581 = (0);
seq__146556_146561 = G__146578;
chunk__146557_146562 = G__146579;
count__146558_146563 = G__146580;
i__146559_146564 = G__146581;
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
var G__146560 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__146560__delegate.call(this,parent,child,more_children);};
G__146560.cljs$lang$maxFixedArity = 2;
G__146560.cljs$lang$applyTo = (function (arglist__146582){
var parent = cljs.core.first(arglist__146582);
arglist__146582 = cljs.core.next(arglist__146582);
var child = cljs.core.first(arglist__146582);
var more_children = cljs.core.rest(arglist__146582);
return G__146560__delegate(parent,child,more_children);
});
G__146560.cljs$core$IFn$_invoke$arity$variadic = G__146560__delegate;
return G__146560;
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
var G__146591__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__146587_146592 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__146588_146593 = null;var count__146589_146594 = (0);var i__146590_146595 = (0);while(true){
if((i__146590_146595 < count__146589_146594))
{var c_146596 = cljs.core._nth.call(null,chunk__146588_146593,i__146590_146595);prepend_BANG_.call(null,parent__$1,c_146596);
{
var G__146597 = seq__146587_146592;
var G__146598 = chunk__146588_146593;
var G__146599 = count__146589_146594;
var G__146600 = (i__146590_146595 + (1));
seq__146587_146592 = G__146597;
chunk__146588_146593 = G__146598;
count__146589_146594 = G__146599;
i__146590_146595 = G__146600;
continue;
}
} else
{var temp__4126__auto___146601 = cljs.core.seq.call(null,seq__146587_146592);if(temp__4126__auto___146601)
{var seq__146587_146602__$1 = temp__4126__auto___146601;if(cljs.core.chunked_seq_QMARK_.call(null,seq__146587_146602__$1))
{var c__4299__auto___146603 = cljs.core.chunk_first.call(null,seq__146587_146602__$1);{
var G__146604 = cljs.core.chunk_rest.call(null,seq__146587_146602__$1);
var G__146605 = c__4299__auto___146603;
var G__146606 = cljs.core.count.call(null,c__4299__auto___146603);
var G__146607 = (0);
seq__146587_146592 = G__146604;
chunk__146588_146593 = G__146605;
count__146589_146594 = G__146606;
i__146590_146595 = G__146607;
continue;
}
} else
{var c_146608 = cljs.core.first.call(null,seq__146587_146602__$1);prepend_BANG_.call(null,parent__$1,c_146608);
{
var G__146609 = cljs.core.next.call(null,seq__146587_146602__$1);
var G__146610 = null;
var G__146611 = (0);
var G__146612 = (0);
seq__146587_146592 = G__146609;
chunk__146588_146593 = G__146610;
count__146589_146594 = G__146611;
i__146590_146595 = G__146612;
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
var G__146591 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__146591__delegate.call(this,parent,child,more_children);};
G__146591.cljs$lang$maxFixedArity = 2;
G__146591.cljs$lang$applyTo = (function (arglist__146613){
var parent = cljs.core.first(arglist__146613);
arglist__146613 = cljs.core.next(arglist__146613);
var child = cljs.core.first(arglist__146613);
var more_children = cljs.core.rest(arglist__146613);
return G__146591__delegate(parent,child,more_children);
});
G__146591.cljs$core$IFn$_invoke$arity$variadic = G__146591__delegate;
return G__146591;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4124__auto___146614 = other__$1.nextSibling;if(cljs.core.truth_(temp__4124__auto___146614))
{var next_146615 = temp__4124__auto___146614;parent.insertBefore(actual_node,next_146615);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__146617 = dommy.template.__GT_node_like.call(null,parent);G__146617.innerHTML = "";
dommy.core.append_BANG_.call(null,G__146617,node_like);
return G__146617;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__146619 = elem__$1.parentNode;G__146619.removeChild(elem__$1);
return G__146619;
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
return (function (p__146625){var vec__146626 = p__146625;var k = cljs.core.nth.call(null,vec__146626,(0),null);var v = cljs.core.nth.call(null,vec__146626,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",-1610148039).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t146627 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t146627 = (function (v,k,vec__146626,p__146625,container,key_selectors_map,template,selector_map,meta146628){
this.v = v;
this.k = k;
this.vec__146626 = vec__146626;
this.p__146625 = p__146625;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta146628 = meta146628;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t146627.cljs$lang$type = true;
dommy.core.t146627.cljs$lang$ctorStr = "dommy.core/t146627";
dommy.core.t146627.cljs$lang$ctorPrWriter = ((function (vec__146626,k,v,container){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"dommy.core/t146627");
});})(vec__146626,k,v,container))
;
dommy.core.t146627.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__146626,k,v,container){
return (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});})(vec__146626,k,v,container))
;
dommy.core.t146627.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__146626,k,v,container){
return (function (_146629){var self__ = this;
var _146629__$1 = this;return self__.meta146628;
});})(vec__146626,k,v,container))
;
dommy.core.t146627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__146626,k,v,container){
return (function (_146629,meta146628__$1){var self__ = this;
var _146629__$1 = this;return (new dommy.core.t146627(self__.v,self__.k,self__.vec__146626,self__.p__146625,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta146628__$1));
});})(vec__146626,k,v,container))
;
dommy.core.__GT_t146627 = ((function (vec__146626,k,v,container){
return (function __GT_t146627(v__$1,k__$1,vec__146626__$1,p__146625__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta146628){return (new dommy.core.t146627(v__$1,k__$1,vec__146626__$1,p__146625__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta146628));
});})(vec__146626,k,v,container))
;
}
return (new dommy.core.t146627(v,k,vec__146626,p__146625,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
});})(container))
,key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__146630_SHARP_){return p1__146630_SHARP_.parentNode;
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
return (function (p1__146631_SHARP_){return !((p1__146631_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__146632){var vec__146633 = p__146632;var special_mouse_event = cljs.core.nth.call(null,vec__146633,(0),null);var real_mouse_event = cljs.core.nth.call(null,vec__146633,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__146633,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__146633,special_mouse_event,real_mouse_event){
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
;})(vec__146633,special_mouse_event,real_mouse_event))
});})(vec__146633,special_mouse_event,real_mouse_event))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__146634){
var elem = cljs.core.first(arglist__146634);
arglist__146634 = cljs.core.next(arglist__146634);
var f = cljs.core.first(arglist__146634);
var args = cljs.core.rest(arglist__146634);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__146635_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__146635_SHARP_));
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
var vec__146659_146682 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_146683 = cljs.core.nth.call(null,vec__146659_146682,(0),null);var selector_146684 = cljs.core.nth.call(null,vec__146659_146682,(1),null);var seq__146660_146685 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__146667_146686 = null;var count__146668_146687 = (0);var i__146669_146688 = (0);while(true){
if((i__146669_146688 < count__146668_146687))
{var vec__146676_146689 = cljs.core._nth.call(null,chunk__146667_146686,i__146669_146688);var orig_type_146690 = cljs.core.nth.call(null,vec__146676_146689,(0),null);var f_146691 = cljs.core.nth.call(null,vec__146676_146689,(1),null);var seq__146670_146692 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_146690,new cljs.core.PersistentArrayMap.fromArray([orig_type_146690,cljs.core.identity], true, false)));var chunk__146672_146693 = null;var count__146673_146694 = (0);var i__146674_146695 = (0);while(true){
if((i__146674_146695 < count__146673_146694))
{var vec__146677_146696 = cljs.core._nth.call(null,chunk__146672_146693,i__146674_146695);var actual_type_146697 = cljs.core.nth.call(null,vec__146677_146696,(0),null);var factory_146698 = cljs.core.nth.call(null,vec__146677_146696,(1),null);var canonical_f_146699 = (cljs.core.truth_(selector_146684)?cljs.core.partial.call(null,dommy.core.live_listener,elem_146683,selector_146684):cljs.core.identity).call(null,factory_146698.call(null,f_146691));dommy.core.update_event_listeners_BANG_.call(null,elem_146683,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_146684,actual_type_146697,f_146691], null),canonical_f_146699);
if(cljs.core.truth_(elem_146683.addEventListener))
{elem_146683.addEventListener(cljs.core.name.call(null,actual_type_146697),canonical_f_146699);
} else
{elem_146683.attachEvent(cljs.core.name.call(null,actual_type_146697),canonical_f_146699);
}
{
var G__146700 = seq__146670_146692;
var G__146701 = chunk__146672_146693;
var G__146702 = count__146673_146694;
var G__146703 = (i__146674_146695 + (1));
seq__146670_146692 = G__146700;
chunk__146672_146693 = G__146701;
count__146673_146694 = G__146702;
i__146674_146695 = G__146703;
continue;
}
} else
{var temp__4126__auto___146704 = cljs.core.seq.call(null,seq__146670_146692);if(temp__4126__auto___146704)
{var seq__146670_146705__$1 = temp__4126__auto___146704;if(cljs.core.chunked_seq_QMARK_.call(null,seq__146670_146705__$1))
{var c__4299__auto___146706 = cljs.core.chunk_first.call(null,seq__146670_146705__$1);{
var G__146707 = cljs.core.chunk_rest.call(null,seq__146670_146705__$1);
var G__146708 = c__4299__auto___146706;
var G__146709 = cljs.core.count.call(null,c__4299__auto___146706);
var G__146710 = (0);
seq__146670_146692 = G__146707;
chunk__146672_146693 = G__146708;
count__146673_146694 = G__146709;
i__146674_146695 = G__146710;
continue;
}
} else
{var vec__146678_146711 = cljs.core.first.call(null,seq__146670_146705__$1);var actual_type_146712 = cljs.core.nth.call(null,vec__146678_146711,(0),null);var factory_146713 = cljs.core.nth.call(null,vec__146678_146711,(1),null);var canonical_f_146714 = (cljs.core.truth_(selector_146684)?cljs.core.partial.call(null,dommy.core.live_listener,elem_146683,selector_146684):cljs.core.identity).call(null,factory_146713.call(null,f_146691));dommy.core.update_event_listeners_BANG_.call(null,elem_146683,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_146684,actual_type_146712,f_146691], null),canonical_f_146714);
if(cljs.core.truth_(elem_146683.addEventListener))
{elem_146683.addEventListener(cljs.core.name.call(null,actual_type_146712),canonical_f_146714);
} else
{elem_146683.attachEvent(cljs.core.name.call(null,actual_type_146712),canonical_f_146714);
}
{
var G__146715 = cljs.core.next.call(null,seq__146670_146705__$1);
var G__146716 = null;
var G__146717 = (0);
var G__146718 = (0);
seq__146670_146692 = G__146715;
chunk__146672_146693 = G__146716;
count__146673_146694 = G__146717;
i__146674_146695 = G__146718;
continue;
}
}
} else
{}
}
break;
}
{
var G__146719 = seq__146660_146685;
var G__146720 = chunk__146667_146686;
var G__146721 = count__146668_146687;
var G__146722 = (i__146669_146688 + (1));
seq__146660_146685 = G__146719;
chunk__146667_146686 = G__146720;
count__146668_146687 = G__146721;
i__146669_146688 = G__146722;
continue;
}
} else
{var temp__4126__auto___146723 = cljs.core.seq.call(null,seq__146660_146685);if(temp__4126__auto___146723)
{var seq__146660_146724__$1 = temp__4126__auto___146723;if(cljs.core.chunked_seq_QMARK_.call(null,seq__146660_146724__$1))
{var c__4299__auto___146725 = cljs.core.chunk_first.call(null,seq__146660_146724__$1);{
var G__146726 = cljs.core.chunk_rest.call(null,seq__146660_146724__$1);
var G__146727 = c__4299__auto___146725;
var G__146728 = cljs.core.count.call(null,c__4299__auto___146725);
var G__146729 = (0);
seq__146660_146685 = G__146726;
chunk__146667_146686 = G__146727;
count__146668_146687 = G__146728;
i__146669_146688 = G__146729;
continue;
}
} else
{var vec__146679_146730 = cljs.core.first.call(null,seq__146660_146724__$1);var orig_type_146731 = cljs.core.nth.call(null,vec__146679_146730,(0),null);var f_146732 = cljs.core.nth.call(null,vec__146679_146730,(1),null);var seq__146661_146733 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_146731,new cljs.core.PersistentArrayMap.fromArray([orig_type_146731,cljs.core.identity], true, false)));var chunk__146663_146734 = null;var count__146664_146735 = (0);var i__146665_146736 = (0);while(true){
if((i__146665_146736 < count__146664_146735))
{var vec__146680_146737 = cljs.core._nth.call(null,chunk__146663_146734,i__146665_146736);var actual_type_146738 = cljs.core.nth.call(null,vec__146680_146737,(0),null);var factory_146739 = cljs.core.nth.call(null,vec__146680_146737,(1),null);var canonical_f_146740 = (cljs.core.truth_(selector_146684)?cljs.core.partial.call(null,dommy.core.live_listener,elem_146683,selector_146684):cljs.core.identity).call(null,factory_146739.call(null,f_146732));dommy.core.update_event_listeners_BANG_.call(null,elem_146683,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_146684,actual_type_146738,f_146732], null),canonical_f_146740);
if(cljs.core.truth_(elem_146683.addEventListener))
{elem_146683.addEventListener(cljs.core.name.call(null,actual_type_146738),canonical_f_146740);
} else
{elem_146683.attachEvent(cljs.core.name.call(null,actual_type_146738),canonical_f_146740);
}
{
var G__146741 = seq__146661_146733;
var G__146742 = chunk__146663_146734;
var G__146743 = count__146664_146735;
var G__146744 = (i__146665_146736 + (1));
seq__146661_146733 = G__146741;
chunk__146663_146734 = G__146742;
count__146664_146735 = G__146743;
i__146665_146736 = G__146744;
continue;
}
} else
{var temp__4126__auto___146745__$1 = cljs.core.seq.call(null,seq__146661_146733);if(temp__4126__auto___146745__$1)
{var seq__146661_146746__$1 = temp__4126__auto___146745__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__146661_146746__$1))
{var c__4299__auto___146747 = cljs.core.chunk_first.call(null,seq__146661_146746__$1);{
var G__146748 = cljs.core.chunk_rest.call(null,seq__146661_146746__$1);
var G__146749 = c__4299__auto___146747;
var G__146750 = cljs.core.count.call(null,c__4299__auto___146747);
var G__146751 = (0);
seq__146661_146733 = G__146748;
chunk__146663_146734 = G__146749;
count__146664_146735 = G__146750;
i__146665_146736 = G__146751;
continue;
}
} else
{var vec__146681_146752 = cljs.core.first.call(null,seq__146661_146746__$1);var actual_type_146753 = cljs.core.nth.call(null,vec__146681_146752,(0),null);var factory_146754 = cljs.core.nth.call(null,vec__146681_146752,(1),null);var canonical_f_146755 = (cljs.core.truth_(selector_146684)?cljs.core.partial.call(null,dommy.core.live_listener,elem_146683,selector_146684):cljs.core.identity).call(null,factory_146754.call(null,f_146732));dommy.core.update_event_listeners_BANG_.call(null,elem_146683,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_146684,actual_type_146753,f_146732], null),canonical_f_146755);
if(cljs.core.truth_(elem_146683.addEventListener))
{elem_146683.addEventListener(cljs.core.name.call(null,actual_type_146753),canonical_f_146755);
} else
{elem_146683.attachEvent(cljs.core.name.call(null,actual_type_146753),canonical_f_146755);
}
{
var G__146756 = cljs.core.next.call(null,seq__146661_146746__$1);
var G__146757 = null;
var G__146758 = (0);
var G__146759 = (0);
seq__146661_146733 = G__146756;
chunk__146663_146734 = G__146757;
count__146664_146735 = G__146758;
i__146665_146736 = G__146759;
continue;
}
}
} else
{}
}
break;
}
{
var G__146760 = cljs.core.next.call(null,seq__146660_146724__$1);
var G__146761 = null;
var G__146762 = (0);
var G__146763 = (0);
seq__146660_146685 = G__146760;
chunk__146667_146686 = G__146761;
count__146668_146687 = G__146762;
i__146669_146688 = G__146763;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__146764){
var elem_sel = cljs.core.first(arglist__146764);
var type_fs = cljs.core.rest(arglist__146764);
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
var vec__146788_146811 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_146812 = cljs.core.nth.call(null,vec__146788_146811,(0),null);var selector_146813 = cljs.core.nth.call(null,vec__146788_146811,(1),null);var seq__146789_146814 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__146796_146815 = null;var count__146797_146816 = (0);var i__146798_146817 = (0);while(true){
if((i__146798_146817 < count__146797_146816))
{var vec__146805_146818 = cljs.core._nth.call(null,chunk__146796_146815,i__146798_146817);var orig_type_146819 = cljs.core.nth.call(null,vec__146805_146818,(0),null);var f_146820 = cljs.core.nth.call(null,vec__146805_146818,(1),null);var seq__146799_146821 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_146819,new cljs.core.PersistentArrayMap.fromArray([orig_type_146819,cljs.core.identity], true, false)));var chunk__146801_146822 = null;var count__146802_146823 = (0);var i__146803_146824 = (0);while(true){
if((i__146803_146824 < count__146802_146823))
{var vec__146806_146825 = cljs.core._nth.call(null,chunk__146801_146822,i__146803_146824);var actual_type_146826 = cljs.core.nth.call(null,vec__146806_146825,(0),null);var __146827 = cljs.core.nth.call(null,vec__146806_146825,(1),null);var keys_146828 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_146813,actual_type_146826,f_146820], null);var canonical_f_146829 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_146812),keys_146828);dommy.core.update_event_listeners_BANG_.call(null,elem_146812,dommy.utils.dissoc_in,keys_146828);
if(cljs.core.truth_(elem_146812.removeEventListener))
{elem_146812.removeEventListener(cljs.core.name.call(null,actual_type_146826),canonical_f_146829);
} else
{elem_146812.detachEvent(cljs.core.name.call(null,actual_type_146826),canonical_f_146829);
}
{
var G__146830 = seq__146799_146821;
var G__146831 = chunk__146801_146822;
var G__146832 = count__146802_146823;
var G__146833 = (i__146803_146824 + (1));
seq__146799_146821 = G__146830;
chunk__146801_146822 = G__146831;
count__146802_146823 = G__146832;
i__146803_146824 = G__146833;
continue;
}
} else
{var temp__4126__auto___146834 = cljs.core.seq.call(null,seq__146799_146821);if(temp__4126__auto___146834)
{var seq__146799_146835__$1 = temp__4126__auto___146834;if(cljs.core.chunked_seq_QMARK_.call(null,seq__146799_146835__$1))
{var c__4299__auto___146836 = cljs.core.chunk_first.call(null,seq__146799_146835__$1);{
var G__146837 = cljs.core.chunk_rest.call(null,seq__146799_146835__$1);
var G__146838 = c__4299__auto___146836;
var G__146839 = cljs.core.count.call(null,c__4299__auto___146836);
var G__146840 = (0);
seq__146799_146821 = G__146837;
chunk__146801_146822 = G__146838;
count__146802_146823 = G__146839;
i__146803_146824 = G__146840;
continue;
}
} else
{var vec__146807_146841 = cljs.core.first.call(null,seq__146799_146835__$1);var actual_type_146842 = cljs.core.nth.call(null,vec__146807_146841,(0),null);var __146843 = cljs.core.nth.call(null,vec__146807_146841,(1),null);var keys_146844 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_146813,actual_type_146842,f_146820], null);var canonical_f_146845 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_146812),keys_146844);dommy.core.update_event_listeners_BANG_.call(null,elem_146812,dommy.utils.dissoc_in,keys_146844);
if(cljs.core.truth_(elem_146812.removeEventListener))
{elem_146812.removeEventListener(cljs.core.name.call(null,actual_type_146842),canonical_f_146845);
} else
{elem_146812.detachEvent(cljs.core.name.call(null,actual_type_146842),canonical_f_146845);
}
{
var G__146846 = cljs.core.next.call(null,seq__146799_146835__$1);
var G__146847 = null;
var G__146848 = (0);
var G__146849 = (0);
seq__146799_146821 = G__146846;
chunk__146801_146822 = G__146847;
count__146802_146823 = G__146848;
i__146803_146824 = G__146849;
continue;
}
}
} else
{}
}
break;
}
{
var G__146850 = seq__146789_146814;
var G__146851 = chunk__146796_146815;
var G__146852 = count__146797_146816;
var G__146853 = (i__146798_146817 + (1));
seq__146789_146814 = G__146850;
chunk__146796_146815 = G__146851;
count__146797_146816 = G__146852;
i__146798_146817 = G__146853;
continue;
}
} else
{var temp__4126__auto___146854 = cljs.core.seq.call(null,seq__146789_146814);if(temp__4126__auto___146854)
{var seq__146789_146855__$1 = temp__4126__auto___146854;if(cljs.core.chunked_seq_QMARK_.call(null,seq__146789_146855__$1))
{var c__4299__auto___146856 = cljs.core.chunk_first.call(null,seq__146789_146855__$1);{
var G__146857 = cljs.core.chunk_rest.call(null,seq__146789_146855__$1);
var G__146858 = c__4299__auto___146856;
var G__146859 = cljs.core.count.call(null,c__4299__auto___146856);
var G__146860 = (0);
seq__146789_146814 = G__146857;
chunk__146796_146815 = G__146858;
count__146797_146816 = G__146859;
i__146798_146817 = G__146860;
continue;
}
} else
{var vec__146808_146861 = cljs.core.first.call(null,seq__146789_146855__$1);var orig_type_146862 = cljs.core.nth.call(null,vec__146808_146861,(0),null);var f_146863 = cljs.core.nth.call(null,vec__146808_146861,(1),null);var seq__146790_146864 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_146862,new cljs.core.PersistentArrayMap.fromArray([orig_type_146862,cljs.core.identity], true, false)));var chunk__146792_146865 = null;var count__146793_146866 = (0);var i__146794_146867 = (0);while(true){
if((i__146794_146867 < count__146793_146866))
{var vec__146809_146868 = cljs.core._nth.call(null,chunk__146792_146865,i__146794_146867);var actual_type_146869 = cljs.core.nth.call(null,vec__146809_146868,(0),null);var __146870 = cljs.core.nth.call(null,vec__146809_146868,(1),null);var keys_146871 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_146813,actual_type_146869,f_146863], null);var canonical_f_146872 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_146812),keys_146871);dommy.core.update_event_listeners_BANG_.call(null,elem_146812,dommy.utils.dissoc_in,keys_146871);
if(cljs.core.truth_(elem_146812.removeEventListener))
{elem_146812.removeEventListener(cljs.core.name.call(null,actual_type_146869),canonical_f_146872);
} else
{elem_146812.detachEvent(cljs.core.name.call(null,actual_type_146869),canonical_f_146872);
}
{
var G__146873 = seq__146790_146864;
var G__146874 = chunk__146792_146865;
var G__146875 = count__146793_146866;
var G__146876 = (i__146794_146867 + (1));
seq__146790_146864 = G__146873;
chunk__146792_146865 = G__146874;
count__146793_146866 = G__146875;
i__146794_146867 = G__146876;
continue;
}
} else
{var temp__4126__auto___146877__$1 = cljs.core.seq.call(null,seq__146790_146864);if(temp__4126__auto___146877__$1)
{var seq__146790_146878__$1 = temp__4126__auto___146877__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__146790_146878__$1))
{var c__4299__auto___146879 = cljs.core.chunk_first.call(null,seq__146790_146878__$1);{
var G__146880 = cljs.core.chunk_rest.call(null,seq__146790_146878__$1);
var G__146881 = c__4299__auto___146879;
var G__146882 = cljs.core.count.call(null,c__4299__auto___146879);
var G__146883 = (0);
seq__146790_146864 = G__146880;
chunk__146792_146865 = G__146881;
count__146793_146866 = G__146882;
i__146794_146867 = G__146883;
continue;
}
} else
{var vec__146810_146884 = cljs.core.first.call(null,seq__146790_146878__$1);var actual_type_146885 = cljs.core.nth.call(null,vec__146810_146884,(0),null);var __146886 = cljs.core.nth.call(null,vec__146810_146884,(1),null);var keys_146887 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_146813,actual_type_146885,f_146863], null);var canonical_f_146888 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_146812),keys_146887);dommy.core.update_event_listeners_BANG_.call(null,elem_146812,dommy.utils.dissoc_in,keys_146887);
if(cljs.core.truth_(elem_146812.removeEventListener))
{elem_146812.removeEventListener(cljs.core.name.call(null,actual_type_146885),canonical_f_146888);
} else
{elem_146812.detachEvent(cljs.core.name.call(null,actual_type_146885),canonical_f_146888);
}
{
var G__146889 = cljs.core.next.call(null,seq__146790_146878__$1);
var G__146890 = null;
var G__146891 = (0);
var G__146892 = (0);
seq__146790_146864 = G__146889;
chunk__146792_146865 = G__146890;
count__146793_146866 = G__146891;
i__146794_146867 = G__146892;
continue;
}
}
} else
{}
}
break;
}
{
var G__146893 = cljs.core.next.call(null,seq__146789_146855__$1);
var G__146894 = null;
var G__146895 = (0);
var G__146896 = (0);
seq__146789_146814 = G__146893;
chunk__146796_146815 = G__146894;
count__146797_146816 = G__146895;
i__146798_146817 = G__146896;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__146897){
var elem_sel = cljs.core.first(arglist__146897);
var type_fs = cljs.core.rest(arglist__146897);
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
var vec__146905_146912 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_146913 = cljs.core.nth.call(null,vec__146905_146912,(0),null);var selector_146914 = cljs.core.nth.call(null,vec__146905_146912,(1),null);var seq__146906_146915 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__146907_146916 = null;var count__146908_146917 = (0);var i__146909_146918 = (0);while(true){
if((i__146909_146918 < count__146908_146917))
{var vec__146910_146919 = cljs.core._nth.call(null,chunk__146907_146916,i__146909_146918);var type_146920 = cljs.core.nth.call(null,vec__146910_146919,(0),null);var f_146921 = cljs.core.nth.call(null,vec__146910_146919,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_146920,((function (seq__146906_146915,chunk__146907_146916,count__146908_146917,i__146909_146918,vec__146910_146919,type_146920,f_146921,vec__146905_146912,elem_146913,selector_146914){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_146920,this_fn);
return f_146921.call(null,e);
});})(seq__146906_146915,chunk__146907_146916,count__146908_146917,i__146909_146918,vec__146910_146919,type_146920,f_146921,vec__146905_146912,elem_146913,selector_146914))
);
{
var G__146922 = seq__146906_146915;
var G__146923 = chunk__146907_146916;
var G__146924 = count__146908_146917;
var G__146925 = (i__146909_146918 + (1));
seq__146906_146915 = G__146922;
chunk__146907_146916 = G__146923;
count__146908_146917 = G__146924;
i__146909_146918 = G__146925;
continue;
}
} else
{var temp__4126__auto___146926 = cljs.core.seq.call(null,seq__146906_146915);if(temp__4126__auto___146926)
{var seq__146906_146927__$1 = temp__4126__auto___146926;if(cljs.core.chunked_seq_QMARK_.call(null,seq__146906_146927__$1))
{var c__4299__auto___146928 = cljs.core.chunk_first.call(null,seq__146906_146927__$1);{
var G__146929 = cljs.core.chunk_rest.call(null,seq__146906_146927__$1);
var G__146930 = c__4299__auto___146928;
var G__146931 = cljs.core.count.call(null,c__4299__auto___146928);
var G__146932 = (0);
seq__146906_146915 = G__146929;
chunk__146907_146916 = G__146930;
count__146908_146917 = G__146931;
i__146909_146918 = G__146932;
continue;
}
} else
{var vec__146911_146933 = cljs.core.first.call(null,seq__146906_146927__$1);var type_146934 = cljs.core.nth.call(null,vec__146911_146933,(0),null);var f_146935 = cljs.core.nth.call(null,vec__146911_146933,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_146934,((function (seq__146906_146915,chunk__146907_146916,count__146908_146917,i__146909_146918,vec__146911_146933,type_146934,f_146935,seq__146906_146927__$1,temp__4126__auto___146926,vec__146905_146912,elem_146913,selector_146914){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_146934,this_fn);
return f_146935.call(null,e);
});})(seq__146906_146915,chunk__146907_146916,count__146908_146917,i__146909_146918,vec__146911_146933,type_146934,f_146935,seq__146906_146927__$1,temp__4126__auto___146926,vec__146905_146912,elem_146913,selector_146914))
);
{
var G__146936 = cljs.core.next.call(null,seq__146906_146927__$1);
var G__146937 = null;
var G__146938 = (0);
var G__146939 = (0);
seq__146906_146915 = G__146936;
chunk__146907_146916 = G__146937;
count__146908_146917 = G__146938;
i__146909_146918 = G__146939;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__146940){
var elem_sel = cljs.core.first(arglist__146940);
var type_fs = cljs.core.rest(arglist__146940);
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
var fire_BANG___delegate = function (node,event_type,p__146941){var vec__146943 = p__146941;var update_event_BANG_ = cljs.core.nth.call(null,vec__146943,(0),null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__146941 = null;if (arguments.length > 2) {
  p__146941 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__146941);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__146944){
var node = cljs.core.first(arglist__146944);
arglist__146944 = cljs.core.next(arglist__146944);
var event_type = cljs.core.first(arglist__146944);
var p__146941 = cljs.core.rest(arglist__146944);
return fire_BANG___delegate(node,event_type,p__146941);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map