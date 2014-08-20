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
antares.core.compile_template = (function compile_template(compile_data,template){return ajax.core.POST.call(null,"http://localhost:8989/compile-template",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"compile-data","compile-data",-1472149691),compile_data,new cljs.core.Keyword(null,"template","template",-702405684),template], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){console.log(response);
return antares.core.update_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiled-html","compiled-html",-1974495664)], null),(function (old_value){return response;
}));
})], null));
});
antares.core.Renderable = (function (){var obj12828 = {};return obj12828;
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
antares.core.EventResponder = (function (){var obj12830 = {};return obj12830;
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
antares.core.DataSource = (function (){var obj12832 = {};return obj12832;
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
antares.core.DataBinding.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4131__auto__,k12834,else__4132__auto__){var self__ = this;
var this__4131__auto____$1 = this;var G__12836 = (((k12834 instanceof cljs.core.Keyword))?k12834.fqn:null);switch (G__12836) {
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
return cljs.core.get.call(null,self__.__extmap,k12834,else__4132__auto__);

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
antares.core.DataBinding.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4136__auto__,k__4137__auto__,G__12833){var self__ = this;
var this__4136__auto____$1 = this;var pred__12837 = cljs.core.keyword_identical_QMARK_;var expr__12838 = k__4137__auto__;if(cljs.core.truth_(pred__12837.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),expr__12838)))
{return (new antares.core.DataBinding(G__12833,self__.dom_cursor,self__.render_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12837.call(null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),expr__12838)))
{return (new antares.core.DataBinding(self__.app_cursor,G__12833,self__.render_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12837.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),expr__12838)))
{return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,G__12833,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4137__auto__,G__12833),null));
}
}
}
});
antares.core.DataBinding.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null))], null),self__.__extmap));
});
antares.core.DataBinding.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4128__auto__,G__12833){var self__ = this;
var this__4128__auto____$1 = this;return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,self__.render_fn,G__12833,self__.__extmap,self__.__hash));
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
})()));var G__12840 = target_node.tagName;switch (G__12840) {
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
antares.core.map__GT_DataBinding = (function map__GT_DataBinding(G__12835){return (new antares.core.DataBinding(new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(G__12835),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(G__12835),new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(G__12835),null,cljs.core.dissoc.call(null,G__12835,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),new cljs.core.Keyword(null,"render-fn","render-fn",398796518))));
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
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4131__auto__,k12844,else__4132__auto__){var self__ = this;
var this__4131__auto____$1 = this;var G__12846 = (((k12844 instanceof cljs.core.Keyword))?k12844.fqn:null);switch (G__12846) {
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
return cljs.core.get.call(null,self__.__extmap,k12844,else__4132__auto__);

}
});
antares.core.Component.prototype.antares$core$DataSource$ = true;
antares.core.Component.prototype.antares$core$DataSource$load_data$arity$1 = (function (self){var self__ = this;
var self__$1 = this;if(cljs.core.truth_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1)))
{var G__12847 = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1));switch (G__12847) {
case "s3Bucket":
var c__6055__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6055__auto__,G__12847,self__$1){
return (function (){var f__6056__auto__ = (function (){var switch__6040__auto__ = ((function (c__6055__auto__,G__12847,self__$1){
return (function (state_12856){var state_val_12857 = (state_12856[(1)]);if((state_val_12857 === (2)))
{var inst_12852 = (state_12856[(2)]);var inst_12853 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_12852);var inst_12854 = antares.core.cursor__GT_value.call(null,self__.app_cursor,inst_12853);var state_12856__$1 = state_12856;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12856__$1,inst_12854);
} else
{if((state_val_12857 === (1)))
{var inst_12848 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1);var inst_12849 = new cljs.core.Keyword(null,"bucket-name","bucket-name",-971156135).cljs$core$IFn$_invoke$arity$1(inst_12848);var inst_12850 = antares.importers.s3Bucket.call(null,inst_12849);var state_12856__$1 = state_12856;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12856__$1,(2),inst_12850);
} else
{return null;
}
}
});})(c__6055__auto__,G__12847,self__$1))
;return ((function (switch__6040__auto__,c__6055__auto__,G__12847,self__$1){
return (function() {
var state_machine__6041__auto__ = null;
var state_machine__6041__auto____0 = (function (){var statearr_12861 = [null,null,null,null,null,null,null];(statearr_12861[(0)] = state_machine__6041__auto__);
(statearr_12861[(1)] = (1));
return statearr_12861;
});
var state_machine__6041__auto____1 = (function (state_12856){while(true){
var ret_value__6042__auto__ = (function (){try{while(true){
var result__6043__auto__ = switch__6040__auto__.call(null,state_12856);if(cljs.core.keyword_identical_QMARK_.call(null,result__6043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6043__auto__;
}
break;
}
}catch (e12862){if((e12862 instanceof Object))
{var ex__6044__auto__ = e12862;var statearr_12863_12887 = state_12856;(statearr_12863_12887[(5)] = ex__6044__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12856);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12862;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12888 = state_12856;
state_12856 = G__12888;
continue;
}
} else
{return ret_value__6042__auto__;
}
break;
}
});
state_machine__6041__auto__ = function(state_12856){
switch(arguments.length){
case 0:
return state_machine__6041__auto____0.call(this);
case 1:
return state_machine__6041__auto____1.call(this,state_12856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6041__auto____0;
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6041__auto____1;
return state_machine__6041__auto__;
})()
;})(switch__6040__auto__,c__6055__auto__,G__12847,self__$1))
})();var state__6057__auto__ = (function (){var statearr_12864 = f__6056__auto__.call(null);(statearr_12864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6055__auto__);
return statearr_12864;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6057__auto__);
});})(c__6055__auto__,G__12847,self__$1))
);
return c__6055__auto__;

break;
case "static":
var c__6055__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6055__auto__,G__12847,self__$1){
return (function (){var f__6056__auto__ = (function (){var switch__6040__auto__ = ((function (c__6055__auto__,G__12847,self__$1){
return (function (state_12869){var state_val_12870 = (state_12869[(1)]);if((state_val_12870 === (1)))
{var inst_12865 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1);var inst_12866 = new cljs.core.Keyword(null,"initialize","initialize",609952913).cljs$core$IFn$_invoke$arity$1(inst_12865);var inst_12867 = antares.core.cursor__GT_value.call(null,self__.app_cursor,inst_12866);var state_12869__$1 = state_12869;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12869__$1,inst_12867);
} else
{return null;
}
});})(c__6055__auto__,G__12847,self__$1))
;return ((function (switch__6040__auto__,c__6055__auto__,G__12847,self__$1){
return (function() {
var state_machine__6041__auto__ = null;
var state_machine__6041__auto____0 = (function (){var statearr_12874 = [null,null,null,null,null,null,null];(statearr_12874[(0)] = state_machine__6041__auto__);
(statearr_12874[(1)] = (1));
return statearr_12874;
});
var state_machine__6041__auto____1 = (function (state_12869){while(true){
var ret_value__6042__auto__ = (function (){try{while(true){
var result__6043__auto__ = switch__6040__auto__.call(null,state_12869);if(cljs.core.keyword_identical_QMARK_.call(null,result__6043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6043__auto__;
}
break;
}
}catch (e12875){if((e12875 instanceof Object))
{var ex__6044__auto__ = e12875;var statearr_12876_12889 = state_12869;(statearr_12876_12889[(5)] = ex__6044__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12869);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12875;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12890 = state_12869;
state_12869 = G__12890;
continue;
}
} else
{return ret_value__6042__auto__;
}
break;
}
});
state_machine__6041__auto__ = function(state_12869){
switch(arguments.length){
case 0:
return state_machine__6041__auto____0.call(this);
case 1:
return state_machine__6041__auto____1.call(this,state_12869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6041__auto____0;
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6041__auto____1;
return state_machine__6041__auto__;
})()
;})(switch__6040__auto__,c__6055__auto__,G__12847,self__$1))
})();var state__6057__auto__ = (function (){var statearr_12877 = f__6056__auto__.call(null);(statearr_12877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6055__auto__);
return statearr_12877;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6057__auto__);
});})(c__6055__auto__,G__12847,self__$1))
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
{var interactions__$1 = temp__4126__auto__;var seq__12878 = cljs.core.seq.call(null,interactions__$1);var chunk__12879 = null;var count__12880 = (0);var i__12881 = (0);while(true){
if((i__12881 < count__12880))
{var interaction = cljs.core._nth.call(null,chunk__12879,i__12881);document.querySelector(self__.dom_cursor).addEventListener(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"event-action","event-action",-974748529).cljs$core$IFn$_invoke$arity$1(interaction),true);
{
var G__12891 = seq__12878;
var G__12892 = chunk__12879;
var G__12893 = count__12880;
var G__12894 = (i__12881 + (1));
seq__12878 = G__12891;
chunk__12879 = G__12892;
count__12880 = G__12893;
i__12881 = G__12894;
continue;
}
} else
{var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__12878);if(temp__4126__auto____$1)
{var seq__12878__$1 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12878__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__12878__$1);{
var G__12895 = cljs.core.chunk_rest.call(null,seq__12878__$1);
var G__12896 = c__4299__auto__;
var G__12897 = cljs.core.count.call(null,c__4299__auto__);
var G__12898 = (0);
seq__12878 = G__12895;
chunk__12879 = G__12896;
count__12880 = G__12897;
i__12881 = G__12898;
continue;
}
} else
{var interaction = cljs.core.first.call(null,seq__12878__$1);document.querySelector(self__.dom_cursor).addEventListener(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"event-action","event-action",-974748529).cljs$core$IFn$_invoke$arity$1(interaction),true);
{
var G__12899 = cljs.core.next.call(null,seq__12878__$1);
var G__12900 = null;
var G__12901 = (0);
var G__12902 = (0);
seq__12878 = G__12899;
chunk__12879 = G__12900;
count__12880 = G__12901;
i__12881 = G__12902;
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
antares.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4136__auto__,k__4137__auto__,G__12843){var self__ = this;
var this__4136__auto____$1 = this;var pred__12882 = cljs.core.keyword_identical_QMARK_;var expr__12883 = k__4137__auto__;if(cljs.core.truth_(pred__12882.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),expr__12883)))
{return (new antares.core.Component(G__12843,self__.dom_cursor,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12882.call(null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),expr__12883)))
{return (new antares.core.Component(self__.app_cursor,G__12843,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12882.call(null,new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801),expr__12883)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,G__12843,self__.render_fn,self__.post_render_fn,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12882.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),expr__12883)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.pre_render_fn,G__12843,self__.post_render_fn,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12882.call(null,new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),expr__12883)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.pre_render_fn,self__.render_fn,G__12843,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12882.call(null,new cljs.core.Keyword(null,"interactions","interactions",550841811),expr__12883)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,G__12843,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12882.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__12883)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,G__12843,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.data,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4137__auto__,G__12843),null));
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
antares.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4128__auto__,G__12843){var self__ = this;
var this__4128__auto____$1 = this;return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.data,G__12843,self__.__extmap,self__.__hash));
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
var target_node_12903 = document.querySelector(self__.dom_cursor);var new_nodes_data_12904 = self__.render_fn.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,antares.core.app_state),self__.app_cursor));target_node_12903.innerHTML = new_nodes_data_12904;
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
antares.core.map__GT_Component = (function map__GT_Component(G__12845){return (new antares.core.Component(new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(G__12845),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(G__12845),new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801).cljs$core$IFn$_invoke$arity$1(G__12845),new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(G__12845),new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496).cljs$core$IFn$_invoke$arity$1(G__12845),new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(G__12845),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__12845),null,cljs.core.dissoc.call(null,G__12845,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),new cljs.core.Keyword(null,"interactions","interactions",550841811),new cljs.core.Keyword(null,"data","data",-232669377))));
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
antares.core.render_bindings = (function render_bindings(data_bindings){var seq__12909 = cljs.core.seq.call(null,data_bindings);var chunk__12910 = null;var count__12911 = (0);var i__12912 = (0);while(true){
if((i__12912 < count__12911))
{var data_binding = cljs.core._nth.call(null,chunk__12910,i__12912);antares.core.render.call(null,data_binding);
{
var G__12913 = seq__12909;
var G__12914 = chunk__12910;
var G__12915 = count__12911;
var G__12916 = (i__12912 + (1));
seq__12909 = G__12913;
chunk__12910 = G__12914;
count__12911 = G__12915;
i__12912 = G__12916;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12909);if(temp__4126__auto__)
{var seq__12909__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12909__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__12909__$1);{
var G__12917 = cljs.core.chunk_rest.call(null,seq__12909__$1);
var G__12918 = c__4299__auto__;
var G__12919 = cljs.core.count.call(null,c__4299__auto__);
var G__12920 = (0);
seq__12909 = G__12917;
chunk__12910 = G__12918;
count__12911 = G__12919;
i__12912 = G__12920;
continue;
}
} else
{var data_binding = cljs.core.first.call(null,seq__12909__$1);antares.core.render.call(null,data_binding);
{
var G__12921 = cljs.core.next.call(null,seq__12909__$1);
var G__12922 = null;
var G__12923 = (0);
var G__12924 = (0);
seq__12909 = G__12921;
chunk__12910 = G__12922;
count__12911 = G__12923;
i__12912 = G__12924;
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
antares.core.render_components = (function render_components(components__$1){var seq__12929 = cljs.core.seq.call(null,components__$1);var chunk__12930 = null;var count__12931 = (0);var i__12932 = (0);while(true){
if((i__12932 < count__12931))
{var component = cljs.core._nth.call(null,chunk__12930,i__12932);antares.core.render.call(null,component);
{
var G__12933 = seq__12929;
var G__12934 = chunk__12930;
var G__12935 = count__12931;
var G__12936 = (i__12932 + (1));
seq__12929 = G__12933;
chunk__12930 = G__12934;
count__12931 = G__12935;
i__12932 = G__12936;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12929);if(temp__4126__auto__)
{var seq__12929__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12929__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__12929__$1);{
var G__12937 = cljs.core.chunk_rest.call(null,seq__12929__$1);
var G__12938 = c__4299__auto__;
var G__12939 = cljs.core.count.call(null,c__4299__auto__);
var G__12940 = (0);
seq__12929 = G__12937;
chunk__12930 = G__12938;
count__12931 = G__12939;
i__12932 = G__12940;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__12929__$1);antares.core.render.call(null,component);
{
var G__12941 = cljs.core.next.call(null,seq__12929__$1);
var G__12942 = null;
var G__12943 = (0);
var G__12944 = (0);
seq__12929 = G__12941;
chunk__12930 = G__12942;
count__12931 = G__12943;
i__12932 = G__12944;
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
return (function (state_12968){var state_val_12969 = (state_12968[(1)]);if((state_val_12969 === (2)))
{var inst_12963 = (state_12968[(2)]);var inst_12964 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_12963);var inst_12965 = (function (){var response = inst_12964;return ((function (response,inst_12963,inst_12964,state_val_12969,c__6055__auto__){
return (function (state){return cljs.core.update_in.call(null,state,cursor,((function (response,inst_12963,inst_12964,state_val_12969,c__6055__auto__){
return (function (old_value){return response;
});})(response,inst_12963,inst_12964,state_val_12969,c__6055__auto__))
);
});
;})(response,inst_12963,inst_12964,state_val_12969,c__6055__auto__))
})();var inst_12966 = cljs.core.swap_BANG_.call(null,antares.core.app_state,inst_12965);var state_12968__$1 = state_12968;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12968__$1,inst_12966);
} else
{if((state_val_12969 === (1)))
{var inst_12961 = cljs_http.client.get.call(null,resource_url,cljs.core.PersistentHashMap.EMPTY);var state_12968__$1 = state_12968;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12968__$1,(2),inst_12961);
} else
{return null;
}
}
});})(c__6055__auto__))
;return ((function (switch__6040__auto__,c__6055__auto__){
return (function() {
var state_machine__6041__auto__ = null;
var state_machine__6041__auto____0 = (function (){var statearr_12973 = [null,null,null,null,null,null,null];(statearr_12973[(0)] = state_machine__6041__auto__);
(statearr_12973[(1)] = (1));
return statearr_12973;
});
var state_machine__6041__auto____1 = (function (state_12968){while(true){
var ret_value__6042__auto__ = (function (){try{while(true){
var result__6043__auto__ = switch__6040__auto__.call(null,state_12968);if(cljs.core.keyword_identical_QMARK_.call(null,result__6043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6043__auto__;
}
break;
}
}catch (e12974){if((e12974 instanceof Object))
{var ex__6044__auto__ = e12974;var statearr_12975_12977 = state_12968;(statearr_12975_12977[(5)] = ex__6044__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12968);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12974;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12978 = state_12968;
state_12968 = G__12978;
continue;
}
} else
{return ret_value__6042__auto__;
}
break;
}
});
state_machine__6041__auto__ = function(state_12968){
switch(arguments.length){
case 0:
return state_machine__6041__auto____0.call(this);
case 1:
return state_machine__6041__auto____1.call(this,state_12968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6041__auto____0;
state_machine__6041__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6041__auto____1;
return state_machine__6041__auto__;
})()
;})(switch__6040__auto__,c__6055__auto__))
})();var state__6057__auto__ = (function (){var statearr_12976 = f__6056__auto__.call(null);(statearr_12976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6055__auto__);
return statearr_12976;
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
cljs.core._add_method.call(null,antares.core.create_data_binding,true,(function (app_cursor,dom_cursor,render_fn){var data_binding = antares.core.map__GT_DataBinding.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),app_cursor,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),dom_cursor,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),render_fn], null));var seq__12979_12983 = cljs.core.seq.call(null,app_cursor);var chunk__12980_12984 = null;var count__12981_12985 = (0);var i__12982_12986 = (0);while(true){
if((i__12982_12986 < count__12981_12985))
{var cursor_12987 = cljs.core._nth.call(null,chunk__12980_12984,i__12982_12986);antares.core.register_app_state_cursor.call(null,cursor_12987,"");
{
var G__12988 = seq__12979_12983;
var G__12989 = chunk__12980_12984;
var G__12990 = count__12981_12985;
var G__12991 = (i__12982_12986 + (1));
seq__12979_12983 = G__12988;
chunk__12980_12984 = G__12989;
count__12981_12985 = G__12990;
i__12982_12986 = G__12991;
continue;
}
} else
{var temp__4126__auto___12992 = cljs.core.seq.call(null,seq__12979_12983);if(temp__4126__auto___12992)
{var seq__12979_12993__$1 = temp__4126__auto___12992;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12979_12993__$1))
{var c__4299__auto___12994 = cljs.core.chunk_first.call(null,seq__12979_12993__$1);{
var G__12995 = cljs.core.chunk_rest.call(null,seq__12979_12993__$1);
var G__12996 = c__4299__auto___12994;
var G__12997 = cljs.core.count.call(null,c__4299__auto___12994);
var G__12998 = (0);
seq__12979_12983 = G__12995;
chunk__12980_12984 = G__12996;
count__12981_12985 = G__12997;
i__12982_12986 = G__12998;
continue;
}
} else
{var cursor_12999 = cljs.core.first.call(null,seq__12979_12993__$1);antares.core.register_app_state_cursor.call(null,cursor_12999,"");
{
var G__13000 = cljs.core.next.call(null,seq__12979_12993__$1);
var G__13001 = null;
var G__13002 = (0);
var G__13003 = (0);
seq__12979_12983 = G__13000;
chunk__12980_12984 = G__13001;
count__12981_12985 = G__13002;
i__12982_12986 = G__13003;
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
cljs.core._add_method.call(null,antares.core.data_bind,true,(function (app_cursor,dom_cursors,render_fn){var seq__13004 = cljs.core.seq.call(null,dom_cursors);var chunk__13005 = null;var count__13006 = (0);var i__13007 = (0);while(true){
if((i__13007 < count__13006))
{var dom_cursor = cljs.core._nth.call(null,chunk__13005,i__13007);antares.core.create_data_binding.call(null,app_cursor,dom_cursor,render_fn);
{
var G__13008 = seq__13004;
var G__13009 = chunk__13005;
var G__13010 = count__13006;
var G__13011 = (i__13007 + (1));
seq__13004 = G__13008;
chunk__13005 = G__13009;
count__13006 = G__13010;
i__13007 = G__13011;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13004);if(temp__4126__auto__)
{var seq__13004__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13004__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__13004__$1);{
var G__13012 = cljs.core.chunk_rest.call(null,seq__13004__$1);
var G__13013 = c__4299__auto__;
var G__13014 = cljs.core.count.call(null,c__4299__auto__);
var G__13015 = (0);
seq__13004 = G__13012;
chunk__13005 = G__13013;
count__13006 = G__13014;
i__13007 = G__13015;
continue;
}
} else
{var dom_cursor = cljs.core.first.call(null,seq__13004__$1);antares.core.create_data_binding.call(null,app_cursor,dom_cursor,render_fn);
{
var G__13016 = cljs.core.next.call(null,seq__13004__$1);
var G__13017 = null;
var G__13018 = (0);
var G__13019 = (0);
seq__13004 = G__13016;
chunk__13005 = G__13017;
count__13006 = G__13018;
i__13007 = G__13019;
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
cljs.core.add_watch.call(null,antares.core.app_state,new cljs.core.Keyword(null,"render-bindings","render-bindings",2043700547),(function (k,r,old_state,new_state){if(cljs.core.not_EQ_.call(null,old_state,new_state))
{return antares.core.render_bindings.call(null,cljs.core.deref.call(null,antares.core.registered_bindings));
} else
{return null;
}
}));
cljs.core.add_watch.call(null,antares.core.app_state,new cljs.core.Keyword(null,"render-components","render-components",996968968),(function (k,r,old_state,new_state){return antares.core.render_components.call(null,cljs.core.deref.call(null,antares.core.registered_components));
}));
dommy.core.prepend_BANG_.call(null,document.querySelector("body"),(function (){var dom13020 = document.createElement("div");dom13020.className = "antares app-state";
dom13020.appendChild((function (){var dom13021 = document.createElement("textarea");dom13021.className = "antares app-state-inspector";
if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"80px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),".8rem"], null)))
{dom13021.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"80px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),".8rem"], null)));
} else
{}
return dom13021;
})());
return dom13020;
})());
antares.core.data_bind.call(null,cljs.core.PersistentVector.EMPTY,".antares.app-state-inspector",(function (data){return cljs.core.pr_str.call(null,data);
}));
antares.core.bind_event.call(null,".antares.app-state-inspector","input",(function (event){return antares.core.update_app_state.call(null,(function (){return antares.core.read_data.call(null,event.target.value);
}));
}));

//# sourceMappingURL=core.js.map