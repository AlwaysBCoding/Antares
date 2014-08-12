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
dommy.core.text = (function text(elem){var or__3563__auto__ = elem.textContent;if(cljs.core.truth_(or__3563__auto__))
{return or__3563__auto__;
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
var append_BANG___2 = (function (parent,child){var G__6779 = dommy.template.__GT_node_like.call(null,parent);G__6779.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__6779;
});
var append_BANG___3 = (function() { 
var G__6784__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__6780_6785 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__6781_6786 = null;var count__6782_6787 = (0);var i__6783_6788 = (0);while(true){
if((i__6783_6788 < count__6782_6787))
{var c_6789 = cljs.core._nth.call(null,chunk__6781_6786,i__6783_6788);append_BANG_.call(null,parent__$1,c_6789);
{
var G__6790 = seq__6780_6785;
var G__6791 = chunk__6781_6786;
var G__6792 = count__6782_6787;
var G__6793 = (i__6783_6788 + (1));
seq__6780_6785 = G__6790;
chunk__6781_6786 = G__6791;
count__6782_6787 = G__6792;
i__6783_6788 = G__6793;
continue;
}
} else
{var temp__4126__auto___6794 = cljs.core.seq.call(null,seq__6780_6785);if(temp__4126__auto___6794)
{var seq__6780_6795__$1 = temp__4126__auto___6794;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6780_6795__$1))
{var c__4319__auto___6796 = cljs.core.chunk_first.call(null,seq__6780_6795__$1);{
var G__6797 = cljs.core.chunk_rest.call(null,seq__6780_6795__$1);
var G__6798 = c__4319__auto___6796;
var G__6799 = cljs.core.count.call(null,c__4319__auto___6796);
var G__6800 = (0);
seq__6780_6785 = G__6797;
chunk__6781_6786 = G__6798;
count__6782_6787 = G__6799;
i__6783_6788 = G__6800;
continue;
}
} else
{var c_6801 = cljs.core.first.call(null,seq__6780_6795__$1);append_BANG_.call(null,parent__$1,c_6801);
{
var G__6802 = cljs.core.next.call(null,seq__6780_6795__$1);
var G__6803 = null;
var G__6804 = (0);
var G__6805 = (0);
seq__6780_6785 = G__6802;
chunk__6781_6786 = G__6803;
count__6782_6787 = G__6804;
i__6783_6788 = G__6805;
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
var G__6784 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6784__delegate.call(this,parent,child,more_children);};
G__6784.cljs$lang$maxFixedArity = 2;
G__6784.cljs$lang$applyTo = (function (arglist__6806){
var parent = cljs.core.first(arglist__6806);
arglist__6806 = cljs.core.next(arglist__6806);
var child = cljs.core.first(arglist__6806);
var more_children = cljs.core.rest(arglist__6806);
return G__6784__delegate(parent,child,more_children);
});
G__6784.cljs$core$IFn$_invoke$arity$variadic = G__6784__delegate;
return G__6784;
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
var G__6815__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__6811_6816 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__6812_6817 = null;var count__6813_6818 = (0);var i__6814_6819 = (0);while(true){
if((i__6814_6819 < count__6813_6818))
{var c_6820 = cljs.core._nth.call(null,chunk__6812_6817,i__6814_6819);prepend_BANG_.call(null,parent__$1,c_6820);
{
var G__6821 = seq__6811_6816;
var G__6822 = chunk__6812_6817;
var G__6823 = count__6813_6818;
var G__6824 = (i__6814_6819 + (1));
seq__6811_6816 = G__6821;
chunk__6812_6817 = G__6822;
count__6813_6818 = G__6823;
i__6814_6819 = G__6824;
continue;
}
} else
{var temp__4126__auto___6825 = cljs.core.seq.call(null,seq__6811_6816);if(temp__4126__auto___6825)
{var seq__6811_6826__$1 = temp__4126__auto___6825;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6811_6826__$1))
{var c__4319__auto___6827 = cljs.core.chunk_first.call(null,seq__6811_6826__$1);{
var G__6828 = cljs.core.chunk_rest.call(null,seq__6811_6826__$1);
var G__6829 = c__4319__auto___6827;
var G__6830 = cljs.core.count.call(null,c__4319__auto___6827);
var G__6831 = (0);
seq__6811_6816 = G__6828;
chunk__6812_6817 = G__6829;
count__6813_6818 = G__6830;
i__6814_6819 = G__6831;
continue;
}
} else
{var c_6832 = cljs.core.first.call(null,seq__6811_6826__$1);prepend_BANG_.call(null,parent__$1,c_6832);
{
var G__6833 = cljs.core.next.call(null,seq__6811_6826__$1);
var G__6834 = null;
var G__6835 = (0);
var G__6836 = (0);
seq__6811_6816 = G__6833;
chunk__6812_6817 = G__6834;
count__6813_6818 = G__6835;
i__6814_6819 = G__6836;
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
var G__6815 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6815__delegate.call(this,parent,child,more_children);};
G__6815.cljs$lang$maxFixedArity = 2;
G__6815.cljs$lang$applyTo = (function (arglist__6837){
var parent = cljs.core.first(arglist__6837);
arglist__6837 = cljs.core.next(arglist__6837);
var child = cljs.core.first(arglist__6837);
var more_children = cljs.core.rest(arglist__6837);
return G__6815__delegate(parent,child,more_children);
});
G__6815.cljs$core$IFn$_invoke$arity$variadic = G__6815__delegate;
return G__6815;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4124__auto___6838 = other__$1.nextSibling;if(cljs.core.truth_(temp__4124__auto___6838))
{var next_6839 = temp__4124__auto___6838;parent.insertBefore(actual_node,next_6839);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__6841 = dommy.template.__GT_node_like.call(null,parent);G__6841.innerHTML = "";
dommy.core.append_BANG_.call(null,G__6841,node_like);
return G__6841;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__6843 = elem__$1.parentNode;G__6843.removeChild(elem__$1);
return G__6843;
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
return (function (p__6849){var vec__6850 = p__6849;var k = cljs.core.nth.call(null,vec__6850,(0),null);var v = cljs.core.nth.call(null,vec__6850,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",-1610148039).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t6851 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t6851 = (function (v,k,vec__6850,p__6849,container,key_selectors_map,template,selector_map,meta6852){
this.v = v;
this.k = k;
this.vec__6850 = vec__6850;
this.p__6849 = p__6849;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta6852 = meta6852;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t6851.cljs$lang$type = true;
dommy.core.t6851.cljs$lang$ctorStr = "dommy.core/t6851";
dommy.core.t6851.cljs$lang$ctorPrWriter = ((function (vec__6850,k,v,container){
return (function (this__4130__auto__,writer__4131__auto__,opt__4132__auto__){return cljs.core._write.call(null,writer__4131__auto__,"dommy.core/t6851");
});})(vec__6850,k,v,container))
;
dommy.core.t6851.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__6850,k,v,container){
return (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});})(vec__6850,k,v,container))
;
dommy.core.t6851.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__6850,k,v,container){
return (function (_6853){var self__ = this;
var _6853__$1 = this;return self__.meta6852;
});})(vec__6850,k,v,container))
;
dommy.core.t6851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__6850,k,v,container){
return (function (_6853,meta6852__$1){var self__ = this;
var _6853__$1 = this;return (new dommy.core.t6851(self__.v,self__.k,self__.vec__6850,self__.p__6849,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta6852__$1));
});})(vec__6850,k,v,container))
;
dommy.core.__GT_t6851 = ((function (vec__6850,k,v,container){
return (function __GT_t6851(v__$1,k__$1,vec__6850__$1,p__6849__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta6852){return (new dommy.core.t6851(v__$1,k__$1,vec__6850__$1,p__6849__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta6852));
});})(vec__6850,k,v,container))
;
}
return (new dommy.core.t6851(v,k,vec__6850,p__6849,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
});})(container))
,key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__6854_SHARP_){return p1__6854_SHARP_.parentNode;
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
return (function (p1__6855_SHARP_){return !((p1__6855_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__6856){var vec__6857 = p__6856;var special_mouse_event = cljs.core.nth.call(null,vec__6857,(0),null);var real_mouse_event = cljs.core.nth.call(null,vec__6857,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__6857,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__6857,special_mouse_event,real_mouse_event){
return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3563__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3563__auto__))
{return or__3563__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3551__auto__ = related_target;if(cljs.core.truth_(and__3551__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3551__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
;})(vec__6857,special_mouse_event,real_mouse_event))
});})(vec__6857,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__3551__auto__ = selected_target;if(cljs.core.truth_(and__3551__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else
{return and__3551__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__3563__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__3563__auto__))
{return or__3563__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__6858){
var elem = cljs.core.first(arglist__6858);
arglist__6858 = cljs.core.next(arglist__6858);
var f = cljs.core.first(arglist__6858);
var args = cljs.core.rest(arglist__6858);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__6859_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__6859_SHARP_));
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
var vec__6883_6906 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_6907 = cljs.core.nth.call(null,vec__6883_6906,(0),null);var selector_6908 = cljs.core.nth.call(null,vec__6883_6906,(1),null);var seq__6884_6909 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__6891_6910 = null;var count__6892_6911 = (0);var i__6893_6912 = (0);while(true){
if((i__6893_6912 < count__6892_6911))
{var vec__6900_6913 = cljs.core._nth.call(null,chunk__6891_6910,i__6893_6912);var orig_type_6914 = cljs.core.nth.call(null,vec__6900_6913,(0),null);var f_6915 = cljs.core.nth.call(null,vec__6900_6913,(1),null);var seq__6894_6916 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6914,new cljs.core.PersistentArrayMap.fromArray([orig_type_6914,cljs.core.identity], true, false)));var chunk__6896_6917 = null;var count__6897_6918 = (0);var i__6898_6919 = (0);while(true){
if((i__6898_6919 < count__6897_6918))
{var vec__6901_6920 = cljs.core._nth.call(null,chunk__6896_6917,i__6898_6919);var actual_type_6921 = cljs.core.nth.call(null,vec__6901_6920,(0),null);var factory_6922 = cljs.core.nth.call(null,vec__6901_6920,(1),null);var canonical_f_6923 = (cljs.core.truth_(selector_6908)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6907,selector_6908):cljs.core.identity).call(null,factory_6922.call(null,f_6915));dommy.core.update_event_listeners_BANG_.call(null,elem_6907,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6908,actual_type_6921,f_6915], null),canonical_f_6923);
if(cljs.core.truth_(elem_6907.addEventListener))
{elem_6907.addEventListener(cljs.core.name.call(null,actual_type_6921),canonical_f_6923);
} else
{elem_6907.attachEvent(cljs.core.name.call(null,actual_type_6921),canonical_f_6923);
}
{
var G__6924 = seq__6894_6916;
var G__6925 = chunk__6896_6917;
var G__6926 = count__6897_6918;
var G__6927 = (i__6898_6919 + (1));
seq__6894_6916 = G__6924;
chunk__6896_6917 = G__6925;
count__6897_6918 = G__6926;
i__6898_6919 = G__6927;
continue;
}
} else
{var temp__4126__auto___6928 = cljs.core.seq.call(null,seq__6894_6916);if(temp__4126__auto___6928)
{var seq__6894_6929__$1 = temp__4126__auto___6928;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6894_6929__$1))
{var c__4319__auto___6930 = cljs.core.chunk_first.call(null,seq__6894_6929__$1);{
var G__6931 = cljs.core.chunk_rest.call(null,seq__6894_6929__$1);
var G__6932 = c__4319__auto___6930;
var G__6933 = cljs.core.count.call(null,c__4319__auto___6930);
var G__6934 = (0);
seq__6894_6916 = G__6931;
chunk__6896_6917 = G__6932;
count__6897_6918 = G__6933;
i__6898_6919 = G__6934;
continue;
}
} else
{var vec__6902_6935 = cljs.core.first.call(null,seq__6894_6929__$1);var actual_type_6936 = cljs.core.nth.call(null,vec__6902_6935,(0),null);var factory_6937 = cljs.core.nth.call(null,vec__6902_6935,(1),null);var canonical_f_6938 = (cljs.core.truth_(selector_6908)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6907,selector_6908):cljs.core.identity).call(null,factory_6937.call(null,f_6915));dommy.core.update_event_listeners_BANG_.call(null,elem_6907,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6908,actual_type_6936,f_6915], null),canonical_f_6938);
if(cljs.core.truth_(elem_6907.addEventListener))
{elem_6907.addEventListener(cljs.core.name.call(null,actual_type_6936),canonical_f_6938);
} else
{elem_6907.attachEvent(cljs.core.name.call(null,actual_type_6936),canonical_f_6938);
}
{
var G__6939 = cljs.core.next.call(null,seq__6894_6929__$1);
var G__6940 = null;
var G__6941 = (0);
var G__6942 = (0);
seq__6894_6916 = G__6939;
chunk__6896_6917 = G__6940;
count__6897_6918 = G__6941;
i__6898_6919 = G__6942;
continue;
}
}
} else
{}
}
break;
}
{
var G__6943 = seq__6884_6909;
var G__6944 = chunk__6891_6910;
var G__6945 = count__6892_6911;
var G__6946 = (i__6893_6912 + (1));
seq__6884_6909 = G__6943;
chunk__6891_6910 = G__6944;
count__6892_6911 = G__6945;
i__6893_6912 = G__6946;
continue;
}
} else
{var temp__4126__auto___6947 = cljs.core.seq.call(null,seq__6884_6909);if(temp__4126__auto___6947)
{var seq__6884_6948__$1 = temp__4126__auto___6947;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6884_6948__$1))
{var c__4319__auto___6949 = cljs.core.chunk_first.call(null,seq__6884_6948__$1);{
var G__6950 = cljs.core.chunk_rest.call(null,seq__6884_6948__$1);
var G__6951 = c__4319__auto___6949;
var G__6952 = cljs.core.count.call(null,c__4319__auto___6949);
var G__6953 = (0);
seq__6884_6909 = G__6950;
chunk__6891_6910 = G__6951;
count__6892_6911 = G__6952;
i__6893_6912 = G__6953;
continue;
}
} else
{var vec__6903_6954 = cljs.core.first.call(null,seq__6884_6948__$1);var orig_type_6955 = cljs.core.nth.call(null,vec__6903_6954,(0),null);var f_6956 = cljs.core.nth.call(null,vec__6903_6954,(1),null);var seq__6885_6957 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6955,new cljs.core.PersistentArrayMap.fromArray([orig_type_6955,cljs.core.identity], true, false)));var chunk__6887_6958 = null;var count__6888_6959 = (0);var i__6889_6960 = (0);while(true){
if((i__6889_6960 < count__6888_6959))
{var vec__6904_6961 = cljs.core._nth.call(null,chunk__6887_6958,i__6889_6960);var actual_type_6962 = cljs.core.nth.call(null,vec__6904_6961,(0),null);var factory_6963 = cljs.core.nth.call(null,vec__6904_6961,(1),null);var canonical_f_6964 = (cljs.core.truth_(selector_6908)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6907,selector_6908):cljs.core.identity).call(null,factory_6963.call(null,f_6956));dommy.core.update_event_listeners_BANG_.call(null,elem_6907,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6908,actual_type_6962,f_6956], null),canonical_f_6964);
if(cljs.core.truth_(elem_6907.addEventListener))
{elem_6907.addEventListener(cljs.core.name.call(null,actual_type_6962),canonical_f_6964);
} else
{elem_6907.attachEvent(cljs.core.name.call(null,actual_type_6962),canonical_f_6964);
}
{
var G__6965 = seq__6885_6957;
var G__6966 = chunk__6887_6958;
var G__6967 = count__6888_6959;
var G__6968 = (i__6889_6960 + (1));
seq__6885_6957 = G__6965;
chunk__6887_6958 = G__6966;
count__6888_6959 = G__6967;
i__6889_6960 = G__6968;
continue;
}
} else
{var temp__4126__auto___6969__$1 = cljs.core.seq.call(null,seq__6885_6957);if(temp__4126__auto___6969__$1)
{var seq__6885_6970__$1 = temp__4126__auto___6969__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6885_6970__$1))
{var c__4319__auto___6971 = cljs.core.chunk_first.call(null,seq__6885_6970__$1);{
var G__6972 = cljs.core.chunk_rest.call(null,seq__6885_6970__$1);
var G__6973 = c__4319__auto___6971;
var G__6974 = cljs.core.count.call(null,c__4319__auto___6971);
var G__6975 = (0);
seq__6885_6957 = G__6972;
chunk__6887_6958 = G__6973;
count__6888_6959 = G__6974;
i__6889_6960 = G__6975;
continue;
}
} else
{var vec__6905_6976 = cljs.core.first.call(null,seq__6885_6970__$1);var actual_type_6977 = cljs.core.nth.call(null,vec__6905_6976,(0),null);var factory_6978 = cljs.core.nth.call(null,vec__6905_6976,(1),null);var canonical_f_6979 = (cljs.core.truth_(selector_6908)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6907,selector_6908):cljs.core.identity).call(null,factory_6978.call(null,f_6956));dommy.core.update_event_listeners_BANG_.call(null,elem_6907,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6908,actual_type_6977,f_6956], null),canonical_f_6979);
if(cljs.core.truth_(elem_6907.addEventListener))
{elem_6907.addEventListener(cljs.core.name.call(null,actual_type_6977),canonical_f_6979);
} else
{elem_6907.attachEvent(cljs.core.name.call(null,actual_type_6977),canonical_f_6979);
}
{
var G__6980 = cljs.core.next.call(null,seq__6885_6970__$1);
var G__6981 = null;
var G__6982 = (0);
var G__6983 = (0);
seq__6885_6957 = G__6980;
chunk__6887_6958 = G__6981;
count__6888_6959 = G__6982;
i__6889_6960 = G__6983;
continue;
}
}
} else
{}
}
break;
}
{
var G__6984 = cljs.core.next.call(null,seq__6884_6948__$1);
var G__6985 = null;
var G__6986 = (0);
var G__6987 = (0);
seq__6884_6909 = G__6984;
chunk__6891_6910 = G__6985;
count__6892_6911 = G__6986;
i__6893_6912 = G__6987;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__6988){
var elem_sel = cljs.core.first(arglist__6988);
var type_fs = cljs.core.rest(arglist__6988);
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
var vec__7012_7035 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_7036 = cljs.core.nth.call(null,vec__7012_7035,(0),null);var selector_7037 = cljs.core.nth.call(null,vec__7012_7035,(1),null);var seq__7013_7038 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__7020_7039 = null;var count__7021_7040 = (0);var i__7022_7041 = (0);while(true){
if((i__7022_7041 < count__7021_7040))
{var vec__7029_7042 = cljs.core._nth.call(null,chunk__7020_7039,i__7022_7041);var orig_type_7043 = cljs.core.nth.call(null,vec__7029_7042,(0),null);var f_7044 = cljs.core.nth.call(null,vec__7029_7042,(1),null);var seq__7023_7045 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7043,new cljs.core.PersistentArrayMap.fromArray([orig_type_7043,cljs.core.identity], true, false)));var chunk__7025_7046 = null;var count__7026_7047 = (0);var i__7027_7048 = (0);while(true){
if((i__7027_7048 < count__7026_7047))
{var vec__7030_7049 = cljs.core._nth.call(null,chunk__7025_7046,i__7027_7048);var actual_type_7050 = cljs.core.nth.call(null,vec__7030_7049,(0),null);var __7051 = cljs.core.nth.call(null,vec__7030_7049,(1),null);var keys_7052 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7037,actual_type_7050,f_7044], null);var canonical_f_7053 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7036),keys_7052);dommy.core.update_event_listeners_BANG_.call(null,elem_7036,dommy.utils.dissoc_in,keys_7052);
if(cljs.core.truth_(elem_7036.removeEventListener))
{elem_7036.removeEventListener(cljs.core.name.call(null,actual_type_7050),canonical_f_7053);
} else
{elem_7036.detachEvent(cljs.core.name.call(null,actual_type_7050),canonical_f_7053);
}
{
var G__7054 = seq__7023_7045;
var G__7055 = chunk__7025_7046;
var G__7056 = count__7026_7047;
var G__7057 = (i__7027_7048 + (1));
seq__7023_7045 = G__7054;
chunk__7025_7046 = G__7055;
count__7026_7047 = G__7056;
i__7027_7048 = G__7057;
continue;
}
} else
{var temp__4126__auto___7058 = cljs.core.seq.call(null,seq__7023_7045);if(temp__4126__auto___7058)
{var seq__7023_7059__$1 = temp__4126__auto___7058;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7023_7059__$1))
{var c__4319__auto___7060 = cljs.core.chunk_first.call(null,seq__7023_7059__$1);{
var G__7061 = cljs.core.chunk_rest.call(null,seq__7023_7059__$1);
var G__7062 = c__4319__auto___7060;
var G__7063 = cljs.core.count.call(null,c__4319__auto___7060);
var G__7064 = (0);
seq__7023_7045 = G__7061;
chunk__7025_7046 = G__7062;
count__7026_7047 = G__7063;
i__7027_7048 = G__7064;
continue;
}
} else
{var vec__7031_7065 = cljs.core.first.call(null,seq__7023_7059__$1);var actual_type_7066 = cljs.core.nth.call(null,vec__7031_7065,(0),null);var __7067 = cljs.core.nth.call(null,vec__7031_7065,(1),null);var keys_7068 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7037,actual_type_7066,f_7044], null);var canonical_f_7069 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7036),keys_7068);dommy.core.update_event_listeners_BANG_.call(null,elem_7036,dommy.utils.dissoc_in,keys_7068);
if(cljs.core.truth_(elem_7036.removeEventListener))
{elem_7036.removeEventListener(cljs.core.name.call(null,actual_type_7066),canonical_f_7069);
} else
{elem_7036.detachEvent(cljs.core.name.call(null,actual_type_7066),canonical_f_7069);
}
{
var G__7070 = cljs.core.next.call(null,seq__7023_7059__$1);
var G__7071 = null;
var G__7072 = (0);
var G__7073 = (0);
seq__7023_7045 = G__7070;
chunk__7025_7046 = G__7071;
count__7026_7047 = G__7072;
i__7027_7048 = G__7073;
continue;
}
}
} else
{}
}
break;
}
{
var G__7074 = seq__7013_7038;
var G__7075 = chunk__7020_7039;
var G__7076 = count__7021_7040;
var G__7077 = (i__7022_7041 + (1));
seq__7013_7038 = G__7074;
chunk__7020_7039 = G__7075;
count__7021_7040 = G__7076;
i__7022_7041 = G__7077;
continue;
}
} else
{var temp__4126__auto___7078 = cljs.core.seq.call(null,seq__7013_7038);if(temp__4126__auto___7078)
{var seq__7013_7079__$1 = temp__4126__auto___7078;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7013_7079__$1))
{var c__4319__auto___7080 = cljs.core.chunk_first.call(null,seq__7013_7079__$1);{
var G__7081 = cljs.core.chunk_rest.call(null,seq__7013_7079__$1);
var G__7082 = c__4319__auto___7080;
var G__7083 = cljs.core.count.call(null,c__4319__auto___7080);
var G__7084 = (0);
seq__7013_7038 = G__7081;
chunk__7020_7039 = G__7082;
count__7021_7040 = G__7083;
i__7022_7041 = G__7084;
continue;
}
} else
{var vec__7032_7085 = cljs.core.first.call(null,seq__7013_7079__$1);var orig_type_7086 = cljs.core.nth.call(null,vec__7032_7085,(0),null);var f_7087 = cljs.core.nth.call(null,vec__7032_7085,(1),null);var seq__7014_7088 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7086,new cljs.core.PersistentArrayMap.fromArray([orig_type_7086,cljs.core.identity], true, false)));var chunk__7016_7089 = null;var count__7017_7090 = (0);var i__7018_7091 = (0);while(true){
if((i__7018_7091 < count__7017_7090))
{var vec__7033_7092 = cljs.core._nth.call(null,chunk__7016_7089,i__7018_7091);var actual_type_7093 = cljs.core.nth.call(null,vec__7033_7092,(0),null);var __7094 = cljs.core.nth.call(null,vec__7033_7092,(1),null);var keys_7095 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7037,actual_type_7093,f_7087], null);var canonical_f_7096 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7036),keys_7095);dommy.core.update_event_listeners_BANG_.call(null,elem_7036,dommy.utils.dissoc_in,keys_7095);
if(cljs.core.truth_(elem_7036.removeEventListener))
{elem_7036.removeEventListener(cljs.core.name.call(null,actual_type_7093),canonical_f_7096);
} else
{elem_7036.detachEvent(cljs.core.name.call(null,actual_type_7093),canonical_f_7096);
}
{
var G__7097 = seq__7014_7088;
var G__7098 = chunk__7016_7089;
var G__7099 = count__7017_7090;
var G__7100 = (i__7018_7091 + (1));
seq__7014_7088 = G__7097;
chunk__7016_7089 = G__7098;
count__7017_7090 = G__7099;
i__7018_7091 = G__7100;
continue;
}
} else
{var temp__4126__auto___7101__$1 = cljs.core.seq.call(null,seq__7014_7088);if(temp__4126__auto___7101__$1)
{var seq__7014_7102__$1 = temp__4126__auto___7101__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7014_7102__$1))
{var c__4319__auto___7103 = cljs.core.chunk_first.call(null,seq__7014_7102__$1);{
var G__7104 = cljs.core.chunk_rest.call(null,seq__7014_7102__$1);
var G__7105 = c__4319__auto___7103;
var G__7106 = cljs.core.count.call(null,c__4319__auto___7103);
var G__7107 = (0);
seq__7014_7088 = G__7104;
chunk__7016_7089 = G__7105;
count__7017_7090 = G__7106;
i__7018_7091 = G__7107;
continue;
}
} else
{var vec__7034_7108 = cljs.core.first.call(null,seq__7014_7102__$1);var actual_type_7109 = cljs.core.nth.call(null,vec__7034_7108,(0),null);var __7110 = cljs.core.nth.call(null,vec__7034_7108,(1),null);var keys_7111 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7037,actual_type_7109,f_7087], null);var canonical_f_7112 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7036),keys_7111);dommy.core.update_event_listeners_BANG_.call(null,elem_7036,dommy.utils.dissoc_in,keys_7111);
if(cljs.core.truth_(elem_7036.removeEventListener))
{elem_7036.removeEventListener(cljs.core.name.call(null,actual_type_7109),canonical_f_7112);
} else
{elem_7036.detachEvent(cljs.core.name.call(null,actual_type_7109),canonical_f_7112);
}
{
var G__7113 = cljs.core.next.call(null,seq__7014_7102__$1);
var G__7114 = null;
var G__7115 = (0);
var G__7116 = (0);
seq__7014_7088 = G__7113;
chunk__7016_7089 = G__7114;
count__7017_7090 = G__7115;
i__7018_7091 = G__7116;
continue;
}
}
} else
{}
}
break;
}
{
var G__7117 = cljs.core.next.call(null,seq__7013_7079__$1);
var G__7118 = null;
var G__7119 = (0);
var G__7120 = (0);
seq__7013_7038 = G__7117;
chunk__7020_7039 = G__7118;
count__7021_7040 = G__7119;
i__7022_7041 = G__7120;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__7121){
var elem_sel = cljs.core.first(arglist__7121);
var type_fs = cljs.core.rest(arglist__7121);
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
var vec__7129_7136 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_7137 = cljs.core.nth.call(null,vec__7129_7136,(0),null);var selector_7138 = cljs.core.nth.call(null,vec__7129_7136,(1),null);var seq__7130_7139 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__7131_7140 = null;var count__7132_7141 = (0);var i__7133_7142 = (0);while(true){
if((i__7133_7142 < count__7132_7141))
{var vec__7134_7143 = cljs.core._nth.call(null,chunk__7131_7140,i__7133_7142);var type_7144 = cljs.core.nth.call(null,vec__7134_7143,(0),null);var f_7145 = cljs.core.nth.call(null,vec__7134_7143,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_7144,((function (seq__7130_7139,chunk__7131_7140,count__7132_7141,i__7133_7142,vec__7134_7143,type_7144,f_7145,vec__7129_7136,elem_7137,selector_7138){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_7144,this_fn);
return f_7145.call(null,e);
});})(seq__7130_7139,chunk__7131_7140,count__7132_7141,i__7133_7142,vec__7134_7143,type_7144,f_7145,vec__7129_7136,elem_7137,selector_7138))
);
{
var G__7146 = seq__7130_7139;
var G__7147 = chunk__7131_7140;
var G__7148 = count__7132_7141;
var G__7149 = (i__7133_7142 + (1));
seq__7130_7139 = G__7146;
chunk__7131_7140 = G__7147;
count__7132_7141 = G__7148;
i__7133_7142 = G__7149;
continue;
}
} else
{var temp__4126__auto___7150 = cljs.core.seq.call(null,seq__7130_7139);if(temp__4126__auto___7150)
{var seq__7130_7151__$1 = temp__4126__auto___7150;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7130_7151__$1))
{var c__4319__auto___7152 = cljs.core.chunk_first.call(null,seq__7130_7151__$1);{
var G__7153 = cljs.core.chunk_rest.call(null,seq__7130_7151__$1);
var G__7154 = c__4319__auto___7152;
var G__7155 = cljs.core.count.call(null,c__4319__auto___7152);
var G__7156 = (0);
seq__7130_7139 = G__7153;
chunk__7131_7140 = G__7154;
count__7132_7141 = G__7155;
i__7133_7142 = G__7156;
continue;
}
} else
{var vec__7135_7157 = cljs.core.first.call(null,seq__7130_7151__$1);var type_7158 = cljs.core.nth.call(null,vec__7135_7157,(0),null);var f_7159 = cljs.core.nth.call(null,vec__7135_7157,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_7158,((function (seq__7130_7139,chunk__7131_7140,count__7132_7141,i__7133_7142,vec__7135_7157,type_7158,f_7159,seq__7130_7151__$1,temp__4126__auto___7150,vec__7129_7136,elem_7137,selector_7138){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_7158,this_fn);
return f_7159.call(null,e);
});})(seq__7130_7139,chunk__7131_7140,count__7132_7141,i__7133_7142,vec__7135_7157,type_7158,f_7159,seq__7130_7151__$1,temp__4126__auto___7150,vec__7129_7136,elem_7137,selector_7138))
);
{
var G__7160 = cljs.core.next.call(null,seq__7130_7151__$1);
var G__7161 = null;
var G__7162 = (0);
var G__7163 = (0);
seq__7130_7139 = G__7160;
chunk__7131_7140 = G__7161;
count__7132_7141 = G__7162;
i__7133_7142 = G__7163;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__7164){
var elem_sel = cljs.core.first(arglist__7164);
var type_fs = cljs.core.rest(arglist__7164);
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
var fire_BANG___delegate = function (node,event_type,p__7165){var vec__7167 = p__7165;var update_event_BANG_ = cljs.core.nth.call(null,vec__7167,(0),null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1027057938,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",1597931428,null)))))));
}
var update_event_BANG___$1 = (function (){var or__3563__auto__ = update_event_BANG_;if(cljs.core.truth_(or__3563__auto__))
{return or__3563__auto__;
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
var p__7165 = null;if (arguments.length > 2) {
  p__7165 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__7165);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__7168){
var node = cljs.core.first(arglist__7168);
arglist__7168 = cljs.core.next(arglist__7168);
var event_type = cljs.core.first(arglist__7168);
var p__7165 = cljs.core.rest(arglist__7168);
return fire_BANG___delegate(node,event_type,p__7165);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map