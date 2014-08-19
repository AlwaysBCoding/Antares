// Compiled by ClojureScript 0.0-2277
goog.provide('antares.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('garden.core');
goog.require('hiccups.runtime');
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
goog.require('hiccups.runtime');
goog.require('cljs_http.client');
goog.require('garden.core');
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
antares.core.render_css = (function render_css(data){return garden.core.css.call(null,antares.core.read_data.call(null,data));
});
antares.core.render_html = (function render_html(template){console.log(cljs.core.pr_str.call(null,template));
return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,antares.core.read_data.call(null,template))));
});
antares.core.pre_render_html = (function pre_render_html(template,data){return template;
});
antares.core.Renderable = (function (){var obj13703 = {};return obj13703;
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
antares.core.EventResponder = (function (){var obj13705 = {};return obj13705;
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
antares.core.DataSource = (function (){var obj13707 = {};return obj13707;
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
antares.core.DataBinding.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4131__auto__,k13709,else__4132__auto__){var self__ = this;
var this__4131__auto____$1 = this;var G__13711 = (((k13709 instanceof cljs.core.Keyword))?k13709.fqn:null);switch (G__13711) {
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
return cljs.core.get.call(null,self__.__extmap,k13709,else__4132__auto__);

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
antares.core.DataBinding.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4136__auto__,k__4137__auto__,G__13708){var self__ = this;
var this__4136__auto____$1 = this;var pred__13712 = cljs.core.keyword_identical_QMARK_;var expr__13713 = k__4137__auto__;if(cljs.core.truth_(pred__13712.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),expr__13713)))
{return (new antares.core.DataBinding(G__13708,self__.dom_cursor,self__.render_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__13712.call(null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),expr__13713)))
{return (new antares.core.DataBinding(self__.app_cursor,G__13708,self__.render_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__13712.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),expr__13713)))
{return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,G__13708,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4137__auto__,G__13708),null));
}
}
}
});
antares.core.DataBinding.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null))], null),self__.__extmap));
});
antares.core.DataBinding.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4128__auto__,G__13708){var self__ = this;
var this__4128__auto____$1 = this;return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,self__.render_fn,G__13708,self__.__extmap,self__.__hash));
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
})()));var G__13715 = target_node.tagName;switch (G__13715) {
case "INPUT":
return target_node.value = target_data;

break;
case "TEXTAREA":
return target_node.value = target_data;

break;
default:
return target_node.innerHTML = target_data;

}
});
antares.core.DataBinding.cljs$lang$type = true;
antares.core.DataBinding.cljs$lang$ctorPrSeq = (function (this__4163__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"antares.core/DataBinding");
});
antares.core.DataBinding.cljs$lang$ctorPrWriter = (function (this__4163__auto__,writer__4164__auto__){return cljs.core._write.call(null,writer__4164__auto__,"antares.core/DataBinding");
});
antares.core.__GT_DataBinding = (function __GT_DataBinding(app_cursor,dom_cursor,render_fn){return (new antares.core.DataBinding(app_cursor,dom_cursor,render_fn));
});
antares.core.map__GT_DataBinding = (function map__GT_DataBinding(G__13710){return (new antares.core.DataBinding(new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(G__13710),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(G__13710),new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(G__13710),null,cljs.core.dissoc.call(null,G__13710,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),new cljs.core.Keyword(null,"render-fn","render-fn",398796518))));
});

/**
* @constructor
* @param {*} app_cursor
* @param {*} dom_cursor
* @param {*} pre_render_fn
* @param {*} render_fn
* @param {*} post_render_fn
* @param {*} interactions
* @param {*} data
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
antares.core.Component = (function (app_cursor,dom_cursor,pre_render_fn,render_fn,post_render_fn,interactions,data,__meta,__extmap){
this.app_cursor = app_cursor;
this.dom_cursor = dom_cursor;
this.pre_render_fn = pre_render_fn;
this.render_fn = render_fn;
this.post_render_fn = post_render_fn;
this.interactions = interactions;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>7){
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
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4131__auto__,k13719,else__4132__auto__){var self__ = this;
var this__4131__auto____$1 = this;var G__13721 = (((k13719 instanceof cljs.core.Keyword))?k13719.fqn:null);switch (G__13721) {
case "data":
return self__.data;

break;
case "interactions":
return self__.interactions;

break;
case "post-render-fn":
return self__.post_render_fn;

break;
case "render-fn":
return self__.render_fn;

break;
case "pre-render-fn":
return self__.pre_render_fn;

break;
case "dom-cursor":
return self__.dom_cursor;

break;
case "app-cursor":
return self__.app_cursor;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k13719,else__4132__auto__);

}
});
antares.core.Component.prototype.antares$core$DataSource$ = true;
antares.core.Component.prototype.antares$core$DataSource$load_data$arity$1 = (function (self){var self__ = this;
var self__$1 = this;if(cljs.core.truth_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1)))
{var G__13722 = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1));switch (G__13722) {
case "s3Bucket":
var c__5867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5867__auto__,G__13722,self__$1){
return (function (){var f__5868__auto__ = (function (){var switch__5852__auto__ = ((function (c__5867__auto__,G__13722,self__$1){
return (function (state_13731){var state_val_13732 = (state_13731[(1)]);if((state_val_13732 === (2)))
{var inst_13727 = (state_13731[(2)]);var inst_13728 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_13727);var inst_13729 = antares.core.cursor__GT_value.call(null,self__.app_cursor,inst_13728);var state_13731__$1 = state_13731;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13731__$1,inst_13729);
} else
{if((state_val_13732 === (1)))
{var inst_13723 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1);var inst_13724 = new cljs.core.Keyword(null,"bucket-name","bucket-name",-971156135).cljs$core$IFn$_invoke$arity$1(inst_13723);var inst_13725 = antares.importers.s3Bucket.call(null,inst_13724);var state_13731__$1 = state_13731;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13731__$1,(2),inst_13725);
} else
{return null;
}
}
});})(c__5867__auto__,G__13722,self__$1))
;return ((function (switch__5852__auto__,c__5867__auto__,G__13722,self__$1){
return (function() {
var state_machine__5853__auto__ = null;
var state_machine__5853__auto____0 = (function (){var statearr_13736 = [null,null,null,null,null,null,null];(statearr_13736[(0)] = state_machine__5853__auto__);
(statearr_13736[(1)] = (1));
return statearr_13736;
});
var state_machine__5853__auto____1 = (function (state_13731){while(true){
var ret_value__5854__auto__ = (function (){try{while(true){
var result__5855__auto__ = switch__5852__auto__.call(null,state_13731);if(cljs.core.keyword_identical_QMARK_.call(null,result__5855__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5855__auto__;
}
break;
}
}catch (e13737){if((e13737 instanceof Object))
{var ex__5856__auto__ = e13737;var statearr_13738_13762 = state_13731;(statearr_13738_13762[(5)] = ex__5856__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13731);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13737;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13763 = state_13731;
state_13731 = G__13763;
continue;
}
} else
{return ret_value__5854__auto__;
}
break;
}
});
state_machine__5853__auto__ = function(state_13731){
switch(arguments.length){
case 0:
return state_machine__5853__auto____0.call(this);
case 1:
return state_machine__5853__auto____1.call(this,state_13731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5853__auto____0;
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5853__auto____1;
return state_machine__5853__auto__;
})()
;})(switch__5852__auto__,c__5867__auto__,G__13722,self__$1))
})();var state__5869__auto__ = (function (){var statearr_13739 = f__5868__auto__.call(null);(statearr_13739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5867__auto__);
return statearr_13739;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5869__auto__);
});})(c__5867__auto__,G__13722,self__$1))
);
return c__5867__auto__;

break;
case "static":
var c__5867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5867__auto__,G__13722,self__$1){
return (function (){var f__5868__auto__ = (function (){var switch__5852__auto__ = ((function (c__5867__auto__,G__13722,self__$1){
return (function (state_13744){var state_val_13745 = (state_13744[(1)]);if((state_val_13745 === (1)))
{var inst_13740 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1);var inst_13741 = new cljs.core.Keyword(null,"initialize","initialize",609952913).cljs$core$IFn$_invoke$arity$1(inst_13740);var inst_13742 = antares.core.cursor__GT_value.call(null,self__.app_cursor,inst_13741);var state_13744__$1 = state_13744;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13744__$1,inst_13742);
} else
{return null;
}
});})(c__5867__auto__,G__13722,self__$1))
;return ((function (switch__5852__auto__,c__5867__auto__,G__13722,self__$1){
return (function() {
var state_machine__5853__auto__ = null;
var state_machine__5853__auto____0 = (function (){var statearr_13749 = [null,null,null,null,null,null,null];(statearr_13749[(0)] = state_machine__5853__auto__);
(statearr_13749[(1)] = (1));
return statearr_13749;
});
var state_machine__5853__auto____1 = (function (state_13744){while(true){
var ret_value__5854__auto__ = (function (){try{while(true){
var result__5855__auto__ = switch__5852__auto__.call(null,state_13744);if(cljs.core.keyword_identical_QMARK_.call(null,result__5855__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5855__auto__;
}
break;
}
}catch (e13750){if((e13750 instanceof Object))
{var ex__5856__auto__ = e13750;var statearr_13751_13764 = state_13744;(statearr_13751_13764[(5)] = ex__5856__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13744);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13750;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13765 = state_13744;
state_13744 = G__13765;
continue;
}
} else
{return ret_value__5854__auto__;
}
break;
}
});
state_machine__5853__auto__ = function(state_13744){
switch(arguments.length){
case 0:
return state_machine__5853__auto____0.call(this);
case 1:
return state_machine__5853__auto____1.call(this,state_13744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5853__auto____0;
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5853__auto____1;
return state_machine__5853__auto__;
})()
;})(switch__5852__auto__,c__5867__auto__,G__13722,self__$1))
})();var state__5869__auto__ = (function (){var statearr_13752 = f__5868__auto__.call(null);(statearr_13752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5867__auto__);
return statearr_13752;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5869__auto__);
});})(c__5867__auto__,G__13722,self__$1))
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
;return cljs.core.pr_sequential_writer.call(null,writer__4144__auto__,pr_pair__4146__auto__,"#antares.core.Component{",", ","}",opts__4145__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801),self__.pre_render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),self__.post_render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"interactions","interactions",550841811),self__.interactions],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4127__auto__){var self__ = this;
var this__4127__auto____$1 = this;return self__.__meta;
});
antares.core.Component.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4123__auto__){var self__ = this;
var this__4123__auto____$1 = this;return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.data,self__.__meta,self__.__extmap,self__.__hash));
});
antares.core.Component.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4133__auto__){var self__ = this;
var this__4133__auto____$1 = this;return (7 + cljs.core.count.call(null,self__.__extmap));
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
{var interactions__$1 = temp__4126__auto__;var seq__13753 = cljs.core.seq.call(null,interactions__$1);var chunk__13754 = null;var count__13755 = (0);var i__13756 = (0);while(true){
if((i__13756 < count__13755))
{var interaction = cljs.core._nth.call(null,chunk__13754,i__13756);document.querySelector(self__.dom_cursor).addEventListener(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"event-action","event-action",-974748529).cljs$core$IFn$_invoke$arity$1(interaction),true);
{
var G__13766 = seq__13753;
var G__13767 = chunk__13754;
var G__13768 = count__13755;
var G__13769 = (i__13756 + (1));
seq__13753 = G__13766;
chunk__13754 = G__13767;
count__13755 = G__13768;
i__13756 = G__13769;
continue;
}
} else
{var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__13753);if(temp__4126__auto____$1)
{var seq__13753__$1 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13753__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__13753__$1);{
var G__13770 = cljs.core.chunk_rest.call(null,seq__13753__$1);
var G__13771 = c__4299__auto__;
var G__13772 = cljs.core.count.call(null,c__4299__auto__);
var G__13773 = (0);
seq__13753 = G__13770;
chunk__13754 = G__13771;
count__13755 = G__13772;
i__13756 = G__13773;
continue;
}
} else
{var interaction = cljs.core.first.call(null,seq__13753__$1);document.querySelector(self__.dom_cursor).addEventListener(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"event-action","event-action",-974748529).cljs$core$IFn$_invoke$arity$1(interaction),true);
{
var G__13774 = cljs.core.next.call(null,seq__13753__$1);
var G__13775 = null;
var G__13776 = (0);
var G__13777 = (0);
seq__13753 = G__13774;
chunk__13754 = G__13775;
count__13755 = G__13776;
i__13756 = G__13777;
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
var this__4138__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),null,new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801),null,new cljs.core.Keyword(null,"interactions","interactions",550841811),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4139__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4138__auto____$1),self__.__meta),k__4139__auto__);
} else
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.data,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4139__auto__)),null));
}
});
antares.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4136__auto__,k__4137__auto__,G__13718){var self__ = this;
var this__4136__auto____$1 = this;var pred__13757 = cljs.core.keyword_identical_QMARK_;var expr__13758 = k__4137__auto__;if(cljs.core.truth_(pred__13757.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),expr__13758)))
{return (new antares.core.Component(G__13718,self__.dom_cursor,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__13757.call(null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),expr__13758)))
{return (new antares.core.Component(self__.app_cursor,G__13718,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__13757.call(null,new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801),expr__13758)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,G__13718,self__.render_fn,self__.post_render_fn,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__13757.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),expr__13758)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.pre_render_fn,G__13718,self__.post_render_fn,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__13757.call(null,new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),expr__13758)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.pre_render_fn,self__.render_fn,G__13718,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__13757.call(null,new cljs.core.Keyword(null,"interactions","interactions",550841811),expr__13758)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,G__13718,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__13757.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__13758)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,G__13718,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.data,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4137__auto__,G__13718),null));
}
}
}
}
}
}
}
});
antares.core.Component.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801),self__.pre_render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),self__.post_render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"interactions","interactions",550841811),self__.interactions],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4128__auto__,G__13718){var self__ = this;
var this__4128__auto____$1 = this;return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.data,G__13718,self__.__extmap,self__.__hash));
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
var self__$1 = this;if(cljs.core.truth_(new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801).cljs$core$IFn$_invoke$arity$1(self__$1)))
{self__.pre_render_fn.call(null);
} else
{}
var target_node_13778 = document.querySelector(self__.dom_cursor);var new_nodes_data_13779 = self__.render_fn.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,antares.core.app_state),self__.app_cursor));target_node_13778.innerHTML = new_nodes_data_13779;
if(cljs.core.truth_(new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496).cljs$core$IFn$_invoke$arity$1(self__$1)))
{return self__.post_render_fn.call(null);
} else
{return null;
}
});
antares.core.Component.cljs$lang$type = true;
antares.core.Component.cljs$lang$ctorPrSeq = (function (this__4163__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"antares.core/Component");
});
antares.core.Component.cljs$lang$ctorPrWriter = (function (this__4163__auto__,writer__4164__auto__){return cljs.core._write.call(null,writer__4164__auto__,"antares.core/Component");
});
antares.core.__GT_Component = (function __GT_Component(app_cursor,dom_cursor,pre_render_fn,render_fn,post_render_fn,interactions,data){return (new antares.core.Component(app_cursor,dom_cursor,pre_render_fn,render_fn,post_render_fn,interactions,data));
});
antares.core.map__GT_Component = (function map__GT_Component(G__13720){return (new antares.core.Component(new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(G__13720),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(G__13720),new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801).cljs$core$IFn$_invoke$arity$1(G__13720),new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(G__13720),new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496).cljs$core$IFn$_invoke$arity$1(G__13720),new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(G__13720),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__13720),null,cljs.core.dissoc.call(null,G__13720,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),new cljs.core.Keyword(null,"interactions","interactions",550841811),new cljs.core.Keyword(null,"data","data",-232669377))));
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
antares.core.render_bindings = (function render_bindings(data_bindings){var seq__13784 = cljs.core.seq.call(null,data_bindings);var chunk__13785 = null;var count__13786 = (0);var i__13787 = (0);while(true){
if((i__13787 < count__13786))
{var data_binding = cljs.core._nth.call(null,chunk__13785,i__13787);antares.core.render.call(null,data_binding);
{
var G__13788 = seq__13784;
var G__13789 = chunk__13785;
var G__13790 = count__13786;
var G__13791 = (i__13787 + (1));
seq__13784 = G__13788;
chunk__13785 = G__13789;
count__13786 = G__13790;
i__13787 = G__13791;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13784);if(temp__4126__auto__)
{var seq__13784__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13784__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__13784__$1);{
var G__13792 = cljs.core.chunk_rest.call(null,seq__13784__$1);
var G__13793 = c__4299__auto__;
var G__13794 = cljs.core.count.call(null,c__4299__auto__);
var G__13795 = (0);
seq__13784 = G__13792;
chunk__13785 = G__13793;
count__13786 = G__13794;
i__13787 = G__13795;
continue;
}
} else
{var data_binding = cljs.core.first.call(null,seq__13784__$1);antares.core.render.call(null,data_binding);
{
var G__13796 = cljs.core.next.call(null,seq__13784__$1);
var G__13797 = null;
var G__13798 = (0);
var G__13799 = (0);
seq__13784 = G__13796;
chunk__13785 = G__13797;
count__13786 = G__13798;
i__13787 = G__13799;
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
antares.core.render_components = (function render_components(components__$1){var seq__13804 = cljs.core.seq.call(null,components__$1);var chunk__13805 = null;var count__13806 = (0);var i__13807 = (0);while(true){
if((i__13807 < count__13806))
{var component = cljs.core._nth.call(null,chunk__13805,i__13807);antares.core.render.call(null,component);
{
var G__13808 = seq__13804;
var G__13809 = chunk__13805;
var G__13810 = count__13806;
var G__13811 = (i__13807 + (1));
seq__13804 = G__13808;
chunk__13805 = G__13809;
count__13806 = G__13810;
i__13807 = G__13811;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13804);if(temp__4126__auto__)
{var seq__13804__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13804__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__13804__$1);{
var G__13812 = cljs.core.chunk_rest.call(null,seq__13804__$1);
var G__13813 = c__4299__auto__;
var G__13814 = cljs.core.count.call(null,c__4299__auto__);
var G__13815 = (0);
seq__13804 = G__13812;
chunk__13805 = G__13813;
count__13806 = G__13814;
i__13807 = G__13815;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__13804__$1);antares.core.render.call(null,component);
{
var G__13816 = cljs.core.next.call(null,seq__13804__$1);
var G__13817 = null;
var G__13818 = (0);
var G__13819 = (0);
seq__13804 = G__13816;
chunk__13805 = G__13817;
count__13806 = G__13818;
i__13807 = G__13819;
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
return (function (state_13843){var state_val_13844 = (state_13843[(1)]);if((state_val_13844 === (2)))
{var inst_13838 = (state_13843[(2)]);var inst_13839 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_13838);var inst_13840 = (function (){var response = inst_13839;return ((function (response,inst_13838,inst_13839,state_val_13844,c__5867__auto__){
return (function (state){return cljs.core.update_in.call(null,state,cursor,((function (response,inst_13838,inst_13839,state_val_13844,c__5867__auto__){
return (function (old_value){return response;
});})(response,inst_13838,inst_13839,state_val_13844,c__5867__auto__))
);
});
;})(response,inst_13838,inst_13839,state_val_13844,c__5867__auto__))
})();var inst_13841 = cljs.core.swap_BANG_.call(null,antares.core.app_state,inst_13840);var state_13843__$1 = state_13843;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13843__$1,inst_13841);
} else
{if((state_val_13844 === (1)))
{var inst_13836 = cljs_http.client.get.call(null,resource_url,cljs.core.PersistentHashMap.EMPTY);var state_13843__$1 = state_13843;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13843__$1,(2),inst_13836);
} else
{return null;
}
}
});})(c__5867__auto__))
;return ((function (switch__5852__auto__,c__5867__auto__){
return (function() {
var state_machine__5853__auto__ = null;
var state_machine__5853__auto____0 = (function (){var statearr_13848 = [null,null,null,null,null,null,null];(statearr_13848[(0)] = state_machine__5853__auto__);
(statearr_13848[(1)] = (1));
return statearr_13848;
});
var state_machine__5853__auto____1 = (function (state_13843){while(true){
var ret_value__5854__auto__ = (function (){try{while(true){
var result__5855__auto__ = switch__5852__auto__.call(null,state_13843);if(cljs.core.keyword_identical_QMARK_.call(null,result__5855__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5855__auto__;
}
break;
}
}catch (e13849){if((e13849 instanceof Object))
{var ex__5856__auto__ = e13849;var statearr_13850_13852 = state_13843;(statearr_13850_13852[(5)] = ex__5856__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13843);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13849;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13853 = state_13843;
state_13843 = G__13853;
continue;
}
} else
{return ret_value__5854__auto__;
}
break;
}
});
state_machine__5853__auto__ = function(state_13843){
switch(arguments.length){
case 0:
return state_machine__5853__auto____0.call(this);
case 1:
return state_machine__5853__auto____1.call(this,state_13843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5853__auto____0;
state_machine__5853__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5853__auto____1;
return state_machine__5853__auto__;
})()
;})(switch__5852__auto__,c__5867__auto__))
})();var state__5869__auto__ = (function (){var statearr_13851 = f__5868__auto__.call(null);(statearr_13851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5867__auto__);
return statearr_13851;
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
cljs.core._add_method.call(null,antares.core.create_data_binding,true,(function (app_cursor,dom_cursor,render_fn){var data_binding = antares.core.map__GT_DataBinding.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),app_cursor,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),dom_cursor,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),render_fn], null));var seq__13854_13858 = cljs.core.seq.call(null,app_cursor);var chunk__13855_13859 = null;var count__13856_13860 = (0);var i__13857_13861 = (0);while(true){
if((i__13857_13861 < count__13856_13860))
{var cursor_13862 = cljs.core._nth.call(null,chunk__13855_13859,i__13857_13861);antares.core.register_app_state_cursor.call(null,cursor_13862,"");
{
var G__13863 = seq__13854_13858;
var G__13864 = chunk__13855_13859;
var G__13865 = count__13856_13860;
var G__13866 = (i__13857_13861 + (1));
seq__13854_13858 = G__13863;
chunk__13855_13859 = G__13864;
count__13856_13860 = G__13865;
i__13857_13861 = G__13866;
continue;
}
} else
{var temp__4126__auto___13867 = cljs.core.seq.call(null,seq__13854_13858);if(temp__4126__auto___13867)
{var seq__13854_13868__$1 = temp__4126__auto___13867;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13854_13868__$1))
{var c__4299__auto___13869 = cljs.core.chunk_first.call(null,seq__13854_13868__$1);{
var G__13870 = cljs.core.chunk_rest.call(null,seq__13854_13868__$1);
var G__13871 = c__4299__auto___13869;
var G__13872 = cljs.core.count.call(null,c__4299__auto___13869);
var G__13873 = (0);
seq__13854_13858 = G__13870;
chunk__13855_13859 = G__13871;
count__13856_13860 = G__13872;
i__13857_13861 = G__13873;
continue;
}
} else
{var cursor_13874 = cljs.core.first.call(null,seq__13854_13868__$1);antares.core.register_app_state_cursor.call(null,cursor_13874,"");
{
var G__13875 = cljs.core.next.call(null,seq__13854_13868__$1);
var G__13876 = null;
var G__13877 = (0);
var G__13878 = (0);
seq__13854_13858 = G__13875;
chunk__13855_13859 = G__13876;
count__13856_13860 = G__13877;
i__13857_13861 = G__13878;
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
cljs.core._add_method.call(null,antares.core.data_bind,true,(function (app_cursor,dom_cursors,render_fn){var seq__13879 = cljs.core.seq.call(null,dom_cursors);var chunk__13880 = null;var count__13881 = (0);var i__13882 = (0);while(true){
if((i__13882 < count__13881))
{var dom_cursor = cljs.core._nth.call(null,chunk__13880,i__13882);antares.core.create_data_binding.call(null,app_cursor,dom_cursor,render_fn);
{
var G__13883 = seq__13879;
var G__13884 = chunk__13880;
var G__13885 = count__13881;
var G__13886 = (i__13882 + (1));
seq__13879 = G__13883;
chunk__13880 = G__13884;
count__13881 = G__13885;
i__13882 = G__13886;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13879);if(temp__4126__auto__)
{var seq__13879__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13879__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__13879__$1);{
var G__13887 = cljs.core.chunk_rest.call(null,seq__13879__$1);
var G__13888 = c__4299__auto__;
var G__13889 = cljs.core.count.call(null,c__4299__auto__);
var G__13890 = (0);
seq__13879 = G__13887;
chunk__13880 = G__13888;
count__13881 = G__13889;
i__13882 = G__13890;
continue;
}
} else
{var dom_cursor = cljs.core.first.call(null,seq__13879__$1);antares.core.create_data_binding.call(null,app_cursor,dom_cursor,render_fn);
{
var G__13891 = cljs.core.next.call(null,seq__13879__$1);
var G__13892 = null;
var G__13893 = (0);
var G__13894 = (0);
seq__13879 = G__13891;
chunk__13880 = G__13892;
count__13881 = G__13893;
i__13882 = G__13894;
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
dommy.core.prepend_BANG_.call(null,document.querySelector("body"),(function (){var dom13895 = document.createElement("div");dom13895.className = "antares app-state";
dom13895.appendChild((function (){var dom13896 = document.createElement("textarea");dom13896.className = "antares app-state-inspector";
if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"80px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),".8rem"], null)))
{dom13896.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"80px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),".8rem"], null)));
} else
{}
return dom13896;
})());
return dom13895;
})());
antares.core.data_bind.call(null,cljs.core.PersistentVector.EMPTY,".antares.app-state-inspector",(function (data){return cljs.core.pr_str.call(null,data);
}));
antares.core.bind_event.call(null,".antares.app-state-inspector","input",(function (event){return antares.core.update_app_state.call(null,(function (){return antares.core.read_data.call(null,event.target.value);
}));
}));

//# sourceMappingURL=core.js.map