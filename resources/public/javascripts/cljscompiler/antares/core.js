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
antares.core.LifeCycle = (function (){var obj26029 = {};return obj26029;
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
antares.core.Registerable = (function (){var obj26031 = {};return obj26031;
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
antares.core.Renderable = (function (){var obj26033 = {};return obj26033;
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
antares.core.Mountable = (function (){var obj26035 = {};return obj26035;
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
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4141__auto__,k26037,else__4142__auto__){var self__ = this;
var this__4141__auto____$1 = this;var G__26039 = (((k26037 instanceof cljs.core.Keyword))?k26037.fqn:null);switch (G__26039) {
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
return cljs.core.get.call(null,self__.__extmap,k26037,else__4142__auto__);

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
antares.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4146__auto__,k__4147__auto__,G__26036){var self__ = this;
var this__4146__auto____$1 = this;var pred__26040 = cljs.core.keyword_identical_QMARK_;var expr__26041 = k__4147__auto__;if(cljs.core.truth_(pred__26040.call(null,new cljs.core.Keyword(null,"ident","ident",-742346),expr__26041)))
{return (new antares.core.Component(G__26036,self__.render,self__.style,self__.event_mappings,self__.controls,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__26040.call(null,new cljs.core.Keyword(null,"render","render",-1408033454),expr__26041)))
{return (new antares.core.Component(self__.ident,G__26036,self__.style,self__.event_mappings,self__.controls,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__26040.call(null,new cljs.core.Keyword(null,"style","style",-496642736),expr__26041)))
{return (new antares.core.Component(self__.ident,self__.render,G__26036,self__.event_mappings,self__.controls,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__26040.call(null,new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885),expr__26041)))
{return (new antares.core.Component(self__.ident,self__.render,self__.style,G__26036,self__.controls,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__26040.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452),expr__26041)))
{return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.event_mappings,G__26036,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.event_mappings,self__.controls,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4147__auto__,G__26036),null));
}
}
}
}
}
});
antares.core.Component.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4151__auto__){var self__ = this;
var this__4151__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render","render",-1408033454),self__.render],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",-496642736),self__.style],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885),self__.event_mappings],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4138__auto__,G__26036){var self__ = this;
var this__4138__auto____$1 = this;return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.event_mappings,self__.controls,G__26036,self__.__extmap,self__.__hash));
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
antares.core.map__GT_Component = (function map__GT_Component(G__26038){return (new antares.core.Component(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(G__26038),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(G__26038),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(G__26038),new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885).cljs$core$IFn$_invoke$arity$1(G__26038),new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(G__26038),null,cljs.core.dissoc.call(null,G__26038,new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885),new cljs.core.Keyword(null,"controls","controls",1340701452))));
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
var seq__26048_26052 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__26049_26053 = null;var count__26050_26054 = (0);var i__26051_26055 = (0);while(true){
if((i__26051_26055 < count__26050_26054))
{var component_26056__$1 = cljs.core._nth.call(null,chunk__26049_26053,i__26051_26055);antares.core.component_did_update.call(null,component_26056__$1);
{
var G__26057 = seq__26048_26052;
var G__26058 = chunk__26049_26053;
var G__26059 = count__26050_26054;
var G__26060 = (i__26051_26055 + (1));
seq__26048_26052 = G__26057;
chunk__26049_26053 = G__26058;
count__26050_26054 = G__26059;
i__26051_26055 = G__26060;
continue;
}
} else
{var temp__4126__auto___26061 = cljs.core.seq.call(null,seq__26048_26052);if(temp__4126__auto___26061)
{var seq__26048_26062__$1 = temp__4126__auto___26061;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26048_26062__$1))
{var c__4309__auto___26063 = cljs.core.chunk_first.call(null,seq__26048_26062__$1);{
var G__26064 = cljs.core.chunk_rest.call(null,seq__26048_26062__$1);
var G__26065 = c__4309__auto___26063;
var G__26066 = cljs.core.count.call(null,c__4309__auto___26063);
var G__26067 = (0);
seq__26048_26052 = G__26064;
chunk__26049_26053 = G__26065;
count__26050_26054 = G__26066;
i__26051_26055 = G__26067;
continue;
}
} else
{var component_26068__$1 = cljs.core.first.call(null,seq__26048_26062__$1);antares.core.component_did_update.call(null,component_26068__$1);
{
var G__26069 = cljs.core.next.call(null,seq__26048_26062__$1);
var G__26070 = null;
var G__26071 = (0);
var G__26072 = (0);
seq__26048_26052 = G__26069;
chunk__26049_26053 = G__26070;
count__26050_26054 = G__26071;
i__26051_26055 = G__26072;
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
var root_node_26077 = document.querySelector("body");var seq__26073_26078 = cljs.core.seq.call(null,antares.core.event_list);var chunk__26074_26079 = null;var count__26075_26080 = (0);var i__26076_26081 = (0);while(true){
if((i__26076_26081 < count__26075_26080))
{var event_name_26082 = cljs.core._nth.call(null,chunk__26074_26079,i__26076_26081);goog.events.listen(root_node_26077,event_name_26082,((function (seq__26073_26078,chunk__26074_26079,count__26075_26080,i__26076_26081,event_name_26082,root_node_26077){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__26073_26078,chunk__26074_26079,count__26075_26080,i__26076_26081,event_name_26082,root_node_26077))
);
{
var G__26083 = seq__26073_26078;
var G__26084 = chunk__26074_26079;
var G__26085 = count__26075_26080;
var G__26086 = (i__26076_26081 + (1));
seq__26073_26078 = G__26083;
chunk__26074_26079 = G__26084;
count__26075_26080 = G__26085;
i__26076_26081 = G__26086;
continue;
}
} else
{var temp__4126__auto___26087 = cljs.core.seq.call(null,seq__26073_26078);if(temp__4126__auto___26087)
{var seq__26073_26088__$1 = temp__4126__auto___26087;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26073_26088__$1))
{var c__4309__auto___26089 = cljs.core.chunk_first.call(null,seq__26073_26088__$1);{
var G__26090 = cljs.core.chunk_rest.call(null,seq__26073_26088__$1);
var G__26091 = c__4309__auto___26089;
var G__26092 = cljs.core.count.call(null,c__4309__auto___26089);
var G__26093 = (0);
seq__26073_26078 = G__26090;
chunk__26074_26079 = G__26091;
count__26075_26080 = G__26092;
i__26076_26081 = G__26093;
continue;
}
} else
{var event_name_26094 = cljs.core.first.call(null,seq__26073_26088__$1);goog.events.listen(root_node_26077,event_name_26094,((function (seq__26073_26078,chunk__26074_26079,count__26075_26080,i__26076_26081,event_name_26094,seq__26073_26088__$1,temp__4126__auto___26087,root_node_26077){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__26073_26078,chunk__26074_26079,count__26075_26080,i__26076_26081,event_name_26094,seq__26073_26088__$1,temp__4126__auto___26087,root_node_26077))
);
{
var G__26095 = cljs.core.next.call(null,seq__26073_26088__$1);
var G__26096 = null;
var G__26097 = (0);
var G__26098 = (0);
seq__26073_26078 = G__26095;
chunk__26074_26079 = G__26096;
count__26075_26080 = G__26097;
i__26076_26081 = G__26098;
continue;
}
}
} else
{}
}
break;
}
antares.core.dispatch_event_BANG_ = (function dispatch_event_BANG_(event,event_mappings){var seq__26103 = cljs.core.seq.call(null,event_mappings);var chunk__26104 = null;var count__26105 = (0);var i__26106 = (0);while(true){
if((i__26106 < count__26105))
{var event_mapping = cljs.core._nth.call(null,chunk__26104,i__26106);if(cljs.core.truth_(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(event_mapping).call(null,event)))
{cljs.core.async.put_BANG_.call(null,antares.core.control_stream,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(event_mapping).call(null,event));
} else
{}
{
var G__26107 = seq__26103;
var G__26108 = chunk__26104;
var G__26109 = count__26105;
var G__26110 = (i__26106 + (1));
seq__26103 = G__26107;
chunk__26104 = G__26108;
count__26105 = G__26109;
i__26106 = G__26110;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__26103);if(temp__4126__auto__)
{var seq__26103__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26103__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__26103__$1);{
var G__26111 = cljs.core.chunk_rest.call(null,seq__26103__$1);
var G__26112 = c__4309__auto__;
var G__26113 = cljs.core.count.call(null,c__4309__auto__);
var G__26114 = (0);
seq__26103 = G__26111;
chunk__26104 = G__26112;
count__26105 = G__26113;
i__26106 = G__26114;
continue;
}
} else
{var event_mapping = cljs.core.first.call(null,seq__26103__$1);if(cljs.core.truth_(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(event_mapping).call(null,event)))
{cljs.core.async.put_BANG_.call(null,antares.core.control_stream,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(event_mapping).call(null,event));
} else
{}
{
var G__26115 = cljs.core.next.call(null,seq__26103__$1);
var G__26116 = null;
var G__26117 = (0);
var G__26118 = (0);
seq__26103 = G__26115;
chunk__26104 = G__26116;
count__26105 = G__26117;
i__26106 = G__26118;
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
antares.core.controller_action_BANG_ = (function controller_action_BANG_(p__26120,controls){var vec__26126 = p__26120;var command = cljs.core.nth.call(null,vec__26126,(0),null);var data = cljs.core.nth.call(null,vec__26126,(1),null);var seq__26127 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (vec__26126,command,data){
return (function (p1__26119_SHARP_){return cljs.core._EQ_.call(null,command,new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(p1__26119_SHARP_));
});})(vec__26126,command,data))
,controls));var chunk__26128 = null;var count__26129 = (0);var i__26130 = (0);while(true){
if((i__26130 < count__26129))
{var control = cljs.core._nth.call(null,chunk__26128,i__26130);new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(control).call(null,data);
{
var G__26131 = seq__26127;
var G__26132 = chunk__26128;
var G__26133 = count__26129;
var G__26134 = (i__26130 + (1));
seq__26127 = G__26131;
chunk__26128 = G__26132;
count__26129 = G__26133;
i__26130 = G__26134;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__26127);if(temp__4126__auto__)
{var seq__26127__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26127__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__26127__$1);{
var G__26135 = cljs.core.chunk_rest.call(null,seq__26127__$1);
var G__26136 = c__4309__auto__;
var G__26137 = cljs.core.count.call(null,c__4309__auto__);
var G__26138 = (0);
seq__26127 = G__26135;
chunk__26128 = G__26136;
count__26129 = G__26137;
i__26130 = G__26138;
continue;
}
} else
{var control = cljs.core.first.call(null,seq__26127__$1);new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(control).call(null,data);
{
var G__26139 = cljs.core.next.call(null,seq__26127__$1);
var G__26140 = null;
var G__26141 = (0);
var G__26142 = (0);
seq__26127 = G__26139;
chunk__26128 = G__26140;
count__26129 = G__26141;
i__26130 = G__26142;
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
antares.core.event_loop = (function event_loop(event_mappings,controls){var c__5906__auto___26255 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto___26255){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto___26255){
return (function (state_26211){var state_val_26212 = (state_26211[(1)]);if((state_val_26212 === (7)))
{var inst_26202 = (state_26211[(2)]);var inst_26203 = antares.core.dispatch_event_BANG_.call(null,inst_26202,event_mappings);var state_26211__$1 = (function (){var statearr_26213 = state_26211;(statearr_26213[(7)] = inst_26203);
return statearr_26213;
})();var statearr_26214_26256 = state_26211__$1;(statearr_26214_26256[(2)] = null);
(statearr_26214_26256[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26212 === (6)))
{var inst_26207 = (state_26211[(2)]);var state_26211__$1 = state_26211;var statearr_26215_26257 = state_26211__$1;(statearr_26215_26257[(2)] = inst_26207);
(statearr_26215_26257[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26212 === (5)))
{var state_26211__$1 = state_26211;var statearr_26216_26258 = state_26211__$1;(statearr_26216_26258[(2)] = null);
(statearr_26216_26258[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26212 === (4)))
{var state_26211__$1 = state_26211;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26211__$1,(7),antares.core.event_stream);
} else
{if((state_val_26212 === (3)))
{var inst_26209 = (state_26211[(2)]);var state_26211__$1 = state_26211;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26211__$1,inst_26209);
} else
{if((state_val_26212 === (2)))
{var state_26211__$1 = state_26211;var statearr_26217_26259 = state_26211__$1;(statearr_26217_26259[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26212 === (1)))
{var state_26211__$1 = state_26211;var statearr_26219_26260 = state_26211__$1;(statearr_26219_26260[(2)] = null);
(statearr_26219_26260[(1)] = (2));
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
});})(c__5906__auto___26255))
;return ((function (switch__5891__auto__,c__5906__auto___26255){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_26223 = [null,null,null,null,null,null,null,null];(statearr_26223[(0)] = state_machine__5892__auto__);
(statearr_26223[(1)] = (1));
return statearr_26223;
});
var state_machine__5892__auto____1 = (function (state_26211){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_26211);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e26224){if((e26224 instanceof Object))
{var ex__5895__auto__ = e26224;var statearr_26225_26261 = state_26211;(statearr_26225_26261[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26211);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26224;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26262 = state_26211;
state_26211 = G__26262;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_26211){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_26211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto___26255))
})();var state__5908__auto__ = (function (){var statearr_26226 = f__5907__auto__.call(null);(statearr_26226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto___26255);
return statearr_26226;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto___26255))
);
var c__5906__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto__){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto__){
return (function (state_26239){var state_val_26240 = (state_26239[(1)]);if((state_val_26240 === (7)))
{var inst_26230 = (state_26239[(2)]);var inst_26231 = antares.core.controller_action_BANG_.call(null,inst_26230,controls);var state_26239__$1 = (function (){var statearr_26241 = state_26239;(statearr_26241[(7)] = inst_26231);
return statearr_26241;
})();var statearr_26242_26263 = state_26239__$1;(statearr_26242_26263[(2)] = null);
(statearr_26242_26263[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26240 === (6)))
{var inst_26235 = (state_26239[(2)]);var state_26239__$1 = state_26239;var statearr_26243_26264 = state_26239__$1;(statearr_26243_26264[(2)] = inst_26235);
(statearr_26243_26264[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26240 === (5)))
{var state_26239__$1 = state_26239;var statearr_26244_26265 = state_26239__$1;(statearr_26244_26265[(2)] = null);
(statearr_26244_26265[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26240 === (4)))
{var state_26239__$1 = state_26239;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26239__$1,(7),antares.core.control_stream);
} else
{if((state_val_26240 === (3)))
{var inst_26237 = (state_26239[(2)]);var state_26239__$1 = state_26239;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26239__$1,inst_26237);
} else
{if((state_val_26240 === (2)))
{var state_26239__$1 = state_26239;var statearr_26245_26266 = state_26239__$1;(statearr_26245_26266[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26240 === (1)))
{var state_26239__$1 = state_26239;var statearr_26247_26267 = state_26239__$1;(statearr_26247_26267[(2)] = null);
(statearr_26247_26267[(1)] = (2));
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
var state_machine__5892__auto____0 = (function (){var statearr_26251 = [null,null,null,null,null,null,null,null];(statearr_26251[(0)] = state_machine__5892__auto__);
(statearr_26251[(1)] = (1));
return statearr_26251;
});
var state_machine__5892__auto____1 = (function (state_26239){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_26239);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e26252){if((e26252 instanceof Object))
{var ex__5895__auto__ = e26252;var statearr_26253_26268 = state_26239;(statearr_26253_26268[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26239);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26252;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26269 = state_26239;
state_26239 = G__26269;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_26239){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_26239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto__))
})();var state__5908__auto__ = (function (){var statearr_26254 = f__5907__auto__.call(null);(statearr_26254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto__);
return statearr_26254;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto__))
);
return c__5906__auto__;
});
antares.core.renderer = (function renderer(root){return cljs.core.add_watch.call(null,antares.core.app_state,new cljs.core.Keyword(null,"renderer","renderer",336841071),(function (key,reference,old_value,new_value){var root_node = document.querySelector("#antares");var new_dom = antares.core.render_html.call(null,root,new_value);var seq__26278_26286 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__26279_26287 = null;var count__26280_26288 = (0);var i__26281_26289 = (0);while(true){
if((i__26281_26289 < count__26280_26288))
{var component_26290 = cljs.core._nth.call(null,chunk__26279_26287,i__26281_26289);antares.core.component_will_update.call(null,component_26290);
{
var G__26291 = seq__26278_26286;
var G__26292 = chunk__26279_26287;
var G__26293 = count__26280_26288;
var G__26294 = (i__26281_26289 + (1));
seq__26278_26286 = G__26291;
chunk__26279_26287 = G__26292;
count__26280_26288 = G__26293;
i__26281_26289 = G__26294;
continue;
}
} else
{var temp__4126__auto___26295 = cljs.core.seq.call(null,seq__26278_26286);if(temp__4126__auto___26295)
{var seq__26278_26296__$1 = temp__4126__auto___26295;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26278_26296__$1))
{var c__4309__auto___26297 = cljs.core.chunk_first.call(null,seq__26278_26296__$1);{
var G__26298 = cljs.core.chunk_rest.call(null,seq__26278_26296__$1);
var G__26299 = c__4309__auto___26297;
var G__26300 = cljs.core.count.call(null,c__4309__auto___26297);
var G__26301 = (0);
seq__26278_26286 = G__26298;
chunk__26279_26287 = G__26299;
count__26280_26288 = G__26300;
i__26281_26289 = G__26301;
continue;
}
} else
{var component_26302 = cljs.core.first.call(null,seq__26278_26296__$1);antares.core.component_will_update.call(null,component_26302);
{
var G__26303 = cljs.core.next.call(null,seq__26278_26296__$1);
var G__26304 = null;
var G__26305 = (0);
var G__26306 = (0);
seq__26278_26286 = G__26303;
chunk__26279_26287 = G__26304;
count__26280_26288 = G__26305;
i__26281_26289 = G__26306;
continue;
}
}
} else
{}
}
break;
}
root_node.innerHTML = new_dom;
var seq__26282 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__26283 = null;var count__26284 = (0);var i__26285 = (0);while(true){
if((i__26285 < count__26284))
{var component = cljs.core._nth.call(null,chunk__26283,i__26285);antares.core.component_did_update.call(null,component);
{
var G__26307 = seq__26282;
var G__26308 = chunk__26283;
var G__26309 = count__26284;
var G__26310 = (i__26285 + (1));
seq__26282 = G__26307;
chunk__26283 = G__26308;
count__26284 = G__26309;
i__26285 = G__26310;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__26282);if(temp__4126__auto__)
{var seq__26282__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26282__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__26282__$1);{
var G__26311 = cljs.core.chunk_rest.call(null,seq__26282__$1);
var G__26312 = c__4309__auto__;
var G__26313 = cljs.core.count.call(null,c__4309__auto__);
var G__26314 = (0);
seq__26282 = G__26311;
chunk__26283 = G__26312;
count__26284 = G__26313;
i__26285 = G__26314;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__26282__$1);antares.core.component_did_update.call(null,component);
{
var G__26315 = cljs.core.next.call(null,seq__26282__$1);
var G__26316 = null;
var G__26317 = (0);
var G__26318 = (0);
seq__26282 = G__26315;
chunk__26283 = G__26316;
count__26284 = G__26317;
i__26285 = G__26318;
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