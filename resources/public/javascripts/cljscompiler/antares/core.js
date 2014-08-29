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
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('ajax.core');
goog.require('garden.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('hiccups.runtime');
goog.require('garden.core');
antares.core.string__GT_data = (function string__GT_data(string){return cljs.reader.read_string.call(null,string);
});
antares.core.has_class_QMARK_ = (function has_class_QMARK_(node,class_name){return node.classList.contains(class_name);
});
antares.core.has_id_QMARK_ = (function has_id_QMARK_(node,id){return cljs.core._EQ_.call(null,node.id,id);
});
antares.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
antares.core.registered_components = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
antares.core.cursor__GT_value = (function cursor__GT_value(cursor,new_value){return cljs.core.swap_BANG_.call(null,antares.core.app_state,(function (state){return cljs.core.update_in.call(null,state,cursor,(function (old_value){return new_value;
}));
}));
});
antares.core.cursor__GT_fn = (function cursor__GT_fn(cursor,update_fn){return cljs.core.swap_BANG_.call(null,antares.core.app_state,(function (state){return cljs.core.update_in.call(null,state,cursor,update_fn);
}));
});
antares.core.reset_state = (function reset_state(new_state){return cljs.core.reset_BANG_.call(null,antares.core.app_state,antares.core.string__GT_data.call(null,new_state));
});
antares.core.LifeCycle = (function (){var obj24213 = {};return obj24213;
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
antares.core.Registerable = (function (){var obj24215 = {};return obj24215;
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
antares.core.Renderable = (function (){var obj24217 = {};return obj24217;
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
antares.core.Mountable = (function (){var obj24219 = {};return obj24219;
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
* @param {*} render
* @param {*} style
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
antares.core.Component = (function (ident,render,style,__meta,__extmap){
this.ident = ident;
this.render = render;
this.style = style;
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
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4139__auto__,k__4140__auto__){var self__ = this;
var this__4139__auto____$1 = this;return cljs.core._lookup.call(null,this__4139__auto____$1,k__4140__auto__,null);
});
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4141__auto__,k24221,else__4142__auto__){var self__ = this;
var this__4141__auto____$1 = this;var G__24223 = (((k24221 instanceof cljs.core.Keyword))?k24221.fqn:null);switch (G__24223) {
case "style":
return self__.style;

break;
case "render":
return self__.render;

break;
case "ident":
return self__.ident;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24221,else__4142__auto__);

}
});
antares.core.Component.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4153__auto__,writer__4154__auto__,opts__4155__auto__){var self__ = this;
var this__4153__auto____$1 = this;var pr_pair__4156__auto__ = ((function (this__4153__auto____$1){
return (function (keyval__4157__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4154__auto__,cljs.core.pr_writer,""," ","",opts__4155__auto__,keyval__4157__auto__);
});})(this__4153__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4154__auto__,pr_pair__4156__auto__,"#antares.core.Component{",", ","}",opts__4155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render","render",-1408033454),self__.render],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",-496642736),self__.style],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4137__auto__){var self__ = this;
var this__4137__auto____$1 = this;return self__.__meta;
});
antares.core.Component.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4133__auto__){var self__ = this;
var this__4133__auto____$1 = this;return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.__meta,self__.__extmap,self__.__hash));
});
antares.core.Component.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4143__auto__){var self__ = this;
var this__4143__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
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
var self__$1 = this;var temp__4124__auto__ = new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566).cljs$core$IFn$_invoke$arity$1(self__$1);if(cljs.core.truth_(temp__4124__auto__))
{var component_will_update_fn = temp__4124__auto__;return component_will_update_fn.call(null,self__$1);
} else
{return null;
}
});
antares.core.Component.prototype.antares$core$LifeCycle$component_did_update$arity$1 = (function (self){var self__ = this;
var self__$1 = this;var temp__4124__auto__ = new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173).cljs$core$IFn$_invoke$arity$1(self__$1);if(cljs.core.truth_(temp__4124__auto__))
{var component_did_update_fn = temp__4124__auto__;return component_did_update_fn.call(null,self__$1);
} else
{return null;
}
});
antares.core.Component.prototype.antares$core$LifeCycle$component_will_unmount$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return null;
});
antares.core.Component.prototype.antares$core$Mountable$ = true;
antares.core.Component.prototype.antares$core$Mountable$mount_component$arity$3 = (function (self,component_data,dom_cursor){var self__ = this;
var self__$1 = this;goog.dom.appendChild(document.querySelector(dom_cursor),goog.dom.htmlToDocumentFragment(antares.core.render_html.call(null,self__$1,component_data)));
var text_node = goog.dom.createTextNode(antares.core.render_css.call(null,self__$1));var style_node = goog.dom.createDom("style",text_node);return goog.dom.appendChild(document.querySelector("#antares-styles"),style_node);
});
antares.core.Component.prototype.antares$core$Mountable$unmount_component$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return null;
});
antares.core.Component.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4148__auto__,k__4149__auto__){var self__ = this;
var this__4148__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),null,new cljs.core.Keyword(null,"render","render",-1408033454),null,new cljs.core.Keyword(null,"ident","ident",-742346),null], null), null),k__4149__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4148__auto____$1),self__.__meta),k__4149__auto__);
} else
{return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4149__auto__)),null));
}
});
antares.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4146__auto__,k__4147__auto__,G__24220){var self__ = this;
var this__4146__auto____$1 = this;var pred__24224 = cljs.core.keyword_identical_QMARK_;var expr__24225 = k__4147__auto__;if(cljs.core.truth_(pred__24224.call(null,new cljs.core.Keyword(null,"ident","ident",-742346),expr__24225)))
{return (new antares.core.Component(G__24220,self__.render,self__.style,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__24224.call(null,new cljs.core.Keyword(null,"render","render",-1408033454),expr__24225)))
{return (new antares.core.Component(self__.ident,G__24220,self__.style,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__24224.call(null,new cljs.core.Keyword(null,"style","style",-496642736),expr__24225)))
{return (new antares.core.Component(self__.ident,self__.render,G__24220,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4147__auto__,G__24220),null));
}
}
}
});
antares.core.Component.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4151__auto__){var self__ = this;
var this__4151__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render","render",-1408033454),self__.render],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",-496642736),self__.style],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4138__auto__,G__24220){var self__ = this;
var this__4138__auto____$1 = this;return (new antares.core.Component(self__.ident,self__.render,self__.style,G__24220,self__.__extmap,self__.__hash));
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
{var render_fn = temp__4124__auto__;return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,render_fn.call(null,data))));
} else
{return null;
}
});
antares.core.Component.prototype.antares$core$Renderable$render_css$arity$1 = (function (self){var self__ = this;
var self__$1 = this;var temp__4124__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(self__$1);if(cljs.core.truth_(temp__4124__auto__))
{var css_data = temp__4124__auto__;return garden.core.css.call(null,css_data);
} else
{return null;
}
});
antares.core.Component.cljs$lang$type = true;
antares.core.Component.cljs$lang$ctorPrSeq = (function (this__4173__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"antares.core/Component");
});
antares.core.Component.cljs$lang$ctorPrWriter = (function (this__4173__auto__,writer__4174__auto__){return cljs.core._write.call(null,writer__4174__auto__,"antares.core/Component");
});
antares.core.__GT_Component = (function __GT_Component(ident,render,style){return (new antares.core.Component(ident,render,style));
});
antares.core.map__GT_Component = (function map__GT_Component(G__24222){return (new antares.core.Component(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(G__24222),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(G__24222),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(G__24222),null,cljs.core.dissoc.call(null,G__24222,new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"style","style",-496642736))));
});
antares.core.component = (function component(source_map){var component__$1 = antares.core.map__GT_Component.call(null,source_map);antares.core.register_component.call(null,component__$1);
return component__$1;
});
antares.core.bind = (function bind(component,app_cursor,dom_cursor){var component_data = antares.core.initialize_state.call(null,component,app_cursor);antares.core.component_will_mount.call(null,component);
antares.core.mount_component.call(null,component,component_data,dom_cursor);
var seq__24232_24236 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__24233_24237 = null;var count__24234_24238 = (0);var i__24235_24239 = (0);while(true){
if((i__24235_24239 < count__24234_24238))
{var component_24240__$1 = cljs.core._nth.call(null,chunk__24233_24237,i__24235_24239);antares.core.component_did_update.call(null,component_24240__$1);
{
var G__24241 = seq__24232_24236;
var G__24242 = chunk__24233_24237;
var G__24243 = count__24234_24238;
var G__24244 = (i__24235_24239 + (1));
seq__24232_24236 = G__24241;
chunk__24233_24237 = G__24242;
count__24234_24238 = G__24243;
i__24235_24239 = G__24244;
continue;
}
} else
{var temp__4126__auto___24245 = cljs.core.seq.call(null,seq__24232_24236);if(temp__4126__auto___24245)
{var seq__24232_24246__$1 = temp__4126__auto___24245;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24232_24246__$1))
{var c__4309__auto___24247 = cljs.core.chunk_first.call(null,seq__24232_24246__$1);{
var G__24248 = cljs.core.chunk_rest.call(null,seq__24232_24246__$1);
var G__24249 = c__4309__auto___24247;
var G__24250 = cljs.core.count.call(null,c__4309__auto___24247);
var G__24251 = (0);
seq__24232_24236 = G__24248;
chunk__24233_24237 = G__24249;
count__24234_24238 = G__24250;
i__24235_24239 = G__24251;
continue;
}
} else
{var component_24252__$1 = cljs.core.first.call(null,seq__24232_24246__$1);antares.core.component_did_update.call(null,component_24252__$1);
{
var G__24253 = cljs.core.next.call(null,seq__24232_24246__$1);
var G__24254 = null;
var G__24255 = (0);
var G__24256 = (0);
seq__24232_24236 = G__24253;
chunk__24233_24237 = G__24254;
count__24234_24238 = G__24255;
i__24235_24239 = G__24256;
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
antares.core.event_list = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["click","keydown","focusout"], null);
antares.core.event_stream = cljs.core.async.chan.call(null);
antares.core.control_stream = cljs.core.async.chan.call(null);
var root_node_24261 = document.querySelector("body");var seq__24257_24262 = cljs.core.seq.call(null,antares.core.event_list);var chunk__24258_24263 = null;var count__24259_24264 = (0);var i__24260_24265 = (0);while(true){
if((i__24260_24265 < count__24259_24264))
{var event_name_24266 = cljs.core._nth.call(null,chunk__24258_24263,i__24260_24265);goog.events.listen(root_node_24261,event_name_24266,((function (seq__24257_24262,chunk__24258_24263,count__24259_24264,i__24260_24265,event_name_24266,root_node_24261){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__24257_24262,chunk__24258_24263,count__24259_24264,i__24260_24265,event_name_24266,root_node_24261))
);
{
var G__24267 = seq__24257_24262;
var G__24268 = chunk__24258_24263;
var G__24269 = count__24259_24264;
var G__24270 = (i__24260_24265 + (1));
seq__24257_24262 = G__24267;
chunk__24258_24263 = G__24268;
count__24259_24264 = G__24269;
i__24260_24265 = G__24270;
continue;
}
} else
{var temp__4126__auto___24271 = cljs.core.seq.call(null,seq__24257_24262);if(temp__4126__auto___24271)
{var seq__24257_24272__$1 = temp__4126__auto___24271;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24257_24272__$1))
{var c__4309__auto___24273 = cljs.core.chunk_first.call(null,seq__24257_24272__$1);{
var G__24274 = cljs.core.chunk_rest.call(null,seq__24257_24272__$1);
var G__24275 = c__4309__auto___24273;
var G__24276 = cljs.core.count.call(null,c__4309__auto___24273);
var G__24277 = (0);
seq__24257_24262 = G__24274;
chunk__24258_24263 = G__24275;
count__24259_24264 = G__24276;
i__24260_24265 = G__24277;
continue;
}
} else
{var event_name_24278 = cljs.core.first.call(null,seq__24257_24272__$1);goog.events.listen(root_node_24261,event_name_24278,((function (seq__24257_24262,chunk__24258_24263,count__24259_24264,i__24260_24265,event_name_24278,seq__24257_24272__$1,temp__4126__auto___24271,root_node_24261){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__24257_24262,chunk__24258_24263,count__24259_24264,i__24260_24265,event_name_24278,seq__24257_24272__$1,temp__4126__auto___24271,root_node_24261))
);
{
var G__24279 = cljs.core.next.call(null,seq__24257_24272__$1);
var G__24280 = null;
var G__24281 = (0);
var G__24282 = (0);
seq__24257_24262 = G__24279;
chunk__24258_24263 = G__24280;
count__24259_24264 = G__24281;
i__24260_24265 = G__24282;
continue;
}
}
} else
{}
}
break;
}
antares.core.event_loop = (function event_loop(event_mappings,controller){var c__5906__auto___24399 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto___24399){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto___24399){
return (function (state_24355){var state_val_24356 = (state_24355[(1)]);if((state_val_24356 === (8)))
{var inst_24344 = (state_24355[(2)]);var inst_24345 = event_mappings.call(null,inst_24344);var state_24355__$1 = state_24355;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24355__$1,(7),antares.core.control_stream,inst_24345);
} else
{if((state_val_24356 === (7)))
{var inst_24347 = (state_24355[(2)]);var state_24355__$1 = (function (){var statearr_24357 = state_24355;(statearr_24357[(7)] = inst_24347);
return statearr_24357;
})();var statearr_24358_24400 = state_24355__$1;(statearr_24358_24400[(2)] = null);
(statearr_24358_24400[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24356 === (6)))
{var inst_24351 = (state_24355[(2)]);var state_24355__$1 = state_24355;var statearr_24359_24401 = state_24355__$1;(statearr_24359_24401[(2)] = inst_24351);
(statearr_24359_24401[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24356 === (5)))
{var state_24355__$1 = state_24355;var statearr_24360_24402 = state_24355__$1;(statearr_24360_24402[(2)] = null);
(statearr_24360_24402[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24356 === (4)))
{var state_24355__$1 = state_24355;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24355__$1,(8),antares.core.event_stream);
} else
{if((state_val_24356 === (3)))
{var inst_24353 = (state_24355[(2)]);var state_24355__$1 = state_24355;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24355__$1,inst_24353);
} else
{if((state_val_24356 === (2)))
{var state_24355__$1 = state_24355;var statearr_24361_24403 = state_24355__$1;(statearr_24361_24403[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24356 === (1)))
{var state_24355__$1 = state_24355;var statearr_24363_24404 = state_24355__$1;(statearr_24363_24404[(2)] = null);
(statearr_24363_24404[(1)] = (2));
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
});})(c__5906__auto___24399))
;return ((function (switch__5891__auto__,c__5906__auto___24399){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_24367 = [null,null,null,null,null,null,null,null];(statearr_24367[(0)] = state_machine__5892__auto__);
(statearr_24367[(1)] = (1));
return statearr_24367;
});
var state_machine__5892__auto____1 = (function (state_24355){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_24355);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e24368){if((e24368 instanceof Object))
{var ex__5895__auto__ = e24368;var statearr_24369_24405 = state_24355;(statearr_24369_24405[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24355);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24368;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24406 = state_24355;
state_24355 = G__24406;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_24355){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_24355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto___24399))
})();var state__5908__auto__ = (function (){var statearr_24370 = f__5907__auto__.call(null);(statearr_24370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto___24399);
return statearr_24370;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto___24399))
);
var c__5906__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto__){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto__){
return (function (state_24383){var state_val_24384 = (state_24383[(1)]);if((state_val_24384 === (7)))
{var inst_24374 = (state_24383[(2)]);var inst_24375 = controller.call(null,inst_24374);var state_24383__$1 = (function (){var statearr_24385 = state_24383;(statearr_24385[(7)] = inst_24375);
return statearr_24385;
})();var statearr_24386_24407 = state_24383__$1;(statearr_24386_24407[(2)] = null);
(statearr_24386_24407[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24384 === (6)))
{var inst_24379 = (state_24383[(2)]);var state_24383__$1 = state_24383;var statearr_24387_24408 = state_24383__$1;(statearr_24387_24408[(2)] = inst_24379);
(statearr_24387_24408[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24384 === (5)))
{var state_24383__$1 = state_24383;var statearr_24388_24409 = state_24383__$1;(statearr_24388_24409[(2)] = null);
(statearr_24388_24409[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24384 === (4)))
{var state_24383__$1 = state_24383;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24383__$1,(7),antares.core.control_stream);
} else
{if((state_val_24384 === (3)))
{var inst_24381 = (state_24383[(2)]);var state_24383__$1 = state_24383;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24383__$1,inst_24381);
} else
{if((state_val_24384 === (2)))
{var state_24383__$1 = state_24383;var statearr_24389_24410 = state_24383__$1;(statearr_24389_24410[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24384 === (1)))
{var state_24383__$1 = state_24383;var statearr_24391_24411 = state_24383__$1;(statearr_24391_24411[(2)] = null);
(statearr_24391_24411[(1)] = (2));
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
var state_machine__5892__auto____0 = (function (){var statearr_24395 = [null,null,null,null,null,null,null,null];(statearr_24395[(0)] = state_machine__5892__auto__);
(statearr_24395[(1)] = (1));
return statearr_24395;
});
var state_machine__5892__auto____1 = (function (state_24383){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_24383);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e24396){if((e24396 instanceof Object))
{var ex__5895__auto__ = e24396;var statearr_24397_24412 = state_24383;(statearr_24397_24412[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24383);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24396;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24413 = state_24383;
state_24383 = G__24413;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_24383){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_24383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto__))
})();var state__5908__auto__ = (function (){var statearr_24398 = f__5907__auto__.call(null);(statearr_24398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto__);
return statearr_24398;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto__))
);
return c__5906__auto__;
});
antares.core.renderer = (function renderer(root){return cljs.core.add_watch.call(null,antares.core.app_state,new cljs.core.Keyword(null,"renderer","renderer",336841071),(function (key,reference,old_value,new_value){var root_node = document.querySelector("#antares");var new_dom = antares.core.render_html.call(null,root,new_value);var seq__24422_24430 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__24423_24431 = null;var count__24424_24432 = (0);var i__24425_24433 = (0);while(true){
if((i__24425_24433 < count__24424_24432))
{var component_24434 = cljs.core._nth.call(null,chunk__24423_24431,i__24425_24433);antares.core.component_will_update.call(null,component_24434);
{
var G__24435 = seq__24422_24430;
var G__24436 = chunk__24423_24431;
var G__24437 = count__24424_24432;
var G__24438 = (i__24425_24433 + (1));
seq__24422_24430 = G__24435;
chunk__24423_24431 = G__24436;
count__24424_24432 = G__24437;
i__24425_24433 = G__24438;
continue;
}
} else
{var temp__4126__auto___24439 = cljs.core.seq.call(null,seq__24422_24430);if(temp__4126__auto___24439)
{var seq__24422_24440__$1 = temp__4126__auto___24439;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24422_24440__$1))
{var c__4309__auto___24441 = cljs.core.chunk_first.call(null,seq__24422_24440__$1);{
var G__24442 = cljs.core.chunk_rest.call(null,seq__24422_24440__$1);
var G__24443 = c__4309__auto___24441;
var G__24444 = cljs.core.count.call(null,c__4309__auto___24441);
var G__24445 = (0);
seq__24422_24430 = G__24442;
chunk__24423_24431 = G__24443;
count__24424_24432 = G__24444;
i__24425_24433 = G__24445;
continue;
}
} else
{var component_24446 = cljs.core.first.call(null,seq__24422_24440__$1);antares.core.component_will_update.call(null,component_24446);
{
var G__24447 = cljs.core.next.call(null,seq__24422_24440__$1);
var G__24448 = null;
var G__24449 = (0);
var G__24450 = (0);
seq__24422_24430 = G__24447;
chunk__24423_24431 = G__24448;
count__24424_24432 = G__24449;
i__24425_24433 = G__24450;
continue;
}
}
} else
{}
}
break;
}
root_node.innerHTML = new_dom;
var seq__24426 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__24427 = null;var count__24428 = (0);var i__24429 = (0);while(true){
if((i__24429 < count__24428))
{var component = cljs.core._nth.call(null,chunk__24427,i__24429);antares.core.component_did_update.call(null,component);
{
var G__24451 = seq__24426;
var G__24452 = chunk__24427;
var G__24453 = count__24428;
var G__24454 = (i__24429 + (1));
seq__24426 = G__24451;
chunk__24427 = G__24452;
count__24428 = G__24453;
i__24429 = G__24454;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__24426);if(temp__4126__auto__)
{var seq__24426__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24426__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__24426__$1);{
var G__24455 = cljs.core.chunk_rest.call(null,seq__24426__$1);
var G__24456 = c__4309__auto__;
var G__24457 = cljs.core.count.call(null,c__4309__auto__);
var G__24458 = (0);
seq__24426 = G__24455;
chunk__24427 = G__24456;
count__24428 = G__24457;
i__24429 = G__24458;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__24426__$1);antares.core.component_did_update.call(null,component);
{
var G__24459 = cljs.core.next.call(null,seq__24426__$1);
var G__24460 = null;
var G__24461 = (0);
var G__24462 = (0);
seq__24426 = G__24459;
chunk__24427 = G__24460;
count__24428 = G__24461;
i__24429 = G__24462;
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
});
antares.core.get = (function get(request){return ajax.core.GET.call(null,new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(request),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(request),new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(request)], null));
});
antares.core.post = (function post(request){return ajax.core.POST.call(null,new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(request),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(request),new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(request)], null));
});

//# sourceMappingURL=core.js.map