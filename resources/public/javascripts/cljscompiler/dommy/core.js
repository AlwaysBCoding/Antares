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
var append_BANG___2 = (function (parent,child){var G__9829 = dommy.template.__GT_node_like.call(null,parent);G__9829.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__9829;
});
var append_BANG___3 = (function() { 
var G__9834__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__9830_9835 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__9831_9836 = null;var count__9832_9837 = (0);var i__9833_9838 = (0);while(true){
if((i__9833_9838 < count__9832_9837))
{var c_9839 = cljs.core._nth.call(null,chunk__9831_9836,i__9833_9838);append_BANG_.call(null,parent__$1,c_9839);
{
var G__9840 = seq__9830_9835;
var G__9841 = chunk__9831_9836;
var G__9842 = count__9832_9837;
var G__9843 = (i__9833_9838 + (1));
seq__9830_9835 = G__9840;
chunk__9831_9836 = G__9841;
count__9832_9837 = G__9842;
i__9833_9838 = G__9843;
continue;
}
} else
{var temp__4126__auto___9844 = cljs.core.seq.call(null,seq__9830_9835);if(temp__4126__auto___9844)
{var seq__9830_9845__$1 = temp__4126__auto___9844;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9830_9845__$1))
{var c__4299__auto___9846 = cljs.core.chunk_first.call(null,seq__9830_9845__$1);{
var G__9847 = cljs.core.chunk_rest.call(null,seq__9830_9845__$1);
var G__9848 = c__4299__auto___9846;
var G__9849 = cljs.core.count.call(null,c__4299__auto___9846);
var G__9850 = (0);
seq__9830_9835 = G__9847;
chunk__9831_9836 = G__9848;
count__9832_9837 = G__9849;
i__9833_9838 = G__9850;
continue;
}
} else
{var c_9851 = cljs.core.first.call(null,seq__9830_9845__$1);append_BANG_.call(null,parent__$1,c_9851);
{
var G__9852 = cljs.core.next.call(null,seq__9830_9845__$1);
var G__9853 = null;
var G__9854 = (0);
var G__9855 = (0);
seq__9830_9835 = G__9852;
chunk__9831_9836 = G__9853;
count__9832_9837 = G__9854;
i__9833_9838 = G__9855;
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
var G__9834 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9834__delegate.call(this,parent,child,more_children);};
G__9834.cljs$lang$maxFixedArity = 2;
G__9834.cljs$lang$applyTo = (function (arglist__9856){
var parent = cljs.core.first(arglist__9856);
arglist__9856 = cljs.core.next(arglist__9856);
var child = cljs.core.first(arglist__9856);
var more_children = cljs.core.rest(arglist__9856);
return G__9834__delegate(parent,child,more_children);
});
G__9834.cljs$core$IFn$_invoke$arity$variadic = G__9834__delegate;
return G__9834;
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
var G__9865__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__9861_9866 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__9862_9867 = null;var count__9863_9868 = (0);var i__9864_9869 = (0);while(true){
if((i__9864_9869 < count__9863_9868))
{var c_9870 = cljs.core._nth.call(null,chunk__9862_9867,i__9864_9869);prepend_BANG_.call(null,parent__$1,c_9870);
{
var G__9871 = seq__9861_9866;
var G__9872 = chunk__9862_9867;
var G__9873 = count__9863_9868;
var G__9874 = (i__9864_9869 + (1));
seq__9861_9866 = G__9871;
chunk__9862_9867 = G__9872;
count__9863_9868 = G__9873;
i__9864_9869 = G__9874;
continue;
}
} else
{var temp__4126__auto___9875 = cljs.core.seq.call(null,seq__9861_9866);if(temp__4126__auto___9875)
{var seq__9861_9876__$1 = temp__4126__auto___9875;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9861_9876__$1))
{var c__4299__auto___9877 = cljs.core.chunk_first.call(null,seq__9861_9876__$1);{
var G__9878 = cljs.core.chunk_rest.call(null,seq__9861_9876__$1);
var G__9879 = c__4299__auto___9877;
var G__9880 = cljs.core.count.call(null,c__4299__auto___9877);
var G__9881 = (0);
seq__9861_9866 = G__9878;
chunk__9862_9867 = G__9879;
count__9863_9868 = G__9880;
i__9864_9869 = G__9881;
continue;
}
} else
{var c_9882 = cljs.core.first.call(null,seq__9861_9876__$1);prepend_BANG_.call(null,parent__$1,c_9882);
{
var G__9883 = cljs.core.next.call(null,seq__9861_9876__$1);
var G__9884 = null;
var G__9885 = (0);
var G__9886 = (0);
seq__9861_9866 = G__9883;
chunk__9862_9867 = G__9884;
count__9863_9868 = G__9885;
i__9864_9869 = G__9886;
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
var G__9865 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9865__delegate.call(this,parent,child,more_children);};
G__9865.cljs$lang$maxFixedArity = 2;
G__9865.cljs$lang$applyTo = (function (arglist__9887){
var parent = cljs.core.first(arglist__9887);
arglist__9887 = cljs.core.next(arglist__9887);
var child = cljs.core.first(arglist__9887);
var more_children = cljs.core.rest(arglist__9887);
return G__9865__delegate(parent,child,more_children);
});
G__9865.cljs$core$IFn$_invoke$arity$variadic = G__9865__delegate;
return G__9865;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4124__auto___9888 = other__$1.nextSibling;if(cljs.core.truth_(temp__4124__auto___9888))
{var next_9889 = temp__4124__auto___9888;parent.insertBefore(actual_node,next_9889);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__9891 = dommy.template.__GT_node_like.call(null,parent);G__9891.innerHTML = "";
dommy.core.append_BANG_.call(null,G__9891,node_like);
return G__9891;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__9893 = elem__$1.parentNode;G__9893.removeChild(elem__$1);
return G__9893;
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
return (function (p__9899){var vec__9900 = p__9899;var k = cljs.core.nth.call(null,vec__9900,(0),null);var v = cljs.core.nth.call(null,vec__9900,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",-1610148039).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t9901 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t9901 = (function (v,k,vec__9900,p__9899,container,key_selectors_map,template,selector_map,meta9902){
this.v = v;
this.k = k;
this.vec__9900 = vec__9900;
this.p__9899 = p__9899;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta9902 = meta9902;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t9901.cljs$lang$type = true;
dommy.core.t9901.cljs$lang$ctorStr = "dommy.core/t9901";
dommy.core.t9901.cljs$lang$ctorPrWriter = ((function (vec__9900,k,v,container){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"dommy.core/t9901");
});})(vec__9900,k,v,container))
;
dommy.core.t9901.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__9900,k,v,container){
return (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});})(vec__9900,k,v,container))
;
dommy.core.t9901.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__9900,k,v,container){
return (function (_9903){var self__ = this;
var _9903__$1 = this;return self__.meta9902;
});})(vec__9900,k,v,container))
;
dommy.core.t9901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__9900,k,v,container){
return (function (_9903,meta9902__$1){var self__ = this;
var _9903__$1 = this;return (new dommy.core.t9901(self__.v,self__.k,self__.vec__9900,self__.p__9899,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta9902__$1));
});})(vec__9900,k,v,container))
;
dommy.core.__GT_t9901 = ((function (vec__9900,k,v,container){
return (function __GT_t9901(v__$1,k__$1,vec__9900__$1,p__9899__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta9902){return (new dommy.core.t9901(v__$1,k__$1,vec__9900__$1,p__9899__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta9902));
});})(vec__9900,k,v,container))
;
}
return (new dommy.core.t9901(v,k,vec__9900,p__9899,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
});})(container))
,key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__9904_SHARP_){return p1__9904_SHARP_.parentNode;
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
return (function (p1__9905_SHARP_){return !((p1__9905_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__9906){var vec__9907 = p__9906;var special_mouse_event = cljs.core.nth.call(null,vec__9907,(0),null);var real_mouse_event = cljs.core.nth.call(null,vec__9907,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__9907,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__9907,special_mouse_event,real_mouse_event){
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
;})(vec__9907,special_mouse_event,real_mouse_event))
});})(vec__9907,special_mouse_event,real_mouse_event))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__9908){
var elem = cljs.core.first(arglist__9908);
arglist__9908 = cljs.core.next(arglist__9908);
var f = cljs.core.first(arglist__9908);
var args = cljs.core.rest(arglist__9908);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__9909_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__9909_SHARP_));
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
var vec__9933_9956 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_9957 = cljs.core.nth.call(null,vec__9933_9956,(0),null);var selector_9958 = cljs.core.nth.call(null,vec__9933_9956,(1),null);var seq__9934_9959 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__9941_9960 = null;var count__9942_9961 = (0);var i__9943_9962 = (0);while(true){
if((i__9943_9962 < count__9942_9961))
{var vec__9950_9963 = cljs.core._nth.call(null,chunk__9941_9960,i__9943_9962);var orig_type_9964 = cljs.core.nth.call(null,vec__9950_9963,(0),null);var f_9965 = cljs.core.nth.call(null,vec__9950_9963,(1),null);var seq__9944_9966 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9964,new cljs.core.PersistentArrayMap.fromArray([orig_type_9964,cljs.core.identity], true, false)));var chunk__9946_9967 = null;var count__9947_9968 = (0);var i__9948_9969 = (0);while(true){
if((i__9948_9969 < count__9947_9968))
{var vec__9951_9970 = cljs.core._nth.call(null,chunk__9946_9967,i__9948_9969);var actual_type_9971 = cljs.core.nth.call(null,vec__9951_9970,(0),null);var factory_9972 = cljs.core.nth.call(null,vec__9951_9970,(1),null);var canonical_f_9973 = (cljs.core.truth_(selector_9958)?cljs.core.partial.call(null,dommy.core.live_listener,elem_9957,selector_9958):cljs.core.identity).call(null,factory_9972.call(null,f_9965));dommy.core.update_event_listeners_BANG_.call(null,elem_9957,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9958,actual_type_9971,f_9965], null),canonical_f_9973);
if(cljs.core.truth_(elem_9957.addEventListener))
{elem_9957.addEventListener(cljs.core.name.call(null,actual_type_9971),canonical_f_9973);
} else
{elem_9957.attachEvent(cljs.core.name.call(null,actual_type_9971),canonical_f_9973);
}
{
var G__9974 = seq__9944_9966;
var G__9975 = chunk__9946_9967;
var G__9976 = count__9947_9968;
var G__9977 = (i__9948_9969 + (1));
seq__9944_9966 = G__9974;
chunk__9946_9967 = G__9975;
count__9947_9968 = G__9976;
i__9948_9969 = G__9977;
continue;
}
} else
{var temp__4126__auto___9978 = cljs.core.seq.call(null,seq__9944_9966);if(temp__4126__auto___9978)
{var seq__9944_9979__$1 = temp__4126__auto___9978;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9944_9979__$1))
{var c__4299__auto___9980 = cljs.core.chunk_first.call(null,seq__9944_9979__$1);{
var G__9981 = cljs.core.chunk_rest.call(null,seq__9944_9979__$1);
var G__9982 = c__4299__auto___9980;
var G__9983 = cljs.core.count.call(null,c__4299__auto___9980);
var G__9984 = (0);
seq__9944_9966 = G__9981;
chunk__9946_9967 = G__9982;
count__9947_9968 = G__9983;
i__9948_9969 = G__9984;
continue;
}
} else
{var vec__9952_9985 = cljs.core.first.call(null,seq__9944_9979__$1);var actual_type_9986 = cljs.core.nth.call(null,vec__9952_9985,(0),null);var factory_9987 = cljs.core.nth.call(null,vec__9952_9985,(1),null);var canonical_f_9988 = (cljs.core.truth_(selector_9958)?cljs.core.partial.call(null,dommy.core.live_listener,elem_9957,selector_9958):cljs.core.identity).call(null,factory_9987.call(null,f_9965));dommy.core.update_event_listeners_BANG_.call(null,elem_9957,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9958,actual_type_9986,f_9965], null),canonical_f_9988);
if(cljs.core.truth_(elem_9957.addEventListener))
{elem_9957.addEventListener(cljs.core.name.call(null,actual_type_9986),canonical_f_9988);
} else
{elem_9957.attachEvent(cljs.core.name.call(null,actual_type_9986),canonical_f_9988);
}
{
var G__9989 = cljs.core.next.call(null,seq__9944_9979__$1);
var G__9990 = null;
var G__9991 = (0);
var G__9992 = (0);
seq__9944_9966 = G__9989;
chunk__9946_9967 = G__9990;
count__9947_9968 = G__9991;
i__9948_9969 = G__9992;
continue;
}
}
} else
{}
}
break;
}
{
var G__9993 = seq__9934_9959;
var G__9994 = chunk__9941_9960;
var G__9995 = count__9942_9961;
var G__9996 = (i__9943_9962 + (1));
seq__9934_9959 = G__9993;
chunk__9941_9960 = G__9994;
count__9942_9961 = G__9995;
i__9943_9962 = G__9996;
continue;
}
} else
{var temp__4126__auto___9997 = cljs.core.seq.call(null,seq__9934_9959);if(temp__4126__auto___9997)
{var seq__9934_9998__$1 = temp__4126__auto___9997;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9934_9998__$1))
{var c__4299__auto___9999 = cljs.core.chunk_first.call(null,seq__9934_9998__$1);{
var G__10000 = cljs.core.chunk_rest.call(null,seq__9934_9998__$1);
var G__10001 = c__4299__auto___9999;
var G__10002 = cljs.core.count.call(null,c__4299__auto___9999);
var G__10003 = (0);
seq__9934_9959 = G__10000;
chunk__9941_9960 = G__10001;
count__9942_9961 = G__10002;
i__9943_9962 = G__10003;
continue;
}
} else
{var vec__9953_10004 = cljs.core.first.call(null,seq__9934_9998__$1);var orig_type_10005 = cljs.core.nth.call(null,vec__9953_10004,(0),null);var f_10006 = cljs.core.nth.call(null,vec__9953_10004,(1),null);var seq__9935_10007 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_10005,new cljs.core.PersistentArrayMap.fromArray([orig_type_10005,cljs.core.identity], true, false)));var chunk__9937_10008 = null;var count__9938_10009 = (0);var i__9939_10010 = (0);while(true){
if((i__9939_10010 < count__9938_10009))
{var vec__9954_10011 = cljs.core._nth.call(null,chunk__9937_10008,i__9939_10010);var actual_type_10012 = cljs.core.nth.call(null,vec__9954_10011,(0),null);var factory_10013 = cljs.core.nth.call(null,vec__9954_10011,(1),null);var canonical_f_10014 = (cljs.core.truth_(selector_9958)?cljs.core.partial.call(null,dommy.core.live_listener,elem_9957,selector_9958):cljs.core.identity).call(null,factory_10013.call(null,f_10006));dommy.core.update_event_listeners_BANG_.call(null,elem_9957,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9958,actual_type_10012,f_10006], null),canonical_f_10014);
if(cljs.core.truth_(elem_9957.addEventListener))
{elem_9957.addEventListener(cljs.core.name.call(null,actual_type_10012),canonical_f_10014);
} else
{elem_9957.attachEvent(cljs.core.name.call(null,actual_type_10012),canonical_f_10014);
}
{
var G__10015 = seq__9935_10007;
var G__10016 = chunk__9937_10008;
var G__10017 = count__9938_10009;
var G__10018 = (i__9939_10010 + (1));
seq__9935_10007 = G__10015;
chunk__9937_10008 = G__10016;
count__9938_10009 = G__10017;
i__9939_10010 = G__10018;
continue;
}
} else
{var temp__4126__auto___10019__$1 = cljs.core.seq.call(null,seq__9935_10007);if(temp__4126__auto___10019__$1)
{var seq__9935_10020__$1 = temp__4126__auto___10019__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9935_10020__$1))
{var c__4299__auto___10021 = cljs.core.chunk_first.call(null,seq__9935_10020__$1);{
var G__10022 = cljs.core.chunk_rest.call(null,seq__9935_10020__$1);
var G__10023 = c__4299__auto___10021;
var G__10024 = cljs.core.count.call(null,c__4299__auto___10021);
var G__10025 = (0);
seq__9935_10007 = G__10022;
chunk__9937_10008 = G__10023;
count__9938_10009 = G__10024;
i__9939_10010 = G__10025;
continue;
}
} else
{var vec__9955_10026 = cljs.core.first.call(null,seq__9935_10020__$1);var actual_type_10027 = cljs.core.nth.call(null,vec__9955_10026,(0),null);var factory_10028 = cljs.core.nth.call(null,vec__9955_10026,(1),null);var canonical_f_10029 = (cljs.core.truth_(selector_9958)?cljs.core.partial.call(null,dommy.core.live_listener,elem_9957,selector_9958):cljs.core.identity).call(null,factory_10028.call(null,f_10006));dommy.core.update_event_listeners_BANG_.call(null,elem_9957,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9958,actual_type_10027,f_10006], null),canonical_f_10029);
if(cljs.core.truth_(elem_9957.addEventListener))
{elem_9957.addEventListener(cljs.core.name.call(null,actual_type_10027),canonical_f_10029);
} else
{elem_9957.attachEvent(cljs.core.name.call(null,actual_type_10027),canonical_f_10029);
}
{
var G__10030 = cljs.core.next.call(null,seq__9935_10020__$1);
var G__10031 = null;
var G__10032 = (0);
var G__10033 = (0);
seq__9935_10007 = G__10030;
chunk__9937_10008 = G__10031;
count__9938_10009 = G__10032;
i__9939_10010 = G__10033;
continue;
}
}
} else
{}
}
break;
}
{
var G__10034 = cljs.core.next.call(null,seq__9934_9998__$1);
var G__10035 = null;
var G__10036 = (0);
var G__10037 = (0);
seq__9934_9959 = G__10034;
chunk__9941_9960 = G__10035;
count__9942_9961 = G__10036;
i__9943_9962 = G__10037;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__10038){
var elem_sel = cljs.core.first(arglist__10038);
var type_fs = cljs.core.rest(arglist__10038);
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
var vec__10062_10085 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_10086 = cljs.core.nth.call(null,vec__10062_10085,(0),null);var selector_10087 = cljs.core.nth.call(null,vec__10062_10085,(1),null);var seq__10063_10088 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__10070_10089 = null;var count__10071_10090 = (0);var i__10072_10091 = (0);while(true){
if((i__10072_10091 < count__10071_10090))
{var vec__10079_10092 = cljs.core._nth.call(null,chunk__10070_10089,i__10072_10091);var orig_type_10093 = cljs.core.nth.call(null,vec__10079_10092,(0),null);var f_10094 = cljs.core.nth.call(null,vec__10079_10092,(1),null);var seq__10073_10095 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_10093,new cljs.core.PersistentArrayMap.fromArray([orig_type_10093,cljs.core.identity], true, false)));var chunk__10075_10096 = null;var count__10076_10097 = (0);var i__10077_10098 = (0);while(true){
if((i__10077_10098 < count__10076_10097))
{var vec__10080_10099 = cljs.core._nth.call(null,chunk__10075_10096,i__10077_10098);var actual_type_10100 = cljs.core.nth.call(null,vec__10080_10099,(0),null);var __10101 = cljs.core.nth.call(null,vec__10080_10099,(1),null);var keys_10102 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10087,actual_type_10100,f_10094], null);var canonical_f_10103 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_10086),keys_10102);dommy.core.update_event_listeners_BANG_.call(null,elem_10086,dommy.utils.dissoc_in,keys_10102);
if(cljs.core.truth_(elem_10086.removeEventListener))
{elem_10086.removeEventListener(cljs.core.name.call(null,actual_type_10100),canonical_f_10103);
} else
{elem_10086.detachEvent(cljs.core.name.call(null,actual_type_10100),canonical_f_10103);
}
{
var G__10104 = seq__10073_10095;
var G__10105 = chunk__10075_10096;
var G__10106 = count__10076_10097;
var G__10107 = (i__10077_10098 + (1));
seq__10073_10095 = G__10104;
chunk__10075_10096 = G__10105;
count__10076_10097 = G__10106;
i__10077_10098 = G__10107;
continue;
}
} else
{var temp__4126__auto___10108 = cljs.core.seq.call(null,seq__10073_10095);if(temp__4126__auto___10108)
{var seq__10073_10109__$1 = temp__4126__auto___10108;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10073_10109__$1))
{var c__4299__auto___10110 = cljs.core.chunk_first.call(null,seq__10073_10109__$1);{
var G__10111 = cljs.core.chunk_rest.call(null,seq__10073_10109__$1);
var G__10112 = c__4299__auto___10110;
var G__10113 = cljs.core.count.call(null,c__4299__auto___10110);
var G__10114 = (0);
seq__10073_10095 = G__10111;
chunk__10075_10096 = G__10112;
count__10076_10097 = G__10113;
i__10077_10098 = G__10114;
continue;
}
} else
{var vec__10081_10115 = cljs.core.first.call(null,seq__10073_10109__$1);var actual_type_10116 = cljs.core.nth.call(null,vec__10081_10115,(0),null);var __10117 = cljs.core.nth.call(null,vec__10081_10115,(1),null);var keys_10118 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10087,actual_type_10116,f_10094], null);var canonical_f_10119 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_10086),keys_10118);dommy.core.update_event_listeners_BANG_.call(null,elem_10086,dommy.utils.dissoc_in,keys_10118);
if(cljs.core.truth_(elem_10086.removeEventListener))
{elem_10086.removeEventListener(cljs.core.name.call(null,actual_type_10116),canonical_f_10119);
} else
{elem_10086.detachEvent(cljs.core.name.call(null,actual_type_10116),canonical_f_10119);
}
{
var G__10120 = cljs.core.next.call(null,seq__10073_10109__$1);
var G__10121 = null;
var G__10122 = (0);
var G__10123 = (0);
seq__10073_10095 = G__10120;
chunk__10075_10096 = G__10121;
count__10076_10097 = G__10122;
i__10077_10098 = G__10123;
continue;
}
}
} else
{}
}
break;
}
{
var G__10124 = seq__10063_10088;
var G__10125 = chunk__10070_10089;
var G__10126 = count__10071_10090;
var G__10127 = (i__10072_10091 + (1));
seq__10063_10088 = G__10124;
chunk__10070_10089 = G__10125;
count__10071_10090 = G__10126;
i__10072_10091 = G__10127;
continue;
}
} else
{var temp__4126__auto___10128 = cljs.core.seq.call(null,seq__10063_10088);if(temp__4126__auto___10128)
{var seq__10063_10129__$1 = temp__4126__auto___10128;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10063_10129__$1))
{var c__4299__auto___10130 = cljs.core.chunk_first.call(null,seq__10063_10129__$1);{
var G__10131 = cljs.core.chunk_rest.call(null,seq__10063_10129__$1);
var G__10132 = c__4299__auto___10130;
var G__10133 = cljs.core.count.call(null,c__4299__auto___10130);
var G__10134 = (0);
seq__10063_10088 = G__10131;
chunk__10070_10089 = G__10132;
count__10071_10090 = G__10133;
i__10072_10091 = G__10134;
continue;
}
} else
{var vec__10082_10135 = cljs.core.first.call(null,seq__10063_10129__$1);var orig_type_10136 = cljs.core.nth.call(null,vec__10082_10135,(0),null);var f_10137 = cljs.core.nth.call(null,vec__10082_10135,(1),null);var seq__10064_10138 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_10136,new cljs.core.PersistentArrayMap.fromArray([orig_type_10136,cljs.core.identity], true, false)));var chunk__10066_10139 = null;var count__10067_10140 = (0);var i__10068_10141 = (0);while(true){
if((i__10068_10141 < count__10067_10140))
{var vec__10083_10142 = cljs.core._nth.call(null,chunk__10066_10139,i__10068_10141);var actual_type_10143 = cljs.core.nth.call(null,vec__10083_10142,(0),null);var __10144 = cljs.core.nth.call(null,vec__10083_10142,(1),null);var keys_10145 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10087,actual_type_10143,f_10137], null);var canonical_f_10146 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_10086),keys_10145);dommy.core.update_event_listeners_BANG_.call(null,elem_10086,dommy.utils.dissoc_in,keys_10145);
if(cljs.core.truth_(elem_10086.removeEventListener))
{elem_10086.removeEventListener(cljs.core.name.call(null,actual_type_10143),canonical_f_10146);
} else
{elem_10086.detachEvent(cljs.core.name.call(null,actual_type_10143),canonical_f_10146);
}
{
var G__10147 = seq__10064_10138;
var G__10148 = chunk__10066_10139;
var G__10149 = count__10067_10140;
var G__10150 = (i__10068_10141 + (1));
seq__10064_10138 = G__10147;
chunk__10066_10139 = G__10148;
count__10067_10140 = G__10149;
i__10068_10141 = G__10150;
continue;
}
} else
{var temp__4126__auto___10151__$1 = cljs.core.seq.call(null,seq__10064_10138);if(temp__4126__auto___10151__$1)
{var seq__10064_10152__$1 = temp__4126__auto___10151__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10064_10152__$1))
{var c__4299__auto___10153 = cljs.core.chunk_first.call(null,seq__10064_10152__$1);{
var G__10154 = cljs.core.chunk_rest.call(null,seq__10064_10152__$1);
var G__10155 = c__4299__auto___10153;
var G__10156 = cljs.core.count.call(null,c__4299__auto___10153);
var G__10157 = (0);
seq__10064_10138 = G__10154;
chunk__10066_10139 = G__10155;
count__10067_10140 = G__10156;
i__10068_10141 = G__10157;
continue;
}
} else
{var vec__10084_10158 = cljs.core.first.call(null,seq__10064_10152__$1);var actual_type_10159 = cljs.core.nth.call(null,vec__10084_10158,(0),null);var __10160 = cljs.core.nth.call(null,vec__10084_10158,(1),null);var keys_10161 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10087,actual_type_10159,f_10137], null);var canonical_f_10162 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_10086),keys_10161);dommy.core.update_event_listeners_BANG_.call(null,elem_10086,dommy.utils.dissoc_in,keys_10161);
if(cljs.core.truth_(elem_10086.removeEventListener))
{elem_10086.removeEventListener(cljs.core.name.call(null,actual_type_10159),canonical_f_10162);
} else
{elem_10086.detachEvent(cljs.core.name.call(null,actual_type_10159),canonical_f_10162);
}
{
var G__10163 = cljs.core.next.call(null,seq__10064_10152__$1);
var G__10164 = null;
var G__10165 = (0);
var G__10166 = (0);
seq__10064_10138 = G__10163;
chunk__10066_10139 = G__10164;
count__10067_10140 = G__10165;
i__10068_10141 = G__10166;
continue;
}
}
} else
{}
}
break;
}
{
var G__10167 = cljs.core.next.call(null,seq__10063_10129__$1);
var G__10168 = null;
var G__10169 = (0);
var G__10170 = (0);
seq__10063_10088 = G__10167;
chunk__10070_10089 = G__10168;
count__10071_10090 = G__10169;
i__10072_10091 = G__10170;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__10171){
var elem_sel = cljs.core.first(arglist__10171);
var type_fs = cljs.core.rest(arglist__10171);
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
var vec__10179_10186 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_10187 = cljs.core.nth.call(null,vec__10179_10186,(0),null);var selector_10188 = cljs.core.nth.call(null,vec__10179_10186,(1),null);var seq__10180_10189 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__10181_10190 = null;var count__10182_10191 = (0);var i__10183_10192 = (0);while(true){
if((i__10183_10192 < count__10182_10191))
{var vec__10184_10193 = cljs.core._nth.call(null,chunk__10181_10190,i__10183_10192);var type_10194 = cljs.core.nth.call(null,vec__10184_10193,(0),null);var f_10195 = cljs.core.nth.call(null,vec__10184_10193,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_10194,((function (seq__10180_10189,chunk__10181_10190,count__10182_10191,i__10183_10192,vec__10184_10193,type_10194,f_10195,vec__10179_10186,elem_10187,selector_10188){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_10194,this_fn);
return f_10195.call(null,e);
});})(seq__10180_10189,chunk__10181_10190,count__10182_10191,i__10183_10192,vec__10184_10193,type_10194,f_10195,vec__10179_10186,elem_10187,selector_10188))
);
{
var G__10196 = seq__10180_10189;
var G__10197 = chunk__10181_10190;
var G__10198 = count__10182_10191;
var G__10199 = (i__10183_10192 + (1));
seq__10180_10189 = G__10196;
chunk__10181_10190 = G__10197;
count__10182_10191 = G__10198;
i__10183_10192 = G__10199;
continue;
}
} else
{var temp__4126__auto___10200 = cljs.core.seq.call(null,seq__10180_10189);if(temp__4126__auto___10200)
{var seq__10180_10201__$1 = temp__4126__auto___10200;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10180_10201__$1))
{var c__4299__auto___10202 = cljs.core.chunk_first.call(null,seq__10180_10201__$1);{
var G__10203 = cljs.core.chunk_rest.call(null,seq__10180_10201__$1);
var G__10204 = c__4299__auto___10202;
var G__10205 = cljs.core.count.call(null,c__4299__auto___10202);
var G__10206 = (0);
seq__10180_10189 = G__10203;
chunk__10181_10190 = G__10204;
count__10182_10191 = G__10205;
i__10183_10192 = G__10206;
continue;
}
} else
{var vec__10185_10207 = cljs.core.first.call(null,seq__10180_10201__$1);var type_10208 = cljs.core.nth.call(null,vec__10185_10207,(0),null);var f_10209 = cljs.core.nth.call(null,vec__10185_10207,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_10208,((function (seq__10180_10189,chunk__10181_10190,count__10182_10191,i__10183_10192,vec__10185_10207,type_10208,f_10209,seq__10180_10201__$1,temp__4126__auto___10200,vec__10179_10186,elem_10187,selector_10188){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_10208,this_fn);
return f_10209.call(null,e);
});})(seq__10180_10189,chunk__10181_10190,count__10182_10191,i__10183_10192,vec__10185_10207,type_10208,f_10209,seq__10180_10201__$1,temp__4126__auto___10200,vec__10179_10186,elem_10187,selector_10188))
);
{
var G__10210 = cljs.core.next.call(null,seq__10180_10201__$1);
var G__10211 = null;
var G__10212 = (0);
var G__10213 = (0);
seq__10180_10189 = G__10210;
chunk__10181_10190 = G__10211;
count__10182_10191 = G__10212;
i__10183_10192 = G__10213;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__10214){
var elem_sel = cljs.core.first(arglist__10214);
var type_fs = cljs.core.rest(arglist__10214);
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
var fire_BANG___delegate = function (node,event_type,p__10215){var vec__10217 = p__10215;var update_event_BANG_ = cljs.core.nth.call(null,vec__10217,(0),null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__10215 = null;if (arguments.length > 2) {
  p__10215 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__10215);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__10218){
var node = cljs.core.first(arglist__10218);
arglist__10218 = cljs.core.next(arglist__10218);
var event_type = cljs.core.first(arglist__10218);
var p__10215 = cljs.core.rest(arglist__10218);
return fire_BANG___delegate(node,event_type,p__10215);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map