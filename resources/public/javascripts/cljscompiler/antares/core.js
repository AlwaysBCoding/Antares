// Compiled by ClojureScript 0.0-2277
goog.provide('antares.core');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('dommy.core');
goog.require('dommy.core');
antares.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
antares.core.registered_bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
antares.core.registered_components = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
antares.core.Renderable = (function (){var obj15153 = {};return obj15153;
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
antares.core.DataBinding.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4131__auto__,k15155,else__4132__auto__){var self__ = this;
var this__4131__auto____$1 = this;var G__15157 = (((k15155 instanceof cljs.core.Keyword))?k15155.fqn:null);switch (G__15157) {
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
return cljs.core.get.call(null,self__.__extmap,k15155,else__4132__auto__);

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
antares.core.DataBinding.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4136__auto__,k__4137__auto__,G__15154){var self__ = this;
var this__4136__auto____$1 = this;var pred__15158 = cljs.core.keyword_identical_QMARK_;var expr__15159 = k__4137__auto__;if(cljs.core.truth_(pred__15158.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),expr__15159)))
{return (new antares.core.DataBinding(G__15154,self__.dom_cursor,self__.render_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15158.call(null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),expr__15159)))
{return (new antares.core.DataBinding(self__.app_cursor,G__15154,self__.render_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15158.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),expr__15159)))
{return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,G__15154,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4137__auto__,G__15154),null));
}
}
}
});
antares.core.DataBinding.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null))], null),self__.__extmap));
});
antares.core.DataBinding.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4128__auto__,G__15154){var self__ = this;
var this__4128__auto____$1 = this;return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,self__.render_fn,G__15154,self__.__extmap,self__.__hash));
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
var self__$1 = this;var target_node = document.querySelector(dommy.core.selector.call(null,self__.dom_cursor));var target_data = ((cljs.core._EQ_.call(null,cljs.core.type.call(null,self__.app_cursor),cljs.core.List))?self__.render_fn.call(null,cljs.core.map.call(null,((function (target_node,self__$1){
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
})()));return dommy.core.set_text_BANG_.call(null,target_node,target_data);
});
antares.core.DataBinding.cljs$lang$type = true;
antares.core.DataBinding.cljs$lang$ctorPrSeq = (function (this__4163__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"antares.core/DataBinding");
});
antares.core.DataBinding.cljs$lang$ctorPrWriter = (function (this__4163__auto__,writer__4164__auto__){return cljs.core._write.call(null,writer__4164__auto__,"antares.core/DataBinding");
});
antares.core.__GT_DataBinding = (function __GT_DataBinding(app_cursor,dom_cursor,render_fn){return (new antares.core.DataBinding(app_cursor,dom_cursor,render_fn));
});
antares.core.map__GT_DataBinding = (function map__GT_DataBinding(G__15156){return (new antares.core.DataBinding(new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(G__15156),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(G__15156),new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(G__15156),null,cljs.core.dissoc.call(null,G__15156,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),new cljs.core.Keyword(null,"render-fn","render-fn",398796518))));
});

/**
* @constructor
* @param {*} app_cursor
* @param {*} dom_cursor
* @param {*} render_fn
* @param {*} interactions
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
antares.core.Component = (function (app_cursor,dom_cursor,render_fn,interactions,__meta,__extmap){
this.app_cursor = app_cursor;
this.dom_cursor = dom_cursor;
this.render_fn = render_fn;
this.interactions = interactions;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>4){
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
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4131__auto__,k15163,else__4132__auto__){var self__ = this;
var this__4131__auto____$1 = this;var G__15165 = (((k15163 instanceof cljs.core.Keyword))?k15163.fqn:null);switch (G__15165) {
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
return cljs.core.get.call(null,self__.__extmap,k15163,else__4132__auto__);

}
});
antares.core.Component.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4143__auto__,writer__4144__auto__,opts__4145__auto__){var self__ = this;
var this__4143__auto____$1 = this;var pr_pair__4146__auto__ = ((function (this__4143__auto____$1){
return (function (keyval__4147__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4144__auto__,cljs.core.pr_writer,""," ","",opts__4145__auto__,keyval__4147__auto__);
});})(this__4143__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4144__auto__,pr_pair__4146__auto__,"#antares.core.Component{",", ","}",opts__4145__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"interactions","interactions",550841811),self__.interactions],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4127__auto__){var self__ = this;
var this__4127__auto____$1 = this;return self__.__meta;
});
antares.core.Component.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4123__auto__){var self__ = this;
var this__4123__auto____$1 = this;return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.interactions,self__.__meta,self__.__extmap,self__.__hash));
});
antares.core.Component.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4133__auto__){var self__ = this;
var this__4133__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
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
antares.core.Component.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4138__auto__,k__4139__auto__){var self__ = this;
var this__4138__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),null,new cljs.core.Keyword(null,"interactions","interactions",550841811),null], null), null),k__4139__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4138__auto____$1),self__.__meta),k__4139__auto__);
} else
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.interactions,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4139__auto__)),null));
}
});
antares.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4136__auto__,k__4137__auto__,G__15162){var self__ = this;
var this__4136__auto____$1 = this;var pred__15166 = cljs.core.keyword_identical_QMARK_;var expr__15167 = k__4137__auto__;if(cljs.core.truth_(pred__15166.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),expr__15167)))
{return (new antares.core.Component(G__15162,self__.dom_cursor,self__.render_fn,self__.interactions,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15166.call(null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),expr__15167)))
{return (new antares.core.Component(self__.app_cursor,G__15162,self__.render_fn,self__.interactions,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15166.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),expr__15167)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,G__15162,self__.interactions,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15166.call(null,new cljs.core.Keyword(null,"interactions","interactions",550841811),expr__15167)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,G__15162,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.interactions,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4137__auto__,G__15162),null));
}
}
}
}
});
antares.core.Component.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"interactions","interactions",550841811),self__.interactions],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4128__auto__,G__15162){var self__ = this;
var this__4128__auto____$1 = this;return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.interactions,G__15162,self__.__extmap,self__.__hash));
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
var self__$1 = this;var target_node = document.querySelector(dommy.core.selector.call(null,self__.dom_cursor));var new_nodes_data = self__.render_fn.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,antares.core.app_state),self__.app_cursor));dommy.core.clear_BANG_.call(null,target_node);
var seq__15169 = cljs.core.seq.call(null,new_nodes_data);var chunk__15170 = null;var count__15171 = (0);var i__15172 = (0);while(true){
if((i__15172 < count__15171))
{var new_node_data = cljs.core._nth.call(null,chunk__15170,i__15172);var node_to_append_15174 = dommy.template.__GT_node_like.call(null,new_node_data);dommy.core.append_BANG_.call(null,target_node,node_to_append_15174);
{
var G__15175 = seq__15169;
var G__15176 = chunk__15170;
var G__15177 = count__15171;
var G__15178 = (i__15172 + (1));
seq__15169 = G__15175;
chunk__15170 = G__15176;
count__15171 = G__15177;
i__15172 = G__15178;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__15169);if(temp__4126__auto__)
{var seq__15169__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15169__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__15169__$1);{
var G__15179 = cljs.core.chunk_rest.call(null,seq__15169__$1);
var G__15180 = c__4299__auto__;
var G__15181 = cljs.core.count.call(null,c__4299__auto__);
var G__15182 = (0);
seq__15169 = G__15179;
chunk__15170 = G__15180;
count__15171 = G__15181;
i__15172 = G__15182;
continue;
}
} else
{var new_node_data = cljs.core.first.call(null,seq__15169__$1);var node_to_append_15183 = dommy.template.__GT_node_like.call(null,new_node_data);dommy.core.append_BANG_.call(null,target_node,node_to_append_15183);
{
var G__15184 = cljs.core.next.call(null,seq__15169__$1);
var G__15185 = null;
var G__15186 = (0);
var G__15187 = (0);
seq__15169 = G__15184;
chunk__15170 = G__15185;
count__15171 = G__15186;
i__15172 = G__15187;
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
antares.core.__GT_Component = (function __GT_Component(app_cursor,dom_cursor,render_fn,interactions){return (new antares.core.Component(app_cursor,dom_cursor,render_fn,interactions));
});
antares.core.map__GT_Component = (function map__GT_Component(G__15164){return (new antares.core.Component(new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(G__15164),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(G__15164),new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(G__15164),new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(G__15164),null,cljs.core.dissoc.call(null,G__15164,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Keyword(null,"interactions","interactions",550841811))));
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
antares.core.render_bindings = (function render_bindings(data_bindings){var seq__15192 = cljs.core.seq.call(null,data_bindings);var chunk__15193 = null;var count__15194 = (0);var i__15195 = (0);while(true){
if((i__15195 < count__15194))
{var data_binding = cljs.core._nth.call(null,chunk__15193,i__15195);antares.core.render.call(null,data_binding);
{
var G__15196 = seq__15192;
var G__15197 = chunk__15193;
var G__15198 = count__15194;
var G__15199 = (i__15195 + (1));
seq__15192 = G__15196;
chunk__15193 = G__15197;
count__15194 = G__15198;
i__15195 = G__15199;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__15192);if(temp__4126__auto__)
{var seq__15192__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15192__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__15192__$1);{
var G__15200 = cljs.core.chunk_rest.call(null,seq__15192__$1);
var G__15201 = c__4299__auto__;
var G__15202 = cljs.core.count.call(null,c__4299__auto__);
var G__15203 = (0);
seq__15192 = G__15200;
chunk__15193 = G__15201;
count__15194 = G__15202;
i__15195 = G__15203;
continue;
}
} else
{var data_binding = cljs.core.first.call(null,seq__15192__$1);antares.core.render.call(null,data_binding);
{
var G__15204 = cljs.core.next.call(null,seq__15192__$1);
var G__15205 = null;
var G__15206 = (0);
var G__15207 = (0);
seq__15192 = G__15204;
chunk__15193 = G__15205;
count__15194 = G__15206;
i__15195 = G__15207;
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
antares.core.render_components = (function render_components(components){var seq__15212 = cljs.core.seq.call(null,components);var chunk__15213 = null;var count__15214 = (0);var i__15215 = (0);while(true){
if((i__15215 < count__15214))
{var component = cljs.core._nth.call(null,chunk__15213,i__15215);antares.core.render.call(null,component);
{
var G__15216 = seq__15212;
var G__15217 = chunk__15213;
var G__15218 = count__15214;
var G__15219 = (i__15215 + (1));
seq__15212 = G__15216;
chunk__15213 = G__15217;
count__15214 = G__15218;
i__15215 = G__15219;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__15212);if(temp__4126__auto__)
{var seq__15212__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15212__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__15212__$1);{
var G__15220 = cljs.core.chunk_rest.call(null,seq__15212__$1);
var G__15221 = c__4299__auto__;
var G__15222 = cljs.core.count.call(null,c__4299__auto__);
var G__15223 = (0);
seq__15212 = G__15220;
chunk__15213 = G__15221;
count__15214 = G__15222;
i__15215 = G__15223;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__15212__$1);antares.core.render.call(null,component);
{
var G__15224 = cljs.core.next.call(null,seq__15212__$1);
var G__15225 = null;
var G__15226 = (0);
var G__15227 = (0);
seq__15212 = G__15224;
chunk__15213 = G__15225;
count__15214 = G__15226;
i__15215 = G__15227;
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
antares.core.create_component = (function create_component(source_map){var component = antares.core.map__GT_Component.call(null,source_map);antares.core.register_app_state_cursor.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(source_map),cljs.core.PersistentVector.EMPTY);
antares.core.register_component.call(null,component);
antares.core.render.call(null,component);
return component;
});
antares.core.create_data_binding = (function (){var method_table__4409__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4410__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4411__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4412__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4413__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("create-data-binding",((function (method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__,hierarchy__4413__auto__){
return (function (app_cursors,dom_cursor,render_fn){return cljs.core._EQ_.call(null,cljs.core.type.call(null,app_cursors),cljs.core.List);
});})(method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__,hierarchy__4413__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4413__auto__,method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__));
})();
cljs.core._add_method.call(null,antares.core.create_data_binding,false,(function (app_cursor,dom_cursor,render_fn){var data_binding = antares.core.map__GT_DataBinding.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),app_cursor,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),dom_cursor,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),render_fn], null));antares.core.register_app_state_cursor.call(null,app_cursor,"");
antares.core.register_binding.call(null,data_binding);
antares.core.render.call(null,data_binding);
return data_binding;
}));
cljs.core._add_method.call(null,antares.core.create_data_binding,true,(function (app_cursors,dom_cursor,render_fn){var data_binding = antares.core.map__GT_DataBinding.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),app_cursors,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),dom_cursor,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),render_fn], null));var seq__15228_15232 = cljs.core.seq.call(null,app_cursors);var chunk__15229_15233 = null;var count__15230_15234 = (0);var i__15231_15235 = (0);while(true){
if((i__15231_15235 < count__15230_15234))
{var app_cursor_15236 = cljs.core._nth.call(null,chunk__15229_15233,i__15231_15235);antares.core.register_app_state_cursor.call(null,app_cursor_15236,"");
{
var G__15237 = seq__15228_15232;
var G__15238 = chunk__15229_15233;
var G__15239 = count__15230_15234;
var G__15240 = (i__15231_15235 + (1));
seq__15228_15232 = G__15237;
chunk__15229_15233 = G__15238;
count__15230_15234 = G__15239;
i__15231_15235 = G__15240;
continue;
}
} else
{var temp__4126__auto___15241 = cljs.core.seq.call(null,seq__15228_15232);if(temp__4126__auto___15241)
{var seq__15228_15242__$1 = temp__4126__auto___15241;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15228_15242__$1))
{var c__4299__auto___15243 = cljs.core.chunk_first.call(null,seq__15228_15242__$1);{
var G__15244 = cljs.core.chunk_rest.call(null,seq__15228_15242__$1);
var G__15245 = c__4299__auto___15243;
var G__15246 = cljs.core.count.call(null,c__4299__auto___15243);
var G__15247 = (0);
seq__15228_15232 = G__15244;
chunk__15229_15233 = G__15245;
count__15230_15234 = G__15246;
i__15231_15235 = G__15247;
continue;
}
} else
{var app_cursor_15248 = cljs.core.first.call(null,seq__15228_15242__$1);antares.core.register_app_state_cursor.call(null,app_cursor_15248,"");
{
var G__15249 = cljs.core.next.call(null,seq__15228_15242__$1);
var G__15250 = null;
var G__15251 = (0);
var G__15252 = (0);
seq__15228_15232 = G__15249;
chunk__15229_15233 = G__15250;
count__15230_15234 = G__15251;
i__15231_15235 = G__15252;
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
return (function (app_cursors,dom_cursors,render_fn){return cljs.core._EQ_.call(null,cljs.core.type.call(null,dom_cursors),cljs.core.List);
});})(method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__,hierarchy__4413__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4413__auto__,method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__));
})();
cljs.core._add_method.call(null,antares.core.data_bind,false,(function (app_cursor,dom_cursor,render_fn){return antares.core.create_data_binding.call(null,app_cursor,dom_cursor,render_fn);
}));
cljs.core._add_method.call(null,antares.core.data_bind,true,(function (app_cursor,dom_cursors,render_fn){var seq__15253 = cljs.core.seq.call(null,dom_cursors);var chunk__15254 = null;var count__15255 = (0);var i__15256 = (0);while(true){
if((i__15256 < count__15255))
{var dom_cursor = cljs.core._nth.call(null,chunk__15254,i__15256);antares.core.create_data_binding.call(null,app_cursor,dom_cursor,render_fn);
{
var G__15257 = seq__15253;
var G__15258 = chunk__15254;
var G__15259 = count__15255;
var G__15260 = (i__15256 + (1));
seq__15253 = G__15257;
chunk__15254 = G__15258;
count__15255 = G__15259;
i__15256 = G__15260;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__15253);if(temp__4126__auto__)
{var seq__15253__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15253__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__15253__$1);{
var G__15261 = cljs.core.chunk_rest.call(null,seq__15253__$1);
var G__15262 = c__4299__auto__;
var G__15263 = cljs.core.count.call(null,c__4299__auto__);
var G__15264 = (0);
seq__15253 = G__15261;
chunk__15254 = G__15262;
count__15255 = G__15263;
i__15256 = G__15264;
continue;
}
} else
{var dom_cursor = cljs.core.first.call(null,seq__15253__$1);antares.core.create_data_binding.call(null,app_cursor,dom_cursor,render_fn);
{
var G__15265 = cljs.core.next.call(null,seq__15253__$1);
var G__15266 = null;
var G__15267 = (0);
var G__15268 = (0);
seq__15253 = G__15265;
chunk__15254 = G__15266;
count__15255 = G__15267;
i__15256 = G__15268;
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
cljs.core.add_watch.call(null,antares.core.app_state,new cljs.core.Keyword(null,"render-bindings","render-bindings",2043700547),(function (k,r,old_state,new_state){return antares.core.render_bindings.call(null,cljs.core.deref.call(null,antares.core.registered_bindings));
}));
cljs.core.add_watch.call(null,antares.core.app_state,new cljs.core.Keyword(null,"render-components","render-components",996968968),(function (k,r,old_state,new_state){return antares.core.render_components.call(null,cljs.core.deref.call(null,antares.core.registered_components));
}));

//# sourceMappingURL=core.js.map