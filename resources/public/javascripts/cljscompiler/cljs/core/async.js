// Compiled by ClojureScript 0.0-2277
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12586 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12586 = (function (f,fn_handler,meta12587){
this.f = f;
this.fn_handler = fn_handler;
this.meta12587 = meta12587;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12586.cljs$lang$type = true;
cljs.core.async.t12586.cljs$lang$ctorStr = "cljs.core.async/t12586";
cljs.core.async.t12586.cljs$lang$ctorPrWriter = (function (this__4130__auto__,writer__4131__auto__,opt__4132__auto__){return cljs.core._write.call(null,writer__4131__auto__,"cljs.core.async/t12586");
});
cljs.core.async.t12586.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12586.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12586.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12588){var self__ = this;
var _12588__$1 = this;return self__.meta12587;
});
cljs.core.async.t12586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12588,meta12587__$1){var self__ = this;
var _12588__$1 = this;return (new cljs.core.async.t12586(self__.f,self__.fn_handler,meta12587__$1));
});
cljs.core.async.__GT_t12586 = (function __GT_t12586(f__$1,fn_handler__$1,meta12587){return (new cljs.core.async.t12586(f__$1,fn_handler__$1,meta12587));
});
}
return (new cljs.core.async.t12586(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12590 = buff;if(G__12590)
{var bit__4213__auto__ = null;if(cljs.core.truth_((function (){var or__3563__auto__ = bit__4213__auto__;if(cljs.core.truth_(or__3563__auto__))
{return or__3563__auto__;
} else
{return G__12590.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12590.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12590);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12590);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_12591 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12591);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_12591,ret){
return (function (){return fn1.call(null,val_12591);
});})(val_12591,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4419__auto___12592 = n;var x_12593 = (0);while(true){
if((x_12593 < n__4419__auto___12592))
{(a[x_12593] = (0));
{
var G__12594 = (x_12593 + (1));
x_12593 = G__12594;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__12595 = (i + (1));
i = G__12595;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12599 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12599 = (function (flag,alt_flag,meta12600){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12600 = meta12600;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12599.cljs$lang$type = true;
cljs.core.async.t12599.cljs$lang$ctorStr = "cljs.core.async/t12599";
cljs.core.async.t12599.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4130__auto__,writer__4131__auto__,opt__4132__auto__){return cljs.core._write.call(null,writer__4131__auto__,"cljs.core.async/t12599");
});})(flag))
;
cljs.core.async.t12599.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12599.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t12599.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t12599.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12601){var self__ = this;
var _12601__$1 = this;return self__.meta12600;
});})(flag))
;
cljs.core.async.t12599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12601,meta12600__$1){var self__ = this;
var _12601__$1 = this;return (new cljs.core.async.t12599(self__.flag,self__.alt_flag,meta12600__$1));
});})(flag))
;
cljs.core.async.__GT_t12599 = ((function (flag){
return (function __GT_t12599(flag__$1,alt_flag__$1,meta12600){return (new cljs.core.async.t12599(flag__$1,alt_flag__$1,meta12600));
});})(flag))
;
}
return (new cljs.core.async.t12599(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12605 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12605 = (function (cb,flag,alt_handler,meta12606){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12606 = meta12606;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12605.cljs$lang$type = true;
cljs.core.async.t12605.cljs$lang$ctorStr = "cljs.core.async/t12605";
cljs.core.async.t12605.cljs$lang$ctorPrWriter = (function (this__4130__auto__,writer__4131__auto__,opt__4132__auto__){return cljs.core._write.call(null,writer__4131__auto__,"cljs.core.async/t12605");
});
cljs.core.async.t12605.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12605.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12605.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12607){var self__ = this;
var _12607__$1 = this;return self__.meta12606;
});
cljs.core.async.t12605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12607,meta12606__$1){var self__ = this;
var _12607__$1 = this;return (new cljs.core.async.t12605(self__.cb,self__.flag,self__.alt_handler,meta12606__$1));
});
cljs.core.async.__GT_t12605 = (function __GT_t12605(cb__$1,flag__$1,alt_handler__$1,meta12606){return (new cljs.core.async.t12605(cb__$1,flag__$1,alt_handler__$1,meta12606));
});
}
return (new cljs.core.async.t12605(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12608_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12608_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12609_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12609_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3563__auto__ = wport;if(cljs.core.truth_(or__3563__auto__))
{return or__3563__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__12610 = (i + (1));
i = G__12610;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3563__auto__ = ret;if(cljs.core.truth_(or__3563__auto__))
{return or__3563__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3551__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3551__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3551__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__12611){var map__12613 = p__12611;var map__12613__$1 = ((cljs.core.seq_QMARK_.call(null,map__12613))?cljs.core.apply.call(null,cljs.core.hash_map,map__12613):map__12613);var opts = map__12613__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__12611 = null;if (arguments.length > 1) {
  p__12611 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12611);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12614){
var ports = cljs.core.first(arglist__12614);
var p__12611 = cljs.core.rest(arglist__12614);
return alts_BANG___delegate(ports,p__12611);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12622 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12622 = (function (ch,f,map_LT_,meta12623){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12623 = meta12623;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12622.cljs$lang$type = true;
cljs.core.async.t12622.cljs$lang$ctorStr = "cljs.core.async/t12622";
cljs.core.async.t12622.cljs$lang$ctorPrWriter = (function (this__4130__auto__,writer__4131__auto__,opt__4132__auto__){return cljs.core._write.call(null,writer__4131__auto__,"cljs.core.async/t12622");
});
cljs.core.async.t12622.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12622.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t12622.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12622.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12625 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12625 = (function (fn1,_,meta12623,ch,f,map_LT_,meta12626){
this.fn1 = fn1;
this._ = _;
this.meta12623 = meta12623;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12626 = meta12626;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12625.cljs$lang$type = true;
cljs.core.async.t12625.cljs$lang$ctorStr = "cljs.core.async/t12625";
cljs.core.async.t12625.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4130__auto__,writer__4131__auto__,opt__4132__auto__){return cljs.core._write.call(null,writer__4131__auto__,"cljs.core.async/t12625");
});})(___$1))
;
cljs.core.async.t12625.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12625.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t12625.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t12625.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__12615_SHARP_){return f1.call(null,(((p1__12615_SHARP_ == null))?null:self__.f.call(null,p1__12615_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t12625.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12627){var self__ = this;
var _12627__$1 = this;return self__.meta12626;
});})(___$1))
;
cljs.core.async.t12625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12627,meta12626__$1){var self__ = this;
var _12627__$1 = this;return (new cljs.core.async.t12625(self__.fn1,self__._,self__.meta12623,self__.ch,self__.f,self__.map_LT_,meta12626__$1));
});})(___$1))
;
cljs.core.async.__GT_t12625 = ((function (___$1){
return (function __GT_t12625(fn1__$1,___$2,meta12623__$1,ch__$2,f__$2,map_LT___$2,meta12626){return (new cljs.core.async.t12625(fn1__$1,___$2,meta12623__$1,ch__$2,f__$2,map_LT___$2,meta12626));
});})(___$1))
;
}
return (new cljs.core.async.t12625(fn1,___$1,self__.meta12623,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3551__auto__ = ret;if(cljs.core.truth_(and__3551__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3551__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t12622.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12622.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12622.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t12622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12624){var self__ = this;
var _12624__$1 = this;return self__.meta12623;
});
cljs.core.async.t12622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12624,meta12623__$1){var self__ = this;
var _12624__$1 = this;return (new cljs.core.async.t12622(self__.ch,self__.f,self__.map_LT_,meta12623__$1));
});
cljs.core.async.__GT_t12622 = (function __GT_t12622(ch__$1,f__$1,map_LT___$1,meta12623){return (new cljs.core.async.t12622(ch__$1,f__$1,map_LT___$1,meta12623));
});
}
return (new cljs.core.async.t12622(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12631 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12631 = (function (ch,f,map_GT_,meta12632){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12632 = meta12632;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12631.cljs$lang$type = true;
cljs.core.async.t12631.cljs$lang$ctorStr = "cljs.core.async/t12631";
cljs.core.async.t12631.cljs$lang$ctorPrWriter = (function (this__4130__auto__,writer__4131__auto__,opt__4132__auto__){return cljs.core._write.call(null,writer__4131__auto__,"cljs.core.async/t12631");
});
cljs.core.async.t12631.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12631.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t12631.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12631.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12631.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12631.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12633){var self__ = this;
var _12633__$1 = this;return self__.meta12632;
});
cljs.core.async.t12631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12633,meta12632__$1){var self__ = this;
var _12633__$1 = this;return (new cljs.core.async.t12631(self__.ch,self__.f,self__.map_GT_,meta12632__$1));
});
cljs.core.async.__GT_t12631 = (function __GT_t12631(ch__$1,f__$1,map_GT___$1,meta12632){return (new cljs.core.async.t12631(ch__$1,f__$1,map_GT___$1,meta12632));
});
}
return (new cljs.core.async.t12631(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12637 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12637 = (function (ch,p,filter_GT_,meta12638){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12638 = meta12638;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12637.cljs$lang$type = true;
cljs.core.async.t12637.cljs$lang$ctorStr = "cljs.core.async/t12637";
cljs.core.async.t12637.cljs$lang$ctorPrWriter = (function (this__4130__auto__,writer__4131__auto__,opt__4132__auto__){return cljs.core._write.call(null,writer__4131__auto__,"cljs.core.async/t12637");
});
cljs.core.async.t12637.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12637.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t12637.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12637.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12637.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12637.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12637.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t12637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12639){var self__ = this;
var _12639__$1 = this;return self__.meta12638;
});
cljs.core.async.t12637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12639,meta12638__$1){var self__ = this;
var _12639__$1 = this;return (new cljs.core.async.t12637(self__.ch,self__.p,self__.filter_GT_,meta12638__$1));
});
cljs.core.async.__GT_t12637 = (function __GT_t12637(ch__$1,p__$1,filter_GT___$1,meta12638){return (new cljs.core.async.t12637(ch__$1,p__$1,filter_GT___$1,meta12638));
});
}
return (new cljs.core.async.t12637(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9784__auto___12722 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9784__auto___12722,out){
return (function (){var f__9785__auto__ = (function (){var switch__9769__auto__ = ((function (c__9784__auto___12722,out){
return (function (state_12701){var state_val_12702 = (state_12701[(1)]);if((state_val_12702 === (7)))
{var inst_12697 = (state_12701[(2)]);var state_12701__$1 = state_12701;var statearr_12703_12723 = state_12701__$1;(statearr_12703_12723[(2)] = inst_12697);
(statearr_12703_12723[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12702 === (1)))
{var state_12701__$1 = state_12701;var statearr_12704_12724 = state_12701__$1;(statearr_12704_12724[(2)] = null);
(statearr_12704_12724[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12702 === (4)))
{var inst_12683 = (state_12701[(7)]);var inst_12683__$1 = (state_12701[(2)]);var inst_12684 = (inst_12683__$1 == null);var state_12701__$1 = (function (){var statearr_12705 = state_12701;(statearr_12705[(7)] = inst_12683__$1);
return statearr_12705;
})();if(cljs.core.truth_(inst_12684))
{var statearr_12706_12725 = state_12701__$1;(statearr_12706_12725[(1)] = (5));
} else
{var statearr_12707_12726 = state_12701__$1;(statearr_12707_12726[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12702 === (6)))
{var inst_12683 = (state_12701[(7)]);var inst_12688 = p.call(null,inst_12683);var state_12701__$1 = state_12701;if(cljs.core.truth_(inst_12688))
{var statearr_12708_12727 = state_12701__$1;(statearr_12708_12727[(1)] = (8));
} else
{var statearr_12709_12728 = state_12701__$1;(statearr_12709_12728[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12702 === (3)))
{var inst_12699 = (state_12701[(2)]);var state_12701__$1 = state_12701;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12701__$1,inst_12699);
} else
{if((state_val_12702 === (2)))
{var state_12701__$1 = state_12701;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12701__$1,(4),ch);
} else
{if((state_val_12702 === (11)))
{var inst_12691 = (state_12701[(2)]);var state_12701__$1 = state_12701;var statearr_12710_12729 = state_12701__$1;(statearr_12710_12729[(2)] = inst_12691);
(statearr_12710_12729[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12702 === (9)))
{var state_12701__$1 = state_12701;var statearr_12711_12730 = state_12701__$1;(statearr_12711_12730[(2)] = null);
(statearr_12711_12730[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12702 === (5)))
{var inst_12686 = cljs.core.async.close_BANG_.call(null,out);var state_12701__$1 = state_12701;var statearr_12712_12731 = state_12701__$1;(statearr_12712_12731[(2)] = inst_12686);
(statearr_12712_12731[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12702 === (10)))
{var inst_12694 = (state_12701[(2)]);var state_12701__$1 = (function (){var statearr_12713 = state_12701;(statearr_12713[(8)] = inst_12694);
return statearr_12713;
})();var statearr_12714_12732 = state_12701__$1;(statearr_12714_12732[(2)] = null);
(statearr_12714_12732[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12702 === (8)))
{var inst_12683 = (state_12701[(7)]);var state_12701__$1 = state_12701;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12701__$1,(11),out,inst_12683);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__9784__auto___12722,out))
;return ((function (switch__9769__auto__,c__9784__auto___12722,out){
return (function() {
var state_machine__9770__auto__ = null;
var state_machine__9770__auto____0 = (function (){var statearr_12718 = [null,null,null,null,null,null,null,null,null];(statearr_12718[(0)] = state_machine__9770__auto__);
(statearr_12718[(1)] = (1));
return statearr_12718;
});
var state_machine__9770__auto____1 = (function (state_12701){while(true){
var ret_value__9771__auto__ = (function (){try{while(true){
var result__9772__auto__ = switch__9769__auto__.call(null,state_12701);if(cljs.core.keyword_identical_QMARK_.call(null,result__9772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9772__auto__;
}
break;
}
}catch (e12719){if((e12719 instanceof Object))
{var ex__9773__auto__ = e12719;var statearr_12720_12733 = state_12701;(statearr_12720_12733[(5)] = ex__9773__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12701);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12719;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12734 = state_12701;
state_12701 = G__12734;
continue;
}
} else
{return ret_value__9771__auto__;
}
break;
}
});
state_machine__9770__auto__ = function(state_12701){
switch(arguments.length){
case 0:
return state_machine__9770__auto____0.call(this);
case 1:
return state_machine__9770__auto____1.call(this,state_12701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9770__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9770__auto____0;
state_machine__9770__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9770__auto____1;
return state_machine__9770__auto__;
})()
;})(switch__9769__auto__,c__9784__auto___12722,out))
})();var state__9786__auto__ = (function (){var statearr_12721 = f__9785__auto__.call(null);(statearr_12721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9784__auto___12722);
return statearr_12721;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9786__auto__);
});})(c__9784__auto___12722,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__9784__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9784__auto__){
return (function (){var f__9785__auto__ = (function (){var switch__9769__auto__ = ((function (c__9784__auto__){
return (function (state_12900){var state_val_12901 = (state_12900[(1)]);if((state_val_12901 === (7)))
{var inst_12896 = (state_12900[(2)]);var state_12900__$1 = state_12900;var statearr_12902_12943 = state_12900__$1;(statearr_12902_12943[(2)] = inst_12896);
(statearr_12902_12943[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12901 === (20)))
{var inst_12866 = (state_12900[(7)]);var inst_12877 = (state_12900[(2)]);var inst_12878 = cljs.core.next.call(null,inst_12866);var inst_12852 = inst_12878;var inst_12853 = null;var inst_12854 = (0);var inst_12855 = (0);var state_12900__$1 = (function (){var statearr_12903 = state_12900;(statearr_12903[(8)] = inst_12877);
(statearr_12903[(9)] = inst_12855);
(statearr_12903[(10)] = inst_12854);
(statearr_12903[(11)] = inst_12852);
(statearr_12903[(12)] = inst_12853);
return statearr_12903;
})();var statearr_12904_12944 = state_12900__$1;(statearr_12904_12944[(2)] = null);
(statearr_12904_12944[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12901 === (1)))
{var state_12900__$1 = state_12900;var statearr_12905_12945 = state_12900__$1;(statearr_12905_12945[(2)] = null);
(statearr_12905_12945[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12901 === (4)))
{var inst_12841 = (state_12900[(13)]);var inst_12841__$1 = (state_12900[(2)]);var inst_12842 = (inst_12841__$1 == null);var state_12900__$1 = (function (){var statearr_12906 = state_12900;(statearr_12906[(13)] = inst_12841__$1);
return statearr_12906;
})();if(cljs.core.truth_(inst_12842))
{var statearr_12907_12946 = state_12900__$1;(statearr_12907_12946[(1)] = (5));
} else
{var statearr_12908_12947 = state_12900__$1;(statearr_12908_12947[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12901 === (15)))
{var state_12900__$1 = state_12900;var statearr_12912_12948 = state_12900__$1;(statearr_12912_12948[(2)] = null);
(statearr_12912_12948[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12901 === (21)))
{var state_12900__$1 = state_12900;var statearr_12913_12949 = state_12900__$1;(statearr_12913_12949[(2)] = null);
(statearr_12913_12949[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12901 === (13)))
{var inst_12855 = (state_12900[(9)]);var inst_12854 = (state_12900[(10)]);var inst_12852 = (state_12900[(11)]);var inst_12853 = (state_12900[(12)]);var inst_12862 = (state_12900[(2)]);var inst_12863 = (inst_12855 + (1));var tmp12909 = inst_12854;var tmp12910 = inst_12852;var tmp12911 = inst_12853;var inst_12852__$1 = tmp12910;var inst_12853__$1 = tmp12911;var inst_12854__$1 = tmp12909;var inst_12855__$1 = inst_12863;var state_12900__$1 = (function (){var statearr_12914 = state_12900;(statearr_12914[(14)] = inst_12862);
(statearr_12914[(9)] = inst_12855__$1);
(statearr_12914[(10)] = inst_12854__$1);
(statearr_12914[(11)] = inst_12852__$1);
(statearr_12914[(12)] = inst_12853__$1);
return statearr_12914;
})();var statearr_12915_12950 = state_12900__$1;(statearr_12915_12950[(2)] = null);
(statearr_12915_12950[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12901 === (22)))
{var state_12900__$1 = state_12900;var statearr_12916_12951 = state_12900__$1;(statearr_12916_12951[(2)] = null);
(statearr_12916_12951[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12901 === (6)))
{var inst_12841 = (state_12900[(13)]);var inst_12850 = f.call(null,inst_12841);var inst_12851 = cljs.core.seq.call(null,inst_12850);var inst_12852 = inst_12851;var inst_12853 = null;var inst_12854 = (0);var inst_12855 = (0);var state_12900__$1 = (function (){var statearr_12917 = state_12900;(statearr_12917[(9)] = inst_12855);
(statearr_12917[(10)] = inst_12854);
(statearr_12917[(11)] = inst_12852);
(statearr_12917[(12)] = inst_12853);
return statearr_12917;
})();var statearr_12918_12952 = state_12900__$1;(statearr_12918_12952[(2)] = null);
(statearr_12918_12952[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12901 === (17)))
{var inst_12866 = (state_12900[(7)]);var inst_12870 = cljs.core.chunk_first.call(null,inst_12866);var inst_12871 = cljs.core.chunk_rest.call(null,inst_12866);var inst_12872 = cljs.core.count.call(null,inst_12870);var inst_12852 = inst_12871;var inst_12853 = inst_12870;var inst_12854 = inst_12872;var inst_12855 = (0);var state_12900__$1 = (function (){var statearr_12919 = state_12900;(statearr_12919[(9)] = inst_12855);
(statearr_12919[(10)] = inst_12854);
(statearr_12919[(11)] = inst_12852);
(statearr_12919[(12)] = inst_12853);
return statearr_12919;
})();var statearr_12920_12953 = state_12900__$1;(statearr_12920_12953[(2)] = null);
(statearr_12920_12953[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12901 === (3)))
{var inst_12898 = (state_12900[(2)]);var state_12900__$1 = state_12900;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12900__$1,inst_12898);
} else
{if((state_val_12901 === (12)))
{var inst_12886 = (state_12900[(2)]);var state_12900__$1 = state_12900;var statearr_12921_12954 = state_12900__$1;(statearr_12921_12954[(2)] = inst_12886);
(statearr_12921_12954[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12901 === (2)))
{var state_12900__$1 = state_12900;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12900__$1,(4),in$);
} else
{if((state_val_12901 === (23)))
{var inst_12894 = (state_12900[(2)]);var state_12900__$1 = state_12900;var statearr_12922_12955 = state_12900__$1;(statearr_12922_12955[(2)] = inst_12894);
(statearr_12922_12955[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12901 === (19)))
{var inst_12881 = (state_12900[(2)]);var state_12900__$1 = state_12900;var statearr_12923_12956 = state_12900__$1;(statearr_12923_12956[(2)] = inst_12881);
(statearr_12923_12956[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12901 === (11)))
{var inst_12852 = (state_12900[(11)]);var inst_12866 = (state_12900[(7)]);var inst_12866__$1 = cljs.core.seq.call(null,inst_12852);var state_12900__$1 = (function (){var statearr_12924 = state_12900;(statearr_12924[(7)] = inst_12866__$1);
return statearr_12924;
})();if(inst_12866__$1)
{var statearr_12925_12957 = state_12900__$1;(statearr_12925_12957[(1)] = (14));
} else
{var statearr_12926_12958 = state_12900__$1;(statearr_12926_12958[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12901 === (9)))
{var inst_12888 = (state_12900[(2)]);var inst_12889 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_12900__$1 = (function (){var statearr_12927 = state_12900;(statearr_12927[(15)] = inst_12888);
return statearr_12927;
})();if(cljs.core.truth_(inst_12889))
{var statearr_12928_12959 = state_12900__$1;(statearr_12928_12959[(1)] = (21));
} else
{var statearr_12929_12960 = state_12900__$1;(statearr_12929_12960[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12901 === (5)))
{var inst_12844 = cljs.core.async.close_BANG_.call(null,out);var state_12900__$1 = state_12900;var statearr_12930_12961 = state_12900__$1;(statearr_12930_12961[(2)] = inst_12844);
(statearr_12930_12961[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12901 === (14)))
{var inst_12866 = (state_12900[(7)]);var inst_12868 = cljs.core.chunked_seq_QMARK_.call(null,inst_12866);var state_12900__$1 = state_12900;if(inst_12868)
{var statearr_12931_12962 = state_12900__$1;(statearr_12931_12962[(1)] = (17));
} else
{var statearr_12932_12963 = state_12900__$1;(statearr_12932_12963[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12901 === (16)))
{var inst_12884 = (state_12900[(2)]);var state_12900__$1 = state_12900;var statearr_12933_12964 = state_12900__$1;(statearr_12933_12964[(2)] = inst_12884);
(statearr_12933_12964[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12901 === (10)))
{var inst_12855 = (state_12900[(9)]);var inst_12853 = (state_12900[(12)]);var inst_12860 = cljs.core._nth.call(null,inst_12853,inst_12855);var state_12900__$1 = state_12900;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12900__$1,(13),out,inst_12860);
} else
{if((state_val_12901 === (18)))
{var inst_12866 = (state_12900[(7)]);var inst_12875 = cljs.core.first.call(null,inst_12866);var state_12900__$1 = state_12900;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12900__$1,(20),out,inst_12875);
} else
{if((state_val_12901 === (8)))
{var inst_12855 = (state_12900[(9)]);var inst_12854 = (state_12900[(10)]);var inst_12857 = (inst_12855 < inst_12854);var inst_12858 = inst_12857;var state_12900__$1 = state_12900;if(cljs.core.truth_(inst_12858))
{var statearr_12934_12965 = state_12900__$1;(statearr_12934_12965[(1)] = (10));
} else
{var statearr_12935_12966 = state_12900__$1;(statearr_12935_12966[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9784__auto__))
;return ((function (switch__9769__auto__,c__9784__auto__){
return (function() {
var state_machine__9770__auto__ = null;
var state_machine__9770__auto____0 = (function (){var statearr_12939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12939[(0)] = state_machine__9770__auto__);
(statearr_12939[(1)] = (1));
return statearr_12939;
});
var state_machine__9770__auto____1 = (function (state_12900){while(true){
var ret_value__9771__auto__ = (function (){try{while(true){
var result__9772__auto__ = switch__9769__auto__.call(null,state_12900);if(cljs.core.keyword_identical_QMARK_.call(null,result__9772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9772__auto__;
}
break;
}
}catch (e12940){if((e12940 instanceof Object))
{var ex__9773__auto__ = e12940;var statearr_12941_12967 = state_12900;(statearr_12941_12967[(5)] = ex__9773__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12900);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12940;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12968 = state_12900;
state_12900 = G__12968;
continue;
}
} else
{return ret_value__9771__auto__;
}
break;
}
});
state_machine__9770__auto__ = function(state_12900){
switch(arguments.length){
case 0:
return state_machine__9770__auto____0.call(this);
case 1:
return state_machine__9770__auto____1.call(this,state_12900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9770__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9770__auto____0;
state_machine__9770__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9770__auto____1;
return state_machine__9770__auto__;
})()
;})(switch__9769__auto__,c__9784__auto__))
})();var state__9786__auto__ = (function (){var statearr_12942 = f__9785__auto__.call(null);(statearr_12942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9784__auto__);
return statearr_12942;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9786__auto__);
});})(c__9784__auto__))
);
return c__9784__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__9784__auto___13063 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9784__auto___13063){
return (function (){var f__9785__auto__ = (function (){var switch__9769__auto__ = ((function (c__9784__auto___13063){
return (function (state_13039){var state_val_13040 = (state_13039[(1)]);if((state_val_13040 === (7)))
{var inst_13035 = (state_13039[(2)]);var state_13039__$1 = state_13039;var statearr_13041_13064 = state_13039__$1;(statearr_13041_13064[(2)] = inst_13035);
(statearr_13041_13064[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13040 === (1)))
{var state_13039__$1 = state_13039;var statearr_13042_13065 = state_13039__$1;(statearr_13042_13065[(2)] = null);
(statearr_13042_13065[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13040 === (4)))
{var inst_13018 = (state_13039[(7)]);var inst_13018__$1 = (state_13039[(2)]);var inst_13019 = (inst_13018__$1 == null);var state_13039__$1 = (function (){var statearr_13043 = state_13039;(statearr_13043[(7)] = inst_13018__$1);
return statearr_13043;
})();if(cljs.core.truth_(inst_13019))
{var statearr_13044_13066 = state_13039__$1;(statearr_13044_13066[(1)] = (5));
} else
{var statearr_13045_13067 = state_13039__$1;(statearr_13045_13067[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13040 === (13)))
{var state_13039__$1 = state_13039;var statearr_13046_13068 = state_13039__$1;(statearr_13046_13068[(2)] = null);
(statearr_13046_13068[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13040 === (6)))
{var inst_13018 = (state_13039[(7)]);var state_13039__$1 = state_13039;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13039__$1,(11),to,inst_13018);
} else
{if((state_val_13040 === (3)))
{var inst_13037 = (state_13039[(2)]);var state_13039__$1 = state_13039;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13039__$1,inst_13037);
} else
{if((state_val_13040 === (12)))
{var state_13039__$1 = state_13039;var statearr_13047_13069 = state_13039__$1;(statearr_13047_13069[(2)] = null);
(statearr_13047_13069[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13040 === (2)))
{var state_13039__$1 = state_13039;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13039__$1,(4),from);
} else
{if((state_val_13040 === (11)))
{var inst_13028 = (state_13039[(2)]);var state_13039__$1 = state_13039;if(cljs.core.truth_(inst_13028))
{var statearr_13048_13070 = state_13039__$1;(statearr_13048_13070[(1)] = (12));
} else
{var statearr_13049_13071 = state_13039__$1;(statearr_13049_13071[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13040 === (9)))
{var state_13039__$1 = state_13039;var statearr_13050_13072 = state_13039__$1;(statearr_13050_13072[(2)] = null);
(statearr_13050_13072[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13040 === (5)))
{var state_13039__$1 = state_13039;if(cljs.core.truth_(close_QMARK_))
{var statearr_13051_13073 = state_13039__$1;(statearr_13051_13073[(1)] = (8));
} else
{var statearr_13052_13074 = state_13039__$1;(statearr_13052_13074[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13040 === (14)))
{var inst_13033 = (state_13039[(2)]);var state_13039__$1 = state_13039;var statearr_13053_13075 = state_13039__$1;(statearr_13053_13075[(2)] = inst_13033);
(statearr_13053_13075[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13040 === (10)))
{var inst_13025 = (state_13039[(2)]);var state_13039__$1 = state_13039;var statearr_13054_13076 = state_13039__$1;(statearr_13054_13076[(2)] = inst_13025);
(statearr_13054_13076[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13040 === (8)))
{var inst_13022 = cljs.core.async.close_BANG_.call(null,to);var state_13039__$1 = state_13039;var statearr_13055_13077 = state_13039__$1;(statearr_13055_13077[(2)] = inst_13022);
(statearr_13055_13077[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9784__auto___13063))
;return ((function (switch__9769__auto__,c__9784__auto___13063){
return (function() {
var state_machine__9770__auto__ = null;
var state_machine__9770__auto____0 = (function (){var statearr_13059 = [null,null,null,null,null,null,null,null];(statearr_13059[(0)] = state_machine__9770__auto__);
(statearr_13059[(1)] = (1));
return statearr_13059;
});
var state_machine__9770__auto____1 = (function (state_13039){while(true){
var ret_value__9771__auto__ = (function (){try{while(true){
var result__9772__auto__ = switch__9769__auto__.call(null,state_13039);if(cljs.core.keyword_identical_QMARK_.call(null,result__9772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9772__auto__;
}
break;
}
}catch (e13060){if((e13060 instanceof Object))
{var ex__9773__auto__ = e13060;var statearr_13061_13078 = state_13039;(statearr_13061_13078[(5)] = ex__9773__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13039);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13060;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13079 = state_13039;
state_13039 = G__13079;
continue;
}
} else
{return ret_value__9771__auto__;
}
break;
}
});
state_machine__9770__auto__ = function(state_13039){
switch(arguments.length){
case 0:
return state_machine__9770__auto____0.call(this);
case 1:
return state_machine__9770__auto____1.call(this,state_13039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9770__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9770__auto____0;
state_machine__9770__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9770__auto____1;
return state_machine__9770__auto__;
})()
;})(switch__9769__auto__,c__9784__auto___13063))
})();var state__9786__auto__ = (function (){var statearr_13062 = f__9785__auto__.call(null);(statearr_13062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9784__auto___13063);
return statearr_13062;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9786__auto__);
});})(c__9784__auto___13063))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__9784__auto___13180 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9784__auto___13180,tc,fc){
return (function (){var f__9785__auto__ = (function (){var switch__9769__auto__ = ((function (c__9784__auto___13180,tc,fc){
return (function (state_13155){var state_val_13156 = (state_13155[(1)]);if((state_val_13156 === (7)))
{var inst_13151 = (state_13155[(2)]);var state_13155__$1 = state_13155;var statearr_13157_13181 = state_13155__$1;(statearr_13157_13181[(2)] = inst_13151);
(statearr_13157_13181[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13156 === (1)))
{var state_13155__$1 = state_13155;var statearr_13158_13182 = state_13155__$1;(statearr_13158_13182[(2)] = null);
(statearr_13158_13182[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13156 === (4)))
{var inst_13132 = (state_13155[(7)]);var inst_13132__$1 = (state_13155[(2)]);var inst_13133 = (inst_13132__$1 == null);var state_13155__$1 = (function (){var statearr_13159 = state_13155;(statearr_13159[(7)] = inst_13132__$1);
return statearr_13159;
})();if(cljs.core.truth_(inst_13133))
{var statearr_13160_13183 = state_13155__$1;(statearr_13160_13183[(1)] = (5));
} else
{var statearr_13161_13184 = state_13155__$1;(statearr_13161_13184[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13156 === (13)))
{var state_13155__$1 = state_13155;var statearr_13162_13185 = state_13155__$1;(statearr_13162_13185[(2)] = null);
(statearr_13162_13185[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13156 === (6)))
{var inst_13132 = (state_13155[(7)]);var inst_13138 = p.call(null,inst_13132);var state_13155__$1 = state_13155;if(cljs.core.truth_(inst_13138))
{var statearr_13163_13186 = state_13155__$1;(statearr_13163_13186[(1)] = (9));
} else
{var statearr_13164_13187 = state_13155__$1;(statearr_13164_13187[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13156 === (3)))
{var inst_13153 = (state_13155[(2)]);var state_13155__$1 = state_13155;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13155__$1,inst_13153);
} else
{if((state_val_13156 === (12)))
{var state_13155__$1 = state_13155;var statearr_13165_13188 = state_13155__$1;(statearr_13165_13188[(2)] = null);
(statearr_13165_13188[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13156 === (2)))
{var state_13155__$1 = state_13155;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13155__$1,(4),ch);
} else
{if((state_val_13156 === (11)))
{var inst_13132 = (state_13155[(7)]);var inst_13142 = (state_13155[(2)]);var state_13155__$1 = state_13155;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13155__$1,(8),inst_13142,inst_13132);
} else
{if((state_val_13156 === (9)))
{var state_13155__$1 = state_13155;var statearr_13166_13189 = state_13155__$1;(statearr_13166_13189[(2)] = tc);
(statearr_13166_13189[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13156 === (5)))
{var inst_13135 = cljs.core.async.close_BANG_.call(null,tc);var inst_13136 = cljs.core.async.close_BANG_.call(null,fc);var state_13155__$1 = (function (){var statearr_13167 = state_13155;(statearr_13167[(8)] = inst_13135);
return statearr_13167;
})();var statearr_13168_13190 = state_13155__$1;(statearr_13168_13190[(2)] = inst_13136);
(statearr_13168_13190[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13156 === (14)))
{var inst_13149 = (state_13155[(2)]);var state_13155__$1 = state_13155;var statearr_13169_13191 = state_13155__$1;(statearr_13169_13191[(2)] = inst_13149);
(statearr_13169_13191[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13156 === (10)))
{var state_13155__$1 = state_13155;var statearr_13170_13192 = state_13155__$1;(statearr_13170_13192[(2)] = fc);
(statearr_13170_13192[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13156 === (8)))
{var inst_13144 = (state_13155[(2)]);var state_13155__$1 = state_13155;if(cljs.core.truth_(inst_13144))
{var statearr_13171_13193 = state_13155__$1;(statearr_13171_13193[(1)] = (12));
} else
{var statearr_13172_13194 = state_13155__$1;(statearr_13172_13194[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9784__auto___13180,tc,fc))
;return ((function (switch__9769__auto__,c__9784__auto___13180,tc,fc){
return (function() {
var state_machine__9770__auto__ = null;
var state_machine__9770__auto____0 = (function (){var statearr_13176 = [null,null,null,null,null,null,null,null,null];(statearr_13176[(0)] = state_machine__9770__auto__);
(statearr_13176[(1)] = (1));
return statearr_13176;
});
var state_machine__9770__auto____1 = (function (state_13155){while(true){
var ret_value__9771__auto__ = (function (){try{while(true){
var result__9772__auto__ = switch__9769__auto__.call(null,state_13155);if(cljs.core.keyword_identical_QMARK_.call(null,result__9772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9772__auto__;
}
break;
}
}catch (e13177){if((e13177 instanceof Object))
{var ex__9773__auto__ = e13177;var statearr_13178_13195 = state_13155;(statearr_13178_13195[(5)] = ex__9773__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13155);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13177;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13196 = state_13155;
state_13155 = G__13196;
continue;
}
} else
{return ret_value__9771__auto__;
}
break;
}
});
state_machine__9770__auto__ = function(state_13155){
switch(arguments.length){
case 0:
return state_machine__9770__auto____0.call(this);
case 1:
return state_machine__9770__auto____1.call(this,state_13155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9770__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9770__auto____0;
state_machine__9770__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9770__auto____1;
return state_machine__9770__auto__;
})()
;})(switch__9769__auto__,c__9784__auto___13180,tc,fc))
})();var state__9786__auto__ = (function (){var statearr_13179 = f__9785__auto__.call(null);(statearr_13179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9784__auto___13180);
return statearr_13179;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9786__auto__);
});})(c__9784__auto___13180,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__9784__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9784__auto__){
return (function (){var f__9785__auto__ = (function (){var switch__9769__auto__ = ((function (c__9784__auto__){
return (function (state_13243){var state_val_13244 = (state_13243[(1)]);if((state_val_13244 === (7)))
{var inst_13239 = (state_13243[(2)]);var state_13243__$1 = state_13243;var statearr_13245_13261 = state_13243__$1;(statearr_13245_13261[(2)] = inst_13239);
(statearr_13245_13261[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13244 === (6)))
{var inst_13229 = (state_13243[(7)]);var inst_13232 = (state_13243[(8)]);var inst_13236 = f.call(null,inst_13229,inst_13232);var inst_13229__$1 = inst_13236;var state_13243__$1 = (function (){var statearr_13246 = state_13243;(statearr_13246[(7)] = inst_13229__$1);
return statearr_13246;
})();var statearr_13247_13262 = state_13243__$1;(statearr_13247_13262[(2)] = null);
(statearr_13247_13262[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13244 === (5)))
{var inst_13229 = (state_13243[(7)]);var state_13243__$1 = state_13243;var statearr_13248_13263 = state_13243__$1;(statearr_13248_13263[(2)] = inst_13229);
(statearr_13248_13263[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13244 === (4)))
{var inst_13232 = (state_13243[(8)]);var inst_13232__$1 = (state_13243[(2)]);var inst_13233 = (inst_13232__$1 == null);var state_13243__$1 = (function (){var statearr_13249 = state_13243;(statearr_13249[(8)] = inst_13232__$1);
return statearr_13249;
})();if(cljs.core.truth_(inst_13233))
{var statearr_13250_13264 = state_13243__$1;(statearr_13250_13264[(1)] = (5));
} else
{var statearr_13251_13265 = state_13243__$1;(statearr_13251_13265[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13244 === (3)))
{var inst_13241 = (state_13243[(2)]);var state_13243__$1 = state_13243;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13243__$1,inst_13241);
} else
{if((state_val_13244 === (2)))
{var state_13243__$1 = state_13243;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13243__$1,(4),ch);
} else
{if((state_val_13244 === (1)))
{var inst_13229 = init;var state_13243__$1 = (function (){var statearr_13252 = state_13243;(statearr_13252[(7)] = inst_13229);
return statearr_13252;
})();var statearr_13253_13266 = state_13243__$1;(statearr_13253_13266[(2)] = null);
(statearr_13253_13266[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__9784__auto__))
;return ((function (switch__9769__auto__,c__9784__auto__){
return (function() {
var state_machine__9770__auto__ = null;
var state_machine__9770__auto____0 = (function (){var statearr_13257 = [null,null,null,null,null,null,null,null,null];(statearr_13257[(0)] = state_machine__9770__auto__);
(statearr_13257[(1)] = (1));
return statearr_13257;
});
var state_machine__9770__auto____1 = (function (state_13243){while(true){
var ret_value__9771__auto__ = (function (){try{while(true){
var result__9772__auto__ = switch__9769__auto__.call(null,state_13243);if(cljs.core.keyword_identical_QMARK_.call(null,result__9772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9772__auto__;
}
break;
}
}catch (e13258){if((e13258 instanceof Object))
{var ex__9773__auto__ = e13258;var statearr_13259_13267 = state_13243;(statearr_13259_13267[(5)] = ex__9773__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13243);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13258;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13268 = state_13243;
state_13243 = G__13268;
continue;
}
} else
{return ret_value__9771__auto__;
}
break;
}
});
state_machine__9770__auto__ = function(state_13243){
switch(arguments.length){
case 0:
return state_machine__9770__auto____0.call(this);
case 1:
return state_machine__9770__auto____1.call(this,state_13243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9770__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9770__auto____0;
state_machine__9770__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9770__auto____1;
return state_machine__9770__auto__;
})()
;})(switch__9769__auto__,c__9784__auto__))
})();var state__9786__auto__ = (function (){var statearr_13260 = f__9785__auto__.call(null);(statearr_13260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9784__auto__);
return statearr_13260;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9786__auto__);
});})(c__9784__auto__))
);
return c__9784__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__9784__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9784__auto__){
return (function (){var f__9785__auto__ = (function (){var switch__9769__auto__ = ((function (c__9784__auto__){
return (function (state_13342){var state_val_13343 = (state_13342[(1)]);if((state_val_13343 === (7)))
{var inst_13324 = (state_13342[(2)]);var state_13342__$1 = state_13342;var statearr_13344_13367 = state_13342__$1;(statearr_13344_13367[(2)] = inst_13324);
(statearr_13344_13367[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13343 === (1)))
{var inst_13318 = cljs.core.seq.call(null,coll);var inst_13319 = inst_13318;var state_13342__$1 = (function (){var statearr_13345 = state_13342;(statearr_13345[(7)] = inst_13319);
return statearr_13345;
})();var statearr_13346_13368 = state_13342__$1;(statearr_13346_13368[(2)] = null);
(statearr_13346_13368[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13343 === (4)))
{var inst_13319 = (state_13342[(7)]);var inst_13322 = cljs.core.first.call(null,inst_13319);var state_13342__$1 = state_13342;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13342__$1,(7),ch,inst_13322);
} else
{if((state_val_13343 === (13)))
{var inst_13336 = (state_13342[(2)]);var state_13342__$1 = state_13342;var statearr_13347_13369 = state_13342__$1;(statearr_13347_13369[(2)] = inst_13336);
(statearr_13347_13369[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13343 === (6)))
{var inst_13327 = (state_13342[(2)]);var state_13342__$1 = state_13342;if(cljs.core.truth_(inst_13327))
{var statearr_13348_13370 = state_13342__$1;(statearr_13348_13370[(1)] = (8));
} else
{var statearr_13349_13371 = state_13342__$1;(statearr_13349_13371[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13343 === (3)))
{var inst_13340 = (state_13342[(2)]);var state_13342__$1 = state_13342;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13342__$1,inst_13340);
} else
{if((state_val_13343 === (12)))
{var state_13342__$1 = state_13342;var statearr_13350_13372 = state_13342__$1;(statearr_13350_13372[(2)] = null);
(statearr_13350_13372[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13343 === (2)))
{var inst_13319 = (state_13342[(7)]);var state_13342__$1 = state_13342;if(cljs.core.truth_(inst_13319))
{var statearr_13351_13373 = state_13342__$1;(statearr_13351_13373[(1)] = (4));
} else
{var statearr_13352_13374 = state_13342__$1;(statearr_13352_13374[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13343 === (11)))
{var inst_13333 = cljs.core.async.close_BANG_.call(null,ch);var state_13342__$1 = state_13342;var statearr_13353_13375 = state_13342__$1;(statearr_13353_13375[(2)] = inst_13333);
(statearr_13353_13375[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13343 === (9)))
{var state_13342__$1 = state_13342;if(cljs.core.truth_(close_QMARK_))
{var statearr_13354_13376 = state_13342__$1;(statearr_13354_13376[(1)] = (11));
} else
{var statearr_13355_13377 = state_13342__$1;(statearr_13355_13377[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13343 === (5)))
{var inst_13319 = (state_13342[(7)]);var state_13342__$1 = state_13342;var statearr_13356_13378 = state_13342__$1;(statearr_13356_13378[(2)] = inst_13319);
(statearr_13356_13378[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13343 === (10)))
{var inst_13338 = (state_13342[(2)]);var state_13342__$1 = state_13342;var statearr_13357_13379 = state_13342__$1;(statearr_13357_13379[(2)] = inst_13338);
(statearr_13357_13379[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13343 === (8)))
{var inst_13319 = (state_13342[(7)]);var inst_13329 = cljs.core.next.call(null,inst_13319);var inst_13319__$1 = inst_13329;var state_13342__$1 = (function (){var statearr_13358 = state_13342;(statearr_13358[(7)] = inst_13319__$1);
return statearr_13358;
})();var statearr_13359_13380 = state_13342__$1;(statearr_13359_13380[(2)] = null);
(statearr_13359_13380[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9784__auto__))
;return ((function (switch__9769__auto__,c__9784__auto__){
return (function() {
var state_machine__9770__auto__ = null;
var state_machine__9770__auto____0 = (function (){var statearr_13363 = [null,null,null,null,null,null,null,null];(statearr_13363[(0)] = state_machine__9770__auto__);
(statearr_13363[(1)] = (1));
return statearr_13363;
});
var state_machine__9770__auto____1 = (function (state_13342){while(true){
var ret_value__9771__auto__ = (function (){try{while(true){
var result__9772__auto__ = switch__9769__auto__.call(null,state_13342);if(cljs.core.keyword_identical_QMARK_.call(null,result__9772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9772__auto__;
}
break;
}
}catch (e13364){if((e13364 instanceof Object))
{var ex__9773__auto__ = e13364;var statearr_13365_13381 = state_13342;(statearr_13365_13381[(5)] = ex__9773__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13342);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13364;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13382 = state_13342;
state_13342 = G__13382;
continue;
}
} else
{return ret_value__9771__auto__;
}
break;
}
});
state_machine__9770__auto__ = function(state_13342){
switch(arguments.length){
case 0:
return state_machine__9770__auto____0.call(this);
case 1:
return state_machine__9770__auto____1.call(this,state_13342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9770__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9770__auto____0;
state_machine__9770__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9770__auto____1;
return state_machine__9770__auto__;
})()
;})(switch__9769__auto__,c__9784__auto__))
})();var state__9786__auto__ = (function (){var statearr_13366 = f__9785__auto__.call(null);(statearr_13366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9784__auto__);
return statearr_13366;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9786__auto__);
});})(c__9784__auto__))
);
return c__9784__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj13384 = {};return obj13384;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3551__auto__ = _;if(and__3551__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3551__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4190__auto__ = (((_ == null))?null:_);return (function (){var or__3563__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4190__auto__)]);if(or__3563__auto__)
{return or__3563__auto__;
} else
{var or__3563__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3563__auto____$1)
{return or__3563__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj13386 = {};return obj13386;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3551__auto__ = m;if(and__3551__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3551__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4190__auto__ = (((m == null))?null:m);return (function (){var or__3563__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4190__auto__)]);if(or__3563__auto__)
{return or__3563__auto__;
} else
{var or__3563__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3563__auto____$1)
{return or__3563__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3551__auto__ = m;if(and__3551__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3551__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4190__auto__ = (((m == null))?null:m);return (function (){var or__3563__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4190__auto__)]);if(or__3563__auto__)
{return or__3563__auto__;
} else
{var or__3563__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3563__auto____$1)
{return or__3563__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3551__auto__ = m;if(and__3551__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3551__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4190__auto__ = (((m == null))?null:m);return (function (){var or__3563__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4190__auto__)]);if(or__3563__auto__)
{return or__3563__auto__;
} else
{var or__3563__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3563__auto____$1)
{return or__3563__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13608 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13608 = (function (cs,ch,mult,meta13609){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13609 = meta13609;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13608.cljs$lang$type = true;
cljs.core.async.t13608.cljs$lang$ctorStr = "cljs.core.async/t13608";
cljs.core.async.t13608.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4130__auto__,writer__4131__auto__,opt__4132__auto__){return cljs.core._write.call(null,writer__4131__auto__,"cljs.core.async/t13608");
});})(cs))
;
cljs.core.async.t13608.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13608.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13608.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13608.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13608.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13608.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13608.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13610){var self__ = this;
var _13610__$1 = this;return self__.meta13609;
});})(cs))
;
cljs.core.async.t13608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13610,meta13609__$1){var self__ = this;
var _13610__$1 = this;return (new cljs.core.async.t13608(self__.cs,self__.ch,self__.mult,meta13609__$1));
});})(cs))
;
cljs.core.async.__GT_t13608 = ((function (cs){
return (function __GT_t13608(cs__$1,ch__$1,mult__$1,meta13609){return (new cljs.core.async.t13608(cs__$1,ch__$1,mult__$1,meta13609));
});})(cs))
;
}
return (new cljs.core.async.t13608(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__9784__auto___13829 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9784__auto___13829,cs,m,dchan,dctr,done){
return (function (){var f__9785__auto__ = (function (){var switch__9769__auto__ = ((function (c__9784__auto___13829,cs,m,dchan,dctr,done){
return (function (state_13741){var state_val_13742 = (state_13741[(1)]);if((state_val_13742 === (7)))
{var inst_13737 = (state_13741[(2)]);var state_13741__$1 = state_13741;var statearr_13743_13830 = state_13741__$1;(statearr_13743_13830[(2)] = inst_13737);
(statearr_13743_13830[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (20)))
{var inst_13642 = (state_13741[(7)]);var inst_13652 = cljs.core.first.call(null,inst_13642);var inst_13653 = cljs.core.nth.call(null,inst_13652,(0),null);var inst_13654 = cljs.core.nth.call(null,inst_13652,(1),null);var state_13741__$1 = (function (){var statearr_13744 = state_13741;(statearr_13744[(8)] = inst_13653);
return statearr_13744;
})();if(cljs.core.truth_(inst_13654))
{var statearr_13745_13831 = state_13741__$1;(statearr_13745_13831[(1)] = (22));
} else
{var statearr_13746_13832 = state_13741__$1;(statearr_13746_13832[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (27)))
{var inst_13684 = (state_13741[(9)]);var inst_13689 = (state_13741[(10)]);var inst_13682 = (state_13741[(11)]);var inst_13613 = (state_13741[(12)]);var inst_13689__$1 = cljs.core._nth.call(null,inst_13682,inst_13684);var inst_13690 = cljs.core.async.put_BANG_.call(null,inst_13689__$1,inst_13613,done);var state_13741__$1 = (function (){var statearr_13747 = state_13741;(statearr_13747[(10)] = inst_13689__$1);
return statearr_13747;
})();if(cljs.core.truth_(inst_13690))
{var statearr_13748_13833 = state_13741__$1;(statearr_13748_13833[(1)] = (30));
} else
{var statearr_13749_13834 = state_13741__$1;(statearr_13749_13834[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (1)))
{var state_13741__$1 = state_13741;var statearr_13750_13835 = state_13741__$1;(statearr_13750_13835[(2)] = null);
(statearr_13750_13835[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (24)))
{var inst_13642 = (state_13741[(7)]);var inst_13659 = (state_13741[(2)]);var inst_13660 = cljs.core.next.call(null,inst_13642);var inst_13622 = inst_13660;var inst_13623 = null;var inst_13624 = (0);var inst_13625 = (0);var state_13741__$1 = (function (){var statearr_13751 = state_13741;(statearr_13751[(13)] = inst_13623);
(statearr_13751[(14)] = inst_13625);
(statearr_13751[(15)] = inst_13659);
(statearr_13751[(16)] = inst_13622);
(statearr_13751[(17)] = inst_13624);
return statearr_13751;
})();var statearr_13752_13836 = state_13741__$1;(statearr_13752_13836[(2)] = null);
(statearr_13752_13836[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (39)))
{var state_13741__$1 = state_13741;var statearr_13756_13837 = state_13741__$1;(statearr_13756_13837[(2)] = null);
(statearr_13756_13837[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (4)))
{var inst_13613 = (state_13741[(12)]);var inst_13613__$1 = (state_13741[(2)]);var inst_13614 = (inst_13613__$1 == null);var state_13741__$1 = (function (){var statearr_13757 = state_13741;(statearr_13757[(12)] = inst_13613__$1);
return statearr_13757;
})();if(cljs.core.truth_(inst_13614))
{var statearr_13758_13838 = state_13741__$1;(statearr_13758_13838[(1)] = (5));
} else
{var statearr_13759_13839 = state_13741__$1;(statearr_13759_13839[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (15)))
{var inst_13623 = (state_13741[(13)]);var inst_13625 = (state_13741[(14)]);var inst_13622 = (state_13741[(16)]);var inst_13624 = (state_13741[(17)]);var inst_13638 = (state_13741[(2)]);var inst_13639 = (inst_13625 + (1));var tmp13753 = inst_13623;var tmp13754 = inst_13622;var tmp13755 = inst_13624;var inst_13622__$1 = tmp13754;var inst_13623__$1 = tmp13753;var inst_13624__$1 = tmp13755;var inst_13625__$1 = inst_13639;var state_13741__$1 = (function (){var statearr_13760 = state_13741;(statearr_13760[(13)] = inst_13623__$1);
(statearr_13760[(18)] = inst_13638);
(statearr_13760[(14)] = inst_13625__$1);
(statearr_13760[(16)] = inst_13622__$1);
(statearr_13760[(17)] = inst_13624__$1);
return statearr_13760;
})();var statearr_13761_13840 = state_13741__$1;(statearr_13761_13840[(2)] = null);
(statearr_13761_13840[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (21)))
{var inst_13663 = (state_13741[(2)]);var state_13741__$1 = state_13741;var statearr_13765_13841 = state_13741__$1;(statearr_13765_13841[(2)] = inst_13663);
(statearr_13765_13841[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (31)))
{var inst_13689 = (state_13741[(10)]);var inst_13693 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13694 = cljs.core.async.untap_STAR_.call(null,m,inst_13689);var state_13741__$1 = (function (){var statearr_13766 = state_13741;(statearr_13766[(19)] = inst_13693);
return statearr_13766;
})();var statearr_13767_13842 = state_13741__$1;(statearr_13767_13842[(2)] = inst_13694);
(statearr_13767_13842[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (32)))
{var inst_13684 = (state_13741[(9)]);var inst_13681 = (state_13741[(20)]);var inst_13683 = (state_13741[(21)]);var inst_13682 = (state_13741[(11)]);var inst_13696 = (state_13741[(2)]);var inst_13697 = (inst_13684 + (1));var tmp13762 = inst_13681;var tmp13763 = inst_13683;var tmp13764 = inst_13682;var inst_13681__$1 = tmp13762;var inst_13682__$1 = tmp13764;var inst_13683__$1 = tmp13763;var inst_13684__$1 = inst_13697;var state_13741__$1 = (function (){var statearr_13768 = state_13741;(statearr_13768[(9)] = inst_13684__$1);
(statearr_13768[(20)] = inst_13681__$1);
(statearr_13768[(21)] = inst_13683__$1);
(statearr_13768[(11)] = inst_13682__$1);
(statearr_13768[(22)] = inst_13696);
return statearr_13768;
})();var statearr_13769_13843 = state_13741__$1;(statearr_13769_13843[(2)] = null);
(statearr_13769_13843[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (40)))
{var inst_13709 = (state_13741[(23)]);var inst_13713 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13714 = cljs.core.async.untap_STAR_.call(null,m,inst_13709);var state_13741__$1 = (function (){var statearr_13770 = state_13741;(statearr_13770[(24)] = inst_13713);
return statearr_13770;
})();var statearr_13771_13844 = state_13741__$1;(statearr_13771_13844[(2)] = inst_13714);
(statearr_13771_13844[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (33)))
{var inst_13700 = (state_13741[(25)]);var inst_13702 = cljs.core.chunked_seq_QMARK_.call(null,inst_13700);var state_13741__$1 = state_13741;if(inst_13702)
{var statearr_13772_13845 = state_13741__$1;(statearr_13772_13845[(1)] = (36));
} else
{var statearr_13773_13846 = state_13741__$1;(statearr_13773_13846[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (13)))
{var inst_13632 = (state_13741[(26)]);var inst_13635 = cljs.core.async.close_BANG_.call(null,inst_13632);var state_13741__$1 = state_13741;var statearr_13774_13847 = state_13741__$1;(statearr_13774_13847[(2)] = inst_13635);
(statearr_13774_13847[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (22)))
{var inst_13653 = (state_13741[(8)]);var inst_13656 = cljs.core.async.close_BANG_.call(null,inst_13653);var state_13741__$1 = state_13741;var statearr_13775_13848 = state_13741__$1;(statearr_13775_13848[(2)] = inst_13656);
(statearr_13775_13848[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (36)))
{var inst_13700 = (state_13741[(25)]);var inst_13704 = cljs.core.chunk_first.call(null,inst_13700);var inst_13705 = cljs.core.chunk_rest.call(null,inst_13700);var inst_13706 = cljs.core.count.call(null,inst_13704);var inst_13681 = inst_13705;var inst_13682 = inst_13704;var inst_13683 = inst_13706;var inst_13684 = (0);var state_13741__$1 = (function (){var statearr_13776 = state_13741;(statearr_13776[(9)] = inst_13684);
(statearr_13776[(20)] = inst_13681);
(statearr_13776[(21)] = inst_13683);
(statearr_13776[(11)] = inst_13682);
return statearr_13776;
})();var statearr_13777_13849 = state_13741__$1;(statearr_13777_13849[(2)] = null);
(statearr_13777_13849[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (41)))
{var inst_13700 = (state_13741[(25)]);var inst_13716 = (state_13741[(2)]);var inst_13717 = cljs.core.next.call(null,inst_13700);var inst_13681 = inst_13717;var inst_13682 = null;var inst_13683 = (0);var inst_13684 = (0);var state_13741__$1 = (function (){var statearr_13778 = state_13741;(statearr_13778[(9)] = inst_13684);
(statearr_13778[(20)] = inst_13681);
(statearr_13778[(27)] = inst_13716);
(statearr_13778[(21)] = inst_13683);
(statearr_13778[(11)] = inst_13682);
return statearr_13778;
})();var statearr_13779_13850 = state_13741__$1;(statearr_13779_13850[(2)] = null);
(statearr_13779_13850[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (43)))
{var state_13741__$1 = state_13741;var statearr_13780_13851 = state_13741__$1;(statearr_13780_13851[(2)] = null);
(statearr_13780_13851[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (29)))
{var inst_13725 = (state_13741[(2)]);var state_13741__$1 = state_13741;var statearr_13781_13852 = state_13741__$1;(statearr_13781_13852[(2)] = inst_13725);
(statearr_13781_13852[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (44)))
{var inst_13734 = (state_13741[(2)]);var state_13741__$1 = (function (){var statearr_13782 = state_13741;(statearr_13782[(28)] = inst_13734);
return statearr_13782;
})();var statearr_13783_13853 = state_13741__$1;(statearr_13783_13853[(2)] = null);
(statearr_13783_13853[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (6)))
{var inst_13673 = (state_13741[(29)]);var inst_13672 = cljs.core.deref.call(null,cs);var inst_13673__$1 = cljs.core.keys.call(null,inst_13672);var inst_13674 = cljs.core.count.call(null,inst_13673__$1);var inst_13675 = cljs.core.reset_BANG_.call(null,dctr,inst_13674);var inst_13680 = cljs.core.seq.call(null,inst_13673__$1);var inst_13681 = inst_13680;var inst_13682 = null;var inst_13683 = (0);var inst_13684 = (0);var state_13741__$1 = (function (){var statearr_13784 = state_13741;(statearr_13784[(9)] = inst_13684);
(statearr_13784[(20)] = inst_13681);
(statearr_13784[(21)] = inst_13683);
(statearr_13784[(11)] = inst_13682);
(statearr_13784[(29)] = inst_13673__$1);
(statearr_13784[(30)] = inst_13675);
return statearr_13784;
})();var statearr_13785_13854 = state_13741__$1;(statearr_13785_13854[(2)] = null);
(statearr_13785_13854[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (28)))
{var inst_13700 = (state_13741[(25)]);var inst_13681 = (state_13741[(20)]);var inst_13700__$1 = cljs.core.seq.call(null,inst_13681);var state_13741__$1 = (function (){var statearr_13786 = state_13741;(statearr_13786[(25)] = inst_13700__$1);
return statearr_13786;
})();if(inst_13700__$1)
{var statearr_13787_13855 = state_13741__$1;(statearr_13787_13855[(1)] = (33));
} else
{var statearr_13788_13856 = state_13741__$1;(statearr_13788_13856[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (25)))
{var inst_13684 = (state_13741[(9)]);var inst_13683 = (state_13741[(21)]);var inst_13686 = (inst_13684 < inst_13683);var inst_13687 = inst_13686;var state_13741__$1 = state_13741;if(cljs.core.truth_(inst_13687))
{var statearr_13789_13857 = state_13741__$1;(statearr_13789_13857[(1)] = (27));
} else
{var statearr_13790_13858 = state_13741__$1;(statearr_13790_13858[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (34)))
{var state_13741__$1 = state_13741;var statearr_13791_13859 = state_13741__$1;(statearr_13791_13859[(2)] = null);
(statearr_13791_13859[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (17)))
{var state_13741__$1 = state_13741;var statearr_13792_13860 = state_13741__$1;(statearr_13792_13860[(2)] = null);
(statearr_13792_13860[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (3)))
{var inst_13739 = (state_13741[(2)]);var state_13741__$1 = state_13741;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13741__$1,inst_13739);
} else
{if((state_val_13742 === (12)))
{var inst_13668 = (state_13741[(2)]);var state_13741__$1 = state_13741;var statearr_13793_13861 = state_13741__$1;(statearr_13793_13861[(2)] = inst_13668);
(statearr_13793_13861[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (2)))
{var state_13741__$1 = state_13741;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13741__$1,(4),ch);
} else
{if((state_val_13742 === (23)))
{var state_13741__$1 = state_13741;var statearr_13794_13862 = state_13741__$1;(statearr_13794_13862[(2)] = null);
(statearr_13794_13862[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (35)))
{var inst_13723 = (state_13741[(2)]);var state_13741__$1 = state_13741;var statearr_13795_13863 = state_13741__$1;(statearr_13795_13863[(2)] = inst_13723);
(statearr_13795_13863[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (19)))
{var inst_13642 = (state_13741[(7)]);var inst_13646 = cljs.core.chunk_first.call(null,inst_13642);var inst_13647 = cljs.core.chunk_rest.call(null,inst_13642);var inst_13648 = cljs.core.count.call(null,inst_13646);var inst_13622 = inst_13647;var inst_13623 = inst_13646;var inst_13624 = inst_13648;var inst_13625 = (0);var state_13741__$1 = (function (){var statearr_13796 = state_13741;(statearr_13796[(13)] = inst_13623);
(statearr_13796[(14)] = inst_13625);
(statearr_13796[(16)] = inst_13622);
(statearr_13796[(17)] = inst_13624);
return statearr_13796;
})();var statearr_13797_13864 = state_13741__$1;(statearr_13797_13864[(2)] = null);
(statearr_13797_13864[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (11)))
{var inst_13642 = (state_13741[(7)]);var inst_13622 = (state_13741[(16)]);var inst_13642__$1 = cljs.core.seq.call(null,inst_13622);var state_13741__$1 = (function (){var statearr_13798 = state_13741;(statearr_13798[(7)] = inst_13642__$1);
return statearr_13798;
})();if(inst_13642__$1)
{var statearr_13799_13865 = state_13741__$1;(statearr_13799_13865[(1)] = (16));
} else
{var statearr_13800_13866 = state_13741__$1;(statearr_13800_13866[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (9)))
{var inst_13670 = (state_13741[(2)]);var state_13741__$1 = state_13741;var statearr_13801_13867 = state_13741__$1;(statearr_13801_13867[(2)] = inst_13670);
(statearr_13801_13867[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (5)))
{var inst_13620 = cljs.core.deref.call(null,cs);var inst_13621 = cljs.core.seq.call(null,inst_13620);var inst_13622 = inst_13621;var inst_13623 = null;var inst_13624 = (0);var inst_13625 = (0);var state_13741__$1 = (function (){var statearr_13802 = state_13741;(statearr_13802[(13)] = inst_13623);
(statearr_13802[(14)] = inst_13625);
(statearr_13802[(16)] = inst_13622);
(statearr_13802[(17)] = inst_13624);
return statearr_13802;
})();var statearr_13803_13868 = state_13741__$1;(statearr_13803_13868[(2)] = null);
(statearr_13803_13868[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (14)))
{var state_13741__$1 = state_13741;var statearr_13804_13869 = state_13741__$1;(statearr_13804_13869[(2)] = null);
(statearr_13804_13869[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (45)))
{var inst_13731 = (state_13741[(2)]);var state_13741__$1 = state_13741;var statearr_13805_13870 = state_13741__$1;(statearr_13805_13870[(2)] = inst_13731);
(statearr_13805_13870[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (26)))
{var inst_13673 = (state_13741[(29)]);var inst_13727 = (state_13741[(2)]);var inst_13728 = cljs.core.seq.call(null,inst_13673);var state_13741__$1 = (function (){var statearr_13806 = state_13741;(statearr_13806[(31)] = inst_13727);
return statearr_13806;
})();if(inst_13728)
{var statearr_13807_13871 = state_13741__$1;(statearr_13807_13871[(1)] = (42));
} else
{var statearr_13808_13872 = state_13741__$1;(statearr_13808_13872[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (16)))
{var inst_13642 = (state_13741[(7)]);var inst_13644 = cljs.core.chunked_seq_QMARK_.call(null,inst_13642);var state_13741__$1 = state_13741;if(inst_13644)
{var statearr_13809_13873 = state_13741__$1;(statearr_13809_13873[(1)] = (19));
} else
{var statearr_13810_13874 = state_13741__$1;(statearr_13810_13874[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (38)))
{var inst_13720 = (state_13741[(2)]);var state_13741__$1 = state_13741;var statearr_13811_13875 = state_13741__$1;(statearr_13811_13875[(2)] = inst_13720);
(statearr_13811_13875[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (30)))
{var state_13741__$1 = state_13741;var statearr_13812_13876 = state_13741__$1;(statearr_13812_13876[(2)] = null);
(statearr_13812_13876[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (10)))
{var inst_13623 = (state_13741[(13)]);var inst_13625 = (state_13741[(14)]);var inst_13631 = cljs.core._nth.call(null,inst_13623,inst_13625);var inst_13632 = cljs.core.nth.call(null,inst_13631,(0),null);var inst_13633 = cljs.core.nth.call(null,inst_13631,(1),null);var state_13741__$1 = (function (){var statearr_13813 = state_13741;(statearr_13813[(26)] = inst_13632);
return statearr_13813;
})();if(cljs.core.truth_(inst_13633))
{var statearr_13814_13877 = state_13741__$1;(statearr_13814_13877[(1)] = (13));
} else
{var statearr_13815_13878 = state_13741__$1;(statearr_13815_13878[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (18)))
{var inst_13666 = (state_13741[(2)]);var state_13741__$1 = state_13741;var statearr_13816_13879 = state_13741__$1;(statearr_13816_13879[(2)] = inst_13666);
(statearr_13816_13879[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (42)))
{var state_13741__$1 = state_13741;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13741__$1,(45),dchan);
} else
{if((state_val_13742 === (37)))
{var inst_13709 = (state_13741[(23)]);var inst_13700 = (state_13741[(25)]);var inst_13613 = (state_13741[(12)]);var inst_13709__$1 = cljs.core.first.call(null,inst_13700);var inst_13710 = cljs.core.async.put_BANG_.call(null,inst_13709__$1,inst_13613,done);var state_13741__$1 = (function (){var statearr_13817 = state_13741;(statearr_13817[(23)] = inst_13709__$1);
return statearr_13817;
})();if(cljs.core.truth_(inst_13710))
{var statearr_13818_13880 = state_13741__$1;(statearr_13818_13880[(1)] = (39));
} else
{var statearr_13819_13881 = state_13741__$1;(statearr_13819_13881[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13742 === (8)))
{var inst_13625 = (state_13741[(14)]);var inst_13624 = (state_13741[(17)]);var inst_13627 = (inst_13625 < inst_13624);var inst_13628 = inst_13627;var state_13741__$1 = state_13741;if(cljs.core.truth_(inst_13628))
{var statearr_13820_13882 = state_13741__$1;(statearr_13820_13882[(1)] = (10));
} else
{var statearr_13821_13883 = state_13741__$1;(statearr_13821_13883[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9784__auto___13829,cs,m,dchan,dctr,done))
;return ((function (switch__9769__auto__,c__9784__auto___13829,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9770__auto__ = null;
var state_machine__9770__auto____0 = (function (){var statearr_13825 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13825[(0)] = state_machine__9770__auto__);
(statearr_13825[(1)] = (1));
return statearr_13825;
});
var state_machine__9770__auto____1 = (function (state_13741){while(true){
var ret_value__9771__auto__ = (function (){try{while(true){
var result__9772__auto__ = switch__9769__auto__.call(null,state_13741);if(cljs.core.keyword_identical_QMARK_.call(null,result__9772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9772__auto__;
}
break;
}
}catch (e13826){if((e13826 instanceof Object))
{var ex__9773__auto__ = e13826;var statearr_13827_13884 = state_13741;(statearr_13827_13884[(5)] = ex__9773__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13741);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13826;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13885 = state_13741;
state_13741 = G__13885;
continue;
}
} else
{return ret_value__9771__auto__;
}
break;
}
});
state_machine__9770__auto__ = function(state_13741){
switch(arguments.length){
case 0:
return state_machine__9770__auto____0.call(this);
case 1:
return state_machine__9770__auto____1.call(this,state_13741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9770__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9770__auto____0;
state_machine__9770__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9770__auto____1;
return state_machine__9770__auto__;
})()
;})(switch__9769__auto__,c__9784__auto___13829,cs,m,dchan,dctr,done))
})();var state__9786__auto__ = (function (){var statearr_13828 = f__9785__auto__.call(null);(statearr_13828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9784__auto___13829);
return statearr_13828;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9786__auto__);
});})(c__9784__auto___13829,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj13887 = {};return obj13887;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3551__auto__ = m;if(and__3551__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3551__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4190__auto__ = (((m == null))?null:m);return (function (){var or__3563__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4190__auto__)]);if(or__3563__auto__)
{return or__3563__auto__;
} else
{var or__3563__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3563__auto____$1)
{return or__3563__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3551__auto__ = m;if(and__3551__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3551__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4190__auto__ = (((m == null))?null:m);return (function (){var or__3563__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4190__auto__)]);if(or__3563__auto__)
{return or__3563__auto__;
} else
{var or__3563__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3563__auto____$1)
{return or__3563__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3551__auto__ = m;if(and__3551__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3551__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4190__auto__ = (((m == null))?null:m);return (function (){var or__3563__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4190__auto__)]);if(or__3563__auto__)
{return or__3563__auto__;
} else
{var or__3563__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3563__auto____$1)
{return or__3563__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3551__auto__ = m;if(and__3551__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3551__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4190__auto__ = (((m == null))?null:m);return (function (){var or__3563__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4190__auto__)]);if(or__3563__auto__)
{return or__3563__auto__;
} else
{var or__3563__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3563__auto____$1)
{return or__3563__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3551__auto__ = m;if(and__3551__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3551__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4190__auto__ = (((m == null))?null:m);return (function (){var or__3563__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4190__auto__)]);if(or__3563__auto__)
{return or__3563__auto__;
} else
{var or__3563__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3563__auto____$1)
{return or__3563__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t14007 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14007 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14008){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14008 = meta14008;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14007.cljs$lang$type = true;
cljs.core.async.t14007.cljs$lang$ctorStr = "cljs.core.async/t14007";
cljs.core.async.t14007.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4130__auto__,writer__4131__auto__,opt__4132__auto__){return cljs.core._write.call(null,writer__4131__auto__,"cljs.core.async/t14007");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14007.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14007.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14007.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14007.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14007.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14007.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14007.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14007.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14007.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14009){var self__ = this;
var _14009__$1 = this;return self__.meta14008;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14009,meta14008__$1){var self__ = this;
var _14009__$1 = this;return (new cljs.core.async.t14007(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14008__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14007 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14007(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14008){return (new cljs.core.async.t14007(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14008));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14007(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__9784__auto___14126 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9784__auto___14126,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__9785__auto__ = (function (){var switch__9769__auto__ = ((function (c__9784__auto___14126,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14079){var state_val_14080 = (state_14079[(1)]);if((state_val_14080 === (7)))
{var inst_14023 = (state_14079[(7)]);var inst_14028 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14023);var state_14079__$1 = state_14079;var statearr_14081_14127 = state_14079__$1;(statearr_14081_14127[(2)] = inst_14028);
(statearr_14081_14127[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14080 === (20)))
{var inst_14038 = (state_14079[(8)]);var state_14079__$1 = state_14079;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14079__$1,(23),out,inst_14038);
} else
{if((state_val_14080 === (1)))
{var inst_14013 = (state_14079[(9)]);var inst_14013__$1 = calc_state.call(null);var inst_14014 = cljs.core.seq_QMARK_.call(null,inst_14013__$1);var state_14079__$1 = (function (){var statearr_14082 = state_14079;(statearr_14082[(9)] = inst_14013__$1);
return statearr_14082;
})();if(inst_14014)
{var statearr_14083_14128 = state_14079__$1;(statearr_14083_14128[(1)] = (2));
} else
{var statearr_14084_14129 = state_14079__$1;(statearr_14084_14129[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14080 === (24)))
{var inst_14031 = (state_14079[(10)]);var inst_14023 = inst_14031;var state_14079__$1 = (function (){var statearr_14085 = state_14079;(statearr_14085[(7)] = inst_14023);
return statearr_14085;
})();var statearr_14086_14130 = state_14079__$1;(statearr_14086_14130[(2)] = null);
(statearr_14086_14130[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14080 === (4)))
{var inst_14013 = (state_14079[(9)]);var inst_14019 = (state_14079[(2)]);var inst_14020 = cljs.core.get.call(null,inst_14019,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_14021 = cljs.core.get.call(null,inst_14019,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_14022 = cljs.core.get.call(null,inst_14019,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_14023 = inst_14013;var state_14079__$1 = (function (){var statearr_14087 = state_14079;(statearr_14087[(11)] = inst_14021);
(statearr_14087[(12)] = inst_14022);
(statearr_14087[(7)] = inst_14023);
(statearr_14087[(13)] = inst_14020);
return statearr_14087;
})();var statearr_14088_14131 = state_14079__$1;(statearr_14088_14131[(2)] = null);
(statearr_14088_14131[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14080 === (15)))
{var state_14079__$1 = state_14079;var statearr_14089_14132 = state_14079__$1;(statearr_14089_14132[(2)] = null);
(statearr_14089_14132[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14080 === (21)))
{var inst_14031 = (state_14079[(10)]);var inst_14023 = inst_14031;var state_14079__$1 = (function (){var statearr_14090 = state_14079;(statearr_14090[(7)] = inst_14023);
return statearr_14090;
})();var statearr_14091_14133 = state_14079__$1;(statearr_14091_14133[(2)] = null);
(statearr_14091_14133[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14080 === (13)))
{var inst_14075 = (state_14079[(2)]);var state_14079__$1 = state_14079;var statearr_14092_14134 = state_14079__$1;(statearr_14092_14134[(2)] = inst_14075);
(statearr_14092_14134[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14080 === (22)))
{var inst_14073 = (state_14079[(2)]);var state_14079__$1 = state_14079;var statearr_14093_14135 = state_14079__$1;(statearr_14093_14135[(2)] = inst_14073);
(statearr_14093_14135[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14080 === (6)))
{var inst_14077 = (state_14079[(2)]);var state_14079__$1 = state_14079;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14079__$1,inst_14077);
} else
{if((state_val_14080 === (25)))
{var state_14079__$1 = state_14079;var statearr_14094_14136 = state_14079__$1;(statearr_14094_14136[(2)] = null);
(statearr_14094_14136[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14080 === (17)))
{var inst_14053 = (state_14079[(14)]);var state_14079__$1 = state_14079;var statearr_14095_14137 = state_14079__$1;(statearr_14095_14137[(2)] = inst_14053);
(statearr_14095_14137[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14080 === (3)))
{var inst_14013 = (state_14079[(9)]);var state_14079__$1 = state_14079;var statearr_14096_14138 = state_14079__$1;(statearr_14096_14138[(2)] = inst_14013);
(statearr_14096_14138[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14080 === (12)))
{var inst_14034 = (state_14079[(15)]);var inst_14039 = (state_14079[(16)]);var inst_14053 = (state_14079[(14)]);var inst_14053__$1 = inst_14034.call(null,inst_14039);var state_14079__$1 = (function (){var statearr_14097 = state_14079;(statearr_14097[(14)] = inst_14053__$1);
return statearr_14097;
})();if(cljs.core.truth_(inst_14053__$1))
{var statearr_14098_14139 = state_14079__$1;(statearr_14098_14139[(1)] = (17));
} else
{var statearr_14099_14140 = state_14079__$1;(statearr_14099_14140[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14080 === (2)))
{var inst_14013 = (state_14079[(9)]);var inst_14016 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14013);var state_14079__$1 = state_14079;var statearr_14100_14141 = state_14079__$1;(statearr_14100_14141[(2)] = inst_14016);
(statearr_14100_14141[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14080 === (23)))
{var inst_14064 = (state_14079[(2)]);var state_14079__$1 = state_14079;if(cljs.core.truth_(inst_14064))
{var statearr_14101_14142 = state_14079__$1;(statearr_14101_14142[(1)] = (24));
} else
{var statearr_14102_14143 = state_14079__$1;(statearr_14102_14143[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14080 === (19)))
{var inst_14061 = (state_14079[(2)]);var state_14079__$1 = state_14079;if(cljs.core.truth_(inst_14061))
{var statearr_14103_14144 = state_14079__$1;(statearr_14103_14144[(1)] = (20));
} else
{var statearr_14104_14145 = state_14079__$1;(statearr_14104_14145[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14080 === (11)))
{var inst_14038 = (state_14079[(8)]);var inst_14044 = (inst_14038 == null);var state_14079__$1 = state_14079;if(cljs.core.truth_(inst_14044))
{var statearr_14105_14146 = state_14079__$1;(statearr_14105_14146[(1)] = (14));
} else
{var statearr_14106_14147 = state_14079__$1;(statearr_14106_14147[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14080 === (9)))
{var inst_14031 = (state_14079[(10)]);var inst_14031__$1 = (state_14079[(2)]);var inst_14032 = cljs.core.get.call(null,inst_14031__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_14033 = cljs.core.get.call(null,inst_14031__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_14034 = cljs.core.get.call(null,inst_14031__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_14079__$1 = (function (){var statearr_14107 = state_14079;(statearr_14107[(10)] = inst_14031__$1);
(statearr_14107[(15)] = inst_14034);
(statearr_14107[(17)] = inst_14033);
return statearr_14107;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14079__$1,(10),inst_14032);
} else
{if((state_val_14080 === (5)))
{var inst_14023 = (state_14079[(7)]);var inst_14026 = cljs.core.seq_QMARK_.call(null,inst_14023);var state_14079__$1 = state_14079;if(inst_14026)
{var statearr_14108_14148 = state_14079__$1;(statearr_14108_14148[(1)] = (7));
} else
{var statearr_14109_14149 = state_14079__$1;(statearr_14109_14149[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14080 === (14)))
{var inst_14039 = (state_14079[(16)]);var inst_14046 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14039);var state_14079__$1 = state_14079;var statearr_14110_14150 = state_14079__$1;(statearr_14110_14150[(2)] = inst_14046);
(statearr_14110_14150[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14080 === (26)))
{var inst_14069 = (state_14079[(2)]);var state_14079__$1 = state_14079;var statearr_14111_14151 = state_14079__$1;(statearr_14111_14151[(2)] = inst_14069);
(statearr_14111_14151[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14080 === (16)))
{var inst_14049 = (state_14079[(2)]);var inst_14050 = calc_state.call(null);var inst_14023 = inst_14050;var state_14079__$1 = (function (){var statearr_14112 = state_14079;(statearr_14112[(7)] = inst_14023);
(statearr_14112[(18)] = inst_14049);
return statearr_14112;
})();var statearr_14113_14152 = state_14079__$1;(statearr_14113_14152[(2)] = null);
(statearr_14113_14152[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14080 === (10)))
{var inst_14038 = (state_14079[(8)]);var inst_14039 = (state_14079[(16)]);var inst_14037 = (state_14079[(2)]);var inst_14038__$1 = cljs.core.nth.call(null,inst_14037,(0),null);var inst_14039__$1 = cljs.core.nth.call(null,inst_14037,(1),null);var inst_14040 = (inst_14038__$1 == null);var inst_14041 = cljs.core._EQ_.call(null,inst_14039__$1,change);var inst_14042 = (inst_14040) || (inst_14041);var state_14079__$1 = (function (){var statearr_14114 = state_14079;(statearr_14114[(8)] = inst_14038__$1);
(statearr_14114[(16)] = inst_14039__$1);
return statearr_14114;
})();if(cljs.core.truth_(inst_14042))
{var statearr_14115_14153 = state_14079__$1;(statearr_14115_14153[(1)] = (11));
} else
{var statearr_14116_14154 = state_14079__$1;(statearr_14116_14154[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14080 === (18)))
{var inst_14034 = (state_14079[(15)]);var inst_14039 = (state_14079[(16)]);var inst_14033 = (state_14079[(17)]);var inst_14056 = cljs.core.empty_QMARK_.call(null,inst_14034);var inst_14057 = inst_14033.call(null,inst_14039);var inst_14058 = cljs.core.not.call(null,inst_14057);var inst_14059 = (inst_14056) && (inst_14058);var state_14079__$1 = state_14079;var statearr_14117_14155 = state_14079__$1;(statearr_14117_14155[(2)] = inst_14059);
(statearr_14117_14155[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14080 === (8)))
{var inst_14023 = (state_14079[(7)]);var state_14079__$1 = state_14079;var statearr_14118_14156 = state_14079__$1;(statearr_14118_14156[(2)] = inst_14023);
(statearr_14118_14156[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9784__auto___14126,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__9769__auto__,c__9784__auto___14126,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9770__auto__ = null;
var state_machine__9770__auto____0 = (function (){var statearr_14122 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14122[(0)] = state_machine__9770__auto__);
(statearr_14122[(1)] = (1));
return statearr_14122;
});
var state_machine__9770__auto____1 = (function (state_14079){while(true){
var ret_value__9771__auto__ = (function (){try{while(true){
var result__9772__auto__ = switch__9769__auto__.call(null,state_14079);if(cljs.core.keyword_identical_QMARK_.call(null,result__9772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9772__auto__;
}
break;
}
}catch (e14123){if((e14123 instanceof Object))
{var ex__9773__auto__ = e14123;var statearr_14124_14157 = state_14079;(statearr_14124_14157[(5)] = ex__9773__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14079);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14123;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14158 = state_14079;
state_14079 = G__14158;
continue;
}
} else
{return ret_value__9771__auto__;
}
break;
}
});
state_machine__9770__auto__ = function(state_14079){
switch(arguments.length){
case 0:
return state_machine__9770__auto____0.call(this);
case 1:
return state_machine__9770__auto____1.call(this,state_14079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9770__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9770__auto____0;
state_machine__9770__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9770__auto____1;
return state_machine__9770__auto__;
})()
;})(switch__9769__auto__,c__9784__auto___14126,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__9786__auto__ = (function (){var statearr_14125 = f__9785__auto__.call(null);(statearr_14125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9784__auto___14126);
return statearr_14125;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9786__auto__);
});})(c__9784__auto___14126,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj14160 = {};return obj14160;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3551__auto__ = p;if(and__3551__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3551__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4190__auto__ = (((p == null))?null:p);return (function (){var or__3563__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4190__auto__)]);if(or__3563__auto__)
{return or__3563__auto__;
} else
{var or__3563__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3563__auto____$1)
{return or__3563__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3551__auto__ = p;if(and__3551__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3551__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4190__auto__ = (((p == null))?null:p);return (function (){var or__3563__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4190__auto__)]);if(or__3563__auto__)
{return or__3563__auto__;
} else
{var or__3563__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3563__auto____$1)
{return or__3563__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3551__auto__ = p;if(and__3551__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3551__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4190__auto__ = (((p == null))?null:p);return (function (){var or__3563__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4190__auto__)]);if(or__3563__auto__)
{return or__3563__auto__;
} else
{var or__3563__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3563__auto____$1)
{return or__3563__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3551__auto__ = p;if(and__3551__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3551__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4190__auto__ = (((p == null))?null:p);return (function (){var or__3563__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4190__auto__)]);if(or__3563__auto__)
{return or__3563__auto__;
} else
{var or__3563__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3563__auto____$1)
{return or__3563__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3563__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3563__auto__))
{return or__3563__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3563__auto__,mults){
return (function (p1__14161_SHARP_){if(cljs.core.truth_(p1__14161_SHARP_.call(null,topic)))
{return p1__14161_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14161_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3563__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14284 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14284 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14285){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14285 = meta14285;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14284.cljs$lang$type = true;
cljs.core.async.t14284.cljs$lang$ctorStr = "cljs.core.async/t14284";
cljs.core.async.t14284.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4130__auto__,writer__4131__auto__,opt__4132__auto__){return cljs.core._write.call(null,writer__4131__auto__,"cljs.core.async/t14284");
});})(mults,ensure_mult))
;
cljs.core.async.t14284.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14284.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14284.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14284.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14284.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14284.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14284.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14284.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14286){var self__ = this;
var _14286__$1 = this;return self__.meta14285;
});})(mults,ensure_mult))
;
cljs.core.async.t14284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14286,meta14285__$1){var self__ = this;
var _14286__$1 = this;return (new cljs.core.async.t14284(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14285__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14284 = ((function (mults,ensure_mult){
return (function __GT_t14284(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14285){return (new cljs.core.async.t14284(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14285));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14284(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__9784__auto___14406 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9784__auto___14406,mults,ensure_mult,p){
return (function (){var f__9785__auto__ = (function (){var switch__9769__auto__ = ((function (c__9784__auto___14406,mults,ensure_mult,p){
return (function (state_14358){var state_val_14359 = (state_14358[(1)]);if((state_val_14359 === (7)))
{var inst_14354 = (state_14358[(2)]);var state_14358__$1 = state_14358;var statearr_14360_14407 = state_14358__$1;(statearr_14360_14407[(2)] = inst_14354);
(statearr_14360_14407[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14359 === (20)))
{var state_14358__$1 = state_14358;var statearr_14361_14408 = state_14358__$1;(statearr_14361_14408[(2)] = null);
(statearr_14361_14408[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14359 === (1)))
{var state_14358__$1 = state_14358;var statearr_14362_14409 = state_14358__$1;(statearr_14362_14409[(2)] = null);
(statearr_14362_14409[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14359 === (24)))
{var inst_14337 = (state_14358[(7)]);var inst_14346 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14337);var state_14358__$1 = state_14358;var statearr_14363_14410 = state_14358__$1;(statearr_14363_14410[(2)] = inst_14346);
(statearr_14363_14410[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14359 === (4)))
{var inst_14289 = (state_14358[(8)]);var inst_14289__$1 = (state_14358[(2)]);var inst_14290 = (inst_14289__$1 == null);var state_14358__$1 = (function (){var statearr_14364 = state_14358;(statearr_14364[(8)] = inst_14289__$1);
return statearr_14364;
})();if(cljs.core.truth_(inst_14290))
{var statearr_14365_14411 = state_14358__$1;(statearr_14365_14411[(1)] = (5));
} else
{var statearr_14366_14412 = state_14358__$1;(statearr_14366_14412[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14359 === (15)))
{var inst_14331 = (state_14358[(2)]);var state_14358__$1 = state_14358;var statearr_14367_14413 = state_14358__$1;(statearr_14367_14413[(2)] = inst_14331);
(statearr_14367_14413[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14359 === (21)))
{var inst_14351 = (state_14358[(2)]);var state_14358__$1 = (function (){var statearr_14368 = state_14358;(statearr_14368[(9)] = inst_14351);
return statearr_14368;
})();var statearr_14369_14414 = state_14358__$1;(statearr_14369_14414[(2)] = null);
(statearr_14369_14414[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14359 === (13)))
{var inst_14313 = (state_14358[(10)]);var inst_14315 = cljs.core.chunked_seq_QMARK_.call(null,inst_14313);var state_14358__$1 = state_14358;if(inst_14315)
{var statearr_14370_14415 = state_14358__$1;(statearr_14370_14415[(1)] = (16));
} else
{var statearr_14371_14416 = state_14358__$1;(statearr_14371_14416[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14359 === (22)))
{var inst_14343 = (state_14358[(2)]);var state_14358__$1 = state_14358;if(cljs.core.truth_(inst_14343))
{var statearr_14372_14417 = state_14358__$1;(statearr_14372_14417[(1)] = (23));
} else
{var statearr_14373_14418 = state_14358__$1;(statearr_14373_14418[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14359 === (6)))
{var inst_14289 = (state_14358[(8)]);var inst_14337 = (state_14358[(7)]);var inst_14339 = (state_14358[(11)]);var inst_14337__$1 = topic_fn.call(null,inst_14289);var inst_14338 = cljs.core.deref.call(null,mults);var inst_14339__$1 = cljs.core.get.call(null,inst_14338,inst_14337__$1);var state_14358__$1 = (function (){var statearr_14374 = state_14358;(statearr_14374[(7)] = inst_14337__$1);
(statearr_14374[(11)] = inst_14339__$1);
return statearr_14374;
})();if(cljs.core.truth_(inst_14339__$1))
{var statearr_14375_14419 = state_14358__$1;(statearr_14375_14419[(1)] = (19));
} else
{var statearr_14376_14420 = state_14358__$1;(statearr_14376_14420[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14359 === (25)))
{var inst_14348 = (state_14358[(2)]);var state_14358__$1 = state_14358;var statearr_14377_14421 = state_14358__$1;(statearr_14377_14421[(2)] = inst_14348);
(statearr_14377_14421[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14359 === (17)))
{var inst_14313 = (state_14358[(10)]);var inst_14322 = cljs.core.first.call(null,inst_14313);var inst_14323 = cljs.core.async.muxch_STAR_.call(null,inst_14322);var inst_14324 = cljs.core.async.close_BANG_.call(null,inst_14323);var inst_14325 = cljs.core.next.call(null,inst_14313);var inst_14299 = inst_14325;var inst_14300 = null;var inst_14301 = (0);var inst_14302 = (0);var state_14358__$1 = (function (){var statearr_14378 = state_14358;(statearr_14378[(12)] = inst_14301);
(statearr_14378[(13)] = inst_14324);
(statearr_14378[(14)] = inst_14299);
(statearr_14378[(15)] = inst_14302);
(statearr_14378[(16)] = inst_14300);
return statearr_14378;
})();var statearr_14379_14422 = state_14358__$1;(statearr_14379_14422[(2)] = null);
(statearr_14379_14422[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14359 === (3)))
{var inst_14356 = (state_14358[(2)]);var state_14358__$1 = state_14358;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14358__$1,inst_14356);
} else
{if((state_val_14359 === (12)))
{var inst_14333 = (state_14358[(2)]);var state_14358__$1 = state_14358;var statearr_14380_14423 = state_14358__$1;(statearr_14380_14423[(2)] = inst_14333);
(statearr_14380_14423[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14359 === (2)))
{var state_14358__$1 = state_14358;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14358__$1,(4),ch);
} else
{if((state_val_14359 === (23)))
{var state_14358__$1 = state_14358;var statearr_14381_14424 = state_14358__$1;(statearr_14381_14424[(2)] = null);
(statearr_14381_14424[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14359 === (19)))
{var inst_14289 = (state_14358[(8)]);var inst_14339 = (state_14358[(11)]);var inst_14341 = cljs.core.async.muxch_STAR_.call(null,inst_14339);var state_14358__$1 = state_14358;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14358__$1,(22),inst_14341,inst_14289);
} else
{if((state_val_14359 === (11)))
{var inst_14299 = (state_14358[(14)]);var inst_14313 = (state_14358[(10)]);var inst_14313__$1 = cljs.core.seq.call(null,inst_14299);var state_14358__$1 = (function (){var statearr_14382 = state_14358;(statearr_14382[(10)] = inst_14313__$1);
return statearr_14382;
})();if(inst_14313__$1)
{var statearr_14383_14425 = state_14358__$1;(statearr_14383_14425[(1)] = (13));
} else
{var statearr_14384_14426 = state_14358__$1;(statearr_14384_14426[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14359 === (9)))
{var inst_14335 = (state_14358[(2)]);var state_14358__$1 = state_14358;var statearr_14385_14427 = state_14358__$1;(statearr_14385_14427[(2)] = inst_14335);
(statearr_14385_14427[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14359 === (5)))
{var inst_14296 = cljs.core.deref.call(null,mults);var inst_14297 = cljs.core.vals.call(null,inst_14296);var inst_14298 = cljs.core.seq.call(null,inst_14297);var inst_14299 = inst_14298;var inst_14300 = null;var inst_14301 = (0);var inst_14302 = (0);var state_14358__$1 = (function (){var statearr_14386 = state_14358;(statearr_14386[(12)] = inst_14301);
(statearr_14386[(14)] = inst_14299);
(statearr_14386[(15)] = inst_14302);
(statearr_14386[(16)] = inst_14300);
return statearr_14386;
})();var statearr_14387_14428 = state_14358__$1;(statearr_14387_14428[(2)] = null);
(statearr_14387_14428[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14359 === (14)))
{var state_14358__$1 = state_14358;var statearr_14391_14429 = state_14358__$1;(statearr_14391_14429[(2)] = null);
(statearr_14391_14429[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14359 === (16)))
{var inst_14313 = (state_14358[(10)]);var inst_14317 = cljs.core.chunk_first.call(null,inst_14313);var inst_14318 = cljs.core.chunk_rest.call(null,inst_14313);var inst_14319 = cljs.core.count.call(null,inst_14317);var inst_14299 = inst_14318;var inst_14300 = inst_14317;var inst_14301 = inst_14319;var inst_14302 = (0);var state_14358__$1 = (function (){var statearr_14392 = state_14358;(statearr_14392[(12)] = inst_14301);
(statearr_14392[(14)] = inst_14299);
(statearr_14392[(15)] = inst_14302);
(statearr_14392[(16)] = inst_14300);
return statearr_14392;
})();var statearr_14393_14430 = state_14358__$1;(statearr_14393_14430[(2)] = null);
(statearr_14393_14430[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14359 === (10)))
{var inst_14301 = (state_14358[(12)]);var inst_14299 = (state_14358[(14)]);var inst_14302 = (state_14358[(15)]);var inst_14300 = (state_14358[(16)]);var inst_14307 = cljs.core._nth.call(null,inst_14300,inst_14302);var inst_14308 = cljs.core.async.muxch_STAR_.call(null,inst_14307);var inst_14309 = cljs.core.async.close_BANG_.call(null,inst_14308);var inst_14310 = (inst_14302 + (1));var tmp14388 = inst_14301;var tmp14389 = inst_14299;var tmp14390 = inst_14300;var inst_14299__$1 = tmp14389;var inst_14300__$1 = tmp14390;var inst_14301__$1 = tmp14388;var inst_14302__$1 = inst_14310;var state_14358__$1 = (function (){var statearr_14394 = state_14358;(statearr_14394[(12)] = inst_14301__$1);
(statearr_14394[(14)] = inst_14299__$1);
(statearr_14394[(15)] = inst_14302__$1);
(statearr_14394[(16)] = inst_14300__$1);
(statearr_14394[(17)] = inst_14309);
return statearr_14394;
})();var statearr_14395_14431 = state_14358__$1;(statearr_14395_14431[(2)] = null);
(statearr_14395_14431[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14359 === (18)))
{var inst_14328 = (state_14358[(2)]);var state_14358__$1 = state_14358;var statearr_14396_14432 = state_14358__$1;(statearr_14396_14432[(2)] = inst_14328);
(statearr_14396_14432[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14359 === (8)))
{var inst_14301 = (state_14358[(12)]);var inst_14302 = (state_14358[(15)]);var inst_14304 = (inst_14302 < inst_14301);var inst_14305 = inst_14304;var state_14358__$1 = state_14358;if(cljs.core.truth_(inst_14305))
{var statearr_14397_14433 = state_14358__$1;(statearr_14397_14433[(1)] = (10));
} else
{var statearr_14398_14434 = state_14358__$1;(statearr_14398_14434[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9784__auto___14406,mults,ensure_mult,p))
;return ((function (switch__9769__auto__,c__9784__auto___14406,mults,ensure_mult,p){
return (function() {
var state_machine__9770__auto__ = null;
var state_machine__9770__auto____0 = (function (){var statearr_14402 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14402[(0)] = state_machine__9770__auto__);
(statearr_14402[(1)] = (1));
return statearr_14402;
});
var state_machine__9770__auto____1 = (function (state_14358){while(true){
var ret_value__9771__auto__ = (function (){try{while(true){
var result__9772__auto__ = switch__9769__auto__.call(null,state_14358);if(cljs.core.keyword_identical_QMARK_.call(null,result__9772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9772__auto__;
}
break;
}
}catch (e14403){if((e14403 instanceof Object))
{var ex__9773__auto__ = e14403;var statearr_14404_14435 = state_14358;(statearr_14404_14435[(5)] = ex__9773__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14358);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14403;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14436 = state_14358;
state_14358 = G__14436;
continue;
}
} else
{return ret_value__9771__auto__;
}
break;
}
});
state_machine__9770__auto__ = function(state_14358){
switch(arguments.length){
case 0:
return state_machine__9770__auto____0.call(this);
case 1:
return state_machine__9770__auto____1.call(this,state_14358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9770__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9770__auto____0;
state_machine__9770__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9770__auto____1;
return state_machine__9770__auto__;
})()
;})(switch__9769__auto__,c__9784__auto___14406,mults,ensure_mult,p))
})();var state__9786__auto__ = (function (){var statearr_14405 = f__9785__auto__.call(null);(statearr_14405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9784__auto___14406);
return statearr_14405;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9786__auto__);
});})(c__9784__auto___14406,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__9784__auto___14573 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9784__auto___14573,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__9785__auto__ = (function (){var switch__9769__auto__ = ((function (c__9784__auto___14573,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14543){var state_val_14544 = (state_14543[(1)]);if((state_val_14544 === (7)))
{var state_14543__$1 = state_14543;var statearr_14545_14574 = state_14543__$1;(statearr_14545_14574[(2)] = null);
(statearr_14545_14574[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14544 === (1)))
{var state_14543__$1 = state_14543;var statearr_14546_14575 = state_14543__$1;(statearr_14546_14575[(2)] = null);
(statearr_14546_14575[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14544 === (4)))
{var inst_14507 = (state_14543[(7)]);var inst_14509 = (inst_14507 < cnt);var state_14543__$1 = state_14543;if(cljs.core.truth_(inst_14509))
{var statearr_14547_14576 = state_14543__$1;(statearr_14547_14576[(1)] = (6));
} else
{var statearr_14548_14577 = state_14543__$1;(statearr_14548_14577[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14544 === (15)))
{var inst_14539 = (state_14543[(2)]);var state_14543__$1 = state_14543;var statearr_14549_14578 = state_14543__$1;(statearr_14549_14578[(2)] = inst_14539);
(statearr_14549_14578[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14544 === (13)))
{var inst_14532 = cljs.core.async.close_BANG_.call(null,out);var state_14543__$1 = state_14543;var statearr_14550_14579 = state_14543__$1;(statearr_14550_14579[(2)] = inst_14532);
(statearr_14550_14579[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14544 === (6)))
{var state_14543__$1 = state_14543;var statearr_14551_14580 = state_14543__$1;(statearr_14551_14580[(2)] = null);
(statearr_14551_14580[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14544 === (3)))
{var inst_14541 = (state_14543[(2)]);var state_14543__$1 = state_14543;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14543__$1,inst_14541);
} else
{if((state_val_14544 === (12)))
{var inst_14529 = (state_14543[(8)]);var inst_14529__$1 = (state_14543[(2)]);var inst_14530 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14529__$1);var state_14543__$1 = (function (){var statearr_14552 = state_14543;(statearr_14552[(8)] = inst_14529__$1);
return statearr_14552;
})();if(cljs.core.truth_(inst_14530))
{var statearr_14553_14581 = state_14543__$1;(statearr_14553_14581[(1)] = (13));
} else
{var statearr_14554_14582 = state_14543__$1;(statearr_14554_14582[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14544 === (2)))
{var inst_14506 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14507 = (0);var state_14543__$1 = (function (){var statearr_14555 = state_14543;(statearr_14555[(9)] = inst_14506);
(statearr_14555[(7)] = inst_14507);
return statearr_14555;
})();var statearr_14556_14583 = state_14543__$1;(statearr_14556_14583[(2)] = null);
(statearr_14556_14583[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14544 === (11)))
{var inst_14507 = (state_14543[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14543,(10),Object,null,(9));var inst_14516 = chs__$1.call(null,inst_14507);var inst_14517 = done.call(null,inst_14507);var inst_14518 = cljs.core.async.take_BANG_.call(null,inst_14516,inst_14517);var state_14543__$1 = state_14543;var statearr_14557_14584 = state_14543__$1;(statearr_14557_14584[(2)] = inst_14518);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14543__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14544 === (9)))
{var inst_14507 = (state_14543[(7)]);var inst_14520 = (state_14543[(2)]);var inst_14521 = (inst_14507 + (1));var inst_14507__$1 = inst_14521;var state_14543__$1 = (function (){var statearr_14558 = state_14543;(statearr_14558[(7)] = inst_14507__$1);
(statearr_14558[(10)] = inst_14520);
return statearr_14558;
})();var statearr_14559_14585 = state_14543__$1;(statearr_14559_14585[(2)] = null);
(statearr_14559_14585[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14544 === (5)))
{var inst_14527 = (state_14543[(2)]);var state_14543__$1 = (function (){var statearr_14560 = state_14543;(statearr_14560[(11)] = inst_14527);
return statearr_14560;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14543__$1,(12),dchan);
} else
{if((state_val_14544 === (14)))
{var inst_14529 = (state_14543[(8)]);var inst_14534 = cljs.core.apply.call(null,f,inst_14529);var state_14543__$1 = state_14543;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14543__$1,(16),out,inst_14534);
} else
{if((state_val_14544 === (16)))
{var inst_14536 = (state_14543[(2)]);var state_14543__$1 = (function (){var statearr_14561 = state_14543;(statearr_14561[(12)] = inst_14536);
return statearr_14561;
})();var statearr_14562_14586 = state_14543__$1;(statearr_14562_14586[(2)] = null);
(statearr_14562_14586[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14544 === (10)))
{var inst_14511 = (state_14543[(2)]);var inst_14512 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14543__$1 = (function (){var statearr_14563 = state_14543;(statearr_14563[(13)] = inst_14511);
return statearr_14563;
})();var statearr_14564_14587 = state_14543__$1;(statearr_14564_14587[(2)] = inst_14512);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14543__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14544 === (8)))
{var inst_14525 = (state_14543[(2)]);var state_14543__$1 = state_14543;var statearr_14565_14588 = state_14543__$1;(statearr_14565_14588[(2)] = inst_14525);
(statearr_14565_14588[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9784__auto___14573,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__9769__auto__,c__9784__auto___14573,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9770__auto__ = null;
var state_machine__9770__auto____0 = (function (){var statearr_14569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14569[(0)] = state_machine__9770__auto__);
(statearr_14569[(1)] = (1));
return statearr_14569;
});
var state_machine__9770__auto____1 = (function (state_14543){while(true){
var ret_value__9771__auto__ = (function (){try{while(true){
var result__9772__auto__ = switch__9769__auto__.call(null,state_14543);if(cljs.core.keyword_identical_QMARK_.call(null,result__9772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9772__auto__;
}
break;
}
}catch (e14570){if((e14570 instanceof Object))
{var ex__9773__auto__ = e14570;var statearr_14571_14589 = state_14543;(statearr_14571_14589[(5)] = ex__9773__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14543);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14570;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14590 = state_14543;
state_14543 = G__14590;
continue;
}
} else
{return ret_value__9771__auto__;
}
break;
}
});
state_machine__9770__auto__ = function(state_14543){
switch(arguments.length){
case 0:
return state_machine__9770__auto____0.call(this);
case 1:
return state_machine__9770__auto____1.call(this,state_14543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9770__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9770__auto____0;
state_machine__9770__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9770__auto____1;
return state_machine__9770__auto__;
})()
;})(switch__9769__auto__,c__9784__auto___14573,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__9786__auto__ = (function (){var statearr_14572 = f__9785__auto__.call(null);(statearr_14572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9784__auto___14573);
return statearr_14572;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9786__auto__);
});})(c__9784__auto___14573,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9784__auto___14698 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9784__auto___14698,out){
return (function (){var f__9785__auto__ = (function (){var switch__9769__auto__ = ((function (c__9784__auto___14698,out){
return (function (state_14674){var state_val_14675 = (state_14674[(1)]);if((state_val_14675 === (7)))
{var inst_14653 = (state_14674[(7)]);var inst_14654 = (state_14674[(8)]);var inst_14653__$1 = (state_14674[(2)]);var inst_14654__$1 = cljs.core.nth.call(null,inst_14653__$1,(0),null);var inst_14655 = cljs.core.nth.call(null,inst_14653__$1,(1),null);var inst_14656 = (inst_14654__$1 == null);var state_14674__$1 = (function (){var statearr_14676 = state_14674;(statearr_14676[(7)] = inst_14653__$1);
(statearr_14676[(8)] = inst_14654__$1);
(statearr_14676[(9)] = inst_14655);
return statearr_14676;
})();if(cljs.core.truth_(inst_14656))
{var statearr_14677_14699 = state_14674__$1;(statearr_14677_14699[(1)] = (8));
} else
{var statearr_14678_14700 = state_14674__$1;(statearr_14678_14700[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14675 === (1)))
{var inst_14645 = cljs.core.vec.call(null,chs);var inst_14646 = inst_14645;var state_14674__$1 = (function (){var statearr_14679 = state_14674;(statearr_14679[(10)] = inst_14646);
return statearr_14679;
})();var statearr_14680_14701 = state_14674__$1;(statearr_14680_14701[(2)] = null);
(statearr_14680_14701[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14675 === (4)))
{var inst_14646 = (state_14674[(10)]);var state_14674__$1 = state_14674;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14674__$1,(7),inst_14646);
} else
{if((state_val_14675 === (6)))
{var inst_14670 = (state_14674[(2)]);var state_14674__$1 = state_14674;var statearr_14681_14702 = state_14674__$1;(statearr_14681_14702[(2)] = inst_14670);
(statearr_14681_14702[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14675 === (3)))
{var inst_14672 = (state_14674[(2)]);var state_14674__$1 = state_14674;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14674__$1,inst_14672);
} else
{if((state_val_14675 === (2)))
{var inst_14646 = (state_14674[(10)]);var inst_14648 = cljs.core.count.call(null,inst_14646);var inst_14649 = (inst_14648 > (0));var state_14674__$1 = state_14674;if(cljs.core.truth_(inst_14649))
{var statearr_14683_14703 = state_14674__$1;(statearr_14683_14703[(1)] = (4));
} else
{var statearr_14684_14704 = state_14674__$1;(statearr_14684_14704[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14675 === (11)))
{var inst_14646 = (state_14674[(10)]);var inst_14663 = (state_14674[(2)]);var tmp14682 = inst_14646;var inst_14646__$1 = tmp14682;var state_14674__$1 = (function (){var statearr_14685 = state_14674;(statearr_14685[(10)] = inst_14646__$1);
(statearr_14685[(11)] = inst_14663);
return statearr_14685;
})();var statearr_14686_14705 = state_14674__$1;(statearr_14686_14705[(2)] = null);
(statearr_14686_14705[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14675 === (9)))
{var inst_14654 = (state_14674[(8)]);var state_14674__$1 = state_14674;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14674__$1,(11),out,inst_14654);
} else
{if((state_val_14675 === (5)))
{var inst_14668 = cljs.core.async.close_BANG_.call(null,out);var state_14674__$1 = state_14674;var statearr_14687_14706 = state_14674__$1;(statearr_14687_14706[(2)] = inst_14668);
(statearr_14687_14706[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14675 === (10)))
{var inst_14666 = (state_14674[(2)]);var state_14674__$1 = state_14674;var statearr_14688_14707 = state_14674__$1;(statearr_14688_14707[(2)] = inst_14666);
(statearr_14688_14707[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14675 === (8)))
{var inst_14653 = (state_14674[(7)]);var inst_14646 = (state_14674[(10)]);var inst_14654 = (state_14674[(8)]);var inst_14655 = (state_14674[(9)]);var inst_14658 = (function (){var c = inst_14655;var v = inst_14654;var vec__14651 = inst_14653;var cs = inst_14646;return ((function (c,v,vec__14651,cs,inst_14653,inst_14646,inst_14654,inst_14655,state_val_14675,c__9784__auto___14698,out){
return (function (p1__14591_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14591_SHARP_);
});
;})(c,v,vec__14651,cs,inst_14653,inst_14646,inst_14654,inst_14655,state_val_14675,c__9784__auto___14698,out))
})();var inst_14659 = cljs.core.filterv.call(null,inst_14658,inst_14646);var inst_14646__$1 = inst_14659;var state_14674__$1 = (function (){var statearr_14689 = state_14674;(statearr_14689[(10)] = inst_14646__$1);
return statearr_14689;
})();var statearr_14690_14708 = state_14674__$1;(statearr_14690_14708[(2)] = null);
(statearr_14690_14708[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__9784__auto___14698,out))
;return ((function (switch__9769__auto__,c__9784__auto___14698,out){
return (function() {
var state_machine__9770__auto__ = null;
var state_machine__9770__auto____0 = (function (){var statearr_14694 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14694[(0)] = state_machine__9770__auto__);
(statearr_14694[(1)] = (1));
return statearr_14694;
});
var state_machine__9770__auto____1 = (function (state_14674){while(true){
var ret_value__9771__auto__ = (function (){try{while(true){
var result__9772__auto__ = switch__9769__auto__.call(null,state_14674);if(cljs.core.keyword_identical_QMARK_.call(null,result__9772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9772__auto__;
}
break;
}
}catch (e14695){if((e14695 instanceof Object))
{var ex__9773__auto__ = e14695;var statearr_14696_14709 = state_14674;(statearr_14696_14709[(5)] = ex__9773__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14674);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14695;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14710 = state_14674;
state_14674 = G__14710;
continue;
}
} else
{return ret_value__9771__auto__;
}
break;
}
});
state_machine__9770__auto__ = function(state_14674){
switch(arguments.length){
case 0:
return state_machine__9770__auto____0.call(this);
case 1:
return state_machine__9770__auto____1.call(this,state_14674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9770__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9770__auto____0;
state_machine__9770__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9770__auto____1;
return state_machine__9770__auto__;
})()
;})(switch__9769__auto__,c__9784__auto___14698,out))
})();var state__9786__auto__ = (function (){var statearr_14697 = f__9785__auto__.call(null);(statearr_14697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9784__auto___14698);
return statearr_14697;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9786__auto__);
});})(c__9784__auto___14698,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9784__auto___14803 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9784__auto___14803,out){
return (function (){var f__9785__auto__ = (function (){var switch__9769__auto__ = ((function (c__9784__auto___14803,out){
return (function (state_14780){var state_val_14781 = (state_14780[(1)]);if((state_val_14781 === (7)))
{var inst_14762 = (state_14780[(7)]);var inst_14762__$1 = (state_14780[(2)]);var inst_14763 = (inst_14762__$1 == null);var inst_14764 = cljs.core.not.call(null,inst_14763);var state_14780__$1 = (function (){var statearr_14782 = state_14780;(statearr_14782[(7)] = inst_14762__$1);
return statearr_14782;
})();if(inst_14764)
{var statearr_14783_14804 = state_14780__$1;(statearr_14783_14804[(1)] = (8));
} else
{var statearr_14784_14805 = state_14780__$1;(statearr_14784_14805[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14781 === (1)))
{var inst_14757 = (0);var state_14780__$1 = (function (){var statearr_14785 = state_14780;(statearr_14785[(8)] = inst_14757);
return statearr_14785;
})();var statearr_14786_14806 = state_14780__$1;(statearr_14786_14806[(2)] = null);
(statearr_14786_14806[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14781 === (4)))
{var state_14780__$1 = state_14780;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14780__$1,(7),ch);
} else
{if((state_val_14781 === (6)))
{var inst_14775 = (state_14780[(2)]);var state_14780__$1 = state_14780;var statearr_14787_14807 = state_14780__$1;(statearr_14787_14807[(2)] = inst_14775);
(statearr_14787_14807[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14781 === (3)))
{var inst_14777 = (state_14780[(2)]);var inst_14778 = cljs.core.async.close_BANG_.call(null,out);var state_14780__$1 = (function (){var statearr_14788 = state_14780;(statearr_14788[(9)] = inst_14777);
return statearr_14788;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14780__$1,inst_14778);
} else
{if((state_val_14781 === (2)))
{var inst_14757 = (state_14780[(8)]);var inst_14759 = (inst_14757 < n);var state_14780__$1 = state_14780;if(cljs.core.truth_(inst_14759))
{var statearr_14789_14808 = state_14780__$1;(statearr_14789_14808[(1)] = (4));
} else
{var statearr_14790_14809 = state_14780__$1;(statearr_14790_14809[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14781 === (11)))
{var inst_14757 = (state_14780[(8)]);var inst_14767 = (state_14780[(2)]);var inst_14768 = (inst_14757 + (1));var inst_14757__$1 = inst_14768;var state_14780__$1 = (function (){var statearr_14791 = state_14780;(statearr_14791[(10)] = inst_14767);
(statearr_14791[(8)] = inst_14757__$1);
return statearr_14791;
})();var statearr_14792_14810 = state_14780__$1;(statearr_14792_14810[(2)] = null);
(statearr_14792_14810[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14781 === (9)))
{var state_14780__$1 = state_14780;var statearr_14793_14811 = state_14780__$1;(statearr_14793_14811[(2)] = null);
(statearr_14793_14811[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14781 === (5)))
{var state_14780__$1 = state_14780;var statearr_14794_14812 = state_14780__$1;(statearr_14794_14812[(2)] = null);
(statearr_14794_14812[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14781 === (10)))
{var inst_14772 = (state_14780[(2)]);var state_14780__$1 = state_14780;var statearr_14795_14813 = state_14780__$1;(statearr_14795_14813[(2)] = inst_14772);
(statearr_14795_14813[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14781 === (8)))
{var inst_14762 = (state_14780[(7)]);var state_14780__$1 = state_14780;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14780__$1,(11),out,inst_14762);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__9784__auto___14803,out))
;return ((function (switch__9769__auto__,c__9784__auto___14803,out){
return (function() {
var state_machine__9770__auto__ = null;
var state_machine__9770__auto____0 = (function (){var statearr_14799 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14799[(0)] = state_machine__9770__auto__);
(statearr_14799[(1)] = (1));
return statearr_14799;
});
var state_machine__9770__auto____1 = (function (state_14780){while(true){
var ret_value__9771__auto__ = (function (){try{while(true){
var result__9772__auto__ = switch__9769__auto__.call(null,state_14780);if(cljs.core.keyword_identical_QMARK_.call(null,result__9772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9772__auto__;
}
break;
}
}catch (e14800){if((e14800 instanceof Object))
{var ex__9773__auto__ = e14800;var statearr_14801_14814 = state_14780;(statearr_14801_14814[(5)] = ex__9773__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14780);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14800;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14815 = state_14780;
state_14780 = G__14815;
continue;
}
} else
{return ret_value__9771__auto__;
}
break;
}
});
state_machine__9770__auto__ = function(state_14780){
switch(arguments.length){
case 0:
return state_machine__9770__auto____0.call(this);
case 1:
return state_machine__9770__auto____1.call(this,state_14780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9770__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9770__auto____0;
state_machine__9770__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9770__auto____1;
return state_machine__9770__auto__;
})()
;})(switch__9769__auto__,c__9784__auto___14803,out))
})();var state__9786__auto__ = (function (){var statearr_14802 = f__9785__auto__.call(null);(statearr_14802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9784__auto___14803);
return statearr_14802;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9786__auto__);
});})(c__9784__auto___14803,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9784__auto___14912 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9784__auto___14912,out){
return (function (){var f__9785__auto__ = (function (){var switch__9769__auto__ = ((function (c__9784__auto___14912,out){
return (function (state_14887){var state_val_14888 = (state_14887[(1)]);if((state_val_14888 === (7)))
{var inst_14882 = (state_14887[(2)]);var state_14887__$1 = state_14887;var statearr_14889_14913 = state_14887__$1;(statearr_14889_14913[(2)] = inst_14882);
(statearr_14889_14913[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14888 === (1)))
{var inst_14864 = null;var state_14887__$1 = (function (){var statearr_14890 = state_14887;(statearr_14890[(7)] = inst_14864);
return statearr_14890;
})();var statearr_14891_14914 = state_14887__$1;(statearr_14891_14914[(2)] = null);
(statearr_14891_14914[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14888 === (4)))
{var inst_14867 = (state_14887[(8)]);var inst_14867__$1 = (state_14887[(2)]);var inst_14868 = (inst_14867__$1 == null);var inst_14869 = cljs.core.not.call(null,inst_14868);var state_14887__$1 = (function (){var statearr_14892 = state_14887;(statearr_14892[(8)] = inst_14867__$1);
return statearr_14892;
})();if(inst_14869)
{var statearr_14893_14915 = state_14887__$1;(statearr_14893_14915[(1)] = (5));
} else
{var statearr_14894_14916 = state_14887__$1;(statearr_14894_14916[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14888 === (6)))
{var state_14887__$1 = state_14887;var statearr_14895_14917 = state_14887__$1;(statearr_14895_14917[(2)] = null);
(statearr_14895_14917[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14888 === (3)))
{var inst_14884 = (state_14887[(2)]);var inst_14885 = cljs.core.async.close_BANG_.call(null,out);var state_14887__$1 = (function (){var statearr_14896 = state_14887;(statearr_14896[(9)] = inst_14884);
return statearr_14896;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14887__$1,inst_14885);
} else
{if((state_val_14888 === (2)))
{var state_14887__$1 = state_14887;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14887__$1,(4),ch);
} else
{if((state_val_14888 === (11)))
{var inst_14867 = (state_14887[(8)]);var inst_14876 = (state_14887[(2)]);var inst_14864 = inst_14867;var state_14887__$1 = (function (){var statearr_14897 = state_14887;(statearr_14897[(7)] = inst_14864);
(statearr_14897[(10)] = inst_14876);
return statearr_14897;
})();var statearr_14898_14918 = state_14887__$1;(statearr_14898_14918[(2)] = null);
(statearr_14898_14918[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14888 === (9)))
{var inst_14867 = (state_14887[(8)]);var state_14887__$1 = state_14887;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14887__$1,(11),out,inst_14867);
} else
{if((state_val_14888 === (5)))
{var inst_14867 = (state_14887[(8)]);var inst_14864 = (state_14887[(7)]);var inst_14871 = cljs.core._EQ_.call(null,inst_14867,inst_14864);var state_14887__$1 = state_14887;if(inst_14871)
{var statearr_14900_14919 = state_14887__$1;(statearr_14900_14919[(1)] = (8));
} else
{var statearr_14901_14920 = state_14887__$1;(statearr_14901_14920[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14888 === (10)))
{var inst_14879 = (state_14887[(2)]);var state_14887__$1 = state_14887;var statearr_14902_14921 = state_14887__$1;(statearr_14902_14921[(2)] = inst_14879);
(statearr_14902_14921[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14888 === (8)))
{var inst_14864 = (state_14887[(7)]);var tmp14899 = inst_14864;var inst_14864__$1 = tmp14899;var state_14887__$1 = (function (){var statearr_14903 = state_14887;(statearr_14903[(7)] = inst_14864__$1);
return statearr_14903;
})();var statearr_14904_14922 = state_14887__$1;(statearr_14904_14922[(2)] = null);
(statearr_14904_14922[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__9784__auto___14912,out))
;return ((function (switch__9769__auto__,c__9784__auto___14912,out){
return (function() {
var state_machine__9770__auto__ = null;
var state_machine__9770__auto____0 = (function (){var statearr_14908 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14908[(0)] = state_machine__9770__auto__);
(statearr_14908[(1)] = (1));
return statearr_14908;
});
var state_machine__9770__auto____1 = (function (state_14887){while(true){
var ret_value__9771__auto__ = (function (){try{while(true){
var result__9772__auto__ = switch__9769__auto__.call(null,state_14887);if(cljs.core.keyword_identical_QMARK_.call(null,result__9772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9772__auto__;
}
break;
}
}catch (e14909){if((e14909 instanceof Object))
{var ex__9773__auto__ = e14909;var statearr_14910_14923 = state_14887;(statearr_14910_14923[(5)] = ex__9773__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14887);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14909;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14924 = state_14887;
state_14887 = G__14924;
continue;
}
} else
{return ret_value__9771__auto__;
}
break;
}
});
state_machine__9770__auto__ = function(state_14887){
switch(arguments.length){
case 0:
return state_machine__9770__auto____0.call(this);
case 1:
return state_machine__9770__auto____1.call(this,state_14887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9770__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9770__auto____0;
state_machine__9770__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9770__auto____1;
return state_machine__9770__auto__;
})()
;})(switch__9769__auto__,c__9784__auto___14912,out))
})();var state__9786__auto__ = (function (){var statearr_14911 = f__9785__auto__.call(null);(statearr_14911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9784__auto___14912);
return statearr_14911;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9786__auto__);
});})(c__9784__auto___14912,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9784__auto___15059 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9784__auto___15059,out){
return (function (){var f__9785__auto__ = (function (){var switch__9769__auto__ = ((function (c__9784__auto___15059,out){
return (function (state_15029){var state_val_15030 = (state_15029[(1)]);if((state_val_15030 === (7)))
{var inst_15025 = (state_15029[(2)]);var state_15029__$1 = state_15029;var statearr_15031_15060 = state_15029__$1;(statearr_15031_15060[(2)] = inst_15025);
(statearr_15031_15060[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15030 === (1)))
{var inst_14992 = (new Array(n));var inst_14993 = inst_14992;var inst_14994 = (0);var state_15029__$1 = (function (){var statearr_15032 = state_15029;(statearr_15032[(7)] = inst_14994);
(statearr_15032[(8)] = inst_14993);
return statearr_15032;
})();var statearr_15033_15061 = state_15029__$1;(statearr_15033_15061[(2)] = null);
(statearr_15033_15061[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15030 === (4)))
{var inst_14997 = (state_15029[(9)]);var inst_14997__$1 = (state_15029[(2)]);var inst_14998 = (inst_14997__$1 == null);var inst_14999 = cljs.core.not.call(null,inst_14998);var state_15029__$1 = (function (){var statearr_15034 = state_15029;(statearr_15034[(9)] = inst_14997__$1);
return statearr_15034;
})();if(inst_14999)
{var statearr_15035_15062 = state_15029__$1;(statearr_15035_15062[(1)] = (5));
} else
{var statearr_15036_15063 = state_15029__$1;(statearr_15036_15063[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15030 === (15)))
{var inst_15019 = (state_15029[(2)]);var state_15029__$1 = state_15029;var statearr_15037_15064 = state_15029__$1;(statearr_15037_15064[(2)] = inst_15019);
(statearr_15037_15064[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15030 === (13)))
{var state_15029__$1 = state_15029;var statearr_15038_15065 = state_15029__$1;(statearr_15038_15065[(2)] = null);
(statearr_15038_15065[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15030 === (6)))
{var inst_14994 = (state_15029[(7)]);var inst_15015 = (inst_14994 > (0));var state_15029__$1 = state_15029;if(cljs.core.truth_(inst_15015))
{var statearr_15039_15066 = state_15029__$1;(statearr_15039_15066[(1)] = (12));
} else
{var statearr_15040_15067 = state_15029__$1;(statearr_15040_15067[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15030 === (3)))
{var inst_15027 = (state_15029[(2)]);var state_15029__$1 = state_15029;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15029__$1,inst_15027);
} else
{if((state_val_15030 === (12)))
{var inst_14993 = (state_15029[(8)]);var inst_15017 = cljs.core.vec.call(null,inst_14993);var state_15029__$1 = state_15029;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15029__$1,(15),out,inst_15017);
} else
{if((state_val_15030 === (2)))
{var state_15029__$1 = state_15029;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15029__$1,(4),ch);
} else
{if((state_val_15030 === (11)))
{var inst_15009 = (state_15029[(2)]);var inst_15010 = (new Array(n));var inst_14993 = inst_15010;var inst_14994 = (0);var state_15029__$1 = (function (){var statearr_15041 = state_15029;(statearr_15041[(7)] = inst_14994);
(statearr_15041[(10)] = inst_15009);
(statearr_15041[(8)] = inst_14993);
return statearr_15041;
})();var statearr_15042_15068 = state_15029__$1;(statearr_15042_15068[(2)] = null);
(statearr_15042_15068[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15030 === (9)))
{var inst_14993 = (state_15029[(8)]);var inst_15007 = cljs.core.vec.call(null,inst_14993);var state_15029__$1 = state_15029;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15029__$1,(11),out,inst_15007);
} else
{if((state_val_15030 === (5)))
{var inst_14994 = (state_15029[(7)]);var inst_14997 = (state_15029[(9)]);var inst_15002 = (state_15029[(11)]);var inst_14993 = (state_15029[(8)]);var inst_15001 = (inst_14993[inst_14994] = inst_14997);var inst_15002__$1 = (inst_14994 + (1));var inst_15003 = (inst_15002__$1 < n);var state_15029__$1 = (function (){var statearr_15043 = state_15029;(statearr_15043[(12)] = inst_15001);
(statearr_15043[(11)] = inst_15002__$1);
return statearr_15043;
})();if(cljs.core.truth_(inst_15003))
{var statearr_15044_15069 = state_15029__$1;(statearr_15044_15069[(1)] = (8));
} else
{var statearr_15045_15070 = state_15029__$1;(statearr_15045_15070[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15030 === (14)))
{var inst_15022 = (state_15029[(2)]);var inst_15023 = cljs.core.async.close_BANG_.call(null,out);var state_15029__$1 = (function (){var statearr_15047 = state_15029;(statearr_15047[(13)] = inst_15022);
return statearr_15047;
})();var statearr_15048_15071 = state_15029__$1;(statearr_15048_15071[(2)] = inst_15023);
(statearr_15048_15071[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15030 === (10)))
{var inst_15013 = (state_15029[(2)]);var state_15029__$1 = state_15029;var statearr_15049_15072 = state_15029__$1;(statearr_15049_15072[(2)] = inst_15013);
(statearr_15049_15072[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15030 === (8)))
{var inst_15002 = (state_15029[(11)]);var inst_14993 = (state_15029[(8)]);var tmp15046 = inst_14993;var inst_14993__$1 = tmp15046;var inst_14994 = inst_15002;var state_15029__$1 = (function (){var statearr_15050 = state_15029;(statearr_15050[(7)] = inst_14994);
(statearr_15050[(8)] = inst_14993__$1);
return statearr_15050;
})();var statearr_15051_15073 = state_15029__$1;(statearr_15051_15073[(2)] = null);
(statearr_15051_15073[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9784__auto___15059,out))
;return ((function (switch__9769__auto__,c__9784__auto___15059,out){
return (function() {
var state_machine__9770__auto__ = null;
var state_machine__9770__auto____0 = (function (){var statearr_15055 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15055[(0)] = state_machine__9770__auto__);
(statearr_15055[(1)] = (1));
return statearr_15055;
});
var state_machine__9770__auto____1 = (function (state_15029){while(true){
var ret_value__9771__auto__ = (function (){try{while(true){
var result__9772__auto__ = switch__9769__auto__.call(null,state_15029);if(cljs.core.keyword_identical_QMARK_.call(null,result__9772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9772__auto__;
}
break;
}
}catch (e15056){if((e15056 instanceof Object))
{var ex__9773__auto__ = e15056;var statearr_15057_15074 = state_15029;(statearr_15057_15074[(5)] = ex__9773__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15029);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15056;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15075 = state_15029;
state_15029 = G__15075;
continue;
}
} else
{return ret_value__9771__auto__;
}
break;
}
});
state_machine__9770__auto__ = function(state_15029){
switch(arguments.length){
case 0:
return state_machine__9770__auto____0.call(this);
case 1:
return state_machine__9770__auto____1.call(this,state_15029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9770__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9770__auto____0;
state_machine__9770__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9770__auto____1;
return state_machine__9770__auto__;
})()
;})(switch__9769__auto__,c__9784__auto___15059,out))
})();var state__9786__auto__ = (function (){var statearr_15058 = f__9785__auto__.call(null);(statearr_15058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9784__auto___15059);
return statearr_15058;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9786__auto__);
});})(c__9784__auto___15059,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9784__auto___15218 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9784__auto___15218,out){
return (function (){var f__9785__auto__ = (function (){var switch__9769__auto__ = ((function (c__9784__auto___15218,out){
return (function (state_15188){var state_val_15189 = (state_15188[(1)]);if((state_val_15189 === (7)))
{var inst_15184 = (state_15188[(2)]);var state_15188__$1 = state_15188;var statearr_15190_15219 = state_15188__$1;(statearr_15190_15219[(2)] = inst_15184);
(statearr_15190_15219[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15189 === (1)))
{var inst_15147 = [];var inst_15148 = inst_15147;var inst_15149 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_15188__$1 = (function (){var statearr_15191 = state_15188;(statearr_15191[(7)] = inst_15149);
(statearr_15191[(8)] = inst_15148);
return statearr_15191;
})();var statearr_15192_15220 = state_15188__$1;(statearr_15192_15220[(2)] = null);
(statearr_15192_15220[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15189 === (4)))
{var inst_15152 = (state_15188[(9)]);var inst_15152__$1 = (state_15188[(2)]);var inst_15153 = (inst_15152__$1 == null);var inst_15154 = cljs.core.not.call(null,inst_15153);var state_15188__$1 = (function (){var statearr_15193 = state_15188;(statearr_15193[(9)] = inst_15152__$1);
return statearr_15193;
})();if(inst_15154)
{var statearr_15194_15221 = state_15188__$1;(statearr_15194_15221[(1)] = (5));
} else
{var statearr_15195_15222 = state_15188__$1;(statearr_15195_15222[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15189 === (15)))
{var inst_15178 = (state_15188[(2)]);var state_15188__$1 = state_15188;var statearr_15196_15223 = state_15188__$1;(statearr_15196_15223[(2)] = inst_15178);
(statearr_15196_15223[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15189 === (13)))
{var state_15188__$1 = state_15188;var statearr_15197_15224 = state_15188__$1;(statearr_15197_15224[(2)] = null);
(statearr_15197_15224[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15189 === (6)))
{var inst_15148 = (state_15188[(8)]);var inst_15173 = inst_15148.length;var inst_15174 = (inst_15173 > (0));var state_15188__$1 = state_15188;if(cljs.core.truth_(inst_15174))
{var statearr_15198_15225 = state_15188__$1;(statearr_15198_15225[(1)] = (12));
} else
{var statearr_15199_15226 = state_15188__$1;(statearr_15199_15226[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15189 === (3)))
{var inst_15186 = (state_15188[(2)]);var state_15188__$1 = state_15188;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15188__$1,inst_15186);
} else
{if((state_val_15189 === (12)))
{var inst_15148 = (state_15188[(8)]);var inst_15176 = cljs.core.vec.call(null,inst_15148);var state_15188__$1 = state_15188;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15188__$1,(15),out,inst_15176);
} else
{if((state_val_15189 === (2)))
{var state_15188__$1 = state_15188;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15188__$1,(4),ch);
} else
{if((state_val_15189 === (11)))
{var inst_15156 = (state_15188[(10)]);var inst_15152 = (state_15188[(9)]);var inst_15166 = (state_15188[(2)]);var inst_15167 = [];var inst_15168 = inst_15167.push(inst_15152);var inst_15148 = inst_15167;var inst_15149 = inst_15156;var state_15188__$1 = (function (){var statearr_15200 = state_15188;(statearr_15200[(7)] = inst_15149);
(statearr_15200[(8)] = inst_15148);
(statearr_15200[(11)] = inst_15166);
(statearr_15200[(12)] = inst_15168);
return statearr_15200;
})();var statearr_15201_15227 = state_15188__$1;(statearr_15201_15227[(2)] = null);
(statearr_15201_15227[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15189 === (9)))
{var inst_15148 = (state_15188[(8)]);var inst_15164 = cljs.core.vec.call(null,inst_15148);var state_15188__$1 = state_15188;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15188__$1,(11),out,inst_15164);
} else
{if((state_val_15189 === (5)))
{var inst_15149 = (state_15188[(7)]);var inst_15156 = (state_15188[(10)]);var inst_15152 = (state_15188[(9)]);var inst_15156__$1 = f.call(null,inst_15152);var inst_15157 = cljs.core._EQ_.call(null,inst_15156__$1,inst_15149);var inst_15158 = cljs.core.keyword_identical_QMARK_.call(null,inst_15149,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_15159 = (inst_15157) || (inst_15158);var state_15188__$1 = (function (){var statearr_15202 = state_15188;(statearr_15202[(10)] = inst_15156__$1);
return statearr_15202;
})();if(cljs.core.truth_(inst_15159))
{var statearr_15203_15228 = state_15188__$1;(statearr_15203_15228[(1)] = (8));
} else
{var statearr_15204_15229 = state_15188__$1;(statearr_15204_15229[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15189 === (14)))
{var inst_15181 = (state_15188[(2)]);var inst_15182 = cljs.core.async.close_BANG_.call(null,out);var state_15188__$1 = (function (){var statearr_15206 = state_15188;(statearr_15206[(13)] = inst_15181);
return statearr_15206;
})();var statearr_15207_15230 = state_15188__$1;(statearr_15207_15230[(2)] = inst_15182);
(statearr_15207_15230[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15189 === (10)))
{var inst_15171 = (state_15188[(2)]);var state_15188__$1 = state_15188;var statearr_15208_15231 = state_15188__$1;(statearr_15208_15231[(2)] = inst_15171);
(statearr_15208_15231[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15189 === (8)))
{var inst_15156 = (state_15188[(10)]);var inst_15148 = (state_15188[(8)]);var inst_15152 = (state_15188[(9)]);var inst_15161 = inst_15148.push(inst_15152);var tmp15205 = inst_15148;var inst_15148__$1 = tmp15205;var inst_15149 = inst_15156;var state_15188__$1 = (function (){var statearr_15209 = state_15188;(statearr_15209[(14)] = inst_15161);
(statearr_15209[(7)] = inst_15149);
(statearr_15209[(8)] = inst_15148__$1);
return statearr_15209;
})();var statearr_15210_15232 = state_15188__$1;(statearr_15210_15232[(2)] = null);
(statearr_15210_15232[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9784__auto___15218,out))
;return ((function (switch__9769__auto__,c__9784__auto___15218,out){
return (function() {
var state_machine__9770__auto__ = null;
var state_machine__9770__auto____0 = (function (){var statearr_15214 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15214[(0)] = state_machine__9770__auto__);
(statearr_15214[(1)] = (1));
return statearr_15214;
});
var state_machine__9770__auto____1 = (function (state_15188){while(true){
var ret_value__9771__auto__ = (function (){try{while(true){
var result__9772__auto__ = switch__9769__auto__.call(null,state_15188);if(cljs.core.keyword_identical_QMARK_.call(null,result__9772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9772__auto__;
}
break;
}
}catch (e15215){if((e15215 instanceof Object))
{var ex__9773__auto__ = e15215;var statearr_15216_15233 = state_15188;(statearr_15216_15233[(5)] = ex__9773__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15188);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15215;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15234 = state_15188;
state_15188 = G__15234;
continue;
}
} else
{return ret_value__9771__auto__;
}
break;
}
});
state_machine__9770__auto__ = function(state_15188){
switch(arguments.length){
case 0:
return state_machine__9770__auto____0.call(this);
case 1:
return state_machine__9770__auto____1.call(this,state_15188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9770__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9770__auto____0;
state_machine__9770__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9770__auto____1;
return state_machine__9770__auto__;
})()
;})(switch__9769__auto__,c__9784__auto___15218,out))
})();var state__9786__auto__ = (function (){var statearr_15217 = f__9785__auto__.call(null);(statearr_15217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9784__auto___15218);
return statearr_15217;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9786__auto__);
});})(c__9784__auto___15218,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map