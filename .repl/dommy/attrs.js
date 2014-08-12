// Compiled by ClojureScript 0.0-2277
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__7271__auto__ = ((idx === (0))) || ((" " === class_name.charAt((idx - (1)))));if(and__7271__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__7271__auto__;
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
var G__9983 = (i + class$.length);
start_from = G__9983;
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
{var temp__4124__auto___10008 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___10008))
{var class_list_10009 = temp__4124__auto___10008;var seq__9996_10010 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__9997_10011 = null;var count__9998_10012 = (0);var i__9999_10013 = (0);while(true){
if((i__9999_10013 < count__9998_10012))
{var class_10014 = cljs.core._nth.call(null,chunk__9997_10011,i__9999_10013);class_list_10009.add(class_10014);
{
var G__10015 = seq__9996_10010;
var G__10016 = chunk__9997_10011;
var G__10017 = count__9998_10012;
var G__10018 = (i__9999_10013 + (1));
seq__9996_10010 = G__10015;
chunk__9997_10011 = G__10016;
count__9998_10012 = G__10017;
i__9999_10013 = G__10018;
continue;
}
} else
{var temp__4126__auto___10019 = cljs.core.seq.call(null,seq__9996_10010);if(temp__4126__auto___10019)
{var seq__9996_10020__$1 = temp__4126__auto___10019;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9996_10020__$1))
{var c__8039__auto___10021 = cljs.core.chunk_first.call(null,seq__9996_10020__$1);{
var G__10022 = cljs.core.chunk_rest.call(null,seq__9996_10020__$1);
var G__10023 = c__8039__auto___10021;
var G__10024 = cljs.core.count.call(null,c__8039__auto___10021);
var G__10025 = (0);
seq__9996_10010 = G__10022;
chunk__9997_10011 = G__10023;
count__9998_10012 = G__10024;
i__9999_10013 = G__10025;
continue;
}
} else
{var class_10026 = cljs.core.first.call(null,seq__9996_10020__$1);class_list_10009.add(class_10026);
{
var G__10027 = cljs.core.next.call(null,seq__9996_10020__$1);
var G__10028 = null;
var G__10029 = (0);
var G__10030 = (0);
seq__9996_10010 = G__10027;
chunk__9997_10011 = G__10028;
count__9998_10012 = G__10029;
i__9999_10013 = G__10030;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_10031 = elem__$1.className;var seq__10000_10032 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__10001_10033 = null;var count__10002_10034 = (0);var i__10003_10035 = (0);while(true){
if((i__10003_10035 < count__10002_10034))
{var class_10036 = cljs.core._nth.call(null,chunk__10001_10033,i__10003_10035);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_10031,class_10036)))
{} else
{elem__$1.className = (((class_name_10031 === ""))?class_10036:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_10031)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_10036)));
}
{
var G__10037 = seq__10000_10032;
var G__10038 = chunk__10001_10033;
var G__10039 = count__10002_10034;
var G__10040 = (i__10003_10035 + (1));
seq__10000_10032 = G__10037;
chunk__10001_10033 = G__10038;
count__10002_10034 = G__10039;
i__10003_10035 = G__10040;
continue;
}
} else
{var temp__4126__auto___10041 = cljs.core.seq.call(null,seq__10000_10032);if(temp__4126__auto___10041)
{var seq__10000_10042__$1 = temp__4126__auto___10041;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10000_10042__$1))
{var c__8039__auto___10043 = cljs.core.chunk_first.call(null,seq__10000_10042__$1);{
var G__10044 = cljs.core.chunk_rest.call(null,seq__10000_10042__$1);
var G__10045 = c__8039__auto___10043;
var G__10046 = cljs.core.count.call(null,c__8039__auto___10043);
var G__10047 = (0);
seq__10000_10032 = G__10044;
chunk__10001_10033 = G__10045;
count__10002_10034 = G__10046;
i__10003_10035 = G__10047;
continue;
}
} else
{var class_10048 = cljs.core.first.call(null,seq__10000_10042__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_10031,class_10048)))
{} else
{elem__$1.className = (((class_name_10031 === ""))?class_10048:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_10031)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_10048)));
}
{
var G__10049 = cljs.core.next.call(null,seq__10000_10042__$1);
var G__10050 = null;
var G__10051 = (0);
var G__10052 = (0);
seq__10000_10032 = G__10049;
chunk__10001_10033 = G__10050;
count__10002_10034 = G__10051;
i__10003_10035 = G__10052;
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
var G__10053__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__10004_10054 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__10005_10055 = null;var count__10006_10056 = (0);var i__10007_10057 = (0);while(true){
if((i__10007_10057 < count__10006_10056))
{var c_10058 = cljs.core._nth.call(null,chunk__10005_10055,i__10007_10057);add_class_BANG_.call(null,elem__$1,c_10058);
{
var G__10059 = seq__10004_10054;
var G__10060 = chunk__10005_10055;
var G__10061 = count__10006_10056;
var G__10062 = (i__10007_10057 + (1));
seq__10004_10054 = G__10059;
chunk__10005_10055 = G__10060;
count__10006_10056 = G__10061;
i__10007_10057 = G__10062;
continue;
}
} else
{var temp__4126__auto___10063 = cljs.core.seq.call(null,seq__10004_10054);if(temp__4126__auto___10063)
{var seq__10004_10064__$1 = temp__4126__auto___10063;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10004_10064__$1))
{var c__8039__auto___10065 = cljs.core.chunk_first.call(null,seq__10004_10064__$1);{
var G__10066 = cljs.core.chunk_rest.call(null,seq__10004_10064__$1);
var G__10067 = c__8039__auto___10065;
var G__10068 = cljs.core.count.call(null,c__8039__auto___10065);
var G__10069 = (0);
seq__10004_10054 = G__10066;
chunk__10005_10055 = G__10067;
count__10006_10056 = G__10068;
i__10007_10057 = G__10069;
continue;
}
} else
{var c_10070 = cljs.core.first.call(null,seq__10004_10064__$1);add_class_BANG_.call(null,elem__$1,c_10070);
{
var G__10071 = cljs.core.next.call(null,seq__10004_10064__$1);
var G__10072 = null;
var G__10073 = (0);
var G__10074 = (0);
seq__10004_10054 = G__10071;
chunk__10005_10055 = G__10072;
count__10006_10056 = G__10073;
i__10007_10057 = G__10074;
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
var G__10053 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__10053__delegate.call(this,elem,classes,more_classes);};
G__10053.cljs$lang$maxFixedArity = 2;
G__10053.cljs$lang$applyTo = (function (arglist__10075){
var elem = cljs.core.first(arglist__10075);
arglist__10075 = cljs.core.next(arglist__10075);
var classes = cljs.core.first(arglist__10075);
var more_classes = cljs.core.rest(arglist__10075);
return G__10053__delegate(elem,classes,more_classes);
});
G__10053.cljs$core$IFn$_invoke$arity$variadic = G__10053__delegate;
return G__10053;
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
var G__10076 = (function (){var end = (i + class$.length);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((end < class_len))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substring((0),i))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substr((end + (1))))):class_name.substring((0),(i - (1))))));
})();
class_name = G__10076;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto___10085 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___10085))
{var class_list_10086 = temp__4124__auto___10085;class_list_10086.remove(class$__$1);
} else
{var class_name_10087 = elem__$1.className;var new_class_name_10088 = dommy.attrs.remove_class_str.call(null,class_name_10087,class$__$1);if((class_name_10087 === new_class_name_10088))
{} else
{elem__$1.className = new_class_name_10088;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__10089__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__10081 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__10082 = null;var count__10083 = (0);var i__10084 = (0);while(true){
if((i__10084 < count__10083))
{var c = cljs.core._nth.call(null,chunk__10082,i__10084);remove_class_BANG_.call(null,elem__$1,c);
{
var G__10090 = seq__10081;
var G__10091 = chunk__10082;
var G__10092 = count__10083;
var G__10093 = (i__10084 + (1));
seq__10081 = G__10090;
chunk__10082 = G__10091;
count__10083 = G__10092;
i__10084 = G__10093;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10081);if(temp__4126__auto__)
{var seq__10081__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10081__$1))
{var c__8039__auto__ = cljs.core.chunk_first.call(null,seq__10081__$1);{
var G__10094 = cljs.core.chunk_rest.call(null,seq__10081__$1);
var G__10095 = c__8039__auto__;
var G__10096 = cljs.core.count.call(null,c__8039__auto__);
var G__10097 = (0);
seq__10081 = G__10094;
chunk__10082 = G__10095;
count__10083 = G__10096;
i__10084 = G__10097;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__10081__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__10098 = cljs.core.next.call(null,seq__10081__$1);
var G__10099 = null;
var G__10100 = (0);
var G__10101 = (0);
seq__10081 = G__10098;
chunk__10082 = G__10099;
count__10083 = G__10100;
i__10084 = G__10101;
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
var G__10089 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__10089__delegate.call(this,elem,class$,classes);};
G__10089.cljs$lang$maxFixedArity = 2;
G__10089.cljs$lang$applyTo = (function (arglist__10102){
var elem = cljs.core.first(arglist__10102);
arglist__10102 = cljs.core.next(arglist__10102);
var class$ = cljs.core.first(arglist__10102);
var classes = cljs.core.rest(arglist__10102);
return G__10089__delegate(elem,class$,classes);
});
G__10089.cljs$core$IFn$_invoke$arity$variadic = G__10089__delegate;
return G__10089;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto___10103 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___10103))
{var class_list_10104 = temp__4124__auto___10103;class_list_10104.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__10107){var vec__10108 = p__10107;var k = cljs.core.nth.call(null,vec__10108,(0),null);var v = cljs.core.nth.call(null,vec__10108,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,v))+";");
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__10115_10121 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__10116_10122 = null;var count__10117_10123 = (0);var i__10118_10124 = (0);while(true){
if((i__10118_10124 < count__10117_10123))
{var vec__10119_10125 = cljs.core._nth.call(null,chunk__10116_10122,i__10118_10124);var k_10126 = cljs.core.nth.call(null,vec__10119_10125,(0),null);var v_10127 = cljs.core.nth.call(null,vec__10119_10125,(1),null);(style[cljs.core.name.call(null,k_10126)] = v_10127);
{
var G__10128 = seq__10115_10121;
var G__10129 = chunk__10116_10122;
var G__10130 = count__10117_10123;
var G__10131 = (i__10118_10124 + (1));
seq__10115_10121 = G__10128;
chunk__10116_10122 = G__10129;
count__10117_10123 = G__10130;
i__10118_10124 = G__10131;
continue;
}
} else
{var temp__4126__auto___10132 = cljs.core.seq.call(null,seq__10115_10121);if(temp__4126__auto___10132)
{var seq__10115_10133__$1 = temp__4126__auto___10132;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10115_10133__$1))
{var c__8039__auto___10134 = cljs.core.chunk_first.call(null,seq__10115_10133__$1);{
var G__10135 = cljs.core.chunk_rest.call(null,seq__10115_10133__$1);
var G__10136 = c__8039__auto___10134;
var G__10137 = cljs.core.count.call(null,c__8039__auto___10134);
var G__10138 = (0);
seq__10115_10121 = G__10135;
chunk__10116_10122 = G__10136;
count__10117_10123 = G__10137;
i__10118_10124 = G__10138;
continue;
}
} else
{var vec__10120_10139 = cljs.core.first.call(null,seq__10115_10133__$1);var k_10140 = cljs.core.nth.call(null,vec__10120_10139,(0),null);var v_10141 = cljs.core.nth.call(null,vec__10120_10139,(1),null);(style[cljs.core.name.call(null,k_10140)] = v_10141);
{
var G__10142 = cljs.core.next.call(null,seq__10115_10133__$1);
var G__10143 = null;
var G__10144 = (0);
var G__10145 = (0);
seq__10115_10121 = G__10142;
chunk__10116_10122 = G__10143;
count__10117_10123 = G__10144;
i__10118_10124 = G__10145;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__10146){
var elem = cljs.core.first(arglist__10146);
var kvs = cljs.core.rest(arglist__10146);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__10153_10159 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__10154_10160 = null;var count__10155_10161 = (0);var i__10156_10162 = (0);while(true){
if((i__10156_10162 < count__10155_10161))
{var vec__10157_10163 = cljs.core._nth.call(null,chunk__10154_10160,i__10156_10162);var k_10164 = cljs.core.nth.call(null,vec__10157_10163,(0),null);var v_10165 = cljs.core.nth.call(null,vec__10157_10163,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_10164,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_10165)+"px"));
{
var G__10166 = seq__10153_10159;
var G__10167 = chunk__10154_10160;
var G__10168 = count__10155_10161;
var G__10169 = (i__10156_10162 + (1));
seq__10153_10159 = G__10166;
chunk__10154_10160 = G__10167;
count__10155_10161 = G__10168;
i__10156_10162 = G__10169;
continue;
}
} else
{var temp__4126__auto___10170 = cljs.core.seq.call(null,seq__10153_10159);if(temp__4126__auto___10170)
{var seq__10153_10171__$1 = temp__4126__auto___10170;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10153_10171__$1))
{var c__8039__auto___10172 = cljs.core.chunk_first.call(null,seq__10153_10171__$1);{
var G__10173 = cljs.core.chunk_rest.call(null,seq__10153_10171__$1);
var G__10174 = c__8039__auto___10172;
var G__10175 = cljs.core.count.call(null,c__8039__auto___10172);
var G__10176 = (0);
seq__10153_10159 = G__10173;
chunk__10154_10160 = G__10174;
count__10155_10161 = G__10175;
i__10156_10162 = G__10176;
continue;
}
} else
{var vec__10158_10177 = cljs.core.first.call(null,seq__10153_10171__$1);var k_10178 = cljs.core.nth.call(null,vec__10158_10177,(0),null);var v_10179 = cljs.core.nth.call(null,vec__10158_10177,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_10178,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_10179)+"px"));
{
var G__10180 = cljs.core.next.call(null,seq__10153_10171__$1);
var G__10181 = null;
var G__10182 = (0);
var G__10183 = (0);
seq__10153_10159 = G__10180;
chunk__10154_10160 = G__10181;
count__10155_10161 = G__10182;
i__10156_10162 = G__10183;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__10184){
var elem = cljs.core.first(arglist__10184);
var kvs = cljs.core.rest(arglist__10184);
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
{var G__10193 = dommy.template.__GT_node_like.call(null,elem);(G__10193[cljs.core.name.call(null,k)] = v);
return G__10193;
} else
{var G__10194 = dommy.template.__GT_node_like.call(null,elem);G__10194.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",-496642736)))?dommy.attrs.style_str.call(null,v):v));
return G__10194;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__10201__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__10195_10202 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));var chunk__10196_10203 = null;var count__10197_10204 = (0);var i__10198_10205 = (0);while(true){
if((i__10198_10205 < count__10197_10204))
{var vec__10199_10206 = cljs.core._nth.call(null,chunk__10196_10203,i__10198_10205);var k_10207__$1 = cljs.core.nth.call(null,vec__10199_10206,(0),null);var v_10208__$1 = cljs.core.nth.call(null,vec__10199_10206,(1),null);set_attr_BANG_.call(null,elem__$1,k_10207__$1,v_10208__$1);
{
var G__10209 = seq__10195_10202;
var G__10210 = chunk__10196_10203;
var G__10211 = count__10197_10204;
var G__10212 = (i__10198_10205 + (1));
seq__10195_10202 = G__10209;
chunk__10196_10203 = G__10210;
count__10197_10204 = G__10211;
i__10198_10205 = G__10212;
continue;
}
} else
{var temp__4126__auto___10213 = cljs.core.seq.call(null,seq__10195_10202);if(temp__4126__auto___10213)
{var seq__10195_10214__$1 = temp__4126__auto___10213;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10195_10214__$1))
{var c__8039__auto___10215 = cljs.core.chunk_first.call(null,seq__10195_10214__$1);{
var G__10216 = cljs.core.chunk_rest.call(null,seq__10195_10214__$1);
var G__10217 = c__8039__auto___10215;
var G__10218 = cljs.core.count.call(null,c__8039__auto___10215);
var G__10219 = (0);
seq__10195_10202 = G__10216;
chunk__10196_10203 = G__10217;
count__10197_10204 = G__10218;
i__10198_10205 = G__10219;
continue;
}
} else
{var vec__10200_10220 = cljs.core.first.call(null,seq__10195_10214__$1);var k_10221__$1 = cljs.core.nth.call(null,vec__10200_10220,(0),null);var v_10222__$1 = cljs.core.nth.call(null,vec__10200_10220,(1),null);set_attr_BANG_.call(null,elem__$1,k_10221__$1,v_10222__$1);
{
var G__10223 = cljs.core.next.call(null,seq__10195_10214__$1);
var G__10224 = null;
var G__10225 = (0);
var G__10226 = (0);
seq__10195_10202 = G__10223;
chunk__10196_10203 = G__10224;
count__10197_10204 = G__10225;
i__10198_10205 = G__10226;
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
var G__10201 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__10201__delegate.call(this,elem,k,v,kvs);};
G__10201.cljs$lang$maxFixedArity = 3;
G__10201.cljs$lang$applyTo = (function (arglist__10227){
var elem = cljs.core.first(arglist__10227);
arglist__10227 = cljs.core.next(arglist__10227);
var k = cljs.core.first(arglist__10227);
arglist__10227 = cljs.core.next(arglist__10227);
var v = cljs.core.first(arglist__10227);
var kvs = cljs.core.rest(arglist__10227);
return G__10201__delegate(elem,k,v,kvs);
});
G__10201.cljs$core$IFn$_invoke$arity$variadic = G__10201__delegate;
return G__10201;
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
var G__10236__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__10232_10237 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__10233_10238 = null;var count__10234_10239 = (0);var i__10235_10240 = (0);while(true){
if((i__10235_10240 < count__10234_10239))
{var k_10241__$1 = cljs.core._nth.call(null,chunk__10233_10238,i__10235_10240);remove_attr_BANG_.call(null,elem__$1,k_10241__$1);
{
var G__10242 = seq__10232_10237;
var G__10243 = chunk__10233_10238;
var G__10244 = count__10234_10239;
var G__10245 = (i__10235_10240 + (1));
seq__10232_10237 = G__10242;
chunk__10233_10238 = G__10243;
count__10234_10239 = G__10244;
i__10235_10240 = G__10245;
continue;
}
} else
{var temp__4126__auto___10246 = cljs.core.seq.call(null,seq__10232_10237);if(temp__4126__auto___10246)
{var seq__10232_10247__$1 = temp__4126__auto___10246;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10232_10247__$1))
{var c__8039__auto___10248 = cljs.core.chunk_first.call(null,seq__10232_10247__$1);{
var G__10249 = cljs.core.chunk_rest.call(null,seq__10232_10247__$1);
var G__10250 = c__8039__auto___10248;
var G__10251 = cljs.core.count.call(null,c__8039__auto___10248);
var G__10252 = (0);
seq__10232_10237 = G__10249;
chunk__10233_10238 = G__10250;
count__10234_10239 = G__10251;
i__10235_10240 = G__10252;
continue;
}
} else
{var k_10253__$1 = cljs.core.first.call(null,seq__10232_10247__$1);remove_attr_BANG_.call(null,elem__$1,k_10253__$1);
{
var G__10254 = cljs.core.next.call(null,seq__10232_10247__$1);
var G__10255 = null;
var G__10256 = (0);
var G__10257 = (0);
seq__10232_10237 = G__10254;
chunk__10233_10238 = G__10255;
count__10234_10239 = G__10256;
i__10235_10240 = G__10257;
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
var G__10236 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__10236__delegate.call(this,elem,k,ks);};
G__10236.cljs$lang$maxFixedArity = 2;
G__10236.cljs$lang$applyTo = (function (arglist__10258){
var elem = cljs.core.first(arglist__10258);
arglist__10258 = cljs.core.next(arglist__10258);
var k = cljs.core.first(arglist__10258);
var ks = cljs.core.rest(arglist__10258);
return G__10236__delegate(elem,k,ks);
});
G__10236.cljs$core$IFn$_invoke$arity$variadic = G__10236__delegate;
return G__10236;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__10260 = dommy.template.__GT_node_like.call(null,elem);G__10260.style.display = ((show_QMARK_)?"":"none");
return G__10260;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__10262 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__10262,false);
return G__10262;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__10264 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__10264,true);
return G__10264;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__10266 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__10266["constructor"] = Object);
return G__10266;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
