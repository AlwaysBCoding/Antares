// Compiled by ClojureScript 0.0-2277
goog.provide('garden.types');
goog.require('cljs.core');

/**
* @constructor
* @param {*} unit
* @param {*} magnitude
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
garden.types.CSSUnit = (function (unit,magnitude,__meta,__extmap){
this.unit = unit;
this.magnitude = magnitude;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7870__auto__,k__7871__auto__){var self__ = this;
var this__7870__auto____$1 = this;return cljs.core._lookup.call(null,this__7870__auto____$1,k__7871__auto__,null);
});
garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7872__auto__,k14354,else__7873__auto__){var self__ = this;
var this__7872__auto____$1 = this;var G__14356 = (((k14354 instanceof cljs.core.Keyword))?k14354.fqn:null);switch (G__14356) {
case "magnitude":
return self__.magnitude;

break;
case "unit":
return self__.unit;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14354,else__7873__auto__);

}
});
garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7884__auto__,writer__7885__auto__,opts__7886__auto__){var self__ = this;
var this__7884__auto____$1 = this;var pr_pair__7887__auto__ = ((function (this__7884__auto____$1){
return (function (keyval__7888__auto__){return cljs.core.pr_sequential_writer.call(null,writer__7885__auto__,cljs.core.pr_writer,""," ","",opts__7886__auto__,keyval__7888__auto__);
});})(this__7884__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__7885__auto__,pr_pair__7887__auto__,"#garden.types.CSSUnit{",", ","}",opts__7886__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});
garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7868__auto__){var self__ = this;
var this__7868__auto____$1 = this;return self__.__meta;
});
garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7864__auto__){var self__ = this;
var this__7864__auto____$1 = this;return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
});
garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7874__auto__){var self__ = this;
var this__7874__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7865__auto__){var self__ = this;
var this__7865__auto____$1 = this;var h__7695__auto__ = self__.__hash;if(!((h__7695__auto__ == null)))
{return h__7695__auto__;
} else
{var h__7695__auto____$1 = cljs.core.hash_imap.call(null,this__7865__auto____$1);self__.__hash = h__7695__auto____$1;
return h__7695__auto____$1;
}
});
garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7866__auto__,other__7867__auto__){var self__ = this;
var this__7866__auto____$1 = this;if(cljs.core.truth_((function (){var and__7272__auto__ = other__7867__auto__;if(cljs.core.truth_(and__7272__auto__))
{return ((this__7866__auto____$1.constructor === other__7867__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__7866__auto____$1,other__7867__auto__));
} else
{return and__7272__auto__;
}
})()))
{return true;
} else
{return false;
}
});
garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7879__auto__,k__7880__auto__){var self__ = this;
var this__7879__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit","unit",375175175),null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),null], null), null),k__7880__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7879__auto____$1),self__.__meta),k__7880__auto__);
} else
{return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7880__auto__)),null));
}
});
garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7877__auto__,k__7878__auto__,G__14353){var self__ = this;
var this__7877__auto____$1 = this;var pred__14357 = cljs.core.keyword_identical_QMARK_;var expr__14358 = k__7878__auto__;if(cljs.core.truth_(pred__14357.call(null,new cljs.core.Keyword(null,"unit","unit",375175175),expr__14358)))
{return (new garden.types.CSSUnit(G__14353,self__.magnitude,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14357.call(null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),expr__14358)))
{return (new garden.types.CSSUnit(self__.unit,G__14353,self__.__meta,self__.__extmap,null));
} else
{return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7878__auto__,G__14353),null));
}
}
});
garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7882__auto__){var self__ = this;
var this__7882__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});
garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7869__auto__,G__14353){var self__ = this;
var this__7869__auto____$1 = this;return (new garden.types.CSSUnit(self__.unit,self__.magnitude,G__14353,self__.__extmap,self__.__hash));
});
garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7875__auto__,entry__7876__auto__){var self__ = this;
var this__7875__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__7876__auto__))
{return cljs.core._assoc.call(null,this__7875__auto____$1,cljs.core._nth.call(null,entry__7876__auto__,(0)),cljs.core._nth.call(null,entry__7876__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__7875__auto____$1,entry__7876__auto__);
}
});
garden.types.CSSUnit.cljs$lang$type = true;
garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__7904__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSUnit");
});
garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__7904__auto__,writer__7905__auto__){return cljs.core._write.call(null,writer__7905__auto__,"garden.types/CSSUnit");
});
garden.types.__GT_CSSUnit = (function __GT_CSSUnit(unit,magnitude){return (new garden.types.CSSUnit(unit,magnitude));
});
garden.types.map__GT_CSSUnit = (function map__GT_CSSUnit(G__14355){return (new garden.types.CSSUnit(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__14355),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(G__14355),null,cljs.core.dissoc.call(null,G__14355,new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222))));
});

/**
* @constructor
* @param {*} function$
* @param {*} args
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
garden.types.CSSFunction = (function (function$,args,__meta,__extmap){
this.function$ = function$;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7870__auto__,k__7871__auto__){var self__ = this;
var this__7870__auto____$1 = this;return cljs.core._lookup.call(null,this__7870__auto____$1,k__7871__auto__,null);
});
garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7872__auto__,k14362,else__7873__auto__){var self__ = this;
var this__7872__auto____$1 = this;var G__14364 = (((k14362 instanceof cljs.core.Keyword))?k14362.fqn:null);switch (G__14364) {
case "args":
return self__.args;

break;
case "function":
return self__.function$;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14362,else__7873__auto__);

}
});
garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7884__auto__,writer__7885__auto__,opts__7886__auto__){var self__ = this;
var this__7884__auto____$1 = this;var pr_pair__7887__auto__ = ((function (this__7884__auto____$1){
return (function (keyval__7888__auto__){return cljs.core.pr_sequential_writer.call(null,writer__7885__auto__,cljs.core.pr_writer,""," ","",opts__7886__auto__,keyval__7888__auto__);
});})(this__7884__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__7885__auto__,pr_pair__7887__auto__,"#garden.types.CSSFunction{",", ","}",opts__7886__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});
garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7868__auto__){var self__ = this;
var this__7868__auto____$1 = this;return self__.__meta;
});
garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7864__auto__){var self__ = this;
var this__7864__auto____$1 = this;return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});
garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7874__auto__){var self__ = this;
var this__7874__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7865__auto__){var self__ = this;
var this__7865__auto____$1 = this;var h__7695__auto__ = self__.__hash;if(!((h__7695__auto__ == null)))
{return h__7695__auto__;
} else
{var h__7695__auto____$1 = cljs.core.hash_imap.call(null,this__7865__auto____$1);self__.__hash = h__7695__auto____$1;
return h__7695__auto____$1;
}
});
garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7866__auto__,other__7867__auto__){var self__ = this;
var this__7866__auto____$1 = this;if(cljs.core.truth_((function (){var and__7272__auto__ = other__7867__auto__;if(cljs.core.truth_(and__7272__auto__))
{return ((this__7866__auto____$1.constructor === other__7867__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__7866__auto____$1,other__7867__auto__));
} else
{return and__7272__auto__;
}
})()))
{return true;
} else
{return false;
}
});
garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7879__auto__,k__7880__auto__){var self__ = this;
var this__7879__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"function","function",-2127255473),null], null), null),k__7880__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7879__auto____$1),self__.__meta),k__7880__auto__);
} else
{return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7880__auto__)),null));
}
});
garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7877__auto__,k__7878__auto__,G__14361){var self__ = this;
var this__7877__auto____$1 = this;var pred__14365 = cljs.core.keyword_identical_QMARK_;var expr__14366 = k__7878__auto__;if(cljs.core.truth_(pred__14365.call(null,new cljs.core.Keyword(null,"function","function",-2127255473),expr__14366)))
{return (new garden.types.CSSFunction(G__14361,self__.args,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14365.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__14366)))
{return (new garden.types.CSSFunction(self__.function$,G__14361,self__.__meta,self__.__extmap,null));
} else
{return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7878__auto__,G__14361),null));
}
}
});
garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7882__auto__){var self__ = this;
var this__7882__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});
garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7869__auto__,G__14361){var self__ = this;
var this__7869__auto____$1 = this;return (new garden.types.CSSFunction(self__.function$,self__.args,G__14361,self__.__extmap,self__.__hash));
});
garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7875__auto__,entry__7876__auto__){var self__ = this;
var this__7875__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__7876__auto__))
{return cljs.core._assoc.call(null,this__7875__auto____$1,cljs.core._nth.call(null,entry__7876__auto__,(0)),cljs.core._nth.call(null,entry__7876__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__7875__auto____$1,entry__7876__auto__);
}
});
garden.types.CSSFunction.cljs$lang$type = true;
garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__7904__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSFunction");
});
garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__7904__auto__,writer__7905__auto__){return cljs.core._write.call(null,writer__7905__auto__,"garden.types/CSSFunction");
});
garden.types.__GT_CSSFunction = (function __GT_CSSFunction(function$,args){return (new garden.types.CSSFunction(function$,args));
});
garden.types.map__GT_CSSFunction = (function map__GT_CSSFunction(G__14363){return (new garden.types.CSSFunction(new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(G__14363),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__14363),null,cljs.core.dissoc.call(null,G__14363,new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"args","args",1315556576))));
});

/**
* @constructor
* @param {*} identifier
* @param {*} value
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
garden.types.CSSAtRule = (function (identifier,value,__meta,__extmap){
this.identifier = identifier;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7870__auto__,k__7871__auto__){var self__ = this;
var this__7870__auto____$1 = this;return cljs.core._lookup.call(null,this__7870__auto____$1,k__7871__auto__,null);
});
garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7872__auto__,k14370,else__7873__auto__){var self__ = this;
var this__7872__auto____$1 = this;var G__14372 = (((k14370 instanceof cljs.core.Keyword))?k14370.fqn:null);switch (G__14372) {
case "value":
return self__.value;

break;
case "identifier":
return self__.identifier;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14370,else__7873__auto__);

}
});
garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7884__auto__,writer__7885__auto__,opts__7886__auto__){var self__ = this;
var this__7884__auto____$1 = this;var pr_pair__7887__auto__ = ((function (this__7884__auto____$1){
return (function (keyval__7888__auto__){return cljs.core.pr_sequential_writer.call(null,writer__7885__auto__,cljs.core.pr_writer,""," ","",opts__7886__auto__,keyval__7888__auto__);
});})(this__7884__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__7885__auto__,pr_pair__7887__auto__,"#garden.types.CSSAtRule{",", ","}",opts__7886__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});
garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7868__auto__){var self__ = this;
var this__7868__auto____$1 = this;return self__.__meta;
});
garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7864__auto__){var self__ = this;
var this__7864__auto____$1 = this;return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});
garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7874__auto__){var self__ = this;
var this__7874__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7865__auto__){var self__ = this;
var this__7865__auto____$1 = this;var h__7695__auto__ = self__.__hash;if(!((h__7695__auto__ == null)))
{return h__7695__auto__;
} else
{var h__7695__auto____$1 = cljs.core.hash_imap.call(null,this__7865__auto____$1);self__.__hash = h__7695__auto____$1;
return h__7695__auto____$1;
}
});
garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7866__auto__,other__7867__auto__){var self__ = this;
var this__7866__auto____$1 = this;if(cljs.core.truth_((function (){var and__7272__auto__ = other__7867__auto__;if(cljs.core.truth_(and__7272__auto__))
{return ((this__7866__auto____$1.constructor === other__7867__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__7866__auto____$1,other__7867__auto__));
} else
{return and__7272__auto__;
}
})()))
{return true;
} else
{return false;
}
});
garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7879__auto__,k__7880__auto__){var self__ = this;
var this__7879__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),null], null), null),k__7880__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7879__auto____$1),self__.__meta),k__7880__auto__);
} else
{return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7880__auto__)),null));
}
});
garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7877__auto__,k__7878__auto__,G__14369){var self__ = this;
var this__7877__auto____$1 = this;var pred__14373 = cljs.core.keyword_identical_QMARK_;var expr__14374 = k__7878__auto__;if(cljs.core.truth_(pred__14373.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),expr__14374)))
{return (new garden.types.CSSAtRule(G__14369,self__.value,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14373.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__14374)))
{return (new garden.types.CSSAtRule(self__.identifier,G__14369,self__.__meta,self__.__extmap,null));
} else
{return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7878__auto__,G__14369),null));
}
}
});
garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7882__auto__){var self__ = this;
var this__7882__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});
garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7869__auto__,G__14369){var self__ = this;
var this__7869__auto____$1 = this;return (new garden.types.CSSAtRule(self__.identifier,self__.value,G__14369,self__.__extmap,self__.__hash));
});
garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7875__auto__,entry__7876__auto__){var self__ = this;
var this__7875__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__7876__auto__))
{return cljs.core._assoc.call(null,this__7875__auto____$1,cljs.core._nth.call(null,entry__7876__auto__,(0)),cljs.core._nth.call(null,entry__7876__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__7875__auto____$1,entry__7876__auto__);
}
});
garden.types.CSSAtRule.cljs$lang$type = true;
garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__7904__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSAtRule");
});
garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__7904__auto__,writer__7905__auto__){return cljs.core._write.call(null,writer__7905__auto__,"garden.types/CSSAtRule");
});
garden.types.__GT_CSSAtRule = (function __GT_CSSAtRule(identifier,value){return (new garden.types.CSSAtRule(identifier,value));
});
garden.types.map__GT_CSSAtRule = (function map__GT_CSSAtRule(G__14371){return (new garden.types.CSSAtRule(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(G__14371),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__14371),null,cljs.core.dissoc.call(null,G__14371,new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217))));
});
