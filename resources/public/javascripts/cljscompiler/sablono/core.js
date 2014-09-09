// Compiled by ClojureScript 0.0-2311
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__12242__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__12241 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__12241,(0),null);var body = cljs.core.nthnext.call(null,vec__12241,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__12242 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12242__delegate.call(this,args);};
G__12242.cljs$lang$maxFixedArity = 0;
G__12242.cljs$lang$applyTo = (function (arglist__12243){
var args = cljs.core.seq(arglist__12243);
return G__12242__delegate(args);
});
G__12242.cljs$core$IFn$_invoke$arity$variadic = G__12242__delegate;
return G__12242;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4278__auto__ = (function iter__12248(s__12249){return (new cljs.core.LazySeq(null,(function (){var s__12249__$1 = s__12249;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12249__$1);if(temp__4126__auto__)
{var s__12249__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12249__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__12249__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__12251 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__12250 = (0);while(true){
if((i__12250 < size__4277__auto__))
{var args = cljs.core._nth.call(null,c__4276__auto__,i__12250);cljs.core.chunk_append.call(null,b__12251,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__12252 = (i__12250 + (1));
i__12250 = G__12252;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12251),iter__12248.call(null,cljs.core.chunk_rest.call(null,s__12249__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12251),null);
}
} else
{var args = cljs.core.first.call(null,s__12249__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__12248.call(null,cljs.core.rest.call(null,s__12249__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4278__auto__ = (function iter__12257(s__12258){return (new cljs.core.LazySeq(null,(function (){var s__12258__$1 = s__12258;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12258__$1);if(temp__4126__auto__)
{var s__12258__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12258__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__12258__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__12260 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__12259 = (0);while(true){
if((i__12259 < size__4277__auto__))
{var style = cljs.core._nth.call(null,c__4276__auto__,i__12259);cljs.core.chunk_append.call(null,b__12260,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__12261 = (i__12259 + (1));
i__12259 = G__12261;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12260),iter__12257.call(null,cljs.core.chunk_rest.call(null,s__12258__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12260),null);
}
} else
{var style = cljs.core.first.call(null,s__12258__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__12257.call(null,cljs.core.rest.call(null,s__12258__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__12262){
var styles = cljs.core.seq(arglist__12262);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to12263 = (function() { 
var link_to12263__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to12263 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to12263__delegate.call(this,url,content);};
link_to12263.cljs$lang$maxFixedArity = 1;
link_to12263.cljs$lang$applyTo = (function (arglist__12264){
var url = cljs.core.first(arglist__12264);
var content = cljs.core.rest(arglist__12264);
return link_to12263__delegate(url,content);
});
link_to12263.cljs$core$IFn$_invoke$arity$variadic = link_to12263__delegate;
return link_to12263;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to12263);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to12265 = (function() { 
var mail_to12265__delegate = function (e_mail,p__12266){var vec__12268 = p__12266;var content = cljs.core.nth.call(null,vec__12268,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3553__auto__ = content;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to12265 = function (e_mail,var_args){
var p__12266 = null;if (arguments.length > 1) {
  p__12266 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to12265__delegate.call(this,e_mail,p__12266);};
mail_to12265.cljs$lang$maxFixedArity = 1;
mail_to12265.cljs$lang$applyTo = (function (arglist__12269){
var e_mail = cljs.core.first(arglist__12269);
var p__12266 = cljs.core.rest(arglist__12269);
return mail_to12265__delegate(e_mail,p__12266);
});
mail_to12265.cljs$core$IFn$_invoke$arity$variadic = mail_to12265__delegate;
return mail_to12265;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to12265);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list12270 = (function unordered_list12270(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4278__auto__ = (function iter__12275(s__12276){return (new cljs.core.LazySeq(null,(function (){var s__12276__$1 = s__12276;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12276__$1);if(temp__4126__auto__)
{var s__12276__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12276__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__12276__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__12278 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__12277 = (0);while(true){
if((i__12277 < size__4277__auto__))
{var x = cljs.core._nth.call(null,c__4276__auto__,i__12277);cljs.core.chunk_append.call(null,b__12278,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__12279 = (i__12277 + (1));
i__12277 = G__12279;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12278),iter__12275.call(null,cljs.core.chunk_rest.call(null,s__12276__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12278),null);
}
} else
{var x = cljs.core.first.call(null,s__12276__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__12275.call(null,cljs.core.rest.call(null,s__12276__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list12270);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list12280 = (function ordered_list12280(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4278__auto__ = (function iter__12285(s__12286){return (new cljs.core.LazySeq(null,(function (){var s__12286__$1 = s__12286;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12286__$1);if(temp__4126__auto__)
{var s__12286__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12286__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__12286__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__12288 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__12287 = (0);while(true){
if((i__12287 < size__4277__auto__))
{var x = cljs.core._nth.call(null,c__4276__auto__,i__12287);cljs.core.chunk_append.call(null,b__12288,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__12289 = (i__12287 + (1));
i__12287 = G__12289;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12288),iter__12285.call(null,cljs.core.chunk_rest.call(null,s__12286__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12288),null);
}
} else
{var x = cljs.core.first.call(null,s__12286__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__12285.call(null,cljs.core.rest.call(null,s__12286__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list12280);
/**
* Create an image element.
*/
sablono.core.image12290 = (function() {
var image12290 = null;
var image12290__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image12290__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image12290 = function(src,alt){
switch(arguments.length){
case 1:
return image12290__1.call(this,src);
case 2:
return image12290__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image12290.cljs$core$IFn$_invoke$arity$1 = image12290__1;
image12290.cljs$core$IFn$_invoke$arity$2 = image12290__2;
return image12290;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image12290);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__12291_SHARP_,p2__12292_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__12291_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__12292_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__12293_SHARP_,p2__12294_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__12293_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__12294_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field12295 = (function() {
var color_field12295 = null;
var color_field12295__1 = (function (name__11160__auto__){return color_field12295.call(null,name__11160__auto__,null);
});
var color_field12295__2 = (function (name__11160__auto__,value__11161__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__11160__auto__,value__11161__auto__);
});
color_field12295 = function(name__11160__auto__,value__11161__auto__){
switch(arguments.length){
case 1:
return color_field12295__1.call(this,name__11160__auto__);
case 2:
return color_field12295__2.call(this,name__11160__auto__,value__11161__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field12295.cljs$core$IFn$_invoke$arity$1 = color_field12295__1;
color_field12295.cljs$core$IFn$_invoke$arity$2 = color_field12295__2;
return color_field12295;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field12295);
/**
* Creates a date input field.
*/
sablono.core.date_field12296 = (function() {
var date_field12296 = null;
var date_field12296__1 = (function (name__11160__auto__){return date_field12296.call(null,name__11160__auto__,null);
});
var date_field12296__2 = (function (name__11160__auto__,value__11161__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__11160__auto__,value__11161__auto__);
});
date_field12296 = function(name__11160__auto__,value__11161__auto__){
switch(arguments.length){
case 1:
return date_field12296__1.call(this,name__11160__auto__);
case 2:
return date_field12296__2.call(this,name__11160__auto__,value__11161__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field12296.cljs$core$IFn$_invoke$arity$1 = date_field12296__1;
date_field12296.cljs$core$IFn$_invoke$arity$2 = date_field12296__2;
return date_field12296;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field12296);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field12297 = (function() {
var datetime_field12297 = null;
var datetime_field12297__1 = (function (name__11160__auto__){return datetime_field12297.call(null,name__11160__auto__,null);
});
var datetime_field12297__2 = (function (name__11160__auto__,value__11161__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__11160__auto__,value__11161__auto__);
});
datetime_field12297 = function(name__11160__auto__,value__11161__auto__){
switch(arguments.length){
case 1:
return datetime_field12297__1.call(this,name__11160__auto__);
case 2:
return datetime_field12297__2.call(this,name__11160__auto__,value__11161__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field12297.cljs$core$IFn$_invoke$arity$1 = datetime_field12297__1;
datetime_field12297.cljs$core$IFn$_invoke$arity$2 = datetime_field12297__2;
return datetime_field12297;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field12297);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field12298 = (function() {
var datetime_local_field12298 = null;
var datetime_local_field12298__1 = (function (name__11160__auto__){return datetime_local_field12298.call(null,name__11160__auto__,null);
});
var datetime_local_field12298__2 = (function (name__11160__auto__,value__11161__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__11160__auto__,value__11161__auto__);
});
datetime_local_field12298 = function(name__11160__auto__,value__11161__auto__){
switch(arguments.length){
case 1:
return datetime_local_field12298__1.call(this,name__11160__auto__);
case 2:
return datetime_local_field12298__2.call(this,name__11160__auto__,value__11161__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field12298.cljs$core$IFn$_invoke$arity$1 = datetime_local_field12298__1;
datetime_local_field12298.cljs$core$IFn$_invoke$arity$2 = datetime_local_field12298__2;
return datetime_local_field12298;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field12298);
/**
* Creates a email input field.
*/
sablono.core.email_field12299 = (function() {
var email_field12299 = null;
var email_field12299__1 = (function (name__11160__auto__){return email_field12299.call(null,name__11160__auto__,null);
});
var email_field12299__2 = (function (name__11160__auto__,value__11161__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__11160__auto__,value__11161__auto__);
});
email_field12299 = function(name__11160__auto__,value__11161__auto__){
switch(arguments.length){
case 1:
return email_field12299__1.call(this,name__11160__auto__);
case 2:
return email_field12299__2.call(this,name__11160__auto__,value__11161__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field12299.cljs$core$IFn$_invoke$arity$1 = email_field12299__1;
email_field12299.cljs$core$IFn$_invoke$arity$2 = email_field12299__2;
return email_field12299;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field12299);
/**
* Creates a file input field.
*/
sablono.core.file_field12300 = (function() {
var file_field12300 = null;
var file_field12300__1 = (function (name__11160__auto__){return file_field12300.call(null,name__11160__auto__,null);
});
var file_field12300__2 = (function (name__11160__auto__,value__11161__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__11160__auto__,value__11161__auto__);
});
file_field12300 = function(name__11160__auto__,value__11161__auto__){
switch(arguments.length){
case 1:
return file_field12300__1.call(this,name__11160__auto__);
case 2:
return file_field12300__2.call(this,name__11160__auto__,value__11161__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field12300.cljs$core$IFn$_invoke$arity$1 = file_field12300__1;
file_field12300.cljs$core$IFn$_invoke$arity$2 = file_field12300__2;
return file_field12300;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field12300);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field12301 = (function() {
var hidden_field12301 = null;
var hidden_field12301__1 = (function (name__11160__auto__){return hidden_field12301.call(null,name__11160__auto__,null);
});
var hidden_field12301__2 = (function (name__11160__auto__,value__11161__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__11160__auto__,value__11161__auto__);
});
hidden_field12301 = function(name__11160__auto__,value__11161__auto__){
switch(arguments.length){
case 1:
return hidden_field12301__1.call(this,name__11160__auto__);
case 2:
return hidden_field12301__2.call(this,name__11160__auto__,value__11161__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field12301.cljs$core$IFn$_invoke$arity$1 = hidden_field12301__1;
hidden_field12301.cljs$core$IFn$_invoke$arity$2 = hidden_field12301__2;
return hidden_field12301;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field12301);
/**
* Creates a month input field.
*/
sablono.core.month_field12302 = (function() {
var month_field12302 = null;
var month_field12302__1 = (function (name__11160__auto__){return month_field12302.call(null,name__11160__auto__,null);
});
var month_field12302__2 = (function (name__11160__auto__,value__11161__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__11160__auto__,value__11161__auto__);
});
month_field12302 = function(name__11160__auto__,value__11161__auto__){
switch(arguments.length){
case 1:
return month_field12302__1.call(this,name__11160__auto__);
case 2:
return month_field12302__2.call(this,name__11160__auto__,value__11161__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field12302.cljs$core$IFn$_invoke$arity$1 = month_field12302__1;
month_field12302.cljs$core$IFn$_invoke$arity$2 = month_field12302__2;
return month_field12302;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field12302);
/**
* Creates a number input field.
*/
sablono.core.number_field12303 = (function() {
var number_field12303 = null;
var number_field12303__1 = (function (name__11160__auto__){return number_field12303.call(null,name__11160__auto__,null);
});
var number_field12303__2 = (function (name__11160__auto__,value__11161__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__11160__auto__,value__11161__auto__);
});
number_field12303 = function(name__11160__auto__,value__11161__auto__){
switch(arguments.length){
case 1:
return number_field12303__1.call(this,name__11160__auto__);
case 2:
return number_field12303__2.call(this,name__11160__auto__,value__11161__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field12303.cljs$core$IFn$_invoke$arity$1 = number_field12303__1;
number_field12303.cljs$core$IFn$_invoke$arity$2 = number_field12303__2;
return number_field12303;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field12303);
/**
* Creates a password input field.
*/
sablono.core.password_field12304 = (function() {
var password_field12304 = null;
var password_field12304__1 = (function (name__11160__auto__){return password_field12304.call(null,name__11160__auto__,null);
});
var password_field12304__2 = (function (name__11160__auto__,value__11161__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__11160__auto__,value__11161__auto__);
});
password_field12304 = function(name__11160__auto__,value__11161__auto__){
switch(arguments.length){
case 1:
return password_field12304__1.call(this,name__11160__auto__);
case 2:
return password_field12304__2.call(this,name__11160__auto__,value__11161__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field12304.cljs$core$IFn$_invoke$arity$1 = password_field12304__1;
password_field12304.cljs$core$IFn$_invoke$arity$2 = password_field12304__2;
return password_field12304;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field12304);
/**
* Creates a range input field.
*/
sablono.core.range_field12305 = (function() {
var range_field12305 = null;
var range_field12305__1 = (function (name__11160__auto__){return range_field12305.call(null,name__11160__auto__,null);
});
var range_field12305__2 = (function (name__11160__auto__,value__11161__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__11160__auto__,value__11161__auto__);
});
range_field12305 = function(name__11160__auto__,value__11161__auto__){
switch(arguments.length){
case 1:
return range_field12305__1.call(this,name__11160__auto__);
case 2:
return range_field12305__2.call(this,name__11160__auto__,value__11161__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field12305.cljs$core$IFn$_invoke$arity$1 = range_field12305__1;
range_field12305.cljs$core$IFn$_invoke$arity$2 = range_field12305__2;
return range_field12305;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field12305);
/**
* Creates a search input field.
*/
sablono.core.search_field12306 = (function() {
var search_field12306 = null;
var search_field12306__1 = (function (name__11160__auto__){return search_field12306.call(null,name__11160__auto__,null);
});
var search_field12306__2 = (function (name__11160__auto__,value__11161__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__11160__auto__,value__11161__auto__);
});
search_field12306 = function(name__11160__auto__,value__11161__auto__){
switch(arguments.length){
case 1:
return search_field12306__1.call(this,name__11160__auto__);
case 2:
return search_field12306__2.call(this,name__11160__auto__,value__11161__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field12306.cljs$core$IFn$_invoke$arity$1 = search_field12306__1;
search_field12306.cljs$core$IFn$_invoke$arity$2 = search_field12306__2;
return search_field12306;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field12306);
/**
* Creates a tel input field.
*/
sablono.core.tel_field12307 = (function() {
var tel_field12307 = null;
var tel_field12307__1 = (function (name__11160__auto__){return tel_field12307.call(null,name__11160__auto__,null);
});
var tel_field12307__2 = (function (name__11160__auto__,value__11161__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__11160__auto__,value__11161__auto__);
});
tel_field12307 = function(name__11160__auto__,value__11161__auto__){
switch(arguments.length){
case 1:
return tel_field12307__1.call(this,name__11160__auto__);
case 2:
return tel_field12307__2.call(this,name__11160__auto__,value__11161__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field12307.cljs$core$IFn$_invoke$arity$1 = tel_field12307__1;
tel_field12307.cljs$core$IFn$_invoke$arity$2 = tel_field12307__2;
return tel_field12307;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field12307);
/**
* Creates a text input field.
*/
sablono.core.text_field12308 = (function() {
var text_field12308 = null;
var text_field12308__1 = (function (name__11160__auto__){return text_field12308.call(null,name__11160__auto__,null);
});
var text_field12308__2 = (function (name__11160__auto__,value__11161__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__11160__auto__,value__11161__auto__);
});
text_field12308 = function(name__11160__auto__,value__11161__auto__){
switch(arguments.length){
case 1:
return text_field12308__1.call(this,name__11160__auto__);
case 2:
return text_field12308__2.call(this,name__11160__auto__,value__11161__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field12308.cljs$core$IFn$_invoke$arity$1 = text_field12308__1;
text_field12308.cljs$core$IFn$_invoke$arity$2 = text_field12308__2;
return text_field12308;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field12308);
/**
* Creates a time input field.
*/
sablono.core.time_field12309 = (function() {
var time_field12309 = null;
var time_field12309__1 = (function (name__11160__auto__){return time_field12309.call(null,name__11160__auto__,null);
});
var time_field12309__2 = (function (name__11160__auto__,value__11161__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__11160__auto__,value__11161__auto__);
});
time_field12309 = function(name__11160__auto__,value__11161__auto__){
switch(arguments.length){
case 1:
return time_field12309__1.call(this,name__11160__auto__);
case 2:
return time_field12309__2.call(this,name__11160__auto__,value__11161__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field12309.cljs$core$IFn$_invoke$arity$1 = time_field12309__1;
time_field12309.cljs$core$IFn$_invoke$arity$2 = time_field12309__2;
return time_field12309;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field12309);
/**
* Creates a url input field.
*/
sablono.core.url_field12310 = (function() {
var url_field12310 = null;
var url_field12310__1 = (function (name__11160__auto__){return url_field12310.call(null,name__11160__auto__,null);
});
var url_field12310__2 = (function (name__11160__auto__,value__11161__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__11160__auto__,value__11161__auto__);
});
url_field12310 = function(name__11160__auto__,value__11161__auto__){
switch(arguments.length){
case 1:
return url_field12310__1.call(this,name__11160__auto__);
case 2:
return url_field12310__2.call(this,name__11160__auto__,value__11161__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field12310.cljs$core$IFn$_invoke$arity$1 = url_field12310__1;
url_field12310.cljs$core$IFn$_invoke$arity$2 = url_field12310__2;
return url_field12310;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field12310);
/**
* Creates a week input field.
*/
sablono.core.week_field12311 = (function() {
var week_field12311 = null;
var week_field12311__1 = (function (name__11160__auto__){return week_field12311.call(null,name__11160__auto__,null);
});
var week_field12311__2 = (function (name__11160__auto__,value__11161__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__11160__auto__,value__11161__auto__);
});
week_field12311 = function(name__11160__auto__,value__11161__auto__){
switch(arguments.length){
case 1:
return week_field12311__1.call(this,name__11160__auto__);
case 2:
return week_field12311__2.call(this,name__11160__auto__,value__11161__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field12311.cljs$core$IFn$_invoke$arity$1 = week_field12311__1;
week_field12311.cljs$core$IFn$_invoke$arity$2 = week_field12311__2;
return week_field12311;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field12311);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box12312 = (function() {
var check_box12312 = null;
var check_box12312__1 = (function (name){return check_box12312.call(null,name,null);
});
var check_box12312__2 = (function (name,checked_QMARK_){return check_box12312.call(null,name,checked_QMARK_,"true");
});
var check_box12312__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box12312 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box12312__1.call(this,name);
case 2:
return check_box12312__2.call(this,name,checked_QMARK_);
case 3:
return check_box12312__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box12312.cljs$core$IFn$_invoke$arity$1 = check_box12312__1;
check_box12312.cljs$core$IFn$_invoke$arity$2 = check_box12312__2;
check_box12312.cljs$core$IFn$_invoke$arity$3 = check_box12312__3;
return check_box12312;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box12312);
/**
* Creates a radio button.
*/
sablono.core.radio_button12313 = (function() {
var radio_button12313 = null;
var radio_button12313__1 = (function (group){return radio_button12313.call(null,group,null);
});
var radio_button12313__2 = (function (group,checked_QMARK_){return radio_button12313.call(null,group,checked_QMARK_,"true");
});
var radio_button12313__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button12313 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button12313__1.call(this,group);
case 2:
return radio_button12313__2.call(this,group,checked_QMARK_);
case 3:
return radio_button12313__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button12313.cljs$core$IFn$_invoke$arity$1 = radio_button12313__1;
radio_button12313.cljs$core$IFn$_invoke$arity$2 = radio_button12313__2;
radio_button12313.cljs$core$IFn$_invoke$arity$3 = radio_button12313__3;
return radio_button12313;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button12313);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options12314 = (function() {
var select_options12314 = null;
var select_options12314__1 = (function (coll){return select_options12314.call(null,coll,null);
});
var select_options12314__2 = (function (coll,selected){var iter__4278__auto__ = (function iter__12323(s__12324){return (new cljs.core.LazySeq(null,(function (){var s__12324__$1 = s__12324;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12324__$1);if(temp__4126__auto__)
{var s__12324__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12324__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__12324__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__12326 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__12325 = (0);while(true){
if((i__12325 < size__4277__auto__))
{var x = cljs.core._nth.call(null,c__4276__auto__,i__12325);cljs.core.chunk_append.call(null,b__12326,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__12329 = x;var text = cljs.core.nth.call(null,vec__12329,(0),null);var val = cljs.core.nth.call(null,vec__12329,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__12329,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options12314.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__12331 = (i__12325 + (1));
i__12325 = G__12331;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12326),iter__12323.call(null,cljs.core.chunk_rest.call(null,s__12324__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12326),null);
}
} else
{var x = cljs.core.first.call(null,s__12324__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__12330 = x;var text = cljs.core.nth.call(null,vec__12330,(0),null);var val = cljs.core.nth.call(null,vec__12330,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__12330,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options12314.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__12323.call(null,cljs.core.rest.call(null,s__12324__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,coll);
});
select_options12314 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options12314__1.call(this,coll);
case 2:
return select_options12314__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options12314.cljs$core$IFn$_invoke$arity$1 = select_options12314__1;
select_options12314.cljs$core$IFn$_invoke$arity$2 = select_options12314__2;
return select_options12314;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options12314);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down12332 = (function() {
var drop_down12332 = null;
var drop_down12332__2 = (function (name,options){return drop_down12332.call(null,name,options,null);
});
var drop_down12332__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down12332 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down12332__2.call(this,name,options);
case 3:
return drop_down12332__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down12332.cljs$core$IFn$_invoke$arity$2 = drop_down12332__2;
drop_down12332.cljs$core$IFn$_invoke$arity$3 = drop_down12332__3;
return drop_down12332;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down12332);
/**
* Creates a text area element.
*/
sablono.core.text_area12333 = (function() {
var text_area12333 = null;
var text_area12333__1 = (function (name){return text_area12333.call(null,name,null);
});
var text_area12333__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area12333 = function(name,value){
switch(arguments.length){
case 1:
return text_area12333__1.call(this,name);
case 2:
return text_area12333__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area12333.cljs$core$IFn$_invoke$arity$1 = text_area12333__1;
text_area12333.cljs$core$IFn$_invoke$arity$2 = text_area12333__2;
return text_area12333;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area12333);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label12334 = (function label12334(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label12334);
/**
* Creates a submit button.
*/
sablono.core.submit_button12335 = (function submit_button12335(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button12335);
/**
* Creates a form reset button.
*/
sablono.core.reset_button12336 = (function reset_button12336(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button12336);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to12337 = (function() { 
var form_to12337__delegate = function (p__12338,body){var vec__12340 = p__12338;var method = cljs.core.nth.call(null,vec__12340,(0),null);var action = cljs.core.nth.call(null,vec__12340,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to12337 = function (p__12338,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to12337__delegate.call(this,p__12338,body);};
form_to12337.cljs$lang$maxFixedArity = 1;
form_to12337.cljs$lang$applyTo = (function (arglist__12341){
var p__12338 = cljs.core.first(arglist__12341);
var body = cljs.core.rest(arglist__12341);
return form_to12337__delegate(p__12338,body);
});
form_to12337.cljs$core$IFn$_invoke$arity$variadic = form_to12337__delegate;
return form_to12337;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to12337);

//# sourceMappingURL=core.js.map