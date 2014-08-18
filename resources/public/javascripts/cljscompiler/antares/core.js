// Compiled by ClojureScript 0.0-2277
goog.provide('antares.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('antares.repl');
goog.require('dommy.core');
goog.require('cljs_http.client');
goog.require('antares.importers');
goog.require('cljs.core.async');
goog.require('antares.importers');
goog.require('dommy.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('antares.repl');
goog.require('cljs_http.client');
antares.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
antares.core.registered_bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
antares.core.registered_components = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
antares.core.read_data = (function read_data(data_string){return cljs.reader.read_string.call(null,data_string);
});
antares.core.split_threadlast = (function split_threadlast(regex,data){return clojure.string.split.call(null,data,regex);
});
antares.core.nth_threadlast = (function nth_threadlast(index,collection){return cljs.core.nth.call(null,collection,index);
});
antares.core.string__GT_matrix = (function string__GT_matrix(string){if(cljs.core.truth_(string))
{var formatted_string = clojure.string.replace.call(null,string,/\r/,"\n");return cljs.core.map.call(null,((function (formatted_string){
return (function (string__$1){return clojure.string.split.call(null,string__$1,/,/);
});})(formatted_string))
,clojure.string.split.call(null,formatted_string,/\n/));
} else
{return null;
}
});
antares.core.cursor__GT_value = (function cursor__GT_value(cursor,new_value){return cljs.core.swap_BANG_.call(null,antares.core.app_state,(function (app_value){return cljs.core.update_in.call(null,app_value,cursor,(function (old_value){return new_value;
}));
}));
});
antares.core.Renderable = (function (){var obj17370 = {};return obj17370;
})();
antares.core.render = (function render(self){if((function (){var and__3531__auto__ = self;if(and__3531__auto__)
{return self.antares$core$Renderable$render$arity$1;
} else
{return and__3531__auto__;
}
})())
{return self.antares$core$Renderable$render$arity$1(self);
} else
{var x__4170__auto__ = (((self == null))?null:self);return (function (){var or__3543__auto__ = (antares.core.render[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (antares.core.render["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Renderable.render",self);
}
}
})().call(null,self);
}
});
antares.core.EventResponder = (function (){var obj17372 = {};return obj17372;
})();
antares.core.bind_events = (function bind_events(self){if((function (){var and__3531__auto__ = self;if(and__3531__auto__)
{return self.antares$core$EventResponder$bind_events$arity$1;
} else
{return and__3531__auto__;
}
})())
{return self.antares$core$EventResponder$bind_events$arity$1(self);
} else
{var x__4170__auto__ = (((self == null))?null:self);return (function (){var or__3543__auto__ = (antares.core.bind_events[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (antares.core.bind_events["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"EventResponder.bind-events",self);
}
}
})().call(null,self);
}
});
antares.core.DataSource = (function (){var obj17374 = {};return obj17374;
})();
antares.core.load_data = (function load_data(self){if((function (){var and__3531__auto__ = self;if(and__3531__auto__)
{return self.antares$core$DataSource$load_data$arity$1;
} else
{return and__3531__auto__;
}
})())
{return self.antares$core$DataSource$load_data$arity$1(self);
} else
{var x__4170__auto__ = (((self == null))?null:self);return (function (){var or__3543__auto__ = (antares.core.load_data[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (antares.core.load_data["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DataSource.load-data",self);
}
}
})().call(null,self);
}
});

/**
* @constructor
* @param {*} app_cursor
* @param {*} dom_cursor
* @param {*} render_fn
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
antares.core.DataBinding = (function (app_cursor,dom_cursor,render_fn,__meta,__extmap){
this.app_cursor = app_cursor;
this.dom_cursor = dom_cursor;
this.render_fn = render_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
antares.core.DataBinding.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4129__auto__,k__4130__auto__){var self__ = this;
var this__4129__auto____$1 = this;return cljs.core._lookup.call(null,this__4129__auto____$1,k__4130__auto__,null);
});
antares.core.DataBinding.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4131__auto__,k17376,else__4132__auto__){var self__ = this;
var this__4131__auto____$1 = this;var G__17378 = (((k17376 instanceof cljs.core.Keyword))?k17376.fqn:null);switch (G__17378) {
case "render-fn":
return self__.render_fn;

break;
case "dom-cursor":
return self__.dom_cursor;

break;
case "app-cursor":
return self__.app_cursor;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k17376,else__4132__auto__);

}
});
antares.core.DataBinding.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4143__auto__,writer__4144__auto__,opts__4145__auto__){var self__ = this;
var this__4143__auto____$1 = this;var pr_pair__4146__auto__ = ((function (this__4143__auto____$1){
return (function (keyval__4147__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4144__auto__,cljs.core.pr_writer,""," ","",opts__4145__auto__,keyval__4147__auto__);
});})(this__4143__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4144__auto__,pr_pair__4146__auto__,"#antares.core.DataBinding{",", ","}",opts__4145__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null))], null),self__.__extmap));
});
antares.core.DataBinding.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4127__auto__){var self__ = this;
var this__4127__auto____$1 = this;return self__.__meta;
});
antares.core.DataBinding.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4123__auto__){var self__ = this;
var this__4123__auto____$1 = this;return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.__meta,self__.__extmap,self__.__hash));
});
antares.core.DataBinding.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4133__auto__){var self__ = this;
var this__4133__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
antares.core.DataBinding.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4124__auto__){var self__ = this;
var this__4124__auto____$1 = this;var h__3954__auto__ = self__.__hash;if(!((h__3954__auto__ == null)))
{return h__3954__auto__;
} else
{var h__3954__auto____$1 = cljs.core.hash_imap.call(null,this__4124__auto____$1);self__.__hash = h__3954__auto____$1;
return h__3954__auto____$1;
}
});
antares.core.DataBinding.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4125__auto__,other__4126__auto__){var self__ = this;
var this__4125__auto____$1 = this;if(cljs.core.truth_((function (){var and__3531__auto__ = other__4126__auto__;if(cljs.core.truth_(and__3531__auto__))
{return ((this__4125__auto____$1.constructor === other__4126__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4125__auto____$1,other__4126__auto__));
} else
{return and__3531__auto__;
}
})()))
{return true;
} else
{return false;
}
});
antares.core.DataBinding.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4138__auto__,k__4139__auto__){var self__ = this;
var this__4138__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),null], null), null),k__4139__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4138__auto____$1),self__.__meta),k__4139__auto__);
} else
{return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4139__auto__)),null));
}
});
antares.core.DataBinding.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4136__auto__,k__4137__auto__,G__17375){var self__ = this;
var this__4136__auto____$1 = this;var pred__17379 = cljs.core.keyword_identical_QMARK_;var expr__17380 = k__4137__auto__;if(cljs.core.truth_(pred__17379.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),expr__17380)))
{return (new antares.core.DataBinding(G__17375,self__.dom_cursor,self__.render_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__17379.call(null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),expr__17380)))
{return (new antares.core.DataBinding(self__.app_cursor,G__17375,self__.render_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__17379.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),expr__17380)))
{return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,G__17375,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4137__auto__,G__17375),null));
}
}
}
});
antares.core.DataBinding.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null))], null),self__.__extmap));
});
antares.core.DataBinding.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4128__auto__,G__17375){var self__ = this;
var this__4128__auto____$1 = this;return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,self__.render_fn,G__17375,self__.__extmap,self__.__hash));
});
antares.core.DataBinding.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4134__auto__,entry__4135__auto__){var self__ = this;
var this__4134__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4135__auto__))
{return cljs.core._assoc.call(null,this__4134__auto____$1,cljs.core._nth.call(null,entry__4135__auto__,(0)),cljs.core._nth.call(null,entry__4135__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4134__auto____$1,entry__4135__auto__);
}
});
antares.core.DataBinding.prototype.antares$core$Renderable$ = true;
antares.core.DataBinding.prototype.antares$core$Renderable$render$arity$1 = (function (self){var self__ = this;
var self__$1 = this;var target_node = document.querySelector(self__.dom_cursor);var target_data = ((cljs.core._EQ_.call(null,cljs.core.type.call(null,self__.app_cursor),cljs.core.List))?self__.render_fn.call(null,cljs.core.map.call(null,((function (target_node,self__$1){
return (function (cursor){var temp__4124__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,antares.core.app_state),cursor);if(cljs.core.truth_(temp__4124__auto__))
{var app_data = temp__4124__auto__;return app_data;
} else
{return "";
}
});})(target_node,self__$1))
,self__.app_cursor)):self__.render_fn.call(null,(function (){var temp__4124__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,antares.core.app_state),self__.app_cursor);if(cljs.core.truth_(temp__4124__auto__))
{var app_data = temp__4124__auto__;return app_data;
} else
{return "";
}
})()));var G__17382 = target_node.tagName;switch (G__17382) {
case "INPUT":
return target_node.value = target_data;

break;
case "TEXTAREA":
return target_node.value = target_data;

break;
default:
return target_node.innerText = target_data;

}
});
antares.core.DataBinding.cljs$lang$type = true;
antares.core.DataBinding.cljs$lang$ctorPrSeq = (function (this__4163__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"antares.core/DataBinding");
});
antares.core.DataBinding.cljs$lang$ctorPrWriter = (function (this__4163__auto__,writer__4164__auto__){return cljs.core._write.call(null,writer__4164__auto__,"antares.core/DataBinding");
});
antares.core.__GT_DataBinding = (function __GT_DataBinding(app_cursor,dom_cursor,render_fn){return (new antares.core.DataBinding(app_cursor,dom_cursor,render_fn));
});
antares.core.map__GT_DataBinding = (function map__GT_DataBinding(G__17377){return (new antares.core.DataBinding(new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(G__17377),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(G__17377),new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(G__17377),null,cljs.core.dissoc.call(null,G__17377,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),new cljs.core.Keyword(null,"render-fn","render-fn",398796518))));
});

/**
* @constructor
* @param {*} app_cursor
* @param {*} dom_cursor
* @param {*} render_fn
* @param {*} interactions
* @param {*} data
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
antares.core.Component = (function (app_cursor,dom_cursor,render_fn,interactions,data,__meta,__extmap){
this.app_cursor = app_cursor;
this.dom_cursor = dom_cursor;
this.render_fn = render_fn;
this.interactions = interactions;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4129__auto__,k__4130__auto__){var self__ = this;
var this__4129__auto____$1 = this;return cljs.core._lookup.call(null,this__4129__auto____$1,k__4130__auto__,null);
});
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4131__auto__,k17386,else__4132__auto__){var self__ = this;
var this__4131__auto____$1 = this;var G__17388 = (((k17386 instanceof cljs.core.Keyword))?k17386.fqn:null);switch (G__17388) {
case "data":
return self__.data;

break;
case "interactions":
return self__.interactions;

break;
case "render-fn":
return self__.render_fn;

break;
case "dom-cursor":
return self__.dom_cursor;

break;
case "app-cursor":
return self__.app_cursor;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k17386,else__4132__auto__);

}
});
antares.core.Component.prototype.antares$core$DataSource$ = true;
antares.core.Component.prototype.antares$core$DataSource$load_data$arity$1 = (function (self){var self__ = this;
var self__$1 = this;if(cljs.core.truth_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1)))
{var G__17389 = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1));switch (G__17389) {
case "s3Bucket":
var c__5867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5867__auto__,G__17389,self__$1){
return (function (){var f__5868__auto__ = (function (){var switch__5852__auto__ = ((function (c__5867__auto__,G__17389,self__$1){
return (function (state_17398){var state_val_17399 = (state_17398[(1)]);if((state_val_17399 === (2)))
{var inst_17394 = (state_17398[(2)]);var inst_17395 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_17394);var inst_17396 = antares.core.cursor__GT_value.call(null,self__.app_cursor,inst_17395);var state_17398__$1 = state_17398;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17398__$1,inst_17396);
} else
{if((state_val_17399 === (1)))
{var inst_17390 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1);var inst_17391 = new cljs.core.Keyword(null,"bucket-name","bucket-name",-971156135).cljs$core$IFn$_invoke$arity$1(inst_17390);var inst_17392 = antares.importers.s3Bucket.call(null,inst_17391);var state_17398__$1 = state_17398;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17398__$1,(2),inst_17392);
} else
{return null;
}
}
});})(c__5867__auto__,G__17389,self__$1))
;return ((function (switch__5852__auto__,c__5867__auto__,G__17389,self__$1){
return (function() {
var state_machine__5853__auto__ = null;
var state_machine__5853__auto____0 = (function (){var statearr_17403 = [null,null,null,null,null,null,null];(statearr_17403[(0)] = state_machine__5853__auto__);
(statearr_17403[(1)] = (1));
return statearr_17403;
});
var state_machine__5853__auto____1 = (function (state_17398){while(true){
var ret_value__5854__auto__ = (function (){try{while(true){
var result__5855__auto__ = switch__5852__auto__.call(null,state_17398);if(cljs.core.keyword_identical_QMARK_.call(null,result__5855__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5855__auto__;
}
break;
}
}catch (e17404){if((e17404 instanceof Object))
{var ex__5856__auto__ = e17404;var statearr_17405_17429 = state_17398;(statearr_17405_17429[(5)] = ex__5856__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17398);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17404;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17430 = state_17398;
state_17398 = G__17430;
continue;
}
} else
{return ret_value__5854__auto__;
}
break;
}
});
state_machine__5853__auto__ = function(state_17398){
switch(arguments.length){
case 0:
return state_machine__5853__auto____0.call(this);
case 1:
return state_machine__5853__auto____1.call(this,state_17398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5853__auto____0;
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5853__auto____1;
return state_machine__5853__auto__;
})()
;})(switch__5852__auto__,c__5867__auto__,G__17389,self__$1))
})();var state__5869__auto__ = (function (){var statearr_17406 = f__5868__auto__.call(null);(statearr_17406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5867__auto__);
return statearr_17406;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5869__auto__);
});})(c__5867__auto__,G__17389,self__$1))
);
return c__5867__auto__;

break;
case "static":
var c__5867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5867__auto__,G__17389,self__$1){
return (function (){var f__5868__auto__ = (function (){var switch__5852__auto__ = ((function (c__5867__auto__,G__17389,self__$1){
return (function (state_17411){var state_val_17412 = (state_17411[(1)]);if((state_val_17412 === (1)))
{var inst_17407 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1);var inst_17408 = new cljs.core.Keyword(null,"initialize","initialize",609952913).cljs$core$IFn$_invoke$arity$1(inst_17407);var inst_17409 = antares.core.cursor__GT_value.call(null,self__.app_cursor,inst_17408);var state_17411__$1 = state_17411;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17411__$1,inst_17409);
} else
{return null;
}
});})(c__5867__auto__,G__17389,self__$1))
;return ((function (switch__5852__auto__,c__5867__auto__,G__17389,self__$1){
return (function() {
var state_machine__5853__auto__ = null;
var state_machine__5853__auto____0 = (function (){var statearr_17416 = [null,null,null,null,null,null,null];(statearr_17416[(0)] = state_machine__5853__auto__);
(statearr_17416[(1)] = (1));
return statearr_17416;
});
var state_machine__5853__auto____1 = (function (state_17411){while(true){
var ret_value__5854__auto__ = (function (){try{while(true){
var result__5855__auto__ = switch__5852__auto__.call(null,state_17411);if(cljs.core.keyword_identical_QMARK_.call(null,result__5855__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5855__auto__;
}
break;
}
}catch (e17417){if((e17417 instanceof Object))
{var ex__5856__auto__ = e17417;var statearr_17418_17431 = state_17411;(statearr_17418_17431[(5)] = ex__5856__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17411);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17417;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17432 = state_17411;
state_17411 = G__17432;
continue;
}
} else
{return ret_value__5854__auto__;
}
break;
}
});
state_machine__5853__auto__ = function(state_17411){
switch(arguments.length){
case 0:
return state_machine__5853__auto____0.call(this);
case 1:
return state_machine__5853__auto____1.call(this,state_17411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5853__auto____0;
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5853__auto____1;
return state_machine__5853__auto__;
})()
;})(switch__5852__auto__,c__5867__auto__,G__17389,self__$1))
})();var state__5869__auto__ = (function (){var statearr_17419 = f__5868__auto__.call(null);(statearr_17419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5867__auto__);
return statearr_17419;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5869__auto__);
});})(c__5867__auto__,G__17389,self__$1))
);
return c__5867__auto__;

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1))))));

}
} else
{return null;
}
});
antares.core.Component.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4143__auto__,writer__4144__auto__,opts__4145__auto__){var self__ = this;
var this__4143__auto____$1 = this;var pr_pair__4146__auto__ = ((function (this__4143__auto____$1){
return (function (keyval__4147__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4144__auto__,cljs.core.pr_writer,""," ","",opts__4145__auto__,keyval__4147__auto__);
});})(this__4143__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4144__auto__,pr_pair__4146__auto__,"#antares.core.Component{",", ","}",opts__4145__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"interactions","interactions",550841811),self__.interactions],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4127__auto__){var self__ = this;
var this__4127__auto____$1 = this;return self__.__meta;
});
antares.core.Component.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4123__auto__){var self__ = this;
var this__4123__auto____$1 = this;return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.interactions,self__.data,self__.__meta,self__.__extmap,self__.__hash));
});
antares.core.Component.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4133__auto__){var self__ = this;
var this__4133__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4124__auto__){var self__ = this;
var this__4124__auto____$1 = this;var h__3954__auto__ = self__.__hash;if(!((h__3954__auto__ == null)))
{return h__3954__auto__;
} else
{var h__3954__auto____$1 = cljs.core.hash_imap.call(null,this__4124__auto____$1);self__.__hash = h__3954__auto____$1;
return h__3954__auto____$1;
}
});
antares.core.Component.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4125__auto__,other__4126__auto__){var self__ = this;
var this__4125__auto____$1 = this;if(cljs.core.truth_((function (){var and__3531__auto__ = other__4126__auto__;if(cljs.core.truth_(and__3531__auto__))
{return ((this__4125__auto____$1.constructor === other__4126__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4125__auto____$1,other__4126__auto__));
} else
{return and__3531__auto__;
}
})()))
{return true;
} else
{return false;
}
});
antares.core.Component.prototype.antares$core$EventResponder$ = true;
antares.core.Component.prototype.antares$core$EventResponder$bind_events$arity$1 = (function (self){var self__ = this;
var self__$1 = this;var temp__4126__auto__ = new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(self__$1);if(cljs.core.truth_(temp__4126__auto__))
{var interactions__$1 = temp__4126__auto__;var seq__17420 = cljs.core.seq.call(null,interactions__$1);var chunk__17421 = null;var count__17422 = (0);var i__17423 = (0);while(true){
if((i__17423 < count__17422))
{var interaction = cljs.core._nth.call(null,chunk__17421,i__17423);document.querySelector(self__.dom_cursor).addEventListener(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"event-action","event-action",-974748529).cljs$core$IFn$_invoke$arity$1(interaction),true);
{
var G__17433 = seq__17420;
var G__17434 = chunk__17421;
var G__17435 = count__17422;
var G__17436 = (i__17423 + (1));
seq__17420 = G__17433;
chunk__17421 = G__17434;
count__17422 = G__17435;
i__17423 = G__17436;
continue;
}
} else
{var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__17420);if(temp__4126__auto____$1)
{var seq__17420__$1 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17420__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__17420__$1);{
var G__17437 = cljs.core.chunk_rest.call(null,seq__17420__$1);
var G__17438 = c__4299__auto__;
var G__17439 = cljs.core.count.call(null,c__4299__auto__);
var G__17440 = (0);
seq__17420 = G__17437;
chunk__17421 = G__17438;
count__17422 = G__17439;
i__17423 = G__17440;
continue;
}
} else
{var interaction = cljs.core.first.call(null,seq__17420__$1);document.querySelector(self__.dom_cursor).addEventListener(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"event-action","event-action",-974748529).cljs$core$IFn$_invoke$arity$1(interaction),true);
{
var G__17441 = cljs.core.next.call(null,seq__17420__$1);
var G__17442 = null;
var G__17443 = (0);
var G__17444 = (0);
seq__17420 = G__17441;
chunk__17421 = G__17442;
count__17422 = G__17443;
i__17423 = G__17444;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
antares.core.Component.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4138__auto__,k__4139__auto__){var self__ = this;
var this__4138__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),null,new cljs.core.Keyword(null,"interactions","interactions",550841811),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4139__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4138__auto____$1),self__.__meta),k__4139__auto__);
} else
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.interactions,self__.data,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4139__auto__)),null));
}
});
antares.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4136__auto__,k__4137__auto__,G__17385){var self__ = this;
var this__4136__auto____$1 = this;var pred__17424 = cljs.core.keyword_identical_QMARK_;var expr__17425 = k__4137__auto__;if(cljs.core.truth_(pred__17424.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),expr__17425)))
{return (new antares.core.Component(G__17385,self__.dom_cursor,self__.render_fn,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__17424.call(null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),expr__17425)))
{return (new antares.core.Component(self__.app_cursor,G__17385,self__.render_fn,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__17424.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),expr__17425)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,G__17385,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__17424.call(null,new cljs.core.Keyword(null,"interactions","interactions",550841811),expr__17425)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,G__17385,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__17424.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__17425)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.interactions,G__17385,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.interactions,self__.data,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4137__auto__,G__17385),null));
}
}
}
}
}
});
antares.core.Component.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"interactions","interactions",550841811),self__.interactions],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4128__auto__,G__17385){var self__ = this;
var this__4128__auto____$1 = this;return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.interactions,self__.data,G__17385,self__.__extmap,self__.__hash));
});
antares.core.Component.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4134__auto__,entry__4135__auto__){var self__ = this;
var this__4134__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4135__auto__))
{return cljs.core._assoc.call(null,this__4134__auto____$1,cljs.core._nth.call(null,entry__4135__auto__,(0)),cljs.core._nth.call(null,entry__4135__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4134__auto____$1,entry__4135__auto__);
}
});
antares.core.Component.prototype.antares$core$Renderable$ = true;
antares.core.Component.prototype.antares$core$Renderable$render$arity$1 = (function (self){var self__ = this;
var self__$1 = this;var target_node = document.querySelector(self__.dom_cursor);var new_nodes_data = self__.render_fn.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,antares.core.app_state),self__.app_cursor));return target_node.innerHTML = new_nodes_data;
});
antares.core.Component.cljs$lang$type = true;
antares.core.Component.cljs$lang$ctorPrSeq = (function (this__4163__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"antares.core/Component");
});
antares.core.Component.cljs$lang$ctorPrWriter = (function (this__4163__auto__,writer__4164__auto__){return cljs.core._write.call(null,writer__4164__auto__,"antares.core/Component");
});
antares.core.__GT_Component = (function __GT_Component(app_cursor,dom_cursor,render_fn,interactions,data){return (new antares.core.Component(app_cursor,dom_cursor,render_fn,interactions,data));
});
antares.core.map__GT_Component = (function map__GT_Component(G__17387){return (new antares.core.Component(new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(G__17387),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(G__17387),new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(G__17387),new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(G__17387),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__17387),null,cljs.core.dissoc.call(null,G__17387,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Keyword(null,"interactions","interactions",550841811),new cljs.core.Keyword(null,"data","data",-232669377))));
});
antares.core.register_app_state_cursor = (function register_app_state_cursor(cursor,value){if((cljs.core.get_in.call(null,cljs.core.deref.call(null,antares.core.app_state),cursor) == null))
{return cljs.core.swap_BANG_.call(null,antares.core.app_state,(function (app_value){return cljs.core.update_in.call(null,app_value,cursor,(function (old_value){return value;
}));
}));
} else
{return null;
}
});
antares.core.register_binding = (function register_binding(data_binding){return cljs.core.swap_BANG_.call(null,antares.core.registered_bindings,cljs.core.conj,data_binding);
});
antares.core.render_bindings = (function render_bindings(data_bindings){var seq__17449 = cljs.core.seq.call(null,data_bindings);var chunk__17450 = null;var count__17451 = (0);var i__17452 = (0);while(true){
if((i__17452 < count__17451))
{var data_binding = cljs.core._nth.call(null,chunk__17450,i__17452);antares.core.render.call(null,data_binding);
{
var G__17453 = seq__17449;
var G__17454 = chunk__17450;
var G__17455 = count__17451;
var G__17456 = (i__17452 + (1));
seq__17449 = G__17453;
chunk__17450 = G__17454;
count__17451 = G__17455;
i__17452 = G__17456;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__17449);if(temp__4126__auto__)
{var seq__17449__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17449__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__17449__$1);{
var G__17457 = cljs.core.chunk_rest.call(null,seq__17449__$1);
var G__17458 = c__4299__auto__;
var G__17459 = cljs.core.count.call(null,c__4299__auto__);
var G__17460 = (0);
seq__17449 = G__17457;
chunk__17450 = G__17458;
count__17451 = G__17459;
i__17452 = G__17460;
continue;
}
} else
{var data_binding = cljs.core.first.call(null,seq__17449__$1);antares.core.render.call(null,data_binding);
{
var G__17461 = cljs.core.next.call(null,seq__17449__$1);
var G__17462 = null;
var G__17463 = (0);
var G__17464 = (0);
seq__17449 = G__17461;
chunk__17450 = G__17462;
count__17451 = G__17463;
i__17452 = G__17464;
continue;
}
}
} else
{return null;
}
}
break;
}
});
antares.core.register_component = (function register_component(component){return cljs.core.swap_BANG_.call(null,antares.core.registered_components,cljs.core.conj,component);
});
antares.core.render_components = (function render_components(components__$1){var seq__17469 = cljs.core.seq.call(null,components__$1);var chunk__17470 = null;var count__17471 = (0);var i__17472 = (0);while(true){
if((i__17472 < count__17471))
{var component = cljs.core._nth.call(null,chunk__17470,i__17472);antares.core.render.call(null,component);
{
var G__17473 = seq__17469;
var G__17474 = chunk__17470;
var G__17475 = count__17471;
var G__17476 = (i__17472 + (1));
seq__17469 = G__17473;
chunk__17470 = G__17474;
count__17471 = G__17475;
i__17472 = G__17476;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__17469);if(temp__4126__auto__)
{var seq__17469__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17469__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__17469__$1);{
var G__17477 = cljs.core.chunk_rest.call(null,seq__17469__$1);
var G__17478 = c__4299__auto__;
var G__17479 = cljs.core.count.call(null,c__4299__auto__);
var G__17480 = (0);
seq__17469 = G__17477;
chunk__17470 = G__17478;
count__17471 = G__17479;
i__17472 = G__17480;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__17469__$1);antares.core.render.call(null,component);
{
var G__17481 = cljs.core.next.call(null,seq__17469__$1);
var G__17482 = null;
var G__17483 = (0);
var G__17484 = (0);
seq__17469 = G__17481;
chunk__17470 = G__17482;
count__17471 = G__17483;
i__17472 = G__17484;
continue;
}
}
} else
{return null;
}
}
break;
}
});
antares.core.update_cursor = (function update_cursor(cursor,update_fn){return cljs.core.swap_BANG_.call(null,antares.core.app_state,(function (state){return cljs.core.update_in.call(null,state,cursor,update_fn);
}));
});
antares.core.update_cursor_async = (function update_cursor_async(cursor,resource_url){var c__5867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5867__auto__){
return (function (){var f__5868__auto__ = (function (){var switch__5852__auto__ = ((function (c__5867__auto__){
return (function (state_17508){var state_val_17509 = (state_17508[(1)]);if((state_val_17509 === (2)))
{var inst_17503 = (state_17508[(2)]);var inst_17504 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_17503);var inst_17505 = (function (){var response = inst_17504;return ((function (response,inst_17503,inst_17504,state_val_17509,c__5867__auto__){
return (function (state){return cljs.core.update_in.call(null,state,cursor,((function (response,inst_17503,inst_17504,state_val_17509,c__5867__auto__){
return (function (old_value){return response;
});})(response,inst_17503,inst_17504,state_val_17509,c__5867__auto__))
);
});
;})(response,inst_17503,inst_17504,state_val_17509,c__5867__auto__))
})();var inst_17506 = cljs.core.swap_BANG_.call(null,antares.core.app_state,inst_17505);var state_17508__$1 = state_17508;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17508__$1,inst_17506);
} else
{if((state_val_17509 === (1)))
{var inst_17501 = cljs_http.client.get.call(null,resource_url,cljs.core.PersistentHashMap.EMPTY);var state_17508__$1 = state_17508;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17508__$1,(2),inst_17501);
} else
{return null;
}
}
});})(c__5867__auto__))
;return ((function (switch__5852__auto__,c__5867__auto__){
return (function() {
var state_machine__5853__auto__ = null;
var state_machine__5853__auto____0 = (function (){var statearr_17513 = [null,null,null,null,null,null,null];(statearr_17513[(0)] = state_machine__5853__auto__);
(statearr_17513[(1)] = (1));
return statearr_17513;
});
var state_machine__5853__auto____1 = (function (state_17508){while(true){
var ret_value__5854__auto__ = (function (){try{while(true){
var result__5855__auto__ = switch__5852__auto__.call(null,state_17508);if(cljs.core.keyword_identical_QMARK_.call(null,result__5855__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5855__auto__;
}
break;
}
}catch (e17514){if((e17514 instanceof Object))
{var ex__5856__auto__ = e17514;var statearr_17515_17517 = state_17508;(statearr_17515_17517[(5)] = ex__5856__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17508);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17514;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17518 = state_17508;
state_17508 = G__17518;
continue;
}
} else
{return ret_value__5854__auto__;
}
break;
}
});
state_machine__5853__auto__ = function(state_17508){
switch(arguments.length){
case 0:
return state_machine__5853__auto____0.call(this);
case 1:
return state_machine__5853__auto____1.call(this,state_17508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5853__auto____0;
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5853__auto____1;
return state_machine__5853__auto__;
})()
;})(switch__5852__auto__,c__5867__auto__))
})();var state__5869__auto__ = (function (){var statearr_17516 = f__5868__auto__.call(null);(statearr_17516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5867__auto__);
return statearr_17516;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5869__auto__);
});})(c__5867__auto__))
);
return c__5867__auto__;
});
antares.core.update_app_update = (function update_app_update(state_fn){return cljs.core.reset_BANG_.call(null,antares.core.app_state,antares.core.update_fn.call(null));
});
antares.core.create_component = (function create_component(source_map){var component = antares.core.map__GT_Component.call(null,source_map);antares.core.register_app_state_cursor.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(source_map),cljs.core.PersistentArrayMap.EMPTY);
antares.core.register_component.call(null,component);
antares.core.bind_events.call(null,component);
antares.core.render.call(null,component);
antares.core.load_data.call(null,component);
return component;
});
antares.core.create_data_binding = (function (){var method_table__4409__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4410__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4411__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4412__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4413__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("create-data-binding",((function (method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__,hierarchy__4413__auto__){
return (function (app_cursor,dom_cursor,render_fn){return cljs.core._EQ_.call(null,cljs.core.type.call(null,app_cursor),cljs.core.List);
});})(method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__,hierarchy__4413__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4413__auto__,method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__));
})();
cljs.core._add_method.call(null,antares.core.create_data_binding,false,(function (app_cursor,dom_cursor,render_fn){var data_binding = antares.core.map__GT_DataBinding.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),app_cursor,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),dom_cursor,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),render_fn], null));antares.core.register_app_state_cursor.call(null,app_cursor,"");
antares.core.register_binding.call(null,data_binding);
antares.core.render.call(null,data_binding);
return data_binding;
}));
cljs.core._add_method.call(null,antares.core.create_data_binding,true,(function (app_cursor,dom_cursor,render_fn){var data_binding = antares.core.map__GT_DataBinding.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),app_cursor,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),dom_cursor,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),render_fn], null));var seq__17519_17523 = cljs.core.seq.call(null,app_cursor);var chunk__17520_17524 = null;var count__17521_17525 = (0);var i__17522_17526 = (0);while(true){
if((i__17522_17526 < count__17521_17525))
{var cursor_17527 = cljs.core._nth.call(null,chunk__17520_17524,i__17522_17526);antares.core.register_app_state_cursor.call(null,cursor_17527,"");
{
var G__17528 = seq__17519_17523;
var G__17529 = chunk__17520_17524;
var G__17530 = count__17521_17525;
var G__17531 = (i__17522_17526 + (1));
seq__17519_17523 = G__17528;
chunk__17520_17524 = G__17529;
count__17521_17525 = G__17530;
i__17522_17526 = G__17531;
continue;
}
} else
{var temp__4126__auto___17532 = cljs.core.seq.call(null,seq__17519_17523);if(temp__4126__auto___17532)
{var seq__17519_17533__$1 = temp__4126__auto___17532;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17519_17533__$1))
{var c__4299__auto___17534 = cljs.core.chunk_first.call(null,seq__17519_17533__$1);{
var G__17535 = cljs.core.chunk_rest.call(null,seq__17519_17533__$1);
var G__17536 = c__4299__auto___17534;
var G__17537 = cljs.core.count.call(null,c__4299__auto___17534);
var G__17538 = (0);
seq__17519_17523 = G__17535;
chunk__17520_17524 = G__17536;
count__17521_17525 = G__17537;
i__17522_17526 = G__17538;
continue;
}
} else
{var cursor_17539 = cljs.core.first.call(null,seq__17519_17533__$1);antares.core.register_app_state_cursor.call(null,cursor_17539,"");
{
var G__17540 = cljs.core.next.call(null,seq__17519_17533__$1);
var G__17541 = null;
var G__17542 = (0);
var G__17543 = (0);
seq__17519_17523 = G__17540;
chunk__17520_17524 = G__17541;
count__17521_17525 = G__17542;
i__17522_17526 = G__17543;
continue;
}
}
} else
{}
}
break;
}
antares.core.register_binding.call(null,data_binding);
antares.core.render.call(null,data_binding);
return data_binding;
}));
antares.core.data_bind = (function (){var method_table__4409__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4410__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4411__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4412__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4413__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("data-bind",((function (method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__,hierarchy__4413__auto__){
return (function (app_cursor,dom_cursors,render_fn){return cljs.core._EQ_.call(null,cljs.core.type.call(null,dom_cursors),cljs.core.List);
});})(method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__,hierarchy__4413__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4413__auto__,method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__));
})();
cljs.core._add_method.call(null,antares.core.data_bind,false,(function (app_cursor,dom_cursor,render_fn){return antares.core.create_data_binding.call(null,app_cursor,dom_cursor,render_fn);
}));
cljs.core._add_method.call(null,antares.core.data_bind,true,(function (app_cursor,dom_cursors,render_fn){var seq__17544 = cljs.core.seq.call(null,dom_cursors);var chunk__17545 = null;var count__17546 = (0);var i__17547 = (0);while(true){
if((i__17547 < count__17546))
{var dom_cursor = cljs.core._nth.call(null,chunk__17545,i__17547);antares.core.create_data_binding.call(null,app_cursor,dom_cursor,render_fn);
{
var G__17548 = seq__17544;
var G__17549 = chunk__17545;
var G__17550 = count__17546;
var G__17551 = (i__17547 + (1));
seq__17544 = G__17548;
chunk__17545 = G__17549;
count__17546 = G__17550;
i__17547 = G__17551;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__17544);if(temp__4126__auto__)
{var seq__17544__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17544__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__17544__$1);{
var G__17552 = cljs.core.chunk_rest.call(null,seq__17544__$1);
var G__17553 = c__4299__auto__;
var G__17554 = cljs.core.count.call(null,c__4299__auto__);
var G__17555 = (0);
seq__17544 = G__17552;
chunk__17545 = G__17553;
count__17546 = G__17554;
i__17547 = G__17555;
continue;
}
} else
{var dom_cursor = cljs.core.first.call(null,seq__17544__$1);antares.core.create_data_binding.call(null,app_cursor,dom_cursor,render_fn);
{
var G__17556 = cljs.core.next.call(null,seq__17544__$1);
var G__17557 = null;
var G__17558 = (0);
var G__17559 = (0);
seq__17544 = G__17556;
chunk__17545 = G__17557;
count__17546 = G__17558;
i__17547 = G__17559;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
antares.core.bind_event = (function bind_event(dom_cursor,event_type,action){return document.querySelector(dom_cursor).addEventListener(event_type,action);
});
antares.core.two_way_bind = (function two_way_bind(app_cursor,dom_cursor){antares.core.data_bind.call(null,app_cursor,dom_cursor,(function (data){return data;
}));
return antares.core.bind_event.call(null,dom_cursor,"input",(function (event){return antares.core.update_cursor.call(null,app_cursor,(function (old_value){return event.target.value;
}));
}));
});
cljs.core.add_watch.call(null,antares.core.app_state,new cljs.core.Keyword(null,"render-bindings","render-bindings",2043700547),(function (k,r,old_state,new_state){return antares.core.render_bindings.call(null,cljs.core.deref.call(null,antares.core.registered_bindings));
}));
cljs.core.add_watch.call(null,antares.core.app_state,new cljs.core.Keyword(null,"render-components","render-components",996968968),(function (k,r,old_state,new_state){return antares.core.render_components.call(null,cljs.core.deref.call(null,antares.core.registered_components));
}));
dommy.core.prepend_BANG_.call(null,document.querySelector("body"),(function (){var dom17560 = document.createElement("div");dom17560.className = "antares app-state";
dom17560.appendChild((function (){var dom17561 = document.createElement("textarea");dom17561.className = "antares app-state-inspector";
if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"80px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),".8rem"], null)))
{dom17561.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"80px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),".8rem"], null)));
} else
{}
return dom17561;
})());
return dom17560;
})());
antares.core.data_bind.call(null,cljs.core.PersistentVector.EMPTY,".antares.app-state-inspector",(function (data){return cljs.core.pr_str.call(null,data);
}));
antares.core.bind_event.call(null,".antares.app-state-inspector","input",(function (event){return antares.core.update_app_state.call(null,(function (){return antares.core.read_data.call(null,event.target.value);
}));
}));

//# sourceMappingURL=core.js.map