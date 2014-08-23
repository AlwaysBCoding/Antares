// Compiled by ClojureScript 0.0-2311
goog.provide('antares.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('ajax.core');
goog.require('garden.core');
goog.require('hiccups.runtime');
goog.require('antares.repl');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('clojure.string');
goog.require('goog.dom.classes');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('antares.repl');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('hiccups.runtime');
goog.require('garden.core');
antares.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
antares.core.registered_components = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
antares.core.registered_data_watchers = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
antares.core.read_string = (function read_string(data_string){return cljs.reader.read_string.call(null,data_string);
});
antares.core.Renderable = (function (){var obj16459 = {};return obj16459;
})();
antares.core.pre_render = (function pre_render(self){if((function (){var and__3541__auto__ = self;if(and__3541__auto__)
{return self.antares$core$Renderable$pre_render$arity$1;
} else
{return and__3541__auto__;
}
})())
{return self.antares$core$Renderable$pre_render$arity$1(self);
} else
{var x__4180__auto__ = (((self == null))?null:self);return (function (){var or__3553__auto__ = (antares.core.pre_render[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (antares.core.pre_render["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Renderable.pre-render",self);
}
}
})().call(null,self);
}
});
antares.core.render = (function render(self){if((function (){var and__3541__auto__ = self;if(and__3541__auto__)
{return self.antares$core$Renderable$render$arity$1;
} else
{return and__3541__auto__;
}
})())
{return self.antares$core$Renderable$render$arity$1(self);
} else
{var x__4180__auto__ = (((self == null))?null:self);return (function (){var or__3553__auto__ = (antares.core.render[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (antares.core.render["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Renderable.render",self);
}
}
})().call(null,self);
}
});
antares.core.post_render = (function post_render(self){if((function (){var and__3541__auto__ = self;if(and__3541__auto__)
{return self.antares$core$Renderable$post_render$arity$1;
} else
{return and__3541__auto__;
}
})())
{return self.antares$core$Renderable$post_render$arity$1(self);
} else
{var x__4180__auto__ = (((self == null))?null:self);return (function (){var or__3553__auto__ = (antares.core.post_render[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (antares.core.post_render["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Renderable.post-render",self);
}
}
})().call(null,self);
}
});
antares.core.AntaresComponent = (function (){var obj16461 = {};return obj16461;
})();
antares.core.initial_cursor = (function initial_cursor(self){if((function (){var and__3541__auto__ = self;if(and__3541__auto__)
{return self.antares$core$AntaresComponent$initial_cursor$arity$1;
} else
{return and__3541__auto__;
}
})())
{return self.antares$core$AntaresComponent$initial_cursor$arity$1(self);
} else
{var x__4180__auto__ = (((self == null))?null:self);return (function (){var or__3553__auto__ = (antares.core.initial_cursor[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (antares.core.initial_cursor["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"AntaresComponent.initial-cursor",self);
}
}
})().call(null,self);
}
});
antares.core.initialize = (function initialize(self){if((function (){var and__3541__auto__ = self;if(and__3541__auto__)
{return self.antares$core$AntaresComponent$initialize$arity$1;
} else
{return and__3541__auto__;
}
})())
{return self.antares$core$AntaresComponent$initialize$arity$1(self);
} else
{var x__4180__auto__ = (((self == null))?null:self);return (function (){var or__3553__auto__ = (antares.core.initialize[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (antares.core.initialize["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"AntaresComponent.initialize",self);
}
}
})().call(null,self);
}
});
antares.core.bind_events = (function bind_events(self){if((function (){var and__3541__auto__ = self;if(and__3541__auto__)
{return self.antares$core$AntaresComponent$bind_events$arity$1;
} else
{return and__3541__auto__;
}
})())
{return self.antares$core$AntaresComponent$bind_events$arity$1(self);
} else
{var x__4180__auto__ = (((self == null))?null:self);return (function (){var or__3553__auto__ = (antares.core.bind_events[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (antares.core.bind_events["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"AntaresComponent.bind-events",self);
}
}
})().call(null,self);
}
});
antares.core.register_cursor = (function register_cursor(self){if((function (){var and__3541__auto__ = self;if(and__3541__auto__)
{return self.antares$core$AntaresComponent$register_cursor$arity$1;
} else
{return and__3541__auto__;
}
})())
{return self.antares$core$AntaresComponent$register_cursor$arity$1(self);
} else
{var x__4180__auto__ = (((self == null))?null:self);return (function (){var or__3553__auto__ = (antares.core.register_cursor[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (antares.core.register_cursor["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"AntaresComponent.register-cursor",self);
}
}
})().call(null,self);
}
});
antares.core.register_watcher = (function register_watcher(self){if((function (){var and__3541__auto__ = self;if(and__3541__auto__)
{return self.antares$core$AntaresComponent$register_watcher$arity$1;
} else
{return and__3541__auto__;
}
})())
{return self.antares$core$AntaresComponent$register_watcher$arity$1(self);
} else
{var x__4180__auto__ = (((self == null))?null:self);return (function (){var or__3553__auto__ = (antares.core.register_watcher[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (antares.core.register_watcher["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"AntaresComponent.register-watcher",self);
}
}
})().call(null,self);
}
});
antares.core.AntaresDataWatcher = (function (){var obj16463 = {};return obj16463;
})();
antares.core.register_data_watcher = (function register_data_watcher(self){if((function (){var and__3541__auto__ = self;if(and__3541__auto__)
{return self.antares$core$AntaresDataWatcher$register_data_watcher$arity$1;
} else
{return and__3541__auto__;
}
})())
{return self.antares$core$AntaresDataWatcher$register_data_watcher$arity$1(self);
} else
{var x__4180__auto__ = (((self == null))?null:self);return (function (){var or__3553__auto__ = (antares.core.register_data_watcher[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (antares.core.register_data_watcher["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"AntaresDataWatcher.register-data-watcher",self);
}
}
})().call(null,self);
}
});
antares.core.cursor__GT_fn = (function cursor__GT_fn(cursor,update_fn){return cljs.core.swap_BANG_.call(null,antares.core.app_state,(function (state){return cljs.core.update_in.call(null,state,cursor,update_fn);
}));
});
antares.core.cursor__GT_value = (function cursor__GT_value(cursor,new_value){return cljs.core.swap_BANG_.call(null,antares.core.app_state,(function (app_value){return cljs.core.update_in.call(null,app_value,cursor,(function (old_value){return new_value;
}));
}));
});
antares.core.reset_app_state = (function reset_app_state(value){return cljs.core.reset_BANG_.call(null,antares.core.app_state,value);
});

/**
* @constructor
* @param {*} ident
* @param {*} app_cursor
* @param {*} watch_fn
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
antares.core.DataWatcher = (function (ident,app_cursor,watch_fn,__meta,__extmap){
this.ident = ident;
this.app_cursor = app_cursor;
this.watch_fn = watch_fn;
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
antares.core.DataWatcher.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4139__auto__,k__4140__auto__){var self__ = this;
var this__4139__auto____$1 = this;return cljs.core._lookup.call(null,this__4139__auto____$1,k__4140__auto__,null);
});
antares.core.DataWatcher.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4141__auto__,k16465,else__4142__auto__){var self__ = this;
var this__4141__auto____$1 = this;var G__16467 = (((k16465 instanceof cljs.core.Keyword))?k16465.fqn:null);switch (G__16467) {
case "watch-fn":
return self__.watch_fn;

break;
case "app-cursor":
return self__.app_cursor;

break;
case "ident":
return self__.ident;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16465,else__4142__auto__);

}
});
antares.core.DataWatcher.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4153__auto__,writer__4154__auto__,opts__4155__auto__){var self__ = this;
var this__4153__auto____$1 = this;var pr_pair__4156__auto__ = ((function (this__4153__auto____$1){
return (function (keyval__4157__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4154__auto__,cljs.core.pr_writer,""," ","",opts__4155__auto__,keyval__4157__auto__);
});})(this__4153__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4154__auto__,pr_pair__4156__auto__,"#antares.core.DataWatcher{",", ","}",opts__4155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"watch-fn","watch-fn",-1286682217),self__.watch_fn],null))], null),self__.__extmap));
});
antares.core.DataWatcher.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4137__auto__){var self__ = this;
var this__4137__auto____$1 = this;return self__.__meta;
});
antares.core.DataWatcher.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4133__auto__){var self__ = this;
var this__4133__auto____$1 = this;return (new antares.core.DataWatcher(self__.ident,self__.app_cursor,self__.watch_fn,self__.__meta,self__.__extmap,self__.__hash));
});
antares.core.DataWatcher.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4143__auto__){var self__ = this;
var this__4143__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
antares.core.DataWatcher.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4134__auto__){var self__ = this;
var this__4134__auto____$1 = this;var h__3964__auto__ = self__.__hash;if(!((h__3964__auto__ == null)))
{return h__3964__auto__;
} else
{var h__3964__auto____$1 = cljs.core.hash_imap.call(null,this__4134__auto____$1);self__.__hash = h__3964__auto____$1;
return h__3964__auto____$1;
}
});
antares.core.DataWatcher.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4135__auto__,other__4136__auto__){var self__ = this;
var this__4135__auto____$1 = this;if(cljs.core.truth_((function (){var and__3541__auto__ = other__4136__auto__;if(cljs.core.truth_(and__3541__auto__))
{return ((this__4135__auto____$1.constructor === other__4136__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4135__auto____$1,other__4136__auto__));
} else
{return and__3541__auto__;
}
})()))
{return true;
} else
{return false;
}
});
antares.core.DataWatcher.prototype.antares$core$AntaresDataWatcher$ = true;
antares.core.DataWatcher.prototype.antares$core$AntaresDataWatcher$register_data_watcher$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return cljs.core.add_watch.call(null,antares.core.app_state,new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(self__$1),((function (self__$1){
return (function (key,reference,old_state,new_state){if(cljs.core.not_EQ_.call(null,cljs.core.get_in.call(null,old_state,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(self__$1)),cljs.core.get_in.call(null,new_state,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(self__$1))))
{return new cljs.core.Keyword(null,"watch-fn","watch-fn",-1286682217).cljs$core$IFn$_invoke$arity$1(self__$1).call(null);
} else
{return null;
}
});})(self__$1))
);
});
antares.core.DataWatcher.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4148__auto__,k__4149__auto__){var self__ = this;
var this__4148__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),null,new cljs.core.Keyword(null,"ident","ident",-742346),null,new cljs.core.Keyword(null,"watch-fn","watch-fn",-1286682217),null], null), null),k__4149__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4148__auto____$1),self__.__meta),k__4149__auto__);
} else
{return (new antares.core.DataWatcher(self__.ident,self__.app_cursor,self__.watch_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4149__auto__)),null));
}
});
antares.core.DataWatcher.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4146__auto__,k__4147__auto__,G__16464){var self__ = this;
var this__4146__auto____$1 = this;var pred__16468 = cljs.core.keyword_identical_QMARK_;var expr__16469 = k__4147__auto__;if(cljs.core.truth_(pred__16468.call(null,new cljs.core.Keyword(null,"ident","ident",-742346),expr__16469)))
{return (new antares.core.DataWatcher(G__16464,self__.app_cursor,self__.watch_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16468.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),expr__16469)))
{return (new antares.core.DataWatcher(self__.ident,G__16464,self__.watch_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16468.call(null,new cljs.core.Keyword(null,"watch-fn","watch-fn",-1286682217),expr__16469)))
{return (new antares.core.DataWatcher(self__.ident,self__.app_cursor,G__16464,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.DataWatcher(self__.ident,self__.app_cursor,self__.watch_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4147__auto__,G__16464),null));
}
}
}
});
antares.core.DataWatcher.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4151__auto__){var self__ = this;
var this__4151__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"watch-fn","watch-fn",-1286682217),self__.watch_fn],null))], null),self__.__extmap));
});
antares.core.DataWatcher.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4138__auto__,G__16464){var self__ = this;
var this__4138__auto____$1 = this;return (new antares.core.DataWatcher(self__.ident,self__.app_cursor,self__.watch_fn,G__16464,self__.__extmap,self__.__hash));
});
antares.core.DataWatcher.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4144__auto__,entry__4145__auto__){var self__ = this;
var this__4144__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4145__auto__))
{return cljs.core._assoc.call(null,this__4144__auto____$1,cljs.core._nth.call(null,entry__4145__auto__,(0)),cljs.core._nth.call(null,entry__4145__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4144__auto____$1,entry__4145__auto__);
}
});
antares.core.DataWatcher.cljs$lang$type = true;
antares.core.DataWatcher.cljs$lang$ctorPrSeq = (function (this__4173__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"antares.core/DataWatcher");
});
antares.core.DataWatcher.cljs$lang$ctorPrWriter = (function (this__4173__auto__,writer__4174__auto__){return cljs.core._write.call(null,writer__4174__auto__,"antares.core/DataWatcher");
});
antares.core.__GT_DataWatcher = (function __GT_DataWatcher(ident,app_cursor,watch_fn){return (new antares.core.DataWatcher(ident,app_cursor,watch_fn));
});
antares.core.map__GT_DataWatcher = (function map__GT_DataWatcher(G__16466){return (new antares.core.DataWatcher(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(G__16466),new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(G__16466),new cljs.core.Keyword(null,"watch-fn","watch-fn",-1286682217).cljs$core$IFn$_invoke$arity$1(G__16466),null,cljs.core.dissoc.call(null,G__16466,new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.Keyword(null,"watch-fn","watch-fn",-1286682217))));
});

/**
* @constructor
* @param {*} ident
* @param {*} data_type
* @param {*} app_cursor
* @param {*} dom_cursor
* @param {*} initialize_fn
* @param {*} pre_render_fn
* @param {*} render_fn
* @param {*} post_render_fn
* @param {*} interactions
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
antares.core.Component = (function (ident,data_type,app_cursor,dom_cursor,initialize_fn,pre_render_fn,render_fn,post_render_fn,interactions,__meta,__extmap){
this.ident = ident;
this.data_type = data_type;
this.app_cursor = app_cursor;
this.dom_cursor = dom_cursor;
this.initialize_fn = initialize_fn;
this.pre_render_fn = pre_render_fn;
this.render_fn = render_fn;
this.post_render_fn = post_render_fn;
this.interactions = interactions;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>9){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4139__auto__,k__4140__auto__){var self__ = this;
var this__4139__auto____$1 = this;return cljs.core._lookup.call(null,this__4139__auto____$1,k__4140__auto__,null);
});
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4141__auto__,k16473,else__4142__auto__){var self__ = this;
var this__4141__auto____$1 = this;var G__16475 = (((k16473 instanceof cljs.core.Keyword))?k16473.fqn:null);switch (G__16475) {
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
case "initialize-fn":
return self__.initialize_fn;

break;
case "dom-cursor":
return self__.dom_cursor;

break;
case "app-cursor":
return self__.app_cursor;

break;
case "data-type":
return self__.data_type;

break;
case "ident":
return self__.ident;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16473,else__4142__auto__);

}
});
antares.core.Component.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4153__auto__,writer__4154__auto__,opts__4155__auto__){var self__ = this;
var this__4153__auto____$1 = this;var pr_pair__4156__auto__ = ((function (this__4153__auto____$1){
return (function (keyval__4157__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4154__auto__,cljs.core.pr_writer,""," ","",opts__4155__auto__,keyval__4157__auto__);
});})(this__4153__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4154__auto__,pr_pair__4156__auto__,"#antares.core.Component{",", ","}",opts__4155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data-type","data-type",-326421468),self__.data_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initialize-fn","initialize-fn",793125733),self__.initialize_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801),self__.pre_render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),self__.post_render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"interactions","interactions",550841811),self__.interactions],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4137__auto__){var self__ = this;
var this__4137__auto____$1 = this;return self__.__meta;
});
antares.core.Component.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4133__auto__){var self__ = this;
var this__4133__auto____$1 = this;return (new antares.core.Component(self__.ident,self__.data_type,self__.app_cursor,self__.dom_cursor,self__.initialize_fn,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.__meta,self__.__extmap,self__.__hash));
});
antares.core.Component.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4143__auto__){var self__ = this;
var this__4143__auto____$1 = this;return (9 + cljs.core.count.call(null,self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4134__auto__){var self__ = this;
var this__4134__auto____$1 = this;var h__3964__auto__ = self__.__hash;if(!((h__3964__auto__ == null)))
{return h__3964__auto__;
} else
{var h__3964__auto____$1 = cljs.core.hash_imap.call(null,this__4134__auto____$1);self__.__hash = h__3964__auto____$1;
return h__3964__auto____$1;
}
});
antares.core.Component.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4135__auto__,other__4136__auto__){var self__ = this;
var this__4135__auto____$1 = this;if(cljs.core.truth_((function (){var and__3541__auto__ = other__4136__auto__;if(cljs.core.truth_(and__3541__auto__))
{return ((this__4135__auto____$1.constructor === other__4136__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4135__auto____$1,other__4136__auto__));
} else
{return and__3541__auto__;
}
})()))
{return true;
} else
{return false;
}
});
antares.core.Component.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4148__auto__,k__4149__auto__){var self__ = this;
var this__4148__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),null,new cljs.core.Keyword(null,"data-type","data-type",-326421468),null,new cljs.core.Keyword(null,"initialize-fn","initialize-fn",793125733),null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),null,new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801),null,new cljs.core.Keyword(null,"interactions","interactions",550841811),null,new cljs.core.Keyword(null,"ident","ident",-742346),null], null), null),k__4149__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4148__auto____$1),self__.__meta),k__4149__auto__);
} else
{return (new antares.core.Component(self__.ident,self__.data_type,self__.app_cursor,self__.dom_cursor,self__.initialize_fn,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4149__auto__)),null));
}
});
antares.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4146__auto__,k__4147__auto__,G__16472){var self__ = this;
var this__4146__auto____$1 = this;var pred__16476 = cljs.core.keyword_identical_QMARK_;var expr__16477 = k__4147__auto__;if(cljs.core.truth_(pred__16476.call(null,new cljs.core.Keyword(null,"ident","ident",-742346),expr__16477)))
{return (new antares.core.Component(G__16472,self__.data_type,self__.app_cursor,self__.dom_cursor,self__.initialize_fn,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16476.call(null,new cljs.core.Keyword(null,"data-type","data-type",-326421468),expr__16477)))
{return (new antares.core.Component(self__.ident,G__16472,self__.app_cursor,self__.dom_cursor,self__.initialize_fn,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16476.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),expr__16477)))
{return (new antares.core.Component(self__.ident,self__.data_type,G__16472,self__.dom_cursor,self__.initialize_fn,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16476.call(null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),expr__16477)))
{return (new antares.core.Component(self__.ident,self__.data_type,self__.app_cursor,G__16472,self__.initialize_fn,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16476.call(null,new cljs.core.Keyword(null,"initialize-fn","initialize-fn",793125733),expr__16477)))
{return (new antares.core.Component(self__.ident,self__.data_type,self__.app_cursor,self__.dom_cursor,G__16472,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16476.call(null,new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801),expr__16477)))
{return (new antares.core.Component(self__.ident,self__.data_type,self__.app_cursor,self__.dom_cursor,self__.initialize_fn,G__16472,self__.render_fn,self__.post_render_fn,self__.interactions,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16476.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),expr__16477)))
{return (new antares.core.Component(self__.ident,self__.data_type,self__.app_cursor,self__.dom_cursor,self__.initialize_fn,self__.pre_render_fn,G__16472,self__.post_render_fn,self__.interactions,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16476.call(null,new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),expr__16477)))
{return (new antares.core.Component(self__.ident,self__.data_type,self__.app_cursor,self__.dom_cursor,self__.initialize_fn,self__.pre_render_fn,self__.render_fn,G__16472,self__.interactions,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16476.call(null,new cljs.core.Keyword(null,"interactions","interactions",550841811),expr__16477)))
{return (new antares.core.Component(self__.ident,self__.data_type,self__.app_cursor,self__.dom_cursor,self__.initialize_fn,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,G__16472,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.Component(self__.ident,self__.data_type,self__.app_cursor,self__.dom_cursor,self__.initialize_fn,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4147__auto__,G__16472),null));
}
}
}
}
}
}
}
}
}
});
antares.core.Component.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4151__auto__){var self__ = this;
var this__4151__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data-type","data-type",-326421468),self__.data_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initialize-fn","initialize-fn",793125733),self__.initialize_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801),self__.pre_render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),self__.post_render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"interactions","interactions",550841811),self__.interactions],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4138__auto__,G__16472){var self__ = this;
var this__4138__auto____$1 = this;return (new antares.core.Component(self__.ident,self__.data_type,self__.app_cursor,self__.dom_cursor,self__.initialize_fn,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,G__16472,self__.__extmap,self__.__hash));
});
antares.core.Component.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4144__auto__,entry__4145__auto__){var self__ = this;
var this__4144__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4145__auto__))
{return cljs.core._assoc.call(null,this__4144__auto____$1,cljs.core._nth.call(null,entry__4145__auto__,(0)),cljs.core._nth.call(null,entry__4145__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4144__auto____$1,entry__4145__auto__);
}
});
antares.core.Component.prototype.antares$core$AntaresComponent$ = true;
antares.core.Component.prototype.antares$core$AntaresComponent$initial_cursor$arity$1 = (function (self){var self__ = this;
var self__$1 = this;var G__16479 = new cljs.core.Keyword(null,"data-type","data-type",-326421468).cljs$core$IFn$_invoke$arity$1(self__$1);switch (G__16479) {
case "string":
return "";

break;
case "map":
return cljs.core.PersistentArrayMap.EMPTY;

break;
case "vector":
return cljs.core.PersistentVector.EMPTY;

break;
case "matrix":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);

break;
case "number":
return (0);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data-type","data-type",-326421468).cljs$core$IFn$_invoke$arity$1(self__$1)))));

}
});
antares.core.Component.prototype.antares$core$AntaresComponent$initialize$arity$1 = (function (self){var self__ = this;
var self__$1 = this;if(cljs.core.truth_(new cljs.core.Keyword(null,"initialize-fn","initialize-fn",793125733).cljs$core$IFn$_invoke$arity$1(self__$1)))
{return antares.core.cursor__GT_fn.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(self__$1),new cljs.core.Keyword(null,"initialize-fn","initialize-fn",793125733).cljs$core$IFn$_invoke$arity$1(self__$1));
} else
{return null;
}
});
antares.core.Component.prototype.antares$core$AntaresComponent$bind_events$arity$1 = (function (self){var self__ = this;
var self__$1 = this;var temp__4126__auto__ = new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(self__$1);if(cljs.core.truth_(temp__4126__auto__))
{var interactions__$1 = temp__4126__auto__;var seq__16480 = cljs.core.seq.call(null,interactions__$1);var chunk__16481 = null;var count__16482 = (0);var i__16483 = (0);while(true){
if((i__16483 < count__16482))
{var interaction = cljs.core._nth.call(null,chunk__16481,i__16483);goog.events.listen(document.querySelector(self__.dom_cursor),new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"event-action","event-action",-974748529).cljs$core$IFn$_invoke$arity$1(interaction));
{
var G__16486 = seq__16480;
var G__16487 = chunk__16481;
var G__16488 = count__16482;
var G__16489 = (i__16483 + (1));
seq__16480 = G__16486;
chunk__16481 = G__16487;
count__16482 = G__16488;
i__16483 = G__16489;
continue;
}
} else
{var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__16480);if(temp__4126__auto____$1)
{var seq__16480__$1 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16480__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__16480__$1);{
var G__16490 = cljs.core.chunk_rest.call(null,seq__16480__$1);
var G__16491 = c__4309__auto__;
var G__16492 = cljs.core.count.call(null,c__4309__auto__);
var G__16493 = (0);
seq__16480 = G__16490;
chunk__16481 = G__16491;
count__16482 = G__16492;
i__16483 = G__16493;
continue;
}
} else
{var interaction = cljs.core.first.call(null,seq__16480__$1);goog.events.listen(document.querySelector(self__.dom_cursor),new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"event-action","event-action",-974748529).cljs$core$IFn$_invoke$arity$1(interaction));
{
var G__16494 = cljs.core.next.call(null,seq__16480__$1);
var G__16495 = null;
var G__16496 = (0);
var G__16497 = (0);
seq__16480 = G__16494;
chunk__16481 = G__16495;
count__16482 = G__16496;
i__16483 = G__16497;
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
antares.core.Component.prototype.antares$core$AntaresComponent$register_cursor$arity$1 = (function (self){var self__ = this;
var self__$1 = this;if((cljs.core.get_in.call(null,cljs.core.deref.call(null,antares.core.app_state),new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(self__$1)) == null))
{return antares.core.cursor__GT_value.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(self__$1),antares.core.initial_cursor.call(null,self__$1));
} else
{return null;
}
});
antares.core.Component.prototype.antares$core$AntaresComponent$register_watcher$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return cljs.core.add_watch.call(null,antares.core.app_state,new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(self__$1),((function (self__$1){
return (function (key,reference,old_state,new_state){if(cljs.core.not_EQ_.call(null,cljs.core.get_in.call(null,old_state,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(self__$1)),cljs.core.get_in.call(null,new_state,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(self__$1))))
{antares.core.pre_render.call(null,self__$1);
antares.core.render.call(null,self__$1);
return antares.core.post_render.call(null,self__$1);
} else
{return null;
}
});})(self__$1))
);
});
antares.core.Component.prototype.antares$core$Renderable$ = true;
antares.core.Component.prototype.antares$core$Renderable$pre_render$arity$1 = (function (self){var self__ = this;
var self__$1 = this;if(cljs.core.truth_(new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801).cljs$core$IFn$_invoke$arity$1(self__$1)))
{return self__.pre_render_fn.call(null);
} else
{return null;
}
});
antares.core.Component.prototype.antares$core$Renderable$render$arity$1 = (function (self){var self__ = this;
var self__$1 = this;var target_node = document.querySelector(self__.dom_cursor);var new_nodes_data = self__.render_fn.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,antares.core.app_state),self__.app_cursor));return target_node.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,new_nodes_data)));
});
antares.core.Component.prototype.antares$core$Renderable$post_render$arity$1 = (function (self){var self__ = this;
var self__$1 = this;if(cljs.core.truth_(new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496).cljs$core$IFn$_invoke$arity$1(self__$1)))
{return self__.post_render_fn.call(null);
} else
{return null;
}
});
antares.core.Component.cljs$lang$type = true;
antares.core.Component.cljs$lang$ctorPrSeq = (function (this__4173__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"antares.core/Component");
});
antares.core.Component.cljs$lang$ctorPrWriter = (function (this__4173__auto__,writer__4174__auto__){return cljs.core._write.call(null,writer__4174__auto__,"antares.core/Component");
});
antares.core.__GT_Component = (function __GT_Component(ident,data_type,app_cursor,dom_cursor,initialize_fn,pre_render_fn,render_fn,post_render_fn,interactions){return (new antares.core.Component(ident,data_type,app_cursor,dom_cursor,initialize_fn,pre_render_fn,render_fn,post_render_fn,interactions));
});
antares.core.map__GT_Component = (function map__GT_Component(G__16474){return (new antares.core.Component(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(G__16474),new cljs.core.Keyword(null,"data-type","data-type",-326421468).cljs$core$IFn$_invoke$arity$1(G__16474),new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(G__16474),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(G__16474),new cljs.core.Keyword(null,"initialize-fn","initialize-fn",793125733).cljs$core$IFn$_invoke$arity$1(G__16474),new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801).cljs$core$IFn$_invoke$arity$1(G__16474),new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(G__16474),new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496).cljs$core$IFn$_invoke$arity$1(G__16474),new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(G__16474),null,cljs.core.dissoc.call(null,G__16474,new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),new cljs.core.Keyword(null,"initialize-fn","initialize-fn",793125733),new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),new cljs.core.Keyword(null,"interactions","interactions",550841811))));
});
antares.core.register_component = (function register_component(component){antares.core.register_cursor.call(null,component);
antares.core.register_watcher.call(null,component);
cljs.core.swap_BANG_.call(null,antares.core.registered_components,cljs.core.conj,component);
return antares.core.bind_events.call(null,component);
});
antares.core.unregister_component = (function unregister_component(component){cljs.core.remove_watch.call(null,antares.core.app_state,new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(component));
return cljs.core.swap_BANG_.call(null,antares.core.registered_components,(function (components__$1){return cljs.core.remove.call(null,(function (p1__16498_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(p1__16498_SHARP_),new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(component));
}),components__$1);
}));
});
antares.core.create_component = (function create_component(source_map){var component = antares.core.map__GT_Component.call(null,source_map);antares.core.register_component.call(null,component);
antares.core.initialize.call(null,component);
antares.core.pre_render.call(null,component);
antares.core.render.call(null,component);
antares.core.post_render.call(null,component);
return component;
});
antares.core.destroy_component = (function destroy_component(ident){var component = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__16499_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(p1__16499_SHARP_),ident);
}),cljs.core.deref.call(null,antares.core.registered_components)));antares.core.unregister_component.call(null,component);
var target_node = document.querySelector(new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(component));var clone_node = target_node.cloneNode(false);var parent_node = target_node.parentNode;target_node.remove();
parent_node.appendChild(clone_node);
return target_node.innerHTML = "";
});
antares.core.create_data_watcher = (function create_data_watcher(source_map){var data_watcher = antares.core.map__GT_DataWatcher.call(null,source_map);antares.core.register_data_watcher.call(null,data_watcher);
return data_watcher;
});
antares.core.http_get = (function http_get(uri,options){return ajax.core.GET.call(null,uri,options);
});
antares.core.http_post = (function http_post(uri,options){return ajax.core.POST.call(null,uri,options);
});
antares.core.compile_css = (function compile_css(css_data){return garden.core.css.call(null,antares.core.read_string.call(null,css_data));
});
antares.core.create_component.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"app-state-inspector","app-state-inspector",780117083),new cljs.core.Keyword(null,"data-type","data-type",-326421468),"map",new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),".antares.app-state",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.antares.app-state-inspector","textarea.antares.app-state-inspector",2012448389),cljs.core.pr_str.call(null,data)], null);
}),new cljs.core.Keyword(null,"interactions","interactions",550841811),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-type","event-type",319722813),"blur",new cljs.core.Keyword(null,"event-action","event-action",-974748529),(function (event){return antares.core.reset_app_state.call(null,antares.core.read_string.call(null,event.target.value));
})], null)], null)], null));

//# sourceMappingURL=core.js.map