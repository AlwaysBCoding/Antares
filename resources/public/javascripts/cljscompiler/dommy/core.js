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
var append_BANG___2 = (function (parent,child){var G__37214 = dommy.template.__GT_node_like.call(null,parent);G__37214.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__37214;
});
var append_BANG___3 = (function() { 
var G__37219__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__37215_37220 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__37216_37221 = null;var count__37217_37222 = (0);var i__37218_37223 = (0);while(true){
if((i__37218_37223 < count__37217_37222))
{var c_37224 = cljs.core._nth.call(null,chunk__37216_37221,i__37218_37223);append_BANG_.call(null,parent__$1,c_37224);
{
var G__37225 = seq__37215_37220;
var G__37226 = chunk__37216_37221;
var G__37227 = count__37217_37222;
var G__37228 = (i__37218_37223 + (1));
seq__37215_37220 = G__37225;
chunk__37216_37221 = G__37226;
count__37217_37222 = G__37227;
i__37218_37223 = G__37228;
continue;
}
} else
{var temp__4126__auto___37229 = cljs.core.seq.call(null,seq__37215_37220);if(temp__4126__auto___37229)
{var seq__37215_37230__$1 = temp__4126__auto___37229;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37215_37230__$1))
{var c__4299__auto___37231 = cljs.core.chunk_first.call(null,seq__37215_37230__$1);{
var G__37232 = cljs.core.chunk_rest.call(null,seq__37215_37230__$1);
var G__37233 = c__4299__auto___37231;
var G__37234 = cljs.core.count.call(null,c__4299__auto___37231);
var G__37235 = (0);
seq__37215_37220 = G__37232;
chunk__37216_37221 = G__37233;
count__37217_37222 = G__37234;
i__37218_37223 = G__37235;
continue;
}
} else
{var c_37236 = cljs.core.first.call(null,seq__37215_37230__$1);append_BANG_.call(null,parent__$1,c_37236);
{
var G__37237 = cljs.core.next.call(null,seq__37215_37230__$1);
var G__37238 = null;
var G__37239 = (0);
var G__37240 = (0);
seq__37215_37220 = G__37237;
chunk__37216_37221 = G__37238;
count__37217_37222 = G__37239;
i__37218_37223 = G__37240;
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
var G__37219 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__37219__delegate.call(this,parent,child,more_children);};
G__37219.cljs$lang$maxFixedArity = 2;
G__37219.cljs$lang$applyTo = (function (arglist__37241){
var parent = cljs.core.first(arglist__37241);
arglist__37241 = cljs.core.next(arglist__37241);
var child = cljs.core.first(arglist__37241);
var more_children = cljs.core.rest(arglist__37241);
return G__37219__delegate(parent,child,more_children);
});
G__37219.cljs$core$IFn$_invoke$arity$variadic = G__37219__delegate;
return G__37219;
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
var G__37250__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__37246_37251 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__37247_37252 = null;var count__37248_37253 = (0);var i__37249_37254 = (0);while(true){
if((i__37249_37254 < count__37248_37253))
{var c_37255 = cljs.core._nth.call(null,chunk__37247_37252,i__37249_37254);prepend_BANG_.call(null,parent__$1,c_37255);
{
var G__37256 = seq__37246_37251;
var G__37257 = chunk__37247_37252;
var G__37258 = count__37248_37253;
var G__37259 = (i__37249_37254 + (1));
seq__37246_37251 = G__37256;
chunk__37247_37252 = G__37257;
count__37248_37253 = G__37258;
i__37249_37254 = G__37259;
continue;
}
} else
{var temp__4126__auto___37260 = cljs.core.seq.call(null,seq__37246_37251);if(temp__4126__auto___37260)
{var seq__37246_37261__$1 = temp__4126__auto___37260;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37246_37261__$1))
{var c__4299__auto___37262 = cljs.core.chunk_first.call(null,seq__37246_37261__$1);{
var G__37263 = cljs.core.chunk_rest.call(null,seq__37246_37261__$1);
var G__37264 = c__4299__auto___37262;
var G__37265 = cljs.core.count.call(null,c__4299__auto___37262);
var G__37266 = (0);
seq__37246_37251 = G__37263;
chunk__37247_37252 = G__37264;
count__37248_37253 = G__37265;
i__37249_37254 = G__37266;
continue;
}
} else
{var c_37267 = cljs.core.first.call(null,seq__37246_37261__$1);prepend_BANG_.call(null,parent__$1,c_37267);
{
var G__37268 = cljs.core.next.call(null,seq__37246_37261__$1);
var G__37269 = null;
var G__37270 = (0);
var G__37271 = (0);
seq__37246_37251 = G__37268;
chunk__37247_37252 = G__37269;
count__37248_37253 = G__37270;
i__37249_37254 = G__37271;
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
var G__37250 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__37250__delegate.call(this,parent,child,more_children);};
G__37250.cljs$lang$maxFixedArity = 2;
G__37250.cljs$lang$applyTo = (function (arglist__37272){
var parent = cljs.core.first(arglist__37272);
arglist__37272 = cljs.core.next(arglist__37272);
var child = cljs.core.first(arglist__37272);
var more_children = cljs.core.rest(arglist__37272);
return G__37250__delegate(parent,child,more_children);
});
G__37250.cljs$core$IFn$_invoke$arity$variadic = G__37250__delegate;
return G__37250;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4124__auto___37273 = other__$1.nextSibling;if(cljs.core.truth_(temp__4124__auto___37273))
{var next_37274 = temp__4124__auto___37273;parent.insertBefore(actual_node,next_37274);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__37276 = dommy.template.__GT_node_like.call(null,parent);G__37276.innerHTML = "";
dommy.core.append_BANG_.call(null,G__37276,node_like);
return G__37276;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__37278 = elem__$1.parentNode;G__37278.removeChild(elem__$1);
return G__37278;
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
return (function (p__37284){var vec__37285 = p__37284;var k = cljs.core.nth.call(null,vec__37285,(0),null);var v = cljs.core.nth.call(null,vec__37285,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",-1610148039).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t37286 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t37286 = (function (v,k,vec__37285,p__37284,container,key_selectors_map,template,selector_map,meta37287){
this.v = v;
this.k = k;
this.vec__37285 = vec__37285;
this.p__37284 = p__37284;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta37287 = meta37287;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t37286.cljs$lang$type = true;
dommy.core.t37286.cljs$lang$ctorStr = "dommy.core/t37286";
dommy.core.t37286.cljs$lang$ctorPrWriter = ((function (vec__37285,k,v,container){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"dommy.core/t37286");
});})(vec__37285,k,v,container))
;
dommy.core.t37286.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__37285,k,v,container){
return (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});})(vec__37285,k,v,container))
;
dommy.core.t37286.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__37285,k,v,container){
return (function (_37288){var self__ = this;
var _37288__$1 = this;return self__.meta37287;
});})(vec__37285,k,v,container))
;
dommy.core.t37286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__37285,k,v,container){
return (function (_37288,meta37287__$1){var self__ = this;
var _37288__$1 = this;return (new dommy.core.t37286(self__.v,self__.k,self__.vec__37285,self__.p__37284,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta37287__$1));
});})(vec__37285,k,v,container))
;
dommy.core.__GT_t37286 = ((function (vec__37285,k,v,container){
return (function __GT_t37286(v__$1,k__$1,vec__37285__$1,p__37284__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta37287){return (new dommy.core.t37286(v__$1,k__$1,vec__37285__$1,p__37284__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta37287));
});})(vec__37285,k,v,container))
;
}
return (new dommy.core.t37286(v,k,vec__37285,p__37284,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
});})(container))
,key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__37289_SHARP_){return p1__37289_SHARP_.parentNode;
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
return (function (p1__37290_SHARP_){return !((p1__37290_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__37291){var vec__37292 = p__37291;var special_mouse_event = cljs.core.nth.call(null,vec__37292,(0),null);var real_mouse_event = cljs.core.nth.call(null,vec__37292,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__37292,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__37292,special_mouse_event,real_mouse_event){
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
;})(vec__37292,special_mouse_event,real_mouse_event))
});})(vec__37292,special_mouse_event,real_mouse_event))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__37293){
var elem = cljs.core.first(arglist__37293);
arglist__37293 = cljs.core.next(arglist__37293);
var f = cljs.core.first(arglist__37293);
var args = cljs.core.rest(arglist__37293);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__37294_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__37294_SHARP_));
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
var vec__37318_37341 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_37342 = cljs.core.nth.call(null,vec__37318_37341,(0),null);var selector_37343 = cljs.core.nth.call(null,vec__37318_37341,(1),null);var seq__37319_37344 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__37326_37345 = null;var count__37327_37346 = (0);var i__37328_37347 = (0);while(true){
if((i__37328_37347 < count__37327_37346))
{var vec__37335_37348 = cljs.core._nth.call(null,chunk__37326_37345,i__37328_37347);var orig_type_37349 = cljs.core.nth.call(null,vec__37335_37348,(0),null);var f_37350 = cljs.core.nth.call(null,vec__37335_37348,(1),null);var seq__37329_37351 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_37349,new cljs.core.PersistentArrayMap.fromArray([orig_type_37349,cljs.core.identity], true, false)));var chunk__37331_37352 = null;var count__37332_37353 = (0);var i__37333_37354 = (0);while(true){
if((i__37333_37354 < count__37332_37353))
{var vec__37336_37355 = cljs.core._nth.call(null,chunk__37331_37352,i__37333_37354);var actual_type_37356 = cljs.core.nth.call(null,vec__37336_37355,(0),null);var factory_37357 = cljs.core.nth.call(null,vec__37336_37355,(1),null);var canonical_f_37358 = (cljs.core.truth_(selector_37343)?cljs.core.partial.call(null,dommy.core.live_listener,elem_37342,selector_37343):cljs.core.identity).call(null,factory_37357.call(null,f_37350));dommy.core.update_event_listeners_BANG_.call(null,elem_37342,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37343,actual_type_37356,f_37350], null),canonical_f_37358);
if(cljs.core.truth_(elem_37342.addEventListener))
{elem_37342.addEventListener(cljs.core.name.call(null,actual_type_37356),canonical_f_37358);
} else
{elem_37342.attachEvent(cljs.core.name.call(null,actual_type_37356),canonical_f_37358);
}
{
var G__37359 = seq__37329_37351;
var G__37360 = chunk__37331_37352;
var G__37361 = count__37332_37353;
var G__37362 = (i__37333_37354 + (1));
seq__37329_37351 = G__37359;
chunk__37331_37352 = G__37360;
count__37332_37353 = G__37361;
i__37333_37354 = G__37362;
continue;
}
} else
{var temp__4126__auto___37363 = cljs.core.seq.call(null,seq__37329_37351);if(temp__4126__auto___37363)
{var seq__37329_37364__$1 = temp__4126__auto___37363;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37329_37364__$1))
{var c__4299__auto___37365 = cljs.core.chunk_first.call(null,seq__37329_37364__$1);{
var G__37366 = cljs.core.chunk_rest.call(null,seq__37329_37364__$1);
var G__37367 = c__4299__auto___37365;
var G__37368 = cljs.core.count.call(null,c__4299__auto___37365);
var G__37369 = (0);
seq__37329_37351 = G__37366;
chunk__37331_37352 = G__37367;
count__37332_37353 = G__37368;
i__37333_37354 = G__37369;
continue;
}
} else
{var vec__37337_37370 = cljs.core.first.call(null,seq__37329_37364__$1);var actual_type_37371 = cljs.core.nth.call(null,vec__37337_37370,(0),null);var factory_37372 = cljs.core.nth.call(null,vec__37337_37370,(1),null);var canonical_f_37373 = (cljs.core.truth_(selector_37343)?cljs.core.partial.call(null,dommy.core.live_listener,elem_37342,selector_37343):cljs.core.identity).call(null,factory_37372.call(null,f_37350));dommy.core.update_event_listeners_BANG_.call(null,elem_37342,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37343,actual_type_37371,f_37350], null),canonical_f_37373);
if(cljs.core.truth_(elem_37342.addEventListener))
{elem_37342.addEventListener(cljs.core.name.call(null,actual_type_37371),canonical_f_37373);
} else
{elem_37342.attachEvent(cljs.core.name.call(null,actual_type_37371),canonical_f_37373);
}
{
var G__37374 = cljs.core.next.call(null,seq__37329_37364__$1);
var G__37375 = null;
var G__37376 = (0);
var G__37377 = (0);
seq__37329_37351 = G__37374;
chunk__37331_37352 = G__37375;
count__37332_37353 = G__37376;
i__37333_37354 = G__37377;
continue;
}
}
} else
{}
}
break;
}
{
var G__37378 = seq__37319_37344;
var G__37379 = chunk__37326_37345;
var G__37380 = count__37327_37346;
var G__37381 = (i__37328_37347 + (1));
seq__37319_37344 = G__37378;
chunk__37326_37345 = G__37379;
count__37327_37346 = G__37380;
i__37328_37347 = G__37381;
continue;
}
} else
{var temp__4126__auto___37382 = cljs.core.seq.call(null,seq__37319_37344);if(temp__4126__auto___37382)
{var seq__37319_37383__$1 = temp__4126__auto___37382;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37319_37383__$1))
{var c__4299__auto___37384 = cljs.core.chunk_first.call(null,seq__37319_37383__$1);{
var G__37385 = cljs.core.chunk_rest.call(null,seq__37319_37383__$1);
var G__37386 = c__4299__auto___37384;
var G__37387 = cljs.core.count.call(null,c__4299__auto___37384);
var G__37388 = (0);
seq__37319_37344 = G__37385;
chunk__37326_37345 = G__37386;
count__37327_37346 = G__37387;
i__37328_37347 = G__37388;
continue;
}
} else
{var vec__37338_37389 = cljs.core.first.call(null,seq__37319_37383__$1);var orig_type_37390 = cljs.core.nth.call(null,vec__37338_37389,(0),null);var f_37391 = cljs.core.nth.call(null,vec__37338_37389,(1),null);var seq__37320_37392 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_37390,new cljs.core.PersistentArrayMap.fromArray([orig_type_37390,cljs.core.identity], true, false)));var chunk__37322_37393 = null;var count__37323_37394 = (0);var i__37324_37395 = (0);while(true){
if((i__37324_37395 < count__37323_37394))
{var vec__37339_37396 = cljs.core._nth.call(null,chunk__37322_37393,i__37324_37395);var actual_type_37397 = cljs.core.nth.call(null,vec__37339_37396,(0),null);var factory_37398 = cljs.core.nth.call(null,vec__37339_37396,(1),null);var canonical_f_37399 = (cljs.core.truth_(selector_37343)?cljs.core.partial.call(null,dommy.core.live_listener,elem_37342,selector_37343):cljs.core.identity).call(null,factory_37398.call(null,f_37391));dommy.core.update_event_listeners_BANG_.call(null,elem_37342,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37343,actual_type_37397,f_37391], null),canonical_f_37399);
if(cljs.core.truth_(elem_37342.addEventListener))
{elem_37342.addEventListener(cljs.core.name.call(null,actual_type_37397),canonical_f_37399);
} else
{elem_37342.attachEvent(cljs.core.name.call(null,actual_type_37397),canonical_f_37399);
}
{
var G__37400 = seq__37320_37392;
var G__37401 = chunk__37322_37393;
var G__37402 = count__37323_37394;
var G__37403 = (i__37324_37395 + (1));
seq__37320_37392 = G__37400;
chunk__37322_37393 = G__37401;
count__37323_37394 = G__37402;
i__37324_37395 = G__37403;
continue;
}
} else
{var temp__4126__auto___37404__$1 = cljs.core.seq.call(null,seq__37320_37392);if(temp__4126__auto___37404__$1)
{var seq__37320_37405__$1 = temp__4126__auto___37404__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37320_37405__$1))
{var c__4299__auto___37406 = cljs.core.chunk_first.call(null,seq__37320_37405__$1);{
var G__37407 = cljs.core.chunk_rest.call(null,seq__37320_37405__$1);
var G__37408 = c__4299__auto___37406;
var G__37409 = cljs.core.count.call(null,c__4299__auto___37406);
var G__37410 = (0);
seq__37320_37392 = G__37407;
chunk__37322_37393 = G__37408;
count__37323_37394 = G__37409;
i__37324_37395 = G__37410;
continue;
}
} else
{var vec__37340_37411 = cljs.core.first.call(null,seq__37320_37405__$1);var actual_type_37412 = cljs.core.nth.call(null,vec__37340_37411,(0),null);var factory_37413 = cljs.core.nth.call(null,vec__37340_37411,(1),null);var canonical_f_37414 = (cljs.core.truth_(selector_37343)?cljs.core.partial.call(null,dommy.core.live_listener,elem_37342,selector_37343):cljs.core.identity).call(null,factory_37413.call(null,f_37391));dommy.core.update_event_listeners_BANG_.call(null,elem_37342,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37343,actual_type_37412,f_37391], null),canonical_f_37414);
if(cljs.core.truth_(elem_37342.addEventListener))
{elem_37342.addEventListener(cljs.core.name.call(null,actual_type_37412),canonical_f_37414);
} else
{elem_37342.attachEvent(cljs.core.name.call(null,actual_type_37412),canonical_f_37414);
}
{
var G__37415 = cljs.core.next.call(null,seq__37320_37405__$1);
var G__37416 = null;
var G__37417 = (0);
var G__37418 = (0);
seq__37320_37392 = G__37415;
chunk__37322_37393 = G__37416;
count__37323_37394 = G__37417;
i__37324_37395 = G__37418;
continue;
}
}
} else
{}
}
break;
}
{
var G__37419 = cljs.core.next.call(null,seq__37319_37383__$1);
var G__37420 = null;
var G__37421 = (0);
var G__37422 = (0);
seq__37319_37344 = G__37419;
chunk__37326_37345 = G__37420;
count__37327_37346 = G__37421;
i__37328_37347 = G__37422;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__37423){
var elem_sel = cljs.core.first(arglist__37423);
var type_fs = cljs.core.rest(arglist__37423);
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
var vec__37447_37470 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_37471 = cljs.core.nth.call(null,vec__37447_37470,(0),null);var selector_37472 = cljs.core.nth.call(null,vec__37447_37470,(1),null);var seq__37448_37473 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__37455_37474 = null;var count__37456_37475 = (0);var i__37457_37476 = (0);while(true){
if((i__37457_37476 < count__37456_37475))
{var vec__37464_37477 = cljs.core._nth.call(null,chunk__37455_37474,i__37457_37476);var orig_type_37478 = cljs.core.nth.call(null,vec__37464_37477,(0),null);var f_37479 = cljs.core.nth.call(null,vec__37464_37477,(1),null);var seq__37458_37480 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_37478,new cljs.core.PersistentArrayMap.fromArray([orig_type_37478,cljs.core.identity], true, false)));var chunk__37460_37481 = null;var count__37461_37482 = (0);var i__37462_37483 = (0);while(true){
if((i__37462_37483 < count__37461_37482))
{var vec__37465_37484 = cljs.core._nth.call(null,chunk__37460_37481,i__37462_37483);var actual_type_37485 = cljs.core.nth.call(null,vec__37465_37484,(0),null);var __37486 = cljs.core.nth.call(null,vec__37465_37484,(1),null);var keys_37487 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37472,actual_type_37485,f_37479], null);var canonical_f_37488 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_37471),keys_37487);dommy.core.update_event_listeners_BANG_.call(null,elem_37471,dommy.utils.dissoc_in,keys_37487);
if(cljs.core.truth_(elem_37471.removeEventListener))
{elem_37471.removeEventListener(cljs.core.name.call(null,actual_type_37485),canonical_f_37488);
} else
{elem_37471.detachEvent(cljs.core.name.call(null,actual_type_37485),canonical_f_37488);
}
{
var G__37489 = seq__37458_37480;
var G__37490 = chunk__37460_37481;
var G__37491 = count__37461_37482;
var G__37492 = (i__37462_37483 + (1));
seq__37458_37480 = G__37489;
chunk__37460_37481 = G__37490;
count__37461_37482 = G__37491;
i__37462_37483 = G__37492;
continue;
}
} else
{var temp__4126__auto___37493 = cljs.core.seq.call(null,seq__37458_37480);if(temp__4126__auto___37493)
{var seq__37458_37494__$1 = temp__4126__auto___37493;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37458_37494__$1))
{var c__4299__auto___37495 = cljs.core.chunk_first.call(null,seq__37458_37494__$1);{
var G__37496 = cljs.core.chunk_rest.call(null,seq__37458_37494__$1);
var G__37497 = c__4299__auto___37495;
var G__37498 = cljs.core.count.call(null,c__4299__auto___37495);
var G__37499 = (0);
seq__37458_37480 = G__37496;
chunk__37460_37481 = G__37497;
count__37461_37482 = G__37498;
i__37462_37483 = G__37499;
continue;
}
} else
{var vec__37466_37500 = cljs.core.first.call(null,seq__37458_37494__$1);var actual_type_37501 = cljs.core.nth.call(null,vec__37466_37500,(0),null);var __37502 = cljs.core.nth.call(null,vec__37466_37500,(1),null);var keys_37503 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37472,actual_type_37501,f_37479], null);var canonical_f_37504 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_37471),keys_37503);dommy.core.update_event_listeners_BANG_.call(null,elem_37471,dommy.utils.dissoc_in,keys_37503);
if(cljs.core.truth_(elem_37471.removeEventListener))
{elem_37471.removeEventListener(cljs.core.name.call(null,actual_type_37501),canonical_f_37504);
} else
{elem_37471.detachEvent(cljs.core.name.call(null,actual_type_37501),canonical_f_37504);
}
{
var G__37505 = cljs.core.next.call(null,seq__37458_37494__$1);
var G__37506 = null;
var G__37507 = (0);
var G__37508 = (0);
seq__37458_37480 = G__37505;
chunk__37460_37481 = G__37506;
count__37461_37482 = G__37507;
i__37462_37483 = G__37508;
continue;
}
}
} else
{}
}
break;
}
{
var G__37509 = seq__37448_37473;
var G__37510 = chunk__37455_37474;
var G__37511 = count__37456_37475;
var G__37512 = (i__37457_37476 + (1));
seq__37448_37473 = G__37509;
chunk__37455_37474 = G__37510;
count__37456_37475 = G__37511;
i__37457_37476 = G__37512;
continue;
}
} else
{var temp__4126__auto___37513 = cljs.core.seq.call(null,seq__37448_37473);if(temp__4126__auto___37513)
{var seq__37448_37514__$1 = temp__4126__auto___37513;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37448_37514__$1))
{var c__4299__auto___37515 = cljs.core.chunk_first.call(null,seq__37448_37514__$1);{
var G__37516 = cljs.core.chunk_rest.call(null,seq__37448_37514__$1);
var G__37517 = c__4299__auto___37515;
var G__37518 = cljs.core.count.call(null,c__4299__auto___37515);
var G__37519 = (0);
seq__37448_37473 = G__37516;
chunk__37455_37474 = G__37517;
count__37456_37475 = G__37518;
i__37457_37476 = G__37519;
continue;
}
} else
{var vec__37467_37520 = cljs.core.first.call(null,seq__37448_37514__$1);var orig_type_37521 = cljs.core.nth.call(null,vec__37467_37520,(0),null);var f_37522 = cljs.core.nth.call(null,vec__37467_37520,(1),null);var seq__37449_37523 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_37521,new cljs.core.PersistentArrayMap.fromArray([orig_type_37521,cljs.core.identity], true, false)));var chunk__37451_37524 = null;var count__37452_37525 = (0);var i__37453_37526 = (0);while(true){
if((i__37453_37526 < count__37452_37525))
{var vec__37468_37527 = cljs.core._nth.call(null,chunk__37451_37524,i__37453_37526);var actual_type_37528 = cljs.core.nth.call(null,vec__37468_37527,(0),null);var __37529 = cljs.core.nth.call(null,vec__37468_37527,(1),null);var keys_37530 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37472,actual_type_37528,f_37522], null);var canonical_f_37531 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_37471),keys_37530);dommy.core.update_event_listeners_BANG_.call(null,elem_37471,dommy.utils.dissoc_in,keys_37530);
if(cljs.core.truth_(elem_37471.removeEventListener))
{elem_37471.removeEventListener(cljs.core.name.call(null,actual_type_37528),canonical_f_37531);
} else
{elem_37471.detachEvent(cljs.core.name.call(null,actual_type_37528),canonical_f_37531);
}
{
var G__37532 = seq__37449_37523;
var G__37533 = chunk__37451_37524;
var G__37534 = count__37452_37525;
var G__37535 = (i__37453_37526 + (1));
seq__37449_37523 = G__37532;
chunk__37451_37524 = G__37533;
count__37452_37525 = G__37534;
i__37453_37526 = G__37535;
continue;
}
} else
{var temp__4126__auto___37536__$1 = cljs.core.seq.call(null,seq__37449_37523);if(temp__4126__auto___37536__$1)
{var seq__37449_37537__$1 = temp__4126__auto___37536__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37449_37537__$1))
{var c__4299__auto___37538 = cljs.core.chunk_first.call(null,seq__37449_37537__$1);{
var G__37539 = cljs.core.chunk_rest.call(null,seq__37449_37537__$1);
var G__37540 = c__4299__auto___37538;
var G__37541 = cljs.core.count.call(null,c__4299__auto___37538);
var G__37542 = (0);
seq__37449_37523 = G__37539;
chunk__37451_37524 = G__37540;
count__37452_37525 = G__37541;
i__37453_37526 = G__37542;
continue;
}
} else
{var vec__37469_37543 = cljs.core.first.call(null,seq__37449_37537__$1);var actual_type_37544 = cljs.core.nth.call(null,vec__37469_37543,(0),null);var __37545 = cljs.core.nth.call(null,vec__37469_37543,(1),null);var keys_37546 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_37472,actual_type_37544,f_37522], null);var canonical_f_37547 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_37471),keys_37546);dommy.core.update_event_listeners_BANG_.call(null,elem_37471,dommy.utils.dissoc_in,keys_37546);
if(cljs.core.truth_(elem_37471.removeEventListener))
{elem_37471.removeEventListener(cljs.core.name.call(null,actual_type_37544),canonical_f_37547);
} else
{elem_37471.detachEvent(cljs.core.name.call(null,actual_type_37544),canonical_f_37547);
}
{
var G__37548 = cljs.core.next.call(null,seq__37449_37537__$1);
var G__37549 = null;
var G__37550 = (0);
var G__37551 = (0);
seq__37449_37523 = G__37548;
chunk__37451_37524 = G__37549;
count__37452_37525 = G__37550;
i__37453_37526 = G__37551;
continue;
}
}
} else
{}
}
break;
}
{
var G__37552 = cljs.core.next.call(null,seq__37448_37514__$1);
var G__37553 = null;
var G__37554 = (0);
var G__37555 = (0);
seq__37448_37473 = G__37552;
chunk__37455_37474 = G__37553;
count__37456_37475 = G__37554;
i__37457_37476 = G__37555;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__37556){
var elem_sel = cljs.core.first(arglist__37556);
var type_fs = cljs.core.rest(arglist__37556);
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
var vec__37564_37571 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_37572 = cljs.core.nth.call(null,vec__37564_37571,(0),null);var selector_37573 = cljs.core.nth.call(null,vec__37564_37571,(1),null);var seq__37565_37574 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__37566_37575 = null;var count__37567_37576 = (0);var i__37568_37577 = (0);while(true){
if((i__37568_37577 < count__37567_37576))
{var vec__37569_37578 = cljs.core._nth.call(null,chunk__37566_37575,i__37568_37577);var type_37579 = cljs.core.nth.call(null,vec__37569_37578,(0),null);var f_37580 = cljs.core.nth.call(null,vec__37569_37578,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_37579,((function (seq__37565_37574,chunk__37566_37575,count__37567_37576,i__37568_37577,vec__37569_37578,type_37579,f_37580,vec__37564_37571,elem_37572,selector_37573){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_37579,this_fn);
return f_37580.call(null,e);
});})(seq__37565_37574,chunk__37566_37575,count__37567_37576,i__37568_37577,vec__37569_37578,type_37579,f_37580,vec__37564_37571,elem_37572,selector_37573))
);
{
var G__37581 = seq__37565_37574;
var G__37582 = chunk__37566_37575;
var G__37583 = count__37567_37576;
var G__37584 = (i__37568_37577 + (1));
seq__37565_37574 = G__37581;
chunk__37566_37575 = G__37582;
count__37567_37576 = G__37583;
i__37568_37577 = G__37584;
continue;
}
} else
{var temp__4126__auto___37585 = cljs.core.seq.call(null,seq__37565_37574);if(temp__4126__auto___37585)
{var seq__37565_37586__$1 = temp__4126__auto___37585;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37565_37586__$1))
{var c__4299__auto___37587 = cljs.core.chunk_first.call(null,seq__37565_37586__$1);{
var G__37588 = cljs.core.chunk_rest.call(null,seq__37565_37586__$1);
var G__37589 = c__4299__auto___37587;
var G__37590 = cljs.core.count.call(null,c__4299__auto___37587);
var G__37591 = (0);
seq__37565_37574 = G__37588;
chunk__37566_37575 = G__37589;
count__37567_37576 = G__37590;
i__37568_37577 = G__37591;
continue;
}
} else
{var vec__37570_37592 = cljs.core.first.call(null,seq__37565_37586__$1);var type_37593 = cljs.core.nth.call(null,vec__37570_37592,(0),null);var f_37594 = cljs.core.nth.call(null,vec__37570_37592,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_37593,((function (seq__37565_37574,chunk__37566_37575,count__37567_37576,i__37568_37577,vec__37570_37592,type_37593,f_37594,seq__37565_37586__$1,temp__4126__auto___37585,vec__37564_37571,elem_37572,selector_37573){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_37593,this_fn);
return f_37594.call(null,e);
});})(seq__37565_37574,chunk__37566_37575,count__37567_37576,i__37568_37577,vec__37570_37592,type_37593,f_37594,seq__37565_37586__$1,temp__4126__auto___37585,vec__37564_37571,elem_37572,selector_37573))
);
{
var G__37595 = cljs.core.next.call(null,seq__37565_37586__$1);
var G__37596 = null;
var G__37597 = (0);
var G__37598 = (0);
seq__37565_37574 = G__37595;
chunk__37566_37575 = G__37596;
count__37567_37576 = G__37597;
i__37568_37577 = G__37598;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__37599){
var elem_sel = cljs.core.first(arglist__37599);
var type_fs = cljs.core.rest(arglist__37599);
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
var fire_BANG___delegate = function (node,event_type,p__37600){var vec__37602 = p__37600;var update_event_BANG_ = cljs.core.nth.call(null,vec__37602,(0),null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__37600 = null;if (arguments.length > 2) {
  p__37600 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__37600);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__37603){
var node = cljs.core.first(arglist__37603);
arglist__37603 = cljs.core.next(arglist__37603);
var event_type = cljs.core.first(arglist__37603);
var p__37600 = cljs.core.rest(arglist__37603);
return fire_BANG___delegate(node,event_type,p__37600);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map