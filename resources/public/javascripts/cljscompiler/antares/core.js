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
antares.core.Renderable = (function (){var obj16588 = {};return obj16588;
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
antares.core.EventResponder = (function (){var obj16590 = {};return obj16590;
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
antares.core.DataSource = (function (){var obj16592 = {};return obj16592;
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
antares.core.DataBinding.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4131__auto__,k16594,else__4132__auto__){var self__ = this;
var this__4131__auto____$1 = this;var G__16596 = (((k16594 instanceof cljs.core.Keyword))?k16594.fqn:null);switch (G__16596) {
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
return cljs.core.get.call(null,self__.__extmap,k16594,else__4132__auto__);

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
antares.core.DataBinding.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4136__auto__,k__4137__auto__,G__16593){var self__ = this;
var this__4136__auto____$1 = this;var pred__16597 = cljs.core.keyword_identical_QMARK_;var expr__16598 = k__4137__auto__;if(cljs.core.truth_(pred__16597.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),expr__16598)))
{return (new antares.core.DataBinding(G__16593,self__.dom_cursor,self__.render_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16597.call(null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),expr__16598)))
{return (new antares.core.DataBinding(self__.app_cursor,G__16593,self__.render_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16597.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),expr__16598)))
{return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,G__16593,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4137__auto__,G__16593),null));
}
}
}
});
antares.core.DataBinding.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null))], null),self__.__extmap));
});
antares.core.DataBinding.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4128__auto__,G__16593){var self__ = this;
var this__4128__auto____$1 = this;return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,self__.render_fn,G__16593,self__.__extmap,self__.__hash));
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
})()));var G__16600 = target_node.tagName;switch (G__16600) {
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
antares.core.map__GT_DataBinding = (function map__GT_DataBinding(G__16595){return (new antares.core.DataBinding(new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(G__16595),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(G__16595),new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(G__16595),null,cljs.core.dissoc.call(null,G__16595,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),new cljs.core.Keyword(null,"render-fn","render-fn",398796518))));
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
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4131__auto__,k16604,else__4132__auto__){var self__ = this;
var this__4131__auto____$1 = this;var G__16606 = (((k16604 instanceof cljs.core.Keyword))?k16604.fqn:null);switch (G__16606) {
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
return cljs.core.get.call(null,self__.__extmap,k16604,else__4132__auto__);

}
});
antares.core.Component.prototype.antares$core$DataSource$ = true;
antares.core.Component.prototype.antares$core$DataSource$load_data$arity$1 = (function (self){var self__ = this;
var self__$1 = this;if(cljs.core.truth_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1)))
{var G__16607 = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1));switch (G__16607) {
case "s3Bucket":
var c__5867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5867__auto__,G__16607,self__$1){
return (function (){var f__5868__auto__ = (function (){var switch__5852__auto__ = ((function (c__5867__auto__,G__16607,self__$1){
return (function (state_16616){var state_val_16617 = (state_16616[(1)]);if((state_val_16617 === (2)))
{var inst_16612 = (state_16616[(2)]);var inst_16613 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_16612);var inst_16614 = antares.core.cursor__GT_value.call(null,self__.app_cursor,inst_16613);var state_16616__$1 = state_16616;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16616__$1,inst_16614);
} else
{if((state_val_16617 === (1)))
{var inst_16608 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1);var inst_16609 = new cljs.core.Keyword(null,"bucket-name","bucket-name",-971156135).cljs$core$IFn$_invoke$arity$1(inst_16608);var inst_16610 = antares.importers.s3Bucket.call(null,inst_16609);var state_16616__$1 = state_16616;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16616__$1,(2),inst_16610);
} else
{return null;
}
}
});})(c__5867__auto__,G__16607,self__$1))
;return ((function (switch__5852__auto__,c__5867__auto__,G__16607,self__$1){
return (function() {
var state_machine__5853__auto__ = null;
var state_machine__5853__auto____0 = (function (){var statearr_16621 = [null,null,null,null,null,null,null];(statearr_16621[(0)] = state_machine__5853__auto__);
(statearr_16621[(1)] = (1));
return statearr_16621;
});
var state_machine__5853__auto____1 = (function (state_16616){while(true){
var ret_value__5854__auto__ = (function (){try{while(true){
var result__5855__auto__ = switch__5852__auto__.call(null,state_16616);if(cljs.core.keyword_identical_QMARK_.call(null,result__5855__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5855__auto__;
}
break;
}
}catch (e16622){if((e16622 instanceof Object))
{var ex__5856__auto__ = e16622;var statearr_16623_16647 = state_16616;(statearr_16623_16647[(5)] = ex__5856__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16616);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16622;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16648 = state_16616;
state_16616 = G__16648;
continue;
}
} else
{return ret_value__5854__auto__;
}
break;
}
});
state_machine__5853__auto__ = function(state_16616){
switch(arguments.length){
case 0:
return state_machine__5853__auto____0.call(this);
case 1:
return state_machine__5853__auto____1.call(this,state_16616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5853__auto____0;
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5853__auto____1;
return state_machine__5853__auto__;
})()
;})(switch__5852__auto__,c__5867__auto__,G__16607,self__$1))
})();var state__5869__auto__ = (function (){var statearr_16624 = f__5868__auto__.call(null);(statearr_16624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5867__auto__);
return statearr_16624;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5869__auto__);
});})(c__5867__auto__,G__16607,self__$1))
);
return c__5867__auto__;

break;
case "static":
var c__5867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5867__auto__,G__16607,self__$1){
return (function (){var f__5868__auto__ = (function (){var switch__5852__auto__ = ((function (c__5867__auto__,G__16607,self__$1){
return (function (state_16629){var state_val_16630 = (state_16629[(1)]);if((state_val_16630 === (1)))
{var inst_16625 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1);var inst_16626 = new cljs.core.Keyword(null,"initialize","initialize",609952913).cljs$core$IFn$_invoke$arity$1(inst_16625);var inst_16627 = antares.core.cursor__GT_value.call(null,self__.app_cursor,inst_16626);var state_16629__$1 = state_16629;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16629__$1,inst_16627);
} else
{return null;
}
});})(c__5867__auto__,G__16607,self__$1))
;return ((function (switch__5852__auto__,c__5867__auto__,G__16607,self__$1){
return (function() {
var state_machine__5853__auto__ = null;
var state_machine__5853__auto____0 = (function (){var statearr_16634 = [null,null,null,null,null,null,null];(statearr_16634[(0)] = state_machine__5853__auto__);
(statearr_16634[(1)] = (1));
return statearr_16634;
});
var state_machine__5853__auto____1 = (function (state_16629){while(true){
var ret_value__5854__auto__ = (function (){try{while(true){
var result__5855__auto__ = switch__5852__auto__.call(null,state_16629);if(cljs.core.keyword_identical_QMARK_.call(null,result__5855__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5855__auto__;
}
break;
}
}catch (e16635){if((e16635 instanceof Object))
{var ex__5856__auto__ = e16635;var statearr_16636_16649 = state_16629;(statearr_16636_16649[(5)] = ex__5856__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16629);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16635;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16650 = state_16629;
state_16629 = G__16650;
continue;
}
} else
{return ret_value__5854__auto__;
}
break;
}
});
state_machine__5853__auto__ = function(state_16629){
switch(arguments.length){
case 0:
return state_machine__5853__auto____0.call(this);
case 1:
return state_machine__5853__auto____1.call(this,state_16629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5853__auto____0;
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5853__auto____1;
return state_machine__5853__auto__;
})()
;})(switch__5852__auto__,c__5867__auto__,G__16607,self__$1))
})();var state__5869__auto__ = (function (){var statearr_16637 = f__5868__auto__.call(null);(statearr_16637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5867__auto__);
return statearr_16637;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5869__auto__);
});})(c__5867__auto__,G__16607,self__$1))
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
{var interactions__$1 = temp__4126__auto__;var seq__16638 = cljs.core.seq.call(null,interactions__$1);var chunk__16639 = null;var count__16640 = (0);var i__16641 = (0);while(true){
if((i__16641 < count__16640))
{var interaction = cljs.core._nth.call(null,chunk__16639,i__16641);document.querySelector(self__.dom_cursor).addEventListener(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"event-action","event-action",-974748529).cljs$core$IFn$_invoke$arity$1(interaction),true);
{
var G__16651 = seq__16638;
var G__16652 = chunk__16639;
var G__16653 = count__16640;
var G__16654 = (i__16641 + (1));
seq__16638 = G__16651;
chunk__16639 = G__16652;
count__16640 = G__16653;
i__16641 = G__16654;
continue;
}
} else
{var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__16638);if(temp__4126__auto____$1)
{var seq__16638__$1 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16638__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__16638__$1);{
var G__16655 = cljs.core.chunk_rest.call(null,seq__16638__$1);
var G__16656 = c__4299__auto__;
var G__16657 = cljs.core.count.call(null,c__4299__auto__);
var G__16658 = (0);
seq__16638 = G__16655;
chunk__16639 = G__16656;
count__16640 = G__16657;
i__16641 = G__16658;
continue;
}
} else
{var interaction = cljs.core.first.call(null,seq__16638__$1);document.querySelector(self__.dom_cursor).addEventListener(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"event-action","event-action",-974748529).cljs$core$IFn$_invoke$arity$1(interaction),true);
{
var G__16659 = cljs.core.next.call(null,seq__16638__$1);
var G__16660 = null;
var G__16661 = (0);
var G__16662 = (0);
seq__16638 = G__16659;
chunk__16639 = G__16660;
count__16640 = G__16661;
i__16641 = G__16662;
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
antares.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4136__auto__,k__4137__auto__,G__16603){var self__ = this;
var this__4136__auto____$1 = this;var pred__16642 = cljs.core.keyword_identical_QMARK_;var expr__16643 = k__4137__auto__;if(cljs.core.truth_(pred__16642.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),expr__16643)))
{return (new antares.core.Component(G__16603,self__.dom_cursor,self__.render_fn,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16642.call(null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),expr__16643)))
{return (new antares.core.Component(self__.app_cursor,G__16603,self__.render_fn,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16642.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),expr__16643)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,G__16603,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16642.call(null,new cljs.core.Keyword(null,"interactions","interactions",550841811),expr__16643)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,G__16603,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16642.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__16643)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.interactions,G__16603,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.interactions,self__.data,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4137__auto__,G__16603),null));
}
}
}
}
}
});
antares.core.Component.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"interactions","interactions",550841811),self__.interactions],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4128__auto__,G__16603){var self__ = this;
var this__4128__auto____$1 = this;return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.interactions,self__.data,G__16603,self__.__extmap,self__.__hash));
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
antares.core.map__GT_Component = (function map__GT_Component(G__16605){return (new antares.core.Component(new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(G__16605),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(G__16605),new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(G__16605),new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(G__16605),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__16605),null,cljs.core.dissoc.call(null,G__16605,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Keyword(null,"interactions","interactions",550841811),new cljs.core.Keyword(null,"data","data",-232669377))));
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
antares.core.render_bindings = (function render_bindings(data_bindings){var seq__16667 = cljs.core.seq.call(null,data_bindings);var chunk__16668 = null;var count__16669 = (0);var i__16670 = (0);while(true){
if((i__16670 < count__16669))
{var data_binding = cljs.core._nth.call(null,chunk__16668,i__16670);antares.core.render.call(null,data_binding);
{
var G__16671 = seq__16667;
var G__16672 = chunk__16668;
var G__16673 = count__16669;
var G__16674 = (i__16670 + (1));
seq__16667 = G__16671;
chunk__16668 = G__16672;
count__16669 = G__16673;
i__16670 = G__16674;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__16667);if(temp__4126__auto__)
{var seq__16667__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16667__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__16667__$1);{
var G__16675 = cljs.core.chunk_rest.call(null,seq__16667__$1);
var G__16676 = c__4299__auto__;
var G__16677 = cljs.core.count.call(null,c__4299__auto__);
var G__16678 = (0);
seq__16667 = G__16675;
chunk__16668 = G__16676;
count__16669 = G__16677;
i__16670 = G__16678;
continue;
}
} else
{var data_binding = cljs.core.first.call(null,seq__16667__$1);antares.core.render.call(null,data_binding);
{
var G__16679 = cljs.core.next.call(null,seq__16667__$1);
var G__16680 = null;
var G__16681 = (0);
var G__16682 = (0);
seq__16667 = G__16679;
chunk__16668 = G__16680;
count__16669 = G__16681;
i__16670 = G__16682;
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
antares.core.render_components = (function render_components(components__$1){var seq__16687 = cljs.core.seq.call(null,components__$1);var chunk__16688 = null;var count__16689 = (0);var i__16690 = (0);while(true){
if((i__16690 < count__16689))
{var component = cljs.core._nth.call(null,chunk__16688,i__16690);antares.core.render.call(null,component);
{
var G__16691 = seq__16687;
var G__16692 = chunk__16688;
var G__16693 = count__16689;
var G__16694 = (i__16690 + (1));
seq__16687 = G__16691;
chunk__16688 = G__16692;
count__16689 = G__16693;
i__16690 = G__16694;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__16687);if(temp__4126__auto__)
{var seq__16687__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16687__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__16687__$1);{
var G__16695 = cljs.core.chunk_rest.call(null,seq__16687__$1);
var G__16696 = c__4299__auto__;
var G__16697 = cljs.core.count.call(null,c__4299__auto__);
var G__16698 = (0);
seq__16687 = G__16695;
chunk__16688 = G__16696;
count__16689 = G__16697;
i__16690 = G__16698;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__16687__$1);antares.core.render.call(null,component);
{
var G__16699 = cljs.core.next.call(null,seq__16687__$1);
var G__16700 = null;
var G__16701 = (0);
var G__16702 = (0);
seq__16687 = G__16699;
chunk__16688 = G__16700;
count__16689 = G__16701;
i__16690 = G__16702;
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
return (function (state_16726){var state_val_16727 = (state_16726[(1)]);if((state_val_16727 === (2)))
{var inst_16721 = (state_16726[(2)]);var inst_16722 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_16721);var inst_16723 = (function (){var response = inst_16722;return ((function (response,inst_16721,inst_16722,state_val_16727,c__5867__auto__){
return (function (state){return cljs.core.update_in.call(null,state,cursor,((function (response,inst_16721,inst_16722,state_val_16727,c__5867__auto__){
return (function (old_value){return response;
});})(response,inst_16721,inst_16722,state_val_16727,c__5867__auto__))
);
});
;})(response,inst_16721,inst_16722,state_val_16727,c__5867__auto__))
})();var inst_16724 = cljs.core.swap_BANG_.call(null,antares.core.app_state,inst_16723);var state_16726__$1 = state_16726;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16726__$1,inst_16724);
} else
{if((state_val_16727 === (1)))
{var inst_16719 = cljs_http.client.get.call(null,resource_url,cljs.core.PersistentHashMap.EMPTY);var state_16726__$1 = state_16726;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16726__$1,(2),inst_16719);
} else
{return null;
}
}
});})(c__5867__auto__))
;return ((function (switch__5852__auto__,c__5867__auto__){
return (function() {
var state_machine__5853__auto__ = null;
var state_machine__5853__auto____0 = (function (){var statearr_16731 = [null,null,null,null,null,null,null];(statearr_16731[(0)] = state_machine__5853__auto__);
(statearr_16731[(1)] = (1));
return statearr_16731;
});
var state_machine__5853__auto____1 = (function (state_16726){while(true){
var ret_value__5854__auto__ = (function (){try{while(true){
var result__5855__auto__ = switch__5852__auto__.call(null,state_16726);if(cljs.core.keyword_identical_QMARK_.call(null,result__5855__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5855__auto__;
}
break;
}
}catch (e16732){if((e16732 instanceof Object))
{var ex__5856__auto__ = e16732;var statearr_16733_16735 = state_16726;(statearr_16733_16735[(5)] = ex__5856__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16726);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16732;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16736 = state_16726;
state_16726 = G__16736;
continue;
}
} else
{return ret_value__5854__auto__;
}
break;
}
});
state_machine__5853__auto__ = function(state_16726){
switch(arguments.length){
case 0:
return state_machine__5853__auto____0.call(this);
case 1:
return state_machine__5853__auto____1.call(this,state_16726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5853__auto____0;
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5853__auto____1;
return state_machine__5853__auto__;
})()
;})(switch__5852__auto__,c__5867__auto__))
})();var state__5869__auto__ = (function (){var statearr_16734 = f__5868__auto__.call(null);(statearr_16734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5867__auto__);
return statearr_16734;
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
cljs.core._add_method.call(null,antares.core.create_data_binding,true,(function (app_cursor,dom_cursor,render_fn){var data_binding = antares.core.map__GT_DataBinding.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),app_cursor,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),dom_cursor,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),render_fn], null));var seq__16737_16741 = cljs.core.seq.call(null,app_cursor);var chunk__16738_16742 = null;var count__16739_16743 = (0);var i__16740_16744 = (0);while(true){
if((i__16740_16744 < count__16739_16743))
{var cursor_16745 = cljs.core._nth.call(null,chunk__16738_16742,i__16740_16744);antares.core.register_app_state_cursor.call(null,cursor_16745,"");
{
var G__16746 = seq__16737_16741;
var G__16747 = chunk__16738_16742;
var G__16748 = count__16739_16743;
var G__16749 = (i__16740_16744 + (1));
seq__16737_16741 = G__16746;
chunk__16738_16742 = G__16747;
count__16739_16743 = G__16748;
i__16740_16744 = G__16749;
continue;
}
} else
{var temp__4126__auto___16750 = cljs.core.seq.call(null,seq__16737_16741);if(temp__4126__auto___16750)
{var seq__16737_16751__$1 = temp__4126__auto___16750;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16737_16751__$1))
{var c__4299__auto___16752 = cljs.core.chunk_first.call(null,seq__16737_16751__$1);{
var G__16753 = cljs.core.chunk_rest.call(null,seq__16737_16751__$1);
var G__16754 = c__4299__auto___16752;
var G__16755 = cljs.core.count.call(null,c__4299__auto___16752);
var G__16756 = (0);
seq__16737_16741 = G__16753;
chunk__16738_16742 = G__16754;
count__16739_16743 = G__16755;
i__16740_16744 = G__16756;
continue;
}
} else
{var cursor_16757 = cljs.core.first.call(null,seq__16737_16751__$1);antares.core.register_app_state_cursor.call(null,cursor_16757,"");
{
var G__16758 = cljs.core.next.call(null,seq__16737_16751__$1);
var G__16759 = null;
var G__16760 = (0);
var G__16761 = (0);
seq__16737_16741 = G__16758;
chunk__16738_16742 = G__16759;
count__16739_16743 = G__16760;
i__16740_16744 = G__16761;
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
cljs.core._add_method.call(null,antares.core.data_bind,true,(function (app_cursor,dom_cursors,render_fn){var seq__16762 = cljs.core.seq.call(null,dom_cursors);var chunk__16763 = null;var count__16764 = (0);var i__16765 = (0);while(true){
if((i__16765 < count__16764))
{var dom_cursor = cljs.core._nth.call(null,chunk__16763,i__16765);antares.core.create_data_binding.call(null,app_cursor,dom_cursor,render_fn);
{
var G__16766 = seq__16762;
var G__16767 = chunk__16763;
var G__16768 = count__16764;
var G__16769 = (i__16765 + (1));
seq__16762 = G__16766;
chunk__16763 = G__16767;
count__16764 = G__16768;
i__16765 = G__16769;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__16762);if(temp__4126__auto__)
{var seq__16762__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16762__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__16762__$1);{
var G__16770 = cljs.core.chunk_rest.call(null,seq__16762__$1);
var G__16771 = c__4299__auto__;
var G__16772 = cljs.core.count.call(null,c__4299__auto__);
var G__16773 = (0);
seq__16762 = G__16770;
chunk__16763 = G__16771;
count__16764 = G__16772;
i__16765 = G__16773;
continue;
}
} else
{var dom_cursor = cljs.core.first.call(null,seq__16762__$1);antares.core.create_data_binding.call(null,app_cursor,dom_cursor,render_fn);
{
var G__16774 = cljs.core.next.call(null,seq__16762__$1);
var G__16775 = null;
var G__16776 = (0);
var G__16777 = (0);
seq__16762 = G__16774;
chunk__16763 = G__16775;
count__16764 = G__16776;
i__16765 = G__16777;
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
dommy.core.prepend_BANG_.call(null,document.querySelector("body"),(function (){var dom16778 = document.createElement("div");dom16778.className = "antares app-state";
dom16778.appendChild((function (){var dom16779 = document.createElement("textarea");dom16779.className = "antares app-state-inspector";
if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"80px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),".8rem",new cljs.core.Keyword(null,"display","display",242065432),"none"], null)))
{dom16779.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"80px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),".8rem",new cljs.core.Keyword(null,"display","display",242065432),"none"], null)));
} else
{}
return dom16779;
})());
return dom16778;
})());
antares.core.data_bind.call(null,cljs.core.PersistentVector.EMPTY,".antares.app-state-inspector",(function (data){return cljs.core.pr_str.call(null,data);
}));
antares.core.bind_event.call(null,".antares.app-state-inspector","input",(function (event){return antares.core.update_app_state.call(null,(function (){return antares.core.read_data.call(null,event.target.value);
}));
}));

//# sourceMappingURL=core.js.map