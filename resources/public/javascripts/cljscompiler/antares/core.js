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
antares.core.add_class = (function add_class(target,class$){return goog.dom.classes.add(target,class$);
});
antares.core.remove_class = (function remove_class(target,class$){return goog.dom.classes.remove(target,class$);
});
antares.core.toggle_class = (function toggle_class(target,class$){return goog.dom.classes.toggle(target,class$);
});
antares.core.nodelist__GT_array = (function nodelist__GT_array(nodelist){return Array.prototype.slice.call(nodelist);
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
antares.core.LifeCycle = (function (){var obj23768 = {};return obj23768;
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
antares.core.Registerable = (function (){var obj23770 = {};return obj23770;
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
antares.core.Renderable = (function (){var obj23772 = {};return obj23772;
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
antares.core.Mountable = (function (){var obj23774 = {};return obj23774;
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
* @param {*} event_mappings
* @param {*} controls
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
antares.core.Component = (function (ident,render,style,event_mappings,controls,__meta,__extmap){
this.ident = ident;
this.render = render;
this.style = style;
this.event_mappings = event_mappings;
this.controls = controls;
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
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4141__auto__,k23776,else__4142__auto__){var self__ = this;
var this__4141__auto____$1 = this;var G__23778 = (((k23776 instanceof cljs.core.Keyword))?k23776.fqn:null);switch (G__23778) {
case "controls":
return self__.controls;

break;
case "event-mappings":
return self__.event_mappings;

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
return cljs.core.get.call(null,self__.__extmap,k23776,else__4142__auto__);

}
});
antares.core.Component.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4153__auto__,writer__4154__auto__,opts__4155__auto__){var self__ = this;
var this__4153__auto____$1 = this;var pr_pair__4156__auto__ = ((function (this__4153__auto____$1){
return (function (keyval__4157__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4154__auto__,cljs.core.pr_writer,""," ","",opts__4155__auto__,keyval__4157__auto__);
});})(this__4153__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4154__auto__,pr_pair__4156__auto__,"#antares.core.Component{",", ","}",opts__4155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render","render",-1408033454),self__.render],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",-496642736),self__.style],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885),self__.event_mappings],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4137__auto__){var self__ = this;
var this__4137__auto____$1 = this;return self__.__meta;
});
antares.core.Component.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4133__auto__){var self__ = this;
var this__4133__auto____$1 = this;return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.event_mappings,self__.controls,self__.__meta,self__.__extmap,self__.__hash));
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
var this__4148__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"controls","controls",1340701452),null,new cljs.core.Keyword(null,"style","style",-496642736),null,new cljs.core.Keyword(null,"render","render",-1408033454),null,new cljs.core.Keyword(null,"ident","ident",-742346),null,new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885),null], null), null),k__4149__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4148__auto____$1),self__.__meta),k__4149__auto__);
} else
{return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.event_mappings,self__.controls,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4149__auto__)),null));
}
});
antares.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4146__auto__,k__4147__auto__,G__23775){var self__ = this;
var this__4146__auto____$1 = this;var pred__23779 = cljs.core.keyword_identical_QMARK_;var expr__23780 = k__4147__auto__;if(cljs.core.truth_(pred__23779.call(null,new cljs.core.Keyword(null,"ident","ident",-742346),expr__23780)))
{return (new antares.core.Component(G__23775,self__.render,self__.style,self__.event_mappings,self__.controls,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__23779.call(null,new cljs.core.Keyword(null,"render","render",-1408033454),expr__23780)))
{return (new antares.core.Component(self__.ident,G__23775,self__.style,self__.event_mappings,self__.controls,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__23779.call(null,new cljs.core.Keyword(null,"style","style",-496642736),expr__23780)))
{return (new antares.core.Component(self__.ident,self__.render,G__23775,self__.event_mappings,self__.controls,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__23779.call(null,new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885),expr__23780)))
{return (new antares.core.Component(self__.ident,self__.render,self__.style,G__23775,self__.controls,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__23779.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452),expr__23780)))
{return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.event_mappings,G__23775,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.event_mappings,self__.controls,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4147__auto__,G__23775),null));
}
}
}
}
}
});
antares.core.Component.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4151__auto__){var self__ = this;
var this__4151__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render","render",-1408033454),self__.render],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",-496642736),self__.style],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885),self__.event_mappings],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4138__auto__,G__23775){var self__ = this;
var this__4138__auto____$1 = this;return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.event_mappings,self__.controls,G__23775,self__.__extmap,self__.__hash));
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
{var style_data = temp__4124__auto__;return garden.core.css.call(null,style_data);
} else
{return null;
}
});
antares.core.Component.cljs$lang$type = true;
antares.core.Component.cljs$lang$ctorPrSeq = (function (this__4173__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"antares.core/Component");
});
antares.core.Component.cljs$lang$ctorPrWriter = (function (this__4173__auto__,writer__4174__auto__){return cljs.core._write.call(null,writer__4174__auto__,"antares.core/Component");
});
antares.core.__GT_Component = (function __GT_Component(ident,render,style,event_mappings,controls){return (new antares.core.Component(ident,render,style,event_mappings,controls));
});
antares.core.map__GT_Component = (function map__GT_Component(G__23777){return (new antares.core.Component(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(G__23777),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(G__23777),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(G__23777),new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885).cljs$core$IFn$_invoke$arity$1(G__23777),new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(G__23777),null,cljs.core.dissoc.call(null,G__23777,new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885),new cljs.core.Keyword(null,"controls","controls",1340701452))));
});
antares.core.component = (function component(source_map){var component__$1 = antares.core.map__GT_Component.call(null,source_map);antares.core.register_component.call(null,component__$1);
return component__$1;
});
antares.core.bind = (function bind(component,app_cursor,dom_cursor){var component_data = antares.core.initialize_state.call(null,component,app_cursor);antares.core.component_will_mount.call(null,component);
antares.core.mount_component.call(null,component,component_data,dom_cursor);
var seq__23787_23791 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__23788_23792 = null;var count__23789_23793 = (0);var i__23790_23794 = (0);while(true){
if((i__23790_23794 < count__23789_23793))
{var component_23795__$1 = cljs.core._nth.call(null,chunk__23788_23792,i__23790_23794);antares.core.component_did_update.call(null,component_23795__$1);
{
var G__23796 = seq__23787_23791;
var G__23797 = chunk__23788_23792;
var G__23798 = count__23789_23793;
var G__23799 = (i__23790_23794 + (1));
seq__23787_23791 = G__23796;
chunk__23788_23792 = G__23797;
count__23789_23793 = G__23798;
i__23790_23794 = G__23799;
continue;
}
} else
{var temp__4126__auto___23800 = cljs.core.seq.call(null,seq__23787_23791);if(temp__4126__auto___23800)
{var seq__23787_23801__$1 = temp__4126__auto___23800;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23787_23801__$1))
{var c__4309__auto___23802 = cljs.core.chunk_first.call(null,seq__23787_23801__$1);{
var G__23803 = cljs.core.chunk_rest.call(null,seq__23787_23801__$1);
var G__23804 = c__4309__auto___23802;
var G__23805 = cljs.core.count.call(null,c__4309__auto___23802);
var G__23806 = (0);
seq__23787_23791 = G__23803;
chunk__23788_23792 = G__23804;
count__23789_23793 = G__23805;
i__23790_23794 = G__23806;
continue;
}
} else
{var component_23807__$1 = cljs.core.first.call(null,seq__23787_23801__$1);antares.core.component_did_update.call(null,component_23807__$1);
{
var G__23808 = cljs.core.next.call(null,seq__23787_23801__$1);
var G__23809 = null;
var G__23810 = (0);
var G__23811 = (0);
seq__23787_23791 = G__23808;
chunk__23788_23792 = G__23809;
count__23789_23793 = G__23810;
i__23790_23794 = G__23811;
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
var root_node_23816 = document.querySelector("body");var seq__23812_23817 = cljs.core.seq.call(null,antares.core.event_list);var chunk__23813_23818 = null;var count__23814_23819 = (0);var i__23815_23820 = (0);while(true){
if((i__23815_23820 < count__23814_23819))
{var event_name_23821 = cljs.core._nth.call(null,chunk__23813_23818,i__23815_23820);goog.events.listen(root_node_23816,event_name_23821,((function (seq__23812_23817,chunk__23813_23818,count__23814_23819,i__23815_23820,event_name_23821,root_node_23816){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__23812_23817,chunk__23813_23818,count__23814_23819,i__23815_23820,event_name_23821,root_node_23816))
);
{
var G__23822 = seq__23812_23817;
var G__23823 = chunk__23813_23818;
var G__23824 = count__23814_23819;
var G__23825 = (i__23815_23820 + (1));
seq__23812_23817 = G__23822;
chunk__23813_23818 = G__23823;
count__23814_23819 = G__23824;
i__23815_23820 = G__23825;
continue;
}
} else
{var temp__4126__auto___23826 = cljs.core.seq.call(null,seq__23812_23817);if(temp__4126__auto___23826)
{var seq__23812_23827__$1 = temp__4126__auto___23826;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23812_23827__$1))
{var c__4309__auto___23828 = cljs.core.chunk_first.call(null,seq__23812_23827__$1);{
var G__23829 = cljs.core.chunk_rest.call(null,seq__23812_23827__$1);
var G__23830 = c__4309__auto___23828;
var G__23831 = cljs.core.count.call(null,c__4309__auto___23828);
var G__23832 = (0);
seq__23812_23817 = G__23829;
chunk__23813_23818 = G__23830;
count__23814_23819 = G__23831;
i__23815_23820 = G__23832;
continue;
}
} else
{var event_name_23833 = cljs.core.first.call(null,seq__23812_23827__$1);goog.events.listen(root_node_23816,event_name_23833,((function (seq__23812_23817,chunk__23813_23818,count__23814_23819,i__23815_23820,event_name_23833,seq__23812_23827__$1,temp__4126__auto___23826,root_node_23816){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__23812_23817,chunk__23813_23818,count__23814_23819,i__23815_23820,event_name_23833,seq__23812_23827__$1,temp__4126__auto___23826,root_node_23816))
);
{
var G__23834 = cljs.core.next.call(null,seq__23812_23827__$1);
var G__23835 = null;
var G__23836 = (0);
var G__23837 = (0);
seq__23812_23817 = G__23834;
chunk__23813_23818 = G__23835;
count__23814_23819 = G__23836;
i__23815_23820 = G__23837;
continue;
}
}
} else
{}
}
break;
}
antares.core.dispatch_event_BANG_ = (function dispatch_event_BANG_(event,event_mappings){var seq__23842 = cljs.core.seq.call(null,event_mappings);var chunk__23843 = null;var count__23844 = (0);var i__23845 = (0);while(true){
if((i__23845 < count__23844))
{var event_mapping = cljs.core._nth.call(null,chunk__23843,i__23845);if(cljs.core.truth_(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(event_mapping).call(null,event)))
{cljs.core.async.put_BANG_.call(null,antares.core.control_stream,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(event_mapping).call(null,event));
} else
{}
{
var G__23846 = seq__23842;
var G__23847 = chunk__23843;
var G__23848 = count__23844;
var G__23849 = (i__23845 + (1));
seq__23842 = G__23846;
chunk__23843 = G__23847;
count__23844 = G__23848;
i__23845 = G__23849;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__23842);if(temp__4126__auto__)
{var seq__23842__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23842__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__23842__$1);{
var G__23850 = cljs.core.chunk_rest.call(null,seq__23842__$1);
var G__23851 = c__4309__auto__;
var G__23852 = cljs.core.count.call(null,c__4309__auto__);
var G__23853 = (0);
seq__23842 = G__23850;
chunk__23843 = G__23851;
count__23844 = G__23852;
i__23845 = G__23853;
continue;
}
} else
{var event_mapping = cljs.core.first.call(null,seq__23842__$1);if(cljs.core.truth_(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(event_mapping).call(null,event)))
{cljs.core.async.put_BANG_.call(null,antares.core.control_stream,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(event_mapping).call(null,event));
} else
{}
{
var G__23854 = cljs.core.next.call(null,seq__23842__$1);
var G__23855 = null;
var G__23856 = (0);
var G__23857 = (0);
seq__23842 = G__23854;
chunk__23843 = G__23855;
count__23844 = G__23856;
i__23845 = G__23857;
continue;
}
}
} else
{return null;
}
}
break;
}
});
antares.core.controller_action_BANG_ = (function controller_action_BANG_(p__23859,controls){var vec__23865 = p__23859;var command = cljs.core.nth.call(null,vec__23865,(0),null);var data = cljs.core.nth.call(null,vec__23865,(1),null);var seq__23866 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (vec__23865,command,data){
return (function (p1__23858_SHARP_){return cljs.core._EQ_.call(null,command,new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(p1__23858_SHARP_));
});})(vec__23865,command,data))
,controls));var chunk__23867 = null;var count__23868 = (0);var i__23869 = (0);while(true){
if((i__23869 < count__23868))
{var control = cljs.core._nth.call(null,chunk__23867,i__23869);new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(control).call(null,data);
{
var G__23870 = seq__23866;
var G__23871 = chunk__23867;
var G__23872 = count__23868;
var G__23873 = (i__23869 + (1));
seq__23866 = G__23870;
chunk__23867 = G__23871;
count__23868 = G__23872;
i__23869 = G__23873;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__23866);if(temp__4126__auto__)
{var seq__23866__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23866__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__23866__$1);{
var G__23874 = cljs.core.chunk_rest.call(null,seq__23866__$1);
var G__23875 = c__4309__auto__;
var G__23876 = cljs.core.count.call(null,c__4309__auto__);
var G__23877 = (0);
seq__23866 = G__23874;
chunk__23867 = G__23875;
count__23868 = G__23876;
i__23869 = G__23877;
continue;
}
} else
{var control = cljs.core.first.call(null,seq__23866__$1);new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(control).call(null,data);
{
var G__23878 = cljs.core.next.call(null,seq__23866__$1);
var G__23879 = null;
var G__23880 = (0);
var G__23881 = (0);
seq__23866 = G__23878;
chunk__23867 = G__23879;
count__23868 = G__23880;
i__23869 = G__23881;
continue;
}
}
} else
{return null;
}
}
break;
}
});
antares.core.event_loop = (function event_loop(event_mappings,controls){var c__5906__auto___23994 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto___23994){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto___23994){
return (function (state_23950){var state_val_23951 = (state_23950[(1)]);if((state_val_23951 === (7)))
{var inst_23941 = (state_23950[(2)]);var inst_23942 = antares.core.dispatch_event_BANG_.call(null,inst_23941,event_mappings);var state_23950__$1 = (function (){var statearr_23952 = state_23950;(statearr_23952[(7)] = inst_23942);
return statearr_23952;
})();var statearr_23953_23995 = state_23950__$1;(statearr_23953_23995[(2)] = null);
(statearr_23953_23995[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23951 === (6)))
{var inst_23946 = (state_23950[(2)]);var state_23950__$1 = state_23950;var statearr_23954_23996 = state_23950__$1;(statearr_23954_23996[(2)] = inst_23946);
(statearr_23954_23996[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23951 === (5)))
{var state_23950__$1 = state_23950;var statearr_23955_23997 = state_23950__$1;(statearr_23955_23997[(2)] = null);
(statearr_23955_23997[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23951 === (4)))
{var state_23950__$1 = state_23950;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23950__$1,(7),antares.core.event_stream);
} else
{if((state_val_23951 === (3)))
{var inst_23948 = (state_23950[(2)]);var state_23950__$1 = state_23950;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23950__$1,inst_23948);
} else
{if((state_val_23951 === (2)))
{var state_23950__$1 = state_23950;var statearr_23956_23998 = state_23950__$1;(statearr_23956_23998[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23951 === (1)))
{var state_23950__$1 = state_23950;var statearr_23958_23999 = state_23950__$1;(statearr_23958_23999[(2)] = null);
(statearr_23958_23999[(1)] = (2));
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
});})(c__5906__auto___23994))
;return ((function (switch__5891__auto__,c__5906__auto___23994){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_23962 = [null,null,null,null,null,null,null,null];(statearr_23962[(0)] = state_machine__5892__auto__);
(statearr_23962[(1)] = (1));
return statearr_23962;
});
var state_machine__5892__auto____1 = (function (state_23950){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_23950);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e23963){if((e23963 instanceof Object))
{var ex__5895__auto__ = e23963;var statearr_23964_24000 = state_23950;(statearr_23964_24000[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23950);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23963;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24001 = state_23950;
state_23950 = G__24001;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_23950){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_23950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto___23994))
})();var state__5908__auto__ = (function (){var statearr_23965 = f__5907__auto__.call(null);(statearr_23965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto___23994);
return statearr_23965;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto___23994))
);
var c__5906__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto__){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto__){
return (function (state_23978){var state_val_23979 = (state_23978[(1)]);if((state_val_23979 === (7)))
{var inst_23969 = (state_23978[(2)]);var inst_23970 = antares.core.controller_action_BANG_.call(null,inst_23969,controls);var state_23978__$1 = (function (){var statearr_23980 = state_23978;(statearr_23980[(7)] = inst_23970);
return statearr_23980;
})();var statearr_23981_24002 = state_23978__$1;(statearr_23981_24002[(2)] = null);
(statearr_23981_24002[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23979 === (6)))
{var inst_23974 = (state_23978[(2)]);var state_23978__$1 = state_23978;var statearr_23982_24003 = state_23978__$1;(statearr_23982_24003[(2)] = inst_23974);
(statearr_23982_24003[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23979 === (5)))
{var state_23978__$1 = state_23978;var statearr_23983_24004 = state_23978__$1;(statearr_23983_24004[(2)] = null);
(statearr_23983_24004[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23979 === (4)))
{var state_23978__$1 = state_23978;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23978__$1,(7),antares.core.control_stream);
} else
{if((state_val_23979 === (3)))
{var inst_23976 = (state_23978[(2)]);var state_23978__$1 = state_23978;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23978__$1,inst_23976);
} else
{if((state_val_23979 === (2)))
{var state_23978__$1 = state_23978;var statearr_23984_24005 = state_23978__$1;(statearr_23984_24005[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23979 === (1)))
{var state_23978__$1 = state_23978;var statearr_23986_24006 = state_23978__$1;(statearr_23986_24006[(2)] = null);
(statearr_23986_24006[(1)] = (2));
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
var state_machine__5892__auto____0 = (function (){var statearr_23990 = [null,null,null,null,null,null,null,null];(statearr_23990[(0)] = state_machine__5892__auto__);
(statearr_23990[(1)] = (1));
return statearr_23990;
});
var state_machine__5892__auto____1 = (function (state_23978){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_23978);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e23991){if((e23991 instanceof Object))
{var ex__5895__auto__ = e23991;var statearr_23992_24007 = state_23978;(statearr_23992_24007[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23978);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23991;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24008 = state_23978;
state_23978 = G__24008;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_23978){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_23978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto__))
})();var state__5908__auto__ = (function (){var statearr_23993 = f__5907__auto__.call(null);(statearr_23993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto__);
return statearr_23993;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto__))
);
return c__5906__auto__;
});
antares.core.renderer = (function renderer(root){return cljs.core.add_watch.call(null,antares.core.app_state,new cljs.core.Keyword(null,"renderer","renderer",336841071),(function (key,reference,old_value,new_value){var root_node = document.querySelector("#antares");var new_dom = antares.core.render_html.call(null,root,new_value);var seq__24017_24025 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__24018_24026 = null;var count__24019_24027 = (0);var i__24020_24028 = (0);while(true){
if((i__24020_24028 < count__24019_24027))
{var component_24029 = cljs.core._nth.call(null,chunk__24018_24026,i__24020_24028);antares.core.component_will_update.call(null,component_24029);
{
var G__24030 = seq__24017_24025;
var G__24031 = chunk__24018_24026;
var G__24032 = count__24019_24027;
var G__24033 = (i__24020_24028 + (1));
seq__24017_24025 = G__24030;
chunk__24018_24026 = G__24031;
count__24019_24027 = G__24032;
i__24020_24028 = G__24033;
continue;
}
} else
{var temp__4126__auto___24034 = cljs.core.seq.call(null,seq__24017_24025);if(temp__4126__auto___24034)
{var seq__24017_24035__$1 = temp__4126__auto___24034;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24017_24035__$1))
{var c__4309__auto___24036 = cljs.core.chunk_first.call(null,seq__24017_24035__$1);{
var G__24037 = cljs.core.chunk_rest.call(null,seq__24017_24035__$1);
var G__24038 = c__4309__auto___24036;
var G__24039 = cljs.core.count.call(null,c__4309__auto___24036);
var G__24040 = (0);
seq__24017_24025 = G__24037;
chunk__24018_24026 = G__24038;
count__24019_24027 = G__24039;
i__24020_24028 = G__24040;
continue;
}
} else
{var component_24041 = cljs.core.first.call(null,seq__24017_24035__$1);antares.core.component_will_update.call(null,component_24041);
{
var G__24042 = cljs.core.next.call(null,seq__24017_24035__$1);
var G__24043 = null;
var G__24044 = (0);
var G__24045 = (0);
seq__24017_24025 = G__24042;
chunk__24018_24026 = G__24043;
count__24019_24027 = G__24044;
i__24020_24028 = G__24045;
continue;
}
}
} else
{}
}
break;
}
root_node.innerHTML = new_dom;
var seq__24021 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__24022 = null;var count__24023 = (0);var i__24024 = (0);while(true){
if((i__24024 < count__24023))
{var component = cljs.core._nth.call(null,chunk__24022,i__24024);antares.core.component_did_update.call(null,component);
{
var G__24046 = seq__24021;
var G__24047 = chunk__24022;
var G__24048 = count__24023;
var G__24049 = (i__24024 + (1));
seq__24021 = G__24046;
chunk__24022 = G__24047;
count__24023 = G__24048;
i__24024 = G__24049;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__24021);if(temp__4126__auto__)
{var seq__24021__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24021__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__24021__$1);{
var G__24050 = cljs.core.chunk_rest.call(null,seq__24021__$1);
var G__24051 = c__4309__auto__;
var G__24052 = cljs.core.count.call(null,c__4309__auto__);
var G__24053 = (0);
seq__24021 = G__24050;
chunk__24022 = G__24051;
count__24023 = G__24052;
i__24024 = G__24053;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__24021__$1);antares.core.component_did_update.call(null,component);
{
var G__24054 = cljs.core.next.call(null,seq__24021__$1);
var G__24055 = null;
var G__24056 = (0);
var G__24057 = (0);
seq__24021 = G__24054;
chunk__24022 = G__24055;
count__24023 = G__24056;
i__24024 = G__24057;
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
antares.core.get = (function get(request){return ajax.core.GET.call(null,new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(request),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),request.call(null,new cljs.core.Keyword(null,"params","params",710516235)),new cljs.core.Keyword(null,"handler","handler",-195596612),request.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612))], null));
});
antares.core.post = (function post(request){return ajax.core.POST.call(null,new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(request),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),request.call(null,new cljs.core.Keyword(null,"params","params",710516235)),new cljs.core.Keyword(null,"handler","handler",-195596612),request.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612))], null));
});

//# sourceMappingURL=core.js.map