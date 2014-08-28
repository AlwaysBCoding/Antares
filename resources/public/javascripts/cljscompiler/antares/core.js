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
antares.core.cursor__GT_value = (function cursor__GT_value(cursor,new_value){return cljs.core.swap_BANG_.call(null,antares.core.app_state,(function (state){return cljs.core.update_in.call(null,state,cursor,(function (old_value){return new_value;
}));
}));
});
antares.core.cursor__GT_fn = (function cursor__GT_fn(cursor,update_fn){return cljs.core.swap_BANG_.call(null,antares.core.app_state,(function (state){return cljs.core.update_in.call(null,state,cursor,update_fn);
}));
});
antares.core.reset_state = (function reset_state(new_state){return cljs.core.reset_BANG_.call(null,antares.core.app_state,antares.core.string__GT_data.call(null,new_state));
});
antares.core.LifeCycle = (function (){var obj19877 = {};return obj19877;
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
antares.core.Registerable = (function (){var obj19879 = {};return obj19879;
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
antares.core.Renderable = (function (){var obj19881 = {};return obj19881;
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
antares.core.Mountable = (function (){var obj19883 = {};return obj19883;
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
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4141__auto__,k19885,else__4142__auto__){var self__ = this;
var this__4141__auto____$1 = this;var G__19887 = (((k19885 instanceof cljs.core.Keyword))?k19885.fqn:null);switch (G__19887) {
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
return cljs.core.get.call(null,self__.__extmap,k19885,else__4142__auto__);

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
antares.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4146__auto__,k__4147__auto__,G__19884){var self__ = this;
var this__4146__auto____$1 = this;var pred__19888 = cljs.core.keyword_identical_QMARK_;var expr__19889 = k__4147__auto__;if(cljs.core.truth_(pred__19888.call(null,new cljs.core.Keyword(null,"ident","ident",-742346),expr__19889)))
{return (new antares.core.Component(G__19884,self__.render,self__.style,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__19888.call(null,new cljs.core.Keyword(null,"render","render",-1408033454),expr__19889)))
{return (new antares.core.Component(self__.ident,G__19884,self__.style,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__19888.call(null,new cljs.core.Keyword(null,"style","style",-496642736),expr__19889)))
{return (new antares.core.Component(self__.ident,self__.render,G__19884,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4147__auto__,G__19884),null));
}
}
}
});
antares.core.Component.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4151__auto__){var self__ = this;
var this__4151__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render","render",-1408033454),self__.render],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",-496642736),self__.style],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4138__auto__,G__19884){var self__ = this;
var this__4138__auto____$1 = this;return (new antares.core.Component(self__.ident,self__.render,self__.style,G__19884,self__.__extmap,self__.__hash));
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
antares.core.map__GT_Component = (function map__GT_Component(G__19886){return (new antares.core.Component(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(G__19886),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(G__19886),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(G__19886),null,cljs.core.dissoc.call(null,G__19886,new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"style","style",-496642736))));
});
antares.core.component = (function component(source_map){var component__$1 = antares.core.map__GT_Component.call(null,source_map);antares.core.register_component.call(null,component__$1);
return component__$1;
});
antares.core.bind = (function bind(component,app_cursor,dom_cursor){var component_data = antares.core.initialize_state.call(null,component,app_cursor);antares.core.component_will_mount.call(null,component);
antares.core.mount_component.call(null,component,component_data,dom_cursor);
var seq__19896_19900 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__19897_19901 = null;var count__19898_19902 = (0);var i__19899_19903 = (0);while(true){
if((i__19899_19903 < count__19898_19902))
{var component_19904__$1 = cljs.core._nth.call(null,chunk__19897_19901,i__19899_19903);antares.core.component_did_mount.call(null,component_19904__$1,app_cursor,dom_cursor);
{
var G__19905 = seq__19896_19900;
var G__19906 = chunk__19897_19901;
var G__19907 = count__19898_19902;
var G__19908 = (i__19899_19903 + (1));
seq__19896_19900 = G__19905;
chunk__19897_19901 = G__19906;
count__19898_19902 = G__19907;
i__19899_19903 = G__19908;
continue;
}
} else
{var temp__4126__auto___19909 = cljs.core.seq.call(null,seq__19896_19900);if(temp__4126__auto___19909)
{var seq__19896_19910__$1 = temp__4126__auto___19909;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19896_19910__$1))
{var c__4309__auto___19911 = cljs.core.chunk_first.call(null,seq__19896_19910__$1);{
var G__19912 = cljs.core.chunk_rest.call(null,seq__19896_19910__$1);
var G__19913 = c__4309__auto___19911;
var G__19914 = cljs.core.count.call(null,c__4309__auto___19911);
var G__19915 = (0);
seq__19896_19900 = G__19912;
chunk__19897_19901 = G__19913;
count__19898_19902 = G__19914;
i__19899_19903 = G__19915;
continue;
}
} else
{var component_19916__$1 = cljs.core.first.call(null,seq__19896_19910__$1);antares.core.component_did_mount.call(null,component_19916__$1,app_cursor,dom_cursor);
{
var G__19917 = cljs.core.next.call(null,seq__19896_19910__$1);
var G__19918 = null;
var G__19919 = (0);
var G__19920 = (0);
seq__19896_19900 = G__19917;
chunk__19897_19901 = G__19918;
count__19898_19902 = G__19919;
i__19899_19903 = G__19920;
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
var root_node_19925 = document.querySelector("body");var seq__19921_19926 = cljs.core.seq.call(null,antares.core.event_list);var chunk__19922_19927 = null;var count__19923_19928 = (0);var i__19924_19929 = (0);while(true){
if((i__19924_19929 < count__19923_19928))
{var event_name_19930 = cljs.core._nth.call(null,chunk__19922_19927,i__19924_19929);goog.events.listen(root_node_19925,event_name_19930,((function (seq__19921_19926,chunk__19922_19927,count__19923_19928,i__19924_19929,event_name_19930,root_node_19925){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__19921_19926,chunk__19922_19927,count__19923_19928,i__19924_19929,event_name_19930,root_node_19925))
);
{
var G__19931 = seq__19921_19926;
var G__19932 = chunk__19922_19927;
var G__19933 = count__19923_19928;
var G__19934 = (i__19924_19929 + (1));
seq__19921_19926 = G__19931;
chunk__19922_19927 = G__19932;
count__19923_19928 = G__19933;
i__19924_19929 = G__19934;
continue;
}
} else
{var temp__4126__auto___19935 = cljs.core.seq.call(null,seq__19921_19926);if(temp__4126__auto___19935)
{var seq__19921_19936__$1 = temp__4126__auto___19935;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19921_19936__$1))
{var c__4309__auto___19937 = cljs.core.chunk_first.call(null,seq__19921_19936__$1);{
var G__19938 = cljs.core.chunk_rest.call(null,seq__19921_19936__$1);
var G__19939 = c__4309__auto___19937;
var G__19940 = cljs.core.count.call(null,c__4309__auto___19937);
var G__19941 = (0);
seq__19921_19926 = G__19938;
chunk__19922_19927 = G__19939;
count__19923_19928 = G__19940;
i__19924_19929 = G__19941;
continue;
}
} else
{var event_name_19942 = cljs.core.first.call(null,seq__19921_19936__$1);goog.events.listen(root_node_19925,event_name_19942,((function (seq__19921_19926,chunk__19922_19927,count__19923_19928,i__19924_19929,event_name_19942,seq__19921_19936__$1,temp__4126__auto___19935,root_node_19925){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__19921_19926,chunk__19922_19927,count__19923_19928,i__19924_19929,event_name_19942,seq__19921_19936__$1,temp__4126__auto___19935,root_node_19925))
);
{
var G__19943 = cljs.core.next.call(null,seq__19921_19936__$1);
var G__19944 = null;
var G__19945 = (0);
var G__19946 = (0);
seq__19921_19926 = G__19943;
chunk__19922_19927 = G__19944;
count__19923_19928 = G__19945;
i__19924_19929 = G__19946;
continue;
}
}
} else
{}
}
break;
}
antares.core.event_loop = (function event_loop(event_mappings,controller){var c__5906__auto___20063 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto___20063){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto___20063){
return (function (state_20019){var state_val_20020 = (state_20019[(1)]);if((state_val_20020 === (8)))
{var inst_20008 = (state_20019[(2)]);var inst_20009 = event_mappings.call(null,inst_20008);var state_20019__$1 = state_20019;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20019__$1,(7),antares.core.control_stream,inst_20009);
} else
{if((state_val_20020 === (7)))
{var inst_20011 = (state_20019[(2)]);var state_20019__$1 = (function (){var statearr_20021 = state_20019;(statearr_20021[(7)] = inst_20011);
return statearr_20021;
})();var statearr_20022_20064 = state_20019__$1;(statearr_20022_20064[(2)] = null);
(statearr_20022_20064[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20020 === (6)))
{var inst_20015 = (state_20019[(2)]);var state_20019__$1 = state_20019;var statearr_20023_20065 = state_20019__$1;(statearr_20023_20065[(2)] = inst_20015);
(statearr_20023_20065[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20020 === (5)))
{var state_20019__$1 = state_20019;var statearr_20024_20066 = state_20019__$1;(statearr_20024_20066[(2)] = null);
(statearr_20024_20066[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20020 === (4)))
{var state_20019__$1 = state_20019;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20019__$1,(8),antares.core.event_stream);
} else
{if((state_val_20020 === (3)))
{var inst_20017 = (state_20019[(2)]);var state_20019__$1 = state_20019;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20019__$1,inst_20017);
} else
{if((state_val_20020 === (2)))
{var state_20019__$1 = state_20019;var statearr_20025_20067 = state_20019__$1;(statearr_20025_20067[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20020 === (1)))
{var state_20019__$1 = state_20019;var statearr_20027_20068 = state_20019__$1;(statearr_20027_20068[(2)] = null);
(statearr_20027_20068[(1)] = (2));
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
});})(c__5906__auto___20063))
;return ((function (switch__5891__auto__,c__5906__auto___20063){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_20031 = [null,null,null,null,null,null,null,null];(statearr_20031[(0)] = state_machine__5892__auto__);
(statearr_20031[(1)] = (1));
return statearr_20031;
});
var state_machine__5892__auto____1 = (function (state_20019){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_20019);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e20032){if((e20032 instanceof Object))
{var ex__5895__auto__ = e20032;var statearr_20033_20069 = state_20019;(statearr_20033_20069[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20019);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20032;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20070 = state_20019;
state_20019 = G__20070;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_20019){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_20019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto___20063))
})();var state__5908__auto__ = (function (){var statearr_20034 = f__5907__auto__.call(null);(statearr_20034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto___20063);
return statearr_20034;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto___20063))
);
var c__5906__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto__){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto__){
return (function (state_20047){var state_val_20048 = (state_20047[(1)]);if((state_val_20048 === (7)))
{var inst_20038 = (state_20047[(2)]);var inst_20039 = controller.call(null,inst_20038);var state_20047__$1 = (function (){var statearr_20049 = state_20047;(statearr_20049[(7)] = inst_20039);
return statearr_20049;
})();var statearr_20050_20071 = state_20047__$1;(statearr_20050_20071[(2)] = null);
(statearr_20050_20071[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20048 === (6)))
{var inst_20043 = (state_20047[(2)]);var state_20047__$1 = state_20047;var statearr_20051_20072 = state_20047__$1;(statearr_20051_20072[(2)] = inst_20043);
(statearr_20051_20072[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20048 === (5)))
{var state_20047__$1 = state_20047;var statearr_20052_20073 = state_20047__$1;(statearr_20052_20073[(2)] = null);
(statearr_20052_20073[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20048 === (4)))
{var state_20047__$1 = state_20047;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20047__$1,(7),antares.core.control_stream);
} else
{if((state_val_20048 === (3)))
{var inst_20045 = (state_20047[(2)]);var state_20047__$1 = state_20047;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20047__$1,inst_20045);
} else
{if((state_val_20048 === (2)))
{var state_20047__$1 = state_20047;var statearr_20053_20074 = state_20047__$1;(statearr_20053_20074[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20048 === (1)))
{var state_20047__$1 = state_20047;var statearr_20055_20075 = state_20047__$1;(statearr_20055_20075[(2)] = null);
(statearr_20055_20075[(1)] = (2));
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
var state_machine__5892__auto____0 = (function (){var statearr_20059 = [null,null,null,null,null,null,null,null];(statearr_20059[(0)] = state_machine__5892__auto__);
(statearr_20059[(1)] = (1));
return statearr_20059;
});
var state_machine__5892__auto____1 = (function (state_20047){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_20047);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e20060){if((e20060 instanceof Object))
{var ex__5895__auto__ = e20060;var statearr_20061_20076 = state_20047;(statearr_20061_20076[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20047);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20060;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20077 = state_20047;
state_20047 = G__20077;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_20047){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_20047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto__))
})();var state__5908__auto__ = (function (){var statearr_20062 = f__5907__auto__.call(null);(statearr_20062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto__);
return statearr_20062;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto__))
);
return c__5906__auto__;
});
antares.core.renderer = (function renderer(root){return cljs.core.add_watch.call(null,antares.core.app_state,new cljs.core.Keyword(null,"renderer","renderer",336841071),(function (key,reference,old_value,new_value){var root_node = document.querySelector("#antares");var new_dom = antares.core.render_html.call(null,root,new_value);var seq__20086_20094 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__20087_20095 = null;var count__20088_20096 = (0);var i__20089_20097 = (0);while(true){
if((i__20089_20097 < count__20088_20096))
{var component_20098 = cljs.core._nth.call(null,chunk__20087_20095,i__20089_20097);antares.core.component_will_update.call(null,component_20098);
{
var G__20099 = seq__20086_20094;
var G__20100 = chunk__20087_20095;
var G__20101 = count__20088_20096;
var G__20102 = (i__20089_20097 + (1));
seq__20086_20094 = G__20099;
chunk__20087_20095 = G__20100;
count__20088_20096 = G__20101;
i__20089_20097 = G__20102;
continue;
}
} else
{var temp__4126__auto___20103 = cljs.core.seq.call(null,seq__20086_20094);if(temp__4126__auto___20103)
{var seq__20086_20104__$1 = temp__4126__auto___20103;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20086_20104__$1))
{var c__4309__auto___20105 = cljs.core.chunk_first.call(null,seq__20086_20104__$1);{
var G__20106 = cljs.core.chunk_rest.call(null,seq__20086_20104__$1);
var G__20107 = c__4309__auto___20105;
var G__20108 = cljs.core.count.call(null,c__4309__auto___20105);
var G__20109 = (0);
seq__20086_20094 = G__20106;
chunk__20087_20095 = G__20107;
count__20088_20096 = G__20108;
i__20089_20097 = G__20109;
continue;
}
} else
{var component_20110 = cljs.core.first.call(null,seq__20086_20104__$1);antares.core.component_will_update.call(null,component_20110);
{
var G__20111 = cljs.core.next.call(null,seq__20086_20104__$1);
var G__20112 = null;
var G__20113 = (0);
var G__20114 = (0);
seq__20086_20094 = G__20111;
chunk__20087_20095 = G__20112;
count__20088_20096 = G__20113;
i__20089_20097 = G__20114;
continue;
}
}
} else
{}
}
break;
}
root_node.innerHTML = new_dom;
var seq__20090 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__20091 = null;var count__20092 = (0);var i__20093 = (0);while(true){
if((i__20093 < count__20092))
{var component = cljs.core._nth.call(null,chunk__20091,i__20093);antares.core.component_did_update.call(null,component);
{
var G__20115 = seq__20090;
var G__20116 = chunk__20091;
var G__20117 = count__20092;
var G__20118 = (i__20093 + (1));
seq__20090 = G__20115;
chunk__20091 = G__20116;
count__20092 = G__20117;
i__20093 = G__20118;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20090);if(temp__4126__auto__)
{var seq__20090__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20090__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__20090__$1);{
var G__20119 = cljs.core.chunk_rest.call(null,seq__20090__$1);
var G__20120 = c__4309__auto__;
var G__20121 = cljs.core.count.call(null,c__4309__auto__);
var G__20122 = (0);
seq__20090 = G__20119;
chunk__20091 = G__20120;
count__20092 = G__20121;
i__20093 = G__20122;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__20090__$1);antares.core.component_did_update.call(null,component);
{
var G__20123 = cljs.core.next.call(null,seq__20090__$1);
var G__20124 = null;
var G__20125 = (0);
var G__20126 = (0);
seq__20090 = G__20123;
chunk__20091 = G__20124;
count__20092 = G__20125;
i__20093 = G__20126;
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