// Compiled by ClojureScript 0.0-2311
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11740 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11740 = (function (f,fn_handler,meta11741){
this.f = f;
this.fn_handler = fn_handler;
this.meta11741 = meta11741;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11740.cljs$lang$type = true;
cljs.core.async.t11740.cljs$lang$ctorStr = "cljs.core.async/t11740";
cljs.core.async.t11740.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11740");
});
cljs.core.async.t11740.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11740.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11740.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11740.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11742){var self__ = this;
var _11742__$1 = this;return self__.meta11741;
});
cljs.core.async.t11740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11742,meta11741__$1){var self__ = this;
var _11742__$1 = this;return (new cljs.core.async.t11740(self__.f,self__.fn_handler,meta11741__$1));
});
cljs.core.async.__GT_t11740 = (function __GT_t11740(f__$1,fn_handler__$1,meta11741){return (new cljs.core.async.t11740(f__$1,fn_handler__$1,meta11741));
});
}
return (new cljs.core.async.t11740(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11744 = buff;if(G__11744)
{var bit__4203__auto__ = null;if(cljs.core.truth_((function (){var or__3553__auto__ = bit__4203__auto__;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return G__11744.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11744.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11744);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11744);
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
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

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
{var val_11745 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11745);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11745,ret){
return (function (){return fn1.call(null,val_11745);
});})(val_11745,ret))
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
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4409__auto___11746 = n;var x_11747 = (0);while(true){
if((x_11747 < n__4409__auto___11746))
{(a[x_11747] = (0));
{
var G__11748 = (x_11747 + (1));
x_11747 = G__11748;
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
var G__11749 = (i + (1));
i = G__11749;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11753 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11753 = (function (flag,alt_flag,meta11754){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11754 = meta11754;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11753.cljs$lang$type = true;
cljs.core.async.t11753.cljs$lang$ctorStr = "cljs.core.async/t11753";
cljs.core.async.t11753.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11753");
});})(flag))
;
cljs.core.async.t11753.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11753.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11753.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11753.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11755){var self__ = this;
var _11755__$1 = this;return self__.meta11754;
});})(flag))
;
cljs.core.async.t11753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11755,meta11754__$1){var self__ = this;
var _11755__$1 = this;return (new cljs.core.async.t11753(self__.flag,self__.alt_flag,meta11754__$1));
});})(flag))
;
cljs.core.async.__GT_t11753 = ((function (flag){
return (function __GT_t11753(flag__$1,alt_flag__$1,meta11754){return (new cljs.core.async.t11753(flag__$1,alt_flag__$1,meta11754));
});})(flag))
;
}
return (new cljs.core.async.t11753(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11759 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11759 = (function (cb,flag,alt_handler,meta11760){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11760 = meta11760;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11759.cljs$lang$type = true;
cljs.core.async.t11759.cljs$lang$ctorStr = "cljs.core.async/t11759";
cljs.core.async.t11759.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11759");
});
cljs.core.async.t11759.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11759.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11759.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11761){var self__ = this;
var _11761__$1 = this;return self__.meta11760;
});
cljs.core.async.t11759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11761,meta11760__$1){var self__ = this;
var _11761__$1 = this;return (new cljs.core.async.t11759(self__.cb,self__.flag,self__.alt_handler,meta11760__$1));
});
cljs.core.async.__GT_t11759 = (function __GT_t11759(cb__$1,flag__$1,alt_handler__$1,meta11760){return (new cljs.core.async.t11759(cb__$1,flag__$1,alt_handler__$1,meta11760));
});
}
return (new cljs.core.async.t11759(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11762_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11762_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11763_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11763_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3553__auto__ = wport;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11764 = (i + (1));
i = G__11764;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3553__auto__ = ret;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3541__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3541__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3541__auto__;
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
var alts_BANG___delegate = function (ports,p__11765){var map__11767 = p__11765;var map__11767__$1 = ((cljs.core.seq_QMARK_.call(null,map__11767))?cljs.core.apply.call(null,cljs.core.hash_map,map__11767):map__11767);var opts = map__11767__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__11765 = null;if (arguments.length > 1) {
  p__11765 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11765);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11768){
var ports = cljs.core.first(arglist__11768);
var p__11765 = cljs.core.rest(arglist__11768);
return alts_BANG___delegate(ports,p__11765);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11776 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11776 = (function (ch,f,map_LT_,meta11777){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11777 = meta11777;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11776.cljs$lang$type = true;
cljs.core.async.t11776.cljs$lang$ctorStr = "cljs.core.async/t11776";
cljs.core.async.t11776.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11776");
});
cljs.core.async.t11776.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11776.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t11776.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11776.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11779 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11779 = (function (fn1,_,meta11777,ch,f,map_LT_,meta11780){
this.fn1 = fn1;
this._ = _;
this.meta11777 = meta11777;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11780 = meta11780;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11779.cljs$lang$type = true;
cljs.core.async.t11779.cljs$lang$ctorStr = "cljs.core.async/t11779";
cljs.core.async.t11779.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11779");
});})(___$1))
;
cljs.core.async.t11779.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11779.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11779.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11779.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__11769_SHARP_){return f1.call(null,(((p1__11769_SHARP_ == null))?null:self__.f.call(null,p1__11769_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t11779.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11781){var self__ = this;
var _11781__$1 = this;return self__.meta11780;
});})(___$1))
;
cljs.core.async.t11779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11781,meta11780__$1){var self__ = this;
var _11781__$1 = this;return (new cljs.core.async.t11779(self__.fn1,self__._,self__.meta11777,self__.ch,self__.f,self__.map_LT_,meta11780__$1));
});})(___$1))
;
cljs.core.async.__GT_t11779 = ((function (___$1){
return (function __GT_t11779(fn1__$1,___$2,meta11777__$1,ch__$2,f__$2,map_LT___$2,meta11780){return (new cljs.core.async.t11779(fn1__$1,___$2,meta11777__$1,ch__$2,f__$2,map_LT___$2,meta11780));
});})(___$1))
;
}
return (new cljs.core.async.t11779(fn1,___$1,self__.meta11777,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3541__auto__ = ret;if(cljs.core.truth_(and__3541__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3541__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11776.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11776.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11776.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11778){var self__ = this;
var _11778__$1 = this;return self__.meta11777;
});
cljs.core.async.t11776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11778,meta11777__$1){var self__ = this;
var _11778__$1 = this;return (new cljs.core.async.t11776(self__.ch,self__.f,self__.map_LT_,meta11777__$1));
});
cljs.core.async.__GT_t11776 = (function __GT_t11776(ch__$1,f__$1,map_LT___$1,meta11777){return (new cljs.core.async.t11776(ch__$1,f__$1,map_LT___$1,meta11777));
});
}
return (new cljs.core.async.t11776(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11785 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11785 = (function (ch,f,map_GT_,meta11786){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11786 = meta11786;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11785.cljs$lang$type = true;
cljs.core.async.t11785.cljs$lang$ctorStr = "cljs.core.async/t11785";
cljs.core.async.t11785.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11785");
});
cljs.core.async.t11785.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11785.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t11785.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11785.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11785.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11785.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11787){var self__ = this;
var _11787__$1 = this;return self__.meta11786;
});
cljs.core.async.t11785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11787,meta11786__$1){var self__ = this;
var _11787__$1 = this;return (new cljs.core.async.t11785(self__.ch,self__.f,self__.map_GT_,meta11786__$1));
});
cljs.core.async.__GT_t11785 = (function __GT_t11785(ch__$1,f__$1,map_GT___$1,meta11786){return (new cljs.core.async.t11785(ch__$1,f__$1,map_GT___$1,meta11786));
});
}
return (new cljs.core.async.t11785(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11791 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11791 = (function (ch,p,filter_GT_,meta11792){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11792 = meta11792;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11791.cljs$lang$type = true;
cljs.core.async.t11791.cljs$lang$ctorStr = "cljs.core.async/t11791";
cljs.core.async.t11791.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11791");
});
cljs.core.async.t11791.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11791.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t11791.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11791.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11791.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11791.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11791.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11791.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11793){var self__ = this;
var _11793__$1 = this;return self__.meta11792;
});
cljs.core.async.t11791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11793,meta11792__$1){var self__ = this;
var _11793__$1 = this;return (new cljs.core.async.t11791(self__.ch,self__.p,self__.filter_GT_,meta11792__$1));
});
cljs.core.async.__GT_t11791 = (function __GT_t11791(ch__$1,p__$1,filter_GT___$1,meta11792){return (new cljs.core.async.t11791(ch__$1,p__$1,filter_GT___$1,meta11792));
});
}
return (new cljs.core.async.t11791(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5906__auto___11876 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto___11876,out){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto___11876,out){
return (function (state_11855){var state_val_11856 = (state_11855[(1)]);if((state_val_11856 === (7)))
{var inst_11851 = (state_11855[(2)]);var state_11855__$1 = state_11855;var statearr_11857_11877 = state_11855__$1;(statearr_11857_11877[(2)] = inst_11851);
(statearr_11857_11877[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11856 === (1)))
{var state_11855__$1 = state_11855;var statearr_11858_11878 = state_11855__$1;(statearr_11858_11878[(2)] = null);
(statearr_11858_11878[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11856 === (4)))
{var inst_11837 = (state_11855[(7)]);var inst_11837__$1 = (state_11855[(2)]);var inst_11838 = (inst_11837__$1 == null);var state_11855__$1 = (function (){var statearr_11859 = state_11855;(statearr_11859[(7)] = inst_11837__$1);
return statearr_11859;
})();if(cljs.core.truth_(inst_11838))
{var statearr_11860_11879 = state_11855__$1;(statearr_11860_11879[(1)] = (5));
} else
{var statearr_11861_11880 = state_11855__$1;(statearr_11861_11880[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11856 === (6)))
{var inst_11837 = (state_11855[(7)]);var inst_11842 = p.call(null,inst_11837);var state_11855__$1 = state_11855;if(cljs.core.truth_(inst_11842))
{var statearr_11862_11881 = state_11855__$1;(statearr_11862_11881[(1)] = (8));
} else
{var statearr_11863_11882 = state_11855__$1;(statearr_11863_11882[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11856 === (3)))
{var inst_11853 = (state_11855[(2)]);var state_11855__$1 = state_11855;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11855__$1,inst_11853);
} else
{if((state_val_11856 === (2)))
{var state_11855__$1 = state_11855;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11855__$1,(4),ch);
} else
{if((state_val_11856 === (11)))
{var inst_11845 = (state_11855[(2)]);var state_11855__$1 = state_11855;var statearr_11864_11883 = state_11855__$1;(statearr_11864_11883[(2)] = inst_11845);
(statearr_11864_11883[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11856 === (9)))
{var state_11855__$1 = state_11855;var statearr_11865_11884 = state_11855__$1;(statearr_11865_11884[(2)] = null);
(statearr_11865_11884[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11856 === (5)))
{var inst_11840 = cljs.core.async.close_BANG_.call(null,out);var state_11855__$1 = state_11855;var statearr_11866_11885 = state_11855__$1;(statearr_11866_11885[(2)] = inst_11840);
(statearr_11866_11885[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11856 === (10)))
{var inst_11848 = (state_11855[(2)]);var state_11855__$1 = (function (){var statearr_11867 = state_11855;(statearr_11867[(8)] = inst_11848);
return statearr_11867;
})();var statearr_11868_11886 = state_11855__$1;(statearr_11868_11886[(2)] = null);
(statearr_11868_11886[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11856 === (8)))
{var inst_11837 = (state_11855[(7)]);var state_11855__$1 = state_11855;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11855__$1,(11),out,inst_11837);
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
});})(c__5906__auto___11876,out))
;return ((function (switch__5891__auto__,c__5906__auto___11876,out){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_11872 = [null,null,null,null,null,null,null,null,null];(statearr_11872[(0)] = state_machine__5892__auto__);
(statearr_11872[(1)] = (1));
return statearr_11872;
});
var state_machine__5892__auto____1 = (function (state_11855){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_11855);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e11873){if((e11873 instanceof Object))
{var ex__5895__auto__ = e11873;var statearr_11874_11887 = state_11855;(statearr_11874_11887[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11855);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11873;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11888 = state_11855;
state_11855 = G__11888;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_11855){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_11855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto___11876,out))
})();var state__5908__auto__ = (function (){var statearr_11875 = f__5907__auto__.call(null);(statearr_11875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto___11876);
return statearr_11875;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto___11876,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5906__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto__){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto__){
return (function (state_12054){var state_val_12055 = (state_12054[(1)]);if((state_val_12055 === (7)))
{var inst_12050 = (state_12054[(2)]);var state_12054__$1 = state_12054;var statearr_12056_12097 = state_12054__$1;(statearr_12056_12097[(2)] = inst_12050);
(statearr_12056_12097[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12055 === (20)))
{var inst_12020 = (state_12054[(7)]);var inst_12031 = (state_12054[(2)]);var inst_12032 = cljs.core.next.call(null,inst_12020);var inst_12006 = inst_12032;var inst_12007 = null;var inst_12008 = (0);var inst_12009 = (0);var state_12054__$1 = (function (){var statearr_12057 = state_12054;(statearr_12057[(8)] = inst_12006);
(statearr_12057[(9)] = inst_12031);
(statearr_12057[(10)] = inst_12009);
(statearr_12057[(11)] = inst_12007);
(statearr_12057[(12)] = inst_12008);
return statearr_12057;
})();var statearr_12058_12098 = state_12054__$1;(statearr_12058_12098[(2)] = null);
(statearr_12058_12098[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12055 === (1)))
{var state_12054__$1 = state_12054;var statearr_12059_12099 = state_12054__$1;(statearr_12059_12099[(2)] = null);
(statearr_12059_12099[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12055 === (4)))
{var inst_11995 = (state_12054[(13)]);var inst_11995__$1 = (state_12054[(2)]);var inst_11996 = (inst_11995__$1 == null);var state_12054__$1 = (function (){var statearr_12060 = state_12054;(statearr_12060[(13)] = inst_11995__$1);
return statearr_12060;
})();if(cljs.core.truth_(inst_11996))
{var statearr_12061_12100 = state_12054__$1;(statearr_12061_12100[(1)] = (5));
} else
{var statearr_12062_12101 = state_12054__$1;(statearr_12062_12101[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12055 === (15)))
{var state_12054__$1 = state_12054;var statearr_12066_12102 = state_12054__$1;(statearr_12066_12102[(2)] = null);
(statearr_12066_12102[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12055 === (21)))
{var state_12054__$1 = state_12054;var statearr_12067_12103 = state_12054__$1;(statearr_12067_12103[(2)] = null);
(statearr_12067_12103[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12055 === (13)))
{var inst_12006 = (state_12054[(8)]);var inst_12009 = (state_12054[(10)]);var inst_12007 = (state_12054[(11)]);var inst_12008 = (state_12054[(12)]);var inst_12016 = (state_12054[(2)]);var inst_12017 = (inst_12009 + (1));var tmp12063 = inst_12006;var tmp12064 = inst_12007;var tmp12065 = inst_12008;var inst_12006__$1 = tmp12063;var inst_12007__$1 = tmp12064;var inst_12008__$1 = tmp12065;var inst_12009__$1 = inst_12017;var state_12054__$1 = (function (){var statearr_12068 = state_12054;(statearr_12068[(8)] = inst_12006__$1);
(statearr_12068[(14)] = inst_12016);
(statearr_12068[(10)] = inst_12009__$1);
(statearr_12068[(11)] = inst_12007__$1);
(statearr_12068[(12)] = inst_12008__$1);
return statearr_12068;
})();var statearr_12069_12104 = state_12054__$1;(statearr_12069_12104[(2)] = null);
(statearr_12069_12104[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12055 === (22)))
{var state_12054__$1 = state_12054;var statearr_12070_12105 = state_12054__$1;(statearr_12070_12105[(2)] = null);
(statearr_12070_12105[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12055 === (6)))
{var inst_11995 = (state_12054[(13)]);var inst_12004 = f.call(null,inst_11995);var inst_12005 = cljs.core.seq.call(null,inst_12004);var inst_12006 = inst_12005;var inst_12007 = null;var inst_12008 = (0);var inst_12009 = (0);var state_12054__$1 = (function (){var statearr_12071 = state_12054;(statearr_12071[(8)] = inst_12006);
(statearr_12071[(10)] = inst_12009);
(statearr_12071[(11)] = inst_12007);
(statearr_12071[(12)] = inst_12008);
return statearr_12071;
})();var statearr_12072_12106 = state_12054__$1;(statearr_12072_12106[(2)] = null);
(statearr_12072_12106[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12055 === (17)))
{var inst_12020 = (state_12054[(7)]);var inst_12024 = cljs.core.chunk_first.call(null,inst_12020);var inst_12025 = cljs.core.chunk_rest.call(null,inst_12020);var inst_12026 = cljs.core.count.call(null,inst_12024);var inst_12006 = inst_12025;var inst_12007 = inst_12024;var inst_12008 = inst_12026;var inst_12009 = (0);var state_12054__$1 = (function (){var statearr_12073 = state_12054;(statearr_12073[(8)] = inst_12006);
(statearr_12073[(10)] = inst_12009);
(statearr_12073[(11)] = inst_12007);
(statearr_12073[(12)] = inst_12008);
return statearr_12073;
})();var statearr_12074_12107 = state_12054__$1;(statearr_12074_12107[(2)] = null);
(statearr_12074_12107[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12055 === (3)))
{var inst_12052 = (state_12054[(2)]);var state_12054__$1 = state_12054;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12054__$1,inst_12052);
} else
{if((state_val_12055 === (12)))
{var inst_12040 = (state_12054[(2)]);var state_12054__$1 = state_12054;var statearr_12075_12108 = state_12054__$1;(statearr_12075_12108[(2)] = inst_12040);
(statearr_12075_12108[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12055 === (2)))
{var state_12054__$1 = state_12054;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12054__$1,(4),in$);
} else
{if((state_val_12055 === (23)))
{var inst_12048 = (state_12054[(2)]);var state_12054__$1 = state_12054;var statearr_12076_12109 = state_12054__$1;(statearr_12076_12109[(2)] = inst_12048);
(statearr_12076_12109[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12055 === (19)))
{var inst_12035 = (state_12054[(2)]);var state_12054__$1 = state_12054;var statearr_12077_12110 = state_12054__$1;(statearr_12077_12110[(2)] = inst_12035);
(statearr_12077_12110[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12055 === (11)))
{var inst_12006 = (state_12054[(8)]);var inst_12020 = (state_12054[(7)]);var inst_12020__$1 = cljs.core.seq.call(null,inst_12006);var state_12054__$1 = (function (){var statearr_12078 = state_12054;(statearr_12078[(7)] = inst_12020__$1);
return statearr_12078;
})();if(inst_12020__$1)
{var statearr_12079_12111 = state_12054__$1;(statearr_12079_12111[(1)] = (14));
} else
{var statearr_12080_12112 = state_12054__$1;(statearr_12080_12112[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12055 === (9)))
{var inst_12042 = (state_12054[(2)]);var inst_12043 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_12054__$1 = (function (){var statearr_12081 = state_12054;(statearr_12081[(15)] = inst_12042);
return statearr_12081;
})();if(cljs.core.truth_(inst_12043))
{var statearr_12082_12113 = state_12054__$1;(statearr_12082_12113[(1)] = (21));
} else
{var statearr_12083_12114 = state_12054__$1;(statearr_12083_12114[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12055 === (5)))
{var inst_11998 = cljs.core.async.close_BANG_.call(null,out);var state_12054__$1 = state_12054;var statearr_12084_12115 = state_12054__$1;(statearr_12084_12115[(2)] = inst_11998);
(statearr_12084_12115[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12055 === (14)))
{var inst_12020 = (state_12054[(7)]);var inst_12022 = cljs.core.chunked_seq_QMARK_.call(null,inst_12020);var state_12054__$1 = state_12054;if(inst_12022)
{var statearr_12085_12116 = state_12054__$1;(statearr_12085_12116[(1)] = (17));
} else
{var statearr_12086_12117 = state_12054__$1;(statearr_12086_12117[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12055 === (16)))
{var inst_12038 = (state_12054[(2)]);var state_12054__$1 = state_12054;var statearr_12087_12118 = state_12054__$1;(statearr_12087_12118[(2)] = inst_12038);
(statearr_12087_12118[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12055 === (10)))
{var inst_12009 = (state_12054[(10)]);var inst_12007 = (state_12054[(11)]);var inst_12014 = cljs.core._nth.call(null,inst_12007,inst_12009);var state_12054__$1 = state_12054;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12054__$1,(13),out,inst_12014);
} else
{if((state_val_12055 === (18)))
{var inst_12020 = (state_12054[(7)]);var inst_12029 = cljs.core.first.call(null,inst_12020);var state_12054__$1 = state_12054;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12054__$1,(20),out,inst_12029);
} else
{if((state_val_12055 === (8)))
{var inst_12009 = (state_12054[(10)]);var inst_12008 = (state_12054[(12)]);var inst_12011 = (inst_12009 < inst_12008);var inst_12012 = inst_12011;var state_12054__$1 = state_12054;if(cljs.core.truth_(inst_12012))
{var statearr_12088_12119 = state_12054__$1;(statearr_12088_12119[(1)] = (10));
} else
{var statearr_12089_12120 = state_12054__$1;(statearr_12089_12120[(1)] = (11));
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
});})(c__5906__auto__))
;return ((function (switch__5891__auto__,c__5906__auto__){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_12093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12093[(0)] = state_machine__5892__auto__);
(statearr_12093[(1)] = (1));
return statearr_12093;
});
var state_machine__5892__auto____1 = (function (state_12054){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_12054);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e12094){if((e12094 instanceof Object))
{var ex__5895__auto__ = e12094;var statearr_12095_12121 = state_12054;(statearr_12095_12121[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12054);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12094;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12122 = state_12054;
state_12054 = G__12122;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_12054){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_12054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto__))
})();var state__5908__auto__ = (function (){var statearr_12096 = f__5907__auto__.call(null);(statearr_12096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto__);
return statearr_12096;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto__))
);
return c__5906__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5906__auto___12217 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto___12217){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto___12217){
return (function (state_12193){var state_val_12194 = (state_12193[(1)]);if((state_val_12194 === (7)))
{var inst_12189 = (state_12193[(2)]);var state_12193__$1 = state_12193;var statearr_12195_12218 = state_12193__$1;(statearr_12195_12218[(2)] = inst_12189);
(statearr_12195_12218[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12194 === (1)))
{var state_12193__$1 = state_12193;var statearr_12196_12219 = state_12193__$1;(statearr_12196_12219[(2)] = null);
(statearr_12196_12219[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12194 === (4)))
{var inst_12172 = (state_12193[(7)]);var inst_12172__$1 = (state_12193[(2)]);var inst_12173 = (inst_12172__$1 == null);var state_12193__$1 = (function (){var statearr_12197 = state_12193;(statearr_12197[(7)] = inst_12172__$1);
return statearr_12197;
})();if(cljs.core.truth_(inst_12173))
{var statearr_12198_12220 = state_12193__$1;(statearr_12198_12220[(1)] = (5));
} else
{var statearr_12199_12221 = state_12193__$1;(statearr_12199_12221[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12194 === (13)))
{var state_12193__$1 = state_12193;var statearr_12200_12222 = state_12193__$1;(statearr_12200_12222[(2)] = null);
(statearr_12200_12222[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12194 === (6)))
{var inst_12172 = (state_12193[(7)]);var state_12193__$1 = state_12193;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12193__$1,(11),to,inst_12172);
} else
{if((state_val_12194 === (3)))
{var inst_12191 = (state_12193[(2)]);var state_12193__$1 = state_12193;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12193__$1,inst_12191);
} else
{if((state_val_12194 === (12)))
{var state_12193__$1 = state_12193;var statearr_12201_12223 = state_12193__$1;(statearr_12201_12223[(2)] = null);
(statearr_12201_12223[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12194 === (2)))
{var state_12193__$1 = state_12193;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12193__$1,(4),from);
} else
{if((state_val_12194 === (11)))
{var inst_12182 = (state_12193[(2)]);var state_12193__$1 = state_12193;if(cljs.core.truth_(inst_12182))
{var statearr_12202_12224 = state_12193__$1;(statearr_12202_12224[(1)] = (12));
} else
{var statearr_12203_12225 = state_12193__$1;(statearr_12203_12225[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12194 === (9)))
{var state_12193__$1 = state_12193;var statearr_12204_12226 = state_12193__$1;(statearr_12204_12226[(2)] = null);
(statearr_12204_12226[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12194 === (5)))
{var state_12193__$1 = state_12193;if(cljs.core.truth_(close_QMARK_))
{var statearr_12205_12227 = state_12193__$1;(statearr_12205_12227[(1)] = (8));
} else
{var statearr_12206_12228 = state_12193__$1;(statearr_12206_12228[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12194 === (14)))
{var inst_12187 = (state_12193[(2)]);var state_12193__$1 = state_12193;var statearr_12207_12229 = state_12193__$1;(statearr_12207_12229[(2)] = inst_12187);
(statearr_12207_12229[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12194 === (10)))
{var inst_12179 = (state_12193[(2)]);var state_12193__$1 = state_12193;var statearr_12208_12230 = state_12193__$1;(statearr_12208_12230[(2)] = inst_12179);
(statearr_12208_12230[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12194 === (8)))
{var inst_12176 = cljs.core.async.close_BANG_.call(null,to);var state_12193__$1 = state_12193;var statearr_12209_12231 = state_12193__$1;(statearr_12209_12231[(2)] = inst_12176);
(statearr_12209_12231[(1)] = (10));
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
});})(c__5906__auto___12217))
;return ((function (switch__5891__auto__,c__5906__auto___12217){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_12213 = [null,null,null,null,null,null,null,null];(statearr_12213[(0)] = state_machine__5892__auto__);
(statearr_12213[(1)] = (1));
return statearr_12213;
});
var state_machine__5892__auto____1 = (function (state_12193){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_12193);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e12214){if((e12214 instanceof Object))
{var ex__5895__auto__ = e12214;var statearr_12215_12232 = state_12193;(statearr_12215_12232[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12193);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12214;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12233 = state_12193;
state_12193 = G__12233;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_12193){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_12193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto___12217))
})();var state__5908__auto__ = (function (){var statearr_12216 = f__5907__auto__.call(null);(statearr_12216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto___12217);
return statearr_12216;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto___12217))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5906__auto___12334 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto___12334,tc,fc){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto___12334,tc,fc){
return (function (state_12309){var state_val_12310 = (state_12309[(1)]);if((state_val_12310 === (7)))
{var inst_12305 = (state_12309[(2)]);var state_12309__$1 = state_12309;var statearr_12311_12335 = state_12309__$1;(statearr_12311_12335[(2)] = inst_12305);
(statearr_12311_12335[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12310 === (1)))
{var state_12309__$1 = state_12309;var statearr_12312_12336 = state_12309__$1;(statearr_12312_12336[(2)] = null);
(statearr_12312_12336[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12310 === (4)))
{var inst_12286 = (state_12309[(7)]);var inst_12286__$1 = (state_12309[(2)]);var inst_12287 = (inst_12286__$1 == null);var state_12309__$1 = (function (){var statearr_12313 = state_12309;(statearr_12313[(7)] = inst_12286__$1);
return statearr_12313;
})();if(cljs.core.truth_(inst_12287))
{var statearr_12314_12337 = state_12309__$1;(statearr_12314_12337[(1)] = (5));
} else
{var statearr_12315_12338 = state_12309__$1;(statearr_12315_12338[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12310 === (13)))
{var state_12309__$1 = state_12309;var statearr_12316_12339 = state_12309__$1;(statearr_12316_12339[(2)] = null);
(statearr_12316_12339[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12310 === (6)))
{var inst_12286 = (state_12309[(7)]);var inst_12292 = p.call(null,inst_12286);var state_12309__$1 = state_12309;if(cljs.core.truth_(inst_12292))
{var statearr_12317_12340 = state_12309__$1;(statearr_12317_12340[(1)] = (9));
} else
{var statearr_12318_12341 = state_12309__$1;(statearr_12318_12341[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12310 === (3)))
{var inst_12307 = (state_12309[(2)]);var state_12309__$1 = state_12309;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12309__$1,inst_12307);
} else
{if((state_val_12310 === (12)))
{var state_12309__$1 = state_12309;var statearr_12319_12342 = state_12309__$1;(statearr_12319_12342[(2)] = null);
(statearr_12319_12342[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12310 === (2)))
{var state_12309__$1 = state_12309;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12309__$1,(4),ch);
} else
{if((state_val_12310 === (11)))
{var inst_12286 = (state_12309[(7)]);var inst_12296 = (state_12309[(2)]);var state_12309__$1 = state_12309;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12309__$1,(8),inst_12296,inst_12286);
} else
{if((state_val_12310 === (9)))
{var state_12309__$1 = state_12309;var statearr_12320_12343 = state_12309__$1;(statearr_12320_12343[(2)] = tc);
(statearr_12320_12343[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12310 === (5)))
{var inst_12289 = cljs.core.async.close_BANG_.call(null,tc);var inst_12290 = cljs.core.async.close_BANG_.call(null,fc);var state_12309__$1 = (function (){var statearr_12321 = state_12309;(statearr_12321[(8)] = inst_12289);
return statearr_12321;
})();var statearr_12322_12344 = state_12309__$1;(statearr_12322_12344[(2)] = inst_12290);
(statearr_12322_12344[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12310 === (14)))
{var inst_12303 = (state_12309[(2)]);var state_12309__$1 = state_12309;var statearr_12323_12345 = state_12309__$1;(statearr_12323_12345[(2)] = inst_12303);
(statearr_12323_12345[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12310 === (10)))
{var state_12309__$1 = state_12309;var statearr_12324_12346 = state_12309__$1;(statearr_12324_12346[(2)] = fc);
(statearr_12324_12346[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12310 === (8)))
{var inst_12298 = (state_12309[(2)]);var state_12309__$1 = state_12309;if(cljs.core.truth_(inst_12298))
{var statearr_12325_12347 = state_12309__$1;(statearr_12325_12347[(1)] = (12));
} else
{var statearr_12326_12348 = state_12309__$1;(statearr_12326_12348[(1)] = (13));
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
});})(c__5906__auto___12334,tc,fc))
;return ((function (switch__5891__auto__,c__5906__auto___12334,tc,fc){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_12330 = [null,null,null,null,null,null,null,null,null];(statearr_12330[(0)] = state_machine__5892__auto__);
(statearr_12330[(1)] = (1));
return statearr_12330;
});
var state_machine__5892__auto____1 = (function (state_12309){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_12309);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e12331){if((e12331 instanceof Object))
{var ex__5895__auto__ = e12331;var statearr_12332_12349 = state_12309;(statearr_12332_12349[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12309);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12331;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12350 = state_12309;
state_12309 = G__12350;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_12309){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_12309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto___12334,tc,fc))
})();var state__5908__auto__ = (function (){var statearr_12333 = f__5907__auto__.call(null);(statearr_12333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto___12334);
return statearr_12333;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto___12334,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5906__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto__){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto__){
return (function (state_12397){var state_val_12398 = (state_12397[(1)]);if((state_val_12398 === (7)))
{var inst_12393 = (state_12397[(2)]);var state_12397__$1 = state_12397;var statearr_12399_12415 = state_12397__$1;(statearr_12399_12415[(2)] = inst_12393);
(statearr_12399_12415[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (6)))
{var inst_12383 = (state_12397[(7)]);var inst_12386 = (state_12397[(8)]);var inst_12390 = f.call(null,inst_12383,inst_12386);var inst_12383__$1 = inst_12390;var state_12397__$1 = (function (){var statearr_12400 = state_12397;(statearr_12400[(7)] = inst_12383__$1);
return statearr_12400;
})();var statearr_12401_12416 = state_12397__$1;(statearr_12401_12416[(2)] = null);
(statearr_12401_12416[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (5)))
{var inst_12383 = (state_12397[(7)]);var state_12397__$1 = state_12397;var statearr_12402_12417 = state_12397__$1;(statearr_12402_12417[(2)] = inst_12383);
(statearr_12402_12417[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (4)))
{var inst_12386 = (state_12397[(8)]);var inst_12386__$1 = (state_12397[(2)]);var inst_12387 = (inst_12386__$1 == null);var state_12397__$1 = (function (){var statearr_12403 = state_12397;(statearr_12403[(8)] = inst_12386__$1);
return statearr_12403;
})();if(cljs.core.truth_(inst_12387))
{var statearr_12404_12418 = state_12397__$1;(statearr_12404_12418[(1)] = (5));
} else
{var statearr_12405_12419 = state_12397__$1;(statearr_12405_12419[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12398 === (3)))
{var inst_12395 = (state_12397[(2)]);var state_12397__$1 = state_12397;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12397__$1,inst_12395);
} else
{if((state_val_12398 === (2)))
{var state_12397__$1 = state_12397;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12397__$1,(4),ch);
} else
{if((state_val_12398 === (1)))
{var inst_12383 = init;var state_12397__$1 = (function (){var statearr_12406 = state_12397;(statearr_12406[(7)] = inst_12383);
return statearr_12406;
})();var statearr_12407_12420 = state_12397__$1;(statearr_12407_12420[(2)] = null);
(statearr_12407_12420[(1)] = (2));
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
});})(c__5906__auto__))
;return ((function (switch__5891__auto__,c__5906__auto__){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_12411 = [null,null,null,null,null,null,null,null,null];(statearr_12411[(0)] = state_machine__5892__auto__);
(statearr_12411[(1)] = (1));
return statearr_12411;
});
var state_machine__5892__auto____1 = (function (state_12397){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_12397);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e12412){if((e12412 instanceof Object))
{var ex__5895__auto__ = e12412;var statearr_12413_12421 = state_12397;(statearr_12413_12421[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12397);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12412;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12422 = state_12397;
state_12397 = G__12422;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_12397){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_12397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto__))
})();var state__5908__auto__ = (function (){var statearr_12414 = f__5907__auto__.call(null);(statearr_12414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto__);
return statearr_12414;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto__))
);
return c__5906__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5906__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto__){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto__){
return (function (state_12496){var state_val_12497 = (state_12496[(1)]);if((state_val_12497 === (7)))
{var inst_12478 = (state_12496[(2)]);var state_12496__$1 = state_12496;var statearr_12498_12521 = state_12496__$1;(statearr_12498_12521[(2)] = inst_12478);
(statearr_12498_12521[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12497 === (1)))
{var inst_12472 = cljs.core.seq.call(null,coll);var inst_12473 = inst_12472;var state_12496__$1 = (function (){var statearr_12499 = state_12496;(statearr_12499[(7)] = inst_12473);
return statearr_12499;
})();var statearr_12500_12522 = state_12496__$1;(statearr_12500_12522[(2)] = null);
(statearr_12500_12522[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12497 === (4)))
{var inst_12473 = (state_12496[(7)]);var inst_12476 = cljs.core.first.call(null,inst_12473);var state_12496__$1 = state_12496;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12496__$1,(7),ch,inst_12476);
} else
{if((state_val_12497 === (13)))
{var inst_12490 = (state_12496[(2)]);var state_12496__$1 = state_12496;var statearr_12501_12523 = state_12496__$1;(statearr_12501_12523[(2)] = inst_12490);
(statearr_12501_12523[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12497 === (6)))
{var inst_12481 = (state_12496[(2)]);var state_12496__$1 = state_12496;if(cljs.core.truth_(inst_12481))
{var statearr_12502_12524 = state_12496__$1;(statearr_12502_12524[(1)] = (8));
} else
{var statearr_12503_12525 = state_12496__$1;(statearr_12503_12525[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12497 === (3)))
{var inst_12494 = (state_12496[(2)]);var state_12496__$1 = state_12496;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12496__$1,inst_12494);
} else
{if((state_val_12497 === (12)))
{var state_12496__$1 = state_12496;var statearr_12504_12526 = state_12496__$1;(statearr_12504_12526[(2)] = null);
(statearr_12504_12526[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12497 === (2)))
{var inst_12473 = (state_12496[(7)]);var state_12496__$1 = state_12496;if(cljs.core.truth_(inst_12473))
{var statearr_12505_12527 = state_12496__$1;(statearr_12505_12527[(1)] = (4));
} else
{var statearr_12506_12528 = state_12496__$1;(statearr_12506_12528[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12497 === (11)))
{var inst_12487 = cljs.core.async.close_BANG_.call(null,ch);var state_12496__$1 = state_12496;var statearr_12507_12529 = state_12496__$1;(statearr_12507_12529[(2)] = inst_12487);
(statearr_12507_12529[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12497 === (9)))
{var state_12496__$1 = state_12496;if(cljs.core.truth_(close_QMARK_))
{var statearr_12508_12530 = state_12496__$1;(statearr_12508_12530[(1)] = (11));
} else
{var statearr_12509_12531 = state_12496__$1;(statearr_12509_12531[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12497 === (5)))
{var inst_12473 = (state_12496[(7)]);var state_12496__$1 = state_12496;var statearr_12510_12532 = state_12496__$1;(statearr_12510_12532[(2)] = inst_12473);
(statearr_12510_12532[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12497 === (10)))
{var inst_12492 = (state_12496[(2)]);var state_12496__$1 = state_12496;var statearr_12511_12533 = state_12496__$1;(statearr_12511_12533[(2)] = inst_12492);
(statearr_12511_12533[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12497 === (8)))
{var inst_12473 = (state_12496[(7)]);var inst_12483 = cljs.core.next.call(null,inst_12473);var inst_12473__$1 = inst_12483;var state_12496__$1 = (function (){var statearr_12512 = state_12496;(statearr_12512[(7)] = inst_12473__$1);
return statearr_12512;
})();var statearr_12513_12534 = state_12496__$1;(statearr_12513_12534[(2)] = null);
(statearr_12513_12534[(1)] = (2));
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
});})(c__5906__auto__))
;return ((function (switch__5891__auto__,c__5906__auto__){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_12517 = [null,null,null,null,null,null,null,null];(statearr_12517[(0)] = state_machine__5892__auto__);
(statearr_12517[(1)] = (1));
return statearr_12517;
});
var state_machine__5892__auto____1 = (function (state_12496){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_12496);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e12518){if((e12518 instanceof Object))
{var ex__5895__auto__ = e12518;var statearr_12519_12535 = state_12496;(statearr_12519_12535[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12496);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12518;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12536 = state_12496;
state_12496 = G__12536;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_12496){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_12496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto__))
})();var state__5908__auto__ = (function (){var statearr_12520 = f__5907__auto__.call(null);(statearr_12520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto__);
return statearr_12520;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto__))
);
return c__5906__auto__;
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
cljs.core.async.Mux = (function (){var obj12538 = {};return obj12538;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3541__auto__ = _;if(and__3541__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4180__auto__ = (((_ == null))?null:_);return (function (){var or__3553__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12540 = {};return obj12540;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12762 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12762 = (function (cs,ch,mult,meta12763){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12763 = meta12763;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12762.cljs$lang$type = true;
cljs.core.async.t12762.cljs$lang$ctorStr = "cljs.core.async/t12762";
cljs.core.async.t12762.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t12762");
});})(cs))
;
cljs.core.async.t12762.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12762.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12762.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12762.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12762.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12762.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12762.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12764){var self__ = this;
var _12764__$1 = this;return self__.meta12763;
});})(cs))
;
cljs.core.async.t12762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12764,meta12763__$1){var self__ = this;
var _12764__$1 = this;return (new cljs.core.async.t12762(self__.cs,self__.ch,self__.mult,meta12763__$1));
});})(cs))
;
cljs.core.async.__GT_t12762 = ((function (cs){
return (function __GT_t12762(cs__$1,ch__$1,mult__$1,meta12763){return (new cljs.core.async.t12762(cs__$1,ch__$1,mult__$1,meta12763));
});})(cs))
;
}
return (new cljs.core.async.t12762(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5906__auto___12983 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto___12983,cs,m,dchan,dctr,done){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto___12983,cs,m,dchan,dctr,done){
return (function (state_12895){var state_val_12896 = (state_12895[(1)]);if((state_val_12896 === (7)))
{var inst_12891 = (state_12895[(2)]);var state_12895__$1 = state_12895;var statearr_12897_12984 = state_12895__$1;(statearr_12897_12984[(2)] = inst_12891);
(statearr_12897_12984[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (20)))
{var inst_12796 = (state_12895[(7)]);var inst_12806 = cljs.core.first.call(null,inst_12796);var inst_12807 = cljs.core.nth.call(null,inst_12806,(0),null);var inst_12808 = cljs.core.nth.call(null,inst_12806,(1),null);var state_12895__$1 = (function (){var statearr_12898 = state_12895;(statearr_12898[(8)] = inst_12807);
return statearr_12898;
})();if(cljs.core.truth_(inst_12808))
{var statearr_12899_12985 = state_12895__$1;(statearr_12899_12985[(1)] = (22));
} else
{var statearr_12900_12986 = state_12895__$1;(statearr_12900_12986[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (27)))
{var inst_12836 = (state_12895[(9)]);var inst_12838 = (state_12895[(10)]);var inst_12843 = (state_12895[(11)]);var inst_12767 = (state_12895[(12)]);var inst_12843__$1 = cljs.core._nth.call(null,inst_12836,inst_12838);var inst_12844 = cljs.core.async.put_BANG_.call(null,inst_12843__$1,inst_12767,done);var state_12895__$1 = (function (){var statearr_12901 = state_12895;(statearr_12901[(11)] = inst_12843__$1);
return statearr_12901;
})();if(cljs.core.truth_(inst_12844))
{var statearr_12902_12987 = state_12895__$1;(statearr_12902_12987[(1)] = (30));
} else
{var statearr_12903_12988 = state_12895__$1;(statearr_12903_12988[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (1)))
{var state_12895__$1 = state_12895;var statearr_12904_12989 = state_12895__$1;(statearr_12904_12989[(2)] = null);
(statearr_12904_12989[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (24)))
{var inst_12796 = (state_12895[(7)]);var inst_12813 = (state_12895[(2)]);var inst_12814 = cljs.core.next.call(null,inst_12796);var inst_12776 = inst_12814;var inst_12777 = null;var inst_12778 = (0);var inst_12779 = (0);var state_12895__$1 = (function (){var statearr_12905 = state_12895;(statearr_12905[(13)] = inst_12777);
(statearr_12905[(14)] = inst_12813);
(statearr_12905[(15)] = inst_12778);
(statearr_12905[(16)] = inst_12776);
(statearr_12905[(17)] = inst_12779);
return statearr_12905;
})();var statearr_12906_12990 = state_12895__$1;(statearr_12906_12990[(2)] = null);
(statearr_12906_12990[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (39)))
{var state_12895__$1 = state_12895;var statearr_12910_12991 = state_12895__$1;(statearr_12910_12991[(2)] = null);
(statearr_12910_12991[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (4)))
{var inst_12767 = (state_12895[(12)]);var inst_12767__$1 = (state_12895[(2)]);var inst_12768 = (inst_12767__$1 == null);var state_12895__$1 = (function (){var statearr_12911 = state_12895;(statearr_12911[(12)] = inst_12767__$1);
return statearr_12911;
})();if(cljs.core.truth_(inst_12768))
{var statearr_12912_12992 = state_12895__$1;(statearr_12912_12992[(1)] = (5));
} else
{var statearr_12913_12993 = state_12895__$1;(statearr_12913_12993[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (15)))
{var inst_12777 = (state_12895[(13)]);var inst_12778 = (state_12895[(15)]);var inst_12776 = (state_12895[(16)]);var inst_12779 = (state_12895[(17)]);var inst_12792 = (state_12895[(2)]);var inst_12793 = (inst_12779 + (1));var tmp12907 = inst_12777;var tmp12908 = inst_12778;var tmp12909 = inst_12776;var inst_12776__$1 = tmp12909;var inst_12777__$1 = tmp12907;var inst_12778__$1 = tmp12908;var inst_12779__$1 = inst_12793;var state_12895__$1 = (function (){var statearr_12914 = state_12895;(statearr_12914[(13)] = inst_12777__$1);
(statearr_12914[(18)] = inst_12792);
(statearr_12914[(15)] = inst_12778__$1);
(statearr_12914[(16)] = inst_12776__$1);
(statearr_12914[(17)] = inst_12779__$1);
return statearr_12914;
})();var statearr_12915_12994 = state_12895__$1;(statearr_12915_12994[(2)] = null);
(statearr_12915_12994[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (21)))
{var inst_12817 = (state_12895[(2)]);var state_12895__$1 = state_12895;var statearr_12919_12995 = state_12895__$1;(statearr_12919_12995[(2)] = inst_12817);
(statearr_12919_12995[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (31)))
{var inst_12843 = (state_12895[(11)]);var inst_12847 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12848 = cljs.core.async.untap_STAR_.call(null,m,inst_12843);var state_12895__$1 = (function (){var statearr_12920 = state_12895;(statearr_12920[(19)] = inst_12847);
return statearr_12920;
})();var statearr_12921_12996 = state_12895__$1;(statearr_12921_12996[(2)] = inst_12848);
(statearr_12921_12996[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (32)))
{var inst_12836 = (state_12895[(9)]);var inst_12838 = (state_12895[(10)]);var inst_12837 = (state_12895[(20)]);var inst_12835 = (state_12895[(21)]);var inst_12850 = (state_12895[(2)]);var inst_12851 = (inst_12838 + (1));var tmp12916 = inst_12836;var tmp12917 = inst_12837;var tmp12918 = inst_12835;var inst_12835__$1 = tmp12918;var inst_12836__$1 = tmp12916;var inst_12837__$1 = tmp12917;var inst_12838__$1 = inst_12851;var state_12895__$1 = (function (){var statearr_12922 = state_12895;(statearr_12922[(9)] = inst_12836__$1);
(statearr_12922[(10)] = inst_12838__$1);
(statearr_12922[(20)] = inst_12837__$1);
(statearr_12922[(22)] = inst_12850);
(statearr_12922[(21)] = inst_12835__$1);
return statearr_12922;
})();var statearr_12923_12997 = state_12895__$1;(statearr_12923_12997[(2)] = null);
(statearr_12923_12997[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (40)))
{var inst_12863 = (state_12895[(23)]);var inst_12867 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12868 = cljs.core.async.untap_STAR_.call(null,m,inst_12863);var state_12895__$1 = (function (){var statearr_12924 = state_12895;(statearr_12924[(24)] = inst_12867);
return statearr_12924;
})();var statearr_12925_12998 = state_12895__$1;(statearr_12925_12998[(2)] = inst_12868);
(statearr_12925_12998[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (33)))
{var inst_12854 = (state_12895[(25)]);var inst_12856 = cljs.core.chunked_seq_QMARK_.call(null,inst_12854);var state_12895__$1 = state_12895;if(inst_12856)
{var statearr_12926_12999 = state_12895__$1;(statearr_12926_12999[(1)] = (36));
} else
{var statearr_12927_13000 = state_12895__$1;(statearr_12927_13000[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (13)))
{var inst_12786 = (state_12895[(26)]);var inst_12789 = cljs.core.async.close_BANG_.call(null,inst_12786);var state_12895__$1 = state_12895;var statearr_12928_13001 = state_12895__$1;(statearr_12928_13001[(2)] = inst_12789);
(statearr_12928_13001[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (22)))
{var inst_12807 = (state_12895[(8)]);var inst_12810 = cljs.core.async.close_BANG_.call(null,inst_12807);var state_12895__$1 = state_12895;var statearr_12929_13002 = state_12895__$1;(statearr_12929_13002[(2)] = inst_12810);
(statearr_12929_13002[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (36)))
{var inst_12854 = (state_12895[(25)]);var inst_12858 = cljs.core.chunk_first.call(null,inst_12854);var inst_12859 = cljs.core.chunk_rest.call(null,inst_12854);var inst_12860 = cljs.core.count.call(null,inst_12858);var inst_12835 = inst_12859;var inst_12836 = inst_12858;var inst_12837 = inst_12860;var inst_12838 = (0);var state_12895__$1 = (function (){var statearr_12930 = state_12895;(statearr_12930[(9)] = inst_12836);
(statearr_12930[(10)] = inst_12838);
(statearr_12930[(20)] = inst_12837);
(statearr_12930[(21)] = inst_12835);
return statearr_12930;
})();var statearr_12931_13003 = state_12895__$1;(statearr_12931_13003[(2)] = null);
(statearr_12931_13003[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (41)))
{var inst_12854 = (state_12895[(25)]);var inst_12870 = (state_12895[(2)]);var inst_12871 = cljs.core.next.call(null,inst_12854);var inst_12835 = inst_12871;var inst_12836 = null;var inst_12837 = (0);var inst_12838 = (0);var state_12895__$1 = (function (){var statearr_12932 = state_12895;(statearr_12932[(9)] = inst_12836);
(statearr_12932[(10)] = inst_12838);
(statearr_12932[(27)] = inst_12870);
(statearr_12932[(20)] = inst_12837);
(statearr_12932[(21)] = inst_12835);
return statearr_12932;
})();var statearr_12933_13004 = state_12895__$1;(statearr_12933_13004[(2)] = null);
(statearr_12933_13004[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (43)))
{var state_12895__$1 = state_12895;var statearr_12934_13005 = state_12895__$1;(statearr_12934_13005[(2)] = null);
(statearr_12934_13005[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (29)))
{var inst_12879 = (state_12895[(2)]);var state_12895__$1 = state_12895;var statearr_12935_13006 = state_12895__$1;(statearr_12935_13006[(2)] = inst_12879);
(statearr_12935_13006[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (44)))
{var inst_12888 = (state_12895[(2)]);var state_12895__$1 = (function (){var statearr_12936 = state_12895;(statearr_12936[(28)] = inst_12888);
return statearr_12936;
})();var statearr_12937_13007 = state_12895__$1;(statearr_12937_13007[(2)] = null);
(statearr_12937_13007[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (6)))
{var inst_12827 = (state_12895[(29)]);var inst_12826 = cljs.core.deref.call(null,cs);var inst_12827__$1 = cljs.core.keys.call(null,inst_12826);var inst_12828 = cljs.core.count.call(null,inst_12827__$1);var inst_12829 = cljs.core.reset_BANG_.call(null,dctr,inst_12828);var inst_12834 = cljs.core.seq.call(null,inst_12827__$1);var inst_12835 = inst_12834;var inst_12836 = null;var inst_12837 = (0);var inst_12838 = (0);var state_12895__$1 = (function (){var statearr_12938 = state_12895;(statearr_12938[(9)] = inst_12836);
(statearr_12938[(29)] = inst_12827__$1);
(statearr_12938[(10)] = inst_12838);
(statearr_12938[(20)] = inst_12837);
(statearr_12938[(21)] = inst_12835);
(statearr_12938[(30)] = inst_12829);
return statearr_12938;
})();var statearr_12939_13008 = state_12895__$1;(statearr_12939_13008[(2)] = null);
(statearr_12939_13008[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (28)))
{var inst_12854 = (state_12895[(25)]);var inst_12835 = (state_12895[(21)]);var inst_12854__$1 = cljs.core.seq.call(null,inst_12835);var state_12895__$1 = (function (){var statearr_12940 = state_12895;(statearr_12940[(25)] = inst_12854__$1);
return statearr_12940;
})();if(inst_12854__$1)
{var statearr_12941_13009 = state_12895__$1;(statearr_12941_13009[(1)] = (33));
} else
{var statearr_12942_13010 = state_12895__$1;(statearr_12942_13010[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (25)))
{var inst_12838 = (state_12895[(10)]);var inst_12837 = (state_12895[(20)]);var inst_12840 = (inst_12838 < inst_12837);var inst_12841 = inst_12840;var state_12895__$1 = state_12895;if(cljs.core.truth_(inst_12841))
{var statearr_12943_13011 = state_12895__$1;(statearr_12943_13011[(1)] = (27));
} else
{var statearr_12944_13012 = state_12895__$1;(statearr_12944_13012[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (34)))
{var state_12895__$1 = state_12895;var statearr_12945_13013 = state_12895__$1;(statearr_12945_13013[(2)] = null);
(statearr_12945_13013[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (17)))
{var state_12895__$1 = state_12895;var statearr_12946_13014 = state_12895__$1;(statearr_12946_13014[(2)] = null);
(statearr_12946_13014[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (3)))
{var inst_12893 = (state_12895[(2)]);var state_12895__$1 = state_12895;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12895__$1,inst_12893);
} else
{if((state_val_12896 === (12)))
{var inst_12822 = (state_12895[(2)]);var state_12895__$1 = state_12895;var statearr_12947_13015 = state_12895__$1;(statearr_12947_13015[(2)] = inst_12822);
(statearr_12947_13015[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (2)))
{var state_12895__$1 = state_12895;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12895__$1,(4),ch);
} else
{if((state_val_12896 === (23)))
{var state_12895__$1 = state_12895;var statearr_12948_13016 = state_12895__$1;(statearr_12948_13016[(2)] = null);
(statearr_12948_13016[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (35)))
{var inst_12877 = (state_12895[(2)]);var state_12895__$1 = state_12895;var statearr_12949_13017 = state_12895__$1;(statearr_12949_13017[(2)] = inst_12877);
(statearr_12949_13017[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (19)))
{var inst_12796 = (state_12895[(7)]);var inst_12800 = cljs.core.chunk_first.call(null,inst_12796);var inst_12801 = cljs.core.chunk_rest.call(null,inst_12796);var inst_12802 = cljs.core.count.call(null,inst_12800);var inst_12776 = inst_12801;var inst_12777 = inst_12800;var inst_12778 = inst_12802;var inst_12779 = (0);var state_12895__$1 = (function (){var statearr_12950 = state_12895;(statearr_12950[(13)] = inst_12777);
(statearr_12950[(15)] = inst_12778);
(statearr_12950[(16)] = inst_12776);
(statearr_12950[(17)] = inst_12779);
return statearr_12950;
})();var statearr_12951_13018 = state_12895__$1;(statearr_12951_13018[(2)] = null);
(statearr_12951_13018[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (11)))
{var inst_12796 = (state_12895[(7)]);var inst_12776 = (state_12895[(16)]);var inst_12796__$1 = cljs.core.seq.call(null,inst_12776);var state_12895__$1 = (function (){var statearr_12952 = state_12895;(statearr_12952[(7)] = inst_12796__$1);
return statearr_12952;
})();if(inst_12796__$1)
{var statearr_12953_13019 = state_12895__$1;(statearr_12953_13019[(1)] = (16));
} else
{var statearr_12954_13020 = state_12895__$1;(statearr_12954_13020[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (9)))
{var inst_12824 = (state_12895[(2)]);var state_12895__$1 = state_12895;var statearr_12955_13021 = state_12895__$1;(statearr_12955_13021[(2)] = inst_12824);
(statearr_12955_13021[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (5)))
{var inst_12774 = cljs.core.deref.call(null,cs);var inst_12775 = cljs.core.seq.call(null,inst_12774);var inst_12776 = inst_12775;var inst_12777 = null;var inst_12778 = (0);var inst_12779 = (0);var state_12895__$1 = (function (){var statearr_12956 = state_12895;(statearr_12956[(13)] = inst_12777);
(statearr_12956[(15)] = inst_12778);
(statearr_12956[(16)] = inst_12776);
(statearr_12956[(17)] = inst_12779);
return statearr_12956;
})();var statearr_12957_13022 = state_12895__$1;(statearr_12957_13022[(2)] = null);
(statearr_12957_13022[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (14)))
{var state_12895__$1 = state_12895;var statearr_12958_13023 = state_12895__$1;(statearr_12958_13023[(2)] = null);
(statearr_12958_13023[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (45)))
{var inst_12885 = (state_12895[(2)]);var state_12895__$1 = state_12895;var statearr_12959_13024 = state_12895__$1;(statearr_12959_13024[(2)] = inst_12885);
(statearr_12959_13024[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (26)))
{var inst_12827 = (state_12895[(29)]);var inst_12881 = (state_12895[(2)]);var inst_12882 = cljs.core.seq.call(null,inst_12827);var state_12895__$1 = (function (){var statearr_12960 = state_12895;(statearr_12960[(31)] = inst_12881);
return statearr_12960;
})();if(inst_12882)
{var statearr_12961_13025 = state_12895__$1;(statearr_12961_13025[(1)] = (42));
} else
{var statearr_12962_13026 = state_12895__$1;(statearr_12962_13026[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (16)))
{var inst_12796 = (state_12895[(7)]);var inst_12798 = cljs.core.chunked_seq_QMARK_.call(null,inst_12796);var state_12895__$1 = state_12895;if(inst_12798)
{var statearr_12963_13027 = state_12895__$1;(statearr_12963_13027[(1)] = (19));
} else
{var statearr_12964_13028 = state_12895__$1;(statearr_12964_13028[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (38)))
{var inst_12874 = (state_12895[(2)]);var state_12895__$1 = state_12895;var statearr_12965_13029 = state_12895__$1;(statearr_12965_13029[(2)] = inst_12874);
(statearr_12965_13029[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (30)))
{var state_12895__$1 = state_12895;var statearr_12966_13030 = state_12895__$1;(statearr_12966_13030[(2)] = null);
(statearr_12966_13030[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (10)))
{var inst_12777 = (state_12895[(13)]);var inst_12779 = (state_12895[(17)]);var inst_12785 = cljs.core._nth.call(null,inst_12777,inst_12779);var inst_12786 = cljs.core.nth.call(null,inst_12785,(0),null);var inst_12787 = cljs.core.nth.call(null,inst_12785,(1),null);var state_12895__$1 = (function (){var statearr_12967 = state_12895;(statearr_12967[(26)] = inst_12786);
return statearr_12967;
})();if(cljs.core.truth_(inst_12787))
{var statearr_12968_13031 = state_12895__$1;(statearr_12968_13031[(1)] = (13));
} else
{var statearr_12969_13032 = state_12895__$1;(statearr_12969_13032[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (18)))
{var inst_12820 = (state_12895[(2)]);var state_12895__$1 = state_12895;var statearr_12970_13033 = state_12895__$1;(statearr_12970_13033[(2)] = inst_12820);
(statearr_12970_13033[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (42)))
{var state_12895__$1 = state_12895;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12895__$1,(45),dchan);
} else
{if((state_val_12896 === (37)))
{var inst_12854 = (state_12895[(25)]);var inst_12767 = (state_12895[(12)]);var inst_12863 = (state_12895[(23)]);var inst_12863__$1 = cljs.core.first.call(null,inst_12854);var inst_12864 = cljs.core.async.put_BANG_.call(null,inst_12863__$1,inst_12767,done);var state_12895__$1 = (function (){var statearr_12971 = state_12895;(statearr_12971[(23)] = inst_12863__$1);
return statearr_12971;
})();if(cljs.core.truth_(inst_12864))
{var statearr_12972_13034 = state_12895__$1;(statearr_12972_13034[(1)] = (39));
} else
{var statearr_12973_13035 = state_12895__$1;(statearr_12973_13035[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12896 === (8)))
{var inst_12778 = (state_12895[(15)]);var inst_12779 = (state_12895[(17)]);var inst_12781 = (inst_12779 < inst_12778);var inst_12782 = inst_12781;var state_12895__$1 = state_12895;if(cljs.core.truth_(inst_12782))
{var statearr_12974_13036 = state_12895__$1;(statearr_12974_13036[(1)] = (10));
} else
{var statearr_12975_13037 = state_12895__$1;(statearr_12975_13037[(1)] = (11));
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
});})(c__5906__auto___12983,cs,m,dchan,dctr,done))
;return ((function (switch__5891__auto__,c__5906__auto___12983,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_12979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12979[(0)] = state_machine__5892__auto__);
(statearr_12979[(1)] = (1));
return statearr_12979;
});
var state_machine__5892__auto____1 = (function (state_12895){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_12895);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e12980){if((e12980 instanceof Object))
{var ex__5895__auto__ = e12980;var statearr_12981_13038 = state_12895;(statearr_12981_13038[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12895);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12980;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13039 = state_12895;
state_12895 = G__13039;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_12895){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_12895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto___12983,cs,m,dchan,dctr,done))
})();var state__5908__auto__ = (function (){var statearr_12982 = f__5907__auto__.call(null);(statearr_12982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto___12983);
return statearr_12982;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto___12983,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj13041 = {};return obj13041;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t13161 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13161 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13162){
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
this.meta13162 = meta13162;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13161.cljs$lang$type = true;
cljs.core.async.t13161.cljs$lang$ctorStr = "cljs.core.async/t13161";
cljs.core.async.t13161.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t13161");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13161.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13161.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13161.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13161.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13161.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13161.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13161.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13161.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13161.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13163){var self__ = this;
var _13163__$1 = this;return self__.meta13162;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13163,meta13162__$1){var self__ = this;
var _13163__$1 = this;return (new cljs.core.async.t13161(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13162__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13161 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13161(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13162){return (new cljs.core.async.t13161(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13162));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13161(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5906__auto___13280 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto___13280,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto___13280,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13233){var state_val_13234 = (state_13233[(1)]);if((state_val_13234 === (7)))
{var inst_13177 = (state_13233[(7)]);var inst_13182 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13177);var state_13233__$1 = state_13233;var statearr_13235_13281 = state_13233__$1;(statearr_13235_13281[(2)] = inst_13182);
(statearr_13235_13281[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13234 === (20)))
{var inst_13192 = (state_13233[(8)]);var state_13233__$1 = state_13233;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13233__$1,(23),out,inst_13192);
} else
{if((state_val_13234 === (1)))
{var inst_13167 = (state_13233[(9)]);var inst_13167__$1 = calc_state.call(null);var inst_13168 = cljs.core.seq_QMARK_.call(null,inst_13167__$1);var state_13233__$1 = (function (){var statearr_13236 = state_13233;(statearr_13236[(9)] = inst_13167__$1);
return statearr_13236;
})();if(inst_13168)
{var statearr_13237_13282 = state_13233__$1;(statearr_13237_13282[(1)] = (2));
} else
{var statearr_13238_13283 = state_13233__$1;(statearr_13238_13283[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13234 === (24)))
{var inst_13185 = (state_13233[(10)]);var inst_13177 = inst_13185;var state_13233__$1 = (function (){var statearr_13239 = state_13233;(statearr_13239[(7)] = inst_13177);
return statearr_13239;
})();var statearr_13240_13284 = state_13233__$1;(statearr_13240_13284[(2)] = null);
(statearr_13240_13284[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13234 === (4)))
{var inst_13167 = (state_13233[(9)]);var inst_13173 = (state_13233[(2)]);var inst_13174 = cljs.core.get.call(null,inst_13173,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13175 = cljs.core.get.call(null,inst_13173,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13176 = cljs.core.get.call(null,inst_13173,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_13177 = inst_13167;var state_13233__$1 = (function (){var statearr_13241 = state_13233;(statearr_13241[(11)] = inst_13176);
(statearr_13241[(12)] = inst_13174);
(statearr_13241[(13)] = inst_13175);
(statearr_13241[(7)] = inst_13177);
return statearr_13241;
})();var statearr_13242_13285 = state_13233__$1;(statearr_13242_13285[(2)] = null);
(statearr_13242_13285[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13234 === (15)))
{var state_13233__$1 = state_13233;var statearr_13243_13286 = state_13233__$1;(statearr_13243_13286[(2)] = null);
(statearr_13243_13286[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13234 === (21)))
{var inst_13185 = (state_13233[(10)]);var inst_13177 = inst_13185;var state_13233__$1 = (function (){var statearr_13244 = state_13233;(statearr_13244[(7)] = inst_13177);
return statearr_13244;
})();var statearr_13245_13287 = state_13233__$1;(statearr_13245_13287[(2)] = null);
(statearr_13245_13287[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13234 === (13)))
{var inst_13229 = (state_13233[(2)]);var state_13233__$1 = state_13233;var statearr_13246_13288 = state_13233__$1;(statearr_13246_13288[(2)] = inst_13229);
(statearr_13246_13288[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13234 === (22)))
{var inst_13227 = (state_13233[(2)]);var state_13233__$1 = state_13233;var statearr_13247_13289 = state_13233__$1;(statearr_13247_13289[(2)] = inst_13227);
(statearr_13247_13289[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13234 === (6)))
{var inst_13231 = (state_13233[(2)]);var state_13233__$1 = state_13233;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13233__$1,inst_13231);
} else
{if((state_val_13234 === (25)))
{var state_13233__$1 = state_13233;var statearr_13248_13290 = state_13233__$1;(statearr_13248_13290[(2)] = null);
(statearr_13248_13290[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13234 === (17)))
{var inst_13207 = (state_13233[(14)]);var state_13233__$1 = state_13233;var statearr_13249_13291 = state_13233__$1;(statearr_13249_13291[(2)] = inst_13207);
(statearr_13249_13291[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13234 === (3)))
{var inst_13167 = (state_13233[(9)]);var state_13233__$1 = state_13233;var statearr_13250_13292 = state_13233__$1;(statearr_13250_13292[(2)] = inst_13167);
(statearr_13250_13292[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13234 === (12)))
{var inst_13188 = (state_13233[(15)]);var inst_13193 = (state_13233[(16)]);var inst_13207 = (state_13233[(14)]);var inst_13207__$1 = inst_13188.call(null,inst_13193);var state_13233__$1 = (function (){var statearr_13251 = state_13233;(statearr_13251[(14)] = inst_13207__$1);
return statearr_13251;
})();if(cljs.core.truth_(inst_13207__$1))
{var statearr_13252_13293 = state_13233__$1;(statearr_13252_13293[(1)] = (17));
} else
{var statearr_13253_13294 = state_13233__$1;(statearr_13253_13294[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13234 === (2)))
{var inst_13167 = (state_13233[(9)]);var inst_13170 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13167);var state_13233__$1 = state_13233;var statearr_13254_13295 = state_13233__$1;(statearr_13254_13295[(2)] = inst_13170);
(statearr_13254_13295[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13234 === (23)))
{var inst_13218 = (state_13233[(2)]);var state_13233__$1 = state_13233;if(cljs.core.truth_(inst_13218))
{var statearr_13255_13296 = state_13233__$1;(statearr_13255_13296[(1)] = (24));
} else
{var statearr_13256_13297 = state_13233__$1;(statearr_13256_13297[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13234 === (19)))
{var inst_13215 = (state_13233[(2)]);var state_13233__$1 = state_13233;if(cljs.core.truth_(inst_13215))
{var statearr_13257_13298 = state_13233__$1;(statearr_13257_13298[(1)] = (20));
} else
{var statearr_13258_13299 = state_13233__$1;(statearr_13258_13299[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13234 === (11)))
{var inst_13192 = (state_13233[(8)]);var inst_13198 = (inst_13192 == null);var state_13233__$1 = state_13233;if(cljs.core.truth_(inst_13198))
{var statearr_13259_13300 = state_13233__$1;(statearr_13259_13300[(1)] = (14));
} else
{var statearr_13260_13301 = state_13233__$1;(statearr_13260_13301[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13234 === (9)))
{var inst_13185 = (state_13233[(10)]);var inst_13185__$1 = (state_13233[(2)]);var inst_13186 = cljs.core.get.call(null,inst_13185__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13187 = cljs.core.get.call(null,inst_13185__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13188 = cljs.core.get.call(null,inst_13185__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_13233__$1 = (function (){var statearr_13261 = state_13233;(statearr_13261[(10)] = inst_13185__$1);
(statearr_13261[(15)] = inst_13188);
(statearr_13261[(17)] = inst_13187);
return statearr_13261;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13233__$1,(10),inst_13186);
} else
{if((state_val_13234 === (5)))
{var inst_13177 = (state_13233[(7)]);var inst_13180 = cljs.core.seq_QMARK_.call(null,inst_13177);var state_13233__$1 = state_13233;if(inst_13180)
{var statearr_13262_13302 = state_13233__$1;(statearr_13262_13302[(1)] = (7));
} else
{var statearr_13263_13303 = state_13233__$1;(statearr_13263_13303[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13234 === (14)))
{var inst_13193 = (state_13233[(16)]);var inst_13200 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13193);var state_13233__$1 = state_13233;var statearr_13264_13304 = state_13233__$1;(statearr_13264_13304[(2)] = inst_13200);
(statearr_13264_13304[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13234 === (26)))
{var inst_13223 = (state_13233[(2)]);var state_13233__$1 = state_13233;var statearr_13265_13305 = state_13233__$1;(statearr_13265_13305[(2)] = inst_13223);
(statearr_13265_13305[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13234 === (16)))
{var inst_13203 = (state_13233[(2)]);var inst_13204 = calc_state.call(null);var inst_13177 = inst_13204;var state_13233__$1 = (function (){var statearr_13266 = state_13233;(statearr_13266[(18)] = inst_13203);
(statearr_13266[(7)] = inst_13177);
return statearr_13266;
})();var statearr_13267_13306 = state_13233__$1;(statearr_13267_13306[(2)] = null);
(statearr_13267_13306[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13234 === (10)))
{var inst_13192 = (state_13233[(8)]);var inst_13193 = (state_13233[(16)]);var inst_13191 = (state_13233[(2)]);var inst_13192__$1 = cljs.core.nth.call(null,inst_13191,(0),null);var inst_13193__$1 = cljs.core.nth.call(null,inst_13191,(1),null);var inst_13194 = (inst_13192__$1 == null);var inst_13195 = cljs.core._EQ_.call(null,inst_13193__$1,change);var inst_13196 = (inst_13194) || (inst_13195);var state_13233__$1 = (function (){var statearr_13268 = state_13233;(statearr_13268[(8)] = inst_13192__$1);
(statearr_13268[(16)] = inst_13193__$1);
return statearr_13268;
})();if(cljs.core.truth_(inst_13196))
{var statearr_13269_13307 = state_13233__$1;(statearr_13269_13307[(1)] = (11));
} else
{var statearr_13270_13308 = state_13233__$1;(statearr_13270_13308[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13234 === (18)))
{var inst_13188 = (state_13233[(15)]);var inst_13187 = (state_13233[(17)]);var inst_13193 = (state_13233[(16)]);var inst_13210 = cljs.core.empty_QMARK_.call(null,inst_13188);var inst_13211 = inst_13187.call(null,inst_13193);var inst_13212 = cljs.core.not.call(null,inst_13211);var inst_13213 = (inst_13210) && (inst_13212);var state_13233__$1 = state_13233;var statearr_13271_13309 = state_13233__$1;(statearr_13271_13309[(2)] = inst_13213);
(statearr_13271_13309[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13234 === (8)))
{var inst_13177 = (state_13233[(7)]);var state_13233__$1 = state_13233;var statearr_13272_13310 = state_13233__$1;(statearr_13272_13310[(2)] = inst_13177);
(statearr_13272_13310[(1)] = (9));
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
});})(c__5906__auto___13280,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5891__auto__,c__5906__auto___13280,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_13276 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13276[(0)] = state_machine__5892__auto__);
(statearr_13276[(1)] = (1));
return statearr_13276;
});
var state_machine__5892__auto____1 = (function (state_13233){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_13233);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e13277){if((e13277 instanceof Object))
{var ex__5895__auto__ = e13277;var statearr_13278_13311 = state_13233;(statearr_13278_13311[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13233);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13277;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13312 = state_13233;
state_13233 = G__13312;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_13233){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_13233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto___13280,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5908__auto__ = (function (){var statearr_13279 = f__5907__auto__.call(null);(statearr_13279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto___13280);
return statearr_13279;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto___13280,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj13314 = {};return obj13314;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
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
return (function (topic){var or__3553__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3553__auto__,mults){
return (function (p1__13315_SHARP_){if(cljs.core.truth_(p1__13315_SHARP_.call(null,topic)))
{return p1__13315_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13315_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3553__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13438 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13438 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13439){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13439 = meta13439;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13438.cljs$lang$type = true;
cljs.core.async.t13438.cljs$lang$ctorStr = "cljs.core.async/t13438";
cljs.core.async.t13438.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t13438");
});})(mults,ensure_mult))
;
cljs.core.async.t13438.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13438.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13438.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13438.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13438.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13438.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13438.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13438.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13440){var self__ = this;
var _13440__$1 = this;return self__.meta13439;
});})(mults,ensure_mult))
;
cljs.core.async.t13438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13440,meta13439__$1){var self__ = this;
var _13440__$1 = this;return (new cljs.core.async.t13438(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13439__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13438 = ((function (mults,ensure_mult){
return (function __GT_t13438(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13439){return (new cljs.core.async.t13438(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13439));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13438(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5906__auto___13560 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto___13560,mults,ensure_mult,p){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto___13560,mults,ensure_mult,p){
return (function (state_13512){var state_val_13513 = (state_13512[(1)]);if((state_val_13513 === (7)))
{var inst_13508 = (state_13512[(2)]);var state_13512__$1 = state_13512;var statearr_13514_13561 = state_13512__$1;(statearr_13514_13561[(2)] = inst_13508);
(statearr_13514_13561[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13513 === (20)))
{var state_13512__$1 = state_13512;var statearr_13515_13562 = state_13512__$1;(statearr_13515_13562[(2)] = null);
(statearr_13515_13562[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13513 === (1)))
{var state_13512__$1 = state_13512;var statearr_13516_13563 = state_13512__$1;(statearr_13516_13563[(2)] = null);
(statearr_13516_13563[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13513 === (24)))
{var inst_13491 = (state_13512[(7)]);var inst_13500 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13491);var state_13512__$1 = state_13512;var statearr_13517_13564 = state_13512__$1;(statearr_13517_13564[(2)] = inst_13500);
(statearr_13517_13564[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13513 === (4)))
{var inst_13443 = (state_13512[(8)]);var inst_13443__$1 = (state_13512[(2)]);var inst_13444 = (inst_13443__$1 == null);var state_13512__$1 = (function (){var statearr_13518 = state_13512;(statearr_13518[(8)] = inst_13443__$1);
return statearr_13518;
})();if(cljs.core.truth_(inst_13444))
{var statearr_13519_13565 = state_13512__$1;(statearr_13519_13565[(1)] = (5));
} else
{var statearr_13520_13566 = state_13512__$1;(statearr_13520_13566[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13513 === (15)))
{var inst_13485 = (state_13512[(2)]);var state_13512__$1 = state_13512;var statearr_13521_13567 = state_13512__$1;(statearr_13521_13567[(2)] = inst_13485);
(statearr_13521_13567[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13513 === (21)))
{var inst_13505 = (state_13512[(2)]);var state_13512__$1 = (function (){var statearr_13522 = state_13512;(statearr_13522[(9)] = inst_13505);
return statearr_13522;
})();var statearr_13523_13568 = state_13512__$1;(statearr_13523_13568[(2)] = null);
(statearr_13523_13568[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13513 === (13)))
{var inst_13467 = (state_13512[(10)]);var inst_13469 = cljs.core.chunked_seq_QMARK_.call(null,inst_13467);var state_13512__$1 = state_13512;if(inst_13469)
{var statearr_13524_13569 = state_13512__$1;(statearr_13524_13569[(1)] = (16));
} else
{var statearr_13525_13570 = state_13512__$1;(statearr_13525_13570[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13513 === (22)))
{var inst_13497 = (state_13512[(2)]);var state_13512__$1 = state_13512;if(cljs.core.truth_(inst_13497))
{var statearr_13526_13571 = state_13512__$1;(statearr_13526_13571[(1)] = (23));
} else
{var statearr_13527_13572 = state_13512__$1;(statearr_13527_13572[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13513 === (6)))
{var inst_13493 = (state_13512[(11)]);var inst_13443 = (state_13512[(8)]);var inst_13491 = (state_13512[(7)]);var inst_13491__$1 = topic_fn.call(null,inst_13443);var inst_13492 = cljs.core.deref.call(null,mults);var inst_13493__$1 = cljs.core.get.call(null,inst_13492,inst_13491__$1);var state_13512__$1 = (function (){var statearr_13528 = state_13512;(statearr_13528[(11)] = inst_13493__$1);
(statearr_13528[(7)] = inst_13491__$1);
return statearr_13528;
})();if(cljs.core.truth_(inst_13493__$1))
{var statearr_13529_13573 = state_13512__$1;(statearr_13529_13573[(1)] = (19));
} else
{var statearr_13530_13574 = state_13512__$1;(statearr_13530_13574[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13513 === (25)))
{var inst_13502 = (state_13512[(2)]);var state_13512__$1 = state_13512;var statearr_13531_13575 = state_13512__$1;(statearr_13531_13575[(2)] = inst_13502);
(statearr_13531_13575[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13513 === (17)))
{var inst_13467 = (state_13512[(10)]);var inst_13476 = cljs.core.first.call(null,inst_13467);var inst_13477 = cljs.core.async.muxch_STAR_.call(null,inst_13476);var inst_13478 = cljs.core.async.close_BANG_.call(null,inst_13477);var inst_13479 = cljs.core.next.call(null,inst_13467);var inst_13453 = inst_13479;var inst_13454 = null;var inst_13455 = (0);var inst_13456 = (0);var state_13512__$1 = (function (){var statearr_13532 = state_13512;(statearr_13532[(12)] = inst_13456);
(statearr_13532[(13)] = inst_13454);
(statearr_13532[(14)] = inst_13455);
(statearr_13532[(15)] = inst_13453);
(statearr_13532[(16)] = inst_13478);
return statearr_13532;
})();var statearr_13533_13576 = state_13512__$1;(statearr_13533_13576[(2)] = null);
(statearr_13533_13576[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13513 === (3)))
{var inst_13510 = (state_13512[(2)]);var state_13512__$1 = state_13512;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13512__$1,inst_13510);
} else
{if((state_val_13513 === (12)))
{var inst_13487 = (state_13512[(2)]);var state_13512__$1 = state_13512;var statearr_13534_13577 = state_13512__$1;(statearr_13534_13577[(2)] = inst_13487);
(statearr_13534_13577[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13513 === (2)))
{var state_13512__$1 = state_13512;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13512__$1,(4),ch);
} else
{if((state_val_13513 === (23)))
{var state_13512__$1 = state_13512;var statearr_13535_13578 = state_13512__$1;(statearr_13535_13578[(2)] = null);
(statearr_13535_13578[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13513 === (19)))
{var inst_13493 = (state_13512[(11)]);var inst_13443 = (state_13512[(8)]);var inst_13495 = cljs.core.async.muxch_STAR_.call(null,inst_13493);var state_13512__$1 = state_13512;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13512__$1,(22),inst_13495,inst_13443);
} else
{if((state_val_13513 === (11)))
{var inst_13453 = (state_13512[(15)]);var inst_13467 = (state_13512[(10)]);var inst_13467__$1 = cljs.core.seq.call(null,inst_13453);var state_13512__$1 = (function (){var statearr_13536 = state_13512;(statearr_13536[(10)] = inst_13467__$1);
return statearr_13536;
})();if(inst_13467__$1)
{var statearr_13537_13579 = state_13512__$1;(statearr_13537_13579[(1)] = (13));
} else
{var statearr_13538_13580 = state_13512__$1;(statearr_13538_13580[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13513 === (9)))
{var inst_13489 = (state_13512[(2)]);var state_13512__$1 = state_13512;var statearr_13539_13581 = state_13512__$1;(statearr_13539_13581[(2)] = inst_13489);
(statearr_13539_13581[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13513 === (5)))
{var inst_13450 = cljs.core.deref.call(null,mults);var inst_13451 = cljs.core.vals.call(null,inst_13450);var inst_13452 = cljs.core.seq.call(null,inst_13451);var inst_13453 = inst_13452;var inst_13454 = null;var inst_13455 = (0);var inst_13456 = (0);var state_13512__$1 = (function (){var statearr_13540 = state_13512;(statearr_13540[(12)] = inst_13456);
(statearr_13540[(13)] = inst_13454);
(statearr_13540[(14)] = inst_13455);
(statearr_13540[(15)] = inst_13453);
return statearr_13540;
})();var statearr_13541_13582 = state_13512__$1;(statearr_13541_13582[(2)] = null);
(statearr_13541_13582[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13513 === (14)))
{var state_13512__$1 = state_13512;var statearr_13545_13583 = state_13512__$1;(statearr_13545_13583[(2)] = null);
(statearr_13545_13583[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13513 === (16)))
{var inst_13467 = (state_13512[(10)]);var inst_13471 = cljs.core.chunk_first.call(null,inst_13467);var inst_13472 = cljs.core.chunk_rest.call(null,inst_13467);var inst_13473 = cljs.core.count.call(null,inst_13471);var inst_13453 = inst_13472;var inst_13454 = inst_13471;var inst_13455 = inst_13473;var inst_13456 = (0);var state_13512__$1 = (function (){var statearr_13546 = state_13512;(statearr_13546[(12)] = inst_13456);
(statearr_13546[(13)] = inst_13454);
(statearr_13546[(14)] = inst_13455);
(statearr_13546[(15)] = inst_13453);
return statearr_13546;
})();var statearr_13547_13584 = state_13512__$1;(statearr_13547_13584[(2)] = null);
(statearr_13547_13584[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13513 === (10)))
{var inst_13456 = (state_13512[(12)]);var inst_13454 = (state_13512[(13)]);var inst_13455 = (state_13512[(14)]);var inst_13453 = (state_13512[(15)]);var inst_13461 = cljs.core._nth.call(null,inst_13454,inst_13456);var inst_13462 = cljs.core.async.muxch_STAR_.call(null,inst_13461);var inst_13463 = cljs.core.async.close_BANG_.call(null,inst_13462);var inst_13464 = (inst_13456 + (1));var tmp13542 = inst_13454;var tmp13543 = inst_13455;var tmp13544 = inst_13453;var inst_13453__$1 = tmp13544;var inst_13454__$1 = tmp13542;var inst_13455__$1 = tmp13543;var inst_13456__$1 = inst_13464;var state_13512__$1 = (function (){var statearr_13548 = state_13512;(statearr_13548[(12)] = inst_13456__$1);
(statearr_13548[(13)] = inst_13454__$1);
(statearr_13548[(17)] = inst_13463);
(statearr_13548[(14)] = inst_13455__$1);
(statearr_13548[(15)] = inst_13453__$1);
return statearr_13548;
})();var statearr_13549_13585 = state_13512__$1;(statearr_13549_13585[(2)] = null);
(statearr_13549_13585[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13513 === (18)))
{var inst_13482 = (state_13512[(2)]);var state_13512__$1 = state_13512;var statearr_13550_13586 = state_13512__$1;(statearr_13550_13586[(2)] = inst_13482);
(statearr_13550_13586[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13513 === (8)))
{var inst_13456 = (state_13512[(12)]);var inst_13455 = (state_13512[(14)]);var inst_13458 = (inst_13456 < inst_13455);var inst_13459 = inst_13458;var state_13512__$1 = state_13512;if(cljs.core.truth_(inst_13459))
{var statearr_13551_13587 = state_13512__$1;(statearr_13551_13587[(1)] = (10));
} else
{var statearr_13552_13588 = state_13512__$1;(statearr_13552_13588[(1)] = (11));
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
});})(c__5906__auto___13560,mults,ensure_mult,p))
;return ((function (switch__5891__auto__,c__5906__auto___13560,mults,ensure_mult,p){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_13556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13556[(0)] = state_machine__5892__auto__);
(statearr_13556[(1)] = (1));
return statearr_13556;
});
var state_machine__5892__auto____1 = (function (state_13512){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_13512);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e13557){if((e13557 instanceof Object))
{var ex__5895__auto__ = e13557;var statearr_13558_13589 = state_13512;(statearr_13558_13589[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13512);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13557;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13590 = state_13512;
state_13512 = G__13590;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_13512){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_13512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto___13560,mults,ensure_mult,p))
})();var state__5908__auto__ = (function (){var statearr_13559 = f__5907__auto__.call(null);(statearr_13559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto___13560);
return statearr_13559;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto___13560,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5906__auto___13727 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto___13727,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto___13727,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13697){var state_val_13698 = (state_13697[(1)]);if((state_val_13698 === (7)))
{var state_13697__$1 = state_13697;var statearr_13699_13728 = state_13697__$1;(statearr_13699_13728[(2)] = null);
(statearr_13699_13728[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13698 === (1)))
{var state_13697__$1 = state_13697;var statearr_13700_13729 = state_13697__$1;(statearr_13700_13729[(2)] = null);
(statearr_13700_13729[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13698 === (4)))
{var inst_13661 = (state_13697[(7)]);var inst_13663 = (inst_13661 < cnt);var state_13697__$1 = state_13697;if(cljs.core.truth_(inst_13663))
{var statearr_13701_13730 = state_13697__$1;(statearr_13701_13730[(1)] = (6));
} else
{var statearr_13702_13731 = state_13697__$1;(statearr_13702_13731[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13698 === (15)))
{var inst_13693 = (state_13697[(2)]);var state_13697__$1 = state_13697;var statearr_13703_13732 = state_13697__$1;(statearr_13703_13732[(2)] = inst_13693);
(statearr_13703_13732[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13698 === (13)))
{var inst_13686 = cljs.core.async.close_BANG_.call(null,out);var state_13697__$1 = state_13697;var statearr_13704_13733 = state_13697__$1;(statearr_13704_13733[(2)] = inst_13686);
(statearr_13704_13733[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13698 === (6)))
{var state_13697__$1 = state_13697;var statearr_13705_13734 = state_13697__$1;(statearr_13705_13734[(2)] = null);
(statearr_13705_13734[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13698 === (3)))
{var inst_13695 = (state_13697[(2)]);var state_13697__$1 = state_13697;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13697__$1,inst_13695);
} else
{if((state_val_13698 === (12)))
{var inst_13683 = (state_13697[(8)]);var inst_13683__$1 = (state_13697[(2)]);var inst_13684 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13683__$1);var state_13697__$1 = (function (){var statearr_13706 = state_13697;(statearr_13706[(8)] = inst_13683__$1);
return statearr_13706;
})();if(cljs.core.truth_(inst_13684))
{var statearr_13707_13735 = state_13697__$1;(statearr_13707_13735[(1)] = (13));
} else
{var statearr_13708_13736 = state_13697__$1;(statearr_13708_13736[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13698 === (2)))
{var inst_13660 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13661 = (0);var state_13697__$1 = (function (){var statearr_13709 = state_13697;(statearr_13709[(9)] = inst_13660);
(statearr_13709[(7)] = inst_13661);
return statearr_13709;
})();var statearr_13710_13737 = state_13697__$1;(statearr_13710_13737[(2)] = null);
(statearr_13710_13737[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13698 === (11)))
{var inst_13661 = (state_13697[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13697,(10),Object,null,(9));var inst_13670 = chs__$1.call(null,inst_13661);var inst_13671 = done.call(null,inst_13661);var inst_13672 = cljs.core.async.take_BANG_.call(null,inst_13670,inst_13671);var state_13697__$1 = state_13697;var statearr_13711_13738 = state_13697__$1;(statearr_13711_13738[(2)] = inst_13672);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13697__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13698 === (9)))
{var inst_13661 = (state_13697[(7)]);var inst_13674 = (state_13697[(2)]);var inst_13675 = (inst_13661 + (1));var inst_13661__$1 = inst_13675;var state_13697__$1 = (function (){var statearr_13712 = state_13697;(statearr_13712[(10)] = inst_13674);
(statearr_13712[(7)] = inst_13661__$1);
return statearr_13712;
})();var statearr_13713_13739 = state_13697__$1;(statearr_13713_13739[(2)] = null);
(statearr_13713_13739[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13698 === (5)))
{var inst_13681 = (state_13697[(2)]);var state_13697__$1 = (function (){var statearr_13714 = state_13697;(statearr_13714[(11)] = inst_13681);
return statearr_13714;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13697__$1,(12),dchan);
} else
{if((state_val_13698 === (14)))
{var inst_13683 = (state_13697[(8)]);var inst_13688 = cljs.core.apply.call(null,f,inst_13683);var state_13697__$1 = state_13697;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13697__$1,(16),out,inst_13688);
} else
{if((state_val_13698 === (16)))
{var inst_13690 = (state_13697[(2)]);var state_13697__$1 = (function (){var statearr_13715 = state_13697;(statearr_13715[(12)] = inst_13690);
return statearr_13715;
})();var statearr_13716_13740 = state_13697__$1;(statearr_13716_13740[(2)] = null);
(statearr_13716_13740[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13698 === (10)))
{var inst_13665 = (state_13697[(2)]);var inst_13666 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13697__$1 = (function (){var statearr_13717 = state_13697;(statearr_13717[(13)] = inst_13665);
return statearr_13717;
})();var statearr_13718_13741 = state_13697__$1;(statearr_13718_13741[(2)] = inst_13666);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13697__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13698 === (8)))
{var inst_13679 = (state_13697[(2)]);var state_13697__$1 = state_13697;var statearr_13719_13742 = state_13697__$1;(statearr_13719_13742[(2)] = inst_13679);
(statearr_13719_13742[(1)] = (5));
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
});})(c__5906__auto___13727,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5891__auto__,c__5906__auto___13727,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_13723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13723[(0)] = state_machine__5892__auto__);
(statearr_13723[(1)] = (1));
return statearr_13723;
});
var state_machine__5892__auto____1 = (function (state_13697){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_13697);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e13724){if((e13724 instanceof Object))
{var ex__5895__auto__ = e13724;var statearr_13725_13743 = state_13697;(statearr_13725_13743[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13697);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13724;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13744 = state_13697;
state_13697 = G__13744;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_13697){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_13697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto___13727,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5908__auto__ = (function (){var statearr_13726 = f__5907__auto__.call(null);(statearr_13726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto___13727);
return statearr_13726;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto___13727,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5906__auto___13852 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto___13852,out){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto___13852,out){
return (function (state_13828){var state_val_13829 = (state_13828[(1)]);if((state_val_13829 === (7)))
{var inst_13808 = (state_13828[(7)]);var inst_13807 = (state_13828[(8)]);var inst_13807__$1 = (state_13828[(2)]);var inst_13808__$1 = cljs.core.nth.call(null,inst_13807__$1,(0),null);var inst_13809 = cljs.core.nth.call(null,inst_13807__$1,(1),null);var inst_13810 = (inst_13808__$1 == null);var state_13828__$1 = (function (){var statearr_13830 = state_13828;(statearr_13830[(9)] = inst_13809);
(statearr_13830[(7)] = inst_13808__$1);
(statearr_13830[(8)] = inst_13807__$1);
return statearr_13830;
})();if(cljs.core.truth_(inst_13810))
{var statearr_13831_13853 = state_13828__$1;(statearr_13831_13853[(1)] = (8));
} else
{var statearr_13832_13854 = state_13828__$1;(statearr_13832_13854[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13829 === (1)))
{var inst_13799 = cljs.core.vec.call(null,chs);var inst_13800 = inst_13799;var state_13828__$1 = (function (){var statearr_13833 = state_13828;(statearr_13833[(10)] = inst_13800);
return statearr_13833;
})();var statearr_13834_13855 = state_13828__$1;(statearr_13834_13855[(2)] = null);
(statearr_13834_13855[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13829 === (4)))
{var inst_13800 = (state_13828[(10)]);var state_13828__$1 = state_13828;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13828__$1,(7),inst_13800);
} else
{if((state_val_13829 === (6)))
{var inst_13824 = (state_13828[(2)]);var state_13828__$1 = state_13828;var statearr_13835_13856 = state_13828__$1;(statearr_13835_13856[(2)] = inst_13824);
(statearr_13835_13856[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13829 === (3)))
{var inst_13826 = (state_13828[(2)]);var state_13828__$1 = state_13828;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13828__$1,inst_13826);
} else
{if((state_val_13829 === (2)))
{var inst_13800 = (state_13828[(10)]);var inst_13802 = cljs.core.count.call(null,inst_13800);var inst_13803 = (inst_13802 > (0));var state_13828__$1 = state_13828;if(cljs.core.truth_(inst_13803))
{var statearr_13837_13857 = state_13828__$1;(statearr_13837_13857[(1)] = (4));
} else
{var statearr_13838_13858 = state_13828__$1;(statearr_13838_13858[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13829 === (11)))
{var inst_13800 = (state_13828[(10)]);var inst_13817 = (state_13828[(2)]);var tmp13836 = inst_13800;var inst_13800__$1 = tmp13836;var state_13828__$1 = (function (){var statearr_13839 = state_13828;(statearr_13839[(11)] = inst_13817);
(statearr_13839[(10)] = inst_13800__$1);
return statearr_13839;
})();var statearr_13840_13859 = state_13828__$1;(statearr_13840_13859[(2)] = null);
(statearr_13840_13859[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13829 === (9)))
{var inst_13808 = (state_13828[(7)]);var state_13828__$1 = state_13828;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13828__$1,(11),out,inst_13808);
} else
{if((state_val_13829 === (5)))
{var inst_13822 = cljs.core.async.close_BANG_.call(null,out);var state_13828__$1 = state_13828;var statearr_13841_13860 = state_13828__$1;(statearr_13841_13860[(2)] = inst_13822);
(statearr_13841_13860[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13829 === (10)))
{var inst_13820 = (state_13828[(2)]);var state_13828__$1 = state_13828;var statearr_13842_13861 = state_13828__$1;(statearr_13842_13861[(2)] = inst_13820);
(statearr_13842_13861[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13829 === (8)))
{var inst_13809 = (state_13828[(9)]);var inst_13800 = (state_13828[(10)]);var inst_13808 = (state_13828[(7)]);var inst_13807 = (state_13828[(8)]);var inst_13812 = (function (){var c = inst_13809;var v = inst_13808;var vec__13805 = inst_13807;var cs = inst_13800;return ((function (c,v,vec__13805,cs,inst_13809,inst_13800,inst_13808,inst_13807,state_val_13829,c__5906__auto___13852,out){
return (function (p1__13745_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13745_SHARP_);
});
;})(c,v,vec__13805,cs,inst_13809,inst_13800,inst_13808,inst_13807,state_val_13829,c__5906__auto___13852,out))
})();var inst_13813 = cljs.core.filterv.call(null,inst_13812,inst_13800);var inst_13800__$1 = inst_13813;var state_13828__$1 = (function (){var statearr_13843 = state_13828;(statearr_13843[(10)] = inst_13800__$1);
return statearr_13843;
})();var statearr_13844_13862 = state_13828__$1;(statearr_13844_13862[(2)] = null);
(statearr_13844_13862[(1)] = (2));
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
});})(c__5906__auto___13852,out))
;return ((function (switch__5891__auto__,c__5906__auto___13852,out){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_13848 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13848[(0)] = state_machine__5892__auto__);
(statearr_13848[(1)] = (1));
return statearr_13848;
});
var state_machine__5892__auto____1 = (function (state_13828){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_13828);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e13849){if((e13849 instanceof Object))
{var ex__5895__auto__ = e13849;var statearr_13850_13863 = state_13828;(statearr_13850_13863[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13828);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13849;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13864 = state_13828;
state_13828 = G__13864;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_13828){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_13828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto___13852,out))
})();var state__5908__auto__ = (function (){var statearr_13851 = f__5907__auto__.call(null);(statearr_13851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto___13852);
return statearr_13851;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto___13852,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5906__auto___13957 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto___13957,out){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto___13957,out){
return (function (state_13934){var state_val_13935 = (state_13934[(1)]);if((state_val_13935 === (7)))
{var inst_13916 = (state_13934[(7)]);var inst_13916__$1 = (state_13934[(2)]);var inst_13917 = (inst_13916__$1 == null);var inst_13918 = cljs.core.not.call(null,inst_13917);var state_13934__$1 = (function (){var statearr_13936 = state_13934;(statearr_13936[(7)] = inst_13916__$1);
return statearr_13936;
})();if(inst_13918)
{var statearr_13937_13958 = state_13934__$1;(statearr_13937_13958[(1)] = (8));
} else
{var statearr_13938_13959 = state_13934__$1;(statearr_13938_13959[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13935 === (1)))
{var inst_13911 = (0);var state_13934__$1 = (function (){var statearr_13939 = state_13934;(statearr_13939[(8)] = inst_13911);
return statearr_13939;
})();var statearr_13940_13960 = state_13934__$1;(statearr_13940_13960[(2)] = null);
(statearr_13940_13960[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13935 === (4)))
{var state_13934__$1 = state_13934;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13934__$1,(7),ch);
} else
{if((state_val_13935 === (6)))
{var inst_13929 = (state_13934[(2)]);var state_13934__$1 = state_13934;var statearr_13941_13961 = state_13934__$1;(statearr_13941_13961[(2)] = inst_13929);
(statearr_13941_13961[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13935 === (3)))
{var inst_13931 = (state_13934[(2)]);var inst_13932 = cljs.core.async.close_BANG_.call(null,out);var state_13934__$1 = (function (){var statearr_13942 = state_13934;(statearr_13942[(9)] = inst_13931);
return statearr_13942;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13934__$1,inst_13932);
} else
{if((state_val_13935 === (2)))
{var inst_13911 = (state_13934[(8)]);var inst_13913 = (inst_13911 < n);var state_13934__$1 = state_13934;if(cljs.core.truth_(inst_13913))
{var statearr_13943_13962 = state_13934__$1;(statearr_13943_13962[(1)] = (4));
} else
{var statearr_13944_13963 = state_13934__$1;(statearr_13944_13963[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13935 === (11)))
{var inst_13911 = (state_13934[(8)]);var inst_13921 = (state_13934[(2)]);var inst_13922 = (inst_13911 + (1));var inst_13911__$1 = inst_13922;var state_13934__$1 = (function (){var statearr_13945 = state_13934;(statearr_13945[(8)] = inst_13911__$1);
(statearr_13945[(10)] = inst_13921);
return statearr_13945;
})();var statearr_13946_13964 = state_13934__$1;(statearr_13946_13964[(2)] = null);
(statearr_13946_13964[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13935 === (9)))
{var state_13934__$1 = state_13934;var statearr_13947_13965 = state_13934__$1;(statearr_13947_13965[(2)] = null);
(statearr_13947_13965[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13935 === (5)))
{var state_13934__$1 = state_13934;var statearr_13948_13966 = state_13934__$1;(statearr_13948_13966[(2)] = null);
(statearr_13948_13966[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13935 === (10)))
{var inst_13926 = (state_13934[(2)]);var state_13934__$1 = state_13934;var statearr_13949_13967 = state_13934__$1;(statearr_13949_13967[(2)] = inst_13926);
(statearr_13949_13967[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13935 === (8)))
{var inst_13916 = (state_13934[(7)]);var state_13934__$1 = state_13934;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13934__$1,(11),out,inst_13916);
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
});})(c__5906__auto___13957,out))
;return ((function (switch__5891__auto__,c__5906__auto___13957,out){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_13953 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13953[(0)] = state_machine__5892__auto__);
(statearr_13953[(1)] = (1));
return statearr_13953;
});
var state_machine__5892__auto____1 = (function (state_13934){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_13934);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e13954){if((e13954 instanceof Object))
{var ex__5895__auto__ = e13954;var statearr_13955_13968 = state_13934;(statearr_13955_13968[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13934);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13954;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13969 = state_13934;
state_13934 = G__13969;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_13934){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_13934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto___13957,out))
})();var state__5908__auto__ = (function (){var statearr_13956 = f__5907__auto__.call(null);(statearr_13956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto___13957);
return statearr_13956;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto___13957,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5906__auto___14066 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto___14066,out){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto___14066,out){
return (function (state_14041){var state_val_14042 = (state_14041[(1)]);if((state_val_14042 === (7)))
{var inst_14036 = (state_14041[(2)]);var state_14041__$1 = state_14041;var statearr_14043_14067 = state_14041__$1;(statearr_14043_14067[(2)] = inst_14036);
(statearr_14043_14067[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14042 === (1)))
{var inst_14018 = null;var state_14041__$1 = (function (){var statearr_14044 = state_14041;(statearr_14044[(7)] = inst_14018);
return statearr_14044;
})();var statearr_14045_14068 = state_14041__$1;(statearr_14045_14068[(2)] = null);
(statearr_14045_14068[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14042 === (4)))
{var inst_14021 = (state_14041[(8)]);var inst_14021__$1 = (state_14041[(2)]);var inst_14022 = (inst_14021__$1 == null);var inst_14023 = cljs.core.not.call(null,inst_14022);var state_14041__$1 = (function (){var statearr_14046 = state_14041;(statearr_14046[(8)] = inst_14021__$1);
return statearr_14046;
})();if(inst_14023)
{var statearr_14047_14069 = state_14041__$1;(statearr_14047_14069[(1)] = (5));
} else
{var statearr_14048_14070 = state_14041__$1;(statearr_14048_14070[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14042 === (6)))
{var state_14041__$1 = state_14041;var statearr_14049_14071 = state_14041__$1;(statearr_14049_14071[(2)] = null);
(statearr_14049_14071[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14042 === (3)))
{var inst_14038 = (state_14041[(2)]);var inst_14039 = cljs.core.async.close_BANG_.call(null,out);var state_14041__$1 = (function (){var statearr_14050 = state_14041;(statearr_14050[(9)] = inst_14038);
return statearr_14050;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14041__$1,inst_14039);
} else
{if((state_val_14042 === (2)))
{var state_14041__$1 = state_14041;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14041__$1,(4),ch);
} else
{if((state_val_14042 === (11)))
{var inst_14021 = (state_14041[(8)]);var inst_14030 = (state_14041[(2)]);var inst_14018 = inst_14021;var state_14041__$1 = (function (){var statearr_14051 = state_14041;(statearr_14051[(7)] = inst_14018);
(statearr_14051[(10)] = inst_14030);
return statearr_14051;
})();var statearr_14052_14072 = state_14041__$1;(statearr_14052_14072[(2)] = null);
(statearr_14052_14072[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14042 === (9)))
{var inst_14021 = (state_14041[(8)]);var state_14041__$1 = state_14041;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14041__$1,(11),out,inst_14021);
} else
{if((state_val_14042 === (5)))
{var inst_14021 = (state_14041[(8)]);var inst_14018 = (state_14041[(7)]);var inst_14025 = cljs.core._EQ_.call(null,inst_14021,inst_14018);var state_14041__$1 = state_14041;if(inst_14025)
{var statearr_14054_14073 = state_14041__$1;(statearr_14054_14073[(1)] = (8));
} else
{var statearr_14055_14074 = state_14041__$1;(statearr_14055_14074[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14042 === (10)))
{var inst_14033 = (state_14041[(2)]);var state_14041__$1 = state_14041;var statearr_14056_14075 = state_14041__$1;(statearr_14056_14075[(2)] = inst_14033);
(statearr_14056_14075[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14042 === (8)))
{var inst_14018 = (state_14041[(7)]);var tmp14053 = inst_14018;var inst_14018__$1 = tmp14053;var state_14041__$1 = (function (){var statearr_14057 = state_14041;(statearr_14057[(7)] = inst_14018__$1);
return statearr_14057;
})();var statearr_14058_14076 = state_14041__$1;(statearr_14058_14076[(2)] = null);
(statearr_14058_14076[(1)] = (2));
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
});})(c__5906__auto___14066,out))
;return ((function (switch__5891__auto__,c__5906__auto___14066,out){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_14062 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14062[(0)] = state_machine__5892__auto__);
(statearr_14062[(1)] = (1));
return statearr_14062;
});
var state_machine__5892__auto____1 = (function (state_14041){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_14041);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e14063){if((e14063 instanceof Object))
{var ex__5895__auto__ = e14063;var statearr_14064_14077 = state_14041;(statearr_14064_14077[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14041);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14063;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14078 = state_14041;
state_14041 = G__14078;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_14041){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_14041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto___14066,out))
})();var state__5908__auto__ = (function (){var statearr_14065 = f__5907__auto__.call(null);(statearr_14065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto___14066);
return statearr_14065;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto___14066,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5906__auto___14213 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto___14213,out){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto___14213,out){
return (function (state_14183){var state_val_14184 = (state_14183[(1)]);if((state_val_14184 === (7)))
{var inst_14179 = (state_14183[(2)]);var state_14183__$1 = state_14183;var statearr_14185_14214 = state_14183__$1;(statearr_14185_14214[(2)] = inst_14179);
(statearr_14185_14214[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14184 === (1)))
{var inst_14146 = (new Array(n));var inst_14147 = inst_14146;var inst_14148 = (0);var state_14183__$1 = (function (){var statearr_14186 = state_14183;(statearr_14186[(7)] = inst_14147);
(statearr_14186[(8)] = inst_14148);
return statearr_14186;
})();var statearr_14187_14215 = state_14183__$1;(statearr_14187_14215[(2)] = null);
(statearr_14187_14215[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14184 === (4)))
{var inst_14151 = (state_14183[(9)]);var inst_14151__$1 = (state_14183[(2)]);var inst_14152 = (inst_14151__$1 == null);var inst_14153 = cljs.core.not.call(null,inst_14152);var state_14183__$1 = (function (){var statearr_14188 = state_14183;(statearr_14188[(9)] = inst_14151__$1);
return statearr_14188;
})();if(inst_14153)
{var statearr_14189_14216 = state_14183__$1;(statearr_14189_14216[(1)] = (5));
} else
{var statearr_14190_14217 = state_14183__$1;(statearr_14190_14217[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14184 === (15)))
{var inst_14173 = (state_14183[(2)]);var state_14183__$1 = state_14183;var statearr_14191_14218 = state_14183__$1;(statearr_14191_14218[(2)] = inst_14173);
(statearr_14191_14218[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14184 === (13)))
{var state_14183__$1 = state_14183;var statearr_14192_14219 = state_14183__$1;(statearr_14192_14219[(2)] = null);
(statearr_14192_14219[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14184 === (6)))
{var inst_14148 = (state_14183[(8)]);var inst_14169 = (inst_14148 > (0));var state_14183__$1 = state_14183;if(cljs.core.truth_(inst_14169))
{var statearr_14193_14220 = state_14183__$1;(statearr_14193_14220[(1)] = (12));
} else
{var statearr_14194_14221 = state_14183__$1;(statearr_14194_14221[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14184 === (3)))
{var inst_14181 = (state_14183[(2)]);var state_14183__$1 = state_14183;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14183__$1,inst_14181);
} else
{if((state_val_14184 === (12)))
{var inst_14147 = (state_14183[(7)]);var inst_14171 = cljs.core.vec.call(null,inst_14147);var state_14183__$1 = state_14183;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14183__$1,(15),out,inst_14171);
} else
{if((state_val_14184 === (2)))
{var state_14183__$1 = state_14183;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14183__$1,(4),ch);
} else
{if((state_val_14184 === (11)))
{var inst_14163 = (state_14183[(2)]);var inst_14164 = (new Array(n));var inst_14147 = inst_14164;var inst_14148 = (0);var state_14183__$1 = (function (){var statearr_14195 = state_14183;(statearr_14195[(7)] = inst_14147);
(statearr_14195[(8)] = inst_14148);
(statearr_14195[(10)] = inst_14163);
return statearr_14195;
})();var statearr_14196_14222 = state_14183__$1;(statearr_14196_14222[(2)] = null);
(statearr_14196_14222[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14184 === (9)))
{var inst_14147 = (state_14183[(7)]);var inst_14161 = cljs.core.vec.call(null,inst_14147);var state_14183__$1 = state_14183;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14183__$1,(11),out,inst_14161);
} else
{if((state_val_14184 === (5)))
{var inst_14156 = (state_14183[(11)]);var inst_14147 = (state_14183[(7)]);var inst_14148 = (state_14183[(8)]);var inst_14151 = (state_14183[(9)]);var inst_14155 = (inst_14147[inst_14148] = inst_14151);var inst_14156__$1 = (inst_14148 + (1));var inst_14157 = (inst_14156__$1 < n);var state_14183__$1 = (function (){var statearr_14197 = state_14183;(statearr_14197[(11)] = inst_14156__$1);
(statearr_14197[(12)] = inst_14155);
return statearr_14197;
})();if(cljs.core.truth_(inst_14157))
{var statearr_14198_14223 = state_14183__$1;(statearr_14198_14223[(1)] = (8));
} else
{var statearr_14199_14224 = state_14183__$1;(statearr_14199_14224[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14184 === (14)))
{var inst_14176 = (state_14183[(2)]);var inst_14177 = cljs.core.async.close_BANG_.call(null,out);var state_14183__$1 = (function (){var statearr_14201 = state_14183;(statearr_14201[(13)] = inst_14176);
return statearr_14201;
})();var statearr_14202_14225 = state_14183__$1;(statearr_14202_14225[(2)] = inst_14177);
(statearr_14202_14225[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14184 === (10)))
{var inst_14167 = (state_14183[(2)]);var state_14183__$1 = state_14183;var statearr_14203_14226 = state_14183__$1;(statearr_14203_14226[(2)] = inst_14167);
(statearr_14203_14226[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14184 === (8)))
{var inst_14156 = (state_14183[(11)]);var inst_14147 = (state_14183[(7)]);var tmp14200 = inst_14147;var inst_14147__$1 = tmp14200;var inst_14148 = inst_14156;var state_14183__$1 = (function (){var statearr_14204 = state_14183;(statearr_14204[(7)] = inst_14147__$1);
(statearr_14204[(8)] = inst_14148);
return statearr_14204;
})();var statearr_14205_14227 = state_14183__$1;(statearr_14205_14227[(2)] = null);
(statearr_14205_14227[(1)] = (2));
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
});})(c__5906__auto___14213,out))
;return ((function (switch__5891__auto__,c__5906__auto___14213,out){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_14209 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14209[(0)] = state_machine__5892__auto__);
(statearr_14209[(1)] = (1));
return statearr_14209;
});
var state_machine__5892__auto____1 = (function (state_14183){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_14183);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e14210){if((e14210 instanceof Object))
{var ex__5895__auto__ = e14210;var statearr_14211_14228 = state_14183;(statearr_14211_14228[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14183);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14210;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14229 = state_14183;
state_14183 = G__14229;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_14183){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_14183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto___14213,out))
})();var state__5908__auto__ = (function (){var statearr_14212 = f__5907__auto__.call(null);(statearr_14212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto___14213);
return statearr_14212;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto___14213,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5906__auto___14372 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto___14372,out){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto___14372,out){
return (function (state_14342){var state_val_14343 = (state_14342[(1)]);if((state_val_14343 === (7)))
{var inst_14338 = (state_14342[(2)]);var state_14342__$1 = state_14342;var statearr_14344_14373 = state_14342__$1;(statearr_14344_14373[(2)] = inst_14338);
(statearr_14344_14373[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14343 === (1)))
{var inst_14301 = [];var inst_14302 = inst_14301;var inst_14303 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_14342__$1 = (function (){var statearr_14345 = state_14342;(statearr_14345[(7)] = inst_14303);
(statearr_14345[(8)] = inst_14302);
return statearr_14345;
})();var statearr_14346_14374 = state_14342__$1;(statearr_14346_14374[(2)] = null);
(statearr_14346_14374[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14343 === (4)))
{var inst_14306 = (state_14342[(9)]);var inst_14306__$1 = (state_14342[(2)]);var inst_14307 = (inst_14306__$1 == null);var inst_14308 = cljs.core.not.call(null,inst_14307);var state_14342__$1 = (function (){var statearr_14347 = state_14342;(statearr_14347[(9)] = inst_14306__$1);
return statearr_14347;
})();if(inst_14308)
{var statearr_14348_14375 = state_14342__$1;(statearr_14348_14375[(1)] = (5));
} else
{var statearr_14349_14376 = state_14342__$1;(statearr_14349_14376[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14343 === (15)))
{var inst_14332 = (state_14342[(2)]);var state_14342__$1 = state_14342;var statearr_14350_14377 = state_14342__$1;(statearr_14350_14377[(2)] = inst_14332);
(statearr_14350_14377[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14343 === (13)))
{var state_14342__$1 = state_14342;var statearr_14351_14378 = state_14342__$1;(statearr_14351_14378[(2)] = null);
(statearr_14351_14378[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14343 === (6)))
{var inst_14302 = (state_14342[(8)]);var inst_14327 = inst_14302.length;var inst_14328 = (inst_14327 > (0));var state_14342__$1 = state_14342;if(cljs.core.truth_(inst_14328))
{var statearr_14352_14379 = state_14342__$1;(statearr_14352_14379[(1)] = (12));
} else
{var statearr_14353_14380 = state_14342__$1;(statearr_14353_14380[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14343 === (3)))
{var inst_14340 = (state_14342[(2)]);var state_14342__$1 = state_14342;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14342__$1,inst_14340);
} else
{if((state_val_14343 === (12)))
{var inst_14302 = (state_14342[(8)]);var inst_14330 = cljs.core.vec.call(null,inst_14302);var state_14342__$1 = state_14342;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14342__$1,(15),out,inst_14330);
} else
{if((state_val_14343 === (2)))
{var state_14342__$1 = state_14342;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14342__$1,(4),ch);
} else
{if((state_val_14343 === (11)))
{var inst_14310 = (state_14342[(10)]);var inst_14306 = (state_14342[(9)]);var inst_14320 = (state_14342[(2)]);var inst_14321 = [];var inst_14322 = inst_14321.push(inst_14306);var inst_14302 = inst_14321;var inst_14303 = inst_14310;var state_14342__$1 = (function (){var statearr_14354 = state_14342;(statearr_14354[(11)] = inst_14322);
(statearr_14354[(12)] = inst_14320);
(statearr_14354[(7)] = inst_14303);
(statearr_14354[(8)] = inst_14302);
return statearr_14354;
})();var statearr_14355_14381 = state_14342__$1;(statearr_14355_14381[(2)] = null);
(statearr_14355_14381[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14343 === (9)))
{var inst_14302 = (state_14342[(8)]);var inst_14318 = cljs.core.vec.call(null,inst_14302);var state_14342__$1 = state_14342;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14342__$1,(11),out,inst_14318);
} else
{if((state_val_14343 === (5)))
{var inst_14303 = (state_14342[(7)]);var inst_14310 = (state_14342[(10)]);var inst_14306 = (state_14342[(9)]);var inst_14310__$1 = f.call(null,inst_14306);var inst_14311 = cljs.core._EQ_.call(null,inst_14310__$1,inst_14303);var inst_14312 = cljs.core.keyword_identical_QMARK_.call(null,inst_14303,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_14313 = (inst_14311) || (inst_14312);var state_14342__$1 = (function (){var statearr_14356 = state_14342;(statearr_14356[(10)] = inst_14310__$1);
return statearr_14356;
})();if(cljs.core.truth_(inst_14313))
{var statearr_14357_14382 = state_14342__$1;(statearr_14357_14382[(1)] = (8));
} else
{var statearr_14358_14383 = state_14342__$1;(statearr_14358_14383[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14343 === (14)))
{var inst_14335 = (state_14342[(2)]);var inst_14336 = cljs.core.async.close_BANG_.call(null,out);var state_14342__$1 = (function (){var statearr_14360 = state_14342;(statearr_14360[(13)] = inst_14335);
return statearr_14360;
})();var statearr_14361_14384 = state_14342__$1;(statearr_14361_14384[(2)] = inst_14336);
(statearr_14361_14384[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14343 === (10)))
{var inst_14325 = (state_14342[(2)]);var state_14342__$1 = state_14342;var statearr_14362_14385 = state_14342__$1;(statearr_14362_14385[(2)] = inst_14325);
(statearr_14362_14385[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14343 === (8)))
{var inst_14310 = (state_14342[(10)]);var inst_14306 = (state_14342[(9)]);var inst_14302 = (state_14342[(8)]);var inst_14315 = inst_14302.push(inst_14306);var tmp14359 = inst_14302;var inst_14302__$1 = tmp14359;var inst_14303 = inst_14310;var state_14342__$1 = (function (){var statearr_14363 = state_14342;(statearr_14363[(7)] = inst_14303);
(statearr_14363[(14)] = inst_14315);
(statearr_14363[(8)] = inst_14302__$1);
return statearr_14363;
})();var statearr_14364_14386 = state_14342__$1;(statearr_14364_14386[(2)] = null);
(statearr_14364_14386[(1)] = (2));
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
});})(c__5906__auto___14372,out))
;return ((function (switch__5891__auto__,c__5906__auto___14372,out){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_14368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14368[(0)] = state_machine__5892__auto__);
(statearr_14368[(1)] = (1));
return statearr_14368;
});
var state_machine__5892__auto____1 = (function (state_14342){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_14342);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e14369){if((e14369 instanceof Object))
{var ex__5895__auto__ = e14369;var statearr_14370_14387 = state_14342;(statearr_14370_14387[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14342);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14369;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14388 = state_14342;
state_14342 = G__14388;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_14342){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_14342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto___14372,out))
})();var state__5908__auto__ = (function (){var statearr_14371 = f__5907__auto__.call(null);(statearr_14371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto___14372);
return statearr_14371;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto___14372,out))
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