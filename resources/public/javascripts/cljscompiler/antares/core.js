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
antares.core.LifeCycle = (function (){var obj13949 = {};return obj13949;
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
antares.core.Registerable = (function (){var obj13951 = {};return obj13951;
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
antares.core.Renderable = (function (){var obj13953 = {};return obj13953;
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
antares.core.Mountable = (function (){var obj13955 = {};return obj13955;
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
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4141__auto__,k13957,else__4142__auto__){var self__ = this;
var this__4141__auto____$1 = this;var G__13959 = (((k13957 instanceof cljs.core.Keyword))?k13957.fqn:null);switch (G__13959) {
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
return cljs.core.get.call(null,self__.__extmap,k13957,else__4142__auto__);

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
antares.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4146__auto__,k__4147__auto__,G__13956){var self__ = this;
var this__4146__auto____$1 = this;var pred__13960 = cljs.core.keyword_identical_QMARK_;var expr__13961 = k__4147__auto__;if(cljs.core.truth_(pred__13960.call(null,new cljs.core.Keyword(null,"ident","ident",-742346),expr__13961)))
{return (new antares.core.Component(G__13956,self__.render,self__.style,self__.event_mappings,self__.controls,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__13960.call(null,new cljs.core.Keyword(null,"render","render",-1408033454),expr__13961)))
{return (new antares.core.Component(self__.ident,G__13956,self__.style,self__.event_mappings,self__.controls,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__13960.call(null,new cljs.core.Keyword(null,"style","style",-496642736),expr__13961)))
{return (new antares.core.Component(self__.ident,self__.render,G__13956,self__.event_mappings,self__.controls,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__13960.call(null,new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885),expr__13961)))
{return (new antares.core.Component(self__.ident,self__.render,self__.style,G__13956,self__.controls,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__13960.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452),expr__13961)))
{return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.event_mappings,G__13956,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.event_mappings,self__.controls,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4147__auto__,G__13956),null));
}
}
}
}
}
});
antares.core.Component.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4151__auto__){var self__ = this;
var this__4151__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render","render",-1408033454),self__.render],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",-496642736),self__.style],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885),self__.event_mappings],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4138__auto__,G__13956){var self__ = this;
var this__4138__auto____$1 = this;return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.event_mappings,self__.controls,G__13956,self__.__extmap,self__.__hash));
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
antares.core.map__GT_Component = (function map__GT_Component(G__13958){return (new antares.core.Component(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(G__13958),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(G__13958),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(G__13958),new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885).cljs$core$IFn$_invoke$arity$1(G__13958),new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(G__13958),null,cljs.core.dissoc.call(null,G__13958,new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885),new cljs.core.Keyword(null,"controls","controls",1340701452))));
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
var seq__13968_13972 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__13969_13973 = null;var count__13970_13974 = (0);var i__13971_13975 = (0);while(true){
if((i__13971_13975 < count__13970_13974))
{var component_13976__$1 = cljs.core._nth.call(null,chunk__13969_13973,i__13971_13975);antares.core.component_did_update.call(null,component_13976__$1);
{
var G__13977 = seq__13968_13972;
var G__13978 = chunk__13969_13973;
var G__13979 = count__13970_13974;
var G__13980 = (i__13971_13975 + (1));
seq__13968_13972 = G__13977;
chunk__13969_13973 = G__13978;
count__13970_13974 = G__13979;
i__13971_13975 = G__13980;
continue;
}
} else
{var temp__4126__auto___13981 = cljs.core.seq.call(null,seq__13968_13972);if(temp__4126__auto___13981)
{var seq__13968_13982__$1 = temp__4126__auto___13981;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13968_13982__$1))
{var c__4309__auto___13983 = cljs.core.chunk_first.call(null,seq__13968_13982__$1);{
var G__13984 = cljs.core.chunk_rest.call(null,seq__13968_13982__$1);
var G__13985 = c__4309__auto___13983;
var G__13986 = cljs.core.count.call(null,c__4309__auto___13983);
var G__13987 = (0);
seq__13968_13972 = G__13984;
chunk__13969_13973 = G__13985;
count__13970_13974 = G__13986;
i__13971_13975 = G__13987;
continue;
}
} else
{var component_13988__$1 = cljs.core.first.call(null,seq__13968_13982__$1);antares.core.component_did_update.call(null,component_13988__$1);
{
var G__13989 = cljs.core.next.call(null,seq__13968_13982__$1);
var G__13990 = null;
var G__13991 = (0);
var G__13992 = (0);
seq__13968_13972 = G__13989;
chunk__13969_13973 = G__13990;
count__13970_13974 = G__13991;
i__13971_13975 = G__13992;
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
var root_node_13997 = document.querySelector("#antares");var seq__13993_13998 = cljs.core.seq.call(null,antares.core.event_list);var chunk__13994_13999 = null;var count__13995_14000 = (0);var i__13996_14001 = (0);while(true){
if((i__13996_14001 < count__13995_14000))
{var event_name_14002 = cljs.core._nth.call(null,chunk__13994_13999,i__13996_14001);goog.events.listen(root_node_13997,event_name_14002,((function (seq__13993_13998,chunk__13994_13999,count__13995_14000,i__13996_14001,event_name_14002,root_node_13997){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__13993_13998,chunk__13994_13999,count__13995_14000,i__13996_14001,event_name_14002,root_node_13997))
);
{
var G__14003 = seq__13993_13998;
var G__14004 = chunk__13994_13999;
var G__14005 = count__13995_14000;
var G__14006 = (i__13996_14001 + (1));
seq__13993_13998 = G__14003;
chunk__13994_13999 = G__14004;
count__13995_14000 = G__14005;
i__13996_14001 = G__14006;
continue;
}
} else
{var temp__4126__auto___14007 = cljs.core.seq.call(null,seq__13993_13998);if(temp__4126__auto___14007)
{var seq__13993_14008__$1 = temp__4126__auto___14007;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13993_14008__$1))
{var c__4309__auto___14009 = cljs.core.chunk_first.call(null,seq__13993_14008__$1);{
var G__14010 = cljs.core.chunk_rest.call(null,seq__13993_14008__$1);
var G__14011 = c__4309__auto___14009;
var G__14012 = cljs.core.count.call(null,c__4309__auto___14009);
var G__14013 = (0);
seq__13993_13998 = G__14010;
chunk__13994_13999 = G__14011;
count__13995_14000 = G__14012;
i__13996_14001 = G__14013;
continue;
}
} else
{var event_name_14014 = cljs.core.first.call(null,seq__13993_14008__$1);goog.events.listen(root_node_13997,event_name_14014,((function (seq__13993_13998,chunk__13994_13999,count__13995_14000,i__13996_14001,event_name_14014,seq__13993_14008__$1,temp__4126__auto___14007,root_node_13997){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__13993_13998,chunk__13994_13999,count__13995_14000,i__13996_14001,event_name_14014,seq__13993_14008__$1,temp__4126__auto___14007,root_node_13997))
);
{
var G__14015 = cljs.core.next.call(null,seq__13993_14008__$1);
var G__14016 = null;
var G__14017 = (0);
var G__14018 = (0);
seq__13993_13998 = G__14015;
chunk__13994_13999 = G__14016;
count__13995_14000 = G__14017;
i__13996_14001 = G__14018;
continue;
}
}
} else
{}
}
break;
}
antares.core.dispatch_event_BANG_ = (function dispatch_event_BANG_(event,event_mappings){var seq__14023 = cljs.core.seq.call(null,event_mappings);var chunk__14024 = null;var count__14025 = (0);var i__14026 = (0);while(true){
if((i__14026 < count__14025))
{var event_mapping = cljs.core._nth.call(null,chunk__14024,i__14026);if(cljs.core.truth_(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(event_mapping).call(null,event)))
{cljs.core.async.put_BANG_.call(null,antares.core.control_stream,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(event_mapping).call(null,event));
} else
{}
{
var G__14027 = seq__14023;
var G__14028 = chunk__14024;
var G__14029 = count__14025;
var G__14030 = (i__14026 + (1));
seq__14023 = G__14027;
chunk__14024 = G__14028;
count__14025 = G__14029;
i__14026 = G__14030;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14023);if(temp__4126__auto__)
{var seq__14023__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14023__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__14023__$1);{
var G__14031 = cljs.core.chunk_rest.call(null,seq__14023__$1);
var G__14032 = c__4309__auto__;
var G__14033 = cljs.core.count.call(null,c__4309__auto__);
var G__14034 = (0);
seq__14023 = G__14031;
chunk__14024 = G__14032;
count__14025 = G__14033;
i__14026 = G__14034;
continue;
}
} else
{var event_mapping = cljs.core.first.call(null,seq__14023__$1);if(cljs.core.truth_(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(event_mapping).call(null,event)))
{cljs.core.async.put_BANG_.call(null,antares.core.control_stream,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(event_mapping).call(null,event));
} else
{}
{
var G__14035 = cljs.core.next.call(null,seq__14023__$1);
var G__14036 = null;
var G__14037 = (0);
var G__14038 = (0);
seq__14023 = G__14035;
chunk__14024 = G__14036;
count__14025 = G__14037;
i__14026 = G__14038;
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
antares.core.controller_action_BANG_ = (function controller_action_BANG_(p__14040,controls){var vec__14046 = p__14040;var command = cljs.core.nth.call(null,vec__14046,(0),null);var data = cljs.core.nth.call(null,vec__14046,(1),null);var seq__14047 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (vec__14046,command,data){
return (function (p1__14039_SHARP_){return cljs.core._EQ_.call(null,command,new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(p1__14039_SHARP_));
});})(vec__14046,command,data))
,controls));var chunk__14048 = null;var count__14049 = (0);var i__14050 = (0);while(true){
if((i__14050 < count__14049))
{var control = cljs.core._nth.call(null,chunk__14048,i__14050);new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(control).call(null,data);
{
var G__14051 = seq__14047;
var G__14052 = chunk__14048;
var G__14053 = count__14049;
var G__14054 = (i__14050 + (1));
seq__14047 = G__14051;
chunk__14048 = G__14052;
count__14049 = G__14053;
i__14050 = G__14054;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14047);if(temp__4126__auto__)
{var seq__14047__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14047__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__14047__$1);{
var G__14055 = cljs.core.chunk_rest.call(null,seq__14047__$1);
var G__14056 = c__4309__auto__;
var G__14057 = cljs.core.count.call(null,c__4309__auto__);
var G__14058 = (0);
seq__14047 = G__14055;
chunk__14048 = G__14056;
count__14049 = G__14057;
i__14050 = G__14058;
continue;
}
} else
{var control = cljs.core.first.call(null,seq__14047__$1);new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(control).call(null,data);
{
var G__14059 = cljs.core.next.call(null,seq__14047__$1);
var G__14060 = null;
var G__14061 = (0);
var G__14062 = (0);
seq__14047 = G__14059;
chunk__14048 = G__14060;
count__14049 = G__14061;
i__14050 = G__14062;
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
antares.core.event_loop = (function event_loop(event_mappings,controls){var c__5906__auto___14175 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto___14175){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto___14175){
return (function (state_14131){var state_val_14132 = (state_14131[(1)]);if((state_val_14132 === (7)))
{var inst_14122 = (state_14131[(2)]);var inst_14123 = antares.core.dispatch_event_BANG_.call(null,inst_14122,event_mappings);var state_14131__$1 = (function (){var statearr_14133 = state_14131;(statearr_14133[(7)] = inst_14123);
return statearr_14133;
})();var statearr_14134_14176 = state_14131__$1;(statearr_14134_14176[(2)] = null);
(statearr_14134_14176[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14132 === (6)))
{var inst_14127 = (state_14131[(2)]);var state_14131__$1 = state_14131;var statearr_14135_14177 = state_14131__$1;(statearr_14135_14177[(2)] = inst_14127);
(statearr_14135_14177[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14132 === (5)))
{var state_14131__$1 = state_14131;var statearr_14136_14178 = state_14131__$1;(statearr_14136_14178[(2)] = null);
(statearr_14136_14178[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14132 === (4)))
{var state_14131__$1 = state_14131;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14131__$1,(7),antares.core.event_stream);
} else
{if((state_val_14132 === (3)))
{var inst_14129 = (state_14131[(2)]);var state_14131__$1 = state_14131;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14131__$1,inst_14129);
} else
{if((state_val_14132 === (2)))
{var state_14131__$1 = state_14131;var statearr_14137_14179 = state_14131__$1;(statearr_14137_14179[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14132 === (1)))
{var state_14131__$1 = state_14131;var statearr_14139_14180 = state_14131__$1;(statearr_14139_14180[(2)] = null);
(statearr_14139_14180[(1)] = (2));
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
});})(c__5906__auto___14175))
;return ((function (switch__5891__auto__,c__5906__auto___14175){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_14143 = [null,null,null,null,null,null,null,null];(statearr_14143[(0)] = state_machine__5892__auto__);
(statearr_14143[(1)] = (1));
return statearr_14143;
});
var state_machine__5892__auto____1 = (function (state_14131){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_14131);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e14144){if((e14144 instanceof Object))
{var ex__5895__auto__ = e14144;var statearr_14145_14181 = state_14131;(statearr_14145_14181[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14131);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14144;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14182 = state_14131;
state_14131 = G__14182;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_14131){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_14131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto___14175))
})();var state__5908__auto__ = (function (){var statearr_14146 = f__5907__auto__.call(null);(statearr_14146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto___14175);
return statearr_14146;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto___14175))
);
var c__5906__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto__){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto__){
return (function (state_14159){var state_val_14160 = (state_14159[(1)]);if((state_val_14160 === (7)))
{var inst_14150 = (state_14159[(2)]);var inst_14151 = antares.core.controller_action_BANG_.call(null,inst_14150,controls);var state_14159__$1 = (function (){var statearr_14161 = state_14159;(statearr_14161[(7)] = inst_14151);
return statearr_14161;
})();var statearr_14162_14183 = state_14159__$1;(statearr_14162_14183[(2)] = null);
(statearr_14162_14183[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14160 === (6)))
{var inst_14155 = (state_14159[(2)]);var state_14159__$1 = state_14159;var statearr_14163_14184 = state_14159__$1;(statearr_14163_14184[(2)] = inst_14155);
(statearr_14163_14184[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14160 === (5)))
{var state_14159__$1 = state_14159;var statearr_14164_14185 = state_14159__$1;(statearr_14164_14185[(2)] = null);
(statearr_14164_14185[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14160 === (4)))
{var state_14159__$1 = state_14159;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14159__$1,(7),antares.core.control_stream);
} else
{if((state_val_14160 === (3)))
{var inst_14157 = (state_14159[(2)]);var state_14159__$1 = state_14159;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14159__$1,inst_14157);
} else
{if((state_val_14160 === (2)))
{var state_14159__$1 = state_14159;var statearr_14165_14186 = state_14159__$1;(statearr_14165_14186[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14160 === (1)))
{var state_14159__$1 = state_14159;var statearr_14167_14187 = state_14159__$1;(statearr_14167_14187[(2)] = null);
(statearr_14167_14187[(1)] = (2));
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
var state_machine__5892__auto____0 = (function (){var statearr_14171 = [null,null,null,null,null,null,null,null];(statearr_14171[(0)] = state_machine__5892__auto__);
(statearr_14171[(1)] = (1));
return statearr_14171;
});
var state_machine__5892__auto____1 = (function (state_14159){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_14159);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e14172){if((e14172 instanceof Object))
{var ex__5895__auto__ = e14172;var statearr_14173_14188 = state_14159;(statearr_14173_14188[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14159);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14172;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14189 = state_14159;
state_14159 = G__14189;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_14159){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_14159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto__))
})();var state__5908__auto__ = (function (){var statearr_14174 = f__5907__auto__.call(null);(statearr_14174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto__);
return statearr_14174;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto__))
);
return c__5906__auto__;
});
antares.core.render_loop = (function render_loop(root){return cljs.core.add_watch.call(null,antares.core.app_state,new cljs.core.Keyword(null,"renderer","renderer",336841071),(function (key,reference,old_value,new_value){var root_node = document.querySelector("#antares");var new_dom = antares.core.render_html.call(null,root,new_value);var seq__14198_14206 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__14199_14207 = null;var count__14200_14208 = (0);var i__14201_14209 = (0);while(true){
if((i__14201_14209 < count__14200_14208))
{var component_14210 = cljs.core._nth.call(null,chunk__14199_14207,i__14201_14209);antares.core.component_will_update.call(null,component_14210);
{
var G__14211 = seq__14198_14206;
var G__14212 = chunk__14199_14207;
var G__14213 = count__14200_14208;
var G__14214 = (i__14201_14209 + (1));
seq__14198_14206 = G__14211;
chunk__14199_14207 = G__14212;
count__14200_14208 = G__14213;
i__14201_14209 = G__14214;
continue;
}
} else
{var temp__4126__auto___14215 = cljs.core.seq.call(null,seq__14198_14206);if(temp__4126__auto___14215)
{var seq__14198_14216__$1 = temp__4126__auto___14215;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14198_14216__$1))
{var c__4309__auto___14217 = cljs.core.chunk_first.call(null,seq__14198_14216__$1);{
var G__14218 = cljs.core.chunk_rest.call(null,seq__14198_14216__$1);
var G__14219 = c__4309__auto___14217;
var G__14220 = cljs.core.count.call(null,c__4309__auto___14217);
var G__14221 = (0);
seq__14198_14206 = G__14218;
chunk__14199_14207 = G__14219;
count__14200_14208 = G__14220;
i__14201_14209 = G__14221;
continue;
}
} else
{var component_14222 = cljs.core.first.call(null,seq__14198_14216__$1);antares.core.component_will_update.call(null,component_14222);
{
var G__14223 = cljs.core.next.call(null,seq__14198_14216__$1);
var G__14224 = null;
var G__14225 = (0);
var G__14226 = (0);
seq__14198_14206 = G__14223;
chunk__14199_14207 = G__14224;
count__14200_14208 = G__14225;
i__14201_14209 = G__14226;
continue;
}
}
} else
{}
}
break;
}
root_node.innerHTML = new_dom;
var seq__14202 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__14203 = null;var count__14204 = (0);var i__14205 = (0);while(true){
if((i__14205 < count__14204))
{var component = cljs.core._nth.call(null,chunk__14203,i__14205);antares.core.component_did_update.call(null,component);
{
var G__14227 = seq__14202;
var G__14228 = chunk__14203;
var G__14229 = count__14204;
var G__14230 = (i__14205 + (1));
seq__14202 = G__14227;
chunk__14203 = G__14228;
count__14204 = G__14229;
i__14205 = G__14230;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14202);if(temp__4126__auto__)
{var seq__14202__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14202__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__14202__$1);{
var G__14231 = cljs.core.chunk_rest.call(null,seq__14202__$1);
var G__14232 = c__4309__auto__;
var G__14233 = cljs.core.count.call(null,c__4309__auto__);
var G__14234 = (0);
seq__14202 = G__14231;
chunk__14203 = G__14232;
count__14204 = G__14233;
i__14205 = G__14234;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__14202__$1);antares.core.component_did_update.call(null,component);
{
var G__14235 = cljs.core.next.call(null,seq__14202__$1);
var G__14236 = null;
var G__14237 = (0);
var G__14238 = (0);
seq__14202 = G__14235;
chunk__14203 = G__14236;
count__14204 = G__14237;
i__14205 = G__14238;
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