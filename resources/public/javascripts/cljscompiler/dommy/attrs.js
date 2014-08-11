// Compiled by ClojureScript 0.0-2277
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3531__auto__ = ((idx === (0))) || ((" " === class_name.charAt((idx - (1)))));if(and__3531__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__3531__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = (0);while(true){
var i = class_name.indexOf(class$,start_from);if((i >= (0)))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__37621 = (i + class$.length);
start_from = G__37621;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto__))
{var class_list = temp__4124__auto__;return class_list.contains(class$__$1);
} else
{var temp__4126__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4126__auto__))
{var class_name = temp__4126__auto__;var temp__4126__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4126__auto____$1))
{var i = temp__4126__auto____$1;return (i >= (0));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));if(cljs.core.seq.call(null,classes__$1))
{var temp__4124__auto___37646 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___37646))
{var class_list_37647 = temp__4124__auto___37646;var seq__37634_37648 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__37635_37649 = null;var count__37636_37650 = (0);var i__37637_37651 = (0);while(true){
if((i__37637_37651 < count__37636_37650))
{var class_37652 = cljs.core._nth.call(null,chunk__37635_37649,i__37637_37651);class_list_37647.add(class_37652);
{
var G__37653 = seq__37634_37648;
var G__37654 = chunk__37635_37649;
var G__37655 = count__37636_37650;
var G__37656 = (i__37637_37651 + (1));
seq__37634_37648 = G__37653;
chunk__37635_37649 = G__37654;
count__37636_37650 = G__37655;
i__37637_37651 = G__37656;
continue;
}
} else
{var temp__4126__auto___37657 = cljs.core.seq.call(null,seq__37634_37648);if(temp__4126__auto___37657)
{var seq__37634_37658__$1 = temp__4126__auto___37657;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37634_37658__$1))
{var c__4299__auto___37659 = cljs.core.chunk_first.call(null,seq__37634_37658__$1);{
var G__37660 = cljs.core.chunk_rest.call(null,seq__37634_37658__$1);
var G__37661 = c__4299__auto___37659;
var G__37662 = cljs.core.count.call(null,c__4299__auto___37659);
var G__37663 = (0);
seq__37634_37648 = G__37660;
chunk__37635_37649 = G__37661;
count__37636_37650 = G__37662;
i__37637_37651 = G__37663;
continue;
}
} else
{var class_37664 = cljs.core.first.call(null,seq__37634_37658__$1);class_list_37647.add(class_37664);
{
var G__37665 = cljs.core.next.call(null,seq__37634_37658__$1);
var G__37666 = null;
var G__37667 = (0);
var G__37668 = (0);
seq__37634_37648 = G__37665;
chunk__37635_37649 = G__37666;
count__37636_37650 = G__37667;
i__37637_37651 = G__37668;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_37669 = elem__$1.className;var seq__37638_37670 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__37639_37671 = null;var count__37640_37672 = (0);var i__37641_37673 = (0);while(true){
if((i__37641_37673 < count__37640_37672))
{var class_37674 = cljs.core._nth.call(null,chunk__37639_37671,i__37641_37673);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_37669,class_37674)))
{} else
{elem__$1.className = (((class_name_37669 === ""))?class_37674:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_37669)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_37674)));
}
{
var G__37675 = seq__37638_37670;
var G__37676 = chunk__37639_37671;
var G__37677 = count__37640_37672;
var G__37678 = (i__37641_37673 + (1));
seq__37638_37670 = G__37675;
chunk__37639_37671 = G__37676;
count__37640_37672 = G__37677;
i__37641_37673 = G__37678;
continue;
}
} else
{var temp__4126__auto___37679 = cljs.core.seq.call(null,seq__37638_37670);if(temp__4126__auto___37679)
{var seq__37638_37680__$1 = temp__4126__auto___37679;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37638_37680__$1))
{var c__4299__auto___37681 = cljs.core.chunk_first.call(null,seq__37638_37680__$1);{
var G__37682 = cljs.core.chunk_rest.call(null,seq__37638_37680__$1);
var G__37683 = c__4299__auto___37681;
var G__37684 = cljs.core.count.call(null,c__4299__auto___37681);
var G__37685 = (0);
seq__37638_37670 = G__37682;
chunk__37639_37671 = G__37683;
count__37640_37672 = G__37684;
i__37641_37673 = G__37685;
continue;
}
} else
{var class_37686 = cljs.core.first.call(null,seq__37638_37680__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_37669,class_37686)))
{} else
{elem__$1.className = (((class_name_37669 === ""))?class_37686:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_37669)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_37686)));
}
{
var G__37687 = cljs.core.next.call(null,seq__37638_37680__$1);
var G__37688 = null;
var G__37689 = (0);
var G__37690 = (0);
seq__37638_37670 = G__37687;
chunk__37639_37671 = G__37688;
count__37640_37672 = G__37689;
i__37641_37673 = G__37690;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__37691__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__37642_37692 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__37643_37693 = null;var count__37644_37694 = (0);var i__37645_37695 = (0);while(true){
if((i__37645_37695 < count__37644_37694))
{var c_37696 = cljs.core._nth.call(null,chunk__37643_37693,i__37645_37695);add_class_BANG_.call(null,elem__$1,c_37696);
{
var G__37697 = seq__37642_37692;
var G__37698 = chunk__37643_37693;
var G__37699 = count__37644_37694;
var G__37700 = (i__37645_37695 + (1));
seq__37642_37692 = G__37697;
chunk__37643_37693 = G__37698;
count__37644_37694 = G__37699;
i__37645_37695 = G__37700;
continue;
}
} else
{var temp__4126__auto___37701 = cljs.core.seq.call(null,seq__37642_37692);if(temp__4126__auto___37701)
{var seq__37642_37702__$1 = temp__4126__auto___37701;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37642_37702__$1))
{var c__4299__auto___37703 = cljs.core.chunk_first.call(null,seq__37642_37702__$1);{
var G__37704 = cljs.core.chunk_rest.call(null,seq__37642_37702__$1);
var G__37705 = c__4299__auto___37703;
var G__37706 = cljs.core.count.call(null,c__4299__auto___37703);
var G__37707 = (0);
seq__37642_37692 = G__37704;
chunk__37643_37693 = G__37705;
count__37644_37694 = G__37706;
i__37645_37695 = G__37707;
continue;
}
} else
{var c_37708 = cljs.core.first.call(null,seq__37642_37702__$1);add_class_BANG_.call(null,elem__$1,c_37708);
{
var G__37709 = cljs.core.next.call(null,seq__37642_37702__$1);
var G__37710 = null;
var G__37711 = (0);
var G__37712 = (0);
seq__37642_37692 = G__37709;
chunk__37643_37693 = G__37710;
count__37644_37694 = G__37711;
i__37645_37695 = G__37712;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__37691 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__37691__delegate.call(this,elem,classes,more_classes);};
G__37691.cljs$lang$maxFixedArity = 2;
G__37691.cljs$lang$applyTo = (function (arglist__37713){
var elem = cljs.core.first(arglist__37713);
arglist__37713 = cljs.core.next(arglist__37713);
var classes = cljs.core.first(arglist__37713);
var more_classes = cljs.core.rest(arglist__37713);
return G__37691__delegate(elem,classes,more_classes);
});
G__37691.cljs$core$IFn$_invoke$arity$variadic = G__37691__delegate;
return G__37691;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){var class_name = init_class_name;while(true){
var class_len = class_name.length;var temp__4124__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4124__auto__))
{var i = temp__4124__auto__;{
var G__37714 = (function (){var end = (i + class$.length);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((end < class_len))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substring((0),i))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substr((end + (1))))):class_name.substring((0),(i - (1))))));
})();
class_name = G__37714;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto___37723 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___37723))
{var class_list_37724 = temp__4124__auto___37723;class_list_37724.remove(class$__$1);
} else
{var class_name_37725 = elem__$1.className;var new_class_name_37726 = dommy.attrs.remove_class_str.call(null,class_name_37725,class$__$1);if((class_name_37725 === new_class_name_37726))
{} else
{elem__$1.className = new_class_name_37726;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__37727__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__37719 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__37720 = null;var count__37721 = (0);var i__37722 = (0);while(true){
if((i__37722 < count__37721))
{var c = cljs.core._nth.call(null,chunk__37720,i__37722);remove_class_BANG_.call(null,elem__$1,c);
{
var G__37728 = seq__37719;
var G__37729 = chunk__37720;
var G__37730 = count__37721;
var G__37731 = (i__37722 + (1));
seq__37719 = G__37728;
chunk__37720 = G__37729;
count__37721 = G__37730;
i__37722 = G__37731;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__37719);if(temp__4126__auto__)
{var seq__37719__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37719__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__37719__$1);{
var G__37732 = cljs.core.chunk_rest.call(null,seq__37719__$1);
var G__37733 = c__4299__auto__;
var G__37734 = cljs.core.count.call(null,c__4299__auto__);
var G__37735 = (0);
seq__37719 = G__37732;
chunk__37720 = G__37733;
count__37721 = G__37734;
i__37722 = G__37735;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__37719__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__37736 = cljs.core.next.call(null,seq__37719__$1);
var G__37737 = null;
var G__37738 = (0);
var G__37739 = (0);
seq__37719 = G__37736;
chunk__37720 = G__37737;
count__37721 = G__37738;
i__37722 = G__37739;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__37727 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__37727__delegate.call(this,elem,class$,classes);};
G__37727.cljs$lang$maxFixedArity = 2;
G__37727.cljs$lang$applyTo = (function (arglist__37740){
var elem = cljs.core.first(arglist__37740);
arglist__37740 = cljs.core.next(arglist__37740);
var class$ = cljs.core.first(arglist__37740);
var classes = cljs.core.rest(arglist__37740);
return G__37727__delegate(elem,class$,classes);
});
G__37727.cljs$core$IFn$_invoke$arity$variadic = G__37727__delegate;
return G__37727;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto___37741 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___37741))
{var class_list_37742 = temp__4124__auto___37741;class_list_37742.toggle(class$__$1);
} else
{toggle_class_BANG_.call(null,elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){if(typeof x === 'string')
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__37745){var vec__37746 = p__37745;var k = cljs.core.nth.call(null,vec__37746,(0),null);var v = cljs.core.nth.call(null,vec__37746,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,v))+";");
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__37753_37759 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__37754_37760 = null;var count__37755_37761 = (0);var i__37756_37762 = (0);while(true){
if((i__37756_37762 < count__37755_37761))
{var vec__37757_37763 = cljs.core._nth.call(null,chunk__37754_37760,i__37756_37762);var k_37764 = cljs.core.nth.call(null,vec__37757_37763,(0),null);var v_37765 = cljs.core.nth.call(null,vec__37757_37763,(1),null);(style[cljs.core.name.call(null,k_37764)] = v_37765);
{
var G__37766 = seq__37753_37759;
var G__37767 = chunk__37754_37760;
var G__37768 = count__37755_37761;
var G__37769 = (i__37756_37762 + (1));
seq__37753_37759 = G__37766;
chunk__37754_37760 = G__37767;
count__37755_37761 = G__37768;
i__37756_37762 = G__37769;
continue;
}
} else
{var temp__4126__auto___37770 = cljs.core.seq.call(null,seq__37753_37759);if(temp__4126__auto___37770)
{var seq__37753_37771__$1 = temp__4126__auto___37770;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37753_37771__$1))
{var c__4299__auto___37772 = cljs.core.chunk_first.call(null,seq__37753_37771__$1);{
var G__37773 = cljs.core.chunk_rest.call(null,seq__37753_37771__$1);
var G__37774 = c__4299__auto___37772;
var G__37775 = cljs.core.count.call(null,c__4299__auto___37772);
var G__37776 = (0);
seq__37753_37759 = G__37773;
chunk__37754_37760 = G__37774;
count__37755_37761 = G__37775;
i__37756_37762 = G__37776;
continue;
}
} else
{var vec__37758_37777 = cljs.core.first.call(null,seq__37753_37771__$1);var k_37778 = cljs.core.nth.call(null,vec__37758_37777,(0),null);var v_37779 = cljs.core.nth.call(null,vec__37758_37777,(1),null);(style[cljs.core.name.call(null,k_37778)] = v_37779);
{
var G__37780 = cljs.core.next.call(null,seq__37753_37771__$1);
var G__37781 = null;
var G__37782 = (0);
var G__37783 = (0);
seq__37753_37759 = G__37780;
chunk__37754_37760 = G__37781;
count__37755_37761 = G__37782;
i__37756_37762 = G__37783;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__37784){
var elem = cljs.core.first(arglist__37784);
var kvs = cljs.core.rest(arglist__37784);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-505765866,null))))));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__37791_37797 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__37792_37798 = null;var count__37793_37799 = (0);var i__37794_37800 = (0);while(true){
if((i__37794_37800 < count__37793_37799))
{var vec__37795_37801 = cljs.core._nth.call(null,chunk__37792_37798,i__37794_37800);var k_37802 = cljs.core.nth.call(null,vec__37795_37801,(0),null);var v_37803 = cljs.core.nth.call(null,vec__37795_37801,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_37802,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_37803)+"px"));
{
var G__37804 = seq__37791_37797;
var G__37805 = chunk__37792_37798;
var G__37806 = count__37793_37799;
var G__37807 = (i__37794_37800 + (1));
seq__37791_37797 = G__37804;
chunk__37792_37798 = G__37805;
count__37793_37799 = G__37806;
i__37794_37800 = G__37807;
continue;
}
} else
{var temp__4126__auto___37808 = cljs.core.seq.call(null,seq__37791_37797);if(temp__4126__auto___37808)
{var seq__37791_37809__$1 = temp__4126__auto___37808;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37791_37809__$1))
{var c__4299__auto___37810 = cljs.core.chunk_first.call(null,seq__37791_37809__$1);{
var G__37811 = cljs.core.chunk_rest.call(null,seq__37791_37809__$1);
var G__37812 = c__4299__auto___37810;
var G__37813 = cljs.core.count.call(null,c__4299__auto___37810);
var G__37814 = (0);
seq__37791_37797 = G__37811;
chunk__37792_37798 = G__37812;
count__37793_37799 = G__37813;
i__37794_37800 = G__37814;
continue;
}
} else
{var vec__37796_37815 = cljs.core.first.call(null,seq__37791_37809__$1);var k_37816 = cljs.core.nth.call(null,vec__37796_37815,(0),null);var v_37817 = cljs.core.nth.call(null,vec__37796_37815,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_37816,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_37817)+"px"));
{
var G__37818 = cljs.core.next.call(null,seq__37791_37809__$1);
var G__37819 = null;
var G__37820 = (0);
var G__37821 = (0);
seq__37791_37797 = G__37818;
chunk__37792_37798 = G__37819;
count__37793_37799 = G__37820;
i__37794_37800 = G__37821;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__37822){
var elem = cljs.core.first(arglist__37822);
var kvs = cljs.core.rest(arglist__37822);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__37831 = dommy.template.__GT_node_like.call(null,elem);(G__37831[cljs.core.name.call(null,k)] = v);
return G__37831;
} else
{var G__37832 = dommy.template.__GT_node_like.call(null,elem);G__37832.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",-496642736)))?dommy.attrs.style_str.call(null,v):v));
return G__37832;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__37839__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__37833_37840 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));var chunk__37834_37841 = null;var count__37835_37842 = (0);var i__37836_37843 = (0);while(true){
if((i__37836_37843 < count__37835_37842))
{var vec__37837_37844 = cljs.core._nth.call(null,chunk__37834_37841,i__37836_37843);var k_37845__$1 = cljs.core.nth.call(null,vec__37837_37844,(0),null);var v_37846__$1 = cljs.core.nth.call(null,vec__37837_37844,(1),null);set_attr_BANG_.call(null,elem__$1,k_37845__$1,v_37846__$1);
{
var G__37847 = seq__37833_37840;
var G__37848 = chunk__37834_37841;
var G__37849 = count__37835_37842;
var G__37850 = (i__37836_37843 + (1));
seq__37833_37840 = G__37847;
chunk__37834_37841 = G__37848;
count__37835_37842 = G__37849;
i__37836_37843 = G__37850;
continue;
}
} else
{var temp__4126__auto___37851 = cljs.core.seq.call(null,seq__37833_37840);if(temp__4126__auto___37851)
{var seq__37833_37852__$1 = temp__4126__auto___37851;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37833_37852__$1))
{var c__4299__auto___37853 = cljs.core.chunk_first.call(null,seq__37833_37852__$1);{
var G__37854 = cljs.core.chunk_rest.call(null,seq__37833_37852__$1);
var G__37855 = c__4299__auto___37853;
var G__37856 = cljs.core.count.call(null,c__4299__auto___37853);
var G__37857 = (0);
seq__37833_37840 = G__37854;
chunk__37834_37841 = G__37855;
count__37835_37842 = G__37856;
i__37836_37843 = G__37857;
continue;
}
} else
{var vec__37838_37858 = cljs.core.first.call(null,seq__37833_37852__$1);var k_37859__$1 = cljs.core.nth.call(null,vec__37838_37858,(0),null);var v_37860__$1 = cljs.core.nth.call(null,vec__37838_37858,(1),null);set_attr_BANG_.call(null,elem__$1,k_37859__$1,v_37860__$1);
{
var G__37861 = cljs.core.next.call(null,seq__37833_37852__$1);
var G__37862 = null;
var G__37863 = (0);
var G__37864 = (0);
seq__37833_37840 = G__37861;
chunk__37834_37841 = G__37862;
count__37835_37842 = G__37863;
i__37836_37843 = G__37864;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__37839 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__37839__delegate.call(this,elem,k,v,kvs);};
G__37839.cljs$lang$maxFixedArity = 3;
G__37839.cljs$lang$applyTo = (function (arglist__37865){
var elem = cljs.core.first(arglist__37865);
arglist__37865 = cljs.core.next(arglist__37865);
var k = cljs.core.first(arglist__37865);
arglist__37865 = cljs.core.next(arglist__37865);
var v = cljs.core.first(arglist__37865);
var kvs = cljs.core.rest(arglist__37865);
return G__37839__delegate(elem,k,v,kvs);
});
G__37839.cljs$core$IFn$_invoke$arity$variadic = G__37839__delegate;
return G__37839;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),null,new cljs.core.Keyword(null,"classes","classes",2037804510),null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__37874__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__37870_37875 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__37871_37876 = null;var count__37872_37877 = (0);var i__37873_37878 = (0);while(true){
if((i__37873_37878 < count__37872_37877))
{var k_37879__$1 = cljs.core._nth.call(null,chunk__37871_37876,i__37873_37878);remove_attr_BANG_.call(null,elem__$1,k_37879__$1);
{
var G__37880 = seq__37870_37875;
var G__37881 = chunk__37871_37876;
var G__37882 = count__37872_37877;
var G__37883 = (i__37873_37878 + (1));
seq__37870_37875 = G__37880;
chunk__37871_37876 = G__37881;
count__37872_37877 = G__37882;
i__37873_37878 = G__37883;
continue;
}
} else
{var temp__4126__auto___37884 = cljs.core.seq.call(null,seq__37870_37875);if(temp__4126__auto___37884)
{var seq__37870_37885__$1 = temp__4126__auto___37884;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37870_37885__$1))
{var c__4299__auto___37886 = cljs.core.chunk_first.call(null,seq__37870_37885__$1);{
var G__37887 = cljs.core.chunk_rest.call(null,seq__37870_37885__$1);
var G__37888 = c__4299__auto___37886;
var G__37889 = cljs.core.count.call(null,c__4299__auto___37886);
var G__37890 = (0);
seq__37870_37875 = G__37887;
chunk__37871_37876 = G__37888;
count__37872_37877 = G__37889;
i__37873_37878 = G__37890;
continue;
}
} else
{var k_37891__$1 = cljs.core.first.call(null,seq__37870_37885__$1);remove_attr_BANG_.call(null,elem__$1,k_37891__$1);
{
var G__37892 = cljs.core.next.call(null,seq__37870_37885__$1);
var G__37893 = null;
var G__37894 = (0);
var G__37895 = (0);
seq__37870_37875 = G__37892;
chunk__37871_37876 = G__37893;
count__37872_37877 = G__37894;
i__37873_37878 = G__37895;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__37874 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__37874__delegate.call(this,elem,k,ks);};
G__37874.cljs$lang$maxFixedArity = 2;
G__37874.cljs$lang$applyTo = (function (arglist__37896){
var elem = cljs.core.first(arglist__37896);
arglist__37896 = cljs.core.next(arglist__37896);
var k = cljs.core.first(arglist__37896);
var ks = cljs.core.rest(arglist__37896);
return G__37874__delegate(elem,k,ks);
});
G__37874.cljs$core$IFn$_invoke$arity$variadic = G__37874__delegate;
return G__37874;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(cljs.core.name.call(null,k));
} else
{return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.attrs.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{return dommy.attrs.set_attr_BANG_.call(null,elem__$1,k);
} else
{return dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__37898 = dommy.template.__GT_node_like.call(null,elem);G__37898.style.display = ((show_QMARK_)?"":"none");
return G__37898;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__37900 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__37900,false);
return G__37900;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__37902 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__37902,true);
return G__37902;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__37904 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__37904["constructor"] = Object);
return G__37904;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map