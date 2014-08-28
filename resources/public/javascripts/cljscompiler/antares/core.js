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
antares.core.LifeCycle = (function (){var obj16458 = {};return obj16458;
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
antares.core.Registerable = (function (){var obj16460 = {};return obj16460;
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
antares.core.Renderable = (function (){var obj16462 = {};return obj16462;
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
antares.core.Mountable = (function (){var obj16464 = {};return obj16464;
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
* @param {*} subcomponents
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
antares.core.Component = (function (ident,render,style,subcomponents,__meta,__extmap){
this.ident = ident;
this.render = render;
this.style = style;
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
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4141__auto__,k16466,else__4142__auto__){var self__ = this;
var this__4141__auto____$1 = this;var G__16468 = (((k16466 instanceof cljs.core.Keyword))?k16466.fqn:null);switch (G__16468) {
case "subcomponents":
return self__.subcomponents;

break;
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
return cljs.core.get.call(null,self__.__extmap,k16466,else__4142__auto__);

}
});
antares.core.Component.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4153__auto__,writer__4154__auto__,opts__4155__auto__){var self__ = this;
var this__4153__auto____$1 = this;var pr_pair__4156__auto__ = ((function (this__4153__auto____$1){
return (function (keyval__4157__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4154__auto__,cljs.core.pr_writer,""," ","",opts__4155__auto__,keyval__4157__auto__);
});})(this__4153__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4154__auto__,pr_pair__4156__auto__,"#antares.core.Component{",", ","}",opts__4155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render","render",-1408033454),self__.render],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",-496642736),self__.style],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349),self__.subcomponents],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4137__auto__){var self__ = this;
var this__4137__auto____$1 = this;return self__.__meta;
});
antares.core.Component.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4133__auto__){var self__ = this;
var this__4133__auto____$1 = this;return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.subcomponents,self__.__meta,self__.__extmap,self__.__hash));
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
var text_node_16473 = goog.dom.createTextNode(antares.core.render_css.call(null,self__$1));var style_node_16474 = goog.dom.createDom("style",text_node_16473);goog.dom.appendChild(document.querySelector("#antares-styles"),style_node_16474);
return cljs.core.swap_BANG_.call(null,antares.core.mounted_components,cljs.core.conj,self__$1);
});
antares.core.Component.prototype.antares$core$Mountable$unmount_component$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return null;
});
antares.core.Component.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4148__auto__,k__4149__auto__){var self__ = this;
var this__4148__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349),null,new cljs.core.Keyword(null,"style","style",-496642736),null,new cljs.core.Keyword(null,"render","render",-1408033454),null,new cljs.core.Keyword(null,"ident","ident",-742346),null], null), null),k__4149__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4148__auto____$1),self__.__meta),k__4149__auto__);
} else
{return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.subcomponents,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4149__auto__)),null));
}
});
antares.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4146__auto__,k__4147__auto__,G__16465){var self__ = this;
var this__4146__auto____$1 = this;var pred__16469 = cljs.core.keyword_identical_QMARK_;var expr__16470 = k__4147__auto__;if(cljs.core.truth_(pred__16469.call(null,new cljs.core.Keyword(null,"ident","ident",-742346),expr__16470)))
{return (new antares.core.Component(G__16465,self__.render,self__.style,self__.subcomponents,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16469.call(null,new cljs.core.Keyword(null,"render","render",-1408033454),expr__16470)))
{return (new antares.core.Component(self__.ident,G__16465,self__.style,self__.subcomponents,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16469.call(null,new cljs.core.Keyword(null,"style","style",-496642736),expr__16470)))
{return (new antares.core.Component(self__.ident,self__.render,G__16465,self__.subcomponents,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16469.call(null,new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349),expr__16470)))
{return (new antares.core.Component(self__.ident,self__.render,self__.style,G__16465,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.subcomponents,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4147__auto__,G__16465),null));
}
}
}
}
});
antares.core.Component.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4151__auto__){var self__ = this;
var this__4151__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render","render",-1408033454),self__.render],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",-496642736),self__.style],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349),self__.subcomponents],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4138__auto__,G__16465){var self__ = this;
var this__4138__auto____$1 = this;return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.subcomponents,G__16465,self__.__extmap,self__.__hash));
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
antares.core.__GT_Component = (function __GT_Component(ident,render,style,subcomponents){return (new antares.core.Component(ident,render,style,subcomponents));
});
antares.core.map__GT_Component = (function map__GT_Component(G__16467){return (new antares.core.Component(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(G__16467),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(G__16467),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(G__16467),new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349).cljs$core$IFn$_invoke$arity$1(G__16467),null,cljs.core.dissoc.call(null,G__16467,new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349))));
});
antares.core.component = (function component(source_map){var component__$1 = antares.core.map__GT_Component.call(null,source_map);antares.core.register_component.call(null,component__$1);
return component__$1;
});
antares.core.bind = (function bind(component,app_cursor,dom_cursor){var component_data = antares.core.initialize_state.call(null,component,app_cursor);antares.core.component_will_mount.call(null,component);
antares.core.mount_component.call(null,component,component_data,dom_cursor);
var seq__16479_16483 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349).cljs$core$IFn$_invoke$arity$1(component));var chunk__16480_16484 = null;var count__16481_16485 = (0);var i__16482_16486 = (0);while(true){
if((i__16482_16486 < count__16481_16485))
{var component_16487__$1 = cljs.core._nth.call(null,chunk__16480_16484,i__16482_16486);antares.core.component_did_mount.call(null,component_16487__$1,app_cursor,dom_cursor);
{
var G__16488 = seq__16479_16483;
var G__16489 = chunk__16480_16484;
var G__16490 = count__16481_16485;
var G__16491 = (i__16482_16486 + (1));
seq__16479_16483 = G__16488;
chunk__16480_16484 = G__16489;
count__16481_16485 = G__16490;
i__16482_16486 = G__16491;
continue;
}
} else
{var temp__4126__auto___16492 = cljs.core.seq.call(null,seq__16479_16483);if(temp__4126__auto___16492)
{var seq__16479_16493__$1 = temp__4126__auto___16492;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16479_16493__$1))
{var c__4309__auto___16494 = cljs.core.chunk_first.call(null,seq__16479_16493__$1);{
var G__16495 = cljs.core.chunk_rest.call(null,seq__16479_16493__$1);
var G__16496 = c__4309__auto___16494;
var G__16497 = cljs.core.count.call(null,c__4309__auto___16494);
var G__16498 = (0);
seq__16479_16483 = G__16495;
chunk__16480_16484 = G__16496;
count__16481_16485 = G__16497;
i__16482_16486 = G__16498;
continue;
}
} else
{var component_16499__$1 = cljs.core.first.call(null,seq__16479_16493__$1);antares.core.component_did_mount.call(null,component_16499__$1,app_cursor,dom_cursor);
{
var G__16500 = cljs.core.next.call(null,seq__16479_16493__$1);
var G__16501 = null;
var G__16502 = (0);
var G__16503 = (0);
seq__16479_16483 = G__16500;
chunk__16480_16484 = G__16501;
count__16481_16485 = G__16502;
i__16482_16486 = G__16503;
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
var root_node_16508 = document.querySelector("body");var seq__16504_16509 = cljs.core.seq.call(null,antares.core.event_list);var chunk__16505_16510 = null;var count__16506_16511 = (0);var i__16507_16512 = (0);while(true){
if((i__16507_16512 < count__16506_16511))
{var event_name_16513 = cljs.core._nth.call(null,chunk__16505_16510,i__16507_16512);goog.events.listen(root_node_16508,event_name_16513,((function (seq__16504_16509,chunk__16505_16510,count__16506_16511,i__16507_16512,event_name_16513,root_node_16508){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__16504_16509,chunk__16505_16510,count__16506_16511,i__16507_16512,event_name_16513,root_node_16508))
);
{
var G__16514 = seq__16504_16509;
var G__16515 = chunk__16505_16510;
var G__16516 = count__16506_16511;
var G__16517 = (i__16507_16512 + (1));
seq__16504_16509 = G__16514;
chunk__16505_16510 = G__16515;
count__16506_16511 = G__16516;
i__16507_16512 = G__16517;
continue;
}
} else
{var temp__4126__auto___16518 = cljs.core.seq.call(null,seq__16504_16509);if(temp__4126__auto___16518)
{var seq__16504_16519__$1 = temp__4126__auto___16518;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16504_16519__$1))
{var c__4309__auto___16520 = cljs.core.chunk_first.call(null,seq__16504_16519__$1);{
var G__16521 = cljs.core.chunk_rest.call(null,seq__16504_16519__$1);
var G__16522 = c__4309__auto___16520;
var G__16523 = cljs.core.count.call(null,c__4309__auto___16520);
var G__16524 = (0);
seq__16504_16509 = G__16521;
chunk__16505_16510 = G__16522;
count__16506_16511 = G__16523;
i__16507_16512 = G__16524;
continue;
}
} else
{var event_name_16525 = cljs.core.first.call(null,seq__16504_16519__$1);goog.events.listen(root_node_16508,event_name_16525,((function (seq__16504_16509,chunk__16505_16510,count__16506_16511,i__16507_16512,event_name_16525,seq__16504_16519__$1,temp__4126__auto___16518,root_node_16508){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__16504_16509,chunk__16505_16510,count__16506_16511,i__16507_16512,event_name_16525,seq__16504_16519__$1,temp__4126__auto___16518,root_node_16508))
);
{
var G__16526 = cljs.core.next.call(null,seq__16504_16519__$1);
var G__16527 = null;
var G__16528 = (0);
var G__16529 = (0);
seq__16504_16509 = G__16526;
chunk__16505_16510 = G__16527;
count__16506_16511 = G__16528;
i__16507_16512 = G__16529;
continue;
}
}
} else
{}
}
break;
}
antares.core.event_loop = (function event_loop(event_mappings,controller){var c__5906__auto___16646 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto___16646){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto___16646){
return (function (state_16602){var state_val_16603 = (state_16602[(1)]);if((state_val_16603 === (8)))
{var inst_16591 = (state_16602[(2)]);var inst_16592 = event_mappings.call(null,inst_16591);var state_16602__$1 = state_16602;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16602__$1,(7),antares.core.control_stream,inst_16592);
} else
{if((state_val_16603 === (7)))
{var inst_16594 = (state_16602[(2)]);var state_16602__$1 = (function (){var statearr_16604 = state_16602;(statearr_16604[(7)] = inst_16594);
return statearr_16604;
})();var statearr_16605_16647 = state_16602__$1;(statearr_16605_16647[(2)] = null);
(statearr_16605_16647[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16603 === (6)))
{var inst_16598 = (state_16602[(2)]);var state_16602__$1 = state_16602;var statearr_16606_16648 = state_16602__$1;(statearr_16606_16648[(2)] = inst_16598);
(statearr_16606_16648[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16603 === (5)))
{var state_16602__$1 = state_16602;var statearr_16607_16649 = state_16602__$1;(statearr_16607_16649[(2)] = null);
(statearr_16607_16649[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16603 === (4)))
{var state_16602__$1 = state_16602;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16602__$1,(8),antares.core.event_stream);
} else
{if((state_val_16603 === (3)))
{var inst_16600 = (state_16602[(2)]);var state_16602__$1 = state_16602;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16602__$1,inst_16600);
} else
{if((state_val_16603 === (2)))
{var state_16602__$1 = state_16602;var statearr_16608_16650 = state_16602__$1;(statearr_16608_16650[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16603 === (1)))
{var state_16602__$1 = state_16602;var statearr_16610_16651 = state_16602__$1;(statearr_16610_16651[(2)] = null);
(statearr_16610_16651[(1)] = (2));
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
});})(c__5906__auto___16646))
;return ((function (switch__5891__auto__,c__5906__auto___16646){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_16614 = [null,null,null,null,null,null,null,null];(statearr_16614[(0)] = state_machine__5892__auto__);
(statearr_16614[(1)] = (1));
return statearr_16614;
});
var state_machine__5892__auto____1 = (function (state_16602){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_16602);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e16615){if((e16615 instanceof Object))
{var ex__5895__auto__ = e16615;var statearr_16616_16652 = state_16602;(statearr_16616_16652[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16602);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16615;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16653 = state_16602;
state_16602 = G__16653;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_16602){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_16602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto___16646))
})();var state__5908__auto__ = (function (){var statearr_16617 = f__5907__auto__.call(null);(statearr_16617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto___16646);
return statearr_16617;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto___16646))
);
var c__5906__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto__){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto__){
return (function (state_16630){var state_val_16631 = (state_16630[(1)]);if((state_val_16631 === (7)))
{var inst_16621 = (state_16630[(2)]);var inst_16622 = controller.call(null,inst_16621);var state_16630__$1 = (function (){var statearr_16632 = state_16630;(statearr_16632[(7)] = inst_16622);
return statearr_16632;
})();var statearr_16633_16654 = state_16630__$1;(statearr_16633_16654[(2)] = null);
(statearr_16633_16654[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16631 === (6)))
{var inst_16626 = (state_16630[(2)]);var state_16630__$1 = state_16630;var statearr_16634_16655 = state_16630__$1;(statearr_16634_16655[(2)] = inst_16626);
(statearr_16634_16655[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16631 === (5)))
{var state_16630__$1 = state_16630;var statearr_16635_16656 = state_16630__$1;(statearr_16635_16656[(2)] = null);
(statearr_16635_16656[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16631 === (4)))
{var state_16630__$1 = state_16630;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16630__$1,(7),antares.core.control_stream);
} else
{if((state_val_16631 === (3)))
{var inst_16628 = (state_16630[(2)]);var state_16630__$1 = state_16630;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16630__$1,inst_16628);
} else
{if((state_val_16631 === (2)))
{var state_16630__$1 = state_16630;var statearr_16636_16657 = state_16630__$1;(statearr_16636_16657[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16631 === (1)))
{var state_16630__$1 = state_16630;var statearr_16638_16658 = state_16630__$1;(statearr_16638_16658[(2)] = null);
(statearr_16638_16658[(1)] = (2));
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
var state_machine__5892__auto____0 = (function (){var statearr_16642 = [null,null,null,null,null,null,null,null];(statearr_16642[(0)] = state_machine__5892__auto__);
(statearr_16642[(1)] = (1));
return statearr_16642;
});
var state_machine__5892__auto____1 = (function (state_16630){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_16630);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e16643){if((e16643 instanceof Object))
{var ex__5895__auto__ = e16643;var statearr_16644_16659 = state_16630;(statearr_16644_16659[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16630);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16643;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16660 = state_16630;
state_16630 = G__16660;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_16630){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_16630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto__))
})();var state__5908__auto__ = (function (){var statearr_16645 = f__5907__auto__.call(null);(statearr_16645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto__);
return statearr_16645;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto__))
);
return c__5906__auto__;
});
antares.core.renderer = (function renderer(root){return cljs.core.add_watch.call(null,antares.core.app_state,new cljs.core.Keyword(null,"renderer","renderer",336841071),(function (key,reference,old_value,new_value){var root_node = document.querySelector("#antares");var new_dom = antares.core.render_html.call(null,root,new_value);var seq__16669_16677 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349).cljs$core$IFn$_invoke$arity$1(root));var chunk__16670_16678 = null;var count__16671_16679 = (0);var i__16672_16680 = (0);while(true){
if((i__16672_16680 < count__16671_16679))
{var component_16681 = cljs.core._nth.call(null,chunk__16670_16678,i__16672_16680);antares.core.component_will_update.call(null,component_16681);
{
var G__16682 = seq__16669_16677;
var G__16683 = chunk__16670_16678;
var G__16684 = count__16671_16679;
var G__16685 = (i__16672_16680 + (1));
seq__16669_16677 = G__16682;
chunk__16670_16678 = G__16683;
count__16671_16679 = G__16684;
i__16672_16680 = G__16685;
continue;
}
} else
{var temp__4126__auto___16686 = cljs.core.seq.call(null,seq__16669_16677);if(temp__4126__auto___16686)
{var seq__16669_16687__$1 = temp__4126__auto___16686;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16669_16687__$1))
{var c__4309__auto___16688 = cljs.core.chunk_first.call(null,seq__16669_16687__$1);{
var G__16689 = cljs.core.chunk_rest.call(null,seq__16669_16687__$1);
var G__16690 = c__4309__auto___16688;
var G__16691 = cljs.core.count.call(null,c__4309__auto___16688);
var G__16692 = (0);
seq__16669_16677 = G__16689;
chunk__16670_16678 = G__16690;
count__16671_16679 = G__16691;
i__16672_16680 = G__16692;
continue;
}
} else
{var component_16693 = cljs.core.first.call(null,seq__16669_16687__$1);antares.core.component_will_update.call(null,component_16693);
{
var G__16694 = cljs.core.next.call(null,seq__16669_16687__$1);
var G__16695 = null;
var G__16696 = (0);
var G__16697 = (0);
seq__16669_16677 = G__16694;
chunk__16670_16678 = G__16695;
count__16671_16679 = G__16696;
i__16672_16680 = G__16697;
continue;
}
}
} else
{}
}
break;
}
root_node.innerHTML = new_dom;
var seq__16673 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349).cljs$core$IFn$_invoke$arity$1(root));var chunk__16674 = null;var count__16675 = (0);var i__16676 = (0);while(true){
if((i__16676 < count__16675))
{var component = cljs.core._nth.call(null,chunk__16674,i__16676);antares.core.component_did_update.call(null,component);
{
var G__16698 = seq__16673;
var G__16699 = chunk__16674;
var G__16700 = count__16675;
var G__16701 = (i__16676 + (1));
seq__16673 = G__16698;
chunk__16674 = G__16699;
count__16675 = G__16700;
i__16676 = G__16701;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__16673);if(temp__4126__auto__)
{var seq__16673__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16673__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__16673__$1);{
var G__16702 = cljs.core.chunk_rest.call(null,seq__16673__$1);
var G__16703 = c__4309__auto__;
var G__16704 = cljs.core.count.call(null,c__4309__auto__);
var G__16705 = (0);
seq__16673 = G__16702;
chunk__16674 = G__16703;
count__16675 = G__16704;
i__16676 = G__16705;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__16673__$1);antares.core.component_did_update.call(null,component);
{
var G__16706 = cljs.core.next.call(null,seq__16673__$1);
var G__16707 = null;
var G__16708 = (0);
var G__16709 = (0);
seq__16673 = G__16706;
chunk__16674 = G__16707;
count__16675 = G__16708;
i__16676 = G__16709;
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