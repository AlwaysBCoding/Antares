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
antares.core.LifeCycle = (function (){var obj21735 = {};return obj21735;
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
antares.core.Registerable = (function (){var obj21737 = {};return obj21737;
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
antares.core.Renderable = (function (){var obj21739 = {};return obj21739;
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
antares.core.Mountable = (function (){var obj21741 = {};return obj21741;
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
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4141__auto__,k21743,else__4142__auto__){var self__ = this;
var this__4141__auto____$1 = this;var G__21745 = (((k21743 instanceof cljs.core.Keyword))?k21743.fqn:null);switch (G__21745) {
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
return cljs.core.get.call(null,self__.__extmap,k21743,else__4142__auto__);

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
antares.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4146__auto__,k__4147__auto__,G__21742){var self__ = this;
var this__4146__auto____$1 = this;var pred__21746 = cljs.core.keyword_identical_QMARK_;var expr__21747 = k__4147__auto__;if(cljs.core.truth_(pred__21746.call(null,new cljs.core.Keyword(null,"ident","ident",-742346),expr__21747)))
{return (new antares.core.Component(G__21742,self__.render,self__.style,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__21746.call(null,new cljs.core.Keyword(null,"render","render",-1408033454),expr__21747)))
{return (new antares.core.Component(self__.ident,G__21742,self__.style,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__21746.call(null,new cljs.core.Keyword(null,"style","style",-496642736),expr__21747)))
{return (new antares.core.Component(self__.ident,self__.render,G__21742,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4147__auto__,G__21742),null));
}
}
}
});
antares.core.Component.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4151__auto__){var self__ = this;
var this__4151__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render","render",-1408033454),self__.render],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",-496642736),self__.style],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4138__auto__,G__21742){var self__ = this;
var this__4138__auto____$1 = this;return (new antares.core.Component(self__.ident,self__.render,self__.style,G__21742,self__.__extmap,self__.__hash));
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
antares.core.map__GT_Component = (function map__GT_Component(G__21744){return (new antares.core.Component(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(G__21744),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(G__21744),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(G__21744),null,cljs.core.dissoc.call(null,G__21744,new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"style","style",-496642736))));
});
antares.core.component = (function component(source_map){var component__$1 = antares.core.map__GT_Component.call(null,source_map);antares.core.register_component.call(null,component__$1);
return component__$1;
});
antares.core.bind = (function bind(component,app_cursor,dom_cursor){var component_data = antares.core.initialize_state.call(null,component,app_cursor);antares.core.component_will_mount.call(null,component);
antares.core.mount_component.call(null,component,component_data,dom_cursor);
var seq__21754_21758 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__21755_21759 = null;var count__21756_21760 = (0);var i__21757_21761 = (0);while(true){
if((i__21757_21761 < count__21756_21760))
{var component_21762__$1 = cljs.core._nth.call(null,chunk__21755_21759,i__21757_21761);antares.core.component_did_update.call(null,component_21762__$1);
{
var G__21763 = seq__21754_21758;
var G__21764 = chunk__21755_21759;
var G__21765 = count__21756_21760;
var G__21766 = (i__21757_21761 + (1));
seq__21754_21758 = G__21763;
chunk__21755_21759 = G__21764;
count__21756_21760 = G__21765;
i__21757_21761 = G__21766;
continue;
}
} else
{var temp__4126__auto___21767 = cljs.core.seq.call(null,seq__21754_21758);if(temp__4126__auto___21767)
{var seq__21754_21768__$1 = temp__4126__auto___21767;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21754_21768__$1))
{var c__4309__auto___21769 = cljs.core.chunk_first.call(null,seq__21754_21768__$1);{
var G__21770 = cljs.core.chunk_rest.call(null,seq__21754_21768__$1);
var G__21771 = c__4309__auto___21769;
var G__21772 = cljs.core.count.call(null,c__4309__auto___21769);
var G__21773 = (0);
seq__21754_21758 = G__21770;
chunk__21755_21759 = G__21771;
count__21756_21760 = G__21772;
i__21757_21761 = G__21773;
continue;
}
} else
{var component_21774__$1 = cljs.core.first.call(null,seq__21754_21768__$1);antares.core.component_did_update.call(null,component_21774__$1);
{
var G__21775 = cljs.core.next.call(null,seq__21754_21768__$1);
var G__21776 = null;
var G__21777 = (0);
var G__21778 = (0);
seq__21754_21758 = G__21775;
chunk__21755_21759 = G__21776;
count__21756_21760 = G__21777;
i__21757_21761 = G__21778;
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
var root_node_21783 = document.querySelector("body");var seq__21779_21784 = cljs.core.seq.call(null,antares.core.event_list);var chunk__21780_21785 = null;var count__21781_21786 = (0);var i__21782_21787 = (0);while(true){
if((i__21782_21787 < count__21781_21786))
{var event_name_21788 = cljs.core._nth.call(null,chunk__21780_21785,i__21782_21787);goog.events.listen(root_node_21783,event_name_21788,((function (seq__21779_21784,chunk__21780_21785,count__21781_21786,i__21782_21787,event_name_21788,root_node_21783){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__21779_21784,chunk__21780_21785,count__21781_21786,i__21782_21787,event_name_21788,root_node_21783))
);
{
var G__21789 = seq__21779_21784;
var G__21790 = chunk__21780_21785;
var G__21791 = count__21781_21786;
var G__21792 = (i__21782_21787 + (1));
seq__21779_21784 = G__21789;
chunk__21780_21785 = G__21790;
count__21781_21786 = G__21791;
i__21782_21787 = G__21792;
continue;
}
} else
{var temp__4126__auto___21793 = cljs.core.seq.call(null,seq__21779_21784);if(temp__4126__auto___21793)
{var seq__21779_21794__$1 = temp__4126__auto___21793;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21779_21794__$1))
{var c__4309__auto___21795 = cljs.core.chunk_first.call(null,seq__21779_21794__$1);{
var G__21796 = cljs.core.chunk_rest.call(null,seq__21779_21794__$1);
var G__21797 = c__4309__auto___21795;
var G__21798 = cljs.core.count.call(null,c__4309__auto___21795);
var G__21799 = (0);
seq__21779_21784 = G__21796;
chunk__21780_21785 = G__21797;
count__21781_21786 = G__21798;
i__21782_21787 = G__21799;
continue;
}
} else
{var event_name_21800 = cljs.core.first.call(null,seq__21779_21794__$1);goog.events.listen(root_node_21783,event_name_21800,((function (seq__21779_21784,chunk__21780_21785,count__21781_21786,i__21782_21787,event_name_21800,seq__21779_21794__$1,temp__4126__auto___21793,root_node_21783){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__21779_21784,chunk__21780_21785,count__21781_21786,i__21782_21787,event_name_21800,seq__21779_21794__$1,temp__4126__auto___21793,root_node_21783))
);
{
var G__21801 = cljs.core.next.call(null,seq__21779_21794__$1);
var G__21802 = null;
var G__21803 = (0);
var G__21804 = (0);
seq__21779_21784 = G__21801;
chunk__21780_21785 = G__21802;
count__21781_21786 = G__21803;
i__21782_21787 = G__21804;
continue;
}
}
} else
{}
}
break;
}
antares.core.event_loop = (function event_loop(event_mappings,controller){var c__5906__auto___21921 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto___21921){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto___21921){
return (function (state_21877){var state_val_21878 = (state_21877[(1)]);if((state_val_21878 === (8)))
{var inst_21866 = (state_21877[(2)]);var inst_21867 = event_mappings.call(null,inst_21866);var state_21877__$1 = state_21877;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21877__$1,(7),antares.core.control_stream,inst_21867);
} else
{if((state_val_21878 === (7)))
{var inst_21869 = (state_21877[(2)]);var state_21877__$1 = (function (){var statearr_21879 = state_21877;(statearr_21879[(7)] = inst_21869);
return statearr_21879;
})();var statearr_21880_21922 = state_21877__$1;(statearr_21880_21922[(2)] = null);
(statearr_21880_21922[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21878 === (6)))
{var inst_21873 = (state_21877[(2)]);var state_21877__$1 = state_21877;var statearr_21881_21923 = state_21877__$1;(statearr_21881_21923[(2)] = inst_21873);
(statearr_21881_21923[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21878 === (5)))
{var state_21877__$1 = state_21877;var statearr_21882_21924 = state_21877__$1;(statearr_21882_21924[(2)] = null);
(statearr_21882_21924[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21878 === (4)))
{var state_21877__$1 = state_21877;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21877__$1,(8),antares.core.event_stream);
} else
{if((state_val_21878 === (3)))
{var inst_21875 = (state_21877[(2)]);var state_21877__$1 = state_21877;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21877__$1,inst_21875);
} else
{if((state_val_21878 === (2)))
{var state_21877__$1 = state_21877;var statearr_21883_21925 = state_21877__$1;(statearr_21883_21925[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21878 === (1)))
{var state_21877__$1 = state_21877;var statearr_21885_21926 = state_21877__$1;(statearr_21885_21926[(2)] = null);
(statearr_21885_21926[(1)] = (2));
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
});})(c__5906__auto___21921))
;return ((function (switch__5891__auto__,c__5906__auto___21921){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_21889 = [null,null,null,null,null,null,null,null];(statearr_21889[(0)] = state_machine__5892__auto__);
(statearr_21889[(1)] = (1));
return statearr_21889;
});
var state_machine__5892__auto____1 = (function (state_21877){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_21877);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e21890){if((e21890 instanceof Object))
{var ex__5895__auto__ = e21890;var statearr_21891_21927 = state_21877;(statearr_21891_21927[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21877);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21890;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21928 = state_21877;
state_21877 = G__21928;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_21877){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_21877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto___21921))
})();var state__5908__auto__ = (function (){var statearr_21892 = f__5907__auto__.call(null);(statearr_21892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto___21921);
return statearr_21892;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto___21921))
);
var c__5906__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto__){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto__){
return (function (state_21905){var state_val_21906 = (state_21905[(1)]);if((state_val_21906 === (7)))
{var inst_21896 = (state_21905[(2)]);var inst_21897 = controller.call(null,inst_21896);var state_21905__$1 = (function (){var statearr_21907 = state_21905;(statearr_21907[(7)] = inst_21897);
return statearr_21907;
})();var statearr_21908_21929 = state_21905__$1;(statearr_21908_21929[(2)] = null);
(statearr_21908_21929[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21906 === (6)))
{var inst_21901 = (state_21905[(2)]);var state_21905__$1 = state_21905;var statearr_21909_21930 = state_21905__$1;(statearr_21909_21930[(2)] = inst_21901);
(statearr_21909_21930[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21906 === (5)))
{var state_21905__$1 = state_21905;var statearr_21910_21931 = state_21905__$1;(statearr_21910_21931[(2)] = null);
(statearr_21910_21931[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21906 === (4)))
{var state_21905__$1 = state_21905;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21905__$1,(7),antares.core.control_stream);
} else
{if((state_val_21906 === (3)))
{var inst_21903 = (state_21905[(2)]);var state_21905__$1 = state_21905;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21905__$1,inst_21903);
} else
{if((state_val_21906 === (2)))
{var state_21905__$1 = state_21905;var statearr_21911_21932 = state_21905__$1;(statearr_21911_21932[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21906 === (1)))
{var state_21905__$1 = state_21905;var statearr_21913_21933 = state_21905__$1;(statearr_21913_21933[(2)] = null);
(statearr_21913_21933[(1)] = (2));
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
var state_machine__5892__auto____0 = (function (){var statearr_21917 = [null,null,null,null,null,null,null,null];(statearr_21917[(0)] = state_machine__5892__auto__);
(statearr_21917[(1)] = (1));
return statearr_21917;
});
var state_machine__5892__auto____1 = (function (state_21905){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_21905);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e21918){if((e21918 instanceof Object))
{var ex__5895__auto__ = e21918;var statearr_21919_21934 = state_21905;(statearr_21919_21934[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21905);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21918;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21935 = state_21905;
state_21905 = G__21935;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_21905){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_21905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto__))
})();var state__5908__auto__ = (function (){var statearr_21920 = f__5907__auto__.call(null);(statearr_21920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto__);
return statearr_21920;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto__))
);
return c__5906__auto__;
});
antares.core.renderer = (function renderer(root){return cljs.core.add_watch.call(null,antares.core.app_state,new cljs.core.Keyword(null,"renderer","renderer",336841071),(function (key,reference,old_value,new_value){var root_node = document.querySelector("#antares");var new_dom = antares.core.render_html.call(null,root,new_value);var seq__21944_21952 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__21945_21953 = null;var count__21946_21954 = (0);var i__21947_21955 = (0);while(true){
if((i__21947_21955 < count__21946_21954))
{var component_21956 = cljs.core._nth.call(null,chunk__21945_21953,i__21947_21955);antares.core.component_will_update.call(null,component_21956);
{
var G__21957 = seq__21944_21952;
var G__21958 = chunk__21945_21953;
var G__21959 = count__21946_21954;
var G__21960 = (i__21947_21955 + (1));
seq__21944_21952 = G__21957;
chunk__21945_21953 = G__21958;
count__21946_21954 = G__21959;
i__21947_21955 = G__21960;
continue;
}
} else
{var temp__4126__auto___21961 = cljs.core.seq.call(null,seq__21944_21952);if(temp__4126__auto___21961)
{var seq__21944_21962__$1 = temp__4126__auto___21961;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21944_21962__$1))
{var c__4309__auto___21963 = cljs.core.chunk_first.call(null,seq__21944_21962__$1);{
var G__21964 = cljs.core.chunk_rest.call(null,seq__21944_21962__$1);
var G__21965 = c__4309__auto___21963;
var G__21966 = cljs.core.count.call(null,c__4309__auto___21963);
var G__21967 = (0);
seq__21944_21952 = G__21964;
chunk__21945_21953 = G__21965;
count__21946_21954 = G__21966;
i__21947_21955 = G__21967;
continue;
}
} else
{var component_21968 = cljs.core.first.call(null,seq__21944_21962__$1);antares.core.component_will_update.call(null,component_21968);
{
var G__21969 = cljs.core.next.call(null,seq__21944_21962__$1);
var G__21970 = null;
var G__21971 = (0);
var G__21972 = (0);
seq__21944_21952 = G__21969;
chunk__21945_21953 = G__21970;
count__21946_21954 = G__21971;
i__21947_21955 = G__21972;
continue;
}
}
} else
{}
}
break;
}
root_node.innerHTML = new_dom;
var seq__21948 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__21949 = null;var count__21950 = (0);var i__21951 = (0);while(true){
if((i__21951 < count__21950))
{var component = cljs.core._nth.call(null,chunk__21949,i__21951);antares.core.component_did_update.call(null,component);
{
var G__21973 = seq__21948;
var G__21974 = chunk__21949;
var G__21975 = count__21950;
var G__21976 = (i__21951 + (1));
seq__21948 = G__21973;
chunk__21949 = G__21974;
count__21950 = G__21975;
i__21951 = G__21976;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21948);if(temp__4126__auto__)
{var seq__21948__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21948__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__21948__$1);{
var G__21977 = cljs.core.chunk_rest.call(null,seq__21948__$1);
var G__21978 = c__4309__auto__;
var G__21979 = cljs.core.count.call(null,c__4309__auto__);
var G__21980 = (0);
seq__21948 = G__21977;
chunk__21949 = G__21978;
count__21950 = G__21979;
i__21951 = G__21980;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__21948__$1);antares.core.component_did_update.call(null,component);
{
var G__21981 = cljs.core.next.call(null,seq__21948__$1);
var G__21982 = null;
var G__21983 = (0);
var G__21984 = (0);
seq__21948 = G__21981;
chunk__21949 = G__21982;
count__21950 = G__21983;
i__21951 = G__21984;
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

//# sourceMappingURL=core.js.map