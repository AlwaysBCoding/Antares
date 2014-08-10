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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9260 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9260 = (function (f,fn_handler,meta9261){
this.f = f;
this.fn_handler = fn_handler;
this.meta9261 = meta9261;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9260.cljs$lang$type = true;
cljs.core.async.t9260.cljs$lang$ctorStr = "cljs.core.async/t9260";
cljs.core.async.t9260.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t9260");
});
cljs.core.async.t9260.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9260.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9260.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9262){var self__ = this;
var _9262__$1 = this;return self__.meta9261;
});
cljs.core.async.t9260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9262,meta9261__$1){var self__ = this;
var _9262__$1 = this;return (new cljs.core.async.t9260(self__.f,self__.fn_handler,meta9261__$1));
});
cljs.core.async.__GT_t9260 = (function __GT_t9260(f__$1,fn_handler__$1,meta9261){return (new cljs.core.async.t9260(f__$1,fn_handler__$1,meta9261));
});
}
return (new cljs.core.async.t9260(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__9264 = buff;if(G__9264)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__9264.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__9264.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9264);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9264);
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
{var val_9265 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_9265);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_9265,ret){
return (function (){return fn1.call(null,val_9265);
});})(val_9265,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___9266 = n;var x_9267 = (0);while(true){
if((x_9267 < n__4399__auto___9266))
{(a[x_9267] = (0));
{
var G__9268 = (x_9267 + (1));
x_9267 = G__9268;
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
var G__9269 = (i + (1));
i = G__9269;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t9273 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9273 = (function (flag,alt_flag,meta9274){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9274 = meta9274;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9273.cljs$lang$type = true;
cljs.core.async.t9273.cljs$lang$ctorStr = "cljs.core.async/t9273";
cljs.core.async.t9273.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t9273");
});})(flag))
;
cljs.core.async.t9273.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9273.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t9273.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t9273.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9275){var self__ = this;
var _9275__$1 = this;return self__.meta9274;
});})(flag))
;
cljs.core.async.t9273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9275,meta9274__$1){var self__ = this;
var _9275__$1 = this;return (new cljs.core.async.t9273(self__.flag,self__.alt_flag,meta9274__$1));
});})(flag))
;
cljs.core.async.__GT_t9273 = ((function (flag){
return (function __GT_t9273(flag__$1,alt_flag__$1,meta9274){return (new cljs.core.async.t9273(flag__$1,alt_flag__$1,meta9274));
});})(flag))
;
}
return (new cljs.core.async.t9273(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9279 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9279 = (function (cb,flag,alt_handler,meta9280){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9280 = meta9280;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9279.cljs$lang$type = true;
cljs.core.async.t9279.cljs$lang$ctorStr = "cljs.core.async/t9279";
cljs.core.async.t9279.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t9279");
});
cljs.core.async.t9279.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9279.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t9279.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t9279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9281){var self__ = this;
var _9281__$1 = this;return self__.meta9280;
});
cljs.core.async.t9279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9281,meta9280__$1){var self__ = this;
var _9281__$1 = this;return (new cljs.core.async.t9279(self__.cb,self__.flag,self__.alt_handler,meta9280__$1));
});
cljs.core.async.__GT_t9279 = (function __GT_t9279(cb__$1,flag__$1,alt_handler__$1,meta9280){return (new cljs.core.async.t9279(cb__$1,flag__$1,alt_handler__$1,meta9280));
});
}
return (new cljs.core.async.t9279(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9282_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9282_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9283_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9283_SHARP_,port], null));
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
var G__9284 = (i + (1));
i = G__9284;
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
var alts_BANG___delegate = function (ports,p__9285){var map__9287 = p__9285;var map__9287__$1 = ((cljs.core.seq_QMARK_.call(null,map__9287))?cljs.core.apply.call(null,cljs.core.hash_map,map__9287):map__9287);var opts = map__9287__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__9285 = null;if (arguments.length > 1) {
  p__9285 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9285);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9288){
var ports = cljs.core.first(arglist__9288);
var p__9285 = cljs.core.rest(arglist__9288);
return alts_BANG___delegate(ports,p__9285);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t9296 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9296 = (function (ch,f,map_LT_,meta9297){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9297 = meta9297;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9296.cljs$lang$type = true;
cljs.core.async.t9296.cljs$lang$ctorStr = "cljs.core.async/t9296";
cljs.core.async.t9296.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t9296");
});
cljs.core.async.t9296.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9296.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t9296.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9296.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t9299 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9299 = (function (fn1,_,meta9297,ch,f,map_LT_,meta9300){
this.fn1 = fn1;
this._ = _;
this.meta9297 = meta9297;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9300 = meta9300;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9299.cljs$lang$type = true;
cljs.core.async.t9299.cljs$lang$ctorStr = "cljs.core.async/t9299";
cljs.core.async.t9299.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t9299");
});})(___$1))
;
cljs.core.async.t9299.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9299.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t9299.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t9299.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__9289_SHARP_){return f1.call(null,(((p1__9289_SHARP_ == null))?null:self__.f.call(null,p1__9289_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t9299.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_9301){var self__ = this;
var _9301__$1 = this;return self__.meta9300;
});})(___$1))
;
cljs.core.async.t9299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_9301,meta9300__$1){var self__ = this;
var _9301__$1 = this;return (new cljs.core.async.t9299(self__.fn1,self__._,self__.meta9297,self__.ch,self__.f,self__.map_LT_,meta9300__$1));
});})(___$1))
;
cljs.core.async.__GT_t9299 = ((function (___$1){
return (function __GT_t9299(fn1__$1,___$2,meta9297__$1,ch__$2,f__$2,map_LT___$2,meta9300){return (new cljs.core.async.t9299(fn1__$1,___$2,meta9297__$1,ch__$2,f__$2,map_LT___$2,meta9300));
});})(___$1))
;
}
return (new cljs.core.async.t9299(fn1,___$1,self__.meta9297,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t9296.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9296.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9296.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t9296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9298){var self__ = this;
var _9298__$1 = this;return self__.meta9297;
});
cljs.core.async.t9296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9298,meta9297__$1){var self__ = this;
var _9298__$1 = this;return (new cljs.core.async.t9296(self__.ch,self__.f,self__.map_LT_,meta9297__$1));
});
cljs.core.async.__GT_t9296 = (function __GT_t9296(ch__$1,f__$1,map_LT___$1,meta9297){return (new cljs.core.async.t9296(ch__$1,f__$1,map_LT___$1,meta9297));
});
}
return (new cljs.core.async.t9296(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t9305 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9305 = (function (ch,f,map_GT_,meta9306){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta9306 = meta9306;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9305.cljs$lang$type = true;
cljs.core.async.t9305.cljs$lang$ctorStr = "cljs.core.async/t9305";
cljs.core.async.t9305.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t9305");
});
cljs.core.async.t9305.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9305.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t9305.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9305.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9305.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9305.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9307){var self__ = this;
var _9307__$1 = this;return self__.meta9306;
});
cljs.core.async.t9305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9307,meta9306__$1){var self__ = this;
var _9307__$1 = this;return (new cljs.core.async.t9305(self__.ch,self__.f,self__.map_GT_,meta9306__$1));
});
cljs.core.async.__GT_t9305 = (function __GT_t9305(ch__$1,f__$1,map_GT___$1,meta9306){return (new cljs.core.async.t9305(ch__$1,f__$1,map_GT___$1,meta9306));
});
}
return (new cljs.core.async.t9305(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t9311 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9311 = (function (ch,p,filter_GT_,meta9312){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta9312 = meta9312;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9311.cljs$lang$type = true;
cljs.core.async.t9311.cljs$lang$ctorStr = "cljs.core.async/t9311";
cljs.core.async.t9311.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t9311");
});
cljs.core.async.t9311.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9311.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t9311.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9311.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9311.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9311.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9311.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t9311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9313){var self__ = this;
var _9313__$1 = this;return self__.meta9312;
});
cljs.core.async.t9311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9313,meta9312__$1){var self__ = this;
var _9313__$1 = this;return (new cljs.core.async.t9311(self__.ch,self__.p,self__.filter_GT_,meta9312__$1));
});
cljs.core.async.__GT_t9311 = (function __GT_t9311(ch__$1,p__$1,filter_GT___$1,meta9312){return (new cljs.core.async.t9311(ch__$1,p__$1,filter_GT___$1,meta9312));
});
}
return (new cljs.core.async.t9311(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6245__auto___9396 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6245__auto___9396,out){
return (function (){var f__6246__auto__ = (function (){var switch__6180__auto__ = ((function (c__6245__auto___9396,out){
return (function (state_9375){var state_val_9376 = (state_9375[(1)]);if((state_val_9376 === (7)))
{var inst_9371 = (state_9375[(2)]);var state_9375__$1 = state_9375;var statearr_9377_9397 = state_9375__$1;(statearr_9377_9397[(2)] = inst_9371);
(statearr_9377_9397[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9376 === (1)))
{var state_9375__$1 = state_9375;var statearr_9378_9398 = state_9375__$1;(statearr_9378_9398[(2)] = null);
(statearr_9378_9398[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9376 === (4)))
{var inst_9357 = (state_9375[(7)]);var inst_9357__$1 = (state_9375[(2)]);var inst_9358 = (inst_9357__$1 == null);var state_9375__$1 = (function (){var statearr_9379 = state_9375;(statearr_9379[(7)] = inst_9357__$1);
return statearr_9379;
})();if(cljs.core.truth_(inst_9358))
{var statearr_9380_9399 = state_9375__$1;(statearr_9380_9399[(1)] = (5));
} else
{var statearr_9381_9400 = state_9375__$1;(statearr_9381_9400[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9376 === (6)))
{var inst_9357 = (state_9375[(7)]);var inst_9362 = p.call(null,inst_9357);var state_9375__$1 = state_9375;if(cljs.core.truth_(inst_9362))
{var statearr_9382_9401 = state_9375__$1;(statearr_9382_9401[(1)] = (8));
} else
{var statearr_9383_9402 = state_9375__$1;(statearr_9383_9402[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9376 === (3)))
{var inst_9373 = (state_9375[(2)]);var state_9375__$1 = state_9375;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9375__$1,inst_9373);
} else
{if((state_val_9376 === (2)))
{var state_9375__$1 = state_9375;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9375__$1,(4),ch);
} else
{if((state_val_9376 === (11)))
{var inst_9365 = (state_9375[(2)]);var state_9375__$1 = state_9375;var statearr_9384_9403 = state_9375__$1;(statearr_9384_9403[(2)] = inst_9365);
(statearr_9384_9403[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9376 === (9)))
{var state_9375__$1 = state_9375;var statearr_9385_9404 = state_9375__$1;(statearr_9385_9404[(2)] = null);
(statearr_9385_9404[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9376 === (5)))
{var inst_9360 = cljs.core.async.close_BANG_.call(null,out);var state_9375__$1 = state_9375;var statearr_9386_9405 = state_9375__$1;(statearr_9386_9405[(2)] = inst_9360);
(statearr_9386_9405[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9376 === (10)))
{var inst_9368 = (state_9375[(2)]);var state_9375__$1 = (function (){var statearr_9387 = state_9375;(statearr_9387[(8)] = inst_9368);
return statearr_9387;
})();var statearr_9388_9406 = state_9375__$1;(statearr_9388_9406[(2)] = null);
(statearr_9388_9406[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9376 === (8)))
{var inst_9357 = (state_9375[(7)]);var state_9375__$1 = state_9375;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9375__$1,(11),out,inst_9357);
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
});})(c__6245__auto___9396,out))
;return ((function (switch__6180__auto__,c__6245__auto___9396,out){
return (function() {
var state_machine__6181__auto__ = null;
var state_machine__6181__auto____0 = (function (){var statearr_9392 = [null,null,null,null,null,null,null,null,null];(statearr_9392[(0)] = state_machine__6181__auto__);
(statearr_9392[(1)] = (1));
return statearr_9392;
});
var state_machine__6181__auto____1 = (function (state_9375){while(true){
var ret_value__6182__auto__ = (function (){try{while(true){
var result__6183__auto__ = switch__6180__auto__.call(null,state_9375);if(cljs.core.keyword_identical_QMARK_.call(null,result__6183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6183__auto__;
}
break;
}
}catch (e9393){if((e9393 instanceof Object))
{var ex__6184__auto__ = e9393;var statearr_9394_9407 = state_9375;(statearr_9394_9407[(5)] = ex__6184__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9375);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9393;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9408 = state_9375;
state_9375 = G__9408;
continue;
}
} else
{return ret_value__6182__auto__;
}
break;
}
});
state_machine__6181__auto__ = function(state_9375){
switch(arguments.length){
case 0:
return state_machine__6181__auto____0.call(this);
case 1:
return state_machine__6181__auto____1.call(this,state_9375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6181__auto____0;
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6181__auto____1;
return state_machine__6181__auto__;
})()
;})(switch__6180__auto__,c__6245__auto___9396,out))
})();var state__6247__auto__ = (function (){var statearr_9395 = f__6246__auto__.call(null);(statearr_9395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6245__auto___9396);
return statearr_9395;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6247__auto__);
});})(c__6245__auto___9396,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6245__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6245__auto__){
return (function (){var f__6246__auto__ = (function (){var switch__6180__auto__ = ((function (c__6245__auto__){
return (function (state_9574){var state_val_9575 = (state_9574[(1)]);if((state_val_9575 === (7)))
{var inst_9570 = (state_9574[(2)]);var state_9574__$1 = state_9574;var statearr_9576_9617 = state_9574__$1;(statearr_9576_9617[(2)] = inst_9570);
(statearr_9576_9617[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9575 === (20)))
{var inst_9540 = (state_9574[(7)]);var inst_9551 = (state_9574[(2)]);var inst_9552 = cljs.core.next.call(null,inst_9540);var inst_9526 = inst_9552;var inst_9527 = null;var inst_9528 = (0);var inst_9529 = (0);var state_9574__$1 = (function (){var statearr_9577 = state_9574;(statearr_9577[(8)] = inst_9528);
(statearr_9577[(9)] = inst_9527);
(statearr_9577[(10)] = inst_9526);
(statearr_9577[(11)] = inst_9551);
(statearr_9577[(12)] = inst_9529);
return statearr_9577;
})();var statearr_9578_9618 = state_9574__$1;(statearr_9578_9618[(2)] = null);
(statearr_9578_9618[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9575 === (1)))
{var state_9574__$1 = state_9574;var statearr_9579_9619 = state_9574__$1;(statearr_9579_9619[(2)] = null);
(statearr_9579_9619[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9575 === (4)))
{var inst_9515 = (state_9574[(13)]);var inst_9515__$1 = (state_9574[(2)]);var inst_9516 = (inst_9515__$1 == null);var state_9574__$1 = (function (){var statearr_9580 = state_9574;(statearr_9580[(13)] = inst_9515__$1);
return statearr_9580;
})();if(cljs.core.truth_(inst_9516))
{var statearr_9581_9620 = state_9574__$1;(statearr_9581_9620[(1)] = (5));
} else
{var statearr_9582_9621 = state_9574__$1;(statearr_9582_9621[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9575 === (15)))
{var state_9574__$1 = state_9574;var statearr_9586_9622 = state_9574__$1;(statearr_9586_9622[(2)] = null);
(statearr_9586_9622[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9575 === (21)))
{var state_9574__$1 = state_9574;var statearr_9587_9623 = state_9574__$1;(statearr_9587_9623[(2)] = null);
(statearr_9587_9623[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9575 === (13)))
{var inst_9528 = (state_9574[(8)]);var inst_9527 = (state_9574[(9)]);var inst_9526 = (state_9574[(10)]);var inst_9529 = (state_9574[(12)]);var inst_9536 = (state_9574[(2)]);var inst_9537 = (inst_9529 + (1));var tmp9583 = inst_9528;var tmp9584 = inst_9527;var tmp9585 = inst_9526;var inst_9526__$1 = tmp9585;var inst_9527__$1 = tmp9584;var inst_9528__$1 = tmp9583;var inst_9529__$1 = inst_9537;var state_9574__$1 = (function (){var statearr_9588 = state_9574;(statearr_9588[(8)] = inst_9528__$1);
(statearr_9588[(9)] = inst_9527__$1);
(statearr_9588[(10)] = inst_9526__$1);
(statearr_9588[(14)] = inst_9536);
(statearr_9588[(12)] = inst_9529__$1);
return statearr_9588;
})();var statearr_9589_9624 = state_9574__$1;(statearr_9589_9624[(2)] = null);
(statearr_9589_9624[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9575 === (22)))
{var state_9574__$1 = state_9574;var statearr_9590_9625 = state_9574__$1;(statearr_9590_9625[(2)] = null);
(statearr_9590_9625[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9575 === (6)))
{var inst_9515 = (state_9574[(13)]);var inst_9524 = f.call(null,inst_9515);var inst_9525 = cljs.core.seq.call(null,inst_9524);var inst_9526 = inst_9525;var inst_9527 = null;var inst_9528 = (0);var inst_9529 = (0);var state_9574__$1 = (function (){var statearr_9591 = state_9574;(statearr_9591[(8)] = inst_9528);
(statearr_9591[(9)] = inst_9527);
(statearr_9591[(10)] = inst_9526);
(statearr_9591[(12)] = inst_9529);
return statearr_9591;
})();var statearr_9592_9626 = state_9574__$1;(statearr_9592_9626[(2)] = null);
(statearr_9592_9626[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9575 === (17)))
{var inst_9540 = (state_9574[(7)]);var inst_9544 = cljs.core.chunk_first.call(null,inst_9540);var inst_9545 = cljs.core.chunk_rest.call(null,inst_9540);var inst_9546 = cljs.core.count.call(null,inst_9544);var inst_9526 = inst_9545;var inst_9527 = inst_9544;var inst_9528 = inst_9546;var inst_9529 = (0);var state_9574__$1 = (function (){var statearr_9593 = state_9574;(statearr_9593[(8)] = inst_9528);
(statearr_9593[(9)] = inst_9527);
(statearr_9593[(10)] = inst_9526);
(statearr_9593[(12)] = inst_9529);
return statearr_9593;
})();var statearr_9594_9627 = state_9574__$1;(statearr_9594_9627[(2)] = null);
(statearr_9594_9627[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9575 === (3)))
{var inst_9572 = (state_9574[(2)]);var state_9574__$1 = state_9574;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9574__$1,inst_9572);
} else
{if((state_val_9575 === (12)))
{var inst_9560 = (state_9574[(2)]);var state_9574__$1 = state_9574;var statearr_9595_9628 = state_9574__$1;(statearr_9595_9628[(2)] = inst_9560);
(statearr_9595_9628[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9575 === (2)))
{var state_9574__$1 = state_9574;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9574__$1,(4),in$);
} else
{if((state_val_9575 === (23)))
{var inst_9568 = (state_9574[(2)]);var state_9574__$1 = state_9574;var statearr_9596_9629 = state_9574__$1;(statearr_9596_9629[(2)] = inst_9568);
(statearr_9596_9629[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9575 === (19)))
{var inst_9555 = (state_9574[(2)]);var state_9574__$1 = state_9574;var statearr_9597_9630 = state_9574__$1;(statearr_9597_9630[(2)] = inst_9555);
(statearr_9597_9630[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9575 === (11)))
{var inst_9540 = (state_9574[(7)]);var inst_9526 = (state_9574[(10)]);var inst_9540__$1 = cljs.core.seq.call(null,inst_9526);var state_9574__$1 = (function (){var statearr_9598 = state_9574;(statearr_9598[(7)] = inst_9540__$1);
return statearr_9598;
})();if(inst_9540__$1)
{var statearr_9599_9631 = state_9574__$1;(statearr_9599_9631[(1)] = (14));
} else
{var statearr_9600_9632 = state_9574__$1;(statearr_9600_9632[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9575 === (9)))
{var inst_9562 = (state_9574[(2)]);var inst_9563 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_9574__$1 = (function (){var statearr_9601 = state_9574;(statearr_9601[(15)] = inst_9562);
return statearr_9601;
})();if(cljs.core.truth_(inst_9563))
{var statearr_9602_9633 = state_9574__$1;(statearr_9602_9633[(1)] = (21));
} else
{var statearr_9603_9634 = state_9574__$1;(statearr_9603_9634[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9575 === (5)))
{var inst_9518 = cljs.core.async.close_BANG_.call(null,out);var state_9574__$1 = state_9574;var statearr_9604_9635 = state_9574__$1;(statearr_9604_9635[(2)] = inst_9518);
(statearr_9604_9635[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9575 === (14)))
{var inst_9540 = (state_9574[(7)]);var inst_9542 = cljs.core.chunked_seq_QMARK_.call(null,inst_9540);var state_9574__$1 = state_9574;if(inst_9542)
{var statearr_9605_9636 = state_9574__$1;(statearr_9605_9636[(1)] = (17));
} else
{var statearr_9606_9637 = state_9574__$1;(statearr_9606_9637[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9575 === (16)))
{var inst_9558 = (state_9574[(2)]);var state_9574__$1 = state_9574;var statearr_9607_9638 = state_9574__$1;(statearr_9607_9638[(2)] = inst_9558);
(statearr_9607_9638[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9575 === (10)))
{var inst_9527 = (state_9574[(9)]);var inst_9529 = (state_9574[(12)]);var inst_9534 = cljs.core._nth.call(null,inst_9527,inst_9529);var state_9574__$1 = state_9574;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9574__$1,(13),out,inst_9534);
} else
{if((state_val_9575 === (18)))
{var inst_9540 = (state_9574[(7)]);var inst_9549 = cljs.core.first.call(null,inst_9540);var state_9574__$1 = state_9574;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9574__$1,(20),out,inst_9549);
} else
{if((state_val_9575 === (8)))
{var inst_9528 = (state_9574[(8)]);var inst_9529 = (state_9574[(12)]);var inst_9531 = (inst_9529 < inst_9528);var inst_9532 = inst_9531;var state_9574__$1 = state_9574;if(cljs.core.truth_(inst_9532))
{var statearr_9608_9639 = state_9574__$1;(statearr_9608_9639[(1)] = (10));
} else
{var statearr_9609_9640 = state_9574__$1;(statearr_9609_9640[(1)] = (11));
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
});})(c__6245__auto__))
;return ((function (switch__6180__auto__,c__6245__auto__){
return (function() {
var state_machine__6181__auto__ = null;
var state_machine__6181__auto____0 = (function (){var statearr_9613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9613[(0)] = state_machine__6181__auto__);
(statearr_9613[(1)] = (1));
return statearr_9613;
});
var state_machine__6181__auto____1 = (function (state_9574){while(true){
var ret_value__6182__auto__ = (function (){try{while(true){
var result__6183__auto__ = switch__6180__auto__.call(null,state_9574);if(cljs.core.keyword_identical_QMARK_.call(null,result__6183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6183__auto__;
}
break;
}
}catch (e9614){if((e9614 instanceof Object))
{var ex__6184__auto__ = e9614;var statearr_9615_9641 = state_9574;(statearr_9615_9641[(5)] = ex__6184__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9574);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9614;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9642 = state_9574;
state_9574 = G__9642;
continue;
}
} else
{return ret_value__6182__auto__;
}
break;
}
});
state_machine__6181__auto__ = function(state_9574){
switch(arguments.length){
case 0:
return state_machine__6181__auto____0.call(this);
case 1:
return state_machine__6181__auto____1.call(this,state_9574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6181__auto____0;
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6181__auto____1;
return state_machine__6181__auto__;
})()
;})(switch__6180__auto__,c__6245__auto__))
})();var state__6247__auto__ = (function (){var statearr_9616 = f__6246__auto__.call(null);(statearr_9616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6245__auto__);
return statearr_9616;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6247__auto__);
});})(c__6245__auto__))
);
return c__6245__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6245__auto___9737 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6245__auto___9737){
return (function (){var f__6246__auto__ = (function (){var switch__6180__auto__ = ((function (c__6245__auto___9737){
return (function (state_9713){var state_val_9714 = (state_9713[(1)]);if((state_val_9714 === (7)))
{var inst_9709 = (state_9713[(2)]);var state_9713__$1 = state_9713;var statearr_9715_9738 = state_9713__$1;(statearr_9715_9738[(2)] = inst_9709);
(statearr_9715_9738[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9714 === (1)))
{var state_9713__$1 = state_9713;var statearr_9716_9739 = state_9713__$1;(statearr_9716_9739[(2)] = null);
(statearr_9716_9739[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9714 === (4)))
{var inst_9692 = (state_9713[(7)]);var inst_9692__$1 = (state_9713[(2)]);var inst_9693 = (inst_9692__$1 == null);var state_9713__$1 = (function (){var statearr_9717 = state_9713;(statearr_9717[(7)] = inst_9692__$1);
return statearr_9717;
})();if(cljs.core.truth_(inst_9693))
{var statearr_9718_9740 = state_9713__$1;(statearr_9718_9740[(1)] = (5));
} else
{var statearr_9719_9741 = state_9713__$1;(statearr_9719_9741[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9714 === (13)))
{var state_9713__$1 = state_9713;var statearr_9720_9742 = state_9713__$1;(statearr_9720_9742[(2)] = null);
(statearr_9720_9742[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9714 === (6)))
{var inst_9692 = (state_9713[(7)]);var state_9713__$1 = state_9713;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9713__$1,(11),to,inst_9692);
} else
{if((state_val_9714 === (3)))
{var inst_9711 = (state_9713[(2)]);var state_9713__$1 = state_9713;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9713__$1,inst_9711);
} else
{if((state_val_9714 === (12)))
{var state_9713__$1 = state_9713;var statearr_9721_9743 = state_9713__$1;(statearr_9721_9743[(2)] = null);
(statearr_9721_9743[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9714 === (2)))
{var state_9713__$1 = state_9713;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9713__$1,(4),from);
} else
{if((state_val_9714 === (11)))
{var inst_9702 = (state_9713[(2)]);var state_9713__$1 = state_9713;if(cljs.core.truth_(inst_9702))
{var statearr_9722_9744 = state_9713__$1;(statearr_9722_9744[(1)] = (12));
} else
{var statearr_9723_9745 = state_9713__$1;(statearr_9723_9745[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9714 === (9)))
{var state_9713__$1 = state_9713;var statearr_9724_9746 = state_9713__$1;(statearr_9724_9746[(2)] = null);
(statearr_9724_9746[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9714 === (5)))
{var state_9713__$1 = state_9713;if(cljs.core.truth_(close_QMARK_))
{var statearr_9725_9747 = state_9713__$1;(statearr_9725_9747[(1)] = (8));
} else
{var statearr_9726_9748 = state_9713__$1;(statearr_9726_9748[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9714 === (14)))
{var inst_9707 = (state_9713[(2)]);var state_9713__$1 = state_9713;var statearr_9727_9749 = state_9713__$1;(statearr_9727_9749[(2)] = inst_9707);
(statearr_9727_9749[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9714 === (10)))
{var inst_9699 = (state_9713[(2)]);var state_9713__$1 = state_9713;var statearr_9728_9750 = state_9713__$1;(statearr_9728_9750[(2)] = inst_9699);
(statearr_9728_9750[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9714 === (8)))
{var inst_9696 = cljs.core.async.close_BANG_.call(null,to);var state_9713__$1 = state_9713;var statearr_9729_9751 = state_9713__$1;(statearr_9729_9751[(2)] = inst_9696);
(statearr_9729_9751[(1)] = (10));
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
});})(c__6245__auto___9737))
;return ((function (switch__6180__auto__,c__6245__auto___9737){
return (function() {
var state_machine__6181__auto__ = null;
var state_machine__6181__auto____0 = (function (){var statearr_9733 = [null,null,null,null,null,null,null,null];(statearr_9733[(0)] = state_machine__6181__auto__);
(statearr_9733[(1)] = (1));
return statearr_9733;
});
var state_machine__6181__auto____1 = (function (state_9713){while(true){
var ret_value__6182__auto__ = (function (){try{while(true){
var result__6183__auto__ = switch__6180__auto__.call(null,state_9713);if(cljs.core.keyword_identical_QMARK_.call(null,result__6183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6183__auto__;
}
break;
}
}catch (e9734){if((e9734 instanceof Object))
{var ex__6184__auto__ = e9734;var statearr_9735_9752 = state_9713;(statearr_9735_9752[(5)] = ex__6184__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9713);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9734;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9753 = state_9713;
state_9713 = G__9753;
continue;
}
} else
{return ret_value__6182__auto__;
}
break;
}
});
state_machine__6181__auto__ = function(state_9713){
switch(arguments.length){
case 0:
return state_machine__6181__auto____0.call(this);
case 1:
return state_machine__6181__auto____1.call(this,state_9713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6181__auto____0;
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6181__auto____1;
return state_machine__6181__auto__;
})()
;})(switch__6180__auto__,c__6245__auto___9737))
})();var state__6247__auto__ = (function (){var statearr_9736 = f__6246__auto__.call(null);(statearr_9736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6245__auto___9737);
return statearr_9736;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6247__auto__);
});})(c__6245__auto___9737))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6245__auto___9854 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6245__auto___9854,tc,fc){
return (function (){var f__6246__auto__ = (function (){var switch__6180__auto__ = ((function (c__6245__auto___9854,tc,fc){
return (function (state_9829){var state_val_9830 = (state_9829[(1)]);if((state_val_9830 === (7)))
{var inst_9825 = (state_9829[(2)]);var state_9829__$1 = state_9829;var statearr_9831_9855 = state_9829__$1;(statearr_9831_9855[(2)] = inst_9825);
(statearr_9831_9855[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9830 === (1)))
{var state_9829__$1 = state_9829;var statearr_9832_9856 = state_9829__$1;(statearr_9832_9856[(2)] = null);
(statearr_9832_9856[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9830 === (4)))
{var inst_9806 = (state_9829[(7)]);var inst_9806__$1 = (state_9829[(2)]);var inst_9807 = (inst_9806__$1 == null);var state_9829__$1 = (function (){var statearr_9833 = state_9829;(statearr_9833[(7)] = inst_9806__$1);
return statearr_9833;
})();if(cljs.core.truth_(inst_9807))
{var statearr_9834_9857 = state_9829__$1;(statearr_9834_9857[(1)] = (5));
} else
{var statearr_9835_9858 = state_9829__$1;(statearr_9835_9858[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9830 === (13)))
{var state_9829__$1 = state_9829;var statearr_9836_9859 = state_9829__$1;(statearr_9836_9859[(2)] = null);
(statearr_9836_9859[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9830 === (6)))
{var inst_9806 = (state_9829[(7)]);var inst_9812 = p.call(null,inst_9806);var state_9829__$1 = state_9829;if(cljs.core.truth_(inst_9812))
{var statearr_9837_9860 = state_9829__$1;(statearr_9837_9860[(1)] = (9));
} else
{var statearr_9838_9861 = state_9829__$1;(statearr_9838_9861[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9830 === (3)))
{var inst_9827 = (state_9829[(2)]);var state_9829__$1 = state_9829;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9829__$1,inst_9827);
} else
{if((state_val_9830 === (12)))
{var state_9829__$1 = state_9829;var statearr_9839_9862 = state_9829__$1;(statearr_9839_9862[(2)] = null);
(statearr_9839_9862[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9830 === (2)))
{var state_9829__$1 = state_9829;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9829__$1,(4),ch);
} else
{if((state_val_9830 === (11)))
{var inst_9806 = (state_9829[(7)]);var inst_9816 = (state_9829[(2)]);var state_9829__$1 = state_9829;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9829__$1,(8),inst_9816,inst_9806);
} else
{if((state_val_9830 === (9)))
{var state_9829__$1 = state_9829;var statearr_9840_9863 = state_9829__$1;(statearr_9840_9863[(2)] = tc);
(statearr_9840_9863[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9830 === (5)))
{var inst_9809 = cljs.core.async.close_BANG_.call(null,tc);var inst_9810 = cljs.core.async.close_BANG_.call(null,fc);var state_9829__$1 = (function (){var statearr_9841 = state_9829;(statearr_9841[(8)] = inst_9809);
return statearr_9841;
})();var statearr_9842_9864 = state_9829__$1;(statearr_9842_9864[(2)] = inst_9810);
(statearr_9842_9864[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9830 === (14)))
{var inst_9823 = (state_9829[(2)]);var state_9829__$1 = state_9829;var statearr_9843_9865 = state_9829__$1;(statearr_9843_9865[(2)] = inst_9823);
(statearr_9843_9865[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9830 === (10)))
{var state_9829__$1 = state_9829;var statearr_9844_9866 = state_9829__$1;(statearr_9844_9866[(2)] = fc);
(statearr_9844_9866[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9830 === (8)))
{var inst_9818 = (state_9829[(2)]);var state_9829__$1 = state_9829;if(cljs.core.truth_(inst_9818))
{var statearr_9845_9867 = state_9829__$1;(statearr_9845_9867[(1)] = (12));
} else
{var statearr_9846_9868 = state_9829__$1;(statearr_9846_9868[(1)] = (13));
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
});})(c__6245__auto___9854,tc,fc))
;return ((function (switch__6180__auto__,c__6245__auto___9854,tc,fc){
return (function() {
var state_machine__6181__auto__ = null;
var state_machine__6181__auto____0 = (function (){var statearr_9850 = [null,null,null,null,null,null,null,null,null];(statearr_9850[(0)] = state_machine__6181__auto__);
(statearr_9850[(1)] = (1));
return statearr_9850;
});
var state_machine__6181__auto____1 = (function (state_9829){while(true){
var ret_value__6182__auto__ = (function (){try{while(true){
var result__6183__auto__ = switch__6180__auto__.call(null,state_9829);if(cljs.core.keyword_identical_QMARK_.call(null,result__6183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6183__auto__;
}
break;
}
}catch (e9851){if((e9851 instanceof Object))
{var ex__6184__auto__ = e9851;var statearr_9852_9869 = state_9829;(statearr_9852_9869[(5)] = ex__6184__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9829);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9851;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9870 = state_9829;
state_9829 = G__9870;
continue;
}
} else
{return ret_value__6182__auto__;
}
break;
}
});
state_machine__6181__auto__ = function(state_9829){
switch(arguments.length){
case 0:
return state_machine__6181__auto____0.call(this);
case 1:
return state_machine__6181__auto____1.call(this,state_9829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6181__auto____0;
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6181__auto____1;
return state_machine__6181__auto__;
})()
;})(switch__6180__auto__,c__6245__auto___9854,tc,fc))
})();var state__6247__auto__ = (function (){var statearr_9853 = f__6246__auto__.call(null);(statearr_9853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6245__auto___9854);
return statearr_9853;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6247__auto__);
});})(c__6245__auto___9854,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6245__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6245__auto__){
return (function (){var f__6246__auto__ = (function (){var switch__6180__auto__ = ((function (c__6245__auto__){
return (function (state_9917){var state_val_9918 = (state_9917[(1)]);if((state_val_9918 === (7)))
{var inst_9913 = (state_9917[(2)]);var state_9917__$1 = state_9917;var statearr_9919_9935 = state_9917__$1;(statearr_9919_9935[(2)] = inst_9913);
(statearr_9919_9935[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9918 === (6)))
{var inst_9906 = (state_9917[(7)]);var inst_9903 = (state_9917[(8)]);var inst_9910 = f.call(null,inst_9903,inst_9906);var inst_9903__$1 = inst_9910;var state_9917__$1 = (function (){var statearr_9920 = state_9917;(statearr_9920[(8)] = inst_9903__$1);
return statearr_9920;
})();var statearr_9921_9936 = state_9917__$1;(statearr_9921_9936[(2)] = null);
(statearr_9921_9936[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9918 === (5)))
{var inst_9903 = (state_9917[(8)]);var state_9917__$1 = state_9917;var statearr_9922_9937 = state_9917__$1;(statearr_9922_9937[(2)] = inst_9903);
(statearr_9922_9937[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9918 === (4)))
{var inst_9906 = (state_9917[(7)]);var inst_9906__$1 = (state_9917[(2)]);var inst_9907 = (inst_9906__$1 == null);var state_9917__$1 = (function (){var statearr_9923 = state_9917;(statearr_9923[(7)] = inst_9906__$1);
return statearr_9923;
})();if(cljs.core.truth_(inst_9907))
{var statearr_9924_9938 = state_9917__$1;(statearr_9924_9938[(1)] = (5));
} else
{var statearr_9925_9939 = state_9917__$1;(statearr_9925_9939[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9918 === (3)))
{var inst_9915 = (state_9917[(2)]);var state_9917__$1 = state_9917;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9917__$1,inst_9915);
} else
{if((state_val_9918 === (2)))
{var state_9917__$1 = state_9917;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9917__$1,(4),ch);
} else
{if((state_val_9918 === (1)))
{var inst_9903 = init;var state_9917__$1 = (function (){var statearr_9926 = state_9917;(statearr_9926[(8)] = inst_9903);
return statearr_9926;
})();var statearr_9927_9940 = state_9917__$1;(statearr_9927_9940[(2)] = null);
(statearr_9927_9940[(1)] = (2));
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
});})(c__6245__auto__))
;return ((function (switch__6180__auto__,c__6245__auto__){
return (function() {
var state_machine__6181__auto__ = null;
var state_machine__6181__auto____0 = (function (){var statearr_9931 = [null,null,null,null,null,null,null,null,null];(statearr_9931[(0)] = state_machine__6181__auto__);
(statearr_9931[(1)] = (1));
return statearr_9931;
});
var state_machine__6181__auto____1 = (function (state_9917){while(true){
var ret_value__6182__auto__ = (function (){try{while(true){
var result__6183__auto__ = switch__6180__auto__.call(null,state_9917);if(cljs.core.keyword_identical_QMARK_.call(null,result__6183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6183__auto__;
}
break;
}
}catch (e9932){if((e9932 instanceof Object))
{var ex__6184__auto__ = e9932;var statearr_9933_9941 = state_9917;(statearr_9933_9941[(5)] = ex__6184__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9917);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9932;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9942 = state_9917;
state_9917 = G__9942;
continue;
}
} else
{return ret_value__6182__auto__;
}
break;
}
});
state_machine__6181__auto__ = function(state_9917){
switch(arguments.length){
case 0:
return state_machine__6181__auto____0.call(this);
case 1:
return state_machine__6181__auto____1.call(this,state_9917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6181__auto____0;
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6181__auto____1;
return state_machine__6181__auto__;
})()
;})(switch__6180__auto__,c__6245__auto__))
})();var state__6247__auto__ = (function (){var statearr_9934 = f__6246__auto__.call(null);(statearr_9934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6245__auto__);
return statearr_9934;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6247__auto__);
});})(c__6245__auto__))
);
return c__6245__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6245__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6245__auto__){
return (function (){var f__6246__auto__ = (function (){var switch__6180__auto__ = ((function (c__6245__auto__){
return (function (state_10016){var state_val_10017 = (state_10016[(1)]);if((state_val_10017 === (7)))
{var inst_9998 = (state_10016[(2)]);var state_10016__$1 = state_10016;var statearr_10018_10041 = state_10016__$1;(statearr_10018_10041[(2)] = inst_9998);
(statearr_10018_10041[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10017 === (1)))
{var inst_9992 = cljs.core.seq.call(null,coll);var inst_9993 = inst_9992;var state_10016__$1 = (function (){var statearr_10019 = state_10016;(statearr_10019[(7)] = inst_9993);
return statearr_10019;
})();var statearr_10020_10042 = state_10016__$1;(statearr_10020_10042[(2)] = null);
(statearr_10020_10042[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10017 === (4)))
{var inst_9993 = (state_10016[(7)]);var inst_9996 = cljs.core.first.call(null,inst_9993);var state_10016__$1 = state_10016;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10016__$1,(7),ch,inst_9996);
} else
{if((state_val_10017 === (13)))
{var inst_10010 = (state_10016[(2)]);var state_10016__$1 = state_10016;var statearr_10021_10043 = state_10016__$1;(statearr_10021_10043[(2)] = inst_10010);
(statearr_10021_10043[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10017 === (6)))
{var inst_10001 = (state_10016[(2)]);var state_10016__$1 = state_10016;if(cljs.core.truth_(inst_10001))
{var statearr_10022_10044 = state_10016__$1;(statearr_10022_10044[(1)] = (8));
} else
{var statearr_10023_10045 = state_10016__$1;(statearr_10023_10045[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10017 === (3)))
{var inst_10014 = (state_10016[(2)]);var state_10016__$1 = state_10016;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10016__$1,inst_10014);
} else
{if((state_val_10017 === (12)))
{var state_10016__$1 = state_10016;var statearr_10024_10046 = state_10016__$1;(statearr_10024_10046[(2)] = null);
(statearr_10024_10046[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10017 === (2)))
{var inst_9993 = (state_10016[(7)]);var state_10016__$1 = state_10016;if(cljs.core.truth_(inst_9993))
{var statearr_10025_10047 = state_10016__$1;(statearr_10025_10047[(1)] = (4));
} else
{var statearr_10026_10048 = state_10016__$1;(statearr_10026_10048[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10017 === (11)))
{var inst_10007 = cljs.core.async.close_BANG_.call(null,ch);var state_10016__$1 = state_10016;var statearr_10027_10049 = state_10016__$1;(statearr_10027_10049[(2)] = inst_10007);
(statearr_10027_10049[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10017 === (9)))
{var state_10016__$1 = state_10016;if(cljs.core.truth_(close_QMARK_))
{var statearr_10028_10050 = state_10016__$1;(statearr_10028_10050[(1)] = (11));
} else
{var statearr_10029_10051 = state_10016__$1;(statearr_10029_10051[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10017 === (5)))
{var inst_9993 = (state_10016[(7)]);var state_10016__$1 = state_10016;var statearr_10030_10052 = state_10016__$1;(statearr_10030_10052[(2)] = inst_9993);
(statearr_10030_10052[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10017 === (10)))
{var inst_10012 = (state_10016[(2)]);var state_10016__$1 = state_10016;var statearr_10031_10053 = state_10016__$1;(statearr_10031_10053[(2)] = inst_10012);
(statearr_10031_10053[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10017 === (8)))
{var inst_9993 = (state_10016[(7)]);var inst_10003 = cljs.core.next.call(null,inst_9993);var inst_9993__$1 = inst_10003;var state_10016__$1 = (function (){var statearr_10032 = state_10016;(statearr_10032[(7)] = inst_9993__$1);
return statearr_10032;
})();var statearr_10033_10054 = state_10016__$1;(statearr_10033_10054[(2)] = null);
(statearr_10033_10054[(1)] = (2));
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
});})(c__6245__auto__))
;return ((function (switch__6180__auto__,c__6245__auto__){
return (function() {
var state_machine__6181__auto__ = null;
var state_machine__6181__auto____0 = (function (){var statearr_10037 = [null,null,null,null,null,null,null,null];(statearr_10037[(0)] = state_machine__6181__auto__);
(statearr_10037[(1)] = (1));
return statearr_10037;
});
var state_machine__6181__auto____1 = (function (state_10016){while(true){
var ret_value__6182__auto__ = (function (){try{while(true){
var result__6183__auto__ = switch__6180__auto__.call(null,state_10016);if(cljs.core.keyword_identical_QMARK_.call(null,result__6183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6183__auto__;
}
break;
}
}catch (e10038){if((e10038 instanceof Object))
{var ex__6184__auto__ = e10038;var statearr_10039_10055 = state_10016;(statearr_10039_10055[(5)] = ex__6184__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10016);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10038;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10056 = state_10016;
state_10016 = G__10056;
continue;
}
} else
{return ret_value__6182__auto__;
}
break;
}
});
state_machine__6181__auto__ = function(state_10016){
switch(arguments.length){
case 0:
return state_machine__6181__auto____0.call(this);
case 1:
return state_machine__6181__auto____1.call(this,state_10016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6181__auto____0;
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6181__auto____1;
return state_machine__6181__auto__;
})()
;})(switch__6180__auto__,c__6245__auto__))
})();var state__6247__auto__ = (function (){var statearr_10040 = f__6246__auto__.call(null);(statearr_10040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6245__auto__);
return statearr_10040;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6247__auto__);
});})(c__6245__auto__))
);
return c__6245__auto__;
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
cljs.core.async.Mux = (function (){var obj10058 = {};return obj10058;
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
cljs.core.async.Mult = (function (){var obj10060 = {};return obj10060;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10282 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10282 = (function (cs,ch,mult,meta10283){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10283 = meta10283;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10282.cljs$lang$type = true;
cljs.core.async.t10282.cljs$lang$ctorStr = "cljs.core.async/t10282";
cljs.core.async.t10282.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t10282");
});})(cs))
;
cljs.core.async.t10282.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10282.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10282.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10282.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10282.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10282.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10282.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10284){var self__ = this;
var _10284__$1 = this;return self__.meta10283;
});})(cs))
;
cljs.core.async.t10282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10284,meta10283__$1){var self__ = this;
var _10284__$1 = this;return (new cljs.core.async.t10282(self__.cs,self__.ch,self__.mult,meta10283__$1));
});})(cs))
;
cljs.core.async.__GT_t10282 = ((function (cs){
return (function __GT_t10282(cs__$1,ch__$1,mult__$1,meta10283){return (new cljs.core.async.t10282(cs__$1,ch__$1,mult__$1,meta10283));
});})(cs))
;
}
return (new cljs.core.async.t10282(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6245__auto___10503 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6245__auto___10503,cs,m,dchan,dctr,done){
return (function (){var f__6246__auto__ = (function (){var switch__6180__auto__ = ((function (c__6245__auto___10503,cs,m,dchan,dctr,done){
return (function (state_10415){var state_val_10416 = (state_10415[(1)]);if((state_val_10416 === (7)))
{var inst_10411 = (state_10415[(2)]);var state_10415__$1 = state_10415;var statearr_10417_10504 = state_10415__$1;(statearr_10417_10504[(2)] = inst_10411);
(statearr_10417_10504[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (20)))
{var inst_10316 = (state_10415[(7)]);var inst_10326 = cljs.core.first.call(null,inst_10316);var inst_10327 = cljs.core.nth.call(null,inst_10326,(0),null);var inst_10328 = cljs.core.nth.call(null,inst_10326,(1),null);var state_10415__$1 = (function (){var statearr_10418 = state_10415;(statearr_10418[(8)] = inst_10327);
return statearr_10418;
})();if(cljs.core.truth_(inst_10328))
{var statearr_10419_10505 = state_10415__$1;(statearr_10419_10505[(1)] = (22));
} else
{var statearr_10420_10506 = state_10415__$1;(statearr_10420_10506[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (27)))
{var inst_10287 = (state_10415[(9)]);var inst_10356 = (state_10415[(10)]);var inst_10363 = (state_10415[(11)]);var inst_10358 = (state_10415[(12)]);var inst_10363__$1 = cljs.core._nth.call(null,inst_10356,inst_10358);var inst_10364 = cljs.core.async.put_BANG_.call(null,inst_10363__$1,inst_10287,done);var state_10415__$1 = (function (){var statearr_10421 = state_10415;(statearr_10421[(11)] = inst_10363__$1);
return statearr_10421;
})();if(cljs.core.truth_(inst_10364))
{var statearr_10422_10507 = state_10415__$1;(statearr_10422_10507[(1)] = (30));
} else
{var statearr_10423_10508 = state_10415__$1;(statearr_10423_10508[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (1)))
{var state_10415__$1 = state_10415;var statearr_10424_10509 = state_10415__$1;(statearr_10424_10509[(2)] = null);
(statearr_10424_10509[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (24)))
{var inst_10316 = (state_10415[(7)]);var inst_10333 = (state_10415[(2)]);var inst_10334 = cljs.core.next.call(null,inst_10316);var inst_10296 = inst_10334;var inst_10297 = null;var inst_10298 = (0);var inst_10299 = (0);var state_10415__$1 = (function (){var statearr_10425 = state_10415;(statearr_10425[(13)] = inst_10297);
(statearr_10425[(14)] = inst_10296);
(statearr_10425[(15)] = inst_10299);
(statearr_10425[(16)] = inst_10333);
(statearr_10425[(17)] = inst_10298);
return statearr_10425;
})();var statearr_10426_10510 = state_10415__$1;(statearr_10426_10510[(2)] = null);
(statearr_10426_10510[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (39)))
{var state_10415__$1 = state_10415;var statearr_10430_10511 = state_10415__$1;(statearr_10430_10511[(2)] = null);
(statearr_10430_10511[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (4)))
{var inst_10287 = (state_10415[(9)]);var inst_10287__$1 = (state_10415[(2)]);var inst_10288 = (inst_10287__$1 == null);var state_10415__$1 = (function (){var statearr_10431 = state_10415;(statearr_10431[(9)] = inst_10287__$1);
return statearr_10431;
})();if(cljs.core.truth_(inst_10288))
{var statearr_10432_10512 = state_10415__$1;(statearr_10432_10512[(1)] = (5));
} else
{var statearr_10433_10513 = state_10415__$1;(statearr_10433_10513[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (15)))
{var inst_10297 = (state_10415[(13)]);var inst_10296 = (state_10415[(14)]);var inst_10299 = (state_10415[(15)]);var inst_10298 = (state_10415[(17)]);var inst_10312 = (state_10415[(2)]);var inst_10313 = (inst_10299 + (1));var tmp10427 = inst_10297;var tmp10428 = inst_10296;var tmp10429 = inst_10298;var inst_10296__$1 = tmp10428;var inst_10297__$1 = tmp10427;var inst_10298__$1 = tmp10429;var inst_10299__$1 = inst_10313;var state_10415__$1 = (function (){var statearr_10434 = state_10415;(statearr_10434[(13)] = inst_10297__$1);
(statearr_10434[(18)] = inst_10312);
(statearr_10434[(14)] = inst_10296__$1);
(statearr_10434[(15)] = inst_10299__$1);
(statearr_10434[(17)] = inst_10298__$1);
return statearr_10434;
})();var statearr_10435_10514 = state_10415__$1;(statearr_10435_10514[(2)] = null);
(statearr_10435_10514[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (21)))
{var inst_10337 = (state_10415[(2)]);var state_10415__$1 = state_10415;var statearr_10439_10515 = state_10415__$1;(statearr_10439_10515[(2)] = inst_10337);
(statearr_10439_10515[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (31)))
{var inst_10363 = (state_10415[(11)]);var inst_10367 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10368 = cljs.core.async.untap_STAR_.call(null,m,inst_10363);var state_10415__$1 = (function (){var statearr_10440 = state_10415;(statearr_10440[(19)] = inst_10367);
return statearr_10440;
})();var statearr_10441_10516 = state_10415__$1;(statearr_10441_10516[(2)] = inst_10368);
(statearr_10441_10516[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (32)))
{var inst_10357 = (state_10415[(20)]);var inst_10356 = (state_10415[(10)]);var inst_10358 = (state_10415[(12)]);var inst_10355 = (state_10415[(21)]);var inst_10370 = (state_10415[(2)]);var inst_10371 = (inst_10358 + (1));var tmp10436 = inst_10357;var tmp10437 = inst_10356;var tmp10438 = inst_10355;var inst_10355__$1 = tmp10438;var inst_10356__$1 = tmp10437;var inst_10357__$1 = tmp10436;var inst_10358__$1 = inst_10371;var state_10415__$1 = (function (){var statearr_10442 = state_10415;(statearr_10442[(22)] = inst_10370);
(statearr_10442[(20)] = inst_10357__$1);
(statearr_10442[(10)] = inst_10356__$1);
(statearr_10442[(12)] = inst_10358__$1);
(statearr_10442[(21)] = inst_10355__$1);
return statearr_10442;
})();var statearr_10443_10517 = state_10415__$1;(statearr_10443_10517[(2)] = null);
(statearr_10443_10517[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (40)))
{var inst_10383 = (state_10415[(23)]);var inst_10387 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10388 = cljs.core.async.untap_STAR_.call(null,m,inst_10383);var state_10415__$1 = (function (){var statearr_10444 = state_10415;(statearr_10444[(24)] = inst_10387);
return statearr_10444;
})();var statearr_10445_10518 = state_10415__$1;(statearr_10445_10518[(2)] = inst_10388);
(statearr_10445_10518[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (33)))
{var inst_10374 = (state_10415[(25)]);var inst_10376 = cljs.core.chunked_seq_QMARK_.call(null,inst_10374);var state_10415__$1 = state_10415;if(inst_10376)
{var statearr_10446_10519 = state_10415__$1;(statearr_10446_10519[(1)] = (36));
} else
{var statearr_10447_10520 = state_10415__$1;(statearr_10447_10520[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (13)))
{var inst_10306 = (state_10415[(26)]);var inst_10309 = cljs.core.async.close_BANG_.call(null,inst_10306);var state_10415__$1 = state_10415;var statearr_10448_10521 = state_10415__$1;(statearr_10448_10521[(2)] = inst_10309);
(statearr_10448_10521[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (22)))
{var inst_10327 = (state_10415[(8)]);var inst_10330 = cljs.core.async.close_BANG_.call(null,inst_10327);var state_10415__$1 = state_10415;var statearr_10449_10522 = state_10415__$1;(statearr_10449_10522[(2)] = inst_10330);
(statearr_10449_10522[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (36)))
{var inst_10374 = (state_10415[(25)]);var inst_10378 = cljs.core.chunk_first.call(null,inst_10374);var inst_10379 = cljs.core.chunk_rest.call(null,inst_10374);var inst_10380 = cljs.core.count.call(null,inst_10378);var inst_10355 = inst_10379;var inst_10356 = inst_10378;var inst_10357 = inst_10380;var inst_10358 = (0);var state_10415__$1 = (function (){var statearr_10450 = state_10415;(statearr_10450[(20)] = inst_10357);
(statearr_10450[(10)] = inst_10356);
(statearr_10450[(12)] = inst_10358);
(statearr_10450[(21)] = inst_10355);
return statearr_10450;
})();var statearr_10451_10523 = state_10415__$1;(statearr_10451_10523[(2)] = null);
(statearr_10451_10523[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (41)))
{var inst_10374 = (state_10415[(25)]);var inst_10390 = (state_10415[(2)]);var inst_10391 = cljs.core.next.call(null,inst_10374);var inst_10355 = inst_10391;var inst_10356 = null;var inst_10357 = (0);var inst_10358 = (0);var state_10415__$1 = (function (){var statearr_10452 = state_10415;(statearr_10452[(20)] = inst_10357);
(statearr_10452[(10)] = inst_10356);
(statearr_10452[(12)] = inst_10358);
(statearr_10452[(27)] = inst_10390);
(statearr_10452[(21)] = inst_10355);
return statearr_10452;
})();var statearr_10453_10524 = state_10415__$1;(statearr_10453_10524[(2)] = null);
(statearr_10453_10524[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (43)))
{var state_10415__$1 = state_10415;var statearr_10454_10525 = state_10415__$1;(statearr_10454_10525[(2)] = null);
(statearr_10454_10525[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (29)))
{var inst_10399 = (state_10415[(2)]);var state_10415__$1 = state_10415;var statearr_10455_10526 = state_10415__$1;(statearr_10455_10526[(2)] = inst_10399);
(statearr_10455_10526[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (44)))
{var inst_10408 = (state_10415[(2)]);var state_10415__$1 = (function (){var statearr_10456 = state_10415;(statearr_10456[(28)] = inst_10408);
return statearr_10456;
})();var statearr_10457_10527 = state_10415__$1;(statearr_10457_10527[(2)] = null);
(statearr_10457_10527[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (6)))
{var inst_10347 = (state_10415[(29)]);var inst_10346 = cljs.core.deref.call(null,cs);var inst_10347__$1 = cljs.core.keys.call(null,inst_10346);var inst_10348 = cljs.core.count.call(null,inst_10347__$1);var inst_10349 = cljs.core.reset_BANG_.call(null,dctr,inst_10348);var inst_10354 = cljs.core.seq.call(null,inst_10347__$1);var inst_10355 = inst_10354;var inst_10356 = null;var inst_10357 = (0);var inst_10358 = (0);var state_10415__$1 = (function (){var statearr_10458 = state_10415;(statearr_10458[(20)] = inst_10357);
(statearr_10458[(10)] = inst_10356);
(statearr_10458[(12)] = inst_10358);
(statearr_10458[(30)] = inst_10349);
(statearr_10458[(21)] = inst_10355);
(statearr_10458[(29)] = inst_10347__$1);
return statearr_10458;
})();var statearr_10459_10528 = state_10415__$1;(statearr_10459_10528[(2)] = null);
(statearr_10459_10528[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (28)))
{var inst_10374 = (state_10415[(25)]);var inst_10355 = (state_10415[(21)]);var inst_10374__$1 = cljs.core.seq.call(null,inst_10355);var state_10415__$1 = (function (){var statearr_10460 = state_10415;(statearr_10460[(25)] = inst_10374__$1);
return statearr_10460;
})();if(inst_10374__$1)
{var statearr_10461_10529 = state_10415__$1;(statearr_10461_10529[(1)] = (33));
} else
{var statearr_10462_10530 = state_10415__$1;(statearr_10462_10530[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (25)))
{var inst_10357 = (state_10415[(20)]);var inst_10358 = (state_10415[(12)]);var inst_10360 = (inst_10358 < inst_10357);var inst_10361 = inst_10360;var state_10415__$1 = state_10415;if(cljs.core.truth_(inst_10361))
{var statearr_10463_10531 = state_10415__$1;(statearr_10463_10531[(1)] = (27));
} else
{var statearr_10464_10532 = state_10415__$1;(statearr_10464_10532[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (34)))
{var state_10415__$1 = state_10415;var statearr_10465_10533 = state_10415__$1;(statearr_10465_10533[(2)] = null);
(statearr_10465_10533[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (17)))
{var state_10415__$1 = state_10415;var statearr_10466_10534 = state_10415__$1;(statearr_10466_10534[(2)] = null);
(statearr_10466_10534[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (3)))
{var inst_10413 = (state_10415[(2)]);var state_10415__$1 = state_10415;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10415__$1,inst_10413);
} else
{if((state_val_10416 === (12)))
{var inst_10342 = (state_10415[(2)]);var state_10415__$1 = state_10415;var statearr_10467_10535 = state_10415__$1;(statearr_10467_10535[(2)] = inst_10342);
(statearr_10467_10535[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (2)))
{var state_10415__$1 = state_10415;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10415__$1,(4),ch);
} else
{if((state_val_10416 === (23)))
{var state_10415__$1 = state_10415;var statearr_10468_10536 = state_10415__$1;(statearr_10468_10536[(2)] = null);
(statearr_10468_10536[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (35)))
{var inst_10397 = (state_10415[(2)]);var state_10415__$1 = state_10415;var statearr_10469_10537 = state_10415__$1;(statearr_10469_10537[(2)] = inst_10397);
(statearr_10469_10537[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (19)))
{var inst_10316 = (state_10415[(7)]);var inst_10320 = cljs.core.chunk_first.call(null,inst_10316);var inst_10321 = cljs.core.chunk_rest.call(null,inst_10316);var inst_10322 = cljs.core.count.call(null,inst_10320);var inst_10296 = inst_10321;var inst_10297 = inst_10320;var inst_10298 = inst_10322;var inst_10299 = (0);var state_10415__$1 = (function (){var statearr_10470 = state_10415;(statearr_10470[(13)] = inst_10297);
(statearr_10470[(14)] = inst_10296);
(statearr_10470[(15)] = inst_10299);
(statearr_10470[(17)] = inst_10298);
return statearr_10470;
})();var statearr_10471_10538 = state_10415__$1;(statearr_10471_10538[(2)] = null);
(statearr_10471_10538[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (11)))
{var inst_10316 = (state_10415[(7)]);var inst_10296 = (state_10415[(14)]);var inst_10316__$1 = cljs.core.seq.call(null,inst_10296);var state_10415__$1 = (function (){var statearr_10472 = state_10415;(statearr_10472[(7)] = inst_10316__$1);
return statearr_10472;
})();if(inst_10316__$1)
{var statearr_10473_10539 = state_10415__$1;(statearr_10473_10539[(1)] = (16));
} else
{var statearr_10474_10540 = state_10415__$1;(statearr_10474_10540[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (9)))
{var inst_10344 = (state_10415[(2)]);var state_10415__$1 = state_10415;var statearr_10475_10541 = state_10415__$1;(statearr_10475_10541[(2)] = inst_10344);
(statearr_10475_10541[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (5)))
{var inst_10294 = cljs.core.deref.call(null,cs);var inst_10295 = cljs.core.seq.call(null,inst_10294);var inst_10296 = inst_10295;var inst_10297 = null;var inst_10298 = (0);var inst_10299 = (0);var state_10415__$1 = (function (){var statearr_10476 = state_10415;(statearr_10476[(13)] = inst_10297);
(statearr_10476[(14)] = inst_10296);
(statearr_10476[(15)] = inst_10299);
(statearr_10476[(17)] = inst_10298);
return statearr_10476;
})();var statearr_10477_10542 = state_10415__$1;(statearr_10477_10542[(2)] = null);
(statearr_10477_10542[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (14)))
{var state_10415__$1 = state_10415;var statearr_10478_10543 = state_10415__$1;(statearr_10478_10543[(2)] = null);
(statearr_10478_10543[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (45)))
{var inst_10405 = (state_10415[(2)]);var state_10415__$1 = state_10415;var statearr_10479_10544 = state_10415__$1;(statearr_10479_10544[(2)] = inst_10405);
(statearr_10479_10544[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (26)))
{var inst_10347 = (state_10415[(29)]);var inst_10401 = (state_10415[(2)]);var inst_10402 = cljs.core.seq.call(null,inst_10347);var state_10415__$1 = (function (){var statearr_10480 = state_10415;(statearr_10480[(31)] = inst_10401);
return statearr_10480;
})();if(inst_10402)
{var statearr_10481_10545 = state_10415__$1;(statearr_10481_10545[(1)] = (42));
} else
{var statearr_10482_10546 = state_10415__$1;(statearr_10482_10546[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (16)))
{var inst_10316 = (state_10415[(7)]);var inst_10318 = cljs.core.chunked_seq_QMARK_.call(null,inst_10316);var state_10415__$1 = state_10415;if(inst_10318)
{var statearr_10483_10547 = state_10415__$1;(statearr_10483_10547[(1)] = (19));
} else
{var statearr_10484_10548 = state_10415__$1;(statearr_10484_10548[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (38)))
{var inst_10394 = (state_10415[(2)]);var state_10415__$1 = state_10415;var statearr_10485_10549 = state_10415__$1;(statearr_10485_10549[(2)] = inst_10394);
(statearr_10485_10549[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (30)))
{var state_10415__$1 = state_10415;var statearr_10486_10550 = state_10415__$1;(statearr_10486_10550[(2)] = null);
(statearr_10486_10550[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (10)))
{var inst_10297 = (state_10415[(13)]);var inst_10299 = (state_10415[(15)]);var inst_10305 = cljs.core._nth.call(null,inst_10297,inst_10299);var inst_10306 = cljs.core.nth.call(null,inst_10305,(0),null);var inst_10307 = cljs.core.nth.call(null,inst_10305,(1),null);var state_10415__$1 = (function (){var statearr_10487 = state_10415;(statearr_10487[(26)] = inst_10306);
return statearr_10487;
})();if(cljs.core.truth_(inst_10307))
{var statearr_10488_10551 = state_10415__$1;(statearr_10488_10551[(1)] = (13));
} else
{var statearr_10489_10552 = state_10415__$1;(statearr_10489_10552[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (18)))
{var inst_10340 = (state_10415[(2)]);var state_10415__$1 = state_10415;var statearr_10490_10553 = state_10415__$1;(statearr_10490_10553[(2)] = inst_10340);
(statearr_10490_10553[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (42)))
{var state_10415__$1 = state_10415;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10415__$1,(45),dchan);
} else
{if((state_val_10416 === (37)))
{var inst_10374 = (state_10415[(25)]);var inst_10287 = (state_10415[(9)]);var inst_10383 = (state_10415[(23)]);var inst_10383__$1 = cljs.core.first.call(null,inst_10374);var inst_10384 = cljs.core.async.put_BANG_.call(null,inst_10383__$1,inst_10287,done);var state_10415__$1 = (function (){var statearr_10491 = state_10415;(statearr_10491[(23)] = inst_10383__$1);
return statearr_10491;
})();if(cljs.core.truth_(inst_10384))
{var statearr_10492_10554 = state_10415__$1;(statearr_10492_10554[(1)] = (39));
} else
{var statearr_10493_10555 = state_10415__$1;(statearr_10493_10555[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10416 === (8)))
{var inst_10299 = (state_10415[(15)]);var inst_10298 = (state_10415[(17)]);var inst_10301 = (inst_10299 < inst_10298);var inst_10302 = inst_10301;var state_10415__$1 = state_10415;if(cljs.core.truth_(inst_10302))
{var statearr_10494_10556 = state_10415__$1;(statearr_10494_10556[(1)] = (10));
} else
{var statearr_10495_10557 = state_10415__$1;(statearr_10495_10557[(1)] = (11));
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
});})(c__6245__auto___10503,cs,m,dchan,dctr,done))
;return ((function (switch__6180__auto__,c__6245__auto___10503,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6181__auto__ = null;
var state_machine__6181__auto____0 = (function (){var statearr_10499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10499[(0)] = state_machine__6181__auto__);
(statearr_10499[(1)] = (1));
return statearr_10499;
});
var state_machine__6181__auto____1 = (function (state_10415){while(true){
var ret_value__6182__auto__ = (function (){try{while(true){
var result__6183__auto__ = switch__6180__auto__.call(null,state_10415);if(cljs.core.keyword_identical_QMARK_.call(null,result__6183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6183__auto__;
}
break;
}
}catch (e10500){if((e10500 instanceof Object))
{var ex__6184__auto__ = e10500;var statearr_10501_10558 = state_10415;(statearr_10501_10558[(5)] = ex__6184__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10415);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10500;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10559 = state_10415;
state_10415 = G__10559;
continue;
}
} else
{return ret_value__6182__auto__;
}
break;
}
});
state_machine__6181__auto__ = function(state_10415){
switch(arguments.length){
case 0:
return state_machine__6181__auto____0.call(this);
case 1:
return state_machine__6181__auto____1.call(this,state_10415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6181__auto____0;
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6181__auto____1;
return state_machine__6181__auto__;
})()
;})(switch__6180__auto__,c__6245__auto___10503,cs,m,dchan,dctr,done))
})();var state__6247__auto__ = (function (){var statearr_10502 = f__6246__auto__.call(null);(statearr_10502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6245__auto___10503);
return statearr_10502;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6247__auto__);
});})(c__6245__auto___10503,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj10561 = {};return obj10561;
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
;var m = (function (){if(typeof cljs.core.async.t10681 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10681 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10682){
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
this.meta10682 = meta10682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10681.cljs$lang$type = true;
cljs.core.async.t10681.cljs$lang$ctorStr = "cljs.core.async/t10681";
cljs.core.async.t10681.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t10681");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10681.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t10681.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10681.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10681.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10681.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10681.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10681.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10681.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10683){var self__ = this;
var _10683__$1 = this;return self__.meta10682;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10683,meta10682__$1){var self__ = this;
var _10683__$1 = this;return (new cljs.core.async.t10681(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10682__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t10681 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t10681(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10682){return (new cljs.core.async.t10681(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10682));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t10681(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6245__auto___10800 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6245__auto___10800,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6246__auto__ = (function (){var switch__6180__auto__ = ((function (c__6245__auto___10800,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_10753){var state_val_10754 = (state_10753[(1)]);if((state_val_10754 === (7)))
{var inst_10697 = (state_10753[(7)]);var inst_10702 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10697);var state_10753__$1 = state_10753;var statearr_10755_10801 = state_10753__$1;(statearr_10755_10801[(2)] = inst_10702);
(statearr_10755_10801[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10754 === (20)))
{var inst_10712 = (state_10753[(8)]);var state_10753__$1 = state_10753;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10753__$1,(23),out,inst_10712);
} else
{if((state_val_10754 === (1)))
{var inst_10687 = (state_10753[(9)]);var inst_10687__$1 = calc_state.call(null);var inst_10688 = cljs.core.seq_QMARK_.call(null,inst_10687__$1);var state_10753__$1 = (function (){var statearr_10756 = state_10753;(statearr_10756[(9)] = inst_10687__$1);
return statearr_10756;
})();if(inst_10688)
{var statearr_10757_10802 = state_10753__$1;(statearr_10757_10802[(1)] = (2));
} else
{var statearr_10758_10803 = state_10753__$1;(statearr_10758_10803[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10754 === (24)))
{var inst_10705 = (state_10753[(10)]);var inst_10697 = inst_10705;var state_10753__$1 = (function (){var statearr_10759 = state_10753;(statearr_10759[(7)] = inst_10697);
return statearr_10759;
})();var statearr_10760_10804 = state_10753__$1;(statearr_10760_10804[(2)] = null);
(statearr_10760_10804[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10754 === (4)))
{var inst_10687 = (state_10753[(9)]);var inst_10693 = (state_10753[(2)]);var inst_10694 = cljs.core.get.call(null,inst_10693,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_10695 = cljs.core.get.call(null,inst_10693,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_10696 = cljs.core.get.call(null,inst_10693,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_10697 = inst_10687;var state_10753__$1 = (function (){var statearr_10761 = state_10753;(statearr_10761[(11)] = inst_10696);
(statearr_10761[(7)] = inst_10697);
(statearr_10761[(12)] = inst_10694);
(statearr_10761[(13)] = inst_10695);
return statearr_10761;
})();var statearr_10762_10805 = state_10753__$1;(statearr_10762_10805[(2)] = null);
(statearr_10762_10805[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10754 === (15)))
{var state_10753__$1 = state_10753;var statearr_10763_10806 = state_10753__$1;(statearr_10763_10806[(2)] = null);
(statearr_10763_10806[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10754 === (21)))
{var inst_10705 = (state_10753[(10)]);var inst_10697 = inst_10705;var state_10753__$1 = (function (){var statearr_10764 = state_10753;(statearr_10764[(7)] = inst_10697);
return statearr_10764;
})();var statearr_10765_10807 = state_10753__$1;(statearr_10765_10807[(2)] = null);
(statearr_10765_10807[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10754 === (13)))
{var inst_10749 = (state_10753[(2)]);var state_10753__$1 = state_10753;var statearr_10766_10808 = state_10753__$1;(statearr_10766_10808[(2)] = inst_10749);
(statearr_10766_10808[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10754 === (22)))
{var inst_10747 = (state_10753[(2)]);var state_10753__$1 = state_10753;var statearr_10767_10809 = state_10753__$1;(statearr_10767_10809[(2)] = inst_10747);
(statearr_10767_10809[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10754 === (6)))
{var inst_10751 = (state_10753[(2)]);var state_10753__$1 = state_10753;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10753__$1,inst_10751);
} else
{if((state_val_10754 === (25)))
{var state_10753__$1 = state_10753;var statearr_10768_10810 = state_10753__$1;(statearr_10768_10810[(2)] = null);
(statearr_10768_10810[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10754 === (17)))
{var inst_10727 = (state_10753[(14)]);var state_10753__$1 = state_10753;var statearr_10769_10811 = state_10753__$1;(statearr_10769_10811[(2)] = inst_10727);
(statearr_10769_10811[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10754 === (3)))
{var inst_10687 = (state_10753[(9)]);var state_10753__$1 = state_10753;var statearr_10770_10812 = state_10753__$1;(statearr_10770_10812[(2)] = inst_10687);
(statearr_10770_10812[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10754 === (12)))
{var inst_10713 = (state_10753[(15)]);var inst_10708 = (state_10753[(16)]);var inst_10727 = (state_10753[(14)]);var inst_10727__$1 = inst_10708.call(null,inst_10713);var state_10753__$1 = (function (){var statearr_10771 = state_10753;(statearr_10771[(14)] = inst_10727__$1);
return statearr_10771;
})();if(cljs.core.truth_(inst_10727__$1))
{var statearr_10772_10813 = state_10753__$1;(statearr_10772_10813[(1)] = (17));
} else
{var statearr_10773_10814 = state_10753__$1;(statearr_10773_10814[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10754 === (2)))
{var inst_10687 = (state_10753[(9)]);var inst_10690 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10687);var state_10753__$1 = state_10753;var statearr_10774_10815 = state_10753__$1;(statearr_10774_10815[(2)] = inst_10690);
(statearr_10774_10815[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10754 === (23)))
{var inst_10738 = (state_10753[(2)]);var state_10753__$1 = state_10753;if(cljs.core.truth_(inst_10738))
{var statearr_10775_10816 = state_10753__$1;(statearr_10775_10816[(1)] = (24));
} else
{var statearr_10776_10817 = state_10753__$1;(statearr_10776_10817[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10754 === (19)))
{var inst_10735 = (state_10753[(2)]);var state_10753__$1 = state_10753;if(cljs.core.truth_(inst_10735))
{var statearr_10777_10818 = state_10753__$1;(statearr_10777_10818[(1)] = (20));
} else
{var statearr_10778_10819 = state_10753__$1;(statearr_10778_10819[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10754 === (11)))
{var inst_10712 = (state_10753[(8)]);var inst_10718 = (inst_10712 == null);var state_10753__$1 = state_10753;if(cljs.core.truth_(inst_10718))
{var statearr_10779_10820 = state_10753__$1;(statearr_10779_10820[(1)] = (14));
} else
{var statearr_10780_10821 = state_10753__$1;(statearr_10780_10821[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10754 === (9)))
{var inst_10705 = (state_10753[(10)]);var inst_10705__$1 = (state_10753[(2)]);var inst_10706 = cljs.core.get.call(null,inst_10705__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_10707 = cljs.core.get.call(null,inst_10705__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_10708 = cljs.core.get.call(null,inst_10705__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_10753__$1 = (function (){var statearr_10781 = state_10753;(statearr_10781[(17)] = inst_10707);
(statearr_10781[(16)] = inst_10708);
(statearr_10781[(10)] = inst_10705__$1);
return statearr_10781;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10753__$1,(10),inst_10706);
} else
{if((state_val_10754 === (5)))
{var inst_10697 = (state_10753[(7)]);var inst_10700 = cljs.core.seq_QMARK_.call(null,inst_10697);var state_10753__$1 = state_10753;if(inst_10700)
{var statearr_10782_10822 = state_10753__$1;(statearr_10782_10822[(1)] = (7));
} else
{var statearr_10783_10823 = state_10753__$1;(statearr_10783_10823[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10754 === (14)))
{var inst_10713 = (state_10753[(15)]);var inst_10720 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10713);var state_10753__$1 = state_10753;var statearr_10784_10824 = state_10753__$1;(statearr_10784_10824[(2)] = inst_10720);
(statearr_10784_10824[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10754 === (26)))
{var inst_10743 = (state_10753[(2)]);var state_10753__$1 = state_10753;var statearr_10785_10825 = state_10753__$1;(statearr_10785_10825[(2)] = inst_10743);
(statearr_10785_10825[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10754 === (16)))
{var inst_10723 = (state_10753[(2)]);var inst_10724 = calc_state.call(null);var inst_10697 = inst_10724;var state_10753__$1 = (function (){var statearr_10786 = state_10753;(statearr_10786[(18)] = inst_10723);
(statearr_10786[(7)] = inst_10697);
return statearr_10786;
})();var statearr_10787_10826 = state_10753__$1;(statearr_10787_10826[(2)] = null);
(statearr_10787_10826[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10754 === (10)))
{var inst_10713 = (state_10753[(15)]);var inst_10712 = (state_10753[(8)]);var inst_10711 = (state_10753[(2)]);var inst_10712__$1 = cljs.core.nth.call(null,inst_10711,(0),null);var inst_10713__$1 = cljs.core.nth.call(null,inst_10711,(1),null);var inst_10714 = (inst_10712__$1 == null);var inst_10715 = cljs.core._EQ_.call(null,inst_10713__$1,change);var inst_10716 = (inst_10714) || (inst_10715);var state_10753__$1 = (function (){var statearr_10788 = state_10753;(statearr_10788[(15)] = inst_10713__$1);
(statearr_10788[(8)] = inst_10712__$1);
return statearr_10788;
})();if(cljs.core.truth_(inst_10716))
{var statearr_10789_10827 = state_10753__$1;(statearr_10789_10827[(1)] = (11));
} else
{var statearr_10790_10828 = state_10753__$1;(statearr_10790_10828[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10754 === (18)))
{var inst_10713 = (state_10753[(15)]);var inst_10707 = (state_10753[(17)]);var inst_10708 = (state_10753[(16)]);var inst_10730 = cljs.core.empty_QMARK_.call(null,inst_10708);var inst_10731 = inst_10707.call(null,inst_10713);var inst_10732 = cljs.core.not.call(null,inst_10731);var inst_10733 = (inst_10730) && (inst_10732);var state_10753__$1 = state_10753;var statearr_10791_10829 = state_10753__$1;(statearr_10791_10829[(2)] = inst_10733);
(statearr_10791_10829[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10754 === (8)))
{var inst_10697 = (state_10753[(7)]);var state_10753__$1 = state_10753;var statearr_10792_10830 = state_10753__$1;(statearr_10792_10830[(2)] = inst_10697);
(statearr_10792_10830[(1)] = (9));
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
});})(c__6245__auto___10800,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6180__auto__,c__6245__auto___10800,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6181__auto__ = null;
var state_machine__6181__auto____0 = (function (){var statearr_10796 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10796[(0)] = state_machine__6181__auto__);
(statearr_10796[(1)] = (1));
return statearr_10796;
});
var state_machine__6181__auto____1 = (function (state_10753){while(true){
var ret_value__6182__auto__ = (function (){try{while(true){
var result__6183__auto__ = switch__6180__auto__.call(null,state_10753);if(cljs.core.keyword_identical_QMARK_.call(null,result__6183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6183__auto__;
}
break;
}
}catch (e10797){if((e10797 instanceof Object))
{var ex__6184__auto__ = e10797;var statearr_10798_10831 = state_10753;(statearr_10798_10831[(5)] = ex__6184__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10753);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10797;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10832 = state_10753;
state_10753 = G__10832;
continue;
}
} else
{return ret_value__6182__auto__;
}
break;
}
});
state_machine__6181__auto__ = function(state_10753){
switch(arguments.length){
case 0:
return state_machine__6181__auto____0.call(this);
case 1:
return state_machine__6181__auto____1.call(this,state_10753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6181__auto____0;
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6181__auto____1;
return state_machine__6181__auto__;
})()
;})(switch__6180__auto__,c__6245__auto___10800,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6247__auto__ = (function (){var statearr_10799 = f__6246__auto__.call(null);(statearr_10799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6245__auto___10800);
return statearr_10799;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6247__auto__);
});})(c__6245__auto___10800,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj10834 = {};return obj10834;
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
return (function (p1__10835_SHARP_){if(cljs.core.truth_(p1__10835_SHARP_.call(null,topic)))
{return p1__10835_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__10835_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t10958 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10958 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta10959){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta10959 = meta10959;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10958.cljs$lang$type = true;
cljs.core.async.t10958.cljs$lang$ctorStr = "cljs.core.async/t10958";
cljs.core.async.t10958.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t10958");
});})(mults,ensure_mult))
;
cljs.core.async.t10958.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t10958.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t10958.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t10958.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t10958.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t10958.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10958.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t10958.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10960){var self__ = this;
var _10960__$1 = this;return self__.meta10959;
});})(mults,ensure_mult))
;
cljs.core.async.t10958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10960,meta10959__$1){var self__ = this;
var _10960__$1 = this;return (new cljs.core.async.t10958(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta10959__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t10958 = ((function (mults,ensure_mult){
return (function __GT_t10958(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10959){return (new cljs.core.async.t10958(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10959));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t10958(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6245__auto___11080 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6245__auto___11080,mults,ensure_mult,p){
return (function (){var f__6246__auto__ = (function (){var switch__6180__auto__ = ((function (c__6245__auto___11080,mults,ensure_mult,p){
return (function (state_11032){var state_val_11033 = (state_11032[(1)]);if((state_val_11033 === (7)))
{var inst_11028 = (state_11032[(2)]);var state_11032__$1 = state_11032;var statearr_11034_11081 = state_11032__$1;(statearr_11034_11081[(2)] = inst_11028);
(statearr_11034_11081[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11033 === (20)))
{var state_11032__$1 = state_11032;var statearr_11035_11082 = state_11032__$1;(statearr_11035_11082[(2)] = null);
(statearr_11035_11082[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11033 === (1)))
{var state_11032__$1 = state_11032;var statearr_11036_11083 = state_11032__$1;(statearr_11036_11083[(2)] = null);
(statearr_11036_11083[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11033 === (24)))
{var inst_11011 = (state_11032[(7)]);var inst_11020 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11011);var state_11032__$1 = state_11032;var statearr_11037_11084 = state_11032__$1;(statearr_11037_11084[(2)] = inst_11020);
(statearr_11037_11084[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11033 === (4)))
{var inst_10963 = (state_11032[(8)]);var inst_10963__$1 = (state_11032[(2)]);var inst_10964 = (inst_10963__$1 == null);var state_11032__$1 = (function (){var statearr_11038 = state_11032;(statearr_11038[(8)] = inst_10963__$1);
return statearr_11038;
})();if(cljs.core.truth_(inst_10964))
{var statearr_11039_11085 = state_11032__$1;(statearr_11039_11085[(1)] = (5));
} else
{var statearr_11040_11086 = state_11032__$1;(statearr_11040_11086[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11033 === (15)))
{var inst_11005 = (state_11032[(2)]);var state_11032__$1 = state_11032;var statearr_11041_11087 = state_11032__$1;(statearr_11041_11087[(2)] = inst_11005);
(statearr_11041_11087[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11033 === (21)))
{var inst_11025 = (state_11032[(2)]);var state_11032__$1 = (function (){var statearr_11042 = state_11032;(statearr_11042[(9)] = inst_11025);
return statearr_11042;
})();var statearr_11043_11088 = state_11032__$1;(statearr_11043_11088[(2)] = null);
(statearr_11043_11088[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11033 === (13)))
{var inst_10987 = (state_11032[(10)]);var inst_10989 = cljs.core.chunked_seq_QMARK_.call(null,inst_10987);var state_11032__$1 = state_11032;if(inst_10989)
{var statearr_11044_11089 = state_11032__$1;(statearr_11044_11089[(1)] = (16));
} else
{var statearr_11045_11090 = state_11032__$1;(statearr_11045_11090[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11033 === (22)))
{var inst_11017 = (state_11032[(2)]);var state_11032__$1 = state_11032;if(cljs.core.truth_(inst_11017))
{var statearr_11046_11091 = state_11032__$1;(statearr_11046_11091[(1)] = (23));
} else
{var statearr_11047_11092 = state_11032__$1;(statearr_11047_11092[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11033 === (6)))
{var inst_11013 = (state_11032[(11)]);var inst_10963 = (state_11032[(8)]);var inst_11011 = (state_11032[(7)]);var inst_11011__$1 = topic_fn.call(null,inst_10963);var inst_11012 = cljs.core.deref.call(null,mults);var inst_11013__$1 = cljs.core.get.call(null,inst_11012,inst_11011__$1);var state_11032__$1 = (function (){var statearr_11048 = state_11032;(statearr_11048[(11)] = inst_11013__$1);
(statearr_11048[(7)] = inst_11011__$1);
return statearr_11048;
})();if(cljs.core.truth_(inst_11013__$1))
{var statearr_11049_11093 = state_11032__$1;(statearr_11049_11093[(1)] = (19));
} else
{var statearr_11050_11094 = state_11032__$1;(statearr_11050_11094[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11033 === (25)))
{var inst_11022 = (state_11032[(2)]);var state_11032__$1 = state_11032;var statearr_11051_11095 = state_11032__$1;(statearr_11051_11095[(2)] = inst_11022);
(statearr_11051_11095[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11033 === (17)))
{var inst_10987 = (state_11032[(10)]);var inst_10996 = cljs.core.first.call(null,inst_10987);var inst_10997 = cljs.core.async.muxch_STAR_.call(null,inst_10996);var inst_10998 = cljs.core.async.close_BANG_.call(null,inst_10997);var inst_10999 = cljs.core.next.call(null,inst_10987);var inst_10973 = inst_10999;var inst_10974 = null;var inst_10975 = (0);var inst_10976 = (0);var state_11032__$1 = (function (){var statearr_11052 = state_11032;(statearr_11052[(12)] = inst_10998);
(statearr_11052[(13)] = inst_10973);
(statearr_11052[(14)] = inst_10976);
(statearr_11052[(15)] = inst_10974);
(statearr_11052[(16)] = inst_10975);
return statearr_11052;
})();var statearr_11053_11096 = state_11032__$1;(statearr_11053_11096[(2)] = null);
(statearr_11053_11096[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11033 === (3)))
{var inst_11030 = (state_11032[(2)]);var state_11032__$1 = state_11032;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11032__$1,inst_11030);
} else
{if((state_val_11033 === (12)))
{var inst_11007 = (state_11032[(2)]);var state_11032__$1 = state_11032;var statearr_11054_11097 = state_11032__$1;(statearr_11054_11097[(2)] = inst_11007);
(statearr_11054_11097[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11033 === (2)))
{var state_11032__$1 = state_11032;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11032__$1,(4),ch);
} else
{if((state_val_11033 === (23)))
{var state_11032__$1 = state_11032;var statearr_11055_11098 = state_11032__$1;(statearr_11055_11098[(2)] = null);
(statearr_11055_11098[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11033 === (19)))
{var inst_11013 = (state_11032[(11)]);var inst_10963 = (state_11032[(8)]);var inst_11015 = cljs.core.async.muxch_STAR_.call(null,inst_11013);var state_11032__$1 = state_11032;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11032__$1,(22),inst_11015,inst_10963);
} else
{if((state_val_11033 === (11)))
{var inst_10973 = (state_11032[(13)]);var inst_10987 = (state_11032[(10)]);var inst_10987__$1 = cljs.core.seq.call(null,inst_10973);var state_11032__$1 = (function (){var statearr_11056 = state_11032;(statearr_11056[(10)] = inst_10987__$1);
return statearr_11056;
})();if(inst_10987__$1)
{var statearr_11057_11099 = state_11032__$1;(statearr_11057_11099[(1)] = (13));
} else
{var statearr_11058_11100 = state_11032__$1;(statearr_11058_11100[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11033 === (9)))
{var inst_11009 = (state_11032[(2)]);var state_11032__$1 = state_11032;var statearr_11059_11101 = state_11032__$1;(statearr_11059_11101[(2)] = inst_11009);
(statearr_11059_11101[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11033 === (5)))
{var inst_10970 = cljs.core.deref.call(null,mults);var inst_10971 = cljs.core.vals.call(null,inst_10970);var inst_10972 = cljs.core.seq.call(null,inst_10971);var inst_10973 = inst_10972;var inst_10974 = null;var inst_10975 = (0);var inst_10976 = (0);var state_11032__$1 = (function (){var statearr_11060 = state_11032;(statearr_11060[(13)] = inst_10973);
(statearr_11060[(14)] = inst_10976);
(statearr_11060[(15)] = inst_10974);
(statearr_11060[(16)] = inst_10975);
return statearr_11060;
})();var statearr_11061_11102 = state_11032__$1;(statearr_11061_11102[(2)] = null);
(statearr_11061_11102[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11033 === (14)))
{var state_11032__$1 = state_11032;var statearr_11065_11103 = state_11032__$1;(statearr_11065_11103[(2)] = null);
(statearr_11065_11103[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11033 === (16)))
{var inst_10987 = (state_11032[(10)]);var inst_10991 = cljs.core.chunk_first.call(null,inst_10987);var inst_10992 = cljs.core.chunk_rest.call(null,inst_10987);var inst_10993 = cljs.core.count.call(null,inst_10991);var inst_10973 = inst_10992;var inst_10974 = inst_10991;var inst_10975 = inst_10993;var inst_10976 = (0);var state_11032__$1 = (function (){var statearr_11066 = state_11032;(statearr_11066[(13)] = inst_10973);
(statearr_11066[(14)] = inst_10976);
(statearr_11066[(15)] = inst_10974);
(statearr_11066[(16)] = inst_10975);
return statearr_11066;
})();var statearr_11067_11104 = state_11032__$1;(statearr_11067_11104[(2)] = null);
(statearr_11067_11104[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11033 === (10)))
{var inst_10973 = (state_11032[(13)]);var inst_10976 = (state_11032[(14)]);var inst_10974 = (state_11032[(15)]);var inst_10975 = (state_11032[(16)]);var inst_10981 = cljs.core._nth.call(null,inst_10974,inst_10976);var inst_10982 = cljs.core.async.muxch_STAR_.call(null,inst_10981);var inst_10983 = cljs.core.async.close_BANG_.call(null,inst_10982);var inst_10984 = (inst_10976 + (1));var tmp11062 = inst_10973;var tmp11063 = inst_10974;var tmp11064 = inst_10975;var inst_10973__$1 = tmp11062;var inst_10974__$1 = tmp11063;var inst_10975__$1 = tmp11064;var inst_10976__$1 = inst_10984;var state_11032__$1 = (function (){var statearr_11068 = state_11032;(statearr_11068[(13)] = inst_10973__$1);
(statearr_11068[(17)] = inst_10983);
(statearr_11068[(14)] = inst_10976__$1);
(statearr_11068[(15)] = inst_10974__$1);
(statearr_11068[(16)] = inst_10975__$1);
return statearr_11068;
})();var statearr_11069_11105 = state_11032__$1;(statearr_11069_11105[(2)] = null);
(statearr_11069_11105[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11033 === (18)))
{var inst_11002 = (state_11032[(2)]);var state_11032__$1 = state_11032;var statearr_11070_11106 = state_11032__$1;(statearr_11070_11106[(2)] = inst_11002);
(statearr_11070_11106[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11033 === (8)))
{var inst_10976 = (state_11032[(14)]);var inst_10975 = (state_11032[(16)]);var inst_10978 = (inst_10976 < inst_10975);var inst_10979 = inst_10978;var state_11032__$1 = state_11032;if(cljs.core.truth_(inst_10979))
{var statearr_11071_11107 = state_11032__$1;(statearr_11071_11107[(1)] = (10));
} else
{var statearr_11072_11108 = state_11032__$1;(statearr_11072_11108[(1)] = (11));
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
});})(c__6245__auto___11080,mults,ensure_mult,p))
;return ((function (switch__6180__auto__,c__6245__auto___11080,mults,ensure_mult,p){
return (function() {
var state_machine__6181__auto__ = null;
var state_machine__6181__auto____0 = (function (){var statearr_11076 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11076[(0)] = state_machine__6181__auto__);
(statearr_11076[(1)] = (1));
return statearr_11076;
});
var state_machine__6181__auto____1 = (function (state_11032){while(true){
var ret_value__6182__auto__ = (function (){try{while(true){
var result__6183__auto__ = switch__6180__auto__.call(null,state_11032);if(cljs.core.keyword_identical_QMARK_.call(null,result__6183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6183__auto__;
}
break;
}
}catch (e11077){if((e11077 instanceof Object))
{var ex__6184__auto__ = e11077;var statearr_11078_11109 = state_11032;(statearr_11078_11109[(5)] = ex__6184__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11032);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11077;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11110 = state_11032;
state_11032 = G__11110;
continue;
}
} else
{return ret_value__6182__auto__;
}
break;
}
});
state_machine__6181__auto__ = function(state_11032){
switch(arguments.length){
case 0:
return state_machine__6181__auto____0.call(this);
case 1:
return state_machine__6181__auto____1.call(this,state_11032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6181__auto____0;
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6181__auto____1;
return state_machine__6181__auto__;
})()
;})(switch__6180__auto__,c__6245__auto___11080,mults,ensure_mult,p))
})();var state__6247__auto__ = (function (){var statearr_11079 = f__6246__auto__.call(null);(statearr_11079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6245__auto___11080);
return statearr_11079;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6247__auto__);
});})(c__6245__auto___11080,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6245__auto___11247 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6245__auto___11247,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6246__auto__ = (function (){var switch__6180__auto__ = ((function (c__6245__auto___11247,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11217){var state_val_11218 = (state_11217[(1)]);if((state_val_11218 === (7)))
{var state_11217__$1 = state_11217;var statearr_11219_11248 = state_11217__$1;(statearr_11219_11248[(2)] = null);
(statearr_11219_11248[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11218 === (1)))
{var state_11217__$1 = state_11217;var statearr_11220_11249 = state_11217__$1;(statearr_11220_11249[(2)] = null);
(statearr_11220_11249[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11218 === (4)))
{var inst_11181 = (state_11217[(7)]);var inst_11183 = (inst_11181 < cnt);var state_11217__$1 = state_11217;if(cljs.core.truth_(inst_11183))
{var statearr_11221_11250 = state_11217__$1;(statearr_11221_11250[(1)] = (6));
} else
{var statearr_11222_11251 = state_11217__$1;(statearr_11222_11251[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11218 === (15)))
{var inst_11213 = (state_11217[(2)]);var state_11217__$1 = state_11217;var statearr_11223_11252 = state_11217__$1;(statearr_11223_11252[(2)] = inst_11213);
(statearr_11223_11252[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11218 === (13)))
{var inst_11206 = cljs.core.async.close_BANG_.call(null,out);var state_11217__$1 = state_11217;var statearr_11224_11253 = state_11217__$1;(statearr_11224_11253[(2)] = inst_11206);
(statearr_11224_11253[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11218 === (6)))
{var state_11217__$1 = state_11217;var statearr_11225_11254 = state_11217__$1;(statearr_11225_11254[(2)] = null);
(statearr_11225_11254[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11218 === (3)))
{var inst_11215 = (state_11217[(2)]);var state_11217__$1 = state_11217;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11217__$1,inst_11215);
} else
{if((state_val_11218 === (12)))
{var inst_11203 = (state_11217[(8)]);var inst_11203__$1 = (state_11217[(2)]);var inst_11204 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11203__$1);var state_11217__$1 = (function (){var statearr_11226 = state_11217;(statearr_11226[(8)] = inst_11203__$1);
return statearr_11226;
})();if(cljs.core.truth_(inst_11204))
{var statearr_11227_11255 = state_11217__$1;(statearr_11227_11255[(1)] = (13));
} else
{var statearr_11228_11256 = state_11217__$1;(statearr_11228_11256[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11218 === (2)))
{var inst_11180 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11181 = (0);var state_11217__$1 = (function (){var statearr_11229 = state_11217;(statearr_11229[(9)] = inst_11180);
(statearr_11229[(7)] = inst_11181);
return statearr_11229;
})();var statearr_11230_11257 = state_11217__$1;(statearr_11230_11257[(2)] = null);
(statearr_11230_11257[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11218 === (11)))
{var inst_11181 = (state_11217[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11217,(10),Object,null,(9));var inst_11190 = chs__$1.call(null,inst_11181);var inst_11191 = done.call(null,inst_11181);var inst_11192 = cljs.core.async.take_BANG_.call(null,inst_11190,inst_11191);var state_11217__$1 = state_11217;var statearr_11231_11258 = state_11217__$1;(statearr_11231_11258[(2)] = inst_11192);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11217__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11218 === (9)))
{var inst_11181 = (state_11217[(7)]);var inst_11194 = (state_11217[(2)]);var inst_11195 = (inst_11181 + (1));var inst_11181__$1 = inst_11195;var state_11217__$1 = (function (){var statearr_11232 = state_11217;(statearr_11232[(10)] = inst_11194);
(statearr_11232[(7)] = inst_11181__$1);
return statearr_11232;
})();var statearr_11233_11259 = state_11217__$1;(statearr_11233_11259[(2)] = null);
(statearr_11233_11259[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11218 === (5)))
{var inst_11201 = (state_11217[(2)]);var state_11217__$1 = (function (){var statearr_11234 = state_11217;(statearr_11234[(11)] = inst_11201);
return statearr_11234;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11217__$1,(12),dchan);
} else
{if((state_val_11218 === (14)))
{var inst_11203 = (state_11217[(8)]);var inst_11208 = cljs.core.apply.call(null,f,inst_11203);var state_11217__$1 = state_11217;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11217__$1,(16),out,inst_11208);
} else
{if((state_val_11218 === (16)))
{var inst_11210 = (state_11217[(2)]);var state_11217__$1 = (function (){var statearr_11235 = state_11217;(statearr_11235[(12)] = inst_11210);
return statearr_11235;
})();var statearr_11236_11260 = state_11217__$1;(statearr_11236_11260[(2)] = null);
(statearr_11236_11260[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11218 === (10)))
{var inst_11185 = (state_11217[(2)]);var inst_11186 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11217__$1 = (function (){var statearr_11237 = state_11217;(statearr_11237[(13)] = inst_11185);
return statearr_11237;
})();var statearr_11238_11261 = state_11217__$1;(statearr_11238_11261[(2)] = inst_11186);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11217__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11218 === (8)))
{var inst_11199 = (state_11217[(2)]);var state_11217__$1 = state_11217;var statearr_11239_11262 = state_11217__$1;(statearr_11239_11262[(2)] = inst_11199);
(statearr_11239_11262[(1)] = (5));
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
});})(c__6245__auto___11247,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6180__auto__,c__6245__auto___11247,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6181__auto__ = null;
var state_machine__6181__auto____0 = (function (){var statearr_11243 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11243[(0)] = state_machine__6181__auto__);
(statearr_11243[(1)] = (1));
return statearr_11243;
});
var state_machine__6181__auto____1 = (function (state_11217){while(true){
var ret_value__6182__auto__ = (function (){try{while(true){
var result__6183__auto__ = switch__6180__auto__.call(null,state_11217);if(cljs.core.keyword_identical_QMARK_.call(null,result__6183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6183__auto__;
}
break;
}
}catch (e11244){if((e11244 instanceof Object))
{var ex__6184__auto__ = e11244;var statearr_11245_11263 = state_11217;(statearr_11245_11263[(5)] = ex__6184__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11217);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11244;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11264 = state_11217;
state_11217 = G__11264;
continue;
}
} else
{return ret_value__6182__auto__;
}
break;
}
});
state_machine__6181__auto__ = function(state_11217){
switch(arguments.length){
case 0:
return state_machine__6181__auto____0.call(this);
case 1:
return state_machine__6181__auto____1.call(this,state_11217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6181__auto____0;
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6181__auto____1;
return state_machine__6181__auto__;
})()
;})(switch__6180__auto__,c__6245__auto___11247,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6247__auto__ = (function (){var statearr_11246 = f__6246__auto__.call(null);(statearr_11246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6245__auto___11247);
return statearr_11246;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6247__auto__);
});})(c__6245__auto___11247,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6245__auto___11372 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6245__auto___11372,out){
return (function (){var f__6246__auto__ = (function (){var switch__6180__auto__ = ((function (c__6245__auto___11372,out){
return (function (state_11348){var state_val_11349 = (state_11348[(1)]);if((state_val_11349 === (7)))
{var inst_11328 = (state_11348[(7)]);var inst_11327 = (state_11348[(8)]);var inst_11327__$1 = (state_11348[(2)]);var inst_11328__$1 = cljs.core.nth.call(null,inst_11327__$1,(0),null);var inst_11329 = cljs.core.nth.call(null,inst_11327__$1,(1),null);var inst_11330 = (inst_11328__$1 == null);var state_11348__$1 = (function (){var statearr_11350 = state_11348;(statearr_11350[(7)] = inst_11328__$1);
(statearr_11350[(8)] = inst_11327__$1);
(statearr_11350[(9)] = inst_11329);
return statearr_11350;
})();if(cljs.core.truth_(inst_11330))
{var statearr_11351_11373 = state_11348__$1;(statearr_11351_11373[(1)] = (8));
} else
{var statearr_11352_11374 = state_11348__$1;(statearr_11352_11374[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11349 === (1)))
{var inst_11319 = cljs.core.vec.call(null,chs);var inst_11320 = inst_11319;var state_11348__$1 = (function (){var statearr_11353 = state_11348;(statearr_11353[(10)] = inst_11320);
return statearr_11353;
})();var statearr_11354_11375 = state_11348__$1;(statearr_11354_11375[(2)] = null);
(statearr_11354_11375[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11349 === (4)))
{var inst_11320 = (state_11348[(10)]);var state_11348__$1 = state_11348;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11348__$1,(7),inst_11320);
} else
{if((state_val_11349 === (6)))
{var inst_11344 = (state_11348[(2)]);var state_11348__$1 = state_11348;var statearr_11355_11376 = state_11348__$1;(statearr_11355_11376[(2)] = inst_11344);
(statearr_11355_11376[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11349 === (3)))
{var inst_11346 = (state_11348[(2)]);var state_11348__$1 = state_11348;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11348__$1,inst_11346);
} else
{if((state_val_11349 === (2)))
{var inst_11320 = (state_11348[(10)]);var inst_11322 = cljs.core.count.call(null,inst_11320);var inst_11323 = (inst_11322 > (0));var state_11348__$1 = state_11348;if(cljs.core.truth_(inst_11323))
{var statearr_11357_11377 = state_11348__$1;(statearr_11357_11377[(1)] = (4));
} else
{var statearr_11358_11378 = state_11348__$1;(statearr_11358_11378[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11349 === (11)))
{var inst_11320 = (state_11348[(10)]);var inst_11337 = (state_11348[(2)]);var tmp11356 = inst_11320;var inst_11320__$1 = tmp11356;var state_11348__$1 = (function (){var statearr_11359 = state_11348;(statearr_11359[(11)] = inst_11337);
(statearr_11359[(10)] = inst_11320__$1);
return statearr_11359;
})();var statearr_11360_11379 = state_11348__$1;(statearr_11360_11379[(2)] = null);
(statearr_11360_11379[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11349 === (9)))
{var inst_11328 = (state_11348[(7)]);var state_11348__$1 = state_11348;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11348__$1,(11),out,inst_11328);
} else
{if((state_val_11349 === (5)))
{var inst_11342 = cljs.core.async.close_BANG_.call(null,out);var state_11348__$1 = state_11348;var statearr_11361_11380 = state_11348__$1;(statearr_11361_11380[(2)] = inst_11342);
(statearr_11361_11380[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11349 === (10)))
{var inst_11340 = (state_11348[(2)]);var state_11348__$1 = state_11348;var statearr_11362_11381 = state_11348__$1;(statearr_11362_11381[(2)] = inst_11340);
(statearr_11362_11381[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11349 === (8)))
{var inst_11328 = (state_11348[(7)]);var inst_11320 = (state_11348[(10)]);var inst_11327 = (state_11348[(8)]);var inst_11329 = (state_11348[(9)]);var inst_11332 = (function (){var c = inst_11329;var v = inst_11328;var vec__11325 = inst_11327;var cs = inst_11320;return ((function (c,v,vec__11325,cs,inst_11328,inst_11320,inst_11327,inst_11329,state_val_11349,c__6245__auto___11372,out){
return (function (p1__11265_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11265_SHARP_);
});
;})(c,v,vec__11325,cs,inst_11328,inst_11320,inst_11327,inst_11329,state_val_11349,c__6245__auto___11372,out))
})();var inst_11333 = cljs.core.filterv.call(null,inst_11332,inst_11320);var inst_11320__$1 = inst_11333;var state_11348__$1 = (function (){var statearr_11363 = state_11348;(statearr_11363[(10)] = inst_11320__$1);
return statearr_11363;
})();var statearr_11364_11382 = state_11348__$1;(statearr_11364_11382[(2)] = null);
(statearr_11364_11382[(1)] = (2));
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
});})(c__6245__auto___11372,out))
;return ((function (switch__6180__auto__,c__6245__auto___11372,out){
return (function() {
var state_machine__6181__auto__ = null;
var state_machine__6181__auto____0 = (function (){var statearr_11368 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11368[(0)] = state_machine__6181__auto__);
(statearr_11368[(1)] = (1));
return statearr_11368;
});
var state_machine__6181__auto____1 = (function (state_11348){while(true){
var ret_value__6182__auto__ = (function (){try{while(true){
var result__6183__auto__ = switch__6180__auto__.call(null,state_11348);if(cljs.core.keyword_identical_QMARK_.call(null,result__6183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6183__auto__;
}
break;
}
}catch (e11369){if((e11369 instanceof Object))
{var ex__6184__auto__ = e11369;var statearr_11370_11383 = state_11348;(statearr_11370_11383[(5)] = ex__6184__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11348);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11369;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11384 = state_11348;
state_11348 = G__11384;
continue;
}
} else
{return ret_value__6182__auto__;
}
break;
}
});
state_machine__6181__auto__ = function(state_11348){
switch(arguments.length){
case 0:
return state_machine__6181__auto____0.call(this);
case 1:
return state_machine__6181__auto____1.call(this,state_11348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6181__auto____0;
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6181__auto____1;
return state_machine__6181__auto__;
})()
;})(switch__6180__auto__,c__6245__auto___11372,out))
})();var state__6247__auto__ = (function (){var statearr_11371 = f__6246__auto__.call(null);(statearr_11371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6245__auto___11372);
return statearr_11371;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6247__auto__);
});})(c__6245__auto___11372,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6245__auto___11477 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6245__auto___11477,out){
return (function (){var f__6246__auto__ = (function (){var switch__6180__auto__ = ((function (c__6245__auto___11477,out){
return (function (state_11454){var state_val_11455 = (state_11454[(1)]);if((state_val_11455 === (7)))
{var inst_11436 = (state_11454[(7)]);var inst_11436__$1 = (state_11454[(2)]);var inst_11437 = (inst_11436__$1 == null);var inst_11438 = cljs.core.not.call(null,inst_11437);var state_11454__$1 = (function (){var statearr_11456 = state_11454;(statearr_11456[(7)] = inst_11436__$1);
return statearr_11456;
})();if(inst_11438)
{var statearr_11457_11478 = state_11454__$1;(statearr_11457_11478[(1)] = (8));
} else
{var statearr_11458_11479 = state_11454__$1;(statearr_11458_11479[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11455 === (1)))
{var inst_11431 = (0);var state_11454__$1 = (function (){var statearr_11459 = state_11454;(statearr_11459[(8)] = inst_11431);
return statearr_11459;
})();var statearr_11460_11480 = state_11454__$1;(statearr_11460_11480[(2)] = null);
(statearr_11460_11480[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11455 === (4)))
{var state_11454__$1 = state_11454;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11454__$1,(7),ch);
} else
{if((state_val_11455 === (6)))
{var inst_11449 = (state_11454[(2)]);var state_11454__$1 = state_11454;var statearr_11461_11481 = state_11454__$1;(statearr_11461_11481[(2)] = inst_11449);
(statearr_11461_11481[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11455 === (3)))
{var inst_11451 = (state_11454[(2)]);var inst_11452 = cljs.core.async.close_BANG_.call(null,out);var state_11454__$1 = (function (){var statearr_11462 = state_11454;(statearr_11462[(9)] = inst_11451);
return statearr_11462;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11454__$1,inst_11452);
} else
{if((state_val_11455 === (2)))
{var inst_11431 = (state_11454[(8)]);var inst_11433 = (inst_11431 < n);var state_11454__$1 = state_11454;if(cljs.core.truth_(inst_11433))
{var statearr_11463_11482 = state_11454__$1;(statearr_11463_11482[(1)] = (4));
} else
{var statearr_11464_11483 = state_11454__$1;(statearr_11464_11483[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11455 === (11)))
{var inst_11431 = (state_11454[(8)]);var inst_11441 = (state_11454[(2)]);var inst_11442 = (inst_11431 + (1));var inst_11431__$1 = inst_11442;var state_11454__$1 = (function (){var statearr_11465 = state_11454;(statearr_11465[(8)] = inst_11431__$1);
(statearr_11465[(10)] = inst_11441);
return statearr_11465;
})();var statearr_11466_11484 = state_11454__$1;(statearr_11466_11484[(2)] = null);
(statearr_11466_11484[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11455 === (9)))
{var state_11454__$1 = state_11454;var statearr_11467_11485 = state_11454__$1;(statearr_11467_11485[(2)] = null);
(statearr_11467_11485[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11455 === (5)))
{var state_11454__$1 = state_11454;var statearr_11468_11486 = state_11454__$1;(statearr_11468_11486[(2)] = null);
(statearr_11468_11486[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11455 === (10)))
{var inst_11446 = (state_11454[(2)]);var state_11454__$1 = state_11454;var statearr_11469_11487 = state_11454__$1;(statearr_11469_11487[(2)] = inst_11446);
(statearr_11469_11487[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11455 === (8)))
{var inst_11436 = (state_11454[(7)]);var state_11454__$1 = state_11454;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11454__$1,(11),out,inst_11436);
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
});})(c__6245__auto___11477,out))
;return ((function (switch__6180__auto__,c__6245__auto___11477,out){
return (function() {
var state_machine__6181__auto__ = null;
var state_machine__6181__auto____0 = (function (){var statearr_11473 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11473[(0)] = state_machine__6181__auto__);
(statearr_11473[(1)] = (1));
return statearr_11473;
});
var state_machine__6181__auto____1 = (function (state_11454){while(true){
var ret_value__6182__auto__ = (function (){try{while(true){
var result__6183__auto__ = switch__6180__auto__.call(null,state_11454);if(cljs.core.keyword_identical_QMARK_.call(null,result__6183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6183__auto__;
}
break;
}
}catch (e11474){if((e11474 instanceof Object))
{var ex__6184__auto__ = e11474;var statearr_11475_11488 = state_11454;(statearr_11475_11488[(5)] = ex__6184__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11454);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11474;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11489 = state_11454;
state_11454 = G__11489;
continue;
}
} else
{return ret_value__6182__auto__;
}
break;
}
});
state_machine__6181__auto__ = function(state_11454){
switch(arguments.length){
case 0:
return state_machine__6181__auto____0.call(this);
case 1:
return state_machine__6181__auto____1.call(this,state_11454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6181__auto____0;
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6181__auto____1;
return state_machine__6181__auto__;
})()
;})(switch__6180__auto__,c__6245__auto___11477,out))
})();var state__6247__auto__ = (function (){var statearr_11476 = f__6246__auto__.call(null);(statearr_11476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6245__auto___11477);
return statearr_11476;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6247__auto__);
});})(c__6245__auto___11477,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6245__auto___11586 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6245__auto___11586,out){
return (function (){var f__6246__auto__ = (function (){var switch__6180__auto__ = ((function (c__6245__auto___11586,out){
return (function (state_11561){var state_val_11562 = (state_11561[(1)]);if((state_val_11562 === (7)))
{var inst_11556 = (state_11561[(2)]);var state_11561__$1 = state_11561;var statearr_11563_11587 = state_11561__$1;(statearr_11563_11587[(2)] = inst_11556);
(statearr_11563_11587[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11562 === (1)))
{var inst_11538 = null;var state_11561__$1 = (function (){var statearr_11564 = state_11561;(statearr_11564[(7)] = inst_11538);
return statearr_11564;
})();var statearr_11565_11588 = state_11561__$1;(statearr_11565_11588[(2)] = null);
(statearr_11565_11588[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11562 === (4)))
{var inst_11541 = (state_11561[(8)]);var inst_11541__$1 = (state_11561[(2)]);var inst_11542 = (inst_11541__$1 == null);var inst_11543 = cljs.core.not.call(null,inst_11542);var state_11561__$1 = (function (){var statearr_11566 = state_11561;(statearr_11566[(8)] = inst_11541__$1);
return statearr_11566;
})();if(inst_11543)
{var statearr_11567_11589 = state_11561__$1;(statearr_11567_11589[(1)] = (5));
} else
{var statearr_11568_11590 = state_11561__$1;(statearr_11568_11590[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11562 === (6)))
{var state_11561__$1 = state_11561;var statearr_11569_11591 = state_11561__$1;(statearr_11569_11591[(2)] = null);
(statearr_11569_11591[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11562 === (3)))
{var inst_11558 = (state_11561[(2)]);var inst_11559 = cljs.core.async.close_BANG_.call(null,out);var state_11561__$1 = (function (){var statearr_11570 = state_11561;(statearr_11570[(9)] = inst_11558);
return statearr_11570;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11561__$1,inst_11559);
} else
{if((state_val_11562 === (2)))
{var state_11561__$1 = state_11561;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11561__$1,(4),ch);
} else
{if((state_val_11562 === (11)))
{var inst_11541 = (state_11561[(8)]);var inst_11550 = (state_11561[(2)]);var inst_11538 = inst_11541;var state_11561__$1 = (function (){var statearr_11571 = state_11561;(statearr_11571[(7)] = inst_11538);
(statearr_11571[(10)] = inst_11550);
return statearr_11571;
})();var statearr_11572_11592 = state_11561__$1;(statearr_11572_11592[(2)] = null);
(statearr_11572_11592[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11562 === (9)))
{var inst_11541 = (state_11561[(8)]);var state_11561__$1 = state_11561;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11561__$1,(11),out,inst_11541);
} else
{if((state_val_11562 === (5)))
{var inst_11538 = (state_11561[(7)]);var inst_11541 = (state_11561[(8)]);var inst_11545 = cljs.core._EQ_.call(null,inst_11541,inst_11538);var state_11561__$1 = state_11561;if(inst_11545)
{var statearr_11574_11593 = state_11561__$1;(statearr_11574_11593[(1)] = (8));
} else
{var statearr_11575_11594 = state_11561__$1;(statearr_11575_11594[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11562 === (10)))
{var inst_11553 = (state_11561[(2)]);var state_11561__$1 = state_11561;var statearr_11576_11595 = state_11561__$1;(statearr_11576_11595[(2)] = inst_11553);
(statearr_11576_11595[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11562 === (8)))
{var inst_11538 = (state_11561[(7)]);var tmp11573 = inst_11538;var inst_11538__$1 = tmp11573;var state_11561__$1 = (function (){var statearr_11577 = state_11561;(statearr_11577[(7)] = inst_11538__$1);
return statearr_11577;
})();var statearr_11578_11596 = state_11561__$1;(statearr_11578_11596[(2)] = null);
(statearr_11578_11596[(1)] = (2));
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
});})(c__6245__auto___11586,out))
;return ((function (switch__6180__auto__,c__6245__auto___11586,out){
return (function() {
var state_machine__6181__auto__ = null;
var state_machine__6181__auto____0 = (function (){var statearr_11582 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11582[(0)] = state_machine__6181__auto__);
(statearr_11582[(1)] = (1));
return statearr_11582;
});
var state_machine__6181__auto____1 = (function (state_11561){while(true){
var ret_value__6182__auto__ = (function (){try{while(true){
var result__6183__auto__ = switch__6180__auto__.call(null,state_11561);if(cljs.core.keyword_identical_QMARK_.call(null,result__6183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6183__auto__;
}
break;
}
}catch (e11583){if((e11583 instanceof Object))
{var ex__6184__auto__ = e11583;var statearr_11584_11597 = state_11561;(statearr_11584_11597[(5)] = ex__6184__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11561);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11583;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11598 = state_11561;
state_11561 = G__11598;
continue;
}
} else
{return ret_value__6182__auto__;
}
break;
}
});
state_machine__6181__auto__ = function(state_11561){
switch(arguments.length){
case 0:
return state_machine__6181__auto____0.call(this);
case 1:
return state_machine__6181__auto____1.call(this,state_11561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6181__auto____0;
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6181__auto____1;
return state_machine__6181__auto__;
})()
;})(switch__6180__auto__,c__6245__auto___11586,out))
})();var state__6247__auto__ = (function (){var statearr_11585 = f__6246__auto__.call(null);(statearr_11585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6245__auto___11586);
return statearr_11585;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6247__auto__);
});})(c__6245__auto___11586,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6245__auto___11733 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6245__auto___11733,out){
return (function (){var f__6246__auto__ = (function (){var switch__6180__auto__ = ((function (c__6245__auto___11733,out){
return (function (state_11703){var state_val_11704 = (state_11703[(1)]);if((state_val_11704 === (7)))
{var inst_11699 = (state_11703[(2)]);var state_11703__$1 = state_11703;var statearr_11705_11734 = state_11703__$1;(statearr_11705_11734[(2)] = inst_11699);
(statearr_11705_11734[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11704 === (1)))
{var inst_11666 = (new Array(n));var inst_11667 = inst_11666;var inst_11668 = (0);var state_11703__$1 = (function (){var statearr_11706 = state_11703;(statearr_11706[(7)] = inst_11668);
(statearr_11706[(8)] = inst_11667);
return statearr_11706;
})();var statearr_11707_11735 = state_11703__$1;(statearr_11707_11735[(2)] = null);
(statearr_11707_11735[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11704 === (4)))
{var inst_11671 = (state_11703[(9)]);var inst_11671__$1 = (state_11703[(2)]);var inst_11672 = (inst_11671__$1 == null);var inst_11673 = cljs.core.not.call(null,inst_11672);var state_11703__$1 = (function (){var statearr_11708 = state_11703;(statearr_11708[(9)] = inst_11671__$1);
return statearr_11708;
})();if(inst_11673)
{var statearr_11709_11736 = state_11703__$1;(statearr_11709_11736[(1)] = (5));
} else
{var statearr_11710_11737 = state_11703__$1;(statearr_11710_11737[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11704 === (15)))
{var inst_11693 = (state_11703[(2)]);var state_11703__$1 = state_11703;var statearr_11711_11738 = state_11703__$1;(statearr_11711_11738[(2)] = inst_11693);
(statearr_11711_11738[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11704 === (13)))
{var state_11703__$1 = state_11703;var statearr_11712_11739 = state_11703__$1;(statearr_11712_11739[(2)] = null);
(statearr_11712_11739[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11704 === (6)))
{var inst_11668 = (state_11703[(7)]);var inst_11689 = (inst_11668 > (0));var state_11703__$1 = state_11703;if(cljs.core.truth_(inst_11689))
{var statearr_11713_11740 = state_11703__$1;(statearr_11713_11740[(1)] = (12));
} else
{var statearr_11714_11741 = state_11703__$1;(statearr_11714_11741[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11704 === (3)))
{var inst_11701 = (state_11703[(2)]);var state_11703__$1 = state_11703;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11703__$1,inst_11701);
} else
{if((state_val_11704 === (12)))
{var inst_11667 = (state_11703[(8)]);var inst_11691 = cljs.core.vec.call(null,inst_11667);var state_11703__$1 = state_11703;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11703__$1,(15),out,inst_11691);
} else
{if((state_val_11704 === (2)))
{var state_11703__$1 = state_11703;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11703__$1,(4),ch);
} else
{if((state_val_11704 === (11)))
{var inst_11683 = (state_11703[(2)]);var inst_11684 = (new Array(n));var inst_11667 = inst_11684;var inst_11668 = (0);var state_11703__$1 = (function (){var statearr_11715 = state_11703;(statearr_11715[(7)] = inst_11668);
(statearr_11715[(8)] = inst_11667);
(statearr_11715[(10)] = inst_11683);
return statearr_11715;
})();var statearr_11716_11742 = state_11703__$1;(statearr_11716_11742[(2)] = null);
(statearr_11716_11742[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11704 === (9)))
{var inst_11667 = (state_11703[(8)]);var inst_11681 = cljs.core.vec.call(null,inst_11667);var state_11703__$1 = state_11703;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11703__$1,(11),out,inst_11681);
} else
{if((state_val_11704 === (5)))
{var inst_11668 = (state_11703[(7)]);var inst_11667 = (state_11703[(8)]);var inst_11676 = (state_11703[(11)]);var inst_11671 = (state_11703[(9)]);var inst_11675 = (inst_11667[inst_11668] = inst_11671);var inst_11676__$1 = (inst_11668 + (1));var inst_11677 = (inst_11676__$1 < n);var state_11703__$1 = (function (){var statearr_11717 = state_11703;(statearr_11717[(11)] = inst_11676__$1);
(statearr_11717[(12)] = inst_11675);
return statearr_11717;
})();if(cljs.core.truth_(inst_11677))
{var statearr_11718_11743 = state_11703__$1;(statearr_11718_11743[(1)] = (8));
} else
{var statearr_11719_11744 = state_11703__$1;(statearr_11719_11744[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11704 === (14)))
{var inst_11696 = (state_11703[(2)]);var inst_11697 = cljs.core.async.close_BANG_.call(null,out);var state_11703__$1 = (function (){var statearr_11721 = state_11703;(statearr_11721[(13)] = inst_11696);
return statearr_11721;
})();var statearr_11722_11745 = state_11703__$1;(statearr_11722_11745[(2)] = inst_11697);
(statearr_11722_11745[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11704 === (10)))
{var inst_11687 = (state_11703[(2)]);var state_11703__$1 = state_11703;var statearr_11723_11746 = state_11703__$1;(statearr_11723_11746[(2)] = inst_11687);
(statearr_11723_11746[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11704 === (8)))
{var inst_11667 = (state_11703[(8)]);var inst_11676 = (state_11703[(11)]);var tmp11720 = inst_11667;var inst_11667__$1 = tmp11720;var inst_11668 = inst_11676;var state_11703__$1 = (function (){var statearr_11724 = state_11703;(statearr_11724[(7)] = inst_11668);
(statearr_11724[(8)] = inst_11667__$1);
return statearr_11724;
})();var statearr_11725_11747 = state_11703__$1;(statearr_11725_11747[(2)] = null);
(statearr_11725_11747[(1)] = (2));
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
});})(c__6245__auto___11733,out))
;return ((function (switch__6180__auto__,c__6245__auto___11733,out){
return (function() {
var state_machine__6181__auto__ = null;
var state_machine__6181__auto____0 = (function (){var statearr_11729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11729[(0)] = state_machine__6181__auto__);
(statearr_11729[(1)] = (1));
return statearr_11729;
});
var state_machine__6181__auto____1 = (function (state_11703){while(true){
var ret_value__6182__auto__ = (function (){try{while(true){
var result__6183__auto__ = switch__6180__auto__.call(null,state_11703);if(cljs.core.keyword_identical_QMARK_.call(null,result__6183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6183__auto__;
}
break;
}
}catch (e11730){if((e11730 instanceof Object))
{var ex__6184__auto__ = e11730;var statearr_11731_11748 = state_11703;(statearr_11731_11748[(5)] = ex__6184__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11703);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11730;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11749 = state_11703;
state_11703 = G__11749;
continue;
}
} else
{return ret_value__6182__auto__;
}
break;
}
});
state_machine__6181__auto__ = function(state_11703){
switch(arguments.length){
case 0:
return state_machine__6181__auto____0.call(this);
case 1:
return state_machine__6181__auto____1.call(this,state_11703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6181__auto____0;
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6181__auto____1;
return state_machine__6181__auto__;
})()
;})(switch__6180__auto__,c__6245__auto___11733,out))
})();var state__6247__auto__ = (function (){var statearr_11732 = f__6246__auto__.call(null);(statearr_11732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6245__auto___11733);
return statearr_11732;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6247__auto__);
});})(c__6245__auto___11733,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6245__auto___11892 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6245__auto___11892,out){
return (function (){var f__6246__auto__ = (function (){var switch__6180__auto__ = ((function (c__6245__auto___11892,out){
return (function (state_11862){var state_val_11863 = (state_11862[(1)]);if((state_val_11863 === (7)))
{var inst_11858 = (state_11862[(2)]);var state_11862__$1 = state_11862;var statearr_11864_11893 = state_11862__$1;(statearr_11864_11893[(2)] = inst_11858);
(statearr_11864_11893[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11863 === (1)))
{var inst_11821 = [];var inst_11822 = inst_11821;var inst_11823 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_11862__$1 = (function (){var statearr_11865 = state_11862;(statearr_11865[(7)] = inst_11823);
(statearr_11865[(8)] = inst_11822);
return statearr_11865;
})();var statearr_11866_11894 = state_11862__$1;(statearr_11866_11894[(2)] = null);
(statearr_11866_11894[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11863 === (4)))
{var inst_11826 = (state_11862[(9)]);var inst_11826__$1 = (state_11862[(2)]);var inst_11827 = (inst_11826__$1 == null);var inst_11828 = cljs.core.not.call(null,inst_11827);var state_11862__$1 = (function (){var statearr_11867 = state_11862;(statearr_11867[(9)] = inst_11826__$1);
return statearr_11867;
})();if(inst_11828)
{var statearr_11868_11895 = state_11862__$1;(statearr_11868_11895[(1)] = (5));
} else
{var statearr_11869_11896 = state_11862__$1;(statearr_11869_11896[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11863 === (15)))
{var inst_11852 = (state_11862[(2)]);var state_11862__$1 = state_11862;var statearr_11870_11897 = state_11862__$1;(statearr_11870_11897[(2)] = inst_11852);
(statearr_11870_11897[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11863 === (13)))
{var state_11862__$1 = state_11862;var statearr_11871_11898 = state_11862__$1;(statearr_11871_11898[(2)] = null);
(statearr_11871_11898[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11863 === (6)))
{var inst_11822 = (state_11862[(8)]);var inst_11847 = inst_11822.length;var inst_11848 = (inst_11847 > (0));var state_11862__$1 = state_11862;if(cljs.core.truth_(inst_11848))
{var statearr_11872_11899 = state_11862__$1;(statearr_11872_11899[(1)] = (12));
} else
{var statearr_11873_11900 = state_11862__$1;(statearr_11873_11900[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11863 === (3)))
{var inst_11860 = (state_11862[(2)]);var state_11862__$1 = state_11862;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11862__$1,inst_11860);
} else
{if((state_val_11863 === (12)))
{var inst_11822 = (state_11862[(8)]);var inst_11850 = cljs.core.vec.call(null,inst_11822);var state_11862__$1 = state_11862;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11862__$1,(15),out,inst_11850);
} else
{if((state_val_11863 === (2)))
{var state_11862__$1 = state_11862;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11862__$1,(4),ch);
} else
{if((state_val_11863 === (11)))
{var inst_11826 = (state_11862[(9)]);var inst_11830 = (state_11862[(10)]);var inst_11840 = (state_11862[(2)]);var inst_11841 = [];var inst_11842 = inst_11841.push(inst_11826);var inst_11822 = inst_11841;var inst_11823 = inst_11830;var state_11862__$1 = (function (){var statearr_11874 = state_11862;(statearr_11874[(7)] = inst_11823);
(statearr_11874[(11)] = inst_11842);
(statearr_11874[(8)] = inst_11822);
(statearr_11874[(12)] = inst_11840);
return statearr_11874;
})();var statearr_11875_11901 = state_11862__$1;(statearr_11875_11901[(2)] = null);
(statearr_11875_11901[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11863 === (9)))
{var inst_11822 = (state_11862[(8)]);var inst_11838 = cljs.core.vec.call(null,inst_11822);var state_11862__$1 = state_11862;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11862__$1,(11),out,inst_11838);
} else
{if((state_val_11863 === (5)))
{var inst_11823 = (state_11862[(7)]);var inst_11826 = (state_11862[(9)]);var inst_11830 = (state_11862[(10)]);var inst_11830__$1 = f.call(null,inst_11826);var inst_11831 = cljs.core._EQ_.call(null,inst_11830__$1,inst_11823);var inst_11832 = cljs.core.keyword_identical_QMARK_.call(null,inst_11823,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_11833 = (inst_11831) || (inst_11832);var state_11862__$1 = (function (){var statearr_11876 = state_11862;(statearr_11876[(10)] = inst_11830__$1);
return statearr_11876;
})();if(cljs.core.truth_(inst_11833))
{var statearr_11877_11902 = state_11862__$1;(statearr_11877_11902[(1)] = (8));
} else
{var statearr_11878_11903 = state_11862__$1;(statearr_11878_11903[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11863 === (14)))
{var inst_11855 = (state_11862[(2)]);var inst_11856 = cljs.core.async.close_BANG_.call(null,out);var state_11862__$1 = (function (){var statearr_11880 = state_11862;(statearr_11880[(13)] = inst_11855);
return statearr_11880;
})();var statearr_11881_11904 = state_11862__$1;(statearr_11881_11904[(2)] = inst_11856);
(statearr_11881_11904[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11863 === (10)))
{var inst_11845 = (state_11862[(2)]);var state_11862__$1 = state_11862;var statearr_11882_11905 = state_11862__$1;(statearr_11882_11905[(2)] = inst_11845);
(statearr_11882_11905[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11863 === (8)))
{var inst_11826 = (state_11862[(9)]);var inst_11822 = (state_11862[(8)]);var inst_11830 = (state_11862[(10)]);var inst_11835 = inst_11822.push(inst_11826);var tmp11879 = inst_11822;var inst_11822__$1 = tmp11879;var inst_11823 = inst_11830;var state_11862__$1 = (function (){var statearr_11883 = state_11862;(statearr_11883[(7)] = inst_11823);
(statearr_11883[(8)] = inst_11822__$1);
(statearr_11883[(14)] = inst_11835);
return statearr_11883;
})();var statearr_11884_11906 = state_11862__$1;(statearr_11884_11906[(2)] = null);
(statearr_11884_11906[(1)] = (2));
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
});})(c__6245__auto___11892,out))
;return ((function (switch__6180__auto__,c__6245__auto___11892,out){
return (function() {
var state_machine__6181__auto__ = null;
var state_machine__6181__auto____0 = (function (){var statearr_11888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11888[(0)] = state_machine__6181__auto__);
(statearr_11888[(1)] = (1));
return statearr_11888;
});
var state_machine__6181__auto____1 = (function (state_11862){while(true){
var ret_value__6182__auto__ = (function (){try{while(true){
var result__6183__auto__ = switch__6180__auto__.call(null,state_11862);if(cljs.core.keyword_identical_QMARK_.call(null,result__6183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6183__auto__;
}
break;
}
}catch (e11889){if((e11889 instanceof Object))
{var ex__6184__auto__ = e11889;var statearr_11890_11907 = state_11862;(statearr_11890_11907[(5)] = ex__6184__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11862);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11889;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6182__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11908 = state_11862;
state_11862 = G__11908;
continue;
}
} else
{return ret_value__6182__auto__;
}
break;
}
});
state_machine__6181__auto__ = function(state_11862){
switch(arguments.length){
case 0:
return state_machine__6181__auto____0.call(this);
case 1:
return state_machine__6181__auto____1.call(this,state_11862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6181__auto____0;
state_machine__6181__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6181__auto____1;
return state_machine__6181__auto__;
})()
;})(switch__6180__auto__,c__6245__auto___11892,out))
})();var state__6247__auto__ = (function (){var statearr_11891 = f__6246__auto__.call(null);(statearr_11891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6245__auto___11892);
return statearr_11891;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6247__auto__);
});})(c__6245__auto___11892,out))
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