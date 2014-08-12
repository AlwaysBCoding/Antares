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
dommy.core.text = (function text(elem){var or__7283__auto__ = elem.textContent;if(cljs.core.truth_(or__7283__auto__))
{return or__7283__auto__;
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
var append_BANG___2 = (function (parent,child){var G__9576 = dommy.template.__GT_node_like.call(null,parent);G__9576.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__9576;
});
var append_BANG___3 = (function() { 
var G__9581__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__9577_9582 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__9578_9583 = null;var count__9579_9584 = (0);var i__9580_9585 = (0);while(true){
if((i__9580_9585 < count__9579_9584))
{var c_9586 = cljs.core._nth.call(null,chunk__9578_9583,i__9580_9585);append_BANG_.call(null,parent__$1,c_9586);
{
var G__9587 = seq__9577_9582;
var G__9588 = chunk__9578_9583;
var G__9589 = count__9579_9584;
var G__9590 = (i__9580_9585 + (1));
seq__9577_9582 = G__9587;
chunk__9578_9583 = G__9588;
count__9579_9584 = G__9589;
i__9580_9585 = G__9590;
continue;
}
} else
{var temp__4126__auto___9591 = cljs.core.seq.call(null,seq__9577_9582);if(temp__4126__auto___9591)
{var seq__9577_9592__$1 = temp__4126__auto___9591;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9577_9592__$1))
{var c__8039__auto___9593 = cljs.core.chunk_first.call(null,seq__9577_9592__$1);{
var G__9594 = cljs.core.chunk_rest.call(null,seq__9577_9592__$1);
var G__9595 = c__8039__auto___9593;
var G__9596 = cljs.core.count.call(null,c__8039__auto___9593);
var G__9597 = (0);
seq__9577_9582 = G__9594;
chunk__9578_9583 = G__9595;
count__9579_9584 = G__9596;
i__9580_9585 = G__9597;
continue;
}
} else
{var c_9598 = cljs.core.first.call(null,seq__9577_9592__$1);append_BANG_.call(null,parent__$1,c_9598);
{
var G__9599 = cljs.core.next.call(null,seq__9577_9592__$1);
var G__9600 = null;
var G__9601 = (0);
var G__9602 = (0);
seq__9577_9582 = G__9599;
chunk__9578_9583 = G__9600;
count__9579_9584 = G__9601;
i__9580_9585 = G__9602;
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
var G__9581 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9581__delegate.call(this,parent,child,more_children);};
G__9581.cljs$lang$maxFixedArity = 2;
G__9581.cljs$lang$applyTo = (function (arglist__9603){
var parent = cljs.core.first(arglist__9603);
arglist__9603 = cljs.core.next(arglist__9603);
var child = cljs.core.first(arglist__9603);
var more_children = cljs.core.rest(arglist__9603);
return G__9581__delegate(parent,child,more_children);
});
G__9581.cljs$core$IFn$_invoke$arity$variadic = G__9581__delegate;
return G__9581;
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
var G__9612__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__9608_9613 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__9609_9614 = null;var count__9610_9615 = (0);var i__9611_9616 = (0);while(true){
if((i__9611_9616 < count__9610_9615))
{var c_9617 = cljs.core._nth.call(null,chunk__9609_9614,i__9611_9616);prepend_BANG_.call(null,parent__$1,c_9617);
{
var G__9618 = seq__9608_9613;
var G__9619 = chunk__9609_9614;
var G__9620 = count__9610_9615;
var G__9621 = (i__9611_9616 + (1));
seq__9608_9613 = G__9618;
chunk__9609_9614 = G__9619;
count__9610_9615 = G__9620;
i__9611_9616 = G__9621;
continue;
}
} else
{var temp__4126__auto___9622 = cljs.core.seq.call(null,seq__9608_9613);if(temp__4126__auto___9622)
{var seq__9608_9623__$1 = temp__4126__auto___9622;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9608_9623__$1))
{var c__8039__auto___9624 = cljs.core.chunk_first.call(null,seq__9608_9623__$1);{
var G__9625 = cljs.core.chunk_rest.call(null,seq__9608_9623__$1);
var G__9626 = c__8039__auto___9624;
var G__9627 = cljs.core.count.call(null,c__8039__auto___9624);
var G__9628 = (0);
seq__9608_9613 = G__9625;
chunk__9609_9614 = G__9626;
count__9610_9615 = G__9627;
i__9611_9616 = G__9628;
continue;
}
} else
{var c_9629 = cljs.core.first.call(null,seq__9608_9623__$1);prepend_BANG_.call(null,parent__$1,c_9629);
{
var G__9630 = cljs.core.next.call(null,seq__9608_9623__$1);
var G__9631 = null;
var G__9632 = (0);
var G__9633 = (0);
seq__9608_9613 = G__9630;
chunk__9609_9614 = G__9631;
count__9610_9615 = G__9632;
i__9611_9616 = G__9633;
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
var G__9612 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9612__delegate.call(this,parent,child,more_children);};
G__9612.cljs$lang$maxFixedArity = 2;
G__9612.cljs$lang$applyTo = (function (arglist__9634){
var parent = cljs.core.first(arglist__9634);
arglist__9634 = cljs.core.next(arglist__9634);
var child = cljs.core.first(arglist__9634);
var more_children = cljs.core.rest(arglist__9634);
return G__9612__delegate(parent,child,more_children);
});
G__9612.cljs$core$IFn$_invoke$arity$variadic = G__9612__delegate;
return G__9612;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4124__auto___9635 = other__$1.nextSibling;if(cljs.core.truth_(temp__4124__auto___9635))
{var next_9636 = temp__4124__auto___9635;parent.insertBefore(actual_node,next_9636);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__9638 = dommy.template.__GT_node_like.call(null,parent);G__9638.innerHTML = "";
dommy.core.append_BANG_.call(null,G__9638,node_like);
return G__9638;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__9640 = elem__$1.parentNode;G__9640.removeChild(elem__$1);
return G__9640;
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
return (function (p__9646){var vec__9647 = p__9646;var k = cljs.core.nth.call(null,vec__9647,(0),null);var v = cljs.core.nth.call(null,vec__9647,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",-1610148039).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t9648 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t9648 = (function (v,k,vec__9647,p__9646,container,key_selectors_map,template,selector_map,meta9649){
this.v = v;
this.k = k;
this.vec__9647 = vec__9647;
this.p__9646 = p__9646;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta9649 = meta9649;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t9648.cljs$lang$type = true;
dommy.core.t9648.cljs$lang$ctorStr = "dommy.core/t9648";
dommy.core.t9648.cljs$lang$ctorPrWriter = ((function (vec__9647,k,v,container){
return (function (this__7850__auto__,writer__7851__auto__,opt__7852__auto__){return cljs.core._write.call(null,writer__7851__auto__,"dommy.core/t9648");
});})(vec__9647,k,v,container))
;
dommy.core.t9648.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__9647,k,v,container){
return (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});})(vec__9647,k,v,container))
;
dommy.core.t9648.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__9647,k,v,container){
return (function (_9650){var self__ = this;
var _9650__$1 = this;return self__.meta9649;
});})(vec__9647,k,v,container))
;
dommy.core.t9648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__9647,k,v,container){
return (function (_9650,meta9649__$1){var self__ = this;
var _9650__$1 = this;return (new dommy.core.t9648(self__.v,self__.k,self__.vec__9647,self__.p__9646,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta9649__$1));
});})(vec__9647,k,v,container))
;
dommy.core.__GT_t9648 = ((function (vec__9647,k,v,container){
return (function __GT_t9648(v__$1,k__$1,vec__9647__$1,p__9646__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta9649){return (new dommy.core.t9648(v__$1,k__$1,vec__9647__$1,p__9646__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta9649));
});})(vec__9647,k,v,container))
;
}
return (new dommy.core.t9648(v,k,vec__9647,p__9646,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
});})(container))
,key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__9651_SHARP_){return p1__9651_SHARP_.parentNode;
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
return (function (p1__9652_SHARP_){return !((p1__9652_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__9653){var vec__9654 = p__9653;var special_mouse_event = cljs.core.nth.call(null,vec__9654,(0),null);var real_mouse_event = cljs.core.nth.call(null,vec__9654,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__9654,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__9654,special_mouse_event,real_mouse_event){
return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__7283__auto__ = event.selectedTarget;if(cljs.core.truth_(or__7283__auto__))
{return or__7283__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__7271__auto__ = related_target;if(cljs.core.truth_(and__7271__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__7271__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
;})(vec__9654,special_mouse_event,real_mouse_event))
});})(vec__9654,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__7271__auto__ = selected_target;if(cljs.core.truth_(and__7271__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else
{return and__7271__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__7283__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__7283__auto__))
{return or__7283__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__9655){
var elem = cljs.core.first(arglist__9655);
arglist__9655 = cljs.core.next(arglist__9655);
var f = cljs.core.first(arglist__9655);
var args = cljs.core.rest(arglist__9655);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__9656_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__9656_SHARP_));
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
var vec__9680_9703 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_9704 = cljs.core.nth.call(null,vec__9680_9703,(0),null);var selector_9705 = cljs.core.nth.call(null,vec__9680_9703,(1),null);var seq__9681_9706 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__9688_9707 = null;var count__9689_9708 = (0);var i__9690_9709 = (0);while(true){
if((i__9690_9709 < count__9689_9708))
{var vec__9697_9710 = cljs.core._nth.call(null,chunk__9688_9707,i__9690_9709);var orig_type_9711 = cljs.core.nth.call(null,vec__9697_9710,(0),null);var f_9712 = cljs.core.nth.call(null,vec__9697_9710,(1),null);var seq__9691_9713 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9711,new cljs.core.PersistentArrayMap.fromArray([orig_type_9711,cljs.core.identity], true, false)));var chunk__9693_9714 = null;var count__9694_9715 = (0);var i__9695_9716 = (0);while(true){
if((i__9695_9716 < count__9694_9715))
{var vec__9698_9717 = cljs.core._nth.call(null,chunk__9693_9714,i__9695_9716);var actual_type_9718 = cljs.core.nth.call(null,vec__9698_9717,(0),null);var factory_9719 = cljs.core.nth.call(null,vec__9698_9717,(1),null);var canonical_f_9720 = (cljs.core.truth_(selector_9705)?cljs.core.partial.call(null,dommy.core.live_listener,elem_9704,selector_9705):cljs.core.identity).call(null,factory_9719.call(null,f_9712));dommy.core.update_event_listeners_BANG_.call(null,elem_9704,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9705,actual_type_9718,f_9712], null),canonical_f_9720);
if(cljs.core.truth_(elem_9704.addEventListener))
{elem_9704.addEventListener(cljs.core.name.call(null,actual_type_9718),canonical_f_9720);
} else
{elem_9704.attachEvent(cljs.core.name.call(null,actual_type_9718),canonical_f_9720);
}
{
var G__9721 = seq__9691_9713;
var G__9722 = chunk__9693_9714;
var G__9723 = count__9694_9715;
var G__9724 = (i__9695_9716 + (1));
seq__9691_9713 = G__9721;
chunk__9693_9714 = G__9722;
count__9694_9715 = G__9723;
i__9695_9716 = G__9724;
continue;
}
} else
{var temp__4126__auto___9725 = cljs.core.seq.call(null,seq__9691_9713);if(temp__4126__auto___9725)
{var seq__9691_9726__$1 = temp__4126__auto___9725;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9691_9726__$1))
{var c__8039__auto___9727 = cljs.core.chunk_first.call(null,seq__9691_9726__$1);{
var G__9728 = cljs.core.chunk_rest.call(null,seq__9691_9726__$1);
var G__9729 = c__8039__auto___9727;
var G__9730 = cljs.core.count.call(null,c__8039__auto___9727);
var G__9731 = (0);
seq__9691_9713 = G__9728;
chunk__9693_9714 = G__9729;
count__9694_9715 = G__9730;
i__9695_9716 = G__9731;
continue;
}
} else
{var vec__9699_9732 = cljs.core.first.call(null,seq__9691_9726__$1);var actual_type_9733 = cljs.core.nth.call(null,vec__9699_9732,(0),null);var factory_9734 = cljs.core.nth.call(null,vec__9699_9732,(1),null);var canonical_f_9735 = (cljs.core.truth_(selector_9705)?cljs.core.partial.call(null,dommy.core.live_listener,elem_9704,selector_9705):cljs.core.identity).call(null,factory_9734.call(null,f_9712));dommy.core.update_event_listeners_BANG_.call(null,elem_9704,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9705,actual_type_9733,f_9712], null),canonical_f_9735);
if(cljs.core.truth_(elem_9704.addEventListener))
{elem_9704.addEventListener(cljs.core.name.call(null,actual_type_9733),canonical_f_9735);
} else
{elem_9704.attachEvent(cljs.core.name.call(null,actual_type_9733),canonical_f_9735);
}
{
var G__9736 = cljs.core.next.call(null,seq__9691_9726__$1);
var G__9737 = null;
var G__9738 = (0);
var G__9739 = (0);
seq__9691_9713 = G__9736;
chunk__9693_9714 = G__9737;
count__9694_9715 = G__9738;
i__9695_9716 = G__9739;
continue;
}
}
} else
{}
}
break;
}
{
var G__9740 = seq__9681_9706;
var G__9741 = chunk__9688_9707;
var G__9742 = count__9689_9708;
var G__9743 = (i__9690_9709 + (1));
seq__9681_9706 = G__9740;
chunk__9688_9707 = G__9741;
count__9689_9708 = G__9742;
i__9690_9709 = G__9743;
continue;
}
} else
{var temp__4126__auto___9744 = cljs.core.seq.call(null,seq__9681_9706);if(temp__4126__auto___9744)
{var seq__9681_9745__$1 = temp__4126__auto___9744;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9681_9745__$1))
{var c__8039__auto___9746 = cljs.core.chunk_first.call(null,seq__9681_9745__$1);{
var G__9747 = cljs.core.chunk_rest.call(null,seq__9681_9745__$1);
var G__9748 = c__8039__auto___9746;
var G__9749 = cljs.core.count.call(null,c__8039__auto___9746);
var G__9750 = (0);
seq__9681_9706 = G__9747;
chunk__9688_9707 = G__9748;
count__9689_9708 = G__9749;
i__9690_9709 = G__9750;
continue;
}
} else
{var vec__9700_9751 = cljs.core.first.call(null,seq__9681_9745__$1);var orig_type_9752 = cljs.core.nth.call(null,vec__9700_9751,(0),null);var f_9753 = cljs.core.nth.call(null,vec__9700_9751,(1),null);var seq__9682_9754 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9752,new cljs.core.PersistentArrayMap.fromArray([orig_type_9752,cljs.core.identity], true, false)));var chunk__9684_9755 = null;var count__9685_9756 = (0);var i__9686_9757 = (0);while(true){
if((i__9686_9757 < count__9685_9756))
{var vec__9701_9758 = cljs.core._nth.call(null,chunk__9684_9755,i__9686_9757);var actual_type_9759 = cljs.core.nth.call(null,vec__9701_9758,(0),null);var factory_9760 = cljs.core.nth.call(null,vec__9701_9758,(1),null);var canonical_f_9761 = (cljs.core.truth_(selector_9705)?cljs.core.partial.call(null,dommy.core.live_listener,elem_9704,selector_9705):cljs.core.identity).call(null,factory_9760.call(null,f_9753));dommy.core.update_event_listeners_BANG_.call(null,elem_9704,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9705,actual_type_9759,f_9753], null),canonical_f_9761);
if(cljs.core.truth_(elem_9704.addEventListener))
{elem_9704.addEventListener(cljs.core.name.call(null,actual_type_9759),canonical_f_9761);
} else
{elem_9704.attachEvent(cljs.core.name.call(null,actual_type_9759),canonical_f_9761);
}
{
var G__9762 = seq__9682_9754;
var G__9763 = chunk__9684_9755;
var G__9764 = count__9685_9756;
var G__9765 = (i__9686_9757 + (1));
seq__9682_9754 = G__9762;
chunk__9684_9755 = G__9763;
count__9685_9756 = G__9764;
i__9686_9757 = G__9765;
continue;
}
} else
{var temp__4126__auto___9766__$1 = cljs.core.seq.call(null,seq__9682_9754);if(temp__4126__auto___9766__$1)
{var seq__9682_9767__$1 = temp__4126__auto___9766__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9682_9767__$1))
{var c__8039__auto___9768 = cljs.core.chunk_first.call(null,seq__9682_9767__$1);{
var G__9769 = cljs.core.chunk_rest.call(null,seq__9682_9767__$1);
var G__9770 = c__8039__auto___9768;
var G__9771 = cljs.core.count.call(null,c__8039__auto___9768);
var G__9772 = (0);
seq__9682_9754 = G__9769;
chunk__9684_9755 = G__9770;
count__9685_9756 = G__9771;
i__9686_9757 = G__9772;
continue;
}
} else
{var vec__9702_9773 = cljs.core.first.call(null,seq__9682_9767__$1);var actual_type_9774 = cljs.core.nth.call(null,vec__9702_9773,(0),null);var factory_9775 = cljs.core.nth.call(null,vec__9702_9773,(1),null);var canonical_f_9776 = (cljs.core.truth_(selector_9705)?cljs.core.partial.call(null,dommy.core.live_listener,elem_9704,selector_9705):cljs.core.identity).call(null,factory_9775.call(null,f_9753));dommy.core.update_event_listeners_BANG_.call(null,elem_9704,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9705,actual_type_9774,f_9753], null),canonical_f_9776);
if(cljs.core.truth_(elem_9704.addEventListener))
{elem_9704.addEventListener(cljs.core.name.call(null,actual_type_9774),canonical_f_9776);
} else
{elem_9704.attachEvent(cljs.core.name.call(null,actual_type_9774),canonical_f_9776);
}
{
var G__9777 = cljs.core.next.call(null,seq__9682_9767__$1);
var G__9778 = null;
var G__9779 = (0);
var G__9780 = (0);
seq__9682_9754 = G__9777;
chunk__9684_9755 = G__9778;
count__9685_9756 = G__9779;
i__9686_9757 = G__9780;
continue;
}
}
} else
{}
}
break;
}
{
var G__9781 = cljs.core.next.call(null,seq__9681_9745__$1);
var G__9782 = null;
var G__9783 = (0);
var G__9784 = (0);
seq__9681_9706 = G__9781;
chunk__9688_9707 = G__9782;
count__9689_9708 = G__9783;
i__9690_9709 = G__9784;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__9785){
var elem_sel = cljs.core.first(arglist__9785);
var type_fs = cljs.core.rest(arglist__9785);
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
var vec__9809_9832 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_9833 = cljs.core.nth.call(null,vec__9809_9832,(0),null);var selector_9834 = cljs.core.nth.call(null,vec__9809_9832,(1),null);var seq__9810_9835 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__9817_9836 = null;var count__9818_9837 = (0);var i__9819_9838 = (0);while(true){
if((i__9819_9838 < count__9818_9837))
{var vec__9826_9839 = cljs.core._nth.call(null,chunk__9817_9836,i__9819_9838);var orig_type_9840 = cljs.core.nth.call(null,vec__9826_9839,(0),null);var f_9841 = cljs.core.nth.call(null,vec__9826_9839,(1),null);var seq__9820_9842 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9840,new cljs.core.PersistentArrayMap.fromArray([orig_type_9840,cljs.core.identity], true, false)));var chunk__9822_9843 = null;var count__9823_9844 = (0);var i__9824_9845 = (0);while(true){
if((i__9824_9845 < count__9823_9844))
{var vec__9827_9846 = cljs.core._nth.call(null,chunk__9822_9843,i__9824_9845);var actual_type_9847 = cljs.core.nth.call(null,vec__9827_9846,(0),null);var __9848 = cljs.core.nth.call(null,vec__9827_9846,(1),null);var keys_9849 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9834,actual_type_9847,f_9841], null);var canonical_f_9850 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9833),keys_9849);dommy.core.update_event_listeners_BANG_.call(null,elem_9833,dommy.utils.dissoc_in,keys_9849);
if(cljs.core.truth_(elem_9833.removeEventListener))
{elem_9833.removeEventListener(cljs.core.name.call(null,actual_type_9847),canonical_f_9850);
} else
{elem_9833.detachEvent(cljs.core.name.call(null,actual_type_9847),canonical_f_9850);
}
{
var G__9851 = seq__9820_9842;
var G__9852 = chunk__9822_9843;
var G__9853 = count__9823_9844;
var G__9854 = (i__9824_9845 + (1));
seq__9820_9842 = G__9851;
chunk__9822_9843 = G__9852;
count__9823_9844 = G__9853;
i__9824_9845 = G__9854;
continue;
}
} else
{var temp__4126__auto___9855 = cljs.core.seq.call(null,seq__9820_9842);if(temp__4126__auto___9855)
{var seq__9820_9856__$1 = temp__4126__auto___9855;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9820_9856__$1))
{var c__8039__auto___9857 = cljs.core.chunk_first.call(null,seq__9820_9856__$1);{
var G__9858 = cljs.core.chunk_rest.call(null,seq__9820_9856__$1);
var G__9859 = c__8039__auto___9857;
var G__9860 = cljs.core.count.call(null,c__8039__auto___9857);
var G__9861 = (0);
seq__9820_9842 = G__9858;
chunk__9822_9843 = G__9859;
count__9823_9844 = G__9860;
i__9824_9845 = G__9861;
continue;
}
} else
{var vec__9828_9862 = cljs.core.first.call(null,seq__9820_9856__$1);var actual_type_9863 = cljs.core.nth.call(null,vec__9828_9862,(0),null);var __9864 = cljs.core.nth.call(null,vec__9828_9862,(1),null);var keys_9865 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9834,actual_type_9863,f_9841], null);var canonical_f_9866 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9833),keys_9865);dommy.core.update_event_listeners_BANG_.call(null,elem_9833,dommy.utils.dissoc_in,keys_9865);
if(cljs.core.truth_(elem_9833.removeEventListener))
{elem_9833.removeEventListener(cljs.core.name.call(null,actual_type_9863),canonical_f_9866);
} else
{elem_9833.detachEvent(cljs.core.name.call(null,actual_type_9863),canonical_f_9866);
}
{
var G__9867 = cljs.core.next.call(null,seq__9820_9856__$1);
var G__9868 = null;
var G__9869 = (0);
var G__9870 = (0);
seq__9820_9842 = G__9867;
chunk__9822_9843 = G__9868;
count__9823_9844 = G__9869;
i__9824_9845 = G__9870;
continue;
}
}
} else
{}
}
break;
}
{
var G__9871 = seq__9810_9835;
var G__9872 = chunk__9817_9836;
var G__9873 = count__9818_9837;
var G__9874 = (i__9819_9838 + (1));
seq__9810_9835 = G__9871;
chunk__9817_9836 = G__9872;
count__9818_9837 = G__9873;
i__9819_9838 = G__9874;
continue;
}
} else
{var temp__4126__auto___9875 = cljs.core.seq.call(null,seq__9810_9835);if(temp__4126__auto___9875)
{var seq__9810_9876__$1 = temp__4126__auto___9875;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9810_9876__$1))
{var c__8039__auto___9877 = cljs.core.chunk_first.call(null,seq__9810_9876__$1);{
var G__9878 = cljs.core.chunk_rest.call(null,seq__9810_9876__$1);
var G__9879 = c__8039__auto___9877;
var G__9880 = cljs.core.count.call(null,c__8039__auto___9877);
var G__9881 = (0);
seq__9810_9835 = G__9878;
chunk__9817_9836 = G__9879;
count__9818_9837 = G__9880;
i__9819_9838 = G__9881;
continue;
}
} else
{var vec__9829_9882 = cljs.core.first.call(null,seq__9810_9876__$1);var orig_type_9883 = cljs.core.nth.call(null,vec__9829_9882,(0),null);var f_9884 = cljs.core.nth.call(null,vec__9829_9882,(1),null);var seq__9811_9885 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9883,new cljs.core.PersistentArrayMap.fromArray([orig_type_9883,cljs.core.identity], true, false)));var chunk__9813_9886 = null;var count__9814_9887 = (0);var i__9815_9888 = (0);while(true){
if((i__9815_9888 < count__9814_9887))
{var vec__9830_9889 = cljs.core._nth.call(null,chunk__9813_9886,i__9815_9888);var actual_type_9890 = cljs.core.nth.call(null,vec__9830_9889,(0),null);var __9891 = cljs.core.nth.call(null,vec__9830_9889,(1),null);var keys_9892 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9834,actual_type_9890,f_9884], null);var canonical_f_9893 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9833),keys_9892);dommy.core.update_event_listeners_BANG_.call(null,elem_9833,dommy.utils.dissoc_in,keys_9892);
if(cljs.core.truth_(elem_9833.removeEventListener))
{elem_9833.removeEventListener(cljs.core.name.call(null,actual_type_9890),canonical_f_9893);
} else
{elem_9833.detachEvent(cljs.core.name.call(null,actual_type_9890),canonical_f_9893);
}
{
var G__9894 = seq__9811_9885;
var G__9895 = chunk__9813_9886;
var G__9896 = count__9814_9887;
var G__9897 = (i__9815_9888 + (1));
seq__9811_9885 = G__9894;
chunk__9813_9886 = G__9895;
count__9814_9887 = G__9896;
i__9815_9888 = G__9897;
continue;
}
} else
{var temp__4126__auto___9898__$1 = cljs.core.seq.call(null,seq__9811_9885);if(temp__4126__auto___9898__$1)
{var seq__9811_9899__$1 = temp__4126__auto___9898__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9811_9899__$1))
{var c__8039__auto___9900 = cljs.core.chunk_first.call(null,seq__9811_9899__$1);{
var G__9901 = cljs.core.chunk_rest.call(null,seq__9811_9899__$1);
var G__9902 = c__8039__auto___9900;
var G__9903 = cljs.core.count.call(null,c__8039__auto___9900);
var G__9904 = (0);
seq__9811_9885 = G__9901;
chunk__9813_9886 = G__9902;
count__9814_9887 = G__9903;
i__9815_9888 = G__9904;
continue;
}
} else
{var vec__9831_9905 = cljs.core.first.call(null,seq__9811_9899__$1);var actual_type_9906 = cljs.core.nth.call(null,vec__9831_9905,(0),null);var __9907 = cljs.core.nth.call(null,vec__9831_9905,(1),null);var keys_9908 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9834,actual_type_9906,f_9884], null);var canonical_f_9909 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9833),keys_9908);dommy.core.update_event_listeners_BANG_.call(null,elem_9833,dommy.utils.dissoc_in,keys_9908);
if(cljs.core.truth_(elem_9833.removeEventListener))
{elem_9833.removeEventListener(cljs.core.name.call(null,actual_type_9906),canonical_f_9909);
} else
{elem_9833.detachEvent(cljs.core.name.call(null,actual_type_9906),canonical_f_9909);
}
{
var G__9910 = cljs.core.next.call(null,seq__9811_9899__$1);
var G__9911 = null;
var G__9912 = (0);
var G__9913 = (0);
seq__9811_9885 = G__9910;
chunk__9813_9886 = G__9911;
count__9814_9887 = G__9912;
i__9815_9888 = G__9913;
continue;
}
}
} else
{}
}
break;
}
{
var G__9914 = cljs.core.next.call(null,seq__9810_9876__$1);
var G__9915 = null;
var G__9916 = (0);
var G__9917 = (0);
seq__9810_9835 = G__9914;
chunk__9817_9836 = G__9915;
count__9818_9837 = G__9916;
i__9819_9838 = G__9917;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__9918){
var elem_sel = cljs.core.first(arglist__9918);
var type_fs = cljs.core.rest(arglist__9918);
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
var vec__9926_9933 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_9934 = cljs.core.nth.call(null,vec__9926_9933,(0),null);var selector_9935 = cljs.core.nth.call(null,vec__9926_9933,(1),null);var seq__9927_9936 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__9928_9937 = null;var count__9929_9938 = (0);var i__9930_9939 = (0);while(true){
if((i__9930_9939 < count__9929_9938))
{var vec__9931_9940 = cljs.core._nth.call(null,chunk__9928_9937,i__9930_9939);var type_9941 = cljs.core.nth.call(null,vec__9931_9940,(0),null);var f_9942 = cljs.core.nth.call(null,vec__9931_9940,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_9941,((function (seq__9927_9936,chunk__9928_9937,count__9929_9938,i__9930_9939,vec__9931_9940,type_9941,f_9942,vec__9926_9933,elem_9934,selector_9935){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_9941,this_fn);
return f_9942.call(null,e);
});})(seq__9927_9936,chunk__9928_9937,count__9929_9938,i__9930_9939,vec__9931_9940,type_9941,f_9942,vec__9926_9933,elem_9934,selector_9935))
);
{
var G__9943 = seq__9927_9936;
var G__9944 = chunk__9928_9937;
var G__9945 = count__9929_9938;
var G__9946 = (i__9930_9939 + (1));
seq__9927_9936 = G__9943;
chunk__9928_9937 = G__9944;
count__9929_9938 = G__9945;
i__9930_9939 = G__9946;
continue;
}
} else
{var temp__4126__auto___9947 = cljs.core.seq.call(null,seq__9927_9936);if(temp__4126__auto___9947)
{var seq__9927_9948__$1 = temp__4126__auto___9947;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9927_9948__$1))
{var c__8039__auto___9949 = cljs.core.chunk_first.call(null,seq__9927_9948__$1);{
var G__9950 = cljs.core.chunk_rest.call(null,seq__9927_9948__$1);
var G__9951 = c__8039__auto___9949;
var G__9952 = cljs.core.count.call(null,c__8039__auto___9949);
var G__9953 = (0);
seq__9927_9936 = G__9950;
chunk__9928_9937 = G__9951;
count__9929_9938 = G__9952;
i__9930_9939 = G__9953;
continue;
}
} else
{var vec__9932_9954 = cljs.core.first.call(null,seq__9927_9948__$1);var type_9955 = cljs.core.nth.call(null,vec__9932_9954,(0),null);var f_9956 = cljs.core.nth.call(null,vec__9932_9954,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_9955,((function (seq__9927_9936,chunk__9928_9937,count__9929_9938,i__9930_9939,vec__9932_9954,type_9955,f_9956,seq__9927_9948__$1,temp__4126__auto___9947,vec__9926_9933,elem_9934,selector_9935){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_9955,this_fn);
return f_9956.call(null,e);
});})(seq__9927_9936,chunk__9928_9937,count__9929_9938,i__9930_9939,vec__9932_9954,type_9955,f_9956,seq__9927_9948__$1,temp__4126__auto___9947,vec__9926_9933,elem_9934,selector_9935))
);
{
var G__9957 = cljs.core.next.call(null,seq__9927_9948__$1);
var G__9958 = null;
var G__9959 = (0);
var G__9960 = (0);
seq__9927_9936 = G__9957;
chunk__9928_9937 = G__9958;
count__9929_9938 = G__9959;
i__9930_9939 = G__9960;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__9961){
var elem_sel = cljs.core.first(arglist__9961);
var type_fs = cljs.core.rest(arglist__9961);
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
var fire_BANG___delegate = function (node,event_type,p__9962){var vec__9964 = p__9962;var update_event_BANG_ = cljs.core.nth.call(null,vec__9964,(0),null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1027057938,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",1597931428,null)))))));
}
var update_event_BANG___$1 = (function (){var or__7283__auto__ = update_event_BANG_;if(cljs.core.truth_(or__7283__auto__))
{return or__7283__auto__;
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
var p__9962 = null;if (arguments.length > 2) {
  p__9962 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__9962);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__9965){
var node = cljs.core.first(arglist__9965);
arglist__9965 = cljs.core.next(arglist__9965);
var event_type = cljs.core.first(arglist__9965);
var p__9962 = cljs.core.rest(arglist__9965);
return fire_BANG___delegate(node,event_type,p__9962);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
