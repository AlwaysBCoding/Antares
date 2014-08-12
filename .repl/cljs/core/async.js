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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12744 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12744 = (function (f,fn_handler,meta12745){
this.f = f;
this.fn_handler = fn_handler;
this.meta12745 = meta12745;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12744.cljs$lang$type = true;
cljs.core.async.t12744.cljs$lang$ctorStr = "cljs.core.async/t12744";
cljs.core.async.t12744.cljs$lang$ctorPrWriter = (function (this__7847__auto__,writer__7848__auto__,opt__7849__auto__){return cljs.core._write.call(null,writer__7848__auto__,"cljs.core.async/t12744");
});
cljs.core.async.t12744.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12744.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12744.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12744.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12746){var self__ = this;
var _12746__$1 = this;return self__.meta12745;
});
cljs.core.async.t12744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12746,meta12745__$1){var self__ = this;
var _12746__$1 = this;return (new cljs.core.async.t12744(self__.f,self__.fn_handler,meta12745__$1));
});
cljs.core.async.__GT_t12744 = (function __GT_t12744(f__$1,fn_handler__$1,meta12745){return (new cljs.core.async.t12744(f__$1,fn_handler__$1,meta12745));
});
}
return (new cljs.core.async.t12744(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12748 = buff;if(G__12748)
{var bit__7930__auto__ = null;if(cljs.core.truth_((function (){var or__7280__auto__ = bit__7930__auto__;if(cljs.core.truth_(or__7280__auto__))
{return or__7280__auto__;
} else
{return G__12748.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12748.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12748);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12748);
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
{var val_12749 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12749);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_12749,ret){
return (function (){return fn1.call(null,val_12749);
});})(val_12749,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8136__auto___12750 = n;var x_12751 = (0);while(true){
if((x_12751 < n__8136__auto___12750))
{(a[x_12751] = (0));
{
var G__12752 = (x_12751 + (1));
x_12751 = G__12752;
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
var G__12753 = (i + (1));
i = G__12753;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12757 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12757 = (function (flag,alt_flag,meta12758){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12758 = meta12758;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12757.cljs$lang$type = true;
cljs.core.async.t12757.cljs$lang$ctorStr = "cljs.core.async/t12757";
cljs.core.async.t12757.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7847__auto__,writer__7848__auto__,opt__7849__auto__){return cljs.core._write.call(null,writer__7848__auto__,"cljs.core.async/t12757");
});})(flag))
;
cljs.core.async.t12757.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12757.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t12757.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t12757.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12759){var self__ = this;
var _12759__$1 = this;return self__.meta12758;
});})(flag))
;
cljs.core.async.t12757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12759,meta12758__$1){var self__ = this;
var _12759__$1 = this;return (new cljs.core.async.t12757(self__.flag,self__.alt_flag,meta12758__$1));
});})(flag))
;
cljs.core.async.__GT_t12757 = ((function (flag){
return (function __GT_t12757(flag__$1,alt_flag__$1,meta12758){return (new cljs.core.async.t12757(flag__$1,alt_flag__$1,meta12758));
});})(flag))
;
}
return (new cljs.core.async.t12757(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12763 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12763 = (function (cb,flag,alt_handler,meta12764){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12764 = meta12764;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12763.cljs$lang$type = true;
cljs.core.async.t12763.cljs$lang$ctorStr = "cljs.core.async/t12763";
cljs.core.async.t12763.cljs$lang$ctorPrWriter = (function (this__7847__auto__,writer__7848__auto__,opt__7849__auto__){return cljs.core._write.call(null,writer__7848__auto__,"cljs.core.async/t12763");
});
cljs.core.async.t12763.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12763.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12763.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12765){var self__ = this;
var _12765__$1 = this;return self__.meta12764;
});
cljs.core.async.t12763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12765,meta12764__$1){var self__ = this;
var _12765__$1 = this;return (new cljs.core.async.t12763(self__.cb,self__.flag,self__.alt_handler,meta12764__$1));
});
cljs.core.async.__GT_t12763 = (function __GT_t12763(cb__$1,flag__$1,alt_handler__$1,meta12764){return (new cljs.core.async.t12763(cb__$1,flag__$1,alt_handler__$1,meta12764));
});
}
return (new cljs.core.async.t12763(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12766_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12766_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12767_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12767_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7280__auto__ = wport;if(cljs.core.truth_(or__7280__auto__))
{return or__7280__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__12768 = (i + (1));
i = G__12768;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7280__auto__ = ret;if(cljs.core.truth_(or__7280__auto__))
{return or__7280__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__7268__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7268__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7268__auto__;
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
var alts_BANG___delegate = function (ports,p__12769){var map__12771 = p__12769;var map__12771__$1 = ((cljs.core.seq_QMARK_.call(null,map__12771))?cljs.core.apply.call(null,cljs.core.hash_map,map__12771):map__12771);var opts = map__12771__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__12769 = null;if (arguments.length > 1) {
  p__12769 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12769);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12772){
var ports = cljs.core.first(arglist__12772);
var p__12769 = cljs.core.rest(arglist__12772);
return alts_BANG___delegate(ports,p__12769);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12780 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12780 = (function (ch,f,map_LT_,meta12781){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12781 = meta12781;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12780.cljs$lang$type = true;
cljs.core.async.t12780.cljs$lang$ctorStr = "cljs.core.async/t12780";
cljs.core.async.t12780.cljs$lang$ctorPrWriter = (function (this__7847__auto__,writer__7848__auto__,opt__7849__auto__){return cljs.core._write.call(null,writer__7848__auto__,"cljs.core.async/t12780");
});
cljs.core.async.t12780.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12780.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t12780.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12780.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12783 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12783 = (function (fn1,_,meta12781,ch,f,map_LT_,meta12784){
this.fn1 = fn1;
this._ = _;
this.meta12781 = meta12781;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12784 = meta12784;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12783.cljs$lang$type = true;
cljs.core.async.t12783.cljs$lang$ctorStr = "cljs.core.async/t12783";
cljs.core.async.t12783.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7847__auto__,writer__7848__auto__,opt__7849__auto__){return cljs.core._write.call(null,writer__7848__auto__,"cljs.core.async/t12783");
});})(___$1))
;
cljs.core.async.t12783.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12783.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t12783.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t12783.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__12773_SHARP_){return f1.call(null,(((p1__12773_SHARP_ == null))?null:self__.f.call(null,p1__12773_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t12783.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12785){var self__ = this;
var _12785__$1 = this;return self__.meta12784;
});})(___$1))
;
cljs.core.async.t12783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12785,meta12784__$1){var self__ = this;
var _12785__$1 = this;return (new cljs.core.async.t12783(self__.fn1,self__._,self__.meta12781,self__.ch,self__.f,self__.map_LT_,meta12784__$1));
});})(___$1))
;
cljs.core.async.__GT_t12783 = ((function (___$1){
return (function __GT_t12783(fn1__$1,___$2,meta12781__$1,ch__$2,f__$2,map_LT___$2,meta12784){return (new cljs.core.async.t12783(fn1__$1,___$2,meta12781__$1,ch__$2,f__$2,map_LT___$2,meta12784));
});})(___$1))
;
}
return (new cljs.core.async.t12783(fn1,___$1,self__.meta12781,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7268__auto__ = ret;if(cljs.core.truth_(and__7268__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7268__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t12780.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12780.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12780.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t12780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12782){var self__ = this;
var _12782__$1 = this;return self__.meta12781;
});
cljs.core.async.t12780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12782,meta12781__$1){var self__ = this;
var _12782__$1 = this;return (new cljs.core.async.t12780(self__.ch,self__.f,self__.map_LT_,meta12781__$1));
});
cljs.core.async.__GT_t12780 = (function __GT_t12780(ch__$1,f__$1,map_LT___$1,meta12781){return (new cljs.core.async.t12780(ch__$1,f__$1,map_LT___$1,meta12781));
});
}
return (new cljs.core.async.t12780(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12789 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12789 = (function (ch,f,map_GT_,meta12790){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12790 = meta12790;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12789.cljs$lang$type = true;
cljs.core.async.t12789.cljs$lang$ctorStr = "cljs.core.async/t12789";
cljs.core.async.t12789.cljs$lang$ctorPrWriter = (function (this__7847__auto__,writer__7848__auto__,opt__7849__auto__){return cljs.core._write.call(null,writer__7848__auto__,"cljs.core.async/t12789");
});
cljs.core.async.t12789.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12789.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t12789.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12789.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12789.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12789.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12791){var self__ = this;
var _12791__$1 = this;return self__.meta12790;
});
cljs.core.async.t12789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12791,meta12790__$1){var self__ = this;
var _12791__$1 = this;return (new cljs.core.async.t12789(self__.ch,self__.f,self__.map_GT_,meta12790__$1));
});
cljs.core.async.__GT_t12789 = (function __GT_t12789(ch__$1,f__$1,map_GT___$1,meta12790){return (new cljs.core.async.t12789(ch__$1,f__$1,map_GT___$1,meta12790));
});
}
return (new cljs.core.async.t12789(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12795 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12795 = (function (ch,p,filter_GT_,meta12796){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12796 = meta12796;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12795.cljs$lang$type = true;
cljs.core.async.t12795.cljs$lang$ctorStr = "cljs.core.async/t12795";
cljs.core.async.t12795.cljs$lang$ctorPrWriter = (function (this__7847__auto__,writer__7848__auto__,opt__7849__auto__){return cljs.core._write.call(null,writer__7848__auto__,"cljs.core.async/t12795");
});
cljs.core.async.t12795.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12795.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t12795.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12795.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12795.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12795.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12795.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t12795.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12797){var self__ = this;
var _12797__$1 = this;return self__.meta12796;
});
cljs.core.async.t12795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12797,meta12796__$1){var self__ = this;
var _12797__$1 = this;return (new cljs.core.async.t12795(self__.ch,self__.p,self__.filter_GT_,meta12796__$1));
});
cljs.core.async.__GT_t12795 = (function __GT_t12795(ch__$1,p__$1,filter_GT___$1,meta12796){return (new cljs.core.async.t12795(ch__$1,p__$1,filter_GT___$1,meta12796));
});
}
return (new cljs.core.async.t12795(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10229__auto___12880 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10229__auto___12880,out){
return (function (){var f__10230__auto__ = (function (){var switch__10164__auto__ = ((function (c__10229__auto___12880,out){
return (function (state_12859){var state_val_12860 = (state_12859[(1)]);if((state_val_12860 === (7)))
{var inst_12855 = (state_12859[(2)]);var state_12859__$1 = state_12859;var statearr_12861_12881 = state_12859__$1;(statearr_12861_12881[(2)] = inst_12855);
(statearr_12861_12881[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12860 === (1)))
{var state_12859__$1 = state_12859;var statearr_12862_12882 = state_12859__$1;(statearr_12862_12882[(2)] = null);
(statearr_12862_12882[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12860 === (4)))
{var inst_12841 = (state_12859[(7)]);var inst_12841__$1 = (state_12859[(2)]);var inst_12842 = (inst_12841__$1 == null);var state_12859__$1 = (function (){var statearr_12863 = state_12859;(statearr_12863[(7)] = inst_12841__$1);
return statearr_12863;
})();if(cljs.core.truth_(inst_12842))
{var statearr_12864_12883 = state_12859__$1;(statearr_12864_12883[(1)] = (5));
} else
{var statearr_12865_12884 = state_12859__$1;(statearr_12865_12884[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12860 === (6)))
{var inst_12841 = (state_12859[(7)]);var inst_12846 = p.call(null,inst_12841);var state_12859__$1 = state_12859;if(cljs.core.truth_(inst_12846))
{var statearr_12866_12885 = state_12859__$1;(statearr_12866_12885[(1)] = (8));
} else
{var statearr_12867_12886 = state_12859__$1;(statearr_12867_12886[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12860 === (3)))
{var inst_12857 = (state_12859[(2)]);var state_12859__$1 = state_12859;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12859__$1,inst_12857);
} else
{if((state_val_12860 === (2)))
{var state_12859__$1 = state_12859;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12859__$1,(4),ch);
} else
{if((state_val_12860 === (11)))
{var inst_12849 = (state_12859[(2)]);var state_12859__$1 = state_12859;var statearr_12868_12887 = state_12859__$1;(statearr_12868_12887[(2)] = inst_12849);
(statearr_12868_12887[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12860 === (9)))
{var state_12859__$1 = state_12859;var statearr_12869_12888 = state_12859__$1;(statearr_12869_12888[(2)] = null);
(statearr_12869_12888[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12860 === (5)))
{var inst_12844 = cljs.core.async.close_BANG_.call(null,out);var state_12859__$1 = state_12859;var statearr_12870_12889 = state_12859__$1;(statearr_12870_12889[(2)] = inst_12844);
(statearr_12870_12889[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12860 === (10)))
{var inst_12852 = (state_12859[(2)]);var state_12859__$1 = (function (){var statearr_12871 = state_12859;(statearr_12871[(8)] = inst_12852);
return statearr_12871;
})();var statearr_12872_12890 = state_12859__$1;(statearr_12872_12890[(2)] = null);
(statearr_12872_12890[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12860 === (8)))
{var inst_12841 = (state_12859[(7)]);var state_12859__$1 = state_12859;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12859__$1,(11),out,inst_12841);
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
});})(c__10229__auto___12880,out))
;return ((function (switch__10164__auto__,c__10229__auto___12880,out){
return (function() {
var state_machine__10165__auto__ = null;
var state_machine__10165__auto____0 = (function (){var statearr_12876 = [null,null,null,null,null,null,null,null,null];(statearr_12876[(0)] = state_machine__10165__auto__);
(statearr_12876[(1)] = (1));
return statearr_12876;
});
var state_machine__10165__auto____1 = (function (state_12859){while(true){
var ret_value__10166__auto__ = (function (){try{while(true){
var result__10167__auto__ = switch__10164__auto__.call(null,state_12859);if(cljs.core.keyword_identical_QMARK_.call(null,result__10167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10167__auto__;
}
break;
}
}catch (e12877){if((e12877 instanceof Object))
{var ex__10168__auto__ = e12877;var statearr_12878_12891 = state_12859;(statearr_12878_12891[(5)] = ex__10168__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12859);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12877;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12892 = state_12859;
state_12859 = G__12892;
continue;
}
} else
{return ret_value__10166__auto__;
}
break;
}
});
state_machine__10165__auto__ = function(state_12859){
switch(arguments.length){
case 0:
return state_machine__10165__auto____0.call(this);
case 1:
return state_machine__10165__auto____1.call(this,state_12859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10165__auto____0;
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10165__auto____1;
return state_machine__10165__auto__;
})()
;})(switch__10164__auto__,c__10229__auto___12880,out))
})();var state__10231__auto__ = (function (){var statearr_12879 = f__10230__auto__.call(null);(statearr_12879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10229__auto___12880);
return statearr_12879;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10231__auto__);
});})(c__10229__auto___12880,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10229__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10229__auto__){
return (function (){var f__10230__auto__ = (function (){var switch__10164__auto__ = ((function (c__10229__auto__){
return (function (state_13058){var state_val_13059 = (state_13058[(1)]);if((state_val_13059 === (7)))
{var inst_13054 = (state_13058[(2)]);var state_13058__$1 = state_13058;var statearr_13060_13101 = state_13058__$1;(statearr_13060_13101[(2)] = inst_13054);
(statearr_13060_13101[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13059 === (20)))
{var inst_13024 = (state_13058[(7)]);var inst_13035 = (state_13058[(2)]);var inst_13036 = cljs.core.next.call(null,inst_13024);var inst_13010 = inst_13036;var inst_13011 = null;var inst_13012 = (0);var inst_13013 = (0);var state_13058__$1 = (function (){var statearr_13061 = state_13058;(statearr_13061[(8)] = inst_13011);
(statearr_13061[(9)] = inst_13012);
(statearr_13061[(10)] = inst_13010);
(statearr_13061[(11)] = inst_13035);
(statearr_13061[(12)] = inst_13013);
return statearr_13061;
})();var statearr_13062_13102 = state_13058__$1;(statearr_13062_13102[(2)] = null);
(statearr_13062_13102[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13059 === (1)))
{var state_13058__$1 = state_13058;var statearr_13063_13103 = state_13058__$1;(statearr_13063_13103[(2)] = null);
(statearr_13063_13103[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13059 === (4)))
{var inst_12999 = (state_13058[(13)]);var inst_12999__$1 = (state_13058[(2)]);var inst_13000 = (inst_12999__$1 == null);var state_13058__$1 = (function (){var statearr_13064 = state_13058;(statearr_13064[(13)] = inst_12999__$1);
return statearr_13064;
})();if(cljs.core.truth_(inst_13000))
{var statearr_13065_13104 = state_13058__$1;(statearr_13065_13104[(1)] = (5));
} else
{var statearr_13066_13105 = state_13058__$1;(statearr_13066_13105[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13059 === (15)))
{var state_13058__$1 = state_13058;var statearr_13070_13106 = state_13058__$1;(statearr_13070_13106[(2)] = null);
(statearr_13070_13106[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13059 === (21)))
{var state_13058__$1 = state_13058;var statearr_13071_13107 = state_13058__$1;(statearr_13071_13107[(2)] = null);
(statearr_13071_13107[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13059 === (13)))
{var inst_13011 = (state_13058[(8)]);var inst_13012 = (state_13058[(9)]);var inst_13010 = (state_13058[(10)]);var inst_13013 = (state_13058[(12)]);var inst_13020 = (state_13058[(2)]);var inst_13021 = (inst_13013 + (1));var tmp13067 = inst_13011;var tmp13068 = inst_13012;var tmp13069 = inst_13010;var inst_13010__$1 = tmp13069;var inst_13011__$1 = tmp13067;var inst_13012__$1 = tmp13068;var inst_13013__$1 = inst_13021;var state_13058__$1 = (function (){var statearr_13072 = state_13058;(statearr_13072[(8)] = inst_13011__$1);
(statearr_13072[(9)] = inst_13012__$1);
(statearr_13072[(14)] = inst_13020);
(statearr_13072[(10)] = inst_13010__$1);
(statearr_13072[(12)] = inst_13013__$1);
return statearr_13072;
})();var statearr_13073_13108 = state_13058__$1;(statearr_13073_13108[(2)] = null);
(statearr_13073_13108[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13059 === (22)))
{var state_13058__$1 = state_13058;var statearr_13074_13109 = state_13058__$1;(statearr_13074_13109[(2)] = null);
(statearr_13074_13109[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13059 === (6)))
{var inst_12999 = (state_13058[(13)]);var inst_13008 = f.call(null,inst_12999);var inst_13009 = cljs.core.seq.call(null,inst_13008);var inst_13010 = inst_13009;var inst_13011 = null;var inst_13012 = (0);var inst_13013 = (0);var state_13058__$1 = (function (){var statearr_13075 = state_13058;(statearr_13075[(8)] = inst_13011);
(statearr_13075[(9)] = inst_13012);
(statearr_13075[(10)] = inst_13010);
(statearr_13075[(12)] = inst_13013);
return statearr_13075;
})();var statearr_13076_13110 = state_13058__$1;(statearr_13076_13110[(2)] = null);
(statearr_13076_13110[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13059 === (17)))
{var inst_13024 = (state_13058[(7)]);var inst_13028 = cljs.core.chunk_first.call(null,inst_13024);var inst_13029 = cljs.core.chunk_rest.call(null,inst_13024);var inst_13030 = cljs.core.count.call(null,inst_13028);var inst_13010 = inst_13029;var inst_13011 = inst_13028;var inst_13012 = inst_13030;var inst_13013 = (0);var state_13058__$1 = (function (){var statearr_13077 = state_13058;(statearr_13077[(8)] = inst_13011);
(statearr_13077[(9)] = inst_13012);
(statearr_13077[(10)] = inst_13010);
(statearr_13077[(12)] = inst_13013);
return statearr_13077;
})();var statearr_13078_13111 = state_13058__$1;(statearr_13078_13111[(2)] = null);
(statearr_13078_13111[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13059 === (3)))
{var inst_13056 = (state_13058[(2)]);var state_13058__$1 = state_13058;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13058__$1,inst_13056);
} else
{if((state_val_13059 === (12)))
{var inst_13044 = (state_13058[(2)]);var state_13058__$1 = state_13058;var statearr_13079_13112 = state_13058__$1;(statearr_13079_13112[(2)] = inst_13044);
(statearr_13079_13112[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13059 === (2)))
{var state_13058__$1 = state_13058;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13058__$1,(4),in$);
} else
{if((state_val_13059 === (23)))
{var inst_13052 = (state_13058[(2)]);var state_13058__$1 = state_13058;var statearr_13080_13113 = state_13058__$1;(statearr_13080_13113[(2)] = inst_13052);
(statearr_13080_13113[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13059 === (19)))
{var inst_13039 = (state_13058[(2)]);var state_13058__$1 = state_13058;var statearr_13081_13114 = state_13058__$1;(statearr_13081_13114[(2)] = inst_13039);
(statearr_13081_13114[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13059 === (11)))
{var inst_13010 = (state_13058[(10)]);var inst_13024 = (state_13058[(7)]);var inst_13024__$1 = cljs.core.seq.call(null,inst_13010);var state_13058__$1 = (function (){var statearr_13082 = state_13058;(statearr_13082[(7)] = inst_13024__$1);
return statearr_13082;
})();if(inst_13024__$1)
{var statearr_13083_13115 = state_13058__$1;(statearr_13083_13115[(1)] = (14));
} else
{var statearr_13084_13116 = state_13058__$1;(statearr_13084_13116[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13059 === (9)))
{var inst_13046 = (state_13058[(2)]);var inst_13047 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_13058__$1 = (function (){var statearr_13085 = state_13058;(statearr_13085[(15)] = inst_13046);
return statearr_13085;
})();if(cljs.core.truth_(inst_13047))
{var statearr_13086_13117 = state_13058__$1;(statearr_13086_13117[(1)] = (21));
} else
{var statearr_13087_13118 = state_13058__$1;(statearr_13087_13118[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13059 === (5)))
{var inst_13002 = cljs.core.async.close_BANG_.call(null,out);var state_13058__$1 = state_13058;var statearr_13088_13119 = state_13058__$1;(statearr_13088_13119[(2)] = inst_13002);
(statearr_13088_13119[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13059 === (14)))
{var inst_13024 = (state_13058[(7)]);var inst_13026 = cljs.core.chunked_seq_QMARK_.call(null,inst_13024);var state_13058__$1 = state_13058;if(inst_13026)
{var statearr_13089_13120 = state_13058__$1;(statearr_13089_13120[(1)] = (17));
} else
{var statearr_13090_13121 = state_13058__$1;(statearr_13090_13121[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13059 === (16)))
{var inst_13042 = (state_13058[(2)]);var state_13058__$1 = state_13058;var statearr_13091_13122 = state_13058__$1;(statearr_13091_13122[(2)] = inst_13042);
(statearr_13091_13122[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13059 === (10)))
{var inst_13011 = (state_13058[(8)]);var inst_13013 = (state_13058[(12)]);var inst_13018 = cljs.core._nth.call(null,inst_13011,inst_13013);var state_13058__$1 = state_13058;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13058__$1,(13),out,inst_13018);
} else
{if((state_val_13059 === (18)))
{var inst_13024 = (state_13058[(7)]);var inst_13033 = cljs.core.first.call(null,inst_13024);var state_13058__$1 = state_13058;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13058__$1,(20),out,inst_13033);
} else
{if((state_val_13059 === (8)))
{var inst_13012 = (state_13058[(9)]);var inst_13013 = (state_13058[(12)]);var inst_13015 = (inst_13013 < inst_13012);var inst_13016 = inst_13015;var state_13058__$1 = state_13058;if(cljs.core.truth_(inst_13016))
{var statearr_13092_13123 = state_13058__$1;(statearr_13092_13123[(1)] = (10));
} else
{var statearr_13093_13124 = state_13058__$1;(statearr_13093_13124[(1)] = (11));
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
});})(c__10229__auto__))
;return ((function (switch__10164__auto__,c__10229__auto__){
return (function() {
var state_machine__10165__auto__ = null;
var state_machine__10165__auto____0 = (function (){var statearr_13097 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13097[(0)] = state_machine__10165__auto__);
(statearr_13097[(1)] = (1));
return statearr_13097;
});
var state_machine__10165__auto____1 = (function (state_13058){while(true){
var ret_value__10166__auto__ = (function (){try{while(true){
var result__10167__auto__ = switch__10164__auto__.call(null,state_13058);if(cljs.core.keyword_identical_QMARK_.call(null,result__10167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10167__auto__;
}
break;
}
}catch (e13098){if((e13098 instanceof Object))
{var ex__10168__auto__ = e13098;var statearr_13099_13125 = state_13058;(statearr_13099_13125[(5)] = ex__10168__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13058);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13098;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13126 = state_13058;
state_13058 = G__13126;
continue;
}
} else
{return ret_value__10166__auto__;
}
break;
}
});
state_machine__10165__auto__ = function(state_13058){
switch(arguments.length){
case 0:
return state_machine__10165__auto____0.call(this);
case 1:
return state_machine__10165__auto____1.call(this,state_13058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10165__auto____0;
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10165__auto____1;
return state_machine__10165__auto__;
})()
;})(switch__10164__auto__,c__10229__auto__))
})();var state__10231__auto__ = (function (){var statearr_13100 = f__10230__auto__.call(null);(statearr_13100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10229__auto__);
return statearr_13100;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10231__auto__);
});})(c__10229__auto__))
);
return c__10229__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__10229__auto___13221 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10229__auto___13221){
return (function (){var f__10230__auto__ = (function (){var switch__10164__auto__ = ((function (c__10229__auto___13221){
return (function (state_13197){var state_val_13198 = (state_13197[(1)]);if((state_val_13198 === (7)))
{var inst_13193 = (state_13197[(2)]);var state_13197__$1 = state_13197;var statearr_13199_13222 = state_13197__$1;(statearr_13199_13222[(2)] = inst_13193);
(statearr_13199_13222[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13198 === (1)))
{var state_13197__$1 = state_13197;var statearr_13200_13223 = state_13197__$1;(statearr_13200_13223[(2)] = null);
(statearr_13200_13223[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13198 === (4)))
{var inst_13176 = (state_13197[(7)]);var inst_13176__$1 = (state_13197[(2)]);var inst_13177 = (inst_13176__$1 == null);var state_13197__$1 = (function (){var statearr_13201 = state_13197;(statearr_13201[(7)] = inst_13176__$1);
return statearr_13201;
})();if(cljs.core.truth_(inst_13177))
{var statearr_13202_13224 = state_13197__$1;(statearr_13202_13224[(1)] = (5));
} else
{var statearr_13203_13225 = state_13197__$1;(statearr_13203_13225[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13198 === (13)))
{var state_13197__$1 = state_13197;var statearr_13204_13226 = state_13197__$1;(statearr_13204_13226[(2)] = null);
(statearr_13204_13226[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13198 === (6)))
{var inst_13176 = (state_13197[(7)]);var state_13197__$1 = state_13197;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13197__$1,(11),to,inst_13176);
} else
{if((state_val_13198 === (3)))
{var inst_13195 = (state_13197[(2)]);var state_13197__$1 = state_13197;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13197__$1,inst_13195);
} else
{if((state_val_13198 === (12)))
{var state_13197__$1 = state_13197;var statearr_13205_13227 = state_13197__$1;(statearr_13205_13227[(2)] = null);
(statearr_13205_13227[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13198 === (2)))
{var state_13197__$1 = state_13197;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13197__$1,(4),from);
} else
{if((state_val_13198 === (11)))
{var inst_13186 = (state_13197[(2)]);var state_13197__$1 = state_13197;if(cljs.core.truth_(inst_13186))
{var statearr_13206_13228 = state_13197__$1;(statearr_13206_13228[(1)] = (12));
} else
{var statearr_13207_13229 = state_13197__$1;(statearr_13207_13229[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13198 === (9)))
{var state_13197__$1 = state_13197;var statearr_13208_13230 = state_13197__$1;(statearr_13208_13230[(2)] = null);
(statearr_13208_13230[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13198 === (5)))
{var state_13197__$1 = state_13197;if(cljs.core.truth_(close_QMARK_))
{var statearr_13209_13231 = state_13197__$1;(statearr_13209_13231[(1)] = (8));
} else
{var statearr_13210_13232 = state_13197__$1;(statearr_13210_13232[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13198 === (14)))
{var inst_13191 = (state_13197[(2)]);var state_13197__$1 = state_13197;var statearr_13211_13233 = state_13197__$1;(statearr_13211_13233[(2)] = inst_13191);
(statearr_13211_13233[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13198 === (10)))
{var inst_13183 = (state_13197[(2)]);var state_13197__$1 = state_13197;var statearr_13212_13234 = state_13197__$1;(statearr_13212_13234[(2)] = inst_13183);
(statearr_13212_13234[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13198 === (8)))
{var inst_13180 = cljs.core.async.close_BANG_.call(null,to);var state_13197__$1 = state_13197;var statearr_13213_13235 = state_13197__$1;(statearr_13213_13235[(2)] = inst_13180);
(statearr_13213_13235[(1)] = (10));
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
});})(c__10229__auto___13221))
;return ((function (switch__10164__auto__,c__10229__auto___13221){
return (function() {
var state_machine__10165__auto__ = null;
var state_machine__10165__auto____0 = (function (){var statearr_13217 = [null,null,null,null,null,null,null,null];(statearr_13217[(0)] = state_machine__10165__auto__);
(statearr_13217[(1)] = (1));
return statearr_13217;
});
var state_machine__10165__auto____1 = (function (state_13197){while(true){
var ret_value__10166__auto__ = (function (){try{while(true){
var result__10167__auto__ = switch__10164__auto__.call(null,state_13197);if(cljs.core.keyword_identical_QMARK_.call(null,result__10167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10167__auto__;
}
break;
}
}catch (e13218){if((e13218 instanceof Object))
{var ex__10168__auto__ = e13218;var statearr_13219_13236 = state_13197;(statearr_13219_13236[(5)] = ex__10168__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13197);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13218;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13237 = state_13197;
state_13197 = G__13237;
continue;
}
} else
{return ret_value__10166__auto__;
}
break;
}
});
state_machine__10165__auto__ = function(state_13197){
switch(arguments.length){
case 0:
return state_machine__10165__auto____0.call(this);
case 1:
return state_machine__10165__auto____1.call(this,state_13197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10165__auto____0;
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10165__auto____1;
return state_machine__10165__auto__;
})()
;})(switch__10164__auto__,c__10229__auto___13221))
})();var state__10231__auto__ = (function (){var statearr_13220 = f__10230__auto__.call(null);(statearr_13220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10229__auto___13221);
return statearr_13220;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10231__auto__);
});})(c__10229__auto___13221))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10229__auto___13338 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10229__auto___13338,tc,fc){
return (function (){var f__10230__auto__ = (function (){var switch__10164__auto__ = ((function (c__10229__auto___13338,tc,fc){
return (function (state_13313){var state_val_13314 = (state_13313[(1)]);if((state_val_13314 === (7)))
{var inst_13309 = (state_13313[(2)]);var state_13313__$1 = state_13313;var statearr_13315_13339 = state_13313__$1;(statearr_13315_13339[(2)] = inst_13309);
(statearr_13315_13339[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13314 === (1)))
{var state_13313__$1 = state_13313;var statearr_13316_13340 = state_13313__$1;(statearr_13316_13340[(2)] = null);
(statearr_13316_13340[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13314 === (4)))
{var inst_13290 = (state_13313[(7)]);var inst_13290__$1 = (state_13313[(2)]);var inst_13291 = (inst_13290__$1 == null);var state_13313__$1 = (function (){var statearr_13317 = state_13313;(statearr_13317[(7)] = inst_13290__$1);
return statearr_13317;
})();if(cljs.core.truth_(inst_13291))
{var statearr_13318_13341 = state_13313__$1;(statearr_13318_13341[(1)] = (5));
} else
{var statearr_13319_13342 = state_13313__$1;(statearr_13319_13342[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13314 === (13)))
{var state_13313__$1 = state_13313;var statearr_13320_13343 = state_13313__$1;(statearr_13320_13343[(2)] = null);
(statearr_13320_13343[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13314 === (6)))
{var inst_13290 = (state_13313[(7)]);var inst_13296 = p.call(null,inst_13290);var state_13313__$1 = state_13313;if(cljs.core.truth_(inst_13296))
{var statearr_13321_13344 = state_13313__$1;(statearr_13321_13344[(1)] = (9));
} else
{var statearr_13322_13345 = state_13313__$1;(statearr_13322_13345[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13314 === (3)))
{var inst_13311 = (state_13313[(2)]);var state_13313__$1 = state_13313;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13313__$1,inst_13311);
} else
{if((state_val_13314 === (12)))
{var state_13313__$1 = state_13313;var statearr_13323_13346 = state_13313__$1;(statearr_13323_13346[(2)] = null);
(statearr_13323_13346[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13314 === (2)))
{var state_13313__$1 = state_13313;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13313__$1,(4),ch);
} else
{if((state_val_13314 === (11)))
{var inst_13290 = (state_13313[(7)]);var inst_13300 = (state_13313[(2)]);var state_13313__$1 = state_13313;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13313__$1,(8),inst_13300,inst_13290);
} else
{if((state_val_13314 === (9)))
{var state_13313__$1 = state_13313;var statearr_13324_13347 = state_13313__$1;(statearr_13324_13347[(2)] = tc);
(statearr_13324_13347[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13314 === (5)))
{var inst_13293 = cljs.core.async.close_BANG_.call(null,tc);var inst_13294 = cljs.core.async.close_BANG_.call(null,fc);var state_13313__$1 = (function (){var statearr_13325 = state_13313;(statearr_13325[(8)] = inst_13293);
return statearr_13325;
})();var statearr_13326_13348 = state_13313__$1;(statearr_13326_13348[(2)] = inst_13294);
(statearr_13326_13348[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13314 === (14)))
{var inst_13307 = (state_13313[(2)]);var state_13313__$1 = state_13313;var statearr_13327_13349 = state_13313__$1;(statearr_13327_13349[(2)] = inst_13307);
(statearr_13327_13349[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13314 === (10)))
{var state_13313__$1 = state_13313;var statearr_13328_13350 = state_13313__$1;(statearr_13328_13350[(2)] = fc);
(statearr_13328_13350[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13314 === (8)))
{var inst_13302 = (state_13313[(2)]);var state_13313__$1 = state_13313;if(cljs.core.truth_(inst_13302))
{var statearr_13329_13351 = state_13313__$1;(statearr_13329_13351[(1)] = (12));
} else
{var statearr_13330_13352 = state_13313__$1;(statearr_13330_13352[(1)] = (13));
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
});})(c__10229__auto___13338,tc,fc))
;return ((function (switch__10164__auto__,c__10229__auto___13338,tc,fc){
return (function() {
var state_machine__10165__auto__ = null;
var state_machine__10165__auto____0 = (function (){var statearr_13334 = [null,null,null,null,null,null,null,null,null];(statearr_13334[(0)] = state_machine__10165__auto__);
(statearr_13334[(1)] = (1));
return statearr_13334;
});
var state_machine__10165__auto____1 = (function (state_13313){while(true){
var ret_value__10166__auto__ = (function (){try{while(true){
var result__10167__auto__ = switch__10164__auto__.call(null,state_13313);if(cljs.core.keyword_identical_QMARK_.call(null,result__10167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10167__auto__;
}
break;
}
}catch (e13335){if((e13335 instanceof Object))
{var ex__10168__auto__ = e13335;var statearr_13336_13353 = state_13313;(statearr_13336_13353[(5)] = ex__10168__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13313);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13335;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13354 = state_13313;
state_13313 = G__13354;
continue;
}
} else
{return ret_value__10166__auto__;
}
break;
}
});
state_machine__10165__auto__ = function(state_13313){
switch(arguments.length){
case 0:
return state_machine__10165__auto____0.call(this);
case 1:
return state_machine__10165__auto____1.call(this,state_13313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10165__auto____0;
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10165__auto____1;
return state_machine__10165__auto__;
})()
;})(switch__10164__auto__,c__10229__auto___13338,tc,fc))
})();var state__10231__auto__ = (function (){var statearr_13337 = f__10230__auto__.call(null);(statearr_13337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10229__auto___13338);
return statearr_13337;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10231__auto__);
});})(c__10229__auto___13338,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10229__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10229__auto__){
return (function (){var f__10230__auto__ = (function (){var switch__10164__auto__ = ((function (c__10229__auto__){
return (function (state_13401){var state_val_13402 = (state_13401[(1)]);if((state_val_13402 === (7)))
{var inst_13397 = (state_13401[(2)]);var state_13401__$1 = state_13401;var statearr_13403_13419 = state_13401__$1;(statearr_13403_13419[(2)] = inst_13397);
(statearr_13403_13419[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13402 === (6)))
{var inst_13387 = (state_13401[(7)]);var inst_13390 = (state_13401[(8)]);var inst_13394 = f.call(null,inst_13387,inst_13390);var inst_13387__$1 = inst_13394;var state_13401__$1 = (function (){var statearr_13404 = state_13401;(statearr_13404[(7)] = inst_13387__$1);
return statearr_13404;
})();var statearr_13405_13420 = state_13401__$1;(statearr_13405_13420[(2)] = null);
(statearr_13405_13420[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13402 === (5)))
{var inst_13387 = (state_13401[(7)]);var state_13401__$1 = state_13401;var statearr_13406_13421 = state_13401__$1;(statearr_13406_13421[(2)] = inst_13387);
(statearr_13406_13421[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13402 === (4)))
{var inst_13390 = (state_13401[(8)]);var inst_13390__$1 = (state_13401[(2)]);var inst_13391 = (inst_13390__$1 == null);var state_13401__$1 = (function (){var statearr_13407 = state_13401;(statearr_13407[(8)] = inst_13390__$1);
return statearr_13407;
})();if(cljs.core.truth_(inst_13391))
{var statearr_13408_13422 = state_13401__$1;(statearr_13408_13422[(1)] = (5));
} else
{var statearr_13409_13423 = state_13401__$1;(statearr_13409_13423[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13402 === (3)))
{var inst_13399 = (state_13401[(2)]);var state_13401__$1 = state_13401;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13401__$1,inst_13399);
} else
{if((state_val_13402 === (2)))
{var state_13401__$1 = state_13401;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13401__$1,(4),ch);
} else
{if((state_val_13402 === (1)))
{var inst_13387 = init;var state_13401__$1 = (function (){var statearr_13410 = state_13401;(statearr_13410[(7)] = inst_13387);
return statearr_13410;
})();var statearr_13411_13424 = state_13401__$1;(statearr_13411_13424[(2)] = null);
(statearr_13411_13424[(1)] = (2));
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
});})(c__10229__auto__))
;return ((function (switch__10164__auto__,c__10229__auto__){
return (function() {
var state_machine__10165__auto__ = null;
var state_machine__10165__auto____0 = (function (){var statearr_13415 = [null,null,null,null,null,null,null,null,null];(statearr_13415[(0)] = state_machine__10165__auto__);
(statearr_13415[(1)] = (1));
return statearr_13415;
});
var state_machine__10165__auto____1 = (function (state_13401){while(true){
var ret_value__10166__auto__ = (function (){try{while(true){
var result__10167__auto__ = switch__10164__auto__.call(null,state_13401);if(cljs.core.keyword_identical_QMARK_.call(null,result__10167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10167__auto__;
}
break;
}
}catch (e13416){if((e13416 instanceof Object))
{var ex__10168__auto__ = e13416;var statearr_13417_13425 = state_13401;(statearr_13417_13425[(5)] = ex__10168__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13401);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13416;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13426 = state_13401;
state_13401 = G__13426;
continue;
}
} else
{return ret_value__10166__auto__;
}
break;
}
});
state_machine__10165__auto__ = function(state_13401){
switch(arguments.length){
case 0:
return state_machine__10165__auto____0.call(this);
case 1:
return state_machine__10165__auto____1.call(this,state_13401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10165__auto____0;
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10165__auto____1;
return state_machine__10165__auto__;
})()
;})(switch__10164__auto__,c__10229__auto__))
})();var state__10231__auto__ = (function (){var statearr_13418 = f__10230__auto__.call(null);(statearr_13418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10229__auto__);
return statearr_13418;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10231__auto__);
});})(c__10229__auto__))
);
return c__10229__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10229__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10229__auto__){
return (function (){var f__10230__auto__ = (function (){var switch__10164__auto__ = ((function (c__10229__auto__){
return (function (state_13500){var state_val_13501 = (state_13500[(1)]);if((state_val_13501 === (7)))
{var inst_13482 = (state_13500[(2)]);var state_13500__$1 = state_13500;var statearr_13502_13525 = state_13500__$1;(statearr_13502_13525[(2)] = inst_13482);
(statearr_13502_13525[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13501 === (1)))
{var inst_13476 = cljs.core.seq.call(null,coll);var inst_13477 = inst_13476;var state_13500__$1 = (function (){var statearr_13503 = state_13500;(statearr_13503[(7)] = inst_13477);
return statearr_13503;
})();var statearr_13504_13526 = state_13500__$1;(statearr_13504_13526[(2)] = null);
(statearr_13504_13526[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13501 === (4)))
{var inst_13477 = (state_13500[(7)]);var inst_13480 = cljs.core.first.call(null,inst_13477);var state_13500__$1 = state_13500;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13500__$1,(7),ch,inst_13480);
} else
{if((state_val_13501 === (13)))
{var inst_13494 = (state_13500[(2)]);var state_13500__$1 = state_13500;var statearr_13505_13527 = state_13500__$1;(statearr_13505_13527[(2)] = inst_13494);
(statearr_13505_13527[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13501 === (6)))
{var inst_13485 = (state_13500[(2)]);var state_13500__$1 = state_13500;if(cljs.core.truth_(inst_13485))
{var statearr_13506_13528 = state_13500__$1;(statearr_13506_13528[(1)] = (8));
} else
{var statearr_13507_13529 = state_13500__$1;(statearr_13507_13529[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13501 === (3)))
{var inst_13498 = (state_13500[(2)]);var state_13500__$1 = state_13500;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13500__$1,inst_13498);
} else
{if((state_val_13501 === (12)))
{var state_13500__$1 = state_13500;var statearr_13508_13530 = state_13500__$1;(statearr_13508_13530[(2)] = null);
(statearr_13508_13530[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13501 === (2)))
{var inst_13477 = (state_13500[(7)]);var state_13500__$1 = state_13500;if(cljs.core.truth_(inst_13477))
{var statearr_13509_13531 = state_13500__$1;(statearr_13509_13531[(1)] = (4));
} else
{var statearr_13510_13532 = state_13500__$1;(statearr_13510_13532[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13501 === (11)))
{var inst_13491 = cljs.core.async.close_BANG_.call(null,ch);var state_13500__$1 = state_13500;var statearr_13511_13533 = state_13500__$1;(statearr_13511_13533[(2)] = inst_13491);
(statearr_13511_13533[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13501 === (9)))
{var state_13500__$1 = state_13500;if(cljs.core.truth_(close_QMARK_))
{var statearr_13512_13534 = state_13500__$1;(statearr_13512_13534[(1)] = (11));
} else
{var statearr_13513_13535 = state_13500__$1;(statearr_13513_13535[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13501 === (5)))
{var inst_13477 = (state_13500[(7)]);var state_13500__$1 = state_13500;var statearr_13514_13536 = state_13500__$1;(statearr_13514_13536[(2)] = inst_13477);
(statearr_13514_13536[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13501 === (10)))
{var inst_13496 = (state_13500[(2)]);var state_13500__$1 = state_13500;var statearr_13515_13537 = state_13500__$1;(statearr_13515_13537[(2)] = inst_13496);
(statearr_13515_13537[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13501 === (8)))
{var inst_13477 = (state_13500[(7)]);var inst_13487 = cljs.core.next.call(null,inst_13477);var inst_13477__$1 = inst_13487;var state_13500__$1 = (function (){var statearr_13516 = state_13500;(statearr_13516[(7)] = inst_13477__$1);
return statearr_13516;
})();var statearr_13517_13538 = state_13500__$1;(statearr_13517_13538[(2)] = null);
(statearr_13517_13538[(1)] = (2));
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
});})(c__10229__auto__))
;return ((function (switch__10164__auto__,c__10229__auto__){
return (function() {
var state_machine__10165__auto__ = null;
var state_machine__10165__auto____0 = (function (){var statearr_13521 = [null,null,null,null,null,null,null,null];(statearr_13521[(0)] = state_machine__10165__auto__);
(statearr_13521[(1)] = (1));
return statearr_13521;
});
var state_machine__10165__auto____1 = (function (state_13500){while(true){
var ret_value__10166__auto__ = (function (){try{while(true){
var result__10167__auto__ = switch__10164__auto__.call(null,state_13500);if(cljs.core.keyword_identical_QMARK_.call(null,result__10167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10167__auto__;
}
break;
}
}catch (e13522){if((e13522 instanceof Object))
{var ex__10168__auto__ = e13522;var statearr_13523_13539 = state_13500;(statearr_13523_13539[(5)] = ex__10168__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13500);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13522;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13540 = state_13500;
state_13500 = G__13540;
continue;
}
} else
{return ret_value__10166__auto__;
}
break;
}
});
state_machine__10165__auto__ = function(state_13500){
switch(arguments.length){
case 0:
return state_machine__10165__auto____0.call(this);
case 1:
return state_machine__10165__auto____1.call(this,state_13500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10165__auto____0;
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10165__auto____1;
return state_machine__10165__auto__;
})()
;})(switch__10164__auto__,c__10229__auto__))
})();var state__10231__auto__ = (function (){var statearr_13524 = f__10230__auto__.call(null);(statearr_13524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10229__auto__);
return statearr_13524;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10231__auto__);
});})(c__10229__auto__))
);
return c__10229__auto__;
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
cljs.core.async.Mux = (function (){var obj13542 = {};return obj13542;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7268__auto__ = _;if(and__7268__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7268__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__7907__auto__ = (((_ == null))?null:_);return (function (){var or__7280__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7907__auto__)]);if(or__7280__auto__)
{return or__7280__auto__;
} else
{var or__7280__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7280__auto____$1)
{return or__7280__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj13544 = {};return obj13544;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7268__auto__ = m;if(and__7268__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7268__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__7907__auto__ = (((m == null))?null:m);return (function (){var or__7280__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7907__auto__)]);if(or__7280__auto__)
{return or__7280__auto__;
} else
{var or__7280__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7280__auto____$1)
{return or__7280__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7268__auto__ = m;if(and__7268__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7268__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__7907__auto__ = (((m == null))?null:m);return (function (){var or__7280__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7907__auto__)]);if(or__7280__auto__)
{return or__7280__auto__;
} else
{var or__7280__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7280__auto____$1)
{return or__7280__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7268__auto__ = m;if(and__7268__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7268__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__7907__auto__ = (((m == null))?null:m);return (function (){var or__7280__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7907__auto__)]);if(or__7280__auto__)
{return or__7280__auto__;
} else
{var or__7280__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7280__auto____$1)
{return or__7280__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13766 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13766 = (function (cs,ch,mult,meta13767){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13767 = meta13767;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13766.cljs$lang$type = true;
cljs.core.async.t13766.cljs$lang$ctorStr = "cljs.core.async/t13766";
cljs.core.async.t13766.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7847__auto__,writer__7848__auto__,opt__7849__auto__){return cljs.core._write.call(null,writer__7848__auto__,"cljs.core.async/t13766");
});})(cs))
;
cljs.core.async.t13766.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13766.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13766.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13766.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13766.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13766.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13766.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13768){var self__ = this;
var _13768__$1 = this;return self__.meta13767;
});})(cs))
;
cljs.core.async.t13766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13768,meta13767__$1){var self__ = this;
var _13768__$1 = this;return (new cljs.core.async.t13766(self__.cs,self__.ch,self__.mult,meta13767__$1));
});})(cs))
;
cljs.core.async.__GT_t13766 = ((function (cs){
return (function __GT_t13766(cs__$1,ch__$1,mult__$1,meta13767){return (new cljs.core.async.t13766(cs__$1,ch__$1,mult__$1,meta13767));
});})(cs))
;
}
return (new cljs.core.async.t13766(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10229__auto___13987 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10229__auto___13987,cs,m,dchan,dctr,done){
return (function (){var f__10230__auto__ = (function (){var switch__10164__auto__ = ((function (c__10229__auto___13987,cs,m,dchan,dctr,done){
return (function (state_13899){var state_val_13900 = (state_13899[(1)]);if((state_val_13900 === (7)))
{var inst_13895 = (state_13899[(2)]);var state_13899__$1 = state_13899;var statearr_13901_13988 = state_13899__$1;(statearr_13901_13988[(2)] = inst_13895);
(statearr_13901_13988[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (20)))
{var inst_13800 = (state_13899[(7)]);var inst_13810 = cljs.core.first.call(null,inst_13800);var inst_13811 = cljs.core.nth.call(null,inst_13810,(0),null);var inst_13812 = cljs.core.nth.call(null,inst_13810,(1),null);var state_13899__$1 = (function (){var statearr_13902 = state_13899;(statearr_13902[(8)] = inst_13811);
return statearr_13902;
})();if(cljs.core.truth_(inst_13812))
{var statearr_13903_13989 = state_13899__$1;(statearr_13903_13989[(1)] = (22));
} else
{var statearr_13904_13990 = state_13899__$1;(statearr_13904_13990[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (27)))
{var inst_13771 = (state_13899[(9)]);var inst_13847 = (state_13899[(10)]);var inst_13840 = (state_13899[(11)]);var inst_13842 = (state_13899[(12)]);var inst_13847__$1 = cljs.core._nth.call(null,inst_13840,inst_13842);var inst_13848 = cljs.core.async.put_BANG_.call(null,inst_13847__$1,inst_13771,done);var state_13899__$1 = (function (){var statearr_13905 = state_13899;(statearr_13905[(10)] = inst_13847__$1);
return statearr_13905;
})();if(cljs.core.truth_(inst_13848))
{var statearr_13906_13991 = state_13899__$1;(statearr_13906_13991[(1)] = (30));
} else
{var statearr_13907_13992 = state_13899__$1;(statearr_13907_13992[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (1)))
{var state_13899__$1 = state_13899;var statearr_13908_13993 = state_13899__$1;(statearr_13908_13993[(2)] = null);
(statearr_13908_13993[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (24)))
{var inst_13800 = (state_13899[(7)]);var inst_13817 = (state_13899[(2)]);var inst_13818 = cljs.core.next.call(null,inst_13800);var inst_13780 = inst_13818;var inst_13781 = null;var inst_13782 = (0);var inst_13783 = (0);var state_13899__$1 = (function (){var statearr_13909 = state_13899;(statearr_13909[(13)] = inst_13817);
(statearr_13909[(14)] = inst_13781);
(statearr_13909[(15)] = inst_13782);
(statearr_13909[(16)] = inst_13783);
(statearr_13909[(17)] = inst_13780);
return statearr_13909;
})();var statearr_13910_13994 = state_13899__$1;(statearr_13910_13994[(2)] = null);
(statearr_13910_13994[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (39)))
{var state_13899__$1 = state_13899;var statearr_13914_13995 = state_13899__$1;(statearr_13914_13995[(2)] = null);
(statearr_13914_13995[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (4)))
{var inst_13771 = (state_13899[(9)]);var inst_13771__$1 = (state_13899[(2)]);var inst_13772 = (inst_13771__$1 == null);var state_13899__$1 = (function (){var statearr_13915 = state_13899;(statearr_13915[(9)] = inst_13771__$1);
return statearr_13915;
})();if(cljs.core.truth_(inst_13772))
{var statearr_13916_13996 = state_13899__$1;(statearr_13916_13996[(1)] = (5));
} else
{var statearr_13917_13997 = state_13899__$1;(statearr_13917_13997[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (15)))
{var inst_13781 = (state_13899[(14)]);var inst_13782 = (state_13899[(15)]);var inst_13783 = (state_13899[(16)]);var inst_13780 = (state_13899[(17)]);var inst_13796 = (state_13899[(2)]);var inst_13797 = (inst_13783 + (1));var tmp13911 = inst_13781;var tmp13912 = inst_13782;var tmp13913 = inst_13780;var inst_13780__$1 = tmp13913;var inst_13781__$1 = tmp13911;var inst_13782__$1 = tmp13912;var inst_13783__$1 = inst_13797;var state_13899__$1 = (function (){var statearr_13918 = state_13899;(statearr_13918[(14)] = inst_13781__$1);
(statearr_13918[(15)] = inst_13782__$1);
(statearr_13918[(16)] = inst_13783__$1);
(statearr_13918[(17)] = inst_13780__$1);
(statearr_13918[(18)] = inst_13796);
return statearr_13918;
})();var statearr_13919_13998 = state_13899__$1;(statearr_13919_13998[(2)] = null);
(statearr_13919_13998[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (21)))
{var inst_13821 = (state_13899[(2)]);var state_13899__$1 = state_13899;var statearr_13923_13999 = state_13899__$1;(statearr_13923_13999[(2)] = inst_13821);
(statearr_13923_13999[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (31)))
{var inst_13847 = (state_13899[(10)]);var inst_13851 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13852 = cljs.core.async.untap_STAR_.call(null,m,inst_13847);var state_13899__$1 = (function (){var statearr_13924 = state_13899;(statearr_13924[(19)] = inst_13851);
return statearr_13924;
})();var statearr_13925_14000 = state_13899__$1;(statearr_13925_14000[(2)] = inst_13852);
(statearr_13925_14000[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (32)))
{var inst_13841 = (state_13899[(20)]);var inst_13839 = (state_13899[(21)]);var inst_13840 = (state_13899[(11)]);var inst_13842 = (state_13899[(12)]);var inst_13854 = (state_13899[(2)]);var inst_13855 = (inst_13842 + (1));var tmp13920 = inst_13841;var tmp13921 = inst_13839;var tmp13922 = inst_13840;var inst_13839__$1 = tmp13921;var inst_13840__$1 = tmp13922;var inst_13841__$1 = tmp13920;var inst_13842__$1 = inst_13855;var state_13899__$1 = (function (){var statearr_13926 = state_13899;(statearr_13926[(20)] = inst_13841__$1);
(statearr_13926[(21)] = inst_13839__$1);
(statearr_13926[(11)] = inst_13840__$1);
(statearr_13926[(22)] = inst_13854);
(statearr_13926[(12)] = inst_13842__$1);
return statearr_13926;
})();var statearr_13927_14001 = state_13899__$1;(statearr_13927_14001[(2)] = null);
(statearr_13927_14001[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (40)))
{var inst_13867 = (state_13899[(23)]);var inst_13871 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13872 = cljs.core.async.untap_STAR_.call(null,m,inst_13867);var state_13899__$1 = (function (){var statearr_13928 = state_13899;(statearr_13928[(24)] = inst_13871);
return statearr_13928;
})();var statearr_13929_14002 = state_13899__$1;(statearr_13929_14002[(2)] = inst_13872);
(statearr_13929_14002[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (33)))
{var inst_13858 = (state_13899[(25)]);var inst_13860 = cljs.core.chunked_seq_QMARK_.call(null,inst_13858);var state_13899__$1 = state_13899;if(inst_13860)
{var statearr_13930_14003 = state_13899__$1;(statearr_13930_14003[(1)] = (36));
} else
{var statearr_13931_14004 = state_13899__$1;(statearr_13931_14004[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (13)))
{var inst_13790 = (state_13899[(26)]);var inst_13793 = cljs.core.async.close_BANG_.call(null,inst_13790);var state_13899__$1 = state_13899;var statearr_13932_14005 = state_13899__$1;(statearr_13932_14005[(2)] = inst_13793);
(statearr_13932_14005[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (22)))
{var inst_13811 = (state_13899[(8)]);var inst_13814 = cljs.core.async.close_BANG_.call(null,inst_13811);var state_13899__$1 = state_13899;var statearr_13933_14006 = state_13899__$1;(statearr_13933_14006[(2)] = inst_13814);
(statearr_13933_14006[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (36)))
{var inst_13858 = (state_13899[(25)]);var inst_13862 = cljs.core.chunk_first.call(null,inst_13858);var inst_13863 = cljs.core.chunk_rest.call(null,inst_13858);var inst_13864 = cljs.core.count.call(null,inst_13862);var inst_13839 = inst_13863;var inst_13840 = inst_13862;var inst_13841 = inst_13864;var inst_13842 = (0);var state_13899__$1 = (function (){var statearr_13934 = state_13899;(statearr_13934[(20)] = inst_13841);
(statearr_13934[(21)] = inst_13839);
(statearr_13934[(11)] = inst_13840);
(statearr_13934[(12)] = inst_13842);
return statearr_13934;
})();var statearr_13935_14007 = state_13899__$1;(statearr_13935_14007[(2)] = null);
(statearr_13935_14007[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (41)))
{var inst_13858 = (state_13899[(25)]);var inst_13874 = (state_13899[(2)]);var inst_13875 = cljs.core.next.call(null,inst_13858);var inst_13839 = inst_13875;var inst_13840 = null;var inst_13841 = (0);var inst_13842 = (0);var state_13899__$1 = (function (){var statearr_13936 = state_13899;(statearr_13936[(20)] = inst_13841);
(statearr_13936[(21)] = inst_13839);
(statearr_13936[(27)] = inst_13874);
(statearr_13936[(11)] = inst_13840);
(statearr_13936[(12)] = inst_13842);
return statearr_13936;
})();var statearr_13937_14008 = state_13899__$1;(statearr_13937_14008[(2)] = null);
(statearr_13937_14008[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (43)))
{var state_13899__$1 = state_13899;var statearr_13938_14009 = state_13899__$1;(statearr_13938_14009[(2)] = null);
(statearr_13938_14009[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (29)))
{var inst_13883 = (state_13899[(2)]);var state_13899__$1 = state_13899;var statearr_13939_14010 = state_13899__$1;(statearr_13939_14010[(2)] = inst_13883);
(statearr_13939_14010[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (44)))
{var inst_13892 = (state_13899[(2)]);var state_13899__$1 = (function (){var statearr_13940 = state_13899;(statearr_13940[(28)] = inst_13892);
return statearr_13940;
})();var statearr_13941_14011 = state_13899__$1;(statearr_13941_14011[(2)] = null);
(statearr_13941_14011[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (6)))
{var inst_13831 = (state_13899[(29)]);var inst_13830 = cljs.core.deref.call(null,cs);var inst_13831__$1 = cljs.core.keys.call(null,inst_13830);var inst_13832 = cljs.core.count.call(null,inst_13831__$1);var inst_13833 = cljs.core.reset_BANG_.call(null,dctr,inst_13832);var inst_13838 = cljs.core.seq.call(null,inst_13831__$1);var inst_13839 = inst_13838;var inst_13840 = null;var inst_13841 = (0);var inst_13842 = (0);var state_13899__$1 = (function (){var statearr_13942 = state_13899;(statearr_13942[(30)] = inst_13833);
(statearr_13942[(20)] = inst_13841);
(statearr_13942[(29)] = inst_13831__$1);
(statearr_13942[(21)] = inst_13839);
(statearr_13942[(11)] = inst_13840);
(statearr_13942[(12)] = inst_13842);
return statearr_13942;
})();var statearr_13943_14012 = state_13899__$1;(statearr_13943_14012[(2)] = null);
(statearr_13943_14012[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (28)))
{var inst_13839 = (state_13899[(21)]);var inst_13858 = (state_13899[(25)]);var inst_13858__$1 = cljs.core.seq.call(null,inst_13839);var state_13899__$1 = (function (){var statearr_13944 = state_13899;(statearr_13944[(25)] = inst_13858__$1);
return statearr_13944;
})();if(inst_13858__$1)
{var statearr_13945_14013 = state_13899__$1;(statearr_13945_14013[(1)] = (33));
} else
{var statearr_13946_14014 = state_13899__$1;(statearr_13946_14014[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (25)))
{var inst_13841 = (state_13899[(20)]);var inst_13842 = (state_13899[(12)]);var inst_13844 = (inst_13842 < inst_13841);var inst_13845 = inst_13844;var state_13899__$1 = state_13899;if(cljs.core.truth_(inst_13845))
{var statearr_13947_14015 = state_13899__$1;(statearr_13947_14015[(1)] = (27));
} else
{var statearr_13948_14016 = state_13899__$1;(statearr_13948_14016[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (34)))
{var state_13899__$1 = state_13899;var statearr_13949_14017 = state_13899__$1;(statearr_13949_14017[(2)] = null);
(statearr_13949_14017[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (17)))
{var state_13899__$1 = state_13899;var statearr_13950_14018 = state_13899__$1;(statearr_13950_14018[(2)] = null);
(statearr_13950_14018[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (3)))
{var inst_13897 = (state_13899[(2)]);var state_13899__$1 = state_13899;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13899__$1,inst_13897);
} else
{if((state_val_13900 === (12)))
{var inst_13826 = (state_13899[(2)]);var state_13899__$1 = state_13899;var statearr_13951_14019 = state_13899__$1;(statearr_13951_14019[(2)] = inst_13826);
(statearr_13951_14019[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (2)))
{var state_13899__$1 = state_13899;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13899__$1,(4),ch);
} else
{if((state_val_13900 === (23)))
{var state_13899__$1 = state_13899;var statearr_13952_14020 = state_13899__$1;(statearr_13952_14020[(2)] = null);
(statearr_13952_14020[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (35)))
{var inst_13881 = (state_13899[(2)]);var state_13899__$1 = state_13899;var statearr_13953_14021 = state_13899__$1;(statearr_13953_14021[(2)] = inst_13881);
(statearr_13953_14021[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (19)))
{var inst_13800 = (state_13899[(7)]);var inst_13804 = cljs.core.chunk_first.call(null,inst_13800);var inst_13805 = cljs.core.chunk_rest.call(null,inst_13800);var inst_13806 = cljs.core.count.call(null,inst_13804);var inst_13780 = inst_13805;var inst_13781 = inst_13804;var inst_13782 = inst_13806;var inst_13783 = (0);var state_13899__$1 = (function (){var statearr_13954 = state_13899;(statearr_13954[(14)] = inst_13781);
(statearr_13954[(15)] = inst_13782);
(statearr_13954[(16)] = inst_13783);
(statearr_13954[(17)] = inst_13780);
return statearr_13954;
})();var statearr_13955_14022 = state_13899__$1;(statearr_13955_14022[(2)] = null);
(statearr_13955_14022[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (11)))
{var inst_13800 = (state_13899[(7)]);var inst_13780 = (state_13899[(17)]);var inst_13800__$1 = cljs.core.seq.call(null,inst_13780);var state_13899__$1 = (function (){var statearr_13956 = state_13899;(statearr_13956[(7)] = inst_13800__$1);
return statearr_13956;
})();if(inst_13800__$1)
{var statearr_13957_14023 = state_13899__$1;(statearr_13957_14023[(1)] = (16));
} else
{var statearr_13958_14024 = state_13899__$1;(statearr_13958_14024[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (9)))
{var inst_13828 = (state_13899[(2)]);var state_13899__$1 = state_13899;var statearr_13959_14025 = state_13899__$1;(statearr_13959_14025[(2)] = inst_13828);
(statearr_13959_14025[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (5)))
{var inst_13778 = cljs.core.deref.call(null,cs);var inst_13779 = cljs.core.seq.call(null,inst_13778);var inst_13780 = inst_13779;var inst_13781 = null;var inst_13782 = (0);var inst_13783 = (0);var state_13899__$1 = (function (){var statearr_13960 = state_13899;(statearr_13960[(14)] = inst_13781);
(statearr_13960[(15)] = inst_13782);
(statearr_13960[(16)] = inst_13783);
(statearr_13960[(17)] = inst_13780);
return statearr_13960;
})();var statearr_13961_14026 = state_13899__$1;(statearr_13961_14026[(2)] = null);
(statearr_13961_14026[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (14)))
{var state_13899__$1 = state_13899;var statearr_13962_14027 = state_13899__$1;(statearr_13962_14027[(2)] = null);
(statearr_13962_14027[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (45)))
{var inst_13889 = (state_13899[(2)]);var state_13899__$1 = state_13899;var statearr_13963_14028 = state_13899__$1;(statearr_13963_14028[(2)] = inst_13889);
(statearr_13963_14028[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (26)))
{var inst_13831 = (state_13899[(29)]);var inst_13885 = (state_13899[(2)]);var inst_13886 = cljs.core.seq.call(null,inst_13831);var state_13899__$1 = (function (){var statearr_13964 = state_13899;(statearr_13964[(31)] = inst_13885);
return statearr_13964;
})();if(inst_13886)
{var statearr_13965_14029 = state_13899__$1;(statearr_13965_14029[(1)] = (42));
} else
{var statearr_13966_14030 = state_13899__$1;(statearr_13966_14030[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (16)))
{var inst_13800 = (state_13899[(7)]);var inst_13802 = cljs.core.chunked_seq_QMARK_.call(null,inst_13800);var state_13899__$1 = state_13899;if(inst_13802)
{var statearr_13967_14031 = state_13899__$1;(statearr_13967_14031[(1)] = (19));
} else
{var statearr_13968_14032 = state_13899__$1;(statearr_13968_14032[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (38)))
{var inst_13878 = (state_13899[(2)]);var state_13899__$1 = state_13899;var statearr_13969_14033 = state_13899__$1;(statearr_13969_14033[(2)] = inst_13878);
(statearr_13969_14033[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (30)))
{var state_13899__$1 = state_13899;var statearr_13970_14034 = state_13899__$1;(statearr_13970_14034[(2)] = null);
(statearr_13970_14034[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (10)))
{var inst_13781 = (state_13899[(14)]);var inst_13783 = (state_13899[(16)]);var inst_13789 = cljs.core._nth.call(null,inst_13781,inst_13783);var inst_13790 = cljs.core.nth.call(null,inst_13789,(0),null);var inst_13791 = cljs.core.nth.call(null,inst_13789,(1),null);var state_13899__$1 = (function (){var statearr_13971 = state_13899;(statearr_13971[(26)] = inst_13790);
return statearr_13971;
})();if(cljs.core.truth_(inst_13791))
{var statearr_13972_14035 = state_13899__$1;(statearr_13972_14035[(1)] = (13));
} else
{var statearr_13973_14036 = state_13899__$1;(statearr_13973_14036[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (18)))
{var inst_13824 = (state_13899[(2)]);var state_13899__$1 = state_13899;var statearr_13974_14037 = state_13899__$1;(statearr_13974_14037[(2)] = inst_13824);
(statearr_13974_14037[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (42)))
{var state_13899__$1 = state_13899;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13899__$1,(45),dchan);
} else
{if((state_val_13900 === (37)))
{var inst_13867 = (state_13899[(23)]);var inst_13771 = (state_13899[(9)]);var inst_13858 = (state_13899[(25)]);var inst_13867__$1 = cljs.core.first.call(null,inst_13858);var inst_13868 = cljs.core.async.put_BANG_.call(null,inst_13867__$1,inst_13771,done);var state_13899__$1 = (function (){var statearr_13975 = state_13899;(statearr_13975[(23)] = inst_13867__$1);
return statearr_13975;
})();if(cljs.core.truth_(inst_13868))
{var statearr_13976_14038 = state_13899__$1;(statearr_13976_14038[(1)] = (39));
} else
{var statearr_13977_14039 = state_13899__$1;(statearr_13977_14039[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13900 === (8)))
{var inst_13782 = (state_13899[(15)]);var inst_13783 = (state_13899[(16)]);var inst_13785 = (inst_13783 < inst_13782);var inst_13786 = inst_13785;var state_13899__$1 = state_13899;if(cljs.core.truth_(inst_13786))
{var statearr_13978_14040 = state_13899__$1;(statearr_13978_14040[(1)] = (10));
} else
{var statearr_13979_14041 = state_13899__$1;(statearr_13979_14041[(1)] = (11));
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
});})(c__10229__auto___13987,cs,m,dchan,dctr,done))
;return ((function (switch__10164__auto__,c__10229__auto___13987,cs,m,dchan,dctr,done){
return (function() {
var state_machine__10165__auto__ = null;
var state_machine__10165__auto____0 = (function (){var statearr_13983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13983[(0)] = state_machine__10165__auto__);
(statearr_13983[(1)] = (1));
return statearr_13983;
});
var state_machine__10165__auto____1 = (function (state_13899){while(true){
var ret_value__10166__auto__ = (function (){try{while(true){
var result__10167__auto__ = switch__10164__auto__.call(null,state_13899);if(cljs.core.keyword_identical_QMARK_.call(null,result__10167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10167__auto__;
}
break;
}
}catch (e13984){if((e13984 instanceof Object))
{var ex__10168__auto__ = e13984;var statearr_13985_14042 = state_13899;(statearr_13985_14042[(5)] = ex__10168__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13899);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13984;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14043 = state_13899;
state_13899 = G__14043;
continue;
}
} else
{return ret_value__10166__auto__;
}
break;
}
});
state_machine__10165__auto__ = function(state_13899){
switch(arguments.length){
case 0:
return state_machine__10165__auto____0.call(this);
case 1:
return state_machine__10165__auto____1.call(this,state_13899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10165__auto____0;
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10165__auto____1;
return state_machine__10165__auto__;
})()
;})(switch__10164__auto__,c__10229__auto___13987,cs,m,dchan,dctr,done))
})();var state__10231__auto__ = (function (){var statearr_13986 = f__10230__auto__.call(null);(statearr_13986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10229__auto___13987);
return statearr_13986;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10231__auto__);
});})(c__10229__auto___13987,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj14045 = {};return obj14045;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7268__auto__ = m;if(and__7268__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7268__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__7907__auto__ = (((m == null))?null:m);return (function (){var or__7280__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7907__auto__)]);if(or__7280__auto__)
{return or__7280__auto__;
} else
{var or__7280__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7280__auto____$1)
{return or__7280__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7268__auto__ = m;if(and__7268__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7268__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__7907__auto__ = (((m == null))?null:m);return (function (){var or__7280__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7907__auto__)]);if(or__7280__auto__)
{return or__7280__auto__;
} else
{var or__7280__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7280__auto____$1)
{return or__7280__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7268__auto__ = m;if(and__7268__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7268__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__7907__auto__ = (((m == null))?null:m);return (function (){var or__7280__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7907__auto__)]);if(or__7280__auto__)
{return or__7280__auto__;
} else
{var or__7280__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7280__auto____$1)
{return or__7280__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7268__auto__ = m;if(and__7268__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7268__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__7907__auto__ = (((m == null))?null:m);return (function (){var or__7280__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7907__auto__)]);if(or__7280__auto__)
{return or__7280__auto__;
} else
{var or__7280__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7280__auto____$1)
{return or__7280__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7268__auto__ = m;if(and__7268__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7268__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__7907__auto__ = (((m == null))?null:m);return (function (){var or__7280__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7907__auto__)]);if(or__7280__auto__)
{return or__7280__auto__;
} else
{var or__7280__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7280__auto____$1)
{return or__7280__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t14165 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14165 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14166){
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
this.meta14166 = meta14166;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14165.cljs$lang$type = true;
cljs.core.async.t14165.cljs$lang$ctorStr = "cljs.core.async/t14165";
cljs.core.async.t14165.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7847__auto__,writer__7848__auto__,opt__7849__auto__){return cljs.core._write.call(null,writer__7848__auto__,"cljs.core.async/t14165");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14165.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14165.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14165.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14165.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14165.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14165.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14165.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14165.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14165.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14167){var self__ = this;
var _14167__$1 = this;return self__.meta14166;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14167,meta14166__$1){var self__ = this;
var _14167__$1 = this;return (new cljs.core.async.t14165(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14166__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14165 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14165(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14166){return (new cljs.core.async.t14165(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14166));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14165(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__10229__auto___14284 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10229__auto___14284,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__10230__auto__ = (function (){var switch__10164__auto__ = ((function (c__10229__auto___14284,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14237){var state_val_14238 = (state_14237[(1)]);if((state_val_14238 === (7)))
{var inst_14181 = (state_14237[(7)]);var inst_14186 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14181);var state_14237__$1 = state_14237;var statearr_14239_14285 = state_14237__$1;(statearr_14239_14285[(2)] = inst_14186);
(statearr_14239_14285[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14238 === (20)))
{var inst_14196 = (state_14237[(8)]);var state_14237__$1 = state_14237;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14237__$1,(23),out,inst_14196);
} else
{if((state_val_14238 === (1)))
{var inst_14171 = (state_14237[(9)]);var inst_14171__$1 = calc_state.call(null);var inst_14172 = cljs.core.seq_QMARK_.call(null,inst_14171__$1);var state_14237__$1 = (function (){var statearr_14240 = state_14237;(statearr_14240[(9)] = inst_14171__$1);
return statearr_14240;
})();if(inst_14172)
{var statearr_14241_14286 = state_14237__$1;(statearr_14241_14286[(1)] = (2));
} else
{var statearr_14242_14287 = state_14237__$1;(statearr_14242_14287[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14238 === (24)))
{var inst_14189 = (state_14237[(10)]);var inst_14181 = inst_14189;var state_14237__$1 = (function (){var statearr_14243 = state_14237;(statearr_14243[(7)] = inst_14181);
return statearr_14243;
})();var statearr_14244_14288 = state_14237__$1;(statearr_14244_14288[(2)] = null);
(statearr_14244_14288[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14238 === (4)))
{var inst_14171 = (state_14237[(9)]);var inst_14177 = (state_14237[(2)]);var inst_14178 = cljs.core.get.call(null,inst_14177,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_14179 = cljs.core.get.call(null,inst_14177,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_14180 = cljs.core.get.call(null,inst_14177,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_14181 = inst_14171;var state_14237__$1 = (function (){var statearr_14245 = state_14237;(statearr_14245[(11)] = inst_14180);
(statearr_14245[(12)] = inst_14178);
(statearr_14245[(13)] = inst_14179);
(statearr_14245[(7)] = inst_14181);
return statearr_14245;
})();var statearr_14246_14289 = state_14237__$1;(statearr_14246_14289[(2)] = null);
(statearr_14246_14289[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14238 === (15)))
{var state_14237__$1 = state_14237;var statearr_14247_14290 = state_14237__$1;(statearr_14247_14290[(2)] = null);
(statearr_14247_14290[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14238 === (21)))
{var inst_14189 = (state_14237[(10)]);var inst_14181 = inst_14189;var state_14237__$1 = (function (){var statearr_14248 = state_14237;(statearr_14248[(7)] = inst_14181);
return statearr_14248;
})();var statearr_14249_14291 = state_14237__$1;(statearr_14249_14291[(2)] = null);
(statearr_14249_14291[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14238 === (13)))
{var inst_14233 = (state_14237[(2)]);var state_14237__$1 = state_14237;var statearr_14250_14292 = state_14237__$1;(statearr_14250_14292[(2)] = inst_14233);
(statearr_14250_14292[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14238 === (22)))
{var inst_14231 = (state_14237[(2)]);var state_14237__$1 = state_14237;var statearr_14251_14293 = state_14237__$1;(statearr_14251_14293[(2)] = inst_14231);
(statearr_14251_14293[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14238 === (6)))
{var inst_14235 = (state_14237[(2)]);var state_14237__$1 = state_14237;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14237__$1,inst_14235);
} else
{if((state_val_14238 === (25)))
{var state_14237__$1 = state_14237;var statearr_14252_14294 = state_14237__$1;(statearr_14252_14294[(2)] = null);
(statearr_14252_14294[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14238 === (17)))
{var inst_14211 = (state_14237[(14)]);var state_14237__$1 = state_14237;var statearr_14253_14295 = state_14237__$1;(statearr_14253_14295[(2)] = inst_14211);
(statearr_14253_14295[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14238 === (3)))
{var inst_14171 = (state_14237[(9)]);var state_14237__$1 = state_14237;var statearr_14254_14296 = state_14237__$1;(statearr_14254_14296[(2)] = inst_14171);
(statearr_14254_14296[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14238 === (12)))
{var inst_14211 = (state_14237[(14)]);var inst_14197 = (state_14237[(15)]);var inst_14192 = (state_14237[(16)]);var inst_14211__$1 = inst_14192.call(null,inst_14197);var state_14237__$1 = (function (){var statearr_14255 = state_14237;(statearr_14255[(14)] = inst_14211__$1);
return statearr_14255;
})();if(cljs.core.truth_(inst_14211__$1))
{var statearr_14256_14297 = state_14237__$1;(statearr_14256_14297[(1)] = (17));
} else
{var statearr_14257_14298 = state_14237__$1;(statearr_14257_14298[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14238 === (2)))
{var inst_14171 = (state_14237[(9)]);var inst_14174 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14171);var state_14237__$1 = state_14237;var statearr_14258_14299 = state_14237__$1;(statearr_14258_14299[(2)] = inst_14174);
(statearr_14258_14299[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14238 === (23)))
{var inst_14222 = (state_14237[(2)]);var state_14237__$1 = state_14237;if(cljs.core.truth_(inst_14222))
{var statearr_14259_14300 = state_14237__$1;(statearr_14259_14300[(1)] = (24));
} else
{var statearr_14260_14301 = state_14237__$1;(statearr_14260_14301[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14238 === (19)))
{var inst_14219 = (state_14237[(2)]);var state_14237__$1 = state_14237;if(cljs.core.truth_(inst_14219))
{var statearr_14261_14302 = state_14237__$1;(statearr_14261_14302[(1)] = (20));
} else
{var statearr_14262_14303 = state_14237__$1;(statearr_14262_14303[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14238 === (11)))
{var inst_14196 = (state_14237[(8)]);var inst_14202 = (inst_14196 == null);var state_14237__$1 = state_14237;if(cljs.core.truth_(inst_14202))
{var statearr_14263_14304 = state_14237__$1;(statearr_14263_14304[(1)] = (14));
} else
{var statearr_14264_14305 = state_14237__$1;(statearr_14264_14305[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14238 === (9)))
{var inst_14189 = (state_14237[(10)]);var inst_14189__$1 = (state_14237[(2)]);var inst_14190 = cljs.core.get.call(null,inst_14189__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_14191 = cljs.core.get.call(null,inst_14189__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_14192 = cljs.core.get.call(null,inst_14189__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_14237__$1 = (function (){var statearr_14265 = state_14237;(statearr_14265[(17)] = inst_14191);
(statearr_14265[(10)] = inst_14189__$1);
(statearr_14265[(16)] = inst_14192);
return statearr_14265;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14237__$1,(10),inst_14190);
} else
{if((state_val_14238 === (5)))
{var inst_14181 = (state_14237[(7)]);var inst_14184 = cljs.core.seq_QMARK_.call(null,inst_14181);var state_14237__$1 = state_14237;if(inst_14184)
{var statearr_14266_14306 = state_14237__$1;(statearr_14266_14306[(1)] = (7));
} else
{var statearr_14267_14307 = state_14237__$1;(statearr_14267_14307[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14238 === (14)))
{var inst_14197 = (state_14237[(15)]);var inst_14204 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14197);var state_14237__$1 = state_14237;var statearr_14268_14308 = state_14237__$1;(statearr_14268_14308[(2)] = inst_14204);
(statearr_14268_14308[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14238 === (26)))
{var inst_14227 = (state_14237[(2)]);var state_14237__$1 = state_14237;var statearr_14269_14309 = state_14237__$1;(statearr_14269_14309[(2)] = inst_14227);
(statearr_14269_14309[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14238 === (16)))
{var inst_14207 = (state_14237[(2)]);var inst_14208 = calc_state.call(null);var inst_14181 = inst_14208;var state_14237__$1 = (function (){var statearr_14270 = state_14237;(statearr_14270[(18)] = inst_14207);
(statearr_14270[(7)] = inst_14181);
return statearr_14270;
})();var statearr_14271_14310 = state_14237__$1;(statearr_14271_14310[(2)] = null);
(statearr_14271_14310[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14238 === (10)))
{var inst_14196 = (state_14237[(8)]);var inst_14197 = (state_14237[(15)]);var inst_14195 = (state_14237[(2)]);var inst_14196__$1 = cljs.core.nth.call(null,inst_14195,(0),null);var inst_14197__$1 = cljs.core.nth.call(null,inst_14195,(1),null);var inst_14198 = (inst_14196__$1 == null);var inst_14199 = cljs.core._EQ_.call(null,inst_14197__$1,change);var inst_14200 = (inst_14198) || (inst_14199);var state_14237__$1 = (function (){var statearr_14272 = state_14237;(statearr_14272[(8)] = inst_14196__$1);
(statearr_14272[(15)] = inst_14197__$1);
return statearr_14272;
})();if(cljs.core.truth_(inst_14200))
{var statearr_14273_14311 = state_14237__$1;(statearr_14273_14311[(1)] = (11));
} else
{var statearr_14274_14312 = state_14237__$1;(statearr_14274_14312[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14238 === (18)))
{var inst_14197 = (state_14237[(15)]);var inst_14191 = (state_14237[(17)]);var inst_14192 = (state_14237[(16)]);var inst_14214 = cljs.core.empty_QMARK_.call(null,inst_14192);var inst_14215 = inst_14191.call(null,inst_14197);var inst_14216 = cljs.core.not.call(null,inst_14215);var inst_14217 = (inst_14214) && (inst_14216);var state_14237__$1 = state_14237;var statearr_14275_14313 = state_14237__$1;(statearr_14275_14313[(2)] = inst_14217);
(statearr_14275_14313[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14238 === (8)))
{var inst_14181 = (state_14237[(7)]);var state_14237__$1 = state_14237;var statearr_14276_14314 = state_14237__$1;(statearr_14276_14314[(2)] = inst_14181);
(statearr_14276_14314[(1)] = (9));
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
});})(c__10229__auto___14284,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__10164__auto__,c__10229__auto___14284,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__10165__auto__ = null;
var state_machine__10165__auto____0 = (function (){var statearr_14280 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14280[(0)] = state_machine__10165__auto__);
(statearr_14280[(1)] = (1));
return statearr_14280;
});
var state_machine__10165__auto____1 = (function (state_14237){while(true){
var ret_value__10166__auto__ = (function (){try{while(true){
var result__10167__auto__ = switch__10164__auto__.call(null,state_14237);if(cljs.core.keyword_identical_QMARK_.call(null,result__10167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10167__auto__;
}
break;
}
}catch (e14281){if((e14281 instanceof Object))
{var ex__10168__auto__ = e14281;var statearr_14282_14315 = state_14237;(statearr_14282_14315[(5)] = ex__10168__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14237);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14281;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14316 = state_14237;
state_14237 = G__14316;
continue;
}
} else
{return ret_value__10166__auto__;
}
break;
}
});
state_machine__10165__auto__ = function(state_14237){
switch(arguments.length){
case 0:
return state_machine__10165__auto____0.call(this);
case 1:
return state_machine__10165__auto____1.call(this,state_14237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10165__auto____0;
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10165__auto____1;
return state_machine__10165__auto__;
})()
;})(switch__10164__auto__,c__10229__auto___14284,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__10231__auto__ = (function (){var statearr_14283 = f__10230__auto__.call(null);(statearr_14283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10229__auto___14284);
return statearr_14283;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10231__auto__);
});})(c__10229__auto___14284,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj14318 = {};return obj14318;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7268__auto__ = p;if(and__7268__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7268__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__7907__auto__ = (((p == null))?null:p);return (function (){var or__7280__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7907__auto__)]);if(or__7280__auto__)
{return or__7280__auto__;
} else
{var or__7280__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7280__auto____$1)
{return or__7280__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7268__auto__ = p;if(and__7268__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7268__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__7907__auto__ = (((p == null))?null:p);return (function (){var or__7280__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7907__auto__)]);if(or__7280__auto__)
{return or__7280__auto__;
} else
{var or__7280__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7280__auto____$1)
{return or__7280__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7268__auto__ = p;if(and__7268__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7268__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__7907__auto__ = (((p == null))?null:p);return (function (){var or__7280__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7907__auto__)]);if(or__7280__auto__)
{return or__7280__auto__;
} else
{var or__7280__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7280__auto____$1)
{return or__7280__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7268__auto__ = p;if(and__7268__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7268__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__7907__auto__ = (((p == null))?null:p);return (function (){var or__7280__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7907__auto__)]);if(or__7280__auto__)
{return or__7280__auto__;
} else
{var or__7280__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7280__auto____$1)
{return or__7280__auto____$1;
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
return (function (topic){var or__7280__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7280__auto__))
{return or__7280__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7280__auto__,mults){
return (function (p1__14319_SHARP_){if(cljs.core.truth_(p1__14319_SHARP_.call(null,topic)))
{return p1__14319_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14319_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7280__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14442 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14442 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14443){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14443 = meta14443;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14442.cljs$lang$type = true;
cljs.core.async.t14442.cljs$lang$ctorStr = "cljs.core.async/t14442";
cljs.core.async.t14442.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7847__auto__,writer__7848__auto__,opt__7849__auto__){return cljs.core._write.call(null,writer__7848__auto__,"cljs.core.async/t14442");
});})(mults,ensure_mult))
;
cljs.core.async.t14442.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14442.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14442.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14442.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14442.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14442.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14442.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14442.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14444){var self__ = this;
var _14444__$1 = this;return self__.meta14443;
});})(mults,ensure_mult))
;
cljs.core.async.t14442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14444,meta14443__$1){var self__ = this;
var _14444__$1 = this;return (new cljs.core.async.t14442(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14443__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14442 = ((function (mults,ensure_mult){
return (function __GT_t14442(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14443){return (new cljs.core.async.t14442(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14443));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14442(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10229__auto___14564 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10229__auto___14564,mults,ensure_mult,p){
return (function (){var f__10230__auto__ = (function (){var switch__10164__auto__ = ((function (c__10229__auto___14564,mults,ensure_mult,p){
return (function (state_14516){var state_val_14517 = (state_14516[(1)]);if((state_val_14517 === (7)))
{var inst_14512 = (state_14516[(2)]);var state_14516__$1 = state_14516;var statearr_14518_14565 = state_14516__$1;(statearr_14518_14565[(2)] = inst_14512);
(statearr_14518_14565[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14517 === (20)))
{var state_14516__$1 = state_14516;var statearr_14519_14566 = state_14516__$1;(statearr_14519_14566[(2)] = null);
(statearr_14519_14566[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14517 === (1)))
{var state_14516__$1 = state_14516;var statearr_14520_14567 = state_14516__$1;(statearr_14520_14567[(2)] = null);
(statearr_14520_14567[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14517 === (24)))
{var inst_14495 = (state_14516[(7)]);var inst_14504 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14495);var state_14516__$1 = state_14516;var statearr_14521_14568 = state_14516__$1;(statearr_14521_14568[(2)] = inst_14504);
(statearr_14521_14568[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14517 === (4)))
{var inst_14447 = (state_14516[(8)]);var inst_14447__$1 = (state_14516[(2)]);var inst_14448 = (inst_14447__$1 == null);var state_14516__$1 = (function (){var statearr_14522 = state_14516;(statearr_14522[(8)] = inst_14447__$1);
return statearr_14522;
})();if(cljs.core.truth_(inst_14448))
{var statearr_14523_14569 = state_14516__$1;(statearr_14523_14569[(1)] = (5));
} else
{var statearr_14524_14570 = state_14516__$1;(statearr_14524_14570[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14517 === (15)))
{var inst_14489 = (state_14516[(2)]);var state_14516__$1 = state_14516;var statearr_14525_14571 = state_14516__$1;(statearr_14525_14571[(2)] = inst_14489);
(statearr_14525_14571[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14517 === (21)))
{var inst_14509 = (state_14516[(2)]);var state_14516__$1 = (function (){var statearr_14526 = state_14516;(statearr_14526[(9)] = inst_14509);
return statearr_14526;
})();var statearr_14527_14572 = state_14516__$1;(statearr_14527_14572[(2)] = null);
(statearr_14527_14572[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14517 === (13)))
{var inst_14471 = (state_14516[(10)]);var inst_14473 = cljs.core.chunked_seq_QMARK_.call(null,inst_14471);var state_14516__$1 = state_14516;if(inst_14473)
{var statearr_14528_14573 = state_14516__$1;(statearr_14528_14573[(1)] = (16));
} else
{var statearr_14529_14574 = state_14516__$1;(statearr_14529_14574[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14517 === (22)))
{var inst_14501 = (state_14516[(2)]);var state_14516__$1 = state_14516;if(cljs.core.truth_(inst_14501))
{var statearr_14530_14575 = state_14516__$1;(statearr_14530_14575[(1)] = (23));
} else
{var statearr_14531_14576 = state_14516__$1;(statearr_14531_14576[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14517 === (6)))
{var inst_14497 = (state_14516[(11)]);var inst_14447 = (state_14516[(8)]);var inst_14495 = (state_14516[(7)]);var inst_14495__$1 = topic_fn.call(null,inst_14447);var inst_14496 = cljs.core.deref.call(null,mults);var inst_14497__$1 = cljs.core.get.call(null,inst_14496,inst_14495__$1);var state_14516__$1 = (function (){var statearr_14532 = state_14516;(statearr_14532[(11)] = inst_14497__$1);
(statearr_14532[(7)] = inst_14495__$1);
return statearr_14532;
})();if(cljs.core.truth_(inst_14497__$1))
{var statearr_14533_14577 = state_14516__$1;(statearr_14533_14577[(1)] = (19));
} else
{var statearr_14534_14578 = state_14516__$1;(statearr_14534_14578[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14517 === (25)))
{var inst_14506 = (state_14516[(2)]);var state_14516__$1 = state_14516;var statearr_14535_14579 = state_14516__$1;(statearr_14535_14579[(2)] = inst_14506);
(statearr_14535_14579[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14517 === (17)))
{var inst_14471 = (state_14516[(10)]);var inst_14480 = cljs.core.first.call(null,inst_14471);var inst_14481 = cljs.core.async.muxch_STAR_.call(null,inst_14480);var inst_14482 = cljs.core.async.close_BANG_.call(null,inst_14481);var inst_14483 = cljs.core.next.call(null,inst_14471);var inst_14457 = inst_14483;var inst_14458 = null;var inst_14459 = (0);var inst_14460 = (0);var state_14516__$1 = (function (){var statearr_14536 = state_14516;(statearr_14536[(12)] = inst_14482);
(statearr_14536[(13)] = inst_14459);
(statearr_14536[(14)] = inst_14460);
(statearr_14536[(15)] = inst_14457);
(statearr_14536[(16)] = inst_14458);
return statearr_14536;
})();var statearr_14537_14580 = state_14516__$1;(statearr_14537_14580[(2)] = null);
(statearr_14537_14580[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14517 === (3)))
{var inst_14514 = (state_14516[(2)]);var state_14516__$1 = state_14516;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14516__$1,inst_14514);
} else
{if((state_val_14517 === (12)))
{var inst_14491 = (state_14516[(2)]);var state_14516__$1 = state_14516;var statearr_14538_14581 = state_14516__$1;(statearr_14538_14581[(2)] = inst_14491);
(statearr_14538_14581[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14517 === (2)))
{var state_14516__$1 = state_14516;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14516__$1,(4),ch);
} else
{if((state_val_14517 === (23)))
{var state_14516__$1 = state_14516;var statearr_14539_14582 = state_14516__$1;(statearr_14539_14582[(2)] = null);
(statearr_14539_14582[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14517 === (19)))
{var inst_14497 = (state_14516[(11)]);var inst_14447 = (state_14516[(8)]);var inst_14499 = cljs.core.async.muxch_STAR_.call(null,inst_14497);var state_14516__$1 = state_14516;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14516__$1,(22),inst_14499,inst_14447);
} else
{if((state_val_14517 === (11)))
{var inst_14471 = (state_14516[(10)]);var inst_14457 = (state_14516[(15)]);var inst_14471__$1 = cljs.core.seq.call(null,inst_14457);var state_14516__$1 = (function (){var statearr_14540 = state_14516;(statearr_14540[(10)] = inst_14471__$1);
return statearr_14540;
})();if(inst_14471__$1)
{var statearr_14541_14583 = state_14516__$1;(statearr_14541_14583[(1)] = (13));
} else
{var statearr_14542_14584 = state_14516__$1;(statearr_14542_14584[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14517 === (9)))
{var inst_14493 = (state_14516[(2)]);var state_14516__$1 = state_14516;var statearr_14543_14585 = state_14516__$1;(statearr_14543_14585[(2)] = inst_14493);
(statearr_14543_14585[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14517 === (5)))
{var inst_14454 = cljs.core.deref.call(null,mults);var inst_14455 = cljs.core.vals.call(null,inst_14454);var inst_14456 = cljs.core.seq.call(null,inst_14455);var inst_14457 = inst_14456;var inst_14458 = null;var inst_14459 = (0);var inst_14460 = (0);var state_14516__$1 = (function (){var statearr_14544 = state_14516;(statearr_14544[(13)] = inst_14459);
(statearr_14544[(14)] = inst_14460);
(statearr_14544[(15)] = inst_14457);
(statearr_14544[(16)] = inst_14458);
return statearr_14544;
})();var statearr_14545_14586 = state_14516__$1;(statearr_14545_14586[(2)] = null);
(statearr_14545_14586[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14517 === (14)))
{var state_14516__$1 = state_14516;var statearr_14549_14587 = state_14516__$1;(statearr_14549_14587[(2)] = null);
(statearr_14549_14587[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14517 === (16)))
{var inst_14471 = (state_14516[(10)]);var inst_14475 = cljs.core.chunk_first.call(null,inst_14471);var inst_14476 = cljs.core.chunk_rest.call(null,inst_14471);var inst_14477 = cljs.core.count.call(null,inst_14475);var inst_14457 = inst_14476;var inst_14458 = inst_14475;var inst_14459 = inst_14477;var inst_14460 = (0);var state_14516__$1 = (function (){var statearr_14550 = state_14516;(statearr_14550[(13)] = inst_14459);
(statearr_14550[(14)] = inst_14460);
(statearr_14550[(15)] = inst_14457);
(statearr_14550[(16)] = inst_14458);
return statearr_14550;
})();var statearr_14551_14588 = state_14516__$1;(statearr_14551_14588[(2)] = null);
(statearr_14551_14588[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14517 === (10)))
{var inst_14459 = (state_14516[(13)]);var inst_14460 = (state_14516[(14)]);var inst_14457 = (state_14516[(15)]);var inst_14458 = (state_14516[(16)]);var inst_14465 = cljs.core._nth.call(null,inst_14458,inst_14460);var inst_14466 = cljs.core.async.muxch_STAR_.call(null,inst_14465);var inst_14467 = cljs.core.async.close_BANG_.call(null,inst_14466);var inst_14468 = (inst_14460 + (1));var tmp14546 = inst_14459;var tmp14547 = inst_14457;var tmp14548 = inst_14458;var inst_14457__$1 = tmp14547;var inst_14458__$1 = tmp14548;var inst_14459__$1 = tmp14546;var inst_14460__$1 = inst_14468;var state_14516__$1 = (function (){var statearr_14552 = state_14516;(statearr_14552[(13)] = inst_14459__$1);
(statearr_14552[(17)] = inst_14467);
(statearr_14552[(14)] = inst_14460__$1);
(statearr_14552[(15)] = inst_14457__$1);
(statearr_14552[(16)] = inst_14458__$1);
return statearr_14552;
})();var statearr_14553_14589 = state_14516__$1;(statearr_14553_14589[(2)] = null);
(statearr_14553_14589[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14517 === (18)))
{var inst_14486 = (state_14516[(2)]);var state_14516__$1 = state_14516;var statearr_14554_14590 = state_14516__$1;(statearr_14554_14590[(2)] = inst_14486);
(statearr_14554_14590[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14517 === (8)))
{var inst_14459 = (state_14516[(13)]);var inst_14460 = (state_14516[(14)]);var inst_14462 = (inst_14460 < inst_14459);var inst_14463 = inst_14462;var state_14516__$1 = state_14516;if(cljs.core.truth_(inst_14463))
{var statearr_14555_14591 = state_14516__$1;(statearr_14555_14591[(1)] = (10));
} else
{var statearr_14556_14592 = state_14516__$1;(statearr_14556_14592[(1)] = (11));
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
});})(c__10229__auto___14564,mults,ensure_mult,p))
;return ((function (switch__10164__auto__,c__10229__auto___14564,mults,ensure_mult,p){
return (function() {
var state_machine__10165__auto__ = null;
var state_machine__10165__auto____0 = (function (){var statearr_14560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14560[(0)] = state_machine__10165__auto__);
(statearr_14560[(1)] = (1));
return statearr_14560;
});
var state_machine__10165__auto____1 = (function (state_14516){while(true){
var ret_value__10166__auto__ = (function (){try{while(true){
var result__10167__auto__ = switch__10164__auto__.call(null,state_14516);if(cljs.core.keyword_identical_QMARK_.call(null,result__10167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10167__auto__;
}
break;
}
}catch (e14561){if((e14561 instanceof Object))
{var ex__10168__auto__ = e14561;var statearr_14562_14593 = state_14516;(statearr_14562_14593[(5)] = ex__10168__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14516);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14561;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14594 = state_14516;
state_14516 = G__14594;
continue;
}
} else
{return ret_value__10166__auto__;
}
break;
}
});
state_machine__10165__auto__ = function(state_14516){
switch(arguments.length){
case 0:
return state_machine__10165__auto____0.call(this);
case 1:
return state_machine__10165__auto____1.call(this,state_14516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10165__auto____0;
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10165__auto____1;
return state_machine__10165__auto__;
})()
;})(switch__10164__auto__,c__10229__auto___14564,mults,ensure_mult,p))
})();var state__10231__auto__ = (function (){var statearr_14563 = f__10230__auto__.call(null);(statearr_14563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10229__auto___14564);
return statearr_14563;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10231__auto__);
});})(c__10229__auto___14564,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__10229__auto___14731 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10229__auto___14731,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__10230__auto__ = (function (){var switch__10164__auto__ = ((function (c__10229__auto___14731,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14701){var state_val_14702 = (state_14701[(1)]);if((state_val_14702 === (7)))
{var state_14701__$1 = state_14701;var statearr_14703_14732 = state_14701__$1;(statearr_14703_14732[(2)] = null);
(statearr_14703_14732[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14702 === (1)))
{var state_14701__$1 = state_14701;var statearr_14704_14733 = state_14701__$1;(statearr_14704_14733[(2)] = null);
(statearr_14704_14733[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14702 === (4)))
{var inst_14665 = (state_14701[(7)]);var inst_14667 = (inst_14665 < cnt);var state_14701__$1 = state_14701;if(cljs.core.truth_(inst_14667))
{var statearr_14705_14734 = state_14701__$1;(statearr_14705_14734[(1)] = (6));
} else
{var statearr_14706_14735 = state_14701__$1;(statearr_14706_14735[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14702 === (15)))
{var inst_14697 = (state_14701[(2)]);var state_14701__$1 = state_14701;var statearr_14707_14736 = state_14701__$1;(statearr_14707_14736[(2)] = inst_14697);
(statearr_14707_14736[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14702 === (13)))
{var inst_14690 = cljs.core.async.close_BANG_.call(null,out);var state_14701__$1 = state_14701;var statearr_14708_14737 = state_14701__$1;(statearr_14708_14737[(2)] = inst_14690);
(statearr_14708_14737[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14702 === (6)))
{var state_14701__$1 = state_14701;var statearr_14709_14738 = state_14701__$1;(statearr_14709_14738[(2)] = null);
(statearr_14709_14738[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14702 === (3)))
{var inst_14699 = (state_14701[(2)]);var state_14701__$1 = state_14701;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14701__$1,inst_14699);
} else
{if((state_val_14702 === (12)))
{var inst_14687 = (state_14701[(8)]);var inst_14687__$1 = (state_14701[(2)]);var inst_14688 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14687__$1);var state_14701__$1 = (function (){var statearr_14710 = state_14701;(statearr_14710[(8)] = inst_14687__$1);
return statearr_14710;
})();if(cljs.core.truth_(inst_14688))
{var statearr_14711_14739 = state_14701__$1;(statearr_14711_14739[(1)] = (13));
} else
{var statearr_14712_14740 = state_14701__$1;(statearr_14712_14740[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14702 === (2)))
{var inst_14664 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14665 = (0);var state_14701__$1 = (function (){var statearr_14713 = state_14701;(statearr_14713[(9)] = inst_14664);
(statearr_14713[(7)] = inst_14665);
return statearr_14713;
})();var statearr_14714_14741 = state_14701__$1;(statearr_14714_14741[(2)] = null);
(statearr_14714_14741[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14702 === (11)))
{var inst_14665 = (state_14701[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14701,(10),Object,null,(9));var inst_14674 = chs__$1.call(null,inst_14665);var inst_14675 = done.call(null,inst_14665);var inst_14676 = cljs.core.async.take_BANG_.call(null,inst_14674,inst_14675);var state_14701__$1 = state_14701;var statearr_14715_14742 = state_14701__$1;(statearr_14715_14742[(2)] = inst_14676);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14701__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14702 === (9)))
{var inst_14665 = (state_14701[(7)]);var inst_14678 = (state_14701[(2)]);var inst_14679 = (inst_14665 + (1));var inst_14665__$1 = inst_14679;var state_14701__$1 = (function (){var statearr_14716 = state_14701;(statearr_14716[(10)] = inst_14678);
(statearr_14716[(7)] = inst_14665__$1);
return statearr_14716;
})();var statearr_14717_14743 = state_14701__$1;(statearr_14717_14743[(2)] = null);
(statearr_14717_14743[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14702 === (5)))
{var inst_14685 = (state_14701[(2)]);var state_14701__$1 = (function (){var statearr_14718 = state_14701;(statearr_14718[(11)] = inst_14685);
return statearr_14718;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14701__$1,(12),dchan);
} else
{if((state_val_14702 === (14)))
{var inst_14687 = (state_14701[(8)]);var inst_14692 = cljs.core.apply.call(null,f,inst_14687);var state_14701__$1 = state_14701;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14701__$1,(16),out,inst_14692);
} else
{if((state_val_14702 === (16)))
{var inst_14694 = (state_14701[(2)]);var state_14701__$1 = (function (){var statearr_14719 = state_14701;(statearr_14719[(12)] = inst_14694);
return statearr_14719;
})();var statearr_14720_14744 = state_14701__$1;(statearr_14720_14744[(2)] = null);
(statearr_14720_14744[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14702 === (10)))
{var inst_14669 = (state_14701[(2)]);var inst_14670 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14701__$1 = (function (){var statearr_14721 = state_14701;(statearr_14721[(13)] = inst_14669);
return statearr_14721;
})();var statearr_14722_14745 = state_14701__$1;(statearr_14722_14745[(2)] = inst_14670);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14701__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14702 === (8)))
{var inst_14683 = (state_14701[(2)]);var state_14701__$1 = state_14701;var statearr_14723_14746 = state_14701__$1;(statearr_14723_14746[(2)] = inst_14683);
(statearr_14723_14746[(1)] = (5));
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
});})(c__10229__auto___14731,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__10164__auto__,c__10229__auto___14731,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__10165__auto__ = null;
var state_machine__10165__auto____0 = (function (){var statearr_14727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14727[(0)] = state_machine__10165__auto__);
(statearr_14727[(1)] = (1));
return statearr_14727;
});
var state_machine__10165__auto____1 = (function (state_14701){while(true){
var ret_value__10166__auto__ = (function (){try{while(true){
var result__10167__auto__ = switch__10164__auto__.call(null,state_14701);if(cljs.core.keyword_identical_QMARK_.call(null,result__10167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10167__auto__;
}
break;
}
}catch (e14728){if((e14728 instanceof Object))
{var ex__10168__auto__ = e14728;var statearr_14729_14747 = state_14701;(statearr_14729_14747[(5)] = ex__10168__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14701);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14728;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14748 = state_14701;
state_14701 = G__14748;
continue;
}
} else
{return ret_value__10166__auto__;
}
break;
}
});
state_machine__10165__auto__ = function(state_14701){
switch(arguments.length){
case 0:
return state_machine__10165__auto____0.call(this);
case 1:
return state_machine__10165__auto____1.call(this,state_14701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10165__auto____0;
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10165__auto____1;
return state_machine__10165__auto__;
})()
;})(switch__10164__auto__,c__10229__auto___14731,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__10231__auto__ = (function (){var statearr_14730 = f__10230__auto__.call(null);(statearr_14730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10229__auto___14731);
return statearr_14730;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10231__auto__);
});})(c__10229__auto___14731,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10229__auto___14856 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10229__auto___14856,out){
return (function (){var f__10230__auto__ = (function (){var switch__10164__auto__ = ((function (c__10229__auto___14856,out){
return (function (state_14832){var state_val_14833 = (state_14832[(1)]);if((state_val_14833 === (7)))
{var inst_14812 = (state_14832[(7)]);var inst_14811 = (state_14832[(8)]);var inst_14811__$1 = (state_14832[(2)]);var inst_14812__$1 = cljs.core.nth.call(null,inst_14811__$1,(0),null);var inst_14813 = cljs.core.nth.call(null,inst_14811__$1,(1),null);var inst_14814 = (inst_14812__$1 == null);var state_14832__$1 = (function (){var statearr_14834 = state_14832;(statearr_14834[(9)] = inst_14813);
(statearr_14834[(7)] = inst_14812__$1);
(statearr_14834[(8)] = inst_14811__$1);
return statearr_14834;
})();if(cljs.core.truth_(inst_14814))
{var statearr_14835_14857 = state_14832__$1;(statearr_14835_14857[(1)] = (8));
} else
{var statearr_14836_14858 = state_14832__$1;(statearr_14836_14858[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14833 === (1)))
{var inst_14803 = cljs.core.vec.call(null,chs);var inst_14804 = inst_14803;var state_14832__$1 = (function (){var statearr_14837 = state_14832;(statearr_14837[(10)] = inst_14804);
return statearr_14837;
})();var statearr_14838_14859 = state_14832__$1;(statearr_14838_14859[(2)] = null);
(statearr_14838_14859[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14833 === (4)))
{var inst_14804 = (state_14832[(10)]);var state_14832__$1 = state_14832;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14832__$1,(7),inst_14804);
} else
{if((state_val_14833 === (6)))
{var inst_14828 = (state_14832[(2)]);var state_14832__$1 = state_14832;var statearr_14839_14860 = state_14832__$1;(statearr_14839_14860[(2)] = inst_14828);
(statearr_14839_14860[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14833 === (3)))
{var inst_14830 = (state_14832[(2)]);var state_14832__$1 = state_14832;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14832__$1,inst_14830);
} else
{if((state_val_14833 === (2)))
{var inst_14804 = (state_14832[(10)]);var inst_14806 = cljs.core.count.call(null,inst_14804);var inst_14807 = (inst_14806 > (0));var state_14832__$1 = state_14832;if(cljs.core.truth_(inst_14807))
{var statearr_14841_14861 = state_14832__$1;(statearr_14841_14861[(1)] = (4));
} else
{var statearr_14842_14862 = state_14832__$1;(statearr_14842_14862[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14833 === (11)))
{var inst_14804 = (state_14832[(10)]);var inst_14821 = (state_14832[(2)]);var tmp14840 = inst_14804;var inst_14804__$1 = tmp14840;var state_14832__$1 = (function (){var statearr_14843 = state_14832;(statearr_14843[(10)] = inst_14804__$1);
(statearr_14843[(11)] = inst_14821);
return statearr_14843;
})();var statearr_14844_14863 = state_14832__$1;(statearr_14844_14863[(2)] = null);
(statearr_14844_14863[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14833 === (9)))
{var inst_14812 = (state_14832[(7)]);var state_14832__$1 = state_14832;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14832__$1,(11),out,inst_14812);
} else
{if((state_val_14833 === (5)))
{var inst_14826 = cljs.core.async.close_BANG_.call(null,out);var state_14832__$1 = state_14832;var statearr_14845_14864 = state_14832__$1;(statearr_14845_14864[(2)] = inst_14826);
(statearr_14845_14864[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14833 === (10)))
{var inst_14824 = (state_14832[(2)]);var state_14832__$1 = state_14832;var statearr_14846_14865 = state_14832__$1;(statearr_14846_14865[(2)] = inst_14824);
(statearr_14846_14865[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14833 === (8)))
{var inst_14813 = (state_14832[(9)]);var inst_14804 = (state_14832[(10)]);var inst_14812 = (state_14832[(7)]);var inst_14811 = (state_14832[(8)]);var inst_14816 = (function (){var c = inst_14813;var v = inst_14812;var vec__14809 = inst_14811;var cs = inst_14804;return ((function (c,v,vec__14809,cs,inst_14813,inst_14804,inst_14812,inst_14811,state_val_14833,c__10229__auto___14856,out){
return (function (p1__14749_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14749_SHARP_);
});
;})(c,v,vec__14809,cs,inst_14813,inst_14804,inst_14812,inst_14811,state_val_14833,c__10229__auto___14856,out))
})();var inst_14817 = cljs.core.filterv.call(null,inst_14816,inst_14804);var inst_14804__$1 = inst_14817;var state_14832__$1 = (function (){var statearr_14847 = state_14832;(statearr_14847[(10)] = inst_14804__$1);
return statearr_14847;
})();var statearr_14848_14866 = state_14832__$1;(statearr_14848_14866[(2)] = null);
(statearr_14848_14866[(1)] = (2));
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
});})(c__10229__auto___14856,out))
;return ((function (switch__10164__auto__,c__10229__auto___14856,out){
return (function() {
var state_machine__10165__auto__ = null;
var state_machine__10165__auto____0 = (function (){var statearr_14852 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14852[(0)] = state_machine__10165__auto__);
(statearr_14852[(1)] = (1));
return statearr_14852;
});
var state_machine__10165__auto____1 = (function (state_14832){while(true){
var ret_value__10166__auto__ = (function (){try{while(true){
var result__10167__auto__ = switch__10164__auto__.call(null,state_14832);if(cljs.core.keyword_identical_QMARK_.call(null,result__10167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10167__auto__;
}
break;
}
}catch (e14853){if((e14853 instanceof Object))
{var ex__10168__auto__ = e14853;var statearr_14854_14867 = state_14832;(statearr_14854_14867[(5)] = ex__10168__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14832);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14853;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14868 = state_14832;
state_14832 = G__14868;
continue;
}
} else
{return ret_value__10166__auto__;
}
break;
}
});
state_machine__10165__auto__ = function(state_14832){
switch(arguments.length){
case 0:
return state_machine__10165__auto____0.call(this);
case 1:
return state_machine__10165__auto____1.call(this,state_14832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10165__auto____0;
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10165__auto____1;
return state_machine__10165__auto__;
})()
;})(switch__10164__auto__,c__10229__auto___14856,out))
})();var state__10231__auto__ = (function (){var statearr_14855 = f__10230__auto__.call(null);(statearr_14855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10229__auto___14856);
return statearr_14855;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10231__auto__);
});})(c__10229__auto___14856,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10229__auto___14961 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10229__auto___14961,out){
return (function (){var f__10230__auto__ = (function (){var switch__10164__auto__ = ((function (c__10229__auto___14961,out){
return (function (state_14938){var state_val_14939 = (state_14938[(1)]);if((state_val_14939 === (7)))
{var inst_14920 = (state_14938[(7)]);var inst_14920__$1 = (state_14938[(2)]);var inst_14921 = (inst_14920__$1 == null);var inst_14922 = cljs.core.not.call(null,inst_14921);var state_14938__$1 = (function (){var statearr_14940 = state_14938;(statearr_14940[(7)] = inst_14920__$1);
return statearr_14940;
})();if(inst_14922)
{var statearr_14941_14962 = state_14938__$1;(statearr_14941_14962[(1)] = (8));
} else
{var statearr_14942_14963 = state_14938__$1;(statearr_14942_14963[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14939 === (1)))
{var inst_14915 = (0);var state_14938__$1 = (function (){var statearr_14943 = state_14938;(statearr_14943[(8)] = inst_14915);
return statearr_14943;
})();var statearr_14944_14964 = state_14938__$1;(statearr_14944_14964[(2)] = null);
(statearr_14944_14964[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14939 === (4)))
{var state_14938__$1 = state_14938;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14938__$1,(7),ch);
} else
{if((state_val_14939 === (6)))
{var inst_14933 = (state_14938[(2)]);var state_14938__$1 = state_14938;var statearr_14945_14965 = state_14938__$1;(statearr_14945_14965[(2)] = inst_14933);
(statearr_14945_14965[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14939 === (3)))
{var inst_14935 = (state_14938[(2)]);var inst_14936 = cljs.core.async.close_BANG_.call(null,out);var state_14938__$1 = (function (){var statearr_14946 = state_14938;(statearr_14946[(9)] = inst_14935);
return statearr_14946;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14938__$1,inst_14936);
} else
{if((state_val_14939 === (2)))
{var inst_14915 = (state_14938[(8)]);var inst_14917 = (inst_14915 < n);var state_14938__$1 = state_14938;if(cljs.core.truth_(inst_14917))
{var statearr_14947_14966 = state_14938__$1;(statearr_14947_14966[(1)] = (4));
} else
{var statearr_14948_14967 = state_14938__$1;(statearr_14948_14967[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14939 === (11)))
{var inst_14915 = (state_14938[(8)]);var inst_14925 = (state_14938[(2)]);var inst_14926 = (inst_14915 + (1));var inst_14915__$1 = inst_14926;var state_14938__$1 = (function (){var statearr_14949 = state_14938;(statearr_14949[(10)] = inst_14925);
(statearr_14949[(8)] = inst_14915__$1);
return statearr_14949;
})();var statearr_14950_14968 = state_14938__$1;(statearr_14950_14968[(2)] = null);
(statearr_14950_14968[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14939 === (9)))
{var state_14938__$1 = state_14938;var statearr_14951_14969 = state_14938__$1;(statearr_14951_14969[(2)] = null);
(statearr_14951_14969[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14939 === (5)))
{var state_14938__$1 = state_14938;var statearr_14952_14970 = state_14938__$1;(statearr_14952_14970[(2)] = null);
(statearr_14952_14970[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14939 === (10)))
{var inst_14930 = (state_14938[(2)]);var state_14938__$1 = state_14938;var statearr_14953_14971 = state_14938__$1;(statearr_14953_14971[(2)] = inst_14930);
(statearr_14953_14971[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14939 === (8)))
{var inst_14920 = (state_14938[(7)]);var state_14938__$1 = state_14938;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14938__$1,(11),out,inst_14920);
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
});})(c__10229__auto___14961,out))
;return ((function (switch__10164__auto__,c__10229__auto___14961,out){
return (function() {
var state_machine__10165__auto__ = null;
var state_machine__10165__auto____0 = (function (){var statearr_14957 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14957[(0)] = state_machine__10165__auto__);
(statearr_14957[(1)] = (1));
return statearr_14957;
});
var state_machine__10165__auto____1 = (function (state_14938){while(true){
var ret_value__10166__auto__ = (function (){try{while(true){
var result__10167__auto__ = switch__10164__auto__.call(null,state_14938);if(cljs.core.keyword_identical_QMARK_.call(null,result__10167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10167__auto__;
}
break;
}
}catch (e14958){if((e14958 instanceof Object))
{var ex__10168__auto__ = e14958;var statearr_14959_14972 = state_14938;(statearr_14959_14972[(5)] = ex__10168__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14938);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14958;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14973 = state_14938;
state_14938 = G__14973;
continue;
}
} else
{return ret_value__10166__auto__;
}
break;
}
});
state_machine__10165__auto__ = function(state_14938){
switch(arguments.length){
case 0:
return state_machine__10165__auto____0.call(this);
case 1:
return state_machine__10165__auto____1.call(this,state_14938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10165__auto____0;
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10165__auto____1;
return state_machine__10165__auto__;
})()
;})(switch__10164__auto__,c__10229__auto___14961,out))
})();var state__10231__auto__ = (function (){var statearr_14960 = f__10230__auto__.call(null);(statearr_14960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10229__auto___14961);
return statearr_14960;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10231__auto__);
});})(c__10229__auto___14961,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10229__auto___15070 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10229__auto___15070,out){
return (function (){var f__10230__auto__ = (function (){var switch__10164__auto__ = ((function (c__10229__auto___15070,out){
return (function (state_15045){var state_val_15046 = (state_15045[(1)]);if((state_val_15046 === (7)))
{var inst_15040 = (state_15045[(2)]);var state_15045__$1 = state_15045;var statearr_15047_15071 = state_15045__$1;(statearr_15047_15071[(2)] = inst_15040);
(statearr_15047_15071[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15046 === (1)))
{var inst_15022 = null;var state_15045__$1 = (function (){var statearr_15048 = state_15045;(statearr_15048[(7)] = inst_15022);
return statearr_15048;
})();var statearr_15049_15072 = state_15045__$1;(statearr_15049_15072[(2)] = null);
(statearr_15049_15072[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15046 === (4)))
{var inst_15025 = (state_15045[(8)]);var inst_15025__$1 = (state_15045[(2)]);var inst_15026 = (inst_15025__$1 == null);var inst_15027 = cljs.core.not.call(null,inst_15026);var state_15045__$1 = (function (){var statearr_15050 = state_15045;(statearr_15050[(8)] = inst_15025__$1);
return statearr_15050;
})();if(inst_15027)
{var statearr_15051_15073 = state_15045__$1;(statearr_15051_15073[(1)] = (5));
} else
{var statearr_15052_15074 = state_15045__$1;(statearr_15052_15074[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15046 === (6)))
{var state_15045__$1 = state_15045;var statearr_15053_15075 = state_15045__$1;(statearr_15053_15075[(2)] = null);
(statearr_15053_15075[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15046 === (3)))
{var inst_15042 = (state_15045[(2)]);var inst_15043 = cljs.core.async.close_BANG_.call(null,out);var state_15045__$1 = (function (){var statearr_15054 = state_15045;(statearr_15054[(9)] = inst_15042);
return statearr_15054;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15045__$1,inst_15043);
} else
{if((state_val_15046 === (2)))
{var state_15045__$1 = state_15045;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15045__$1,(4),ch);
} else
{if((state_val_15046 === (11)))
{var inst_15025 = (state_15045[(8)]);var inst_15034 = (state_15045[(2)]);var inst_15022 = inst_15025;var state_15045__$1 = (function (){var statearr_15055 = state_15045;(statearr_15055[(7)] = inst_15022);
(statearr_15055[(10)] = inst_15034);
return statearr_15055;
})();var statearr_15056_15076 = state_15045__$1;(statearr_15056_15076[(2)] = null);
(statearr_15056_15076[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15046 === (9)))
{var inst_15025 = (state_15045[(8)]);var state_15045__$1 = state_15045;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15045__$1,(11),out,inst_15025);
} else
{if((state_val_15046 === (5)))
{var inst_15022 = (state_15045[(7)]);var inst_15025 = (state_15045[(8)]);var inst_15029 = cljs.core._EQ_.call(null,inst_15025,inst_15022);var state_15045__$1 = state_15045;if(inst_15029)
{var statearr_15058_15077 = state_15045__$1;(statearr_15058_15077[(1)] = (8));
} else
{var statearr_15059_15078 = state_15045__$1;(statearr_15059_15078[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15046 === (10)))
{var inst_15037 = (state_15045[(2)]);var state_15045__$1 = state_15045;var statearr_15060_15079 = state_15045__$1;(statearr_15060_15079[(2)] = inst_15037);
(statearr_15060_15079[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15046 === (8)))
{var inst_15022 = (state_15045[(7)]);var tmp15057 = inst_15022;var inst_15022__$1 = tmp15057;var state_15045__$1 = (function (){var statearr_15061 = state_15045;(statearr_15061[(7)] = inst_15022__$1);
return statearr_15061;
})();var statearr_15062_15080 = state_15045__$1;(statearr_15062_15080[(2)] = null);
(statearr_15062_15080[(1)] = (2));
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
});})(c__10229__auto___15070,out))
;return ((function (switch__10164__auto__,c__10229__auto___15070,out){
return (function() {
var state_machine__10165__auto__ = null;
var state_machine__10165__auto____0 = (function (){var statearr_15066 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15066[(0)] = state_machine__10165__auto__);
(statearr_15066[(1)] = (1));
return statearr_15066;
});
var state_machine__10165__auto____1 = (function (state_15045){while(true){
var ret_value__10166__auto__ = (function (){try{while(true){
var result__10167__auto__ = switch__10164__auto__.call(null,state_15045);if(cljs.core.keyword_identical_QMARK_.call(null,result__10167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10167__auto__;
}
break;
}
}catch (e15067){if((e15067 instanceof Object))
{var ex__10168__auto__ = e15067;var statearr_15068_15081 = state_15045;(statearr_15068_15081[(5)] = ex__10168__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15045);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15067;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15082 = state_15045;
state_15045 = G__15082;
continue;
}
} else
{return ret_value__10166__auto__;
}
break;
}
});
state_machine__10165__auto__ = function(state_15045){
switch(arguments.length){
case 0:
return state_machine__10165__auto____0.call(this);
case 1:
return state_machine__10165__auto____1.call(this,state_15045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10165__auto____0;
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10165__auto____1;
return state_machine__10165__auto__;
})()
;})(switch__10164__auto__,c__10229__auto___15070,out))
})();var state__10231__auto__ = (function (){var statearr_15069 = f__10230__auto__.call(null);(statearr_15069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10229__auto___15070);
return statearr_15069;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10231__auto__);
});})(c__10229__auto___15070,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10229__auto___15217 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10229__auto___15217,out){
return (function (){var f__10230__auto__ = (function (){var switch__10164__auto__ = ((function (c__10229__auto___15217,out){
return (function (state_15187){var state_val_15188 = (state_15187[(1)]);if((state_val_15188 === (7)))
{var inst_15183 = (state_15187[(2)]);var state_15187__$1 = state_15187;var statearr_15189_15218 = state_15187__$1;(statearr_15189_15218[(2)] = inst_15183);
(statearr_15189_15218[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15188 === (1)))
{var inst_15150 = (new Array(n));var inst_15151 = inst_15150;var inst_15152 = (0);var state_15187__$1 = (function (){var statearr_15190 = state_15187;(statearr_15190[(7)] = inst_15151);
(statearr_15190[(8)] = inst_15152);
return statearr_15190;
})();var statearr_15191_15219 = state_15187__$1;(statearr_15191_15219[(2)] = null);
(statearr_15191_15219[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15188 === (4)))
{var inst_15155 = (state_15187[(9)]);var inst_15155__$1 = (state_15187[(2)]);var inst_15156 = (inst_15155__$1 == null);var inst_15157 = cljs.core.not.call(null,inst_15156);var state_15187__$1 = (function (){var statearr_15192 = state_15187;(statearr_15192[(9)] = inst_15155__$1);
return statearr_15192;
})();if(inst_15157)
{var statearr_15193_15220 = state_15187__$1;(statearr_15193_15220[(1)] = (5));
} else
{var statearr_15194_15221 = state_15187__$1;(statearr_15194_15221[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15188 === (15)))
{var inst_15177 = (state_15187[(2)]);var state_15187__$1 = state_15187;var statearr_15195_15222 = state_15187__$1;(statearr_15195_15222[(2)] = inst_15177);
(statearr_15195_15222[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15188 === (13)))
{var state_15187__$1 = state_15187;var statearr_15196_15223 = state_15187__$1;(statearr_15196_15223[(2)] = null);
(statearr_15196_15223[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15188 === (6)))
{var inst_15152 = (state_15187[(8)]);var inst_15173 = (inst_15152 > (0));var state_15187__$1 = state_15187;if(cljs.core.truth_(inst_15173))
{var statearr_15197_15224 = state_15187__$1;(statearr_15197_15224[(1)] = (12));
} else
{var statearr_15198_15225 = state_15187__$1;(statearr_15198_15225[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15188 === (3)))
{var inst_15185 = (state_15187[(2)]);var state_15187__$1 = state_15187;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15187__$1,inst_15185);
} else
{if((state_val_15188 === (12)))
{var inst_15151 = (state_15187[(7)]);var inst_15175 = cljs.core.vec.call(null,inst_15151);var state_15187__$1 = state_15187;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15187__$1,(15),out,inst_15175);
} else
{if((state_val_15188 === (2)))
{var state_15187__$1 = state_15187;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15187__$1,(4),ch);
} else
{if((state_val_15188 === (11)))
{var inst_15167 = (state_15187[(2)]);var inst_15168 = (new Array(n));var inst_15151 = inst_15168;var inst_15152 = (0);var state_15187__$1 = (function (){var statearr_15199 = state_15187;(statearr_15199[(7)] = inst_15151);
(statearr_15199[(10)] = inst_15167);
(statearr_15199[(8)] = inst_15152);
return statearr_15199;
})();var statearr_15200_15226 = state_15187__$1;(statearr_15200_15226[(2)] = null);
(statearr_15200_15226[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15188 === (9)))
{var inst_15151 = (state_15187[(7)]);var inst_15165 = cljs.core.vec.call(null,inst_15151);var state_15187__$1 = state_15187;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15187__$1,(11),out,inst_15165);
} else
{if((state_val_15188 === (5)))
{var inst_15151 = (state_15187[(7)]);var inst_15155 = (state_15187[(9)]);var inst_15160 = (state_15187[(11)]);var inst_15152 = (state_15187[(8)]);var inst_15159 = (inst_15151[inst_15152] = inst_15155);var inst_15160__$1 = (inst_15152 + (1));var inst_15161 = (inst_15160__$1 < n);var state_15187__$1 = (function (){var statearr_15201 = state_15187;(statearr_15201[(11)] = inst_15160__$1);
(statearr_15201[(12)] = inst_15159);
return statearr_15201;
})();if(cljs.core.truth_(inst_15161))
{var statearr_15202_15227 = state_15187__$1;(statearr_15202_15227[(1)] = (8));
} else
{var statearr_15203_15228 = state_15187__$1;(statearr_15203_15228[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15188 === (14)))
{var inst_15180 = (state_15187[(2)]);var inst_15181 = cljs.core.async.close_BANG_.call(null,out);var state_15187__$1 = (function (){var statearr_15205 = state_15187;(statearr_15205[(13)] = inst_15180);
return statearr_15205;
})();var statearr_15206_15229 = state_15187__$1;(statearr_15206_15229[(2)] = inst_15181);
(statearr_15206_15229[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15188 === (10)))
{var inst_15171 = (state_15187[(2)]);var state_15187__$1 = state_15187;var statearr_15207_15230 = state_15187__$1;(statearr_15207_15230[(2)] = inst_15171);
(statearr_15207_15230[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15188 === (8)))
{var inst_15151 = (state_15187[(7)]);var inst_15160 = (state_15187[(11)]);var tmp15204 = inst_15151;var inst_15151__$1 = tmp15204;var inst_15152 = inst_15160;var state_15187__$1 = (function (){var statearr_15208 = state_15187;(statearr_15208[(7)] = inst_15151__$1);
(statearr_15208[(8)] = inst_15152);
return statearr_15208;
})();var statearr_15209_15231 = state_15187__$1;(statearr_15209_15231[(2)] = null);
(statearr_15209_15231[(1)] = (2));
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
});})(c__10229__auto___15217,out))
;return ((function (switch__10164__auto__,c__10229__auto___15217,out){
return (function() {
var state_machine__10165__auto__ = null;
var state_machine__10165__auto____0 = (function (){var statearr_15213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15213[(0)] = state_machine__10165__auto__);
(statearr_15213[(1)] = (1));
return statearr_15213;
});
var state_machine__10165__auto____1 = (function (state_15187){while(true){
var ret_value__10166__auto__ = (function (){try{while(true){
var result__10167__auto__ = switch__10164__auto__.call(null,state_15187);if(cljs.core.keyword_identical_QMARK_.call(null,result__10167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10167__auto__;
}
break;
}
}catch (e15214){if((e15214 instanceof Object))
{var ex__10168__auto__ = e15214;var statearr_15215_15232 = state_15187;(statearr_15215_15232[(5)] = ex__10168__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15187);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15214;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15233 = state_15187;
state_15187 = G__15233;
continue;
}
} else
{return ret_value__10166__auto__;
}
break;
}
});
state_machine__10165__auto__ = function(state_15187){
switch(arguments.length){
case 0:
return state_machine__10165__auto____0.call(this);
case 1:
return state_machine__10165__auto____1.call(this,state_15187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10165__auto____0;
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10165__auto____1;
return state_machine__10165__auto__;
})()
;})(switch__10164__auto__,c__10229__auto___15217,out))
})();var state__10231__auto__ = (function (){var statearr_15216 = f__10230__auto__.call(null);(statearr_15216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10229__auto___15217);
return statearr_15216;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10231__auto__);
});})(c__10229__auto___15217,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10229__auto___15376 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10229__auto___15376,out){
return (function (){var f__10230__auto__ = (function (){var switch__10164__auto__ = ((function (c__10229__auto___15376,out){
return (function (state_15346){var state_val_15347 = (state_15346[(1)]);if((state_val_15347 === (7)))
{var inst_15342 = (state_15346[(2)]);var state_15346__$1 = state_15346;var statearr_15348_15377 = state_15346__$1;(statearr_15348_15377[(2)] = inst_15342);
(statearr_15348_15377[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15347 === (1)))
{var inst_15305 = [];var inst_15306 = inst_15305;var inst_15307 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_15346__$1 = (function (){var statearr_15349 = state_15346;(statearr_15349[(7)] = inst_15307);
(statearr_15349[(8)] = inst_15306);
return statearr_15349;
})();var statearr_15350_15378 = state_15346__$1;(statearr_15350_15378[(2)] = null);
(statearr_15350_15378[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15347 === (4)))
{var inst_15310 = (state_15346[(9)]);var inst_15310__$1 = (state_15346[(2)]);var inst_15311 = (inst_15310__$1 == null);var inst_15312 = cljs.core.not.call(null,inst_15311);var state_15346__$1 = (function (){var statearr_15351 = state_15346;(statearr_15351[(9)] = inst_15310__$1);
return statearr_15351;
})();if(inst_15312)
{var statearr_15352_15379 = state_15346__$1;(statearr_15352_15379[(1)] = (5));
} else
{var statearr_15353_15380 = state_15346__$1;(statearr_15353_15380[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15347 === (15)))
{var inst_15336 = (state_15346[(2)]);var state_15346__$1 = state_15346;var statearr_15354_15381 = state_15346__$1;(statearr_15354_15381[(2)] = inst_15336);
(statearr_15354_15381[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15347 === (13)))
{var state_15346__$1 = state_15346;var statearr_15355_15382 = state_15346__$1;(statearr_15355_15382[(2)] = null);
(statearr_15355_15382[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15347 === (6)))
{var inst_15306 = (state_15346[(8)]);var inst_15331 = inst_15306.length;var inst_15332 = (inst_15331 > (0));var state_15346__$1 = state_15346;if(cljs.core.truth_(inst_15332))
{var statearr_15356_15383 = state_15346__$1;(statearr_15356_15383[(1)] = (12));
} else
{var statearr_15357_15384 = state_15346__$1;(statearr_15357_15384[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15347 === (3)))
{var inst_15344 = (state_15346[(2)]);var state_15346__$1 = state_15346;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15346__$1,inst_15344);
} else
{if((state_val_15347 === (12)))
{var inst_15306 = (state_15346[(8)]);var inst_15334 = cljs.core.vec.call(null,inst_15306);var state_15346__$1 = state_15346;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15346__$1,(15),out,inst_15334);
} else
{if((state_val_15347 === (2)))
{var state_15346__$1 = state_15346;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15346__$1,(4),ch);
} else
{if((state_val_15347 === (11)))
{var inst_15310 = (state_15346[(9)]);var inst_15314 = (state_15346[(10)]);var inst_15324 = (state_15346[(2)]);var inst_15325 = [];var inst_15326 = inst_15325.push(inst_15310);var inst_15306 = inst_15325;var inst_15307 = inst_15314;var state_15346__$1 = (function (){var statearr_15358 = state_15346;(statearr_15358[(7)] = inst_15307);
(statearr_15358[(11)] = inst_15326);
(statearr_15358[(12)] = inst_15324);
(statearr_15358[(8)] = inst_15306);
return statearr_15358;
})();var statearr_15359_15385 = state_15346__$1;(statearr_15359_15385[(2)] = null);
(statearr_15359_15385[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15347 === (9)))
{var inst_15306 = (state_15346[(8)]);var inst_15322 = cljs.core.vec.call(null,inst_15306);var state_15346__$1 = state_15346;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15346__$1,(11),out,inst_15322);
} else
{if((state_val_15347 === (5)))
{var inst_15307 = (state_15346[(7)]);var inst_15310 = (state_15346[(9)]);var inst_15314 = (state_15346[(10)]);var inst_15314__$1 = f.call(null,inst_15310);var inst_15315 = cljs.core._EQ_.call(null,inst_15314__$1,inst_15307);var inst_15316 = cljs.core.keyword_identical_QMARK_.call(null,inst_15307,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_15317 = (inst_15315) || (inst_15316);var state_15346__$1 = (function (){var statearr_15360 = state_15346;(statearr_15360[(10)] = inst_15314__$1);
return statearr_15360;
})();if(cljs.core.truth_(inst_15317))
{var statearr_15361_15386 = state_15346__$1;(statearr_15361_15386[(1)] = (8));
} else
{var statearr_15362_15387 = state_15346__$1;(statearr_15362_15387[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15347 === (14)))
{var inst_15339 = (state_15346[(2)]);var inst_15340 = cljs.core.async.close_BANG_.call(null,out);var state_15346__$1 = (function (){var statearr_15364 = state_15346;(statearr_15364[(13)] = inst_15339);
return statearr_15364;
})();var statearr_15365_15388 = state_15346__$1;(statearr_15365_15388[(2)] = inst_15340);
(statearr_15365_15388[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15347 === (10)))
{var inst_15329 = (state_15346[(2)]);var state_15346__$1 = state_15346;var statearr_15366_15389 = state_15346__$1;(statearr_15366_15389[(2)] = inst_15329);
(statearr_15366_15389[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15347 === (8)))
{var inst_15310 = (state_15346[(9)]);var inst_15314 = (state_15346[(10)]);var inst_15306 = (state_15346[(8)]);var inst_15319 = inst_15306.push(inst_15310);var tmp15363 = inst_15306;var inst_15306__$1 = tmp15363;var inst_15307 = inst_15314;var state_15346__$1 = (function (){var statearr_15367 = state_15346;(statearr_15367[(7)] = inst_15307);
(statearr_15367[(14)] = inst_15319);
(statearr_15367[(8)] = inst_15306__$1);
return statearr_15367;
})();var statearr_15368_15390 = state_15346__$1;(statearr_15368_15390[(2)] = null);
(statearr_15368_15390[(1)] = (2));
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
});})(c__10229__auto___15376,out))
;return ((function (switch__10164__auto__,c__10229__auto___15376,out){
return (function() {
var state_machine__10165__auto__ = null;
var state_machine__10165__auto____0 = (function (){var statearr_15372 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15372[(0)] = state_machine__10165__auto__);
(statearr_15372[(1)] = (1));
return statearr_15372;
});
var state_machine__10165__auto____1 = (function (state_15346){while(true){
var ret_value__10166__auto__ = (function (){try{while(true){
var result__10167__auto__ = switch__10164__auto__.call(null,state_15346);if(cljs.core.keyword_identical_QMARK_.call(null,result__10167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10167__auto__;
}
break;
}
}catch (e15373){if((e15373 instanceof Object))
{var ex__10168__auto__ = e15373;var statearr_15374_15391 = state_15346;(statearr_15374_15391[(5)] = ex__10168__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15346);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15373;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15392 = state_15346;
state_15346 = G__15392;
continue;
}
} else
{return ret_value__10166__auto__;
}
break;
}
});
state_machine__10165__auto__ = function(state_15346){
switch(arguments.length){
case 0:
return state_machine__10165__auto____0.call(this);
case 1:
return state_machine__10165__auto____1.call(this,state_15346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10165__auto____0;
state_machine__10165__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10165__auto____1;
return state_machine__10165__auto__;
})()
;})(switch__10164__auto__,c__10229__auto___15376,out))
})();var state__10231__auto__ = (function (){var statearr_15375 = f__10230__auto__.call(null);(statearr_15375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10229__auto___15376);
return statearr_15375;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10231__auto__);
});})(c__10229__auto___15376,out))
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
