// Compiled by ClojureScript 0.0-2277
goog.provide('antares.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('garden.core');
goog.require('hiccups.runtime');
goog.require('antares.repl');
goog.require('dommy.core');
goog.require('cljs_http.client');
goog.require('antares.importers');
goog.require('cljs.core.async');
goog.require('antares.importers');
goog.require('ajax.core');
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
antares.core.render_html = (function render_html(template){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,antares.core.read_data.call(null,template))));
});
antares.core.compile_template = (function compile_template(compile_data,template){return ajax.core.POST.call(null,"http://localhost:8989/compile-template",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"compile-data","compile-data",-1472149691),compile_data,new cljs.core.Keyword(null,"template","template",-702405684),template], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){return console.log(response);
})], null));
});
antares.core.Renderable = (function (){var obj11622 = {};return obj11622;
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
antares.core.EventResponder = (function (){var obj11624 = {};return obj11624;
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
antares.core.DataSource = (function (){var obj11626 = {};return obj11626;
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
antares.core.DataBinding.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4131__auto__,k11628,else__4132__auto__){var self__ = this;
var this__4131__auto____$1 = this;var G__11630 = (((k11628 instanceof cljs.core.Keyword))?k11628.fqn:null);switch (G__11630) {
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
return cljs.core.get.call(null,self__.__extmap,k11628,else__4132__auto__);

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
antares.core.DataBinding.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4136__auto__,k__4137__auto__,G__11627){var self__ = this;
var this__4136__auto____$1 = this;var pred__11631 = cljs.core.keyword_identical_QMARK_;var expr__11632 = k__4137__auto__;if(cljs.core.truth_(pred__11631.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),expr__11632)))
{return (new antares.core.DataBinding(G__11627,self__.dom_cursor,self__.render_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11631.call(null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),expr__11632)))
{return (new antares.core.DataBinding(self__.app_cursor,G__11627,self__.render_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11631.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),expr__11632)))
{return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,G__11627,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4137__auto__,G__11627),null));
}
}
}
});
antares.core.DataBinding.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null))], null),self__.__extmap));
});
antares.core.DataBinding.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4128__auto__,G__11627){var self__ = this;
var this__4128__auto____$1 = this;return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,self__.render_fn,G__11627,self__.__extmap,self__.__hash));
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
})()));var G__11634 = target_node.tagName;switch (G__11634) {
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
antares.core.map__GT_DataBinding = (function map__GT_DataBinding(G__11629){return (new antares.core.DataBinding(new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(G__11629),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(G__11629),new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(G__11629),null,cljs.core.dissoc.call(null,G__11629,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),new cljs.core.Keyword(null,"render-fn","render-fn",398796518))));
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
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4131__auto__,k11638,else__4132__auto__){var self__ = this;
var this__4131__auto____$1 = this;var G__11640 = (((k11638 instanceof cljs.core.Keyword))?k11638.fqn:null);switch (G__11640) {
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
return cljs.core.get.call(null,self__.__extmap,k11638,else__4132__auto__);

}
});
antares.core.Component.prototype.antares$core$DataSource$ = true;
antares.core.Component.prototype.antares$core$DataSource$load_data$arity$1 = (function (self){var self__ = this;
var self__$1 = this;if(cljs.core.truth_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1)))
{var G__11641 = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1));switch (G__11641) {
case "s3Bucket":
var c__6055__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6055__auto__,G__11641,self__$1){
return (function (){var f__6056__auto__ = (function (){var switch__6040__auto__ = ((function (c__6055__auto__,G__11641,self__$1){
return (function (state_11650){var state_val_11651 = (state_11650[(1)]);if((state_val_11651 === (2)))
{var inst_11646 = (state_11650[(2)]);var inst_11647 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_11646);var inst_11648 = antares.core.cursor__GT_value.call(null,self__.app_cursor,inst_11647);var state_11650__$1 = state_11650;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11650__$1,inst_11648);
} else
{if((state_val_11651 === (1)))
{var inst_11642 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1);var inst_11643 = new cljs.core.Keyword(null,"bucket-name","bucket-name",-971156135).cljs$core$IFn$_invoke$arity$1(inst_11642);var inst_11644 = antares.importers.s3Bucket.call(null,inst_11643);var state_11650__$1 = state_11650;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11650__$1,(2),inst_11644);
} else
{return null;
}
}
});})(c__6055__auto__,G__11641,self__$1))
;return ((function (switch__6040__auto__,c__6055__auto__,G__11641,self__$1){
return (function() {
var state_machine__6041__auto__ = null;
var state_machine__6041__auto____0 = (function (){var statearr_11655 = [null,null,null,null,null,null,null];(statearr_11655[(0)] = state_machine__6041__auto__);
(statearr_11655[(1)] = (1));
return statearr_11655;
});
var state_machine__6041__auto____1 = (function (state_11650){while(true){
var ret_value__6042__auto__ = (function (){try{while(true){
var result__6043__auto__ = switch__6040__auto__.call(null,state_11650);if(cljs.core.keyword_identical_QMARK_.call(null,result__6043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6043__auto__;
}
break;
}
}catch (e11656){if((e11656 instanceof Object))
{var ex__6044__auto__ = e11656;var statearr_11657_11681 = state_11650;(statearr_11657_11681[(5)] = ex__6044__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11650);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11656;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11682 = state_11650;
state_11650 = G__11682;
continue;
}
} else
{return ret_value__6042__auto__;
}
break;
}
});
state_machine__6041__auto__ = function(state_11650){
switch(arguments.length){
case 0:
return state_machine__6041__auto____0.call(this);
case 1:
return state_machine__6041__auto____1.call(this,state_11650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6041__auto____0;
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6041__auto____1;
return state_machine__6041__auto__;
})()
;})(switch__6040__auto__,c__6055__auto__,G__11641,self__$1))
})();var state__6057__auto__ = (function (){var statearr_11658 = f__6056__auto__.call(null);(statearr_11658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6055__auto__);
return statearr_11658;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6057__auto__);
});})(c__6055__auto__,G__11641,self__$1))
);
return c__6055__auto__;

break;
case "static":
var c__6055__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6055__auto__,G__11641,self__$1){
return (function (){var f__6056__auto__ = (function (){var switch__6040__auto__ = ((function (c__6055__auto__,G__11641,self__$1){
return (function (state_11663){var state_val_11664 = (state_11663[(1)]);if((state_val_11664 === (1)))
{var inst_11659 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1);var inst_11660 = new cljs.core.Keyword(null,"initialize","initialize",609952913).cljs$core$IFn$_invoke$arity$1(inst_11659);var inst_11661 = antares.core.cursor__GT_value.call(null,self__.app_cursor,inst_11660);var state_11663__$1 = state_11663;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11663__$1,inst_11661);
} else
{return null;
}
});})(c__6055__auto__,G__11641,self__$1))
;return ((function (switch__6040__auto__,c__6055__auto__,G__11641,self__$1){
return (function() {
var state_machine__6041__auto__ = null;
var state_machine__6041__auto____0 = (function (){var statearr_11668 = [null,null,null,null,null,null,null];(statearr_11668[(0)] = state_machine__6041__auto__);
(statearr_11668[(1)] = (1));
return statearr_11668;
});
var state_machine__6041__auto____1 = (function (state_11663){while(true){
var ret_value__6042__auto__ = (function (){try{while(true){
var result__6043__auto__ = switch__6040__auto__.call(null,state_11663);if(cljs.core.keyword_identical_QMARK_.call(null,result__6043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6043__auto__;
}
break;
}
}catch (e11669){if((e11669 instanceof Object))
{var ex__6044__auto__ = e11669;var statearr_11670_11683 = state_11663;(statearr_11670_11683[(5)] = ex__6044__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11663);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11669;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11684 = state_11663;
state_11663 = G__11684;
continue;
}
} else
{return ret_value__6042__auto__;
}
break;
}
});
state_machine__6041__auto__ = function(state_11663){
switch(arguments.length){
case 0:
return state_machine__6041__auto____0.call(this);
case 1:
return state_machine__6041__auto____1.call(this,state_11663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6041__auto____0;
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6041__auto____1;
return state_machine__6041__auto__;
})()
;})(switch__6040__auto__,c__6055__auto__,G__11641,self__$1))
})();var state__6057__auto__ = (function (){var statearr_11671 = f__6056__auto__.call(null);(statearr_11671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6055__auto__);
return statearr_11671;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6057__auto__);
});})(c__6055__auto__,G__11641,self__$1))
);
return c__6055__auto__;

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
{var interactions__$1 = temp__4126__auto__;var seq__11672 = cljs.core.seq.call(null,interactions__$1);var chunk__11673 = null;var count__11674 = (0);var i__11675 = (0);while(true){
if((i__11675 < count__11674))
{var interaction = cljs.core._nth.call(null,chunk__11673,i__11675);document.querySelector(self__.dom_cursor).addEventListener(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"event-action","event-action",-974748529).cljs$core$IFn$_invoke$arity$1(interaction),true);
{
var G__11685 = seq__11672;
var G__11686 = chunk__11673;
var G__11687 = count__11674;
var G__11688 = (i__11675 + (1));
seq__11672 = G__11685;
chunk__11673 = G__11686;
count__11674 = G__11687;
i__11675 = G__11688;
continue;
}
} else
{var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__11672);if(temp__4126__auto____$1)
{var seq__11672__$1 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11672__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__11672__$1);{
var G__11689 = cljs.core.chunk_rest.call(null,seq__11672__$1);
var G__11690 = c__4299__auto__;
var G__11691 = cljs.core.count.call(null,c__4299__auto__);
var G__11692 = (0);
seq__11672 = G__11689;
chunk__11673 = G__11690;
count__11674 = G__11691;
i__11675 = G__11692;
continue;
}
} else
{var interaction = cljs.core.first.call(null,seq__11672__$1);document.querySelector(self__.dom_cursor).addEventListener(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"event-action","event-action",-974748529).cljs$core$IFn$_invoke$arity$1(interaction),true);
{
var G__11693 = cljs.core.next.call(null,seq__11672__$1);
var G__11694 = null;
var G__11695 = (0);
var G__11696 = (0);
seq__11672 = G__11693;
chunk__11673 = G__11694;
count__11674 = G__11695;
i__11675 = G__11696;
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
antares.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4136__auto__,k__4137__auto__,G__11637){var self__ = this;
var this__4136__auto____$1 = this;var pred__11676 = cljs.core.keyword_identical_QMARK_;var expr__11677 = k__4137__auto__;if(cljs.core.truth_(pred__11676.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),expr__11677)))
{return (new antares.core.Component(G__11637,self__.dom_cursor,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11676.call(null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),expr__11677)))
{return (new antares.core.Component(self__.app_cursor,G__11637,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11676.call(null,new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801),expr__11677)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,G__11637,self__.render_fn,self__.post_render_fn,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11676.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),expr__11677)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.pre_render_fn,G__11637,self__.post_render_fn,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11676.call(null,new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),expr__11677)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.pre_render_fn,self__.render_fn,G__11637,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11676.call(null,new cljs.core.Keyword(null,"interactions","interactions",550841811),expr__11677)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,G__11637,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11676.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__11677)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,G__11637,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.data,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4137__auto__,G__11637),null));
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
antares.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4128__auto__,G__11637){var self__ = this;
var this__4128__auto____$1 = this;return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.data,G__11637,self__.__extmap,self__.__hash));
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
var target_node_11697 = document.querySelector(self__.dom_cursor);var new_nodes_data_11698 = self__.render_fn.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,antares.core.app_state),self__.app_cursor));target_node_11697.innerHTML = new_nodes_data_11698;
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
antares.core.map__GT_Component = (function map__GT_Component(G__11639){return (new antares.core.Component(new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(G__11639),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(G__11639),new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801).cljs$core$IFn$_invoke$arity$1(G__11639),new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(G__11639),new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496).cljs$core$IFn$_invoke$arity$1(G__11639),new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(G__11639),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__11639),null,cljs.core.dissoc.call(null,G__11639,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),new cljs.core.Keyword(null,"interactions","interactions",550841811),new cljs.core.Keyword(null,"data","data",-232669377))));
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
antares.core.render_bindings = (function render_bindings(data_bindings){var seq__11703 = cljs.core.seq.call(null,data_bindings);var chunk__11704 = null;var count__11705 = (0);var i__11706 = (0);while(true){
if((i__11706 < count__11705))
{var data_binding = cljs.core._nth.call(null,chunk__11704,i__11706);antares.core.render.call(null,data_binding);
{
var G__11707 = seq__11703;
var G__11708 = chunk__11704;
var G__11709 = count__11705;
var G__11710 = (i__11706 + (1));
seq__11703 = G__11707;
chunk__11704 = G__11708;
count__11705 = G__11709;
i__11706 = G__11710;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11703);if(temp__4126__auto__)
{var seq__11703__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11703__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__11703__$1);{
var G__11711 = cljs.core.chunk_rest.call(null,seq__11703__$1);
var G__11712 = c__4299__auto__;
var G__11713 = cljs.core.count.call(null,c__4299__auto__);
var G__11714 = (0);
seq__11703 = G__11711;
chunk__11704 = G__11712;
count__11705 = G__11713;
i__11706 = G__11714;
continue;
}
} else
{var data_binding = cljs.core.first.call(null,seq__11703__$1);antares.core.render.call(null,data_binding);
{
var G__11715 = cljs.core.next.call(null,seq__11703__$1);
var G__11716 = null;
var G__11717 = (0);
var G__11718 = (0);
seq__11703 = G__11715;
chunk__11704 = G__11716;
count__11705 = G__11717;
i__11706 = G__11718;
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
antares.core.render_components = (function render_components(components__$1){var seq__11723 = cljs.core.seq.call(null,components__$1);var chunk__11724 = null;var count__11725 = (0);var i__11726 = (0);while(true){
if((i__11726 < count__11725))
{var component = cljs.core._nth.call(null,chunk__11724,i__11726);antares.core.render.call(null,component);
{
var G__11727 = seq__11723;
var G__11728 = chunk__11724;
var G__11729 = count__11725;
var G__11730 = (i__11726 + (1));
seq__11723 = G__11727;
chunk__11724 = G__11728;
count__11725 = G__11729;
i__11726 = G__11730;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11723);if(temp__4126__auto__)
{var seq__11723__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11723__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__11723__$1);{
var G__11731 = cljs.core.chunk_rest.call(null,seq__11723__$1);
var G__11732 = c__4299__auto__;
var G__11733 = cljs.core.count.call(null,c__4299__auto__);
var G__11734 = (0);
seq__11723 = G__11731;
chunk__11724 = G__11732;
count__11725 = G__11733;
i__11726 = G__11734;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__11723__$1);antares.core.render.call(null,component);
{
var G__11735 = cljs.core.next.call(null,seq__11723__$1);
var G__11736 = null;
var G__11737 = (0);
var G__11738 = (0);
seq__11723 = G__11735;
chunk__11724 = G__11736;
count__11725 = G__11737;
i__11726 = G__11738;
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
antares.core.update_cursor_async = (function update_cursor_async(cursor,resource_url){var c__6055__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6055__auto__){
return (function (){var f__6056__auto__ = (function (){var switch__6040__auto__ = ((function (c__6055__auto__){
return (function (state_11762){var state_val_11763 = (state_11762[(1)]);if((state_val_11763 === (2)))
{var inst_11757 = (state_11762[(2)]);var inst_11758 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_11757);var inst_11759 = (function (){var response = inst_11758;return ((function (response,inst_11757,inst_11758,state_val_11763,c__6055__auto__){
return (function (state){return cljs.core.update_in.call(null,state,cursor,((function (response,inst_11757,inst_11758,state_val_11763,c__6055__auto__){
return (function (old_value){return response;
});})(response,inst_11757,inst_11758,state_val_11763,c__6055__auto__))
);
});
;})(response,inst_11757,inst_11758,state_val_11763,c__6055__auto__))
})();var inst_11760 = cljs.core.swap_BANG_.call(null,antares.core.app_state,inst_11759);var state_11762__$1 = state_11762;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11762__$1,inst_11760);
} else
{if((state_val_11763 === (1)))
{var inst_11755 = cljs_http.client.get.call(null,resource_url,cljs.core.PersistentHashMap.EMPTY);var state_11762__$1 = state_11762;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11762__$1,(2),inst_11755);
} else
{return null;
}
}
});})(c__6055__auto__))
;return ((function (switch__6040__auto__,c__6055__auto__){
return (function() {
var state_machine__6041__auto__ = null;
var state_machine__6041__auto____0 = (function (){var statearr_11767 = [null,null,null,null,null,null,null];(statearr_11767[(0)] = state_machine__6041__auto__);
(statearr_11767[(1)] = (1));
return statearr_11767;
});
var state_machine__6041__auto____1 = (function (state_11762){while(true){
var ret_value__6042__auto__ = (function (){try{while(true){
var result__6043__auto__ = switch__6040__auto__.call(null,state_11762);if(cljs.core.keyword_identical_QMARK_.call(null,result__6043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6043__auto__;
}
break;
}
}catch (e11768){if((e11768 instanceof Object))
{var ex__6044__auto__ = e11768;var statearr_11769_11771 = state_11762;(statearr_11769_11771[(5)] = ex__6044__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11762);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11768;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11772 = state_11762;
state_11762 = G__11772;
continue;
}
} else
{return ret_value__6042__auto__;
}
break;
}
});
state_machine__6041__auto__ = function(state_11762){
switch(arguments.length){
case 0:
return state_machine__6041__auto____0.call(this);
case 1:
return state_machine__6041__auto____1.call(this,state_11762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6041__auto____0;
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6041__auto____1;
return state_machine__6041__auto__;
})()
;})(switch__6040__auto__,c__6055__auto__))
})();var state__6057__auto__ = (function (){var statearr_11770 = f__6056__auto__.call(null);(statearr_11770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6055__auto__);
return statearr_11770;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6057__auto__);
});})(c__6055__auto__))
);
return c__6055__auto__;
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
cljs.core._add_method.call(null,antares.core.create_data_binding,true,(function (app_cursor,dom_cursor,render_fn){var data_binding = antares.core.map__GT_DataBinding.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),app_cursor,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),dom_cursor,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),render_fn], null));var seq__11773_11777 = cljs.core.seq.call(null,app_cursor);var chunk__11774_11778 = null;var count__11775_11779 = (0);var i__11776_11780 = (0);while(true){
if((i__11776_11780 < count__11775_11779))
{var cursor_11781 = cljs.core._nth.call(null,chunk__11774_11778,i__11776_11780);antares.core.register_app_state_cursor.call(null,cursor_11781,"");
{
var G__11782 = seq__11773_11777;
var G__11783 = chunk__11774_11778;
var G__11784 = count__11775_11779;
var G__11785 = (i__11776_11780 + (1));
seq__11773_11777 = G__11782;
chunk__11774_11778 = G__11783;
count__11775_11779 = G__11784;
i__11776_11780 = G__11785;
continue;
}
} else
{var temp__4126__auto___11786 = cljs.core.seq.call(null,seq__11773_11777);if(temp__4126__auto___11786)
{var seq__11773_11787__$1 = temp__4126__auto___11786;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11773_11787__$1))
{var c__4299__auto___11788 = cljs.core.chunk_first.call(null,seq__11773_11787__$1);{
var G__11789 = cljs.core.chunk_rest.call(null,seq__11773_11787__$1);
var G__11790 = c__4299__auto___11788;
var G__11791 = cljs.core.count.call(null,c__4299__auto___11788);
var G__11792 = (0);
seq__11773_11777 = G__11789;
chunk__11774_11778 = G__11790;
count__11775_11779 = G__11791;
i__11776_11780 = G__11792;
continue;
}
} else
{var cursor_11793 = cljs.core.first.call(null,seq__11773_11787__$1);antares.core.register_app_state_cursor.call(null,cursor_11793,"");
{
var G__11794 = cljs.core.next.call(null,seq__11773_11787__$1);
var G__11795 = null;
var G__11796 = (0);
var G__11797 = (0);
seq__11773_11777 = G__11794;
chunk__11774_11778 = G__11795;
count__11775_11779 = G__11796;
i__11776_11780 = G__11797;
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
cljs.core._add_method.call(null,antares.core.data_bind,true,(function (app_cursor,dom_cursors,render_fn){var seq__11798 = cljs.core.seq.call(null,dom_cursors);var chunk__11799 = null;var count__11800 = (0);var i__11801 = (0);while(true){
if((i__11801 < count__11800))
{var dom_cursor = cljs.core._nth.call(null,chunk__11799,i__11801);antares.core.create_data_binding.call(null,app_cursor,dom_cursor,render_fn);
{
var G__11802 = seq__11798;
var G__11803 = chunk__11799;
var G__11804 = count__11800;
var G__11805 = (i__11801 + (1));
seq__11798 = G__11802;
chunk__11799 = G__11803;
count__11800 = G__11804;
i__11801 = G__11805;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11798);if(temp__4126__auto__)
{var seq__11798__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11798__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__11798__$1);{
var G__11806 = cljs.core.chunk_rest.call(null,seq__11798__$1);
var G__11807 = c__4299__auto__;
var G__11808 = cljs.core.count.call(null,c__4299__auto__);
var G__11809 = (0);
seq__11798 = G__11806;
chunk__11799 = G__11807;
count__11800 = G__11808;
i__11801 = G__11809;
continue;
}
} else
{var dom_cursor = cljs.core.first.call(null,seq__11798__$1);antares.core.create_data_binding.call(null,app_cursor,dom_cursor,render_fn);
{
var G__11810 = cljs.core.next.call(null,seq__11798__$1);
var G__11811 = null;
var G__11812 = (0);
var G__11813 = (0);
seq__11798 = G__11810;
chunk__11799 = G__11811;
count__11800 = G__11812;
i__11801 = G__11813;
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
dommy.core.prepend_BANG_.call(null,document.querySelector("body"),(function (){var dom11814 = document.createElement("div");dom11814.className = "antares app-state";
dom11814.appendChild((function (){var dom11815 = document.createElement("textarea");dom11815.className = "antares app-state-inspector";
if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"80px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),".8rem"], null)))
{dom11815.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"80px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),".8rem"], null)));
} else
{}
return dom11815;
})());
return dom11814;
})());
antares.core.data_bind.call(null,cljs.core.PersistentVector.EMPTY,".antares.app-state-inspector",(function (data){return cljs.core.pr_str.call(null,data);
}));
antares.core.bind_event.call(null,".antares.app-state-inspector","input",(function (event){return antares.core.update_app_state.call(null,(function (){return antares.core.read_data.call(null,event.target.value);
}));
}));

//# sourceMappingURL=core.js.map