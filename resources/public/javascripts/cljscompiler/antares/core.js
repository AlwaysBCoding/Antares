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
antares.core.LifeCycle = (function (){var obj26357 = {};return obj26357;
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
antares.core.Registerable = (function (){var obj26359 = {};return obj26359;
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
antares.core.Renderable = (function (){var obj26361 = {};return obj26361;
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
antares.core.Mountable = (function (){var obj26363 = {};return obj26363;
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
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4141__auto__,k26365,else__4142__auto__){var self__ = this;
var this__4141__auto____$1 = this;var G__26367 = (((k26365 instanceof cljs.core.Keyword))?k26365.fqn:null);switch (G__26367) {
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
return cljs.core.get.call(null,self__.__extmap,k26365,else__4142__auto__);

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
antares.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4146__auto__,k__4147__auto__,G__26364){var self__ = this;
var this__4146__auto____$1 = this;var pred__26368 = cljs.core.keyword_identical_QMARK_;var expr__26369 = k__4147__auto__;if(cljs.core.truth_(pred__26368.call(null,new cljs.core.Keyword(null,"ident","ident",-742346),expr__26369)))
{return (new antares.core.Component(G__26364,self__.render,self__.style,self__.event_mappings,self__.controls,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__26368.call(null,new cljs.core.Keyword(null,"render","render",-1408033454),expr__26369)))
{return (new antares.core.Component(self__.ident,G__26364,self__.style,self__.event_mappings,self__.controls,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__26368.call(null,new cljs.core.Keyword(null,"style","style",-496642736),expr__26369)))
{return (new antares.core.Component(self__.ident,self__.render,G__26364,self__.event_mappings,self__.controls,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__26368.call(null,new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885),expr__26369)))
{return (new antares.core.Component(self__.ident,self__.render,self__.style,G__26364,self__.controls,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__26368.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452),expr__26369)))
{return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.event_mappings,G__26364,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.event_mappings,self__.controls,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4147__auto__,G__26364),null));
}
}
}
}
}
});
antares.core.Component.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4151__auto__){var self__ = this;
var this__4151__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render","render",-1408033454),self__.render],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",-496642736),self__.style],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885),self__.event_mappings],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4138__auto__,G__26364){var self__ = this;
var this__4138__auto____$1 = this;return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.event_mappings,self__.controls,G__26364,self__.__extmap,self__.__hash));
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
antares.core.map__GT_Component = (function map__GT_Component(G__26366){return (new antares.core.Component(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(G__26366),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(G__26366),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(G__26366),new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885).cljs$core$IFn$_invoke$arity$1(G__26366),new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(G__26366),null,cljs.core.dissoc.call(null,G__26366,new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885),new cljs.core.Keyword(null,"controls","controls",1340701452))));
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
var seq__26376_26380 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__26377_26381 = null;var count__26378_26382 = (0);var i__26379_26383 = (0);while(true){
if((i__26379_26383 < count__26378_26382))
{var component_26384__$1 = cljs.core._nth.call(null,chunk__26377_26381,i__26379_26383);antares.core.component_did_update.call(null,component_26384__$1);
{
var G__26385 = seq__26376_26380;
var G__26386 = chunk__26377_26381;
var G__26387 = count__26378_26382;
var G__26388 = (i__26379_26383 + (1));
seq__26376_26380 = G__26385;
chunk__26377_26381 = G__26386;
count__26378_26382 = G__26387;
i__26379_26383 = G__26388;
continue;
}
} else
{var temp__4126__auto___26389 = cljs.core.seq.call(null,seq__26376_26380);if(temp__4126__auto___26389)
{var seq__26376_26390__$1 = temp__4126__auto___26389;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26376_26390__$1))
{var c__4309__auto___26391 = cljs.core.chunk_first.call(null,seq__26376_26390__$1);{
var G__26392 = cljs.core.chunk_rest.call(null,seq__26376_26390__$1);
var G__26393 = c__4309__auto___26391;
var G__26394 = cljs.core.count.call(null,c__4309__auto___26391);
var G__26395 = (0);
seq__26376_26380 = G__26392;
chunk__26377_26381 = G__26393;
count__26378_26382 = G__26394;
i__26379_26383 = G__26395;
continue;
}
} else
{var component_26396__$1 = cljs.core.first.call(null,seq__26376_26390__$1);antares.core.component_did_update.call(null,component_26396__$1);
{
var G__26397 = cljs.core.next.call(null,seq__26376_26390__$1);
var G__26398 = null;
var G__26399 = (0);
var G__26400 = (0);
seq__26376_26380 = G__26397;
chunk__26377_26381 = G__26398;
count__26378_26382 = G__26399;
i__26379_26383 = G__26400;
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
var root_node_26405 = document.querySelector("body");var seq__26401_26406 = cljs.core.seq.call(null,antares.core.event_list);var chunk__26402_26407 = null;var count__26403_26408 = (0);var i__26404_26409 = (0);while(true){
if((i__26404_26409 < count__26403_26408))
{var event_name_26410 = cljs.core._nth.call(null,chunk__26402_26407,i__26404_26409);goog.events.listen(root_node_26405,event_name_26410,((function (seq__26401_26406,chunk__26402_26407,count__26403_26408,i__26404_26409,event_name_26410,root_node_26405){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__26401_26406,chunk__26402_26407,count__26403_26408,i__26404_26409,event_name_26410,root_node_26405))
);
{
var G__26411 = seq__26401_26406;
var G__26412 = chunk__26402_26407;
var G__26413 = count__26403_26408;
var G__26414 = (i__26404_26409 + (1));
seq__26401_26406 = G__26411;
chunk__26402_26407 = G__26412;
count__26403_26408 = G__26413;
i__26404_26409 = G__26414;
continue;
}
} else
{var temp__4126__auto___26415 = cljs.core.seq.call(null,seq__26401_26406);if(temp__4126__auto___26415)
{var seq__26401_26416__$1 = temp__4126__auto___26415;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26401_26416__$1))
{var c__4309__auto___26417 = cljs.core.chunk_first.call(null,seq__26401_26416__$1);{
var G__26418 = cljs.core.chunk_rest.call(null,seq__26401_26416__$1);
var G__26419 = c__4309__auto___26417;
var G__26420 = cljs.core.count.call(null,c__4309__auto___26417);
var G__26421 = (0);
seq__26401_26406 = G__26418;
chunk__26402_26407 = G__26419;
count__26403_26408 = G__26420;
i__26404_26409 = G__26421;
continue;
}
} else
{var event_name_26422 = cljs.core.first.call(null,seq__26401_26416__$1);goog.events.listen(root_node_26405,event_name_26422,((function (seq__26401_26406,chunk__26402_26407,count__26403_26408,i__26404_26409,event_name_26422,seq__26401_26416__$1,temp__4126__auto___26415,root_node_26405){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__26401_26406,chunk__26402_26407,count__26403_26408,i__26404_26409,event_name_26422,seq__26401_26416__$1,temp__4126__auto___26415,root_node_26405))
);
{
var G__26423 = cljs.core.next.call(null,seq__26401_26416__$1);
var G__26424 = null;
var G__26425 = (0);
var G__26426 = (0);
seq__26401_26406 = G__26423;
chunk__26402_26407 = G__26424;
count__26403_26408 = G__26425;
i__26404_26409 = G__26426;
continue;
}
}
} else
{}
}
break;
}
antares.core.dispatch_event_BANG_ = (function dispatch_event_BANG_(event,event_mappings){var seq__26431 = cljs.core.seq.call(null,event_mappings);var chunk__26432 = null;var count__26433 = (0);var i__26434 = (0);while(true){
if((i__26434 < count__26433))
{var event_mapping = cljs.core._nth.call(null,chunk__26432,i__26434);if(cljs.core.truth_(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(event_mapping).call(null,event)))
{cljs.core.async.put_BANG_.call(null,antares.core.control_stream,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(event_mapping).call(null,event));
} else
{}
{
var G__26435 = seq__26431;
var G__26436 = chunk__26432;
var G__26437 = count__26433;
var G__26438 = (i__26434 + (1));
seq__26431 = G__26435;
chunk__26432 = G__26436;
count__26433 = G__26437;
i__26434 = G__26438;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__26431);if(temp__4126__auto__)
{var seq__26431__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26431__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__26431__$1);{
var G__26439 = cljs.core.chunk_rest.call(null,seq__26431__$1);
var G__26440 = c__4309__auto__;
var G__26441 = cljs.core.count.call(null,c__4309__auto__);
var G__26442 = (0);
seq__26431 = G__26439;
chunk__26432 = G__26440;
count__26433 = G__26441;
i__26434 = G__26442;
continue;
}
} else
{var event_mapping = cljs.core.first.call(null,seq__26431__$1);if(cljs.core.truth_(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(event_mapping).call(null,event)))
{cljs.core.async.put_BANG_.call(null,antares.core.control_stream,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(event_mapping).call(null,event));
} else
{}
{
var G__26443 = cljs.core.next.call(null,seq__26431__$1);
var G__26444 = null;
var G__26445 = (0);
var G__26446 = (0);
seq__26431 = G__26443;
chunk__26432 = G__26444;
count__26433 = G__26445;
i__26434 = G__26446;
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
antares.core.controller_action_BANG_ = (function controller_action_BANG_(p__26448,controls){var vec__26454 = p__26448;var command = cljs.core.nth.call(null,vec__26454,(0),null);var data = cljs.core.nth.call(null,vec__26454,(1),null);var seq__26455 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (vec__26454,command,data){
return (function (p1__26447_SHARP_){return cljs.core._EQ_.call(null,command,new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(p1__26447_SHARP_));
});})(vec__26454,command,data))
,controls));var chunk__26456 = null;var count__26457 = (0);var i__26458 = (0);while(true){
if((i__26458 < count__26457))
{var control = cljs.core._nth.call(null,chunk__26456,i__26458);new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(control).call(null,data);
{
var G__26459 = seq__26455;
var G__26460 = chunk__26456;
var G__26461 = count__26457;
var G__26462 = (i__26458 + (1));
seq__26455 = G__26459;
chunk__26456 = G__26460;
count__26457 = G__26461;
i__26458 = G__26462;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__26455);if(temp__4126__auto__)
{var seq__26455__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26455__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__26455__$1);{
var G__26463 = cljs.core.chunk_rest.call(null,seq__26455__$1);
var G__26464 = c__4309__auto__;
var G__26465 = cljs.core.count.call(null,c__4309__auto__);
var G__26466 = (0);
seq__26455 = G__26463;
chunk__26456 = G__26464;
count__26457 = G__26465;
i__26458 = G__26466;
continue;
}
} else
{var control = cljs.core.first.call(null,seq__26455__$1);new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(control).call(null,data);
{
var G__26467 = cljs.core.next.call(null,seq__26455__$1);
var G__26468 = null;
var G__26469 = (0);
var G__26470 = (0);
seq__26455 = G__26467;
chunk__26456 = G__26468;
count__26457 = G__26469;
i__26458 = G__26470;
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
antares.core.event_loop = (function event_loop(event_mappings,controls){var c__5906__auto___26583 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto___26583){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto___26583){
return (function (state_26539){var state_val_26540 = (state_26539[(1)]);if((state_val_26540 === (7)))
{var inst_26530 = (state_26539[(2)]);var inst_26531 = antares.core.dispatch_event_BANG_.call(null,inst_26530,event_mappings);var state_26539__$1 = (function (){var statearr_26541 = state_26539;(statearr_26541[(7)] = inst_26531);
return statearr_26541;
})();var statearr_26542_26584 = state_26539__$1;(statearr_26542_26584[(2)] = null);
(statearr_26542_26584[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26540 === (6)))
{var inst_26535 = (state_26539[(2)]);var state_26539__$1 = state_26539;var statearr_26543_26585 = state_26539__$1;(statearr_26543_26585[(2)] = inst_26535);
(statearr_26543_26585[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26540 === (5)))
{var state_26539__$1 = state_26539;var statearr_26544_26586 = state_26539__$1;(statearr_26544_26586[(2)] = null);
(statearr_26544_26586[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26540 === (4)))
{var state_26539__$1 = state_26539;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26539__$1,(7),antares.core.event_stream);
} else
{if((state_val_26540 === (3)))
{var inst_26537 = (state_26539[(2)]);var state_26539__$1 = state_26539;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26539__$1,inst_26537);
} else
{if((state_val_26540 === (2)))
{var state_26539__$1 = state_26539;var statearr_26545_26587 = state_26539__$1;(statearr_26545_26587[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26540 === (1)))
{var state_26539__$1 = state_26539;var statearr_26547_26588 = state_26539__$1;(statearr_26547_26588[(2)] = null);
(statearr_26547_26588[(1)] = (2));
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
});})(c__5906__auto___26583))
;return ((function (switch__5891__auto__,c__5906__auto___26583){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_26551 = [null,null,null,null,null,null,null,null];(statearr_26551[(0)] = state_machine__5892__auto__);
(statearr_26551[(1)] = (1));
return statearr_26551;
});
var state_machine__5892__auto____1 = (function (state_26539){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_26539);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e26552){if((e26552 instanceof Object))
{var ex__5895__auto__ = e26552;var statearr_26553_26589 = state_26539;(statearr_26553_26589[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26539);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26552;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26590 = state_26539;
state_26539 = G__26590;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_26539){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_26539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto___26583))
})();var state__5908__auto__ = (function (){var statearr_26554 = f__5907__auto__.call(null);(statearr_26554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto___26583);
return statearr_26554;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto___26583))
);
var c__5906__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto__){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto__){
return (function (state_26567){var state_val_26568 = (state_26567[(1)]);if((state_val_26568 === (7)))
{var inst_26558 = (state_26567[(2)]);var inst_26559 = antares.core.controller_action_BANG_.call(null,inst_26558,controls);var state_26567__$1 = (function (){var statearr_26569 = state_26567;(statearr_26569[(7)] = inst_26559);
return statearr_26569;
})();var statearr_26570_26591 = state_26567__$1;(statearr_26570_26591[(2)] = null);
(statearr_26570_26591[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26568 === (6)))
{var inst_26563 = (state_26567[(2)]);var state_26567__$1 = state_26567;var statearr_26571_26592 = state_26567__$1;(statearr_26571_26592[(2)] = inst_26563);
(statearr_26571_26592[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26568 === (5)))
{var state_26567__$1 = state_26567;var statearr_26572_26593 = state_26567__$1;(statearr_26572_26593[(2)] = null);
(statearr_26572_26593[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26568 === (4)))
{var state_26567__$1 = state_26567;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26567__$1,(7),antares.core.control_stream);
} else
{if((state_val_26568 === (3)))
{var inst_26565 = (state_26567[(2)]);var state_26567__$1 = state_26567;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26567__$1,inst_26565);
} else
{if((state_val_26568 === (2)))
{var state_26567__$1 = state_26567;var statearr_26573_26594 = state_26567__$1;(statearr_26573_26594[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26568 === (1)))
{var state_26567__$1 = state_26567;var statearr_26575_26595 = state_26567__$1;(statearr_26575_26595[(2)] = null);
(statearr_26575_26595[(1)] = (2));
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
var state_machine__5892__auto____0 = (function (){var statearr_26579 = [null,null,null,null,null,null,null,null];(statearr_26579[(0)] = state_machine__5892__auto__);
(statearr_26579[(1)] = (1));
return statearr_26579;
});
var state_machine__5892__auto____1 = (function (state_26567){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_26567);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e26580){if((e26580 instanceof Object))
{var ex__5895__auto__ = e26580;var statearr_26581_26596 = state_26567;(statearr_26581_26596[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26567);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26580;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26597 = state_26567;
state_26567 = G__26597;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_26567){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_26567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto__))
})();var state__5908__auto__ = (function (){var statearr_26582 = f__5907__auto__.call(null);(statearr_26582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto__);
return statearr_26582;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto__))
);
return c__5906__auto__;
});
antares.core.renderer = (function renderer(root){return cljs.core.add_watch.call(null,antares.core.app_state,new cljs.core.Keyword(null,"renderer","renderer",336841071),(function (key,reference,old_value,new_value){var root_node = document.querySelector("#antares");var new_dom = antares.core.render_html.call(null,root,new_value);var seq__26606_26614 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__26607_26615 = null;var count__26608_26616 = (0);var i__26609_26617 = (0);while(true){
if((i__26609_26617 < count__26608_26616))
{var component_26618 = cljs.core._nth.call(null,chunk__26607_26615,i__26609_26617);antares.core.component_will_update.call(null,component_26618);
{
var G__26619 = seq__26606_26614;
var G__26620 = chunk__26607_26615;
var G__26621 = count__26608_26616;
var G__26622 = (i__26609_26617 + (1));
seq__26606_26614 = G__26619;
chunk__26607_26615 = G__26620;
count__26608_26616 = G__26621;
i__26609_26617 = G__26622;
continue;
}
} else
{var temp__4126__auto___26623 = cljs.core.seq.call(null,seq__26606_26614);if(temp__4126__auto___26623)
{var seq__26606_26624__$1 = temp__4126__auto___26623;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26606_26624__$1))
{var c__4309__auto___26625 = cljs.core.chunk_first.call(null,seq__26606_26624__$1);{
var G__26626 = cljs.core.chunk_rest.call(null,seq__26606_26624__$1);
var G__26627 = c__4309__auto___26625;
var G__26628 = cljs.core.count.call(null,c__4309__auto___26625);
var G__26629 = (0);
seq__26606_26614 = G__26626;
chunk__26607_26615 = G__26627;
count__26608_26616 = G__26628;
i__26609_26617 = G__26629;
continue;
}
} else
{var component_26630 = cljs.core.first.call(null,seq__26606_26624__$1);antares.core.component_will_update.call(null,component_26630);
{
var G__26631 = cljs.core.next.call(null,seq__26606_26624__$1);
var G__26632 = null;
var G__26633 = (0);
var G__26634 = (0);
seq__26606_26614 = G__26631;
chunk__26607_26615 = G__26632;
count__26608_26616 = G__26633;
i__26609_26617 = G__26634;
continue;
}
}
} else
{}
}
break;
}
root_node.innerHTML = new_dom;
var seq__26610 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__26611 = null;var count__26612 = (0);var i__26613 = (0);while(true){
if((i__26613 < count__26612))
{var component = cljs.core._nth.call(null,chunk__26611,i__26613);antares.core.component_did_update.call(null,component);
{
var G__26635 = seq__26610;
var G__26636 = chunk__26611;
var G__26637 = count__26612;
var G__26638 = (i__26613 + (1));
seq__26610 = G__26635;
chunk__26611 = G__26636;
count__26612 = G__26637;
i__26613 = G__26638;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__26610);if(temp__4126__auto__)
{var seq__26610__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26610__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__26610__$1);{
var G__26639 = cljs.core.chunk_rest.call(null,seq__26610__$1);
var G__26640 = c__4309__auto__;
var G__26641 = cljs.core.count.call(null,c__4309__auto__);
var G__26642 = (0);
seq__26610 = G__26639;
chunk__26611 = G__26640;
count__26612 = G__26641;
i__26613 = G__26642;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__26610__$1);antares.core.component_did_update.call(null,component);
{
var G__26643 = cljs.core.next.call(null,seq__26610__$1);
var G__26644 = null;
var G__26645 = (0);
var G__26646 = (0);
seq__26610 = G__26643;
chunk__26611 = G__26644;
count__26612 = G__26645;
i__26613 = G__26646;
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