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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t143791 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t143791 = (function (f,fn_handler,meta143792){
this.f = f;
this.fn_handler = fn_handler;
this.meta143792 = meta143792;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t143791.cljs$lang$type = true;
cljs.core.async.t143791.cljs$lang$ctorStr = "cljs.core.async/t143791";
cljs.core.async.t143791.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t143791");
});
cljs.core.async.t143791.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t143791.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t143791.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t143791.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_143793){var self__ = this;
var _143793__$1 = this;return self__.meta143792;
});
cljs.core.async.t143791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_143793,meta143792__$1){var self__ = this;
var _143793__$1 = this;return (new cljs.core.async.t143791(self__.f,self__.fn_handler,meta143792__$1));
});
cljs.core.async.__GT_t143791 = (function __GT_t143791(f__$1,fn_handler__$1,meta143792){return (new cljs.core.async.t143791(f__$1,fn_handler__$1,meta143792));
});
}
return (new cljs.core.async.t143791(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__143795 = buff;if(G__143795)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__143795.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__143795.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__143795);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__143795);
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
{var val_143796 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_143796);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_143796,ret){
return (function (){return fn1.call(null,val_143796);
});})(val_143796,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___143797 = n;var x_143798 = (0);while(true){
if((x_143798 < n__4399__auto___143797))
{(a[x_143798] = (0));
{
var G__143799 = (x_143798 + (1));
x_143798 = G__143799;
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
var G__143800 = (i + (1));
i = G__143800;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t143804 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t143804 = (function (flag,alt_flag,meta143805){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta143805 = meta143805;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t143804.cljs$lang$type = true;
cljs.core.async.t143804.cljs$lang$ctorStr = "cljs.core.async/t143804";
cljs.core.async.t143804.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t143804");
});})(flag))
;
cljs.core.async.t143804.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t143804.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t143804.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t143804.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_143806){var self__ = this;
var _143806__$1 = this;return self__.meta143805;
});})(flag))
;
cljs.core.async.t143804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_143806,meta143805__$1){var self__ = this;
var _143806__$1 = this;return (new cljs.core.async.t143804(self__.flag,self__.alt_flag,meta143805__$1));
});})(flag))
;
cljs.core.async.__GT_t143804 = ((function (flag){
return (function __GT_t143804(flag__$1,alt_flag__$1,meta143805){return (new cljs.core.async.t143804(flag__$1,alt_flag__$1,meta143805));
});})(flag))
;
}
return (new cljs.core.async.t143804(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t143810 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t143810 = (function (cb,flag,alt_handler,meta143811){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta143811 = meta143811;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t143810.cljs$lang$type = true;
cljs.core.async.t143810.cljs$lang$ctorStr = "cljs.core.async/t143810";
cljs.core.async.t143810.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t143810");
});
cljs.core.async.t143810.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t143810.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t143810.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t143810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_143812){var self__ = this;
var _143812__$1 = this;return self__.meta143811;
});
cljs.core.async.t143810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_143812,meta143811__$1){var self__ = this;
var _143812__$1 = this;return (new cljs.core.async.t143810(self__.cb,self__.flag,self__.alt_handler,meta143811__$1));
});
cljs.core.async.__GT_t143810 = (function __GT_t143810(cb__$1,flag__$1,alt_handler__$1,meta143811){return (new cljs.core.async.t143810(cb__$1,flag__$1,alt_handler__$1,meta143811));
});
}
return (new cljs.core.async.t143810(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__143813_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__143813_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__143814_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__143814_SHARP_,port], null));
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
var G__143815 = (i + (1));
i = G__143815;
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
var alts_BANG___delegate = function (ports,p__143816){var map__143818 = p__143816;var map__143818__$1 = ((cljs.core.seq_QMARK_.call(null,map__143818))?cljs.core.apply.call(null,cljs.core.hash_map,map__143818):map__143818);var opts = map__143818__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__143816 = null;if (arguments.length > 1) {
  p__143816 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__143816);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__143819){
var ports = cljs.core.first(arglist__143819);
var p__143816 = cljs.core.rest(arglist__143819);
return alts_BANG___delegate(ports,p__143816);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t143827 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t143827 = (function (ch,f,map_LT_,meta143828){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta143828 = meta143828;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t143827.cljs$lang$type = true;
cljs.core.async.t143827.cljs$lang$ctorStr = "cljs.core.async/t143827";
cljs.core.async.t143827.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t143827");
});
cljs.core.async.t143827.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t143827.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t143827.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t143827.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t143830 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t143830 = (function (fn1,_,meta143828,ch,f,map_LT_,meta143831){
this.fn1 = fn1;
this._ = _;
this.meta143828 = meta143828;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta143831 = meta143831;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t143830.cljs$lang$type = true;
cljs.core.async.t143830.cljs$lang$ctorStr = "cljs.core.async/t143830";
cljs.core.async.t143830.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t143830");
});})(___$1))
;
cljs.core.async.t143830.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t143830.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t143830.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t143830.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__143820_SHARP_){return f1.call(null,(((p1__143820_SHARP_ == null))?null:self__.f.call(null,p1__143820_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t143830.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_143832){var self__ = this;
var _143832__$1 = this;return self__.meta143831;
});})(___$1))
;
cljs.core.async.t143830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_143832,meta143831__$1){var self__ = this;
var _143832__$1 = this;return (new cljs.core.async.t143830(self__.fn1,self__._,self__.meta143828,self__.ch,self__.f,self__.map_LT_,meta143831__$1));
});})(___$1))
;
cljs.core.async.__GT_t143830 = ((function (___$1){
return (function __GT_t143830(fn1__$1,___$2,meta143828__$1,ch__$2,f__$2,map_LT___$2,meta143831){return (new cljs.core.async.t143830(fn1__$1,___$2,meta143828__$1,ch__$2,f__$2,map_LT___$2,meta143831));
});})(___$1))
;
}
return (new cljs.core.async.t143830(fn1,___$1,self__.meta143828,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t143827.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t143827.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t143827.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t143827.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_143829){var self__ = this;
var _143829__$1 = this;return self__.meta143828;
});
cljs.core.async.t143827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_143829,meta143828__$1){var self__ = this;
var _143829__$1 = this;return (new cljs.core.async.t143827(self__.ch,self__.f,self__.map_LT_,meta143828__$1));
});
cljs.core.async.__GT_t143827 = (function __GT_t143827(ch__$1,f__$1,map_LT___$1,meta143828){return (new cljs.core.async.t143827(ch__$1,f__$1,map_LT___$1,meta143828));
});
}
return (new cljs.core.async.t143827(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t143836 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t143836 = (function (ch,f,map_GT_,meta143837){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta143837 = meta143837;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t143836.cljs$lang$type = true;
cljs.core.async.t143836.cljs$lang$ctorStr = "cljs.core.async/t143836";
cljs.core.async.t143836.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t143836");
});
cljs.core.async.t143836.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t143836.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t143836.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t143836.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t143836.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t143836.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t143836.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_143838){var self__ = this;
var _143838__$1 = this;return self__.meta143837;
});
cljs.core.async.t143836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_143838,meta143837__$1){var self__ = this;
var _143838__$1 = this;return (new cljs.core.async.t143836(self__.ch,self__.f,self__.map_GT_,meta143837__$1));
});
cljs.core.async.__GT_t143836 = (function __GT_t143836(ch__$1,f__$1,map_GT___$1,meta143837){return (new cljs.core.async.t143836(ch__$1,f__$1,map_GT___$1,meta143837));
});
}
return (new cljs.core.async.t143836(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t143842 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t143842 = (function (ch,p,filter_GT_,meta143843){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta143843 = meta143843;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t143842.cljs$lang$type = true;
cljs.core.async.t143842.cljs$lang$ctorStr = "cljs.core.async/t143842";
cljs.core.async.t143842.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t143842");
});
cljs.core.async.t143842.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t143842.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t143842.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t143842.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t143842.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t143842.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t143842.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t143842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_143844){var self__ = this;
var _143844__$1 = this;return self__.meta143843;
});
cljs.core.async.t143842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_143844,meta143843__$1){var self__ = this;
var _143844__$1 = this;return (new cljs.core.async.t143842(self__.ch,self__.p,self__.filter_GT_,meta143843__$1));
});
cljs.core.async.__GT_t143842 = (function __GT_t143842(ch__$1,p__$1,filter_GT___$1,meta143843){return (new cljs.core.async.t143842(ch__$1,p__$1,filter_GT___$1,meta143843));
});
}
return (new cljs.core.async.t143842(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5867__auto___143927 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5867__auto___143927,out){
return (function (){var f__5868__auto__ = (function (){var switch__5852__auto__ = ((function (c__5867__auto___143927,out){
return (function (state_143906){var state_val_143907 = (state_143906[(1)]);if((state_val_143907 === (7)))
{var inst_143902 = (state_143906[(2)]);var state_143906__$1 = state_143906;var statearr_143908_143928 = state_143906__$1;(statearr_143908_143928[(2)] = inst_143902);
(statearr_143908_143928[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_143907 === (1)))
{var state_143906__$1 = state_143906;var statearr_143909_143929 = state_143906__$1;(statearr_143909_143929[(2)] = null);
(statearr_143909_143929[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_143907 === (4)))
{var inst_143888 = (state_143906[(7)]);var inst_143888__$1 = (state_143906[(2)]);var inst_143889 = (inst_143888__$1 == null);var state_143906__$1 = (function (){var statearr_143910 = state_143906;(statearr_143910[(7)] = inst_143888__$1);
return statearr_143910;
})();if(cljs.core.truth_(inst_143889))
{var statearr_143911_143930 = state_143906__$1;(statearr_143911_143930[(1)] = (5));
} else
{var statearr_143912_143931 = state_143906__$1;(statearr_143912_143931[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_143907 === (6)))
{var inst_143888 = (state_143906[(7)]);var inst_143893 = p.call(null,inst_143888);var state_143906__$1 = state_143906;if(cljs.core.truth_(inst_143893))
{var statearr_143913_143932 = state_143906__$1;(statearr_143913_143932[(1)] = (8));
} else
{var statearr_143914_143933 = state_143906__$1;(statearr_143914_143933[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_143907 === (3)))
{var inst_143904 = (state_143906[(2)]);var state_143906__$1 = state_143906;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_143906__$1,inst_143904);
} else
{if((state_val_143907 === (2)))
{var state_143906__$1 = state_143906;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_143906__$1,(4),ch);
} else
{if((state_val_143907 === (11)))
{var inst_143896 = (state_143906[(2)]);var state_143906__$1 = state_143906;var statearr_143915_143934 = state_143906__$1;(statearr_143915_143934[(2)] = inst_143896);
(statearr_143915_143934[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_143907 === (9)))
{var state_143906__$1 = state_143906;var statearr_143916_143935 = state_143906__$1;(statearr_143916_143935[(2)] = null);
(statearr_143916_143935[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_143907 === (5)))
{var inst_143891 = cljs.core.async.close_BANG_.call(null,out);var state_143906__$1 = state_143906;var statearr_143917_143936 = state_143906__$1;(statearr_143917_143936[(2)] = inst_143891);
(statearr_143917_143936[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_143907 === (10)))
{var inst_143899 = (state_143906[(2)]);var state_143906__$1 = (function (){var statearr_143918 = state_143906;(statearr_143918[(8)] = inst_143899);
return statearr_143918;
})();var statearr_143919_143937 = state_143906__$1;(statearr_143919_143937[(2)] = null);
(statearr_143919_143937[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_143907 === (8)))
{var inst_143888 = (state_143906[(7)]);var state_143906__$1 = state_143906;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_143906__$1,(11),out,inst_143888);
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
});})(c__5867__auto___143927,out))
;return ((function (switch__5852__auto__,c__5867__auto___143927,out){
return (function() {
var state_machine__5853__auto__ = null;
var state_machine__5853__auto____0 = (function (){var statearr_143923 = [null,null,null,null,null,null,null,null,null];(statearr_143923[(0)] = state_machine__5853__auto__);
(statearr_143923[(1)] = (1));
return statearr_143923;
});
var state_machine__5853__auto____1 = (function (state_143906){while(true){
var ret_value__5854__auto__ = (function (){try{while(true){
var result__5855__auto__ = switch__5852__auto__.call(null,state_143906);if(cljs.core.keyword_identical_QMARK_.call(null,result__5855__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5855__auto__;
}
break;
}
}catch (e143924){if((e143924 instanceof Object))
{var ex__5856__auto__ = e143924;var statearr_143925_143938 = state_143906;(statearr_143925_143938[(5)] = ex__5856__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_143906);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e143924;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__143939 = state_143906;
state_143906 = G__143939;
continue;
}
} else
{return ret_value__5854__auto__;
}
break;
}
});
state_machine__5853__auto__ = function(state_143906){
switch(arguments.length){
case 0:
return state_machine__5853__auto____0.call(this);
case 1:
return state_machine__5853__auto____1.call(this,state_143906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5853__auto____0;
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5853__auto____1;
return state_machine__5853__auto__;
})()
;})(switch__5852__auto__,c__5867__auto___143927,out))
})();var state__5869__auto__ = (function (){var statearr_143926 = f__5868__auto__.call(null);(statearr_143926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5867__auto___143927);
return statearr_143926;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5869__auto__);
});})(c__5867__auto___143927,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5867__auto__){
return (function (){var f__5868__auto__ = (function (){var switch__5852__auto__ = ((function (c__5867__auto__){
return (function (state_144105){var state_val_144106 = (state_144105[(1)]);if((state_val_144106 === (7)))
{var inst_144101 = (state_144105[(2)]);var state_144105__$1 = state_144105;var statearr_144107_144148 = state_144105__$1;(statearr_144107_144148[(2)] = inst_144101);
(statearr_144107_144148[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144106 === (20)))
{var inst_144071 = (state_144105[(7)]);var inst_144082 = (state_144105[(2)]);var inst_144083 = cljs.core.next.call(null,inst_144071);var inst_144057 = inst_144083;var inst_144058 = null;var inst_144059 = (0);var inst_144060 = (0);var state_144105__$1 = (function (){var statearr_144108 = state_144105;(statearr_144108[(8)] = inst_144059);
(statearr_144108[(9)] = inst_144057);
(statearr_144108[(10)] = inst_144082);
(statearr_144108[(11)] = inst_144060);
(statearr_144108[(12)] = inst_144058);
return statearr_144108;
})();var statearr_144109_144149 = state_144105__$1;(statearr_144109_144149[(2)] = null);
(statearr_144109_144149[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144106 === (1)))
{var state_144105__$1 = state_144105;var statearr_144110_144150 = state_144105__$1;(statearr_144110_144150[(2)] = null);
(statearr_144110_144150[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144106 === (4)))
{var inst_144046 = (state_144105[(13)]);var inst_144046__$1 = (state_144105[(2)]);var inst_144047 = (inst_144046__$1 == null);var state_144105__$1 = (function (){var statearr_144111 = state_144105;(statearr_144111[(13)] = inst_144046__$1);
return statearr_144111;
})();if(cljs.core.truth_(inst_144047))
{var statearr_144112_144151 = state_144105__$1;(statearr_144112_144151[(1)] = (5));
} else
{var statearr_144113_144152 = state_144105__$1;(statearr_144113_144152[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144106 === (15)))
{var state_144105__$1 = state_144105;var statearr_144117_144153 = state_144105__$1;(statearr_144117_144153[(2)] = null);
(statearr_144117_144153[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144106 === (21)))
{var state_144105__$1 = state_144105;var statearr_144118_144154 = state_144105__$1;(statearr_144118_144154[(2)] = null);
(statearr_144118_144154[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144106 === (13)))
{var inst_144059 = (state_144105[(8)]);var inst_144057 = (state_144105[(9)]);var inst_144060 = (state_144105[(11)]);var inst_144058 = (state_144105[(12)]);var inst_144067 = (state_144105[(2)]);var inst_144068 = (inst_144060 + (1));var tmp144114 = inst_144059;var tmp144115 = inst_144057;var tmp144116 = inst_144058;var inst_144057__$1 = tmp144115;var inst_144058__$1 = tmp144116;var inst_144059__$1 = tmp144114;var inst_144060__$1 = inst_144068;var state_144105__$1 = (function (){var statearr_144119 = state_144105;(statearr_144119[(8)] = inst_144059__$1);
(statearr_144119[(9)] = inst_144057__$1);
(statearr_144119[(14)] = inst_144067);
(statearr_144119[(11)] = inst_144060__$1);
(statearr_144119[(12)] = inst_144058__$1);
return statearr_144119;
})();var statearr_144120_144155 = state_144105__$1;(statearr_144120_144155[(2)] = null);
(statearr_144120_144155[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144106 === (22)))
{var state_144105__$1 = state_144105;var statearr_144121_144156 = state_144105__$1;(statearr_144121_144156[(2)] = null);
(statearr_144121_144156[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144106 === (6)))
{var inst_144046 = (state_144105[(13)]);var inst_144055 = f.call(null,inst_144046);var inst_144056 = cljs.core.seq.call(null,inst_144055);var inst_144057 = inst_144056;var inst_144058 = null;var inst_144059 = (0);var inst_144060 = (0);var state_144105__$1 = (function (){var statearr_144122 = state_144105;(statearr_144122[(8)] = inst_144059);
(statearr_144122[(9)] = inst_144057);
(statearr_144122[(11)] = inst_144060);
(statearr_144122[(12)] = inst_144058);
return statearr_144122;
})();var statearr_144123_144157 = state_144105__$1;(statearr_144123_144157[(2)] = null);
(statearr_144123_144157[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144106 === (17)))
{var inst_144071 = (state_144105[(7)]);var inst_144075 = cljs.core.chunk_first.call(null,inst_144071);var inst_144076 = cljs.core.chunk_rest.call(null,inst_144071);var inst_144077 = cljs.core.count.call(null,inst_144075);var inst_144057 = inst_144076;var inst_144058 = inst_144075;var inst_144059 = inst_144077;var inst_144060 = (0);var state_144105__$1 = (function (){var statearr_144124 = state_144105;(statearr_144124[(8)] = inst_144059);
(statearr_144124[(9)] = inst_144057);
(statearr_144124[(11)] = inst_144060);
(statearr_144124[(12)] = inst_144058);
return statearr_144124;
})();var statearr_144125_144158 = state_144105__$1;(statearr_144125_144158[(2)] = null);
(statearr_144125_144158[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144106 === (3)))
{var inst_144103 = (state_144105[(2)]);var state_144105__$1 = state_144105;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_144105__$1,inst_144103);
} else
{if((state_val_144106 === (12)))
{var inst_144091 = (state_144105[(2)]);var state_144105__$1 = state_144105;var statearr_144126_144159 = state_144105__$1;(statearr_144126_144159[(2)] = inst_144091);
(statearr_144126_144159[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144106 === (2)))
{var state_144105__$1 = state_144105;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_144105__$1,(4),in$);
} else
{if((state_val_144106 === (23)))
{var inst_144099 = (state_144105[(2)]);var state_144105__$1 = state_144105;var statearr_144127_144160 = state_144105__$1;(statearr_144127_144160[(2)] = inst_144099);
(statearr_144127_144160[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144106 === (19)))
{var inst_144086 = (state_144105[(2)]);var state_144105__$1 = state_144105;var statearr_144128_144161 = state_144105__$1;(statearr_144128_144161[(2)] = inst_144086);
(statearr_144128_144161[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144106 === (11)))
{var inst_144071 = (state_144105[(7)]);var inst_144057 = (state_144105[(9)]);var inst_144071__$1 = cljs.core.seq.call(null,inst_144057);var state_144105__$1 = (function (){var statearr_144129 = state_144105;(statearr_144129[(7)] = inst_144071__$1);
return statearr_144129;
})();if(inst_144071__$1)
{var statearr_144130_144162 = state_144105__$1;(statearr_144130_144162[(1)] = (14));
} else
{var statearr_144131_144163 = state_144105__$1;(statearr_144131_144163[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144106 === (9)))
{var inst_144093 = (state_144105[(2)]);var inst_144094 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_144105__$1 = (function (){var statearr_144132 = state_144105;(statearr_144132[(15)] = inst_144093);
return statearr_144132;
})();if(cljs.core.truth_(inst_144094))
{var statearr_144133_144164 = state_144105__$1;(statearr_144133_144164[(1)] = (21));
} else
{var statearr_144134_144165 = state_144105__$1;(statearr_144134_144165[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144106 === (5)))
{var inst_144049 = cljs.core.async.close_BANG_.call(null,out);var state_144105__$1 = state_144105;var statearr_144135_144166 = state_144105__$1;(statearr_144135_144166[(2)] = inst_144049);
(statearr_144135_144166[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144106 === (14)))
{var inst_144071 = (state_144105[(7)]);var inst_144073 = cljs.core.chunked_seq_QMARK_.call(null,inst_144071);var state_144105__$1 = state_144105;if(inst_144073)
{var statearr_144136_144167 = state_144105__$1;(statearr_144136_144167[(1)] = (17));
} else
{var statearr_144137_144168 = state_144105__$1;(statearr_144137_144168[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144106 === (16)))
{var inst_144089 = (state_144105[(2)]);var state_144105__$1 = state_144105;var statearr_144138_144169 = state_144105__$1;(statearr_144138_144169[(2)] = inst_144089);
(statearr_144138_144169[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144106 === (10)))
{var inst_144060 = (state_144105[(11)]);var inst_144058 = (state_144105[(12)]);var inst_144065 = cljs.core._nth.call(null,inst_144058,inst_144060);var state_144105__$1 = state_144105;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_144105__$1,(13),out,inst_144065);
} else
{if((state_val_144106 === (18)))
{var inst_144071 = (state_144105[(7)]);var inst_144080 = cljs.core.first.call(null,inst_144071);var state_144105__$1 = state_144105;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_144105__$1,(20),out,inst_144080);
} else
{if((state_val_144106 === (8)))
{var inst_144059 = (state_144105[(8)]);var inst_144060 = (state_144105[(11)]);var inst_144062 = (inst_144060 < inst_144059);var inst_144063 = inst_144062;var state_144105__$1 = state_144105;if(cljs.core.truth_(inst_144063))
{var statearr_144139_144170 = state_144105__$1;(statearr_144139_144170[(1)] = (10));
} else
{var statearr_144140_144171 = state_144105__$1;(statearr_144140_144171[(1)] = (11));
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
});})(c__5867__auto__))
;return ((function (switch__5852__auto__,c__5867__auto__){
return (function() {
var state_machine__5853__auto__ = null;
var state_machine__5853__auto____0 = (function (){var statearr_144144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_144144[(0)] = state_machine__5853__auto__);
(statearr_144144[(1)] = (1));
return statearr_144144;
});
var state_machine__5853__auto____1 = (function (state_144105){while(true){
var ret_value__5854__auto__ = (function (){try{while(true){
var result__5855__auto__ = switch__5852__auto__.call(null,state_144105);if(cljs.core.keyword_identical_QMARK_.call(null,result__5855__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5855__auto__;
}
break;
}
}catch (e144145){if((e144145 instanceof Object))
{var ex__5856__auto__ = e144145;var statearr_144146_144172 = state_144105;(statearr_144146_144172[(5)] = ex__5856__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_144105);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e144145;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__144173 = state_144105;
state_144105 = G__144173;
continue;
}
} else
{return ret_value__5854__auto__;
}
break;
}
});
state_machine__5853__auto__ = function(state_144105){
switch(arguments.length){
case 0:
return state_machine__5853__auto____0.call(this);
case 1:
return state_machine__5853__auto____1.call(this,state_144105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5853__auto____0;
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5853__auto____1;
return state_machine__5853__auto__;
})()
;})(switch__5852__auto__,c__5867__auto__))
})();var state__5869__auto__ = (function (){var statearr_144147 = f__5868__auto__.call(null);(statearr_144147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5867__auto__);
return statearr_144147;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5869__auto__);
});})(c__5867__auto__))
);
return c__5867__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5867__auto___144268 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5867__auto___144268){
return (function (){var f__5868__auto__ = (function (){var switch__5852__auto__ = ((function (c__5867__auto___144268){
return (function (state_144244){var state_val_144245 = (state_144244[(1)]);if((state_val_144245 === (7)))
{var inst_144240 = (state_144244[(2)]);var state_144244__$1 = state_144244;var statearr_144246_144269 = state_144244__$1;(statearr_144246_144269[(2)] = inst_144240);
(statearr_144246_144269[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144245 === (1)))
{var state_144244__$1 = state_144244;var statearr_144247_144270 = state_144244__$1;(statearr_144247_144270[(2)] = null);
(statearr_144247_144270[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144245 === (4)))
{var inst_144223 = (state_144244[(7)]);var inst_144223__$1 = (state_144244[(2)]);var inst_144224 = (inst_144223__$1 == null);var state_144244__$1 = (function (){var statearr_144248 = state_144244;(statearr_144248[(7)] = inst_144223__$1);
return statearr_144248;
})();if(cljs.core.truth_(inst_144224))
{var statearr_144249_144271 = state_144244__$1;(statearr_144249_144271[(1)] = (5));
} else
{var statearr_144250_144272 = state_144244__$1;(statearr_144250_144272[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144245 === (13)))
{var state_144244__$1 = state_144244;var statearr_144251_144273 = state_144244__$1;(statearr_144251_144273[(2)] = null);
(statearr_144251_144273[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144245 === (6)))
{var inst_144223 = (state_144244[(7)]);var state_144244__$1 = state_144244;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_144244__$1,(11),to,inst_144223);
} else
{if((state_val_144245 === (3)))
{var inst_144242 = (state_144244[(2)]);var state_144244__$1 = state_144244;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_144244__$1,inst_144242);
} else
{if((state_val_144245 === (12)))
{var state_144244__$1 = state_144244;var statearr_144252_144274 = state_144244__$1;(statearr_144252_144274[(2)] = null);
(statearr_144252_144274[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144245 === (2)))
{var state_144244__$1 = state_144244;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_144244__$1,(4),from);
} else
{if((state_val_144245 === (11)))
{var inst_144233 = (state_144244[(2)]);var state_144244__$1 = state_144244;if(cljs.core.truth_(inst_144233))
{var statearr_144253_144275 = state_144244__$1;(statearr_144253_144275[(1)] = (12));
} else
{var statearr_144254_144276 = state_144244__$1;(statearr_144254_144276[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144245 === (9)))
{var state_144244__$1 = state_144244;var statearr_144255_144277 = state_144244__$1;(statearr_144255_144277[(2)] = null);
(statearr_144255_144277[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144245 === (5)))
{var state_144244__$1 = state_144244;if(cljs.core.truth_(close_QMARK_))
{var statearr_144256_144278 = state_144244__$1;(statearr_144256_144278[(1)] = (8));
} else
{var statearr_144257_144279 = state_144244__$1;(statearr_144257_144279[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144245 === (14)))
{var inst_144238 = (state_144244[(2)]);var state_144244__$1 = state_144244;var statearr_144258_144280 = state_144244__$1;(statearr_144258_144280[(2)] = inst_144238);
(statearr_144258_144280[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144245 === (10)))
{var inst_144230 = (state_144244[(2)]);var state_144244__$1 = state_144244;var statearr_144259_144281 = state_144244__$1;(statearr_144259_144281[(2)] = inst_144230);
(statearr_144259_144281[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144245 === (8)))
{var inst_144227 = cljs.core.async.close_BANG_.call(null,to);var state_144244__$1 = state_144244;var statearr_144260_144282 = state_144244__$1;(statearr_144260_144282[(2)] = inst_144227);
(statearr_144260_144282[(1)] = (10));
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
});})(c__5867__auto___144268))
;return ((function (switch__5852__auto__,c__5867__auto___144268){
return (function() {
var state_machine__5853__auto__ = null;
var state_machine__5853__auto____0 = (function (){var statearr_144264 = [null,null,null,null,null,null,null,null];(statearr_144264[(0)] = state_machine__5853__auto__);
(statearr_144264[(1)] = (1));
return statearr_144264;
});
var state_machine__5853__auto____1 = (function (state_144244){while(true){
var ret_value__5854__auto__ = (function (){try{while(true){
var result__5855__auto__ = switch__5852__auto__.call(null,state_144244);if(cljs.core.keyword_identical_QMARK_.call(null,result__5855__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5855__auto__;
}
break;
}
}catch (e144265){if((e144265 instanceof Object))
{var ex__5856__auto__ = e144265;var statearr_144266_144283 = state_144244;(statearr_144266_144283[(5)] = ex__5856__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_144244);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e144265;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__144284 = state_144244;
state_144244 = G__144284;
continue;
}
} else
{return ret_value__5854__auto__;
}
break;
}
});
state_machine__5853__auto__ = function(state_144244){
switch(arguments.length){
case 0:
return state_machine__5853__auto____0.call(this);
case 1:
return state_machine__5853__auto____1.call(this,state_144244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5853__auto____0;
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5853__auto____1;
return state_machine__5853__auto__;
})()
;})(switch__5852__auto__,c__5867__auto___144268))
})();var state__5869__auto__ = (function (){var statearr_144267 = f__5868__auto__.call(null);(statearr_144267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5867__auto___144268);
return statearr_144267;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5869__auto__);
});})(c__5867__auto___144268))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5867__auto___144385 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5867__auto___144385,tc,fc){
return (function (){var f__5868__auto__ = (function (){var switch__5852__auto__ = ((function (c__5867__auto___144385,tc,fc){
return (function (state_144360){var state_val_144361 = (state_144360[(1)]);if((state_val_144361 === (7)))
{var inst_144356 = (state_144360[(2)]);var state_144360__$1 = state_144360;var statearr_144362_144386 = state_144360__$1;(statearr_144362_144386[(2)] = inst_144356);
(statearr_144362_144386[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144361 === (1)))
{var state_144360__$1 = state_144360;var statearr_144363_144387 = state_144360__$1;(statearr_144363_144387[(2)] = null);
(statearr_144363_144387[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144361 === (4)))
{var inst_144337 = (state_144360[(7)]);var inst_144337__$1 = (state_144360[(2)]);var inst_144338 = (inst_144337__$1 == null);var state_144360__$1 = (function (){var statearr_144364 = state_144360;(statearr_144364[(7)] = inst_144337__$1);
return statearr_144364;
})();if(cljs.core.truth_(inst_144338))
{var statearr_144365_144388 = state_144360__$1;(statearr_144365_144388[(1)] = (5));
} else
{var statearr_144366_144389 = state_144360__$1;(statearr_144366_144389[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144361 === (13)))
{var state_144360__$1 = state_144360;var statearr_144367_144390 = state_144360__$1;(statearr_144367_144390[(2)] = null);
(statearr_144367_144390[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144361 === (6)))
{var inst_144337 = (state_144360[(7)]);var inst_144343 = p.call(null,inst_144337);var state_144360__$1 = state_144360;if(cljs.core.truth_(inst_144343))
{var statearr_144368_144391 = state_144360__$1;(statearr_144368_144391[(1)] = (9));
} else
{var statearr_144369_144392 = state_144360__$1;(statearr_144369_144392[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144361 === (3)))
{var inst_144358 = (state_144360[(2)]);var state_144360__$1 = state_144360;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_144360__$1,inst_144358);
} else
{if((state_val_144361 === (12)))
{var state_144360__$1 = state_144360;var statearr_144370_144393 = state_144360__$1;(statearr_144370_144393[(2)] = null);
(statearr_144370_144393[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144361 === (2)))
{var state_144360__$1 = state_144360;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_144360__$1,(4),ch);
} else
{if((state_val_144361 === (11)))
{var inst_144337 = (state_144360[(7)]);var inst_144347 = (state_144360[(2)]);var state_144360__$1 = state_144360;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_144360__$1,(8),inst_144347,inst_144337);
} else
{if((state_val_144361 === (9)))
{var state_144360__$1 = state_144360;var statearr_144371_144394 = state_144360__$1;(statearr_144371_144394[(2)] = tc);
(statearr_144371_144394[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144361 === (5)))
{var inst_144340 = cljs.core.async.close_BANG_.call(null,tc);var inst_144341 = cljs.core.async.close_BANG_.call(null,fc);var state_144360__$1 = (function (){var statearr_144372 = state_144360;(statearr_144372[(8)] = inst_144340);
return statearr_144372;
})();var statearr_144373_144395 = state_144360__$1;(statearr_144373_144395[(2)] = inst_144341);
(statearr_144373_144395[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144361 === (14)))
{var inst_144354 = (state_144360[(2)]);var state_144360__$1 = state_144360;var statearr_144374_144396 = state_144360__$1;(statearr_144374_144396[(2)] = inst_144354);
(statearr_144374_144396[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144361 === (10)))
{var state_144360__$1 = state_144360;var statearr_144375_144397 = state_144360__$1;(statearr_144375_144397[(2)] = fc);
(statearr_144375_144397[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144361 === (8)))
{var inst_144349 = (state_144360[(2)]);var state_144360__$1 = state_144360;if(cljs.core.truth_(inst_144349))
{var statearr_144376_144398 = state_144360__$1;(statearr_144376_144398[(1)] = (12));
} else
{var statearr_144377_144399 = state_144360__$1;(statearr_144377_144399[(1)] = (13));
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
});})(c__5867__auto___144385,tc,fc))
;return ((function (switch__5852__auto__,c__5867__auto___144385,tc,fc){
return (function() {
var state_machine__5853__auto__ = null;
var state_machine__5853__auto____0 = (function (){var statearr_144381 = [null,null,null,null,null,null,null,null,null];(statearr_144381[(0)] = state_machine__5853__auto__);
(statearr_144381[(1)] = (1));
return statearr_144381;
});
var state_machine__5853__auto____1 = (function (state_144360){while(true){
var ret_value__5854__auto__ = (function (){try{while(true){
var result__5855__auto__ = switch__5852__auto__.call(null,state_144360);if(cljs.core.keyword_identical_QMARK_.call(null,result__5855__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5855__auto__;
}
break;
}
}catch (e144382){if((e144382 instanceof Object))
{var ex__5856__auto__ = e144382;var statearr_144383_144400 = state_144360;(statearr_144383_144400[(5)] = ex__5856__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_144360);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e144382;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__144401 = state_144360;
state_144360 = G__144401;
continue;
}
} else
{return ret_value__5854__auto__;
}
break;
}
});
state_machine__5853__auto__ = function(state_144360){
switch(arguments.length){
case 0:
return state_machine__5853__auto____0.call(this);
case 1:
return state_machine__5853__auto____1.call(this,state_144360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5853__auto____0;
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5853__auto____1;
return state_machine__5853__auto__;
})()
;})(switch__5852__auto__,c__5867__auto___144385,tc,fc))
})();var state__5869__auto__ = (function (){var statearr_144384 = f__5868__auto__.call(null);(statearr_144384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5867__auto___144385);
return statearr_144384;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5869__auto__);
});})(c__5867__auto___144385,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5867__auto__){
return (function (){var f__5868__auto__ = (function (){var switch__5852__auto__ = ((function (c__5867__auto__){
return (function (state_144448){var state_val_144449 = (state_144448[(1)]);if((state_val_144449 === (7)))
{var inst_144444 = (state_144448[(2)]);var state_144448__$1 = state_144448;var statearr_144450_144466 = state_144448__$1;(statearr_144450_144466[(2)] = inst_144444);
(statearr_144450_144466[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144449 === (6)))
{var inst_144434 = (state_144448[(7)]);var inst_144437 = (state_144448[(8)]);var inst_144441 = f.call(null,inst_144434,inst_144437);var inst_144434__$1 = inst_144441;var state_144448__$1 = (function (){var statearr_144451 = state_144448;(statearr_144451[(7)] = inst_144434__$1);
return statearr_144451;
})();var statearr_144452_144467 = state_144448__$1;(statearr_144452_144467[(2)] = null);
(statearr_144452_144467[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144449 === (5)))
{var inst_144434 = (state_144448[(7)]);var state_144448__$1 = state_144448;var statearr_144453_144468 = state_144448__$1;(statearr_144453_144468[(2)] = inst_144434);
(statearr_144453_144468[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144449 === (4)))
{var inst_144437 = (state_144448[(8)]);var inst_144437__$1 = (state_144448[(2)]);var inst_144438 = (inst_144437__$1 == null);var state_144448__$1 = (function (){var statearr_144454 = state_144448;(statearr_144454[(8)] = inst_144437__$1);
return statearr_144454;
})();if(cljs.core.truth_(inst_144438))
{var statearr_144455_144469 = state_144448__$1;(statearr_144455_144469[(1)] = (5));
} else
{var statearr_144456_144470 = state_144448__$1;(statearr_144456_144470[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144449 === (3)))
{var inst_144446 = (state_144448[(2)]);var state_144448__$1 = state_144448;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_144448__$1,inst_144446);
} else
{if((state_val_144449 === (2)))
{var state_144448__$1 = state_144448;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_144448__$1,(4),ch);
} else
{if((state_val_144449 === (1)))
{var inst_144434 = init;var state_144448__$1 = (function (){var statearr_144457 = state_144448;(statearr_144457[(7)] = inst_144434);
return statearr_144457;
})();var statearr_144458_144471 = state_144448__$1;(statearr_144458_144471[(2)] = null);
(statearr_144458_144471[(1)] = (2));
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
});})(c__5867__auto__))
;return ((function (switch__5852__auto__,c__5867__auto__){
return (function() {
var state_machine__5853__auto__ = null;
var state_machine__5853__auto____0 = (function (){var statearr_144462 = [null,null,null,null,null,null,null,null,null];(statearr_144462[(0)] = state_machine__5853__auto__);
(statearr_144462[(1)] = (1));
return statearr_144462;
});
var state_machine__5853__auto____1 = (function (state_144448){while(true){
var ret_value__5854__auto__ = (function (){try{while(true){
var result__5855__auto__ = switch__5852__auto__.call(null,state_144448);if(cljs.core.keyword_identical_QMARK_.call(null,result__5855__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5855__auto__;
}
break;
}
}catch (e144463){if((e144463 instanceof Object))
{var ex__5856__auto__ = e144463;var statearr_144464_144472 = state_144448;(statearr_144464_144472[(5)] = ex__5856__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_144448);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e144463;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__144473 = state_144448;
state_144448 = G__144473;
continue;
}
} else
{return ret_value__5854__auto__;
}
break;
}
});
state_machine__5853__auto__ = function(state_144448){
switch(arguments.length){
case 0:
return state_machine__5853__auto____0.call(this);
case 1:
return state_machine__5853__auto____1.call(this,state_144448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5853__auto____0;
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5853__auto____1;
return state_machine__5853__auto__;
})()
;})(switch__5852__auto__,c__5867__auto__))
})();var state__5869__auto__ = (function (){var statearr_144465 = f__5868__auto__.call(null);(statearr_144465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5867__auto__);
return statearr_144465;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5869__auto__);
});})(c__5867__auto__))
);
return c__5867__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5867__auto__){
return (function (){var f__5868__auto__ = (function (){var switch__5852__auto__ = ((function (c__5867__auto__){
return (function (state_144547){var state_val_144548 = (state_144547[(1)]);if((state_val_144548 === (7)))
{var inst_144529 = (state_144547[(2)]);var state_144547__$1 = state_144547;var statearr_144549_144572 = state_144547__$1;(statearr_144549_144572[(2)] = inst_144529);
(statearr_144549_144572[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144548 === (1)))
{var inst_144523 = cljs.core.seq.call(null,coll);var inst_144524 = inst_144523;var state_144547__$1 = (function (){var statearr_144550 = state_144547;(statearr_144550[(7)] = inst_144524);
return statearr_144550;
})();var statearr_144551_144573 = state_144547__$1;(statearr_144551_144573[(2)] = null);
(statearr_144551_144573[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144548 === (4)))
{var inst_144524 = (state_144547[(7)]);var inst_144527 = cljs.core.first.call(null,inst_144524);var state_144547__$1 = state_144547;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_144547__$1,(7),ch,inst_144527);
} else
{if((state_val_144548 === (13)))
{var inst_144541 = (state_144547[(2)]);var state_144547__$1 = state_144547;var statearr_144552_144574 = state_144547__$1;(statearr_144552_144574[(2)] = inst_144541);
(statearr_144552_144574[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144548 === (6)))
{var inst_144532 = (state_144547[(2)]);var state_144547__$1 = state_144547;if(cljs.core.truth_(inst_144532))
{var statearr_144553_144575 = state_144547__$1;(statearr_144553_144575[(1)] = (8));
} else
{var statearr_144554_144576 = state_144547__$1;(statearr_144554_144576[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144548 === (3)))
{var inst_144545 = (state_144547[(2)]);var state_144547__$1 = state_144547;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_144547__$1,inst_144545);
} else
{if((state_val_144548 === (12)))
{var state_144547__$1 = state_144547;var statearr_144555_144577 = state_144547__$1;(statearr_144555_144577[(2)] = null);
(statearr_144555_144577[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144548 === (2)))
{var inst_144524 = (state_144547[(7)]);var state_144547__$1 = state_144547;if(cljs.core.truth_(inst_144524))
{var statearr_144556_144578 = state_144547__$1;(statearr_144556_144578[(1)] = (4));
} else
{var statearr_144557_144579 = state_144547__$1;(statearr_144557_144579[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144548 === (11)))
{var inst_144538 = cljs.core.async.close_BANG_.call(null,ch);var state_144547__$1 = state_144547;var statearr_144558_144580 = state_144547__$1;(statearr_144558_144580[(2)] = inst_144538);
(statearr_144558_144580[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144548 === (9)))
{var state_144547__$1 = state_144547;if(cljs.core.truth_(close_QMARK_))
{var statearr_144559_144581 = state_144547__$1;(statearr_144559_144581[(1)] = (11));
} else
{var statearr_144560_144582 = state_144547__$1;(statearr_144560_144582[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144548 === (5)))
{var inst_144524 = (state_144547[(7)]);var state_144547__$1 = state_144547;var statearr_144561_144583 = state_144547__$1;(statearr_144561_144583[(2)] = inst_144524);
(statearr_144561_144583[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144548 === (10)))
{var inst_144543 = (state_144547[(2)]);var state_144547__$1 = state_144547;var statearr_144562_144584 = state_144547__$1;(statearr_144562_144584[(2)] = inst_144543);
(statearr_144562_144584[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144548 === (8)))
{var inst_144524 = (state_144547[(7)]);var inst_144534 = cljs.core.next.call(null,inst_144524);var inst_144524__$1 = inst_144534;var state_144547__$1 = (function (){var statearr_144563 = state_144547;(statearr_144563[(7)] = inst_144524__$1);
return statearr_144563;
})();var statearr_144564_144585 = state_144547__$1;(statearr_144564_144585[(2)] = null);
(statearr_144564_144585[(1)] = (2));
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
});})(c__5867__auto__))
;return ((function (switch__5852__auto__,c__5867__auto__){
return (function() {
var state_machine__5853__auto__ = null;
var state_machine__5853__auto____0 = (function (){var statearr_144568 = [null,null,null,null,null,null,null,null];(statearr_144568[(0)] = state_machine__5853__auto__);
(statearr_144568[(1)] = (1));
return statearr_144568;
});
var state_machine__5853__auto____1 = (function (state_144547){while(true){
var ret_value__5854__auto__ = (function (){try{while(true){
var result__5855__auto__ = switch__5852__auto__.call(null,state_144547);if(cljs.core.keyword_identical_QMARK_.call(null,result__5855__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5855__auto__;
}
break;
}
}catch (e144569){if((e144569 instanceof Object))
{var ex__5856__auto__ = e144569;var statearr_144570_144586 = state_144547;(statearr_144570_144586[(5)] = ex__5856__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_144547);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e144569;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__144587 = state_144547;
state_144547 = G__144587;
continue;
}
} else
{return ret_value__5854__auto__;
}
break;
}
});
state_machine__5853__auto__ = function(state_144547){
switch(arguments.length){
case 0:
return state_machine__5853__auto____0.call(this);
case 1:
return state_machine__5853__auto____1.call(this,state_144547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5853__auto____0;
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5853__auto____1;
return state_machine__5853__auto__;
})()
;})(switch__5852__auto__,c__5867__auto__))
})();var state__5869__auto__ = (function (){var statearr_144571 = f__5868__auto__.call(null);(statearr_144571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5867__auto__);
return statearr_144571;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5869__auto__);
});})(c__5867__auto__))
);
return c__5867__auto__;
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
cljs.core.async.Mux = (function (){var obj144589 = {};return obj144589;
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
cljs.core.async.Mult = (function (){var obj144591 = {};return obj144591;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t144813 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t144813 = (function (cs,ch,mult,meta144814){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta144814 = meta144814;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t144813.cljs$lang$type = true;
cljs.core.async.t144813.cljs$lang$ctorStr = "cljs.core.async/t144813";
cljs.core.async.t144813.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t144813");
});})(cs))
;
cljs.core.async.t144813.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t144813.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t144813.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t144813.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t144813.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t144813.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t144813.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_144815){var self__ = this;
var _144815__$1 = this;return self__.meta144814;
});})(cs))
;
cljs.core.async.t144813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_144815,meta144814__$1){var self__ = this;
var _144815__$1 = this;return (new cljs.core.async.t144813(self__.cs,self__.ch,self__.mult,meta144814__$1));
});})(cs))
;
cljs.core.async.__GT_t144813 = ((function (cs){
return (function __GT_t144813(cs__$1,ch__$1,mult__$1,meta144814){return (new cljs.core.async.t144813(cs__$1,ch__$1,mult__$1,meta144814));
});})(cs))
;
}
return (new cljs.core.async.t144813(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5867__auto___145034 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5867__auto___145034,cs,m,dchan,dctr,done){
return (function (){var f__5868__auto__ = (function (){var switch__5852__auto__ = ((function (c__5867__auto___145034,cs,m,dchan,dctr,done){
return (function (state_144946){var state_val_144947 = (state_144946[(1)]);if((state_val_144947 === (7)))
{var inst_144942 = (state_144946[(2)]);var state_144946__$1 = state_144946;var statearr_144948_145035 = state_144946__$1;(statearr_144948_145035[(2)] = inst_144942);
(statearr_144948_145035[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (20)))
{var inst_144847 = (state_144946[(7)]);var inst_144857 = cljs.core.first.call(null,inst_144847);var inst_144858 = cljs.core.nth.call(null,inst_144857,(0),null);var inst_144859 = cljs.core.nth.call(null,inst_144857,(1),null);var state_144946__$1 = (function (){var statearr_144949 = state_144946;(statearr_144949[(8)] = inst_144858);
return statearr_144949;
})();if(cljs.core.truth_(inst_144859))
{var statearr_144950_145036 = state_144946__$1;(statearr_144950_145036[(1)] = (22));
} else
{var statearr_144951_145037 = state_144946__$1;(statearr_144951_145037[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (27)))
{var inst_144889 = (state_144946[(9)]);var inst_144887 = (state_144946[(10)]);var inst_144894 = (state_144946[(11)]);var inst_144818 = (state_144946[(12)]);var inst_144894__$1 = cljs.core._nth.call(null,inst_144887,inst_144889);var inst_144895 = cljs.core.async.put_BANG_.call(null,inst_144894__$1,inst_144818,done);var state_144946__$1 = (function (){var statearr_144952 = state_144946;(statearr_144952[(11)] = inst_144894__$1);
return statearr_144952;
})();if(cljs.core.truth_(inst_144895))
{var statearr_144953_145038 = state_144946__$1;(statearr_144953_145038[(1)] = (30));
} else
{var statearr_144954_145039 = state_144946__$1;(statearr_144954_145039[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (1)))
{var state_144946__$1 = state_144946;var statearr_144955_145040 = state_144946__$1;(statearr_144955_145040[(2)] = null);
(statearr_144955_145040[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (24)))
{var inst_144847 = (state_144946[(7)]);var inst_144864 = (state_144946[(2)]);var inst_144865 = cljs.core.next.call(null,inst_144847);var inst_144827 = inst_144865;var inst_144828 = null;var inst_144829 = (0);var inst_144830 = (0);var state_144946__$1 = (function (){var statearr_144956 = state_144946;(statearr_144956[(13)] = inst_144830);
(statearr_144956[(14)] = inst_144864);
(statearr_144956[(15)] = inst_144829);
(statearr_144956[(16)] = inst_144827);
(statearr_144956[(17)] = inst_144828);
return statearr_144956;
})();var statearr_144957_145041 = state_144946__$1;(statearr_144957_145041[(2)] = null);
(statearr_144957_145041[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (39)))
{var state_144946__$1 = state_144946;var statearr_144961_145042 = state_144946__$1;(statearr_144961_145042[(2)] = null);
(statearr_144961_145042[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (4)))
{var inst_144818 = (state_144946[(12)]);var inst_144818__$1 = (state_144946[(2)]);var inst_144819 = (inst_144818__$1 == null);var state_144946__$1 = (function (){var statearr_144962 = state_144946;(statearr_144962[(12)] = inst_144818__$1);
return statearr_144962;
})();if(cljs.core.truth_(inst_144819))
{var statearr_144963_145043 = state_144946__$1;(statearr_144963_145043[(1)] = (5));
} else
{var statearr_144964_145044 = state_144946__$1;(statearr_144964_145044[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (15)))
{var inst_144830 = (state_144946[(13)]);var inst_144829 = (state_144946[(15)]);var inst_144827 = (state_144946[(16)]);var inst_144828 = (state_144946[(17)]);var inst_144843 = (state_144946[(2)]);var inst_144844 = (inst_144830 + (1));var tmp144958 = inst_144829;var tmp144959 = inst_144827;var tmp144960 = inst_144828;var inst_144827__$1 = tmp144959;var inst_144828__$1 = tmp144960;var inst_144829__$1 = tmp144958;var inst_144830__$1 = inst_144844;var state_144946__$1 = (function (){var statearr_144965 = state_144946;(statearr_144965[(13)] = inst_144830__$1);
(statearr_144965[(15)] = inst_144829__$1);
(statearr_144965[(16)] = inst_144827__$1);
(statearr_144965[(17)] = inst_144828__$1);
(statearr_144965[(18)] = inst_144843);
return statearr_144965;
})();var statearr_144966_145045 = state_144946__$1;(statearr_144966_145045[(2)] = null);
(statearr_144966_145045[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (21)))
{var inst_144868 = (state_144946[(2)]);var state_144946__$1 = state_144946;var statearr_144970_145046 = state_144946__$1;(statearr_144970_145046[(2)] = inst_144868);
(statearr_144970_145046[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (31)))
{var inst_144894 = (state_144946[(11)]);var inst_144898 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_144899 = cljs.core.async.untap_STAR_.call(null,m,inst_144894);var state_144946__$1 = (function (){var statearr_144971 = state_144946;(statearr_144971[(19)] = inst_144898);
return statearr_144971;
})();var statearr_144972_145047 = state_144946__$1;(statearr_144972_145047[(2)] = inst_144899);
(statearr_144972_145047[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (32)))
{var inst_144889 = (state_144946[(9)]);var inst_144887 = (state_144946[(10)]);var inst_144888 = (state_144946[(20)]);var inst_144886 = (state_144946[(21)]);var inst_144901 = (state_144946[(2)]);var inst_144902 = (inst_144889 + (1));var tmp144967 = inst_144887;var tmp144968 = inst_144888;var tmp144969 = inst_144886;var inst_144886__$1 = tmp144969;var inst_144887__$1 = tmp144967;var inst_144888__$1 = tmp144968;var inst_144889__$1 = inst_144902;var state_144946__$1 = (function (){var statearr_144973 = state_144946;(statearr_144973[(9)] = inst_144889__$1);
(statearr_144973[(22)] = inst_144901);
(statearr_144973[(10)] = inst_144887__$1);
(statearr_144973[(20)] = inst_144888__$1);
(statearr_144973[(21)] = inst_144886__$1);
return statearr_144973;
})();var statearr_144974_145048 = state_144946__$1;(statearr_144974_145048[(2)] = null);
(statearr_144974_145048[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (40)))
{var inst_144914 = (state_144946[(23)]);var inst_144918 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_144919 = cljs.core.async.untap_STAR_.call(null,m,inst_144914);var state_144946__$1 = (function (){var statearr_144975 = state_144946;(statearr_144975[(24)] = inst_144918);
return statearr_144975;
})();var statearr_144976_145049 = state_144946__$1;(statearr_144976_145049[(2)] = inst_144919);
(statearr_144976_145049[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (33)))
{var inst_144905 = (state_144946[(25)]);var inst_144907 = cljs.core.chunked_seq_QMARK_.call(null,inst_144905);var state_144946__$1 = state_144946;if(inst_144907)
{var statearr_144977_145050 = state_144946__$1;(statearr_144977_145050[(1)] = (36));
} else
{var statearr_144978_145051 = state_144946__$1;(statearr_144978_145051[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (13)))
{var inst_144837 = (state_144946[(26)]);var inst_144840 = cljs.core.async.close_BANG_.call(null,inst_144837);var state_144946__$1 = state_144946;var statearr_144979_145052 = state_144946__$1;(statearr_144979_145052[(2)] = inst_144840);
(statearr_144979_145052[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (22)))
{var inst_144858 = (state_144946[(8)]);var inst_144861 = cljs.core.async.close_BANG_.call(null,inst_144858);var state_144946__$1 = state_144946;var statearr_144980_145053 = state_144946__$1;(statearr_144980_145053[(2)] = inst_144861);
(statearr_144980_145053[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (36)))
{var inst_144905 = (state_144946[(25)]);var inst_144909 = cljs.core.chunk_first.call(null,inst_144905);var inst_144910 = cljs.core.chunk_rest.call(null,inst_144905);var inst_144911 = cljs.core.count.call(null,inst_144909);var inst_144886 = inst_144910;var inst_144887 = inst_144909;var inst_144888 = inst_144911;var inst_144889 = (0);var state_144946__$1 = (function (){var statearr_144981 = state_144946;(statearr_144981[(9)] = inst_144889);
(statearr_144981[(10)] = inst_144887);
(statearr_144981[(20)] = inst_144888);
(statearr_144981[(21)] = inst_144886);
return statearr_144981;
})();var statearr_144982_145054 = state_144946__$1;(statearr_144982_145054[(2)] = null);
(statearr_144982_145054[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (41)))
{var inst_144905 = (state_144946[(25)]);var inst_144921 = (state_144946[(2)]);var inst_144922 = cljs.core.next.call(null,inst_144905);var inst_144886 = inst_144922;var inst_144887 = null;var inst_144888 = (0);var inst_144889 = (0);var state_144946__$1 = (function (){var statearr_144983 = state_144946;(statearr_144983[(9)] = inst_144889);
(statearr_144983[(10)] = inst_144887);
(statearr_144983[(20)] = inst_144888);
(statearr_144983[(21)] = inst_144886);
(statearr_144983[(27)] = inst_144921);
return statearr_144983;
})();var statearr_144984_145055 = state_144946__$1;(statearr_144984_145055[(2)] = null);
(statearr_144984_145055[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (43)))
{var state_144946__$1 = state_144946;var statearr_144985_145056 = state_144946__$1;(statearr_144985_145056[(2)] = null);
(statearr_144985_145056[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (29)))
{var inst_144930 = (state_144946[(2)]);var state_144946__$1 = state_144946;var statearr_144986_145057 = state_144946__$1;(statearr_144986_145057[(2)] = inst_144930);
(statearr_144986_145057[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (44)))
{var inst_144939 = (state_144946[(2)]);var state_144946__$1 = (function (){var statearr_144987 = state_144946;(statearr_144987[(28)] = inst_144939);
return statearr_144987;
})();var statearr_144988_145058 = state_144946__$1;(statearr_144988_145058[(2)] = null);
(statearr_144988_145058[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (6)))
{var inst_144878 = (state_144946[(29)]);var inst_144877 = cljs.core.deref.call(null,cs);var inst_144878__$1 = cljs.core.keys.call(null,inst_144877);var inst_144879 = cljs.core.count.call(null,inst_144878__$1);var inst_144880 = cljs.core.reset_BANG_.call(null,dctr,inst_144879);var inst_144885 = cljs.core.seq.call(null,inst_144878__$1);var inst_144886 = inst_144885;var inst_144887 = null;var inst_144888 = (0);var inst_144889 = (0);var state_144946__$1 = (function (){var statearr_144989 = state_144946;(statearr_144989[(9)] = inst_144889);
(statearr_144989[(10)] = inst_144887);
(statearr_144989[(20)] = inst_144888);
(statearr_144989[(21)] = inst_144886);
(statearr_144989[(29)] = inst_144878__$1);
(statearr_144989[(30)] = inst_144880);
return statearr_144989;
})();var statearr_144990_145059 = state_144946__$1;(statearr_144990_145059[(2)] = null);
(statearr_144990_145059[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (28)))
{var inst_144905 = (state_144946[(25)]);var inst_144886 = (state_144946[(21)]);var inst_144905__$1 = cljs.core.seq.call(null,inst_144886);var state_144946__$1 = (function (){var statearr_144991 = state_144946;(statearr_144991[(25)] = inst_144905__$1);
return statearr_144991;
})();if(inst_144905__$1)
{var statearr_144992_145060 = state_144946__$1;(statearr_144992_145060[(1)] = (33));
} else
{var statearr_144993_145061 = state_144946__$1;(statearr_144993_145061[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (25)))
{var inst_144889 = (state_144946[(9)]);var inst_144888 = (state_144946[(20)]);var inst_144891 = (inst_144889 < inst_144888);var inst_144892 = inst_144891;var state_144946__$1 = state_144946;if(cljs.core.truth_(inst_144892))
{var statearr_144994_145062 = state_144946__$1;(statearr_144994_145062[(1)] = (27));
} else
{var statearr_144995_145063 = state_144946__$1;(statearr_144995_145063[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (34)))
{var state_144946__$1 = state_144946;var statearr_144996_145064 = state_144946__$1;(statearr_144996_145064[(2)] = null);
(statearr_144996_145064[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (17)))
{var state_144946__$1 = state_144946;var statearr_144997_145065 = state_144946__$1;(statearr_144997_145065[(2)] = null);
(statearr_144997_145065[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (3)))
{var inst_144944 = (state_144946[(2)]);var state_144946__$1 = state_144946;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_144946__$1,inst_144944);
} else
{if((state_val_144947 === (12)))
{var inst_144873 = (state_144946[(2)]);var state_144946__$1 = state_144946;var statearr_144998_145066 = state_144946__$1;(statearr_144998_145066[(2)] = inst_144873);
(statearr_144998_145066[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (2)))
{var state_144946__$1 = state_144946;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_144946__$1,(4),ch);
} else
{if((state_val_144947 === (23)))
{var state_144946__$1 = state_144946;var statearr_144999_145067 = state_144946__$1;(statearr_144999_145067[(2)] = null);
(statearr_144999_145067[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (35)))
{var inst_144928 = (state_144946[(2)]);var state_144946__$1 = state_144946;var statearr_145000_145068 = state_144946__$1;(statearr_145000_145068[(2)] = inst_144928);
(statearr_145000_145068[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (19)))
{var inst_144847 = (state_144946[(7)]);var inst_144851 = cljs.core.chunk_first.call(null,inst_144847);var inst_144852 = cljs.core.chunk_rest.call(null,inst_144847);var inst_144853 = cljs.core.count.call(null,inst_144851);var inst_144827 = inst_144852;var inst_144828 = inst_144851;var inst_144829 = inst_144853;var inst_144830 = (0);var state_144946__$1 = (function (){var statearr_145001 = state_144946;(statearr_145001[(13)] = inst_144830);
(statearr_145001[(15)] = inst_144829);
(statearr_145001[(16)] = inst_144827);
(statearr_145001[(17)] = inst_144828);
return statearr_145001;
})();var statearr_145002_145069 = state_144946__$1;(statearr_145002_145069[(2)] = null);
(statearr_145002_145069[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (11)))
{var inst_144827 = (state_144946[(16)]);var inst_144847 = (state_144946[(7)]);var inst_144847__$1 = cljs.core.seq.call(null,inst_144827);var state_144946__$1 = (function (){var statearr_145003 = state_144946;(statearr_145003[(7)] = inst_144847__$1);
return statearr_145003;
})();if(inst_144847__$1)
{var statearr_145004_145070 = state_144946__$1;(statearr_145004_145070[(1)] = (16));
} else
{var statearr_145005_145071 = state_144946__$1;(statearr_145005_145071[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (9)))
{var inst_144875 = (state_144946[(2)]);var state_144946__$1 = state_144946;var statearr_145006_145072 = state_144946__$1;(statearr_145006_145072[(2)] = inst_144875);
(statearr_145006_145072[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (5)))
{var inst_144825 = cljs.core.deref.call(null,cs);var inst_144826 = cljs.core.seq.call(null,inst_144825);var inst_144827 = inst_144826;var inst_144828 = null;var inst_144829 = (0);var inst_144830 = (0);var state_144946__$1 = (function (){var statearr_145007 = state_144946;(statearr_145007[(13)] = inst_144830);
(statearr_145007[(15)] = inst_144829);
(statearr_145007[(16)] = inst_144827);
(statearr_145007[(17)] = inst_144828);
return statearr_145007;
})();var statearr_145008_145073 = state_144946__$1;(statearr_145008_145073[(2)] = null);
(statearr_145008_145073[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (14)))
{var state_144946__$1 = state_144946;var statearr_145009_145074 = state_144946__$1;(statearr_145009_145074[(2)] = null);
(statearr_145009_145074[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (45)))
{var inst_144936 = (state_144946[(2)]);var state_144946__$1 = state_144946;var statearr_145010_145075 = state_144946__$1;(statearr_145010_145075[(2)] = inst_144936);
(statearr_145010_145075[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (26)))
{var inst_144878 = (state_144946[(29)]);var inst_144932 = (state_144946[(2)]);var inst_144933 = cljs.core.seq.call(null,inst_144878);var state_144946__$1 = (function (){var statearr_145011 = state_144946;(statearr_145011[(31)] = inst_144932);
return statearr_145011;
})();if(inst_144933)
{var statearr_145012_145076 = state_144946__$1;(statearr_145012_145076[(1)] = (42));
} else
{var statearr_145013_145077 = state_144946__$1;(statearr_145013_145077[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (16)))
{var inst_144847 = (state_144946[(7)]);var inst_144849 = cljs.core.chunked_seq_QMARK_.call(null,inst_144847);var state_144946__$1 = state_144946;if(inst_144849)
{var statearr_145014_145078 = state_144946__$1;(statearr_145014_145078[(1)] = (19));
} else
{var statearr_145015_145079 = state_144946__$1;(statearr_145015_145079[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (38)))
{var inst_144925 = (state_144946[(2)]);var state_144946__$1 = state_144946;var statearr_145016_145080 = state_144946__$1;(statearr_145016_145080[(2)] = inst_144925);
(statearr_145016_145080[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (30)))
{var state_144946__$1 = state_144946;var statearr_145017_145081 = state_144946__$1;(statearr_145017_145081[(2)] = null);
(statearr_145017_145081[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (10)))
{var inst_144830 = (state_144946[(13)]);var inst_144828 = (state_144946[(17)]);var inst_144836 = cljs.core._nth.call(null,inst_144828,inst_144830);var inst_144837 = cljs.core.nth.call(null,inst_144836,(0),null);var inst_144838 = cljs.core.nth.call(null,inst_144836,(1),null);var state_144946__$1 = (function (){var statearr_145018 = state_144946;(statearr_145018[(26)] = inst_144837);
return statearr_145018;
})();if(cljs.core.truth_(inst_144838))
{var statearr_145019_145082 = state_144946__$1;(statearr_145019_145082[(1)] = (13));
} else
{var statearr_145020_145083 = state_144946__$1;(statearr_145020_145083[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (18)))
{var inst_144871 = (state_144946[(2)]);var state_144946__$1 = state_144946;var statearr_145021_145084 = state_144946__$1;(statearr_145021_145084[(2)] = inst_144871);
(statearr_145021_145084[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (42)))
{var state_144946__$1 = state_144946;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_144946__$1,(45),dchan);
} else
{if((state_val_144947 === (37)))
{var inst_144905 = (state_144946[(25)]);var inst_144818 = (state_144946[(12)]);var inst_144914 = (state_144946[(23)]);var inst_144914__$1 = cljs.core.first.call(null,inst_144905);var inst_144915 = cljs.core.async.put_BANG_.call(null,inst_144914__$1,inst_144818,done);var state_144946__$1 = (function (){var statearr_145022 = state_144946;(statearr_145022[(23)] = inst_144914__$1);
return statearr_145022;
})();if(cljs.core.truth_(inst_144915))
{var statearr_145023_145085 = state_144946__$1;(statearr_145023_145085[(1)] = (39));
} else
{var statearr_145024_145086 = state_144946__$1;(statearr_145024_145086[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_144947 === (8)))
{var inst_144830 = (state_144946[(13)]);var inst_144829 = (state_144946[(15)]);var inst_144832 = (inst_144830 < inst_144829);var inst_144833 = inst_144832;var state_144946__$1 = state_144946;if(cljs.core.truth_(inst_144833))
{var statearr_145025_145087 = state_144946__$1;(statearr_145025_145087[(1)] = (10));
} else
{var statearr_145026_145088 = state_144946__$1;(statearr_145026_145088[(1)] = (11));
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
});})(c__5867__auto___145034,cs,m,dchan,dctr,done))
;return ((function (switch__5852__auto__,c__5867__auto___145034,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5853__auto__ = null;
var state_machine__5853__auto____0 = (function (){var statearr_145030 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_145030[(0)] = state_machine__5853__auto__);
(statearr_145030[(1)] = (1));
return statearr_145030;
});
var state_machine__5853__auto____1 = (function (state_144946){while(true){
var ret_value__5854__auto__ = (function (){try{while(true){
var result__5855__auto__ = switch__5852__auto__.call(null,state_144946);if(cljs.core.keyword_identical_QMARK_.call(null,result__5855__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5855__auto__;
}
break;
}
}catch (e145031){if((e145031 instanceof Object))
{var ex__5856__auto__ = e145031;var statearr_145032_145089 = state_144946;(statearr_145032_145089[(5)] = ex__5856__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_144946);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e145031;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__145090 = state_144946;
state_144946 = G__145090;
continue;
}
} else
{return ret_value__5854__auto__;
}
break;
}
});
state_machine__5853__auto__ = function(state_144946){
switch(arguments.length){
case 0:
return state_machine__5853__auto____0.call(this);
case 1:
return state_machine__5853__auto____1.call(this,state_144946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5853__auto____0;
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5853__auto____1;
return state_machine__5853__auto__;
})()
;})(switch__5852__auto__,c__5867__auto___145034,cs,m,dchan,dctr,done))
})();var state__5869__auto__ = (function (){var statearr_145033 = f__5868__auto__.call(null);(statearr_145033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5867__auto___145034);
return statearr_145033;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5869__auto__);
});})(c__5867__auto___145034,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj145092 = {};return obj145092;
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
;var m = (function (){if(typeof cljs.core.async.t145212 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t145212 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta145213){
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
this.meta145213 = meta145213;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t145212.cljs$lang$type = true;
cljs.core.async.t145212.cljs$lang$ctorStr = "cljs.core.async/t145212";
cljs.core.async.t145212.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t145212");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t145212.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t145212.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t145212.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t145212.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t145212.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t145212.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t145212.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t145212.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t145212.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_145214){var self__ = this;
var _145214__$1 = this;return self__.meta145213;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t145212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_145214,meta145213__$1){var self__ = this;
var _145214__$1 = this;return (new cljs.core.async.t145212(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta145213__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t145212 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t145212(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta145213){return (new cljs.core.async.t145212(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta145213));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t145212(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5867__auto___145331 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5867__auto___145331,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5868__auto__ = (function (){var switch__5852__auto__ = ((function (c__5867__auto___145331,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_145284){var state_val_145285 = (state_145284[(1)]);if((state_val_145285 === (7)))
{var inst_145228 = (state_145284[(7)]);var inst_145233 = cljs.core.apply.call(null,cljs.core.hash_map,inst_145228);var state_145284__$1 = state_145284;var statearr_145286_145332 = state_145284__$1;(statearr_145286_145332[(2)] = inst_145233);
(statearr_145286_145332[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145285 === (20)))
{var inst_145243 = (state_145284[(8)]);var state_145284__$1 = state_145284;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_145284__$1,(23),out,inst_145243);
} else
{if((state_val_145285 === (1)))
{var inst_145218 = (state_145284[(9)]);var inst_145218__$1 = calc_state.call(null);var inst_145219 = cljs.core.seq_QMARK_.call(null,inst_145218__$1);var state_145284__$1 = (function (){var statearr_145287 = state_145284;(statearr_145287[(9)] = inst_145218__$1);
return statearr_145287;
})();if(inst_145219)
{var statearr_145288_145333 = state_145284__$1;(statearr_145288_145333[(1)] = (2));
} else
{var statearr_145289_145334 = state_145284__$1;(statearr_145289_145334[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145285 === (24)))
{var inst_145236 = (state_145284[(10)]);var inst_145228 = inst_145236;var state_145284__$1 = (function (){var statearr_145290 = state_145284;(statearr_145290[(7)] = inst_145228);
return statearr_145290;
})();var statearr_145291_145335 = state_145284__$1;(statearr_145291_145335[(2)] = null);
(statearr_145291_145335[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145285 === (4)))
{var inst_145218 = (state_145284[(9)]);var inst_145224 = (state_145284[(2)]);var inst_145225 = cljs.core.get.call(null,inst_145224,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_145226 = cljs.core.get.call(null,inst_145224,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_145227 = cljs.core.get.call(null,inst_145224,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_145228 = inst_145218;var state_145284__$1 = (function (){var statearr_145292 = state_145284;(statearr_145292[(11)] = inst_145226);
(statearr_145292[(7)] = inst_145228);
(statearr_145292[(12)] = inst_145227);
(statearr_145292[(13)] = inst_145225);
return statearr_145292;
})();var statearr_145293_145336 = state_145284__$1;(statearr_145293_145336[(2)] = null);
(statearr_145293_145336[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145285 === (15)))
{var state_145284__$1 = state_145284;var statearr_145294_145337 = state_145284__$1;(statearr_145294_145337[(2)] = null);
(statearr_145294_145337[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145285 === (21)))
{var inst_145236 = (state_145284[(10)]);var inst_145228 = inst_145236;var state_145284__$1 = (function (){var statearr_145295 = state_145284;(statearr_145295[(7)] = inst_145228);
return statearr_145295;
})();var statearr_145296_145338 = state_145284__$1;(statearr_145296_145338[(2)] = null);
(statearr_145296_145338[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145285 === (13)))
{var inst_145280 = (state_145284[(2)]);var state_145284__$1 = state_145284;var statearr_145297_145339 = state_145284__$1;(statearr_145297_145339[(2)] = inst_145280);
(statearr_145297_145339[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145285 === (22)))
{var inst_145278 = (state_145284[(2)]);var state_145284__$1 = state_145284;var statearr_145298_145340 = state_145284__$1;(statearr_145298_145340[(2)] = inst_145278);
(statearr_145298_145340[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145285 === (6)))
{var inst_145282 = (state_145284[(2)]);var state_145284__$1 = state_145284;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_145284__$1,inst_145282);
} else
{if((state_val_145285 === (25)))
{var state_145284__$1 = state_145284;var statearr_145299_145341 = state_145284__$1;(statearr_145299_145341[(2)] = null);
(statearr_145299_145341[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145285 === (17)))
{var inst_145258 = (state_145284[(14)]);var state_145284__$1 = state_145284;var statearr_145300_145342 = state_145284__$1;(statearr_145300_145342[(2)] = inst_145258);
(statearr_145300_145342[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145285 === (3)))
{var inst_145218 = (state_145284[(9)]);var state_145284__$1 = state_145284;var statearr_145301_145343 = state_145284__$1;(statearr_145301_145343[(2)] = inst_145218);
(statearr_145301_145343[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145285 === (12)))
{var inst_145244 = (state_145284[(15)]);var inst_145258 = (state_145284[(14)]);var inst_145239 = (state_145284[(16)]);var inst_145258__$1 = inst_145239.call(null,inst_145244);var state_145284__$1 = (function (){var statearr_145302 = state_145284;(statearr_145302[(14)] = inst_145258__$1);
return statearr_145302;
})();if(cljs.core.truth_(inst_145258__$1))
{var statearr_145303_145344 = state_145284__$1;(statearr_145303_145344[(1)] = (17));
} else
{var statearr_145304_145345 = state_145284__$1;(statearr_145304_145345[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145285 === (2)))
{var inst_145218 = (state_145284[(9)]);var inst_145221 = cljs.core.apply.call(null,cljs.core.hash_map,inst_145218);var state_145284__$1 = state_145284;var statearr_145305_145346 = state_145284__$1;(statearr_145305_145346[(2)] = inst_145221);
(statearr_145305_145346[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145285 === (23)))
{var inst_145269 = (state_145284[(2)]);var state_145284__$1 = state_145284;if(cljs.core.truth_(inst_145269))
{var statearr_145306_145347 = state_145284__$1;(statearr_145306_145347[(1)] = (24));
} else
{var statearr_145307_145348 = state_145284__$1;(statearr_145307_145348[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145285 === (19)))
{var inst_145266 = (state_145284[(2)]);var state_145284__$1 = state_145284;if(cljs.core.truth_(inst_145266))
{var statearr_145308_145349 = state_145284__$1;(statearr_145308_145349[(1)] = (20));
} else
{var statearr_145309_145350 = state_145284__$1;(statearr_145309_145350[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145285 === (11)))
{var inst_145243 = (state_145284[(8)]);var inst_145249 = (inst_145243 == null);var state_145284__$1 = state_145284;if(cljs.core.truth_(inst_145249))
{var statearr_145310_145351 = state_145284__$1;(statearr_145310_145351[(1)] = (14));
} else
{var statearr_145311_145352 = state_145284__$1;(statearr_145311_145352[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145285 === (9)))
{var inst_145236 = (state_145284[(10)]);var inst_145236__$1 = (state_145284[(2)]);var inst_145237 = cljs.core.get.call(null,inst_145236__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_145238 = cljs.core.get.call(null,inst_145236__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_145239 = cljs.core.get.call(null,inst_145236__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_145284__$1 = (function (){var statearr_145312 = state_145284;(statearr_145312[(10)] = inst_145236__$1);
(statearr_145312[(17)] = inst_145238);
(statearr_145312[(16)] = inst_145239);
return statearr_145312;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_145284__$1,(10),inst_145237);
} else
{if((state_val_145285 === (5)))
{var inst_145228 = (state_145284[(7)]);var inst_145231 = cljs.core.seq_QMARK_.call(null,inst_145228);var state_145284__$1 = state_145284;if(inst_145231)
{var statearr_145313_145353 = state_145284__$1;(statearr_145313_145353[(1)] = (7));
} else
{var statearr_145314_145354 = state_145284__$1;(statearr_145314_145354[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145285 === (14)))
{var inst_145244 = (state_145284[(15)]);var inst_145251 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_145244);var state_145284__$1 = state_145284;var statearr_145315_145355 = state_145284__$1;(statearr_145315_145355[(2)] = inst_145251);
(statearr_145315_145355[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145285 === (26)))
{var inst_145274 = (state_145284[(2)]);var state_145284__$1 = state_145284;var statearr_145316_145356 = state_145284__$1;(statearr_145316_145356[(2)] = inst_145274);
(statearr_145316_145356[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145285 === (16)))
{var inst_145254 = (state_145284[(2)]);var inst_145255 = calc_state.call(null);var inst_145228 = inst_145255;var state_145284__$1 = (function (){var statearr_145317 = state_145284;(statearr_145317[(7)] = inst_145228);
(statearr_145317[(18)] = inst_145254);
return statearr_145317;
})();var statearr_145318_145357 = state_145284__$1;(statearr_145318_145357[(2)] = null);
(statearr_145318_145357[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145285 === (10)))
{var inst_145244 = (state_145284[(15)]);var inst_145243 = (state_145284[(8)]);var inst_145242 = (state_145284[(2)]);var inst_145243__$1 = cljs.core.nth.call(null,inst_145242,(0),null);var inst_145244__$1 = cljs.core.nth.call(null,inst_145242,(1),null);var inst_145245 = (inst_145243__$1 == null);var inst_145246 = cljs.core._EQ_.call(null,inst_145244__$1,change);var inst_145247 = (inst_145245) || (inst_145246);var state_145284__$1 = (function (){var statearr_145319 = state_145284;(statearr_145319[(15)] = inst_145244__$1);
(statearr_145319[(8)] = inst_145243__$1);
return statearr_145319;
})();if(cljs.core.truth_(inst_145247))
{var statearr_145320_145358 = state_145284__$1;(statearr_145320_145358[(1)] = (11));
} else
{var statearr_145321_145359 = state_145284__$1;(statearr_145321_145359[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145285 === (18)))
{var inst_145244 = (state_145284[(15)]);var inst_145238 = (state_145284[(17)]);var inst_145239 = (state_145284[(16)]);var inst_145261 = cljs.core.empty_QMARK_.call(null,inst_145239);var inst_145262 = inst_145238.call(null,inst_145244);var inst_145263 = cljs.core.not.call(null,inst_145262);var inst_145264 = (inst_145261) && (inst_145263);var state_145284__$1 = state_145284;var statearr_145322_145360 = state_145284__$1;(statearr_145322_145360[(2)] = inst_145264);
(statearr_145322_145360[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145285 === (8)))
{var inst_145228 = (state_145284[(7)]);var state_145284__$1 = state_145284;var statearr_145323_145361 = state_145284__$1;(statearr_145323_145361[(2)] = inst_145228);
(statearr_145323_145361[(1)] = (9));
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
});})(c__5867__auto___145331,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5852__auto__,c__5867__auto___145331,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5853__auto__ = null;
var state_machine__5853__auto____0 = (function (){var statearr_145327 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_145327[(0)] = state_machine__5853__auto__);
(statearr_145327[(1)] = (1));
return statearr_145327;
});
var state_machine__5853__auto____1 = (function (state_145284){while(true){
var ret_value__5854__auto__ = (function (){try{while(true){
var result__5855__auto__ = switch__5852__auto__.call(null,state_145284);if(cljs.core.keyword_identical_QMARK_.call(null,result__5855__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5855__auto__;
}
break;
}
}catch (e145328){if((e145328 instanceof Object))
{var ex__5856__auto__ = e145328;var statearr_145329_145362 = state_145284;(statearr_145329_145362[(5)] = ex__5856__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_145284);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e145328;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__145363 = state_145284;
state_145284 = G__145363;
continue;
}
} else
{return ret_value__5854__auto__;
}
break;
}
});
state_machine__5853__auto__ = function(state_145284){
switch(arguments.length){
case 0:
return state_machine__5853__auto____0.call(this);
case 1:
return state_machine__5853__auto____1.call(this,state_145284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5853__auto____0;
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5853__auto____1;
return state_machine__5853__auto__;
})()
;})(switch__5852__auto__,c__5867__auto___145331,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5869__auto__ = (function (){var statearr_145330 = f__5868__auto__.call(null);(statearr_145330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5867__auto___145331);
return statearr_145330;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5869__auto__);
});})(c__5867__auto___145331,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj145365 = {};return obj145365;
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
return (function (p1__145366_SHARP_){if(cljs.core.truth_(p1__145366_SHARP_.call(null,topic)))
{return p1__145366_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__145366_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t145489 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t145489 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta145490){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta145490 = meta145490;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t145489.cljs$lang$type = true;
cljs.core.async.t145489.cljs$lang$ctorStr = "cljs.core.async/t145489";
cljs.core.async.t145489.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t145489");
});})(mults,ensure_mult))
;
cljs.core.async.t145489.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t145489.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t145489.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t145489.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t145489.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t145489.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t145489.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t145489.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_145491){var self__ = this;
var _145491__$1 = this;return self__.meta145490;
});})(mults,ensure_mult))
;
cljs.core.async.t145489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_145491,meta145490__$1){var self__ = this;
var _145491__$1 = this;return (new cljs.core.async.t145489(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta145490__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t145489 = ((function (mults,ensure_mult){
return (function __GT_t145489(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta145490){return (new cljs.core.async.t145489(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta145490));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t145489(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5867__auto___145611 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5867__auto___145611,mults,ensure_mult,p){
return (function (){var f__5868__auto__ = (function (){var switch__5852__auto__ = ((function (c__5867__auto___145611,mults,ensure_mult,p){
return (function (state_145563){var state_val_145564 = (state_145563[(1)]);if((state_val_145564 === (7)))
{var inst_145559 = (state_145563[(2)]);var state_145563__$1 = state_145563;var statearr_145565_145612 = state_145563__$1;(statearr_145565_145612[(2)] = inst_145559);
(statearr_145565_145612[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145564 === (20)))
{var state_145563__$1 = state_145563;var statearr_145566_145613 = state_145563__$1;(statearr_145566_145613[(2)] = null);
(statearr_145566_145613[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145564 === (1)))
{var state_145563__$1 = state_145563;var statearr_145567_145614 = state_145563__$1;(statearr_145567_145614[(2)] = null);
(statearr_145567_145614[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145564 === (24)))
{var inst_145542 = (state_145563[(7)]);var inst_145551 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_145542);var state_145563__$1 = state_145563;var statearr_145568_145615 = state_145563__$1;(statearr_145568_145615[(2)] = inst_145551);
(statearr_145568_145615[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145564 === (4)))
{var inst_145494 = (state_145563[(8)]);var inst_145494__$1 = (state_145563[(2)]);var inst_145495 = (inst_145494__$1 == null);var state_145563__$1 = (function (){var statearr_145569 = state_145563;(statearr_145569[(8)] = inst_145494__$1);
return statearr_145569;
})();if(cljs.core.truth_(inst_145495))
{var statearr_145570_145616 = state_145563__$1;(statearr_145570_145616[(1)] = (5));
} else
{var statearr_145571_145617 = state_145563__$1;(statearr_145571_145617[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145564 === (15)))
{var inst_145536 = (state_145563[(2)]);var state_145563__$1 = state_145563;var statearr_145572_145618 = state_145563__$1;(statearr_145572_145618[(2)] = inst_145536);
(statearr_145572_145618[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145564 === (21)))
{var inst_145556 = (state_145563[(2)]);var state_145563__$1 = (function (){var statearr_145573 = state_145563;(statearr_145573[(9)] = inst_145556);
return statearr_145573;
})();var statearr_145574_145619 = state_145563__$1;(statearr_145574_145619[(2)] = null);
(statearr_145574_145619[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145564 === (13)))
{var inst_145518 = (state_145563[(10)]);var inst_145520 = cljs.core.chunked_seq_QMARK_.call(null,inst_145518);var state_145563__$1 = state_145563;if(inst_145520)
{var statearr_145575_145620 = state_145563__$1;(statearr_145575_145620[(1)] = (16));
} else
{var statearr_145576_145621 = state_145563__$1;(statearr_145576_145621[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145564 === (22)))
{var inst_145548 = (state_145563[(2)]);var state_145563__$1 = state_145563;if(cljs.core.truth_(inst_145548))
{var statearr_145577_145622 = state_145563__$1;(statearr_145577_145622[(1)] = (23));
} else
{var statearr_145578_145623 = state_145563__$1;(statearr_145578_145623[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145564 === (6)))
{var inst_145544 = (state_145563[(11)]);var inst_145494 = (state_145563[(8)]);var inst_145542 = (state_145563[(7)]);var inst_145542__$1 = topic_fn.call(null,inst_145494);var inst_145543 = cljs.core.deref.call(null,mults);var inst_145544__$1 = cljs.core.get.call(null,inst_145543,inst_145542__$1);var state_145563__$1 = (function (){var statearr_145579 = state_145563;(statearr_145579[(11)] = inst_145544__$1);
(statearr_145579[(7)] = inst_145542__$1);
return statearr_145579;
})();if(cljs.core.truth_(inst_145544__$1))
{var statearr_145580_145624 = state_145563__$1;(statearr_145580_145624[(1)] = (19));
} else
{var statearr_145581_145625 = state_145563__$1;(statearr_145581_145625[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145564 === (25)))
{var inst_145553 = (state_145563[(2)]);var state_145563__$1 = state_145563;var statearr_145582_145626 = state_145563__$1;(statearr_145582_145626[(2)] = inst_145553);
(statearr_145582_145626[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145564 === (17)))
{var inst_145518 = (state_145563[(10)]);var inst_145527 = cljs.core.first.call(null,inst_145518);var inst_145528 = cljs.core.async.muxch_STAR_.call(null,inst_145527);var inst_145529 = cljs.core.async.close_BANG_.call(null,inst_145528);var inst_145530 = cljs.core.next.call(null,inst_145518);var inst_145504 = inst_145530;var inst_145505 = null;var inst_145506 = (0);var inst_145507 = (0);var state_145563__$1 = (function (){var statearr_145583 = state_145563;(statearr_145583[(12)] = inst_145505);
(statearr_145583[(13)] = inst_145507);
(statearr_145583[(14)] = inst_145504);
(statearr_145583[(15)] = inst_145529);
(statearr_145583[(16)] = inst_145506);
return statearr_145583;
})();var statearr_145584_145627 = state_145563__$1;(statearr_145584_145627[(2)] = null);
(statearr_145584_145627[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145564 === (3)))
{var inst_145561 = (state_145563[(2)]);var state_145563__$1 = state_145563;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_145563__$1,inst_145561);
} else
{if((state_val_145564 === (12)))
{var inst_145538 = (state_145563[(2)]);var state_145563__$1 = state_145563;var statearr_145585_145628 = state_145563__$1;(statearr_145585_145628[(2)] = inst_145538);
(statearr_145585_145628[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145564 === (2)))
{var state_145563__$1 = state_145563;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_145563__$1,(4),ch);
} else
{if((state_val_145564 === (23)))
{var state_145563__$1 = state_145563;var statearr_145586_145629 = state_145563__$1;(statearr_145586_145629[(2)] = null);
(statearr_145586_145629[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145564 === (19)))
{var inst_145544 = (state_145563[(11)]);var inst_145494 = (state_145563[(8)]);var inst_145546 = cljs.core.async.muxch_STAR_.call(null,inst_145544);var state_145563__$1 = state_145563;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_145563__$1,(22),inst_145546,inst_145494);
} else
{if((state_val_145564 === (11)))
{var inst_145504 = (state_145563[(14)]);var inst_145518 = (state_145563[(10)]);var inst_145518__$1 = cljs.core.seq.call(null,inst_145504);var state_145563__$1 = (function (){var statearr_145587 = state_145563;(statearr_145587[(10)] = inst_145518__$1);
return statearr_145587;
})();if(inst_145518__$1)
{var statearr_145588_145630 = state_145563__$1;(statearr_145588_145630[(1)] = (13));
} else
{var statearr_145589_145631 = state_145563__$1;(statearr_145589_145631[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145564 === (9)))
{var inst_145540 = (state_145563[(2)]);var state_145563__$1 = state_145563;var statearr_145590_145632 = state_145563__$1;(statearr_145590_145632[(2)] = inst_145540);
(statearr_145590_145632[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145564 === (5)))
{var inst_145501 = cljs.core.deref.call(null,mults);var inst_145502 = cljs.core.vals.call(null,inst_145501);var inst_145503 = cljs.core.seq.call(null,inst_145502);var inst_145504 = inst_145503;var inst_145505 = null;var inst_145506 = (0);var inst_145507 = (0);var state_145563__$1 = (function (){var statearr_145591 = state_145563;(statearr_145591[(12)] = inst_145505);
(statearr_145591[(13)] = inst_145507);
(statearr_145591[(14)] = inst_145504);
(statearr_145591[(16)] = inst_145506);
return statearr_145591;
})();var statearr_145592_145633 = state_145563__$1;(statearr_145592_145633[(2)] = null);
(statearr_145592_145633[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145564 === (14)))
{var state_145563__$1 = state_145563;var statearr_145596_145634 = state_145563__$1;(statearr_145596_145634[(2)] = null);
(statearr_145596_145634[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145564 === (16)))
{var inst_145518 = (state_145563[(10)]);var inst_145522 = cljs.core.chunk_first.call(null,inst_145518);var inst_145523 = cljs.core.chunk_rest.call(null,inst_145518);var inst_145524 = cljs.core.count.call(null,inst_145522);var inst_145504 = inst_145523;var inst_145505 = inst_145522;var inst_145506 = inst_145524;var inst_145507 = (0);var state_145563__$1 = (function (){var statearr_145597 = state_145563;(statearr_145597[(12)] = inst_145505);
(statearr_145597[(13)] = inst_145507);
(statearr_145597[(14)] = inst_145504);
(statearr_145597[(16)] = inst_145506);
return statearr_145597;
})();var statearr_145598_145635 = state_145563__$1;(statearr_145598_145635[(2)] = null);
(statearr_145598_145635[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145564 === (10)))
{var inst_145505 = (state_145563[(12)]);var inst_145507 = (state_145563[(13)]);var inst_145504 = (state_145563[(14)]);var inst_145506 = (state_145563[(16)]);var inst_145512 = cljs.core._nth.call(null,inst_145505,inst_145507);var inst_145513 = cljs.core.async.muxch_STAR_.call(null,inst_145512);var inst_145514 = cljs.core.async.close_BANG_.call(null,inst_145513);var inst_145515 = (inst_145507 + (1));var tmp145593 = inst_145505;var tmp145594 = inst_145504;var tmp145595 = inst_145506;var inst_145504__$1 = tmp145594;var inst_145505__$1 = tmp145593;var inst_145506__$1 = tmp145595;var inst_145507__$1 = inst_145515;var state_145563__$1 = (function (){var statearr_145599 = state_145563;(statearr_145599[(12)] = inst_145505__$1);
(statearr_145599[(13)] = inst_145507__$1);
(statearr_145599[(14)] = inst_145504__$1);
(statearr_145599[(16)] = inst_145506__$1);
(statearr_145599[(17)] = inst_145514);
return statearr_145599;
})();var statearr_145600_145636 = state_145563__$1;(statearr_145600_145636[(2)] = null);
(statearr_145600_145636[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145564 === (18)))
{var inst_145533 = (state_145563[(2)]);var state_145563__$1 = state_145563;var statearr_145601_145637 = state_145563__$1;(statearr_145601_145637[(2)] = inst_145533);
(statearr_145601_145637[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145564 === (8)))
{var inst_145507 = (state_145563[(13)]);var inst_145506 = (state_145563[(16)]);var inst_145509 = (inst_145507 < inst_145506);var inst_145510 = inst_145509;var state_145563__$1 = state_145563;if(cljs.core.truth_(inst_145510))
{var statearr_145602_145638 = state_145563__$1;(statearr_145602_145638[(1)] = (10));
} else
{var statearr_145603_145639 = state_145563__$1;(statearr_145603_145639[(1)] = (11));
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
});})(c__5867__auto___145611,mults,ensure_mult,p))
;return ((function (switch__5852__auto__,c__5867__auto___145611,mults,ensure_mult,p){
return (function() {
var state_machine__5853__auto__ = null;
var state_machine__5853__auto____0 = (function (){var statearr_145607 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_145607[(0)] = state_machine__5853__auto__);
(statearr_145607[(1)] = (1));
return statearr_145607;
});
var state_machine__5853__auto____1 = (function (state_145563){while(true){
var ret_value__5854__auto__ = (function (){try{while(true){
var result__5855__auto__ = switch__5852__auto__.call(null,state_145563);if(cljs.core.keyword_identical_QMARK_.call(null,result__5855__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5855__auto__;
}
break;
}
}catch (e145608){if((e145608 instanceof Object))
{var ex__5856__auto__ = e145608;var statearr_145609_145640 = state_145563;(statearr_145609_145640[(5)] = ex__5856__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_145563);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e145608;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__145641 = state_145563;
state_145563 = G__145641;
continue;
}
} else
{return ret_value__5854__auto__;
}
break;
}
});
state_machine__5853__auto__ = function(state_145563){
switch(arguments.length){
case 0:
return state_machine__5853__auto____0.call(this);
case 1:
return state_machine__5853__auto____1.call(this,state_145563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5853__auto____0;
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5853__auto____1;
return state_machine__5853__auto__;
})()
;})(switch__5852__auto__,c__5867__auto___145611,mults,ensure_mult,p))
})();var state__5869__auto__ = (function (){var statearr_145610 = f__5868__auto__.call(null);(statearr_145610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5867__auto___145611);
return statearr_145610;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5869__auto__);
});})(c__5867__auto___145611,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5867__auto___145778 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5867__auto___145778,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5868__auto__ = (function (){var switch__5852__auto__ = ((function (c__5867__auto___145778,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_145748){var state_val_145749 = (state_145748[(1)]);if((state_val_145749 === (7)))
{var state_145748__$1 = state_145748;var statearr_145750_145779 = state_145748__$1;(statearr_145750_145779[(2)] = null);
(statearr_145750_145779[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145749 === (1)))
{var state_145748__$1 = state_145748;var statearr_145751_145780 = state_145748__$1;(statearr_145751_145780[(2)] = null);
(statearr_145751_145780[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145749 === (4)))
{var inst_145712 = (state_145748[(7)]);var inst_145714 = (inst_145712 < cnt);var state_145748__$1 = state_145748;if(cljs.core.truth_(inst_145714))
{var statearr_145752_145781 = state_145748__$1;(statearr_145752_145781[(1)] = (6));
} else
{var statearr_145753_145782 = state_145748__$1;(statearr_145753_145782[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145749 === (15)))
{var inst_145744 = (state_145748[(2)]);var state_145748__$1 = state_145748;var statearr_145754_145783 = state_145748__$1;(statearr_145754_145783[(2)] = inst_145744);
(statearr_145754_145783[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145749 === (13)))
{var inst_145737 = cljs.core.async.close_BANG_.call(null,out);var state_145748__$1 = state_145748;var statearr_145755_145784 = state_145748__$1;(statearr_145755_145784[(2)] = inst_145737);
(statearr_145755_145784[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145749 === (6)))
{var state_145748__$1 = state_145748;var statearr_145756_145785 = state_145748__$1;(statearr_145756_145785[(2)] = null);
(statearr_145756_145785[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145749 === (3)))
{var inst_145746 = (state_145748[(2)]);var state_145748__$1 = state_145748;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_145748__$1,inst_145746);
} else
{if((state_val_145749 === (12)))
{var inst_145734 = (state_145748[(8)]);var inst_145734__$1 = (state_145748[(2)]);var inst_145735 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_145734__$1);var state_145748__$1 = (function (){var statearr_145757 = state_145748;(statearr_145757[(8)] = inst_145734__$1);
return statearr_145757;
})();if(cljs.core.truth_(inst_145735))
{var statearr_145758_145786 = state_145748__$1;(statearr_145758_145786[(1)] = (13));
} else
{var statearr_145759_145787 = state_145748__$1;(statearr_145759_145787[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145749 === (2)))
{var inst_145711 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_145712 = (0);var state_145748__$1 = (function (){var statearr_145760 = state_145748;(statearr_145760[(7)] = inst_145712);
(statearr_145760[(9)] = inst_145711);
return statearr_145760;
})();var statearr_145761_145788 = state_145748__$1;(statearr_145761_145788[(2)] = null);
(statearr_145761_145788[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145749 === (11)))
{var inst_145712 = (state_145748[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_145748,(10),Object,null,(9));var inst_145721 = chs__$1.call(null,inst_145712);var inst_145722 = done.call(null,inst_145712);var inst_145723 = cljs.core.async.take_BANG_.call(null,inst_145721,inst_145722);var state_145748__$1 = state_145748;var statearr_145762_145789 = state_145748__$1;(statearr_145762_145789[(2)] = inst_145723);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_145748__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145749 === (9)))
{var inst_145712 = (state_145748[(7)]);var inst_145725 = (state_145748[(2)]);var inst_145726 = (inst_145712 + (1));var inst_145712__$1 = inst_145726;var state_145748__$1 = (function (){var statearr_145763 = state_145748;(statearr_145763[(7)] = inst_145712__$1);
(statearr_145763[(10)] = inst_145725);
return statearr_145763;
})();var statearr_145764_145790 = state_145748__$1;(statearr_145764_145790[(2)] = null);
(statearr_145764_145790[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145749 === (5)))
{var inst_145732 = (state_145748[(2)]);var state_145748__$1 = (function (){var statearr_145765 = state_145748;(statearr_145765[(11)] = inst_145732);
return statearr_145765;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_145748__$1,(12),dchan);
} else
{if((state_val_145749 === (14)))
{var inst_145734 = (state_145748[(8)]);var inst_145739 = cljs.core.apply.call(null,f,inst_145734);var state_145748__$1 = state_145748;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_145748__$1,(16),out,inst_145739);
} else
{if((state_val_145749 === (16)))
{var inst_145741 = (state_145748[(2)]);var state_145748__$1 = (function (){var statearr_145766 = state_145748;(statearr_145766[(12)] = inst_145741);
return statearr_145766;
})();var statearr_145767_145791 = state_145748__$1;(statearr_145767_145791[(2)] = null);
(statearr_145767_145791[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145749 === (10)))
{var inst_145716 = (state_145748[(2)]);var inst_145717 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_145748__$1 = (function (){var statearr_145768 = state_145748;(statearr_145768[(13)] = inst_145716);
return statearr_145768;
})();var statearr_145769_145792 = state_145748__$1;(statearr_145769_145792[(2)] = inst_145717);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_145748__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145749 === (8)))
{var inst_145730 = (state_145748[(2)]);var state_145748__$1 = state_145748;var statearr_145770_145793 = state_145748__$1;(statearr_145770_145793[(2)] = inst_145730);
(statearr_145770_145793[(1)] = (5));
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
});})(c__5867__auto___145778,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5852__auto__,c__5867__auto___145778,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5853__auto__ = null;
var state_machine__5853__auto____0 = (function (){var statearr_145774 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_145774[(0)] = state_machine__5853__auto__);
(statearr_145774[(1)] = (1));
return statearr_145774;
});
var state_machine__5853__auto____1 = (function (state_145748){while(true){
var ret_value__5854__auto__ = (function (){try{while(true){
var result__5855__auto__ = switch__5852__auto__.call(null,state_145748);if(cljs.core.keyword_identical_QMARK_.call(null,result__5855__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5855__auto__;
}
break;
}
}catch (e145775){if((e145775 instanceof Object))
{var ex__5856__auto__ = e145775;var statearr_145776_145794 = state_145748;(statearr_145776_145794[(5)] = ex__5856__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_145748);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e145775;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__145795 = state_145748;
state_145748 = G__145795;
continue;
}
} else
{return ret_value__5854__auto__;
}
break;
}
});
state_machine__5853__auto__ = function(state_145748){
switch(arguments.length){
case 0:
return state_machine__5853__auto____0.call(this);
case 1:
return state_machine__5853__auto____1.call(this,state_145748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5853__auto____0;
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5853__auto____1;
return state_machine__5853__auto__;
})()
;})(switch__5852__auto__,c__5867__auto___145778,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5869__auto__ = (function (){var statearr_145777 = f__5868__auto__.call(null);(statearr_145777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5867__auto___145778);
return statearr_145777;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5869__auto__);
});})(c__5867__auto___145778,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5867__auto___145903 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5867__auto___145903,out){
return (function (){var f__5868__auto__ = (function (){var switch__5852__auto__ = ((function (c__5867__auto___145903,out){
return (function (state_145879){var state_val_145880 = (state_145879[(1)]);if((state_val_145880 === (7)))
{var inst_145858 = (state_145879[(7)]);var inst_145859 = (state_145879[(8)]);var inst_145858__$1 = (state_145879[(2)]);var inst_145859__$1 = cljs.core.nth.call(null,inst_145858__$1,(0),null);var inst_145860 = cljs.core.nth.call(null,inst_145858__$1,(1),null);var inst_145861 = (inst_145859__$1 == null);var state_145879__$1 = (function (){var statearr_145881 = state_145879;(statearr_145881[(7)] = inst_145858__$1);
(statearr_145881[(8)] = inst_145859__$1);
(statearr_145881[(9)] = inst_145860);
return statearr_145881;
})();if(cljs.core.truth_(inst_145861))
{var statearr_145882_145904 = state_145879__$1;(statearr_145882_145904[(1)] = (8));
} else
{var statearr_145883_145905 = state_145879__$1;(statearr_145883_145905[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145880 === (1)))
{var inst_145850 = cljs.core.vec.call(null,chs);var inst_145851 = inst_145850;var state_145879__$1 = (function (){var statearr_145884 = state_145879;(statearr_145884[(10)] = inst_145851);
return statearr_145884;
})();var statearr_145885_145906 = state_145879__$1;(statearr_145885_145906[(2)] = null);
(statearr_145885_145906[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145880 === (4)))
{var inst_145851 = (state_145879[(10)]);var state_145879__$1 = state_145879;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_145879__$1,(7),inst_145851);
} else
{if((state_val_145880 === (6)))
{var inst_145875 = (state_145879[(2)]);var state_145879__$1 = state_145879;var statearr_145886_145907 = state_145879__$1;(statearr_145886_145907[(2)] = inst_145875);
(statearr_145886_145907[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145880 === (3)))
{var inst_145877 = (state_145879[(2)]);var state_145879__$1 = state_145879;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_145879__$1,inst_145877);
} else
{if((state_val_145880 === (2)))
{var inst_145851 = (state_145879[(10)]);var inst_145853 = cljs.core.count.call(null,inst_145851);var inst_145854 = (inst_145853 > (0));var state_145879__$1 = state_145879;if(cljs.core.truth_(inst_145854))
{var statearr_145888_145908 = state_145879__$1;(statearr_145888_145908[(1)] = (4));
} else
{var statearr_145889_145909 = state_145879__$1;(statearr_145889_145909[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145880 === (11)))
{var inst_145851 = (state_145879[(10)]);var inst_145868 = (state_145879[(2)]);var tmp145887 = inst_145851;var inst_145851__$1 = tmp145887;var state_145879__$1 = (function (){var statearr_145890 = state_145879;(statearr_145890[(11)] = inst_145868);
(statearr_145890[(10)] = inst_145851__$1);
return statearr_145890;
})();var statearr_145891_145910 = state_145879__$1;(statearr_145891_145910[(2)] = null);
(statearr_145891_145910[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145880 === (9)))
{var inst_145859 = (state_145879[(8)]);var state_145879__$1 = state_145879;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_145879__$1,(11),out,inst_145859);
} else
{if((state_val_145880 === (5)))
{var inst_145873 = cljs.core.async.close_BANG_.call(null,out);var state_145879__$1 = state_145879;var statearr_145892_145911 = state_145879__$1;(statearr_145892_145911[(2)] = inst_145873);
(statearr_145892_145911[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145880 === (10)))
{var inst_145871 = (state_145879[(2)]);var state_145879__$1 = state_145879;var statearr_145893_145912 = state_145879__$1;(statearr_145893_145912[(2)] = inst_145871);
(statearr_145893_145912[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145880 === (8)))
{var inst_145858 = (state_145879[(7)]);var inst_145859 = (state_145879[(8)]);var inst_145860 = (state_145879[(9)]);var inst_145851 = (state_145879[(10)]);var inst_145863 = (function (){var c = inst_145860;var v = inst_145859;var vec__145856 = inst_145858;var cs = inst_145851;return ((function (c,v,vec__145856,cs,inst_145858,inst_145859,inst_145860,inst_145851,state_val_145880,c__5867__auto___145903,out){
return (function (p1__145796_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__145796_SHARP_);
});
;})(c,v,vec__145856,cs,inst_145858,inst_145859,inst_145860,inst_145851,state_val_145880,c__5867__auto___145903,out))
})();var inst_145864 = cljs.core.filterv.call(null,inst_145863,inst_145851);var inst_145851__$1 = inst_145864;var state_145879__$1 = (function (){var statearr_145894 = state_145879;(statearr_145894[(10)] = inst_145851__$1);
return statearr_145894;
})();var statearr_145895_145913 = state_145879__$1;(statearr_145895_145913[(2)] = null);
(statearr_145895_145913[(1)] = (2));
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
});})(c__5867__auto___145903,out))
;return ((function (switch__5852__auto__,c__5867__auto___145903,out){
return (function() {
var state_machine__5853__auto__ = null;
var state_machine__5853__auto____0 = (function (){var statearr_145899 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_145899[(0)] = state_machine__5853__auto__);
(statearr_145899[(1)] = (1));
return statearr_145899;
});
var state_machine__5853__auto____1 = (function (state_145879){while(true){
var ret_value__5854__auto__ = (function (){try{while(true){
var result__5855__auto__ = switch__5852__auto__.call(null,state_145879);if(cljs.core.keyword_identical_QMARK_.call(null,result__5855__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5855__auto__;
}
break;
}
}catch (e145900){if((e145900 instanceof Object))
{var ex__5856__auto__ = e145900;var statearr_145901_145914 = state_145879;(statearr_145901_145914[(5)] = ex__5856__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_145879);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e145900;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__145915 = state_145879;
state_145879 = G__145915;
continue;
}
} else
{return ret_value__5854__auto__;
}
break;
}
});
state_machine__5853__auto__ = function(state_145879){
switch(arguments.length){
case 0:
return state_machine__5853__auto____0.call(this);
case 1:
return state_machine__5853__auto____1.call(this,state_145879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5853__auto____0;
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5853__auto____1;
return state_machine__5853__auto__;
})()
;})(switch__5852__auto__,c__5867__auto___145903,out))
})();var state__5869__auto__ = (function (){var statearr_145902 = f__5868__auto__.call(null);(statearr_145902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5867__auto___145903);
return statearr_145902;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5869__auto__);
});})(c__5867__auto___145903,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5867__auto___146008 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5867__auto___146008,out){
return (function (){var f__5868__auto__ = (function (){var switch__5852__auto__ = ((function (c__5867__auto___146008,out){
return (function (state_145985){var state_val_145986 = (state_145985[(1)]);if((state_val_145986 === (7)))
{var inst_145967 = (state_145985[(7)]);var inst_145967__$1 = (state_145985[(2)]);var inst_145968 = (inst_145967__$1 == null);var inst_145969 = cljs.core.not.call(null,inst_145968);var state_145985__$1 = (function (){var statearr_145987 = state_145985;(statearr_145987[(7)] = inst_145967__$1);
return statearr_145987;
})();if(inst_145969)
{var statearr_145988_146009 = state_145985__$1;(statearr_145988_146009[(1)] = (8));
} else
{var statearr_145989_146010 = state_145985__$1;(statearr_145989_146010[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145986 === (1)))
{var inst_145962 = (0);var state_145985__$1 = (function (){var statearr_145990 = state_145985;(statearr_145990[(8)] = inst_145962);
return statearr_145990;
})();var statearr_145991_146011 = state_145985__$1;(statearr_145991_146011[(2)] = null);
(statearr_145991_146011[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145986 === (4)))
{var state_145985__$1 = state_145985;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_145985__$1,(7),ch);
} else
{if((state_val_145986 === (6)))
{var inst_145980 = (state_145985[(2)]);var state_145985__$1 = state_145985;var statearr_145992_146012 = state_145985__$1;(statearr_145992_146012[(2)] = inst_145980);
(statearr_145992_146012[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145986 === (3)))
{var inst_145982 = (state_145985[(2)]);var inst_145983 = cljs.core.async.close_BANG_.call(null,out);var state_145985__$1 = (function (){var statearr_145993 = state_145985;(statearr_145993[(9)] = inst_145982);
return statearr_145993;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_145985__$1,inst_145983);
} else
{if((state_val_145986 === (2)))
{var inst_145962 = (state_145985[(8)]);var inst_145964 = (inst_145962 < n);var state_145985__$1 = state_145985;if(cljs.core.truth_(inst_145964))
{var statearr_145994_146013 = state_145985__$1;(statearr_145994_146013[(1)] = (4));
} else
{var statearr_145995_146014 = state_145985__$1;(statearr_145995_146014[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145986 === (11)))
{var inst_145962 = (state_145985[(8)]);var inst_145972 = (state_145985[(2)]);var inst_145973 = (inst_145962 + (1));var inst_145962__$1 = inst_145973;var state_145985__$1 = (function (){var statearr_145996 = state_145985;(statearr_145996[(8)] = inst_145962__$1);
(statearr_145996[(10)] = inst_145972);
return statearr_145996;
})();var statearr_145997_146015 = state_145985__$1;(statearr_145997_146015[(2)] = null);
(statearr_145997_146015[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145986 === (9)))
{var state_145985__$1 = state_145985;var statearr_145998_146016 = state_145985__$1;(statearr_145998_146016[(2)] = null);
(statearr_145998_146016[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145986 === (5)))
{var state_145985__$1 = state_145985;var statearr_145999_146017 = state_145985__$1;(statearr_145999_146017[(2)] = null);
(statearr_145999_146017[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145986 === (10)))
{var inst_145977 = (state_145985[(2)]);var state_145985__$1 = state_145985;var statearr_146000_146018 = state_145985__$1;(statearr_146000_146018[(2)] = inst_145977);
(statearr_146000_146018[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_145986 === (8)))
{var inst_145967 = (state_145985[(7)]);var state_145985__$1 = state_145985;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_145985__$1,(11),out,inst_145967);
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
});})(c__5867__auto___146008,out))
;return ((function (switch__5852__auto__,c__5867__auto___146008,out){
return (function() {
var state_machine__5853__auto__ = null;
var state_machine__5853__auto____0 = (function (){var statearr_146004 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_146004[(0)] = state_machine__5853__auto__);
(statearr_146004[(1)] = (1));
return statearr_146004;
});
var state_machine__5853__auto____1 = (function (state_145985){while(true){
var ret_value__5854__auto__ = (function (){try{while(true){
var result__5855__auto__ = switch__5852__auto__.call(null,state_145985);if(cljs.core.keyword_identical_QMARK_.call(null,result__5855__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5855__auto__;
}
break;
}
}catch (e146005){if((e146005 instanceof Object))
{var ex__5856__auto__ = e146005;var statearr_146006_146019 = state_145985;(statearr_146006_146019[(5)] = ex__5856__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_145985);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e146005;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__146020 = state_145985;
state_145985 = G__146020;
continue;
}
} else
{return ret_value__5854__auto__;
}
break;
}
});
state_machine__5853__auto__ = function(state_145985){
switch(arguments.length){
case 0:
return state_machine__5853__auto____0.call(this);
case 1:
return state_machine__5853__auto____1.call(this,state_145985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5853__auto____0;
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5853__auto____1;
return state_machine__5853__auto__;
})()
;})(switch__5852__auto__,c__5867__auto___146008,out))
})();var state__5869__auto__ = (function (){var statearr_146007 = f__5868__auto__.call(null);(statearr_146007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5867__auto___146008);
return statearr_146007;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5869__auto__);
});})(c__5867__auto___146008,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5867__auto___146117 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5867__auto___146117,out){
return (function (){var f__5868__auto__ = (function (){var switch__5852__auto__ = ((function (c__5867__auto___146117,out){
return (function (state_146092){var state_val_146093 = (state_146092[(1)]);if((state_val_146093 === (7)))
{var inst_146087 = (state_146092[(2)]);var state_146092__$1 = state_146092;var statearr_146094_146118 = state_146092__$1;(statearr_146094_146118[(2)] = inst_146087);
(statearr_146094_146118[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_146093 === (1)))
{var inst_146069 = null;var state_146092__$1 = (function (){var statearr_146095 = state_146092;(statearr_146095[(7)] = inst_146069);
return statearr_146095;
})();var statearr_146096_146119 = state_146092__$1;(statearr_146096_146119[(2)] = null);
(statearr_146096_146119[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_146093 === (4)))
{var inst_146072 = (state_146092[(8)]);var inst_146072__$1 = (state_146092[(2)]);var inst_146073 = (inst_146072__$1 == null);var inst_146074 = cljs.core.not.call(null,inst_146073);var state_146092__$1 = (function (){var statearr_146097 = state_146092;(statearr_146097[(8)] = inst_146072__$1);
return statearr_146097;
})();if(inst_146074)
{var statearr_146098_146120 = state_146092__$1;(statearr_146098_146120[(1)] = (5));
} else
{var statearr_146099_146121 = state_146092__$1;(statearr_146099_146121[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_146093 === (6)))
{var state_146092__$1 = state_146092;var statearr_146100_146122 = state_146092__$1;(statearr_146100_146122[(2)] = null);
(statearr_146100_146122[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_146093 === (3)))
{var inst_146089 = (state_146092[(2)]);var inst_146090 = cljs.core.async.close_BANG_.call(null,out);var state_146092__$1 = (function (){var statearr_146101 = state_146092;(statearr_146101[(9)] = inst_146089);
return statearr_146101;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_146092__$1,inst_146090);
} else
{if((state_val_146093 === (2)))
{var state_146092__$1 = state_146092;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_146092__$1,(4),ch);
} else
{if((state_val_146093 === (11)))
{var inst_146072 = (state_146092[(8)]);var inst_146081 = (state_146092[(2)]);var inst_146069 = inst_146072;var state_146092__$1 = (function (){var statearr_146102 = state_146092;(statearr_146102[(7)] = inst_146069);
(statearr_146102[(10)] = inst_146081);
return statearr_146102;
})();var statearr_146103_146123 = state_146092__$1;(statearr_146103_146123[(2)] = null);
(statearr_146103_146123[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_146093 === (9)))
{var inst_146072 = (state_146092[(8)]);var state_146092__$1 = state_146092;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_146092__$1,(11),out,inst_146072);
} else
{if((state_val_146093 === (5)))
{var inst_146069 = (state_146092[(7)]);var inst_146072 = (state_146092[(8)]);var inst_146076 = cljs.core._EQ_.call(null,inst_146072,inst_146069);var state_146092__$1 = state_146092;if(inst_146076)
{var statearr_146105_146124 = state_146092__$1;(statearr_146105_146124[(1)] = (8));
} else
{var statearr_146106_146125 = state_146092__$1;(statearr_146106_146125[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_146093 === (10)))
{var inst_146084 = (state_146092[(2)]);var state_146092__$1 = state_146092;var statearr_146107_146126 = state_146092__$1;(statearr_146107_146126[(2)] = inst_146084);
(statearr_146107_146126[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_146093 === (8)))
{var inst_146069 = (state_146092[(7)]);var tmp146104 = inst_146069;var inst_146069__$1 = tmp146104;var state_146092__$1 = (function (){var statearr_146108 = state_146092;(statearr_146108[(7)] = inst_146069__$1);
return statearr_146108;
})();var statearr_146109_146127 = state_146092__$1;(statearr_146109_146127[(2)] = null);
(statearr_146109_146127[(1)] = (2));
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
});})(c__5867__auto___146117,out))
;return ((function (switch__5852__auto__,c__5867__auto___146117,out){
return (function() {
var state_machine__5853__auto__ = null;
var state_machine__5853__auto____0 = (function (){var statearr_146113 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_146113[(0)] = state_machine__5853__auto__);
(statearr_146113[(1)] = (1));
return statearr_146113;
});
var state_machine__5853__auto____1 = (function (state_146092){while(true){
var ret_value__5854__auto__ = (function (){try{while(true){
var result__5855__auto__ = switch__5852__auto__.call(null,state_146092);if(cljs.core.keyword_identical_QMARK_.call(null,result__5855__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5855__auto__;
}
break;
}
}catch (e146114){if((e146114 instanceof Object))
{var ex__5856__auto__ = e146114;var statearr_146115_146128 = state_146092;(statearr_146115_146128[(5)] = ex__5856__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_146092);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e146114;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__146129 = state_146092;
state_146092 = G__146129;
continue;
}
} else
{return ret_value__5854__auto__;
}
break;
}
});
state_machine__5853__auto__ = function(state_146092){
switch(arguments.length){
case 0:
return state_machine__5853__auto____0.call(this);
case 1:
return state_machine__5853__auto____1.call(this,state_146092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5853__auto____0;
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5853__auto____1;
return state_machine__5853__auto__;
})()
;})(switch__5852__auto__,c__5867__auto___146117,out))
})();var state__5869__auto__ = (function (){var statearr_146116 = f__5868__auto__.call(null);(statearr_146116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5867__auto___146117);
return statearr_146116;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5869__auto__);
});})(c__5867__auto___146117,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5867__auto___146264 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5867__auto___146264,out){
return (function (){var f__5868__auto__ = (function (){var switch__5852__auto__ = ((function (c__5867__auto___146264,out){
return (function (state_146234){var state_val_146235 = (state_146234[(1)]);if((state_val_146235 === (7)))
{var inst_146230 = (state_146234[(2)]);var state_146234__$1 = state_146234;var statearr_146236_146265 = state_146234__$1;(statearr_146236_146265[(2)] = inst_146230);
(statearr_146236_146265[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_146235 === (1)))
{var inst_146197 = (new Array(n));var inst_146198 = inst_146197;var inst_146199 = (0);var state_146234__$1 = (function (){var statearr_146237 = state_146234;(statearr_146237[(7)] = inst_146199);
(statearr_146237[(8)] = inst_146198);
return statearr_146237;
})();var statearr_146238_146266 = state_146234__$1;(statearr_146238_146266[(2)] = null);
(statearr_146238_146266[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_146235 === (4)))
{var inst_146202 = (state_146234[(9)]);var inst_146202__$1 = (state_146234[(2)]);var inst_146203 = (inst_146202__$1 == null);var inst_146204 = cljs.core.not.call(null,inst_146203);var state_146234__$1 = (function (){var statearr_146239 = state_146234;(statearr_146239[(9)] = inst_146202__$1);
return statearr_146239;
})();if(inst_146204)
{var statearr_146240_146267 = state_146234__$1;(statearr_146240_146267[(1)] = (5));
} else
{var statearr_146241_146268 = state_146234__$1;(statearr_146241_146268[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_146235 === (15)))
{var inst_146224 = (state_146234[(2)]);var state_146234__$1 = state_146234;var statearr_146242_146269 = state_146234__$1;(statearr_146242_146269[(2)] = inst_146224);
(statearr_146242_146269[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_146235 === (13)))
{var state_146234__$1 = state_146234;var statearr_146243_146270 = state_146234__$1;(statearr_146243_146270[(2)] = null);
(statearr_146243_146270[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_146235 === (6)))
{var inst_146199 = (state_146234[(7)]);var inst_146220 = (inst_146199 > (0));var state_146234__$1 = state_146234;if(cljs.core.truth_(inst_146220))
{var statearr_146244_146271 = state_146234__$1;(statearr_146244_146271[(1)] = (12));
} else
{var statearr_146245_146272 = state_146234__$1;(statearr_146245_146272[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_146235 === (3)))
{var inst_146232 = (state_146234[(2)]);var state_146234__$1 = state_146234;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_146234__$1,inst_146232);
} else
{if((state_val_146235 === (12)))
{var inst_146198 = (state_146234[(8)]);var inst_146222 = cljs.core.vec.call(null,inst_146198);var state_146234__$1 = state_146234;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_146234__$1,(15),out,inst_146222);
} else
{if((state_val_146235 === (2)))
{var state_146234__$1 = state_146234;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_146234__$1,(4),ch);
} else
{if((state_val_146235 === (11)))
{var inst_146214 = (state_146234[(2)]);var inst_146215 = (new Array(n));var inst_146198 = inst_146215;var inst_146199 = (0);var state_146234__$1 = (function (){var statearr_146246 = state_146234;(statearr_146246[(10)] = inst_146214);
(statearr_146246[(7)] = inst_146199);
(statearr_146246[(8)] = inst_146198);
return statearr_146246;
})();var statearr_146247_146273 = state_146234__$1;(statearr_146247_146273[(2)] = null);
(statearr_146247_146273[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_146235 === (9)))
{var inst_146198 = (state_146234[(8)]);var inst_146212 = cljs.core.vec.call(null,inst_146198);var state_146234__$1 = state_146234;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_146234__$1,(11),out,inst_146212);
} else
{if((state_val_146235 === (5)))
{var inst_146207 = (state_146234[(11)]);var inst_146199 = (state_146234[(7)]);var inst_146202 = (state_146234[(9)]);var inst_146198 = (state_146234[(8)]);var inst_146206 = (inst_146198[inst_146199] = inst_146202);var inst_146207__$1 = (inst_146199 + (1));var inst_146208 = (inst_146207__$1 < n);var state_146234__$1 = (function (){var statearr_146248 = state_146234;(statearr_146248[(11)] = inst_146207__$1);
(statearr_146248[(12)] = inst_146206);
return statearr_146248;
})();if(cljs.core.truth_(inst_146208))
{var statearr_146249_146274 = state_146234__$1;(statearr_146249_146274[(1)] = (8));
} else
{var statearr_146250_146275 = state_146234__$1;(statearr_146250_146275[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_146235 === (14)))
{var inst_146227 = (state_146234[(2)]);var inst_146228 = cljs.core.async.close_BANG_.call(null,out);var state_146234__$1 = (function (){var statearr_146252 = state_146234;(statearr_146252[(13)] = inst_146227);
return statearr_146252;
})();var statearr_146253_146276 = state_146234__$1;(statearr_146253_146276[(2)] = inst_146228);
(statearr_146253_146276[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_146235 === (10)))
{var inst_146218 = (state_146234[(2)]);var state_146234__$1 = state_146234;var statearr_146254_146277 = state_146234__$1;(statearr_146254_146277[(2)] = inst_146218);
(statearr_146254_146277[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_146235 === (8)))
{var inst_146207 = (state_146234[(11)]);var inst_146198 = (state_146234[(8)]);var tmp146251 = inst_146198;var inst_146198__$1 = tmp146251;var inst_146199 = inst_146207;var state_146234__$1 = (function (){var statearr_146255 = state_146234;(statearr_146255[(7)] = inst_146199);
(statearr_146255[(8)] = inst_146198__$1);
return statearr_146255;
})();var statearr_146256_146278 = state_146234__$1;(statearr_146256_146278[(2)] = null);
(statearr_146256_146278[(1)] = (2));
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
});})(c__5867__auto___146264,out))
;return ((function (switch__5852__auto__,c__5867__auto___146264,out){
return (function() {
var state_machine__5853__auto__ = null;
var state_machine__5853__auto____0 = (function (){var statearr_146260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_146260[(0)] = state_machine__5853__auto__);
(statearr_146260[(1)] = (1));
return statearr_146260;
});
var state_machine__5853__auto____1 = (function (state_146234){while(true){
var ret_value__5854__auto__ = (function (){try{while(true){
var result__5855__auto__ = switch__5852__auto__.call(null,state_146234);if(cljs.core.keyword_identical_QMARK_.call(null,result__5855__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5855__auto__;
}
break;
}
}catch (e146261){if((e146261 instanceof Object))
{var ex__5856__auto__ = e146261;var statearr_146262_146279 = state_146234;(statearr_146262_146279[(5)] = ex__5856__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_146234);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e146261;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__146280 = state_146234;
state_146234 = G__146280;
continue;
}
} else
{return ret_value__5854__auto__;
}
break;
}
});
state_machine__5853__auto__ = function(state_146234){
switch(arguments.length){
case 0:
return state_machine__5853__auto____0.call(this);
case 1:
return state_machine__5853__auto____1.call(this,state_146234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5853__auto____0;
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5853__auto____1;
return state_machine__5853__auto__;
})()
;})(switch__5852__auto__,c__5867__auto___146264,out))
})();var state__5869__auto__ = (function (){var statearr_146263 = f__5868__auto__.call(null);(statearr_146263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5867__auto___146264);
return statearr_146263;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5869__auto__);
});})(c__5867__auto___146264,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5867__auto___146423 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5867__auto___146423,out){
return (function (){var f__5868__auto__ = (function (){var switch__5852__auto__ = ((function (c__5867__auto___146423,out){
return (function (state_146393){var state_val_146394 = (state_146393[(1)]);if((state_val_146394 === (7)))
{var inst_146389 = (state_146393[(2)]);var state_146393__$1 = state_146393;var statearr_146395_146424 = state_146393__$1;(statearr_146395_146424[(2)] = inst_146389);
(statearr_146395_146424[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_146394 === (1)))
{var inst_146352 = [];var inst_146353 = inst_146352;var inst_146354 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_146393__$1 = (function (){var statearr_146396 = state_146393;(statearr_146396[(7)] = inst_146353);
(statearr_146396[(8)] = inst_146354);
return statearr_146396;
})();var statearr_146397_146425 = state_146393__$1;(statearr_146397_146425[(2)] = null);
(statearr_146397_146425[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_146394 === (4)))
{var inst_146357 = (state_146393[(9)]);var inst_146357__$1 = (state_146393[(2)]);var inst_146358 = (inst_146357__$1 == null);var inst_146359 = cljs.core.not.call(null,inst_146358);var state_146393__$1 = (function (){var statearr_146398 = state_146393;(statearr_146398[(9)] = inst_146357__$1);
return statearr_146398;
})();if(inst_146359)
{var statearr_146399_146426 = state_146393__$1;(statearr_146399_146426[(1)] = (5));
} else
{var statearr_146400_146427 = state_146393__$1;(statearr_146400_146427[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_146394 === (15)))
{var inst_146383 = (state_146393[(2)]);var state_146393__$1 = state_146393;var statearr_146401_146428 = state_146393__$1;(statearr_146401_146428[(2)] = inst_146383);
(statearr_146401_146428[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_146394 === (13)))
{var state_146393__$1 = state_146393;var statearr_146402_146429 = state_146393__$1;(statearr_146402_146429[(2)] = null);
(statearr_146402_146429[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_146394 === (6)))
{var inst_146353 = (state_146393[(7)]);var inst_146378 = inst_146353.length;var inst_146379 = (inst_146378 > (0));var state_146393__$1 = state_146393;if(cljs.core.truth_(inst_146379))
{var statearr_146403_146430 = state_146393__$1;(statearr_146403_146430[(1)] = (12));
} else
{var statearr_146404_146431 = state_146393__$1;(statearr_146404_146431[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_146394 === (3)))
{var inst_146391 = (state_146393[(2)]);var state_146393__$1 = state_146393;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_146393__$1,inst_146391);
} else
{if((state_val_146394 === (12)))
{var inst_146353 = (state_146393[(7)]);var inst_146381 = cljs.core.vec.call(null,inst_146353);var state_146393__$1 = state_146393;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_146393__$1,(15),out,inst_146381);
} else
{if((state_val_146394 === (2)))
{var state_146393__$1 = state_146393;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_146393__$1,(4),ch);
} else
{if((state_val_146394 === (11)))
{var inst_146361 = (state_146393[(10)]);var inst_146357 = (state_146393[(9)]);var inst_146371 = (state_146393[(2)]);var inst_146372 = [];var inst_146373 = inst_146372.push(inst_146357);var inst_146353 = inst_146372;var inst_146354 = inst_146361;var state_146393__$1 = (function (){var statearr_146405 = state_146393;(statearr_146405[(7)] = inst_146353);
(statearr_146405[(11)] = inst_146371);
(statearr_146405[(8)] = inst_146354);
(statearr_146405[(12)] = inst_146373);
return statearr_146405;
})();var statearr_146406_146432 = state_146393__$1;(statearr_146406_146432[(2)] = null);
(statearr_146406_146432[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_146394 === (9)))
{var inst_146353 = (state_146393[(7)]);var inst_146369 = cljs.core.vec.call(null,inst_146353);var state_146393__$1 = state_146393;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_146393__$1,(11),out,inst_146369);
} else
{if((state_val_146394 === (5)))
{var inst_146361 = (state_146393[(10)]);var inst_146354 = (state_146393[(8)]);var inst_146357 = (state_146393[(9)]);var inst_146361__$1 = f.call(null,inst_146357);var inst_146362 = cljs.core._EQ_.call(null,inst_146361__$1,inst_146354);var inst_146363 = cljs.core.keyword_identical_QMARK_.call(null,inst_146354,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_146364 = (inst_146362) || (inst_146363);var state_146393__$1 = (function (){var statearr_146407 = state_146393;(statearr_146407[(10)] = inst_146361__$1);
return statearr_146407;
})();if(cljs.core.truth_(inst_146364))
{var statearr_146408_146433 = state_146393__$1;(statearr_146408_146433[(1)] = (8));
} else
{var statearr_146409_146434 = state_146393__$1;(statearr_146409_146434[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_146394 === (14)))
{var inst_146386 = (state_146393[(2)]);var inst_146387 = cljs.core.async.close_BANG_.call(null,out);var state_146393__$1 = (function (){var statearr_146411 = state_146393;(statearr_146411[(13)] = inst_146386);
return statearr_146411;
})();var statearr_146412_146435 = state_146393__$1;(statearr_146412_146435[(2)] = inst_146387);
(statearr_146412_146435[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_146394 === (10)))
{var inst_146376 = (state_146393[(2)]);var state_146393__$1 = state_146393;var statearr_146413_146436 = state_146393__$1;(statearr_146413_146436[(2)] = inst_146376);
(statearr_146413_146436[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_146394 === (8)))
{var inst_146353 = (state_146393[(7)]);var inst_146361 = (state_146393[(10)]);var inst_146357 = (state_146393[(9)]);var inst_146366 = inst_146353.push(inst_146357);var tmp146410 = inst_146353;var inst_146353__$1 = tmp146410;var inst_146354 = inst_146361;var state_146393__$1 = (function (){var statearr_146414 = state_146393;(statearr_146414[(7)] = inst_146353__$1);
(statearr_146414[(8)] = inst_146354);
(statearr_146414[(14)] = inst_146366);
return statearr_146414;
})();var statearr_146415_146437 = state_146393__$1;(statearr_146415_146437[(2)] = null);
(statearr_146415_146437[(1)] = (2));
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
});})(c__5867__auto___146423,out))
;return ((function (switch__5852__auto__,c__5867__auto___146423,out){
return (function() {
var state_machine__5853__auto__ = null;
var state_machine__5853__auto____0 = (function (){var statearr_146419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_146419[(0)] = state_machine__5853__auto__);
(statearr_146419[(1)] = (1));
return statearr_146419;
});
var state_machine__5853__auto____1 = (function (state_146393){while(true){
var ret_value__5854__auto__ = (function (){try{while(true){
var result__5855__auto__ = switch__5852__auto__.call(null,state_146393);if(cljs.core.keyword_identical_QMARK_.call(null,result__5855__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5855__auto__;
}
break;
}
}catch (e146420){if((e146420 instanceof Object))
{var ex__5856__auto__ = e146420;var statearr_146421_146438 = state_146393;(statearr_146421_146438[(5)] = ex__5856__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_146393);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e146420;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__146439 = state_146393;
state_146393 = G__146439;
continue;
}
} else
{return ret_value__5854__auto__;
}
break;
}
});
state_machine__5853__auto__ = function(state_146393){
switch(arguments.length){
case 0:
return state_machine__5853__auto____0.call(this);
case 1:
return state_machine__5853__auto____1.call(this,state_146393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5853__auto____0;
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5853__auto____1;
return state_machine__5853__auto__;
})()
;})(switch__5852__auto__,c__5867__auto___146423,out))
})();var state__5869__auto__ = (function (){var statearr_146422 = f__5868__auto__.call(null);(statearr_146422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5867__auto___146423);
return statearr_146422;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5869__auto__);
});})(c__5867__auto___146423,out))
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