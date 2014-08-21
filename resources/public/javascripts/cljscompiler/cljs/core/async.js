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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12195 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12195 = (function (f,fn_handler,meta12196){
this.f = f;
this.fn_handler = fn_handler;
this.meta12196 = meta12196;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12195.cljs$lang$type = true;
cljs.core.async.t12195.cljs$lang$ctorStr = "cljs.core.async/t12195";
cljs.core.async.t12195.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t12195");
});
cljs.core.async.t12195.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12195.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12195.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12197){var self__ = this;
var _12197__$1 = this;return self__.meta12196;
});
cljs.core.async.t12195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12197,meta12196__$1){var self__ = this;
var _12197__$1 = this;return (new cljs.core.async.t12195(self__.f,self__.fn_handler,meta12196__$1));
});
cljs.core.async.__GT_t12195 = (function __GT_t12195(f__$1,fn_handler__$1,meta12196){return (new cljs.core.async.t12195(f__$1,fn_handler__$1,meta12196));
});
}
return (new cljs.core.async.t12195(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12199 = buff;if(G__12199)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__12199.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12199.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12199);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12199);
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
{var val_12200 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12200);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_12200,ret){
return (function (){return fn1.call(null,val_12200);
});})(val_12200,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___12201 = n;var x_12202 = (0);while(true){
if((x_12202 < n__4399__auto___12201))
{(a[x_12202] = (0));
{
var G__12203 = (x_12202 + (1));
x_12202 = G__12203;
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
var G__12204 = (i + (1));
i = G__12204;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12208 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12208 = (function (flag,alt_flag,meta12209){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12209 = meta12209;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12208.cljs$lang$type = true;
cljs.core.async.t12208.cljs$lang$ctorStr = "cljs.core.async/t12208";
cljs.core.async.t12208.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t12208");
});})(flag))
;
cljs.core.async.t12208.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12208.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t12208.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t12208.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12210){var self__ = this;
var _12210__$1 = this;return self__.meta12209;
});})(flag))
;
cljs.core.async.t12208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12210,meta12209__$1){var self__ = this;
var _12210__$1 = this;return (new cljs.core.async.t12208(self__.flag,self__.alt_flag,meta12209__$1));
});})(flag))
;
cljs.core.async.__GT_t12208 = ((function (flag){
return (function __GT_t12208(flag__$1,alt_flag__$1,meta12209){return (new cljs.core.async.t12208(flag__$1,alt_flag__$1,meta12209));
});})(flag))
;
}
return (new cljs.core.async.t12208(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12214 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12214 = (function (cb,flag,alt_handler,meta12215){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12215 = meta12215;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12214.cljs$lang$type = true;
cljs.core.async.t12214.cljs$lang$ctorStr = "cljs.core.async/t12214";
cljs.core.async.t12214.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t12214");
});
cljs.core.async.t12214.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12214.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12214.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12216){var self__ = this;
var _12216__$1 = this;return self__.meta12215;
});
cljs.core.async.t12214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12216,meta12215__$1){var self__ = this;
var _12216__$1 = this;return (new cljs.core.async.t12214(self__.cb,self__.flag,self__.alt_handler,meta12215__$1));
});
cljs.core.async.__GT_t12214 = (function __GT_t12214(cb__$1,flag__$1,alt_handler__$1,meta12215){return (new cljs.core.async.t12214(cb__$1,flag__$1,alt_handler__$1,meta12215));
});
}
return (new cljs.core.async.t12214(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12217_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12217_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12218_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12218_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3543__auto__ = wport;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__12219 = (i + (1));
i = G__12219;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3543__auto__ = ret;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3531__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3531__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3531__auto__;
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
var alts_BANG___delegate = function (ports,p__12220){var map__12222 = p__12220;var map__12222__$1 = ((cljs.core.seq_QMARK_.call(null,map__12222))?cljs.core.apply.call(null,cljs.core.hash_map,map__12222):map__12222);var opts = map__12222__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__12220 = null;if (arguments.length > 1) {
  p__12220 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12220);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12223){
var ports = cljs.core.first(arglist__12223);
var p__12220 = cljs.core.rest(arglist__12223);
return alts_BANG___delegate(ports,p__12220);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12231 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12231 = (function (ch,f,map_LT_,meta12232){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12232 = meta12232;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12231.cljs$lang$type = true;
cljs.core.async.t12231.cljs$lang$ctorStr = "cljs.core.async/t12231";
cljs.core.async.t12231.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t12231");
});
cljs.core.async.t12231.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12231.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t12231.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12231.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12234 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12234 = (function (fn1,_,meta12232,ch,f,map_LT_,meta12235){
this.fn1 = fn1;
this._ = _;
this.meta12232 = meta12232;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12235 = meta12235;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12234.cljs$lang$type = true;
cljs.core.async.t12234.cljs$lang$ctorStr = "cljs.core.async/t12234";
cljs.core.async.t12234.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t12234");
});})(___$1))
;
cljs.core.async.t12234.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12234.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t12234.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t12234.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__12224_SHARP_){return f1.call(null,(((p1__12224_SHARP_ == null))?null:self__.f.call(null,p1__12224_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t12234.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12236){var self__ = this;
var _12236__$1 = this;return self__.meta12235;
});})(___$1))
;
cljs.core.async.t12234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12236,meta12235__$1){var self__ = this;
var _12236__$1 = this;return (new cljs.core.async.t12234(self__.fn1,self__._,self__.meta12232,self__.ch,self__.f,self__.map_LT_,meta12235__$1));
});})(___$1))
;
cljs.core.async.__GT_t12234 = ((function (___$1){
return (function __GT_t12234(fn1__$1,___$2,meta12232__$1,ch__$2,f__$2,map_LT___$2,meta12235){return (new cljs.core.async.t12234(fn1__$1,___$2,meta12232__$1,ch__$2,f__$2,map_LT___$2,meta12235));
});})(___$1))
;
}
return (new cljs.core.async.t12234(fn1,___$1,self__.meta12232,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3531__auto__ = ret;if(cljs.core.truth_(and__3531__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t12231.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12231.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12231.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t12231.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12233){var self__ = this;
var _12233__$1 = this;return self__.meta12232;
});
cljs.core.async.t12231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12233,meta12232__$1){var self__ = this;
var _12233__$1 = this;return (new cljs.core.async.t12231(self__.ch,self__.f,self__.map_LT_,meta12232__$1));
});
cljs.core.async.__GT_t12231 = (function __GT_t12231(ch__$1,f__$1,map_LT___$1,meta12232){return (new cljs.core.async.t12231(ch__$1,f__$1,map_LT___$1,meta12232));
});
}
return (new cljs.core.async.t12231(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12240 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12240 = (function (ch,f,map_GT_,meta12241){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12241 = meta12241;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12240.cljs$lang$type = true;
cljs.core.async.t12240.cljs$lang$ctorStr = "cljs.core.async/t12240";
cljs.core.async.t12240.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t12240");
});
cljs.core.async.t12240.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12240.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t12240.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12240.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12240.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12240.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12242){var self__ = this;
var _12242__$1 = this;return self__.meta12241;
});
cljs.core.async.t12240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12242,meta12241__$1){var self__ = this;
var _12242__$1 = this;return (new cljs.core.async.t12240(self__.ch,self__.f,self__.map_GT_,meta12241__$1));
});
cljs.core.async.__GT_t12240 = (function __GT_t12240(ch__$1,f__$1,map_GT___$1,meta12241){return (new cljs.core.async.t12240(ch__$1,f__$1,map_GT___$1,meta12241));
});
}
return (new cljs.core.async.t12240(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12246 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12246 = (function (ch,p,filter_GT_,meta12247){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12247 = meta12247;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12246.cljs$lang$type = true;
cljs.core.async.t12246.cljs$lang$ctorStr = "cljs.core.async/t12246";
cljs.core.async.t12246.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t12246");
});
cljs.core.async.t12246.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12246.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t12246.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12246.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12246.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12246.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12246.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t12246.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12248){var self__ = this;
var _12248__$1 = this;return self__.meta12247;
});
cljs.core.async.t12246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12248,meta12247__$1){var self__ = this;
var _12248__$1 = this;return (new cljs.core.async.t12246(self__.ch,self__.p,self__.filter_GT_,meta12247__$1));
});
cljs.core.async.__GT_t12246 = (function __GT_t12246(ch__$1,p__$1,filter_GT___$1,meta12247){return (new cljs.core.async.t12246(ch__$1,p__$1,filter_GT___$1,meta12247));
});
}
return (new cljs.core.async.t12246(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6055__auto___12331 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6055__auto___12331,out){
return (function (){var f__6056__auto__ = (function (){var switch__6040__auto__ = ((function (c__6055__auto___12331,out){
return (function (state_12310){var state_val_12311 = (state_12310[(1)]);if((state_val_12311 === (7)))
{var inst_12306 = (state_12310[(2)]);var state_12310__$1 = state_12310;var statearr_12312_12332 = state_12310__$1;(statearr_12312_12332[(2)] = inst_12306);
(statearr_12312_12332[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12311 === (1)))
{var state_12310__$1 = state_12310;var statearr_12313_12333 = state_12310__$1;(statearr_12313_12333[(2)] = null);
(statearr_12313_12333[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12311 === (4)))
{var inst_12292 = (state_12310[(7)]);var inst_12292__$1 = (state_12310[(2)]);var inst_12293 = (inst_12292__$1 == null);var state_12310__$1 = (function (){var statearr_12314 = state_12310;(statearr_12314[(7)] = inst_12292__$1);
return statearr_12314;
})();if(cljs.core.truth_(inst_12293))
{var statearr_12315_12334 = state_12310__$1;(statearr_12315_12334[(1)] = (5));
} else
{var statearr_12316_12335 = state_12310__$1;(statearr_12316_12335[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12311 === (6)))
{var inst_12292 = (state_12310[(7)]);var inst_12297 = p.call(null,inst_12292);var state_12310__$1 = state_12310;if(cljs.core.truth_(inst_12297))
{var statearr_12317_12336 = state_12310__$1;(statearr_12317_12336[(1)] = (8));
} else
{var statearr_12318_12337 = state_12310__$1;(statearr_12318_12337[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12311 === (3)))
{var inst_12308 = (state_12310[(2)]);var state_12310__$1 = state_12310;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12310__$1,inst_12308);
} else
{if((state_val_12311 === (2)))
{var state_12310__$1 = state_12310;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12310__$1,(4),ch);
} else
{if((state_val_12311 === (11)))
{var inst_12300 = (state_12310[(2)]);var state_12310__$1 = state_12310;var statearr_12319_12338 = state_12310__$1;(statearr_12319_12338[(2)] = inst_12300);
(statearr_12319_12338[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12311 === (9)))
{var state_12310__$1 = state_12310;var statearr_12320_12339 = state_12310__$1;(statearr_12320_12339[(2)] = null);
(statearr_12320_12339[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12311 === (5)))
{var inst_12295 = cljs.core.async.close_BANG_.call(null,out);var state_12310__$1 = state_12310;var statearr_12321_12340 = state_12310__$1;(statearr_12321_12340[(2)] = inst_12295);
(statearr_12321_12340[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12311 === (10)))
{var inst_12303 = (state_12310[(2)]);var state_12310__$1 = (function (){var statearr_12322 = state_12310;(statearr_12322[(8)] = inst_12303);
return statearr_12322;
})();var statearr_12323_12341 = state_12310__$1;(statearr_12323_12341[(2)] = null);
(statearr_12323_12341[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12311 === (8)))
{var inst_12292 = (state_12310[(7)]);var state_12310__$1 = state_12310;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12310__$1,(11),out,inst_12292);
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
});})(c__6055__auto___12331,out))
;return ((function (switch__6040__auto__,c__6055__auto___12331,out){
return (function() {
var state_machine__6041__auto__ = null;
var state_machine__6041__auto____0 = (function (){var statearr_12327 = [null,null,null,null,null,null,null,null,null];(statearr_12327[(0)] = state_machine__6041__auto__);
(statearr_12327[(1)] = (1));
return statearr_12327;
});
var state_machine__6041__auto____1 = (function (state_12310){while(true){
var ret_value__6042__auto__ = (function (){try{while(true){
var result__6043__auto__ = switch__6040__auto__.call(null,state_12310);if(cljs.core.keyword_identical_QMARK_.call(null,result__6043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6043__auto__;
}
break;
}
}catch (e12328){if((e12328 instanceof Object))
{var ex__6044__auto__ = e12328;var statearr_12329_12342 = state_12310;(statearr_12329_12342[(5)] = ex__6044__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12310);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12328;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12343 = state_12310;
state_12310 = G__12343;
continue;
}
} else
{return ret_value__6042__auto__;
}
break;
}
});
state_machine__6041__auto__ = function(state_12310){
switch(arguments.length){
case 0:
return state_machine__6041__auto____0.call(this);
case 1:
return state_machine__6041__auto____1.call(this,state_12310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6041__auto____0;
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6041__auto____1;
return state_machine__6041__auto__;
})()
;})(switch__6040__auto__,c__6055__auto___12331,out))
})();var state__6057__auto__ = (function (){var statearr_12330 = f__6056__auto__.call(null);(statearr_12330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6055__auto___12331);
return statearr_12330;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6057__auto__);
});})(c__6055__auto___12331,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6055__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6055__auto__){
return (function (){var f__6056__auto__ = (function (){var switch__6040__auto__ = ((function (c__6055__auto__){
return (function (state_12509){var state_val_12510 = (state_12509[(1)]);if((state_val_12510 === (7)))
{var inst_12505 = (state_12509[(2)]);var state_12509__$1 = state_12509;var statearr_12511_12552 = state_12509__$1;(statearr_12511_12552[(2)] = inst_12505);
(statearr_12511_12552[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12510 === (20)))
{var inst_12475 = (state_12509[(7)]);var inst_12486 = (state_12509[(2)]);var inst_12487 = cljs.core.next.call(null,inst_12475);var inst_12461 = inst_12487;var inst_12462 = null;var inst_12463 = (0);var inst_12464 = (0);var state_12509__$1 = (function (){var statearr_12512 = state_12509;(statearr_12512[(8)] = inst_12464);
(statearr_12512[(9)] = inst_12461);
(statearr_12512[(10)] = inst_12462);
(statearr_12512[(11)] = inst_12486);
(statearr_12512[(12)] = inst_12463);
return statearr_12512;
})();var statearr_12513_12553 = state_12509__$1;(statearr_12513_12553[(2)] = null);
(statearr_12513_12553[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12510 === (1)))
{var state_12509__$1 = state_12509;var statearr_12514_12554 = state_12509__$1;(statearr_12514_12554[(2)] = null);
(statearr_12514_12554[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12510 === (4)))
{var inst_12450 = (state_12509[(13)]);var inst_12450__$1 = (state_12509[(2)]);var inst_12451 = (inst_12450__$1 == null);var state_12509__$1 = (function (){var statearr_12515 = state_12509;(statearr_12515[(13)] = inst_12450__$1);
return statearr_12515;
})();if(cljs.core.truth_(inst_12451))
{var statearr_12516_12555 = state_12509__$1;(statearr_12516_12555[(1)] = (5));
} else
{var statearr_12517_12556 = state_12509__$1;(statearr_12517_12556[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12510 === (15)))
{var state_12509__$1 = state_12509;var statearr_12521_12557 = state_12509__$1;(statearr_12521_12557[(2)] = null);
(statearr_12521_12557[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12510 === (21)))
{var state_12509__$1 = state_12509;var statearr_12522_12558 = state_12509__$1;(statearr_12522_12558[(2)] = null);
(statearr_12522_12558[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12510 === (13)))
{var inst_12464 = (state_12509[(8)]);var inst_12461 = (state_12509[(9)]);var inst_12462 = (state_12509[(10)]);var inst_12463 = (state_12509[(12)]);var inst_12471 = (state_12509[(2)]);var inst_12472 = (inst_12464 + (1));var tmp12518 = inst_12461;var tmp12519 = inst_12462;var tmp12520 = inst_12463;var inst_12461__$1 = tmp12518;var inst_12462__$1 = tmp12519;var inst_12463__$1 = tmp12520;var inst_12464__$1 = inst_12472;var state_12509__$1 = (function (){var statearr_12523 = state_12509;(statearr_12523[(8)] = inst_12464__$1);
(statearr_12523[(9)] = inst_12461__$1);
(statearr_12523[(14)] = inst_12471);
(statearr_12523[(10)] = inst_12462__$1);
(statearr_12523[(12)] = inst_12463__$1);
return statearr_12523;
})();var statearr_12524_12559 = state_12509__$1;(statearr_12524_12559[(2)] = null);
(statearr_12524_12559[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12510 === (22)))
{var state_12509__$1 = state_12509;var statearr_12525_12560 = state_12509__$1;(statearr_12525_12560[(2)] = null);
(statearr_12525_12560[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12510 === (6)))
{var inst_12450 = (state_12509[(13)]);var inst_12459 = f.call(null,inst_12450);var inst_12460 = cljs.core.seq.call(null,inst_12459);var inst_12461 = inst_12460;var inst_12462 = null;var inst_12463 = (0);var inst_12464 = (0);var state_12509__$1 = (function (){var statearr_12526 = state_12509;(statearr_12526[(8)] = inst_12464);
(statearr_12526[(9)] = inst_12461);
(statearr_12526[(10)] = inst_12462);
(statearr_12526[(12)] = inst_12463);
return statearr_12526;
})();var statearr_12527_12561 = state_12509__$1;(statearr_12527_12561[(2)] = null);
(statearr_12527_12561[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12510 === (17)))
{var inst_12475 = (state_12509[(7)]);var inst_12479 = cljs.core.chunk_first.call(null,inst_12475);var inst_12480 = cljs.core.chunk_rest.call(null,inst_12475);var inst_12481 = cljs.core.count.call(null,inst_12479);var inst_12461 = inst_12480;var inst_12462 = inst_12479;var inst_12463 = inst_12481;var inst_12464 = (0);var state_12509__$1 = (function (){var statearr_12528 = state_12509;(statearr_12528[(8)] = inst_12464);
(statearr_12528[(9)] = inst_12461);
(statearr_12528[(10)] = inst_12462);
(statearr_12528[(12)] = inst_12463);
return statearr_12528;
})();var statearr_12529_12562 = state_12509__$1;(statearr_12529_12562[(2)] = null);
(statearr_12529_12562[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12510 === (3)))
{var inst_12507 = (state_12509[(2)]);var state_12509__$1 = state_12509;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12509__$1,inst_12507);
} else
{if((state_val_12510 === (12)))
{var inst_12495 = (state_12509[(2)]);var state_12509__$1 = state_12509;var statearr_12530_12563 = state_12509__$1;(statearr_12530_12563[(2)] = inst_12495);
(statearr_12530_12563[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12510 === (2)))
{var state_12509__$1 = state_12509;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12509__$1,(4),in$);
} else
{if((state_val_12510 === (23)))
{var inst_12503 = (state_12509[(2)]);var state_12509__$1 = state_12509;var statearr_12531_12564 = state_12509__$1;(statearr_12531_12564[(2)] = inst_12503);
(statearr_12531_12564[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12510 === (19)))
{var inst_12490 = (state_12509[(2)]);var state_12509__$1 = state_12509;var statearr_12532_12565 = state_12509__$1;(statearr_12532_12565[(2)] = inst_12490);
(statearr_12532_12565[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12510 === (11)))
{var inst_12475 = (state_12509[(7)]);var inst_12461 = (state_12509[(9)]);var inst_12475__$1 = cljs.core.seq.call(null,inst_12461);var state_12509__$1 = (function (){var statearr_12533 = state_12509;(statearr_12533[(7)] = inst_12475__$1);
return statearr_12533;
})();if(inst_12475__$1)
{var statearr_12534_12566 = state_12509__$1;(statearr_12534_12566[(1)] = (14));
} else
{var statearr_12535_12567 = state_12509__$1;(statearr_12535_12567[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12510 === (9)))
{var inst_12497 = (state_12509[(2)]);var inst_12498 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_12509__$1 = (function (){var statearr_12536 = state_12509;(statearr_12536[(15)] = inst_12497);
return statearr_12536;
})();if(cljs.core.truth_(inst_12498))
{var statearr_12537_12568 = state_12509__$1;(statearr_12537_12568[(1)] = (21));
} else
{var statearr_12538_12569 = state_12509__$1;(statearr_12538_12569[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12510 === (5)))
{var inst_12453 = cljs.core.async.close_BANG_.call(null,out);var state_12509__$1 = state_12509;var statearr_12539_12570 = state_12509__$1;(statearr_12539_12570[(2)] = inst_12453);
(statearr_12539_12570[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12510 === (14)))
{var inst_12475 = (state_12509[(7)]);var inst_12477 = cljs.core.chunked_seq_QMARK_.call(null,inst_12475);var state_12509__$1 = state_12509;if(inst_12477)
{var statearr_12540_12571 = state_12509__$1;(statearr_12540_12571[(1)] = (17));
} else
{var statearr_12541_12572 = state_12509__$1;(statearr_12541_12572[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12510 === (16)))
{var inst_12493 = (state_12509[(2)]);var state_12509__$1 = state_12509;var statearr_12542_12573 = state_12509__$1;(statearr_12542_12573[(2)] = inst_12493);
(statearr_12542_12573[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12510 === (10)))
{var inst_12464 = (state_12509[(8)]);var inst_12462 = (state_12509[(10)]);var inst_12469 = cljs.core._nth.call(null,inst_12462,inst_12464);var state_12509__$1 = state_12509;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12509__$1,(13),out,inst_12469);
} else
{if((state_val_12510 === (18)))
{var inst_12475 = (state_12509[(7)]);var inst_12484 = cljs.core.first.call(null,inst_12475);var state_12509__$1 = state_12509;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12509__$1,(20),out,inst_12484);
} else
{if((state_val_12510 === (8)))
{var inst_12464 = (state_12509[(8)]);var inst_12463 = (state_12509[(12)]);var inst_12466 = (inst_12464 < inst_12463);var inst_12467 = inst_12466;var state_12509__$1 = state_12509;if(cljs.core.truth_(inst_12467))
{var statearr_12543_12574 = state_12509__$1;(statearr_12543_12574[(1)] = (10));
} else
{var statearr_12544_12575 = state_12509__$1;(statearr_12544_12575[(1)] = (11));
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
});})(c__6055__auto__))
;return ((function (switch__6040__auto__,c__6055__auto__){
return (function() {
var state_machine__6041__auto__ = null;
var state_machine__6041__auto____0 = (function (){var statearr_12548 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12548[(0)] = state_machine__6041__auto__);
(statearr_12548[(1)] = (1));
return statearr_12548;
});
var state_machine__6041__auto____1 = (function (state_12509){while(true){
var ret_value__6042__auto__ = (function (){try{while(true){
var result__6043__auto__ = switch__6040__auto__.call(null,state_12509);if(cljs.core.keyword_identical_QMARK_.call(null,result__6043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6043__auto__;
}
break;
}
}catch (e12549){if((e12549 instanceof Object))
{var ex__6044__auto__ = e12549;var statearr_12550_12576 = state_12509;(statearr_12550_12576[(5)] = ex__6044__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12509);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12549;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12577 = state_12509;
state_12509 = G__12577;
continue;
}
} else
{return ret_value__6042__auto__;
}
break;
}
});
state_machine__6041__auto__ = function(state_12509){
switch(arguments.length){
case 0:
return state_machine__6041__auto____0.call(this);
case 1:
return state_machine__6041__auto____1.call(this,state_12509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6041__auto____0;
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6041__auto____1;
return state_machine__6041__auto__;
})()
;})(switch__6040__auto__,c__6055__auto__))
})();var state__6057__auto__ = (function (){var statearr_12551 = f__6056__auto__.call(null);(statearr_12551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6055__auto__);
return statearr_12551;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6057__auto__);
});})(c__6055__auto__))
);
return c__6055__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6055__auto___12672 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6055__auto___12672){
return (function (){var f__6056__auto__ = (function (){var switch__6040__auto__ = ((function (c__6055__auto___12672){
return (function (state_12648){var state_val_12649 = (state_12648[(1)]);if((state_val_12649 === (7)))
{var inst_12644 = (state_12648[(2)]);var state_12648__$1 = state_12648;var statearr_12650_12673 = state_12648__$1;(statearr_12650_12673[(2)] = inst_12644);
(statearr_12650_12673[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12649 === (1)))
{var state_12648__$1 = state_12648;var statearr_12651_12674 = state_12648__$1;(statearr_12651_12674[(2)] = null);
(statearr_12651_12674[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12649 === (4)))
{var inst_12627 = (state_12648[(7)]);var inst_12627__$1 = (state_12648[(2)]);var inst_12628 = (inst_12627__$1 == null);var state_12648__$1 = (function (){var statearr_12652 = state_12648;(statearr_12652[(7)] = inst_12627__$1);
return statearr_12652;
})();if(cljs.core.truth_(inst_12628))
{var statearr_12653_12675 = state_12648__$1;(statearr_12653_12675[(1)] = (5));
} else
{var statearr_12654_12676 = state_12648__$1;(statearr_12654_12676[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12649 === (13)))
{var state_12648__$1 = state_12648;var statearr_12655_12677 = state_12648__$1;(statearr_12655_12677[(2)] = null);
(statearr_12655_12677[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12649 === (6)))
{var inst_12627 = (state_12648[(7)]);var state_12648__$1 = state_12648;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12648__$1,(11),to,inst_12627);
} else
{if((state_val_12649 === (3)))
{var inst_12646 = (state_12648[(2)]);var state_12648__$1 = state_12648;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12648__$1,inst_12646);
} else
{if((state_val_12649 === (12)))
{var state_12648__$1 = state_12648;var statearr_12656_12678 = state_12648__$1;(statearr_12656_12678[(2)] = null);
(statearr_12656_12678[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12649 === (2)))
{var state_12648__$1 = state_12648;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12648__$1,(4),from);
} else
{if((state_val_12649 === (11)))
{var inst_12637 = (state_12648[(2)]);var state_12648__$1 = state_12648;if(cljs.core.truth_(inst_12637))
{var statearr_12657_12679 = state_12648__$1;(statearr_12657_12679[(1)] = (12));
} else
{var statearr_12658_12680 = state_12648__$1;(statearr_12658_12680[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12649 === (9)))
{var state_12648__$1 = state_12648;var statearr_12659_12681 = state_12648__$1;(statearr_12659_12681[(2)] = null);
(statearr_12659_12681[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12649 === (5)))
{var state_12648__$1 = state_12648;if(cljs.core.truth_(close_QMARK_))
{var statearr_12660_12682 = state_12648__$1;(statearr_12660_12682[(1)] = (8));
} else
{var statearr_12661_12683 = state_12648__$1;(statearr_12661_12683[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12649 === (14)))
{var inst_12642 = (state_12648[(2)]);var state_12648__$1 = state_12648;var statearr_12662_12684 = state_12648__$1;(statearr_12662_12684[(2)] = inst_12642);
(statearr_12662_12684[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12649 === (10)))
{var inst_12634 = (state_12648[(2)]);var state_12648__$1 = state_12648;var statearr_12663_12685 = state_12648__$1;(statearr_12663_12685[(2)] = inst_12634);
(statearr_12663_12685[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12649 === (8)))
{var inst_12631 = cljs.core.async.close_BANG_.call(null,to);var state_12648__$1 = state_12648;var statearr_12664_12686 = state_12648__$1;(statearr_12664_12686[(2)] = inst_12631);
(statearr_12664_12686[(1)] = (10));
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
});})(c__6055__auto___12672))
;return ((function (switch__6040__auto__,c__6055__auto___12672){
return (function() {
var state_machine__6041__auto__ = null;
var state_machine__6041__auto____0 = (function (){var statearr_12668 = [null,null,null,null,null,null,null,null];(statearr_12668[(0)] = state_machine__6041__auto__);
(statearr_12668[(1)] = (1));
return statearr_12668;
});
var state_machine__6041__auto____1 = (function (state_12648){while(true){
var ret_value__6042__auto__ = (function (){try{while(true){
var result__6043__auto__ = switch__6040__auto__.call(null,state_12648);if(cljs.core.keyword_identical_QMARK_.call(null,result__6043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6043__auto__;
}
break;
}
}catch (e12669){if((e12669 instanceof Object))
{var ex__6044__auto__ = e12669;var statearr_12670_12687 = state_12648;(statearr_12670_12687[(5)] = ex__6044__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12648);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12669;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12688 = state_12648;
state_12648 = G__12688;
continue;
}
} else
{return ret_value__6042__auto__;
}
break;
}
});
state_machine__6041__auto__ = function(state_12648){
switch(arguments.length){
case 0:
return state_machine__6041__auto____0.call(this);
case 1:
return state_machine__6041__auto____1.call(this,state_12648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6041__auto____0;
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6041__auto____1;
return state_machine__6041__auto__;
})()
;})(switch__6040__auto__,c__6055__auto___12672))
})();var state__6057__auto__ = (function (){var statearr_12671 = f__6056__auto__.call(null);(statearr_12671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6055__auto___12672);
return statearr_12671;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6057__auto__);
});})(c__6055__auto___12672))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6055__auto___12789 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6055__auto___12789,tc,fc){
return (function (){var f__6056__auto__ = (function (){var switch__6040__auto__ = ((function (c__6055__auto___12789,tc,fc){
return (function (state_12764){var state_val_12765 = (state_12764[(1)]);if((state_val_12765 === (7)))
{var inst_12760 = (state_12764[(2)]);var state_12764__$1 = state_12764;var statearr_12766_12790 = state_12764__$1;(statearr_12766_12790[(2)] = inst_12760);
(statearr_12766_12790[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12765 === (1)))
{var state_12764__$1 = state_12764;var statearr_12767_12791 = state_12764__$1;(statearr_12767_12791[(2)] = null);
(statearr_12767_12791[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12765 === (4)))
{var inst_12741 = (state_12764[(7)]);var inst_12741__$1 = (state_12764[(2)]);var inst_12742 = (inst_12741__$1 == null);var state_12764__$1 = (function (){var statearr_12768 = state_12764;(statearr_12768[(7)] = inst_12741__$1);
return statearr_12768;
})();if(cljs.core.truth_(inst_12742))
{var statearr_12769_12792 = state_12764__$1;(statearr_12769_12792[(1)] = (5));
} else
{var statearr_12770_12793 = state_12764__$1;(statearr_12770_12793[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12765 === (13)))
{var state_12764__$1 = state_12764;var statearr_12771_12794 = state_12764__$1;(statearr_12771_12794[(2)] = null);
(statearr_12771_12794[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12765 === (6)))
{var inst_12741 = (state_12764[(7)]);var inst_12747 = p.call(null,inst_12741);var state_12764__$1 = state_12764;if(cljs.core.truth_(inst_12747))
{var statearr_12772_12795 = state_12764__$1;(statearr_12772_12795[(1)] = (9));
} else
{var statearr_12773_12796 = state_12764__$1;(statearr_12773_12796[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12765 === (3)))
{var inst_12762 = (state_12764[(2)]);var state_12764__$1 = state_12764;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12764__$1,inst_12762);
} else
{if((state_val_12765 === (12)))
{var state_12764__$1 = state_12764;var statearr_12774_12797 = state_12764__$1;(statearr_12774_12797[(2)] = null);
(statearr_12774_12797[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12765 === (2)))
{var state_12764__$1 = state_12764;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12764__$1,(4),ch);
} else
{if((state_val_12765 === (11)))
{var inst_12741 = (state_12764[(7)]);var inst_12751 = (state_12764[(2)]);var state_12764__$1 = state_12764;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12764__$1,(8),inst_12751,inst_12741);
} else
{if((state_val_12765 === (9)))
{var state_12764__$1 = state_12764;var statearr_12775_12798 = state_12764__$1;(statearr_12775_12798[(2)] = tc);
(statearr_12775_12798[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12765 === (5)))
{var inst_12744 = cljs.core.async.close_BANG_.call(null,tc);var inst_12745 = cljs.core.async.close_BANG_.call(null,fc);var state_12764__$1 = (function (){var statearr_12776 = state_12764;(statearr_12776[(8)] = inst_12744);
return statearr_12776;
})();var statearr_12777_12799 = state_12764__$1;(statearr_12777_12799[(2)] = inst_12745);
(statearr_12777_12799[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12765 === (14)))
{var inst_12758 = (state_12764[(2)]);var state_12764__$1 = state_12764;var statearr_12778_12800 = state_12764__$1;(statearr_12778_12800[(2)] = inst_12758);
(statearr_12778_12800[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12765 === (10)))
{var state_12764__$1 = state_12764;var statearr_12779_12801 = state_12764__$1;(statearr_12779_12801[(2)] = fc);
(statearr_12779_12801[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12765 === (8)))
{var inst_12753 = (state_12764[(2)]);var state_12764__$1 = state_12764;if(cljs.core.truth_(inst_12753))
{var statearr_12780_12802 = state_12764__$1;(statearr_12780_12802[(1)] = (12));
} else
{var statearr_12781_12803 = state_12764__$1;(statearr_12781_12803[(1)] = (13));
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
});})(c__6055__auto___12789,tc,fc))
;return ((function (switch__6040__auto__,c__6055__auto___12789,tc,fc){
return (function() {
var state_machine__6041__auto__ = null;
var state_machine__6041__auto____0 = (function (){var statearr_12785 = [null,null,null,null,null,null,null,null,null];(statearr_12785[(0)] = state_machine__6041__auto__);
(statearr_12785[(1)] = (1));
return statearr_12785;
});
var state_machine__6041__auto____1 = (function (state_12764){while(true){
var ret_value__6042__auto__ = (function (){try{while(true){
var result__6043__auto__ = switch__6040__auto__.call(null,state_12764);if(cljs.core.keyword_identical_QMARK_.call(null,result__6043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6043__auto__;
}
break;
}
}catch (e12786){if((e12786 instanceof Object))
{var ex__6044__auto__ = e12786;var statearr_12787_12804 = state_12764;(statearr_12787_12804[(5)] = ex__6044__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12764);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12786;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12805 = state_12764;
state_12764 = G__12805;
continue;
}
} else
{return ret_value__6042__auto__;
}
break;
}
});
state_machine__6041__auto__ = function(state_12764){
switch(arguments.length){
case 0:
return state_machine__6041__auto____0.call(this);
case 1:
return state_machine__6041__auto____1.call(this,state_12764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6041__auto____0;
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6041__auto____1;
return state_machine__6041__auto__;
})()
;})(switch__6040__auto__,c__6055__auto___12789,tc,fc))
})();var state__6057__auto__ = (function (){var statearr_12788 = f__6056__auto__.call(null);(statearr_12788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6055__auto___12789);
return statearr_12788;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6057__auto__);
});})(c__6055__auto___12789,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6055__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6055__auto__){
return (function (){var f__6056__auto__ = (function (){var switch__6040__auto__ = ((function (c__6055__auto__){
return (function (state_12852){var state_val_12853 = (state_12852[(1)]);if((state_val_12853 === (7)))
{var inst_12848 = (state_12852[(2)]);var state_12852__$1 = state_12852;var statearr_12854_12870 = state_12852__$1;(statearr_12854_12870[(2)] = inst_12848);
(statearr_12854_12870[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12853 === (6)))
{var inst_12838 = (state_12852[(7)]);var inst_12841 = (state_12852[(8)]);var inst_12845 = f.call(null,inst_12838,inst_12841);var inst_12838__$1 = inst_12845;var state_12852__$1 = (function (){var statearr_12855 = state_12852;(statearr_12855[(7)] = inst_12838__$1);
return statearr_12855;
})();var statearr_12856_12871 = state_12852__$1;(statearr_12856_12871[(2)] = null);
(statearr_12856_12871[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12853 === (5)))
{var inst_12838 = (state_12852[(7)]);var state_12852__$1 = state_12852;var statearr_12857_12872 = state_12852__$1;(statearr_12857_12872[(2)] = inst_12838);
(statearr_12857_12872[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12853 === (4)))
{var inst_12841 = (state_12852[(8)]);var inst_12841__$1 = (state_12852[(2)]);var inst_12842 = (inst_12841__$1 == null);var state_12852__$1 = (function (){var statearr_12858 = state_12852;(statearr_12858[(8)] = inst_12841__$1);
return statearr_12858;
})();if(cljs.core.truth_(inst_12842))
{var statearr_12859_12873 = state_12852__$1;(statearr_12859_12873[(1)] = (5));
} else
{var statearr_12860_12874 = state_12852__$1;(statearr_12860_12874[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12853 === (3)))
{var inst_12850 = (state_12852[(2)]);var state_12852__$1 = state_12852;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12852__$1,inst_12850);
} else
{if((state_val_12853 === (2)))
{var state_12852__$1 = state_12852;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12852__$1,(4),ch);
} else
{if((state_val_12853 === (1)))
{var inst_12838 = init;var state_12852__$1 = (function (){var statearr_12861 = state_12852;(statearr_12861[(7)] = inst_12838);
return statearr_12861;
})();var statearr_12862_12875 = state_12852__$1;(statearr_12862_12875[(2)] = null);
(statearr_12862_12875[(1)] = (2));
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
});})(c__6055__auto__))
;return ((function (switch__6040__auto__,c__6055__auto__){
return (function() {
var state_machine__6041__auto__ = null;
var state_machine__6041__auto____0 = (function (){var statearr_12866 = [null,null,null,null,null,null,null,null,null];(statearr_12866[(0)] = state_machine__6041__auto__);
(statearr_12866[(1)] = (1));
return statearr_12866;
});
var state_machine__6041__auto____1 = (function (state_12852){while(true){
var ret_value__6042__auto__ = (function (){try{while(true){
var result__6043__auto__ = switch__6040__auto__.call(null,state_12852);if(cljs.core.keyword_identical_QMARK_.call(null,result__6043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6043__auto__;
}
break;
}
}catch (e12867){if((e12867 instanceof Object))
{var ex__6044__auto__ = e12867;var statearr_12868_12876 = state_12852;(statearr_12868_12876[(5)] = ex__6044__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12852);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12867;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12877 = state_12852;
state_12852 = G__12877;
continue;
}
} else
{return ret_value__6042__auto__;
}
break;
}
});
state_machine__6041__auto__ = function(state_12852){
switch(arguments.length){
case 0:
return state_machine__6041__auto____0.call(this);
case 1:
return state_machine__6041__auto____1.call(this,state_12852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6041__auto____0;
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6041__auto____1;
return state_machine__6041__auto__;
})()
;})(switch__6040__auto__,c__6055__auto__))
})();var state__6057__auto__ = (function (){var statearr_12869 = f__6056__auto__.call(null);(statearr_12869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6055__auto__);
return statearr_12869;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6057__auto__);
});})(c__6055__auto__))
);
return c__6055__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6055__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6055__auto__){
return (function (){var f__6056__auto__ = (function (){var switch__6040__auto__ = ((function (c__6055__auto__){
return (function (state_12951){var state_val_12952 = (state_12951[(1)]);if((state_val_12952 === (7)))
{var inst_12933 = (state_12951[(2)]);var state_12951__$1 = state_12951;var statearr_12953_12976 = state_12951__$1;(statearr_12953_12976[(2)] = inst_12933);
(statearr_12953_12976[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12952 === (1)))
{var inst_12927 = cljs.core.seq.call(null,coll);var inst_12928 = inst_12927;var state_12951__$1 = (function (){var statearr_12954 = state_12951;(statearr_12954[(7)] = inst_12928);
return statearr_12954;
})();var statearr_12955_12977 = state_12951__$1;(statearr_12955_12977[(2)] = null);
(statearr_12955_12977[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12952 === (4)))
{var inst_12928 = (state_12951[(7)]);var inst_12931 = cljs.core.first.call(null,inst_12928);var state_12951__$1 = state_12951;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12951__$1,(7),ch,inst_12931);
} else
{if((state_val_12952 === (13)))
{var inst_12945 = (state_12951[(2)]);var state_12951__$1 = state_12951;var statearr_12956_12978 = state_12951__$1;(statearr_12956_12978[(2)] = inst_12945);
(statearr_12956_12978[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12952 === (6)))
{var inst_12936 = (state_12951[(2)]);var state_12951__$1 = state_12951;if(cljs.core.truth_(inst_12936))
{var statearr_12957_12979 = state_12951__$1;(statearr_12957_12979[(1)] = (8));
} else
{var statearr_12958_12980 = state_12951__$1;(statearr_12958_12980[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12952 === (3)))
{var inst_12949 = (state_12951[(2)]);var state_12951__$1 = state_12951;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12951__$1,inst_12949);
} else
{if((state_val_12952 === (12)))
{var state_12951__$1 = state_12951;var statearr_12959_12981 = state_12951__$1;(statearr_12959_12981[(2)] = null);
(statearr_12959_12981[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12952 === (2)))
{var inst_12928 = (state_12951[(7)]);var state_12951__$1 = state_12951;if(cljs.core.truth_(inst_12928))
{var statearr_12960_12982 = state_12951__$1;(statearr_12960_12982[(1)] = (4));
} else
{var statearr_12961_12983 = state_12951__$1;(statearr_12961_12983[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12952 === (11)))
{var inst_12942 = cljs.core.async.close_BANG_.call(null,ch);var state_12951__$1 = state_12951;var statearr_12962_12984 = state_12951__$1;(statearr_12962_12984[(2)] = inst_12942);
(statearr_12962_12984[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12952 === (9)))
{var state_12951__$1 = state_12951;if(cljs.core.truth_(close_QMARK_))
{var statearr_12963_12985 = state_12951__$1;(statearr_12963_12985[(1)] = (11));
} else
{var statearr_12964_12986 = state_12951__$1;(statearr_12964_12986[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12952 === (5)))
{var inst_12928 = (state_12951[(7)]);var state_12951__$1 = state_12951;var statearr_12965_12987 = state_12951__$1;(statearr_12965_12987[(2)] = inst_12928);
(statearr_12965_12987[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12952 === (10)))
{var inst_12947 = (state_12951[(2)]);var state_12951__$1 = state_12951;var statearr_12966_12988 = state_12951__$1;(statearr_12966_12988[(2)] = inst_12947);
(statearr_12966_12988[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12952 === (8)))
{var inst_12928 = (state_12951[(7)]);var inst_12938 = cljs.core.next.call(null,inst_12928);var inst_12928__$1 = inst_12938;var state_12951__$1 = (function (){var statearr_12967 = state_12951;(statearr_12967[(7)] = inst_12928__$1);
return statearr_12967;
})();var statearr_12968_12989 = state_12951__$1;(statearr_12968_12989[(2)] = null);
(statearr_12968_12989[(1)] = (2));
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
});})(c__6055__auto__))
;return ((function (switch__6040__auto__,c__6055__auto__){
return (function() {
var state_machine__6041__auto__ = null;
var state_machine__6041__auto____0 = (function (){var statearr_12972 = [null,null,null,null,null,null,null,null];(statearr_12972[(0)] = state_machine__6041__auto__);
(statearr_12972[(1)] = (1));
return statearr_12972;
});
var state_machine__6041__auto____1 = (function (state_12951){while(true){
var ret_value__6042__auto__ = (function (){try{while(true){
var result__6043__auto__ = switch__6040__auto__.call(null,state_12951);if(cljs.core.keyword_identical_QMARK_.call(null,result__6043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6043__auto__;
}
break;
}
}catch (e12973){if((e12973 instanceof Object))
{var ex__6044__auto__ = e12973;var statearr_12974_12990 = state_12951;(statearr_12974_12990[(5)] = ex__6044__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12951);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12973;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12991 = state_12951;
state_12951 = G__12991;
continue;
}
} else
{return ret_value__6042__auto__;
}
break;
}
});
state_machine__6041__auto__ = function(state_12951){
switch(arguments.length){
case 0:
return state_machine__6041__auto____0.call(this);
case 1:
return state_machine__6041__auto____1.call(this,state_12951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6041__auto____0;
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6041__auto____1;
return state_machine__6041__auto__;
})()
;})(switch__6040__auto__,c__6055__auto__))
})();var state__6057__auto__ = (function (){var statearr_12975 = f__6056__auto__.call(null);(statearr_12975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6055__auto__);
return statearr_12975;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6057__auto__);
});})(c__6055__auto__))
);
return c__6055__auto__;
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
cljs.core.async.Mux = (function (){var obj12993 = {};return obj12993;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3531__auto__ = _;if(and__3531__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4170__auto__ = (((_ == null))?null:_);return (function (){var or__3543__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12995 = {};return obj12995;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13217 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13217 = (function (cs,ch,mult,meta13218){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13218 = meta13218;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13217.cljs$lang$type = true;
cljs.core.async.t13217.cljs$lang$ctorStr = "cljs.core.async/t13217";
cljs.core.async.t13217.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t13217");
});})(cs))
;
cljs.core.async.t13217.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13217.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13217.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13217.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13217.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13217.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13217.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13219){var self__ = this;
var _13219__$1 = this;return self__.meta13218;
});})(cs))
;
cljs.core.async.t13217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13219,meta13218__$1){var self__ = this;
var _13219__$1 = this;return (new cljs.core.async.t13217(self__.cs,self__.ch,self__.mult,meta13218__$1));
});})(cs))
;
cljs.core.async.__GT_t13217 = ((function (cs){
return (function __GT_t13217(cs__$1,ch__$1,mult__$1,meta13218){return (new cljs.core.async.t13217(cs__$1,ch__$1,mult__$1,meta13218));
});})(cs))
;
}
return (new cljs.core.async.t13217(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6055__auto___13438 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6055__auto___13438,cs,m,dchan,dctr,done){
return (function (){var f__6056__auto__ = (function (){var switch__6040__auto__ = ((function (c__6055__auto___13438,cs,m,dchan,dctr,done){
return (function (state_13350){var state_val_13351 = (state_13350[(1)]);if((state_val_13351 === (7)))
{var inst_13346 = (state_13350[(2)]);var state_13350__$1 = state_13350;var statearr_13352_13439 = state_13350__$1;(statearr_13352_13439[(2)] = inst_13346);
(statearr_13352_13439[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (20)))
{var inst_13251 = (state_13350[(7)]);var inst_13261 = cljs.core.first.call(null,inst_13251);var inst_13262 = cljs.core.nth.call(null,inst_13261,(0),null);var inst_13263 = cljs.core.nth.call(null,inst_13261,(1),null);var state_13350__$1 = (function (){var statearr_13353 = state_13350;(statearr_13353[(8)] = inst_13262);
return statearr_13353;
})();if(cljs.core.truth_(inst_13263))
{var statearr_13354_13440 = state_13350__$1;(statearr_13354_13440[(1)] = (22));
} else
{var statearr_13355_13441 = state_13350__$1;(statearr_13355_13441[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (27)))
{var inst_13293 = (state_13350[(9)]);var inst_13291 = (state_13350[(10)]);var inst_13222 = (state_13350[(11)]);var inst_13298 = (state_13350[(12)]);var inst_13298__$1 = cljs.core._nth.call(null,inst_13291,inst_13293);var inst_13299 = cljs.core.async.put_BANG_.call(null,inst_13298__$1,inst_13222,done);var state_13350__$1 = (function (){var statearr_13356 = state_13350;(statearr_13356[(12)] = inst_13298__$1);
return statearr_13356;
})();if(cljs.core.truth_(inst_13299))
{var statearr_13357_13442 = state_13350__$1;(statearr_13357_13442[(1)] = (30));
} else
{var statearr_13358_13443 = state_13350__$1;(statearr_13358_13443[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (1)))
{var state_13350__$1 = state_13350;var statearr_13359_13444 = state_13350__$1;(statearr_13359_13444[(2)] = null);
(statearr_13359_13444[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (24)))
{var inst_13251 = (state_13350[(7)]);var inst_13268 = (state_13350[(2)]);var inst_13269 = cljs.core.next.call(null,inst_13251);var inst_13231 = inst_13269;var inst_13232 = null;var inst_13233 = (0);var inst_13234 = (0);var state_13350__$1 = (function (){var statearr_13360 = state_13350;(statearr_13360[(13)] = inst_13233);
(statearr_13360[(14)] = inst_13234);
(statearr_13360[(15)] = inst_13232);
(statearr_13360[(16)] = inst_13231);
(statearr_13360[(17)] = inst_13268);
return statearr_13360;
})();var statearr_13361_13445 = state_13350__$1;(statearr_13361_13445[(2)] = null);
(statearr_13361_13445[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (39)))
{var state_13350__$1 = state_13350;var statearr_13365_13446 = state_13350__$1;(statearr_13365_13446[(2)] = null);
(statearr_13365_13446[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (4)))
{var inst_13222 = (state_13350[(11)]);var inst_13222__$1 = (state_13350[(2)]);var inst_13223 = (inst_13222__$1 == null);var state_13350__$1 = (function (){var statearr_13366 = state_13350;(statearr_13366[(11)] = inst_13222__$1);
return statearr_13366;
})();if(cljs.core.truth_(inst_13223))
{var statearr_13367_13447 = state_13350__$1;(statearr_13367_13447[(1)] = (5));
} else
{var statearr_13368_13448 = state_13350__$1;(statearr_13368_13448[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (15)))
{var inst_13233 = (state_13350[(13)]);var inst_13234 = (state_13350[(14)]);var inst_13232 = (state_13350[(15)]);var inst_13231 = (state_13350[(16)]);var inst_13247 = (state_13350[(2)]);var inst_13248 = (inst_13234 + (1));var tmp13362 = inst_13233;var tmp13363 = inst_13232;var tmp13364 = inst_13231;var inst_13231__$1 = tmp13364;var inst_13232__$1 = tmp13363;var inst_13233__$1 = tmp13362;var inst_13234__$1 = inst_13248;var state_13350__$1 = (function (){var statearr_13369 = state_13350;(statearr_13369[(18)] = inst_13247);
(statearr_13369[(13)] = inst_13233__$1);
(statearr_13369[(14)] = inst_13234__$1);
(statearr_13369[(15)] = inst_13232__$1);
(statearr_13369[(16)] = inst_13231__$1);
return statearr_13369;
})();var statearr_13370_13449 = state_13350__$1;(statearr_13370_13449[(2)] = null);
(statearr_13370_13449[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (21)))
{var inst_13272 = (state_13350[(2)]);var state_13350__$1 = state_13350;var statearr_13374_13450 = state_13350__$1;(statearr_13374_13450[(2)] = inst_13272);
(statearr_13374_13450[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (31)))
{var inst_13298 = (state_13350[(12)]);var inst_13302 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13303 = cljs.core.async.untap_STAR_.call(null,m,inst_13298);var state_13350__$1 = (function (){var statearr_13375 = state_13350;(statearr_13375[(19)] = inst_13302);
return statearr_13375;
})();var statearr_13376_13451 = state_13350__$1;(statearr_13376_13451[(2)] = inst_13303);
(statearr_13376_13451[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (32)))
{var inst_13293 = (state_13350[(9)]);var inst_13291 = (state_13350[(10)]);var inst_13290 = (state_13350[(20)]);var inst_13292 = (state_13350[(21)]);var inst_13305 = (state_13350[(2)]);var inst_13306 = (inst_13293 + (1));var tmp13371 = inst_13291;var tmp13372 = inst_13290;var tmp13373 = inst_13292;var inst_13290__$1 = tmp13372;var inst_13291__$1 = tmp13371;var inst_13292__$1 = tmp13373;var inst_13293__$1 = inst_13306;var state_13350__$1 = (function (){var statearr_13377 = state_13350;(statearr_13377[(9)] = inst_13293__$1);
(statearr_13377[(22)] = inst_13305);
(statearr_13377[(10)] = inst_13291__$1);
(statearr_13377[(20)] = inst_13290__$1);
(statearr_13377[(21)] = inst_13292__$1);
return statearr_13377;
})();var statearr_13378_13452 = state_13350__$1;(statearr_13378_13452[(2)] = null);
(statearr_13378_13452[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (40)))
{var inst_13318 = (state_13350[(23)]);var inst_13322 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13323 = cljs.core.async.untap_STAR_.call(null,m,inst_13318);var state_13350__$1 = (function (){var statearr_13379 = state_13350;(statearr_13379[(24)] = inst_13322);
return statearr_13379;
})();var statearr_13380_13453 = state_13350__$1;(statearr_13380_13453[(2)] = inst_13323);
(statearr_13380_13453[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (33)))
{var inst_13309 = (state_13350[(25)]);var inst_13311 = cljs.core.chunked_seq_QMARK_.call(null,inst_13309);var state_13350__$1 = state_13350;if(inst_13311)
{var statearr_13381_13454 = state_13350__$1;(statearr_13381_13454[(1)] = (36));
} else
{var statearr_13382_13455 = state_13350__$1;(statearr_13382_13455[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (13)))
{var inst_13241 = (state_13350[(26)]);var inst_13244 = cljs.core.async.close_BANG_.call(null,inst_13241);var state_13350__$1 = state_13350;var statearr_13383_13456 = state_13350__$1;(statearr_13383_13456[(2)] = inst_13244);
(statearr_13383_13456[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (22)))
{var inst_13262 = (state_13350[(8)]);var inst_13265 = cljs.core.async.close_BANG_.call(null,inst_13262);var state_13350__$1 = state_13350;var statearr_13384_13457 = state_13350__$1;(statearr_13384_13457[(2)] = inst_13265);
(statearr_13384_13457[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (36)))
{var inst_13309 = (state_13350[(25)]);var inst_13313 = cljs.core.chunk_first.call(null,inst_13309);var inst_13314 = cljs.core.chunk_rest.call(null,inst_13309);var inst_13315 = cljs.core.count.call(null,inst_13313);var inst_13290 = inst_13314;var inst_13291 = inst_13313;var inst_13292 = inst_13315;var inst_13293 = (0);var state_13350__$1 = (function (){var statearr_13385 = state_13350;(statearr_13385[(9)] = inst_13293);
(statearr_13385[(10)] = inst_13291);
(statearr_13385[(20)] = inst_13290);
(statearr_13385[(21)] = inst_13292);
return statearr_13385;
})();var statearr_13386_13458 = state_13350__$1;(statearr_13386_13458[(2)] = null);
(statearr_13386_13458[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (41)))
{var inst_13309 = (state_13350[(25)]);var inst_13325 = (state_13350[(2)]);var inst_13326 = cljs.core.next.call(null,inst_13309);var inst_13290 = inst_13326;var inst_13291 = null;var inst_13292 = (0);var inst_13293 = (0);var state_13350__$1 = (function (){var statearr_13387 = state_13350;(statearr_13387[(9)] = inst_13293);
(statearr_13387[(10)] = inst_13291);
(statearr_13387[(27)] = inst_13325);
(statearr_13387[(20)] = inst_13290);
(statearr_13387[(21)] = inst_13292);
return statearr_13387;
})();var statearr_13388_13459 = state_13350__$1;(statearr_13388_13459[(2)] = null);
(statearr_13388_13459[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (43)))
{var state_13350__$1 = state_13350;var statearr_13389_13460 = state_13350__$1;(statearr_13389_13460[(2)] = null);
(statearr_13389_13460[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (29)))
{var inst_13334 = (state_13350[(2)]);var state_13350__$1 = state_13350;var statearr_13390_13461 = state_13350__$1;(statearr_13390_13461[(2)] = inst_13334);
(statearr_13390_13461[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (44)))
{var inst_13343 = (state_13350[(2)]);var state_13350__$1 = (function (){var statearr_13391 = state_13350;(statearr_13391[(28)] = inst_13343);
return statearr_13391;
})();var statearr_13392_13462 = state_13350__$1;(statearr_13392_13462[(2)] = null);
(statearr_13392_13462[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (6)))
{var inst_13282 = (state_13350[(29)]);var inst_13281 = cljs.core.deref.call(null,cs);var inst_13282__$1 = cljs.core.keys.call(null,inst_13281);var inst_13283 = cljs.core.count.call(null,inst_13282__$1);var inst_13284 = cljs.core.reset_BANG_.call(null,dctr,inst_13283);var inst_13289 = cljs.core.seq.call(null,inst_13282__$1);var inst_13290 = inst_13289;var inst_13291 = null;var inst_13292 = (0);var inst_13293 = (0);var state_13350__$1 = (function (){var statearr_13393 = state_13350;(statearr_13393[(29)] = inst_13282__$1);
(statearr_13393[(9)] = inst_13293);
(statearr_13393[(10)] = inst_13291);
(statearr_13393[(30)] = inst_13284);
(statearr_13393[(20)] = inst_13290);
(statearr_13393[(21)] = inst_13292);
return statearr_13393;
})();var statearr_13394_13463 = state_13350__$1;(statearr_13394_13463[(2)] = null);
(statearr_13394_13463[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (28)))
{var inst_13290 = (state_13350[(20)]);var inst_13309 = (state_13350[(25)]);var inst_13309__$1 = cljs.core.seq.call(null,inst_13290);var state_13350__$1 = (function (){var statearr_13395 = state_13350;(statearr_13395[(25)] = inst_13309__$1);
return statearr_13395;
})();if(inst_13309__$1)
{var statearr_13396_13464 = state_13350__$1;(statearr_13396_13464[(1)] = (33));
} else
{var statearr_13397_13465 = state_13350__$1;(statearr_13397_13465[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (25)))
{var inst_13293 = (state_13350[(9)]);var inst_13292 = (state_13350[(21)]);var inst_13295 = (inst_13293 < inst_13292);var inst_13296 = inst_13295;var state_13350__$1 = state_13350;if(cljs.core.truth_(inst_13296))
{var statearr_13398_13466 = state_13350__$1;(statearr_13398_13466[(1)] = (27));
} else
{var statearr_13399_13467 = state_13350__$1;(statearr_13399_13467[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (34)))
{var state_13350__$1 = state_13350;var statearr_13400_13468 = state_13350__$1;(statearr_13400_13468[(2)] = null);
(statearr_13400_13468[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (17)))
{var state_13350__$1 = state_13350;var statearr_13401_13469 = state_13350__$1;(statearr_13401_13469[(2)] = null);
(statearr_13401_13469[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (3)))
{var inst_13348 = (state_13350[(2)]);var state_13350__$1 = state_13350;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13350__$1,inst_13348);
} else
{if((state_val_13351 === (12)))
{var inst_13277 = (state_13350[(2)]);var state_13350__$1 = state_13350;var statearr_13402_13470 = state_13350__$1;(statearr_13402_13470[(2)] = inst_13277);
(statearr_13402_13470[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (2)))
{var state_13350__$1 = state_13350;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13350__$1,(4),ch);
} else
{if((state_val_13351 === (23)))
{var state_13350__$1 = state_13350;var statearr_13403_13471 = state_13350__$1;(statearr_13403_13471[(2)] = null);
(statearr_13403_13471[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (35)))
{var inst_13332 = (state_13350[(2)]);var state_13350__$1 = state_13350;var statearr_13404_13472 = state_13350__$1;(statearr_13404_13472[(2)] = inst_13332);
(statearr_13404_13472[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (19)))
{var inst_13251 = (state_13350[(7)]);var inst_13255 = cljs.core.chunk_first.call(null,inst_13251);var inst_13256 = cljs.core.chunk_rest.call(null,inst_13251);var inst_13257 = cljs.core.count.call(null,inst_13255);var inst_13231 = inst_13256;var inst_13232 = inst_13255;var inst_13233 = inst_13257;var inst_13234 = (0);var state_13350__$1 = (function (){var statearr_13405 = state_13350;(statearr_13405[(13)] = inst_13233);
(statearr_13405[(14)] = inst_13234);
(statearr_13405[(15)] = inst_13232);
(statearr_13405[(16)] = inst_13231);
return statearr_13405;
})();var statearr_13406_13473 = state_13350__$1;(statearr_13406_13473[(2)] = null);
(statearr_13406_13473[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (11)))
{var inst_13251 = (state_13350[(7)]);var inst_13231 = (state_13350[(16)]);var inst_13251__$1 = cljs.core.seq.call(null,inst_13231);var state_13350__$1 = (function (){var statearr_13407 = state_13350;(statearr_13407[(7)] = inst_13251__$1);
return statearr_13407;
})();if(inst_13251__$1)
{var statearr_13408_13474 = state_13350__$1;(statearr_13408_13474[(1)] = (16));
} else
{var statearr_13409_13475 = state_13350__$1;(statearr_13409_13475[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (9)))
{var inst_13279 = (state_13350[(2)]);var state_13350__$1 = state_13350;var statearr_13410_13476 = state_13350__$1;(statearr_13410_13476[(2)] = inst_13279);
(statearr_13410_13476[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (5)))
{var inst_13229 = cljs.core.deref.call(null,cs);var inst_13230 = cljs.core.seq.call(null,inst_13229);var inst_13231 = inst_13230;var inst_13232 = null;var inst_13233 = (0);var inst_13234 = (0);var state_13350__$1 = (function (){var statearr_13411 = state_13350;(statearr_13411[(13)] = inst_13233);
(statearr_13411[(14)] = inst_13234);
(statearr_13411[(15)] = inst_13232);
(statearr_13411[(16)] = inst_13231);
return statearr_13411;
})();var statearr_13412_13477 = state_13350__$1;(statearr_13412_13477[(2)] = null);
(statearr_13412_13477[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (14)))
{var state_13350__$1 = state_13350;var statearr_13413_13478 = state_13350__$1;(statearr_13413_13478[(2)] = null);
(statearr_13413_13478[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (45)))
{var inst_13340 = (state_13350[(2)]);var state_13350__$1 = state_13350;var statearr_13414_13479 = state_13350__$1;(statearr_13414_13479[(2)] = inst_13340);
(statearr_13414_13479[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (26)))
{var inst_13282 = (state_13350[(29)]);var inst_13336 = (state_13350[(2)]);var inst_13337 = cljs.core.seq.call(null,inst_13282);var state_13350__$1 = (function (){var statearr_13415 = state_13350;(statearr_13415[(31)] = inst_13336);
return statearr_13415;
})();if(inst_13337)
{var statearr_13416_13480 = state_13350__$1;(statearr_13416_13480[(1)] = (42));
} else
{var statearr_13417_13481 = state_13350__$1;(statearr_13417_13481[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (16)))
{var inst_13251 = (state_13350[(7)]);var inst_13253 = cljs.core.chunked_seq_QMARK_.call(null,inst_13251);var state_13350__$1 = state_13350;if(inst_13253)
{var statearr_13418_13482 = state_13350__$1;(statearr_13418_13482[(1)] = (19));
} else
{var statearr_13419_13483 = state_13350__$1;(statearr_13419_13483[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (38)))
{var inst_13329 = (state_13350[(2)]);var state_13350__$1 = state_13350;var statearr_13420_13484 = state_13350__$1;(statearr_13420_13484[(2)] = inst_13329);
(statearr_13420_13484[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (30)))
{var state_13350__$1 = state_13350;var statearr_13421_13485 = state_13350__$1;(statearr_13421_13485[(2)] = null);
(statearr_13421_13485[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (10)))
{var inst_13234 = (state_13350[(14)]);var inst_13232 = (state_13350[(15)]);var inst_13240 = cljs.core._nth.call(null,inst_13232,inst_13234);var inst_13241 = cljs.core.nth.call(null,inst_13240,(0),null);var inst_13242 = cljs.core.nth.call(null,inst_13240,(1),null);var state_13350__$1 = (function (){var statearr_13422 = state_13350;(statearr_13422[(26)] = inst_13241);
return statearr_13422;
})();if(cljs.core.truth_(inst_13242))
{var statearr_13423_13486 = state_13350__$1;(statearr_13423_13486[(1)] = (13));
} else
{var statearr_13424_13487 = state_13350__$1;(statearr_13424_13487[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (18)))
{var inst_13275 = (state_13350[(2)]);var state_13350__$1 = state_13350;var statearr_13425_13488 = state_13350__$1;(statearr_13425_13488[(2)] = inst_13275);
(statearr_13425_13488[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (42)))
{var state_13350__$1 = state_13350;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13350__$1,(45),dchan);
} else
{if((state_val_13351 === (37)))
{var inst_13318 = (state_13350[(23)]);var inst_13222 = (state_13350[(11)]);var inst_13309 = (state_13350[(25)]);var inst_13318__$1 = cljs.core.first.call(null,inst_13309);var inst_13319 = cljs.core.async.put_BANG_.call(null,inst_13318__$1,inst_13222,done);var state_13350__$1 = (function (){var statearr_13426 = state_13350;(statearr_13426[(23)] = inst_13318__$1);
return statearr_13426;
})();if(cljs.core.truth_(inst_13319))
{var statearr_13427_13489 = state_13350__$1;(statearr_13427_13489[(1)] = (39));
} else
{var statearr_13428_13490 = state_13350__$1;(statearr_13428_13490[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13351 === (8)))
{var inst_13233 = (state_13350[(13)]);var inst_13234 = (state_13350[(14)]);var inst_13236 = (inst_13234 < inst_13233);var inst_13237 = inst_13236;var state_13350__$1 = state_13350;if(cljs.core.truth_(inst_13237))
{var statearr_13429_13491 = state_13350__$1;(statearr_13429_13491[(1)] = (10));
} else
{var statearr_13430_13492 = state_13350__$1;(statearr_13430_13492[(1)] = (11));
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
});})(c__6055__auto___13438,cs,m,dchan,dctr,done))
;return ((function (switch__6040__auto__,c__6055__auto___13438,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6041__auto__ = null;
var state_machine__6041__auto____0 = (function (){var statearr_13434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13434[(0)] = state_machine__6041__auto__);
(statearr_13434[(1)] = (1));
return statearr_13434;
});
var state_machine__6041__auto____1 = (function (state_13350){while(true){
var ret_value__6042__auto__ = (function (){try{while(true){
var result__6043__auto__ = switch__6040__auto__.call(null,state_13350);if(cljs.core.keyword_identical_QMARK_.call(null,result__6043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6043__auto__;
}
break;
}
}catch (e13435){if((e13435 instanceof Object))
{var ex__6044__auto__ = e13435;var statearr_13436_13493 = state_13350;(statearr_13436_13493[(5)] = ex__6044__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13350);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13435;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13494 = state_13350;
state_13350 = G__13494;
continue;
}
} else
{return ret_value__6042__auto__;
}
break;
}
});
state_machine__6041__auto__ = function(state_13350){
switch(arguments.length){
case 0:
return state_machine__6041__auto____0.call(this);
case 1:
return state_machine__6041__auto____1.call(this,state_13350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6041__auto____0;
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6041__auto____1;
return state_machine__6041__auto__;
})()
;})(switch__6040__auto__,c__6055__auto___13438,cs,m,dchan,dctr,done))
})();var state__6057__auto__ = (function (){var statearr_13437 = f__6056__auto__.call(null);(statearr_13437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6055__auto___13438);
return statearr_13437;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6057__auto__);
});})(c__6055__auto___13438,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj13496 = {};return obj13496;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t13616 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13616 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13617){
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
this.meta13617 = meta13617;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13616.cljs$lang$type = true;
cljs.core.async.t13616.cljs$lang$ctorStr = "cljs.core.async/t13616";
cljs.core.async.t13616.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t13616");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13616.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13616.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13616.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13616.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13616.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13616.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13616.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13616.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13616.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13618){var self__ = this;
var _13618__$1 = this;return self__.meta13617;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13618,meta13617__$1){var self__ = this;
var _13618__$1 = this;return (new cljs.core.async.t13616(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13617__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13616 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13616(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13617){return (new cljs.core.async.t13616(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13617));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13616(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6055__auto___13735 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6055__auto___13735,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6056__auto__ = (function (){var switch__6040__auto__ = ((function (c__6055__auto___13735,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13688){var state_val_13689 = (state_13688[(1)]);if((state_val_13689 === (7)))
{var inst_13632 = (state_13688[(7)]);var inst_13637 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13632);var state_13688__$1 = state_13688;var statearr_13690_13736 = state_13688__$1;(statearr_13690_13736[(2)] = inst_13637);
(statearr_13690_13736[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13689 === (20)))
{var inst_13647 = (state_13688[(8)]);var state_13688__$1 = state_13688;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13688__$1,(23),out,inst_13647);
} else
{if((state_val_13689 === (1)))
{var inst_13622 = (state_13688[(9)]);var inst_13622__$1 = calc_state.call(null);var inst_13623 = cljs.core.seq_QMARK_.call(null,inst_13622__$1);var state_13688__$1 = (function (){var statearr_13691 = state_13688;(statearr_13691[(9)] = inst_13622__$1);
return statearr_13691;
})();if(inst_13623)
{var statearr_13692_13737 = state_13688__$1;(statearr_13692_13737[(1)] = (2));
} else
{var statearr_13693_13738 = state_13688__$1;(statearr_13693_13738[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13689 === (24)))
{var inst_13640 = (state_13688[(10)]);var inst_13632 = inst_13640;var state_13688__$1 = (function (){var statearr_13694 = state_13688;(statearr_13694[(7)] = inst_13632);
return statearr_13694;
})();var statearr_13695_13739 = state_13688__$1;(statearr_13695_13739[(2)] = null);
(statearr_13695_13739[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13689 === (4)))
{var inst_13622 = (state_13688[(9)]);var inst_13628 = (state_13688[(2)]);var inst_13629 = cljs.core.get.call(null,inst_13628,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13630 = cljs.core.get.call(null,inst_13628,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13631 = cljs.core.get.call(null,inst_13628,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_13632 = inst_13622;var state_13688__$1 = (function (){var statearr_13696 = state_13688;(statearr_13696[(11)] = inst_13630);
(statearr_13696[(12)] = inst_13629);
(statearr_13696[(7)] = inst_13632);
(statearr_13696[(13)] = inst_13631);
return statearr_13696;
})();var statearr_13697_13740 = state_13688__$1;(statearr_13697_13740[(2)] = null);
(statearr_13697_13740[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13689 === (15)))
{var state_13688__$1 = state_13688;var statearr_13698_13741 = state_13688__$1;(statearr_13698_13741[(2)] = null);
(statearr_13698_13741[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13689 === (21)))
{var inst_13640 = (state_13688[(10)]);var inst_13632 = inst_13640;var state_13688__$1 = (function (){var statearr_13699 = state_13688;(statearr_13699[(7)] = inst_13632);
return statearr_13699;
})();var statearr_13700_13742 = state_13688__$1;(statearr_13700_13742[(2)] = null);
(statearr_13700_13742[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13689 === (13)))
{var inst_13684 = (state_13688[(2)]);var state_13688__$1 = state_13688;var statearr_13701_13743 = state_13688__$1;(statearr_13701_13743[(2)] = inst_13684);
(statearr_13701_13743[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13689 === (22)))
{var inst_13682 = (state_13688[(2)]);var state_13688__$1 = state_13688;var statearr_13702_13744 = state_13688__$1;(statearr_13702_13744[(2)] = inst_13682);
(statearr_13702_13744[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13689 === (6)))
{var inst_13686 = (state_13688[(2)]);var state_13688__$1 = state_13688;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13688__$1,inst_13686);
} else
{if((state_val_13689 === (25)))
{var state_13688__$1 = state_13688;var statearr_13703_13745 = state_13688__$1;(statearr_13703_13745[(2)] = null);
(statearr_13703_13745[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13689 === (17)))
{var inst_13662 = (state_13688[(14)]);var state_13688__$1 = state_13688;var statearr_13704_13746 = state_13688__$1;(statearr_13704_13746[(2)] = inst_13662);
(statearr_13704_13746[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13689 === (3)))
{var inst_13622 = (state_13688[(9)]);var state_13688__$1 = state_13688;var statearr_13705_13747 = state_13688__$1;(statearr_13705_13747[(2)] = inst_13622);
(statearr_13705_13747[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13689 === (12)))
{var inst_13662 = (state_13688[(14)]);var inst_13648 = (state_13688[(15)]);var inst_13643 = (state_13688[(16)]);var inst_13662__$1 = inst_13643.call(null,inst_13648);var state_13688__$1 = (function (){var statearr_13706 = state_13688;(statearr_13706[(14)] = inst_13662__$1);
return statearr_13706;
})();if(cljs.core.truth_(inst_13662__$1))
{var statearr_13707_13748 = state_13688__$1;(statearr_13707_13748[(1)] = (17));
} else
{var statearr_13708_13749 = state_13688__$1;(statearr_13708_13749[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13689 === (2)))
{var inst_13622 = (state_13688[(9)]);var inst_13625 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13622);var state_13688__$1 = state_13688;var statearr_13709_13750 = state_13688__$1;(statearr_13709_13750[(2)] = inst_13625);
(statearr_13709_13750[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13689 === (23)))
{var inst_13673 = (state_13688[(2)]);var state_13688__$1 = state_13688;if(cljs.core.truth_(inst_13673))
{var statearr_13710_13751 = state_13688__$1;(statearr_13710_13751[(1)] = (24));
} else
{var statearr_13711_13752 = state_13688__$1;(statearr_13711_13752[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13689 === (19)))
{var inst_13670 = (state_13688[(2)]);var state_13688__$1 = state_13688;if(cljs.core.truth_(inst_13670))
{var statearr_13712_13753 = state_13688__$1;(statearr_13712_13753[(1)] = (20));
} else
{var statearr_13713_13754 = state_13688__$1;(statearr_13713_13754[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13689 === (11)))
{var inst_13647 = (state_13688[(8)]);var inst_13653 = (inst_13647 == null);var state_13688__$1 = state_13688;if(cljs.core.truth_(inst_13653))
{var statearr_13714_13755 = state_13688__$1;(statearr_13714_13755[(1)] = (14));
} else
{var statearr_13715_13756 = state_13688__$1;(statearr_13715_13756[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13689 === (9)))
{var inst_13640 = (state_13688[(10)]);var inst_13640__$1 = (state_13688[(2)]);var inst_13641 = cljs.core.get.call(null,inst_13640__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13642 = cljs.core.get.call(null,inst_13640__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13643 = cljs.core.get.call(null,inst_13640__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_13688__$1 = (function (){var statearr_13716 = state_13688;(statearr_13716[(17)] = inst_13642);
(statearr_13716[(10)] = inst_13640__$1);
(statearr_13716[(16)] = inst_13643);
return statearr_13716;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13688__$1,(10),inst_13641);
} else
{if((state_val_13689 === (5)))
{var inst_13632 = (state_13688[(7)]);var inst_13635 = cljs.core.seq_QMARK_.call(null,inst_13632);var state_13688__$1 = state_13688;if(inst_13635)
{var statearr_13717_13757 = state_13688__$1;(statearr_13717_13757[(1)] = (7));
} else
{var statearr_13718_13758 = state_13688__$1;(statearr_13718_13758[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13689 === (14)))
{var inst_13648 = (state_13688[(15)]);var inst_13655 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13648);var state_13688__$1 = state_13688;var statearr_13719_13759 = state_13688__$1;(statearr_13719_13759[(2)] = inst_13655);
(statearr_13719_13759[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13689 === (26)))
{var inst_13678 = (state_13688[(2)]);var state_13688__$1 = state_13688;var statearr_13720_13760 = state_13688__$1;(statearr_13720_13760[(2)] = inst_13678);
(statearr_13720_13760[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13689 === (16)))
{var inst_13658 = (state_13688[(2)]);var inst_13659 = calc_state.call(null);var inst_13632 = inst_13659;var state_13688__$1 = (function (){var statearr_13721 = state_13688;(statearr_13721[(18)] = inst_13658);
(statearr_13721[(7)] = inst_13632);
return statearr_13721;
})();var statearr_13722_13761 = state_13688__$1;(statearr_13722_13761[(2)] = null);
(statearr_13722_13761[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13689 === (10)))
{var inst_13647 = (state_13688[(8)]);var inst_13648 = (state_13688[(15)]);var inst_13646 = (state_13688[(2)]);var inst_13647__$1 = cljs.core.nth.call(null,inst_13646,(0),null);var inst_13648__$1 = cljs.core.nth.call(null,inst_13646,(1),null);var inst_13649 = (inst_13647__$1 == null);var inst_13650 = cljs.core._EQ_.call(null,inst_13648__$1,change);var inst_13651 = (inst_13649) || (inst_13650);var state_13688__$1 = (function (){var statearr_13723 = state_13688;(statearr_13723[(8)] = inst_13647__$1);
(statearr_13723[(15)] = inst_13648__$1);
return statearr_13723;
})();if(cljs.core.truth_(inst_13651))
{var statearr_13724_13762 = state_13688__$1;(statearr_13724_13762[(1)] = (11));
} else
{var statearr_13725_13763 = state_13688__$1;(statearr_13725_13763[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13689 === (18)))
{var inst_13648 = (state_13688[(15)]);var inst_13642 = (state_13688[(17)]);var inst_13643 = (state_13688[(16)]);var inst_13665 = cljs.core.empty_QMARK_.call(null,inst_13643);var inst_13666 = inst_13642.call(null,inst_13648);var inst_13667 = cljs.core.not.call(null,inst_13666);var inst_13668 = (inst_13665) && (inst_13667);var state_13688__$1 = state_13688;var statearr_13726_13764 = state_13688__$1;(statearr_13726_13764[(2)] = inst_13668);
(statearr_13726_13764[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13689 === (8)))
{var inst_13632 = (state_13688[(7)]);var state_13688__$1 = state_13688;var statearr_13727_13765 = state_13688__$1;(statearr_13727_13765[(2)] = inst_13632);
(statearr_13727_13765[(1)] = (9));
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
});})(c__6055__auto___13735,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6040__auto__,c__6055__auto___13735,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6041__auto__ = null;
var state_machine__6041__auto____0 = (function (){var statearr_13731 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13731[(0)] = state_machine__6041__auto__);
(statearr_13731[(1)] = (1));
return statearr_13731;
});
var state_machine__6041__auto____1 = (function (state_13688){while(true){
var ret_value__6042__auto__ = (function (){try{while(true){
var result__6043__auto__ = switch__6040__auto__.call(null,state_13688);if(cljs.core.keyword_identical_QMARK_.call(null,result__6043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6043__auto__;
}
break;
}
}catch (e13732){if((e13732 instanceof Object))
{var ex__6044__auto__ = e13732;var statearr_13733_13766 = state_13688;(statearr_13733_13766[(5)] = ex__6044__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13688);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13732;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13767 = state_13688;
state_13688 = G__13767;
continue;
}
} else
{return ret_value__6042__auto__;
}
break;
}
});
state_machine__6041__auto__ = function(state_13688){
switch(arguments.length){
case 0:
return state_machine__6041__auto____0.call(this);
case 1:
return state_machine__6041__auto____1.call(this,state_13688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6041__auto____0;
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6041__auto____1;
return state_machine__6041__auto__;
})()
;})(switch__6040__auto__,c__6055__auto___13735,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6057__auto__ = (function (){var statearr_13734 = f__6056__auto__.call(null);(statearr_13734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6055__auto___13735);
return statearr_13734;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6057__auto__);
});})(c__6055__auto___13735,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj13769 = {};return obj13769;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
return (function (topic){var or__3543__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3543__auto__,mults){
return (function (p1__13770_SHARP_){if(cljs.core.truth_(p1__13770_SHARP_.call(null,topic)))
{return p1__13770_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13770_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13893 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13893 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13894){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13894 = meta13894;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13893.cljs$lang$type = true;
cljs.core.async.t13893.cljs$lang$ctorStr = "cljs.core.async/t13893";
cljs.core.async.t13893.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t13893");
});})(mults,ensure_mult))
;
cljs.core.async.t13893.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13893.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13893.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13893.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13893.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13893.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13893.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13893.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13895){var self__ = this;
var _13895__$1 = this;return self__.meta13894;
});})(mults,ensure_mult))
;
cljs.core.async.t13893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13895,meta13894__$1){var self__ = this;
var _13895__$1 = this;return (new cljs.core.async.t13893(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13894__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13893 = ((function (mults,ensure_mult){
return (function __GT_t13893(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13894){return (new cljs.core.async.t13893(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13894));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13893(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6055__auto___14015 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6055__auto___14015,mults,ensure_mult,p){
return (function (){var f__6056__auto__ = (function (){var switch__6040__auto__ = ((function (c__6055__auto___14015,mults,ensure_mult,p){
return (function (state_13967){var state_val_13968 = (state_13967[(1)]);if((state_val_13968 === (7)))
{var inst_13963 = (state_13967[(2)]);var state_13967__$1 = state_13967;var statearr_13969_14016 = state_13967__$1;(statearr_13969_14016[(2)] = inst_13963);
(statearr_13969_14016[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13968 === (20)))
{var state_13967__$1 = state_13967;var statearr_13970_14017 = state_13967__$1;(statearr_13970_14017[(2)] = null);
(statearr_13970_14017[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13968 === (1)))
{var state_13967__$1 = state_13967;var statearr_13971_14018 = state_13967__$1;(statearr_13971_14018[(2)] = null);
(statearr_13971_14018[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13968 === (24)))
{var inst_13946 = (state_13967[(7)]);var inst_13955 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13946);var state_13967__$1 = state_13967;var statearr_13972_14019 = state_13967__$1;(statearr_13972_14019[(2)] = inst_13955);
(statearr_13972_14019[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13968 === (4)))
{var inst_13898 = (state_13967[(8)]);var inst_13898__$1 = (state_13967[(2)]);var inst_13899 = (inst_13898__$1 == null);var state_13967__$1 = (function (){var statearr_13973 = state_13967;(statearr_13973[(8)] = inst_13898__$1);
return statearr_13973;
})();if(cljs.core.truth_(inst_13899))
{var statearr_13974_14020 = state_13967__$1;(statearr_13974_14020[(1)] = (5));
} else
{var statearr_13975_14021 = state_13967__$1;(statearr_13975_14021[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13968 === (15)))
{var inst_13940 = (state_13967[(2)]);var state_13967__$1 = state_13967;var statearr_13976_14022 = state_13967__$1;(statearr_13976_14022[(2)] = inst_13940);
(statearr_13976_14022[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13968 === (21)))
{var inst_13960 = (state_13967[(2)]);var state_13967__$1 = (function (){var statearr_13977 = state_13967;(statearr_13977[(9)] = inst_13960);
return statearr_13977;
})();var statearr_13978_14023 = state_13967__$1;(statearr_13978_14023[(2)] = null);
(statearr_13978_14023[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13968 === (13)))
{var inst_13922 = (state_13967[(10)]);var inst_13924 = cljs.core.chunked_seq_QMARK_.call(null,inst_13922);var state_13967__$1 = state_13967;if(inst_13924)
{var statearr_13979_14024 = state_13967__$1;(statearr_13979_14024[(1)] = (16));
} else
{var statearr_13980_14025 = state_13967__$1;(statearr_13980_14025[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13968 === (22)))
{var inst_13952 = (state_13967[(2)]);var state_13967__$1 = state_13967;if(cljs.core.truth_(inst_13952))
{var statearr_13981_14026 = state_13967__$1;(statearr_13981_14026[(1)] = (23));
} else
{var statearr_13982_14027 = state_13967__$1;(statearr_13982_14027[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13968 === (6)))
{var inst_13946 = (state_13967[(7)]);var inst_13948 = (state_13967[(11)]);var inst_13898 = (state_13967[(8)]);var inst_13946__$1 = topic_fn.call(null,inst_13898);var inst_13947 = cljs.core.deref.call(null,mults);var inst_13948__$1 = cljs.core.get.call(null,inst_13947,inst_13946__$1);var state_13967__$1 = (function (){var statearr_13983 = state_13967;(statearr_13983[(7)] = inst_13946__$1);
(statearr_13983[(11)] = inst_13948__$1);
return statearr_13983;
})();if(cljs.core.truth_(inst_13948__$1))
{var statearr_13984_14028 = state_13967__$1;(statearr_13984_14028[(1)] = (19));
} else
{var statearr_13985_14029 = state_13967__$1;(statearr_13985_14029[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13968 === (25)))
{var inst_13957 = (state_13967[(2)]);var state_13967__$1 = state_13967;var statearr_13986_14030 = state_13967__$1;(statearr_13986_14030[(2)] = inst_13957);
(statearr_13986_14030[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13968 === (17)))
{var inst_13922 = (state_13967[(10)]);var inst_13931 = cljs.core.first.call(null,inst_13922);var inst_13932 = cljs.core.async.muxch_STAR_.call(null,inst_13931);var inst_13933 = cljs.core.async.close_BANG_.call(null,inst_13932);var inst_13934 = cljs.core.next.call(null,inst_13922);var inst_13908 = inst_13934;var inst_13909 = null;var inst_13910 = (0);var inst_13911 = (0);var state_13967__$1 = (function (){var statearr_13987 = state_13967;(statearr_13987[(12)] = inst_13911);
(statearr_13987[(13)] = inst_13910);
(statearr_13987[(14)] = inst_13908);
(statearr_13987[(15)] = inst_13909);
(statearr_13987[(16)] = inst_13933);
return statearr_13987;
})();var statearr_13988_14031 = state_13967__$1;(statearr_13988_14031[(2)] = null);
(statearr_13988_14031[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13968 === (3)))
{var inst_13965 = (state_13967[(2)]);var state_13967__$1 = state_13967;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13967__$1,inst_13965);
} else
{if((state_val_13968 === (12)))
{var inst_13942 = (state_13967[(2)]);var state_13967__$1 = state_13967;var statearr_13989_14032 = state_13967__$1;(statearr_13989_14032[(2)] = inst_13942);
(statearr_13989_14032[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13968 === (2)))
{var state_13967__$1 = state_13967;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13967__$1,(4),ch);
} else
{if((state_val_13968 === (23)))
{var state_13967__$1 = state_13967;var statearr_13990_14033 = state_13967__$1;(statearr_13990_14033[(2)] = null);
(statearr_13990_14033[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13968 === (19)))
{var inst_13948 = (state_13967[(11)]);var inst_13898 = (state_13967[(8)]);var inst_13950 = cljs.core.async.muxch_STAR_.call(null,inst_13948);var state_13967__$1 = state_13967;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13967__$1,(22),inst_13950,inst_13898);
} else
{if((state_val_13968 === (11)))
{var inst_13922 = (state_13967[(10)]);var inst_13908 = (state_13967[(14)]);var inst_13922__$1 = cljs.core.seq.call(null,inst_13908);var state_13967__$1 = (function (){var statearr_13991 = state_13967;(statearr_13991[(10)] = inst_13922__$1);
return statearr_13991;
})();if(inst_13922__$1)
{var statearr_13992_14034 = state_13967__$1;(statearr_13992_14034[(1)] = (13));
} else
{var statearr_13993_14035 = state_13967__$1;(statearr_13993_14035[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13968 === (9)))
{var inst_13944 = (state_13967[(2)]);var state_13967__$1 = state_13967;var statearr_13994_14036 = state_13967__$1;(statearr_13994_14036[(2)] = inst_13944);
(statearr_13994_14036[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13968 === (5)))
{var inst_13905 = cljs.core.deref.call(null,mults);var inst_13906 = cljs.core.vals.call(null,inst_13905);var inst_13907 = cljs.core.seq.call(null,inst_13906);var inst_13908 = inst_13907;var inst_13909 = null;var inst_13910 = (0);var inst_13911 = (0);var state_13967__$1 = (function (){var statearr_13995 = state_13967;(statearr_13995[(12)] = inst_13911);
(statearr_13995[(13)] = inst_13910);
(statearr_13995[(14)] = inst_13908);
(statearr_13995[(15)] = inst_13909);
return statearr_13995;
})();var statearr_13996_14037 = state_13967__$1;(statearr_13996_14037[(2)] = null);
(statearr_13996_14037[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13968 === (14)))
{var state_13967__$1 = state_13967;var statearr_14000_14038 = state_13967__$1;(statearr_14000_14038[(2)] = null);
(statearr_14000_14038[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13968 === (16)))
{var inst_13922 = (state_13967[(10)]);var inst_13926 = cljs.core.chunk_first.call(null,inst_13922);var inst_13927 = cljs.core.chunk_rest.call(null,inst_13922);var inst_13928 = cljs.core.count.call(null,inst_13926);var inst_13908 = inst_13927;var inst_13909 = inst_13926;var inst_13910 = inst_13928;var inst_13911 = (0);var state_13967__$1 = (function (){var statearr_14001 = state_13967;(statearr_14001[(12)] = inst_13911);
(statearr_14001[(13)] = inst_13910);
(statearr_14001[(14)] = inst_13908);
(statearr_14001[(15)] = inst_13909);
return statearr_14001;
})();var statearr_14002_14039 = state_13967__$1;(statearr_14002_14039[(2)] = null);
(statearr_14002_14039[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13968 === (10)))
{var inst_13911 = (state_13967[(12)]);var inst_13910 = (state_13967[(13)]);var inst_13908 = (state_13967[(14)]);var inst_13909 = (state_13967[(15)]);var inst_13916 = cljs.core._nth.call(null,inst_13909,inst_13911);var inst_13917 = cljs.core.async.muxch_STAR_.call(null,inst_13916);var inst_13918 = cljs.core.async.close_BANG_.call(null,inst_13917);var inst_13919 = (inst_13911 + (1));var tmp13997 = inst_13910;var tmp13998 = inst_13908;var tmp13999 = inst_13909;var inst_13908__$1 = tmp13998;var inst_13909__$1 = tmp13999;var inst_13910__$1 = tmp13997;var inst_13911__$1 = inst_13919;var state_13967__$1 = (function (){var statearr_14003 = state_13967;(statearr_14003[(12)] = inst_13911__$1);
(statearr_14003[(13)] = inst_13910__$1);
(statearr_14003[(17)] = inst_13918);
(statearr_14003[(14)] = inst_13908__$1);
(statearr_14003[(15)] = inst_13909__$1);
return statearr_14003;
})();var statearr_14004_14040 = state_13967__$1;(statearr_14004_14040[(2)] = null);
(statearr_14004_14040[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13968 === (18)))
{var inst_13937 = (state_13967[(2)]);var state_13967__$1 = state_13967;var statearr_14005_14041 = state_13967__$1;(statearr_14005_14041[(2)] = inst_13937);
(statearr_14005_14041[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13968 === (8)))
{var inst_13911 = (state_13967[(12)]);var inst_13910 = (state_13967[(13)]);var inst_13913 = (inst_13911 < inst_13910);var inst_13914 = inst_13913;var state_13967__$1 = state_13967;if(cljs.core.truth_(inst_13914))
{var statearr_14006_14042 = state_13967__$1;(statearr_14006_14042[(1)] = (10));
} else
{var statearr_14007_14043 = state_13967__$1;(statearr_14007_14043[(1)] = (11));
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
});})(c__6055__auto___14015,mults,ensure_mult,p))
;return ((function (switch__6040__auto__,c__6055__auto___14015,mults,ensure_mult,p){
return (function() {
var state_machine__6041__auto__ = null;
var state_machine__6041__auto____0 = (function (){var statearr_14011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14011[(0)] = state_machine__6041__auto__);
(statearr_14011[(1)] = (1));
return statearr_14011;
});
var state_machine__6041__auto____1 = (function (state_13967){while(true){
var ret_value__6042__auto__ = (function (){try{while(true){
var result__6043__auto__ = switch__6040__auto__.call(null,state_13967);if(cljs.core.keyword_identical_QMARK_.call(null,result__6043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6043__auto__;
}
break;
}
}catch (e14012){if((e14012 instanceof Object))
{var ex__6044__auto__ = e14012;var statearr_14013_14044 = state_13967;(statearr_14013_14044[(5)] = ex__6044__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13967);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14012;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14045 = state_13967;
state_13967 = G__14045;
continue;
}
} else
{return ret_value__6042__auto__;
}
break;
}
});
state_machine__6041__auto__ = function(state_13967){
switch(arguments.length){
case 0:
return state_machine__6041__auto____0.call(this);
case 1:
return state_machine__6041__auto____1.call(this,state_13967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6041__auto____0;
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6041__auto____1;
return state_machine__6041__auto__;
})()
;})(switch__6040__auto__,c__6055__auto___14015,mults,ensure_mult,p))
})();var state__6057__auto__ = (function (){var statearr_14014 = f__6056__auto__.call(null);(statearr_14014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6055__auto___14015);
return statearr_14014;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6057__auto__);
});})(c__6055__auto___14015,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6055__auto___14182 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6055__auto___14182,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6056__auto__ = (function (){var switch__6040__auto__ = ((function (c__6055__auto___14182,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14152){var state_val_14153 = (state_14152[(1)]);if((state_val_14153 === (7)))
{var state_14152__$1 = state_14152;var statearr_14154_14183 = state_14152__$1;(statearr_14154_14183[(2)] = null);
(statearr_14154_14183[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14153 === (1)))
{var state_14152__$1 = state_14152;var statearr_14155_14184 = state_14152__$1;(statearr_14155_14184[(2)] = null);
(statearr_14155_14184[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14153 === (4)))
{var inst_14116 = (state_14152[(7)]);var inst_14118 = (inst_14116 < cnt);var state_14152__$1 = state_14152;if(cljs.core.truth_(inst_14118))
{var statearr_14156_14185 = state_14152__$1;(statearr_14156_14185[(1)] = (6));
} else
{var statearr_14157_14186 = state_14152__$1;(statearr_14157_14186[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14153 === (15)))
{var inst_14148 = (state_14152[(2)]);var state_14152__$1 = state_14152;var statearr_14158_14187 = state_14152__$1;(statearr_14158_14187[(2)] = inst_14148);
(statearr_14158_14187[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14153 === (13)))
{var inst_14141 = cljs.core.async.close_BANG_.call(null,out);var state_14152__$1 = state_14152;var statearr_14159_14188 = state_14152__$1;(statearr_14159_14188[(2)] = inst_14141);
(statearr_14159_14188[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14153 === (6)))
{var state_14152__$1 = state_14152;var statearr_14160_14189 = state_14152__$1;(statearr_14160_14189[(2)] = null);
(statearr_14160_14189[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14153 === (3)))
{var inst_14150 = (state_14152[(2)]);var state_14152__$1 = state_14152;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14152__$1,inst_14150);
} else
{if((state_val_14153 === (12)))
{var inst_14138 = (state_14152[(8)]);var inst_14138__$1 = (state_14152[(2)]);var inst_14139 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14138__$1);var state_14152__$1 = (function (){var statearr_14161 = state_14152;(statearr_14161[(8)] = inst_14138__$1);
return statearr_14161;
})();if(cljs.core.truth_(inst_14139))
{var statearr_14162_14190 = state_14152__$1;(statearr_14162_14190[(1)] = (13));
} else
{var statearr_14163_14191 = state_14152__$1;(statearr_14163_14191[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14153 === (2)))
{var inst_14115 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14116 = (0);var state_14152__$1 = (function (){var statearr_14164 = state_14152;(statearr_14164[(7)] = inst_14116);
(statearr_14164[(9)] = inst_14115);
return statearr_14164;
})();var statearr_14165_14192 = state_14152__$1;(statearr_14165_14192[(2)] = null);
(statearr_14165_14192[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14153 === (11)))
{var inst_14116 = (state_14152[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14152,(10),Object,null,(9));var inst_14125 = chs__$1.call(null,inst_14116);var inst_14126 = done.call(null,inst_14116);var inst_14127 = cljs.core.async.take_BANG_.call(null,inst_14125,inst_14126);var state_14152__$1 = state_14152;var statearr_14166_14193 = state_14152__$1;(statearr_14166_14193[(2)] = inst_14127);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14152__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14153 === (9)))
{var inst_14116 = (state_14152[(7)]);var inst_14129 = (state_14152[(2)]);var inst_14130 = (inst_14116 + (1));var inst_14116__$1 = inst_14130;var state_14152__$1 = (function (){var statearr_14167 = state_14152;(statearr_14167[(10)] = inst_14129);
(statearr_14167[(7)] = inst_14116__$1);
return statearr_14167;
})();var statearr_14168_14194 = state_14152__$1;(statearr_14168_14194[(2)] = null);
(statearr_14168_14194[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14153 === (5)))
{var inst_14136 = (state_14152[(2)]);var state_14152__$1 = (function (){var statearr_14169 = state_14152;(statearr_14169[(11)] = inst_14136);
return statearr_14169;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14152__$1,(12),dchan);
} else
{if((state_val_14153 === (14)))
{var inst_14138 = (state_14152[(8)]);var inst_14143 = cljs.core.apply.call(null,f,inst_14138);var state_14152__$1 = state_14152;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14152__$1,(16),out,inst_14143);
} else
{if((state_val_14153 === (16)))
{var inst_14145 = (state_14152[(2)]);var state_14152__$1 = (function (){var statearr_14170 = state_14152;(statearr_14170[(12)] = inst_14145);
return statearr_14170;
})();var statearr_14171_14195 = state_14152__$1;(statearr_14171_14195[(2)] = null);
(statearr_14171_14195[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14153 === (10)))
{var inst_14120 = (state_14152[(2)]);var inst_14121 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14152__$1 = (function (){var statearr_14172 = state_14152;(statearr_14172[(13)] = inst_14120);
return statearr_14172;
})();var statearr_14173_14196 = state_14152__$1;(statearr_14173_14196[(2)] = inst_14121);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14152__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14153 === (8)))
{var inst_14134 = (state_14152[(2)]);var state_14152__$1 = state_14152;var statearr_14174_14197 = state_14152__$1;(statearr_14174_14197[(2)] = inst_14134);
(statearr_14174_14197[(1)] = (5));
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
});})(c__6055__auto___14182,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6040__auto__,c__6055__auto___14182,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6041__auto__ = null;
var state_machine__6041__auto____0 = (function (){var statearr_14178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14178[(0)] = state_machine__6041__auto__);
(statearr_14178[(1)] = (1));
return statearr_14178;
});
var state_machine__6041__auto____1 = (function (state_14152){while(true){
var ret_value__6042__auto__ = (function (){try{while(true){
var result__6043__auto__ = switch__6040__auto__.call(null,state_14152);if(cljs.core.keyword_identical_QMARK_.call(null,result__6043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6043__auto__;
}
break;
}
}catch (e14179){if((e14179 instanceof Object))
{var ex__6044__auto__ = e14179;var statearr_14180_14198 = state_14152;(statearr_14180_14198[(5)] = ex__6044__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14152);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14179;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14199 = state_14152;
state_14152 = G__14199;
continue;
}
} else
{return ret_value__6042__auto__;
}
break;
}
});
state_machine__6041__auto__ = function(state_14152){
switch(arguments.length){
case 0:
return state_machine__6041__auto____0.call(this);
case 1:
return state_machine__6041__auto____1.call(this,state_14152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6041__auto____0;
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6041__auto____1;
return state_machine__6041__auto__;
})()
;})(switch__6040__auto__,c__6055__auto___14182,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6057__auto__ = (function (){var statearr_14181 = f__6056__auto__.call(null);(statearr_14181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6055__auto___14182);
return statearr_14181;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6057__auto__);
});})(c__6055__auto___14182,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6055__auto___14307 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6055__auto___14307,out){
return (function (){var f__6056__auto__ = (function (){var switch__6040__auto__ = ((function (c__6055__auto___14307,out){
return (function (state_14283){var state_val_14284 = (state_14283[(1)]);if((state_val_14284 === (7)))
{var inst_14263 = (state_14283[(7)]);var inst_14262 = (state_14283[(8)]);var inst_14262__$1 = (state_14283[(2)]);var inst_14263__$1 = cljs.core.nth.call(null,inst_14262__$1,(0),null);var inst_14264 = cljs.core.nth.call(null,inst_14262__$1,(1),null);var inst_14265 = (inst_14263__$1 == null);var state_14283__$1 = (function (){var statearr_14285 = state_14283;(statearr_14285[(9)] = inst_14264);
(statearr_14285[(7)] = inst_14263__$1);
(statearr_14285[(8)] = inst_14262__$1);
return statearr_14285;
})();if(cljs.core.truth_(inst_14265))
{var statearr_14286_14308 = state_14283__$1;(statearr_14286_14308[(1)] = (8));
} else
{var statearr_14287_14309 = state_14283__$1;(statearr_14287_14309[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14284 === (1)))
{var inst_14254 = cljs.core.vec.call(null,chs);var inst_14255 = inst_14254;var state_14283__$1 = (function (){var statearr_14288 = state_14283;(statearr_14288[(10)] = inst_14255);
return statearr_14288;
})();var statearr_14289_14310 = state_14283__$1;(statearr_14289_14310[(2)] = null);
(statearr_14289_14310[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14284 === (4)))
{var inst_14255 = (state_14283[(10)]);var state_14283__$1 = state_14283;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14283__$1,(7),inst_14255);
} else
{if((state_val_14284 === (6)))
{var inst_14279 = (state_14283[(2)]);var state_14283__$1 = state_14283;var statearr_14290_14311 = state_14283__$1;(statearr_14290_14311[(2)] = inst_14279);
(statearr_14290_14311[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14284 === (3)))
{var inst_14281 = (state_14283[(2)]);var state_14283__$1 = state_14283;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14283__$1,inst_14281);
} else
{if((state_val_14284 === (2)))
{var inst_14255 = (state_14283[(10)]);var inst_14257 = cljs.core.count.call(null,inst_14255);var inst_14258 = (inst_14257 > (0));var state_14283__$1 = state_14283;if(cljs.core.truth_(inst_14258))
{var statearr_14292_14312 = state_14283__$1;(statearr_14292_14312[(1)] = (4));
} else
{var statearr_14293_14313 = state_14283__$1;(statearr_14293_14313[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14284 === (11)))
{var inst_14255 = (state_14283[(10)]);var inst_14272 = (state_14283[(2)]);var tmp14291 = inst_14255;var inst_14255__$1 = tmp14291;var state_14283__$1 = (function (){var statearr_14294 = state_14283;(statearr_14294[(10)] = inst_14255__$1);
(statearr_14294[(11)] = inst_14272);
return statearr_14294;
})();var statearr_14295_14314 = state_14283__$1;(statearr_14295_14314[(2)] = null);
(statearr_14295_14314[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14284 === (9)))
{var inst_14263 = (state_14283[(7)]);var state_14283__$1 = state_14283;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14283__$1,(11),out,inst_14263);
} else
{if((state_val_14284 === (5)))
{var inst_14277 = cljs.core.async.close_BANG_.call(null,out);var state_14283__$1 = state_14283;var statearr_14296_14315 = state_14283__$1;(statearr_14296_14315[(2)] = inst_14277);
(statearr_14296_14315[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14284 === (10)))
{var inst_14275 = (state_14283[(2)]);var state_14283__$1 = state_14283;var statearr_14297_14316 = state_14283__$1;(statearr_14297_14316[(2)] = inst_14275);
(statearr_14297_14316[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14284 === (8)))
{var inst_14255 = (state_14283[(10)]);var inst_14264 = (state_14283[(9)]);var inst_14263 = (state_14283[(7)]);var inst_14262 = (state_14283[(8)]);var inst_14267 = (function (){var c = inst_14264;var v = inst_14263;var vec__14260 = inst_14262;var cs = inst_14255;return ((function (c,v,vec__14260,cs,inst_14255,inst_14264,inst_14263,inst_14262,state_val_14284,c__6055__auto___14307,out){
return (function (p1__14200_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14200_SHARP_);
});
;})(c,v,vec__14260,cs,inst_14255,inst_14264,inst_14263,inst_14262,state_val_14284,c__6055__auto___14307,out))
})();var inst_14268 = cljs.core.filterv.call(null,inst_14267,inst_14255);var inst_14255__$1 = inst_14268;var state_14283__$1 = (function (){var statearr_14298 = state_14283;(statearr_14298[(10)] = inst_14255__$1);
return statearr_14298;
})();var statearr_14299_14317 = state_14283__$1;(statearr_14299_14317[(2)] = null);
(statearr_14299_14317[(1)] = (2));
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
});})(c__6055__auto___14307,out))
;return ((function (switch__6040__auto__,c__6055__auto___14307,out){
return (function() {
var state_machine__6041__auto__ = null;
var state_machine__6041__auto____0 = (function (){var statearr_14303 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14303[(0)] = state_machine__6041__auto__);
(statearr_14303[(1)] = (1));
return statearr_14303;
});
var state_machine__6041__auto____1 = (function (state_14283){while(true){
var ret_value__6042__auto__ = (function (){try{while(true){
var result__6043__auto__ = switch__6040__auto__.call(null,state_14283);if(cljs.core.keyword_identical_QMARK_.call(null,result__6043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6043__auto__;
}
break;
}
}catch (e14304){if((e14304 instanceof Object))
{var ex__6044__auto__ = e14304;var statearr_14305_14318 = state_14283;(statearr_14305_14318[(5)] = ex__6044__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14283);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14304;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14319 = state_14283;
state_14283 = G__14319;
continue;
}
} else
{return ret_value__6042__auto__;
}
break;
}
});
state_machine__6041__auto__ = function(state_14283){
switch(arguments.length){
case 0:
return state_machine__6041__auto____0.call(this);
case 1:
return state_machine__6041__auto____1.call(this,state_14283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6041__auto____0;
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6041__auto____1;
return state_machine__6041__auto__;
})()
;})(switch__6040__auto__,c__6055__auto___14307,out))
})();var state__6057__auto__ = (function (){var statearr_14306 = f__6056__auto__.call(null);(statearr_14306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6055__auto___14307);
return statearr_14306;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6057__auto__);
});})(c__6055__auto___14307,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6055__auto___14412 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6055__auto___14412,out){
return (function (){var f__6056__auto__ = (function (){var switch__6040__auto__ = ((function (c__6055__auto___14412,out){
return (function (state_14389){var state_val_14390 = (state_14389[(1)]);if((state_val_14390 === (7)))
{var inst_14371 = (state_14389[(7)]);var inst_14371__$1 = (state_14389[(2)]);var inst_14372 = (inst_14371__$1 == null);var inst_14373 = cljs.core.not.call(null,inst_14372);var state_14389__$1 = (function (){var statearr_14391 = state_14389;(statearr_14391[(7)] = inst_14371__$1);
return statearr_14391;
})();if(inst_14373)
{var statearr_14392_14413 = state_14389__$1;(statearr_14392_14413[(1)] = (8));
} else
{var statearr_14393_14414 = state_14389__$1;(statearr_14393_14414[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14390 === (1)))
{var inst_14366 = (0);var state_14389__$1 = (function (){var statearr_14394 = state_14389;(statearr_14394[(8)] = inst_14366);
return statearr_14394;
})();var statearr_14395_14415 = state_14389__$1;(statearr_14395_14415[(2)] = null);
(statearr_14395_14415[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14390 === (4)))
{var state_14389__$1 = state_14389;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14389__$1,(7),ch);
} else
{if((state_val_14390 === (6)))
{var inst_14384 = (state_14389[(2)]);var state_14389__$1 = state_14389;var statearr_14396_14416 = state_14389__$1;(statearr_14396_14416[(2)] = inst_14384);
(statearr_14396_14416[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14390 === (3)))
{var inst_14386 = (state_14389[(2)]);var inst_14387 = cljs.core.async.close_BANG_.call(null,out);var state_14389__$1 = (function (){var statearr_14397 = state_14389;(statearr_14397[(9)] = inst_14386);
return statearr_14397;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14389__$1,inst_14387);
} else
{if((state_val_14390 === (2)))
{var inst_14366 = (state_14389[(8)]);var inst_14368 = (inst_14366 < n);var state_14389__$1 = state_14389;if(cljs.core.truth_(inst_14368))
{var statearr_14398_14417 = state_14389__$1;(statearr_14398_14417[(1)] = (4));
} else
{var statearr_14399_14418 = state_14389__$1;(statearr_14399_14418[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14390 === (11)))
{var inst_14366 = (state_14389[(8)]);var inst_14376 = (state_14389[(2)]);var inst_14377 = (inst_14366 + (1));var inst_14366__$1 = inst_14377;var state_14389__$1 = (function (){var statearr_14400 = state_14389;(statearr_14400[(10)] = inst_14376);
(statearr_14400[(8)] = inst_14366__$1);
return statearr_14400;
})();var statearr_14401_14419 = state_14389__$1;(statearr_14401_14419[(2)] = null);
(statearr_14401_14419[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14390 === (9)))
{var state_14389__$1 = state_14389;var statearr_14402_14420 = state_14389__$1;(statearr_14402_14420[(2)] = null);
(statearr_14402_14420[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14390 === (5)))
{var state_14389__$1 = state_14389;var statearr_14403_14421 = state_14389__$1;(statearr_14403_14421[(2)] = null);
(statearr_14403_14421[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14390 === (10)))
{var inst_14381 = (state_14389[(2)]);var state_14389__$1 = state_14389;var statearr_14404_14422 = state_14389__$1;(statearr_14404_14422[(2)] = inst_14381);
(statearr_14404_14422[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14390 === (8)))
{var inst_14371 = (state_14389[(7)]);var state_14389__$1 = state_14389;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14389__$1,(11),out,inst_14371);
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
});})(c__6055__auto___14412,out))
;return ((function (switch__6040__auto__,c__6055__auto___14412,out){
return (function() {
var state_machine__6041__auto__ = null;
var state_machine__6041__auto____0 = (function (){var statearr_14408 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14408[(0)] = state_machine__6041__auto__);
(statearr_14408[(1)] = (1));
return statearr_14408;
});
var state_machine__6041__auto____1 = (function (state_14389){while(true){
var ret_value__6042__auto__ = (function (){try{while(true){
var result__6043__auto__ = switch__6040__auto__.call(null,state_14389);if(cljs.core.keyword_identical_QMARK_.call(null,result__6043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6043__auto__;
}
break;
}
}catch (e14409){if((e14409 instanceof Object))
{var ex__6044__auto__ = e14409;var statearr_14410_14423 = state_14389;(statearr_14410_14423[(5)] = ex__6044__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14389);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14409;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14424 = state_14389;
state_14389 = G__14424;
continue;
}
} else
{return ret_value__6042__auto__;
}
break;
}
});
state_machine__6041__auto__ = function(state_14389){
switch(arguments.length){
case 0:
return state_machine__6041__auto____0.call(this);
case 1:
return state_machine__6041__auto____1.call(this,state_14389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6041__auto____0;
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6041__auto____1;
return state_machine__6041__auto__;
})()
;})(switch__6040__auto__,c__6055__auto___14412,out))
})();var state__6057__auto__ = (function (){var statearr_14411 = f__6056__auto__.call(null);(statearr_14411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6055__auto___14412);
return statearr_14411;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6057__auto__);
});})(c__6055__auto___14412,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6055__auto___14521 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6055__auto___14521,out){
return (function (){var f__6056__auto__ = (function (){var switch__6040__auto__ = ((function (c__6055__auto___14521,out){
return (function (state_14496){var state_val_14497 = (state_14496[(1)]);if((state_val_14497 === (7)))
{var inst_14491 = (state_14496[(2)]);var state_14496__$1 = state_14496;var statearr_14498_14522 = state_14496__$1;(statearr_14498_14522[(2)] = inst_14491);
(statearr_14498_14522[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14497 === (1)))
{var inst_14473 = null;var state_14496__$1 = (function (){var statearr_14499 = state_14496;(statearr_14499[(7)] = inst_14473);
return statearr_14499;
})();var statearr_14500_14523 = state_14496__$1;(statearr_14500_14523[(2)] = null);
(statearr_14500_14523[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14497 === (4)))
{var inst_14476 = (state_14496[(8)]);var inst_14476__$1 = (state_14496[(2)]);var inst_14477 = (inst_14476__$1 == null);var inst_14478 = cljs.core.not.call(null,inst_14477);var state_14496__$1 = (function (){var statearr_14501 = state_14496;(statearr_14501[(8)] = inst_14476__$1);
return statearr_14501;
})();if(inst_14478)
{var statearr_14502_14524 = state_14496__$1;(statearr_14502_14524[(1)] = (5));
} else
{var statearr_14503_14525 = state_14496__$1;(statearr_14503_14525[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14497 === (6)))
{var state_14496__$1 = state_14496;var statearr_14504_14526 = state_14496__$1;(statearr_14504_14526[(2)] = null);
(statearr_14504_14526[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14497 === (3)))
{var inst_14493 = (state_14496[(2)]);var inst_14494 = cljs.core.async.close_BANG_.call(null,out);var state_14496__$1 = (function (){var statearr_14505 = state_14496;(statearr_14505[(9)] = inst_14493);
return statearr_14505;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14496__$1,inst_14494);
} else
{if((state_val_14497 === (2)))
{var state_14496__$1 = state_14496;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14496__$1,(4),ch);
} else
{if((state_val_14497 === (11)))
{var inst_14476 = (state_14496[(8)]);var inst_14485 = (state_14496[(2)]);var inst_14473 = inst_14476;var state_14496__$1 = (function (){var statearr_14506 = state_14496;(statearr_14506[(7)] = inst_14473);
(statearr_14506[(10)] = inst_14485);
return statearr_14506;
})();var statearr_14507_14527 = state_14496__$1;(statearr_14507_14527[(2)] = null);
(statearr_14507_14527[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14497 === (9)))
{var inst_14476 = (state_14496[(8)]);var state_14496__$1 = state_14496;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14496__$1,(11),out,inst_14476);
} else
{if((state_val_14497 === (5)))
{var inst_14473 = (state_14496[(7)]);var inst_14476 = (state_14496[(8)]);var inst_14480 = cljs.core._EQ_.call(null,inst_14476,inst_14473);var state_14496__$1 = state_14496;if(inst_14480)
{var statearr_14509_14528 = state_14496__$1;(statearr_14509_14528[(1)] = (8));
} else
{var statearr_14510_14529 = state_14496__$1;(statearr_14510_14529[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14497 === (10)))
{var inst_14488 = (state_14496[(2)]);var state_14496__$1 = state_14496;var statearr_14511_14530 = state_14496__$1;(statearr_14511_14530[(2)] = inst_14488);
(statearr_14511_14530[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14497 === (8)))
{var inst_14473 = (state_14496[(7)]);var tmp14508 = inst_14473;var inst_14473__$1 = tmp14508;var state_14496__$1 = (function (){var statearr_14512 = state_14496;(statearr_14512[(7)] = inst_14473__$1);
return statearr_14512;
})();var statearr_14513_14531 = state_14496__$1;(statearr_14513_14531[(2)] = null);
(statearr_14513_14531[(1)] = (2));
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
});})(c__6055__auto___14521,out))
;return ((function (switch__6040__auto__,c__6055__auto___14521,out){
return (function() {
var state_machine__6041__auto__ = null;
var state_machine__6041__auto____0 = (function (){var statearr_14517 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14517[(0)] = state_machine__6041__auto__);
(statearr_14517[(1)] = (1));
return statearr_14517;
});
var state_machine__6041__auto____1 = (function (state_14496){while(true){
var ret_value__6042__auto__ = (function (){try{while(true){
var result__6043__auto__ = switch__6040__auto__.call(null,state_14496);if(cljs.core.keyword_identical_QMARK_.call(null,result__6043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6043__auto__;
}
break;
}
}catch (e14518){if((e14518 instanceof Object))
{var ex__6044__auto__ = e14518;var statearr_14519_14532 = state_14496;(statearr_14519_14532[(5)] = ex__6044__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14496);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14518;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14533 = state_14496;
state_14496 = G__14533;
continue;
}
} else
{return ret_value__6042__auto__;
}
break;
}
});
state_machine__6041__auto__ = function(state_14496){
switch(arguments.length){
case 0:
return state_machine__6041__auto____0.call(this);
case 1:
return state_machine__6041__auto____1.call(this,state_14496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6041__auto____0;
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6041__auto____1;
return state_machine__6041__auto__;
})()
;})(switch__6040__auto__,c__6055__auto___14521,out))
})();var state__6057__auto__ = (function (){var statearr_14520 = f__6056__auto__.call(null);(statearr_14520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6055__auto___14521);
return statearr_14520;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6057__auto__);
});})(c__6055__auto___14521,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6055__auto___14668 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6055__auto___14668,out){
return (function (){var f__6056__auto__ = (function (){var switch__6040__auto__ = ((function (c__6055__auto___14668,out){
return (function (state_14638){var state_val_14639 = (state_14638[(1)]);if((state_val_14639 === (7)))
{var inst_14634 = (state_14638[(2)]);var state_14638__$1 = state_14638;var statearr_14640_14669 = state_14638__$1;(statearr_14640_14669[(2)] = inst_14634);
(statearr_14640_14669[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14639 === (1)))
{var inst_14601 = (new Array(n));var inst_14602 = inst_14601;var inst_14603 = (0);var state_14638__$1 = (function (){var statearr_14641 = state_14638;(statearr_14641[(7)] = inst_14603);
(statearr_14641[(8)] = inst_14602);
return statearr_14641;
})();var statearr_14642_14670 = state_14638__$1;(statearr_14642_14670[(2)] = null);
(statearr_14642_14670[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14639 === (4)))
{var inst_14606 = (state_14638[(9)]);var inst_14606__$1 = (state_14638[(2)]);var inst_14607 = (inst_14606__$1 == null);var inst_14608 = cljs.core.not.call(null,inst_14607);var state_14638__$1 = (function (){var statearr_14643 = state_14638;(statearr_14643[(9)] = inst_14606__$1);
return statearr_14643;
})();if(inst_14608)
{var statearr_14644_14671 = state_14638__$1;(statearr_14644_14671[(1)] = (5));
} else
{var statearr_14645_14672 = state_14638__$1;(statearr_14645_14672[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14639 === (15)))
{var inst_14628 = (state_14638[(2)]);var state_14638__$1 = state_14638;var statearr_14646_14673 = state_14638__$1;(statearr_14646_14673[(2)] = inst_14628);
(statearr_14646_14673[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14639 === (13)))
{var state_14638__$1 = state_14638;var statearr_14647_14674 = state_14638__$1;(statearr_14647_14674[(2)] = null);
(statearr_14647_14674[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14639 === (6)))
{var inst_14603 = (state_14638[(7)]);var inst_14624 = (inst_14603 > (0));var state_14638__$1 = state_14638;if(cljs.core.truth_(inst_14624))
{var statearr_14648_14675 = state_14638__$1;(statearr_14648_14675[(1)] = (12));
} else
{var statearr_14649_14676 = state_14638__$1;(statearr_14649_14676[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14639 === (3)))
{var inst_14636 = (state_14638[(2)]);var state_14638__$1 = state_14638;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14638__$1,inst_14636);
} else
{if((state_val_14639 === (12)))
{var inst_14602 = (state_14638[(8)]);var inst_14626 = cljs.core.vec.call(null,inst_14602);var state_14638__$1 = state_14638;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14638__$1,(15),out,inst_14626);
} else
{if((state_val_14639 === (2)))
{var state_14638__$1 = state_14638;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14638__$1,(4),ch);
} else
{if((state_val_14639 === (11)))
{var inst_14618 = (state_14638[(2)]);var inst_14619 = (new Array(n));var inst_14602 = inst_14619;var inst_14603 = (0);var state_14638__$1 = (function (){var statearr_14650 = state_14638;(statearr_14650[(10)] = inst_14618);
(statearr_14650[(7)] = inst_14603);
(statearr_14650[(8)] = inst_14602);
return statearr_14650;
})();var statearr_14651_14677 = state_14638__$1;(statearr_14651_14677[(2)] = null);
(statearr_14651_14677[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14639 === (9)))
{var inst_14602 = (state_14638[(8)]);var inst_14616 = cljs.core.vec.call(null,inst_14602);var state_14638__$1 = state_14638;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14638__$1,(11),out,inst_14616);
} else
{if((state_val_14639 === (5)))
{var inst_14606 = (state_14638[(9)]);var inst_14603 = (state_14638[(7)]);var inst_14602 = (state_14638[(8)]);var inst_14611 = (state_14638[(11)]);var inst_14610 = (inst_14602[inst_14603] = inst_14606);var inst_14611__$1 = (inst_14603 + (1));var inst_14612 = (inst_14611__$1 < n);var state_14638__$1 = (function (){var statearr_14652 = state_14638;(statearr_14652[(12)] = inst_14610);
(statearr_14652[(11)] = inst_14611__$1);
return statearr_14652;
})();if(cljs.core.truth_(inst_14612))
{var statearr_14653_14678 = state_14638__$1;(statearr_14653_14678[(1)] = (8));
} else
{var statearr_14654_14679 = state_14638__$1;(statearr_14654_14679[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14639 === (14)))
{var inst_14631 = (state_14638[(2)]);var inst_14632 = cljs.core.async.close_BANG_.call(null,out);var state_14638__$1 = (function (){var statearr_14656 = state_14638;(statearr_14656[(13)] = inst_14631);
return statearr_14656;
})();var statearr_14657_14680 = state_14638__$1;(statearr_14657_14680[(2)] = inst_14632);
(statearr_14657_14680[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14639 === (10)))
{var inst_14622 = (state_14638[(2)]);var state_14638__$1 = state_14638;var statearr_14658_14681 = state_14638__$1;(statearr_14658_14681[(2)] = inst_14622);
(statearr_14658_14681[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14639 === (8)))
{var inst_14602 = (state_14638[(8)]);var inst_14611 = (state_14638[(11)]);var tmp14655 = inst_14602;var inst_14602__$1 = tmp14655;var inst_14603 = inst_14611;var state_14638__$1 = (function (){var statearr_14659 = state_14638;(statearr_14659[(7)] = inst_14603);
(statearr_14659[(8)] = inst_14602__$1);
return statearr_14659;
})();var statearr_14660_14682 = state_14638__$1;(statearr_14660_14682[(2)] = null);
(statearr_14660_14682[(1)] = (2));
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
});})(c__6055__auto___14668,out))
;return ((function (switch__6040__auto__,c__6055__auto___14668,out){
return (function() {
var state_machine__6041__auto__ = null;
var state_machine__6041__auto____0 = (function (){var statearr_14664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14664[(0)] = state_machine__6041__auto__);
(statearr_14664[(1)] = (1));
return statearr_14664;
});
var state_machine__6041__auto____1 = (function (state_14638){while(true){
var ret_value__6042__auto__ = (function (){try{while(true){
var result__6043__auto__ = switch__6040__auto__.call(null,state_14638);if(cljs.core.keyword_identical_QMARK_.call(null,result__6043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6043__auto__;
}
break;
}
}catch (e14665){if((e14665 instanceof Object))
{var ex__6044__auto__ = e14665;var statearr_14666_14683 = state_14638;(statearr_14666_14683[(5)] = ex__6044__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14638);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14665;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14684 = state_14638;
state_14638 = G__14684;
continue;
}
} else
{return ret_value__6042__auto__;
}
break;
}
});
state_machine__6041__auto__ = function(state_14638){
switch(arguments.length){
case 0:
return state_machine__6041__auto____0.call(this);
case 1:
return state_machine__6041__auto____1.call(this,state_14638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6041__auto____0;
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6041__auto____1;
return state_machine__6041__auto__;
})()
;})(switch__6040__auto__,c__6055__auto___14668,out))
})();var state__6057__auto__ = (function (){var statearr_14667 = f__6056__auto__.call(null);(statearr_14667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6055__auto___14668);
return statearr_14667;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6057__auto__);
});})(c__6055__auto___14668,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6055__auto___14827 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6055__auto___14827,out){
return (function (){var f__6056__auto__ = (function (){var switch__6040__auto__ = ((function (c__6055__auto___14827,out){
return (function (state_14797){var state_val_14798 = (state_14797[(1)]);if((state_val_14798 === (7)))
{var inst_14793 = (state_14797[(2)]);var state_14797__$1 = state_14797;var statearr_14799_14828 = state_14797__$1;(statearr_14799_14828[(2)] = inst_14793);
(statearr_14799_14828[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14798 === (1)))
{var inst_14756 = [];var inst_14757 = inst_14756;var inst_14758 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_14797__$1 = (function (){var statearr_14800 = state_14797;(statearr_14800[(7)] = inst_14758);
(statearr_14800[(8)] = inst_14757);
return statearr_14800;
})();var statearr_14801_14829 = state_14797__$1;(statearr_14801_14829[(2)] = null);
(statearr_14801_14829[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14798 === (4)))
{var inst_14761 = (state_14797[(9)]);var inst_14761__$1 = (state_14797[(2)]);var inst_14762 = (inst_14761__$1 == null);var inst_14763 = cljs.core.not.call(null,inst_14762);var state_14797__$1 = (function (){var statearr_14802 = state_14797;(statearr_14802[(9)] = inst_14761__$1);
return statearr_14802;
})();if(inst_14763)
{var statearr_14803_14830 = state_14797__$1;(statearr_14803_14830[(1)] = (5));
} else
{var statearr_14804_14831 = state_14797__$1;(statearr_14804_14831[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14798 === (15)))
{var inst_14787 = (state_14797[(2)]);var state_14797__$1 = state_14797;var statearr_14805_14832 = state_14797__$1;(statearr_14805_14832[(2)] = inst_14787);
(statearr_14805_14832[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14798 === (13)))
{var state_14797__$1 = state_14797;var statearr_14806_14833 = state_14797__$1;(statearr_14806_14833[(2)] = null);
(statearr_14806_14833[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14798 === (6)))
{var inst_14757 = (state_14797[(8)]);var inst_14782 = inst_14757.length;var inst_14783 = (inst_14782 > (0));var state_14797__$1 = state_14797;if(cljs.core.truth_(inst_14783))
{var statearr_14807_14834 = state_14797__$1;(statearr_14807_14834[(1)] = (12));
} else
{var statearr_14808_14835 = state_14797__$1;(statearr_14808_14835[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14798 === (3)))
{var inst_14795 = (state_14797[(2)]);var state_14797__$1 = state_14797;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14797__$1,inst_14795);
} else
{if((state_val_14798 === (12)))
{var inst_14757 = (state_14797[(8)]);var inst_14785 = cljs.core.vec.call(null,inst_14757);var state_14797__$1 = state_14797;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14797__$1,(15),out,inst_14785);
} else
{if((state_val_14798 === (2)))
{var state_14797__$1 = state_14797;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14797__$1,(4),ch);
} else
{if((state_val_14798 === (11)))
{var inst_14761 = (state_14797[(9)]);var inst_14765 = (state_14797[(10)]);var inst_14775 = (state_14797[(2)]);var inst_14776 = [];var inst_14777 = inst_14776.push(inst_14761);var inst_14757 = inst_14776;var inst_14758 = inst_14765;var state_14797__$1 = (function (){var statearr_14809 = state_14797;(statearr_14809[(11)] = inst_14777);
(statearr_14809[(12)] = inst_14775);
(statearr_14809[(7)] = inst_14758);
(statearr_14809[(8)] = inst_14757);
return statearr_14809;
})();var statearr_14810_14836 = state_14797__$1;(statearr_14810_14836[(2)] = null);
(statearr_14810_14836[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14798 === (9)))
{var inst_14757 = (state_14797[(8)]);var inst_14773 = cljs.core.vec.call(null,inst_14757);var state_14797__$1 = state_14797;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14797__$1,(11),out,inst_14773);
} else
{if((state_val_14798 === (5)))
{var inst_14761 = (state_14797[(9)]);var inst_14765 = (state_14797[(10)]);var inst_14758 = (state_14797[(7)]);var inst_14765__$1 = f.call(null,inst_14761);var inst_14766 = cljs.core._EQ_.call(null,inst_14765__$1,inst_14758);var inst_14767 = cljs.core.keyword_identical_QMARK_.call(null,inst_14758,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_14768 = (inst_14766) || (inst_14767);var state_14797__$1 = (function (){var statearr_14811 = state_14797;(statearr_14811[(10)] = inst_14765__$1);
return statearr_14811;
})();if(cljs.core.truth_(inst_14768))
{var statearr_14812_14837 = state_14797__$1;(statearr_14812_14837[(1)] = (8));
} else
{var statearr_14813_14838 = state_14797__$1;(statearr_14813_14838[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14798 === (14)))
{var inst_14790 = (state_14797[(2)]);var inst_14791 = cljs.core.async.close_BANG_.call(null,out);var state_14797__$1 = (function (){var statearr_14815 = state_14797;(statearr_14815[(13)] = inst_14790);
return statearr_14815;
})();var statearr_14816_14839 = state_14797__$1;(statearr_14816_14839[(2)] = inst_14791);
(statearr_14816_14839[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14798 === (10)))
{var inst_14780 = (state_14797[(2)]);var state_14797__$1 = state_14797;var statearr_14817_14840 = state_14797__$1;(statearr_14817_14840[(2)] = inst_14780);
(statearr_14817_14840[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14798 === (8)))
{var inst_14761 = (state_14797[(9)]);var inst_14765 = (state_14797[(10)]);var inst_14757 = (state_14797[(8)]);var inst_14770 = inst_14757.push(inst_14761);var tmp14814 = inst_14757;var inst_14757__$1 = tmp14814;var inst_14758 = inst_14765;var state_14797__$1 = (function (){var statearr_14818 = state_14797;(statearr_14818[(14)] = inst_14770);
(statearr_14818[(7)] = inst_14758);
(statearr_14818[(8)] = inst_14757__$1);
return statearr_14818;
})();var statearr_14819_14841 = state_14797__$1;(statearr_14819_14841[(2)] = null);
(statearr_14819_14841[(1)] = (2));
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
});})(c__6055__auto___14827,out))
;return ((function (switch__6040__auto__,c__6055__auto___14827,out){
return (function() {
var state_machine__6041__auto__ = null;
var state_machine__6041__auto____0 = (function (){var statearr_14823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14823[(0)] = state_machine__6041__auto__);
(statearr_14823[(1)] = (1));
return statearr_14823;
});
var state_machine__6041__auto____1 = (function (state_14797){while(true){
var ret_value__6042__auto__ = (function (){try{while(true){
var result__6043__auto__ = switch__6040__auto__.call(null,state_14797);if(cljs.core.keyword_identical_QMARK_.call(null,result__6043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6043__auto__;
}
break;
}
}catch (e14824){if((e14824 instanceof Object))
{var ex__6044__auto__ = e14824;var statearr_14825_14842 = state_14797;(statearr_14825_14842[(5)] = ex__6044__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14797);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14824;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14843 = state_14797;
state_14797 = G__14843;
continue;
}
} else
{return ret_value__6042__auto__;
}
break;
}
});
state_machine__6041__auto__ = function(state_14797){
switch(arguments.length){
case 0:
return state_machine__6041__auto____0.call(this);
case 1:
return state_machine__6041__auto____1.call(this,state_14797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6041__auto____0;
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6041__auto____1;
return state_machine__6041__auto__;
})()
;})(switch__6040__auto__,c__6055__auto___14827,out))
})();var state__6057__auto__ = (function (){var statearr_14826 = f__6056__auto__.call(null);(statearr_14826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6055__auto___14827);
return statearr_14826;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6057__auto__);
});})(c__6055__auto___14827,out))
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