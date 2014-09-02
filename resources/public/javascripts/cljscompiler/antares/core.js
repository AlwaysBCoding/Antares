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
antares.core.LifeCycle = (function (){var obj25422 = {};return obj25422;
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
antares.core.Registerable = (function (){var obj25424 = {};return obj25424;
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
antares.core.Renderable = (function (){var obj25426 = {};return obj25426;
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
antares.core.Mountable = (function (){var obj25428 = {};return obj25428;
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
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4141__auto__,k25430,else__4142__auto__){var self__ = this;
var this__4141__auto____$1 = this;var G__25432 = (((k25430 instanceof cljs.core.Keyword))?k25430.fqn:null);switch (G__25432) {
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
return cljs.core.get.call(null,self__.__extmap,k25430,else__4142__auto__);

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
antares.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4146__auto__,k__4147__auto__,G__25429){var self__ = this;
var this__4146__auto____$1 = this;var pred__25433 = cljs.core.keyword_identical_QMARK_;var expr__25434 = k__4147__auto__;if(cljs.core.truth_(pred__25433.call(null,new cljs.core.Keyword(null,"ident","ident",-742346),expr__25434)))
{return (new antares.core.Component(G__25429,self__.render,self__.style,self__.event_mappings,self__.controls,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__25433.call(null,new cljs.core.Keyword(null,"render","render",-1408033454),expr__25434)))
{return (new antares.core.Component(self__.ident,G__25429,self__.style,self__.event_mappings,self__.controls,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__25433.call(null,new cljs.core.Keyword(null,"style","style",-496642736),expr__25434)))
{return (new antares.core.Component(self__.ident,self__.render,G__25429,self__.event_mappings,self__.controls,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__25433.call(null,new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885),expr__25434)))
{return (new antares.core.Component(self__.ident,self__.render,self__.style,G__25429,self__.controls,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__25433.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452),expr__25434)))
{return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.event_mappings,G__25429,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.event_mappings,self__.controls,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4147__auto__,G__25429),null));
}
}
}
}
}
});
antares.core.Component.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4151__auto__){var self__ = this;
var this__4151__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render","render",-1408033454),self__.render],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",-496642736),self__.style],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885),self__.event_mappings],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4138__auto__,G__25429){var self__ = this;
var this__4138__auto____$1 = this;return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.event_mappings,self__.controls,G__25429,self__.__extmap,self__.__hash));
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
antares.core.map__GT_Component = (function map__GT_Component(G__25431){return (new antares.core.Component(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(G__25431),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(G__25431),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(G__25431),new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885).cljs$core$IFn$_invoke$arity$1(G__25431),new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(G__25431),null,cljs.core.dissoc.call(null,G__25431,new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885),new cljs.core.Keyword(null,"controls","controls",1340701452))));
});
antares.core.component = (function component(source_map){var component__$1 = antares.core.map__GT_Component.call(null,source_map);antares.core.register_component.call(null,component__$1);
return component__$1;
});
antares.core.bind = (function bind(component,app_cursor,dom_cursor){var component_data = antares.core.initialize_state.call(null,component,app_cursor);antares.core.component_will_mount.call(null,component);
antares.core.mount_component.call(null,component,component_data,dom_cursor);
var seq__25441_25445 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__25442_25446 = null;var count__25443_25447 = (0);var i__25444_25448 = (0);while(true){
if((i__25444_25448 < count__25443_25447))
{var component_25449__$1 = cljs.core._nth.call(null,chunk__25442_25446,i__25444_25448);antares.core.component_did_update.call(null,component_25449__$1);
{
var G__25450 = seq__25441_25445;
var G__25451 = chunk__25442_25446;
var G__25452 = count__25443_25447;
var G__25453 = (i__25444_25448 + (1));
seq__25441_25445 = G__25450;
chunk__25442_25446 = G__25451;
count__25443_25447 = G__25452;
i__25444_25448 = G__25453;
continue;
}
} else
{var temp__4126__auto___25454 = cljs.core.seq.call(null,seq__25441_25445);if(temp__4126__auto___25454)
{var seq__25441_25455__$1 = temp__4126__auto___25454;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25441_25455__$1))
{var c__4309__auto___25456 = cljs.core.chunk_first.call(null,seq__25441_25455__$1);{
var G__25457 = cljs.core.chunk_rest.call(null,seq__25441_25455__$1);
var G__25458 = c__4309__auto___25456;
var G__25459 = cljs.core.count.call(null,c__4309__auto___25456);
var G__25460 = (0);
seq__25441_25445 = G__25457;
chunk__25442_25446 = G__25458;
count__25443_25447 = G__25459;
i__25444_25448 = G__25460;
continue;
}
} else
{var component_25461__$1 = cljs.core.first.call(null,seq__25441_25455__$1);antares.core.component_did_update.call(null,component_25461__$1);
{
var G__25462 = cljs.core.next.call(null,seq__25441_25455__$1);
var G__25463 = null;
var G__25464 = (0);
var G__25465 = (0);
seq__25441_25445 = G__25462;
chunk__25442_25446 = G__25463;
count__25443_25447 = G__25464;
i__25444_25448 = G__25465;
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
var root_node_25470 = document.querySelector("body");var seq__25466_25471 = cljs.core.seq.call(null,antares.core.event_list);var chunk__25467_25472 = null;var count__25468_25473 = (0);var i__25469_25474 = (0);while(true){
if((i__25469_25474 < count__25468_25473))
{var event_name_25475 = cljs.core._nth.call(null,chunk__25467_25472,i__25469_25474);goog.events.listen(root_node_25470,event_name_25475,((function (seq__25466_25471,chunk__25467_25472,count__25468_25473,i__25469_25474,event_name_25475,root_node_25470){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__25466_25471,chunk__25467_25472,count__25468_25473,i__25469_25474,event_name_25475,root_node_25470))
);
{
var G__25476 = seq__25466_25471;
var G__25477 = chunk__25467_25472;
var G__25478 = count__25468_25473;
var G__25479 = (i__25469_25474 + (1));
seq__25466_25471 = G__25476;
chunk__25467_25472 = G__25477;
count__25468_25473 = G__25478;
i__25469_25474 = G__25479;
continue;
}
} else
{var temp__4126__auto___25480 = cljs.core.seq.call(null,seq__25466_25471);if(temp__4126__auto___25480)
{var seq__25466_25481__$1 = temp__4126__auto___25480;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25466_25481__$1))
{var c__4309__auto___25482 = cljs.core.chunk_first.call(null,seq__25466_25481__$1);{
var G__25483 = cljs.core.chunk_rest.call(null,seq__25466_25481__$1);
var G__25484 = c__4309__auto___25482;
var G__25485 = cljs.core.count.call(null,c__4309__auto___25482);
var G__25486 = (0);
seq__25466_25471 = G__25483;
chunk__25467_25472 = G__25484;
count__25468_25473 = G__25485;
i__25469_25474 = G__25486;
continue;
}
} else
{var event_name_25487 = cljs.core.first.call(null,seq__25466_25481__$1);goog.events.listen(root_node_25470,event_name_25487,((function (seq__25466_25471,chunk__25467_25472,count__25468_25473,i__25469_25474,event_name_25487,seq__25466_25481__$1,temp__4126__auto___25480,root_node_25470){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__25466_25471,chunk__25467_25472,count__25468_25473,i__25469_25474,event_name_25487,seq__25466_25481__$1,temp__4126__auto___25480,root_node_25470))
);
{
var G__25488 = cljs.core.next.call(null,seq__25466_25481__$1);
var G__25489 = null;
var G__25490 = (0);
var G__25491 = (0);
seq__25466_25471 = G__25488;
chunk__25467_25472 = G__25489;
count__25468_25473 = G__25490;
i__25469_25474 = G__25491;
continue;
}
}
} else
{}
}
break;
}
antares.core.dispatch_event_BANG_ = (function dispatch_event_BANG_(event,event_mappings){var seq__25496 = cljs.core.seq.call(null,event_mappings);var chunk__25497 = null;var count__25498 = (0);var i__25499 = (0);while(true){
if((i__25499 < count__25498))
{var event_mapping = cljs.core._nth.call(null,chunk__25497,i__25499);if(cljs.core.truth_(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(event_mapping).call(null,event)))
{cljs.core.async.put_BANG_.call(null,antares.core.control_stream,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(event_mapping).call(null,event));
} else
{}
{
var G__25500 = seq__25496;
var G__25501 = chunk__25497;
var G__25502 = count__25498;
var G__25503 = (i__25499 + (1));
seq__25496 = G__25500;
chunk__25497 = G__25501;
count__25498 = G__25502;
i__25499 = G__25503;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__25496);if(temp__4126__auto__)
{var seq__25496__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25496__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__25496__$1);{
var G__25504 = cljs.core.chunk_rest.call(null,seq__25496__$1);
var G__25505 = c__4309__auto__;
var G__25506 = cljs.core.count.call(null,c__4309__auto__);
var G__25507 = (0);
seq__25496 = G__25504;
chunk__25497 = G__25505;
count__25498 = G__25506;
i__25499 = G__25507;
continue;
}
} else
{var event_mapping = cljs.core.first.call(null,seq__25496__$1);if(cljs.core.truth_(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(event_mapping).call(null,event)))
{cljs.core.async.put_BANG_.call(null,antares.core.control_stream,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(event_mapping).call(null,event));
} else
{}
{
var G__25508 = cljs.core.next.call(null,seq__25496__$1);
var G__25509 = null;
var G__25510 = (0);
var G__25511 = (0);
seq__25496 = G__25508;
chunk__25497 = G__25509;
count__25498 = G__25510;
i__25499 = G__25511;
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
antares.core.controller_action_BANG_ = (function controller_action_BANG_(p__25513,controls){var vec__25519 = p__25513;var command = cljs.core.nth.call(null,vec__25519,(0),null);var data = cljs.core.nth.call(null,vec__25519,(1),null);var seq__25520 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (vec__25519,command,data){
return (function (p1__25512_SHARP_){return cljs.core._EQ_.call(null,command,new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(p1__25512_SHARP_));
});})(vec__25519,command,data))
,controls));var chunk__25521 = null;var count__25522 = (0);var i__25523 = (0);while(true){
if((i__25523 < count__25522))
{var control = cljs.core._nth.call(null,chunk__25521,i__25523);new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(control).call(null,data);
{
var G__25524 = seq__25520;
var G__25525 = chunk__25521;
var G__25526 = count__25522;
var G__25527 = (i__25523 + (1));
seq__25520 = G__25524;
chunk__25521 = G__25525;
count__25522 = G__25526;
i__25523 = G__25527;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__25520);if(temp__4126__auto__)
{var seq__25520__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25520__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__25520__$1);{
var G__25528 = cljs.core.chunk_rest.call(null,seq__25520__$1);
var G__25529 = c__4309__auto__;
var G__25530 = cljs.core.count.call(null,c__4309__auto__);
var G__25531 = (0);
seq__25520 = G__25528;
chunk__25521 = G__25529;
count__25522 = G__25530;
i__25523 = G__25531;
continue;
}
} else
{var control = cljs.core.first.call(null,seq__25520__$1);new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(control).call(null,data);
{
var G__25532 = cljs.core.next.call(null,seq__25520__$1);
var G__25533 = null;
var G__25534 = (0);
var G__25535 = (0);
seq__25520 = G__25532;
chunk__25521 = G__25533;
count__25522 = G__25534;
i__25523 = G__25535;
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
antares.core.event_loop = (function event_loop(event_mappings,controls){var c__5906__auto___25648 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto___25648){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto___25648){
return (function (state_25604){var state_val_25605 = (state_25604[(1)]);if((state_val_25605 === (7)))
{var inst_25595 = (state_25604[(2)]);var inst_25596 = antares.core.dispatch_event_BANG_.call(null,inst_25595,event_mappings);var state_25604__$1 = (function (){var statearr_25606 = state_25604;(statearr_25606[(7)] = inst_25596);
return statearr_25606;
})();var statearr_25607_25649 = state_25604__$1;(statearr_25607_25649[(2)] = null);
(statearr_25607_25649[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25605 === (6)))
{var inst_25600 = (state_25604[(2)]);var state_25604__$1 = state_25604;var statearr_25608_25650 = state_25604__$1;(statearr_25608_25650[(2)] = inst_25600);
(statearr_25608_25650[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25605 === (5)))
{var state_25604__$1 = state_25604;var statearr_25609_25651 = state_25604__$1;(statearr_25609_25651[(2)] = null);
(statearr_25609_25651[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25605 === (4)))
{var state_25604__$1 = state_25604;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25604__$1,(7),antares.core.event_stream);
} else
{if((state_val_25605 === (3)))
{var inst_25602 = (state_25604[(2)]);var state_25604__$1 = state_25604;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25604__$1,inst_25602);
} else
{if((state_val_25605 === (2)))
{var state_25604__$1 = state_25604;var statearr_25610_25652 = state_25604__$1;(statearr_25610_25652[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25605 === (1)))
{var state_25604__$1 = state_25604;var statearr_25612_25653 = state_25604__$1;(statearr_25612_25653[(2)] = null);
(statearr_25612_25653[(1)] = (2));
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
});})(c__5906__auto___25648))
;return ((function (switch__5891__auto__,c__5906__auto___25648){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_25616 = [null,null,null,null,null,null,null,null];(statearr_25616[(0)] = state_machine__5892__auto__);
(statearr_25616[(1)] = (1));
return statearr_25616;
});
var state_machine__5892__auto____1 = (function (state_25604){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_25604);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e25617){if((e25617 instanceof Object))
{var ex__5895__auto__ = e25617;var statearr_25618_25654 = state_25604;(statearr_25618_25654[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25604);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25617;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25655 = state_25604;
state_25604 = G__25655;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_25604){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_25604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto___25648))
})();var state__5908__auto__ = (function (){var statearr_25619 = f__5907__auto__.call(null);(statearr_25619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto___25648);
return statearr_25619;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto___25648))
);
var c__5906__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto__){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto__){
return (function (state_25632){var state_val_25633 = (state_25632[(1)]);if((state_val_25633 === (7)))
{var inst_25623 = (state_25632[(2)]);var inst_25624 = antares.core.controller_action_BANG_.call(null,inst_25623,controls);var state_25632__$1 = (function (){var statearr_25634 = state_25632;(statearr_25634[(7)] = inst_25624);
return statearr_25634;
})();var statearr_25635_25656 = state_25632__$1;(statearr_25635_25656[(2)] = null);
(statearr_25635_25656[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25633 === (6)))
{var inst_25628 = (state_25632[(2)]);var state_25632__$1 = state_25632;var statearr_25636_25657 = state_25632__$1;(statearr_25636_25657[(2)] = inst_25628);
(statearr_25636_25657[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25633 === (5)))
{var state_25632__$1 = state_25632;var statearr_25637_25658 = state_25632__$1;(statearr_25637_25658[(2)] = null);
(statearr_25637_25658[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25633 === (4)))
{var state_25632__$1 = state_25632;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25632__$1,(7),antares.core.control_stream);
} else
{if((state_val_25633 === (3)))
{var inst_25630 = (state_25632[(2)]);var state_25632__$1 = state_25632;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25632__$1,inst_25630);
} else
{if((state_val_25633 === (2)))
{var state_25632__$1 = state_25632;var statearr_25638_25659 = state_25632__$1;(statearr_25638_25659[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25633 === (1)))
{var state_25632__$1 = state_25632;var statearr_25640_25660 = state_25632__$1;(statearr_25640_25660[(2)] = null);
(statearr_25640_25660[(1)] = (2));
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
var state_machine__5892__auto____0 = (function (){var statearr_25644 = [null,null,null,null,null,null,null,null];(statearr_25644[(0)] = state_machine__5892__auto__);
(statearr_25644[(1)] = (1));
return statearr_25644;
});
var state_machine__5892__auto____1 = (function (state_25632){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_25632);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e25645){if((e25645 instanceof Object))
{var ex__5895__auto__ = e25645;var statearr_25646_25661 = state_25632;(statearr_25646_25661[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25632);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25645;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25662 = state_25632;
state_25632 = G__25662;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_25632){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_25632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto__))
})();var state__5908__auto__ = (function (){var statearr_25647 = f__5907__auto__.call(null);(statearr_25647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto__);
return statearr_25647;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto__))
);
return c__5906__auto__;
});
antares.core.renderer = (function renderer(root){return cljs.core.add_watch.call(null,antares.core.app_state,new cljs.core.Keyword(null,"renderer","renderer",336841071),(function (key,reference,old_value,new_value){var root_node = document.querySelector("#antares");var new_dom = antares.core.render_html.call(null,root,new_value);var seq__25671_25679 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__25672_25680 = null;var count__25673_25681 = (0);var i__25674_25682 = (0);while(true){
if((i__25674_25682 < count__25673_25681))
{var component_25683 = cljs.core._nth.call(null,chunk__25672_25680,i__25674_25682);antares.core.component_will_update.call(null,component_25683);
{
var G__25684 = seq__25671_25679;
var G__25685 = chunk__25672_25680;
var G__25686 = count__25673_25681;
var G__25687 = (i__25674_25682 + (1));
seq__25671_25679 = G__25684;
chunk__25672_25680 = G__25685;
count__25673_25681 = G__25686;
i__25674_25682 = G__25687;
continue;
}
} else
{var temp__4126__auto___25688 = cljs.core.seq.call(null,seq__25671_25679);if(temp__4126__auto___25688)
{var seq__25671_25689__$1 = temp__4126__auto___25688;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25671_25689__$1))
{var c__4309__auto___25690 = cljs.core.chunk_first.call(null,seq__25671_25689__$1);{
var G__25691 = cljs.core.chunk_rest.call(null,seq__25671_25689__$1);
var G__25692 = c__4309__auto___25690;
var G__25693 = cljs.core.count.call(null,c__4309__auto___25690);
var G__25694 = (0);
seq__25671_25679 = G__25691;
chunk__25672_25680 = G__25692;
count__25673_25681 = G__25693;
i__25674_25682 = G__25694;
continue;
}
} else
{var component_25695 = cljs.core.first.call(null,seq__25671_25689__$1);antares.core.component_will_update.call(null,component_25695);
{
var G__25696 = cljs.core.next.call(null,seq__25671_25689__$1);
var G__25697 = null;
var G__25698 = (0);
var G__25699 = (0);
seq__25671_25679 = G__25696;
chunk__25672_25680 = G__25697;
count__25673_25681 = G__25698;
i__25674_25682 = G__25699;
continue;
}
}
} else
{}
}
break;
}
root_node.innerHTML = new_dom;
var seq__25675 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__25676 = null;var count__25677 = (0);var i__25678 = (0);while(true){
if((i__25678 < count__25677))
{var component = cljs.core._nth.call(null,chunk__25676,i__25678);antares.core.component_did_update.call(null,component);
{
var G__25700 = seq__25675;
var G__25701 = chunk__25676;
var G__25702 = count__25677;
var G__25703 = (i__25678 + (1));
seq__25675 = G__25700;
chunk__25676 = G__25701;
count__25677 = G__25702;
i__25678 = G__25703;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__25675);if(temp__4126__auto__)
{var seq__25675__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25675__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__25675__$1);{
var G__25704 = cljs.core.chunk_rest.call(null,seq__25675__$1);
var G__25705 = c__4309__auto__;
var G__25706 = cljs.core.count.call(null,c__4309__auto__);
var G__25707 = (0);
seq__25675 = G__25704;
chunk__25676 = G__25705;
count__25677 = G__25706;
i__25678 = G__25707;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__25675__$1);antares.core.component_did_update.call(null,component);
{
var G__25708 = cljs.core.next.call(null,seq__25675__$1);
var G__25709 = null;
var G__25710 = (0);
var G__25711 = (0);
seq__25675 = G__25708;
chunk__25676 = G__25709;
count__25677 = G__25710;
i__25678 = G__25711;
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