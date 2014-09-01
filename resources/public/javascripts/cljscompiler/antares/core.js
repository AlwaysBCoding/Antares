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
antares.core.LifeCycle = (function (){var obj24170 = {};return obj24170;
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
antares.core.Registerable = (function (){var obj24172 = {};return obj24172;
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
antares.core.Renderable = (function (){var obj24174 = {};return obj24174;
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
antares.core.Mountable = (function (){var obj24176 = {};return obj24176;
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
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4141__auto__,k24178,else__4142__auto__){var self__ = this;
var this__4141__auto____$1 = this;var G__24180 = (((k24178 instanceof cljs.core.Keyword))?k24178.fqn:null);switch (G__24180) {
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
return cljs.core.get.call(null,self__.__extmap,k24178,else__4142__auto__);

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
antares.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4146__auto__,k__4147__auto__,G__24177){var self__ = this;
var this__4146__auto____$1 = this;var pred__24181 = cljs.core.keyword_identical_QMARK_;var expr__24182 = k__4147__auto__;if(cljs.core.truth_(pred__24181.call(null,new cljs.core.Keyword(null,"ident","ident",-742346),expr__24182)))
{return (new antares.core.Component(G__24177,self__.render,self__.style,self__.event_mappings,self__.controls,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__24181.call(null,new cljs.core.Keyword(null,"render","render",-1408033454),expr__24182)))
{return (new antares.core.Component(self__.ident,G__24177,self__.style,self__.event_mappings,self__.controls,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__24181.call(null,new cljs.core.Keyword(null,"style","style",-496642736),expr__24182)))
{return (new antares.core.Component(self__.ident,self__.render,G__24177,self__.event_mappings,self__.controls,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__24181.call(null,new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885),expr__24182)))
{return (new antares.core.Component(self__.ident,self__.render,self__.style,G__24177,self__.controls,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__24181.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452),expr__24182)))
{return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.event_mappings,G__24177,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.event_mappings,self__.controls,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4147__auto__,G__24177),null));
}
}
}
}
}
});
antares.core.Component.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4151__auto__){var self__ = this;
var this__4151__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render","render",-1408033454),self__.render],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",-496642736),self__.style],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885),self__.event_mappings],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4138__auto__,G__24177){var self__ = this;
var this__4138__auto____$1 = this;return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.event_mappings,self__.controls,G__24177,self__.__extmap,self__.__hash));
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
antares.core.map__GT_Component = (function map__GT_Component(G__24179){return (new antares.core.Component(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(G__24179),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(G__24179),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(G__24179),new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885).cljs$core$IFn$_invoke$arity$1(G__24179),new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(G__24179),null,cljs.core.dissoc.call(null,G__24179,new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"event-mappings","event-mappings",2117797885),new cljs.core.Keyword(null,"controls","controls",1340701452))));
});
antares.core.component = (function component(source_map){var component__$1 = antares.core.map__GT_Component.call(null,source_map);antares.core.register_component.call(null,component__$1);
return component__$1;
});
antares.core.bind = (function bind(component,app_cursor,dom_cursor){var component_data = antares.core.initialize_state.call(null,component,app_cursor);antares.core.component_will_mount.call(null,component);
antares.core.mount_component.call(null,component,component_data,dom_cursor);
var seq__24189_24193 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__24190_24194 = null;var count__24191_24195 = (0);var i__24192_24196 = (0);while(true){
if((i__24192_24196 < count__24191_24195))
{var component_24197__$1 = cljs.core._nth.call(null,chunk__24190_24194,i__24192_24196);antares.core.component_did_update.call(null,component_24197__$1);
{
var G__24198 = seq__24189_24193;
var G__24199 = chunk__24190_24194;
var G__24200 = count__24191_24195;
var G__24201 = (i__24192_24196 + (1));
seq__24189_24193 = G__24198;
chunk__24190_24194 = G__24199;
count__24191_24195 = G__24200;
i__24192_24196 = G__24201;
continue;
}
} else
{var temp__4126__auto___24202 = cljs.core.seq.call(null,seq__24189_24193);if(temp__4126__auto___24202)
{var seq__24189_24203__$1 = temp__4126__auto___24202;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24189_24203__$1))
{var c__4309__auto___24204 = cljs.core.chunk_first.call(null,seq__24189_24203__$1);{
var G__24205 = cljs.core.chunk_rest.call(null,seq__24189_24203__$1);
var G__24206 = c__4309__auto___24204;
var G__24207 = cljs.core.count.call(null,c__4309__auto___24204);
var G__24208 = (0);
seq__24189_24193 = G__24205;
chunk__24190_24194 = G__24206;
count__24191_24195 = G__24207;
i__24192_24196 = G__24208;
continue;
}
} else
{var component_24209__$1 = cljs.core.first.call(null,seq__24189_24203__$1);antares.core.component_did_update.call(null,component_24209__$1);
{
var G__24210 = cljs.core.next.call(null,seq__24189_24203__$1);
var G__24211 = null;
var G__24212 = (0);
var G__24213 = (0);
seq__24189_24193 = G__24210;
chunk__24190_24194 = G__24211;
count__24191_24195 = G__24212;
i__24192_24196 = G__24213;
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
var root_node_24218 = document.querySelector("body");var seq__24214_24219 = cljs.core.seq.call(null,antares.core.event_list);var chunk__24215_24220 = null;var count__24216_24221 = (0);var i__24217_24222 = (0);while(true){
if((i__24217_24222 < count__24216_24221))
{var event_name_24223 = cljs.core._nth.call(null,chunk__24215_24220,i__24217_24222);goog.events.listen(root_node_24218,event_name_24223,((function (seq__24214_24219,chunk__24215_24220,count__24216_24221,i__24217_24222,event_name_24223,root_node_24218){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__24214_24219,chunk__24215_24220,count__24216_24221,i__24217_24222,event_name_24223,root_node_24218))
);
{
var G__24224 = seq__24214_24219;
var G__24225 = chunk__24215_24220;
var G__24226 = count__24216_24221;
var G__24227 = (i__24217_24222 + (1));
seq__24214_24219 = G__24224;
chunk__24215_24220 = G__24225;
count__24216_24221 = G__24226;
i__24217_24222 = G__24227;
continue;
}
} else
{var temp__4126__auto___24228 = cljs.core.seq.call(null,seq__24214_24219);if(temp__4126__auto___24228)
{var seq__24214_24229__$1 = temp__4126__auto___24228;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24214_24229__$1))
{var c__4309__auto___24230 = cljs.core.chunk_first.call(null,seq__24214_24229__$1);{
var G__24231 = cljs.core.chunk_rest.call(null,seq__24214_24229__$1);
var G__24232 = c__4309__auto___24230;
var G__24233 = cljs.core.count.call(null,c__4309__auto___24230);
var G__24234 = (0);
seq__24214_24219 = G__24231;
chunk__24215_24220 = G__24232;
count__24216_24221 = G__24233;
i__24217_24222 = G__24234;
continue;
}
} else
{var event_name_24235 = cljs.core.first.call(null,seq__24214_24229__$1);goog.events.listen(root_node_24218,event_name_24235,((function (seq__24214_24219,chunk__24215_24220,count__24216_24221,i__24217_24222,event_name_24235,seq__24214_24229__$1,temp__4126__auto___24228,root_node_24218){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__24214_24219,chunk__24215_24220,count__24216_24221,i__24217_24222,event_name_24235,seq__24214_24229__$1,temp__4126__auto___24228,root_node_24218))
);
{
var G__24236 = cljs.core.next.call(null,seq__24214_24229__$1);
var G__24237 = null;
var G__24238 = (0);
var G__24239 = (0);
seq__24214_24219 = G__24236;
chunk__24215_24220 = G__24237;
count__24216_24221 = G__24238;
i__24217_24222 = G__24239;
continue;
}
}
} else
{}
}
break;
}
antares.core.dispatch_event_BANG_ = (function dispatch_event_BANG_(event,event_mappings){var seq__24244 = cljs.core.seq.call(null,event_mappings);var chunk__24245 = null;var count__24246 = (0);var i__24247 = (0);while(true){
if((i__24247 < count__24246))
{var event_mapping = cljs.core._nth.call(null,chunk__24245,i__24247);if(cljs.core.truth_(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(event_mapping).call(null,event)))
{cljs.core.async.put_BANG_.call(null,antares.core.control_stream,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(event_mapping).call(null,event));
} else
{}
{
var G__24248 = seq__24244;
var G__24249 = chunk__24245;
var G__24250 = count__24246;
var G__24251 = (i__24247 + (1));
seq__24244 = G__24248;
chunk__24245 = G__24249;
count__24246 = G__24250;
i__24247 = G__24251;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__24244);if(temp__4126__auto__)
{var seq__24244__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24244__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__24244__$1);{
var G__24252 = cljs.core.chunk_rest.call(null,seq__24244__$1);
var G__24253 = c__4309__auto__;
var G__24254 = cljs.core.count.call(null,c__4309__auto__);
var G__24255 = (0);
seq__24244 = G__24252;
chunk__24245 = G__24253;
count__24246 = G__24254;
i__24247 = G__24255;
continue;
}
} else
{var event_mapping = cljs.core.first.call(null,seq__24244__$1);if(cljs.core.truth_(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(event_mapping).call(null,event)))
{cljs.core.async.put_BANG_.call(null,antares.core.control_stream,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(event_mapping).call(null,event));
} else
{}
{
var G__24256 = cljs.core.next.call(null,seq__24244__$1);
var G__24257 = null;
var G__24258 = (0);
var G__24259 = (0);
seq__24244 = G__24256;
chunk__24245 = G__24257;
count__24246 = G__24258;
i__24247 = G__24259;
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
antares.core.controller_action_BANG_ = (function controller_action_BANG_(p__24261,controls){var vec__24267 = p__24261;var command = cljs.core.nth.call(null,vec__24267,(0),null);var data = cljs.core.nth.call(null,vec__24267,(1),null);var seq__24268 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (vec__24267,command,data){
return (function (p1__24260_SHARP_){return cljs.core._EQ_.call(null,command,new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(p1__24260_SHARP_));
});})(vec__24267,command,data))
,controls));var chunk__24269 = null;var count__24270 = (0);var i__24271 = (0);while(true){
if((i__24271 < count__24270))
{var control = cljs.core._nth.call(null,chunk__24269,i__24271);new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(control).call(null,data);
{
var G__24272 = seq__24268;
var G__24273 = chunk__24269;
var G__24274 = count__24270;
var G__24275 = (i__24271 + (1));
seq__24268 = G__24272;
chunk__24269 = G__24273;
count__24270 = G__24274;
i__24271 = G__24275;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__24268);if(temp__4126__auto__)
{var seq__24268__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24268__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__24268__$1);{
var G__24276 = cljs.core.chunk_rest.call(null,seq__24268__$1);
var G__24277 = c__4309__auto__;
var G__24278 = cljs.core.count.call(null,c__4309__auto__);
var G__24279 = (0);
seq__24268 = G__24276;
chunk__24269 = G__24277;
count__24270 = G__24278;
i__24271 = G__24279;
continue;
}
} else
{var control = cljs.core.first.call(null,seq__24268__$1);new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(control).call(null,data);
{
var G__24280 = cljs.core.next.call(null,seq__24268__$1);
var G__24281 = null;
var G__24282 = (0);
var G__24283 = (0);
seq__24268 = G__24280;
chunk__24269 = G__24281;
count__24270 = G__24282;
i__24271 = G__24283;
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
antares.core.event_loop = (function event_loop(event_mappings,controls){var c__5906__auto___24396 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto___24396){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto___24396){
return (function (state_24352){var state_val_24353 = (state_24352[(1)]);if((state_val_24353 === (7)))
{var inst_24343 = (state_24352[(2)]);var inst_24344 = antares.core.dispatch_event_BANG_.call(null,inst_24343,event_mappings);var state_24352__$1 = (function (){var statearr_24354 = state_24352;(statearr_24354[(7)] = inst_24344);
return statearr_24354;
})();var statearr_24355_24397 = state_24352__$1;(statearr_24355_24397[(2)] = null);
(statearr_24355_24397[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24353 === (6)))
{var inst_24348 = (state_24352[(2)]);var state_24352__$1 = state_24352;var statearr_24356_24398 = state_24352__$1;(statearr_24356_24398[(2)] = inst_24348);
(statearr_24356_24398[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24353 === (5)))
{var state_24352__$1 = state_24352;var statearr_24357_24399 = state_24352__$1;(statearr_24357_24399[(2)] = null);
(statearr_24357_24399[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24353 === (4)))
{var state_24352__$1 = state_24352;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24352__$1,(7),antares.core.event_stream);
} else
{if((state_val_24353 === (3)))
{var inst_24350 = (state_24352[(2)]);var state_24352__$1 = state_24352;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24352__$1,inst_24350);
} else
{if((state_val_24353 === (2)))
{var state_24352__$1 = state_24352;var statearr_24358_24400 = state_24352__$1;(statearr_24358_24400[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24353 === (1)))
{var state_24352__$1 = state_24352;var statearr_24360_24401 = state_24352__$1;(statearr_24360_24401[(2)] = null);
(statearr_24360_24401[(1)] = (2));
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
});})(c__5906__auto___24396))
;return ((function (switch__5891__auto__,c__5906__auto___24396){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_24364 = [null,null,null,null,null,null,null,null];(statearr_24364[(0)] = state_machine__5892__auto__);
(statearr_24364[(1)] = (1));
return statearr_24364;
});
var state_machine__5892__auto____1 = (function (state_24352){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_24352);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e24365){if((e24365 instanceof Object))
{var ex__5895__auto__ = e24365;var statearr_24366_24402 = state_24352;(statearr_24366_24402[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24352);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24365;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24403 = state_24352;
state_24352 = G__24403;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_24352){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_24352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto___24396))
})();var state__5908__auto__ = (function (){var statearr_24367 = f__5907__auto__.call(null);(statearr_24367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto___24396);
return statearr_24367;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto___24396))
);
var c__5906__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto__){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto__){
return (function (state_24380){var state_val_24381 = (state_24380[(1)]);if((state_val_24381 === (7)))
{var inst_24371 = (state_24380[(2)]);var inst_24372 = antares.core.controller_action_BANG_.call(null,inst_24371,controls);var state_24380__$1 = (function (){var statearr_24382 = state_24380;(statearr_24382[(7)] = inst_24372);
return statearr_24382;
})();var statearr_24383_24404 = state_24380__$1;(statearr_24383_24404[(2)] = null);
(statearr_24383_24404[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (6)))
{var inst_24376 = (state_24380[(2)]);var state_24380__$1 = state_24380;var statearr_24384_24405 = state_24380__$1;(statearr_24384_24405[(2)] = inst_24376);
(statearr_24384_24405[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (5)))
{var state_24380__$1 = state_24380;var statearr_24385_24406 = state_24380__$1;(statearr_24385_24406[(2)] = null);
(statearr_24385_24406[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (4)))
{var state_24380__$1 = state_24380;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24380__$1,(7),antares.core.control_stream);
} else
{if((state_val_24381 === (3)))
{var inst_24378 = (state_24380[(2)]);var state_24380__$1 = state_24380;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24380__$1,inst_24378);
} else
{if((state_val_24381 === (2)))
{var state_24380__$1 = state_24380;var statearr_24386_24407 = state_24380__$1;(statearr_24386_24407[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (1)))
{var state_24380__$1 = state_24380;var statearr_24388_24408 = state_24380__$1;(statearr_24388_24408[(2)] = null);
(statearr_24388_24408[(1)] = (2));
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
var state_machine__5892__auto____0 = (function (){var statearr_24392 = [null,null,null,null,null,null,null,null];(statearr_24392[(0)] = state_machine__5892__auto__);
(statearr_24392[(1)] = (1));
return statearr_24392;
});
var state_machine__5892__auto____1 = (function (state_24380){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_24380);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e24393){if((e24393 instanceof Object))
{var ex__5895__auto__ = e24393;var statearr_24394_24409 = state_24380;(statearr_24394_24409[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24380);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24393;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24410 = state_24380;
state_24380 = G__24410;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_24380){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_24380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto__))
})();var state__5908__auto__ = (function (){var statearr_24395 = f__5907__auto__.call(null);(statearr_24395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto__);
return statearr_24395;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto__))
);
return c__5906__auto__;
});
antares.core.renderer = (function renderer(root){return cljs.core.add_watch.call(null,antares.core.app_state,new cljs.core.Keyword(null,"renderer","renderer",336841071),(function (key,reference,old_value,new_value){var root_node = document.querySelector("#antares");var new_dom = antares.core.render_html.call(null,root,new_value);var seq__24419_24427 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__24420_24428 = null;var count__24421_24429 = (0);var i__24422_24430 = (0);while(true){
if((i__24422_24430 < count__24421_24429))
{var component_24431 = cljs.core._nth.call(null,chunk__24420_24428,i__24422_24430);antares.core.component_will_update.call(null,component_24431);
{
var G__24432 = seq__24419_24427;
var G__24433 = chunk__24420_24428;
var G__24434 = count__24421_24429;
var G__24435 = (i__24422_24430 + (1));
seq__24419_24427 = G__24432;
chunk__24420_24428 = G__24433;
count__24421_24429 = G__24434;
i__24422_24430 = G__24435;
continue;
}
} else
{var temp__4126__auto___24436 = cljs.core.seq.call(null,seq__24419_24427);if(temp__4126__auto___24436)
{var seq__24419_24437__$1 = temp__4126__auto___24436;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24419_24437__$1))
{var c__4309__auto___24438 = cljs.core.chunk_first.call(null,seq__24419_24437__$1);{
var G__24439 = cljs.core.chunk_rest.call(null,seq__24419_24437__$1);
var G__24440 = c__4309__auto___24438;
var G__24441 = cljs.core.count.call(null,c__4309__auto___24438);
var G__24442 = (0);
seq__24419_24427 = G__24439;
chunk__24420_24428 = G__24440;
count__24421_24429 = G__24441;
i__24422_24430 = G__24442;
continue;
}
} else
{var component_24443 = cljs.core.first.call(null,seq__24419_24437__$1);antares.core.component_will_update.call(null,component_24443);
{
var G__24444 = cljs.core.next.call(null,seq__24419_24437__$1);
var G__24445 = null;
var G__24446 = (0);
var G__24447 = (0);
seq__24419_24427 = G__24444;
chunk__24420_24428 = G__24445;
count__24421_24429 = G__24446;
i__24422_24430 = G__24447;
continue;
}
}
} else
{}
}
break;
}
root_node.innerHTML = new_dom;
var seq__24423 = cljs.core.seq.call(null,cljs.core.deref.call(null,antares.core.registered_components));var chunk__24424 = null;var count__24425 = (0);var i__24426 = (0);while(true){
if((i__24426 < count__24425))
{var component = cljs.core._nth.call(null,chunk__24424,i__24426);antares.core.component_did_update.call(null,component);
{
var G__24448 = seq__24423;
var G__24449 = chunk__24424;
var G__24450 = count__24425;
var G__24451 = (i__24426 + (1));
seq__24423 = G__24448;
chunk__24424 = G__24449;
count__24425 = G__24450;
i__24426 = G__24451;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__24423);if(temp__4126__auto__)
{var seq__24423__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24423__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__24423__$1);{
var G__24452 = cljs.core.chunk_rest.call(null,seq__24423__$1);
var G__24453 = c__4309__auto__;
var G__24454 = cljs.core.count.call(null,c__4309__auto__);
var G__24455 = (0);
seq__24423 = G__24452;
chunk__24424 = G__24453;
count__24425 = G__24454;
i__24426 = G__24455;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__24423__$1);antares.core.component_did_update.call(null,component);
{
var G__24456 = cljs.core.next.call(null,seq__24423__$1);
var G__24457 = null;
var G__24458 = (0);
var G__24459 = (0);
seq__24423 = G__24456;
chunk__24424 = G__24457;
count__24425 = G__24458;
i__24426 = G__24459;
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