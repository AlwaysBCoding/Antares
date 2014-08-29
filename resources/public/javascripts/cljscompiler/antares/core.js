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
antares.core.LifeCycle = (function (){var obj38223 = {};return obj38223;
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
antares.core.Registerable = (function (){var obj38225 = {};return obj38225;
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
antares.core.Renderable = (function (){var obj38227 = {};return obj38227;
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
antares.core.Mountable = (function (){var obj38229 = {};return obj38229;
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
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4141__auto__,k38231,else__4142__auto__){var self__ = this;
var this__4141__auto____$1 = this;var G__38233 = (((k38231 instanceof cljs.core.Keyword))?k38231.fqn:null);switch (G__38233) {
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
return cljs.core.get.call(null,self__.__extmap,k38231,else__4142__auto__);

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
antares.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4146__auto__,k__4147__auto__,G__38230){var self__ = this;
var this__4146__auto____$1 = this;var pred__38234 = cljs.core.keyword_identical_QMARK_;var expr__38235 = k__4147__auto__;if(cljs.core.truth_(pred__38234.call(null,new cljs.core.Keyword(null,"ident","ident",-742346),expr__38235)))
{return (new antares.core.Component(G__38230,self__.render,self__.style,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__38234.call(null,new cljs.core.Keyword(null,"render","render",-1408033454),expr__38235)))
{return (new antares.core.Component(self__.ident,G__38230,self__.style,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__38234.call(null,new cljs.core.Keyword(null,"style","style",-496642736),expr__38235)))
{return (new antares.core.Component(self__.ident,self__.render,G__38230,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4147__auto__,G__38230),null));
}
}
}
});
antares.core.Component.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4151__auto__){var self__ = this;
var this__4151__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render","render",-1408033454),self__.render],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",-496642736),self__.style],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4138__auto__,G__38230){var self__ = this;
var this__4138__auto____$1 = this;return (new antares.core.Component(self__.ident,self__.render,self__.style,G__38230,self__.__extmap,self__.__hash));
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
antares.core.map__GT_Component = (function map__GT_Component(G__38232){return (new antares.core.Component(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(G__38232),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(G__38232),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(G__38232),null,cljs.core.dissoc.call(null,G__38232,new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"style","style",-496642736))));
});
antares.core.component = (function component(source_map){var component__$1 = antares.core.map__GT_Component.call(null,source_map);antares.core.register_component.call(null,component__$1);
return component__$1;
});
antares.core.bind = (function bind(component,app_cursor,dom_cursor){var component_data = antares.core.initialize_state.call(null,component,app_cursor);antares.core.component_will_mount.call(null,component);
antares.core.mount_component.call(null,component,component_data,dom_cursor);
var seq__38242_38246 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__38243_38247 = null;var count__38244_38248 = (0);var i__38245_38249 = (0);while(true){
if((i__38245_38249 < count__38244_38248))
{var component_38250__$1 = cljs.core._nth.call(null,chunk__38243_38247,i__38245_38249);antares.core.component_did_update.call(null,component_38250__$1);
{
var G__38251 = seq__38242_38246;
var G__38252 = chunk__38243_38247;
var G__38253 = count__38244_38248;
var G__38254 = (i__38245_38249 + (1));
seq__38242_38246 = G__38251;
chunk__38243_38247 = G__38252;
count__38244_38248 = G__38253;
i__38245_38249 = G__38254;
continue;
}
} else
{var temp__4126__auto___38255 = cljs.core.seq.call(null,seq__38242_38246);if(temp__4126__auto___38255)
{var seq__38242_38256__$1 = temp__4126__auto___38255;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38242_38256__$1))
{var c__4309__auto___38257 = cljs.core.chunk_first.call(null,seq__38242_38256__$1);{
var G__38258 = cljs.core.chunk_rest.call(null,seq__38242_38256__$1);
var G__38259 = c__4309__auto___38257;
var G__38260 = cljs.core.count.call(null,c__4309__auto___38257);
var G__38261 = (0);
seq__38242_38246 = G__38258;
chunk__38243_38247 = G__38259;
count__38244_38248 = G__38260;
i__38245_38249 = G__38261;
continue;
}
} else
{var component_38262__$1 = cljs.core.first.call(null,seq__38242_38256__$1);antares.core.component_did_update.call(null,component_38262__$1);
{
var G__38263 = cljs.core.next.call(null,seq__38242_38256__$1);
var G__38264 = null;
var G__38265 = (0);
var G__38266 = (0);
seq__38242_38246 = G__38263;
chunk__38243_38247 = G__38264;
count__38244_38248 = G__38265;
i__38245_38249 = G__38266;
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
var root_node_38271 = document.querySelector("body");var seq__38267_38272 = cljs.core.seq.call(null,antares.core.event_list);var chunk__38268_38273 = null;var count__38269_38274 = (0);var i__38270_38275 = (0);while(true){
if((i__38270_38275 < count__38269_38274))
{var event_name_38276 = cljs.core._nth.call(null,chunk__38268_38273,i__38270_38275);goog.events.listen(root_node_38271,event_name_38276,((function (seq__38267_38272,chunk__38268_38273,count__38269_38274,i__38270_38275,event_name_38276,root_node_38271){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__38267_38272,chunk__38268_38273,count__38269_38274,i__38270_38275,event_name_38276,root_node_38271))
);
{
var G__38277 = seq__38267_38272;
var G__38278 = chunk__38268_38273;
var G__38279 = count__38269_38274;
var G__38280 = (i__38270_38275 + (1));
seq__38267_38272 = G__38277;
chunk__38268_38273 = G__38278;
count__38269_38274 = G__38279;
i__38270_38275 = G__38280;
continue;
}
} else
{var temp__4126__auto___38281 = cljs.core.seq.call(null,seq__38267_38272);if(temp__4126__auto___38281)
{var seq__38267_38282__$1 = temp__4126__auto___38281;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38267_38282__$1))
{var c__4309__auto___38283 = cljs.core.chunk_first.call(null,seq__38267_38282__$1);{
var G__38284 = cljs.core.chunk_rest.call(null,seq__38267_38282__$1);
var G__38285 = c__4309__auto___38283;
var G__38286 = cljs.core.count.call(null,c__4309__auto___38283);
var G__38287 = (0);
seq__38267_38272 = G__38284;
chunk__38268_38273 = G__38285;
count__38269_38274 = G__38286;
i__38270_38275 = G__38287;
continue;
}
} else
{var event_name_38288 = cljs.core.first.call(null,seq__38267_38282__$1);goog.events.listen(root_node_38271,event_name_38288,((function (seq__38267_38272,chunk__38268_38273,count__38269_38274,i__38270_38275,event_name_38288,seq__38267_38282__$1,temp__4126__auto___38281,root_node_38271){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__38267_38272,chunk__38268_38273,count__38269_38274,i__38270_38275,event_name_38288,seq__38267_38282__$1,temp__4126__auto___38281,root_node_38271))
);
{
var G__38289 = cljs.core.next.call(null,seq__38267_38282__$1);
var G__38290 = null;
var G__38291 = (0);
var G__38292 = (0);
seq__38267_38272 = G__38289;
chunk__38268_38273 = G__38290;
count__38269_38274 = G__38291;
i__38270_38275 = G__38292;
continue;
}
}
} else
{}
}
break;
}
antares.core.event_loop = (function event_loop(event_mappings,controller){var c__5906__auto___38405 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto___38405){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto___38405){
return (function (state_38361){var state_val_38362 = (state_38361[(1)]);if((state_val_38362 === (7)))
{var inst_38352 = (state_38361[(2)]);var inst_38353 = event_mappings.call(null,inst_38352);var state_38361__$1 = (function (){var statearr_38363 = state_38361;(statearr_38363[(7)] = inst_38353);
return statearr_38363;
})();var statearr_38364_38406 = state_38361__$1;(statearr_38364_38406[(2)] = null);
(statearr_38364_38406[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38362 === (6)))
{var inst_38357 = (state_38361[(2)]);var state_38361__$1 = state_38361;var statearr_38365_38407 = state_38361__$1;(statearr_38365_38407[(2)] = inst_38357);
(statearr_38365_38407[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38362 === (5)))
{var state_38361__$1 = state_38361;var statearr_38366_38408 = state_38361__$1;(statearr_38366_38408[(2)] = null);
(statearr_38366_38408[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38362 === (4)))
{var state_38361__$1 = state_38361;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38361__$1,(7),antares.core.event_stream);
} else
{if((state_val_38362 === (3)))
{var inst_38359 = (state_38361[(2)]);var state_38361__$1 = state_38361;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38361__$1,inst_38359);
} else
{if((state_val_38362 === (2)))
{var state_38361__$1 = state_38361;var statearr_38367_38409 = state_38361__$1;(statearr_38367_38409[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38362 === (1)))
{var state_38361__$1 = state_38361;var statearr_38369_38410 = state_38361__$1;(statearr_38369_38410[(2)] = null);
(statearr_38369_38410[(1)] = (2));
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
});})(c__5906__auto___38405))
;return ((function (switch__5891__auto__,c__5906__auto___38405){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_38373 = [null,null,null,null,null,null,null,null];(statearr_38373[(0)] = state_machine__5892__auto__);
(statearr_38373[(1)] = (1));
return statearr_38373;
});
var state_machine__5892__auto____1 = (function (state_38361){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_38361);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e38374){if((e38374 instanceof Object))
{var ex__5895__auto__ = e38374;var statearr_38375_38411 = state_38361;(statearr_38375_38411[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38361);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38374;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38412 = state_38361;
state_38361 = G__38412;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_38361){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_38361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto___38405))
})();var state__5908__auto__ = (function (){var statearr_38376 = f__5907__auto__.call(null);(statearr_38376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto___38405);
return statearr_38376;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto___38405))
);
var c__5906__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto__){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto__){
return (function (state_38389){var state_val_38390 = (state_38389[(1)]);if((state_val_38390 === (7)))
{var inst_38380 = (state_38389[(2)]);var inst_38381 = controller.call(null,inst_38380);var state_38389__$1 = (function (){var statearr_38391 = state_38389;(statearr_38391[(7)] = inst_38381);
return statearr_38391;
})();var statearr_38392_38413 = state_38389__$1;(statearr_38392_38413[(2)] = null);
(statearr_38392_38413[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38390 === (6)))
{var inst_38385 = (state_38389[(2)]);var state_38389__$1 = state_38389;var statearr_38393_38414 = state_38389__$1;(statearr_38393_38414[(2)] = inst_38385);
(statearr_38393_38414[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38390 === (5)))
{var state_38389__$1 = state_38389;var statearr_38394_38415 = state_38389__$1;(statearr_38394_38415[(2)] = null);
(statearr_38394_38415[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38390 === (4)))
{var state_38389__$1 = state_38389;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38389__$1,(7),antares.core.control_stream);
} else
{if((state_val_38390 === (3)))
{var inst_38387 = (state_38389[(2)]);var state_38389__$1 = state_38389;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38389__$1,inst_38387);
} else
{if((state_val_38390 === (2)))
{var state_38389__$1 = state_38389;var statearr_38395_38416 = state_38389__$1;(statearr_38395_38416[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38390 === (1)))
{var state_38389__$1 = state_38389;var statearr_38397_38417 = state_38389__$1;(statearr_38397_38417[(2)] = null);
(statearr_38397_38417[(1)] = (2));
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
var state_machine__5892__auto____0 = (function (){var statearr_38401 = [null,null,null,null,null,null,null,null];(statearr_38401[(0)] = state_machine__5892__auto__);
(statearr_38401[(1)] = (1));
return statearr_38401;
});
var state_machine__5892__auto____1 = (function (state_38389){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_38389);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e38402){if((e38402 instanceof Object))
{var ex__5895__auto__ = e38402;var statearr_38403_38418 = state_38389;(statearr_38403_38418[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38389);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38402;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38419 = state_38389;
state_38389 = G__38419;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_38389){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_38389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto__))
})();var state__5908__auto__ = (function (){var statearr_38404 = f__5907__auto__.call(null);(statearr_38404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto__);
return statearr_38404;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto__))
);
return c__5906__auto__;
});
antares.core.renderer = (function renderer(root){return cljs.core.add_watch.call(null,antares.core.app_state,new cljs.core.Keyword(null,"renderer","renderer",336841071),(function (key,reference,old_value,new_value){var root_node = document.querySelector("#antares");var new_dom = antares.core.render_html.call(null,root,new_value);var seq__38428_38436 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__38429_38437 = null;var count__38430_38438 = (0);var i__38431_38439 = (0);while(true){
if((i__38431_38439 < count__38430_38438))
{var component_38440 = cljs.core._nth.call(null,chunk__38429_38437,i__38431_38439);antares.core.component_will_update.call(null,component_38440);
{
var G__38441 = seq__38428_38436;
var G__38442 = chunk__38429_38437;
var G__38443 = count__38430_38438;
var G__38444 = (i__38431_38439 + (1));
seq__38428_38436 = G__38441;
chunk__38429_38437 = G__38442;
count__38430_38438 = G__38443;
i__38431_38439 = G__38444;
continue;
}
} else
{var temp__4126__auto___38445 = cljs.core.seq.call(null,seq__38428_38436);if(temp__4126__auto___38445)
{var seq__38428_38446__$1 = temp__4126__auto___38445;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38428_38446__$1))
{var c__4309__auto___38447 = cljs.core.chunk_first.call(null,seq__38428_38446__$1);{
var G__38448 = cljs.core.chunk_rest.call(null,seq__38428_38446__$1);
var G__38449 = c__4309__auto___38447;
var G__38450 = cljs.core.count.call(null,c__4309__auto___38447);
var G__38451 = (0);
seq__38428_38436 = G__38448;
chunk__38429_38437 = G__38449;
count__38430_38438 = G__38450;
i__38431_38439 = G__38451;
continue;
}
} else
{var component_38452 = cljs.core.first.call(null,seq__38428_38446__$1);antares.core.component_will_update.call(null,component_38452);
{
var G__38453 = cljs.core.next.call(null,seq__38428_38446__$1);
var G__38454 = null;
var G__38455 = (0);
var G__38456 = (0);
seq__38428_38436 = G__38453;
chunk__38429_38437 = G__38454;
count__38430_38438 = G__38455;
i__38431_38439 = G__38456;
continue;
}
}
} else
{}
}
break;
}
root_node.innerHTML = new_dom;
var seq__38432 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__38433 = null;var count__38434 = (0);var i__38435 = (0);while(true){
if((i__38435 < count__38434))
{var component = cljs.core._nth.call(null,chunk__38433,i__38435);antares.core.component_did_update.call(null,component);
{
var G__38457 = seq__38432;
var G__38458 = chunk__38433;
var G__38459 = count__38434;
var G__38460 = (i__38435 + (1));
seq__38432 = G__38457;
chunk__38433 = G__38458;
count__38434 = G__38459;
i__38435 = G__38460;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__38432);if(temp__4126__auto__)
{var seq__38432__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38432__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__38432__$1);{
var G__38461 = cljs.core.chunk_rest.call(null,seq__38432__$1);
var G__38462 = c__4309__auto__;
var G__38463 = cljs.core.count.call(null,c__4309__auto__);
var G__38464 = (0);
seq__38432 = G__38461;
chunk__38433 = G__38462;
count__38434 = G__38463;
i__38435 = G__38464;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__38432__$1);antares.core.component_did_update.call(null,component);
{
var G__38465 = cljs.core.next.call(null,seq__38432__$1);
var G__38466 = null;
var G__38467 = (0);
var G__38468 = (0);
seq__38432 = G__38465;
chunk__38433 = G__38466;
count__38434 = G__38467;
i__38435 = G__38468;
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