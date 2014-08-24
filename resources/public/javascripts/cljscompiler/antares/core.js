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
antares.core.Queryable = (function (){var obj17476 = {};return obj17476;
})();
antares.core.get_attr = (function get_attr(self,attr){if((function (){var and__3556__auto__ = self;if(and__3556__auto__)
{return self.antares$core$Queryable$get_attr$arity$2;
} else
{return and__3556__auto__;
}
})())
{return self.antares$core$Queryable$get_attr$arity$2(self,attr);
} else
{var x__4195__auto__ = (((self == null))?null:self);return (function (){var or__3568__auto__ = (antares.core.get_attr[goog.typeOf(x__4195__auto__)]);if(or__3568__auto__)
{return or__3568__auto__;
} else
{var or__3568__auto____$1 = (antares.core.get_attr["_"]);if(or__3568__auto____$1)
{return or__3568__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Queryable.get-attr",self);
}
}
})().call(null,self,attr);
}
});
antares.core.Renderable = (function (){var obj17478 = {};return obj17478;
})();
antares.core.render = (function render(self,data){if((function (){var and__3556__auto__ = self;if(and__3556__auto__)
{return self.antares$core$Renderable$render$arity$2;
} else
{return and__3556__auto__;
}
})())
{return self.antares$core$Renderable$render$arity$2(self,data);
} else
{var x__4195__auto__ = (((self == null))?null:self);return (function (){var or__3568__auto__ = (antares.core.render[goog.typeOf(x__4195__auto__)]);if(or__3568__auto__)
{return or__3568__auto__;
} else
{var or__3568__auto____$1 = (antares.core.render["_"]);if(or__3568__auto____$1)
{return or__3568__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Renderable.render",self);
}
}
})().call(null,self,data);
}
});
antares.core.render_to_dom = (function render_to_dom(self,data,dom_cursor){if((function (){var and__3556__auto__ = self;if(and__3556__auto__)
{return self.antares$core$Renderable$render_to_dom$arity$3;
} else
{return and__3556__auto__;
}
})())
{return self.antares$core$Renderable$render_to_dom$arity$3(self,data,dom_cursor);
} else
{var x__4195__auto__ = (((self == null))?null:self);return (function (){var or__3568__auto__ = (antares.core.render_to_dom[goog.typeOf(x__4195__auto__)]);if(or__3568__auto__)
{return or__3568__auto__;
} else
{var or__3568__auto____$1 = (antares.core.render_to_dom["_"]);if(or__3568__auto____$1)
{return or__3568__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Renderable.render-to-dom",self);
}
}
})().call(null,self,data,dom_cursor);
}
});
antares.core.Bindable = (function (){var obj17480 = {};return obj17480;
})();
antares.core.register_app_cursor = (function register_app_cursor(self){if((function (){var and__3556__auto__ = self;if(and__3556__auto__)
{return self.antares$core$Bindable$register_app_cursor$arity$1;
} else
{return and__3556__auto__;
}
})())
{return self.antares$core$Bindable$register_app_cursor$arity$1(self);
} else
{var x__4195__auto__ = (((self == null))?null:self);return (function (){var or__3568__auto__ = (antares.core.register_app_cursor[goog.typeOf(x__4195__auto__)]);if(or__3568__auto__)
{return or__3568__auto__;
} else
{var or__3568__auto____$1 = (antares.core.register_app_cursor["_"]);if(or__3568__auto____$1)
{return or__3568__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Bindable.register-app-cursor",self);
}
}
})().call(null,self);
}
});
antares.core.register_render_watcher = (function register_render_watcher(self){if((function (){var and__3556__auto__ = self;if(and__3556__auto__)
{return self.antares$core$Bindable$register_render_watcher$arity$1;
} else
{return and__3556__auto__;
}
})())
{return self.antares$core$Bindable$register_render_watcher$arity$1(self);
} else
{var x__4195__auto__ = (((self == null))?null:self);return (function (){var or__3568__auto__ = (antares.core.register_render_watcher[goog.typeOf(x__4195__auto__)]);if(or__3568__auto__)
{return or__3568__auto__;
} else
{var or__3568__auto____$1 = (antares.core.register_render_watcher["_"]);if(or__3568__auto____$1)
{return or__3568__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Bindable.register-render-watcher",self);
}
}
})().call(null,self);
}
});
antares.core.register_styles = (function register_styles(self){if((function (){var and__3556__auto__ = self;if(and__3556__auto__)
{return self.antares$core$Bindable$register_styles$arity$1;
} else
{return and__3556__auto__;
}
})())
{return self.antares$core$Bindable$register_styles$arity$1(self);
} else
{var x__4195__auto__ = (((self == null))?null:self);return (function (){var or__3568__auto__ = (antares.core.register_styles[goog.typeOf(x__4195__auto__)]);if(or__3568__auto__)
{return or__3568__auto__;
} else
{var or__3568__auto____$1 = (antares.core.register_styles["_"]);if(or__3568__auto____$1)
{return or__3568__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Bindable.register-styles",self);
}
}
})().call(null,self);
}
});
antares.core.post_render = (function post_render(self){if((function (){var and__3556__auto__ = self;if(and__3556__auto__)
{return self.antares$core$Bindable$post_render$arity$1;
} else
{return and__3556__auto__;
}
})())
{return self.antares$core$Bindable$post_render$arity$1(self);
} else
{var x__4195__auto__ = (((self == null))?null:self);return (function (){var or__3568__auto__ = (antares.core.post_render[goog.typeOf(x__4195__auto__)]);if(or__3568__auto__)
{return or__3568__auto__;
} else
{var or__3568__auto____$1 = (antares.core.post_render["_"]);if(or__3568__auto____$1)
{return or__3568__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Bindable.post-render",self);
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
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4154__auto__,k__4155__auto__){var self__ = this;
var this__4154__auto____$1 = this;return cljs.core._lookup.call(null,this__4154__auto____$1,k__4155__auto__,null);
});
antares.core.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4156__auto__,k17482,else__4157__auto__){var self__ = this;
var this__4156__auto____$1 = this;var G__17484 = (((k17482 instanceof cljs.core.Keyword))?k17482.fqn:null);switch (G__17484) {
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
return cljs.core.get.call(null,self__.__extmap,k17482,else__4157__auto__);

}
});
antares.core.Component.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4168__auto__,writer__4169__auto__,opts__4170__auto__){var self__ = this;
var this__4168__auto____$1 = this;var pr_pair__4171__auto__ = ((function (this__4168__auto____$1){
return (function (keyval__4172__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4169__auto__,cljs.core.pr_writer,""," ","",opts__4170__auto__,keyval__4172__auto__);
});})(this__4168__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4169__auto__,pr_pair__4171__auto__,"#antares.core.Component{",", ","}",opts__4170__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data-type","data-type",-326421468),self__.data_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349),self__.subcomponents],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style-data","style-data",383253160),self__.style_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-data-fn","render-data-fn",-1862520485),self__.render_data_fn],null))], null),self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4152__auto__){var self__ = this;
var this__4152__auto____$1 = this;return self__.__meta;
});
antares.core.Component.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4148__auto__){var self__ = this;
var this__4148__auto____$1 = this;return (new antares.core.Component(self__.ident,self__.data_type,self__.subcomponents,self__.style_data,self__.render_data_fn,self__.__meta,self__.__extmap,self__.__hash));
});
antares.core.Component.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4158__auto__){var self__ = this;
var this__4158__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
antares.core.Component.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4149__auto__){var self__ = this;
var this__4149__auto____$1 = this;var h__3979__auto__ = self__.__hash;if(!((h__3979__auto__ == null)))
{return h__3979__auto__;
} else
{var h__3979__auto____$1 = cljs.core.hash_imap.call(null,this__4149__auto____$1);self__.__hash = h__3979__auto____$1;
return h__3979__auto____$1;
}
});
antares.core.Component.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4150__auto__,other__4151__auto__){var self__ = this;
var this__4150__auto____$1 = this;if(cljs.core.truth_((function (){var and__3556__auto__ = other__4151__auto__;if(cljs.core.truth_(and__3556__auto__))
{return ((this__4150__auto____$1.constructor === other__4151__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4150__auto____$1,other__4151__auto__));
} else
{return and__3556__auto__;
}
})()))
{return true;
} else
{return false;
}
});
antares.core.Component.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4163__auto__,k__4164__auto__){var self__ = this;
var this__4163__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349),null,new cljs.core.Keyword(null,"data-type","data-type",-326421468),null,new cljs.core.Keyword(null,"style-data","style-data",383253160),null,new cljs.core.Keyword(null,"ident","ident",-742346),null,new cljs.core.Keyword(null,"render-data-fn","render-data-fn",-1862520485),null], null), null),k__4164__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4163__auto____$1),self__.__meta),k__4164__auto__);
} else
{return (new antares.core.Component(self__.ident,self__.data_type,self__.subcomponents,self__.style_data,self__.render_data_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4164__auto__)),null));
}
});
antares.core.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4161__auto__,k__4162__auto__,G__17481){var self__ = this;
var this__4161__auto____$1 = this;var pred__17485 = cljs.core.keyword_identical_QMARK_;var expr__17486 = k__4162__auto__;if(cljs.core.truth_(pred__17485.call(null,new cljs.core.Keyword(null,"ident","ident",-742346),expr__17486)))
{return (new antares.core.Component(G__17481,self__.data_type,self__.subcomponents,self__.style_data,self__.render_data_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__17485.call(null,new cljs.core.Keyword(null,"data-type","data-type",-326421468),expr__17486)))
{return (new antares.core.Component(self__.ident,G__17481,self__.subcomponents,self__.style_data,self__.render_data_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__17485.call(null,new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349),expr__17486)))
{return (new antares.core.Component(self__.ident,self__.data_type,G__17481,self__.style_data,self__.render_data_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__17485.call(null,new cljs.core.Keyword(null,"style-data","style-data",383253160),expr__17486)))
{return (new antares.core.Component(self__.ident,self__.data_type,self__.subcomponents,G__17481,self__.render_data_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__17485.call(null,new cljs.core.Keyword(null,"render-data-fn","render-data-fn",-1862520485),expr__17486)))
{return (new antares.core.Component(self__.ident,self__.data_type,self__.subcomponents,self__.style_data,G__17481,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.Component(self__.ident,self__.data_type,self__.subcomponents,self__.style_data,self__.render_data_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4162__auto__,G__17481),null));
}
}
}
}
}
});
antares.core.Component.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4166__auto__){var self__ = this;
var this__4166__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data-type","data-type",-326421468),self__.data_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349),self__.subcomponents],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style-data","style-data",383253160),self__.style_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-data-fn","render-data-fn",-1862520485),self__.render_data_fn],null))], null),self__.__extmap));
});
antares.core.Component.prototype.antares$core$Queryable$ = true;
antares.core.Component.prototype.antares$core$Queryable$get_attr$arity$2 = (function (self,attr){var self__ = this;
var self__$1 = this;return attr.call(null,self__$1);
});
antares.core.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4153__auto__,G__17481){var self__ = this;
var this__4153__auto____$1 = this;return (new antares.core.Component(self__.ident,self__.data_type,self__.subcomponents,self__.style_data,self__.render_data_fn,G__17481,self__.__extmap,self__.__hash));
});
antares.core.Component.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4159__auto__,entry__4160__auto__){var self__ = this;
var this__4159__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4160__auto__))
{return cljs.core._assoc.call(null,this__4159__auto____$1,cljs.core._nth.call(null,entry__4160__auto__,(0)),cljs.core._nth.call(null,entry__4160__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4159__auto____$1,entry__4160__auto__);
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
antares.core.Component.cljs$lang$ctorPrSeq = (function (this__4188__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"antares.core/Component");
});
antares.core.Component.cljs$lang$ctorPrWriter = (function (this__4188__auto__,writer__4189__auto__){return cljs.core._write.call(null,writer__4189__auto__,"antares.core/Component");
});
antares.core.__GT_Component = (function __GT_Component(ident,data_type,subcomponents,style_data,render_data_fn){return (new antares.core.Component(ident,data_type,subcomponents,style_data,render_data_fn));
});
antares.core.map__GT_Component = (function map__GT_Component(G__17483){return (new antares.core.Component(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(G__17483),new cljs.core.Keyword(null,"data-type","data-type",-326421468).cljs$core$IFn$_invoke$arity$1(G__17483),new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349).cljs$core$IFn$_invoke$arity$1(G__17483),new cljs.core.Keyword(null,"style-data","style-data",383253160).cljs$core$IFn$_invoke$arity$1(G__17483),new cljs.core.Keyword(null,"render-data-fn","render-data-fn",-1862520485).cljs$core$IFn$_invoke$arity$1(G__17483),null,cljs.core.dissoc.call(null,G__17483,new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349),new cljs.core.Keyword(null,"style-data","style-data",383253160),new cljs.core.Keyword(null,"render-data-fn","render-data-fn",-1862520485))));
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
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
antares.core.ComponentBinding = (function (ident,component,app_cursor,dom_cursor,post_render_fn,__meta,__extmap){
this.ident = ident;
this.component = component;
this.app_cursor = app_cursor;
this.dom_cursor = dom_cursor;
this.post_render_fn = post_render_fn;
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
antares.core.ComponentBinding.prototype.antares$core$Bindable$ = true;
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
var self__$1 = this;return cljs.core.add_watch.call(null,antares.core.app_state,new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(self__$1),((function (self__$1){
return (function (key,reference,old_state,new_state){if(cljs.core.not_EQ_.call(null,cljs.core.get_in.call(null,old_state,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(self__$1)),cljs.core.get_in.call(null,new_state,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(self__$1))))
{antares.core.render_to_dom.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(self__$1),cljs.core.get_in.call(null,new_state,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(self__$1)),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(self__$1));
return antares.core.post_render.call(null,self__$1);
} else
{return null;
}
});})(self__$1))
);
});
antares.core.ComponentBinding.prototype.antares$core$Bindable$register_styles$arity$1 = (function (self){var self__ = this;
var self__$1 = this;var head_node = document.querySelector("head");var style_node = goog.dom.createElement("style");var text_node = goog.dom.createTextNode(antares.core.compile_css_BANG_.call(null,new cljs.core.Keyword(null,"style-data","style-data",383253160).cljs$core$IFn$_invoke$arity$1(self__$1)));goog.dom.appendChild(style_node,text_node);
return goog.dom.appendChild(head_node,style_node);
});
antares.core.ComponentBinding.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4154__auto__,k__4155__auto__){var self__ = this;
var this__4154__auto____$1 = this;return cljs.core._lookup.call(null,this__4154__auto____$1,k__4155__auto__,null);
});
antares.core.ComponentBinding.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4156__auto__,k17490,else__4157__auto__){var self__ = this;
var this__4156__auto____$1 = this;var G__17492 = (((k17490 instanceof cljs.core.Keyword))?k17490.fqn:null);switch (G__17492) {
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
return cljs.core.get.call(null,self__.__extmap,k17490,else__4157__auto__);

}
});
antares.core.ComponentBinding.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4168__auto__,writer__4169__auto__,opts__4170__auto__){var self__ = this;
var this__4168__auto____$1 = this;var pr_pair__4171__auto__ = ((function (this__4168__auto____$1){
return (function (keyval__4172__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4169__auto__,cljs.core.pr_writer,""," ","",opts__4170__auto__,keyval__4172__auto__);
});})(this__4168__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4169__auto__,pr_pair__4171__auto__,"#antares.core.ComponentBinding{",", ","}",opts__4170__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component","component",1555936782),self__.component],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),self__.post_render_fn],null))], null),self__.__extmap));
});
antares.core.ComponentBinding.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4152__auto__){var self__ = this;
var this__4152__auto____$1 = this;return self__.__meta;
});
antares.core.ComponentBinding.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4148__auto__){var self__ = this;
var this__4148__auto____$1 = this;return (new antares.core.ComponentBinding(self__.ident,self__.component,self__.app_cursor,self__.dom_cursor,self__.post_render_fn,self__.__meta,self__.__extmap,self__.__hash));
});
antares.core.ComponentBinding.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4158__auto__){var self__ = this;
var this__4158__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
antares.core.ComponentBinding.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4149__auto__){var self__ = this;
var this__4149__auto____$1 = this;var h__3979__auto__ = self__.__hash;if(!((h__3979__auto__ == null)))
{return h__3979__auto__;
} else
{var h__3979__auto____$1 = cljs.core.hash_imap.call(null,this__4149__auto____$1);self__.__hash = h__3979__auto____$1;
return h__3979__auto____$1;
}
});
antares.core.ComponentBinding.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4150__auto__,other__4151__auto__){var self__ = this;
var this__4150__auto____$1 = this;if(cljs.core.truth_((function (){var and__3556__auto__ = other__4151__auto__;if(cljs.core.truth_(and__3556__auto__))
{return ((this__4150__auto____$1.constructor === other__4151__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4150__auto____$1,other__4151__auto__));
} else
{return and__3556__auto__;
}
})()))
{return true;
} else
{return false;
}
});
antares.core.ComponentBinding.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4163__auto__,k__4164__auto__){var self__ = this;
var this__4163__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),null,new cljs.core.Keyword(null,"component","component",1555936782),null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),null,new cljs.core.Keyword(null,"ident","ident",-742346),null], null), null),k__4164__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4163__auto____$1),self__.__meta),k__4164__auto__);
} else
{return (new antares.core.ComponentBinding(self__.ident,self__.component,self__.app_cursor,self__.dom_cursor,self__.post_render_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4164__auto__)),null));
}
});
antares.core.ComponentBinding.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4161__auto__,k__4162__auto__,G__17489){var self__ = this;
var this__4161__auto____$1 = this;var pred__17493 = cljs.core.keyword_identical_QMARK_;var expr__17494 = k__4162__auto__;if(cljs.core.truth_(pred__17493.call(null,new cljs.core.Keyword(null,"ident","ident",-742346),expr__17494)))
{return (new antares.core.ComponentBinding(G__17489,self__.component,self__.app_cursor,self__.dom_cursor,self__.post_render_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__17493.call(null,new cljs.core.Keyword(null,"component","component",1555936782),expr__17494)))
{return (new antares.core.ComponentBinding(self__.ident,G__17489,self__.app_cursor,self__.dom_cursor,self__.post_render_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__17493.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),expr__17494)))
{return (new antares.core.ComponentBinding(self__.ident,self__.component,G__17489,self__.dom_cursor,self__.post_render_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__17493.call(null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),expr__17494)))
{return (new antares.core.ComponentBinding(self__.ident,self__.component,self__.app_cursor,G__17489,self__.post_render_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__17493.call(null,new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),expr__17494)))
{return (new antares.core.ComponentBinding(self__.ident,self__.component,self__.app_cursor,self__.dom_cursor,G__17489,self__.__meta,self__.__extmap,null));
} else
{return (new antares.core.ComponentBinding(self__.ident,self__.component,self__.app_cursor,self__.dom_cursor,self__.post_render_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4162__auto__,G__17489),null));
}
}
}
}
}
});
antares.core.ComponentBinding.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4166__auto__){var self__ = this;
var this__4166__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ident","ident",-742346),self__.ident],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component","component",1555936782),self__.component],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),self__.post_render_fn],null))], null),self__.__extmap));
});
antares.core.ComponentBinding.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4153__auto__,G__17489){var self__ = this;
var this__4153__auto____$1 = this;return (new antares.core.ComponentBinding(self__.ident,self__.component,self__.app_cursor,self__.dom_cursor,self__.post_render_fn,G__17489,self__.__extmap,self__.__hash));
});
antares.core.ComponentBinding.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4159__auto__,entry__4160__auto__){var self__ = this;
var this__4159__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4160__auto__))
{return cljs.core._assoc.call(null,this__4159__auto____$1,cljs.core._nth.call(null,entry__4160__auto__,(0)),cljs.core._nth.call(null,entry__4160__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4159__auto____$1,entry__4160__auto__);
}
});
antares.core.ComponentBinding.cljs$lang$type = true;
antares.core.ComponentBinding.cljs$lang$ctorPrSeq = (function (this__4188__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"antares.core/ComponentBinding");
});
antares.core.ComponentBinding.cljs$lang$ctorPrWriter = (function (this__4188__auto__,writer__4189__auto__){return cljs.core._write.call(null,writer__4189__auto__,"antares.core/ComponentBinding");
});
antares.core.__GT_ComponentBinding = (function __GT_ComponentBinding(ident,component,app_cursor,dom_cursor,post_render_fn){return (new antares.core.ComponentBinding(ident,component,app_cursor,dom_cursor,post_render_fn));
});
antares.core.map__GT_ComponentBinding = (function map__GT_ComponentBinding(G__17491){return (new antares.core.ComponentBinding(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(G__17491),new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(G__17491),new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(G__17491),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(G__17491),new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496).cljs$core$IFn$_invoke$arity$1(G__17491),null,cljs.core.dissoc.call(null,G__17491,new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496))));
});
antares.core.bind_component = (function bind_component(source_map){var component_binding = antares.core.map__GT_ComponentBinding.call(null,source_map);antares.core.register_app_cursor.call(null,component_binding);
antares.core.register_render_watcher.call(null,component_binding);
return antares.core.register_styles.call(null,component_binding);
});
antares.core.http_get = (function http_get(uri,options){return ajax.core.GET.call(null,uri,options);
});
antares.core.http_post = (function http_post(uri,options){return ajax.core.POST.call(null,uri,options);
});

//# sourceMappingURL=core.js.map