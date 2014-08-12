// Compiled by ClojureScript 0.0-2277
goog.provide('antares.core');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('antares.repl');
goog.require('antares.repl');
goog.require('antares.importers');
goog.require('antares.importers');
antares.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
antares.core.registered_bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
antares.core.registered_components = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
antares.core.Renderable = (function (){var obj8431 = {};return obj8431;
})();
antares.core.render = (function render(self){if((function (){var and__3551__auto__ = self;if(and__3551__auto__)
{return self.antares$core$Renderable$render$arity$1;
} else
{return and__3551__auto__;
}
})())
{return self.antares$core$Renderable$render$arity$1(self);
} else
{var x__4190__auto__ = (((self == null))?null:self);return (function (){var or__3563__auto__ = (antares.core.render[goog.typeOf(x__4190__auto__)]);if(or__3563__auto__)
{return or__3563__auto__;
} else
{var or__3563__auto____$1 = (antares.core.render["_"]);if(or__3563__auto____$1)
{return or__3563__auto____$1;
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
antares.core.DataBinding.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4149__auto__,k__4150__auto__){var self__ = this;
var this__4149__auto____$1 = this;return cljs.core._lookup.call(null,this__4149__auto____$1,k__4150__auto__,null);
});
antares.core.DataBinding.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4151__auto__,k8433,else__4152__auto__){var self__ = this;
var this__4151__auto____$1 = this;var G__8435 = (((k8433 instanceof cljs.core.Keyword))?k8433.fqn:null);switch (G__8435) {
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
return cljs.core.get.call(null,self__.__extmap,k8433,else__4152__auto__);

}
});
antares.core.DataBinding.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4163__auto__,writer__4164__auto__,opts__4165__auto__){var self__ = this;
var this__4163__auto____$1 = this;var pr_pair__4166__auto__ = ((function (this__4163__auto____$1){
return (function (keyval__4167__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4164__auto__,cljs.core.pr_writer,""," ","",opts__4165__auto__,keyval__4167__auto__);
});})(this__4163__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4164__auto__,pr_pair__4166__auto__,"#antares.core.DataBinding{",", ","}",opts__4165__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null))], null),self__.__extmap));
});
antares.core.DataBinding.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4147__auto__){var self__ = this;
var this__4147__auto____$1 = this;return self__.__meta;
});
antares.core.DataBinding.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4143__auto__){var self__ = this;
var this__4143__auto____$1 = this;return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.__meta,self__.__extmap,self__.__hash));
});
antares.core.DataBinding.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4153__auto__){var self__ = this;
var this__4153__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
antares.core.DataBinding.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4144__auto__){var self__ = this;
var this__4144__auto____$1 = this;var h__3974__auto__ = self__.__hash;if(!((h__3974__auto__ == null)))
{return h__3974__auto__;
} else
{var h__3974__auto____$1 = cljs.core.hash_imap.call(null,this__4144__auto____$1);self__.__hash = h__3974__auto____$1;
return h__3974__auto____$1;
}
});
antares.core.DataBinding.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4145__auto__,other__4146__auto__){var self__ = this;
var this__4145__auto____$1 = this;if(cljs.core.truth_((function (){var and__3551__auto__ = other__4146__auto__;if(cljs.core.truth_(and__3551__auto__))
{return ((this__4145__auto____$1.constructor === other__4146__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4145__auto____$1,other__4146__auto__));
} else
{return and__3551__auto__;
}
})()))
{return true;
} else
{return false;
}
});
antares.core.DataBinding.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4158__auto__,k__4159__auto__){var self__ = this;
var this__4158__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),null], null), null),k__4159__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4158__auto____$1),self__.__meta),k__4159__auto__);
} else
{return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4159__auto__)),null));
}
});
antares.core.DataBinding.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4156__auto__,k__4157__auto__,G__8432){var self__ = this;
var this__4156__auto____$1 = this;var pred__8436 = cljs.core.keyword_identical_QMARK_;var expr__8437 = k__4157__auto__;if(cljs.core.truth_(pred__8436.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),expr__8437)))
{return (new antares.core.DataBinding(G__8432,self__.dom_cursor,self__.render_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__8436.call(null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),expr__8437)))
{return (new antares.core.DataBinding(self__.app_cursor,G__8432,self__.render_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__8436.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),expr__8437)))
{return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,G__8432,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4157__auto__,G__8432),null));
}
}
}
});
antares.core.DataBinding.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4161__auto__){var self__ = this;
var this__4161__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null))], null),self__.__extmap));
});
antares.core.DataBinding.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4148__auto__,G__8432){var self__ = this;
var this__4148__auto____$1 = this;return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,self__.render_fn,G__8432,self__.__extmap,self__.__hash));
});
antares.core.DataBinding.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4154__auto__,entry__4155__auto__){var self__ = this;
var this__4154__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4155__auto__))
{return cljs.core._assoc.call(null,this__4154__auto____$1,cljs.core._nth.call(null,entry__4155__auto__,(0)),cljs.core._nth.call(null,entry__4155__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4154__auto____$1,entry__4155__auto__);
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
})()));var G__8439 = target_node.tagName;switch (G__8439) {
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
antares.core.DataBinding.cljs$lang$ctorPrSeq = (function (this__4183__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"antares.core/DataBinding");
});
antares.core.DataBinding.cljs$lang$ctorPrWriter = (function (this__4183__auto__,writer__4184__auto__){return cljs.core._write.call(null,writer__4184__auto__,"antares.core/DataBinding");
});
antares.core.__GT_DataBinding = (function __GT_DataBinding(app_cursor,dom_cursor,render_fn){return (new antares.core.DataBinding(app_cursor,dom_cursor,render_fn));
});
antares.core.map__GT_DataBinding = (function map__GT_DataBinding(G__8434){return (new antares.core.DataBinding(new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(G__8434),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(G__8434),new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(G__8434),null,cljs.core.dissoc.call(null,G__8434,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),new cljs.core.Keyword(null,"render-fn","render-fn",398796518))));
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
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4149__auto__,k__4150__auto__){var self__ = this;
var this__4149__auto____$1 = this;return cljs.core._lookup.call(null,this__4149__auto____$1,k__4150__auto__,null);
});
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4151__auto__,k8443,else__4152__auto__){var self__ = this;
var this__4151__auto____$1 = this;var G__8445 = (((k8443 instanceof cljs.core.Keyword))?k8443.fqn:null);switch (G__8445) {
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
return cljs.core.get.call(null,self__.__extmap,k8443,else__4152__auto__);

}
});
antares.core.Component.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4163__auto__,writer__4164__auto__,opts__4165__auto__){var self__ = this;
var this__4163__auto____$1 = this;var pr_pair__4166__auto__ = ((function (this__4163__auto____$1){
return (function (keyval__4167__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4164__auto__,cljs.core.pr_writer,""," ","",opts__4165__auto__,keyval__4167__auto__);
});})(this__4163__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4164__auto__,pr_pair__4166__auto__,"#antares.core.Component{",", ","}",opts__4165__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"interactions","interactions",550841811),self__.interactions],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4147__auto__){var self__ = this;
var this__4147__auto____$1 = this;return self__.__meta;
});
antares.core.Component.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4143__auto__){var self__ = this;
var this__4143__auto____$1 = this;return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.interactions,self__.__meta,self__.__extmap,self__.__hash));
});
antares.core.Component.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4153__auto__){var self__ = this;
var this__4153__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4144__auto__){var self__ = this;
var this__4144__auto____$1 = this;var h__3974__auto__ = self__.__hash;if(!((h__3974__auto__ == null)))
{return h__3974__auto__;
} else
{var h__3974__auto____$1 = cljs.core.hash_imap.call(null,this__4144__auto____$1);self__.__hash = h__3974__auto____$1;
return h__3974__auto____$1;
}
});
antares.core.Component.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4145__auto__,other__4146__auto__){var self__ = this;
var this__4145__auto____$1 = this;if(cljs.core.truth_((function (){var and__3551__auto__ = other__4146__auto__;if(cljs.core.truth_(and__3551__auto__))
{return ((this__4145__auto____$1.constructor === other__4146__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4145__auto____$1,other__4146__auto__));
} else
{return and__3551__auto__;
}
})()))
{return true;
} else
{return false;
}
});
antares.core.Component.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4158__auto__,k__4159__auto__){var self__ = this;
var this__4158__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),null,new cljs.core.Keyword(null,"interactions","interactions",550841811),null], null), null),k__4159__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4158__auto____$1),self__.__meta),k__4159__auto__);
} else
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.interactions,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4159__auto__)),null));
}
});
antares.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4156__auto__,k__4157__auto__,G__8442){var self__ = this;
var this__4156__auto____$1 = this;var pred__8446 = cljs.core.keyword_identical_QMARK_;var expr__8447 = k__4157__auto__;if(cljs.core.truth_(pred__8446.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),expr__8447)))
{return (new antares.core.Component(G__8442,self__.dom_cursor,self__.render_fn,self__.interactions,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__8446.call(null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),expr__8447)))
{return (new antares.core.Component(self__.app_cursor,G__8442,self__.render_fn,self__.interactions,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__8446.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),expr__8447)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,G__8442,self__.interactions,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__8446.call(null,new cljs.core.Keyword(null,"interactions","interactions",550841811),expr__8447)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,G__8442,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.interactions,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4157__auto__,G__8442),null));
}
}
}
}
});
antares.core.Component.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4161__auto__){var self__ = this;
var this__4161__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"interactions","interactions",550841811),self__.interactions],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4148__auto__,G__8442){var self__ = this;
var this__4148__auto____$1 = this;return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.interactions,G__8442,self__.__extmap,self__.__hash));
});
antares.core.Component.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4154__auto__,entry__4155__auto__){var self__ = this;
var this__4154__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4155__auto__))
{return cljs.core._assoc.call(null,this__4154__auto____$1,cljs.core._nth.call(null,entry__4155__auto__,(0)),cljs.core._nth.call(null,entry__4155__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4154__auto____$1,entry__4155__auto__);
}
});
antares.core.Component.prototype.antares$core$Renderable$ = true;
antares.core.Component.prototype.antares$core$Renderable$render$arity$1 = (function (self){var self__ = this;
var self__$1 = this;var target_node = document.querySelector(self__.dom_cursor);var new_nodes_data = self__.render_fn.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,antares.core.app_state),self__.app_cursor));target_node.innerHTML = "";
var seq__8449 = cljs.core.seq.call(null,new_nodes_data);var chunk__8450 = null;var count__8451 = (0);var i__8452 = (0);while(true){
if((i__8452 < count__8451))
{var new_node_data = cljs.core._nth.call(null,chunk__8450,i__8452);var node_to_append_8454 = dommy.template.__GT_node_like.call(null,new_node_data);dommy.core.append_BANG_.call(null,target_node,node_to_append_8454);
{
var G__8455 = seq__8449;
var G__8456 = chunk__8450;
var G__8457 = count__8451;
var G__8458 = (i__8452 + (1));
seq__8449 = G__8455;
chunk__8450 = G__8456;
count__8451 = G__8457;
i__8452 = G__8458;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8449);if(temp__4126__auto__)
{var seq__8449__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8449__$1))
{var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__8449__$1);{
var G__8459 = cljs.core.chunk_rest.call(null,seq__8449__$1);
var G__8460 = c__4319__auto__;
var G__8461 = cljs.core.count.call(null,c__4319__auto__);
var G__8462 = (0);
seq__8449 = G__8459;
chunk__8450 = G__8460;
count__8451 = G__8461;
i__8452 = G__8462;
continue;
}
} else
{var new_node_data = cljs.core.first.call(null,seq__8449__$1);var node_to_append_8463 = dommy.template.__GT_node_like.call(null,new_node_data);dommy.core.append_BANG_.call(null,target_node,node_to_append_8463);
{
var G__8464 = cljs.core.next.call(null,seq__8449__$1);
var G__8465 = null;
var G__8466 = (0);
var G__8467 = (0);
seq__8449 = G__8464;
chunk__8450 = G__8465;
count__8451 = G__8466;
i__8452 = G__8467;
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
antares.core.Component.cljs$lang$ctorPrSeq = (function (this__4183__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"antares.core/Component");
});
antares.core.Component.cljs$lang$ctorPrWriter = (function (this__4183__auto__,writer__4184__auto__){return cljs.core._write.call(null,writer__4184__auto__,"antares.core/Component");
});
antares.core.__GT_Component = (function __GT_Component(app_cursor,dom_cursor,render_fn,interactions){return (new antares.core.Component(app_cursor,dom_cursor,render_fn,interactions));
});
antares.core.map__GT_Component = (function map__GT_Component(G__8444){return (new antares.core.Component(new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(G__8444),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(G__8444),new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(G__8444),new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(G__8444),null,cljs.core.dissoc.call(null,G__8444,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Keyword(null,"interactions","interactions",550841811))));
});
antares.core.DataSource = (function (){var obj8469 = {};return obj8469;
})();
antares.core.import_data = (function import_data(self){if((function (){var and__3551__auto__ = self;if(and__3551__auto__)
{return self.antares$core$DataSource$import_data$arity$1;
} else
{return and__3551__auto__;
}
})())
{return self.antares$core$DataSource$import_data$arity$1(self);
} else
{var x__4190__auto__ = (((self == null))?null:self);return (function (){var or__3563__auto__ = (antares.core.import_data[goog.typeOf(x__4190__auto__)]);if(or__3563__auto__)
{return or__3563__auto__;
} else
{var or__3563__auto____$1 = (antares.core.import_data["_"]);if(or__3563__auto____$1)
{return or__3563__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DataSource.import-data",self);
}
}
})().call(null,self);
}
});

/**
* @constructor
* @param {*} bucket_name
* @param {*} file_name
* @param {*} mapping_fn
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
antares.core.S3File = (function (bucket_name,file_name,mapping_fn,__meta,__extmap){
this.bucket_name = bucket_name;
this.file_name = file_name;
this.mapping_fn = mapping_fn;
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
antares.core.S3File.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4149__auto__,k__4150__auto__){var self__ = this;
var this__4149__auto____$1 = this;return cljs.core._lookup.call(null,this__4149__auto____$1,k__4150__auto__,null);
});
antares.core.S3File.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4151__auto__,k8471,else__4152__auto__){var self__ = this;
var this__4151__auto____$1 = this;var G__8473 = (((k8471 instanceof cljs.core.Keyword))?k8471.fqn:null);switch (G__8473) {
case "mapping-fn":
return self__.mapping_fn;

break;
case "file-name":
return self__.file_name;

break;
case "bucket-name":
return self__.bucket_name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k8471,else__4152__auto__);

}
});
antares.core.S3File.prototype.antares$core$DataSource$ = true;
antares.core.S3File.prototype.antares$core$DataSource$import_data$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return antares.importers.s3File.call(null,self__.bucket_name,self__.file_name);
});
antares.core.S3File.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4163__auto__,writer__4164__auto__,opts__4165__auto__){var self__ = this;
var this__4163__auto____$1 = this;var pr_pair__4166__auto__ = ((function (this__4163__auto____$1){
return (function (keyval__4167__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4164__auto__,cljs.core.pr_writer,""," ","",opts__4165__auto__,keyval__4167__auto__);
});})(this__4163__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4164__auto__,pr_pair__4166__auto__,"#antares.core.S3File{",", ","}",opts__4165__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bucket-name","bucket-name",-971156135),self__.bucket_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"file-name","file-name",-1654217259),self__.file_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mapping-fn","mapping-fn",1124246410),self__.mapping_fn],null))], null),self__.__extmap));
});
antares.core.S3File.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4147__auto__){var self__ = this;
var this__4147__auto____$1 = this;return self__.__meta;
});
antares.core.S3File.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4143__auto__){var self__ = this;
var this__4143__auto____$1 = this;return (new antares.core.S3File(self__.bucket_name,self__.file_name,self__.mapping_fn,self__.__meta,self__.__extmap,self__.__hash));
});
antares.core.S3File.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4153__auto__){var self__ = this;
var this__4153__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
antares.core.S3File.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4144__auto__){var self__ = this;
var this__4144__auto____$1 = this;var h__3974__auto__ = self__.__hash;if(!((h__3974__auto__ == null)))
{return h__3974__auto__;
} else
{var h__3974__auto____$1 = cljs.core.hash_imap.call(null,this__4144__auto____$1);self__.__hash = h__3974__auto____$1;
return h__3974__auto____$1;
}
});
antares.core.S3File.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4145__auto__,other__4146__auto__){var self__ = this;
var this__4145__auto____$1 = this;if(cljs.core.truth_((function (){var and__3551__auto__ = other__4146__auto__;if(cljs.core.truth_(and__3551__auto__))
{return ((this__4145__auto____$1.constructor === other__4146__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4145__auto____$1,other__4146__auto__));
} else
{return and__3551__auto__;
}
})()))
{return true;
} else
{return false;
}
});
antares.core.S3File.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4158__auto__,k__4159__auto__){var self__ = this;
var this__4158__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mapping-fn","mapping-fn",1124246410),null,new cljs.core.Keyword(null,"file-name","file-name",-1654217259),null,new cljs.core.Keyword(null,"bucket-name","bucket-name",-971156135),null], null), null),k__4159__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4158__auto____$1),self__.__meta),k__4159__auto__);
} else
{return (new antares.core.S3File(self__.bucket_name,self__.file_name,self__.mapping_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4159__auto__)),null));
}
});
antares.core.S3File.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4156__auto__,k__4157__auto__,G__8470){var self__ = this;
var this__4156__auto____$1 = this;var pred__8474 = cljs.core.keyword_identical_QMARK_;var expr__8475 = k__4157__auto__;if(cljs.core.truth_(pred__8474.call(null,new cljs.core.Keyword(null,"bucket-name","bucket-name",-971156135),expr__8475)))
{return (new antares.core.S3File(G__8470,self__.file_name,self__.mapping_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__8474.call(null,new cljs.core.Keyword(null,"file-name","file-name",-1654217259),expr__8475)))
{return (new antares.core.S3File(self__.bucket_name,G__8470,self__.mapping_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__8474.call(null,new cljs.core.Keyword(null,"mapping-fn","mapping-fn",1124246410),expr__8475)))
{return (new antares.core.S3File(self__.bucket_name,self__.file_name,G__8470,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.S3File(self__.bucket_name,self__.file_name,self__.mapping_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4157__auto__,G__8470),null));
}
}
}
});
antares.core.S3File.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4161__auto__){var self__ = this;
var this__4161__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bucket-name","bucket-name",-971156135),self__.bucket_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"file-name","file-name",-1654217259),self__.file_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mapping-fn","mapping-fn",1124246410),self__.mapping_fn],null))], null),self__.__extmap));
});
antares.core.S3File.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4148__auto__,G__8470){var self__ = this;
var this__4148__auto____$1 = this;return (new antares.core.S3File(self__.bucket_name,self__.file_name,self__.mapping_fn,G__8470,self__.__extmap,self__.__hash));
});
antares.core.S3File.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4154__auto__,entry__4155__auto__){var self__ = this;
var this__4154__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4155__auto__))
{return cljs.core._assoc.call(null,this__4154__auto____$1,cljs.core._nth.call(null,entry__4155__auto__,(0)),cljs.core._nth.call(null,entry__4155__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4154__auto____$1,entry__4155__auto__);
}
});
antares.core.S3File.cljs$lang$type = true;
antares.core.S3File.cljs$lang$ctorPrSeq = (function (this__4183__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"antares.core/S3File");
});
antares.core.S3File.cljs$lang$ctorPrWriter = (function (this__4183__auto__,writer__4184__auto__){return cljs.core._write.call(null,writer__4184__auto__,"antares.core/S3File");
});
antares.core.__GT_S3File = (function __GT_S3File(bucket_name,file_name,mapping_fn){return (new antares.core.S3File(bucket_name,file_name,mapping_fn));
});
antares.core.map__GT_S3File = (function map__GT_S3File(G__8472){return (new antares.core.S3File(new cljs.core.Keyword(null,"bucket-name","bucket-name",-971156135).cljs$core$IFn$_invoke$arity$1(G__8472),new cljs.core.Keyword(null,"file-name","file-name",-1654217259).cljs$core$IFn$_invoke$arity$1(G__8472),new cljs.core.Keyword(null,"mapping-fn","mapping-fn",1124246410).cljs$core$IFn$_invoke$arity$1(G__8472),null,cljs.core.dissoc.call(null,G__8472,new cljs.core.Keyword(null,"bucket-name","bucket-name",-971156135),new cljs.core.Keyword(null,"file-name","file-name",-1654217259),new cljs.core.Keyword(null,"mapping-fn","mapping-fn",1124246410))));
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
antares.core.render_bindings = (function render_bindings(data_bindings){var seq__8482 = cljs.core.seq.call(null,data_bindings);var chunk__8483 = null;var count__8484 = (0);var i__8485 = (0);while(true){
if((i__8485 < count__8484))
{var data_binding = cljs.core._nth.call(null,chunk__8483,i__8485);antares.core.render.call(null,data_binding);
{
var G__8486 = seq__8482;
var G__8487 = chunk__8483;
var G__8488 = count__8484;
var G__8489 = (i__8485 + (1));
seq__8482 = G__8486;
chunk__8483 = G__8487;
count__8484 = G__8488;
i__8485 = G__8489;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8482);if(temp__4126__auto__)
{var seq__8482__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8482__$1))
{var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__8482__$1);{
var G__8490 = cljs.core.chunk_rest.call(null,seq__8482__$1);
var G__8491 = c__4319__auto__;
var G__8492 = cljs.core.count.call(null,c__4319__auto__);
var G__8493 = (0);
seq__8482 = G__8490;
chunk__8483 = G__8491;
count__8484 = G__8492;
i__8485 = G__8493;
continue;
}
} else
{var data_binding = cljs.core.first.call(null,seq__8482__$1);antares.core.render.call(null,data_binding);
{
var G__8494 = cljs.core.next.call(null,seq__8482__$1);
var G__8495 = null;
var G__8496 = (0);
var G__8497 = (0);
seq__8482 = G__8494;
chunk__8483 = G__8495;
count__8484 = G__8496;
i__8485 = G__8497;
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
antares.core.render_components = (function render_components(components){var seq__8502 = cljs.core.seq.call(null,components);var chunk__8503 = null;var count__8504 = (0);var i__8505 = (0);while(true){
if((i__8505 < count__8504))
{var component = cljs.core._nth.call(null,chunk__8503,i__8505);antares.core.render.call(null,component);
{
var G__8506 = seq__8502;
var G__8507 = chunk__8503;
var G__8508 = count__8504;
var G__8509 = (i__8505 + (1));
seq__8502 = G__8506;
chunk__8503 = G__8507;
count__8504 = G__8508;
i__8505 = G__8509;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8502);if(temp__4126__auto__)
{var seq__8502__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8502__$1))
{var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__8502__$1);{
var G__8510 = cljs.core.chunk_rest.call(null,seq__8502__$1);
var G__8511 = c__4319__auto__;
var G__8512 = cljs.core.count.call(null,c__4319__auto__);
var G__8513 = (0);
seq__8502 = G__8510;
chunk__8503 = G__8511;
count__8504 = G__8512;
i__8505 = G__8513;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__8502__$1);antares.core.render.call(null,component);
{
var G__8514 = cljs.core.next.call(null,seq__8502__$1);
var G__8515 = null;
var G__8516 = (0);
var G__8517 = (0);
seq__8502 = G__8514;
chunk__8503 = G__8515;
count__8504 = G__8516;
i__8505 = G__8517;
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
antares.core.update_app_state = (function update_app_state(update_fn){return cljs.core.reset_BANG_.call(null,antares.core.app_state,update_fn.call(null));
});
antares.core.read_data = (function read_data(data_string){return cljs.reader.read_string.call(null,data_string);
});
antares.core.create_component = (function create_component(source_map){var component = antares.core.map__GT_Component.call(null,source_map);antares.core.register_app_state_cursor.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(source_map),cljs.core.PersistentVector.EMPTY);
antares.core.register_component.call(null,component);
antares.core.render.call(null,component);
return component;
});
antares.core.create_data_binding = (function (){var method_table__4429__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4430__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4431__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4432__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4433__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("create-data-binding",((function (method_table__4429__auto__,prefer_table__4430__auto__,method_cache__4431__auto__,cached_hierarchy__4432__auto__,hierarchy__4433__auto__){
return (function (app_cursor,dom_cursor,render_fn){return cljs.core._EQ_.call(null,cljs.core.type.call(null,app_cursor),cljs.core.List);
});})(method_table__4429__auto__,prefer_table__4430__auto__,method_cache__4431__auto__,cached_hierarchy__4432__auto__,hierarchy__4433__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4433__auto__,method_table__4429__auto__,prefer_table__4430__auto__,method_cache__4431__auto__,cached_hierarchy__4432__auto__));
})();
cljs.core._add_method.call(null,antares.core.create_data_binding,false,(function (app_cursor,dom_cursor,render_fn){var data_binding = antares.core.map__GT_DataBinding.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),app_cursor,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),dom_cursor,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),render_fn], null));antares.core.register_app_state_cursor.call(null,app_cursor,"");
antares.core.register_binding.call(null,data_binding);
antares.core.render.call(null,data_binding);
return data_binding;
}));
cljs.core._add_method.call(null,antares.core.create_data_binding,true,(function (app_cursor,dom_cursor,render_fn){var data_binding = antares.core.map__GT_DataBinding.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),app_cursor,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),dom_cursor,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),render_fn], null));var seq__8518_8522 = cljs.core.seq.call(null,app_cursor);var chunk__8519_8523 = null;var count__8520_8524 = (0);var i__8521_8525 = (0);while(true){
if((i__8521_8525 < count__8520_8524))
{var cursor_8526 = cljs.core._nth.call(null,chunk__8519_8523,i__8521_8525);antares.core.register_app_state_cursor.call(null,cursor_8526,"");
{
var G__8527 = seq__8518_8522;
var G__8528 = chunk__8519_8523;
var G__8529 = count__8520_8524;
var G__8530 = (i__8521_8525 + (1));
seq__8518_8522 = G__8527;
chunk__8519_8523 = G__8528;
count__8520_8524 = G__8529;
i__8521_8525 = G__8530;
continue;
}
} else
{var temp__4126__auto___8531 = cljs.core.seq.call(null,seq__8518_8522);if(temp__4126__auto___8531)
{var seq__8518_8532__$1 = temp__4126__auto___8531;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8518_8532__$1))
{var c__4319__auto___8533 = cljs.core.chunk_first.call(null,seq__8518_8532__$1);{
var G__8534 = cljs.core.chunk_rest.call(null,seq__8518_8532__$1);
var G__8535 = c__4319__auto___8533;
var G__8536 = cljs.core.count.call(null,c__4319__auto___8533);
var G__8537 = (0);
seq__8518_8522 = G__8534;
chunk__8519_8523 = G__8535;
count__8520_8524 = G__8536;
i__8521_8525 = G__8537;
continue;
}
} else
{var cursor_8538 = cljs.core.first.call(null,seq__8518_8532__$1);antares.core.register_app_state_cursor.call(null,cursor_8538,"");
{
var G__8539 = cljs.core.next.call(null,seq__8518_8532__$1);
var G__8540 = null;
var G__8541 = (0);
var G__8542 = (0);
seq__8518_8522 = G__8539;
chunk__8519_8523 = G__8540;
count__8520_8524 = G__8541;
i__8521_8525 = G__8542;
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
antares.core.data_bind = (function (){var method_table__4429__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4430__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4431__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4432__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4433__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("data-bind",((function (method_table__4429__auto__,prefer_table__4430__auto__,method_cache__4431__auto__,cached_hierarchy__4432__auto__,hierarchy__4433__auto__){
return (function (app_cursor,dom_cursors,render_fn){return cljs.core._EQ_.call(null,cljs.core.type.call(null,dom_cursors),cljs.core.List);
});})(method_table__4429__auto__,prefer_table__4430__auto__,method_cache__4431__auto__,cached_hierarchy__4432__auto__,hierarchy__4433__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4433__auto__,method_table__4429__auto__,prefer_table__4430__auto__,method_cache__4431__auto__,cached_hierarchy__4432__auto__));
})();
cljs.core._add_method.call(null,antares.core.data_bind,false,(function (app_cursor,dom_cursor,render_fn){return antares.core.create_data_binding.call(null,app_cursor,dom_cursor,render_fn);
}));
cljs.core._add_method.call(null,antares.core.data_bind,true,(function (app_cursor,dom_cursors,render_fn){var seq__8543 = cljs.core.seq.call(null,dom_cursors);var chunk__8544 = null;var count__8545 = (0);var i__8546 = (0);while(true){
if((i__8546 < count__8545))
{var dom_cursor = cljs.core._nth.call(null,chunk__8544,i__8546);antares.core.create_data_binding.call(null,app_cursor,dom_cursor,render_fn);
{
var G__8547 = seq__8543;
var G__8548 = chunk__8544;
var G__8549 = count__8545;
var G__8550 = (i__8546 + (1));
seq__8543 = G__8547;
chunk__8544 = G__8548;
count__8545 = G__8549;
i__8546 = G__8550;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8543);if(temp__4126__auto__)
{var seq__8543__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8543__$1))
{var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__8543__$1);{
var G__8551 = cljs.core.chunk_rest.call(null,seq__8543__$1);
var G__8552 = c__4319__auto__;
var G__8553 = cljs.core.count.call(null,c__4319__auto__);
var G__8554 = (0);
seq__8543 = G__8551;
chunk__8544 = G__8552;
count__8545 = G__8553;
i__8546 = G__8554;
continue;
}
} else
{var dom_cursor = cljs.core.first.call(null,seq__8543__$1);antares.core.create_data_binding.call(null,app_cursor,dom_cursor,render_fn);
{
var G__8555 = cljs.core.next.call(null,seq__8543__$1);
var G__8556 = null;
var G__8557 = (0);
var G__8558 = (0);
seq__8543 = G__8555;
chunk__8544 = G__8556;
count__8545 = G__8557;
i__8546 = G__8558;
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
dommy.core.prepend_BANG_.call(null,document.querySelector("body"),(function (){var dom8559 = document.createElement("div");dom8559.className = "antares app-state";
dom8559.appendChild((function (){var dom8560 = document.createElement("textarea");dom8560.className = "antares app-state-inspector";
if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"80px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),".8rem"], null)))
{dom8560.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"80px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),".8rem"], null)));
} else
{}
return dom8560;
})());
return dom8559;
})());
antares.core.data_bind.call(null,cljs.core.PersistentVector.EMPTY,".antares.app-state-inspector",(function (data){return cljs.core.pr_str.call(null,data);
}));
antares.core.bind_event.call(null,".antares.app-state-inspector","input",(function (event){return antares.core.update_app_state.call(null,(function (){return antares.core.read_data.call(null,event.target.value);
}));
}));

//# sourceMappingURL=core.js.map