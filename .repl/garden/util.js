// Compiled by ClojureScript 0.0-2277
goog.provide('garden.util');
goog.require('cljs.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('garden.types');
goog.require('garden.types');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
garden.util.format = (function() { 
var format__delegate = function (fmt,args){return cljs.core.apply.call(null,goog.string.format,fmt,args);
};
var format = function (fmt,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return format__delegate.call(this,fmt,args);};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__14324){
var fmt = cljs.core.first(arglist__14324);
var args = cljs.core.rest(arglist__14324);
return format__delegate(fmt,args);
});
format.cljs$core$IFn$_invoke$arity$variadic = format__delegate;
return format;
})()
;
garden.util.ToString = (function (){var obj14326 = {};return obj14326;
})();
garden.util.to_str = (function to_str(this$){if((function (){var and__7272__auto__ = this$;if(and__7272__auto__)
{return this$.garden$util$ToString$to_str$arity$1;
} else
{return and__7272__auto__;
}
})())
{return this$.garden$util$ToString$to_str$arity$1(this$);
} else
{var x__7911__auto__ = (((this$ == null))?null:this$);return (function (){var or__7284__auto__ = (garden.util.to_str[goog.typeOf(x__7911__auto__)]);if(or__7284__auto__)
{return or__7284__auto__;
} else
{var or__7284__auto____$1 = (garden.util.to_str["_"]);if(or__7284__auto____$1)
{return or__7284__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ToString.to-str",this$);
}
}
})().call(null,this$);
}
});
(garden.util.ToString["null"] = true);
(garden.util.to_str["null"] = (function (this$){return "";
}));
(garden.util.ToString["_"] = true);
(garden.util.to_str["_"] = (function (this$){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$));
}));
cljs.core.Keyword.prototype.garden$util$ToString$ = true;
cljs.core.Keyword.prototype.garden$util$ToString$to_str$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.name.call(null,this$__$1);
});
/**
* Convert a variable number of values into strings.
* @param {...*} var_args
*/
garden.util.as_str = (function() { 
var as_str__delegate = function (args){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,garden.util.to_str,args));
};
var as_str = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return as_str__delegate.call(this,args);};
as_str.cljs$lang$maxFixedArity = 0;
as_str.cljs$lang$applyTo = (function (arglist__14327){
var args = cljs.core.seq(arglist__14327);
return as_str__delegate(args);
});
as_str.cljs$core$IFn$_invoke$arity$variadic = as_str__delegate;
return as_str;
})()
;
/**
* Convert a string to an integer with optional base.
* @param {...*} var_args
*/
garden.util.string__GT_int = (function() { 
var string__GT_int__delegate = function (s,p__14328){var vec__14330 = p__14328;var radix = cljs.core.nth.call(null,vec__14330,(0),null);var radix__$1 = (function (){var or__7284__auto__ = radix;if(cljs.core.truth_(or__7284__auto__))
{return or__7284__auto__;
} else
{return (10);
}
})();return parseInt(s,radix__$1);
};
var string__GT_int = function (s,var_args){
var p__14328 = null;if (arguments.length > 1) {
  p__14328 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return string__GT_int__delegate.call(this,s,p__14328);};
string__GT_int.cljs$lang$maxFixedArity = 1;
string__GT_int.cljs$lang$applyTo = (function (arglist__14331){
var s = cljs.core.first(arglist__14331);
var p__14328 = cljs.core.rest(arglist__14331);
return string__GT_int__delegate(s,p__14328);
});
string__GT_int.cljs$core$IFn$_invoke$arity$variadic = string__GT_int__delegate;
return string__GT_int;
})()
;
/**
* Convert an integer to a string with optional base.
* @param {...*} var_args
*/
garden.util.int__GT_string = (function() { 
var int__GT_string__delegate = function (i,p__14332){var vec__14334 = p__14332;var radix = cljs.core.nth.call(null,vec__14334,(0),null);var radix__$1 = (function (){var or__7284__auto__ = radix;if(cljs.core.truth_(or__7284__auto__))
{return or__7284__auto__;
} else
{return (10);
}
})();return i.toString(radix__$1);
};
var int__GT_string = function (i,var_args){
var p__14332 = null;if (arguments.length > 1) {
  p__14332 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return int__GT_string__delegate.call(this,i,p__14332);};
int__GT_string.cljs$lang$maxFixedArity = 1;
int__GT_string.cljs$lang$applyTo = (function (arglist__14335){
var i = cljs.core.first(arglist__14335);
var p__14332 = cljs.core.rest(arglist__14335);
return int__GT_string__delegate(i,p__14332);
});
int__GT_string.cljs$core$IFn$_invoke$arity$variadic = int__GT_string__delegate;
return int__GT_string;
})()
;
/**
* Return a space separated list of values.
*/
garden.util.space_join = (function space_join(xs){return clojure.string.join.call(null," ",cljs.core.map.call(null,garden.util.to_str,xs));
});
/**
* Return a comma separated list of values. Subsequences are joined with
* spaces.
*/
garden.util.comma_join = (function comma_join(xs){var ys = (function (){var iter__8009__auto__ = (function iter__14340(s__14341){return (new cljs.core.LazySeq(null,(function (){var s__14341__$1 = s__14341;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14341__$1);if(temp__4126__auto__)
{var s__14341__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14341__$2))
{var c__8007__auto__ = cljs.core.chunk_first.call(null,s__14341__$2);var size__8008__auto__ = cljs.core.count.call(null,c__8007__auto__);var b__14343 = cljs.core.chunk_buffer.call(null,size__8008__auto__);if((function (){var i__14342 = (0);while(true){
if((i__14342 < size__8008__auto__))
{var x = cljs.core._nth.call(null,c__8007__auto__,i__14342);cljs.core.chunk_append.call(null,b__14343,((cljs.core.sequential_QMARK_.call(null,x))?garden.util.space_join.call(null,x):garden.util.to_str.call(null,x)));
{
var G__14344 = (i__14342 + (1));
i__14342 = G__14344;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14343),iter__14340.call(null,cljs.core.chunk_rest.call(null,s__14341__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14343),null);
}
} else
{var x = cljs.core.first.call(null,s__14341__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?garden.util.space_join.call(null,x):garden.util.to_str.call(null,x)),iter__14340.call(null,cljs.core.rest.call(null,s__14341__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8009__auto__.call(null,xs);
})();return clojure.string.join.call(null,", ",ys);
});
/**
* Wrap a string with double quotes.
*/
garden.util.wrap_quotes = (function wrap_quotes(s){return ("\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+"\"");
});
/**
* True if x is an instance of or satisfies clojure.lang.IRecord.
*/
garden.util.record_QMARK_ = (function record_QMARK_(x){var G__14346 = x;if(G__14346)
{var bit__7934__auto__ = (G__14346.cljs$lang$protocol_mask$partition0$ & (67108864));if((bit__7934__auto__) || (G__14346.cljs$core$IRecord$))
{return true;
} else
{if((!G__14346.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__14346);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__14346);
}
});
/**
* True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
*/
garden.util.hash_map_QMARK_ = (function hash_map_QMARK_(x){return (cljs.core.map_QMARK_.call(null,x)) && (!(garden.util.record_QMARK_.call(null,x)));
});
/**
* Alias to `vector?`.
*/
garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
* Alias to `hash-map?`.
*/
garden.util.declaration_QMARK_ = garden.util.hash_map_QMARK_;
garden.util.at_rule_QMARK_ = (function at_rule_QMARK_(x){return (x instanceof garden.types.CSSAtRule);
});
/**
* True if `x` is a CSS `@media` rule.
*/
garden.util.at_media_QMARK_ = (function at_media_QMARK_(x){return (garden.util.at_rule_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403)));
});
/**
* True if `x` is a CSS `@keyframes` rule.
*/
garden.util.at_keyframes_QMARK_ = (function at_keyframes_QMARK_(x){return (garden.util.at_rule_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012)));
});
/**
* True if `x` is a CSS `@import` rule.
*/
garden.util.at_import_QMARK_ = (function at_import_QMARK_(x){return (garden.util.at_rule_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709)));
});
/**
* Attach a CSS style prefix to s.
*/
garden.util.prefix = (function prefix(p,s){var p__$1 = garden.util.to_str.call(null,p);if(cljs.core._EQ_.call(null,"-",cljs.core.last.call(null,p__$1)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
}
});
/**
* Attach a CSS vendor prefix to s.
*/
garden.util.vendor_prefix = (function vendor_prefix(p,s){var p__$1 = garden.util.to_str.call(null,p);if(cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,p__$1)))
{return garden.util.prefix.call(null,p__$1,s);
} else
{return garden.util.prefix.call(null,("-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)),s);
}
});
/**
* True if n is a natural number.
*/
garden.util.natural_QMARK_ = (function natural_QMARK_(n){return (cljs.core.integer_QMARK_.call(null,n)) && ((n > (0)));
});
/**
* True if n is a number between a and b.
*/
garden.util.between_QMARK_ = (function between_QMARK_(n,a,b){var bottom = (function (){var x__7598__auto__ = a;var y__7599__auto__ = b;return ((x__7598__auto__ < y__7599__auto__) ? x__7598__auto__ : y__7599__auto__);
})();var top = (function (){var x__7591__auto__ = a;var y__7592__auto__ = b;return ((x__7591__auto__ > y__7592__auto__) ? x__7591__auto__ : y__7592__auto__);
})();return ((n >= bottom)) && ((n <= top));
});
/**
* Return a number such that n is no less than a and no more than b.
*/
garden.util.clip = (function clip(a,b,n){var vec__14348 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));var a__$1 = cljs.core.nth.call(null,vec__14348,(0),null);var b__$1 = cljs.core.nth.call(null,vec__14348,(1),null);var x__7591__auto__ = a__$1;var y__7592__auto__ = (function (){var x__7598__auto__ = b__$1;var y__7599__auto__ = n;return ((x__7598__auto__ < y__7599__auto__) ? x__7598__auto__ : y__7599__auto__);
})();return ((x__7591__auto__ > y__7592__auto__) ? x__7591__auto__ : y__7592__auto__);
});
/**
* Return the average of two or more numbers.
* @param {...*} var_args
*/
garden.util.average = (function() { 
var average__delegate = function (n,m,more){return (cljs.core.apply.call(null,cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count.call(null,more)));
};
var average = function (n,m,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return average__delegate.call(this,n,m,more);};
average.cljs$lang$maxFixedArity = 2;
average.cljs$lang$applyTo = (function (arglist__14349){
var n = cljs.core.first(arglist__14349);
arglist__14349 = cljs.core.next(arglist__14349);
var m = cljs.core.first(arglist__14349);
var more = cljs.core.rest(arglist__14349);
return average__delegate(n,m,more);
});
average.cljs$core$IFn$_invoke$arity$variadic = average__delegate;
return average;
})()
;
/**
* All the ways to take one item from each sequence.
* @param {...*} var_args
*/
garden.util.cartesian_product = (function() { 
var cartesian_product__delegate = function (seqs){var v_original_seqs = cljs.core.vec.call(null,seqs);var step = ((function (v_original_seqs){
return (function step(v_seqs){var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){var i = (cljs.core.count.call(null,v_seqs__$1) - (1));var v_seqs__$2 = v_seqs__$1;while(true){
if(cljs.core._EQ_.call(null,i,(-1)))
{return null;
} else
{var temp__4124__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));if(temp__4124__auto__)
{var rst = temp__4124__auto__;return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else
{{
var G__14350 = (i - (1));
var G__14351 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__14350;
v_seqs__$2 = G__14351;
continue;
}
}
}
break;
}
});})(v_original_seqs))
;if(cljs.core.truth_(v_seqs))
{return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){return step.call(null,increment.call(null,v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else
{return null;
}
});})(v_original_seqs))
;if(cljs.core.every_QMARK_.call(null,cljs.core.seq,seqs))
{return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){return step.call(null,v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else
{return null;
}
};
var cartesian_product = function (var_args){
var seqs = null;if (arguments.length > 0) {
  seqs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cartesian_product__delegate.call(this,seqs);};
cartesian_product.cljs$lang$maxFixedArity = 0;
cartesian_product.cljs$lang$applyTo = (function (arglist__14352){
var seqs = cljs.core.seq(arglist__14352);
return cartesian_product__delegate(seqs);
});
cartesian_product.cljs$core$IFn$_invoke$arity$variadic = cartesian_product__delegate;
return cartesian_product;
})()
;
