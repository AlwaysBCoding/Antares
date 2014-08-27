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
antares.core.cursor__GT_value = (function cursor__GT_value(cursor,new_value){return cljs.core.swap_BANG_.call(null,antares.core.app_state,(function (state){return cljs.core.update_in.call(null,state,cursor,(function (old_value){return new_value;
}));
}));
});
antares.core.cursor__GT_fn = (function cursor__GT_fn(cursor,update_fn){return cljs.core.swap_BANG_.call(null,antares.core.app_state,(function (state){return cljs.core.update_in.call(null,state,cursor,update_fn);
}));
});
antares.core.LifeCycle = (function (){var obj21817 = {};return obj21817;
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
antares.core.Registerable = (function (){var obj21819 = {};return obj21819;
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
antares.core.Renderable = (function (){var obj21821 = {};return obj21821;
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
antares.core.Mountable = (function (){var obj21823 = {};return obj21823;
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
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4141__auto__,k21825,else__4142__auto__){var self__ = this;
var this__4141__auto____$1 = this;var G__21827 = (((k21825 instanceof cljs.core.Keyword))?k21825.fqn:null);switch (G__21827) {
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
return cljs.core.get.call(null,self__.__extmap,k21825,else__4142__auto__);

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
var text_node_21832 = goog.dom.createTextNode(antares.core.render_css.call(null,self__$1));var style_node_21833 = goog.dom.createDom("style",text_node_21832);goog.dom.appendChild(document.querySelector("#antares-styles"),style_node_21833);
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
antares.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4146__auto__,k__4147__auto__,G__21824){var self__ = this;
var this__4146__auto____$1 = this;var pred__21828 = cljs.core.keyword_identical_QMARK_;var expr__21829 = k__4147__auto__;if(cljs.core.truth_(pred__21828.call(null,new cljs.core.Keyword(null,"ident","ident",-742346),expr__21829)))
{return (new antares.core.Component(G__21824,self__.render_fn,self__.css_data,self__.subcomponents,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__21828.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),expr__21829)))
{return (new antares.core.Component(self__.ident,G__21824,self__.css_data,self__.subcomponents,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__21828.call(null,new cljs.core.Keyword(null,"css-data","css-data",2133231584),expr__21829)))
{return (new antares.core.Component(self__.ident,self__.render_fn,G__21824,self__.subcomponents,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__21828.call(null,new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349),expr__21829)))
{return (new antares.core.Component(self__.ident,self__.render_fn,self__.css_data,G__21824,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.Component(self__.ident,self__.render_fn,self__.css_data,self__.subcomponents,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4147__auto__,G__21824),null));
}
}
}
}
});
antares.core.Component.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4151__auto__){var self__ = this;
var this__4151__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"css-data","css-data",2133231584),self__.css_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349),self__.subcomponents],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4138__auto__,G__21824){var self__ = this;
var this__4138__auto____$1 = this;return (new antares.core.Component(self__.ident,self__.render_fn,self__.css_data,self__.subcomponents,G__21824,self__.__extmap,self__.__hash));
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
antares.core.map__GT_Component = (function map__GT_Component(G__21826){return (new antares.core.Component(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(G__21826),new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(G__21826),new cljs.core.Keyword(null,"css-data","css-data",2133231584).cljs$core$IFn$_invoke$arity$1(G__21826),new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349).cljs$core$IFn$_invoke$arity$1(G__21826),null,cljs.core.dissoc.call(null,G__21826,new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Keyword(null,"css-data","css-data",2133231584),new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349))));
});
antares.core.component = (function component(source_map){var component__$1 = antares.core.map__GT_Component.call(null,source_map);antares.core.register_component.call(null,component__$1);
return component__$1;
});
antares.core.bind = (function bind(component,app_cursor,dom_cursor){var component_data = antares.core.initialize_state.call(null,component,app_cursor);antares.core.component_will_mount.call(null,component);
antares.core.mount_component.call(null,component,component_data,dom_cursor);
var seq__21838_21842 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349).cljs$core$IFn$_invoke$arity$1(component));var chunk__21839_21843 = null;var count__21840_21844 = (0);var i__21841_21845 = (0);while(true){
if((i__21841_21845 < count__21840_21844))
{var component_21846__$1 = cljs.core._nth.call(null,chunk__21839_21843,i__21841_21845);antares.core.component_did_mount.call(null,component_21846__$1,app_cursor,dom_cursor);
{
var G__21847 = seq__21838_21842;
var G__21848 = chunk__21839_21843;
var G__21849 = count__21840_21844;
var G__21850 = (i__21841_21845 + (1));
seq__21838_21842 = G__21847;
chunk__21839_21843 = G__21848;
count__21840_21844 = G__21849;
i__21841_21845 = G__21850;
continue;
}
} else
{var temp__4126__auto___21851 = cljs.core.seq.call(null,seq__21838_21842);if(temp__4126__auto___21851)
{var seq__21838_21852__$1 = temp__4126__auto___21851;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21838_21852__$1))
{var c__4309__auto___21853 = cljs.core.chunk_first.call(null,seq__21838_21852__$1);{
var G__21854 = cljs.core.chunk_rest.call(null,seq__21838_21852__$1);
var G__21855 = c__4309__auto___21853;
var G__21856 = cljs.core.count.call(null,c__4309__auto___21853);
var G__21857 = (0);
seq__21838_21842 = G__21854;
chunk__21839_21843 = G__21855;
count__21840_21844 = G__21856;
i__21841_21845 = G__21857;
continue;
}
} else
{var component_21858__$1 = cljs.core.first.call(null,seq__21838_21852__$1);antares.core.component_did_mount.call(null,component_21858__$1,app_cursor,dom_cursor);
{
var G__21859 = cljs.core.next.call(null,seq__21838_21852__$1);
var G__21860 = null;
var G__21861 = (0);
var G__21862 = (0);
seq__21838_21842 = G__21859;
chunk__21839_21843 = G__21860;
count__21840_21844 = G__21861;
i__21841_21845 = G__21862;
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
var root_node_21867 = document.querySelector("body");var seq__21863_21868 = cljs.core.seq.call(null,antares.core.event_list);var chunk__21864_21869 = null;var count__21865_21870 = (0);var i__21866_21871 = (0);while(true){
if((i__21866_21871 < count__21865_21870))
{var event_name_21872 = cljs.core._nth.call(null,chunk__21864_21869,i__21866_21871);goog.events.listen(root_node_21867,event_name_21872,((function (seq__21863_21868,chunk__21864_21869,count__21865_21870,i__21866_21871,event_name_21872,root_node_21867){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__21863_21868,chunk__21864_21869,count__21865_21870,i__21866_21871,event_name_21872,root_node_21867))
);
{
var G__21873 = seq__21863_21868;
var G__21874 = chunk__21864_21869;
var G__21875 = count__21865_21870;
var G__21876 = (i__21866_21871 + (1));
seq__21863_21868 = G__21873;
chunk__21864_21869 = G__21874;
count__21865_21870 = G__21875;
i__21866_21871 = G__21876;
continue;
}
} else
{var temp__4126__auto___21877 = cljs.core.seq.call(null,seq__21863_21868);if(temp__4126__auto___21877)
{var seq__21863_21878__$1 = temp__4126__auto___21877;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21863_21878__$1))
{var c__4309__auto___21879 = cljs.core.chunk_first.call(null,seq__21863_21878__$1);{
var G__21880 = cljs.core.chunk_rest.call(null,seq__21863_21878__$1);
var G__21881 = c__4309__auto___21879;
var G__21882 = cljs.core.count.call(null,c__4309__auto___21879);
var G__21883 = (0);
seq__21863_21868 = G__21880;
chunk__21864_21869 = G__21881;
count__21865_21870 = G__21882;
i__21866_21871 = G__21883;
continue;
}
} else
{var event_name_21884 = cljs.core.first.call(null,seq__21863_21878__$1);goog.events.listen(root_node_21867,event_name_21884,((function (seq__21863_21868,chunk__21864_21869,count__21865_21870,i__21866_21871,event_name_21884,seq__21863_21878__$1,temp__4126__auto___21877,root_node_21867){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__21863_21868,chunk__21864_21869,count__21865_21870,i__21866_21871,event_name_21884,seq__21863_21878__$1,temp__4126__auto___21877,root_node_21867))
);
{
var G__21885 = cljs.core.next.call(null,seq__21863_21878__$1);
var G__21886 = null;
var G__21887 = (0);
var G__21888 = (0);
seq__21863_21868 = G__21885;
chunk__21864_21869 = G__21886;
count__21865_21870 = G__21887;
i__21866_21871 = G__21888;
continue;
}
}
} else
{}
}
break;
}
antares.core.activate_event_loop = (function activate_event_loop(event_mappings,controller){var c__5906__auto___22005 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto___22005){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto___22005){
return (function (state_21961){var state_val_21962 = (state_21961[(1)]);if((state_val_21962 === (8)))
{var inst_21950 = (state_21961[(2)]);var inst_21951 = event_mappings.call(null,inst_21950);var state_21961__$1 = state_21961;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21961__$1,(7),antares.core.control_stream,inst_21951);
} else
{if((state_val_21962 === (7)))
{var inst_21953 = (state_21961[(2)]);var state_21961__$1 = (function (){var statearr_21963 = state_21961;(statearr_21963[(7)] = inst_21953);
return statearr_21963;
})();var statearr_21964_22006 = state_21961__$1;(statearr_21964_22006[(2)] = null);
(statearr_21964_22006[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21962 === (6)))
{var inst_21957 = (state_21961[(2)]);var state_21961__$1 = state_21961;var statearr_21965_22007 = state_21961__$1;(statearr_21965_22007[(2)] = inst_21957);
(statearr_21965_22007[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21962 === (5)))
{var state_21961__$1 = state_21961;var statearr_21966_22008 = state_21961__$1;(statearr_21966_22008[(2)] = null);
(statearr_21966_22008[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21962 === (4)))
{var state_21961__$1 = state_21961;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21961__$1,(8),antares.core.event_stream);
} else
{if((state_val_21962 === (3)))
{var inst_21959 = (state_21961[(2)]);var state_21961__$1 = state_21961;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21961__$1,inst_21959);
} else
{if((state_val_21962 === (2)))
{var state_21961__$1 = state_21961;var statearr_21967_22009 = state_21961__$1;(statearr_21967_22009[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21962 === (1)))
{var state_21961__$1 = state_21961;var statearr_21969_22010 = state_21961__$1;(statearr_21969_22010[(2)] = null);
(statearr_21969_22010[(1)] = (2));
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
});})(c__5906__auto___22005))
;return ((function (switch__5891__auto__,c__5906__auto___22005){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_21973 = [null,null,null,null,null,null,null,null];(statearr_21973[(0)] = state_machine__5892__auto__);
(statearr_21973[(1)] = (1));
return statearr_21973;
});
var state_machine__5892__auto____1 = (function (state_21961){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_21961);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e21974){if((e21974 instanceof Object))
{var ex__5895__auto__ = e21974;var statearr_21975_22011 = state_21961;(statearr_21975_22011[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21961);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21974;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22012 = state_21961;
state_21961 = G__22012;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_21961){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_21961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto___22005))
})();var state__5908__auto__ = (function (){var statearr_21976 = f__5907__auto__.call(null);(statearr_21976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto___22005);
return statearr_21976;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto___22005))
);
var c__5906__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto__){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto__){
return (function (state_21989){var state_val_21990 = (state_21989[(1)]);if((state_val_21990 === (7)))
{var inst_21980 = (state_21989[(2)]);var inst_21981 = controller.call(null,inst_21980);var state_21989__$1 = (function (){var statearr_21991 = state_21989;(statearr_21991[(7)] = inst_21981);
return statearr_21991;
})();var statearr_21992_22013 = state_21989__$1;(statearr_21992_22013[(2)] = null);
(statearr_21992_22013[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21990 === (6)))
{var inst_21985 = (state_21989[(2)]);var state_21989__$1 = state_21989;var statearr_21993_22014 = state_21989__$1;(statearr_21993_22014[(2)] = inst_21985);
(statearr_21993_22014[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21990 === (5)))
{var state_21989__$1 = state_21989;var statearr_21994_22015 = state_21989__$1;(statearr_21994_22015[(2)] = null);
(statearr_21994_22015[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21990 === (4)))
{var state_21989__$1 = state_21989;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21989__$1,(7),antares.core.control_stream);
} else
{if((state_val_21990 === (3)))
{var inst_21987 = (state_21989[(2)]);var state_21989__$1 = state_21989;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21989__$1,inst_21987);
} else
{if((state_val_21990 === (2)))
{var state_21989__$1 = state_21989;var statearr_21995_22016 = state_21989__$1;(statearr_21995_22016[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21990 === (1)))
{var state_21989__$1 = state_21989;var statearr_21997_22017 = state_21989__$1;(statearr_21997_22017[(2)] = null);
(statearr_21997_22017[(1)] = (2));
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
var state_machine__5892__auto____0 = (function (){var statearr_22001 = [null,null,null,null,null,null,null,null];(statearr_22001[(0)] = state_machine__5892__auto__);
(statearr_22001[(1)] = (1));
return statearr_22001;
});
var state_machine__5892__auto____1 = (function (state_21989){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_21989);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e22002){if((e22002 instanceof Object))
{var ex__5895__auto__ = e22002;var statearr_22003_22018 = state_21989;(statearr_22003_22018[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21989);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22002;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22019 = state_21989;
state_21989 = G__22019;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_21989){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_21989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto__))
})();var state__5908__auto__ = (function (){var statearr_22004 = f__5907__auto__.call(null);(statearr_22004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto__);
return statearr_22004;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto__))
);
return c__5906__auto__;
});
cljs.core.reset_BANG_.call(null,antares.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"template-editor","template-editor",1369101151),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-list","nav-list",-1143702338),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"Item 1",new cljs.core.Keyword(null,"content","content",15833224),"Content 1"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"Item 2",new cljs.core.Keyword(null,"content","content",15833224),"Content 2"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"Item 3",new cljs.core.Keyword(null,"content","content",15833224),"Content 3"], null)], null)], null),new cljs.core.Keyword(null,"code-editor","code-editor",1902143804),"(+ 1 2 3)"], null),new cljs.core.Keyword(null,"list-area","list-area",1480052289),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Item1","Item2","Item3"], null),new cljs.core.Keyword(null,"button-text","button-text",-1800441720),"Add Item"], null)], null));
antares.core.app_state_detective = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"app-state-detective","app-state-detective",644965859),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.pr_str.call(null,data)], null);
}),new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#app-state-detective","div#app-state-detective",377921233),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null)], null)], null)], null));
antares.core.registered_components_detective = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"registered-components-detective","registered-components-detective",-1591820821),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.registered-components","div.registered-components",-1242716479),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Registered Components"], null),(function (){var iter__4278__auto__ = (function iter__22021(s__22022){return (new cljs.core.LazySeq(null,(function (){var s__22022__$1 = s__22022;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22022__$1);if(temp__4126__auto__)
{var s__22022__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22022__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__22022__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__22024 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__22023 = (0);while(true){
if((i__22023 < size__4277__auto__))
{var component = cljs.core._nth.call(null,c__4276__auto__,i__22023);cljs.core.chunk_append.call(null,b__22024,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.call(null,component)], null));
{
var G__22025 = (i__22023 + (1));
i__22023 = G__22025;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22024),iter__22021.call(null,cljs.core.chunk_rest.call(null,s__22022__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22024),null);
}
} else
{var component = cljs.core.first.call(null,s__22022__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.call(null,component)], null),iter__22021.call(null,cljs.core.rest.call(null,s__22022__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,cljs.core.map.call(null,((function (iter__4278__auto__){
return (function (p1__22020_SHARP_){return new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(p1__22020_SHARP_);
});})(iter__4278__auto__))
,cljs.core.deref.call(null,antares.core.registered_components)));
})()], null);
})], null));
antares.core.mounted_components_detective = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"mounted-components-detective","mounted-components-detective",921283686),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mounted-components","div.mounted-components",1647675658),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Mounted Components"], null),(function (){var iter__4278__auto__ = (function iter__22027(s__22028){return (new cljs.core.LazySeq(null,(function (){var s__22028__$1 = s__22028;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22028__$1);if(temp__4126__auto__)
{var s__22028__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22028__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__22028__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__22030 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__22029 = (0);while(true){
if((i__22029 < size__4277__auto__))
{var component = cljs.core._nth.call(null,c__4276__auto__,i__22029);cljs.core.chunk_append.call(null,b__22030,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.call(null,component)], null));
{
var G__22031 = (i__22029 + (1));
i__22029 = G__22031;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22030),iter__22027.call(null,cljs.core.chunk_rest.call(null,s__22028__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22030),null);
}
} else
{var component = cljs.core.first.call(null,s__22028__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.call(null,component)], null),iter__22027.call(null,cljs.core.rest.call(null,s__22028__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,cljs.core.map.call(null,((function (iter__4278__auto__){
return (function (p1__22026_SHARP_){return new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(p1__22026_SHARP_);
});})(iter__4278__auto__))
,cljs.core.deref.call(null,antares.core.mounted_components)));
})()], null);
})], null));
cljs.core.add_watch.call(null,antares.core.app_state,new cljs.core.Keyword(null,"app-state-renderer","app-state-renderer",1865844920),(function (key,ref,old_value,new_value){return console.log(cljs.core.pr_str.call(null,new_value));
}));

//# sourceMappingURL=core.js.map