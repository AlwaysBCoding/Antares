// Compiled by ClojureScript 0.0-2311
goog.provide('antares.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('ajax.core');
goog.require('cljs.reader');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('hiccups.runtime');
goog.require('antares.repl');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('ajax.core');
goog.require('garden.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('antares.repl');
goog.require('goog.events');
goog.require('hiccups.runtime');
goog.require('garden.core');
antares.core.string__GT_data = (function string__GT_data(string){return cljs.reader.read_string.call(null,string);
});
antares.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
antares.core.registered_components = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
antares.core.mounted_components = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
antares.core.LifeCycle = (function (){var obj18464 = {};return obj18464;
})();
antares.core.initialize_state = (function initialize_state(self,app_cursor){if((function (){var and__3541__auto__ = self;if(and__3541__auto__)
{return self.antares$core$LifeCycle$initialize_state$arity$2;
} else
{return and__3541__auto__;
}
})())
{return self.antares$core$LifeCycle$initialize_state$arity$2(self,app_cursor);
} else
{var x__4180__auto__ = (((self == null))?null:self);return (function (){var or__3553__auto__ = (antares.core.initialize_state[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (antares.core.initialize_state["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"LifeCycle.initialize-state",self);
}
}
})().call(null,self,app_cursor);
}
});
antares.core.component_will_mount = (function component_will_mount(self){if((function (){var and__3541__auto__ = self;if(and__3541__auto__)
{return self.antares$core$LifeCycle$component_will_mount$arity$1;
} else
{return and__3541__auto__;
}
})())
{return self.antares$core$LifeCycle$component_will_mount$arity$1(self);
} else
{var x__4180__auto__ = (((self == null))?null:self);return (function (){var or__3553__auto__ = (antares.core.component_will_mount[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (antares.core.component_will_mount["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"LifeCycle.component-will-mount",self);
}
}
})().call(null,self);
}
});
antares.core.component_did_mount = (function component_did_mount(self,app_cursor,dom_cursor){if((function (){var and__3541__auto__ = self;if(and__3541__auto__)
{return self.antares$core$LifeCycle$component_did_mount$arity$3;
} else
{return and__3541__auto__;
}
})())
{return self.antares$core$LifeCycle$component_did_mount$arity$3(self,app_cursor,dom_cursor);
} else
{var x__4180__auto__ = (((self == null))?null:self);return (function (){var or__3553__auto__ = (antares.core.component_did_mount[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (antares.core.component_did_mount["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"LifeCycle.component-did-mount",self);
}
}
})().call(null,self,app_cursor,dom_cursor);
}
});
antares.core.component_will_update = (function component_will_update(self){if((function (){var and__3541__auto__ = self;if(and__3541__auto__)
{return self.antares$core$LifeCycle$component_will_update$arity$1;
} else
{return and__3541__auto__;
}
})())
{return self.antares$core$LifeCycle$component_will_update$arity$1(self);
} else
{var x__4180__auto__ = (((self == null))?null:self);return (function (){var or__3553__auto__ = (antares.core.component_will_update[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (antares.core.component_will_update["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"LifeCycle.component-will-update",self);
}
}
})().call(null,self);
}
});
antares.core.component_did_update = (function component_did_update(self){if((function (){var and__3541__auto__ = self;if(and__3541__auto__)
{return self.antares$core$LifeCycle$component_did_update$arity$1;
} else
{return and__3541__auto__;
}
})())
{return self.antares$core$LifeCycle$component_did_update$arity$1(self);
} else
{var x__4180__auto__ = (((self == null))?null:self);return (function (){var or__3553__auto__ = (antares.core.component_did_update[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (antares.core.component_did_update["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"LifeCycle.component-did-update",self);
}
}
})().call(null,self);
}
});
antares.core.component_will_unmount = (function component_will_unmount(self){if((function (){var and__3541__auto__ = self;if(and__3541__auto__)
{return self.antares$core$LifeCycle$component_will_unmount$arity$1;
} else
{return and__3541__auto__;
}
})())
{return self.antares$core$LifeCycle$component_will_unmount$arity$1(self);
} else
{var x__4180__auto__ = (((self == null))?null:self);return (function (){var or__3553__auto__ = (antares.core.component_will_unmount[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (antares.core.component_will_unmount["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"LifeCycle.component-will-unmount",self);
}
}
})().call(null,self);
}
});
antares.core.Registerable = (function (){var obj18466 = {};return obj18466;
})();
antares.core.register_component = (function register_component(self){if((function (){var and__3541__auto__ = self;if(and__3541__auto__)
{return self.antares$core$Registerable$register_component$arity$1;
} else
{return and__3541__auto__;
}
})())
{return self.antares$core$Registerable$register_component$arity$1(self);
} else
{var x__4180__auto__ = (((self == null))?null:self);return (function (){var or__3553__auto__ = (antares.core.register_component[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (antares.core.register_component["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Registerable.register-component",self);
}
}
})().call(null,self);
}
});
antares.core.Renderable = (function (){var obj18468 = {};return obj18468;
})();
antares.core.render_html = (function render_html(self,data){if((function (){var and__3541__auto__ = self;if(and__3541__auto__)
{return self.antares$core$Renderable$render_html$arity$2;
} else
{return and__3541__auto__;
}
})())
{return self.antares$core$Renderable$render_html$arity$2(self,data);
} else
{var x__4180__auto__ = (((self == null))?null:self);return (function (){var or__3553__auto__ = (antares.core.render_html[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (antares.core.render_html["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Renderable.render-html",self);
}
}
})().call(null,self,data);
}
});
antares.core.render_css = (function render_css(self){if((function (){var and__3541__auto__ = self;if(and__3541__auto__)
{return self.antares$core$Renderable$render_css$arity$1;
} else
{return and__3541__auto__;
}
})())
{return self.antares$core$Renderable$render_css$arity$1(self);
} else
{var x__4180__auto__ = (((self == null))?null:self);return (function (){var or__3553__auto__ = (antares.core.render_css[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (antares.core.render_css["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Renderable.render-css",self);
}
}
})().call(null,self);
}
});
antares.core.Mountable = (function (){var obj18470 = {};return obj18470;
})();
antares.core.mount_component = (function mount_component(self,component_data,dom_cursor){if((function (){var and__3541__auto__ = self;if(and__3541__auto__)
{return self.antares$core$Mountable$mount_component$arity$3;
} else
{return and__3541__auto__;
}
})())
{return self.antares$core$Mountable$mount_component$arity$3(self,component_data,dom_cursor);
} else
{var x__4180__auto__ = (((self == null))?null:self);return (function (){var or__3553__auto__ = (antares.core.mount_component[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (antares.core.mount_component["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mountable.mount-component",self);
}
}
})().call(null,self,component_data,dom_cursor);
}
});
antares.core.unmount_component = (function unmount_component(self){if((function (){var and__3541__auto__ = self;if(and__3541__auto__)
{return self.antares$core$Mountable$unmount_component$arity$1;
} else
{return and__3541__auto__;
}
})())
{return self.antares$core$Mountable$unmount_component$arity$1(self);
} else
{var x__4180__auto__ = (((self == null))?null:self);return (function (){var or__3553__auto__ = (antares.core.unmount_component[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (antares.core.unmount_component["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mountable.unmount-component",self);
}
}
})().call(null,self);
}
});

/**
* @constructor
* @param {*} ident
* @param {*} render_fn
* @param {*} css_data
* @param {*} subcomponents
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
antares.core.Component = (function (ident,render_fn,css_data,subcomponents,__meta,__extmap){
this.ident = ident;
this.render_fn = render_fn;
this.css_data = css_data;
this.subcomponents = subcomponents;
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
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4139__auto__,k__4140__auto__){var self__ = this;
var this__4139__auto____$1 = this;return cljs.core._lookup.call(null,this__4139__auto____$1,k__4140__auto__,null);
});
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4141__auto__,k18472,else__4142__auto__){var self__ = this;
var this__4141__auto____$1 = this;var G__18474 = (((k18472 instanceof cljs.core.Keyword))?k18472.fqn:null);switch (G__18474) {
case "subcomponents":
return self__.subcomponents;

break;
case "css-data":
return self__.css_data;

break;
case "render-fn":
return self__.render_fn;

break;
case "ident":
return self__.ident;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k18472,else__4142__auto__);

}
});
antares.core.Component.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4153__auto__,writer__4154__auto__,opts__4155__auto__){var self__ = this;
var this__4153__auto____$1 = this;var pr_pair__4156__auto__ = ((function (this__4153__auto____$1){
return (function (keyval__4157__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4154__auto__,cljs.core.pr_writer,""," ","",opts__4155__auto__,keyval__4157__auto__);
});})(this__4153__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4154__auto__,pr_pair__4156__auto__,"#antares.core.Component{",", ","}",opts__4155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"css-data","css-data",2133231584),self__.css_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349),self__.subcomponents],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4137__auto__){var self__ = this;
var this__4137__auto____$1 = this;return self__.__meta;
});
antares.core.Component.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4133__auto__){var self__ = this;
var this__4133__auto____$1 = this;return (new antares.core.Component(self__.ident,self__.render_fn,self__.css_data,self__.subcomponents,self__.__meta,self__.__extmap,self__.__hash));
});
antares.core.Component.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4143__auto__){var self__ = this;
var this__4143__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
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
antares.core.Component.prototype.antares$core$Registerable$ = true;
antares.core.Component.prototype.antares$core$Registerable$register_component$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return cljs.core.swap_BANG_.call(null,antares.core.registered_components,cljs.core.conj,self__$1);
});
antares.core.Component.prototype.antares$core$LifeCycle$ = true;
antares.core.Component.prototype.antares$core$LifeCycle$initialize_state$arity$2 = (function (self,app_cursor){var self__ = this;
var self__$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,antares.core.app_state),app_cursor);
});
antares.core.Component.prototype.antares$core$LifeCycle$component_will_mount$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return null;
});
antares.core.Component.prototype.antares$core$LifeCycle$component_did_mount$arity$3 = (function (self,app_cursor,dom_cursor){var self__ = this;
var self__$1 = this;var temp__4124__auto__ = new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518).cljs$core$IFn$_invoke$arity$1(self__$1);if(cljs.core.truth_(temp__4124__auto__))
{var component_did_mount_fn = temp__4124__auto__;return component_did_mount_fn.call(null,self__$1,app_cursor,dom_cursor);
} else
{return null;
}
});
antares.core.Component.prototype.antares$core$LifeCycle$component_will_update$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return null;
});
antares.core.Component.prototype.antares$core$LifeCycle$component_did_update$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return null;
});
antares.core.Component.prototype.antares$core$LifeCycle$component_will_unmount$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return null;
});
antares.core.Component.prototype.antares$core$Mountable$ = true;
antares.core.Component.prototype.antares$core$Mountable$mount_component$arity$3 = (function (self,component_data,dom_cursor){var self__ = this;
var self__$1 = this;goog.dom.appendChild(document.querySelector(dom_cursor),goog.dom.htmlToDocumentFragment(antares.core.render_html.call(null,self__$1,component_data)));
var text_node_18479 = goog.dom.createTextNode(antares.core.render_css.call(null,self__$1));var style_node_18480 = goog.dom.createDom("style",text_node_18479);goog.dom.appendChild(document.querySelector("#antares-styles"),style_node_18480);
return cljs.core.swap_BANG_.call(null,antares.core.mounted_components,cljs.core.conj,self__$1);
});
antares.core.Component.prototype.antares$core$Mountable$unmount_component$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return null;
});
antares.core.Component.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4148__auto__,k__4149__auto__){var self__ = this;
var this__4148__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"css-data","css-data",2133231584),null,new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349),null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),null,new cljs.core.Keyword(null,"ident","ident",-742346),null], null), null),k__4149__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4148__auto____$1),self__.__meta),k__4149__auto__);
} else
{return (new antares.core.Component(self__.ident,self__.render_fn,self__.css_data,self__.subcomponents,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4149__auto__)),null));
}
});
antares.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4146__auto__,k__4147__auto__,G__18471){var self__ = this;
var this__4146__auto____$1 = this;var pred__18475 = cljs.core.keyword_identical_QMARK_;var expr__18476 = k__4147__auto__;if(cljs.core.truth_(pred__18475.call(null,new cljs.core.Keyword(null,"ident","ident",-742346),expr__18476)))
{return (new antares.core.Component(G__18471,self__.render_fn,self__.css_data,self__.subcomponents,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__18475.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),expr__18476)))
{return (new antares.core.Component(self__.ident,G__18471,self__.css_data,self__.subcomponents,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__18475.call(null,new cljs.core.Keyword(null,"css-data","css-data",2133231584),expr__18476)))
{return (new antares.core.Component(self__.ident,self__.render_fn,G__18471,self__.subcomponents,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__18475.call(null,new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349),expr__18476)))
{return (new antares.core.Component(self__.ident,self__.render_fn,self__.css_data,G__18471,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.Component(self__.ident,self__.render_fn,self__.css_data,self__.subcomponents,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4147__auto__,G__18471),null));
}
}
}
}
});
antares.core.Component.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4151__auto__){var self__ = this;
var this__4151__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"css-data","css-data",2133231584),self__.css_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349),self__.subcomponents],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4138__auto__,G__18471){var self__ = this;
var this__4138__auto____$1 = this;return (new antares.core.Component(self__.ident,self__.render_fn,self__.css_data,self__.subcomponents,G__18471,self__.__extmap,self__.__hash));
});
antares.core.Component.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4144__auto__,entry__4145__auto__){var self__ = this;
var this__4144__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4145__auto__))
{return cljs.core._assoc.call(null,this__4144__auto____$1,cljs.core._nth.call(null,entry__4145__auto__,(0)),cljs.core._nth.call(null,entry__4145__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4144__auto____$1,entry__4145__auto__);
}
});
antares.core.Component.prototype.antares$core$Renderable$ = true;
antares.core.Component.prototype.antares$core$Renderable$render_html$arity$2 = (function (self,data){var self__ = this;
var self__$1 = this;var temp__4124__auto__ = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(self__$1);if(cljs.core.truth_(temp__4124__auto__))
{var render_fn__$1 = temp__4124__auto__;return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,render_fn__$1.call(null,data))));
} else
{return null;
}
});
antares.core.Component.prototype.antares$core$Renderable$render_css$arity$1 = (function (self){var self__ = this;
var self__$1 = this;var temp__4124__auto__ = new cljs.core.Keyword(null,"styles","styles",1954480375).cljs$core$IFn$_invoke$arity$1(self__$1);if(cljs.core.truth_(temp__4124__auto__))
{var css_data__$1 = temp__4124__auto__;return garden.core.css.call(null,css_data__$1);
} else
{return null;
}
});
antares.core.Component.cljs$lang$type = true;
antares.core.Component.cljs$lang$ctorPrSeq = (function (this__4173__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"antares.core/Component");
});
antares.core.Component.cljs$lang$ctorPrWriter = (function (this__4173__auto__,writer__4174__auto__){return cljs.core._write.call(null,writer__4174__auto__,"antares.core/Component");
});
antares.core.__GT_Component = (function __GT_Component(ident,render_fn,css_data,subcomponents){return (new antares.core.Component(ident,render_fn,css_data,subcomponents));
});
antares.core.map__GT_Component = (function map__GT_Component(G__18473){return (new antares.core.Component(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(G__18473),new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(G__18473),new cljs.core.Keyword(null,"css-data","css-data",2133231584).cljs$core$IFn$_invoke$arity$1(G__18473),new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349).cljs$core$IFn$_invoke$arity$1(G__18473),null,cljs.core.dissoc.call(null,G__18473,new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Keyword(null,"css-data","css-data",2133231584),new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349))));
});
antares.core.component = (function component(source_map){var component__$1 = antares.core.map__GT_Component.call(null,source_map);antares.core.register_component.call(null,component__$1);
return component__$1;
});
antares.core.bind = (function bind(component,app_cursor,dom_cursor){var component_data = antares.core.initialize_state.call(null,component,app_cursor);antares.core.component_will_mount.call(null,component);
antares.core.mount_component.call(null,component,component_data,dom_cursor);
var seq__18485_18489 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349).cljs$core$IFn$_invoke$arity$1(component));var chunk__18486_18490 = null;var count__18487_18491 = (0);var i__18488_18492 = (0);while(true){
if((i__18488_18492 < count__18487_18491))
{var component_18493__$1 = cljs.core._nth.call(null,chunk__18486_18490,i__18488_18492);antares.core.component_did_mount.call(null,component_18493__$1,app_cursor,dom_cursor);
{
var G__18494 = seq__18485_18489;
var G__18495 = chunk__18486_18490;
var G__18496 = count__18487_18491;
var G__18497 = (i__18488_18492 + (1));
seq__18485_18489 = G__18494;
chunk__18486_18490 = G__18495;
count__18487_18491 = G__18496;
i__18488_18492 = G__18497;
continue;
}
} else
{var temp__4126__auto___18498 = cljs.core.seq.call(null,seq__18485_18489);if(temp__4126__auto___18498)
{var seq__18485_18499__$1 = temp__4126__auto___18498;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18485_18499__$1))
{var c__4309__auto___18500 = cljs.core.chunk_first.call(null,seq__18485_18499__$1);{
var G__18501 = cljs.core.chunk_rest.call(null,seq__18485_18499__$1);
var G__18502 = c__4309__auto___18500;
var G__18503 = cljs.core.count.call(null,c__4309__auto___18500);
var G__18504 = (0);
seq__18485_18489 = G__18501;
chunk__18486_18490 = G__18502;
count__18487_18491 = G__18503;
i__18488_18492 = G__18504;
continue;
}
} else
{var component_18505__$1 = cljs.core.first.call(null,seq__18485_18499__$1);antares.core.component_did_mount.call(null,component_18505__$1,app_cursor,dom_cursor);
{
var G__18506 = cljs.core.next.call(null,seq__18485_18499__$1);
var G__18507 = null;
var G__18508 = (0);
var G__18509 = (0);
seq__18485_18489 = G__18506;
chunk__18486_18490 = G__18507;
count__18487_18491 = G__18508;
i__18488_18492 = G__18509;
continue;
}
}
} else
{}
}
break;
}
return antares.core.component_did_mount.call(null,component,app_cursor,dom_cursor);
});
antares.core.event_list = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["click","keydown"], null);
antares.core.event_stream = cljs.core.async.chan.call(null);
antares.core.control_stream = cljs.core.async.chan.call(null);
var root_node_18514 = document.querySelector("body");var seq__18510_18515 = cljs.core.seq.call(null,antares.core.event_list);var chunk__18511_18516 = null;var count__18512_18517 = (0);var i__18513_18518 = (0);while(true){
if((i__18513_18518 < count__18512_18517))
{var event_name_18519 = cljs.core._nth.call(null,chunk__18511_18516,i__18513_18518);goog.events.listen(root_node_18514,event_name_18519,((function (seq__18510_18515,chunk__18511_18516,count__18512_18517,i__18513_18518,event_name_18519,root_node_18514){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__18510_18515,chunk__18511_18516,count__18512_18517,i__18513_18518,event_name_18519,root_node_18514))
);
{
var G__18520 = seq__18510_18515;
var G__18521 = chunk__18511_18516;
var G__18522 = count__18512_18517;
var G__18523 = (i__18513_18518 + (1));
seq__18510_18515 = G__18520;
chunk__18511_18516 = G__18521;
count__18512_18517 = G__18522;
i__18513_18518 = G__18523;
continue;
}
} else
{var temp__4126__auto___18524 = cljs.core.seq.call(null,seq__18510_18515);if(temp__4126__auto___18524)
{var seq__18510_18525__$1 = temp__4126__auto___18524;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18510_18525__$1))
{var c__4309__auto___18526 = cljs.core.chunk_first.call(null,seq__18510_18525__$1);{
var G__18527 = cljs.core.chunk_rest.call(null,seq__18510_18525__$1);
var G__18528 = c__4309__auto___18526;
var G__18529 = cljs.core.count.call(null,c__4309__auto___18526);
var G__18530 = (0);
seq__18510_18515 = G__18527;
chunk__18511_18516 = G__18528;
count__18512_18517 = G__18529;
i__18513_18518 = G__18530;
continue;
}
} else
{var event_name_18531 = cljs.core.first.call(null,seq__18510_18525__$1);goog.events.listen(root_node_18514,event_name_18531,((function (seq__18510_18515,chunk__18511_18516,count__18512_18517,i__18513_18518,event_name_18531,seq__18510_18525__$1,temp__4126__auto___18524,root_node_18514){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__18510_18515,chunk__18511_18516,count__18512_18517,i__18513_18518,event_name_18531,seq__18510_18525__$1,temp__4126__auto___18524,root_node_18514))
);
{
var G__18532 = cljs.core.next.call(null,seq__18510_18525__$1);
var G__18533 = null;
var G__18534 = (0);
var G__18535 = (0);
seq__18510_18515 = G__18532;
chunk__18511_18516 = G__18533;
count__18512_18517 = G__18534;
i__18513_18518 = G__18535;
continue;
}
}
} else
{}
}
break;
}
antares.core.activate_event_loop = (function activate_event_loop(event_mappings,controller){var c__5906__auto___18652 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto___18652){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto___18652){
return (function (state_18608){var state_val_18609 = (state_18608[(1)]);if((state_val_18609 === (8)))
{var inst_18597 = (state_18608[(2)]);var inst_18598 = event_mappings.call(null,inst_18597);var state_18608__$1 = state_18608;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18608__$1,(7),antares.core.control_stream,inst_18598);
} else
{if((state_val_18609 === (7)))
{var inst_18600 = (state_18608[(2)]);var state_18608__$1 = (function (){var statearr_18610 = state_18608;(statearr_18610[(7)] = inst_18600);
return statearr_18610;
})();var statearr_18611_18653 = state_18608__$1;(statearr_18611_18653[(2)] = null);
(statearr_18611_18653[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18609 === (6)))
{var inst_18604 = (state_18608[(2)]);var state_18608__$1 = state_18608;var statearr_18612_18654 = state_18608__$1;(statearr_18612_18654[(2)] = inst_18604);
(statearr_18612_18654[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18609 === (5)))
{var state_18608__$1 = state_18608;var statearr_18613_18655 = state_18608__$1;(statearr_18613_18655[(2)] = null);
(statearr_18613_18655[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18609 === (4)))
{var state_18608__$1 = state_18608;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18608__$1,(8),antares.core.event_stream);
} else
{if((state_val_18609 === (3)))
{var inst_18606 = (state_18608[(2)]);var state_18608__$1 = state_18608;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18608__$1,inst_18606);
} else
{if((state_val_18609 === (2)))
{var state_18608__$1 = state_18608;var statearr_18614_18656 = state_18608__$1;(statearr_18614_18656[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18609 === (1)))
{var state_18608__$1 = state_18608;var statearr_18616_18657 = state_18608__$1;(statearr_18616_18657[(2)] = null);
(statearr_18616_18657[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
});})(c__5906__auto___18652))
;return ((function (switch__5891__auto__,c__5906__auto___18652){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_18620 = [null,null,null,null,null,null,null,null];(statearr_18620[(0)] = state_machine__5892__auto__);
(statearr_18620[(1)] = (1));
return statearr_18620;
});
var state_machine__5892__auto____1 = (function (state_18608){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_18608);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e18621){if((e18621 instanceof Object))
{var ex__5895__auto__ = e18621;var statearr_18622_18658 = state_18608;(statearr_18622_18658[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18608);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18621;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18659 = state_18608;
state_18608 = G__18659;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_18608){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_18608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto___18652))
})();var state__5908__auto__ = (function (){var statearr_18623 = f__5907__auto__.call(null);(statearr_18623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto___18652);
return statearr_18623;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto___18652))
);
var c__5906__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto__){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto__){
return (function (state_18636){var state_val_18637 = (state_18636[(1)]);if((state_val_18637 === (7)))
{var inst_18627 = (state_18636[(2)]);var inst_18628 = controller.call(null,inst_18627);var state_18636__$1 = (function (){var statearr_18638 = state_18636;(statearr_18638[(7)] = inst_18628);
return statearr_18638;
})();var statearr_18639_18660 = state_18636__$1;(statearr_18639_18660[(2)] = null);
(statearr_18639_18660[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18637 === (6)))
{var inst_18632 = (state_18636[(2)]);var state_18636__$1 = state_18636;var statearr_18640_18661 = state_18636__$1;(statearr_18640_18661[(2)] = inst_18632);
(statearr_18640_18661[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18637 === (5)))
{var state_18636__$1 = state_18636;var statearr_18641_18662 = state_18636__$1;(statearr_18641_18662[(2)] = null);
(statearr_18641_18662[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18637 === (4)))
{var state_18636__$1 = state_18636;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18636__$1,(7),antares.core.control_stream);
} else
{if((state_val_18637 === (3)))
{var inst_18634 = (state_18636[(2)]);var state_18636__$1 = state_18636;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18636__$1,inst_18634);
} else
{if((state_val_18637 === (2)))
{var state_18636__$1 = state_18636;var statearr_18642_18663 = state_18636__$1;(statearr_18642_18663[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18637 === (1)))
{var state_18636__$1 = state_18636;var statearr_18644_18664 = state_18636__$1;(statearr_18644_18664[(2)] = null);
(statearr_18644_18664[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__5906__auto__))
;return ((function (switch__5891__auto__,c__5906__auto__){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_18648 = [null,null,null,null,null,null,null,null];(statearr_18648[(0)] = state_machine__5892__auto__);
(statearr_18648[(1)] = (1));
return statearr_18648;
});
var state_machine__5892__auto____1 = (function (state_18636){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_18636);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e18649){if((e18649 instanceof Object))
{var ex__5895__auto__ = e18649;var statearr_18650_18665 = state_18636;(statearr_18650_18665[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18636);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18649;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18666 = state_18636;
state_18636 = G__18666;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_18636){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_18636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto__))
})();var state__5908__auto__ = (function (){var statearr_18651 = f__5907__auto__.call(null);(statearr_18651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto__);
return statearr_18651;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto__))
);
return c__5906__auto__;
});
cljs.core.reset_BANG_.call(null,antares.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"template-editor","template-editor",1369101151),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-list","nav-list",-1143702338),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"Item 1",new cljs.core.Keyword(null,"content","content",15833224),"Content 1"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"Item 2",new cljs.core.Keyword(null,"content","content",15833224),"Content 2"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"Item 3",new cljs.core.Keyword(null,"content","content",15833224),"Content 3"], null)], null)], null),new cljs.core.Keyword(null,"code-editor","code-editor",1902143804),"(+ 1 2 3)"], null)], null));
antares.core.app_state_detective = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"app-state-detective","app-state-detective",644965859),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.pr_str.call(null,data)], null);
}),new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#app-state-detective","div#app-state-detective",377921233),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null)], null)], null)], null));
antares.core.registered_components_detective = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"registered-components-detective","registered-components-detective",-1591820821),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.registered-components","div.registered-components",-1242716479),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Registered Components"], null),(function (){var iter__4278__auto__ = (function iter__18668(s__18669){return (new cljs.core.LazySeq(null,(function (){var s__18669__$1 = s__18669;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18669__$1);if(temp__4126__auto__)
{var s__18669__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18669__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__18669__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__18671 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__18670 = (0);while(true){
if((i__18670 < size__4277__auto__))
{var component = cljs.core._nth.call(null,c__4276__auto__,i__18670);cljs.core.chunk_append.call(null,b__18671,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.call(null,component)], null));
{
var G__18672 = (i__18670 + (1));
i__18670 = G__18672;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18671),iter__18668.call(null,cljs.core.chunk_rest.call(null,s__18669__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18671),null);
}
} else
{var component = cljs.core.first.call(null,s__18669__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.call(null,component)], null),iter__18668.call(null,cljs.core.rest.call(null,s__18669__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,cljs.core.map.call(null,((function (iter__4278__auto__){
return (function (p1__18667_SHARP_){return new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(p1__18667_SHARP_);
});})(iter__4278__auto__))
,cljs.core.deref.call(null,antares.core.registered_components)));
})()], null);
})], null));
antares.core.mounted_components_detective = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"mounted-components-detective","mounted-components-detective",921283686),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mounted-components","div.mounted-components",1647675658),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Mounted Components"], null),(function (){var iter__4278__auto__ = (function iter__18674(s__18675){return (new cljs.core.LazySeq(null,(function (){var s__18675__$1 = s__18675;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18675__$1);if(temp__4126__auto__)
{var s__18675__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18675__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__18675__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__18677 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__18676 = (0);while(true){
if((i__18676 < size__4277__auto__))
{var component = cljs.core._nth.call(null,c__4276__auto__,i__18676);cljs.core.chunk_append.call(null,b__18677,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.call(null,component)], null));
{
var G__18678 = (i__18676 + (1));
i__18676 = G__18678;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18677),iter__18674.call(null,cljs.core.chunk_rest.call(null,s__18675__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18677),null);
}
} else
{var component = cljs.core.first.call(null,s__18675__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.call(null,component)], null),iter__18674.call(null,cljs.core.rest.call(null,s__18675__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,cljs.core.map.call(null,((function (iter__4278__auto__){
return (function (p1__18673_SHARP_){return new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(p1__18673_SHARP_);
});})(iter__4278__auto__))
,cljs.core.deref.call(null,antares.core.mounted_components)));
})()], null);
})], null));

//# sourceMappingURL=core.js.map