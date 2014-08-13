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
antares.core.string__GT_matrix = (function string__GT_matrix(string){return cljs.core.map.call(null,(function (string__$1){return clojure.string.split.call(null,string__$1,/,/);
}),clojure.string.split.call(null,string,/\n/));
});
antares.core.cursor__GT_value = (function cursor__GT_value(cursor,new_value){return cljs.core.swap_BANG_.call(null,antares.core.app_state,(function (app_value){return cljs.core.update_in.call(null,app_value,cursor,(function (old_value){return cljs.core.vec.call(null,new_value);
}));
}));
});
antares.core.Renderable = (function (){var obj14468 = {};return obj14468;
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
antares.core.EventResponder = (function (){var obj14470 = {};return obj14470;
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
antares.core.DataSource = (function (){var obj14472 = {};return obj14472;
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
antares.core.DataBinding.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4131__auto__,k14474,else__4132__auto__){var self__ = this;
var this__4131__auto____$1 = this;var G__14476 = (((k14474 instanceof cljs.core.Keyword))?k14474.fqn:null);switch (G__14476) {
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
return cljs.core.get.call(null,self__.__extmap,k14474,else__4132__auto__);

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
antares.core.DataBinding.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4136__auto__,k__4137__auto__,G__14473){var self__ = this;
var this__4136__auto____$1 = this;var pred__14477 = cljs.core.keyword_identical_QMARK_;var expr__14478 = k__4137__auto__;if(cljs.core.truth_(pred__14477.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),expr__14478)))
{return (new antares.core.DataBinding(G__14473,self__.dom_cursor,self__.render_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14477.call(null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),expr__14478)))
{return (new antares.core.DataBinding(self__.app_cursor,G__14473,self__.render_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14477.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),expr__14478)))
{return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,G__14473,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4137__auto__,G__14473),null));
}
}
}
});
antares.core.DataBinding.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null))], null),self__.__extmap));
});
antares.core.DataBinding.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4128__auto__,G__14473){var self__ = this;
var this__4128__auto____$1 = this;return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,self__.render_fn,G__14473,self__.__extmap,self__.__hash));
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
})()));var G__14480 = target_node.tagName;switch (G__14480) {
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
antares.core.map__GT_DataBinding = (function map__GT_DataBinding(G__14475){return (new antares.core.DataBinding(new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(G__14475),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(G__14475),new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(G__14475),null,cljs.core.dissoc.call(null,G__14475,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),new cljs.core.Keyword(null,"render-fn","render-fn",398796518))));
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
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4131__auto__,k14484,else__4132__auto__){var self__ = this;
var this__4131__auto____$1 = this;var G__14486 = (((k14484 instanceof cljs.core.Keyword))?k14484.fqn:null);switch (G__14486) {
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
return cljs.core.get.call(null,self__.__extmap,k14484,else__4132__auto__);

}
});
antares.core.Component.prototype.antares$core$DataSource$ = true;
antares.core.Component.prototype.antares$core$DataSource$load_data$arity$1 = (function (self){var self__ = this;
var self__$1 = this;if(cljs.core.truth_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1)))
{var c__5867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5867__auto__,self__$1){
return (function (){var f__5868__auto__ = (function (){var switch__5852__auto__ = ((function (c__5867__auto__,self__$1){
return (function (state_14495){var state_val_14496 = (state_14495[(1)]);if((state_val_14496 === (2)))
{var inst_14491 = (state_14495[(2)]);var inst_14492 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_14491);var inst_14493 = antares.core.cursor__GT_value.call(null,self__.app_cursor,inst_14492);var state_14495__$1 = state_14495;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14495__$1,inst_14493);
} else
{if((state_val_14496 === (1)))
{var inst_14487 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1);var inst_14488 = new cljs.core.Keyword(null,"bucket-name","bucket-name",-971156135).cljs$core$IFn$_invoke$arity$1(inst_14487);var inst_14489 = antares.importers.s3Bucket.call(null,inst_14488);var state_14495__$1 = state_14495;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14495__$1,(2),inst_14489);
} else
{return null;
}
}
});})(c__5867__auto__,self__$1))
;return ((function (switch__5852__auto__,c__5867__auto__,self__$1){
return (function() {
var state_machine__5853__auto__ = null;
var state_machine__5853__auto____0 = (function (){var statearr_14500 = [null,null,null,null,null,null,null];(statearr_14500[(0)] = state_machine__5853__auto__);
(statearr_14500[(1)] = (1));
return statearr_14500;
});
var state_machine__5853__auto____1 = (function (state_14495){while(true){
var ret_value__5854__auto__ = (function (){try{while(true){
var result__5855__auto__ = switch__5852__auto__.call(null,state_14495);if(cljs.core.keyword_identical_QMARK_.call(null,result__5855__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5855__auto__;
}
break;
}
}catch (e14501){if((e14501 instanceof Object))
{var ex__5856__auto__ = e14501;var statearr_14502_14516 = state_14495;(statearr_14502_14516[(5)] = ex__5856__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14495);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14501;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14517 = state_14495;
state_14495 = G__14517;
continue;
}
} else
{return ret_value__5854__auto__;
}
break;
}
});
state_machine__5853__auto__ = function(state_14495){
switch(arguments.length){
case 0:
return state_machine__5853__auto____0.call(this);
case 1:
return state_machine__5853__auto____1.call(this,state_14495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5853__auto____0;
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5853__auto____1;
return state_machine__5853__auto__;
})()
;})(switch__5852__auto__,c__5867__auto__,self__$1))
})();var state__5869__auto__ = (function (){var statearr_14503 = f__5868__auto__.call(null);(statearr_14503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5867__auto__);
return statearr_14503;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5869__auto__);
});})(c__5867__auto__,self__$1))
);
return c__5867__auto__;
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
{var interactions__$1 = temp__4126__auto__;var seq__14504 = cljs.core.seq.call(null,interactions__$1);var chunk__14505 = null;var count__14506 = (0);var i__14507 = (0);while(true){
if((i__14507 < count__14506))
{var interaction = cljs.core._nth.call(null,chunk__14505,i__14507);document.querySelector(self__.dom_cursor).addEventListener(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"event-action","event-action",-974748529).cljs$core$IFn$_invoke$arity$1(interaction),true);
{
var G__14518 = seq__14504;
var G__14519 = chunk__14505;
var G__14520 = count__14506;
var G__14521 = (i__14507 + (1));
seq__14504 = G__14518;
chunk__14505 = G__14519;
count__14506 = G__14520;
i__14507 = G__14521;
continue;
}
} else
{var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__14504);if(temp__4126__auto____$1)
{var seq__14504__$1 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14504__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__14504__$1);{
var G__14522 = cljs.core.chunk_rest.call(null,seq__14504__$1);
var G__14523 = c__4299__auto__;
var G__14524 = cljs.core.count.call(null,c__4299__auto__);
var G__14525 = (0);
seq__14504 = G__14522;
chunk__14505 = G__14523;
count__14506 = G__14524;
i__14507 = G__14525;
continue;
}
} else
{var interaction = cljs.core.first.call(null,seq__14504__$1);document.querySelector(self__.dom_cursor).addEventListener(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"event-action","event-action",-974748529).cljs$core$IFn$_invoke$arity$1(interaction),true);
{
var G__14526 = cljs.core.next.call(null,seq__14504__$1);
var G__14527 = null;
var G__14528 = (0);
var G__14529 = (0);
seq__14504 = G__14526;
chunk__14505 = G__14527;
count__14506 = G__14528;
i__14507 = G__14529;
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
antares.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4136__auto__,k__4137__auto__,G__14483){var self__ = this;
var this__4136__auto____$1 = this;var pred__14508 = cljs.core.keyword_identical_QMARK_;var expr__14509 = k__4137__auto__;if(cljs.core.truth_(pred__14508.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),expr__14509)))
{return (new antares.core.Component(G__14483,self__.dom_cursor,self__.render_fn,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14508.call(null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),expr__14509)))
{return (new antares.core.Component(self__.app_cursor,G__14483,self__.render_fn,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14508.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),expr__14509)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,G__14483,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14508.call(null,new cljs.core.Keyword(null,"interactions","interactions",550841811),expr__14509)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,G__14483,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14508.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__14509)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.interactions,G__14483,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.interactions,self__.data,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4137__auto__,G__14483),null));
}
}
}
}
}
});
antares.core.Component.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"interactions","interactions",550841811),self__.interactions],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4128__auto__,G__14483){var self__ = this;
var this__4128__auto____$1 = this;return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.interactions,self__.data,G__14483,self__.__extmap,self__.__hash));
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
var self__$1 = this;var target_node = document.querySelector(self__.dom_cursor);var new_nodes_data = self__.render_fn.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,antares.core.app_state),self__.app_cursor));target_node.innerHTML = "";
var seq__14511 = cljs.core.seq.call(null,new_nodes_data);var chunk__14512 = null;var count__14513 = (0);var i__14514 = (0);while(true){
if((i__14514 < count__14513))
{var new_node_data = cljs.core._nth.call(null,chunk__14512,i__14514);var node_to_append_14530 = dommy.template.__GT_node_like.call(null,new_node_data);dommy.core.append_BANG_.call(null,target_node,node_to_append_14530);
{
var G__14531 = seq__14511;
var G__14532 = chunk__14512;
var G__14533 = count__14513;
var G__14534 = (i__14514 + (1));
seq__14511 = G__14531;
chunk__14512 = G__14532;
count__14513 = G__14533;
i__14514 = G__14534;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14511);if(temp__4126__auto__)
{var seq__14511__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14511__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__14511__$1);{
var G__14535 = cljs.core.chunk_rest.call(null,seq__14511__$1);
var G__14536 = c__4299__auto__;
var G__14537 = cljs.core.count.call(null,c__4299__auto__);
var G__14538 = (0);
seq__14511 = G__14535;
chunk__14512 = G__14536;
count__14513 = G__14537;
i__14514 = G__14538;
continue;
}
} else
{var new_node_data = cljs.core.first.call(null,seq__14511__$1);var node_to_append_14539 = dommy.template.__GT_node_like.call(null,new_node_data);dommy.core.append_BANG_.call(null,target_node,node_to_append_14539);
{
var G__14540 = cljs.core.next.call(null,seq__14511__$1);
var G__14541 = null;
var G__14542 = (0);
var G__14543 = (0);
seq__14511 = G__14540;
chunk__14512 = G__14541;
count__14513 = G__14542;
i__14514 = G__14543;
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
antares.core.Component.cljs$lang$type = true;
antares.core.Component.cljs$lang$ctorPrSeq = (function (this__4163__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"antares.core/Component");
});
antares.core.Component.cljs$lang$ctorPrWriter = (function (this__4163__auto__,writer__4164__auto__){return cljs.core._write.call(null,writer__4164__auto__,"antares.core/Component");
});
antares.core.__GT_Component = (function __GT_Component(app_cursor,dom_cursor,render_fn,interactions,data){return (new antares.core.Component(app_cursor,dom_cursor,render_fn,interactions,data));
});
antares.core.map__GT_Component = (function map__GT_Component(G__14485){return (new antares.core.Component(new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(G__14485),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(G__14485),new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(G__14485),new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(G__14485),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__14485),null,cljs.core.dissoc.call(null,G__14485,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Keyword(null,"interactions","interactions",550841811),new cljs.core.Keyword(null,"data","data",-232669377))));
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
antares.core.render_bindings = (function render_bindings(data_bindings){var seq__14548 = cljs.core.seq.call(null,data_bindings);var chunk__14549 = null;var count__14550 = (0);var i__14551 = (0);while(true){
if((i__14551 < count__14550))
{var data_binding = cljs.core._nth.call(null,chunk__14549,i__14551);antares.core.render.call(null,data_binding);
{
var G__14552 = seq__14548;
var G__14553 = chunk__14549;
var G__14554 = count__14550;
var G__14555 = (i__14551 + (1));
seq__14548 = G__14552;
chunk__14549 = G__14553;
count__14550 = G__14554;
i__14551 = G__14555;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14548);if(temp__4126__auto__)
{var seq__14548__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14548__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__14548__$1);{
var G__14556 = cljs.core.chunk_rest.call(null,seq__14548__$1);
var G__14557 = c__4299__auto__;
var G__14558 = cljs.core.count.call(null,c__4299__auto__);
var G__14559 = (0);
seq__14548 = G__14556;
chunk__14549 = G__14557;
count__14550 = G__14558;
i__14551 = G__14559;
continue;
}
} else
{var data_binding = cljs.core.first.call(null,seq__14548__$1);antares.core.render.call(null,data_binding);
{
var G__14560 = cljs.core.next.call(null,seq__14548__$1);
var G__14561 = null;
var G__14562 = (0);
var G__14563 = (0);
seq__14548 = G__14560;
chunk__14549 = G__14561;
count__14550 = G__14562;
i__14551 = G__14563;
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
antares.core.render_components = (function render_components(components){var seq__14568 = cljs.core.seq.call(null,components);var chunk__14569 = null;var count__14570 = (0);var i__14571 = (0);while(true){
if((i__14571 < count__14570))
{var component = cljs.core._nth.call(null,chunk__14569,i__14571);antares.core.render.call(null,component);
{
var G__14572 = seq__14568;
var G__14573 = chunk__14569;
var G__14574 = count__14570;
var G__14575 = (i__14571 + (1));
seq__14568 = G__14572;
chunk__14569 = G__14573;
count__14570 = G__14574;
i__14571 = G__14575;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14568);if(temp__4126__auto__)
{var seq__14568__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14568__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__14568__$1);{
var G__14576 = cljs.core.chunk_rest.call(null,seq__14568__$1);
var G__14577 = c__4299__auto__;
var G__14578 = cljs.core.count.call(null,c__4299__auto__);
var G__14579 = (0);
seq__14568 = G__14576;
chunk__14569 = G__14577;
count__14570 = G__14578;
i__14571 = G__14579;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__14568__$1);antares.core.render.call(null,component);
{
var G__14580 = cljs.core.next.call(null,seq__14568__$1);
var G__14581 = null;
var G__14582 = (0);
var G__14583 = (0);
seq__14568 = G__14580;
chunk__14569 = G__14581;
count__14570 = G__14582;
i__14571 = G__14583;
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
return (function (state_14609){var state_val_14610 = (state_14609[(1)]);if((state_val_14610 === (2)))
{var inst_14603 = (state_14609[(2)]);var inst_14604 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_14603);var inst_14605 = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(inst_14604);var inst_14606 = (function (){var file_content = inst_14605;return ((function (file_content,inst_14603,inst_14604,inst_14605,state_val_14610,c__5867__auto__){
return (function (state){return cljs.core.update_in.call(null,state,cursor,((function (file_content,inst_14603,inst_14604,inst_14605,state_val_14610,c__5867__auto__){
return (function (old_value){return file_content;
});})(file_content,inst_14603,inst_14604,inst_14605,state_val_14610,c__5867__auto__))
);
});
;})(file_content,inst_14603,inst_14604,inst_14605,state_val_14610,c__5867__auto__))
})();var inst_14607 = cljs.core.swap_BANG_.call(null,antares.core.app_state,inst_14606);var state_14609__$1 = state_14609;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14609__$1,inst_14607);
} else
{if((state_val_14610 === (1)))
{var inst_14601 = cljs_http.client.get.call(null,resource_url,cljs.core.PersistentHashMap.EMPTY);var state_14609__$1 = state_14609;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14609__$1,(2),inst_14601);
} else
{return null;
}
}
});})(c__5867__auto__))
;return ((function (switch__5852__auto__,c__5867__auto__){
return (function() {
var state_machine__5853__auto__ = null;
var state_machine__5853__auto____0 = (function (){var statearr_14614 = [null,null,null,null,null,null,null];(statearr_14614[(0)] = state_machine__5853__auto__);
(statearr_14614[(1)] = (1));
return statearr_14614;
});
var state_machine__5853__auto____1 = (function (state_14609){while(true){
var ret_value__5854__auto__ = (function (){try{while(true){
var result__5855__auto__ = switch__5852__auto__.call(null,state_14609);if(cljs.core.keyword_identical_QMARK_.call(null,result__5855__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5855__auto__;
}
break;
}
}catch (e14615){if((e14615 instanceof Object))
{var ex__5856__auto__ = e14615;var statearr_14616_14618 = state_14609;(statearr_14616_14618[(5)] = ex__5856__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14609);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14615;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14619 = state_14609;
state_14609 = G__14619;
continue;
}
} else
{return ret_value__5854__auto__;
}
break;
}
});
state_machine__5853__auto__ = function(state_14609){
switch(arguments.length){
case 0:
return state_machine__5853__auto____0.call(this);
case 1:
return state_machine__5853__auto____1.call(this,state_14609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5853__auto____0;
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5853__auto____1;
return state_machine__5853__auto__;
})()
;})(switch__5852__auto__,c__5867__auto__))
})();var state__5869__auto__ = (function (){var statearr_14617 = f__5868__auto__.call(null);(statearr_14617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5867__auto__);
return statearr_14617;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5869__auto__);
});})(c__5867__auto__))
);
return c__5867__auto__;
});
antares.core.update_app_state = (function update_app_state(update_fn){return cljs.core.reset_BANG_.call(null,antares.core.app_state,update_fn.call(null));
});
antares.core.create_component = (function create_component(source_map){var component = antares.core.map__GT_Component.call(null,source_map);antares.core.register_app_state_cursor.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(source_map),cljs.core.PersistentVector.EMPTY);
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
cljs.core._add_method.call(null,antares.core.create_data_binding,true,(function (app_cursor,dom_cursor,render_fn){var data_binding = antares.core.map__GT_DataBinding.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),app_cursor,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),dom_cursor,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),render_fn], null));var seq__14620_14624 = cljs.core.seq.call(null,app_cursor);var chunk__14621_14625 = null;var count__14622_14626 = (0);var i__14623_14627 = (0);while(true){
if((i__14623_14627 < count__14622_14626))
{var cursor_14628 = cljs.core._nth.call(null,chunk__14621_14625,i__14623_14627);antares.core.register_app_state_cursor.call(null,cursor_14628,"");
{
var G__14629 = seq__14620_14624;
var G__14630 = chunk__14621_14625;
var G__14631 = count__14622_14626;
var G__14632 = (i__14623_14627 + (1));
seq__14620_14624 = G__14629;
chunk__14621_14625 = G__14630;
count__14622_14626 = G__14631;
i__14623_14627 = G__14632;
continue;
}
} else
{var temp__4126__auto___14633 = cljs.core.seq.call(null,seq__14620_14624);if(temp__4126__auto___14633)
{var seq__14620_14634__$1 = temp__4126__auto___14633;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14620_14634__$1))
{var c__4299__auto___14635 = cljs.core.chunk_first.call(null,seq__14620_14634__$1);{
var G__14636 = cljs.core.chunk_rest.call(null,seq__14620_14634__$1);
var G__14637 = c__4299__auto___14635;
var G__14638 = cljs.core.count.call(null,c__4299__auto___14635);
var G__14639 = (0);
seq__14620_14624 = G__14636;
chunk__14621_14625 = G__14637;
count__14622_14626 = G__14638;
i__14623_14627 = G__14639;
continue;
}
} else
{var cursor_14640 = cljs.core.first.call(null,seq__14620_14634__$1);antares.core.register_app_state_cursor.call(null,cursor_14640,"");
{
var G__14641 = cljs.core.next.call(null,seq__14620_14634__$1);
var G__14642 = null;
var G__14643 = (0);
var G__14644 = (0);
seq__14620_14624 = G__14641;
chunk__14621_14625 = G__14642;
count__14622_14626 = G__14643;
i__14623_14627 = G__14644;
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
cljs.core._add_method.call(null,antares.core.data_bind,true,(function (app_cursor,dom_cursors,render_fn){var seq__14645 = cljs.core.seq.call(null,dom_cursors);var chunk__14646 = null;var count__14647 = (0);var i__14648 = (0);while(true){
if((i__14648 < count__14647))
{var dom_cursor = cljs.core._nth.call(null,chunk__14646,i__14648);antares.core.create_data_binding.call(null,app_cursor,dom_cursor,render_fn);
{
var G__14649 = seq__14645;
var G__14650 = chunk__14646;
var G__14651 = count__14647;
var G__14652 = (i__14648 + (1));
seq__14645 = G__14649;
chunk__14646 = G__14650;
count__14647 = G__14651;
i__14648 = G__14652;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14645);if(temp__4126__auto__)
{var seq__14645__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14645__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__14645__$1);{
var G__14653 = cljs.core.chunk_rest.call(null,seq__14645__$1);
var G__14654 = c__4299__auto__;
var G__14655 = cljs.core.count.call(null,c__4299__auto__);
var G__14656 = (0);
seq__14645 = G__14653;
chunk__14646 = G__14654;
count__14647 = G__14655;
i__14648 = G__14656;
continue;
}
} else
{var dom_cursor = cljs.core.first.call(null,seq__14645__$1);antares.core.create_data_binding.call(null,app_cursor,dom_cursor,render_fn);
{
var G__14657 = cljs.core.next.call(null,seq__14645__$1);
var G__14658 = null;
var G__14659 = (0);
var G__14660 = (0);
seq__14645 = G__14657;
chunk__14646 = G__14658;
count__14647 = G__14659;
i__14648 = G__14660;
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
dommy.core.prepend_BANG_.call(null,document.querySelector("body"),(function (){var dom14661 = document.createElement("div");dom14661.className = "antares app-state";
dom14661.appendChild((function (){var dom14662 = document.createElement("textarea");dom14662.className = "antares app-state-inspector";
if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"80px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),".8rem"], null)))
{dom14662.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"80px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),".8rem"], null)));
} else
{}
return dom14662;
})());
return dom14661;
})());
antares.core.data_bind.call(null,cljs.core.PersistentVector.EMPTY,".antares.app-state-inspector",(function (data){return cljs.core.pr_str.call(null,data);
}));
antares.core.bind_event.call(null,".antares.app-state-inspector","input",(function (event){return antares.core.update_app_state.call(null,(function (){return antares.core.read_data.call(null,event.target.value);
}));
}));

//# sourceMappingURL=core.js.map