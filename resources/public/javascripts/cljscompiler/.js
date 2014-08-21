// Compiled by ClojureScript 0.0-2277
new cljs.core.Keyword(null,"require-macros","require-macros",707947416).cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.async.macros,new cljs.core.Keyword(null,"refer","refer",-964295553),.go.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.macros,new cljs.core.Keyword(null,"refer","refer",-964295553),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [.node], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hiccups.core,new cljs.core.Keyword(null,"as","as",1148689641),.htmlrenderer], null));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antares.importers,new cljs.core.Keyword(null,"as","as",1148689641),.importers], null);
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antares.repl,new cljs.core.Keyword(null,"as","as",1148689641),.repl], null);
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.core,new cljs.core.Keyword(null,"as","as",1148689641),.dommy], null);
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.reader,new cljs.core.Keyword(null,"as","as",1148689641),.edn], null);
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string,new cljs.core.Keyword(null,"as","as",1148689641),cljs.core.str], null);
.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
.registered_bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
.registered_components = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
.read_data = (function read_data(data_string){return edn.read_string.call(null,data_string);
});
.split_threadlast = (function split_threadlast(regex,data){return str.split.call(null,data,regex);
});
.nth_threadlast = (function nth_threadlast(index,collection){return cljs.core.nth.call(null,collection,index);
});
.string__GT_matrix = (function string__GT_matrix(string){if(cljs.core.truth_(string))
{var formatted_string = str.replace.call(null,string,/\r/,"\n");return cljs.core.map.call(null,((function (formatted_string){
return (function (string__$1){return str.split.call(null,string__$1,/,/);
});})(formatted_string))
,str.split.call(null,formatted_string,/\n/));
} else
{return null;
}
});
.cursor__GT_value = (function cursor__GT_value(cursor,new_value){return cljs.core.swap_BANG_.call(null,.app_state,(function (app_value){return cljs.core.update_in.call(null,app_value,cursor,(function (old_value){return new_value;
}));
}));
});
.render_css = (function render_css(data){return cssrenderer.css.call(null,.read_data.call(null,data));
});
.render_html = (function render_html(template){return htmlrenderer.html.call(null,.read_data.call(null,template));
});
.compile_template = (function compile_template(compile_data,template){return ajax.POST.call(null,"http://localhost:8989/compile-template",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"compile-data","compile-data",-1472149691),compile_data,new cljs.core.Keyword(null,"template","template",-702405684),template], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){return .update_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiled-html","compiled-html",-1974495664)], null),(function (old_value){return response;
}));
})], null));
});
.Renderable = (function (){var obj9389 = {};return obj9389;
})();
.render = (function render(self){if((function (){var and__3531__auto__ = self;if(and__3531__auto__)
{return self.$Renderable$render$arity$1;
} else
{return and__3531__auto__;
}
})())
{return self.$Renderable$render$arity$1(self);
} else
{var x__4170__auto__ = (((self == null))?null:self);return (function (){var or__3543__auto__ = (.render[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (.render["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Renderable.render",self);
}
}
})().call(null,self);
}
});
.EventResponder = (function (){var obj9391 = {};return obj9391;
})();
.bind_events = (function bind_events(self){if((function (){var and__3531__auto__ = self;if(and__3531__auto__)
{return self.$EventResponder$bind_events$arity$1;
} else
{return and__3531__auto__;
}
})())
{return self.$EventResponder$bind_events$arity$1(self);
} else
{var x__4170__auto__ = (((self == null))?null:self);return (function (){var or__3543__auto__ = (.bind_events[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (.bind_events["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"EventResponder.bind-events",self);
}
}
})().call(null,self);
}
});
.DataSource = (function (){var obj9393 = {};return obj9393;
})();
.load_data = (function load_data(self){if((function (){var and__3531__auto__ = self;if(and__3531__auto__)
{return self.$DataSource$load_data$arity$1;
} else
{return and__3531__auto__;
}
})())
{return self.$DataSource$load_data$arity$1(self);
} else
{var x__4170__auto__ = (((self == null))?null:self);return (function (){var or__3543__auto__ = (.load_data[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (.load_data["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DataSource.load-data",self);
}
}
})().call(null,self);
}
});

/**
* @constructor
* @param {*} app_cursor
* @param {*} dom_cursor
* @param {*} render_fn
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
.DataBinding = (function (app_cursor,dom_cursor,render_fn,__meta,__extmap){
this.app_cursor = app_cursor;
this.dom_cursor = dom_cursor;
this.render_fn = render_fn;
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
.DataBinding.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4129__auto__,k__4130__auto__){var self__ = this;
var this__4129__auto____$1 = this;return cljs.core._lookup.call(null,this__4129__auto____$1,k__4130__auto__,null);
});
.DataBinding.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4131__auto__,k9395,else__4132__auto__){var self__ = this;
var this__4131__auto____$1 = this;var G__9397 = (((k9395 instanceof cljs.core.Keyword))?k9395.fqn:null);switch (G__9397) {
case "render-fn":
return self__.render_fn;

break;
case "dom-cursor":
return self__.dom_cursor;

break;
case "app-cursor":
return self__.app_cursor;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9395,else__4132__auto__);

}
});
.DataBinding.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4143__auto__,writer__4144__auto__,opts__4145__auto__){var self__ = this;
var this__4143__auto____$1 = this;var pr_pair__4146__auto__ = ((function (this__4143__auto____$1){
return (function (keyval__4147__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4144__auto__,cljs.core.pr_writer,""," ","",opts__4145__auto__,keyval__4147__auto__);
});})(this__4143__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4144__auto__,pr_pair__4146__auto__,"#.DataBinding{",", ","}",opts__4145__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null))], null),self__.__extmap));
});
.DataBinding.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4127__auto__){var self__ = this;
var this__4127__auto____$1 = this;return self__.__meta;
});
.DataBinding.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4123__auto__){var self__ = this;
var this__4123__auto____$1 = this;return (new .DataBinding(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.__meta,self__.__extmap,self__.__hash));
});
.DataBinding.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4133__auto__){var self__ = this;
var this__4133__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
.DataBinding.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4124__auto__){var self__ = this;
var this__4124__auto____$1 = this;var h__3954__auto__ = self__.__hash;if(!((h__3954__auto__ == null)))
{return h__3954__auto__;
} else
{var h__3954__auto____$1 = cljs.core.hash_imap.call(null,this__4124__auto____$1);self__.__hash = h__3954__auto____$1;
return h__3954__auto____$1;
}
});
.DataBinding.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4125__auto__,other__4126__auto__){var self__ = this;
var this__4125__auto____$1 = this;if(cljs.core.truth_((function (){var and__3531__auto__ = other__4126__auto__;if(cljs.core.truth_(and__3531__auto__))
{return ((this__4125__auto____$1.constructor === other__4126__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4125__auto____$1,other__4126__auto__));
} else
{return and__3531__auto__;
}
})()))
{return true;
} else
{return false;
}
});
.DataBinding.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4138__auto__,k__4139__auto__){var self__ = this;
var this__4138__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),null], null), null),k__4139__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4138__auto____$1),self__.__meta),k__4139__auto__);
} else
{return (new .DataBinding(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4139__auto__)),null));
}
});
.DataBinding.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4136__auto__,k__4137__auto__,G__9394){var self__ = this;
var this__4136__auto____$1 = this;var pred__9398 = cljs.core.keyword_identical_QMARK_;var expr__9399 = k__4137__auto__;if(cljs.core.truth_(pred__9398.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),expr__9399)))
{return (new .DataBinding(G__9394,self__.dom_cursor,self__.render_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9398.call(null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),expr__9399)))
{return (new .DataBinding(self__.app_cursor,G__9394,self__.render_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9398.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),expr__9399)))
{return (new .DataBinding(self__.app_cursor,self__.dom_cursor,G__9394,self__.__meta,self__.__extmap,null));
} else
{return (new .DataBinding(self__.app_cursor,self__.dom_cursor,self__.render_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4137__auto__,G__9394),null));
}
}
}
});
.DataBinding.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null))], null),self__.__extmap));
});
.DataBinding.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4128__auto__,G__9394){var self__ = this;
var this__4128__auto____$1 = this;return (new .DataBinding(self__.app_cursor,self__.dom_cursor,self__.render_fn,G__9394,self__.__extmap,self__.__hash));
});
.DataBinding.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4134__auto__,entry__4135__auto__){var self__ = this;
var this__4134__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4135__auto__))
{return cljs.core._assoc.call(null,this__4134__auto____$1,cljs.core._nth.call(null,entry__4135__auto__,(0)),cljs.core._nth.call(null,entry__4135__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4134__auto____$1,entry__4135__auto__);
}
});
.DataBinding.prototype.$Renderable$ = true;
.DataBinding.prototype.$Renderable$render$arity$1 = (function (self){var self__ = this;
var self__$1 = this;var target_node = document.querySelector(self__.dom_cursor);var target_data = ((cljs.core._EQ_.call(null,cljs.core.type.call(null,self__.app_cursor),cljs.core.List))?self__.render_fn.call(null,cljs.core.map.call(null,((function (target_node,self__$1){
return (function (cursor){var temp__4124__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,.app_state),cursor);if(cljs.core.truth_(temp__4124__auto__))
{var app_data = temp__4124__auto__;return app_data;
} else
{return "";
}
});})(target_node,self__$1))
,self__.app_cursor)):self__.render_fn.call(null,(function (){var temp__4124__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,.app_state),self__.app_cursor);if(cljs.core.truth_(temp__4124__auto__))
{var app_data = temp__4124__auto__;return app_data;
} else
{return "";
}
})()));var G__9401 = target_node.tagName;switch (G__9401) {
case "INPUT":
return target_node.value = target_data;

break;
case "TEXTAREA":
return target_node.value = target_data;

break;
default:
return target_node.innerHTML = target_data;

}
});
.DataBinding.cljs$lang$type = true;
.DataBinding.cljs$lang$ctorPrSeq = (function (this__4163__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"/DataBinding");
});
.DataBinding.cljs$lang$ctorPrWriter = (function (this__4163__auto__,writer__4164__auto__){return cljs.core._write.call(null,writer__4164__auto__,"/DataBinding");
});
.__GT_DataBinding = (function __GT_DataBinding(app_cursor,dom_cursor,render_fn){return (new .DataBinding(app_cursor,dom_cursor,render_fn));
});
.map__GT_DataBinding = (function map__GT_DataBinding(G__9396){return (new .DataBinding(new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(G__9396),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(G__9396),new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(G__9396),null,cljs.core.dissoc.call(null,G__9396,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),new cljs.core.Keyword(null,"render-fn","render-fn",398796518))));
});

/**
* @constructor
* @param {*} app_cursor
* @param {*} dom_cursor
* @param {*} pre_render_fn
* @param {*} render_fn
* @param {*} post_render_fn
* @param {*} interactions
* @param {*} data
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
.Component = (function (app_cursor,dom_cursor,pre_render_fn,render_fn,post_render_fn,interactions,data,__meta,__extmap){
this.app_cursor = app_cursor;
this.dom_cursor = dom_cursor;
this.pre_render_fn = pre_render_fn;
this.render_fn = render_fn;
this.post_render_fn = post_render_fn;
this.interactions = interactions;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>7){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
.Component.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4129__auto__,k__4130__auto__){var self__ = this;
var this__4129__auto____$1 = this;return cljs.core._lookup.call(null,this__4129__auto____$1,k__4130__auto__,null);
});
.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4131__auto__,k9405,else__4132__auto__){var self__ = this;
var this__4131__auto____$1 = this;var G__9407 = (((k9405 instanceof cljs.core.Keyword))?k9405.fqn:null);switch (G__9407) {
case "data":
return self__.data;

break;
case "interactions":
return self__.interactions;

break;
case "post-render-fn":
return self__.post_render_fn;

break;
case "render-fn":
return self__.render_fn;

break;
case "pre-render-fn":
return self__.pre_render_fn;

break;
case "dom-cursor":
return self__.dom_cursor;

break;
case "app-cursor":
return self__.app_cursor;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9405,else__4132__auto__);

}
});
.Component.prototype.$DataSource$ = true;
.Component.prototype.$DataSource$load_data$arity$1 = (function (self){var self__ = this;
var self__$1 = this;if(cljs.core.truth_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1)))
{var G__9408 = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1));switch (G__9408) {
case "s3Bucket":
return .go.call(null,.cursor__GT_value.call(null,self__.app_cursor,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(._LT__BANG_.call(null,importers.s3Bucket.call(null,new cljs.core.Keyword(null,"bucket-name","bucket-name",-971156135).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1)))))));

break;
case "static":
return .go.call(null,.cursor__GT_value.call(null,self__.app_cursor,new cljs.core.Keyword(null,"initialize","initialize",609952913).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1))));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__$1))))));

}
} else
{return null;
}
});
.Component.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4143__auto__,writer__4144__auto__,opts__4145__auto__){var self__ = this;
var this__4143__auto____$1 = this;var pr_pair__4146__auto__ = ((function (this__4143__auto____$1){
return (function (keyval__4147__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4144__auto__,cljs.core.pr_writer,""," ","",opts__4145__auto__,keyval__4147__auto__);
});})(this__4143__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4144__auto__,pr_pair__4146__auto__,"#.Component{",", ","}",opts__4145__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801),self__.pre_render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),self__.post_render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"interactions","interactions",550841811),self__.interactions],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
});
.Component.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4127__auto__){var self__ = this;
var this__4127__auto____$1 = this;return self__.__meta;
});
.Component.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4123__auto__){var self__ = this;
var this__4123__auto____$1 = this;return (new .Component(self__.app_cursor,self__.dom_cursor,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.data,self__.__meta,self__.__extmap,self__.__hash));
});
.Component.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4133__auto__){var self__ = this;
var this__4133__auto____$1 = this;return (7 + cljs.core.count.call(null,self__.__extmap));
});
.Component.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4124__auto__){var self__ = this;
var this__4124__auto____$1 = this;var h__3954__auto__ = self__.__hash;if(!((h__3954__auto__ == null)))
{return h__3954__auto__;
} else
{var h__3954__auto____$1 = cljs.core.hash_imap.call(null,this__4124__auto____$1);self__.__hash = h__3954__auto____$1;
return h__3954__auto____$1;
}
});
.Component.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4125__auto__,other__4126__auto__){var self__ = this;
var this__4125__auto____$1 = this;if(cljs.core.truth_((function (){var and__3531__auto__ = other__4126__auto__;if(cljs.core.truth_(and__3531__auto__))
{return ((this__4125__auto____$1.constructor === other__4126__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4125__auto____$1,other__4126__auto__));
} else
{return and__3531__auto__;
}
})()))
{return true;
} else
{return false;
}
});
.Component.prototype.$EventResponder$ = true;
.Component.prototype.$EventResponder$bind_events$arity$1 = (function (self){var self__ = this;
var self__$1 = this;var temp__4126__auto__ = new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(self__$1);if(cljs.core.truth_(temp__4126__auto__))
{var interactions__$1 = temp__4126__auto__;var seq__9409 = cljs.core.seq.call(null,interactions__$1);var chunk__9410 = null;var count__9411 = (0);var i__9412 = (0);while(true){
if((i__9412 < count__9411))
{var interaction = cljs.core._nth.call(null,chunk__9410,i__9412);document.querySelector(self__.dom_cursor).addEventListener(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"event-action","event-action",-974748529).cljs$core$IFn$_invoke$arity$1(interaction),true);
{
var G__9418 = seq__9409;
var G__9419 = chunk__9410;
var G__9420 = count__9411;
var G__9421 = (i__9412 + (1));
seq__9409 = G__9418;
chunk__9410 = G__9419;
count__9411 = G__9420;
i__9412 = G__9421;
continue;
}
} else
{var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__9409);if(temp__4126__auto____$1)
{var seq__9409__$1 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9409__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__9409__$1);{
var G__9422 = cljs.core.chunk_rest.call(null,seq__9409__$1);
var G__9423 = c__4299__auto__;
var G__9424 = cljs.core.count.call(null,c__4299__auto__);
var G__9425 = (0);
seq__9409 = G__9422;
chunk__9410 = G__9423;
count__9411 = G__9424;
i__9412 = G__9425;
continue;
}
} else
{var interaction = cljs.core.first.call(null,seq__9409__$1);document.querySelector(self__.dom_cursor).addEventListener(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"event-action","event-action",-974748529).cljs$core$IFn$_invoke$arity$1(interaction),true);
{
var G__9426 = cljs.core.next.call(null,seq__9409__$1);
var G__9427 = null;
var G__9428 = (0);
var G__9429 = (0);
seq__9409 = G__9426;
chunk__9410 = G__9427;
count__9411 = G__9428;
i__9412 = G__9429;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
.Component.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4138__auto__,k__4139__auto__){var self__ = this;
var this__4138__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),null,new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801),null,new cljs.core.Keyword(null,"interactions","interactions",550841811),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4139__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4138__auto____$1),self__.__meta),k__4139__auto__);
} else
{return (new .Component(self__.app_cursor,self__.dom_cursor,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.data,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4139__auto__)),null));
}
});
.Component.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4136__auto__,k__4137__auto__,G__9404){var self__ = this;
var this__4136__auto____$1 = this;var pred__9413 = cljs.core.keyword_identical_QMARK_;var expr__9414 = k__4137__auto__;if(cljs.core.truth_(pred__9413.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),expr__9414)))
{return (new .Component(G__9404,self__.dom_cursor,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9413.call(null,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),expr__9414)))
{return (new .Component(self__.app_cursor,G__9404,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9413.call(null,new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801),expr__9414)))
{return (new .Component(self__.app_cursor,self__.dom_cursor,G__9404,self__.render_fn,self__.post_render_fn,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9413.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),expr__9414)))
{return (new .Component(self__.app_cursor,self__.dom_cursor,self__.pre_render_fn,G__9404,self__.post_render_fn,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9413.call(null,new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),expr__9414)))
{return (new .Component(self__.app_cursor,self__.dom_cursor,self__.pre_render_fn,self__.render_fn,G__9404,self__.interactions,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9413.call(null,new cljs.core.Keyword(null,"interactions","interactions",550841811),expr__9414)))
{return (new .Component(self__.app_cursor,self__.dom_cursor,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,G__9404,self__.data,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9413.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__9414)))
{return (new .Component(self__.app_cursor,self__.dom_cursor,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,G__9404,self__.__meta,self__.__extmap,null));
} else
{return (new .Component(self__.app_cursor,self__.dom_cursor,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.data,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4137__auto__,G__9404),null));
}
}
}
}
}
}
}
});
.Component.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),self__.app_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),self__.dom_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801),self__.pre_render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",398796518),self__.render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),self__.post_render_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"interactions","interactions",550841811),self__.interactions],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
});
.Component.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4128__auto__,G__9404){var self__ = this;
var this__4128__auto____$1 = this;return (new .Component(self__.app_cursor,self__.dom_cursor,self__.pre_render_fn,self__.render_fn,self__.post_render_fn,self__.interactions,self__.data,G__9404,self__.__extmap,self__.__hash));
});
.Component.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4134__auto__,entry__4135__auto__){var self__ = this;
var this__4134__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4135__auto__))
{return cljs.core._assoc.call(null,this__4134__auto____$1,cljs.core._nth.call(null,entry__4135__auto__,(0)),cljs.core._nth.call(null,entry__4135__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4134__auto____$1,entry__4135__auto__);
}
});
.Component.prototype.$Renderable$ = true;
.Component.prototype.$Renderable$render$arity$1 = (function (self){var self__ = this;
var self__$1 = this;if(cljs.core.truth_(new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801).cljs$core$IFn$_invoke$arity$1(self__$1)))
{self__.pre_render_fn.call(null);
} else
{}
var target_node_9430 = document.querySelector(self__.dom_cursor);var new_nodes_data_9431 = self__.render_fn.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,.app_state),self__.app_cursor));target_node_9430.innerHTML = new_nodes_data_9431;
if(cljs.core.truth_(new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496).cljs$core$IFn$_invoke$arity$1(self__$1)))
{return self__.post_render_fn.call(null);
} else
{return null;
}
});
.Component.cljs$lang$type = true;
.Component.cljs$lang$ctorPrSeq = (function (this__4163__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Component");
});
.Component.cljs$lang$ctorPrWriter = (function (this__4163__auto__,writer__4164__auto__){return cljs.core._write.call(null,writer__4164__auto__,"/Component");
});
.__GT_Component = (function __GT_Component(app_cursor,dom_cursor,pre_render_fn,render_fn,post_render_fn,interactions,data){return (new .Component(app_cursor,dom_cursor,pre_render_fn,render_fn,post_render_fn,interactions,data));
});
.map__GT_Component = (function map__GT_Component(G__9406){return (new .Component(new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(G__9406),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677).cljs$core$IFn$_invoke$arity$1(G__9406),new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801).cljs$core$IFn$_invoke$arity$1(G__9406),new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(G__9406),new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496).cljs$core$IFn$_invoke$arity$1(G__9406),new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(G__9406),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__9406),null,cljs.core.dissoc.call(null,G__9406,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),new cljs.core.Keyword(null,"pre-render-fn","pre-render-fn",1693198801),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Keyword(null,"post-render-fn","post-render-fn",-99818496),new cljs.core.Keyword(null,"interactions","interactions",550841811),new cljs.core.Keyword(null,"data","data",-232669377))));
});
.register_app_state_cursor = (function register_app_state_cursor(cursor,value){if((cljs.core.get_in.call(null,cljs.core.deref.call(null,.app_state),cursor) == null))
{return cljs.core.swap_BANG_.call(null,.app_state,(function (app_value){return cljs.core.update_in.call(null,app_value,cursor,(function (old_value){return value;
}));
}));
} else
{return null;
}
});
.register_binding = (function register_binding(data_binding){return cljs.core.swap_BANG_.call(null,.registered_bindings,cljs.core.conj,data_binding);
});
.render_bindings = (function render_bindings(data_bindings){var seq__9436 = cljs.core.seq.call(null,data_bindings);var chunk__9437 = null;var count__9438 = (0);var i__9439 = (0);while(true){
if((i__9439 < count__9438))
{var data_binding = cljs.core._nth.call(null,chunk__9437,i__9439);.render.call(null,data_binding);
{
var G__9440 = seq__9436;
var G__9441 = chunk__9437;
var G__9442 = count__9438;
var G__9443 = (i__9439 + (1));
seq__9436 = G__9440;
chunk__9437 = G__9441;
count__9438 = G__9442;
i__9439 = G__9443;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9436);if(temp__4126__auto__)
{var seq__9436__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9436__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__9436__$1);{
var G__9444 = cljs.core.chunk_rest.call(null,seq__9436__$1);
var G__9445 = c__4299__auto__;
var G__9446 = cljs.core.count.call(null,c__4299__auto__);
var G__9447 = (0);
seq__9436 = G__9444;
chunk__9437 = G__9445;
count__9438 = G__9446;
i__9439 = G__9447;
continue;
}
} else
{var data_binding = cljs.core.first.call(null,seq__9436__$1);.render.call(null,data_binding);
{
var G__9448 = cljs.core.next.call(null,seq__9436__$1);
var G__9449 = null;
var G__9450 = (0);
var G__9451 = (0);
seq__9436 = G__9448;
chunk__9437 = G__9449;
count__9438 = G__9450;
i__9439 = G__9451;
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
.register_component = (function register_component(component){return cljs.core.swap_BANG_.call(null,.registered_components,cljs.core.conj,component);
});
.render_components = (function render_components(components__$1){var seq__9456 = cljs.core.seq.call(null,components__$1);var chunk__9457 = null;var count__9458 = (0);var i__9459 = (0);while(true){
if((i__9459 < count__9458))
{var component = cljs.core._nth.call(null,chunk__9457,i__9459);.render.call(null,component);
{
var G__9460 = seq__9456;
var G__9461 = chunk__9457;
var G__9462 = count__9458;
var G__9463 = (i__9459 + (1));
seq__9456 = G__9460;
chunk__9457 = G__9461;
count__9458 = G__9462;
i__9459 = G__9463;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9456);if(temp__4126__auto__)
{var seq__9456__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9456__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__9456__$1);{
var G__9464 = cljs.core.chunk_rest.call(null,seq__9456__$1);
var G__9465 = c__4299__auto__;
var G__9466 = cljs.core.count.call(null,c__4299__auto__);
var G__9467 = (0);
seq__9456 = G__9464;
chunk__9457 = G__9465;
count__9458 = G__9466;
i__9459 = G__9467;
continue;
}
} else
{var component = cljs.core.first.call(null,seq__9456__$1);.render.call(null,component);
{
var G__9468 = cljs.core.next.call(null,seq__9456__$1);
var G__9469 = null;
var G__9470 = (0);
var G__9471 = (0);
seq__9456 = G__9468;
chunk__9457 = G__9469;
count__9458 = G__9470;
i__9459 = G__9471;
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
.update_cursor = (function update_cursor(cursor,update_fn){return cljs.core.swap_BANG_.call(null,.app_state,(function (state){return cljs.core.update_in.call(null,state,cursor,update_fn);
}));
});
.update_cursor_async = (function update_cursor_async(cursor,resource_url){return .go.call(null,(function (){var response = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(._LT__BANG_.call(null,http.get.call(null,resource_url,cljs.core.PersistentArrayMap.EMPTY)));return cljs.core.swap_BANG_.call(null,.app_state,((function (response){
return (function (state){return cljs.core.update_in.call(null,state,cursor,((function (response){
return (function (old_value){return response;
});})(response))
);
});})(response))
);
})());
});
.update_app_state = (function update_app_state(update_fn){return cljs.core.reset_BANG_.call(null,.app_state,update_fn.call(null));
});
.create_component = (function create_component(source_map){var component = .map__GT_Component.call(null,source_map);.register_app_state_cursor.call(null,new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648).cljs$core$IFn$_invoke$arity$1(source_map),cljs.core.PersistentArrayMap.EMPTY);
.register_component.call(null,component);
.bind_events.call(null,component);
.render.call(null,component);
.load_data.call(null,component);
return component;
});
.create_data_binding = (function (){var method_table__4409__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4410__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4411__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4412__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4413__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("create-data-binding",((function (method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__,hierarchy__4413__auto__){
return (function (app_cursor,dom_cursor,render_fn){return cljs.core._EQ_.call(null,cljs.core.type.call(null,app_cursor),cljs.core.List);
});})(method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__,hierarchy__4413__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4413__auto__,method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__));
})();
cljs.core._add_method.call(null,.create_data_binding,false,(function (app_cursor,dom_cursor,render_fn){var data_binding = .map__GT_DataBinding.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),app_cursor,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),dom_cursor,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),render_fn], null));.register_app_state_cursor.call(null,app_cursor,"");
.register_binding.call(null,data_binding);
.render.call(null,data_binding);
return data_binding;
}));
cljs.core._add_method.call(null,.create_data_binding,true,(function (app_cursor,dom_cursor,render_fn){var data_binding = .map__GT_DataBinding.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),app_cursor,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),dom_cursor,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),render_fn], null));var seq__9472_9476 = cljs.core.seq.call(null,app_cursor);var chunk__9473_9477 = null;var count__9474_9478 = (0);var i__9475_9479 = (0);while(true){
if((i__9475_9479 < count__9474_9478))
{var cursor_9480 = cljs.core._nth.call(null,chunk__9473_9477,i__9475_9479);.register_app_state_cursor.call(null,cursor_9480,"");
{
var G__9481 = seq__9472_9476;
var G__9482 = chunk__9473_9477;
var G__9483 = count__9474_9478;
var G__9484 = (i__9475_9479 + (1));
seq__9472_9476 = G__9481;
chunk__9473_9477 = G__9482;
count__9474_9478 = G__9483;
i__9475_9479 = G__9484;
continue;
}
} else
{var temp__4126__auto___9485 = cljs.core.seq.call(null,seq__9472_9476);if(temp__4126__auto___9485)
{var seq__9472_9486__$1 = temp__4126__auto___9485;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9472_9486__$1))
{var c__4299__auto___9487 = cljs.core.chunk_first.call(null,seq__9472_9486__$1);{
var G__9488 = cljs.core.chunk_rest.call(null,seq__9472_9486__$1);
var G__9489 = c__4299__auto___9487;
var G__9490 = cljs.core.count.call(null,c__4299__auto___9487);
var G__9491 = (0);
seq__9472_9476 = G__9488;
chunk__9473_9477 = G__9489;
count__9474_9478 = G__9490;
i__9475_9479 = G__9491;
continue;
}
} else
{var cursor_9492 = cljs.core.first.call(null,seq__9472_9486__$1);.register_app_state_cursor.call(null,cursor_9492,"");
{
var G__9493 = cljs.core.next.call(null,seq__9472_9486__$1);
var G__9494 = null;
var G__9495 = (0);
var G__9496 = (0);
seq__9472_9476 = G__9493;
chunk__9473_9477 = G__9494;
count__9474_9478 = G__9495;
i__9475_9479 = G__9496;
continue;
}
}
} else
{}
}
break;
}
.register_binding.call(null,data_binding);
.render.call(null,data_binding);
return data_binding;
}));
.data_bind = (function (){var method_table__4409__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4410__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4411__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4412__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4413__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("data-bind",((function (method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__,hierarchy__4413__auto__){
return (function (app_cursor,dom_cursors,render_fn){return cljs.core._EQ_.call(null,cljs.core.type.call(null,dom_cursors),cljs.core.List);
});})(method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__,hierarchy__4413__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4413__auto__,method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__));
})();
cljs.core._add_method.call(null,.data_bind,false,(function (app_cursor,dom_cursor,render_fn){return .create_data_binding.call(null,app_cursor,dom_cursor,render_fn);
}));
cljs.core._add_method.call(null,.data_bind,true,(function (app_cursor,dom_cursors,render_fn){var seq__9497 = cljs.core.seq.call(null,dom_cursors);var chunk__9498 = null;var count__9499 = (0);var i__9500 = (0);while(true){
if((i__9500 < count__9499))
{var dom_cursor = cljs.core._nth.call(null,chunk__9498,i__9500);.create_data_binding.call(null,app_cursor,dom_cursor,render_fn);
{
var G__9501 = seq__9497;
var G__9502 = chunk__9498;
var G__9503 = count__9499;
var G__9504 = (i__9500 + (1));
seq__9497 = G__9501;
chunk__9498 = G__9502;
count__9499 = G__9503;
i__9500 = G__9504;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9497);if(temp__4126__auto__)
{var seq__9497__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9497__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__9497__$1);{
var G__9505 = cljs.core.chunk_rest.call(null,seq__9497__$1);
var G__9506 = c__4299__auto__;
var G__9507 = cljs.core.count.call(null,c__4299__auto__);
var G__9508 = (0);
seq__9497 = G__9505;
chunk__9498 = G__9506;
count__9499 = G__9507;
i__9500 = G__9508;
continue;
}
} else
{var dom_cursor = cljs.core.first.call(null,seq__9497__$1);.create_data_binding.call(null,app_cursor,dom_cursor,render_fn);
{
var G__9509 = cljs.core.next.call(null,seq__9497__$1);
var G__9510 = null;
var G__9511 = (0);
var G__9512 = (0);
seq__9497 = G__9509;
chunk__9498 = G__9510;
count__9499 = G__9511;
i__9500 = G__9512;
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
.bind_event = (function bind_event(dom_cursor,event_type,action){return document.querySelector(dom_cursor).addEventListener(event_type,action);
});
.two_way_bind = (function two_way_bind(app_cursor,dom_cursor){.data_bind.call(null,app_cursor,dom_cursor,(function (data){return data;
}));
return .bind_event.call(null,dom_cursor,"input",(function (event){return .update_cursor.call(null,app_cursor,(function (old_value){return event.target.value;
}));
}));
});
cljs.core.add_watch.call(null,.app_state,new cljs.core.Keyword(null,"render-bindings","render-bindings",2043700547),(function (k,r,old_state,new_state){if(cljs.core.not_EQ_.call(null,old_state,new_state))
{return .render_bindings.call(null,cljs.core.deref.call(null,.registered_bindings));
} else
{return null;
}
}));
cljs.core.add_watch.call(null,.app_state,new cljs.core.Keyword(null,"render-components","render-components",996968968),(function (k,r,old_state,new_state){return .render_components.call(null,cljs.core.deref.call(null,.registered_components));
}));
dommy.prepend_BANG_.call(null,document.querySelector("body"),.node.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.antares.app-state","div.antares.app-state",1255382060),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.antares.app-state-inspector","textarea.antares.app-state-inspector",2012448389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"80px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),".8rem"], null)], null)], null)], null)));
.data_bind.call(null,cljs.core.PersistentVector.EMPTY,".antares.app-state-inspector",(function (data){return cljs.core.pr_str.call(null,data);
}));
.bind_event.call(null,".antares.app-state-inspector","input",(function (event){return .update_app_state.call(null,(function (){return .read_data.call(null,event.target.value);
}));
}));

//# sourceMappingURL=.js.map