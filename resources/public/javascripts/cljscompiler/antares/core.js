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
antares.core.Renderable = (function (){var obj15863 = {};return obj15863;
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
antares.core.DataBinding.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4131__auto__,k15865,else__4132__auto__){var self__ = this;
var this__4131__auto____$1 = this;var G__15867 = (((k15865 instanceof cljs.core.Keyword))?k15865.fqn:null);switch (G__15867) {
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
return cljs.core.get.call(null,self__.__extmap,k15865,else__4132__auto__);

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
antares.core.DataBinding.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4136__auto__,k__4137__auto__,G__15864){var self__ = this;
var this__4136__auto____$1 = this;var pred__15868 = cljs.core.keyword_identical_QMARK_;var expr__15869 = k__4137__auto__;if(cljs.core.truth_(pred__15868.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),expr__15869)))
{return (new antares.core.DataBinding(G__15864,self__.dom_cursor,self__.render_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15868.call(null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),expr__15869)))
{return (new antares.core.DataBinding(self__.app_cursor,G__15864,self__.render_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15868.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),expr__15869)))
{return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,G__15864,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4137__auto__,G__15864),null));
}
}
}
});
antares.core.DataBinding.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null))], null),self__.__extmap));
});
antares.core.DataBinding.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4128__auto__,G__15864){var self__ = this;
var this__4128__auto____$1 = this;return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,self__.render_fn,G__15864,self__.__extmap,self__.__hash));
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
})()));var G__15871 = target_node.tagName;switch (G__15871) {
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
antares.core.map__GT_DataBinding = (function map__GT_DataBinding(G__15866){return (new antares.core.DataBinding(new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(G__15866),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(G__15866),new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(G__15866),null,cljs.core.dissoc.call(null,G__15866,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),new cljs.core.Keyword(null,"render-fn","render-fn",398796518))));
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
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4131__auto__,k15875,else__4132__auto__){var self__ = this;
var this__4131__auto____$1 = this;var G__15877 = (((k15875 instanceof cljs.core.Keyword))?k15875.fqn:null);switch (G__15877) {
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
return cljs.core.get.call(null,self__.__extmap,k15875,else__4132__auto__);

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
antares.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4136__auto__,k__4137__auto__,G__15874){var self__ = this;
var this__4136__auto____$1 = this;var pred__15878 = cljs.core.keyword_identical_QMARK_;var expr__15879 = k__4137__auto__;if(cljs.core.truth_(pred__15878.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),expr__15879)))
{return (new antares.core.Component(G__15874,self__.dom_cursor,self__.render_fn,self__.interactions,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15878.call(null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),expr__15879)))
{return (new antares.core.Component(self__.app_cursor,G__15874,self__.render_fn,self__.interactions,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15878.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),expr__15879)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,G__15874,self__.interactions,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15878.call(null,new cljs.core.Keyword(null,"interactions","interactions",550841811),expr__15879)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,G__15874,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.interactions,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4137__auto__,G__15874),null));
}
}
}
}
});
antares.core.Component.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"interactions","interactions",550841811),self__.interactions],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4128__auto__,G__15874){var self__ = this;
var this__4128__auto____$1 = this;return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.interactions,G__15874,self__.__extmap,self__.__hash));
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
var seq__15881 = cljs.core.seq.call(null,new_nodes_data);var chunk__15882 = null;var count__15883 = (0);var i__15884 = (0);while(true){
if((i__15884 < count__15883))
{var new_node_data = cljs.core._nth.call(null,chunk__15882,i__15884);var node_to_append_15886 = dommy.template.__GT_node_like.call(null,new_node_data);dommy.core.append_BANG_.call(null,target_node,node_to_append_15886);
{
var G__15887 = seq__15881;
var G__15888 = chunk__15882;
var G__15889 = count__15883;
var G__15890 = (i__15884 + (1));
seq__15881 = G__15887;
chunk__15882 = G__15888;
count__15883 = G__15889;
i__15884 = G__15890;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__15881);if(temp__4126__auto__)
{var seq__15881__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15881__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__15881__$1);{
var G__15891 = cljs.core.chunk_rest.call(null,seq__15881__$1);
var G__15892 = c__4299__auto__;
var G__15893 = cljs.core.count.call(null,c__4299__auto__);
var G__15894 = (0);
seq__15881 = G__15891;
chunk__15882 = G__15892;
count__15883 = G__15893;
i__15884 = G__15894;
continue;
}
} else
{var new_node_data = cljs.core.first.call(null,seq__15881__$1);var node_to_append_15895 = dommy.template.__GT_node_like.call(null,new_node_data);dommy.core.append_BANG_.call(null,target_node,node_to_append_15895);
{
var G__15896 = cljs.core.next.call(null,seq__15881__$1);
var G__15897 = null;
var G__15898 = (0);
var G__15899 = (0);
seq__15881 = G__15896;
chunk__15882 = G__15897;
count__15883 = G__15898;
i__15884 = G__15899;
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
antares.core.map__GT_Component = (function map__GT_Component(G__15876){return (new antares.core.Component(new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(G__15876),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(G__15876),new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(G__15876),new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(G__15876),null,cljs.core.dissoc.call(null,G__15876,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Keyword(null,"interactions","interactions",550841811))));
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
antares.core.render_bindings = (function render_bindings(data_bindings){var seq__15904 = cljs.core.seq.call(null,data_bindings);var chunk__15905 = null;var count__15906 = (0);var i__15907 = (0);while(true){
if((i__15907 < count__15906))
{var data_binding = cljs.core._nth.call(null,chunk__15905,i__15907);antares.core.render.call(null,data_binding);
{
var G__15908 = seq__15904;
var G__15909 = chunk__15905;
var G__15910 = count__15906;
var G__15911 = (i__15907 + (1));
seq__15904 = G__15908;
chunk__15905 = G__15909;
count__15906 = G__15910;
i__15907 = G__15911;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__15904);if(temp__4126__auto__)
{var seq__15904__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15904__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__15904__$1);{
var G__15912 = cljs.core.chunk_rest.call(null,seq__15904__$1);
var G__15913 = c__4299__auto__;
var G__15914 = cljs.core.count.call(null,c__4299__auto__);
var G__15915 = (0);
seq__15904 = G__15912;
chunk__15905 = G__15913;
count__15906 = G__15914;
i__15907 = G__15915;
continue;
}
} else
{var data_binding = cljs.core.first.call(null,seq__15904__$1);antares.core.render.call(null,data_binding);
{
var G__15916 = cljs.core.next.call(null,seq__15904__$1);
var G__15917 = null;
var G__15918 = (0);
var G__15919 = (0);
seq__15904 = G__15916;
chunk__15905 = G__15917;
count__15906 = G__15918;
i__15907 = G__15919;
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
antares.core.render_components = (function render_components(components){var seq__15924 = cljs.core.seq.call(null,components);var chunk__15925 = null;var count__15926 = (0);var i__15927 = (0);while(true){
if((i__15927 < count__15926))
{var component = cljs.core._nth.call(null,chunk__15925,i__15927);antares.core.render.call(null,component);
{
var G__15928 = seq__15924;
var G__15929 = chunk__15925;
var G__15930 = count__15926;
var G__15931 = (i__15927 + (1));
seq__15924 = G__15928;
chunk__15925 = G__15929;
count__15926 = G__15930;
i__15927 = G__15931;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__15924);if(temp__4126__auto__)
{var seq__15924__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15924__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__15924__$1);{
var G__15932 = cljs.core.chunk_rest.call(null,seq__15924__$1);
var G__15933 = c__4299__auto__;
var G__15934 = cljs.core.count.call(null,c__4299__auto__);
var G__15935 = (0);
seq__15924 = G__15932;
chunk__15925 = G__15933;
count__15926 = G__15934;
i__15927 = G__15935;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__15924__$1);antares.core.render.call(null,component);
{
var G__15936 = cljs.core.next.call(null,seq__15924__$1);
var G__15937 = null;
var G__15938 = (0);
var G__15939 = (0);
seq__15924 = G__15936;
chunk__15925 = G__15937;
count__15926 = G__15938;
i__15927 = G__15939;
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
cljs.core._add_method.call(null,antares.core.create_data_binding,true,(function (app_cursors,dom_cursor,render_fn){new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antares.core.data_binding,antares.core.map__GT_DataBinding.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),app_cursors,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),dom_cursor,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),render_fn], null))], null);
var seq__15940_15944 = cljs.core.seq.call(null,app_cursors);var chunk__15941_15945 = null;var count__15942_15946 = (0);var i__15943_15947 = (0);while(true){
if((i__15943_15947 < count__15942_15946))
{var app_cursor_15948 = cljs.core._nth.call(null,chunk__15941_15945,i__15943_15947);antares.core.register_app_state_cursor.call(null,app_cursor_15948,"");
{
var G__15949 = seq__15940_15944;
var G__15950 = chunk__15941_15945;
var G__15951 = count__15942_15946;
var G__15952 = (i__15943_15947 + (1));
seq__15940_15944 = G__15949;
chunk__15941_15945 = G__15950;
count__15942_15946 = G__15951;
i__15943_15947 = G__15952;
continue;
}
} else
{var temp__4126__auto___15953 = cljs.core.seq.call(null,seq__15940_15944);if(temp__4126__auto___15953)
{var seq__15940_15954__$1 = temp__4126__auto___15953;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15940_15954__$1))
{var c__4299__auto___15955 = cljs.core.chunk_first.call(null,seq__15940_15954__$1);{
var G__15956 = cljs.core.chunk_rest.call(null,seq__15940_15954__$1);
var G__15957 = c__4299__auto___15955;
var G__15958 = cljs.core.count.call(null,c__4299__auto___15955);
var G__15959 = (0);
seq__15940_15944 = G__15956;
chunk__15941_15945 = G__15957;
count__15942_15946 = G__15958;
i__15943_15947 = G__15959;
continue;
}
} else
{var app_cursor_15960 = cljs.core.first.call(null,seq__15940_15954__$1);antares.core.register_app_state_cursor.call(null,app_cursor_15960,"");
{
var G__15961 = cljs.core.next.call(null,seq__15940_15954__$1);
var G__15962 = null;
var G__15963 = (0);
var G__15964 = (0);
seq__15940_15944 = G__15961;
chunk__15941_15945 = G__15962;
count__15942_15946 = G__15963;
i__15943_15947 = G__15964;
continue;
}
}
} else
{}
}
break;
}
return antares.core.register_binding.call(null,antares.core.data_binding);
}));
antares.core.data_bind = (function (){var method_table__4409__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4410__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4411__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4412__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4413__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("data-bind",((function (method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__,hierarchy__4413__auto__){
return (function (app_cursors,dom_cursors,render_fn){return cljs.core._EQ_.call(null,cljs.core.type.call(null,dom_cursors),cljs.core.List);
});})(method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__,hierarchy__4413__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4413__auto__,method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__));
})();
cljs.core._add_method.call(null,antares.core.data_bind,false,(function (app_cursor,dom_cursor,render_fn){return antares.core.create_data_binding.call(null,app_cursor,dom_cursor,render_fn);
}));
cljs.core._add_method.call(null,antares.core.data_bind,true,(function (app_cursor,dom_cursors,render_fn){var seq__15965 = cljs.core.seq.call(null,dom_cursors);var chunk__15966 = null;var count__15967 = (0);var i__15968 = (0);while(true){
if((i__15968 < count__15967))
{var dom_cursor = cljs.core._nth.call(null,chunk__15966,i__15968);antares.core.create_data_binding.call(null,app_cursor,dom_cursor,render_fn);
{
var G__15969 = seq__15965;
var G__15970 = chunk__15966;
var G__15971 = count__15967;
var G__15972 = (i__15968 + (1));
seq__15965 = G__15969;
chunk__15966 = G__15970;
count__15967 = G__15971;
i__15968 = G__15972;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__15965);if(temp__4126__auto__)
{var seq__15965__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15965__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__15965__$1);{
var G__15973 = cljs.core.chunk_rest.call(null,seq__15965__$1);
var G__15974 = c__4299__auto__;
var G__15975 = cljs.core.count.call(null,c__4299__auto__);
var G__15976 = (0);
seq__15965 = G__15973;
chunk__15966 = G__15974;
count__15967 = G__15975;
i__15968 = G__15976;
continue;
}
} else
{var dom_cursor = cljs.core.first.call(null,seq__15965__$1);antares.core.create_data_binding.call(null,app_cursor,dom_cursor,render_fn);
{
var G__15977 = cljs.core.next.call(null,seq__15965__$1);
var G__15978 = null;
var G__15979 = (0);
var G__15980 = (0);
seq__15965 = G__15977;
chunk__15966 = G__15978;
count__15967 = G__15979;
i__15968 = G__15980;
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
antares.core.two_way_data_bind = (function two_way_data_bind(app_cursor,dom_cursor){return null;
});
antares.core.bind_event = (function bind_event(dom_cursor,event_type,action){return document.querySelector(dom_cursor).addEventListener(event_type,action);
});
cljs.core.add_watch.call(null,antares.core.app_state,new cljs.core.Keyword(null,"render-bindings","render-bindings",2043700547),(function (k,r,old_state,new_state){return antares.core.render_bindings.call(null,cljs.core.deref.call(null,antares.core.registered_bindings));
}));
cljs.core.add_watch.call(null,antares.core.app_state,new cljs.core.Keyword(null,"render-components","render-components",996968968),(function (k,r,old_state,new_state){return antares.core.render_components.call(null,cljs.core.deref.call(null,antares.core.registered_components));
}));
antares.core.update_cursor = (function update_cursor(cursor,new_value){return cljs.core.swap_BANG_.call(null,antares.core.app_state,(function (state){return cljs.core.update_in.call(null,state,cursor,(function (old_value){return new_value;
}));
}));
});

//# sourceMappingURL=core.js.map