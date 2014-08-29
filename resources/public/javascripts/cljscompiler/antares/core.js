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
antares.core.get_value = (function get_value(cursor){return cljs.core.get_in.call(null,cljs.core.deref.call(null,antares.core.app_state),cursor);
});
antares.core.compile_html_BANG_ = (function compile_html_BANG_(html_data){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,html_data)));
});
antares.core.compile_css_BANG_ = (function compile_css_BANG_(css_data){return garden.core.css.call(null,css_data);
});
antares.core.LifeCycle = (function (){var obj32483 = {};return obj32483;
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
antares.core.Registerable = (function (){var obj32485 = {};return obj32485;
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
antares.core.Renderable = (function (){var obj32487 = {};return obj32487;
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
antares.core.Mountable = (function (){var obj32489 = {};return obj32489;
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
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4141__auto__,k32491,else__4142__auto__){var self__ = this;
var this__4141__auto____$1 = this;var G__32493 = (((k32491 instanceof cljs.core.Keyword))?k32491.fqn:null);switch (G__32493) {
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
return cljs.core.get.call(null,self__.__extmap,k32491,else__4142__auto__);

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
antares.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4146__auto__,k__4147__auto__,G__32490){var self__ = this;
var this__4146__auto____$1 = this;var pred__32494 = cljs.core.keyword_identical_QMARK_;var expr__32495 = k__4147__auto__;if(cljs.core.truth_(pred__32494.call(null,new cljs.core.Keyword(null,"ident","ident",-742346),expr__32495)))
{return (new antares.core.Component(G__32490,self__.render,self__.style,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__32494.call(null,new cljs.core.Keyword(null,"render","render",-1408033454),expr__32495)))
{return (new antares.core.Component(self__.ident,G__32490,self__.style,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__32494.call(null,new cljs.core.Keyword(null,"style","style",-496642736),expr__32495)))
{return (new antares.core.Component(self__.ident,self__.render,G__32490,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4147__auto__,G__32490),null));
}
}
}
});
antares.core.Component.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4151__auto__){var self__ = this;
var this__4151__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render","render",-1408033454),self__.render],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",-496642736),self__.style],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4138__auto__,G__32490){var self__ = this;
var this__4138__auto____$1 = this;return (new antares.core.Component(self__.ident,self__.render,self__.style,G__32490,self__.__extmap,self__.__hash));
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
antares.core.map__GT_Component = (function map__GT_Component(G__32492){return (new antares.core.Component(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(G__32492),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(G__32492),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(G__32492),null,cljs.core.dissoc.call(null,G__32492,new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"style","style",-496642736))));
});
antares.core.component = (function component(source_map){var component__$1 = antares.core.map__GT_Component.call(null,source_map);antares.core.register_component.call(null,component__$1);
return component__$1;
});
antares.core.bind = (function bind(component,app_cursor,dom_cursor){var component_data = antares.core.initialize_state.call(null,component,app_cursor);antares.core.component_will_mount.call(null,component);
antares.core.mount_component.call(null,component,component_data,dom_cursor);
var seq__32502_32506 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__32503_32507 = null;var count__32504_32508 = (0);var i__32505_32509 = (0);while(true){
if((i__32505_32509 < count__32504_32508))
{var component_32510__$1 = cljs.core._nth.call(null,chunk__32503_32507,i__32505_32509);antares.core.component_did_update.call(null,component_32510__$1);
{
var G__32511 = seq__32502_32506;
var G__32512 = chunk__32503_32507;
var G__32513 = count__32504_32508;
var G__32514 = (i__32505_32509 + (1));
seq__32502_32506 = G__32511;
chunk__32503_32507 = G__32512;
count__32504_32508 = G__32513;
i__32505_32509 = G__32514;
continue;
}
} else
{var temp__4126__auto___32515 = cljs.core.seq.call(null,seq__32502_32506);if(temp__4126__auto___32515)
{var seq__32502_32516__$1 = temp__4126__auto___32515;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32502_32516__$1))
{var c__4309__auto___32517 = cljs.core.chunk_first.call(null,seq__32502_32516__$1);{
var G__32518 = cljs.core.chunk_rest.call(null,seq__32502_32516__$1);
var G__32519 = c__4309__auto___32517;
var G__32520 = cljs.core.count.call(null,c__4309__auto___32517);
var G__32521 = (0);
seq__32502_32506 = G__32518;
chunk__32503_32507 = G__32519;
count__32504_32508 = G__32520;
i__32505_32509 = G__32521;
continue;
}
} else
{var component_32522__$1 = cljs.core.first.call(null,seq__32502_32516__$1);antares.core.component_did_update.call(null,component_32522__$1);
{
var G__32523 = cljs.core.next.call(null,seq__32502_32516__$1);
var G__32524 = null;
var G__32525 = (0);
var G__32526 = (0);
seq__32502_32506 = G__32523;
chunk__32503_32507 = G__32524;
count__32504_32508 = G__32525;
i__32505_32509 = G__32526;
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
var root_node_32531 = document.querySelector("body");var seq__32527_32532 = cljs.core.seq.call(null,antares.core.event_list);var chunk__32528_32533 = null;var count__32529_32534 = (0);var i__32530_32535 = (0);while(true){
if((i__32530_32535 < count__32529_32534))
{var event_name_32536 = cljs.core._nth.call(null,chunk__32528_32533,i__32530_32535);goog.events.listen(root_node_32531,event_name_32536,((function (seq__32527_32532,chunk__32528_32533,count__32529_32534,i__32530_32535,event_name_32536,root_node_32531){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__32527_32532,chunk__32528_32533,count__32529_32534,i__32530_32535,event_name_32536,root_node_32531))
);
{
var G__32537 = seq__32527_32532;
var G__32538 = chunk__32528_32533;
var G__32539 = count__32529_32534;
var G__32540 = (i__32530_32535 + (1));
seq__32527_32532 = G__32537;
chunk__32528_32533 = G__32538;
count__32529_32534 = G__32539;
i__32530_32535 = G__32540;
continue;
}
} else
{var temp__4126__auto___32541 = cljs.core.seq.call(null,seq__32527_32532);if(temp__4126__auto___32541)
{var seq__32527_32542__$1 = temp__4126__auto___32541;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32527_32542__$1))
{var c__4309__auto___32543 = cljs.core.chunk_first.call(null,seq__32527_32542__$1);{
var G__32544 = cljs.core.chunk_rest.call(null,seq__32527_32542__$1);
var G__32545 = c__4309__auto___32543;
var G__32546 = cljs.core.count.call(null,c__4309__auto___32543);
var G__32547 = (0);
seq__32527_32532 = G__32544;
chunk__32528_32533 = G__32545;
count__32529_32534 = G__32546;
i__32530_32535 = G__32547;
continue;
}
} else
{var event_name_32548 = cljs.core.first.call(null,seq__32527_32542__$1);goog.events.listen(root_node_32531,event_name_32548,((function (seq__32527_32532,chunk__32528_32533,count__32529_32534,i__32530_32535,event_name_32548,seq__32527_32542__$1,temp__4126__auto___32541,root_node_32531){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__32527_32532,chunk__32528_32533,count__32529_32534,i__32530_32535,event_name_32548,seq__32527_32542__$1,temp__4126__auto___32541,root_node_32531))
);
{
var G__32549 = cljs.core.next.call(null,seq__32527_32542__$1);
var G__32550 = null;
var G__32551 = (0);
var G__32552 = (0);
seq__32527_32532 = G__32549;
chunk__32528_32533 = G__32550;
count__32529_32534 = G__32551;
i__32530_32535 = G__32552;
continue;
}
}
} else
{}
}
break;
}
antares.core.event_loop = (function event_loop(event_mappings,controller){var c__5906__auto___32669 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto___32669){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto___32669){
return (function (state_32625){var state_val_32626 = (state_32625[(1)]);if((state_val_32626 === (8)))
{var inst_32614 = (state_32625[(2)]);var inst_32615 = event_mappings.call(null,inst_32614);var state_32625__$1 = state_32625;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32625__$1,(7),antares.core.control_stream,inst_32615);
} else
{if((state_val_32626 === (7)))
{var inst_32617 = (state_32625[(2)]);var state_32625__$1 = (function (){var statearr_32627 = state_32625;(statearr_32627[(7)] = inst_32617);
return statearr_32627;
})();var statearr_32628_32670 = state_32625__$1;(statearr_32628_32670[(2)] = null);
(statearr_32628_32670[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32626 === (6)))
{var inst_32621 = (state_32625[(2)]);var state_32625__$1 = state_32625;var statearr_32629_32671 = state_32625__$1;(statearr_32629_32671[(2)] = inst_32621);
(statearr_32629_32671[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32626 === (5)))
{var state_32625__$1 = state_32625;var statearr_32630_32672 = state_32625__$1;(statearr_32630_32672[(2)] = null);
(statearr_32630_32672[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32626 === (4)))
{var state_32625__$1 = state_32625;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32625__$1,(8),antares.core.event_stream);
} else
{if((state_val_32626 === (3)))
{var inst_32623 = (state_32625[(2)]);var state_32625__$1 = state_32625;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32625__$1,inst_32623);
} else
{if((state_val_32626 === (2)))
{var state_32625__$1 = state_32625;var statearr_32631_32673 = state_32625__$1;(statearr_32631_32673[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32626 === (1)))
{var state_32625__$1 = state_32625;var statearr_32633_32674 = state_32625__$1;(statearr_32633_32674[(2)] = null);
(statearr_32633_32674[(1)] = (2));
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
});})(c__5906__auto___32669))
;return ((function (switch__5891__auto__,c__5906__auto___32669){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_32637 = [null,null,null,null,null,null,null,null];(statearr_32637[(0)] = state_machine__5892__auto__);
(statearr_32637[(1)] = (1));
return statearr_32637;
});
var state_machine__5892__auto____1 = (function (state_32625){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_32625);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e32638){if((e32638 instanceof Object))
{var ex__5895__auto__ = e32638;var statearr_32639_32675 = state_32625;(statearr_32639_32675[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32625);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32638;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32676 = state_32625;
state_32625 = G__32676;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_32625){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_32625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto___32669))
})();var state__5908__auto__ = (function (){var statearr_32640 = f__5907__auto__.call(null);(statearr_32640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto___32669);
return statearr_32640;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto___32669))
);
var c__5906__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto__){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto__){
return (function (state_32653){var state_val_32654 = (state_32653[(1)]);if((state_val_32654 === (7)))
{var inst_32644 = (state_32653[(2)]);var inst_32645 = controller.call(null,inst_32644);var state_32653__$1 = (function (){var statearr_32655 = state_32653;(statearr_32655[(7)] = inst_32645);
return statearr_32655;
})();var statearr_32656_32677 = state_32653__$1;(statearr_32656_32677[(2)] = null);
(statearr_32656_32677[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32654 === (6)))
{var inst_32649 = (state_32653[(2)]);var state_32653__$1 = state_32653;var statearr_32657_32678 = state_32653__$1;(statearr_32657_32678[(2)] = inst_32649);
(statearr_32657_32678[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32654 === (5)))
{var state_32653__$1 = state_32653;var statearr_32658_32679 = state_32653__$1;(statearr_32658_32679[(2)] = null);
(statearr_32658_32679[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32654 === (4)))
{var state_32653__$1 = state_32653;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32653__$1,(7),antares.core.control_stream);
} else
{if((state_val_32654 === (3)))
{var inst_32651 = (state_32653[(2)]);var state_32653__$1 = state_32653;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32653__$1,inst_32651);
} else
{if((state_val_32654 === (2)))
{var state_32653__$1 = state_32653;var statearr_32659_32680 = state_32653__$1;(statearr_32659_32680[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32654 === (1)))
{var state_32653__$1 = state_32653;var statearr_32661_32681 = state_32653__$1;(statearr_32661_32681[(2)] = null);
(statearr_32661_32681[(1)] = (2));
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
var state_machine__5892__auto____0 = (function (){var statearr_32665 = [null,null,null,null,null,null,null,null];(statearr_32665[(0)] = state_machine__5892__auto__);
(statearr_32665[(1)] = (1));
return statearr_32665;
});
var state_machine__5892__auto____1 = (function (state_32653){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_32653);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e32666){if((e32666 instanceof Object))
{var ex__5895__auto__ = e32666;var statearr_32667_32682 = state_32653;(statearr_32667_32682[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32653);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32666;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32683 = state_32653;
state_32653 = G__32683;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_32653){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_32653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto__))
})();var state__5908__auto__ = (function (){var statearr_32668 = f__5907__auto__.call(null);(statearr_32668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto__);
return statearr_32668;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto__))
);
return c__5906__auto__;
});
antares.core.renderer = (function renderer(root){return cljs.core.add_watch.call(null,antares.core.app_state,new cljs.core.Keyword(null,"renderer","renderer",336841071),(function (key,reference,old_value,new_value){var root_node = document.querySelector("#antares");var new_dom = antares.core.render_html.call(null,root,new_value);var seq__32692_32700 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__32693_32701 = null;var count__32694_32702 = (0);var i__32695_32703 = (0);while(true){
if((i__32695_32703 < count__32694_32702))
{var component_32704 = cljs.core._nth.call(null,chunk__32693_32701,i__32695_32703);antares.core.component_will_update.call(null,component_32704);
{
var G__32705 = seq__32692_32700;
var G__32706 = chunk__32693_32701;
var G__32707 = count__32694_32702;
var G__32708 = (i__32695_32703 + (1));
seq__32692_32700 = G__32705;
chunk__32693_32701 = G__32706;
count__32694_32702 = G__32707;
i__32695_32703 = G__32708;
continue;
}
} else
{var temp__4126__auto___32709 = cljs.core.seq.call(null,seq__32692_32700);if(temp__4126__auto___32709)
{var seq__32692_32710__$1 = temp__4126__auto___32709;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32692_32710__$1))
{var c__4309__auto___32711 = cljs.core.chunk_first.call(null,seq__32692_32710__$1);{
var G__32712 = cljs.core.chunk_rest.call(null,seq__32692_32710__$1);
var G__32713 = c__4309__auto___32711;
var G__32714 = cljs.core.count.call(null,c__4309__auto___32711);
var G__32715 = (0);
seq__32692_32700 = G__32712;
chunk__32693_32701 = G__32713;
count__32694_32702 = G__32714;
i__32695_32703 = G__32715;
continue;
}
} else
{var component_32716 = cljs.core.first.call(null,seq__32692_32710__$1);antares.core.component_will_update.call(null,component_32716);
{
var G__32717 = cljs.core.next.call(null,seq__32692_32710__$1);
var G__32718 = null;
var G__32719 = (0);
var G__32720 = (0);
seq__32692_32700 = G__32717;
chunk__32693_32701 = G__32718;
count__32694_32702 = G__32719;
i__32695_32703 = G__32720;
continue;
}
}
} else
{}
}
break;
}
root_node.innerHTML = new_dom;
var seq__32696 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__32697 = null;var count__32698 = (0);var i__32699 = (0);while(true){
if((i__32699 < count__32698))
{var component = cljs.core._nth.call(null,chunk__32697,i__32699);antares.core.component_did_update.call(null,component);
{
var G__32721 = seq__32696;
var G__32722 = chunk__32697;
var G__32723 = count__32698;
var G__32724 = (i__32699 + (1));
seq__32696 = G__32721;
chunk__32697 = G__32722;
count__32698 = G__32723;
i__32699 = G__32724;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32696);if(temp__4126__auto__)
{var seq__32696__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32696__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__32696__$1);{
var G__32725 = cljs.core.chunk_rest.call(null,seq__32696__$1);
var G__32726 = c__4309__auto__;
var G__32727 = cljs.core.count.call(null,c__4309__auto__);
var G__32728 = (0);
seq__32696 = G__32725;
chunk__32697 = G__32726;
count__32698 = G__32727;
i__32699 = G__32728;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__32696__$1);antares.core.component_did_update.call(null,component);
{
var G__32729 = cljs.core.next.call(null,seq__32696__$1);
var G__32730 = null;
var G__32731 = (0);
var G__32732 = (0);
seq__32696 = G__32729;
chunk__32697 = G__32730;
count__32698 = G__32731;
i__32699 = G__32732;
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