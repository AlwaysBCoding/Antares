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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t38436 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38436 = (function (f,fn_handler,meta38437){
this.f = f;
this.fn_handler = fn_handler;
this.meta38437 = meta38437;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38436.cljs$lang$type = true;
cljs.core.async.t38436.cljs$lang$ctorStr = "cljs.core.async/t38436";
cljs.core.async.t38436.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t38436");
});
cljs.core.async.t38436.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t38436.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t38436.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t38436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38438){var self__ = this;
var _38438__$1 = this;return self__.meta38437;
});
cljs.core.async.t38436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38438,meta38437__$1){var self__ = this;
var _38438__$1 = this;return (new cljs.core.async.t38436(self__.f,self__.fn_handler,meta38437__$1));
});
cljs.core.async.__GT_t38436 = (function __GT_t38436(f__$1,fn_handler__$1,meta38437){return (new cljs.core.async.t38436(f__$1,fn_handler__$1,meta38437));
});
}
return (new cljs.core.async.t38436(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__38440 = buff;if(G__38440)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__38440.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__38440.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__38440);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__38440);
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
{var val_38441 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_38441);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_38441,ret){
return (function (){return fn1.call(null,val_38441);
});})(val_38441,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___38442 = n;var x_38443 = (0);while(true){
if((x_38443 < n__4399__auto___38442))
{(a[x_38443] = (0));
{
var G__38444 = (x_38443 + (1));
x_38443 = G__38444;
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
var G__38445 = (i + (1));
i = G__38445;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t38449 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38449 = (function (flag,alt_flag,meta38450){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta38450 = meta38450;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38449.cljs$lang$type = true;
cljs.core.async.t38449.cljs$lang$ctorStr = "cljs.core.async/t38449";
cljs.core.async.t38449.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t38449");
});})(flag))
;
cljs.core.async.t38449.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t38449.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t38449.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t38449.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_38451){var self__ = this;
var _38451__$1 = this;return self__.meta38450;
});})(flag))
;
cljs.core.async.t38449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_38451,meta38450__$1){var self__ = this;
var _38451__$1 = this;return (new cljs.core.async.t38449(self__.flag,self__.alt_flag,meta38450__$1));
});})(flag))
;
cljs.core.async.__GT_t38449 = ((function (flag){
return (function __GT_t38449(flag__$1,alt_flag__$1,meta38450){return (new cljs.core.async.t38449(flag__$1,alt_flag__$1,meta38450));
});})(flag))
;
}
return (new cljs.core.async.t38449(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t38455 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38455 = (function (cb,flag,alt_handler,meta38456){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta38456 = meta38456;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38455.cljs$lang$type = true;
cljs.core.async.t38455.cljs$lang$ctorStr = "cljs.core.async/t38455";
cljs.core.async.t38455.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t38455");
});
cljs.core.async.t38455.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t38455.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t38455.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t38455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38457){var self__ = this;
var _38457__$1 = this;return self__.meta38456;
});
cljs.core.async.t38455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38457,meta38456__$1){var self__ = this;
var _38457__$1 = this;return (new cljs.core.async.t38455(self__.cb,self__.flag,self__.alt_handler,meta38456__$1));
});
cljs.core.async.__GT_t38455 = (function __GT_t38455(cb__$1,flag__$1,alt_handler__$1,meta38456){return (new cljs.core.async.t38455(cb__$1,flag__$1,alt_handler__$1,meta38456));
});
}
return (new cljs.core.async.t38455(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38458_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38458_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38459_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38459_SHARP_,port], null));
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
var G__38460 = (i + (1));
i = G__38460;
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
var alts_BANG___delegate = function (ports,p__38461){var map__38463 = p__38461;var map__38463__$1 = ((cljs.core.seq_QMARK_.call(null,map__38463))?cljs.core.apply.call(null,cljs.core.hash_map,map__38463):map__38463);var opts = map__38463__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__38461 = null;if (arguments.length > 1) {
  p__38461 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__38461);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__38464){
var ports = cljs.core.first(arglist__38464);
var p__38461 = cljs.core.rest(arglist__38464);
return alts_BANG___delegate(ports,p__38461);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t38472 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38472 = (function (ch,f,map_LT_,meta38473){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta38473 = meta38473;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38472.cljs$lang$type = true;
cljs.core.async.t38472.cljs$lang$ctorStr = "cljs.core.async/t38472";
cljs.core.async.t38472.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t38472");
});
cljs.core.async.t38472.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t38472.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t38472.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t38472.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t38475 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38475 = (function (fn1,_,meta38473,ch,f,map_LT_,meta38476){
this.fn1 = fn1;
this._ = _;
this.meta38473 = meta38473;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta38476 = meta38476;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38475.cljs$lang$type = true;
cljs.core.async.t38475.cljs$lang$ctorStr = "cljs.core.async/t38475";
cljs.core.async.t38475.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t38475");
});})(___$1))
;
cljs.core.async.t38475.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t38475.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t38475.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t38475.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__38465_SHARP_){return f1.call(null,(((p1__38465_SHARP_ == null))?null:self__.f.call(null,p1__38465_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t38475.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_38477){var self__ = this;
var _38477__$1 = this;return self__.meta38476;
});})(___$1))
;
cljs.core.async.t38475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_38477,meta38476__$1){var self__ = this;
var _38477__$1 = this;return (new cljs.core.async.t38475(self__.fn1,self__._,self__.meta38473,self__.ch,self__.f,self__.map_LT_,meta38476__$1));
});})(___$1))
;
cljs.core.async.__GT_t38475 = ((function (___$1){
return (function __GT_t38475(fn1__$1,___$2,meta38473__$1,ch__$2,f__$2,map_LT___$2,meta38476){return (new cljs.core.async.t38475(fn1__$1,___$2,meta38473__$1,ch__$2,f__$2,map_LT___$2,meta38476));
});})(___$1))
;
}
return (new cljs.core.async.t38475(fn1,___$1,self__.meta38473,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t38472.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t38472.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t38472.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t38472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38474){var self__ = this;
var _38474__$1 = this;return self__.meta38473;
});
cljs.core.async.t38472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38474,meta38473__$1){var self__ = this;
var _38474__$1 = this;return (new cljs.core.async.t38472(self__.ch,self__.f,self__.map_LT_,meta38473__$1));
});
cljs.core.async.__GT_t38472 = (function __GT_t38472(ch__$1,f__$1,map_LT___$1,meta38473){return (new cljs.core.async.t38472(ch__$1,f__$1,map_LT___$1,meta38473));
});
}
return (new cljs.core.async.t38472(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t38481 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38481 = (function (ch,f,map_GT_,meta38482){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta38482 = meta38482;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38481.cljs$lang$type = true;
cljs.core.async.t38481.cljs$lang$ctorStr = "cljs.core.async/t38481";
cljs.core.async.t38481.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t38481");
});
cljs.core.async.t38481.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t38481.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t38481.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t38481.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t38481.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t38481.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t38481.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38483){var self__ = this;
var _38483__$1 = this;return self__.meta38482;
});
cljs.core.async.t38481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38483,meta38482__$1){var self__ = this;
var _38483__$1 = this;return (new cljs.core.async.t38481(self__.ch,self__.f,self__.map_GT_,meta38482__$1));
});
cljs.core.async.__GT_t38481 = (function __GT_t38481(ch__$1,f__$1,map_GT___$1,meta38482){return (new cljs.core.async.t38481(ch__$1,f__$1,map_GT___$1,meta38482));
});
}
return (new cljs.core.async.t38481(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t38487 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38487 = (function (ch,p,filter_GT_,meta38488){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta38488 = meta38488;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38487.cljs$lang$type = true;
cljs.core.async.t38487.cljs$lang$ctorStr = "cljs.core.async/t38487";
cljs.core.async.t38487.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t38487");
});
cljs.core.async.t38487.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t38487.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t38487.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t38487.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t38487.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t38487.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t38487.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t38487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38489){var self__ = this;
var _38489__$1 = this;return self__.meta38488;
});
cljs.core.async.t38487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38489,meta38488__$1){var self__ = this;
var _38489__$1 = this;return (new cljs.core.async.t38487(self__.ch,self__.p,self__.filter_GT_,meta38488__$1));
});
cljs.core.async.__GT_t38487 = (function __GT_t38487(ch__$1,p__$1,filter_GT___$1,meta38488){return (new cljs.core.async.t38487(ch__$1,p__$1,filter_GT___$1,meta38488));
});
}
return (new cljs.core.async.t38487(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6934__auto___38572 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6934__auto___38572,out){
return (function (){var f__6935__auto__ = (function (){var switch__6869__auto__ = ((function (c__6934__auto___38572,out){
return (function (state_38551){var state_val_38552 = (state_38551[(1)]);if((state_val_38552 === (7)))
{var inst_38547 = (state_38551[(2)]);var state_38551__$1 = state_38551;var statearr_38553_38573 = state_38551__$1;(statearr_38553_38573[(2)] = inst_38547);
(statearr_38553_38573[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38552 === (1)))
{var state_38551__$1 = state_38551;var statearr_38554_38574 = state_38551__$1;(statearr_38554_38574[(2)] = null);
(statearr_38554_38574[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38552 === (4)))
{var inst_38533 = (state_38551[(7)]);var inst_38533__$1 = (state_38551[(2)]);var inst_38534 = (inst_38533__$1 == null);var state_38551__$1 = (function (){var statearr_38555 = state_38551;(statearr_38555[(7)] = inst_38533__$1);
return statearr_38555;
})();if(cljs.core.truth_(inst_38534))
{var statearr_38556_38575 = state_38551__$1;(statearr_38556_38575[(1)] = (5));
} else
{var statearr_38557_38576 = state_38551__$1;(statearr_38557_38576[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38552 === (6)))
{var inst_38533 = (state_38551[(7)]);var inst_38538 = p.call(null,inst_38533);var state_38551__$1 = state_38551;if(cljs.core.truth_(inst_38538))
{var statearr_38558_38577 = state_38551__$1;(statearr_38558_38577[(1)] = (8));
} else
{var statearr_38559_38578 = state_38551__$1;(statearr_38559_38578[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38552 === (3)))
{var inst_38549 = (state_38551[(2)]);var state_38551__$1 = state_38551;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38551__$1,inst_38549);
} else
{if((state_val_38552 === (2)))
{var state_38551__$1 = state_38551;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38551__$1,(4),ch);
} else
{if((state_val_38552 === (11)))
{var inst_38541 = (state_38551[(2)]);var state_38551__$1 = state_38551;var statearr_38560_38579 = state_38551__$1;(statearr_38560_38579[(2)] = inst_38541);
(statearr_38560_38579[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38552 === (9)))
{var state_38551__$1 = state_38551;var statearr_38561_38580 = state_38551__$1;(statearr_38561_38580[(2)] = null);
(statearr_38561_38580[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38552 === (5)))
{var inst_38536 = cljs.core.async.close_BANG_.call(null,out);var state_38551__$1 = state_38551;var statearr_38562_38581 = state_38551__$1;(statearr_38562_38581[(2)] = inst_38536);
(statearr_38562_38581[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38552 === (10)))
{var inst_38544 = (state_38551[(2)]);var state_38551__$1 = (function (){var statearr_38563 = state_38551;(statearr_38563[(8)] = inst_38544);
return statearr_38563;
})();var statearr_38564_38582 = state_38551__$1;(statearr_38564_38582[(2)] = null);
(statearr_38564_38582[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38552 === (8)))
{var inst_38533 = (state_38551[(7)]);var state_38551__$1 = state_38551;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38551__$1,(11),out,inst_38533);
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
});})(c__6934__auto___38572,out))
;return ((function (switch__6869__auto__,c__6934__auto___38572,out){
return (function() {
var state_machine__6870__auto__ = null;
var state_machine__6870__auto____0 = (function (){var statearr_38568 = [null,null,null,null,null,null,null,null,null];(statearr_38568[(0)] = state_machine__6870__auto__);
(statearr_38568[(1)] = (1));
return statearr_38568;
});
var state_machine__6870__auto____1 = (function (state_38551){while(true){
var ret_value__6871__auto__ = (function (){try{while(true){
var result__6872__auto__ = switch__6869__auto__.call(null,state_38551);if(cljs.core.keyword_identical_QMARK_.call(null,result__6872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6872__auto__;
}
break;
}
}catch (e38569){if((e38569 instanceof Object))
{var ex__6873__auto__ = e38569;var statearr_38570_38583 = state_38551;(statearr_38570_38583[(5)] = ex__6873__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38551);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e38569;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38584 = state_38551;
state_38551 = G__38584;
continue;
}
} else
{return ret_value__6871__auto__;
}
break;
}
});
state_machine__6870__auto__ = function(state_38551){
switch(arguments.length){
case 0:
return state_machine__6870__auto____0.call(this);
case 1:
return state_machine__6870__auto____1.call(this,state_38551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6870__auto____0;
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6870__auto____1;
return state_machine__6870__auto__;
})()
;})(switch__6869__auto__,c__6934__auto___38572,out))
})();var state__6936__auto__ = (function (){var statearr_38571 = f__6935__auto__.call(null);(statearr_38571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6934__auto___38572);
return statearr_38571;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6936__auto__);
});})(c__6934__auto___38572,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6934__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6934__auto__){
return (function (){var f__6935__auto__ = (function (){var switch__6869__auto__ = ((function (c__6934__auto__){
return (function (state_38750){var state_val_38751 = (state_38750[(1)]);if((state_val_38751 === (7)))
{var inst_38746 = (state_38750[(2)]);var state_38750__$1 = state_38750;var statearr_38752_38793 = state_38750__$1;(statearr_38752_38793[(2)] = inst_38746);
(statearr_38752_38793[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38751 === (20)))
{var inst_38716 = (state_38750[(7)]);var inst_38727 = (state_38750[(2)]);var inst_38728 = cljs.core.next.call(null,inst_38716);var inst_38702 = inst_38728;var inst_38703 = null;var inst_38704 = (0);var inst_38705 = (0);var state_38750__$1 = (function (){var statearr_38753 = state_38750;(statearr_38753[(8)] = inst_38703);
(statearr_38753[(9)] = inst_38704);
(statearr_38753[(10)] = inst_38727);
(statearr_38753[(11)] = inst_38702);
(statearr_38753[(12)] = inst_38705);
return statearr_38753;
})();var statearr_38754_38794 = state_38750__$1;(statearr_38754_38794[(2)] = null);
(statearr_38754_38794[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38751 === (1)))
{var state_38750__$1 = state_38750;var statearr_38755_38795 = state_38750__$1;(statearr_38755_38795[(2)] = null);
(statearr_38755_38795[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38751 === (4)))
{var inst_38691 = (state_38750[(13)]);var inst_38691__$1 = (state_38750[(2)]);var inst_38692 = (inst_38691__$1 == null);var state_38750__$1 = (function (){var statearr_38756 = state_38750;(statearr_38756[(13)] = inst_38691__$1);
return statearr_38756;
})();if(cljs.core.truth_(inst_38692))
{var statearr_38757_38796 = state_38750__$1;(statearr_38757_38796[(1)] = (5));
} else
{var statearr_38758_38797 = state_38750__$1;(statearr_38758_38797[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38751 === (15)))
{var state_38750__$1 = state_38750;var statearr_38762_38798 = state_38750__$1;(statearr_38762_38798[(2)] = null);
(statearr_38762_38798[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38751 === (21)))
{var state_38750__$1 = state_38750;var statearr_38763_38799 = state_38750__$1;(statearr_38763_38799[(2)] = null);
(statearr_38763_38799[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38751 === (13)))
{var inst_38703 = (state_38750[(8)]);var inst_38704 = (state_38750[(9)]);var inst_38702 = (state_38750[(11)]);var inst_38705 = (state_38750[(12)]);var inst_38712 = (state_38750[(2)]);var inst_38713 = (inst_38705 + (1));var tmp38759 = inst_38703;var tmp38760 = inst_38704;var tmp38761 = inst_38702;var inst_38702__$1 = tmp38761;var inst_38703__$1 = tmp38759;var inst_38704__$1 = tmp38760;var inst_38705__$1 = inst_38713;var state_38750__$1 = (function (){var statearr_38764 = state_38750;(statearr_38764[(8)] = inst_38703__$1);
(statearr_38764[(9)] = inst_38704__$1);
(statearr_38764[(14)] = inst_38712);
(statearr_38764[(11)] = inst_38702__$1);
(statearr_38764[(12)] = inst_38705__$1);
return statearr_38764;
})();var statearr_38765_38800 = state_38750__$1;(statearr_38765_38800[(2)] = null);
(statearr_38765_38800[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38751 === (22)))
{var state_38750__$1 = state_38750;var statearr_38766_38801 = state_38750__$1;(statearr_38766_38801[(2)] = null);
(statearr_38766_38801[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38751 === (6)))
{var inst_38691 = (state_38750[(13)]);var inst_38700 = f.call(null,inst_38691);var inst_38701 = cljs.core.seq.call(null,inst_38700);var inst_38702 = inst_38701;var inst_38703 = null;var inst_38704 = (0);var inst_38705 = (0);var state_38750__$1 = (function (){var statearr_38767 = state_38750;(statearr_38767[(8)] = inst_38703);
(statearr_38767[(9)] = inst_38704);
(statearr_38767[(11)] = inst_38702);
(statearr_38767[(12)] = inst_38705);
return statearr_38767;
})();var statearr_38768_38802 = state_38750__$1;(statearr_38768_38802[(2)] = null);
(statearr_38768_38802[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38751 === (17)))
{var inst_38716 = (state_38750[(7)]);var inst_38720 = cljs.core.chunk_first.call(null,inst_38716);var inst_38721 = cljs.core.chunk_rest.call(null,inst_38716);var inst_38722 = cljs.core.count.call(null,inst_38720);var inst_38702 = inst_38721;var inst_38703 = inst_38720;var inst_38704 = inst_38722;var inst_38705 = (0);var state_38750__$1 = (function (){var statearr_38769 = state_38750;(statearr_38769[(8)] = inst_38703);
(statearr_38769[(9)] = inst_38704);
(statearr_38769[(11)] = inst_38702);
(statearr_38769[(12)] = inst_38705);
return statearr_38769;
})();var statearr_38770_38803 = state_38750__$1;(statearr_38770_38803[(2)] = null);
(statearr_38770_38803[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38751 === (3)))
{var inst_38748 = (state_38750[(2)]);var state_38750__$1 = state_38750;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38750__$1,inst_38748);
} else
{if((state_val_38751 === (12)))
{var inst_38736 = (state_38750[(2)]);var state_38750__$1 = state_38750;var statearr_38771_38804 = state_38750__$1;(statearr_38771_38804[(2)] = inst_38736);
(statearr_38771_38804[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38751 === (2)))
{var state_38750__$1 = state_38750;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38750__$1,(4),in$);
} else
{if((state_val_38751 === (23)))
{var inst_38744 = (state_38750[(2)]);var state_38750__$1 = state_38750;var statearr_38772_38805 = state_38750__$1;(statearr_38772_38805[(2)] = inst_38744);
(statearr_38772_38805[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38751 === (19)))
{var inst_38731 = (state_38750[(2)]);var state_38750__$1 = state_38750;var statearr_38773_38806 = state_38750__$1;(statearr_38773_38806[(2)] = inst_38731);
(statearr_38773_38806[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38751 === (11)))
{var inst_38716 = (state_38750[(7)]);var inst_38702 = (state_38750[(11)]);var inst_38716__$1 = cljs.core.seq.call(null,inst_38702);var state_38750__$1 = (function (){var statearr_38774 = state_38750;(statearr_38774[(7)] = inst_38716__$1);
return statearr_38774;
})();if(inst_38716__$1)
{var statearr_38775_38807 = state_38750__$1;(statearr_38775_38807[(1)] = (14));
} else
{var statearr_38776_38808 = state_38750__$1;(statearr_38776_38808[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38751 === (9)))
{var inst_38738 = (state_38750[(2)]);var inst_38739 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_38750__$1 = (function (){var statearr_38777 = state_38750;(statearr_38777[(15)] = inst_38738);
return statearr_38777;
})();if(cljs.core.truth_(inst_38739))
{var statearr_38778_38809 = state_38750__$1;(statearr_38778_38809[(1)] = (21));
} else
{var statearr_38779_38810 = state_38750__$1;(statearr_38779_38810[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38751 === (5)))
{var inst_38694 = cljs.core.async.close_BANG_.call(null,out);var state_38750__$1 = state_38750;var statearr_38780_38811 = state_38750__$1;(statearr_38780_38811[(2)] = inst_38694);
(statearr_38780_38811[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38751 === (14)))
{var inst_38716 = (state_38750[(7)]);var inst_38718 = cljs.core.chunked_seq_QMARK_.call(null,inst_38716);var state_38750__$1 = state_38750;if(inst_38718)
{var statearr_38781_38812 = state_38750__$1;(statearr_38781_38812[(1)] = (17));
} else
{var statearr_38782_38813 = state_38750__$1;(statearr_38782_38813[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38751 === (16)))
{var inst_38734 = (state_38750[(2)]);var state_38750__$1 = state_38750;var statearr_38783_38814 = state_38750__$1;(statearr_38783_38814[(2)] = inst_38734);
(statearr_38783_38814[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38751 === (10)))
{var inst_38703 = (state_38750[(8)]);var inst_38705 = (state_38750[(12)]);var inst_38710 = cljs.core._nth.call(null,inst_38703,inst_38705);var state_38750__$1 = state_38750;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38750__$1,(13),out,inst_38710);
} else
{if((state_val_38751 === (18)))
{var inst_38716 = (state_38750[(7)]);var inst_38725 = cljs.core.first.call(null,inst_38716);var state_38750__$1 = state_38750;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38750__$1,(20),out,inst_38725);
} else
{if((state_val_38751 === (8)))
{var inst_38704 = (state_38750[(9)]);var inst_38705 = (state_38750[(12)]);var inst_38707 = (inst_38705 < inst_38704);var inst_38708 = inst_38707;var state_38750__$1 = state_38750;if(cljs.core.truth_(inst_38708))
{var statearr_38784_38815 = state_38750__$1;(statearr_38784_38815[(1)] = (10));
} else
{var statearr_38785_38816 = state_38750__$1;(statearr_38785_38816[(1)] = (11));
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
});})(c__6934__auto__))
;return ((function (switch__6869__auto__,c__6934__auto__){
return (function() {
var state_machine__6870__auto__ = null;
var state_machine__6870__auto____0 = (function (){var statearr_38789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38789[(0)] = state_machine__6870__auto__);
(statearr_38789[(1)] = (1));
return statearr_38789;
});
var state_machine__6870__auto____1 = (function (state_38750){while(true){
var ret_value__6871__auto__ = (function (){try{while(true){
var result__6872__auto__ = switch__6869__auto__.call(null,state_38750);if(cljs.core.keyword_identical_QMARK_.call(null,result__6872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6872__auto__;
}
break;
}
}catch (e38790){if((e38790 instanceof Object))
{var ex__6873__auto__ = e38790;var statearr_38791_38817 = state_38750;(statearr_38791_38817[(5)] = ex__6873__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38750);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e38790;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38818 = state_38750;
state_38750 = G__38818;
continue;
}
} else
{return ret_value__6871__auto__;
}
break;
}
});
state_machine__6870__auto__ = function(state_38750){
switch(arguments.length){
case 0:
return state_machine__6870__auto____0.call(this);
case 1:
return state_machine__6870__auto____1.call(this,state_38750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6870__auto____0;
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6870__auto____1;
return state_machine__6870__auto__;
})()
;})(switch__6869__auto__,c__6934__auto__))
})();var state__6936__auto__ = (function (){var statearr_38792 = f__6935__auto__.call(null);(statearr_38792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6934__auto__);
return statearr_38792;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6936__auto__);
});})(c__6934__auto__))
);
return c__6934__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6934__auto___38913 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6934__auto___38913){
return (function (){var f__6935__auto__ = (function (){var switch__6869__auto__ = ((function (c__6934__auto___38913){
return (function (state_38889){var state_val_38890 = (state_38889[(1)]);if((state_val_38890 === (7)))
{var inst_38885 = (state_38889[(2)]);var state_38889__$1 = state_38889;var statearr_38891_38914 = state_38889__$1;(statearr_38891_38914[(2)] = inst_38885);
(statearr_38891_38914[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38890 === (1)))
{var state_38889__$1 = state_38889;var statearr_38892_38915 = state_38889__$1;(statearr_38892_38915[(2)] = null);
(statearr_38892_38915[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38890 === (4)))
{var inst_38868 = (state_38889[(7)]);var inst_38868__$1 = (state_38889[(2)]);var inst_38869 = (inst_38868__$1 == null);var state_38889__$1 = (function (){var statearr_38893 = state_38889;(statearr_38893[(7)] = inst_38868__$1);
return statearr_38893;
})();if(cljs.core.truth_(inst_38869))
{var statearr_38894_38916 = state_38889__$1;(statearr_38894_38916[(1)] = (5));
} else
{var statearr_38895_38917 = state_38889__$1;(statearr_38895_38917[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38890 === (13)))
{var state_38889__$1 = state_38889;var statearr_38896_38918 = state_38889__$1;(statearr_38896_38918[(2)] = null);
(statearr_38896_38918[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38890 === (6)))
{var inst_38868 = (state_38889[(7)]);var state_38889__$1 = state_38889;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38889__$1,(11),to,inst_38868);
} else
{if((state_val_38890 === (3)))
{var inst_38887 = (state_38889[(2)]);var state_38889__$1 = state_38889;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38889__$1,inst_38887);
} else
{if((state_val_38890 === (12)))
{var state_38889__$1 = state_38889;var statearr_38897_38919 = state_38889__$1;(statearr_38897_38919[(2)] = null);
(statearr_38897_38919[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38890 === (2)))
{var state_38889__$1 = state_38889;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38889__$1,(4),from);
} else
{if((state_val_38890 === (11)))
{var inst_38878 = (state_38889[(2)]);var state_38889__$1 = state_38889;if(cljs.core.truth_(inst_38878))
{var statearr_38898_38920 = state_38889__$1;(statearr_38898_38920[(1)] = (12));
} else
{var statearr_38899_38921 = state_38889__$1;(statearr_38899_38921[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38890 === (9)))
{var state_38889__$1 = state_38889;var statearr_38900_38922 = state_38889__$1;(statearr_38900_38922[(2)] = null);
(statearr_38900_38922[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38890 === (5)))
{var state_38889__$1 = state_38889;if(cljs.core.truth_(close_QMARK_))
{var statearr_38901_38923 = state_38889__$1;(statearr_38901_38923[(1)] = (8));
} else
{var statearr_38902_38924 = state_38889__$1;(statearr_38902_38924[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38890 === (14)))
{var inst_38883 = (state_38889[(2)]);var state_38889__$1 = state_38889;var statearr_38903_38925 = state_38889__$1;(statearr_38903_38925[(2)] = inst_38883);
(statearr_38903_38925[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38890 === (10)))
{var inst_38875 = (state_38889[(2)]);var state_38889__$1 = state_38889;var statearr_38904_38926 = state_38889__$1;(statearr_38904_38926[(2)] = inst_38875);
(statearr_38904_38926[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38890 === (8)))
{var inst_38872 = cljs.core.async.close_BANG_.call(null,to);var state_38889__$1 = state_38889;var statearr_38905_38927 = state_38889__$1;(statearr_38905_38927[(2)] = inst_38872);
(statearr_38905_38927[(1)] = (10));
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
});})(c__6934__auto___38913))
;return ((function (switch__6869__auto__,c__6934__auto___38913){
return (function() {
var state_machine__6870__auto__ = null;
var state_machine__6870__auto____0 = (function (){var statearr_38909 = [null,null,null,null,null,null,null,null];(statearr_38909[(0)] = state_machine__6870__auto__);
(statearr_38909[(1)] = (1));
return statearr_38909;
});
var state_machine__6870__auto____1 = (function (state_38889){while(true){
var ret_value__6871__auto__ = (function (){try{while(true){
var result__6872__auto__ = switch__6869__auto__.call(null,state_38889);if(cljs.core.keyword_identical_QMARK_.call(null,result__6872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6872__auto__;
}
break;
}
}catch (e38910){if((e38910 instanceof Object))
{var ex__6873__auto__ = e38910;var statearr_38911_38928 = state_38889;(statearr_38911_38928[(5)] = ex__6873__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38889);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e38910;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38929 = state_38889;
state_38889 = G__38929;
continue;
}
} else
{return ret_value__6871__auto__;
}
break;
}
});
state_machine__6870__auto__ = function(state_38889){
switch(arguments.length){
case 0:
return state_machine__6870__auto____0.call(this);
case 1:
return state_machine__6870__auto____1.call(this,state_38889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6870__auto____0;
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6870__auto____1;
return state_machine__6870__auto__;
})()
;})(switch__6869__auto__,c__6934__auto___38913))
})();var state__6936__auto__ = (function (){var statearr_38912 = f__6935__auto__.call(null);(statearr_38912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6934__auto___38913);
return statearr_38912;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6936__auto__);
});})(c__6934__auto___38913))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6934__auto___39030 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6934__auto___39030,tc,fc){
return (function (){var f__6935__auto__ = (function (){var switch__6869__auto__ = ((function (c__6934__auto___39030,tc,fc){
return (function (state_39005){var state_val_39006 = (state_39005[(1)]);if((state_val_39006 === (7)))
{var inst_39001 = (state_39005[(2)]);var state_39005__$1 = state_39005;var statearr_39007_39031 = state_39005__$1;(statearr_39007_39031[(2)] = inst_39001);
(statearr_39007_39031[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39006 === (1)))
{var state_39005__$1 = state_39005;var statearr_39008_39032 = state_39005__$1;(statearr_39008_39032[(2)] = null);
(statearr_39008_39032[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39006 === (4)))
{var inst_38982 = (state_39005[(7)]);var inst_38982__$1 = (state_39005[(2)]);var inst_38983 = (inst_38982__$1 == null);var state_39005__$1 = (function (){var statearr_39009 = state_39005;(statearr_39009[(7)] = inst_38982__$1);
return statearr_39009;
})();if(cljs.core.truth_(inst_38983))
{var statearr_39010_39033 = state_39005__$1;(statearr_39010_39033[(1)] = (5));
} else
{var statearr_39011_39034 = state_39005__$1;(statearr_39011_39034[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39006 === (13)))
{var state_39005__$1 = state_39005;var statearr_39012_39035 = state_39005__$1;(statearr_39012_39035[(2)] = null);
(statearr_39012_39035[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39006 === (6)))
{var inst_38982 = (state_39005[(7)]);var inst_38988 = p.call(null,inst_38982);var state_39005__$1 = state_39005;if(cljs.core.truth_(inst_38988))
{var statearr_39013_39036 = state_39005__$1;(statearr_39013_39036[(1)] = (9));
} else
{var statearr_39014_39037 = state_39005__$1;(statearr_39014_39037[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39006 === (3)))
{var inst_39003 = (state_39005[(2)]);var state_39005__$1 = state_39005;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39005__$1,inst_39003);
} else
{if((state_val_39006 === (12)))
{var state_39005__$1 = state_39005;var statearr_39015_39038 = state_39005__$1;(statearr_39015_39038[(2)] = null);
(statearr_39015_39038[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39006 === (2)))
{var state_39005__$1 = state_39005;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39005__$1,(4),ch);
} else
{if((state_val_39006 === (11)))
{var inst_38982 = (state_39005[(7)]);var inst_38992 = (state_39005[(2)]);var state_39005__$1 = state_39005;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39005__$1,(8),inst_38992,inst_38982);
} else
{if((state_val_39006 === (9)))
{var state_39005__$1 = state_39005;var statearr_39016_39039 = state_39005__$1;(statearr_39016_39039[(2)] = tc);
(statearr_39016_39039[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39006 === (5)))
{var inst_38985 = cljs.core.async.close_BANG_.call(null,tc);var inst_38986 = cljs.core.async.close_BANG_.call(null,fc);var state_39005__$1 = (function (){var statearr_39017 = state_39005;(statearr_39017[(8)] = inst_38985);
return statearr_39017;
})();var statearr_39018_39040 = state_39005__$1;(statearr_39018_39040[(2)] = inst_38986);
(statearr_39018_39040[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39006 === (14)))
{var inst_38999 = (state_39005[(2)]);var state_39005__$1 = state_39005;var statearr_39019_39041 = state_39005__$1;(statearr_39019_39041[(2)] = inst_38999);
(statearr_39019_39041[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39006 === (10)))
{var state_39005__$1 = state_39005;var statearr_39020_39042 = state_39005__$1;(statearr_39020_39042[(2)] = fc);
(statearr_39020_39042[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39006 === (8)))
{var inst_38994 = (state_39005[(2)]);var state_39005__$1 = state_39005;if(cljs.core.truth_(inst_38994))
{var statearr_39021_39043 = state_39005__$1;(statearr_39021_39043[(1)] = (12));
} else
{var statearr_39022_39044 = state_39005__$1;(statearr_39022_39044[(1)] = (13));
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
});})(c__6934__auto___39030,tc,fc))
;return ((function (switch__6869__auto__,c__6934__auto___39030,tc,fc){
return (function() {
var state_machine__6870__auto__ = null;
var state_machine__6870__auto____0 = (function (){var statearr_39026 = [null,null,null,null,null,null,null,null,null];(statearr_39026[(0)] = state_machine__6870__auto__);
(statearr_39026[(1)] = (1));
return statearr_39026;
});
var state_machine__6870__auto____1 = (function (state_39005){while(true){
var ret_value__6871__auto__ = (function (){try{while(true){
var result__6872__auto__ = switch__6869__auto__.call(null,state_39005);if(cljs.core.keyword_identical_QMARK_.call(null,result__6872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6872__auto__;
}
break;
}
}catch (e39027){if((e39027 instanceof Object))
{var ex__6873__auto__ = e39027;var statearr_39028_39045 = state_39005;(statearr_39028_39045[(5)] = ex__6873__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39005);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e39027;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__39046 = state_39005;
state_39005 = G__39046;
continue;
}
} else
{return ret_value__6871__auto__;
}
break;
}
});
state_machine__6870__auto__ = function(state_39005){
switch(arguments.length){
case 0:
return state_machine__6870__auto____0.call(this);
case 1:
return state_machine__6870__auto____1.call(this,state_39005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6870__auto____0;
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6870__auto____1;
return state_machine__6870__auto__;
})()
;})(switch__6869__auto__,c__6934__auto___39030,tc,fc))
})();var state__6936__auto__ = (function (){var statearr_39029 = f__6935__auto__.call(null);(statearr_39029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6934__auto___39030);
return statearr_39029;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6936__auto__);
});})(c__6934__auto___39030,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6934__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6934__auto__){
return (function (){var f__6935__auto__ = (function (){var switch__6869__auto__ = ((function (c__6934__auto__){
return (function (state_39093){var state_val_39094 = (state_39093[(1)]);if((state_val_39094 === (7)))
{var inst_39089 = (state_39093[(2)]);var state_39093__$1 = state_39093;var statearr_39095_39111 = state_39093__$1;(statearr_39095_39111[(2)] = inst_39089);
(statearr_39095_39111[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39094 === (6)))
{var inst_39079 = (state_39093[(7)]);var inst_39082 = (state_39093[(8)]);var inst_39086 = f.call(null,inst_39079,inst_39082);var inst_39079__$1 = inst_39086;var state_39093__$1 = (function (){var statearr_39096 = state_39093;(statearr_39096[(7)] = inst_39079__$1);
return statearr_39096;
})();var statearr_39097_39112 = state_39093__$1;(statearr_39097_39112[(2)] = null);
(statearr_39097_39112[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39094 === (5)))
{var inst_39079 = (state_39093[(7)]);var state_39093__$1 = state_39093;var statearr_39098_39113 = state_39093__$1;(statearr_39098_39113[(2)] = inst_39079);
(statearr_39098_39113[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39094 === (4)))
{var inst_39082 = (state_39093[(8)]);var inst_39082__$1 = (state_39093[(2)]);var inst_39083 = (inst_39082__$1 == null);var state_39093__$1 = (function (){var statearr_39099 = state_39093;(statearr_39099[(8)] = inst_39082__$1);
return statearr_39099;
})();if(cljs.core.truth_(inst_39083))
{var statearr_39100_39114 = state_39093__$1;(statearr_39100_39114[(1)] = (5));
} else
{var statearr_39101_39115 = state_39093__$1;(statearr_39101_39115[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39094 === (3)))
{var inst_39091 = (state_39093[(2)]);var state_39093__$1 = state_39093;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39093__$1,inst_39091);
} else
{if((state_val_39094 === (2)))
{var state_39093__$1 = state_39093;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39093__$1,(4),ch);
} else
{if((state_val_39094 === (1)))
{var inst_39079 = init;var state_39093__$1 = (function (){var statearr_39102 = state_39093;(statearr_39102[(7)] = inst_39079);
return statearr_39102;
})();var statearr_39103_39116 = state_39093__$1;(statearr_39103_39116[(2)] = null);
(statearr_39103_39116[(1)] = (2));
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
});})(c__6934__auto__))
;return ((function (switch__6869__auto__,c__6934__auto__){
return (function() {
var state_machine__6870__auto__ = null;
var state_machine__6870__auto____0 = (function (){var statearr_39107 = [null,null,null,null,null,null,null,null,null];(statearr_39107[(0)] = state_machine__6870__auto__);
(statearr_39107[(1)] = (1));
return statearr_39107;
});
var state_machine__6870__auto____1 = (function (state_39093){while(true){
var ret_value__6871__auto__ = (function (){try{while(true){
var result__6872__auto__ = switch__6869__auto__.call(null,state_39093);if(cljs.core.keyword_identical_QMARK_.call(null,result__6872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6872__auto__;
}
break;
}
}catch (e39108){if((e39108 instanceof Object))
{var ex__6873__auto__ = e39108;var statearr_39109_39117 = state_39093;(statearr_39109_39117[(5)] = ex__6873__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39093);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e39108;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__39118 = state_39093;
state_39093 = G__39118;
continue;
}
} else
{return ret_value__6871__auto__;
}
break;
}
});
state_machine__6870__auto__ = function(state_39093){
switch(arguments.length){
case 0:
return state_machine__6870__auto____0.call(this);
case 1:
return state_machine__6870__auto____1.call(this,state_39093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6870__auto____0;
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6870__auto____1;
return state_machine__6870__auto__;
})()
;})(switch__6869__auto__,c__6934__auto__))
})();var state__6936__auto__ = (function (){var statearr_39110 = f__6935__auto__.call(null);(statearr_39110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6934__auto__);
return statearr_39110;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6936__auto__);
});})(c__6934__auto__))
);
return c__6934__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6934__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6934__auto__){
return (function (){var f__6935__auto__ = (function (){var switch__6869__auto__ = ((function (c__6934__auto__){
return (function (state_39192){var state_val_39193 = (state_39192[(1)]);if((state_val_39193 === (7)))
{var inst_39174 = (state_39192[(2)]);var state_39192__$1 = state_39192;var statearr_39194_39217 = state_39192__$1;(statearr_39194_39217[(2)] = inst_39174);
(statearr_39194_39217[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39193 === (1)))
{var inst_39168 = cljs.core.seq.call(null,coll);var inst_39169 = inst_39168;var state_39192__$1 = (function (){var statearr_39195 = state_39192;(statearr_39195[(7)] = inst_39169);
return statearr_39195;
})();var statearr_39196_39218 = state_39192__$1;(statearr_39196_39218[(2)] = null);
(statearr_39196_39218[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39193 === (4)))
{var inst_39169 = (state_39192[(7)]);var inst_39172 = cljs.core.first.call(null,inst_39169);var state_39192__$1 = state_39192;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39192__$1,(7),ch,inst_39172);
} else
{if((state_val_39193 === (13)))
{var inst_39186 = (state_39192[(2)]);var state_39192__$1 = state_39192;var statearr_39197_39219 = state_39192__$1;(statearr_39197_39219[(2)] = inst_39186);
(statearr_39197_39219[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39193 === (6)))
{var inst_39177 = (state_39192[(2)]);var state_39192__$1 = state_39192;if(cljs.core.truth_(inst_39177))
{var statearr_39198_39220 = state_39192__$1;(statearr_39198_39220[(1)] = (8));
} else
{var statearr_39199_39221 = state_39192__$1;(statearr_39199_39221[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39193 === (3)))
{var inst_39190 = (state_39192[(2)]);var state_39192__$1 = state_39192;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39192__$1,inst_39190);
} else
{if((state_val_39193 === (12)))
{var state_39192__$1 = state_39192;var statearr_39200_39222 = state_39192__$1;(statearr_39200_39222[(2)] = null);
(statearr_39200_39222[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39193 === (2)))
{var inst_39169 = (state_39192[(7)]);var state_39192__$1 = state_39192;if(cljs.core.truth_(inst_39169))
{var statearr_39201_39223 = state_39192__$1;(statearr_39201_39223[(1)] = (4));
} else
{var statearr_39202_39224 = state_39192__$1;(statearr_39202_39224[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39193 === (11)))
{var inst_39183 = cljs.core.async.close_BANG_.call(null,ch);var state_39192__$1 = state_39192;var statearr_39203_39225 = state_39192__$1;(statearr_39203_39225[(2)] = inst_39183);
(statearr_39203_39225[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39193 === (9)))
{var state_39192__$1 = state_39192;if(cljs.core.truth_(close_QMARK_))
{var statearr_39204_39226 = state_39192__$1;(statearr_39204_39226[(1)] = (11));
} else
{var statearr_39205_39227 = state_39192__$1;(statearr_39205_39227[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39193 === (5)))
{var inst_39169 = (state_39192[(7)]);var state_39192__$1 = state_39192;var statearr_39206_39228 = state_39192__$1;(statearr_39206_39228[(2)] = inst_39169);
(statearr_39206_39228[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39193 === (10)))
{var inst_39188 = (state_39192[(2)]);var state_39192__$1 = state_39192;var statearr_39207_39229 = state_39192__$1;(statearr_39207_39229[(2)] = inst_39188);
(statearr_39207_39229[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39193 === (8)))
{var inst_39169 = (state_39192[(7)]);var inst_39179 = cljs.core.next.call(null,inst_39169);var inst_39169__$1 = inst_39179;var state_39192__$1 = (function (){var statearr_39208 = state_39192;(statearr_39208[(7)] = inst_39169__$1);
return statearr_39208;
})();var statearr_39209_39230 = state_39192__$1;(statearr_39209_39230[(2)] = null);
(statearr_39209_39230[(1)] = (2));
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
});})(c__6934__auto__))
;return ((function (switch__6869__auto__,c__6934__auto__){
return (function() {
var state_machine__6870__auto__ = null;
var state_machine__6870__auto____0 = (function (){var statearr_39213 = [null,null,null,null,null,null,null,null];(statearr_39213[(0)] = state_machine__6870__auto__);
(statearr_39213[(1)] = (1));
return statearr_39213;
});
var state_machine__6870__auto____1 = (function (state_39192){while(true){
var ret_value__6871__auto__ = (function (){try{while(true){
var result__6872__auto__ = switch__6869__auto__.call(null,state_39192);if(cljs.core.keyword_identical_QMARK_.call(null,result__6872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6872__auto__;
}
break;
}
}catch (e39214){if((e39214 instanceof Object))
{var ex__6873__auto__ = e39214;var statearr_39215_39231 = state_39192;(statearr_39215_39231[(5)] = ex__6873__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39192);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e39214;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__39232 = state_39192;
state_39192 = G__39232;
continue;
}
} else
{return ret_value__6871__auto__;
}
break;
}
});
state_machine__6870__auto__ = function(state_39192){
switch(arguments.length){
case 0:
return state_machine__6870__auto____0.call(this);
case 1:
return state_machine__6870__auto____1.call(this,state_39192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6870__auto____0;
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6870__auto____1;
return state_machine__6870__auto__;
})()
;})(switch__6869__auto__,c__6934__auto__))
})();var state__6936__auto__ = (function (){var statearr_39216 = f__6935__auto__.call(null);(statearr_39216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6934__auto__);
return statearr_39216;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6936__auto__);
});})(c__6934__auto__))
);
return c__6934__auto__;
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
cljs.core.async.Mux = (function (){var obj39234 = {};return obj39234;
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
cljs.core.async.Mult = (function (){var obj39236 = {};return obj39236;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t39458 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t39458 = (function (cs,ch,mult,meta39459){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta39459 = meta39459;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39458.cljs$lang$type = true;
cljs.core.async.t39458.cljs$lang$ctorStr = "cljs.core.async/t39458";
cljs.core.async.t39458.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t39458");
});})(cs))
;
cljs.core.async.t39458.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t39458.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t39458.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t39458.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t39458.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t39458.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t39458.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_39460){var self__ = this;
var _39460__$1 = this;return self__.meta39459;
});})(cs))
;
cljs.core.async.t39458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_39460,meta39459__$1){var self__ = this;
var _39460__$1 = this;return (new cljs.core.async.t39458(self__.cs,self__.ch,self__.mult,meta39459__$1));
});})(cs))
;
cljs.core.async.__GT_t39458 = ((function (cs){
return (function __GT_t39458(cs__$1,ch__$1,mult__$1,meta39459){return (new cljs.core.async.t39458(cs__$1,ch__$1,mult__$1,meta39459));
});})(cs))
;
}
return (new cljs.core.async.t39458(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6934__auto___39679 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6934__auto___39679,cs,m,dchan,dctr,done){
return (function (){var f__6935__auto__ = (function (){var switch__6869__auto__ = ((function (c__6934__auto___39679,cs,m,dchan,dctr,done){
return (function (state_39591){var state_val_39592 = (state_39591[(1)]);if((state_val_39592 === (7)))
{var inst_39587 = (state_39591[(2)]);var state_39591__$1 = state_39591;var statearr_39593_39680 = state_39591__$1;(statearr_39593_39680[(2)] = inst_39587);
(statearr_39593_39680[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (20)))
{var inst_39492 = (state_39591[(7)]);var inst_39502 = cljs.core.first.call(null,inst_39492);var inst_39503 = cljs.core.nth.call(null,inst_39502,(0),null);var inst_39504 = cljs.core.nth.call(null,inst_39502,(1),null);var state_39591__$1 = (function (){var statearr_39594 = state_39591;(statearr_39594[(8)] = inst_39503);
return statearr_39594;
})();if(cljs.core.truth_(inst_39504))
{var statearr_39595_39681 = state_39591__$1;(statearr_39595_39681[(1)] = (22));
} else
{var statearr_39596_39682 = state_39591__$1;(statearr_39596_39682[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (27)))
{var inst_39534 = (state_39591[(9)]);var inst_39463 = (state_39591[(10)]);var inst_39532 = (state_39591[(11)]);var inst_39539 = (state_39591[(12)]);var inst_39539__$1 = cljs.core._nth.call(null,inst_39532,inst_39534);var inst_39540 = cljs.core.async.put_BANG_.call(null,inst_39539__$1,inst_39463,done);var state_39591__$1 = (function (){var statearr_39597 = state_39591;(statearr_39597[(12)] = inst_39539__$1);
return statearr_39597;
})();if(cljs.core.truth_(inst_39540))
{var statearr_39598_39683 = state_39591__$1;(statearr_39598_39683[(1)] = (30));
} else
{var statearr_39599_39684 = state_39591__$1;(statearr_39599_39684[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (1)))
{var state_39591__$1 = state_39591;var statearr_39600_39685 = state_39591__$1;(statearr_39600_39685[(2)] = null);
(statearr_39600_39685[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (24)))
{var inst_39492 = (state_39591[(7)]);var inst_39509 = (state_39591[(2)]);var inst_39510 = cljs.core.next.call(null,inst_39492);var inst_39472 = inst_39510;var inst_39473 = null;var inst_39474 = (0);var inst_39475 = (0);var state_39591__$1 = (function (){var statearr_39601 = state_39591;(statearr_39601[(13)] = inst_39509);
(statearr_39601[(14)] = inst_39474);
(statearr_39601[(15)] = inst_39475);
(statearr_39601[(16)] = inst_39472);
(statearr_39601[(17)] = inst_39473);
return statearr_39601;
})();var statearr_39602_39686 = state_39591__$1;(statearr_39602_39686[(2)] = null);
(statearr_39602_39686[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (39)))
{var state_39591__$1 = state_39591;var statearr_39606_39687 = state_39591__$1;(statearr_39606_39687[(2)] = null);
(statearr_39606_39687[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (4)))
{var inst_39463 = (state_39591[(10)]);var inst_39463__$1 = (state_39591[(2)]);var inst_39464 = (inst_39463__$1 == null);var state_39591__$1 = (function (){var statearr_39607 = state_39591;(statearr_39607[(10)] = inst_39463__$1);
return statearr_39607;
})();if(cljs.core.truth_(inst_39464))
{var statearr_39608_39688 = state_39591__$1;(statearr_39608_39688[(1)] = (5));
} else
{var statearr_39609_39689 = state_39591__$1;(statearr_39609_39689[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (15)))
{var inst_39474 = (state_39591[(14)]);var inst_39475 = (state_39591[(15)]);var inst_39472 = (state_39591[(16)]);var inst_39473 = (state_39591[(17)]);var inst_39488 = (state_39591[(2)]);var inst_39489 = (inst_39475 + (1));var tmp39603 = inst_39474;var tmp39604 = inst_39472;var tmp39605 = inst_39473;var inst_39472__$1 = tmp39604;var inst_39473__$1 = tmp39605;var inst_39474__$1 = tmp39603;var inst_39475__$1 = inst_39489;var state_39591__$1 = (function (){var statearr_39610 = state_39591;(statearr_39610[(14)] = inst_39474__$1);
(statearr_39610[(18)] = inst_39488);
(statearr_39610[(15)] = inst_39475__$1);
(statearr_39610[(16)] = inst_39472__$1);
(statearr_39610[(17)] = inst_39473__$1);
return statearr_39610;
})();var statearr_39611_39690 = state_39591__$1;(statearr_39611_39690[(2)] = null);
(statearr_39611_39690[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (21)))
{var inst_39513 = (state_39591[(2)]);var state_39591__$1 = state_39591;var statearr_39615_39691 = state_39591__$1;(statearr_39615_39691[(2)] = inst_39513);
(statearr_39615_39691[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (31)))
{var inst_39539 = (state_39591[(12)]);var inst_39543 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_39544 = cljs.core.async.untap_STAR_.call(null,m,inst_39539);var state_39591__$1 = (function (){var statearr_39616 = state_39591;(statearr_39616[(19)] = inst_39543);
return statearr_39616;
})();var statearr_39617_39692 = state_39591__$1;(statearr_39617_39692[(2)] = inst_39544);
(statearr_39617_39692[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (32)))
{var inst_39534 = (state_39591[(9)]);var inst_39531 = (state_39591[(20)]);var inst_39533 = (state_39591[(21)]);var inst_39532 = (state_39591[(11)]);var inst_39546 = (state_39591[(2)]);var inst_39547 = (inst_39534 + (1));var tmp39612 = inst_39531;var tmp39613 = inst_39533;var tmp39614 = inst_39532;var inst_39531__$1 = tmp39612;var inst_39532__$1 = tmp39614;var inst_39533__$1 = tmp39613;var inst_39534__$1 = inst_39547;var state_39591__$1 = (function (){var statearr_39618 = state_39591;(statearr_39618[(9)] = inst_39534__$1);
(statearr_39618[(20)] = inst_39531__$1);
(statearr_39618[(21)] = inst_39533__$1);
(statearr_39618[(11)] = inst_39532__$1);
(statearr_39618[(22)] = inst_39546);
return statearr_39618;
})();var statearr_39619_39693 = state_39591__$1;(statearr_39619_39693[(2)] = null);
(statearr_39619_39693[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (40)))
{var inst_39559 = (state_39591[(23)]);var inst_39563 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_39564 = cljs.core.async.untap_STAR_.call(null,m,inst_39559);var state_39591__$1 = (function (){var statearr_39620 = state_39591;(statearr_39620[(24)] = inst_39563);
return statearr_39620;
})();var statearr_39621_39694 = state_39591__$1;(statearr_39621_39694[(2)] = inst_39564);
(statearr_39621_39694[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (33)))
{var inst_39550 = (state_39591[(25)]);var inst_39552 = cljs.core.chunked_seq_QMARK_.call(null,inst_39550);var state_39591__$1 = state_39591;if(inst_39552)
{var statearr_39622_39695 = state_39591__$1;(statearr_39622_39695[(1)] = (36));
} else
{var statearr_39623_39696 = state_39591__$1;(statearr_39623_39696[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (13)))
{var inst_39482 = (state_39591[(26)]);var inst_39485 = cljs.core.async.close_BANG_.call(null,inst_39482);var state_39591__$1 = state_39591;var statearr_39624_39697 = state_39591__$1;(statearr_39624_39697[(2)] = inst_39485);
(statearr_39624_39697[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (22)))
{var inst_39503 = (state_39591[(8)]);var inst_39506 = cljs.core.async.close_BANG_.call(null,inst_39503);var state_39591__$1 = state_39591;var statearr_39625_39698 = state_39591__$1;(statearr_39625_39698[(2)] = inst_39506);
(statearr_39625_39698[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (36)))
{var inst_39550 = (state_39591[(25)]);var inst_39554 = cljs.core.chunk_first.call(null,inst_39550);var inst_39555 = cljs.core.chunk_rest.call(null,inst_39550);var inst_39556 = cljs.core.count.call(null,inst_39554);var inst_39531 = inst_39555;var inst_39532 = inst_39554;var inst_39533 = inst_39556;var inst_39534 = (0);var state_39591__$1 = (function (){var statearr_39626 = state_39591;(statearr_39626[(9)] = inst_39534);
(statearr_39626[(20)] = inst_39531);
(statearr_39626[(21)] = inst_39533);
(statearr_39626[(11)] = inst_39532);
return statearr_39626;
})();var statearr_39627_39699 = state_39591__$1;(statearr_39627_39699[(2)] = null);
(statearr_39627_39699[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (41)))
{var inst_39550 = (state_39591[(25)]);var inst_39566 = (state_39591[(2)]);var inst_39567 = cljs.core.next.call(null,inst_39550);var inst_39531 = inst_39567;var inst_39532 = null;var inst_39533 = (0);var inst_39534 = (0);var state_39591__$1 = (function (){var statearr_39628 = state_39591;(statearr_39628[(9)] = inst_39534);
(statearr_39628[(20)] = inst_39531);
(statearr_39628[(21)] = inst_39533);
(statearr_39628[(27)] = inst_39566);
(statearr_39628[(11)] = inst_39532);
return statearr_39628;
})();var statearr_39629_39700 = state_39591__$1;(statearr_39629_39700[(2)] = null);
(statearr_39629_39700[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (43)))
{var state_39591__$1 = state_39591;var statearr_39630_39701 = state_39591__$1;(statearr_39630_39701[(2)] = null);
(statearr_39630_39701[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (29)))
{var inst_39575 = (state_39591[(2)]);var state_39591__$1 = state_39591;var statearr_39631_39702 = state_39591__$1;(statearr_39631_39702[(2)] = inst_39575);
(statearr_39631_39702[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (44)))
{var inst_39584 = (state_39591[(2)]);var state_39591__$1 = (function (){var statearr_39632 = state_39591;(statearr_39632[(28)] = inst_39584);
return statearr_39632;
})();var statearr_39633_39703 = state_39591__$1;(statearr_39633_39703[(2)] = null);
(statearr_39633_39703[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (6)))
{var inst_39523 = (state_39591[(29)]);var inst_39522 = cljs.core.deref.call(null,cs);var inst_39523__$1 = cljs.core.keys.call(null,inst_39522);var inst_39524 = cljs.core.count.call(null,inst_39523__$1);var inst_39525 = cljs.core.reset_BANG_.call(null,dctr,inst_39524);var inst_39530 = cljs.core.seq.call(null,inst_39523__$1);var inst_39531 = inst_39530;var inst_39532 = null;var inst_39533 = (0);var inst_39534 = (0);var state_39591__$1 = (function (){var statearr_39634 = state_39591;(statearr_39634[(9)] = inst_39534);
(statearr_39634[(20)] = inst_39531);
(statearr_39634[(29)] = inst_39523__$1);
(statearr_39634[(21)] = inst_39533);
(statearr_39634[(11)] = inst_39532);
(statearr_39634[(30)] = inst_39525);
return statearr_39634;
})();var statearr_39635_39704 = state_39591__$1;(statearr_39635_39704[(2)] = null);
(statearr_39635_39704[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (28)))
{var inst_39550 = (state_39591[(25)]);var inst_39531 = (state_39591[(20)]);var inst_39550__$1 = cljs.core.seq.call(null,inst_39531);var state_39591__$1 = (function (){var statearr_39636 = state_39591;(statearr_39636[(25)] = inst_39550__$1);
return statearr_39636;
})();if(inst_39550__$1)
{var statearr_39637_39705 = state_39591__$1;(statearr_39637_39705[(1)] = (33));
} else
{var statearr_39638_39706 = state_39591__$1;(statearr_39638_39706[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (25)))
{var inst_39534 = (state_39591[(9)]);var inst_39533 = (state_39591[(21)]);var inst_39536 = (inst_39534 < inst_39533);var inst_39537 = inst_39536;var state_39591__$1 = state_39591;if(cljs.core.truth_(inst_39537))
{var statearr_39639_39707 = state_39591__$1;(statearr_39639_39707[(1)] = (27));
} else
{var statearr_39640_39708 = state_39591__$1;(statearr_39640_39708[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (34)))
{var state_39591__$1 = state_39591;var statearr_39641_39709 = state_39591__$1;(statearr_39641_39709[(2)] = null);
(statearr_39641_39709[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (17)))
{var state_39591__$1 = state_39591;var statearr_39642_39710 = state_39591__$1;(statearr_39642_39710[(2)] = null);
(statearr_39642_39710[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (3)))
{var inst_39589 = (state_39591[(2)]);var state_39591__$1 = state_39591;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39591__$1,inst_39589);
} else
{if((state_val_39592 === (12)))
{var inst_39518 = (state_39591[(2)]);var state_39591__$1 = state_39591;var statearr_39643_39711 = state_39591__$1;(statearr_39643_39711[(2)] = inst_39518);
(statearr_39643_39711[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (2)))
{var state_39591__$1 = state_39591;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39591__$1,(4),ch);
} else
{if((state_val_39592 === (23)))
{var state_39591__$1 = state_39591;var statearr_39644_39712 = state_39591__$1;(statearr_39644_39712[(2)] = null);
(statearr_39644_39712[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (35)))
{var inst_39573 = (state_39591[(2)]);var state_39591__$1 = state_39591;var statearr_39645_39713 = state_39591__$1;(statearr_39645_39713[(2)] = inst_39573);
(statearr_39645_39713[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (19)))
{var inst_39492 = (state_39591[(7)]);var inst_39496 = cljs.core.chunk_first.call(null,inst_39492);var inst_39497 = cljs.core.chunk_rest.call(null,inst_39492);var inst_39498 = cljs.core.count.call(null,inst_39496);var inst_39472 = inst_39497;var inst_39473 = inst_39496;var inst_39474 = inst_39498;var inst_39475 = (0);var state_39591__$1 = (function (){var statearr_39646 = state_39591;(statearr_39646[(14)] = inst_39474);
(statearr_39646[(15)] = inst_39475);
(statearr_39646[(16)] = inst_39472);
(statearr_39646[(17)] = inst_39473);
return statearr_39646;
})();var statearr_39647_39714 = state_39591__$1;(statearr_39647_39714[(2)] = null);
(statearr_39647_39714[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (11)))
{var inst_39492 = (state_39591[(7)]);var inst_39472 = (state_39591[(16)]);var inst_39492__$1 = cljs.core.seq.call(null,inst_39472);var state_39591__$1 = (function (){var statearr_39648 = state_39591;(statearr_39648[(7)] = inst_39492__$1);
return statearr_39648;
})();if(inst_39492__$1)
{var statearr_39649_39715 = state_39591__$1;(statearr_39649_39715[(1)] = (16));
} else
{var statearr_39650_39716 = state_39591__$1;(statearr_39650_39716[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (9)))
{var inst_39520 = (state_39591[(2)]);var state_39591__$1 = state_39591;var statearr_39651_39717 = state_39591__$1;(statearr_39651_39717[(2)] = inst_39520);
(statearr_39651_39717[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (5)))
{var inst_39470 = cljs.core.deref.call(null,cs);var inst_39471 = cljs.core.seq.call(null,inst_39470);var inst_39472 = inst_39471;var inst_39473 = null;var inst_39474 = (0);var inst_39475 = (0);var state_39591__$1 = (function (){var statearr_39652 = state_39591;(statearr_39652[(14)] = inst_39474);
(statearr_39652[(15)] = inst_39475);
(statearr_39652[(16)] = inst_39472);
(statearr_39652[(17)] = inst_39473);
return statearr_39652;
})();var statearr_39653_39718 = state_39591__$1;(statearr_39653_39718[(2)] = null);
(statearr_39653_39718[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (14)))
{var state_39591__$1 = state_39591;var statearr_39654_39719 = state_39591__$1;(statearr_39654_39719[(2)] = null);
(statearr_39654_39719[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (45)))
{var inst_39581 = (state_39591[(2)]);var state_39591__$1 = state_39591;var statearr_39655_39720 = state_39591__$1;(statearr_39655_39720[(2)] = inst_39581);
(statearr_39655_39720[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (26)))
{var inst_39523 = (state_39591[(29)]);var inst_39577 = (state_39591[(2)]);var inst_39578 = cljs.core.seq.call(null,inst_39523);var state_39591__$1 = (function (){var statearr_39656 = state_39591;(statearr_39656[(31)] = inst_39577);
return statearr_39656;
})();if(inst_39578)
{var statearr_39657_39721 = state_39591__$1;(statearr_39657_39721[(1)] = (42));
} else
{var statearr_39658_39722 = state_39591__$1;(statearr_39658_39722[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (16)))
{var inst_39492 = (state_39591[(7)]);var inst_39494 = cljs.core.chunked_seq_QMARK_.call(null,inst_39492);var state_39591__$1 = state_39591;if(inst_39494)
{var statearr_39659_39723 = state_39591__$1;(statearr_39659_39723[(1)] = (19));
} else
{var statearr_39660_39724 = state_39591__$1;(statearr_39660_39724[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (38)))
{var inst_39570 = (state_39591[(2)]);var state_39591__$1 = state_39591;var statearr_39661_39725 = state_39591__$1;(statearr_39661_39725[(2)] = inst_39570);
(statearr_39661_39725[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (30)))
{var state_39591__$1 = state_39591;var statearr_39662_39726 = state_39591__$1;(statearr_39662_39726[(2)] = null);
(statearr_39662_39726[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (10)))
{var inst_39475 = (state_39591[(15)]);var inst_39473 = (state_39591[(17)]);var inst_39481 = cljs.core._nth.call(null,inst_39473,inst_39475);var inst_39482 = cljs.core.nth.call(null,inst_39481,(0),null);var inst_39483 = cljs.core.nth.call(null,inst_39481,(1),null);var state_39591__$1 = (function (){var statearr_39663 = state_39591;(statearr_39663[(26)] = inst_39482);
return statearr_39663;
})();if(cljs.core.truth_(inst_39483))
{var statearr_39664_39727 = state_39591__$1;(statearr_39664_39727[(1)] = (13));
} else
{var statearr_39665_39728 = state_39591__$1;(statearr_39665_39728[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (18)))
{var inst_39516 = (state_39591[(2)]);var state_39591__$1 = state_39591;var statearr_39666_39729 = state_39591__$1;(statearr_39666_39729[(2)] = inst_39516);
(statearr_39666_39729[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (42)))
{var state_39591__$1 = state_39591;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39591__$1,(45),dchan);
} else
{if((state_val_39592 === (37)))
{var inst_39550 = (state_39591[(25)]);var inst_39463 = (state_39591[(10)]);var inst_39559 = (state_39591[(23)]);var inst_39559__$1 = cljs.core.first.call(null,inst_39550);var inst_39560 = cljs.core.async.put_BANG_.call(null,inst_39559__$1,inst_39463,done);var state_39591__$1 = (function (){var statearr_39667 = state_39591;(statearr_39667[(23)] = inst_39559__$1);
return statearr_39667;
})();if(cljs.core.truth_(inst_39560))
{var statearr_39668_39730 = state_39591__$1;(statearr_39668_39730[(1)] = (39));
} else
{var statearr_39669_39731 = state_39591__$1;(statearr_39669_39731[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39592 === (8)))
{var inst_39474 = (state_39591[(14)]);var inst_39475 = (state_39591[(15)]);var inst_39477 = (inst_39475 < inst_39474);var inst_39478 = inst_39477;var state_39591__$1 = state_39591;if(cljs.core.truth_(inst_39478))
{var statearr_39670_39732 = state_39591__$1;(statearr_39670_39732[(1)] = (10));
} else
{var statearr_39671_39733 = state_39591__$1;(statearr_39671_39733[(1)] = (11));
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
});})(c__6934__auto___39679,cs,m,dchan,dctr,done))
;return ((function (switch__6869__auto__,c__6934__auto___39679,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6870__auto__ = null;
var state_machine__6870__auto____0 = (function (){var statearr_39675 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39675[(0)] = state_machine__6870__auto__);
(statearr_39675[(1)] = (1));
return statearr_39675;
});
var state_machine__6870__auto____1 = (function (state_39591){while(true){
var ret_value__6871__auto__ = (function (){try{while(true){
var result__6872__auto__ = switch__6869__auto__.call(null,state_39591);if(cljs.core.keyword_identical_QMARK_.call(null,result__6872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6872__auto__;
}
break;
}
}catch (e39676){if((e39676 instanceof Object))
{var ex__6873__auto__ = e39676;var statearr_39677_39734 = state_39591;(statearr_39677_39734[(5)] = ex__6873__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39591);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e39676;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__39735 = state_39591;
state_39591 = G__39735;
continue;
}
} else
{return ret_value__6871__auto__;
}
break;
}
});
state_machine__6870__auto__ = function(state_39591){
switch(arguments.length){
case 0:
return state_machine__6870__auto____0.call(this);
case 1:
return state_machine__6870__auto____1.call(this,state_39591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6870__auto____0;
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6870__auto____1;
return state_machine__6870__auto__;
})()
;})(switch__6869__auto__,c__6934__auto___39679,cs,m,dchan,dctr,done))
})();var state__6936__auto__ = (function (){var statearr_39678 = f__6935__auto__.call(null);(statearr_39678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6934__auto___39679);
return statearr_39678;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6936__auto__);
});})(c__6934__auto___39679,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj39737 = {};return obj39737;
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
;var m = (function (){if(typeof cljs.core.async.t39857 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t39857 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39858){
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
this.meta39858 = meta39858;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39857.cljs$lang$type = true;
cljs.core.async.t39857.cljs$lang$ctorStr = "cljs.core.async/t39857";
cljs.core.async.t39857.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t39857");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39857.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t39857.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39857.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39857.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39857.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39857.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39857.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t39857.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39857.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39859){var self__ = this;
var _39859__$1 = this;return self__.meta39858;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39859,meta39858__$1){var self__ = this;
var _39859__$1 = this;return (new cljs.core.async.t39857(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta39858__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t39857 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t39857(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39858){return (new cljs.core.async.t39857(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39858));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t39857(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6934__auto___39976 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6934__auto___39976,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6935__auto__ = (function (){var switch__6869__auto__ = ((function (c__6934__auto___39976,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_39929){var state_val_39930 = (state_39929[(1)]);if((state_val_39930 === (7)))
{var inst_39873 = (state_39929[(7)]);var inst_39878 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39873);var state_39929__$1 = state_39929;var statearr_39931_39977 = state_39929__$1;(statearr_39931_39977[(2)] = inst_39878);
(statearr_39931_39977[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39930 === (20)))
{var inst_39888 = (state_39929[(8)]);var state_39929__$1 = state_39929;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39929__$1,(23),out,inst_39888);
} else
{if((state_val_39930 === (1)))
{var inst_39863 = (state_39929[(9)]);var inst_39863__$1 = calc_state.call(null);var inst_39864 = cljs.core.seq_QMARK_.call(null,inst_39863__$1);var state_39929__$1 = (function (){var statearr_39932 = state_39929;(statearr_39932[(9)] = inst_39863__$1);
return statearr_39932;
})();if(inst_39864)
{var statearr_39933_39978 = state_39929__$1;(statearr_39933_39978[(1)] = (2));
} else
{var statearr_39934_39979 = state_39929__$1;(statearr_39934_39979[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39930 === (24)))
{var inst_39881 = (state_39929[(10)]);var inst_39873 = inst_39881;var state_39929__$1 = (function (){var statearr_39935 = state_39929;(statearr_39935[(7)] = inst_39873);
return statearr_39935;
})();var statearr_39936_39980 = state_39929__$1;(statearr_39936_39980[(2)] = null);
(statearr_39936_39980[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39930 === (4)))
{var inst_39863 = (state_39929[(9)]);var inst_39869 = (state_39929[(2)]);var inst_39870 = cljs.core.get.call(null,inst_39869,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_39871 = cljs.core.get.call(null,inst_39869,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_39872 = cljs.core.get.call(null,inst_39869,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_39873 = inst_39863;var state_39929__$1 = (function (){var statearr_39937 = state_39929;(statearr_39937[(11)] = inst_39871);
(statearr_39937[(12)] = inst_39872);
(statearr_39937[(7)] = inst_39873);
(statearr_39937[(13)] = inst_39870);
return statearr_39937;
})();var statearr_39938_39981 = state_39929__$1;(statearr_39938_39981[(2)] = null);
(statearr_39938_39981[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39930 === (15)))
{var state_39929__$1 = state_39929;var statearr_39939_39982 = state_39929__$1;(statearr_39939_39982[(2)] = null);
(statearr_39939_39982[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39930 === (21)))
{var inst_39881 = (state_39929[(10)]);var inst_39873 = inst_39881;var state_39929__$1 = (function (){var statearr_39940 = state_39929;(statearr_39940[(7)] = inst_39873);
return statearr_39940;
})();var statearr_39941_39983 = state_39929__$1;(statearr_39941_39983[(2)] = null);
(statearr_39941_39983[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39930 === (13)))
{var inst_39925 = (state_39929[(2)]);var state_39929__$1 = state_39929;var statearr_39942_39984 = state_39929__$1;(statearr_39942_39984[(2)] = inst_39925);
(statearr_39942_39984[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39930 === (22)))
{var inst_39923 = (state_39929[(2)]);var state_39929__$1 = state_39929;var statearr_39943_39985 = state_39929__$1;(statearr_39943_39985[(2)] = inst_39923);
(statearr_39943_39985[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39930 === (6)))
{var inst_39927 = (state_39929[(2)]);var state_39929__$1 = state_39929;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39929__$1,inst_39927);
} else
{if((state_val_39930 === (25)))
{var state_39929__$1 = state_39929;var statearr_39944_39986 = state_39929__$1;(statearr_39944_39986[(2)] = null);
(statearr_39944_39986[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39930 === (17)))
{var inst_39903 = (state_39929[(14)]);var state_39929__$1 = state_39929;var statearr_39945_39987 = state_39929__$1;(statearr_39945_39987[(2)] = inst_39903);
(statearr_39945_39987[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39930 === (3)))
{var inst_39863 = (state_39929[(9)]);var state_39929__$1 = state_39929;var statearr_39946_39988 = state_39929__$1;(statearr_39946_39988[(2)] = inst_39863);
(statearr_39946_39988[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39930 === (12)))
{var inst_39903 = (state_39929[(14)]);var inst_39884 = (state_39929[(15)]);var inst_39889 = (state_39929[(16)]);var inst_39903__$1 = inst_39884.call(null,inst_39889);var state_39929__$1 = (function (){var statearr_39947 = state_39929;(statearr_39947[(14)] = inst_39903__$1);
return statearr_39947;
})();if(cljs.core.truth_(inst_39903__$1))
{var statearr_39948_39989 = state_39929__$1;(statearr_39948_39989[(1)] = (17));
} else
{var statearr_39949_39990 = state_39929__$1;(statearr_39949_39990[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39930 === (2)))
{var inst_39863 = (state_39929[(9)]);var inst_39866 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39863);var state_39929__$1 = state_39929;var statearr_39950_39991 = state_39929__$1;(statearr_39950_39991[(2)] = inst_39866);
(statearr_39950_39991[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39930 === (23)))
{var inst_39914 = (state_39929[(2)]);var state_39929__$1 = state_39929;if(cljs.core.truth_(inst_39914))
{var statearr_39951_39992 = state_39929__$1;(statearr_39951_39992[(1)] = (24));
} else
{var statearr_39952_39993 = state_39929__$1;(statearr_39952_39993[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39930 === (19)))
{var inst_39911 = (state_39929[(2)]);var state_39929__$1 = state_39929;if(cljs.core.truth_(inst_39911))
{var statearr_39953_39994 = state_39929__$1;(statearr_39953_39994[(1)] = (20));
} else
{var statearr_39954_39995 = state_39929__$1;(statearr_39954_39995[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39930 === (11)))
{var inst_39888 = (state_39929[(8)]);var inst_39894 = (inst_39888 == null);var state_39929__$1 = state_39929;if(cljs.core.truth_(inst_39894))
{var statearr_39955_39996 = state_39929__$1;(statearr_39955_39996[(1)] = (14));
} else
{var statearr_39956_39997 = state_39929__$1;(statearr_39956_39997[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39930 === (9)))
{var inst_39881 = (state_39929[(10)]);var inst_39881__$1 = (state_39929[(2)]);var inst_39882 = cljs.core.get.call(null,inst_39881__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_39883 = cljs.core.get.call(null,inst_39881__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_39884 = cljs.core.get.call(null,inst_39881__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_39929__$1 = (function (){var statearr_39957 = state_39929;(statearr_39957[(10)] = inst_39881__$1);
(statearr_39957[(15)] = inst_39884);
(statearr_39957[(17)] = inst_39883);
return statearr_39957;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_39929__$1,(10),inst_39882);
} else
{if((state_val_39930 === (5)))
{var inst_39873 = (state_39929[(7)]);var inst_39876 = cljs.core.seq_QMARK_.call(null,inst_39873);var state_39929__$1 = state_39929;if(inst_39876)
{var statearr_39958_39998 = state_39929__$1;(statearr_39958_39998[(1)] = (7));
} else
{var statearr_39959_39999 = state_39929__$1;(statearr_39959_39999[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39930 === (14)))
{var inst_39889 = (state_39929[(16)]);var inst_39896 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_39889);var state_39929__$1 = state_39929;var statearr_39960_40000 = state_39929__$1;(statearr_39960_40000[(2)] = inst_39896);
(statearr_39960_40000[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39930 === (26)))
{var inst_39919 = (state_39929[(2)]);var state_39929__$1 = state_39929;var statearr_39961_40001 = state_39929__$1;(statearr_39961_40001[(2)] = inst_39919);
(statearr_39961_40001[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39930 === (16)))
{var inst_39899 = (state_39929[(2)]);var inst_39900 = calc_state.call(null);var inst_39873 = inst_39900;var state_39929__$1 = (function (){var statearr_39962 = state_39929;(statearr_39962[(7)] = inst_39873);
(statearr_39962[(18)] = inst_39899);
return statearr_39962;
})();var statearr_39963_40002 = state_39929__$1;(statearr_39963_40002[(2)] = null);
(statearr_39963_40002[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39930 === (10)))
{var inst_39888 = (state_39929[(8)]);var inst_39889 = (state_39929[(16)]);var inst_39887 = (state_39929[(2)]);var inst_39888__$1 = cljs.core.nth.call(null,inst_39887,(0),null);var inst_39889__$1 = cljs.core.nth.call(null,inst_39887,(1),null);var inst_39890 = (inst_39888__$1 == null);var inst_39891 = cljs.core._EQ_.call(null,inst_39889__$1,change);var inst_39892 = (inst_39890) || (inst_39891);var state_39929__$1 = (function (){var statearr_39964 = state_39929;(statearr_39964[(8)] = inst_39888__$1);
(statearr_39964[(16)] = inst_39889__$1);
return statearr_39964;
})();if(cljs.core.truth_(inst_39892))
{var statearr_39965_40003 = state_39929__$1;(statearr_39965_40003[(1)] = (11));
} else
{var statearr_39966_40004 = state_39929__$1;(statearr_39966_40004[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39930 === (18)))
{var inst_39884 = (state_39929[(15)]);var inst_39889 = (state_39929[(16)]);var inst_39883 = (state_39929[(17)]);var inst_39906 = cljs.core.empty_QMARK_.call(null,inst_39884);var inst_39907 = inst_39883.call(null,inst_39889);var inst_39908 = cljs.core.not.call(null,inst_39907);var inst_39909 = (inst_39906) && (inst_39908);var state_39929__$1 = state_39929;var statearr_39967_40005 = state_39929__$1;(statearr_39967_40005[(2)] = inst_39909);
(statearr_39967_40005[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39930 === (8)))
{var inst_39873 = (state_39929[(7)]);var state_39929__$1 = state_39929;var statearr_39968_40006 = state_39929__$1;(statearr_39968_40006[(2)] = inst_39873);
(statearr_39968_40006[(1)] = (9));
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
});})(c__6934__auto___39976,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6869__auto__,c__6934__auto___39976,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6870__auto__ = null;
var state_machine__6870__auto____0 = (function (){var statearr_39972 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39972[(0)] = state_machine__6870__auto__);
(statearr_39972[(1)] = (1));
return statearr_39972;
});
var state_machine__6870__auto____1 = (function (state_39929){while(true){
var ret_value__6871__auto__ = (function (){try{while(true){
var result__6872__auto__ = switch__6869__auto__.call(null,state_39929);if(cljs.core.keyword_identical_QMARK_.call(null,result__6872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6872__auto__;
}
break;
}
}catch (e39973){if((e39973 instanceof Object))
{var ex__6873__auto__ = e39973;var statearr_39974_40007 = state_39929;(statearr_39974_40007[(5)] = ex__6873__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39929);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e39973;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40008 = state_39929;
state_39929 = G__40008;
continue;
}
} else
{return ret_value__6871__auto__;
}
break;
}
});
state_machine__6870__auto__ = function(state_39929){
switch(arguments.length){
case 0:
return state_machine__6870__auto____0.call(this);
case 1:
return state_machine__6870__auto____1.call(this,state_39929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6870__auto____0;
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6870__auto____1;
return state_machine__6870__auto__;
})()
;})(switch__6869__auto__,c__6934__auto___39976,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6936__auto__ = (function (){var statearr_39975 = f__6935__auto__.call(null);(statearr_39975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6934__auto___39976);
return statearr_39975;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6936__auto__);
});})(c__6934__auto___39976,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj40010 = {};return obj40010;
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
return (function (p1__40011_SHARP_){if(cljs.core.truth_(p1__40011_SHARP_.call(null,topic)))
{return p1__40011_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__40011_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t40134 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40134 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta40135){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta40135 = meta40135;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40134.cljs$lang$type = true;
cljs.core.async.t40134.cljs$lang$ctorStr = "cljs.core.async/t40134";
cljs.core.async.t40134.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t40134");
});})(mults,ensure_mult))
;
cljs.core.async.t40134.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t40134.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t40134.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t40134.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t40134.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t40134.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t40134.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t40134.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40136){var self__ = this;
var _40136__$1 = this;return self__.meta40135;
});})(mults,ensure_mult))
;
cljs.core.async.t40134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40136,meta40135__$1){var self__ = this;
var _40136__$1 = this;return (new cljs.core.async.t40134(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta40135__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t40134 = ((function (mults,ensure_mult){
return (function __GT_t40134(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta40135){return (new cljs.core.async.t40134(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta40135));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t40134(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6934__auto___40256 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6934__auto___40256,mults,ensure_mult,p){
return (function (){var f__6935__auto__ = (function (){var switch__6869__auto__ = ((function (c__6934__auto___40256,mults,ensure_mult,p){
return (function (state_40208){var state_val_40209 = (state_40208[(1)]);if((state_val_40209 === (7)))
{var inst_40204 = (state_40208[(2)]);var state_40208__$1 = state_40208;var statearr_40210_40257 = state_40208__$1;(statearr_40210_40257[(2)] = inst_40204);
(statearr_40210_40257[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40209 === (20)))
{var state_40208__$1 = state_40208;var statearr_40211_40258 = state_40208__$1;(statearr_40211_40258[(2)] = null);
(statearr_40211_40258[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40209 === (1)))
{var state_40208__$1 = state_40208;var statearr_40212_40259 = state_40208__$1;(statearr_40212_40259[(2)] = null);
(statearr_40212_40259[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40209 === (24)))
{var inst_40187 = (state_40208[(7)]);var inst_40196 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_40187);var state_40208__$1 = state_40208;var statearr_40213_40260 = state_40208__$1;(statearr_40213_40260[(2)] = inst_40196);
(statearr_40213_40260[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40209 === (4)))
{var inst_40139 = (state_40208[(8)]);var inst_40139__$1 = (state_40208[(2)]);var inst_40140 = (inst_40139__$1 == null);var state_40208__$1 = (function (){var statearr_40214 = state_40208;(statearr_40214[(8)] = inst_40139__$1);
return statearr_40214;
})();if(cljs.core.truth_(inst_40140))
{var statearr_40215_40261 = state_40208__$1;(statearr_40215_40261[(1)] = (5));
} else
{var statearr_40216_40262 = state_40208__$1;(statearr_40216_40262[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40209 === (15)))
{var inst_40181 = (state_40208[(2)]);var state_40208__$1 = state_40208;var statearr_40217_40263 = state_40208__$1;(statearr_40217_40263[(2)] = inst_40181);
(statearr_40217_40263[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40209 === (21)))
{var inst_40201 = (state_40208[(2)]);var state_40208__$1 = (function (){var statearr_40218 = state_40208;(statearr_40218[(9)] = inst_40201);
return statearr_40218;
})();var statearr_40219_40264 = state_40208__$1;(statearr_40219_40264[(2)] = null);
(statearr_40219_40264[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40209 === (13)))
{var inst_40163 = (state_40208[(10)]);var inst_40165 = cljs.core.chunked_seq_QMARK_.call(null,inst_40163);var state_40208__$1 = state_40208;if(inst_40165)
{var statearr_40220_40265 = state_40208__$1;(statearr_40220_40265[(1)] = (16));
} else
{var statearr_40221_40266 = state_40208__$1;(statearr_40221_40266[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40209 === (22)))
{var inst_40193 = (state_40208[(2)]);var state_40208__$1 = state_40208;if(cljs.core.truth_(inst_40193))
{var statearr_40222_40267 = state_40208__$1;(statearr_40222_40267[(1)] = (23));
} else
{var statearr_40223_40268 = state_40208__$1;(statearr_40223_40268[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40209 === (6)))
{var inst_40139 = (state_40208[(8)]);var inst_40189 = (state_40208[(11)]);var inst_40187 = (state_40208[(7)]);var inst_40187__$1 = topic_fn.call(null,inst_40139);var inst_40188 = cljs.core.deref.call(null,mults);var inst_40189__$1 = cljs.core.get.call(null,inst_40188,inst_40187__$1);var state_40208__$1 = (function (){var statearr_40224 = state_40208;(statearr_40224[(11)] = inst_40189__$1);
(statearr_40224[(7)] = inst_40187__$1);
return statearr_40224;
})();if(cljs.core.truth_(inst_40189__$1))
{var statearr_40225_40269 = state_40208__$1;(statearr_40225_40269[(1)] = (19));
} else
{var statearr_40226_40270 = state_40208__$1;(statearr_40226_40270[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40209 === (25)))
{var inst_40198 = (state_40208[(2)]);var state_40208__$1 = state_40208;var statearr_40227_40271 = state_40208__$1;(statearr_40227_40271[(2)] = inst_40198);
(statearr_40227_40271[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40209 === (17)))
{var inst_40163 = (state_40208[(10)]);var inst_40172 = cljs.core.first.call(null,inst_40163);var inst_40173 = cljs.core.async.muxch_STAR_.call(null,inst_40172);var inst_40174 = cljs.core.async.close_BANG_.call(null,inst_40173);var inst_40175 = cljs.core.next.call(null,inst_40163);var inst_40149 = inst_40175;var inst_40150 = null;var inst_40151 = (0);var inst_40152 = (0);var state_40208__$1 = (function (){var statearr_40228 = state_40208;(statearr_40228[(12)] = inst_40174);
(statearr_40228[(13)] = inst_40149);
(statearr_40228[(14)] = inst_40152);
(statearr_40228[(15)] = inst_40151);
(statearr_40228[(16)] = inst_40150);
return statearr_40228;
})();var statearr_40229_40272 = state_40208__$1;(statearr_40229_40272[(2)] = null);
(statearr_40229_40272[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40209 === (3)))
{var inst_40206 = (state_40208[(2)]);var state_40208__$1 = state_40208;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40208__$1,inst_40206);
} else
{if((state_val_40209 === (12)))
{var inst_40183 = (state_40208[(2)]);var state_40208__$1 = state_40208;var statearr_40230_40273 = state_40208__$1;(statearr_40230_40273[(2)] = inst_40183);
(statearr_40230_40273[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40209 === (2)))
{var state_40208__$1 = state_40208;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40208__$1,(4),ch);
} else
{if((state_val_40209 === (23)))
{var state_40208__$1 = state_40208;var statearr_40231_40274 = state_40208__$1;(statearr_40231_40274[(2)] = null);
(statearr_40231_40274[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40209 === (19)))
{var inst_40139 = (state_40208[(8)]);var inst_40189 = (state_40208[(11)]);var inst_40191 = cljs.core.async.muxch_STAR_.call(null,inst_40189);var state_40208__$1 = state_40208;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40208__$1,(22),inst_40191,inst_40139);
} else
{if((state_val_40209 === (11)))
{var inst_40149 = (state_40208[(13)]);var inst_40163 = (state_40208[(10)]);var inst_40163__$1 = cljs.core.seq.call(null,inst_40149);var state_40208__$1 = (function (){var statearr_40232 = state_40208;(statearr_40232[(10)] = inst_40163__$1);
return statearr_40232;
})();if(inst_40163__$1)
{var statearr_40233_40275 = state_40208__$1;(statearr_40233_40275[(1)] = (13));
} else
{var statearr_40234_40276 = state_40208__$1;(statearr_40234_40276[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40209 === (9)))
{var inst_40185 = (state_40208[(2)]);var state_40208__$1 = state_40208;var statearr_40235_40277 = state_40208__$1;(statearr_40235_40277[(2)] = inst_40185);
(statearr_40235_40277[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40209 === (5)))
{var inst_40146 = cljs.core.deref.call(null,mults);var inst_40147 = cljs.core.vals.call(null,inst_40146);var inst_40148 = cljs.core.seq.call(null,inst_40147);var inst_40149 = inst_40148;var inst_40150 = null;var inst_40151 = (0);var inst_40152 = (0);var state_40208__$1 = (function (){var statearr_40236 = state_40208;(statearr_40236[(13)] = inst_40149);
(statearr_40236[(14)] = inst_40152);
(statearr_40236[(15)] = inst_40151);
(statearr_40236[(16)] = inst_40150);
return statearr_40236;
})();var statearr_40237_40278 = state_40208__$1;(statearr_40237_40278[(2)] = null);
(statearr_40237_40278[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40209 === (14)))
{var state_40208__$1 = state_40208;var statearr_40241_40279 = state_40208__$1;(statearr_40241_40279[(2)] = null);
(statearr_40241_40279[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40209 === (16)))
{var inst_40163 = (state_40208[(10)]);var inst_40167 = cljs.core.chunk_first.call(null,inst_40163);var inst_40168 = cljs.core.chunk_rest.call(null,inst_40163);var inst_40169 = cljs.core.count.call(null,inst_40167);var inst_40149 = inst_40168;var inst_40150 = inst_40167;var inst_40151 = inst_40169;var inst_40152 = (0);var state_40208__$1 = (function (){var statearr_40242 = state_40208;(statearr_40242[(13)] = inst_40149);
(statearr_40242[(14)] = inst_40152);
(statearr_40242[(15)] = inst_40151);
(statearr_40242[(16)] = inst_40150);
return statearr_40242;
})();var statearr_40243_40280 = state_40208__$1;(statearr_40243_40280[(2)] = null);
(statearr_40243_40280[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40209 === (10)))
{var inst_40149 = (state_40208[(13)]);var inst_40152 = (state_40208[(14)]);var inst_40151 = (state_40208[(15)]);var inst_40150 = (state_40208[(16)]);var inst_40157 = cljs.core._nth.call(null,inst_40150,inst_40152);var inst_40158 = cljs.core.async.muxch_STAR_.call(null,inst_40157);var inst_40159 = cljs.core.async.close_BANG_.call(null,inst_40158);var inst_40160 = (inst_40152 + (1));var tmp40238 = inst_40149;var tmp40239 = inst_40151;var tmp40240 = inst_40150;var inst_40149__$1 = tmp40238;var inst_40150__$1 = tmp40240;var inst_40151__$1 = tmp40239;var inst_40152__$1 = inst_40160;var state_40208__$1 = (function (){var statearr_40244 = state_40208;(statearr_40244[(13)] = inst_40149__$1);
(statearr_40244[(14)] = inst_40152__$1);
(statearr_40244[(15)] = inst_40151__$1);
(statearr_40244[(17)] = inst_40159);
(statearr_40244[(16)] = inst_40150__$1);
return statearr_40244;
})();var statearr_40245_40281 = state_40208__$1;(statearr_40245_40281[(2)] = null);
(statearr_40245_40281[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40209 === (18)))
{var inst_40178 = (state_40208[(2)]);var state_40208__$1 = state_40208;var statearr_40246_40282 = state_40208__$1;(statearr_40246_40282[(2)] = inst_40178);
(statearr_40246_40282[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40209 === (8)))
{var inst_40152 = (state_40208[(14)]);var inst_40151 = (state_40208[(15)]);var inst_40154 = (inst_40152 < inst_40151);var inst_40155 = inst_40154;var state_40208__$1 = state_40208;if(cljs.core.truth_(inst_40155))
{var statearr_40247_40283 = state_40208__$1;(statearr_40247_40283[(1)] = (10));
} else
{var statearr_40248_40284 = state_40208__$1;(statearr_40248_40284[(1)] = (11));
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
});})(c__6934__auto___40256,mults,ensure_mult,p))
;return ((function (switch__6869__auto__,c__6934__auto___40256,mults,ensure_mult,p){
return (function() {
var state_machine__6870__auto__ = null;
var state_machine__6870__auto____0 = (function (){var statearr_40252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40252[(0)] = state_machine__6870__auto__);
(statearr_40252[(1)] = (1));
return statearr_40252;
});
var state_machine__6870__auto____1 = (function (state_40208){while(true){
var ret_value__6871__auto__ = (function (){try{while(true){
var result__6872__auto__ = switch__6869__auto__.call(null,state_40208);if(cljs.core.keyword_identical_QMARK_.call(null,result__6872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6872__auto__;
}
break;
}
}catch (e40253){if((e40253 instanceof Object))
{var ex__6873__auto__ = e40253;var statearr_40254_40285 = state_40208;(statearr_40254_40285[(5)] = ex__6873__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40208);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e40253;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40286 = state_40208;
state_40208 = G__40286;
continue;
}
} else
{return ret_value__6871__auto__;
}
break;
}
});
state_machine__6870__auto__ = function(state_40208){
switch(arguments.length){
case 0:
return state_machine__6870__auto____0.call(this);
case 1:
return state_machine__6870__auto____1.call(this,state_40208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6870__auto____0;
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6870__auto____1;
return state_machine__6870__auto__;
})()
;})(switch__6869__auto__,c__6934__auto___40256,mults,ensure_mult,p))
})();var state__6936__auto__ = (function (){var statearr_40255 = f__6935__auto__.call(null);(statearr_40255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6934__auto___40256);
return statearr_40255;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6936__auto__);
});})(c__6934__auto___40256,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6934__auto___40423 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6934__auto___40423,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6935__auto__ = (function (){var switch__6869__auto__ = ((function (c__6934__auto___40423,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40393){var state_val_40394 = (state_40393[(1)]);if((state_val_40394 === (7)))
{var state_40393__$1 = state_40393;var statearr_40395_40424 = state_40393__$1;(statearr_40395_40424[(2)] = null);
(statearr_40395_40424[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40394 === (1)))
{var state_40393__$1 = state_40393;var statearr_40396_40425 = state_40393__$1;(statearr_40396_40425[(2)] = null);
(statearr_40396_40425[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40394 === (4)))
{var inst_40357 = (state_40393[(7)]);var inst_40359 = (inst_40357 < cnt);var state_40393__$1 = state_40393;if(cljs.core.truth_(inst_40359))
{var statearr_40397_40426 = state_40393__$1;(statearr_40397_40426[(1)] = (6));
} else
{var statearr_40398_40427 = state_40393__$1;(statearr_40398_40427[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40394 === (15)))
{var inst_40389 = (state_40393[(2)]);var state_40393__$1 = state_40393;var statearr_40399_40428 = state_40393__$1;(statearr_40399_40428[(2)] = inst_40389);
(statearr_40399_40428[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40394 === (13)))
{var inst_40382 = cljs.core.async.close_BANG_.call(null,out);var state_40393__$1 = state_40393;var statearr_40400_40429 = state_40393__$1;(statearr_40400_40429[(2)] = inst_40382);
(statearr_40400_40429[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40394 === (6)))
{var state_40393__$1 = state_40393;var statearr_40401_40430 = state_40393__$1;(statearr_40401_40430[(2)] = null);
(statearr_40401_40430[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40394 === (3)))
{var inst_40391 = (state_40393[(2)]);var state_40393__$1 = state_40393;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40393__$1,inst_40391);
} else
{if((state_val_40394 === (12)))
{var inst_40379 = (state_40393[(8)]);var inst_40379__$1 = (state_40393[(2)]);var inst_40380 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_40379__$1);var state_40393__$1 = (function (){var statearr_40402 = state_40393;(statearr_40402[(8)] = inst_40379__$1);
return statearr_40402;
})();if(cljs.core.truth_(inst_40380))
{var statearr_40403_40431 = state_40393__$1;(statearr_40403_40431[(1)] = (13));
} else
{var statearr_40404_40432 = state_40393__$1;(statearr_40404_40432[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40394 === (2)))
{var inst_40356 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_40357 = (0);var state_40393__$1 = (function (){var statearr_40405 = state_40393;(statearr_40405[(9)] = inst_40356);
(statearr_40405[(7)] = inst_40357);
return statearr_40405;
})();var statearr_40406_40433 = state_40393__$1;(statearr_40406_40433[(2)] = null);
(statearr_40406_40433[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40394 === (11)))
{var inst_40357 = (state_40393[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40393,(10),Object,null,(9));var inst_40366 = chs__$1.call(null,inst_40357);var inst_40367 = done.call(null,inst_40357);var inst_40368 = cljs.core.async.take_BANG_.call(null,inst_40366,inst_40367);var state_40393__$1 = state_40393;var statearr_40407_40434 = state_40393__$1;(statearr_40407_40434[(2)] = inst_40368);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40393__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40394 === (9)))
{var inst_40357 = (state_40393[(7)]);var inst_40370 = (state_40393[(2)]);var inst_40371 = (inst_40357 + (1));var inst_40357__$1 = inst_40371;var state_40393__$1 = (function (){var statearr_40408 = state_40393;(statearr_40408[(10)] = inst_40370);
(statearr_40408[(7)] = inst_40357__$1);
return statearr_40408;
})();var statearr_40409_40435 = state_40393__$1;(statearr_40409_40435[(2)] = null);
(statearr_40409_40435[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40394 === (5)))
{var inst_40377 = (state_40393[(2)]);var state_40393__$1 = (function (){var statearr_40410 = state_40393;(statearr_40410[(11)] = inst_40377);
return statearr_40410;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40393__$1,(12),dchan);
} else
{if((state_val_40394 === (14)))
{var inst_40379 = (state_40393[(8)]);var inst_40384 = cljs.core.apply.call(null,f,inst_40379);var state_40393__$1 = state_40393;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40393__$1,(16),out,inst_40384);
} else
{if((state_val_40394 === (16)))
{var inst_40386 = (state_40393[(2)]);var state_40393__$1 = (function (){var statearr_40411 = state_40393;(statearr_40411[(12)] = inst_40386);
return statearr_40411;
})();var statearr_40412_40436 = state_40393__$1;(statearr_40412_40436[(2)] = null);
(statearr_40412_40436[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40394 === (10)))
{var inst_40361 = (state_40393[(2)]);var inst_40362 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_40393__$1 = (function (){var statearr_40413 = state_40393;(statearr_40413[(13)] = inst_40361);
return statearr_40413;
})();var statearr_40414_40437 = state_40393__$1;(statearr_40414_40437[(2)] = inst_40362);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40393__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40394 === (8)))
{var inst_40375 = (state_40393[(2)]);var state_40393__$1 = state_40393;var statearr_40415_40438 = state_40393__$1;(statearr_40415_40438[(2)] = inst_40375);
(statearr_40415_40438[(1)] = (5));
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
});})(c__6934__auto___40423,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6869__auto__,c__6934__auto___40423,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6870__auto__ = null;
var state_machine__6870__auto____0 = (function (){var statearr_40419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40419[(0)] = state_machine__6870__auto__);
(statearr_40419[(1)] = (1));
return statearr_40419;
});
var state_machine__6870__auto____1 = (function (state_40393){while(true){
var ret_value__6871__auto__ = (function (){try{while(true){
var result__6872__auto__ = switch__6869__auto__.call(null,state_40393);if(cljs.core.keyword_identical_QMARK_.call(null,result__6872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6872__auto__;
}
break;
}
}catch (e40420){if((e40420 instanceof Object))
{var ex__6873__auto__ = e40420;var statearr_40421_40439 = state_40393;(statearr_40421_40439[(5)] = ex__6873__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40393);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e40420;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40440 = state_40393;
state_40393 = G__40440;
continue;
}
} else
{return ret_value__6871__auto__;
}
break;
}
});
state_machine__6870__auto__ = function(state_40393){
switch(arguments.length){
case 0:
return state_machine__6870__auto____0.call(this);
case 1:
return state_machine__6870__auto____1.call(this,state_40393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6870__auto____0;
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6870__auto____1;
return state_machine__6870__auto__;
})()
;})(switch__6869__auto__,c__6934__auto___40423,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6936__auto__ = (function (){var statearr_40422 = f__6935__auto__.call(null);(statearr_40422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6934__auto___40423);
return statearr_40422;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6936__auto__);
});})(c__6934__auto___40423,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6934__auto___40548 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6934__auto___40548,out){
return (function (){var f__6935__auto__ = (function (){var switch__6869__auto__ = ((function (c__6934__auto___40548,out){
return (function (state_40524){var state_val_40525 = (state_40524[(1)]);if((state_val_40525 === (7)))
{var inst_40504 = (state_40524[(7)]);var inst_40503 = (state_40524[(8)]);var inst_40503__$1 = (state_40524[(2)]);var inst_40504__$1 = cljs.core.nth.call(null,inst_40503__$1,(0),null);var inst_40505 = cljs.core.nth.call(null,inst_40503__$1,(1),null);var inst_40506 = (inst_40504__$1 == null);var state_40524__$1 = (function (){var statearr_40526 = state_40524;(statearr_40526[(9)] = inst_40505);
(statearr_40526[(7)] = inst_40504__$1);
(statearr_40526[(8)] = inst_40503__$1);
return statearr_40526;
})();if(cljs.core.truth_(inst_40506))
{var statearr_40527_40549 = state_40524__$1;(statearr_40527_40549[(1)] = (8));
} else
{var statearr_40528_40550 = state_40524__$1;(statearr_40528_40550[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40525 === (1)))
{var inst_40495 = cljs.core.vec.call(null,chs);var inst_40496 = inst_40495;var state_40524__$1 = (function (){var statearr_40529 = state_40524;(statearr_40529[(10)] = inst_40496);
return statearr_40529;
})();var statearr_40530_40551 = state_40524__$1;(statearr_40530_40551[(2)] = null);
(statearr_40530_40551[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40525 === (4)))
{var inst_40496 = (state_40524[(10)]);var state_40524__$1 = state_40524;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_40524__$1,(7),inst_40496);
} else
{if((state_val_40525 === (6)))
{var inst_40520 = (state_40524[(2)]);var state_40524__$1 = state_40524;var statearr_40531_40552 = state_40524__$1;(statearr_40531_40552[(2)] = inst_40520);
(statearr_40531_40552[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40525 === (3)))
{var inst_40522 = (state_40524[(2)]);var state_40524__$1 = state_40524;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40524__$1,inst_40522);
} else
{if((state_val_40525 === (2)))
{var inst_40496 = (state_40524[(10)]);var inst_40498 = cljs.core.count.call(null,inst_40496);var inst_40499 = (inst_40498 > (0));var state_40524__$1 = state_40524;if(cljs.core.truth_(inst_40499))
{var statearr_40533_40553 = state_40524__$1;(statearr_40533_40553[(1)] = (4));
} else
{var statearr_40534_40554 = state_40524__$1;(statearr_40534_40554[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40525 === (11)))
{var inst_40496 = (state_40524[(10)]);var inst_40513 = (state_40524[(2)]);var tmp40532 = inst_40496;var inst_40496__$1 = tmp40532;var state_40524__$1 = (function (){var statearr_40535 = state_40524;(statearr_40535[(10)] = inst_40496__$1);
(statearr_40535[(11)] = inst_40513);
return statearr_40535;
})();var statearr_40536_40555 = state_40524__$1;(statearr_40536_40555[(2)] = null);
(statearr_40536_40555[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40525 === (9)))
{var inst_40504 = (state_40524[(7)]);var state_40524__$1 = state_40524;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40524__$1,(11),out,inst_40504);
} else
{if((state_val_40525 === (5)))
{var inst_40518 = cljs.core.async.close_BANG_.call(null,out);var state_40524__$1 = state_40524;var statearr_40537_40556 = state_40524__$1;(statearr_40537_40556[(2)] = inst_40518);
(statearr_40537_40556[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40525 === (10)))
{var inst_40516 = (state_40524[(2)]);var state_40524__$1 = state_40524;var statearr_40538_40557 = state_40524__$1;(statearr_40538_40557[(2)] = inst_40516);
(statearr_40538_40557[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40525 === (8)))
{var inst_40505 = (state_40524[(9)]);var inst_40504 = (state_40524[(7)]);var inst_40496 = (state_40524[(10)]);var inst_40503 = (state_40524[(8)]);var inst_40508 = (function (){var c = inst_40505;var v = inst_40504;var vec__40501 = inst_40503;var cs = inst_40496;return ((function (c,v,vec__40501,cs,inst_40505,inst_40504,inst_40496,inst_40503,state_val_40525,c__6934__auto___40548,out){
return (function (p1__40441_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__40441_SHARP_);
});
;})(c,v,vec__40501,cs,inst_40505,inst_40504,inst_40496,inst_40503,state_val_40525,c__6934__auto___40548,out))
})();var inst_40509 = cljs.core.filterv.call(null,inst_40508,inst_40496);var inst_40496__$1 = inst_40509;var state_40524__$1 = (function (){var statearr_40539 = state_40524;(statearr_40539[(10)] = inst_40496__$1);
return statearr_40539;
})();var statearr_40540_40558 = state_40524__$1;(statearr_40540_40558[(2)] = null);
(statearr_40540_40558[(1)] = (2));
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
});})(c__6934__auto___40548,out))
;return ((function (switch__6869__auto__,c__6934__auto___40548,out){
return (function() {
var state_machine__6870__auto__ = null;
var state_machine__6870__auto____0 = (function (){var statearr_40544 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40544[(0)] = state_machine__6870__auto__);
(statearr_40544[(1)] = (1));
return statearr_40544;
});
var state_machine__6870__auto____1 = (function (state_40524){while(true){
var ret_value__6871__auto__ = (function (){try{while(true){
var result__6872__auto__ = switch__6869__auto__.call(null,state_40524);if(cljs.core.keyword_identical_QMARK_.call(null,result__6872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6872__auto__;
}
break;
}
}catch (e40545){if((e40545 instanceof Object))
{var ex__6873__auto__ = e40545;var statearr_40546_40559 = state_40524;(statearr_40546_40559[(5)] = ex__6873__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40524);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e40545;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40560 = state_40524;
state_40524 = G__40560;
continue;
}
} else
{return ret_value__6871__auto__;
}
break;
}
});
state_machine__6870__auto__ = function(state_40524){
switch(arguments.length){
case 0:
return state_machine__6870__auto____0.call(this);
case 1:
return state_machine__6870__auto____1.call(this,state_40524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6870__auto____0;
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6870__auto____1;
return state_machine__6870__auto__;
})()
;})(switch__6869__auto__,c__6934__auto___40548,out))
})();var state__6936__auto__ = (function (){var statearr_40547 = f__6935__auto__.call(null);(statearr_40547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6934__auto___40548);
return statearr_40547;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6936__auto__);
});})(c__6934__auto___40548,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6934__auto___40653 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6934__auto___40653,out){
return (function (){var f__6935__auto__ = (function (){var switch__6869__auto__ = ((function (c__6934__auto___40653,out){
return (function (state_40630){var state_val_40631 = (state_40630[(1)]);if((state_val_40631 === (7)))
{var inst_40612 = (state_40630[(7)]);var inst_40612__$1 = (state_40630[(2)]);var inst_40613 = (inst_40612__$1 == null);var inst_40614 = cljs.core.not.call(null,inst_40613);var state_40630__$1 = (function (){var statearr_40632 = state_40630;(statearr_40632[(7)] = inst_40612__$1);
return statearr_40632;
})();if(inst_40614)
{var statearr_40633_40654 = state_40630__$1;(statearr_40633_40654[(1)] = (8));
} else
{var statearr_40634_40655 = state_40630__$1;(statearr_40634_40655[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40631 === (1)))
{var inst_40607 = (0);var state_40630__$1 = (function (){var statearr_40635 = state_40630;(statearr_40635[(8)] = inst_40607);
return statearr_40635;
})();var statearr_40636_40656 = state_40630__$1;(statearr_40636_40656[(2)] = null);
(statearr_40636_40656[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40631 === (4)))
{var state_40630__$1 = state_40630;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40630__$1,(7),ch);
} else
{if((state_val_40631 === (6)))
{var inst_40625 = (state_40630[(2)]);var state_40630__$1 = state_40630;var statearr_40637_40657 = state_40630__$1;(statearr_40637_40657[(2)] = inst_40625);
(statearr_40637_40657[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40631 === (3)))
{var inst_40627 = (state_40630[(2)]);var inst_40628 = cljs.core.async.close_BANG_.call(null,out);var state_40630__$1 = (function (){var statearr_40638 = state_40630;(statearr_40638[(9)] = inst_40627);
return statearr_40638;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40630__$1,inst_40628);
} else
{if((state_val_40631 === (2)))
{var inst_40607 = (state_40630[(8)]);var inst_40609 = (inst_40607 < n);var state_40630__$1 = state_40630;if(cljs.core.truth_(inst_40609))
{var statearr_40639_40658 = state_40630__$1;(statearr_40639_40658[(1)] = (4));
} else
{var statearr_40640_40659 = state_40630__$1;(statearr_40640_40659[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40631 === (11)))
{var inst_40607 = (state_40630[(8)]);var inst_40617 = (state_40630[(2)]);var inst_40618 = (inst_40607 + (1));var inst_40607__$1 = inst_40618;var state_40630__$1 = (function (){var statearr_40641 = state_40630;(statearr_40641[(10)] = inst_40617);
(statearr_40641[(8)] = inst_40607__$1);
return statearr_40641;
})();var statearr_40642_40660 = state_40630__$1;(statearr_40642_40660[(2)] = null);
(statearr_40642_40660[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40631 === (9)))
{var state_40630__$1 = state_40630;var statearr_40643_40661 = state_40630__$1;(statearr_40643_40661[(2)] = null);
(statearr_40643_40661[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40631 === (5)))
{var state_40630__$1 = state_40630;var statearr_40644_40662 = state_40630__$1;(statearr_40644_40662[(2)] = null);
(statearr_40644_40662[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40631 === (10)))
{var inst_40622 = (state_40630[(2)]);var state_40630__$1 = state_40630;var statearr_40645_40663 = state_40630__$1;(statearr_40645_40663[(2)] = inst_40622);
(statearr_40645_40663[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40631 === (8)))
{var inst_40612 = (state_40630[(7)]);var state_40630__$1 = state_40630;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40630__$1,(11),out,inst_40612);
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
});})(c__6934__auto___40653,out))
;return ((function (switch__6869__auto__,c__6934__auto___40653,out){
return (function() {
var state_machine__6870__auto__ = null;
var state_machine__6870__auto____0 = (function (){var statearr_40649 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_40649[(0)] = state_machine__6870__auto__);
(statearr_40649[(1)] = (1));
return statearr_40649;
});
var state_machine__6870__auto____1 = (function (state_40630){while(true){
var ret_value__6871__auto__ = (function (){try{while(true){
var result__6872__auto__ = switch__6869__auto__.call(null,state_40630);if(cljs.core.keyword_identical_QMARK_.call(null,result__6872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6872__auto__;
}
break;
}
}catch (e40650){if((e40650 instanceof Object))
{var ex__6873__auto__ = e40650;var statearr_40651_40664 = state_40630;(statearr_40651_40664[(5)] = ex__6873__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40630);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e40650;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40665 = state_40630;
state_40630 = G__40665;
continue;
}
} else
{return ret_value__6871__auto__;
}
break;
}
});
state_machine__6870__auto__ = function(state_40630){
switch(arguments.length){
case 0:
return state_machine__6870__auto____0.call(this);
case 1:
return state_machine__6870__auto____1.call(this,state_40630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6870__auto____0;
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6870__auto____1;
return state_machine__6870__auto__;
})()
;})(switch__6869__auto__,c__6934__auto___40653,out))
})();var state__6936__auto__ = (function (){var statearr_40652 = f__6935__auto__.call(null);(statearr_40652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6934__auto___40653);
return statearr_40652;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6936__auto__);
});})(c__6934__auto___40653,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6934__auto___40762 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6934__auto___40762,out){
return (function (){var f__6935__auto__ = (function (){var switch__6869__auto__ = ((function (c__6934__auto___40762,out){
return (function (state_40737){var state_val_40738 = (state_40737[(1)]);if((state_val_40738 === (7)))
{var inst_40732 = (state_40737[(2)]);var state_40737__$1 = state_40737;var statearr_40739_40763 = state_40737__$1;(statearr_40739_40763[(2)] = inst_40732);
(statearr_40739_40763[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40738 === (1)))
{var inst_40714 = null;var state_40737__$1 = (function (){var statearr_40740 = state_40737;(statearr_40740[(7)] = inst_40714);
return statearr_40740;
})();var statearr_40741_40764 = state_40737__$1;(statearr_40741_40764[(2)] = null);
(statearr_40741_40764[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40738 === (4)))
{var inst_40717 = (state_40737[(8)]);var inst_40717__$1 = (state_40737[(2)]);var inst_40718 = (inst_40717__$1 == null);var inst_40719 = cljs.core.not.call(null,inst_40718);var state_40737__$1 = (function (){var statearr_40742 = state_40737;(statearr_40742[(8)] = inst_40717__$1);
return statearr_40742;
})();if(inst_40719)
{var statearr_40743_40765 = state_40737__$1;(statearr_40743_40765[(1)] = (5));
} else
{var statearr_40744_40766 = state_40737__$1;(statearr_40744_40766[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40738 === (6)))
{var state_40737__$1 = state_40737;var statearr_40745_40767 = state_40737__$1;(statearr_40745_40767[(2)] = null);
(statearr_40745_40767[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40738 === (3)))
{var inst_40734 = (state_40737[(2)]);var inst_40735 = cljs.core.async.close_BANG_.call(null,out);var state_40737__$1 = (function (){var statearr_40746 = state_40737;(statearr_40746[(9)] = inst_40734);
return statearr_40746;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40737__$1,inst_40735);
} else
{if((state_val_40738 === (2)))
{var state_40737__$1 = state_40737;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40737__$1,(4),ch);
} else
{if((state_val_40738 === (11)))
{var inst_40717 = (state_40737[(8)]);var inst_40726 = (state_40737[(2)]);var inst_40714 = inst_40717;var state_40737__$1 = (function (){var statearr_40747 = state_40737;(statearr_40747[(10)] = inst_40726);
(statearr_40747[(7)] = inst_40714);
return statearr_40747;
})();var statearr_40748_40768 = state_40737__$1;(statearr_40748_40768[(2)] = null);
(statearr_40748_40768[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40738 === (9)))
{var inst_40717 = (state_40737[(8)]);var state_40737__$1 = state_40737;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40737__$1,(11),out,inst_40717);
} else
{if((state_val_40738 === (5)))
{var inst_40717 = (state_40737[(8)]);var inst_40714 = (state_40737[(7)]);var inst_40721 = cljs.core._EQ_.call(null,inst_40717,inst_40714);var state_40737__$1 = state_40737;if(inst_40721)
{var statearr_40750_40769 = state_40737__$1;(statearr_40750_40769[(1)] = (8));
} else
{var statearr_40751_40770 = state_40737__$1;(statearr_40751_40770[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40738 === (10)))
{var inst_40729 = (state_40737[(2)]);var state_40737__$1 = state_40737;var statearr_40752_40771 = state_40737__$1;(statearr_40752_40771[(2)] = inst_40729);
(statearr_40752_40771[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40738 === (8)))
{var inst_40714 = (state_40737[(7)]);var tmp40749 = inst_40714;var inst_40714__$1 = tmp40749;var state_40737__$1 = (function (){var statearr_40753 = state_40737;(statearr_40753[(7)] = inst_40714__$1);
return statearr_40753;
})();var statearr_40754_40772 = state_40737__$1;(statearr_40754_40772[(2)] = null);
(statearr_40754_40772[(1)] = (2));
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
});})(c__6934__auto___40762,out))
;return ((function (switch__6869__auto__,c__6934__auto___40762,out){
return (function() {
var state_machine__6870__auto__ = null;
var state_machine__6870__auto____0 = (function (){var statearr_40758 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_40758[(0)] = state_machine__6870__auto__);
(statearr_40758[(1)] = (1));
return statearr_40758;
});
var state_machine__6870__auto____1 = (function (state_40737){while(true){
var ret_value__6871__auto__ = (function (){try{while(true){
var result__6872__auto__ = switch__6869__auto__.call(null,state_40737);if(cljs.core.keyword_identical_QMARK_.call(null,result__6872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6872__auto__;
}
break;
}
}catch (e40759){if((e40759 instanceof Object))
{var ex__6873__auto__ = e40759;var statearr_40760_40773 = state_40737;(statearr_40760_40773[(5)] = ex__6873__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40737);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e40759;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40774 = state_40737;
state_40737 = G__40774;
continue;
}
} else
{return ret_value__6871__auto__;
}
break;
}
});
state_machine__6870__auto__ = function(state_40737){
switch(arguments.length){
case 0:
return state_machine__6870__auto____0.call(this);
case 1:
return state_machine__6870__auto____1.call(this,state_40737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6870__auto____0;
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6870__auto____1;
return state_machine__6870__auto__;
})()
;})(switch__6869__auto__,c__6934__auto___40762,out))
})();var state__6936__auto__ = (function (){var statearr_40761 = f__6935__auto__.call(null);(statearr_40761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6934__auto___40762);
return statearr_40761;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6936__auto__);
});})(c__6934__auto___40762,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6934__auto___40909 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6934__auto___40909,out){
return (function (){var f__6935__auto__ = (function (){var switch__6869__auto__ = ((function (c__6934__auto___40909,out){
return (function (state_40879){var state_val_40880 = (state_40879[(1)]);if((state_val_40880 === (7)))
{var inst_40875 = (state_40879[(2)]);var state_40879__$1 = state_40879;var statearr_40881_40910 = state_40879__$1;(statearr_40881_40910[(2)] = inst_40875);
(statearr_40881_40910[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40880 === (1)))
{var inst_40842 = (new Array(n));var inst_40843 = inst_40842;var inst_40844 = (0);var state_40879__$1 = (function (){var statearr_40882 = state_40879;(statearr_40882[(7)] = inst_40844);
(statearr_40882[(8)] = inst_40843);
return statearr_40882;
})();var statearr_40883_40911 = state_40879__$1;(statearr_40883_40911[(2)] = null);
(statearr_40883_40911[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40880 === (4)))
{var inst_40847 = (state_40879[(9)]);var inst_40847__$1 = (state_40879[(2)]);var inst_40848 = (inst_40847__$1 == null);var inst_40849 = cljs.core.not.call(null,inst_40848);var state_40879__$1 = (function (){var statearr_40884 = state_40879;(statearr_40884[(9)] = inst_40847__$1);
return statearr_40884;
})();if(inst_40849)
{var statearr_40885_40912 = state_40879__$1;(statearr_40885_40912[(1)] = (5));
} else
{var statearr_40886_40913 = state_40879__$1;(statearr_40886_40913[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40880 === (15)))
{var inst_40869 = (state_40879[(2)]);var state_40879__$1 = state_40879;var statearr_40887_40914 = state_40879__$1;(statearr_40887_40914[(2)] = inst_40869);
(statearr_40887_40914[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40880 === (13)))
{var state_40879__$1 = state_40879;var statearr_40888_40915 = state_40879__$1;(statearr_40888_40915[(2)] = null);
(statearr_40888_40915[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40880 === (6)))
{var inst_40844 = (state_40879[(7)]);var inst_40865 = (inst_40844 > (0));var state_40879__$1 = state_40879;if(cljs.core.truth_(inst_40865))
{var statearr_40889_40916 = state_40879__$1;(statearr_40889_40916[(1)] = (12));
} else
{var statearr_40890_40917 = state_40879__$1;(statearr_40890_40917[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40880 === (3)))
{var inst_40877 = (state_40879[(2)]);var state_40879__$1 = state_40879;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40879__$1,inst_40877);
} else
{if((state_val_40880 === (12)))
{var inst_40843 = (state_40879[(8)]);var inst_40867 = cljs.core.vec.call(null,inst_40843);var state_40879__$1 = state_40879;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40879__$1,(15),out,inst_40867);
} else
{if((state_val_40880 === (2)))
{var state_40879__$1 = state_40879;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40879__$1,(4),ch);
} else
{if((state_val_40880 === (11)))
{var inst_40859 = (state_40879[(2)]);var inst_40860 = (new Array(n));var inst_40843 = inst_40860;var inst_40844 = (0);var state_40879__$1 = (function (){var statearr_40891 = state_40879;(statearr_40891[(7)] = inst_40844);
(statearr_40891[(8)] = inst_40843);
(statearr_40891[(10)] = inst_40859);
return statearr_40891;
})();var statearr_40892_40918 = state_40879__$1;(statearr_40892_40918[(2)] = null);
(statearr_40892_40918[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40880 === (9)))
{var inst_40843 = (state_40879[(8)]);var inst_40857 = cljs.core.vec.call(null,inst_40843);var state_40879__$1 = state_40879;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40879__$1,(11),out,inst_40857);
} else
{if((state_val_40880 === (5)))
{var inst_40852 = (state_40879[(11)]);var inst_40844 = (state_40879[(7)]);var inst_40843 = (state_40879[(8)]);var inst_40847 = (state_40879[(9)]);var inst_40851 = (inst_40843[inst_40844] = inst_40847);var inst_40852__$1 = (inst_40844 + (1));var inst_40853 = (inst_40852__$1 < n);var state_40879__$1 = (function (){var statearr_40893 = state_40879;(statearr_40893[(11)] = inst_40852__$1);
(statearr_40893[(12)] = inst_40851);
return statearr_40893;
})();if(cljs.core.truth_(inst_40853))
{var statearr_40894_40919 = state_40879__$1;(statearr_40894_40919[(1)] = (8));
} else
{var statearr_40895_40920 = state_40879__$1;(statearr_40895_40920[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40880 === (14)))
{var inst_40872 = (state_40879[(2)]);var inst_40873 = cljs.core.async.close_BANG_.call(null,out);var state_40879__$1 = (function (){var statearr_40897 = state_40879;(statearr_40897[(13)] = inst_40872);
return statearr_40897;
})();var statearr_40898_40921 = state_40879__$1;(statearr_40898_40921[(2)] = inst_40873);
(statearr_40898_40921[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40880 === (10)))
{var inst_40863 = (state_40879[(2)]);var state_40879__$1 = state_40879;var statearr_40899_40922 = state_40879__$1;(statearr_40899_40922[(2)] = inst_40863);
(statearr_40899_40922[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_40880 === (8)))
{var inst_40852 = (state_40879[(11)]);var inst_40843 = (state_40879[(8)]);var tmp40896 = inst_40843;var inst_40843__$1 = tmp40896;var inst_40844 = inst_40852;var state_40879__$1 = (function (){var statearr_40900 = state_40879;(statearr_40900[(7)] = inst_40844);
(statearr_40900[(8)] = inst_40843__$1);
return statearr_40900;
})();var statearr_40901_40923 = state_40879__$1;(statearr_40901_40923[(2)] = null);
(statearr_40901_40923[(1)] = (2));
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
});})(c__6934__auto___40909,out))
;return ((function (switch__6869__auto__,c__6934__auto___40909,out){
return (function() {
var state_machine__6870__auto__ = null;
var state_machine__6870__auto____0 = (function (){var statearr_40905 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40905[(0)] = state_machine__6870__auto__);
(statearr_40905[(1)] = (1));
return statearr_40905;
});
var state_machine__6870__auto____1 = (function (state_40879){while(true){
var ret_value__6871__auto__ = (function (){try{while(true){
var result__6872__auto__ = switch__6869__auto__.call(null,state_40879);if(cljs.core.keyword_identical_QMARK_.call(null,result__6872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6872__auto__;
}
break;
}
}catch (e40906){if((e40906 instanceof Object))
{var ex__6873__auto__ = e40906;var statearr_40907_40924 = state_40879;(statearr_40907_40924[(5)] = ex__6873__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40879);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e40906;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__40925 = state_40879;
state_40879 = G__40925;
continue;
}
} else
{return ret_value__6871__auto__;
}
break;
}
});
state_machine__6870__auto__ = function(state_40879){
switch(arguments.length){
case 0:
return state_machine__6870__auto____0.call(this);
case 1:
return state_machine__6870__auto____1.call(this,state_40879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6870__auto____0;
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6870__auto____1;
return state_machine__6870__auto__;
})()
;})(switch__6869__auto__,c__6934__auto___40909,out))
})();var state__6936__auto__ = (function (){var statearr_40908 = f__6935__auto__.call(null);(statearr_40908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6934__auto___40909);
return statearr_40908;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6936__auto__);
});})(c__6934__auto___40909,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6934__auto___41068 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6934__auto___41068,out){
return (function (){var f__6935__auto__ = (function (){var switch__6869__auto__ = ((function (c__6934__auto___41068,out){
return (function (state_41038){var state_val_41039 = (state_41038[(1)]);if((state_val_41039 === (7)))
{var inst_41034 = (state_41038[(2)]);var state_41038__$1 = state_41038;var statearr_41040_41069 = state_41038__$1;(statearr_41040_41069[(2)] = inst_41034);
(statearr_41040_41069[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41039 === (1)))
{var inst_40997 = [];var inst_40998 = inst_40997;var inst_40999 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_41038__$1 = (function (){var statearr_41041 = state_41038;(statearr_41041[(7)] = inst_40999);
(statearr_41041[(8)] = inst_40998);
return statearr_41041;
})();var statearr_41042_41070 = state_41038__$1;(statearr_41042_41070[(2)] = null);
(statearr_41042_41070[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41039 === (4)))
{var inst_41002 = (state_41038[(9)]);var inst_41002__$1 = (state_41038[(2)]);var inst_41003 = (inst_41002__$1 == null);var inst_41004 = cljs.core.not.call(null,inst_41003);var state_41038__$1 = (function (){var statearr_41043 = state_41038;(statearr_41043[(9)] = inst_41002__$1);
return statearr_41043;
})();if(inst_41004)
{var statearr_41044_41071 = state_41038__$1;(statearr_41044_41071[(1)] = (5));
} else
{var statearr_41045_41072 = state_41038__$1;(statearr_41045_41072[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41039 === (15)))
{var inst_41028 = (state_41038[(2)]);var state_41038__$1 = state_41038;var statearr_41046_41073 = state_41038__$1;(statearr_41046_41073[(2)] = inst_41028);
(statearr_41046_41073[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41039 === (13)))
{var state_41038__$1 = state_41038;var statearr_41047_41074 = state_41038__$1;(statearr_41047_41074[(2)] = null);
(statearr_41047_41074[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41039 === (6)))
{var inst_40998 = (state_41038[(8)]);var inst_41023 = inst_40998.length;var inst_41024 = (inst_41023 > (0));var state_41038__$1 = state_41038;if(cljs.core.truth_(inst_41024))
{var statearr_41048_41075 = state_41038__$1;(statearr_41048_41075[(1)] = (12));
} else
{var statearr_41049_41076 = state_41038__$1;(statearr_41049_41076[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41039 === (3)))
{var inst_41036 = (state_41038[(2)]);var state_41038__$1 = state_41038;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41038__$1,inst_41036);
} else
{if((state_val_41039 === (12)))
{var inst_40998 = (state_41038[(8)]);var inst_41026 = cljs.core.vec.call(null,inst_40998);var state_41038__$1 = state_41038;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41038__$1,(15),out,inst_41026);
} else
{if((state_val_41039 === (2)))
{var state_41038__$1 = state_41038;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41038__$1,(4),ch);
} else
{if((state_val_41039 === (11)))
{var inst_41002 = (state_41038[(9)]);var inst_41006 = (state_41038[(10)]);var inst_41016 = (state_41038[(2)]);var inst_41017 = [];var inst_41018 = inst_41017.push(inst_41002);var inst_40998 = inst_41017;var inst_40999 = inst_41006;var state_41038__$1 = (function (){var statearr_41050 = state_41038;(statearr_41050[(7)] = inst_40999);
(statearr_41050[(8)] = inst_40998);
(statearr_41050[(11)] = inst_41018);
(statearr_41050[(12)] = inst_41016);
return statearr_41050;
})();var statearr_41051_41077 = state_41038__$1;(statearr_41051_41077[(2)] = null);
(statearr_41051_41077[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41039 === (9)))
{var inst_40998 = (state_41038[(8)]);var inst_41014 = cljs.core.vec.call(null,inst_40998);var state_41038__$1 = state_41038;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41038__$1,(11),out,inst_41014);
} else
{if((state_val_41039 === (5)))
{var inst_40999 = (state_41038[(7)]);var inst_41002 = (state_41038[(9)]);var inst_41006 = (state_41038[(10)]);var inst_41006__$1 = f.call(null,inst_41002);var inst_41007 = cljs.core._EQ_.call(null,inst_41006__$1,inst_40999);var inst_41008 = cljs.core.keyword_identical_QMARK_.call(null,inst_40999,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_41009 = (inst_41007) || (inst_41008);var state_41038__$1 = (function (){var statearr_41052 = state_41038;(statearr_41052[(10)] = inst_41006__$1);
return statearr_41052;
})();if(cljs.core.truth_(inst_41009))
{var statearr_41053_41078 = state_41038__$1;(statearr_41053_41078[(1)] = (8));
} else
{var statearr_41054_41079 = state_41038__$1;(statearr_41054_41079[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41039 === (14)))
{var inst_41031 = (state_41038[(2)]);var inst_41032 = cljs.core.async.close_BANG_.call(null,out);var state_41038__$1 = (function (){var statearr_41056 = state_41038;(statearr_41056[(13)] = inst_41031);
return statearr_41056;
})();var statearr_41057_41080 = state_41038__$1;(statearr_41057_41080[(2)] = inst_41032);
(statearr_41057_41080[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41039 === (10)))
{var inst_41021 = (state_41038[(2)]);var state_41038__$1 = state_41038;var statearr_41058_41081 = state_41038__$1;(statearr_41058_41081[(2)] = inst_41021);
(statearr_41058_41081[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_41039 === (8)))
{var inst_41002 = (state_41038[(9)]);var inst_41006 = (state_41038[(10)]);var inst_40998 = (state_41038[(8)]);var inst_41011 = inst_40998.push(inst_41002);var tmp41055 = inst_40998;var inst_40998__$1 = tmp41055;var inst_40999 = inst_41006;var state_41038__$1 = (function (){var statearr_41059 = state_41038;(statearr_41059[(7)] = inst_40999);
(statearr_41059[(8)] = inst_40998__$1);
(statearr_41059[(14)] = inst_41011);
return statearr_41059;
})();var statearr_41060_41082 = state_41038__$1;(statearr_41060_41082[(2)] = null);
(statearr_41060_41082[(1)] = (2));
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
});})(c__6934__auto___41068,out))
;return ((function (switch__6869__auto__,c__6934__auto___41068,out){
return (function() {
var state_machine__6870__auto__ = null;
var state_machine__6870__auto____0 = (function (){var statearr_41064 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_41064[(0)] = state_machine__6870__auto__);
(statearr_41064[(1)] = (1));
return statearr_41064;
});
var state_machine__6870__auto____1 = (function (state_41038){while(true){
var ret_value__6871__auto__ = (function (){try{while(true){
var result__6872__auto__ = switch__6869__auto__.call(null,state_41038);if(cljs.core.keyword_identical_QMARK_.call(null,result__6872__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6872__auto__;
}
break;
}
}catch (e41065){if((e41065 instanceof Object))
{var ex__6873__auto__ = e41065;var statearr_41066_41083 = state_41038;(statearr_41066_41083[(5)] = ex__6873__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41038);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e41065;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__41084 = state_41038;
state_41038 = G__41084;
continue;
}
} else
{return ret_value__6871__auto__;
}
break;
}
});
state_machine__6870__auto__ = function(state_41038){
switch(arguments.length){
case 0:
return state_machine__6870__auto____0.call(this);
case 1:
return state_machine__6870__auto____1.call(this,state_41038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6870__auto____0;
state_machine__6870__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6870__auto____1;
return state_machine__6870__auto__;
})()
;})(switch__6869__auto__,c__6934__auto___41068,out))
})();var state__6936__auto__ = (function (){var statearr_41067 = f__6935__auto__.call(null);(statearr_41067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6934__auto___41068);
return statearr_41067;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6936__auto__);
});})(c__6934__auto___41068,out))
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