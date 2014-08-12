// Compiled by ClojureScript 0.0-2277
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3551__auto__ = ((idx === (0))) || ((" " === class_name.charAt((idx - (1)))));if(and__3551__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__3551__auto__;
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
var G__7186 = (i + class$.length);
start_from = G__7186;
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
{var temp__4124__auto___7211 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___7211))
{var class_list_7212 = temp__4124__auto___7211;var seq__7199_7213 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__7200_7214 = null;var count__7201_7215 = (0);var i__7202_7216 = (0);while(true){
if((i__7202_7216 < count__7201_7215))
{var class_7217 = cljs.core._nth.call(null,chunk__7200_7214,i__7202_7216);class_list_7212.add(class_7217);
{
var G__7218 = seq__7199_7213;
var G__7219 = chunk__7200_7214;
var G__7220 = count__7201_7215;
var G__7221 = (i__7202_7216 + (1));
seq__7199_7213 = G__7218;
chunk__7200_7214 = G__7219;
count__7201_7215 = G__7220;
i__7202_7216 = G__7221;
continue;
}
} else
{var temp__4126__auto___7222 = cljs.core.seq.call(null,seq__7199_7213);if(temp__4126__auto___7222)
{var seq__7199_7223__$1 = temp__4126__auto___7222;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7199_7223__$1))
{var c__4319__auto___7224 = cljs.core.chunk_first.call(null,seq__7199_7223__$1);{
var G__7225 = cljs.core.chunk_rest.call(null,seq__7199_7223__$1);
var G__7226 = c__4319__auto___7224;
var G__7227 = cljs.core.count.call(null,c__4319__auto___7224);
var G__7228 = (0);
seq__7199_7213 = G__7225;
chunk__7200_7214 = G__7226;
count__7201_7215 = G__7227;
i__7202_7216 = G__7228;
continue;
}
} else
{var class_7229 = cljs.core.first.call(null,seq__7199_7223__$1);class_list_7212.add(class_7229);
{
var G__7230 = cljs.core.next.call(null,seq__7199_7223__$1);
var G__7231 = null;
var G__7232 = (0);
var G__7233 = (0);
seq__7199_7213 = G__7230;
chunk__7200_7214 = G__7231;
count__7201_7215 = G__7232;
i__7202_7216 = G__7233;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_7234 = elem__$1.className;var seq__7203_7235 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__7204_7236 = null;var count__7205_7237 = (0);var i__7206_7238 = (0);while(true){
if((i__7206_7238 < count__7205_7237))
{var class_7239 = cljs.core._nth.call(null,chunk__7204_7236,i__7206_7238);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_7234,class_7239)))
{} else
{elem__$1.className = (((class_name_7234 === ""))?class_7239:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_7234)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_7239)));
}
{
var G__7240 = seq__7203_7235;
var G__7241 = chunk__7204_7236;
var G__7242 = count__7205_7237;
var G__7243 = (i__7206_7238 + (1));
seq__7203_7235 = G__7240;
chunk__7204_7236 = G__7241;
count__7205_7237 = G__7242;
i__7206_7238 = G__7243;
continue;
}
} else
{var temp__4126__auto___7244 = cljs.core.seq.call(null,seq__7203_7235);if(temp__4126__auto___7244)
{var seq__7203_7245__$1 = temp__4126__auto___7244;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7203_7245__$1))
{var c__4319__auto___7246 = cljs.core.chunk_first.call(null,seq__7203_7245__$1);{
var G__7247 = cljs.core.chunk_rest.call(null,seq__7203_7245__$1);
var G__7248 = c__4319__auto___7246;
var G__7249 = cljs.core.count.call(null,c__4319__auto___7246);
var G__7250 = (0);
seq__7203_7235 = G__7247;
chunk__7204_7236 = G__7248;
count__7205_7237 = G__7249;
i__7206_7238 = G__7250;
continue;
}
} else
{var class_7251 = cljs.core.first.call(null,seq__7203_7245__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_7234,class_7251)))
{} else
{elem__$1.className = (((class_name_7234 === ""))?class_7251:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_7234)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_7251)));
}
{
var G__7252 = cljs.core.next.call(null,seq__7203_7245__$1);
var G__7253 = null;
var G__7254 = (0);
var G__7255 = (0);
seq__7203_7235 = G__7252;
chunk__7204_7236 = G__7253;
count__7205_7237 = G__7254;
i__7206_7238 = G__7255;
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
var G__7256__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7207_7257 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__7208_7258 = null;var count__7209_7259 = (0);var i__7210_7260 = (0);while(true){
if((i__7210_7260 < count__7209_7259))
{var c_7261 = cljs.core._nth.call(null,chunk__7208_7258,i__7210_7260);add_class_BANG_.call(null,elem__$1,c_7261);
{
var G__7262 = seq__7207_7257;
var G__7263 = chunk__7208_7258;
var G__7264 = count__7209_7259;
var G__7265 = (i__7210_7260 + (1));
seq__7207_7257 = G__7262;
chunk__7208_7258 = G__7263;
count__7209_7259 = G__7264;
i__7210_7260 = G__7265;
continue;
}
} else
{var temp__4126__auto___7266 = cljs.core.seq.call(null,seq__7207_7257);if(temp__4126__auto___7266)
{var seq__7207_7267__$1 = temp__4126__auto___7266;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7207_7267__$1))
{var c__4319__auto___7268 = cljs.core.chunk_first.call(null,seq__7207_7267__$1);{
var G__7269 = cljs.core.chunk_rest.call(null,seq__7207_7267__$1);
var G__7270 = c__4319__auto___7268;
var G__7271 = cljs.core.count.call(null,c__4319__auto___7268);
var G__7272 = (0);
seq__7207_7257 = G__7269;
chunk__7208_7258 = G__7270;
count__7209_7259 = G__7271;
i__7210_7260 = G__7272;
continue;
}
} else
{var c_7273 = cljs.core.first.call(null,seq__7207_7267__$1);add_class_BANG_.call(null,elem__$1,c_7273);
{
var G__7274 = cljs.core.next.call(null,seq__7207_7267__$1);
var G__7275 = null;
var G__7276 = (0);
var G__7277 = (0);
seq__7207_7257 = G__7274;
chunk__7208_7258 = G__7275;
count__7209_7259 = G__7276;
i__7210_7260 = G__7277;
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
var G__7256 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7256__delegate.call(this,elem,classes,more_classes);};
G__7256.cljs$lang$maxFixedArity = 2;
G__7256.cljs$lang$applyTo = (function (arglist__7278){
var elem = cljs.core.first(arglist__7278);
arglist__7278 = cljs.core.next(arglist__7278);
var classes = cljs.core.first(arglist__7278);
var more_classes = cljs.core.rest(arglist__7278);
return G__7256__delegate(elem,classes,more_classes);
});
G__7256.cljs$core$IFn$_invoke$arity$variadic = G__7256__delegate;
return G__7256;
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
var G__7279 = (function (){var end = (i + class$.length);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((end < class_len))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substring((0),i))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substr((end + (1))))):class_name.substring((0),(i - (1))))));
})();
class_name = G__7279;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto___7288 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___7288))
{var class_list_7289 = temp__4124__auto___7288;class_list_7289.remove(class$__$1);
} else
{var class_name_7290 = elem__$1.className;var new_class_name_7291 = dommy.attrs.remove_class_str.call(null,class_name_7290,class$__$1);if((class_name_7290 === new_class_name_7291))
{} else
{elem__$1.className = new_class_name_7291;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__7292__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7284 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__7285 = null;var count__7286 = (0);var i__7287 = (0);while(true){
if((i__7287 < count__7286))
{var c = cljs.core._nth.call(null,chunk__7285,i__7287);remove_class_BANG_.call(null,elem__$1,c);
{
var G__7293 = seq__7284;
var G__7294 = chunk__7285;
var G__7295 = count__7286;
var G__7296 = (i__7287 + (1));
seq__7284 = G__7293;
chunk__7285 = G__7294;
count__7286 = G__7295;
i__7287 = G__7296;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__7284);if(temp__4126__auto__)
{var seq__7284__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7284__$1))
{var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__7284__$1);{
var G__7297 = cljs.core.chunk_rest.call(null,seq__7284__$1);
var G__7298 = c__4319__auto__;
var G__7299 = cljs.core.count.call(null,c__4319__auto__);
var G__7300 = (0);
seq__7284 = G__7297;
chunk__7285 = G__7298;
count__7286 = G__7299;
i__7287 = G__7300;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__7284__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__7301 = cljs.core.next.call(null,seq__7284__$1);
var G__7302 = null;
var G__7303 = (0);
var G__7304 = (0);
seq__7284 = G__7301;
chunk__7285 = G__7302;
count__7286 = G__7303;
i__7287 = G__7304;
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
var G__7292 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7292__delegate.call(this,elem,class$,classes);};
G__7292.cljs$lang$maxFixedArity = 2;
G__7292.cljs$lang$applyTo = (function (arglist__7305){
var elem = cljs.core.first(arglist__7305);
arglist__7305 = cljs.core.next(arglist__7305);
var class$ = cljs.core.first(arglist__7305);
var classes = cljs.core.rest(arglist__7305);
return G__7292__delegate(elem,class$,classes);
});
G__7292.cljs$core$IFn$_invoke$arity$variadic = G__7292__delegate;
return G__7292;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto___7306 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___7306))
{var class_list_7307 = temp__4124__auto___7306;class_list_7307.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__7310){var vec__7311 = p__7310;var k = cljs.core.nth.call(null,vec__7311,(0),null);var v = cljs.core.nth.call(null,vec__7311,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,v))+";");
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__7318_7324 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__7319_7325 = null;var count__7320_7326 = (0);var i__7321_7327 = (0);while(true){
if((i__7321_7327 < count__7320_7326))
{var vec__7322_7328 = cljs.core._nth.call(null,chunk__7319_7325,i__7321_7327);var k_7329 = cljs.core.nth.call(null,vec__7322_7328,(0),null);var v_7330 = cljs.core.nth.call(null,vec__7322_7328,(1),null);(style[cljs.core.name.call(null,k_7329)] = v_7330);
{
var G__7331 = seq__7318_7324;
var G__7332 = chunk__7319_7325;
var G__7333 = count__7320_7326;
var G__7334 = (i__7321_7327 + (1));
seq__7318_7324 = G__7331;
chunk__7319_7325 = G__7332;
count__7320_7326 = G__7333;
i__7321_7327 = G__7334;
continue;
}
} else
{var temp__4126__auto___7335 = cljs.core.seq.call(null,seq__7318_7324);if(temp__4126__auto___7335)
{var seq__7318_7336__$1 = temp__4126__auto___7335;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7318_7336__$1))
{var c__4319__auto___7337 = cljs.core.chunk_first.call(null,seq__7318_7336__$1);{
var G__7338 = cljs.core.chunk_rest.call(null,seq__7318_7336__$1);
var G__7339 = c__4319__auto___7337;
var G__7340 = cljs.core.count.call(null,c__4319__auto___7337);
var G__7341 = (0);
seq__7318_7324 = G__7338;
chunk__7319_7325 = G__7339;
count__7320_7326 = G__7340;
i__7321_7327 = G__7341;
continue;
}
} else
{var vec__7323_7342 = cljs.core.first.call(null,seq__7318_7336__$1);var k_7343 = cljs.core.nth.call(null,vec__7323_7342,(0),null);var v_7344 = cljs.core.nth.call(null,vec__7323_7342,(1),null);(style[cljs.core.name.call(null,k_7343)] = v_7344);
{
var G__7345 = cljs.core.next.call(null,seq__7318_7336__$1);
var G__7346 = null;
var G__7347 = (0);
var G__7348 = (0);
seq__7318_7324 = G__7345;
chunk__7319_7325 = G__7346;
count__7320_7326 = G__7347;
i__7321_7327 = G__7348;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__7349){
var elem = cljs.core.first(arglist__7349);
var kvs = cljs.core.rest(arglist__7349);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7356_7362 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__7357_7363 = null;var count__7358_7364 = (0);var i__7359_7365 = (0);while(true){
if((i__7359_7365 < count__7358_7364))
{var vec__7360_7366 = cljs.core._nth.call(null,chunk__7357_7363,i__7359_7365);var k_7367 = cljs.core.nth.call(null,vec__7360_7366,(0),null);var v_7368 = cljs.core.nth.call(null,vec__7360_7366,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_7367,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_7368)+"px"));
{
var G__7369 = seq__7356_7362;
var G__7370 = chunk__7357_7363;
var G__7371 = count__7358_7364;
var G__7372 = (i__7359_7365 + (1));
seq__7356_7362 = G__7369;
chunk__7357_7363 = G__7370;
count__7358_7364 = G__7371;
i__7359_7365 = G__7372;
continue;
}
} else
{var temp__4126__auto___7373 = cljs.core.seq.call(null,seq__7356_7362);if(temp__4126__auto___7373)
{var seq__7356_7374__$1 = temp__4126__auto___7373;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7356_7374__$1))
{var c__4319__auto___7375 = cljs.core.chunk_first.call(null,seq__7356_7374__$1);{
var G__7376 = cljs.core.chunk_rest.call(null,seq__7356_7374__$1);
var G__7377 = c__4319__auto___7375;
var G__7378 = cljs.core.count.call(null,c__4319__auto___7375);
var G__7379 = (0);
seq__7356_7362 = G__7376;
chunk__7357_7363 = G__7377;
count__7358_7364 = G__7378;
i__7359_7365 = G__7379;
continue;
}
} else
{var vec__7361_7380 = cljs.core.first.call(null,seq__7356_7374__$1);var k_7381 = cljs.core.nth.call(null,vec__7361_7380,(0),null);var v_7382 = cljs.core.nth.call(null,vec__7361_7380,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_7381,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_7382)+"px"));
{
var G__7383 = cljs.core.next.call(null,seq__7356_7374__$1);
var G__7384 = null;
var G__7385 = (0);
var G__7386 = (0);
seq__7356_7362 = G__7383;
chunk__7357_7363 = G__7384;
count__7358_7364 = G__7385;
i__7359_7365 = G__7386;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__7387){
var elem = cljs.core.first(arglist__7387);
var kvs = cljs.core.rest(arglist__7387);
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
{var G__7396 = dommy.template.__GT_node_like.call(null,elem);(G__7396[cljs.core.name.call(null,k)] = v);
return G__7396;
} else
{var G__7397 = dommy.template.__GT_node_like.call(null,elem);G__7397.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",-496642736)))?dommy.attrs.style_str.call(null,v):v));
return G__7397;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__7404__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7398_7405 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));var chunk__7399_7406 = null;var count__7400_7407 = (0);var i__7401_7408 = (0);while(true){
if((i__7401_7408 < count__7400_7407))
{var vec__7402_7409 = cljs.core._nth.call(null,chunk__7399_7406,i__7401_7408);var k_7410__$1 = cljs.core.nth.call(null,vec__7402_7409,(0),null);var v_7411__$1 = cljs.core.nth.call(null,vec__7402_7409,(1),null);set_attr_BANG_.call(null,elem__$1,k_7410__$1,v_7411__$1);
{
var G__7412 = seq__7398_7405;
var G__7413 = chunk__7399_7406;
var G__7414 = count__7400_7407;
var G__7415 = (i__7401_7408 + (1));
seq__7398_7405 = G__7412;
chunk__7399_7406 = G__7413;
count__7400_7407 = G__7414;
i__7401_7408 = G__7415;
continue;
}
} else
{var temp__4126__auto___7416 = cljs.core.seq.call(null,seq__7398_7405);if(temp__4126__auto___7416)
{var seq__7398_7417__$1 = temp__4126__auto___7416;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7398_7417__$1))
{var c__4319__auto___7418 = cljs.core.chunk_first.call(null,seq__7398_7417__$1);{
var G__7419 = cljs.core.chunk_rest.call(null,seq__7398_7417__$1);
var G__7420 = c__4319__auto___7418;
var G__7421 = cljs.core.count.call(null,c__4319__auto___7418);
var G__7422 = (0);
seq__7398_7405 = G__7419;
chunk__7399_7406 = G__7420;
count__7400_7407 = G__7421;
i__7401_7408 = G__7422;
continue;
}
} else
{var vec__7403_7423 = cljs.core.first.call(null,seq__7398_7417__$1);var k_7424__$1 = cljs.core.nth.call(null,vec__7403_7423,(0),null);var v_7425__$1 = cljs.core.nth.call(null,vec__7403_7423,(1),null);set_attr_BANG_.call(null,elem__$1,k_7424__$1,v_7425__$1);
{
var G__7426 = cljs.core.next.call(null,seq__7398_7417__$1);
var G__7427 = null;
var G__7428 = (0);
var G__7429 = (0);
seq__7398_7405 = G__7426;
chunk__7399_7406 = G__7427;
count__7400_7407 = G__7428;
i__7401_7408 = G__7429;
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
var G__7404 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__7404__delegate.call(this,elem,k,v,kvs);};
G__7404.cljs$lang$maxFixedArity = 3;
G__7404.cljs$lang$applyTo = (function (arglist__7430){
var elem = cljs.core.first(arglist__7430);
arglist__7430 = cljs.core.next(arglist__7430);
var k = cljs.core.first(arglist__7430);
arglist__7430 = cljs.core.next(arglist__7430);
var v = cljs.core.first(arglist__7430);
var kvs = cljs.core.rest(arglist__7430);
return G__7404__delegate(elem,k,v,kvs);
});
G__7404.cljs$core$IFn$_invoke$arity$variadic = G__7404__delegate;
return G__7404;
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
var G__7439__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__7435_7440 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__7436_7441 = null;var count__7437_7442 = (0);var i__7438_7443 = (0);while(true){
if((i__7438_7443 < count__7437_7442))
{var k_7444__$1 = cljs.core._nth.call(null,chunk__7436_7441,i__7438_7443);remove_attr_BANG_.call(null,elem__$1,k_7444__$1);
{
var G__7445 = seq__7435_7440;
var G__7446 = chunk__7436_7441;
var G__7447 = count__7437_7442;
var G__7448 = (i__7438_7443 + (1));
seq__7435_7440 = G__7445;
chunk__7436_7441 = G__7446;
count__7437_7442 = G__7447;
i__7438_7443 = G__7448;
continue;
}
} else
{var temp__4126__auto___7449 = cljs.core.seq.call(null,seq__7435_7440);if(temp__4126__auto___7449)
{var seq__7435_7450__$1 = temp__4126__auto___7449;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7435_7450__$1))
{var c__4319__auto___7451 = cljs.core.chunk_first.call(null,seq__7435_7450__$1);{
var G__7452 = cljs.core.chunk_rest.call(null,seq__7435_7450__$1);
var G__7453 = c__4319__auto___7451;
var G__7454 = cljs.core.count.call(null,c__4319__auto___7451);
var G__7455 = (0);
seq__7435_7440 = G__7452;
chunk__7436_7441 = G__7453;
count__7437_7442 = G__7454;
i__7438_7443 = G__7455;
continue;
}
} else
{var k_7456__$1 = cljs.core.first.call(null,seq__7435_7450__$1);remove_attr_BANG_.call(null,elem__$1,k_7456__$1);
{
var G__7457 = cljs.core.next.call(null,seq__7435_7450__$1);
var G__7458 = null;
var G__7459 = (0);
var G__7460 = (0);
seq__7435_7440 = G__7457;
chunk__7436_7441 = G__7458;
count__7437_7442 = G__7459;
i__7438_7443 = G__7460;
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
var G__7439 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7439__delegate.call(this,elem,k,ks);};
G__7439.cljs$lang$maxFixedArity = 2;
G__7439.cljs$lang$applyTo = (function (arglist__7461){
var elem = cljs.core.first(arglist__7461);
arglist__7461 = cljs.core.next(arglist__7461);
var k = cljs.core.first(arglist__7461);
var ks = cljs.core.rest(arglist__7461);
return G__7439__delegate(elem,k,ks);
});
G__7439.cljs$core$IFn$_invoke$arity$variadic = G__7439__delegate;
return G__7439;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__7463 = dommy.template.__GT_node_like.call(null,elem);G__7463.style.display = ((show_QMARK_)?"":"none");
return G__7463;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__7465 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__7465,false);
return G__7465;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__7467 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__7467,true);
return G__7467;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__7469 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__7469["constructor"] = Object);
return G__7469;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map