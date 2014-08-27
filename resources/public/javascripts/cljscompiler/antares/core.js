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
antares.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
antares.core.registered_components = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
antares.core.mounted_components = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
antares.core.cursor__GT_value = (function cursor__GT_value(cursor,new_value){return cljs.core.swap_BANG_.call(null,antares.core.app_state,(function (state){return cljs.core.update_in.call(null,state,cursor,(function (old_value){return new_value;
}));
}));
});
antares.core.cursor__GT_fn = (function cursor__GT_fn(cursor,update_fn){return cljs.core.swap_BANG_.call(null,antares.core.app_state,(function (state){return cljs.core.update_in.call(null,state,cursor,update_fn);
}));
});
antares.core.LifeCycle = (function (){var obj12741 = {};return obj12741;
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
antares.core.Registerable = (function (){var obj12743 = {};return obj12743;
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
antares.core.Renderable = (function (){var obj12745 = {};return obj12745;
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
antares.core.Mountable = (function (){var obj12747 = {};return obj12747;
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
* @param {*} subcomponents
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
antares.core.Component = (function (ident,render,style,subcomponents,__meta,__extmap){
this.ident = ident;
this.render = render;
this.style = style;
this.subcomponents = subcomponents;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>4){
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
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4141__auto__,k12749,else__4142__auto__){var self__ = this;
var this__4141__auto____$1 = this;var G__12751 = (((k12749 instanceof cljs.core.Keyword))?k12749.fqn:null);switch (G__12751) {
case "subcomponents":
return self__.subcomponents;

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
return cljs.core.get.call(null,self__.__extmap,k12749,else__4142__auto__);

}
});
antares.core.Component.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4153__auto__,writer__4154__auto__,opts__4155__auto__){var self__ = this;
var this__4153__auto____$1 = this;var pr_pair__4156__auto__ = ((function (this__4153__auto____$1){
return (function (keyval__4157__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4154__auto__,cljs.core.pr_writer,""," ","",opts__4155__auto__,keyval__4157__auto__);
});})(this__4153__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4154__auto__,pr_pair__4156__auto__,"#antares.core.Component{",", ","}",opts__4155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render","render",-1408033454),self__.render],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",-496642736),self__.style],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349),self__.subcomponents],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4137__auto__){var self__ = this;
var this__4137__auto____$1 = this;return self__.__meta;
});
antares.core.Component.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4133__auto__){var self__ = this;
var this__4133__auto____$1 = this;return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.subcomponents,self__.__meta,self__.__extmap,self__.__hash));
});
antares.core.Component.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4143__auto__){var self__ = this;
var this__4143__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
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
var self__$1 = this;return null;
});
antares.core.Component.prototype.antares$core$LifeCycle$component_did_update$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return null;
});
antares.core.Component.prototype.antares$core$LifeCycle$component_will_unmount$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return null;
});
antares.core.Component.prototype.antares$core$Mountable$ = true;
antares.core.Component.prototype.antares$core$Mountable$mount_component$arity$3 = (function (self,component_data,dom_cursor){var self__ = this;
var self__$1 = this;goog.dom.appendChild(document.querySelector(dom_cursor),goog.dom.htmlToDocumentFragment(antares.core.render_html.call(null,self__$1,component_data)));
var text_node_12756 = goog.dom.createTextNode(antares.core.render_css.call(null,self__$1));var style_node_12757 = goog.dom.createDom("style",text_node_12756);goog.dom.appendChild(document.querySelector("#antares-styles"),style_node_12757);
return cljs.core.swap_BANG_.call(null,antares.core.mounted_components,cljs.core.conj,self__$1);
});
antares.core.Component.prototype.antares$core$Mountable$unmount_component$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return null;
});
antares.core.Component.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4148__auto__,k__4149__auto__){var self__ = this;
var this__4148__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349),null,new cljs.core.Keyword(null,"style","style",-496642736),null,new cljs.core.Keyword(null,"render","render",-1408033454),null,new cljs.core.Keyword(null,"ident","ident",-742346),null], null), null),k__4149__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4148__auto____$1),self__.__meta),k__4149__auto__);
} else
{return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.subcomponents,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4149__auto__)),null));
}
});
antares.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4146__auto__,k__4147__auto__,G__12748){var self__ = this;
var this__4146__auto____$1 = this;var pred__12752 = cljs.core.keyword_identical_QMARK_;var expr__12753 = k__4147__auto__;if(cljs.core.truth_(pred__12752.call(null,new cljs.core.Keyword(null,"ident","ident",-742346),expr__12753)))
{return (new antares.core.Component(G__12748,self__.render,self__.style,self__.subcomponents,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12752.call(null,new cljs.core.Keyword(null,"render","render",-1408033454),expr__12753)))
{return (new antares.core.Component(self__.ident,G__12748,self__.style,self__.subcomponents,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12752.call(null,new cljs.core.Keyword(null,"style","style",-496642736),expr__12753)))
{return (new antares.core.Component(self__.ident,self__.render,G__12748,self__.subcomponents,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12752.call(null,new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349),expr__12753)))
{return (new antares.core.Component(self__.ident,self__.render,self__.style,G__12748,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.subcomponents,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4147__auto__,G__12748),null));
}
}
}
}
});
antares.core.Component.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4151__auto__){var self__ = this;
var this__4151__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render","render",-1408033454),self__.render],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",-496642736),self__.style],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349),self__.subcomponents],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4138__auto__,G__12748){var self__ = this;
var this__4138__auto____$1 = this;return (new antares.core.Component(self__.ident,self__.render,self__.style,self__.subcomponents,G__12748,self__.__extmap,self__.__hash));
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
antares.core.__GT_Component = (function __GT_Component(ident,render,style,subcomponents){return (new antares.core.Component(ident,render,style,subcomponents));
});
antares.core.map__GT_Component = (function map__GT_Component(G__12750){return (new antares.core.Component(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(G__12750),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(G__12750),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(G__12750),new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349).cljs$core$IFn$_invoke$arity$1(G__12750),null,cljs.core.dissoc.call(null,G__12750,new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349))));
});
antares.core.component = (function component(source_map){var component__$1 = antares.core.map__GT_Component.call(null,source_map);antares.core.register_component.call(null,component__$1);
return component__$1;
});
antares.core.bind = (function bind(component,app_cursor,dom_cursor){var component_data = antares.core.initialize_state.call(null,component,app_cursor);antares.core.component_will_mount.call(null,component);
antares.core.mount_component.call(null,component,component_data,dom_cursor);
var seq__12762_12766 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349).cljs$core$IFn$_invoke$arity$1(component));var chunk__12763_12767 = null;var count__12764_12768 = (0);var i__12765_12769 = (0);while(true){
if((i__12765_12769 < count__12764_12768))
{var component_12770__$1 = cljs.core._nth.call(null,chunk__12763_12767,i__12765_12769);antares.core.component_did_mount.call(null,component_12770__$1,app_cursor,dom_cursor);
{
var G__12771 = seq__12762_12766;
var G__12772 = chunk__12763_12767;
var G__12773 = count__12764_12768;
var G__12774 = (i__12765_12769 + (1));
seq__12762_12766 = G__12771;
chunk__12763_12767 = G__12772;
count__12764_12768 = G__12773;
i__12765_12769 = G__12774;
continue;
}
} else
{var temp__4126__auto___12775 = cljs.core.seq.call(null,seq__12762_12766);if(temp__4126__auto___12775)
{var seq__12762_12776__$1 = temp__4126__auto___12775;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12762_12776__$1))
{var c__4309__auto___12777 = cljs.core.chunk_first.call(null,seq__12762_12776__$1);{
var G__12778 = cljs.core.chunk_rest.call(null,seq__12762_12776__$1);
var G__12779 = c__4309__auto___12777;
var G__12780 = cljs.core.count.call(null,c__4309__auto___12777);
var G__12781 = (0);
seq__12762_12766 = G__12778;
chunk__12763_12767 = G__12779;
count__12764_12768 = G__12780;
i__12765_12769 = G__12781;
continue;
}
} else
{var component_12782__$1 = cljs.core.first.call(null,seq__12762_12776__$1);antares.core.component_did_mount.call(null,component_12782__$1,app_cursor,dom_cursor);
{
var G__12783 = cljs.core.next.call(null,seq__12762_12776__$1);
var G__12784 = null;
var G__12785 = (0);
var G__12786 = (0);
seq__12762_12766 = G__12783;
chunk__12763_12767 = G__12784;
count__12764_12768 = G__12785;
i__12765_12769 = G__12786;
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
antares.core.event_list = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["click","keydown"], null);
antares.core.event_stream = cljs.core.async.chan.call(null);
antares.core.control_stream = cljs.core.async.chan.call(null);
var root_node_12791 = document.querySelector("body");var seq__12787_12792 = cljs.core.seq.call(null,antares.core.event_list);var chunk__12788_12793 = null;var count__12789_12794 = (0);var i__12790_12795 = (0);while(true){
if((i__12790_12795 < count__12789_12794))
{var event_name_12796 = cljs.core._nth.call(null,chunk__12788_12793,i__12790_12795);goog.events.listen(root_node_12791,event_name_12796,((function (seq__12787_12792,chunk__12788_12793,count__12789_12794,i__12790_12795,event_name_12796,root_node_12791){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__12787_12792,chunk__12788_12793,count__12789_12794,i__12790_12795,event_name_12796,root_node_12791))
);
{
var G__12797 = seq__12787_12792;
var G__12798 = chunk__12788_12793;
var G__12799 = count__12789_12794;
var G__12800 = (i__12790_12795 + (1));
seq__12787_12792 = G__12797;
chunk__12788_12793 = G__12798;
count__12789_12794 = G__12799;
i__12790_12795 = G__12800;
continue;
}
} else
{var temp__4126__auto___12801 = cljs.core.seq.call(null,seq__12787_12792);if(temp__4126__auto___12801)
{var seq__12787_12802__$1 = temp__4126__auto___12801;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12787_12802__$1))
{var c__4309__auto___12803 = cljs.core.chunk_first.call(null,seq__12787_12802__$1);{
var G__12804 = cljs.core.chunk_rest.call(null,seq__12787_12802__$1);
var G__12805 = c__4309__auto___12803;
var G__12806 = cljs.core.count.call(null,c__4309__auto___12803);
var G__12807 = (0);
seq__12787_12792 = G__12804;
chunk__12788_12793 = G__12805;
count__12789_12794 = G__12806;
i__12790_12795 = G__12807;
continue;
}
} else
{var event_name_12808 = cljs.core.first.call(null,seq__12787_12802__$1);goog.events.listen(root_node_12791,event_name_12808,((function (seq__12787_12792,chunk__12788_12793,count__12789_12794,i__12790_12795,event_name_12808,seq__12787_12802__$1,temp__4126__auto___12801,root_node_12791){
return (function (event){return cljs.core.async.put_BANG_.call(null,antares.core.event_stream,event);
});})(seq__12787_12792,chunk__12788_12793,count__12789_12794,i__12790_12795,event_name_12808,seq__12787_12802__$1,temp__4126__auto___12801,root_node_12791))
);
{
var G__12809 = cljs.core.next.call(null,seq__12787_12802__$1);
var G__12810 = null;
var G__12811 = (0);
var G__12812 = (0);
seq__12787_12792 = G__12809;
chunk__12788_12793 = G__12810;
count__12789_12794 = G__12811;
i__12790_12795 = G__12812;
continue;
}
}
} else
{}
}
break;
}
antares.core.event_loop = (function event_loop(event_mappings,controller){var c__5906__auto___12929 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto___12929){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto___12929){
return (function (state_12885){var state_val_12886 = (state_12885[(1)]);if((state_val_12886 === (8)))
{var inst_12874 = (state_12885[(2)]);var inst_12875 = event_mappings.call(null,inst_12874);var state_12885__$1 = state_12885;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12885__$1,(7),antares.core.control_stream,inst_12875);
} else
{if((state_val_12886 === (7)))
{var inst_12877 = (state_12885[(2)]);var state_12885__$1 = (function (){var statearr_12887 = state_12885;(statearr_12887[(7)] = inst_12877);
return statearr_12887;
})();var statearr_12888_12930 = state_12885__$1;(statearr_12888_12930[(2)] = null);
(statearr_12888_12930[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12886 === (6)))
{var inst_12881 = (state_12885[(2)]);var state_12885__$1 = state_12885;var statearr_12889_12931 = state_12885__$1;(statearr_12889_12931[(2)] = inst_12881);
(statearr_12889_12931[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12886 === (5)))
{var state_12885__$1 = state_12885;var statearr_12890_12932 = state_12885__$1;(statearr_12890_12932[(2)] = null);
(statearr_12890_12932[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12886 === (4)))
{var state_12885__$1 = state_12885;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12885__$1,(8),antares.core.event_stream);
} else
{if((state_val_12886 === (3)))
{var inst_12883 = (state_12885[(2)]);var state_12885__$1 = state_12885;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12885__$1,inst_12883);
} else
{if((state_val_12886 === (2)))
{var state_12885__$1 = state_12885;var statearr_12891_12933 = state_12885__$1;(statearr_12891_12933[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12886 === (1)))
{var state_12885__$1 = state_12885;var statearr_12893_12934 = state_12885__$1;(statearr_12893_12934[(2)] = null);
(statearr_12893_12934[(1)] = (2));
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
});})(c__5906__auto___12929))
;return ((function (switch__5891__auto__,c__5906__auto___12929){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_12897 = [null,null,null,null,null,null,null,null];(statearr_12897[(0)] = state_machine__5892__auto__);
(statearr_12897[(1)] = (1));
return statearr_12897;
});
var state_machine__5892__auto____1 = (function (state_12885){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_12885);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e12898){if((e12898 instanceof Object))
{var ex__5895__auto__ = e12898;var statearr_12899_12935 = state_12885;(statearr_12899_12935[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12885);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12898;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12936 = state_12885;
state_12885 = G__12936;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_12885){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_12885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto___12929))
})();var state__5908__auto__ = (function (){var statearr_12900 = f__5907__auto__.call(null);(statearr_12900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto___12929);
return statearr_12900;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto___12929))
);
var c__5906__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto__){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto__){
return (function (state_12913){var state_val_12914 = (state_12913[(1)]);if((state_val_12914 === (7)))
{var inst_12904 = (state_12913[(2)]);var inst_12905 = controller.call(null,inst_12904);var state_12913__$1 = (function (){var statearr_12915 = state_12913;(statearr_12915[(7)] = inst_12905);
return statearr_12915;
})();var statearr_12916_12937 = state_12913__$1;(statearr_12916_12937[(2)] = null);
(statearr_12916_12937[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12914 === (6)))
{var inst_12909 = (state_12913[(2)]);var state_12913__$1 = state_12913;var statearr_12917_12938 = state_12913__$1;(statearr_12917_12938[(2)] = inst_12909);
(statearr_12917_12938[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12914 === (5)))
{var state_12913__$1 = state_12913;var statearr_12918_12939 = state_12913__$1;(statearr_12918_12939[(2)] = null);
(statearr_12918_12939[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12914 === (4)))
{var state_12913__$1 = state_12913;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12913__$1,(7),antares.core.control_stream);
} else
{if((state_val_12914 === (3)))
{var inst_12911 = (state_12913[(2)]);var state_12913__$1 = state_12913;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12913__$1,inst_12911);
} else
{if((state_val_12914 === (2)))
{var state_12913__$1 = state_12913;var statearr_12919_12940 = state_12913__$1;(statearr_12919_12940[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12914 === (1)))
{var state_12913__$1 = state_12913;var statearr_12921_12941 = state_12913__$1;(statearr_12921_12941[(2)] = null);
(statearr_12921_12941[(1)] = (2));
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
var state_machine__5892__auto____0 = (function (){var statearr_12925 = [null,null,null,null,null,null,null,null];(statearr_12925[(0)] = state_machine__5892__auto__);
(statearr_12925[(1)] = (1));
return statearr_12925;
});
var state_machine__5892__auto____1 = (function (state_12913){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_12913);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e12926){if((e12926 instanceof Object))
{var ex__5895__auto__ = e12926;var statearr_12927_12942 = state_12913;(statearr_12927_12942[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12913);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12926;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12943 = state_12913;
state_12913 = G__12943;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_12913){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_12913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto__))
})();var state__5908__auto__ = (function (){var statearr_12928 = f__5907__auto__.call(null);(statearr_12928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto__);
return statearr_12928;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto__))
);
return c__5906__auto__;
});
antares.core.renderer = (function renderer(root){return cljs.core.add_watch.call(null,antares.core.app_state,new cljs.core.Keyword(null,"renderer","renderer",336841071),(function (key,reference,old_value,new_value){var root_node = document.querySelector("#antares");var new_dom = antares.core.render_html.call(null,root,new_value);return root_node.innerHTML = new_dom;
}));
});

//# sourceMappingURL=core.js.map