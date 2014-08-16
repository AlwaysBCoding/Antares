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
antares.core.Renderable = (function (){var obj16326 = {};return obj16326;
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
antares.core.EventResponder = (function (){var obj16328 = {};return obj16328;
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
antares.core.DataSource = (function (){var obj16330 = {};return obj16330;
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
antares.core.DataBinding.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4131__auto__,k16332,else__4132__auto__){var self__ = this;
var this__4131__auto____$1 = this;var G__16334 = (((k16332 instanceof cljs.core.Keyword))?k16332.fqn:null);switch (G__16334) {
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
return cljs.core.get.call(null,self__.__extmap,k16332,else__4132__auto__);

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
antares.core.DataBinding.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4136__auto__,k__4137__auto__,G__16331){var self__ = this;
var this__4136__auto____$1 = this;var pred__16335 = cljs.core.keyword_identical_QMARK_;var expr__16336 = k__4137__auto__;if(cljs.core.truth_(pred__16335.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),expr__16336)))
{return (new antares.core.DataBinding(G__16331,self__.dom_cursor,self__.render_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16335.call(null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),expr__16336)))
{return (new antares.core.DataBinding(self__.app_cursor,G__16331,self__.render_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16335.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),expr__16336)))
{return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,G__16331,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4137__auto__,G__16331),null));
}
}
}
});
antares.core.DataBinding.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null))], null),self__.__extmap));
});
antares.core.DataBinding.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4128__auto__,G__16331){var self__ = this;
var this__4128__auto____$1 = this;return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,self__.render_fn,G__16331,self__.__extmap,self__.__hash));
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
})()));var G__16338 = target_node.tagName;switch (G__16338) {
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
antares.core.map__GT_DataBinding = (function map__GT_DataBinding(G__16333){return (new antares.core.DataBinding(new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(G__16333),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(G__16333),new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(G__16333),null,cljs.core.dissoc.call(null,G__16333,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),new cljs.core.Keyword(null,"render-fn","render-fn",398796518))));
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
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4131__auto__,k16342,else__4132__auto__){var self__ = this;
var this__4131__auto____$1 = this;var G__16344 = (((k16342 instanceof cljs.core.Keyword))?k16342.fqn:null);switch (G__16344) {
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
return cljs.core.get.call(null,self__.__extmap,k16342,else__4132__auto__);

}
});
antares.core.Component.prototype.antares$core$DataSource$ = true;
antares.core.Component.prototype.antares$core$DataSource$load_data$arity$1 = (function (self){var self__ = this;
var self__$1 = this;if(cljs.core.truth_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1)))
{var G__16345 = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1));switch (G__16345) {
case "s3Bucket":
var c__5867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5867__auto__,G__16345,self__$1){
return (function (){var f__5868__auto__ = (function (){var switch__5852__auto__ = ((function (c__5867__auto__,G__16345,self__$1){
return (function (state_16354){var state_val_16355 = (state_16354[(1)]);if((state_val_16355 === (2)))
{var inst_16350 = (state_16354[(2)]);var inst_16351 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_16350);var inst_16352 = antares.core.cursor__GT_value.call(null,self__.app_cursor,inst_16351);var state_16354__$1 = state_16354;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16354__$1,inst_16352);
} else
{if((state_val_16355 === (1)))
{var inst_16346 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1);var inst_16347 = new cljs.core.Keyword(null,"bucket-name","bucket-name",-971156135).cljs$core$IFn$_invoke$arity$1(inst_16346);var inst_16348 = antares.importers.s3Bucket.call(null,inst_16347);var state_16354__$1 = state_16354;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16354__$1,(2),inst_16348);
} else
{return null;
}
}
});})(c__5867__auto__,G__16345,self__$1))
;return ((function (switch__5852__auto__,c__5867__auto__,G__16345,self__$1){
return (function() {
var state_machine__5853__auto__ = null;
var state_machine__5853__auto____0 = (function (){var statearr_16359 = [null,null,null,null,null,null,null];(statearr_16359[(0)] = state_machine__5853__auto__);
(statearr_16359[(1)] = (1));
return statearr_16359;
});
var state_machine__5853__auto____1 = (function (state_16354){while(true){
var ret_value__5854__auto__ = (function (){try{while(true){
var result__5855__auto__ = switch__5852__auto__.call(null,state_16354);if(cljs.core.keyword_identical_QMARK_.call(null,result__5855__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5855__auto__;
}
break;
}
}catch (e16360){if((e16360 instanceof Object))
{var ex__5856__auto__ = e16360;var statearr_16361_16385 = state_16354;(statearr_16361_16385[(5)] = ex__5856__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16354);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16360;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16386 = state_16354;
state_16354 = G__16386;
continue;
}
} else
{return ret_value__5854__auto__;
}
break;
}
});
state_machine__5853__auto__ = function(state_16354){
switch(arguments.length){
case 0:
return state_machine__5853__auto____0.call(this);
case 1:
return state_machine__5853__auto____1.call(this,state_16354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5853__auto____0;
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5853__auto____1;
return state_machine__5853__auto__;
})()
;})(switch__5852__auto__,c__5867__auto__,G__16345,self__$1))
})();var state__5869__auto__ = (function (){var statearr_16362 = f__5868__auto__.call(null);(statearr_16362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5867__auto__);
return statearr_16362;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5869__auto__);
});})(c__5867__auto__,G__16345,self__$1))
);
return c__5867__auto__;

break;
case "static":
var c__5867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5867__auto__,G__16345,self__$1){
return (function (){var f__5868__auto__ = (function (){var switch__5852__auto__ = ((function (c__5867__auto__,G__16345,self__$1){
return (function (state_16367){var state_val_16368 = (state_16367[(1)]);if((state_val_16368 === (1)))
{var inst_16363 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1);var inst_16364 = new cljs.core.Keyword(null,"initialize","initialize",609952913).cljs$core$IFn$_invoke$arity$1(inst_16363);var inst_16365 = antares.core.cursor__GT_value.call(null,self__.app_cursor,inst_16364);var state_16367__$1 = state_16367;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16367__$1,inst_16365);
} else
{return null;
}
});})(c__5867__auto__,G__16345,self__$1))
;return ((function (switch__5852__auto__,c__5867__auto__,G__16345,self__$1){
return (function() {
var state_machine__5853__auto__ = null;
var state_machine__5853__auto____0 = (function (){var statearr_16372 = [null,null,null,null,null,null,null];(statearr_16372[(0)] = state_machine__5853__auto__);
(statearr_16372[(1)] = (1));
return statearr_16372;
});
var state_machine__5853__auto____1 = (function (state_16367){while(true){
var ret_value__5854__auto__ = (function (){try{while(true){
var result__5855__auto__ = switch__5852__auto__.call(null,state_16367);if(cljs.core.keyword_identical_QMARK_.call(null,result__5855__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5855__auto__;
}
break;
}
}catch (e16373){if((e16373 instanceof Object))
{var ex__5856__auto__ = e16373;var statearr_16374_16387 = state_16367;(statearr_16374_16387[(5)] = ex__5856__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16367);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16373;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16388 = state_16367;
state_16367 = G__16388;
continue;
}
} else
{return ret_value__5854__auto__;
}
break;
}
});
state_machine__5853__auto__ = function(state_16367){
switch(arguments.length){
case 0:
return state_machine__5853__auto____0.call(this);
case 1:
return state_machine__5853__auto____1.call(this,state_16367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5853__auto____0;
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5853__auto____1;
return state_machine__5853__auto__;
})()
;})(switch__5852__auto__,c__5867__auto__,G__16345,self__$1))
})();var state__5869__auto__ = (function (){var statearr_16375 = f__5868__auto__.call(null);(statearr_16375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5867__auto__);
return statearr_16375;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5869__auto__);
});})(c__5867__auto__,G__16345,self__$1))
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
{var interactions__$1 = temp__4126__auto__;var seq__16376 = cljs.core.seq.call(null,interactions__$1);var chunk__16377 = null;var count__16378 = (0);var i__16379 = (0);while(true){
if((i__16379 < count__16378))
{var interaction = cljs.core._nth.call(null,chunk__16377,i__16379);document.querySelector(self__.dom_cursor).addEventListener(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"event-action","event-action",-974748529).cljs$core$IFn$_invoke$arity$1(interaction),true);
{
var G__16389 = seq__16376;
var G__16390 = chunk__16377;
var G__16391 = count__16378;
var G__16392 = (i__16379 + (1));
seq__16376 = G__16389;
chunk__16377 = G__16390;
count__16378 = G__16391;
i__16379 = G__16392;
continue;
}
} else
{var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__16376);if(temp__4126__auto____$1)
{var seq__16376__$1 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16376__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__16376__$1);{
var G__16393 = cljs.core.chunk_rest.call(null,seq__16376__$1);
var G__16394 = c__4299__auto__;
var G__16395 = cljs.core.count.call(null,c__4299__auto__);
var G__16396 = (0);
seq__16376 = G__16393;
chunk__16377 = G__16394;
count__16378 = G__16395;
i__16379 = G__16396;
continue;
}
} else
{var interaction = cljs.core.first.call(null,seq__16376__$1);document.querySelector(self__.dom_cursor).addEventListener(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"event-action","event-action",-974748529).cljs$core$IFn$_invoke$arity$1(interaction),true);
{
var G__16397 = cljs.core.next.call(null,seq__16376__$1);
var G__16398 = null;
var G__16399 = (0);
var G__16400 = (0);
seq__16376 = G__16397;
chunk__16377 = G__16398;
count__16378 = G__16399;
i__16379 = G__16400;
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
antares.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4136__auto__,k__4137__auto__,G__16341){var self__ = this;
var this__4136__auto____$1 = this;var pred__16380 = cljs.core.keyword_identical_QMARK_;var expr__16381 = k__4137__auto__;if(cljs.core.truth_(pred__16380.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),expr__16381)))
{return (new antares.core.Component(G__16341,self__.dom_cursor,self__.render_fn,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16380.call(null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),expr__16381)))
{return (new antares.core.Component(self__.app_cursor,G__16341,self__.render_fn,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16380.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),expr__16381)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,G__16341,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16380.call(null,new cljs.core.Keyword(null,"interactions","interactions",550841811),expr__16381)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,G__16341,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16380.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__16381)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.interactions,G__16341,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.interactions,self__.data,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4137__auto__,G__16341),null));
}
}
}
}
}
});
antares.core.Component.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"interactions","interactions",550841811),self__.interactions],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4128__auto__,G__16341){var self__ = this;
var this__4128__auto____$1 = this;return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.interactions,self__.data,G__16341,self__.__extmap,self__.__hash));
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
antares.core.map__GT_Component = (function map__GT_Component(G__16343){return (new antares.core.Component(new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(G__16343),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(G__16343),new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(G__16343),new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(G__16343),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__16343),null,cljs.core.dissoc.call(null,G__16343,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Keyword(null,"interactions","interactions",550841811),new cljs.core.Keyword(null,"data","data",-232669377))));
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
antares.core.render_bindings = (function render_bindings(data_bindings){var seq__16405 = cljs.core.seq.call(null,data_bindings);var chunk__16406 = null;var count__16407 = (0);var i__16408 = (0);while(true){
if((i__16408 < count__16407))
{var data_binding = cljs.core._nth.call(null,chunk__16406,i__16408);antares.core.render.call(null,data_binding);
{
var G__16409 = seq__16405;
var G__16410 = chunk__16406;
var G__16411 = count__16407;
var G__16412 = (i__16408 + (1));
seq__16405 = G__16409;
chunk__16406 = G__16410;
count__16407 = G__16411;
i__16408 = G__16412;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__16405);if(temp__4126__auto__)
{var seq__16405__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16405__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__16405__$1);{
var G__16413 = cljs.core.chunk_rest.call(null,seq__16405__$1);
var G__16414 = c__4299__auto__;
var G__16415 = cljs.core.count.call(null,c__4299__auto__);
var G__16416 = (0);
seq__16405 = G__16413;
chunk__16406 = G__16414;
count__16407 = G__16415;
i__16408 = G__16416;
continue;
}
} else
{var data_binding = cljs.core.first.call(null,seq__16405__$1);antares.core.render.call(null,data_binding);
{
var G__16417 = cljs.core.next.call(null,seq__16405__$1);
var G__16418 = null;
var G__16419 = (0);
var G__16420 = (0);
seq__16405 = G__16417;
chunk__16406 = G__16418;
count__16407 = G__16419;
i__16408 = G__16420;
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
antares.core.render_components = (function render_components(components__$1){var seq__16425 = cljs.core.seq.call(null,components__$1);var chunk__16426 = null;var count__16427 = (0);var i__16428 = (0);while(true){
if((i__16428 < count__16427))
{var component = cljs.core._nth.call(null,chunk__16426,i__16428);antares.core.render.call(null,component);
{
var G__16429 = seq__16425;
var G__16430 = chunk__16426;
var G__16431 = count__16427;
var G__16432 = (i__16428 + (1));
seq__16425 = G__16429;
chunk__16426 = G__16430;
count__16427 = G__16431;
i__16428 = G__16432;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__16425);if(temp__4126__auto__)
{var seq__16425__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16425__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__16425__$1);{
var G__16433 = cljs.core.chunk_rest.call(null,seq__16425__$1);
var G__16434 = c__4299__auto__;
var G__16435 = cljs.core.count.call(null,c__4299__auto__);
var G__16436 = (0);
seq__16425 = G__16433;
chunk__16426 = G__16434;
count__16427 = G__16435;
i__16428 = G__16436;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__16425__$1);antares.core.render.call(null,component);
{
var G__16437 = cljs.core.next.call(null,seq__16425__$1);
var G__16438 = null;
var G__16439 = (0);
var G__16440 = (0);
seq__16425 = G__16437;
chunk__16426 = G__16438;
count__16427 = G__16439;
i__16428 = G__16440;
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
return (function (state_16464){var state_val_16465 = (state_16464[(1)]);if((state_val_16465 === (2)))
{var inst_16459 = (state_16464[(2)]);var inst_16460 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_16459);var inst_16461 = (function (){var response = inst_16460;return ((function (response,inst_16459,inst_16460,state_val_16465,c__5867__auto__){
return (function (state){return cljs.core.update_in.call(null,state,cursor,((function (response,inst_16459,inst_16460,state_val_16465,c__5867__auto__){
return (function (old_value){return response;
});})(response,inst_16459,inst_16460,state_val_16465,c__5867__auto__))
);
});
;})(response,inst_16459,inst_16460,state_val_16465,c__5867__auto__))
})();var inst_16462 = cljs.core.swap_BANG_.call(null,antares.core.app_state,inst_16461);var state_16464__$1 = state_16464;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16464__$1,inst_16462);
} else
{if((state_val_16465 === (1)))
{var inst_16457 = cljs_http.client.get.call(null,resource_url,cljs.core.PersistentHashMap.EMPTY);var state_16464__$1 = state_16464;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16464__$1,(2),inst_16457);
} else
{return null;
}
}
});})(c__5867__auto__))
;return ((function (switch__5852__auto__,c__5867__auto__){
return (function() {
var state_machine__5853__auto__ = null;
var state_machine__5853__auto____0 = (function (){var statearr_16469 = [null,null,null,null,null,null,null];(statearr_16469[(0)] = state_machine__5853__auto__);
(statearr_16469[(1)] = (1));
return statearr_16469;
});
var state_machine__5853__auto____1 = (function (state_16464){while(true){
var ret_value__5854__auto__ = (function (){try{while(true){
var result__5855__auto__ = switch__5852__auto__.call(null,state_16464);if(cljs.core.keyword_identical_QMARK_.call(null,result__5855__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5855__auto__;
}
break;
}
}catch (e16470){if((e16470 instanceof Object))
{var ex__5856__auto__ = e16470;var statearr_16471_16473 = state_16464;(statearr_16471_16473[(5)] = ex__5856__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16464);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16470;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16474 = state_16464;
state_16464 = G__16474;
continue;
}
} else
{return ret_value__5854__auto__;
}
break;
}
});
state_machine__5853__auto__ = function(state_16464){
switch(arguments.length){
case 0:
return state_machine__5853__auto____0.call(this);
case 1:
return state_machine__5853__auto____1.call(this,state_16464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5853__auto____0;
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5853__auto____1;
return state_machine__5853__auto__;
})()
;})(switch__5852__auto__,c__5867__auto__))
})();var state__5869__auto__ = (function (){var statearr_16472 = f__5868__auto__.call(null);(statearr_16472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5867__auto__);
return statearr_16472;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5869__auto__);
});})(c__5867__auto__))
);
return c__5867__auto__;
});
antares.core.update_app_state = (function update_app_state(update_fn){return cljs.core.reset_BANG_.call(null,antares.core.app_state,update_fn.call(null));
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
cljs.core._add_method.call(null,antares.core.create_data_binding,true,(function (app_cursor,dom_cursor,render_fn){var data_binding = antares.core.map__GT_DataBinding.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),app_cursor,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),dom_cursor,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),render_fn], null));var seq__16475_16479 = cljs.core.seq.call(null,app_cursor);var chunk__16476_16480 = null;var count__16477_16481 = (0);var i__16478_16482 = (0);while(true){
if((i__16478_16482 < count__16477_16481))
{var cursor_16483 = cljs.core._nth.call(null,chunk__16476_16480,i__16478_16482);antares.core.register_app_state_cursor.call(null,cursor_16483,"");
{
var G__16484 = seq__16475_16479;
var G__16485 = chunk__16476_16480;
var G__16486 = count__16477_16481;
var G__16487 = (i__16478_16482 + (1));
seq__16475_16479 = G__16484;
chunk__16476_16480 = G__16485;
count__16477_16481 = G__16486;
i__16478_16482 = G__16487;
continue;
}
} else
{var temp__4126__auto___16488 = cljs.core.seq.call(null,seq__16475_16479);if(temp__4126__auto___16488)
{var seq__16475_16489__$1 = temp__4126__auto___16488;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16475_16489__$1))
{var c__4299__auto___16490 = cljs.core.chunk_first.call(null,seq__16475_16489__$1);{
var G__16491 = cljs.core.chunk_rest.call(null,seq__16475_16489__$1);
var G__16492 = c__4299__auto___16490;
var G__16493 = cljs.core.count.call(null,c__4299__auto___16490);
var G__16494 = (0);
seq__16475_16479 = G__16491;
chunk__16476_16480 = G__16492;
count__16477_16481 = G__16493;
i__16478_16482 = G__16494;
continue;
}
} else
{var cursor_16495 = cljs.core.first.call(null,seq__16475_16489__$1);antares.core.register_app_state_cursor.call(null,cursor_16495,"");
{
var G__16496 = cljs.core.next.call(null,seq__16475_16489__$1);
var G__16497 = null;
var G__16498 = (0);
var G__16499 = (0);
seq__16475_16479 = G__16496;
chunk__16476_16480 = G__16497;
count__16477_16481 = G__16498;
i__16478_16482 = G__16499;
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
cljs.core._add_method.call(null,antares.core.data_bind,true,(function (app_cursor,dom_cursors,render_fn){var seq__16500 = cljs.core.seq.call(null,dom_cursors);var chunk__16501 = null;var count__16502 = (0);var i__16503 = (0);while(true){
if((i__16503 < count__16502))
{var dom_cursor = cljs.core._nth.call(null,chunk__16501,i__16503);antares.core.create_data_binding.call(null,app_cursor,dom_cursor,render_fn);
{
var G__16504 = seq__16500;
var G__16505 = chunk__16501;
var G__16506 = count__16502;
var G__16507 = (i__16503 + (1));
seq__16500 = G__16504;
chunk__16501 = G__16505;
count__16502 = G__16506;
i__16503 = G__16507;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__16500);if(temp__4126__auto__)
{var seq__16500__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16500__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__16500__$1);{
var G__16508 = cljs.core.chunk_rest.call(null,seq__16500__$1);
var G__16509 = c__4299__auto__;
var G__16510 = cljs.core.count.call(null,c__4299__auto__);
var G__16511 = (0);
seq__16500 = G__16508;
chunk__16501 = G__16509;
count__16502 = G__16510;
i__16503 = G__16511;
continue;
}
} else
{var dom_cursor = cljs.core.first.call(null,seq__16500__$1);antares.core.create_data_binding.call(null,app_cursor,dom_cursor,render_fn);
{
var G__16512 = cljs.core.next.call(null,seq__16500__$1);
var G__16513 = null;
var G__16514 = (0);
var G__16515 = (0);
seq__16500 = G__16512;
chunk__16501 = G__16513;
count__16502 = G__16514;
i__16503 = G__16515;
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
dommy.core.prepend_BANG_.call(null,document.querySelector("body"),(function (){var dom16516 = document.createElement("div");dom16516.className = "antares app-state";
dom16516.appendChild((function (){var dom16517 = document.createElement("textarea");dom16517.className = "antares app-state-inspector";
if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"80px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),".8rem"], null)))
{dom16517.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"80px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),".8rem"], null)));
} else
{}
return dom16517;
})());
return dom16516;
})());
antares.core.data_bind.call(null,cljs.core.PersistentVector.EMPTY,".antares.app-state-inspector",(function (data){return cljs.core.pr_str.call(null,data);
}));
antares.core.bind_event.call(null,".antares.app-state-inspector","input",(function (event){return antares.core.update_app_state.call(null,(function (){return antares.core.read_data.call(null,event.target.value);
}));
}));

//# sourceMappingURL=core.js.map