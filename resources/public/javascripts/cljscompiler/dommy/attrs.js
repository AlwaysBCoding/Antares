// Compiled by ClojureScript 0.0-2277
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3531__auto__ = ((idx === (0))) || ((" " === class_name.charAt((idx - (1)))));if(and__3531__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__3531__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = (0);while(true){
var i = class_name.indexOf(class$,start_from);if((i >= (0)))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__15352 = (i + class$.length);
start_from = G__15352;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto__))
{var class_list = temp__4124__auto__;return class_list.contains(class$__$1);
} else
{var temp__4126__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4126__auto__))
{var class_name = temp__4126__auto__;var temp__4126__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4126__auto____$1))
{var i = temp__4126__auto____$1;return (i >= (0));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));if(cljs.core.seq.call(null,classes__$1))
{var temp__4124__auto___15377 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___15377))
{var class_list_15378 = temp__4124__auto___15377;var seq__15365_15379 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__15366_15380 = null;var count__15367_15381 = (0);var i__15368_15382 = (0);while(true){
if((i__15368_15382 < count__15367_15381))
{var class_15383 = cljs.core._nth.call(null,chunk__15366_15380,i__15368_15382);class_list_15378.add(class_15383);
{
var G__15384 = seq__15365_15379;
var G__15385 = chunk__15366_15380;
var G__15386 = count__15367_15381;
var G__15387 = (i__15368_15382 + (1));
seq__15365_15379 = G__15384;
chunk__15366_15380 = G__15385;
count__15367_15381 = G__15386;
i__15368_15382 = G__15387;
continue;
}
} else
{var temp__4126__auto___15388 = cljs.core.seq.call(null,seq__15365_15379);if(temp__4126__auto___15388)
{var seq__15365_15389__$1 = temp__4126__auto___15388;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15365_15389__$1))
{var c__4299__auto___15390 = cljs.core.chunk_first.call(null,seq__15365_15389__$1);{
var G__15391 = cljs.core.chunk_rest.call(null,seq__15365_15389__$1);
var G__15392 = c__4299__auto___15390;
var G__15393 = cljs.core.count.call(null,c__4299__auto___15390);
var G__15394 = (0);
seq__15365_15379 = G__15391;
chunk__15366_15380 = G__15392;
count__15367_15381 = G__15393;
i__15368_15382 = G__15394;
continue;
}
} else
{var class_15395 = cljs.core.first.call(null,seq__15365_15389__$1);class_list_15378.add(class_15395);
{
var G__15396 = cljs.core.next.call(null,seq__15365_15389__$1);
var G__15397 = null;
var G__15398 = (0);
var G__15399 = (0);
seq__15365_15379 = G__15396;
chunk__15366_15380 = G__15397;
count__15367_15381 = G__15398;
i__15368_15382 = G__15399;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_15400 = elem__$1.className;var seq__15369_15401 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__15370_15402 = null;var count__15371_15403 = (0);var i__15372_15404 = (0);while(true){
if((i__15372_15404 < count__15371_15403))
{var class_15405 = cljs.core._nth.call(null,chunk__15370_15402,i__15372_15404);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_15400,class_15405)))
{} else
{elem__$1.className = (((class_name_15400 === ""))?class_15405:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_15400)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_15405)));
}
{
var G__15406 = seq__15369_15401;
var G__15407 = chunk__15370_15402;
var G__15408 = count__15371_15403;
var G__15409 = (i__15372_15404 + (1));
seq__15369_15401 = G__15406;
chunk__15370_15402 = G__15407;
count__15371_15403 = G__15408;
i__15372_15404 = G__15409;
continue;
}
} else
{var temp__4126__auto___15410 = cljs.core.seq.call(null,seq__15369_15401);if(temp__4126__auto___15410)
{var seq__15369_15411__$1 = temp__4126__auto___15410;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15369_15411__$1))
{var c__4299__auto___15412 = cljs.core.chunk_first.call(null,seq__15369_15411__$1);{
var G__15413 = cljs.core.chunk_rest.call(null,seq__15369_15411__$1);
var G__15414 = c__4299__auto___15412;
var G__15415 = cljs.core.count.call(null,c__4299__auto___15412);
var G__15416 = (0);
seq__15369_15401 = G__15413;
chunk__15370_15402 = G__15414;
count__15371_15403 = G__15415;
i__15372_15404 = G__15416;
continue;
}
} else
{var class_15417 = cljs.core.first.call(null,seq__15369_15411__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_15400,class_15417)))
{} else
{elem__$1.className = (((class_name_15400 === ""))?class_15417:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_15400)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_15417)));
}
{
var G__15418 = cljs.core.next.call(null,seq__15369_15411__$1);
var G__15419 = null;
var G__15420 = (0);
var G__15421 = (0);
seq__15369_15401 = G__15418;
chunk__15370_15402 = G__15419;
count__15371_15403 = G__15420;
i__15372_15404 = G__15421;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__15422__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__15373_15423 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__15374_15424 = null;var count__15375_15425 = (0);var i__15376_15426 = (0);while(true){
if((i__15376_15426 < count__15375_15425))
{var c_15427 = cljs.core._nth.call(null,chunk__15374_15424,i__15376_15426);add_class_BANG_.call(null,elem__$1,c_15427);
{
var G__15428 = seq__15373_15423;
var G__15429 = chunk__15374_15424;
var G__15430 = count__15375_15425;
var G__15431 = (i__15376_15426 + (1));
seq__15373_15423 = G__15428;
chunk__15374_15424 = G__15429;
count__15375_15425 = G__15430;
i__15376_15426 = G__15431;
continue;
}
} else
{var temp__4126__auto___15432 = cljs.core.seq.call(null,seq__15373_15423);if(temp__4126__auto___15432)
{var seq__15373_15433__$1 = temp__4126__auto___15432;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15373_15433__$1))
{var c__4299__auto___15434 = cljs.core.chunk_first.call(null,seq__15373_15433__$1);{
var G__15435 = cljs.core.chunk_rest.call(null,seq__15373_15433__$1);
var G__15436 = c__4299__auto___15434;
var G__15437 = cljs.core.count.call(null,c__4299__auto___15434);
var G__15438 = (0);
seq__15373_15423 = G__15435;
chunk__15374_15424 = G__15436;
count__15375_15425 = G__15437;
i__15376_15426 = G__15438;
continue;
}
} else
{var c_15439 = cljs.core.first.call(null,seq__15373_15433__$1);add_class_BANG_.call(null,elem__$1,c_15439);
{
var G__15440 = cljs.core.next.call(null,seq__15373_15433__$1);
var G__15441 = null;
var G__15442 = (0);
var G__15443 = (0);
seq__15373_15423 = G__15440;
chunk__15374_15424 = G__15441;
count__15375_15425 = G__15442;
i__15376_15426 = G__15443;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__15422 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15422__delegate.call(this,elem,classes,more_classes);};
G__15422.cljs$lang$maxFixedArity = 2;
G__15422.cljs$lang$applyTo = (function (arglist__15444){
var elem = cljs.core.first(arglist__15444);
arglist__15444 = cljs.core.next(arglist__15444);
var classes = cljs.core.first(arglist__15444);
var more_classes = cljs.core.rest(arglist__15444);
return G__15422__delegate(elem,classes,more_classes);
});
G__15422.cljs$core$IFn$_invoke$arity$variadic = G__15422__delegate;
return G__15422;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){var class_name = init_class_name;while(true){
var class_len = class_name.length;var temp__4124__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4124__auto__))
{var i = temp__4124__auto__;{
var G__15445 = (function (){var end = (i + class$.length);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((end < class_len))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substring((0),i))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substr((end + (1))))):class_name.substring((0),(i - (1))))));
})();
class_name = G__15445;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto___15454 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___15454))
{var class_list_15455 = temp__4124__auto___15454;class_list_15455.remove(class$__$1);
} else
{var class_name_15456 = elem__$1.className;var new_class_name_15457 = dommy.attrs.remove_class_str.call(null,class_name_15456,class$__$1);if((class_name_15456 === new_class_name_15457))
{} else
{elem__$1.className = new_class_name_15457;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__15458__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__15450 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__15451 = null;var count__15452 = (0);var i__15453 = (0);while(true){
if((i__15453 < count__15452))
{var c = cljs.core._nth.call(null,chunk__15451,i__15453);remove_class_BANG_.call(null,elem__$1,c);
{
var G__15459 = seq__15450;
var G__15460 = chunk__15451;
var G__15461 = count__15452;
var G__15462 = (i__15453 + (1));
seq__15450 = G__15459;
chunk__15451 = G__15460;
count__15452 = G__15461;
i__15453 = G__15462;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__15450);if(temp__4126__auto__)
{var seq__15450__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15450__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__15450__$1);{
var G__15463 = cljs.core.chunk_rest.call(null,seq__15450__$1);
var G__15464 = c__4299__auto__;
var G__15465 = cljs.core.count.call(null,c__4299__auto__);
var G__15466 = (0);
seq__15450 = G__15463;
chunk__15451 = G__15464;
count__15452 = G__15465;
i__15453 = G__15466;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__15450__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__15467 = cljs.core.next.call(null,seq__15450__$1);
var G__15468 = null;
var G__15469 = (0);
var G__15470 = (0);
seq__15450 = G__15467;
chunk__15451 = G__15468;
count__15452 = G__15469;
i__15453 = G__15470;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__15458 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15458__delegate.call(this,elem,class$,classes);};
G__15458.cljs$lang$maxFixedArity = 2;
G__15458.cljs$lang$applyTo = (function (arglist__15471){
var elem = cljs.core.first(arglist__15471);
arglist__15471 = cljs.core.next(arglist__15471);
var class$ = cljs.core.first(arglist__15471);
var classes = cljs.core.rest(arglist__15471);
return G__15458__delegate(elem,class$,classes);
});
G__15458.cljs$core$IFn$_invoke$arity$variadic = G__15458__delegate;
return G__15458;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto___15472 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___15472))
{var class_list_15473 = temp__4124__auto___15472;class_list_15473.toggle(class$__$1);
} else
{toggle_class_BANG_.call(null,elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){if(typeof x === 'string')
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__15476){var vec__15477 = p__15476;var k = cljs.core.nth.call(null,vec__15477,(0),null);var v = cljs.core.nth.call(null,vec__15477,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,v))+";");
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__15484_15490 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__15485_15491 = null;var count__15486_15492 = (0);var i__15487_15493 = (0);while(true){
if((i__15487_15493 < count__15486_15492))
{var vec__15488_15494 = cljs.core._nth.call(null,chunk__15485_15491,i__15487_15493);var k_15495 = cljs.core.nth.call(null,vec__15488_15494,(0),null);var v_15496 = cljs.core.nth.call(null,vec__15488_15494,(1),null);(style[cljs.core.name.call(null,k_15495)] = v_15496);
{
var G__15497 = seq__15484_15490;
var G__15498 = chunk__15485_15491;
var G__15499 = count__15486_15492;
var G__15500 = (i__15487_15493 + (1));
seq__15484_15490 = G__15497;
chunk__15485_15491 = G__15498;
count__15486_15492 = G__15499;
i__15487_15493 = G__15500;
continue;
}
} else
{var temp__4126__auto___15501 = cljs.core.seq.call(null,seq__15484_15490);if(temp__4126__auto___15501)
{var seq__15484_15502__$1 = temp__4126__auto___15501;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15484_15502__$1))
{var c__4299__auto___15503 = cljs.core.chunk_first.call(null,seq__15484_15502__$1);{
var G__15504 = cljs.core.chunk_rest.call(null,seq__15484_15502__$1);
var G__15505 = c__4299__auto___15503;
var G__15506 = cljs.core.count.call(null,c__4299__auto___15503);
var G__15507 = (0);
seq__15484_15490 = G__15504;
chunk__15485_15491 = G__15505;
count__15486_15492 = G__15506;
i__15487_15493 = G__15507;
continue;
}
} else
{var vec__15489_15508 = cljs.core.first.call(null,seq__15484_15502__$1);var k_15509 = cljs.core.nth.call(null,vec__15489_15508,(0),null);var v_15510 = cljs.core.nth.call(null,vec__15489_15508,(1),null);(style[cljs.core.name.call(null,k_15509)] = v_15510);
{
var G__15511 = cljs.core.next.call(null,seq__15484_15502__$1);
var G__15512 = null;
var G__15513 = (0);
var G__15514 = (0);
seq__15484_15490 = G__15511;
chunk__15485_15491 = G__15512;
count__15486_15492 = G__15513;
i__15487_15493 = G__15514;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15515){
var elem = cljs.core.first(arglist__15515);
var kvs = cljs.core.rest(arglist__15515);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-505765866,null))))));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__15522_15528 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__15523_15529 = null;var count__15524_15530 = (0);var i__15525_15531 = (0);while(true){
if((i__15525_15531 < count__15524_15530))
{var vec__15526_15532 = cljs.core._nth.call(null,chunk__15523_15529,i__15525_15531);var k_15533 = cljs.core.nth.call(null,vec__15526_15532,(0),null);var v_15534 = cljs.core.nth.call(null,vec__15526_15532,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_15533,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_15534)+"px"));
{
var G__15535 = seq__15522_15528;
var G__15536 = chunk__15523_15529;
var G__15537 = count__15524_15530;
var G__15538 = (i__15525_15531 + (1));
seq__15522_15528 = G__15535;
chunk__15523_15529 = G__15536;
count__15524_15530 = G__15537;
i__15525_15531 = G__15538;
continue;
}
} else
{var temp__4126__auto___15539 = cljs.core.seq.call(null,seq__15522_15528);if(temp__4126__auto___15539)
{var seq__15522_15540__$1 = temp__4126__auto___15539;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15522_15540__$1))
{var c__4299__auto___15541 = cljs.core.chunk_first.call(null,seq__15522_15540__$1);{
var G__15542 = cljs.core.chunk_rest.call(null,seq__15522_15540__$1);
var G__15543 = c__4299__auto___15541;
var G__15544 = cljs.core.count.call(null,c__4299__auto___15541);
var G__15545 = (0);
seq__15522_15528 = G__15542;
chunk__15523_15529 = G__15543;
count__15524_15530 = G__15544;
i__15525_15531 = G__15545;
continue;
}
} else
{var vec__15527_15546 = cljs.core.first.call(null,seq__15522_15540__$1);var k_15547 = cljs.core.nth.call(null,vec__15527_15546,(0),null);var v_15548 = cljs.core.nth.call(null,vec__15527_15546,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_15547,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_15548)+"px"));
{
var G__15549 = cljs.core.next.call(null,seq__15522_15540__$1);
var G__15550 = null;
var G__15551 = (0);
var G__15552 = (0);
seq__15522_15528 = G__15549;
chunk__15523_15529 = G__15550;
count__15524_15530 = G__15551;
i__15525_15531 = G__15552;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__15553){
var elem = cljs.core.first(arglist__15553);
var kvs = cljs.core.rest(arglist__15553);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__15562 = dommy.template.__GT_node_like.call(null,elem);(G__15562[cljs.core.name.call(null,k)] = v);
return G__15562;
} else
{var G__15563 = dommy.template.__GT_node_like.call(null,elem);G__15563.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",-496642736)))?dommy.attrs.style_str.call(null,v):v));
return G__15563;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__15570__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__15564_15571 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));var chunk__15565_15572 = null;var count__15566_15573 = (0);var i__15567_15574 = (0);while(true){
if((i__15567_15574 < count__15566_15573))
{var vec__15568_15575 = cljs.core._nth.call(null,chunk__15565_15572,i__15567_15574);var k_15576__$1 = cljs.core.nth.call(null,vec__15568_15575,(0),null);var v_15577__$1 = cljs.core.nth.call(null,vec__15568_15575,(1),null);set_attr_BANG_.call(null,elem__$1,k_15576__$1,v_15577__$1);
{
var G__15578 = seq__15564_15571;
var G__15579 = chunk__15565_15572;
var G__15580 = count__15566_15573;
var G__15581 = (i__15567_15574 + (1));
seq__15564_15571 = G__15578;
chunk__15565_15572 = G__15579;
count__15566_15573 = G__15580;
i__15567_15574 = G__15581;
continue;
}
} else
{var temp__4126__auto___15582 = cljs.core.seq.call(null,seq__15564_15571);if(temp__4126__auto___15582)
{var seq__15564_15583__$1 = temp__4126__auto___15582;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15564_15583__$1))
{var c__4299__auto___15584 = cljs.core.chunk_first.call(null,seq__15564_15583__$1);{
var G__15585 = cljs.core.chunk_rest.call(null,seq__15564_15583__$1);
var G__15586 = c__4299__auto___15584;
var G__15587 = cljs.core.count.call(null,c__4299__auto___15584);
var G__15588 = (0);
seq__15564_15571 = G__15585;
chunk__15565_15572 = G__15586;
count__15566_15573 = G__15587;
i__15567_15574 = G__15588;
continue;
}
} else
{var vec__15569_15589 = cljs.core.first.call(null,seq__15564_15583__$1);var k_15590__$1 = cljs.core.nth.call(null,vec__15569_15589,(0),null);var v_15591__$1 = cljs.core.nth.call(null,vec__15569_15589,(1),null);set_attr_BANG_.call(null,elem__$1,k_15590__$1,v_15591__$1);
{
var G__15592 = cljs.core.next.call(null,seq__15564_15583__$1);
var G__15593 = null;
var G__15594 = (0);
var G__15595 = (0);
seq__15564_15571 = G__15592;
chunk__15565_15572 = G__15593;
count__15566_15573 = G__15594;
i__15567_15574 = G__15595;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__15570 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15570__delegate.call(this,elem,k,v,kvs);};
G__15570.cljs$lang$maxFixedArity = 3;
G__15570.cljs$lang$applyTo = (function (arglist__15596){
var elem = cljs.core.first(arglist__15596);
arglist__15596 = cljs.core.next(arglist__15596);
var k = cljs.core.first(arglist__15596);
arglist__15596 = cljs.core.next(arglist__15596);
var v = cljs.core.first(arglist__15596);
var kvs = cljs.core.rest(arglist__15596);
return G__15570__delegate(elem,k,v,kvs);
});
G__15570.cljs$core$IFn$_invoke$arity$variadic = G__15570__delegate;
return G__15570;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),null,new cljs.core.Keyword(null,"classes","classes",2037804510),null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__15605__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__15601_15606 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__15602_15607 = null;var count__15603_15608 = (0);var i__15604_15609 = (0);while(true){
if((i__15604_15609 < count__15603_15608))
{var k_15610__$1 = cljs.core._nth.call(null,chunk__15602_15607,i__15604_15609);remove_attr_BANG_.call(null,elem__$1,k_15610__$1);
{
var G__15611 = seq__15601_15606;
var G__15612 = chunk__15602_15607;
var G__15613 = count__15603_15608;
var G__15614 = (i__15604_15609 + (1));
seq__15601_15606 = G__15611;
chunk__15602_15607 = G__15612;
count__15603_15608 = G__15613;
i__15604_15609 = G__15614;
continue;
}
} else
{var temp__4126__auto___15615 = cljs.core.seq.call(null,seq__15601_15606);if(temp__4126__auto___15615)
{var seq__15601_15616__$1 = temp__4126__auto___15615;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15601_15616__$1))
{var c__4299__auto___15617 = cljs.core.chunk_first.call(null,seq__15601_15616__$1);{
var G__15618 = cljs.core.chunk_rest.call(null,seq__15601_15616__$1);
var G__15619 = c__4299__auto___15617;
var G__15620 = cljs.core.count.call(null,c__4299__auto___15617);
var G__15621 = (0);
seq__15601_15606 = G__15618;
chunk__15602_15607 = G__15619;
count__15603_15608 = G__15620;
i__15604_15609 = G__15621;
continue;
}
} else
{var k_15622__$1 = cljs.core.first.call(null,seq__15601_15616__$1);remove_attr_BANG_.call(null,elem__$1,k_15622__$1);
{
var G__15623 = cljs.core.next.call(null,seq__15601_15616__$1);
var G__15624 = null;
var G__15625 = (0);
var G__15626 = (0);
seq__15601_15606 = G__15623;
chunk__15602_15607 = G__15624;
count__15603_15608 = G__15625;
i__15604_15609 = G__15626;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__15605 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15605__delegate.call(this,elem,k,ks);};
G__15605.cljs$lang$maxFixedArity = 2;
G__15605.cljs$lang$applyTo = (function (arglist__15627){
var elem = cljs.core.first(arglist__15627);
arglist__15627 = cljs.core.next(arglist__15627);
var k = cljs.core.first(arglist__15627);
var ks = cljs.core.rest(arglist__15627);
return G__15605__delegate(elem,k,ks);
});
G__15605.cljs$core$IFn$_invoke$arity$variadic = G__15605__delegate;
return G__15605;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(cljs.core.name.call(null,k));
} else
{return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.attrs.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{return dommy.attrs.set_attr_BANG_.call(null,elem__$1,k);
} else
{return dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__15629 = dommy.template.__GT_node_like.call(null,elem);G__15629.style.display = ((show_QMARK_)?"":"none");
return G__15629;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__15631 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__15631,false);
return G__15631;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__15633 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__15633,true);
return G__15633;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__15635 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__15635["constructor"] = Object);
return G__15635;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map