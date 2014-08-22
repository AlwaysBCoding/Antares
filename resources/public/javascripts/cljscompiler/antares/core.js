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
goog.require('cljs.core.async');
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
antares.core.registered_components = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
antares.core.read_string = (function read_string(data_string){return cljs.reader.read_string.call(null,data_string);
});
antares.core.Renderable = (function (){var obj15074 = {};return obj15074;
})();
antares.core.pre_render = (function pre_render(self){if((function (){var and__3531__auto__ = self;if(and__3531__auto__)
{return self.antares$core$Renderable$pre_render$arity$1;
} else
{return and__3531__auto__;
}
})())
{return self.antares$core$Renderable$pre_render$arity$1(self);
} else
{var x__4170__auto__ = (((self == null))?null:self);return (function (){var or__3543__auto__ = (antares.core.pre_render[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (antares.core.pre_render["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Renderable.pre-render",self);
}
}
})().call(null,self);
}
});
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
antares.core.post_render = (function post_render(self){if((function (){var and__3531__auto__ = self;if(and__3531__auto__)
{return self.antares$core$Renderable$post_render$arity$1;
} else
{return and__3531__auto__;
}
})())
{return self.antares$core$Renderable$post_render$arity$1(self);
} else
{var x__4170__auto__ = (((self == null))?null:self);return (function (){var or__3543__auto__ = (antares.core.post_render[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (antares.core.post_render["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Renderable.post-render",self);
}
}
})().call(null,self);
}
});
antares.core.AntaresComponent = (function (){var obj15076 = {};return obj15076;
})();
antares.core.initial_cursor = (function initial_cursor(self){if((function (){var and__3531__auto__ = self;if(and__3531__auto__)
{return self.antares$core$AntaresComponent$initial_cursor$arity$1;
} else
{return and__3531__auto__;
}
})())
{return self.antares$core$AntaresComponent$initial_cursor$arity$1(self);
} else
{var x__4170__auto__ = (((self == null))?null:self);return (function (){var or__3543__auto__ = (antares.core.initial_cursor[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (antares.core.initial_cursor["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"AntaresComponent.initial-cursor",self);
}
}
})().call(null,self);
}
});
antares.core.initialize = (function initialize(self){if((function (){var and__3531__auto__ = self;if(and__3531__auto__)
{return self.antares$core$AntaresComponent$initialize$arity$1;
} else
{return and__3531__auto__;
}
})())
{return self.antares$core$AntaresComponent$initialize$arity$1(self);
} else
{var x__4170__auto__ = (((self == null))?null:self);return (function (){var or__3543__auto__ = (antares.core.initialize[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (antares.core.initialize["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"AntaresComponent.initialize",self);
}
}
})().call(null,self);
}
});
antares.core.bind_events = (function bind_events(self){if((function (){var and__3531__auto__ = self;if(and__3531__auto__)
{return self.antares$core$AntaresComponent$bind_events$arity$1;
} else
{return and__3531__auto__;
}
})())
{return self.antares$core$AntaresComponent$bind_events$arity$1(self);
} else
{var x__4170__auto__ = (((self == null))?null:self);return (function (){var or__3543__auto__ = (antares.core.bind_events[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (antares.core.bind_events["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"AntaresComponent.bind-events",self);
}
}
})().call(null,self);
}
});
antares.core.register_cursor = (function register_cursor(self){if((function (){var and__3531__auto__ = self;if(and__3531__auto__)
{return self.antares$core$AntaresComponent$register_cursor$arity$1;
} else
{return and__3531__auto__;
}
})())
{return self.antares$core$AntaresComponent$register_cursor$arity$1(self);
} else
{var x__4170__auto__ = (((self == null))?null:self);return (function (){var or__3543__auto__ = (antares.core.register_cursor[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (antares.core.register_cursor["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"AntaresComponent.register-cursor",self);
}
}
})().call(null,self);
}
});
antares.core.register_watcher = (function register_watcher(self){if((function (){var and__3531__auto__ = self;if(and__3531__auto__)
{return self.antares$core$AntaresComponent$register_watcher$arity$1;
} else
{return and__3531__auto__;
}
})())
{return self.antares$core$AntaresComponent$register_watcher$arity$1(self);
} else
{var x__4170__auto__ = (((self == null))?null:self);return (function (){var or__3543__auto__ = (antares.core.register_watcher[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (antares.core.register_watcher["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"AntaresComponent.register-watcher",self);
}
}
})().call(null,self);
}
});
antares.core.update_cursor = (function update_cursor(cursor,update_fn){return cljs.core.swap_BANG_.call(null,antares.core.app_state,(function (state){return cljs.core.update_in.call(null,state,cursor,update_fn);
}));
});
antares.core.reset_app_state = (function reset_app_state(value){return cljs.core.reset_BANG_.call(null,antares.core.app_state,value);
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
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4129__auto__,k__4130__auto__){var self__ = this;
var this__4129__auto____$1 = this;return cljs.core._lookup.call(null,this__4129__auto____$1,k__4130__auto__,null);
});
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4131__auto__,k15078,else__4132__auto__){var self__ = this;
var this__4131__auto____$1 = this;var G__15080 = (((k15078 instanceof cljs.core.Keyword))?k15078.fqn:null);switch (G__15080) {
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
return cljs.core.get.call(null,self__.__extmap,k15078,else__4132__auto__);

}
});
antares.core.Component.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4143__auto__,writer__4144__auto__,opts__4145__auto__){var self__ = this;
var this__4143__auto____$1 = this;var pr_pair__4146__auto__ = ((function (this__4143__auto____$1){
return (function (keyval__4147__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4144__auto__,cljs.core.pr_writer,""," ","",opts__4145__auto__,keyval__4147__auto__);
});})(this__4143__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4144__auto__,pr_pair__4146__auto__,"#antares.core.Component{",", ","}",opts__4145__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data-type","data-type",-326421468),self__.data_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initialize-fn","initialize-fn",793125733),self__.initialize_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801),self__.pre_render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),self__.post_render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"interactions","interactions",550841811),self__.interactions],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4127__auto__){var self__ = this;
var this__4127__auto____$1 = this;return self__.__meta;
});
antares.core.Component.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4123__auto__){var self__ = this;
var this__4123__auto____$1 = this;return (new antares.core.Component(self__.ident,self__.data_type,self__.app_cursor,self__.dom_cursor,self__.initialize_fn,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.__meta,self__.__extmap,self__.__hash));
});
antares.core.Component.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4133__auto__){var self__ = this;
var this__4133__auto____$1 = this;return (9 + cljs.core.count.call(null,self__.__extmap));
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
var this__4138__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),null,new cljs.core.Keyword(null,"data-type","data-type",-326421468),null,new cljs.core.Keyword(null,"initialize-fn","initialize-fn",793125733),null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),null,new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801),null,new cljs.core.Keyword(null,"interactions","interactions",550841811),null,new cljs.core.Keyword(null,"ident","ident",-742346),null], null), null),k__4139__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4138__auto____$1),self__.__meta),k__4139__auto__);
} else
{return (new antares.core.Component(self__.ident,self__.data_type,self__.app_cursor,self__.dom_cursor,self__.initialize_fn,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4139__auto__)),null));
}
});
antares.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4136__auto__,k__4137__auto__,G__15077){var self__ = this;
var this__4136__auto____$1 = this;var pred__15081 = cljs.core.keyword_identical_QMARK_;var expr__15082 = k__4137__auto__;if(cljs.core.truth_(pred__15081.call(null,new cljs.core.Keyword(null,"ident","ident",-742346),expr__15082)))
{return (new antares.core.Component(G__15077,self__.data_type,self__.app_cursor,self__.dom_cursor,self__.initialize_fn,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15081.call(null,new cljs.core.Keyword(null,"data-type","data-type",-326421468),expr__15082)))
{return (new antares.core.Component(self__.ident,G__15077,self__.app_cursor,self__.dom_cursor,self__.initialize_fn,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15081.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),expr__15082)))
{return (new antares.core.Component(self__.ident,self__.data_type,G__15077,self__.dom_cursor,self__.initialize_fn,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15081.call(null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),expr__15082)))
{return (new antares.core.Component(self__.ident,self__.data_type,self__.app_cursor,G__15077,self__.initialize_fn,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15081.call(null,new cljs.core.Keyword(null,"initialize-fn","initialize-fn",793125733),expr__15082)))
{return (new antares.core.Component(self__.ident,self__.data_type,self__.app_cursor,self__.dom_cursor,G__15077,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15081.call(null,new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801),expr__15082)))
{return (new antares.core.Component(self__.ident,self__.data_type,self__.app_cursor,self__.dom_cursor,self__.initialize_fn,G__15077,self__.render_fn,self__.post_render_fn,self__.interactions,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15081.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),expr__15082)))
{return (new antares.core.Component(self__.ident,self__.data_type,self__.app_cursor,self__.dom_cursor,self__.initialize_fn,self__.pre_render_fn,G__15077,self__.post_render_fn,self__.interactions,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15081.call(null,new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),expr__15082)))
{return (new antares.core.Component(self__.ident,self__.data_type,self__.app_cursor,self__.dom_cursor,self__.initialize_fn,self__.pre_render_fn,self__.render_fn,G__15077,self__.interactions,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15081.call(null,new cljs.core.Keyword(null,"interactions","interactions",550841811),expr__15082)))
{return (new antares.core.Component(self__.ident,self__.data_type,self__.app_cursor,self__.dom_cursor,self__.initialize_fn,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,G__15077,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.Component(self__.ident,self__.data_type,self__.app_cursor,self__.dom_cursor,self__.initialize_fn,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4137__auto__,G__15077),null));
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
antares.core.Component.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data-type","data-type",-326421468),self__.data_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initialize-fn","initialize-fn",793125733),self__.initialize_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801),self__.pre_render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),self__.post_render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"interactions","interactions",550841811),self__.interactions],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4128__auto__,G__15077){var self__ = this;
var this__4128__auto____$1 = this;return (new antares.core.Component(self__.ident,self__.data_type,self__.app_cursor,self__.dom_cursor,self__.initialize_fn,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,G__15077,self__.__extmap,self__.__hash));
});
antares.core.Component.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4134__auto__,entry__4135__auto__){var self__ = this;
var this__4134__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4135__auto__))
{return cljs.core._assoc.call(null,this__4134__auto____$1,cljs.core._nth.call(null,entry__4135__auto__,(0)),cljs.core._nth.call(null,entry__4135__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4134__auto____$1,entry__4135__auto__);
}
});
antares.core.Component.prototype.antares$core$AntaresComponent$ = true;
antares.core.Component.prototype.antares$core$AntaresComponent$initial_cursor$arity$1 = (function (self){var self__ = this;
var self__$1 = this;var G__15084 = new cljs.core.Keyword(null,"data-type","data-type",-326421468).cljs$core$IFn$_invoke$arity$1(self__$1);switch (G__15084) {
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
{return antares.core.update_cursor.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(self__$1),new cljs.core.Keyword(null,"initialize-fn","initialize-fn",793125733).cljs$core$IFn$_invoke$arity$1(self__$1));
} else
{return null;
}
});
antares.core.Component.prototype.antares$core$AntaresComponent$bind_events$arity$1 = (function (self){var self__ = this;
var self__$1 = this;var temp__4126__auto__ = new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(self__$1);if(cljs.core.truth_(temp__4126__auto__))
{var interactions__$1 = temp__4126__auto__;var seq__15085 = cljs.core.seq.call(null,interactions__$1);var chunk__15086 = null;var count__15087 = (0);var i__15088 = (0);while(true){
if((i__15088 < count__15087))
{var interaction = cljs.core._nth.call(null,chunk__15086,i__15088);document.querySelector(self__.dom_cursor).addEventListener(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"event-action","event-action",-974748529).cljs$core$IFn$_invoke$arity$1(interaction),true);
{
var G__15091 = seq__15085;
var G__15092 = chunk__15086;
var G__15093 = count__15087;
var G__15094 = (i__15088 + (1));
seq__15085 = G__15091;
chunk__15086 = G__15092;
count__15087 = G__15093;
i__15088 = G__15094;
continue;
}
} else
{var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__15085);if(temp__4126__auto____$1)
{var seq__15085__$1 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15085__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__15085__$1);{
var G__15095 = cljs.core.chunk_rest.call(null,seq__15085__$1);
var G__15096 = c__4299__auto__;
var G__15097 = cljs.core.count.call(null,c__4299__auto__);
var G__15098 = (0);
seq__15085 = G__15095;
chunk__15086 = G__15096;
count__15087 = G__15097;
i__15088 = G__15098;
continue;
}
} else
{var interaction = cljs.core.first.call(null,seq__15085__$1);document.querySelector(self__.dom_cursor).addEventListener(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"event-action","event-action",-974748529).cljs$core$IFn$_invoke$arity$1(interaction),true);
{
var G__15099 = cljs.core.next.call(null,seq__15085__$1);
var G__15100 = null;
var G__15101 = (0);
var G__15102 = (0);
seq__15085 = G__15099;
chunk__15086 = G__15100;
count__15087 = G__15101;
i__15088 = G__15102;
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
{return antares.core.update_cursor.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(self__$1),((function (self__$1){
return (function (old_value){return antares.core.initial_cursor.call(null,self__$1);
});})(self__$1))
);
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
antares.core.Component.cljs$lang$ctorPrSeq = (function (this__4163__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"antares.core/Component");
});
antares.core.Component.cljs$lang$ctorPrWriter = (function (this__4163__auto__,writer__4164__auto__){return cljs.core._write.call(null,writer__4164__auto__,"antares.core/Component");
});
antares.core.__GT_Component = (function __GT_Component(ident,data_type,app_cursor,dom_cursor,initialize_fn,pre_render_fn,render_fn,post_render_fn,interactions){return (new antares.core.Component(ident,data_type,app_cursor,dom_cursor,initialize_fn,pre_render_fn,render_fn,post_render_fn,interactions));
});
antares.core.map__GT_Component = (function map__GT_Component(G__15079){return (new antares.core.Component(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(G__15079),new cljs.core.Keyword(null,"data-type","data-type",-326421468).cljs$core$IFn$_invoke$arity$1(G__15079),new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(G__15079),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(G__15079),new cljs.core.Keyword(null,"initialize-fn","initialize-fn",793125733).cljs$core$IFn$_invoke$arity$1(G__15079),new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801).cljs$core$IFn$_invoke$arity$1(G__15079),new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(G__15079),new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496).cljs$core$IFn$_invoke$arity$1(G__15079),new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(G__15079),null,cljs.core.dissoc.call(null,G__15079,new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),new cljs.core.Keyword(null,"initialize-fn","initialize-fn",793125733),new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),new cljs.core.Keyword(null,"interactions","interactions",550841811))));
});
antares.core.register_component = (function register_component(component){antares.core.register_cursor.call(null,component);
antares.core.register_watcher.call(null,component);
cljs.core.swap_BANG_.call(null,antares.core.registered_components,cljs.core.conj,component);
return antares.core.bind_events.call(null,component);
});
antares.core.unregister_component = (function unregister_component(component){cljs.core.remove_watch.call(null,antares.core.app_state,new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(component));
return cljs.core.swap_BANG_.call(null,antares.core.registered_components,(function (components__$1){return cljs.core.remove.call(null,(function (p1__15103_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(p1__15103_SHARP_),new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(component));
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
antares.core.destroy_component = (function destroy_component(ident){var component = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__15104_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(p1__15104_SHARP_),ident);
}),cljs.core.deref.call(null,antares.core.registered_components)));antares.core.unregister_component.call(null,component);
var target_node = document.querySelector(new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(component));var clone_node = target_node.cloneNode(false);var parent_node = target_node.parentNode;target_node.remove();
parent_node.appendChild(clone_node);
return target_node.innerHTML = "";
});
dommy.core.prepend_BANG_.call(null,document.querySelector("body"),(function (){var dom15105 = document.createElement("div");dom15105.className = "antares app-state";
return dom15105;
})());
antares.core.create_component.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"app-state-inspector","app-state-inspector",780117083),new cljs.core.Keyword(null,"data-type","data-type",-326421468),"map",new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),".antares.app-state",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.antares.app-state-inspector","textarea.antares.app-state-inspector",2012448389),cljs.core.pr_str.call(null,data)], null);
}),new cljs.core.Keyword(null,"interactions","interactions",550841811),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-type","event-type",319722813),"blur",new cljs.core.Keyword(null,"event-action","event-action",-974748529),(function (event){return antares.core.reset_app_state.call(null,antares.core.read_string.call(null,event.target.value));
})], null)], null)], null));

//# sourceMappingURL=core.js.map