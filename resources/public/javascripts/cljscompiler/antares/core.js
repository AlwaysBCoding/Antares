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
antares.core.compile_css_BANG_ = (function compile_css_BANG_(css_data){return garden.core.css.call(null,css_data);
});
antares.core.compile_html_BANG_ = (function compile_html_BANG_(html_data){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,html_data)));
});
antares.core.Renderable = (function (){var obj17328 = {};return obj17328;
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
antares.core.render_data = (function render_data(self,data){if((function (){var and__3541__auto__ = self;if(and__3541__auto__)
{return self.antares$core$Renderable$render_data$arity$2;
} else
{return and__3541__auto__;
}
})())
{return self.antares$core$Renderable$render_data$arity$2(self,data);
} else
{var x__4180__auto__ = (((self == null))?null:self);return (function (){var or__3553__auto__ = (antares.core.render_data[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (antares.core.render_data["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Renderable.render-data",self);
}
}
})().call(null,self,data);
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

/**
* @constructor
* @param {*} ident
* @param {*} data_type
* @param {*} pre_render_fn
* @param {*} render_data_fn
* @param {*} post_render_fn
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
antares.core.Component = (function (ident,data_type,pre_render_fn,render_data_fn,post_render_fn,__meta,__extmap){
this.ident = ident;
this.data_type = data_type;
this.pre_render_fn = pre_render_fn;
this.render_data_fn = render_data_fn;
this.post_render_fn = post_render_fn;
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
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4139__auto__,k__4140__auto__){var self__ = this;
var this__4139__auto____$1 = this;return cljs.core._lookup.call(null,this__4139__auto____$1,k__4140__auto__,null);
});
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4141__auto__,k17330,else__4142__auto__){var self__ = this;
var this__4141__auto____$1 = this;var G__17332 = (((k17330 instanceof cljs.core.Keyword))?k17330.fqn:null);switch (G__17332) {
case "post-render-fn":
return self__.post_render_fn;

break;
case "render-data-fn":
return self__.render_data_fn;

break;
case "pre-render-fn":
return self__.pre_render_fn;

break;
case "data-type":
return self__.data_type;

break;
case "ident":
return self__.ident;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k17330,else__4142__auto__);

}
});
antares.core.Component.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4153__auto__,writer__4154__auto__,opts__4155__auto__){var self__ = this;
var this__4153__auto____$1 = this;var pr_pair__4156__auto__ = ((function (this__4153__auto____$1){
return (function (keyval__4157__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4154__auto__,cljs.core.pr_writer,""," ","",opts__4155__auto__,keyval__4157__auto__);
});})(this__4153__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4154__auto__,pr_pair__4156__auto__,"#antares.core.Component{",", ","}",opts__4155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data-type","data-type",-326421468),self__.data_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801),self__.pre_render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-data-fn","render-data-fn",-1862520485),self__.render_data_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),self__.post_render_fn],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4137__auto__){var self__ = this;
var this__4137__auto____$1 = this;return self__.__meta;
});
antares.core.Component.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4133__auto__){var self__ = this;
var this__4133__auto____$1 = this;return (new antares.core.Component(self__.ident,self__.data_type,self__.pre_render_fn,self__.render_data_fn,self__.post_render_fn,self__.__meta,self__.__extmap,self__.__hash));
});
antares.core.Component.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4143__auto__){var self__ = this;
var this__4143__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
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
var this__4148__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),null,new cljs.core.Keyword(null,"data-type","data-type",-326421468),null,new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801),null,new cljs.core.Keyword(null,"ident","ident",-742346),null,new cljs.core.Keyword(null,"render-data-fn","render-data-fn",-1862520485),null], null), null),k__4149__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4148__auto____$1),self__.__meta),k__4149__auto__);
} else
{return (new antares.core.Component(self__.ident,self__.data_type,self__.pre_render_fn,self__.render_data_fn,self__.post_render_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4149__auto__)),null));
}
});
antares.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4146__auto__,k__4147__auto__,G__17329){var self__ = this;
var this__4146__auto____$1 = this;var pred__17333 = cljs.core.keyword_identical_QMARK_;var expr__17334 = k__4147__auto__;if(cljs.core.truth_(pred__17333.call(null,new cljs.core.Keyword(null,"ident","ident",-742346),expr__17334)))
{return (new antares.core.Component(G__17329,self__.data_type,self__.pre_render_fn,self__.render_data_fn,self__.post_render_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__17333.call(null,new cljs.core.Keyword(null,"data-type","data-type",-326421468),expr__17334)))
{return (new antares.core.Component(self__.ident,G__17329,self__.pre_render_fn,self__.render_data_fn,self__.post_render_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__17333.call(null,new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801),expr__17334)))
{return (new antares.core.Component(self__.ident,self__.data_type,G__17329,self__.render_data_fn,self__.post_render_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__17333.call(null,new cljs.core.Keyword(null,"render-data-fn","render-data-fn",-1862520485),expr__17334)))
{return (new antares.core.Component(self__.ident,self__.data_type,self__.pre_render_fn,G__17329,self__.post_render_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__17333.call(null,new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),expr__17334)))
{return (new antares.core.Component(self__.ident,self__.data_type,self__.pre_render_fn,self__.render_data_fn,G__17329,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.Component(self__.ident,self__.data_type,self__.pre_render_fn,self__.render_data_fn,self__.post_render_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4147__auto__,G__17329),null));
}
}
}
}
}
});
antares.core.Component.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4151__auto__){var self__ = this;
var this__4151__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data-type","data-type",-326421468),self__.data_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801),self__.pre_render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-data-fn","render-data-fn",-1862520485),self__.render_data_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),self__.post_render_fn],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4138__auto__,G__17329){var self__ = this;
var this__4138__auto____$1 = this;return (new antares.core.Component(self__.ident,self__.data_type,self__.pre_render_fn,self__.render_data_fn,self__.post_render_fn,G__17329,self__.__extmap,self__.__hash));
});
antares.core.Component.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4144__auto__,entry__4145__auto__){var self__ = this;
var this__4144__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4145__auto__))
{return cljs.core._assoc.call(null,this__4144__auto____$1,cljs.core._nth.call(null,entry__4145__auto__,(0)),cljs.core._nth.call(null,entry__4145__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4144__auto____$1,entry__4145__auto__);
}
});
antares.core.Component.prototype.antares$core$Renderable$ = true;
antares.core.Component.prototype.antares$core$Renderable$pre_render$arity$1 = (function (self){var self__ = this;
var self__$1 = this;var temp__4124__auto__ = new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801).cljs$core$IFn$_invoke$arity$1(self__$1);if(cljs.core.truth_(temp__4124__auto__))
{var pre_render_fn__$1 = temp__4124__auto__;return pre_render_fn__$1.call(null);
} else
{return null;
}
});
antares.core.Component.prototype.antares$core$Renderable$render_data$arity$2 = (function (self,data){var self__ = this;
var self__$1 = this;var temp__4124__auto__ = new cljs.core.Keyword(null,"render-data-fn","render-data-fn",-1862520485).cljs$core$IFn$_invoke$arity$1(self__$1);if(cljs.core.truth_(temp__4124__auto__))
{var render_data_fn__$1 = temp__4124__auto__;return render_data_fn__$1.call(null,data);
} else
{return null;
}
});
antares.core.Component.prototype.antares$core$Renderable$post_render$arity$1 = (function (self){var self__ = this;
var self__$1 = this;var temp__4124__auto__ = new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496).cljs$core$IFn$_invoke$arity$1(self__$1);if(cljs.core.truth_(temp__4124__auto__))
{var post_render_fn__$1 = temp__4124__auto__;return post_render_fn__$1.call(null);
} else
{return null;
}
});
antares.core.Component.cljs$lang$type = true;
antares.core.Component.cljs$lang$ctorPrSeq = (function (this__4173__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"antares.core/Component");
});
antares.core.Component.cljs$lang$ctorPrWriter = (function (this__4173__auto__,writer__4174__auto__){return cljs.core._write.call(null,writer__4174__auto__,"antares.core/Component");
});
antares.core.__GT_Component = (function __GT_Component(ident,data_type,pre_render_fn,render_data_fn,post_render_fn){return (new antares.core.Component(ident,data_type,pre_render_fn,render_data_fn,post_render_fn));
});
antares.core.map__GT_Component = (function map__GT_Component(G__17331){return (new antares.core.Component(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(G__17331),new cljs.core.Keyword(null,"data-type","data-type",-326421468).cljs$core$IFn$_invoke$arity$1(G__17331),new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801).cljs$core$IFn$_invoke$arity$1(G__17331),new cljs.core.Keyword(null,"render-data-fn","render-data-fn",-1862520485).cljs$core$IFn$_invoke$arity$1(G__17331),new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496).cljs$core$IFn$_invoke$arity$1(G__17331),null,cljs.core.dissoc.call(null,G__17331,new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801),new cljs.core.Keyword(null,"render-data-fn","render-data-fn",-1862520485),new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496))));
});
antares.core.build_component = (function build_component(source_map){var component = antares.core.map__GT_Component.call(null,source_map);return component;
});
antares.core.bind_component = (function bind_component(component,app_cursor,dom_cursor){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),app_cursor,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),dom_cursor], null);
});
antares.core.cursor__GT_fn = (function cursor__GT_fn(cursor,update_fn){return cljs.core.swap_BANG_.call(null,antares.core.app_state,(function (state){return cljs.core.update_in.call(null,state,cursor,update_fn);
}));
});
antares.core.cursor__GT_value = (function cursor__GT_value(cursor,new_value){return cljs.core.swap_BANG_.call(null,antares.core.app_state,(function (app_value){return cljs.core.update_in.call(null,app_value,cursor,(function (old_value){return new_value;
}));
}));
});
antares.core.app_state__GT_value = (function app_state__GT_value(value){return cljs.core.reset_BANG_.call(null,antares.core.app_state,value);
});
antares.core.http_get = (function http_get(uri,options){return ajax.core.GET.call(null,uri,options);
});
antares.core.http_post = (function http_post(uri,options){return ajax.core.POST.call(null,uri,options);
});

//# sourceMappingURL=core.js.map