// Compiled by ClojureScript 0.0-2277
goog.provide('antares.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('antares.repl');
goog.require('dommy.core');
goog.require('antares.importers');
goog.require('cljs.core.async');
goog.require('antares.importers');
goog.require('dommy.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('antares.repl');
antares.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
antares.core.registered_bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
antares.core.registered_components = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
antares.core.read_data = (function read_data(data_string){return cljs.reader.read_string.call(null,data_string);
});
antares.core.split_last = (function split_last(regex,data){return clojure.string.split.call(null,data,regex);
});
antares.core.string__GT_matrix = (function string__GT_matrix(string){return cljs.core.map.call(null,(function (string__$1){return clojure.string.split.call(null,string__$1,/,/);
}),clojure.string.split.call(null,string,/\n/));
});
antares.core.cursor__GT_value = (function cursor__GT_value(cursor,new_value){return cljs.core.swap_BANG_.call(null,antares.core.app_state,(function (app_value){return cljs.core.update_in.call(null,app_value,cursor,(function (old_value){return new_value;
}));
}));
});
antares.core.Renderable = (function (){var obj29681 = {};return obj29681;
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
antares.core.DataBinding.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4151__auto__,k29683,else__4152__auto__){var self__ = this;
var this__4151__auto____$1 = this;var G__29685 = (((k29683 instanceof cljs.core.Keyword))?k29683.fqn:null);switch (G__29685) {
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
return cljs.core.get.call(null,self__.__extmap,k29683,else__4152__auto__);

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
antares.core.DataBinding.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4156__auto__,k__4157__auto__,G__29682){var self__ = this;
var this__4156__auto____$1 = this;var pred__29686 = cljs.core.keyword_identical_QMARK_;var expr__29687 = k__4157__auto__;if(cljs.core.truth_(pred__29686.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),expr__29687)))
{return (new antares.core.DataBinding(G__29682,self__.dom_cursor,self__.render_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29686.call(null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),expr__29687)))
{return (new antares.core.DataBinding(self__.app_cursor,G__29682,self__.render_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29686.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),expr__29687)))
{return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,G__29682,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4157__auto__,G__29682),null));
}
}
}
});
antares.core.DataBinding.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4161__auto__){var self__ = this;
var this__4161__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null))], null),self__.__extmap));
});
antares.core.DataBinding.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4148__auto__,G__29682){var self__ = this;
var this__4148__auto____$1 = this;return (new antares.core.DataBinding(self__.app_cursor,self__.dom_cursor,self__.render_fn,G__29682,self__.__extmap,self__.__hash));
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
})()));var G__29689 = target_node.tagName;switch (G__29689) {
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
antares.core.map__GT_DataBinding = (function map__GT_DataBinding(G__29684){return (new antares.core.DataBinding(new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(G__29684),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(G__29684),new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(G__29684),null,cljs.core.dissoc.call(null,G__29684,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),new cljs.core.Keyword(null,"render-fn","render-fn",398796518))));
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
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4151__auto__,k29693,else__4152__auto__){var self__ = this;
var this__4151__auto____$1 = this;var G__29695 = (((k29693 instanceof cljs.core.Keyword))?k29693.fqn:null);switch (G__29695) {
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
return cljs.core.get.call(null,self__.__extmap,k29693,else__4152__auto__);

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
antares.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4156__auto__,k__4157__auto__,G__29692){var self__ = this;
var this__4156__auto____$1 = this;var pred__29696 = cljs.core.keyword_identical_QMARK_;var expr__29697 = k__4157__auto__;if(cljs.core.truth_(pred__29696.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),expr__29697)))
{return (new antares.core.Component(G__29692,self__.dom_cursor,self__.render_fn,self__.interactions,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29696.call(null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),expr__29697)))
{return (new antares.core.Component(self__.app_cursor,G__29692,self__.render_fn,self__.interactions,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29696.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),expr__29697)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,G__29692,self__.interactions,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29696.call(null,new cljs.core.Keyword(null,"interactions","interactions",550841811),expr__29697)))
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,G__29692,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.interactions,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4157__auto__,G__29692),null));
}
}
}
}
});
antares.core.Component.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4161__auto__){var self__ = this;
var this__4161__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"interactions","interactions",550841811),self__.interactions],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4148__auto__,G__29692){var self__ = this;
var this__4148__auto____$1 = this;return (new antares.core.Component(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.interactions,G__29692,self__.__extmap,self__.__hash));
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
var seq__29699 = cljs.core.seq.call(null,new_nodes_data);var chunk__29700 = null;var count__29701 = (0);var i__29702 = (0);while(true){
if((i__29702 < count__29701))
{var new_node_data = cljs.core._nth.call(null,chunk__29700,i__29702);var node_to_append_29704 = dommy.template.__GT_node_like.call(null,new_node_data);dommy.core.append_BANG_.call(null,target_node,node_to_append_29704);
{
var G__29705 = seq__29699;
var G__29706 = chunk__29700;
var G__29707 = count__29701;
var G__29708 = (i__29702 + (1));
seq__29699 = G__29705;
chunk__29700 = G__29706;
count__29701 = G__29707;
i__29702 = G__29708;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__29699);if(temp__4126__auto__)
{var seq__29699__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29699__$1))
{var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29699__$1);{
var G__29709 = cljs.core.chunk_rest.call(null,seq__29699__$1);
var G__29710 = c__4319__auto__;
var G__29711 = cljs.core.count.call(null,c__4319__auto__);
var G__29712 = (0);
seq__29699 = G__29709;
chunk__29700 = G__29710;
count__29701 = G__29711;
i__29702 = G__29712;
continue;
}
} else
{var new_node_data = cljs.core.first.call(null,seq__29699__$1);var node_to_append_29713 = dommy.template.__GT_node_like.call(null,new_node_data);dommy.core.append_BANG_.call(null,target_node,node_to_append_29713);
{
var G__29714 = cljs.core.next.call(null,seq__29699__$1);
var G__29715 = null;
var G__29716 = (0);
var G__29717 = (0);
seq__29699 = G__29714;
chunk__29700 = G__29715;
count__29701 = G__29716;
i__29702 = G__29717;
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
antares.core.map__GT_Component = (function map__GT_Component(G__29694){return (new antares.core.Component(new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(G__29694),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(G__29694),new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(G__29694),new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(G__29694),null,cljs.core.dissoc.call(null,G__29694,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Keyword(null,"interactions","interactions",550841811))));
});
antares.core.DataSource = (function (){var obj29719 = {};return obj29719;
})();
antares.core.load_data = (function load_data(self){if((function (){var and__3551__auto__ = self;if(and__3551__auto__)
{return self.antares$core$DataSource$load_data$arity$1;
} else
{return and__3551__auto__;
}
})())
{return self.antares$core$DataSource$load_data$arity$1(self);
} else
{var x__4190__auto__ = (((self == null))?null:self);return (function (){var or__3563__auto__ = (antares.core.load_data[goog.typeOf(x__4190__auto__)]);if(or__3563__auto__)
{return or__3563__auto__;
} else
{var or__3563__auto____$1 = (antares.core.load_data["_"]);if(or__3563__auto____$1)
{return or__3563__auto____$1;
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
* @param {*} interactions
* @param {*} data
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
antares.core.DataComponent = (function (app_cursor,dom_cursor,render_fn,interactions,data,__meta,__extmap){
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
antares.core.DataComponent.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4149__auto__,k__4150__auto__){var self__ = this;
var this__4149__auto____$1 = this;return cljs.core._lookup.call(null,this__4149__auto____$1,k__4150__auto__,null);
});
antares.core.DataComponent.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4151__auto__,k29721,else__4152__auto__){var self__ = this;
var this__4151__auto____$1 = this;var G__29723 = (((k29721 instanceof cljs.core.Keyword))?k29721.fqn:null);switch (G__29723) {
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
return cljs.core.get.call(null,self__.__extmap,k29721,else__4152__auto__);

}
});
antares.core.DataComponent.prototype.antares$core$DataSource$ = true;
antares.core.DataComponent.prototype.antares$core$DataSource$load_data$arity$1 = (function (self){var self__ = this;
var self__$1 = this;var c__9784__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9784__auto__,self__$1){
return (function (){var f__9785__auto__ = (function (){var switch__9769__auto__ = ((function (c__9784__auto__,self__$1){
return (function (state_29735){var state_val_29736 = (state_29735[(1)]);if((state_val_29736 === (2)))
{var inst_29730 = (state_29735[(2)]);var inst_29731 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_29730);var inst_29732 = antares.core.string__GT_matrix.call(null,inst_29731);var inst_29733 = antares.core.cursor__GT_value.call(null,self__.app_cursor,inst_29732);var state_29735__$1 = state_29735;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29735__$1,inst_29733);
} else
{if((state_val_29736 === (1)))
{var inst_29724 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1);var inst_29725 = new cljs.core.Keyword(null,"bucket-name","bucket-name",-971156135).cljs$core$IFn$_invoke$arity$1(inst_29724);var inst_29726 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1);var inst_29727 = new cljs.core.Keyword(null,"file-name","file-name",-1654217259).cljs$core$IFn$_invoke$arity$1(inst_29726);var inst_29728 = antares.importers.s3File.call(null,inst_29725,inst_29727);var state_29735__$1 = state_29735;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29735__$1,(2),inst_29728);
} else
{return null;
}
}
});})(c__9784__auto__,self__$1))
;return ((function (switch__9769__auto__,c__9784__auto__,self__$1){
return (function() {
var state_machine__9770__auto__ = null;
var state_machine__9770__auto____0 = (function (){var statearr_29740 = [null,null,null,null,null,null,null];(statearr_29740[(0)] = state_machine__9770__auto__);
(statearr_29740[(1)] = (1));
return statearr_29740;
});
var state_machine__9770__auto____1 = (function (state_29735){while(true){
var ret_value__9771__auto__ = (function (){try{while(true){
var result__9772__auto__ = switch__9769__auto__.call(null,state_29735);if(cljs.core.keyword_identical_QMARK_.call(null,result__9772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9772__auto__;
}
break;
}
}catch (e29741){if((e29741 instanceof Object))
{var ex__9773__auto__ = e29741;var statearr_29742_29752 = state_29735;(statearr_29742_29752[(5)] = ex__9773__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29735);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29741;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29753 = state_29735;
state_29735 = G__29753;
continue;
}
} else
{return ret_value__9771__auto__;
}
break;
}
});
state_machine__9770__auto__ = function(state_29735){
switch(arguments.length){
case 0:
return state_machine__9770__auto____0.call(this);
case 1:
return state_machine__9770__auto____1.call(this,state_29735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9770__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9770__auto____0;
state_machine__9770__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9770__auto____1;
return state_machine__9770__auto__;
})()
;})(switch__9769__auto__,c__9784__auto__,self__$1))
})();var state__9786__auto__ = (function (){var statearr_29743 = f__9785__auto__.call(null);(statearr_29743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9784__auto__);
return statearr_29743;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9786__auto__);
});})(c__9784__auto__,self__$1))
);
return c__9784__auto__;
});
antares.core.DataComponent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4163__auto__,writer__4164__auto__,opts__4165__auto__){var self__ = this;
var this__4163__auto____$1 = this;var pr_pair__4166__auto__ = ((function (this__4163__auto____$1){
return (function (keyval__4167__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4164__auto__,cljs.core.pr_writer,""," ","",opts__4165__auto__,keyval__4167__auto__);
});})(this__4163__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4164__auto__,pr_pair__4166__auto__,"#antares.core.DataComponent{",", ","}",opts__4165__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"interactions","interactions",550841811),self__.interactions],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
});
antares.core.DataComponent.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4147__auto__){var self__ = this;
var this__4147__auto____$1 = this;return self__.__meta;
});
antares.core.DataComponent.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4143__auto__){var self__ = this;
var this__4143__auto____$1 = this;return (new antares.core.DataComponent(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.interactions,self__.data,self__.__meta,self__.__extmap,self__.__hash));
});
antares.core.DataComponent.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4153__auto__){var self__ = this;
var this__4153__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
antares.core.DataComponent.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4144__auto__){var self__ = this;
var this__4144__auto____$1 = this;var h__3974__auto__ = self__.__hash;if(!((h__3974__auto__ == null)))
{return h__3974__auto__;
} else
{var h__3974__auto____$1 = cljs.core.hash_imap.call(null,this__4144__auto____$1);self__.__hash = h__3974__auto____$1;
return h__3974__auto____$1;
}
});
antares.core.DataComponent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4145__auto__,other__4146__auto__){var self__ = this;
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
antares.core.DataComponent.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4158__auto__,k__4159__auto__){var self__ = this;
var this__4158__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),null,new cljs.core.Keyword(null,"interactions","interactions",550841811),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4159__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4158__auto____$1),self__.__meta),k__4159__auto__);
} else
{return (new antares.core.DataComponent(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.interactions,self__.data,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4159__auto__)),null));
}
});
antares.core.DataComponent.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4156__auto__,k__4157__auto__,G__29720){var self__ = this;
var this__4156__auto____$1 = this;var pred__29744 = cljs.core.keyword_identical_QMARK_;var expr__29745 = k__4157__auto__;if(cljs.core.truth_(pred__29744.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),expr__29745)))
{return (new antares.core.DataComponent(G__29720,self__.dom_cursor,self__.render_fn,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29744.call(null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),expr__29745)))
{return (new antares.core.DataComponent(self__.app_cursor,G__29720,self__.render_fn,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29744.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),expr__29745)))
{return (new antares.core.DataComponent(self__.app_cursor,self__.dom_cursor,G__29720,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29744.call(null,new cljs.core.Keyword(null,"interactions","interactions",550841811),expr__29745)))
{return (new antares.core.DataComponent(self__.app_cursor,self__.dom_cursor,self__.render_fn,G__29720,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29744.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__29745)))
{return (new antares.core.DataComponent(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.interactions,G__29720,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.DataComponent(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.interactions,self__.data,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4157__auto__,G__29720),null));
}
}
}
}
}
});
antares.core.DataComponent.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4161__auto__){var self__ = this;
var this__4161__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"interactions","interactions",550841811),self__.interactions],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
});
antares.core.DataComponent.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4148__auto__,G__29720){var self__ = this;
var this__4148__auto____$1 = this;return (new antares.core.DataComponent(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.interactions,self__.data,G__29720,self__.__extmap,self__.__hash));
});
antares.core.DataComponent.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4154__auto__,entry__4155__auto__){var self__ = this;
var this__4154__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4155__auto__))
{return cljs.core._assoc.call(null,this__4154__auto____$1,cljs.core._nth.call(null,entry__4155__auto__,(0)),cljs.core._nth.call(null,entry__4155__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4154__auto____$1,entry__4155__auto__);
}
});
antares.core.DataComponent.prototype.antares$core$Renderable$ = true;
antares.core.DataComponent.prototype.antares$core$Renderable$render$arity$1 = (function (self){var self__ = this;
var self__$1 = this;var target_node = document.querySelector(self__.dom_cursor);var new_nodes_data = self__.render_fn.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,antares.core.app_state),self__.app_cursor));target_node.innerHTML = "";
var seq__29747 = cljs.core.seq.call(null,new_nodes_data);var chunk__29748 = null;var count__29749 = (0);var i__29750 = (0);while(true){
if((i__29750 < count__29749))
{var new_node_data = cljs.core._nth.call(null,chunk__29748,i__29750);var node_to_append_29754 = dommy.template.__GT_node_like.call(null,new_node_data);dommy.core.append_BANG_.call(null,target_node,node_to_append_29754);
{
var G__29755 = seq__29747;
var G__29756 = chunk__29748;
var G__29757 = count__29749;
var G__29758 = (i__29750 + (1));
seq__29747 = G__29755;
chunk__29748 = G__29756;
count__29749 = G__29757;
i__29750 = G__29758;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__29747);if(temp__4126__auto__)
{var seq__29747__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29747__$1))
{var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29747__$1);{
var G__29759 = cljs.core.chunk_rest.call(null,seq__29747__$1);
var G__29760 = c__4319__auto__;
var G__29761 = cljs.core.count.call(null,c__4319__auto__);
var G__29762 = (0);
seq__29747 = G__29759;
chunk__29748 = G__29760;
count__29749 = G__29761;
i__29750 = G__29762;
continue;
}
} else
{var new_node_data = cljs.core.first.call(null,seq__29747__$1);var node_to_append_29763 = dommy.template.__GT_node_like.call(null,new_node_data);dommy.core.append_BANG_.call(null,target_node,node_to_append_29763);
{
var G__29764 = cljs.core.next.call(null,seq__29747__$1);
var G__29765 = null;
var G__29766 = (0);
var G__29767 = (0);
seq__29747 = G__29764;
chunk__29748 = G__29765;
count__29749 = G__29766;
i__29750 = G__29767;
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
antares.core.DataComponent.cljs$lang$type = true;
antares.core.DataComponent.cljs$lang$ctorPrSeq = (function (this__4183__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"antares.core/DataComponent");
});
antares.core.DataComponent.cljs$lang$ctorPrWriter = (function (this__4183__auto__,writer__4184__auto__){return cljs.core._write.call(null,writer__4184__auto__,"antares.core/DataComponent");
});
antares.core.__GT_DataComponent = (function __GT_DataComponent(app_cursor,dom_cursor,render_fn,interactions,data){return (new antares.core.DataComponent(app_cursor,dom_cursor,render_fn,interactions,data));
});
antares.core.map__GT_DataComponent = (function map__GT_DataComponent(G__29722){return (new antares.core.DataComponent(new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(G__29722),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(G__29722),new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(G__29722),new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(G__29722),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__29722),null,cljs.core.dissoc.call(null,G__29722,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Keyword(null,"interactions","interactions",550841811),new cljs.core.Keyword(null,"data","data",-232669377))));
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
antares.core.render_bindings = (function render_bindings(data_bindings){var seq__29772 = cljs.core.seq.call(null,data_bindings);var chunk__29773 = null;var count__29774 = (0);var i__29775 = (0);while(true){
if((i__29775 < count__29774))
{var data_binding = cljs.core._nth.call(null,chunk__29773,i__29775);antares.core.render.call(null,data_binding);
{
var G__29776 = seq__29772;
var G__29777 = chunk__29773;
var G__29778 = count__29774;
var G__29779 = (i__29775 + (1));
seq__29772 = G__29776;
chunk__29773 = G__29777;
count__29774 = G__29778;
i__29775 = G__29779;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__29772);if(temp__4126__auto__)
{var seq__29772__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29772__$1))
{var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29772__$1);{
var G__29780 = cljs.core.chunk_rest.call(null,seq__29772__$1);
var G__29781 = c__4319__auto__;
var G__29782 = cljs.core.count.call(null,c__4319__auto__);
var G__29783 = (0);
seq__29772 = G__29780;
chunk__29773 = G__29781;
count__29774 = G__29782;
i__29775 = G__29783;
continue;
}
} else
{var data_binding = cljs.core.first.call(null,seq__29772__$1);antares.core.render.call(null,data_binding);
{
var G__29784 = cljs.core.next.call(null,seq__29772__$1);
var G__29785 = null;
var G__29786 = (0);
var G__29787 = (0);
seq__29772 = G__29784;
chunk__29773 = G__29785;
count__29774 = G__29786;
i__29775 = G__29787;
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
antares.core.render_components = (function render_components(components){var seq__29792 = cljs.core.seq.call(null,components);var chunk__29793 = null;var count__29794 = (0);var i__29795 = (0);while(true){
if((i__29795 < count__29794))
{var component = cljs.core._nth.call(null,chunk__29793,i__29795);antares.core.render.call(null,component);
{
var G__29796 = seq__29792;
var G__29797 = chunk__29793;
var G__29798 = count__29794;
var G__29799 = (i__29795 + (1));
seq__29792 = G__29796;
chunk__29793 = G__29797;
count__29794 = G__29798;
i__29795 = G__29799;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__29792);if(temp__4126__auto__)
{var seq__29792__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29792__$1))
{var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29792__$1);{
var G__29800 = cljs.core.chunk_rest.call(null,seq__29792__$1);
var G__29801 = c__4319__auto__;
var G__29802 = cljs.core.count.call(null,c__4319__auto__);
var G__29803 = (0);
seq__29792 = G__29800;
chunk__29793 = G__29801;
count__29794 = G__29802;
i__29795 = G__29803;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__29792__$1);antares.core.render.call(null,component);
{
var G__29804 = cljs.core.next.call(null,seq__29792__$1);
var G__29805 = null;
var G__29806 = (0);
var G__29807 = (0);
seq__29792 = G__29804;
chunk__29793 = G__29805;
count__29794 = G__29806;
i__29795 = G__29807;
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
antares.core.create_component = (function create_component(source_map){var component = antares.core.map__GT_Component.call(null,source_map);antares.core.register_app_state_cursor.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(source_map),cljs.core.PersistentVector.EMPTY);
antares.core.register_component.call(null,component);
antares.core.render.call(null,component);
return component;
});
antares.core.create_data_component = (function create_data_component(source_map){var component = antares.core.map__GT_DataComponent.call(null,source_map);antares.core.register_app_state_cursor.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(source_map),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null));
antares.core.register_component.call(null,component);
antares.core.render.call(null,component);
antares.core.load_data.call(null,component);
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
cljs.core._add_method.call(null,antares.core.create_data_binding,true,(function (app_cursor,dom_cursor,render_fn){var data_binding = antares.core.map__GT_DataBinding.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),app_cursor,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),dom_cursor,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),render_fn], null));var seq__29808_29812 = cljs.core.seq.call(null,app_cursor);var chunk__29809_29813 = null;var count__29810_29814 = (0);var i__29811_29815 = (0);while(true){
if((i__29811_29815 < count__29810_29814))
{var cursor_29816 = cljs.core._nth.call(null,chunk__29809_29813,i__29811_29815);antares.core.register_app_state_cursor.call(null,cursor_29816,"");
{
var G__29817 = seq__29808_29812;
var G__29818 = chunk__29809_29813;
var G__29819 = count__29810_29814;
var G__29820 = (i__29811_29815 + (1));
seq__29808_29812 = G__29817;
chunk__29809_29813 = G__29818;
count__29810_29814 = G__29819;
i__29811_29815 = G__29820;
continue;
}
} else
{var temp__4126__auto___29821 = cljs.core.seq.call(null,seq__29808_29812);if(temp__4126__auto___29821)
{var seq__29808_29822__$1 = temp__4126__auto___29821;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29808_29822__$1))
{var c__4319__auto___29823 = cljs.core.chunk_first.call(null,seq__29808_29822__$1);{
var G__29824 = cljs.core.chunk_rest.call(null,seq__29808_29822__$1);
var G__29825 = c__4319__auto___29823;
var G__29826 = cljs.core.count.call(null,c__4319__auto___29823);
var G__29827 = (0);
seq__29808_29812 = G__29824;
chunk__29809_29813 = G__29825;
count__29810_29814 = G__29826;
i__29811_29815 = G__29827;
continue;
}
} else
{var cursor_29828 = cljs.core.first.call(null,seq__29808_29822__$1);antares.core.register_app_state_cursor.call(null,cursor_29828,"");
{
var G__29829 = cljs.core.next.call(null,seq__29808_29822__$1);
var G__29830 = null;
var G__29831 = (0);
var G__29832 = (0);
seq__29808_29812 = G__29829;
chunk__29809_29813 = G__29830;
count__29810_29814 = G__29831;
i__29811_29815 = G__29832;
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
cljs.core._add_method.call(null,antares.core.data_bind,true,(function (app_cursor,dom_cursors,render_fn){var seq__29833 = cljs.core.seq.call(null,dom_cursors);var chunk__29834 = null;var count__29835 = (0);var i__29836 = (0);while(true){
if((i__29836 < count__29835))
{var dom_cursor = cljs.core._nth.call(null,chunk__29834,i__29836);antares.core.create_data_binding.call(null,app_cursor,dom_cursor,render_fn);
{
var G__29837 = seq__29833;
var G__29838 = chunk__29834;
var G__29839 = count__29835;
var G__29840 = (i__29836 + (1));
seq__29833 = G__29837;
chunk__29834 = G__29838;
count__29835 = G__29839;
i__29836 = G__29840;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__29833);if(temp__4126__auto__)
{var seq__29833__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29833__$1))
{var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29833__$1);{
var G__29841 = cljs.core.chunk_rest.call(null,seq__29833__$1);
var G__29842 = c__4319__auto__;
var G__29843 = cljs.core.count.call(null,c__4319__auto__);
var G__29844 = (0);
seq__29833 = G__29841;
chunk__29834 = G__29842;
count__29835 = G__29843;
i__29836 = G__29844;
continue;
}
} else
{var dom_cursor = cljs.core.first.call(null,seq__29833__$1);antares.core.create_data_binding.call(null,app_cursor,dom_cursor,render_fn);
{
var G__29845 = cljs.core.next.call(null,seq__29833__$1);
var G__29846 = null;
var G__29847 = (0);
var G__29848 = (0);
seq__29833 = G__29845;
chunk__29834 = G__29846;
count__29835 = G__29847;
i__29836 = G__29848;
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
dommy.core.prepend_BANG_.call(null,document.querySelector("body"),(function (){var dom29849 = document.createElement("div");dom29849.className = "antares app-state";
dom29849.appendChild((function (){var dom29850 = document.createElement("textarea");dom29850.className = "antares app-state-inspector";
if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"80px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),".8rem"], null)))
{dom29850.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"80px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),".8rem"], null)));
} else
{}
return dom29850;
})());
return dom29849;
})());
antares.core.data_bind.call(null,cljs.core.PersistentVector.EMPTY,".antares.app-state-inspector",(function (data){return cljs.core.pr_str.call(null,data);
}));
antares.core.bind_event.call(null,".antares.app-state-inspector","input",(function (event){return antares.core.update_app_state.call(null,(function (){return antares.core.read_data.call(null,event.target.value);
}));
}));

//# sourceMappingURL=core.js.map