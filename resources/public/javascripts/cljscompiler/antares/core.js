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
goog.require('goog.dom.dataset');
goog.require('hiccups.runtime');
goog.require('goog.dom.dataset');
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
antares.core.get_data = (function get_data(target,property_name){return goog.dom.dataset.get(target,property_name);
});
antares.core.nodelist__GT_array = (function nodelist__GT_array(nodelist){return Array.prototype.slice.call(nodelist);
});
antares.core.has_ancestor_with_class_QMARK_ = (function has_ancestor_with_class_QMARK_(node,class_name){if(cljs.core.truth_(goog.dom.getAncestorByClass(node,class_name)))
{return true;
} else
{return false;
}
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
antares.core.LifeCycle = (function (){var obj18559 = {};return obj18559;
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
antares.core.Registerable = (function (){var obj18561 = {};return obj18561;
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
antares.core.Renderable = (function (){var obj18563 = {};return obj18563;
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
antares.core.Mountable = (function (){var obj18565 = {};return obj18565;
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
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4141__auto__,k18567,else__4142__auto__){var self__ = this;
var this__4141__auto____$1 = this;var G__18569 = (((k18567 instanceof cljs.core.Keyword))?k18567.fqn:null);switch (G__18569) {
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
return cljs.core.get.call(null,self__.__extmap,k18567,else__4142__auto__);

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
antares.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4146__auto__,k__4147__auto__,G__18566){var self__ = this;
var this__4146__auto____$1 = this;var pred__18570 = cljs.core.keyword_identical_QMARK_;var expr__18571 = k__4147__auto__;if(cljs.core.truth_(pred__18570.call(null,new cljs.core.Keyword(null,"ident","ident",-742346),expr__18571)))
{return (new antares.core.Component(G__18566,self__.render,self__.style,self__.event_mappings,self__.controls,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__18570.call(null,new cljs.core.Keyword(null,"render","render",-1408033454),expr__18571)))
{return (new antares.core.Component(self__.ident,G__18566,self__.style,self__.event_mappings,self__.controls,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__18570.call(null,new cljs.core.Keyword(null,"style","style",-496642736),expr__18571)))
{return (new antares.core.Component(self__.ident,self__.render,G__18566,self__.event_mappings,self__.controls,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__18570.call(null,new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885),expr__18571)))
{return (new antares.core.Component(self__.ident,self__.render,self__.style,G__18566,self__.controls,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__18570.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452),expr__18571)))
{return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.event_mappings,G__18566,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.event_mappings,self__.controls,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4147__auto__,G__18566),null));
}
}
}
}
}
});
antares.core.Component.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4151__auto__){var self__ = this;
var this__4151__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render","render",-1408033454),self__.render],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",-496642736),self__.style],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885),self__.event_mappings],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4138__auto__,G__18566){var self__ = this;
var this__4138__auto____$1 = this;return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.event_mappings,self__.controls,G__18566,self__.__extmap,self__.__hash));
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
antares.core.map__GT_Component = (function map__GT_Component(G__18568){return (new antares.core.Component(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(G__18568),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(G__18568),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(G__18568),new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885).cljs$core$IFn$_invoke$arity$1(G__18568),new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(G__18568),null,cljs.core.dissoc.call(null,G__18568,new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885),new cljs.core.Keyword(null,"controls","controls",1340701452))));
});
antares.core.component = (function component(source_map){var component__$1 = antares.core.map__GT_Component.call(null,source_map);antares.core.register_component.call(null,component__$1);
return component__$1;
});
antares.core.stateless_component = (function stateless_component(source_map){return antares.core.component.call(null,source_map);
});
antares.core.stateful_component = (function stateful_component(source_map){return antares.core.component.call(null,source_map);
});
antares.core.bind = (function bind(component,app_cursor,dom_cursor){var component_data = antares.core.initialize_state.call(null,component,app_cursor);antares.core.component_will_mount.call(null,component);
antares.core.mount_component.call(null,component,component_data,dom_cursor);
var seq__18578_18582 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__18579_18583 = null;var count__18580_18584 = (0);var i__18581_18585 = (0);while(true){
if((i__18581_18585 < count__18580_18584))
{var component_18586__$1 = cljs.core._nth.call(null,chunk__18579_18583,i__18581_18585);antares.core.component_did_update.call(null,component_18586__$1);
{
var G__18587 = seq__18578_18582;
var G__18588 = chunk__18579_18583;
var G__18589 = count__18580_18584;
var G__18590 = (i__18581_18585 + (1));
seq__18578_18582 = G__18587;
chunk__18579_18583 = G__18588;
count__18580_18584 = G__18589;
i__18581_18585 = G__18590;
continue;
}
} else
{var temp__4126__auto___18591 = cljs.core.seq.call(null,seq__18578_18582);if(temp__4126__auto___18591)
{var seq__18578_18592__$1 = temp__4126__auto___18591;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18578_18592__$1))
{var c__4309__auto___18593 = cljs.core.chunk_first.call(null,seq__18578_18592__$1);{
var G__18594 = cljs.core.chunk_rest.call(null,seq__18578_18592__$1);
var G__18595 = c__4309__auto___18593;
var G__18596 = cljs.core.count.call(null,c__4309__auto___18593);
var G__18597 = (0);
seq__18578_18582 = G__18594;
chunk__18579_18583 = G__18595;
count__18580_18584 = G__18596;
i__18581_18585 = G__18597;
continue;
}
} else
{var component_18598__$1 = cljs.core.first.call(null,seq__18578_18592__$1);antares.core.component_did_update.call(null,component_18598__$1);
{
var G__18599 = cljs.core.next.call(null,seq__18578_18592__$1);
var G__18600 = null;
var G__18601 = (0);
var G__18602 = (0);
seq__18578_18582 = G__18599;
chunk__18579_18583 = G__18600;
count__18580_18584 = G__18601;
i__18581_18585 = G__18602;
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
var root_node_18607 = document.querySelector("body");var seq__18603_18608 = cljs.core.seq.call(null,antares.core.event_list);var chunk__18604_18609 = null;var count__18605_18610 = (0);var i__18606_18611 = (0);while(true){
if((i__18606_18611 < count__18605_18610))
{var event_name_18612 = cljs.core._nth.call(null,chunk__18604_18609,i__18606_18611);goog.events.listen(root_node_18607,event_name_18612,((function (seq__18603_18608,chunk__18604_18609,count__18605_18610,i__18606_18611,event_name_18612,root_node_18607){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__18603_18608,chunk__18604_18609,count__18605_18610,i__18606_18611,event_name_18612,root_node_18607))
);
{
var G__18613 = seq__18603_18608;
var G__18614 = chunk__18604_18609;
var G__18615 = count__18605_18610;
var G__18616 = (i__18606_18611 + (1));
seq__18603_18608 = G__18613;
chunk__18604_18609 = G__18614;
count__18605_18610 = G__18615;
i__18606_18611 = G__18616;
continue;
}
} else
{var temp__4126__auto___18617 = cljs.core.seq.call(null,seq__18603_18608);if(temp__4126__auto___18617)
{var seq__18603_18618__$1 = temp__4126__auto___18617;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18603_18618__$1))
{var c__4309__auto___18619 = cljs.core.chunk_first.call(null,seq__18603_18618__$1);{
var G__18620 = cljs.core.chunk_rest.call(null,seq__18603_18618__$1);
var G__18621 = c__4309__auto___18619;
var G__18622 = cljs.core.count.call(null,c__4309__auto___18619);
var G__18623 = (0);
seq__18603_18608 = G__18620;
chunk__18604_18609 = G__18621;
count__18605_18610 = G__18622;
i__18606_18611 = G__18623;
continue;
}
} else
{var event_name_18624 = cljs.core.first.call(null,seq__18603_18618__$1);goog.events.listen(root_node_18607,event_name_18624,((function (seq__18603_18608,chunk__18604_18609,count__18605_18610,i__18606_18611,event_name_18624,seq__18603_18618__$1,temp__4126__auto___18617,root_node_18607){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__18603_18608,chunk__18604_18609,count__18605_18610,i__18606_18611,event_name_18624,seq__18603_18618__$1,temp__4126__auto___18617,root_node_18607))
);
{
var G__18625 = cljs.core.next.call(null,seq__18603_18618__$1);
var G__18626 = null;
var G__18627 = (0);
var G__18628 = (0);
seq__18603_18608 = G__18625;
chunk__18604_18609 = G__18626;
count__18605_18610 = G__18627;
i__18606_18611 = G__18628;
continue;
}
}
} else
{}
}
break;
}
antares.core.dispatch_event_BANG_ = (function dispatch_event_BANG_(event,event_mappings){var seq__18633 = cljs.core.seq.call(null,event_mappings);var chunk__18634 = null;var count__18635 = (0);var i__18636 = (0);while(true){
if((i__18636 < count__18635))
{var event_mapping = cljs.core._nth.call(null,chunk__18634,i__18636);if(cljs.core.truth_(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(event_mapping).call(null,event)))
{cljs.core.async.put_BANG_.call(null,antares.core.control_stream,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(event_mapping).call(null,event));
} else
{}
{
var G__18637 = seq__18633;
var G__18638 = chunk__18634;
var G__18639 = count__18635;
var G__18640 = (i__18636 + (1));
seq__18633 = G__18637;
chunk__18634 = G__18638;
count__18635 = G__18639;
i__18636 = G__18640;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18633);if(temp__4126__auto__)
{var seq__18633__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18633__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__18633__$1);{
var G__18641 = cljs.core.chunk_rest.call(null,seq__18633__$1);
var G__18642 = c__4309__auto__;
var G__18643 = cljs.core.count.call(null,c__4309__auto__);
var G__18644 = (0);
seq__18633 = G__18641;
chunk__18634 = G__18642;
count__18635 = G__18643;
i__18636 = G__18644;
continue;
}
} else
{var event_mapping = cljs.core.first.call(null,seq__18633__$1);if(cljs.core.truth_(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(event_mapping).call(null,event)))
{cljs.core.async.put_BANG_.call(null,antares.core.control_stream,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(event_mapping).call(null,event));
} else
{}
{
var G__18645 = cljs.core.next.call(null,seq__18633__$1);
var G__18646 = null;
var G__18647 = (0);
var G__18648 = (0);
seq__18633 = G__18645;
chunk__18634 = G__18646;
count__18635 = G__18647;
i__18636 = G__18648;
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
antares.core.controller_action_BANG_ = (function controller_action_BANG_(p__18650,controls){var vec__18656 = p__18650;var command = cljs.core.nth.call(null,vec__18656,(0),null);var data = cljs.core.nth.call(null,vec__18656,(1),null);var seq__18657 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (vec__18656,command,data){
return (function (p1__18649_SHARP_){return cljs.core._EQ_.call(null,command,new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(p1__18649_SHARP_));
});})(vec__18656,command,data))
,controls));var chunk__18658 = null;var count__18659 = (0);var i__18660 = (0);while(true){
if((i__18660 < count__18659))
{var control = cljs.core._nth.call(null,chunk__18658,i__18660);new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(control).call(null,data);
{
var G__18661 = seq__18657;
var G__18662 = chunk__18658;
var G__18663 = count__18659;
var G__18664 = (i__18660 + (1));
seq__18657 = G__18661;
chunk__18658 = G__18662;
count__18659 = G__18663;
i__18660 = G__18664;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18657);if(temp__4126__auto__)
{var seq__18657__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18657__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__18657__$1);{
var G__18665 = cljs.core.chunk_rest.call(null,seq__18657__$1);
var G__18666 = c__4309__auto__;
var G__18667 = cljs.core.count.call(null,c__4309__auto__);
var G__18668 = (0);
seq__18657 = G__18665;
chunk__18658 = G__18666;
count__18659 = G__18667;
i__18660 = G__18668;
continue;
}
} else
{var control = cljs.core.first.call(null,seq__18657__$1);new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(control).call(null,data);
{
var G__18669 = cljs.core.next.call(null,seq__18657__$1);
var G__18670 = null;
var G__18671 = (0);
var G__18672 = (0);
seq__18657 = G__18669;
chunk__18658 = G__18670;
count__18659 = G__18671;
i__18660 = G__18672;
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
antares.core.event_loop = (function event_loop(event_mappings,controls){var c__5906__auto___18785 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto___18785){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto___18785){
return (function (state_18741){var state_val_18742 = (state_18741[(1)]);if((state_val_18742 === (7)))
{var inst_18732 = (state_18741[(2)]);var inst_18733 = antares.core.dispatch_event_BANG_.call(null,inst_18732,event_mappings);var state_18741__$1 = (function (){var statearr_18743 = state_18741;(statearr_18743[(7)] = inst_18733);
return statearr_18743;
})();var statearr_18744_18786 = state_18741__$1;(statearr_18744_18786[(2)] = null);
(statearr_18744_18786[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18742 === (6)))
{var inst_18737 = (state_18741[(2)]);var state_18741__$1 = state_18741;var statearr_18745_18787 = state_18741__$1;(statearr_18745_18787[(2)] = inst_18737);
(statearr_18745_18787[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18742 === (5)))
{var state_18741__$1 = state_18741;var statearr_18746_18788 = state_18741__$1;(statearr_18746_18788[(2)] = null);
(statearr_18746_18788[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18742 === (4)))
{var state_18741__$1 = state_18741;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18741__$1,(7),antares.core.event_stream);
} else
{if((state_val_18742 === (3)))
{var inst_18739 = (state_18741[(2)]);var state_18741__$1 = state_18741;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18741__$1,inst_18739);
} else
{if((state_val_18742 === (2)))
{var state_18741__$1 = state_18741;var statearr_18747_18789 = state_18741__$1;(statearr_18747_18789[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18742 === (1)))
{var state_18741__$1 = state_18741;var statearr_18749_18790 = state_18741__$1;(statearr_18749_18790[(2)] = null);
(statearr_18749_18790[(1)] = (2));
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
});})(c__5906__auto___18785))
;return ((function (switch__5891__auto__,c__5906__auto___18785){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_18753 = [null,null,null,null,null,null,null,null];(statearr_18753[(0)] = state_machine__5892__auto__);
(statearr_18753[(1)] = (1));
return statearr_18753;
});
var state_machine__5892__auto____1 = (function (state_18741){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_18741);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e18754){if((e18754 instanceof Object))
{var ex__5895__auto__ = e18754;var statearr_18755_18791 = state_18741;(statearr_18755_18791[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18741);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18754;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18792 = state_18741;
state_18741 = G__18792;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_18741){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_18741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto___18785))
})();var state__5908__auto__ = (function (){var statearr_18756 = f__5907__auto__.call(null);(statearr_18756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto___18785);
return statearr_18756;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto___18785))
);
var c__5906__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto__){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto__){
return (function (state_18769){var state_val_18770 = (state_18769[(1)]);if((state_val_18770 === (7)))
{var inst_18760 = (state_18769[(2)]);var inst_18761 = antares.core.controller_action_BANG_.call(null,inst_18760,controls);var state_18769__$1 = (function (){var statearr_18771 = state_18769;(statearr_18771[(7)] = inst_18761);
return statearr_18771;
})();var statearr_18772_18793 = state_18769__$1;(statearr_18772_18793[(2)] = null);
(statearr_18772_18793[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18770 === (6)))
{var inst_18765 = (state_18769[(2)]);var state_18769__$1 = state_18769;var statearr_18773_18794 = state_18769__$1;(statearr_18773_18794[(2)] = inst_18765);
(statearr_18773_18794[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18770 === (5)))
{var state_18769__$1 = state_18769;var statearr_18774_18795 = state_18769__$1;(statearr_18774_18795[(2)] = null);
(statearr_18774_18795[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18770 === (4)))
{var state_18769__$1 = state_18769;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18769__$1,(7),antares.core.control_stream);
} else
{if((state_val_18770 === (3)))
{var inst_18767 = (state_18769[(2)]);var state_18769__$1 = state_18769;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18769__$1,inst_18767);
} else
{if((state_val_18770 === (2)))
{var state_18769__$1 = state_18769;var statearr_18775_18796 = state_18769__$1;(statearr_18775_18796[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18770 === (1)))
{var state_18769__$1 = state_18769;var statearr_18777_18797 = state_18769__$1;(statearr_18777_18797[(2)] = null);
(statearr_18777_18797[(1)] = (2));
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
var state_machine__5892__auto____0 = (function (){var statearr_18781 = [null,null,null,null,null,null,null,null];(statearr_18781[(0)] = state_machine__5892__auto__);
(statearr_18781[(1)] = (1));
return statearr_18781;
});
var state_machine__5892__auto____1 = (function (state_18769){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_18769);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e18782){if((e18782 instanceof Object))
{var ex__5895__auto__ = e18782;var statearr_18783_18798 = state_18769;(statearr_18783_18798[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18769);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18782;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18799 = state_18769;
state_18769 = G__18799;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_18769){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_18769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto__))
})();var state__5908__auto__ = (function (){var statearr_18784 = f__5907__auto__.call(null);(statearr_18784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto__);
return statearr_18784;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto__))
);
return c__5906__auto__;
});
antares.core.renderer = (function renderer(root){return cljs.core.add_watch.call(null,antares.core.app_state,new cljs.core.Keyword(null,"renderer","renderer",336841071),(function (key,reference,old_value,new_value){var root_node = document.querySelector("#antares");var new_dom = antares.core.render_html.call(null,root,new_value);var seq__18808_18816 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__18809_18817 = null;var count__18810_18818 = (0);var i__18811_18819 = (0);while(true){
if((i__18811_18819 < count__18810_18818))
{var component_18820 = cljs.core._nth.call(null,chunk__18809_18817,i__18811_18819);antares.core.component_will_update.call(null,component_18820);
{
var G__18821 = seq__18808_18816;
var G__18822 = chunk__18809_18817;
var G__18823 = count__18810_18818;
var G__18824 = (i__18811_18819 + (1));
seq__18808_18816 = G__18821;
chunk__18809_18817 = G__18822;
count__18810_18818 = G__18823;
i__18811_18819 = G__18824;
continue;
}
} else
{var temp__4126__auto___18825 = cljs.core.seq.call(null,seq__18808_18816);if(temp__4126__auto___18825)
{var seq__18808_18826__$1 = temp__4126__auto___18825;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18808_18826__$1))
{var c__4309__auto___18827 = cljs.core.chunk_first.call(null,seq__18808_18826__$1);{
var G__18828 = cljs.core.chunk_rest.call(null,seq__18808_18826__$1);
var G__18829 = c__4309__auto___18827;
var G__18830 = cljs.core.count.call(null,c__4309__auto___18827);
var G__18831 = (0);
seq__18808_18816 = G__18828;
chunk__18809_18817 = G__18829;
count__18810_18818 = G__18830;
i__18811_18819 = G__18831;
continue;
}
} else
{var component_18832 = cljs.core.first.call(null,seq__18808_18826__$1);antares.core.component_will_update.call(null,component_18832);
{
var G__18833 = cljs.core.next.call(null,seq__18808_18826__$1);
var G__18834 = null;
var G__18835 = (0);
var G__18836 = (0);
seq__18808_18816 = G__18833;
chunk__18809_18817 = G__18834;
count__18810_18818 = G__18835;
i__18811_18819 = G__18836;
continue;
}
}
} else
{}
}
break;
}
root_node.innerHTML = new_dom;
var seq__18812 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__18813 = null;var count__18814 = (0);var i__18815 = (0);while(true){
if((i__18815 < count__18814))
{var component = cljs.core._nth.call(null,chunk__18813,i__18815);antares.core.component_did_update.call(null,component);
{
var G__18837 = seq__18812;
var G__18838 = chunk__18813;
var G__18839 = count__18814;
var G__18840 = (i__18815 + (1));
seq__18812 = G__18837;
chunk__18813 = G__18838;
count__18814 = G__18839;
i__18815 = G__18840;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18812);if(temp__4126__auto__)
{var seq__18812__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18812__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__18812__$1);{
var G__18841 = cljs.core.chunk_rest.call(null,seq__18812__$1);
var G__18842 = c__4309__auto__;
var G__18843 = cljs.core.count.call(null,c__4309__auto__);
var G__18844 = (0);
seq__18812 = G__18841;
chunk__18813 = G__18842;
count__18814 = G__18843;
i__18815 = G__18844;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__18812__$1);antares.core.component_did_update.call(null,component);
{
var G__18845 = cljs.core.next.call(null,seq__18812__$1);
var G__18846 = null;
var G__18847 = (0);
var G__18848 = (0);
seq__18812 = G__18845;
chunk__18813 = G__18846;
count__18814 = G__18847;
i__18815 = G__18848;
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
antares.core.emit_event_BANG_ = (function emit_event_BANG_(event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});
antares.core.emit_control_BANG_ = (function emit_control_BANG_(event){return cljs.core.async.put_BANG_.call(null,antares.core.control_stream,event);
});
antares.core.on_transition = (function on_transition(ident,cursor,watch_fn){return cljs.core.add_watch.call(null,antares.core.app_state,ident,watch_fn);
});
antares.core.get = (function get(request){return ajax.core.GET.call(null,new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(request),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),request.call(null,new cljs.core.Keyword(null,"params","params",710516235)),new cljs.core.Keyword(null,"handler","handler",-195596612),request.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612))], null));
});
antares.core.post = (function post(request){return ajax.core.POST.call(null,new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(request),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),request.call(null,new cljs.core.Keyword(null,"params","params",710516235)),new cljs.core.Keyword(null,"handler","handler",-195596612),request.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612))], null));
});

//# sourceMappingURL=core.js.map