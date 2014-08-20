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
var G__146948 = (i + class$.length);
start_from = G__146948;
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
{var temp__4124__auto___146973 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___146973))
{var class_list_146974 = temp__4124__auto___146973;var seq__146961_146975 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__146962_146976 = null;var count__146963_146977 = (0);var i__146964_146978 = (0);while(true){
if((i__146964_146978 < count__146963_146977))
{var class_146979 = cljs.core._nth.call(null,chunk__146962_146976,i__146964_146978);class_list_146974.add(class_146979);
{
var G__146980 = seq__146961_146975;
var G__146981 = chunk__146962_146976;
var G__146982 = count__146963_146977;
var G__146983 = (i__146964_146978 + (1));
seq__146961_146975 = G__146980;
chunk__146962_146976 = G__146981;
count__146963_146977 = G__146982;
i__146964_146978 = G__146983;
continue;
}
} else
{var temp__4126__auto___146984 = cljs.core.seq.call(null,seq__146961_146975);if(temp__4126__auto___146984)
{var seq__146961_146985__$1 = temp__4126__auto___146984;if(cljs.core.chunked_seq_QMARK_.call(null,seq__146961_146985__$1))
{var c__4299__auto___146986 = cljs.core.chunk_first.call(null,seq__146961_146985__$1);{
var G__146987 = cljs.core.chunk_rest.call(null,seq__146961_146985__$1);
var G__146988 = c__4299__auto___146986;
var G__146989 = cljs.core.count.call(null,c__4299__auto___146986);
var G__146990 = (0);
seq__146961_146975 = G__146987;
chunk__146962_146976 = G__146988;
count__146963_146977 = G__146989;
i__146964_146978 = G__146990;
continue;
}
} else
{var class_146991 = cljs.core.first.call(null,seq__146961_146985__$1);class_list_146974.add(class_146991);
{
var G__146992 = cljs.core.next.call(null,seq__146961_146985__$1);
var G__146993 = null;
var G__146994 = (0);
var G__146995 = (0);
seq__146961_146975 = G__146992;
chunk__146962_146976 = G__146993;
count__146963_146977 = G__146994;
i__146964_146978 = G__146995;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_146996 = elem__$1.className;var seq__146965_146997 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__146966_146998 = null;var count__146967_146999 = (0);var i__146968_147000 = (0);while(true){
if((i__146968_147000 < count__146967_146999))
{var class_147001 = cljs.core._nth.call(null,chunk__146966_146998,i__146968_147000);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_146996,class_147001)))
{} else
{elem__$1.className = (((class_name_146996 === ""))?class_147001:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_146996)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_147001)));
}
{
var G__147002 = seq__146965_146997;
var G__147003 = chunk__146966_146998;
var G__147004 = count__146967_146999;
var G__147005 = (i__146968_147000 + (1));
seq__146965_146997 = G__147002;
chunk__146966_146998 = G__147003;
count__146967_146999 = G__147004;
i__146968_147000 = G__147005;
continue;
}
} else
{var temp__4126__auto___147006 = cljs.core.seq.call(null,seq__146965_146997);if(temp__4126__auto___147006)
{var seq__146965_147007__$1 = temp__4126__auto___147006;if(cljs.core.chunked_seq_QMARK_.call(null,seq__146965_147007__$1))
{var c__4299__auto___147008 = cljs.core.chunk_first.call(null,seq__146965_147007__$1);{
var G__147009 = cljs.core.chunk_rest.call(null,seq__146965_147007__$1);
var G__147010 = c__4299__auto___147008;
var G__147011 = cljs.core.count.call(null,c__4299__auto___147008);
var G__147012 = (0);
seq__146965_146997 = G__147009;
chunk__146966_146998 = G__147010;
count__146967_146999 = G__147011;
i__146968_147000 = G__147012;
continue;
}
} else
{var class_147013 = cljs.core.first.call(null,seq__146965_147007__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_146996,class_147013)))
{} else
{elem__$1.className = (((class_name_146996 === ""))?class_147013:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_146996)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_147013)));
}
{
var G__147014 = cljs.core.next.call(null,seq__146965_147007__$1);
var G__147015 = null;
var G__147016 = (0);
var G__147017 = (0);
seq__146965_146997 = G__147014;
chunk__146966_146998 = G__147015;
count__146967_146999 = G__147016;
i__146968_147000 = G__147017;
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
var G__147018__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__146969_147019 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__146970_147020 = null;var count__146971_147021 = (0);var i__146972_147022 = (0);while(true){
if((i__146972_147022 < count__146971_147021))
{var c_147023 = cljs.core._nth.call(null,chunk__146970_147020,i__146972_147022);add_class_BANG_.call(null,elem__$1,c_147023);
{
var G__147024 = seq__146969_147019;
var G__147025 = chunk__146970_147020;
var G__147026 = count__146971_147021;
var G__147027 = (i__146972_147022 + (1));
seq__146969_147019 = G__147024;
chunk__146970_147020 = G__147025;
count__146971_147021 = G__147026;
i__146972_147022 = G__147027;
continue;
}
} else
{var temp__4126__auto___147028 = cljs.core.seq.call(null,seq__146969_147019);if(temp__4126__auto___147028)
{var seq__146969_147029__$1 = temp__4126__auto___147028;if(cljs.core.chunked_seq_QMARK_.call(null,seq__146969_147029__$1))
{var c__4299__auto___147030 = cljs.core.chunk_first.call(null,seq__146969_147029__$1);{
var G__147031 = cljs.core.chunk_rest.call(null,seq__146969_147029__$1);
var G__147032 = c__4299__auto___147030;
var G__147033 = cljs.core.count.call(null,c__4299__auto___147030);
var G__147034 = (0);
seq__146969_147019 = G__147031;
chunk__146970_147020 = G__147032;
count__146971_147021 = G__147033;
i__146972_147022 = G__147034;
continue;
}
} else
{var c_147035 = cljs.core.first.call(null,seq__146969_147029__$1);add_class_BANG_.call(null,elem__$1,c_147035);
{
var G__147036 = cljs.core.next.call(null,seq__146969_147029__$1);
var G__147037 = null;
var G__147038 = (0);
var G__147039 = (0);
seq__146969_147019 = G__147036;
chunk__146970_147020 = G__147037;
count__146971_147021 = G__147038;
i__146972_147022 = G__147039;
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
var G__147018 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__147018__delegate.call(this,elem,classes,more_classes);};
G__147018.cljs$lang$maxFixedArity = 2;
G__147018.cljs$lang$applyTo = (function (arglist__147040){
var elem = cljs.core.first(arglist__147040);
arglist__147040 = cljs.core.next(arglist__147040);
var classes = cljs.core.first(arglist__147040);
var more_classes = cljs.core.rest(arglist__147040);
return G__147018__delegate(elem,classes,more_classes);
});
G__147018.cljs$core$IFn$_invoke$arity$variadic = G__147018__delegate;
return G__147018;
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
var G__147041 = (function (){var end = (i + class$.length);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((end < class_len))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substring((0),i))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substr((end + (1))))):class_name.substring((0),(i - (1))))));
})();
class_name = G__147041;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto___147050 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___147050))
{var class_list_147051 = temp__4124__auto___147050;class_list_147051.remove(class$__$1);
} else
{var class_name_147052 = elem__$1.className;var new_class_name_147053 = dommy.attrs.remove_class_str.call(null,class_name_147052,class$__$1);if((class_name_147052 === new_class_name_147053))
{} else
{elem__$1.className = new_class_name_147053;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__147054__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__147046 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__147047 = null;var count__147048 = (0);var i__147049 = (0);while(true){
if((i__147049 < count__147048))
{var c = cljs.core._nth.call(null,chunk__147047,i__147049);remove_class_BANG_.call(null,elem__$1,c);
{
var G__147055 = seq__147046;
var G__147056 = chunk__147047;
var G__147057 = count__147048;
var G__147058 = (i__147049 + (1));
seq__147046 = G__147055;
chunk__147047 = G__147056;
count__147048 = G__147057;
i__147049 = G__147058;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__147046);if(temp__4126__auto__)
{var seq__147046__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__147046__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__147046__$1);{
var G__147059 = cljs.core.chunk_rest.call(null,seq__147046__$1);
var G__147060 = c__4299__auto__;
var G__147061 = cljs.core.count.call(null,c__4299__auto__);
var G__147062 = (0);
seq__147046 = G__147059;
chunk__147047 = G__147060;
count__147048 = G__147061;
i__147049 = G__147062;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__147046__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__147063 = cljs.core.next.call(null,seq__147046__$1);
var G__147064 = null;
var G__147065 = (0);
var G__147066 = (0);
seq__147046 = G__147063;
chunk__147047 = G__147064;
count__147048 = G__147065;
i__147049 = G__147066;
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
var G__147054 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__147054__delegate.call(this,elem,class$,classes);};
G__147054.cljs$lang$maxFixedArity = 2;
G__147054.cljs$lang$applyTo = (function (arglist__147067){
var elem = cljs.core.first(arglist__147067);
arglist__147067 = cljs.core.next(arglist__147067);
var class$ = cljs.core.first(arglist__147067);
var classes = cljs.core.rest(arglist__147067);
return G__147054__delegate(elem,class$,classes);
});
G__147054.cljs$core$IFn$_invoke$arity$variadic = G__147054__delegate;
return G__147054;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto___147068 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___147068))
{var class_list_147069 = temp__4124__auto___147068;class_list_147069.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__147072){var vec__147073 = p__147072;var k = cljs.core.nth.call(null,vec__147073,(0),null);var v = cljs.core.nth.call(null,vec__147073,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,v))+";");
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__147080_147086 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__147081_147087 = null;var count__147082_147088 = (0);var i__147083_147089 = (0);while(true){
if((i__147083_147089 < count__147082_147088))
{var vec__147084_147090 = cljs.core._nth.call(null,chunk__147081_147087,i__147083_147089);var k_147091 = cljs.core.nth.call(null,vec__147084_147090,(0),null);var v_147092 = cljs.core.nth.call(null,vec__147084_147090,(1),null);(style[cljs.core.name.call(null,k_147091)] = v_147092);
{
var G__147093 = seq__147080_147086;
var G__147094 = chunk__147081_147087;
var G__147095 = count__147082_147088;
var G__147096 = (i__147083_147089 + (1));
seq__147080_147086 = G__147093;
chunk__147081_147087 = G__147094;
count__147082_147088 = G__147095;
i__147083_147089 = G__147096;
continue;
}
} else
{var temp__4126__auto___147097 = cljs.core.seq.call(null,seq__147080_147086);if(temp__4126__auto___147097)
{var seq__147080_147098__$1 = temp__4126__auto___147097;if(cljs.core.chunked_seq_QMARK_.call(null,seq__147080_147098__$1))
{var c__4299__auto___147099 = cljs.core.chunk_first.call(null,seq__147080_147098__$1);{
var G__147100 = cljs.core.chunk_rest.call(null,seq__147080_147098__$1);
var G__147101 = c__4299__auto___147099;
var G__147102 = cljs.core.count.call(null,c__4299__auto___147099);
var G__147103 = (0);
seq__147080_147086 = G__147100;
chunk__147081_147087 = G__147101;
count__147082_147088 = G__147102;
i__147083_147089 = G__147103;
continue;
}
} else
{var vec__147085_147104 = cljs.core.first.call(null,seq__147080_147098__$1);var k_147105 = cljs.core.nth.call(null,vec__147085_147104,(0),null);var v_147106 = cljs.core.nth.call(null,vec__147085_147104,(1),null);(style[cljs.core.name.call(null,k_147105)] = v_147106);
{
var G__147107 = cljs.core.next.call(null,seq__147080_147098__$1);
var G__147108 = null;
var G__147109 = (0);
var G__147110 = (0);
seq__147080_147086 = G__147107;
chunk__147081_147087 = G__147108;
count__147082_147088 = G__147109;
i__147083_147089 = G__147110;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__147111){
var elem = cljs.core.first(arglist__147111);
var kvs = cljs.core.rest(arglist__147111);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__147118_147124 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__147119_147125 = null;var count__147120_147126 = (0);var i__147121_147127 = (0);while(true){
if((i__147121_147127 < count__147120_147126))
{var vec__147122_147128 = cljs.core._nth.call(null,chunk__147119_147125,i__147121_147127);var k_147129 = cljs.core.nth.call(null,vec__147122_147128,(0),null);var v_147130 = cljs.core.nth.call(null,vec__147122_147128,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_147129,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_147130)+"px"));
{
var G__147131 = seq__147118_147124;
var G__147132 = chunk__147119_147125;
var G__147133 = count__147120_147126;
var G__147134 = (i__147121_147127 + (1));
seq__147118_147124 = G__147131;
chunk__147119_147125 = G__147132;
count__147120_147126 = G__147133;
i__147121_147127 = G__147134;
continue;
}
} else
{var temp__4126__auto___147135 = cljs.core.seq.call(null,seq__147118_147124);if(temp__4126__auto___147135)
{var seq__147118_147136__$1 = temp__4126__auto___147135;if(cljs.core.chunked_seq_QMARK_.call(null,seq__147118_147136__$1))
{var c__4299__auto___147137 = cljs.core.chunk_first.call(null,seq__147118_147136__$1);{
var G__147138 = cljs.core.chunk_rest.call(null,seq__147118_147136__$1);
var G__147139 = c__4299__auto___147137;
var G__147140 = cljs.core.count.call(null,c__4299__auto___147137);
var G__147141 = (0);
seq__147118_147124 = G__147138;
chunk__147119_147125 = G__147139;
count__147120_147126 = G__147140;
i__147121_147127 = G__147141;
continue;
}
} else
{var vec__147123_147142 = cljs.core.first.call(null,seq__147118_147136__$1);var k_147143 = cljs.core.nth.call(null,vec__147123_147142,(0),null);var v_147144 = cljs.core.nth.call(null,vec__147123_147142,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_147143,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_147144)+"px"));
{
var G__147145 = cljs.core.next.call(null,seq__147118_147136__$1);
var G__147146 = null;
var G__147147 = (0);
var G__147148 = (0);
seq__147118_147124 = G__147145;
chunk__147119_147125 = G__147146;
count__147120_147126 = G__147147;
i__147121_147127 = G__147148;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__147149){
var elem = cljs.core.first(arglist__147149);
var kvs = cljs.core.rest(arglist__147149);
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
{var G__147158 = dommy.template.__GT_node_like.call(null,elem);(G__147158[cljs.core.name.call(null,k)] = v);
return G__147158;
} else
{var G__147159 = dommy.template.__GT_node_like.call(null,elem);G__147159.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",-496642736)))?dommy.attrs.style_str.call(null,v):v));
return G__147159;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__147166__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__147160_147167 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));var chunk__147161_147168 = null;var count__147162_147169 = (0);var i__147163_147170 = (0);while(true){
if((i__147163_147170 < count__147162_147169))
{var vec__147164_147171 = cljs.core._nth.call(null,chunk__147161_147168,i__147163_147170);var k_147172__$1 = cljs.core.nth.call(null,vec__147164_147171,(0),null);var v_147173__$1 = cljs.core.nth.call(null,vec__147164_147171,(1),null);set_attr_BANG_.call(null,elem__$1,k_147172__$1,v_147173__$1);
{
var G__147174 = seq__147160_147167;
var G__147175 = chunk__147161_147168;
var G__147176 = count__147162_147169;
var G__147177 = (i__147163_147170 + (1));
seq__147160_147167 = G__147174;
chunk__147161_147168 = G__147175;
count__147162_147169 = G__147176;
i__147163_147170 = G__147177;
continue;
}
} else
{var temp__4126__auto___147178 = cljs.core.seq.call(null,seq__147160_147167);if(temp__4126__auto___147178)
{var seq__147160_147179__$1 = temp__4126__auto___147178;if(cljs.core.chunked_seq_QMARK_.call(null,seq__147160_147179__$1))
{var c__4299__auto___147180 = cljs.core.chunk_first.call(null,seq__147160_147179__$1);{
var G__147181 = cljs.core.chunk_rest.call(null,seq__147160_147179__$1);
var G__147182 = c__4299__auto___147180;
var G__147183 = cljs.core.count.call(null,c__4299__auto___147180);
var G__147184 = (0);
seq__147160_147167 = G__147181;
chunk__147161_147168 = G__147182;
count__147162_147169 = G__147183;
i__147163_147170 = G__147184;
continue;
}
} else
{var vec__147165_147185 = cljs.core.first.call(null,seq__147160_147179__$1);var k_147186__$1 = cljs.core.nth.call(null,vec__147165_147185,(0),null);var v_147187__$1 = cljs.core.nth.call(null,vec__147165_147185,(1),null);set_attr_BANG_.call(null,elem__$1,k_147186__$1,v_147187__$1);
{
var G__147188 = cljs.core.next.call(null,seq__147160_147179__$1);
var G__147189 = null;
var G__147190 = (0);
var G__147191 = (0);
seq__147160_147167 = G__147188;
chunk__147161_147168 = G__147189;
count__147162_147169 = G__147190;
i__147163_147170 = G__147191;
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
var G__147166 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__147166__delegate.call(this,elem,k,v,kvs);};
G__147166.cljs$lang$maxFixedArity = 3;
G__147166.cljs$lang$applyTo = (function (arglist__147192){
var elem = cljs.core.first(arglist__147192);
arglist__147192 = cljs.core.next(arglist__147192);
var k = cljs.core.first(arglist__147192);
arglist__147192 = cljs.core.next(arglist__147192);
var v = cljs.core.first(arglist__147192);
var kvs = cljs.core.rest(arglist__147192);
return G__147166__delegate(elem,k,v,kvs);
});
G__147166.cljs$core$IFn$_invoke$arity$variadic = G__147166__delegate;
return G__147166;
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
var G__147201__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__147197_147202 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__147198_147203 = null;var count__147199_147204 = (0);var i__147200_147205 = (0);while(true){
if((i__147200_147205 < count__147199_147204))
{var k_147206__$1 = cljs.core._nth.call(null,chunk__147198_147203,i__147200_147205);remove_attr_BANG_.call(null,elem__$1,k_147206__$1);
{
var G__147207 = seq__147197_147202;
var G__147208 = chunk__147198_147203;
var G__147209 = count__147199_147204;
var G__147210 = (i__147200_147205 + (1));
seq__147197_147202 = G__147207;
chunk__147198_147203 = G__147208;
count__147199_147204 = G__147209;
i__147200_147205 = G__147210;
continue;
}
} else
{var temp__4126__auto___147211 = cljs.core.seq.call(null,seq__147197_147202);if(temp__4126__auto___147211)
{var seq__147197_147212__$1 = temp__4126__auto___147211;if(cljs.core.chunked_seq_QMARK_.call(null,seq__147197_147212__$1))
{var c__4299__auto___147213 = cljs.core.chunk_first.call(null,seq__147197_147212__$1);{
var G__147214 = cljs.core.chunk_rest.call(null,seq__147197_147212__$1);
var G__147215 = c__4299__auto___147213;
var G__147216 = cljs.core.count.call(null,c__4299__auto___147213);
var G__147217 = (0);
seq__147197_147202 = G__147214;
chunk__147198_147203 = G__147215;
count__147199_147204 = G__147216;
i__147200_147205 = G__147217;
continue;
}
} else
{var k_147218__$1 = cljs.core.first.call(null,seq__147197_147212__$1);remove_attr_BANG_.call(null,elem__$1,k_147218__$1);
{
var G__147219 = cljs.core.next.call(null,seq__147197_147212__$1);
var G__147220 = null;
var G__147221 = (0);
var G__147222 = (0);
seq__147197_147202 = G__147219;
chunk__147198_147203 = G__147220;
count__147199_147204 = G__147221;
i__147200_147205 = G__147222;
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
var G__147201 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__147201__delegate.call(this,elem,k,ks);};
G__147201.cljs$lang$maxFixedArity = 2;
G__147201.cljs$lang$applyTo = (function (arglist__147223){
var elem = cljs.core.first(arglist__147223);
arglist__147223 = cljs.core.next(arglist__147223);
var k = cljs.core.first(arglist__147223);
var ks = cljs.core.rest(arglist__147223);
return G__147201__delegate(elem,k,ks);
});
G__147201.cljs$core$IFn$_invoke$arity$variadic = G__147201__delegate;
return G__147201;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__147225 = dommy.template.__GT_node_like.call(null,elem);G__147225.style.display = ((show_QMARK_)?"":"none");
return G__147225;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__147227 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__147227,false);
return G__147227;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__147229 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__147229,true);
return G__147229;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__147231 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__147231["constructor"] = Object);
return G__147231;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map