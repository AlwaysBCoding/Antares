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
antares.core.LifeCycle = (function (){var obj15894 = {};return obj15894;
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
antares.core.Registerable = (function (){var obj15896 = {};return obj15896;
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
antares.core.Renderable = (function (){var obj15898 = {};return obj15898;
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
antares.core.Mountable = (function (){var obj15900 = {};return obj15900;
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
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4141__auto__,k15902,else__4142__auto__){var self__ = this;
var this__4141__auto____$1 = this;var G__15904 = (((k15902 instanceof cljs.core.Keyword))?k15902.fqn:null);switch (G__15904) {
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
return cljs.core.get.call(null,self__.__extmap,k15902,else__4142__auto__);

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
antares.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4146__auto__,k__4147__auto__,G__15901){var self__ = this;
var this__4146__auto____$1 = this;var pred__15905 = cljs.core.keyword_identical_QMARK_;var expr__15906 = k__4147__auto__;if(cljs.core.truth_(pred__15905.call(null,new cljs.core.Keyword(null,"ident","ident",-742346),expr__15906)))
{return (new antares.core.Component(G__15901,self__.render,self__.style,self__.event_mappings,self__.controls,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15905.call(null,new cljs.core.Keyword(null,"render","render",-1408033454),expr__15906)))
{return (new antares.core.Component(self__.ident,G__15901,self__.style,self__.event_mappings,self__.controls,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15905.call(null,new cljs.core.Keyword(null,"style","style",-496642736),expr__15906)))
{return (new antares.core.Component(self__.ident,self__.render,G__15901,self__.event_mappings,self__.controls,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15905.call(null,new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885),expr__15906)))
{return (new antares.core.Component(self__.ident,self__.render,self__.style,G__15901,self__.controls,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__15905.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452),expr__15906)))
{return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.event_mappings,G__15901,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.event_mappings,self__.controls,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4147__auto__,G__15901),null));
}
}
}
}
}
});
antares.core.Component.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4151__auto__){var self__ = this;
var this__4151__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render","render",-1408033454),self__.render],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",-496642736),self__.style],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885),self__.event_mappings],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4138__auto__,G__15901){var self__ = this;
var this__4138__auto____$1 = this;return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.event_mappings,self__.controls,G__15901,self__.__extmap,self__.__hash));
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
antares.core.map__GT_Component = (function map__GT_Component(G__15903){return (new antares.core.Component(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(G__15903),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(G__15903),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(G__15903),new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885).cljs$core$IFn$_invoke$arity$1(G__15903),new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(G__15903),null,cljs.core.dissoc.call(null,G__15903,new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885),new cljs.core.Keyword(null,"controls","controls",1340701452))));
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
var seq__15913_15917 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__15914_15918 = null;var count__15915_15919 = (0);var i__15916_15920 = (0);while(true){
if((i__15916_15920 < count__15915_15919))
{var component_15921__$1 = cljs.core._nth.call(null,chunk__15914_15918,i__15916_15920);antares.core.component_did_update.call(null,component_15921__$1);
{
var G__15922 = seq__15913_15917;
var G__15923 = chunk__15914_15918;
var G__15924 = count__15915_15919;
var G__15925 = (i__15916_15920 + (1));
seq__15913_15917 = G__15922;
chunk__15914_15918 = G__15923;
count__15915_15919 = G__15924;
i__15916_15920 = G__15925;
continue;
}
} else
{var temp__4126__auto___15926 = cljs.core.seq.call(null,seq__15913_15917);if(temp__4126__auto___15926)
{var seq__15913_15927__$1 = temp__4126__auto___15926;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15913_15927__$1))
{var c__4309__auto___15928 = cljs.core.chunk_first.call(null,seq__15913_15927__$1);{
var G__15929 = cljs.core.chunk_rest.call(null,seq__15913_15927__$1);
var G__15930 = c__4309__auto___15928;
var G__15931 = cljs.core.count.call(null,c__4309__auto___15928);
var G__15932 = (0);
seq__15913_15917 = G__15929;
chunk__15914_15918 = G__15930;
count__15915_15919 = G__15931;
i__15916_15920 = G__15932;
continue;
}
} else
{var component_15933__$1 = cljs.core.first.call(null,seq__15913_15927__$1);antares.core.component_did_update.call(null,component_15933__$1);
{
var G__15934 = cljs.core.next.call(null,seq__15913_15927__$1);
var G__15935 = null;
var G__15936 = (0);
var G__15937 = (0);
seq__15913_15917 = G__15934;
chunk__15914_15918 = G__15935;
count__15915_15919 = G__15936;
i__15916_15920 = G__15937;
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
var root_node_15942 = document.querySelector("body");var seq__15938_15943 = cljs.core.seq.call(null,antares.core.event_list);var chunk__15939_15944 = null;var count__15940_15945 = (0);var i__15941_15946 = (0);while(true){
if((i__15941_15946 < count__15940_15945))
{var event_name_15947 = cljs.core._nth.call(null,chunk__15939_15944,i__15941_15946);goog.events.listen(root_node_15942,event_name_15947,((function (seq__15938_15943,chunk__15939_15944,count__15940_15945,i__15941_15946,event_name_15947,root_node_15942){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__15938_15943,chunk__15939_15944,count__15940_15945,i__15941_15946,event_name_15947,root_node_15942))
);
{
var G__15948 = seq__15938_15943;
var G__15949 = chunk__15939_15944;
var G__15950 = count__15940_15945;
var G__15951 = (i__15941_15946 + (1));
seq__15938_15943 = G__15948;
chunk__15939_15944 = G__15949;
count__15940_15945 = G__15950;
i__15941_15946 = G__15951;
continue;
}
} else
{var temp__4126__auto___15952 = cljs.core.seq.call(null,seq__15938_15943);if(temp__4126__auto___15952)
{var seq__15938_15953__$1 = temp__4126__auto___15952;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15938_15953__$1))
{var c__4309__auto___15954 = cljs.core.chunk_first.call(null,seq__15938_15953__$1);{
var G__15955 = cljs.core.chunk_rest.call(null,seq__15938_15953__$1);
var G__15956 = c__4309__auto___15954;
var G__15957 = cljs.core.count.call(null,c__4309__auto___15954);
var G__15958 = (0);
seq__15938_15943 = G__15955;
chunk__15939_15944 = G__15956;
count__15940_15945 = G__15957;
i__15941_15946 = G__15958;
continue;
}
} else
{var event_name_15959 = cljs.core.first.call(null,seq__15938_15953__$1);goog.events.listen(root_node_15942,event_name_15959,((function (seq__15938_15943,chunk__15939_15944,count__15940_15945,i__15941_15946,event_name_15959,seq__15938_15953__$1,temp__4126__auto___15952,root_node_15942){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__15938_15943,chunk__15939_15944,count__15940_15945,i__15941_15946,event_name_15959,seq__15938_15953__$1,temp__4126__auto___15952,root_node_15942))
);
{
var G__15960 = cljs.core.next.call(null,seq__15938_15953__$1);
var G__15961 = null;
var G__15962 = (0);
var G__15963 = (0);
seq__15938_15943 = G__15960;
chunk__15939_15944 = G__15961;
count__15940_15945 = G__15962;
i__15941_15946 = G__15963;
continue;
}
}
} else
{}
}
break;
}
antares.core.dispatch_event_BANG_ = (function dispatch_event_BANG_(event,event_mappings){var seq__15968 = cljs.core.seq.call(null,event_mappings);var chunk__15969 = null;var count__15970 = (0);var i__15971 = (0);while(true){
if((i__15971 < count__15970))
{var event_mapping = cljs.core._nth.call(null,chunk__15969,i__15971);if(cljs.core.truth_(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(event_mapping).call(null,event)))
{cljs.core.async.put_BANG_.call(null,antares.core.control_stream,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(event_mapping).call(null,event));
} else
{}
{
var G__15972 = seq__15968;
var G__15973 = chunk__15969;
var G__15974 = count__15970;
var G__15975 = (i__15971 + (1));
seq__15968 = G__15972;
chunk__15969 = G__15973;
count__15970 = G__15974;
i__15971 = G__15975;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__15968);if(temp__4126__auto__)
{var seq__15968__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15968__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__15968__$1);{
var G__15976 = cljs.core.chunk_rest.call(null,seq__15968__$1);
var G__15977 = c__4309__auto__;
var G__15978 = cljs.core.count.call(null,c__4309__auto__);
var G__15979 = (0);
seq__15968 = G__15976;
chunk__15969 = G__15977;
count__15970 = G__15978;
i__15971 = G__15979;
continue;
}
} else
{var event_mapping = cljs.core.first.call(null,seq__15968__$1);if(cljs.core.truth_(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(event_mapping).call(null,event)))
{cljs.core.async.put_BANG_.call(null,antares.core.control_stream,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(event_mapping).call(null,event));
} else
{}
{
var G__15980 = cljs.core.next.call(null,seq__15968__$1);
var G__15981 = null;
var G__15982 = (0);
var G__15983 = (0);
seq__15968 = G__15980;
chunk__15969 = G__15981;
count__15970 = G__15982;
i__15971 = G__15983;
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
antares.core.controller_action_BANG_ = (function controller_action_BANG_(p__15985,controls){var vec__15991 = p__15985;var command = cljs.core.nth.call(null,vec__15991,(0),null);var data = cljs.core.nth.call(null,vec__15991,(1),null);var seq__15992 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (vec__15991,command,data){
return (function (p1__15984_SHARP_){return cljs.core._EQ_.call(null,command,new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(p1__15984_SHARP_));
});})(vec__15991,command,data))
,controls));var chunk__15993 = null;var count__15994 = (0);var i__15995 = (0);while(true){
if((i__15995 < count__15994))
{var control = cljs.core._nth.call(null,chunk__15993,i__15995);new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(control).call(null,data);
{
var G__15996 = seq__15992;
var G__15997 = chunk__15993;
var G__15998 = count__15994;
var G__15999 = (i__15995 + (1));
seq__15992 = G__15996;
chunk__15993 = G__15997;
count__15994 = G__15998;
i__15995 = G__15999;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__15992);if(temp__4126__auto__)
{var seq__15992__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15992__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__15992__$1);{
var G__16000 = cljs.core.chunk_rest.call(null,seq__15992__$1);
var G__16001 = c__4309__auto__;
var G__16002 = cljs.core.count.call(null,c__4309__auto__);
var G__16003 = (0);
seq__15992 = G__16000;
chunk__15993 = G__16001;
count__15994 = G__16002;
i__15995 = G__16003;
continue;
}
} else
{var control = cljs.core.first.call(null,seq__15992__$1);new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(control).call(null,data);
{
var G__16004 = cljs.core.next.call(null,seq__15992__$1);
var G__16005 = null;
var G__16006 = (0);
var G__16007 = (0);
seq__15992 = G__16004;
chunk__15993 = G__16005;
count__15994 = G__16006;
i__15995 = G__16007;
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
antares.core.event_loop = (function event_loop(event_mappings,controls){var c__5906__auto___16120 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto___16120){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto___16120){
return (function (state_16076){var state_val_16077 = (state_16076[(1)]);if((state_val_16077 === (7)))
{var inst_16067 = (state_16076[(2)]);var inst_16068 = antares.core.dispatch_event_BANG_.call(null,inst_16067,event_mappings);var state_16076__$1 = (function (){var statearr_16078 = state_16076;(statearr_16078[(7)] = inst_16068);
return statearr_16078;
})();var statearr_16079_16121 = state_16076__$1;(statearr_16079_16121[(2)] = null);
(statearr_16079_16121[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16077 === (6)))
{var inst_16072 = (state_16076[(2)]);var state_16076__$1 = state_16076;var statearr_16080_16122 = state_16076__$1;(statearr_16080_16122[(2)] = inst_16072);
(statearr_16080_16122[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16077 === (5)))
{var state_16076__$1 = state_16076;var statearr_16081_16123 = state_16076__$1;(statearr_16081_16123[(2)] = null);
(statearr_16081_16123[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16077 === (4)))
{var state_16076__$1 = state_16076;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16076__$1,(7),antares.core.event_stream);
} else
{if((state_val_16077 === (3)))
{var inst_16074 = (state_16076[(2)]);var state_16076__$1 = state_16076;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16076__$1,inst_16074);
} else
{if((state_val_16077 === (2)))
{var state_16076__$1 = state_16076;var statearr_16082_16124 = state_16076__$1;(statearr_16082_16124[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16077 === (1)))
{var state_16076__$1 = state_16076;var statearr_16084_16125 = state_16076__$1;(statearr_16084_16125[(2)] = null);
(statearr_16084_16125[(1)] = (2));
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
});})(c__5906__auto___16120))
;return ((function (switch__5891__auto__,c__5906__auto___16120){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_16088 = [null,null,null,null,null,null,null,null];(statearr_16088[(0)] = state_machine__5892__auto__);
(statearr_16088[(1)] = (1));
return statearr_16088;
});
var state_machine__5892__auto____1 = (function (state_16076){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_16076);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e16089){if((e16089 instanceof Object))
{var ex__5895__auto__ = e16089;var statearr_16090_16126 = state_16076;(statearr_16090_16126[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16076);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16089;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16127 = state_16076;
state_16076 = G__16127;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_16076){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_16076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto___16120))
})();var state__5908__auto__ = (function (){var statearr_16091 = f__5907__auto__.call(null);(statearr_16091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto___16120);
return statearr_16091;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto___16120))
);
var c__5906__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto__){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto__){
return (function (state_16104){var state_val_16105 = (state_16104[(1)]);if((state_val_16105 === (7)))
{var inst_16095 = (state_16104[(2)]);var inst_16096 = antares.core.controller_action_BANG_.call(null,inst_16095,controls);var state_16104__$1 = (function (){var statearr_16106 = state_16104;(statearr_16106[(7)] = inst_16096);
return statearr_16106;
})();var statearr_16107_16128 = state_16104__$1;(statearr_16107_16128[(2)] = null);
(statearr_16107_16128[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16105 === (6)))
{var inst_16100 = (state_16104[(2)]);var state_16104__$1 = state_16104;var statearr_16108_16129 = state_16104__$1;(statearr_16108_16129[(2)] = inst_16100);
(statearr_16108_16129[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16105 === (5)))
{var state_16104__$1 = state_16104;var statearr_16109_16130 = state_16104__$1;(statearr_16109_16130[(2)] = null);
(statearr_16109_16130[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16105 === (4)))
{var state_16104__$1 = state_16104;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16104__$1,(7),antares.core.control_stream);
} else
{if((state_val_16105 === (3)))
{var inst_16102 = (state_16104[(2)]);var state_16104__$1 = state_16104;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16104__$1,inst_16102);
} else
{if((state_val_16105 === (2)))
{var state_16104__$1 = state_16104;var statearr_16110_16131 = state_16104__$1;(statearr_16110_16131[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16105 === (1)))
{var state_16104__$1 = state_16104;var statearr_16112_16132 = state_16104__$1;(statearr_16112_16132[(2)] = null);
(statearr_16112_16132[(1)] = (2));
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
var state_machine__5892__auto____0 = (function (){var statearr_16116 = [null,null,null,null,null,null,null,null];(statearr_16116[(0)] = state_machine__5892__auto__);
(statearr_16116[(1)] = (1));
return statearr_16116;
});
var state_machine__5892__auto____1 = (function (state_16104){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_16104);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e16117){if((e16117 instanceof Object))
{var ex__5895__auto__ = e16117;var statearr_16118_16133 = state_16104;(statearr_16118_16133[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16104);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16117;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16134 = state_16104;
state_16104 = G__16134;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_16104){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_16104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto__))
})();var state__5908__auto__ = (function (){var statearr_16119 = f__5907__auto__.call(null);(statearr_16119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto__);
return statearr_16119;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto__))
);
return c__5906__auto__;
});
antares.core.renderer = (function renderer(root){return cljs.core.add_watch.call(null,antares.core.app_state,new cljs.core.Keyword(null,"renderer","renderer",336841071),(function (key,reference,old_value,new_value){var root_node = document.querySelector("#antares");var new_dom = antares.core.render_html.call(null,root,new_value);var seq__16143_16151 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__16144_16152 = null;var count__16145_16153 = (0);var i__16146_16154 = (0);while(true){
if((i__16146_16154 < count__16145_16153))
{var component_16155 = cljs.core._nth.call(null,chunk__16144_16152,i__16146_16154);antares.core.component_will_update.call(null,component_16155);
{
var G__16156 = seq__16143_16151;
var G__16157 = chunk__16144_16152;
var G__16158 = count__16145_16153;
var G__16159 = (i__16146_16154 + (1));
seq__16143_16151 = G__16156;
chunk__16144_16152 = G__16157;
count__16145_16153 = G__16158;
i__16146_16154 = G__16159;
continue;
}
} else
{var temp__4126__auto___16160 = cljs.core.seq.call(null,seq__16143_16151);if(temp__4126__auto___16160)
{var seq__16143_16161__$1 = temp__4126__auto___16160;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16143_16161__$1))
{var c__4309__auto___16162 = cljs.core.chunk_first.call(null,seq__16143_16161__$1);{
var G__16163 = cljs.core.chunk_rest.call(null,seq__16143_16161__$1);
var G__16164 = c__4309__auto___16162;
var G__16165 = cljs.core.count.call(null,c__4309__auto___16162);
var G__16166 = (0);
seq__16143_16151 = G__16163;
chunk__16144_16152 = G__16164;
count__16145_16153 = G__16165;
i__16146_16154 = G__16166;
continue;
}
} else
{var component_16167 = cljs.core.first.call(null,seq__16143_16161__$1);antares.core.component_will_update.call(null,component_16167);
{
var G__16168 = cljs.core.next.call(null,seq__16143_16161__$1);
var G__16169 = null;
var G__16170 = (0);
var G__16171 = (0);
seq__16143_16151 = G__16168;
chunk__16144_16152 = G__16169;
count__16145_16153 = G__16170;
i__16146_16154 = G__16171;
continue;
}
}
} else
{}
}
break;
}
root_node.innerHTML = new_dom;
var seq__16147 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__16148 = null;var count__16149 = (0);var i__16150 = (0);while(true){
if((i__16150 < count__16149))
{var component = cljs.core._nth.call(null,chunk__16148,i__16150);antares.core.component_did_update.call(null,component);
{
var G__16172 = seq__16147;
var G__16173 = chunk__16148;
var G__16174 = count__16149;
var G__16175 = (i__16150 + (1));
seq__16147 = G__16172;
chunk__16148 = G__16173;
count__16149 = G__16174;
i__16150 = G__16175;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__16147);if(temp__4126__auto__)
{var seq__16147__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16147__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__16147__$1);{
var G__16176 = cljs.core.chunk_rest.call(null,seq__16147__$1);
var G__16177 = c__4309__auto__;
var G__16178 = cljs.core.count.call(null,c__4309__auto__);
var G__16179 = (0);
seq__16147 = G__16176;
chunk__16148 = G__16177;
count__16149 = G__16178;
i__16150 = G__16179;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__16147__$1);antares.core.component_did_update.call(null,component);
{
var G__16180 = cljs.core.next.call(null,seq__16147__$1);
var G__16181 = null;
var G__16182 = (0);
var G__16183 = (0);
seq__16147 = G__16180;
chunk__16148 = G__16181;
count__16149 = G__16182;
i__16150 = G__16183;
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
antares.core.emit_event_BANG_ = (function emit_event_BANG_(event){return cljs.core.async.put_BANG_.call(null,antares.core.control_stream,event);
});
antares.core.on_transition = (function on_transition(ident,cursor,watch_fn){return cljs.core.add_watch.call(null,antares.core.app_state,ident,watch_fn);
});
antares.core.get = (function get(request){return ajax.core.GET.call(null,new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(request),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),request.call(null,new cljs.core.Keyword(null,"params","params",710516235)),new cljs.core.Keyword(null,"handler","handler",-195596612),request.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612))], null));
});
antares.core.post = (function post(request){return ajax.core.POST.call(null,new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(request),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),request.call(null,new cljs.core.Keyword(null,"params","params",710516235)),new cljs.core.Keyword(null,"handler","handler",-195596612),request.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612))], null));
});

//# sourceMappingURL=core.js.map