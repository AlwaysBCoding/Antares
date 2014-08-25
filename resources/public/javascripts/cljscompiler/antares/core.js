// Compiled by ClojureScript 0.0-2311
goog.provide('antares.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('ajax.core');
goog.require('garden.core');
goog.require('hiccups.runtime');
goog.require('antares.repl');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('clojure.string');
goog.require('goog.dom.classes');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('antares.repl');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('hiccups.runtime');
goog.require('garden.core');
antares.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
antares.core.registered_components = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
antares.core.registered_data_watchers = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
antares.core.read_string = (function read_string(data_string){return cljs.reader.read_string.call(null,data_string);
});
antares.core.keyword__GT_data_structure = (function keyword__GT_data_structure(keyword){if(cljs.core._EQ_.call(null,keyword,new cljs.core.Keyword(null,"string","string",-1989541586)))
{return "";
} else
{if(cljs.core._EQ_.call(null,keyword,new cljs.core.Keyword(null,"map","map",1371690461)))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core._EQ_.call(null,keyword,new cljs.core.Keyword(null,"vector","vector",1902966158)))
{return cljs.core.PersistentVector.EMPTY;
} else
{if(cljs.core._EQ_.call(null,keyword,new cljs.core.Keyword(null,"matrix","matrix",803137200)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else
{if(cljs.core._EQ_.call(null,keyword,new cljs.core.Keyword(null,"number","number",1570378438)))
{return (0);
} else
{return null;
}
}
}
}
}
});
antares.core.cursor__GT_fn = (function cursor__GT_fn(cursor,update_fn){return cljs.core.swap_BANG_.call(null,antares.core.app_state,(function (state){return cljs.core.update_in.call(null,state,cursor,update_fn);
}));
});
antares.core.cursor__GT_value = (function cursor__GT_value(cursor,new_value){return cljs.core.swap_BANG_.call(null,antares.core.app_state,(function (app_value){return cljs.core.update_in.call(null,app_value,cursor,(function (old_value){return new_value;
}));
}));
});
antares.core.app_state__GT_value = (function app_state__GT_value(value){return cljs.core.reset_BANG_.call(null,antares.core.app_state,value);
});
antares.core.compile_css_BANG_ = (function compile_css_BANG_(css_data){return garden.core.css.call(null,css_data);
});
antares.core.compile_html_BANG_ = (function compile_html_BANG_(html_data){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,html_data)));
});
antares.core.Queryable = (function (){var obj11290 = {};return obj11290;
})();
antares.core.get_attr = (function get_attr(self,attr){if((function (){var and__3541__auto__ = self;if(and__3541__auto__)
{return self.antares$core$Queryable$get_attr$arity$2;
} else
{return and__3541__auto__;
}
})())
{return self.antares$core$Queryable$get_attr$arity$2(self,attr);
} else
{var x__4180__auto__ = (((self == null))?null:self);return (function (){var or__3553__auto__ = (antares.core.get_attr[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (antares.core.get_attr["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Queryable.get-attr",self);
}
}
})().call(null,self,attr);
}
});
antares.core.Renderable = (function (){var obj11292 = {};return obj11292;
})();
antares.core.render = (function render(self,data){if((function (){var and__3541__auto__ = self;if(and__3541__auto__)
{return self.antares$core$Renderable$render$arity$2;
} else
{return and__3541__auto__;
}
})())
{return self.antares$core$Renderable$render$arity$2(self,data);
} else
{var x__4180__auto__ = (((self == null))?null:self);return (function (){var or__3553__auto__ = (antares.core.render[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (antares.core.render["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Renderable.render",self);
}
}
})().call(null,self,data);
}
});
antares.core.render_to_dom = (function render_to_dom(self,data,dom_cursor){if((function (){var and__3541__auto__ = self;if(and__3541__auto__)
{return self.antares$core$Renderable$render_to_dom$arity$3;
} else
{return and__3541__auto__;
}
})())
{return self.antares$core$Renderable$render_to_dom$arity$3(self,data,dom_cursor);
} else
{var x__4180__auto__ = (((self == null))?null:self);return (function (){var or__3553__auto__ = (antares.core.render_to_dom[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (antares.core.render_to_dom["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Renderable.render-to-dom",self);
}
}
})().call(null,self,data,dom_cursor);
}
});
antares.core.Bindable = (function (){var obj11294 = {};return obj11294;
})();
antares.core.register_app_cursor = (function register_app_cursor(self){if((function (){var and__3541__auto__ = self;if(and__3541__auto__)
{return self.antares$core$Bindable$register_app_cursor$arity$1;
} else
{return and__3541__auto__;
}
})())
{return self.antares$core$Bindable$register_app_cursor$arity$1(self);
} else
{var x__4180__auto__ = (((self == null))?null:self);return (function (){var or__3553__auto__ = (antares.core.register_app_cursor[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (antares.core.register_app_cursor["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Bindable.register-app-cursor",self);
}
}
})().call(null,self);
}
});
antares.core.register_render_watcher = (function register_render_watcher(self){if((function (){var and__3541__auto__ = self;if(and__3541__auto__)
{return self.antares$core$Bindable$register_render_watcher$arity$1;
} else
{return and__3541__auto__;
}
})())
{return self.antares$core$Bindable$register_render_watcher$arity$1(self);
} else
{var x__4180__auto__ = (((self == null))?null:self);return (function (){var or__3553__auto__ = (antares.core.register_render_watcher[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (antares.core.register_render_watcher["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Bindable.register-render-watcher",self);
}
}
})().call(null,self);
}
});
antares.core.register_styles = (function register_styles(self){if((function (){var and__3541__auto__ = self;if(and__3541__auto__)
{return self.antares$core$Bindable$register_styles$arity$1;
} else
{return and__3541__auto__;
}
})())
{return self.antares$core$Bindable$register_styles$arity$1(self);
} else
{var x__4180__auto__ = (((self == null))?null:self);return (function (){var or__3553__auto__ = (antares.core.register_styles[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (antares.core.register_styles["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Bindable.register-styles",self);
}
}
})().call(null,self);
}
});
antares.core.initialize = (function initialize(self){if((function (){var and__3541__auto__ = self;if(and__3541__auto__)
{return self.antares$core$Bindable$initialize$arity$1;
} else
{return and__3541__auto__;
}
})())
{return self.antares$core$Bindable$initialize$arity$1(self);
} else
{var x__4180__auto__ = (((self == null))?null:self);return (function (){var or__3553__auto__ = (antares.core.initialize[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (antares.core.initialize["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Bindable.initialize",self);
}
}
})().call(null,self);
}
});
antares.core.post_render = (function post_render(self){if((function (){var and__3541__auto__ = self;if(and__3541__auto__)
{return self.antares$core$Bindable$post_render$arity$1;
} else
{return and__3541__auto__;
}
})())
{return self.antares$core$Bindable$post_render$arity$1(self);
} else
{var x__4180__auto__ = (((self == null))?null:self);return (function (){var or__3553__auto__ = (antares.core.post_render[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (antares.core.post_render["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Bindable.post-render",self);
}
}
})().call(null,self);
}
});
antares.core.Watchable = (function (){var obj11296 = {};return obj11296;
})();
antares.core.register_watcher = (function register_watcher(self){if((function (){var and__3541__auto__ = self;if(and__3541__auto__)
{return self.antares$core$Watchable$register_watcher$arity$1;
} else
{return and__3541__auto__;
}
})())
{return self.antares$core$Watchable$register_watcher$arity$1(self);
} else
{var x__4180__auto__ = (((self == null))?null:self);return (function (){var or__3553__auto__ = (antares.core.register_watcher[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (antares.core.register_watcher["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Watchable.register-watcher",self);
}
}
})().call(null,self);
}
});

/**
* @constructor
* @param {*} ident
* @param {*} data_type
* @param {*} subcomponents
* @param {*} style_data
* @param {*} render_data_fn
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
antares.core.Component = (function (ident,data_type,subcomponents,style_data,render_data_fn,__meta,__extmap){
this.ident = ident;
this.data_type = data_type;
this.subcomponents = subcomponents;
this.style_data = style_data;
this.render_data_fn = render_data_fn;
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
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4141__auto__,k11298,else__4142__auto__){var self__ = this;
var this__4141__auto____$1 = this;var G__11300 = (((k11298 instanceof cljs.core.Keyword))?k11298.fqn:null);switch (G__11300) {
case "render-data-fn":
return self__.render_data_fn;

break;
case "style-data":
return self__.style_data;

break;
case "subcomponents":
return self__.subcomponents;

break;
case "data-type":
return self__.data_type;

break;
case "ident":
return self__.ident;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11298,else__4142__auto__);

}
});
antares.core.Component.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4153__auto__,writer__4154__auto__,opts__4155__auto__){var self__ = this;
var this__4153__auto____$1 = this;var pr_pair__4156__auto__ = ((function (this__4153__auto____$1){
return (function (keyval__4157__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4154__auto__,cljs.core.pr_writer,""," ","",opts__4155__auto__,keyval__4157__auto__);
});})(this__4153__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4154__auto__,pr_pair__4156__auto__,"#antares.core.Component{",", ","}",opts__4155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data-type","data-type",-326421468),self__.data_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349),self__.subcomponents],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style-data","style-data",383253160),self__.style_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-data-fn","render-data-fn",-1862520485),self__.render_data_fn],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4137__auto__){var self__ = this;
var this__4137__auto____$1 = this;return self__.__meta;
});
antares.core.Component.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4133__auto__){var self__ = this;
var this__4133__auto____$1 = this;return (new antares.core.Component(self__.ident,self__.data_type,self__.subcomponents,self__.style_data,self__.render_data_fn,self__.__meta,self__.__extmap,self__.__hash));
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
antares.core.Component.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4148__auto__,k__4149__auto__){var self__ = this;
var this__4148__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349),null,new cljs.core.Keyword(null,"data-type","data-type",-326421468),null,new cljs.core.Keyword(null,"style-data","style-data",383253160),null,new cljs.core.Keyword(null,"ident","ident",-742346),null,new cljs.core.Keyword(null,"render-data-fn","render-data-fn",-1862520485),null], null), null),k__4149__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4148__auto____$1),self__.__meta),k__4149__auto__);
} else
{return (new antares.core.Component(self__.ident,self__.data_type,self__.subcomponents,self__.style_data,self__.render_data_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4149__auto__)),null));
}
});
antares.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4146__auto__,k__4147__auto__,G__11297){var self__ = this;
var this__4146__auto____$1 = this;var pred__11301 = cljs.core.keyword_identical_QMARK_;var expr__11302 = k__4147__auto__;if(cljs.core.truth_(pred__11301.call(null,new cljs.core.Keyword(null,"ident","ident",-742346),expr__11302)))
{return (new antares.core.Component(G__11297,self__.data_type,self__.subcomponents,self__.style_data,self__.render_data_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11301.call(null,new cljs.core.Keyword(null,"data-type","data-type",-326421468),expr__11302)))
{return (new antares.core.Component(self__.ident,G__11297,self__.subcomponents,self__.style_data,self__.render_data_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11301.call(null,new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349),expr__11302)))
{return (new antares.core.Component(self__.ident,self__.data_type,G__11297,self__.style_data,self__.render_data_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11301.call(null,new cljs.core.Keyword(null,"style-data","style-data",383253160),expr__11302)))
{return (new antares.core.Component(self__.ident,self__.data_type,self__.subcomponents,G__11297,self__.render_data_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11301.call(null,new cljs.core.Keyword(null,"render-data-fn","render-data-fn",-1862520485),expr__11302)))
{return (new antares.core.Component(self__.ident,self__.data_type,self__.subcomponents,self__.style_data,G__11297,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.Component(self__.ident,self__.data_type,self__.subcomponents,self__.style_data,self__.render_data_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4147__auto__,G__11297),null));
}
}
}
}
}
});
antares.core.Component.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4151__auto__){var self__ = this;
var this__4151__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data-type","data-type",-326421468),self__.data_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349),self__.subcomponents],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style-data","style-data",383253160),self__.style_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-data-fn","render-data-fn",-1862520485),self__.render_data_fn],null))], null),self__.__extmap));
});
antares.core.Component.prototype.antares$core$Queryable$ = true;
antares.core.Component.prototype.antares$core$Queryable$get_attr$arity$2 = (function (self,attr){var self__ = this;
var self__$1 = this;return attr.call(null,self__$1);
});
antares.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4138__auto__,G__11297){var self__ = this;
var this__4138__auto____$1 = this;return (new antares.core.Component(self__.ident,self__.data_type,self__.subcomponents,self__.style_data,self__.render_data_fn,G__11297,self__.__extmap,self__.__hash));
});
antares.core.Component.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4144__auto__,entry__4145__auto__){var self__ = this;
var this__4144__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4145__auto__))
{return cljs.core._assoc.call(null,this__4144__auto____$1,cljs.core._nth.call(null,entry__4145__auto__,(0)),cljs.core._nth.call(null,entry__4145__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4144__auto____$1,entry__4145__auto__);
}
});
antares.core.Component.prototype.antares$core$Renderable$ = true;
antares.core.Component.prototype.antares$core$Renderable$render$arity$2 = (function (self,data){var self__ = this;
var self__$1 = this;var temp__4124__auto__ = new cljs.core.Keyword(null,"render-data-fn","render-data-fn",-1862520485).cljs$core$IFn$_invoke$arity$1(self__$1);if(cljs.core.truth_(temp__4124__auto__))
{var render_data_fn__$1 = temp__4124__auto__;return render_data_fn__$1.call(null,data);
} else
{return null;
}
});
antares.core.Component.prototype.antares$core$Renderable$render_to_dom$arity$3 = (function (self,data,dom_cursor){var self__ = this;
var self__$1 = this;return document.querySelector(dom_cursor).innerHTML = antares.core.compile_html_BANG_.call(null,antares.core.render.call(null,self__$1,data));
});
antares.core.Component.cljs$lang$type = true;
antares.core.Component.cljs$lang$ctorPrSeq = (function (this__4173__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"antares.core/Component");
});
antares.core.Component.cljs$lang$ctorPrWriter = (function (this__4173__auto__,writer__4174__auto__){return cljs.core._write.call(null,writer__4174__auto__,"antares.core/Component");
});
antares.core.__GT_Component = (function __GT_Component(ident,data_type,subcomponents,style_data,render_data_fn){return (new antares.core.Component(ident,data_type,subcomponents,style_data,render_data_fn));
});
antares.core.map__GT_Component = (function map__GT_Component(G__11299){return (new antares.core.Component(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(G__11299),new cljs.core.Keyword(null,"data-type","data-type",-326421468).cljs$core$IFn$_invoke$arity$1(G__11299),new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349).cljs$core$IFn$_invoke$arity$1(G__11299),new cljs.core.Keyword(null,"style-data","style-data",383253160).cljs$core$IFn$_invoke$arity$1(G__11299),new cljs.core.Keyword(null,"render-data-fn","render-data-fn",-1862520485).cljs$core$IFn$_invoke$arity$1(G__11299),null,cljs.core.dissoc.call(null,G__11299,new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349),new cljs.core.Keyword(null,"style-data","style-data",383253160),new cljs.core.Keyword(null,"render-data-fn","render-data-fn",-1862520485))));
});
antares.core.component = (function component(source_map){var component__$1 = antares.core.map__GT_Component.call(null,source_map);return component__$1;
});

/**
* @constructor
* @param {*} ident
* @param {*} component
* @param {*} app_cursor
* @param {*} dom_cursor
* @param {*} post_render_fn
* @param {*} initialize
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
antares.core.ComponentBinding = (function (ident,component,app_cursor,dom_cursor,post_render_fn,initialize,__meta,__extmap){
this.ident = ident;
this.component = component;
this.app_cursor = app_cursor;
this.dom_cursor = dom_cursor;
this.post_render_fn = post_render_fn;
this.initialize = initialize;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>6){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
antares.core.ComponentBinding.prototype.antares$core$Bindable$ = true;
antares.core.ComponentBinding.prototype.antares$core$Bindable$initialize$arity$1 = (function (self){var self__ = this;
var self__$1 = this;var temp__4124__auto__ = new cljs.core.Keyword(null,"initialize-fn","initialize-fn",793125733).cljs$core$IFn$_invoke$arity$1(self__$1);if(cljs.core.truth_(temp__4124__auto__))
{var initialize_fn = temp__4124__auto__;return initialize_fn.call(null);
} else
{return null;
}
});
antares.core.ComponentBinding.prototype.antares$core$Bindable$post_render$arity$1 = (function (self){var self__ = this;
var self__$1 = this;var temp__4124__auto__ = new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496).cljs$core$IFn$_invoke$arity$1(self__$1);if(cljs.core.truth_(temp__4124__auto__))
{var post_render_fn__$1 = temp__4124__auto__;return post_render_fn__$1.call(null,self__$1);
} else
{return null;
}
});
antares.core.ComponentBinding.prototype.antares$core$Bindable$register_app_cursor$arity$1 = (function (self){var self__ = this;
var self__$1 = this;if((cljs.core.get_in.call(null,cljs.core.deref.call(null,antares.core.app_state),new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(self__$1)) == null))
{return antares.core.cursor__GT_value.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(self__$1),antares.core.keyword__GT_data_structure.call(null,antares.core.get_attr.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(self__$1),new cljs.core.Keyword(null,"data-type","data-type",-326421468))));
} else
{return null;
}
});
antares.core.ComponentBinding.prototype.antares$core$Bindable$register_render_watcher$arity$1 = (function (self){var self__ = this;
var self__$1 = this;cljs.core.add_watch.call(null,antares.core.app_state,new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(self__$1),((function (self__$1){
return (function (key,reference,old_state,new_state){if(cljs.core.not_EQ_.call(null,cljs.core.get_in.call(null,old_state,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(self__$1)),cljs.core.get_in.call(null,new_state,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(self__$1))))
{antares.core.render_to_dom.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(self__$1),cljs.core.get_in.call(null,new_state,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(self__$1)),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(self__$1));
return antares.core.post_render.call(null,self__$1);
} else
{return null;
}
});})(self__$1))
);
return cljs.core.swap_BANG_.call(null,antares.core.registered_components,cljs.core.conj,self__$1);
});
antares.core.ComponentBinding.prototype.antares$core$Bindable$register_styles$arity$1 = (function (self){var self__ = this;
var self__$1 = this;var head_node = document.querySelector("head");var style_node = goog.dom.createElement("style");var text_node = goog.dom.createTextNode(antares.core.compile_css_BANG_.call(null,antares.core.get_attr.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(self__$1),new cljs.core.Keyword(null,"style-data","style-data",383253160))));goog.dom.appendChild(style_node,text_node);
return goog.dom.appendChild(head_node,style_node);
});
antares.core.ComponentBinding.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4139__auto__,k__4140__auto__){var self__ = this;
var this__4139__auto____$1 = this;return cljs.core._lookup.call(null,this__4139__auto____$1,k__4140__auto__,null);
});
antares.core.ComponentBinding.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4141__auto__,k11306,else__4142__auto__){var self__ = this;
var this__4141__auto____$1 = this;var G__11308 = (((k11306 instanceof cljs.core.Keyword))?k11306.fqn:null);switch (G__11308) {
case "initialize":
return self__.initialize;

break;
case "post-render-fn":
return self__.post_render_fn;

break;
case "dom-cursor":
return self__.dom_cursor;

break;
case "app-cursor":
return self__.app_cursor;

break;
case "component":
return self__.component;

break;
case "ident":
return self__.ident;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11306,else__4142__auto__);

}
});
antares.core.ComponentBinding.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4153__auto__,writer__4154__auto__,opts__4155__auto__){var self__ = this;
var this__4153__auto____$1 = this;var pr_pair__4156__auto__ = ((function (this__4153__auto____$1){
return (function (keyval__4157__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4154__auto__,cljs.core.pr_writer,""," ","",opts__4155__auto__,keyval__4157__auto__);
});})(this__4153__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4154__auto__,pr_pair__4156__auto__,"#antares.core.ComponentBinding{",", ","}",opts__4155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component","component",1555936782),self__.component],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),self__.post_render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initialize","initialize",609952913),self__.initialize],null))], null),self__.__extmap));
});
antares.core.ComponentBinding.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4137__auto__){var self__ = this;
var this__4137__auto____$1 = this;return self__.__meta;
});
antares.core.ComponentBinding.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4133__auto__){var self__ = this;
var this__4133__auto____$1 = this;return (new antares.core.ComponentBinding(self__.ident,self__.component,self__.app_cursor,self__.dom_cursor,self__.post_render_fn,self__.initialize,self__.__meta,self__.__extmap,self__.__hash));
});
antares.core.ComponentBinding.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4143__auto__){var self__ = this;
var this__4143__auto____$1 = this;return (6 + cljs.core.count.call(null,self__.__extmap));
});
antares.core.ComponentBinding.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4134__auto__){var self__ = this;
var this__4134__auto____$1 = this;var h__3964__auto__ = self__.__hash;if(!((h__3964__auto__ == null)))
{return h__3964__auto__;
} else
{var h__3964__auto____$1 = cljs.core.hash_imap.call(null,this__4134__auto____$1);self__.__hash = h__3964__auto____$1;
return h__3964__auto____$1;
}
});
antares.core.ComponentBinding.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4135__auto__,other__4136__auto__){var self__ = this;
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
antares.core.ComponentBinding.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4148__auto__,k__4149__auto__){var self__ = this;
var this__4148__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),null,new cljs.core.Keyword(null,"component","component",1555936782),null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),null,new cljs.core.Keyword(null,"initialize","initialize",609952913),null,new cljs.core.Keyword(null,"ident","ident",-742346),null], null), null),k__4149__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4148__auto____$1),self__.__meta),k__4149__auto__);
} else
{return (new antares.core.ComponentBinding(self__.ident,self__.component,self__.app_cursor,self__.dom_cursor,self__.post_render_fn,self__.initialize,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4149__auto__)),null));
}
});
antares.core.ComponentBinding.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4146__auto__,k__4147__auto__,G__11305){var self__ = this;
var this__4146__auto____$1 = this;var pred__11309 = cljs.core.keyword_identical_QMARK_;var expr__11310 = k__4147__auto__;if(cljs.core.truth_(pred__11309.call(null,new cljs.core.Keyword(null,"ident","ident",-742346),expr__11310)))
{return (new antares.core.ComponentBinding(G__11305,self__.component,self__.app_cursor,self__.dom_cursor,self__.post_render_fn,self__.initialize,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11309.call(null,new cljs.core.Keyword(null,"component","component",1555936782),expr__11310)))
{return (new antares.core.ComponentBinding(self__.ident,G__11305,self__.app_cursor,self__.dom_cursor,self__.post_render_fn,self__.initialize,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11309.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),expr__11310)))
{return (new antares.core.ComponentBinding(self__.ident,self__.component,G__11305,self__.dom_cursor,self__.post_render_fn,self__.initialize,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11309.call(null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),expr__11310)))
{return (new antares.core.ComponentBinding(self__.ident,self__.component,self__.app_cursor,G__11305,self__.post_render_fn,self__.initialize,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11309.call(null,new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),expr__11310)))
{return (new antares.core.ComponentBinding(self__.ident,self__.component,self__.app_cursor,self__.dom_cursor,G__11305,self__.initialize,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11309.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),expr__11310)))
{return (new antares.core.ComponentBinding(self__.ident,self__.component,self__.app_cursor,self__.dom_cursor,self__.post_render_fn,G__11305,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.ComponentBinding(self__.ident,self__.component,self__.app_cursor,self__.dom_cursor,self__.post_render_fn,self__.initialize,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4147__auto__,G__11305),null));
}
}
}
}
}
}
});
antares.core.ComponentBinding.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4151__auto__){var self__ = this;
var this__4151__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component","component",1555936782),self__.component],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),self__.post_render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initialize","initialize",609952913),self__.initialize],null))], null),self__.__extmap));
});
antares.core.ComponentBinding.prototype.antares$core$Queryable$ = true;
antares.core.ComponentBinding.prototype.antares$core$Queryable$get_attr$arity$2 = (function (self,attr){var self__ = this;
var self__$1 = this;return attr.call(null,self__$1);
});
antares.core.ComponentBinding.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4138__auto__,G__11305){var self__ = this;
var this__4138__auto____$1 = this;return (new antares.core.ComponentBinding(self__.ident,self__.component,self__.app_cursor,self__.dom_cursor,self__.post_render_fn,self__.initialize,G__11305,self__.__extmap,self__.__hash));
});
antares.core.ComponentBinding.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4144__auto__,entry__4145__auto__){var self__ = this;
var this__4144__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4145__auto__))
{return cljs.core._assoc.call(null,this__4144__auto____$1,cljs.core._nth.call(null,entry__4145__auto__,(0)),cljs.core._nth.call(null,entry__4145__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4144__auto____$1,entry__4145__auto__);
}
});
antares.core.ComponentBinding.cljs$lang$type = true;
antares.core.ComponentBinding.cljs$lang$ctorPrSeq = (function (this__4173__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"antares.core/ComponentBinding");
});
antares.core.ComponentBinding.cljs$lang$ctorPrWriter = (function (this__4173__auto__,writer__4174__auto__){return cljs.core._write.call(null,writer__4174__auto__,"antares.core/ComponentBinding");
});
antares.core.__GT_ComponentBinding = (function __GT_ComponentBinding(ident,component,app_cursor,dom_cursor,post_render_fn,initialize){return (new antares.core.ComponentBinding(ident,component,app_cursor,dom_cursor,post_render_fn,initialize));
});
antares.core.map__GT_ComponentBinding = (function map__GT_ComponentBinding(G__11307){return (new antares.core.ComponentBinding(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(G__11307),new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(G__11307),new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(G__11307),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(G__11307),new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496).cljs$core$IFn$_invoke$arity$1(G__11307),new cljs.core.Keyword(null,"initialize","initialize",609952913).cljs$core$IFn$_invoke$arity$1(G__11307),null,cljs.core.dissoc.call(null,G__11307,new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),new cljs.core.Keyword(null,"initialize","initialize",609952913))));
});
antares.core.component_binding = (function component_binding(source_map){var component_binding__$1 = antares.core.map__GT_ComponentBinding.call(null,source_map);antares.core.register_app_cursor.call(null,component_binding__$1);
antares.core.register_render_watcher.call(null,component_binding__$1);
antares.core.register_styles.call(null,component_binding__$1);
antares.core.initialize.call(null,component_binding__$1);
return component_binding__$1;
});

/**
* @constructor
* @param {*} ident
* @param {*} app_cursor
* @param {*} watch_fn
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
antares.core.DataWatcher = (function (ident,app_cursor,watch_fn,__meta,__extmap){
this.ident = ident;
this.app_cursor = app_cursor;
this.watch_fn = watch_fn;
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
antares.core.DataWatcher.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4139__auto__,k__4140__auto__){var self__ = this;
var this__4139__auto____$1 = this;return cljs.core._lookup.call(null,this__4139__auto____$1,k__4140__auto__,null);
});
antares.core.DataWatcher.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4141__auto__,k11314,else__4142__auto__){var self__ = this;
var this__4141__auto____$1 = this;var G__11316 = (((k11314 instanceof cljs.core.Keyword))?k11314.fqn:null);switch (G__11316) {
case "watch-fn":
return self__.watch_fn;

break;
case "app-cursor":
return self__.app_cursor;

break;
case "ident":
return self__.ident;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11314,else__4142__auto__);

}
});
antares.core.DataWatcher.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4153__auto__,writer__4154__auto__,opts__4155__auto__){var self__ = this;
var this__4153__auto____$1 = this;var pr_pair__4156__auto__ = ((function (this__4153__auto____$1){
return (function (keyval__4157__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4154__auto__,cljs.core.pr_writer,""," ","",opts__4155__auto__,keyval__4157__auto__);
});})(this__4153__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4154__auto__,pr_pair__4156__auto__,"#antares.core.DataWatcher{",", ","}",opts__4155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"watch-fn","watch-fn",-1286682217),self__.watch_fn],null))], null),self__.__extmap));
});
antares.core.DataWatcher.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4137__auto__){var self__ = this;
var this__4137__auto____$1 = this;return self__.__meta;
});
antares.core.DataWatcher.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4133__auto__){var self__ = this;
var this__4133__auto____$1 = this;return (new antares.core.DataWatcher(self__.ident,self__.app_cursor,self__.watch_fn,self__.__meta,self__.__extmap,self__.__hash));
});
antares.core.DataWatcher.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4143__auto__){var self__ = this;
var this__4143__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
antares.core.DataWatcher.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4134__auto__){var self__ = this;
var this__4134__auto____$1 = this;var h__3964__auto__ = self__.__hash;if(!((h__3964__auto__ == null)))
{return h__3964__auto__;
} else
{var h__3964__auto____$1 = cljs.core.hash_imap.call(null,this__4134__auto____$1);self__.__hash = h__3964__auto____$1;
return h__3964__auto____$1;
}
});
antares.core.DataWatcher.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4135__auto__,other__4136__auto__){var self__ = this;
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
antares.core.DataWatcher.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4148__auto__,k__4149__auto__){var self__ = this;
var this__4148__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),null,new cljs.core.Keyword(null,"ident","ident",-742346),null,new cljs.core.Keyword(null,"watch-fn","watch-fn",-1286682217),null], null), null),k__4149__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4148__auto____$1),self__.__meta),k__4149__auto__);
} else
{return (new antares.core.DataWatcher(self__.ident,self__.app_cursor,self__.watch_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4149__auto__)),null));
}
});
antares.core.DataWatcher.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4146__auto__,k__4147__auto__,G__11313){var self__ = this;
var this__4146__auto____$1 = this;var pred__11317 = cljs.core.keyword_identical_QMARK_;var expr__11318 = k__4147__auto__;if(cljs.core.truth_(pred__11317.call(null,new cljs.core.Keyword(null,"ident","ident",-742346),expr__11318)))
{return (new antares.core.DataWatcher(G__11313,self__.app_cursor,self__.watch_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11317.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),expr__11318)))
{return (new antares.core.DataWatcher(self__.ident,G__11313,self__.watch_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11317.call(null,new cljs.core.Keyword(null,"watch-fn","watch-fn",-1286682217),expr__11318)))
{return (new antares.core.DataWatcher(self__.ident,self__.app_cursor,G__11313,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.DataWatcher(self__.ident,self__.app_cursor,self__.watch_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4147__auto__,G__11313),null));
}
}
}
});
antares.core.DataWatcher.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4151__auto__){var self__ = this;
var this__4151__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"watch-fn","watch-fn",-1286682217),self__.watch_fn],null))], null),self__.__extmap));
});
antares.core.DataWatcher.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4138__auto__,G__11313){var self__ = this;
var this__4138__auto____$1 = this;return (new antares.core.DataWatcher(self__.ident,self__.app_cursor,self__.watch_fn,G__11313,self__.__extmap,self__.__hash));
});
antares.core.DataWatcher.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4144__auto__,entry__4145__auto__){var self__ = this;
var this__4144__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4145__auto__))
{return cljs.core._assoc.call(null,this__4144__auto____$1,cljs.core._nth.call(null,entry__4145__auto__,(0)),cljs.core._nth.call(null,entry__4145__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4144__auto____$1,entry__4145__auto__);
}
});
antares.core.DataWatcher.prototype.antares$core$Watchable$ = true;
antares.core.DataWatcher.prototype.antares$core$Watchable$register_watcher$arity$1 = (function (self){var self__ = this;
var self__$1 = this;cljs.core.add_watch.call(null,antares.core.app_state,new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(self__$1),((function (self__$1){
return (function (key,reference,old_state,new_state){if(cljs.core.not_EQ_.call(null,cljs.core.get_in.call(null,old_state,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(self__$1)),cljs.core.get_in.call(null,new_state,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(self__$1))))
{return new cljs.core.Keyword(null,"watch-fn","watch-fn",-1286682217).cljs$core$IFn$_invoke$arity$1(self__$1).call(null,cljs.core.get_in.call(null,new_state,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(self__$1)));
} else
{return null;
}
});})(self__$1))
);
return cljs.core.swap_BANG_.call(null,antares.core.registered_data_watchers,cljs.core.conj,self__$1);
});
antares.core.DataWatcher.cljs$lang$type = true;
antares.core.DataWatcher.cljs$lang$ctorPrSeq = (function (this__4173__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"antares.core/DataWatcher");
});
antares.core.DataWatcher.cljs$lang$ctorPrWriter = (function (this__4173__auto__,writer__4174__auto__){return cljs.core._write.call(null,writer__4174__auto__,"antares.core/DataWatcher");
});
antares.core.__GT_DataWatcher = (function __GT_DataWatcher(ident,app_cursor,watch_fn){return (new antares.core.DataWatcher(ident,app_cursor,watch_fn));
});
antares.core.map__GT_DataWatcher = (function map__GT_DataWatcher(G__11315){return (new antares.core.DataWatcher(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(G__11315),new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(G__11315),new cljs.core.Keyword(null,"watch-fn","watch-fn",-1286682217).cljs$core$IFn$_invoke$arity$1(G__11315),null,cljs.core.dissoc.call(null,G__11315,new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.Keyword(null,"watch-fn","watch-fn",-1286682217))));
});
antares.core.data_watcher = (function data_watcher(source_map){var data_watcher__$1 = antares.core.map__GT_DataWatcher.call(null,source_map);antares.core.register_watcher.call(null,data_watcher__$1);
return data_watcher__$1;
});
antares.core.http_get = (function http_get(uri,options){return ajax.core.GET.call(null,uri,options);
});
antares.core.http_post = (function http_post(uri,options){return ajax.core.POST.call(null,uri,options);
});
antares.core.app_state_inspector_binding = antares.core.component_binding.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"app-state-inspector-binding","app-state-inspector-binding",-300815292),new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),".antares#app-state",new cljs.core.Keyword(null,"component","component",1555936782),antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"app-state-inspector","app-state-inspector",780117083),new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"style-data","style-data",383253160),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.antares#app-state","div.antares#app-state",1121586664),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"80px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),".8rem"], null)], null)], null),new cljs.core.Keyword(null,"render-data-fn","render-data-fn",-1862520485),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.pr_str.call(null,data)], null);
})], null))], null));

//# sourceMappingURL=core.js.map