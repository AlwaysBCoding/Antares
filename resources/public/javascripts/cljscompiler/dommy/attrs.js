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
var G__9540 = (i + class$.length);
start_from = G__9540;
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
{var temp__4124__auto___9565 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___9565))
{var class_list_9566 = temp__4124__auto___9565;var seq__9553_9567 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__9554_9568 = null;var count__9555_9569 = (0);var i__9556_9570 = (0);while(true){
if((i__9556_9570 < count__9555_9569))
{var class_9571 = cljs.core._nth.call(null,chunk__9554_9568,i__9556_9570);class_list_9566.add(class_9571);
{
var G__9572 = seq__9553_9567;
var G__9573 = chunk__9554_9568;
var G__9574 = count__9555_9569;
var G__9575 = (i__9556_9570 + (1));
seq__9553_9567 = G__9572;
chunk__9554_9568 = G__9573;
count__9555_9569 = G__9574;
i__9556_9570 = G__9575;
continue;
}
} else
{var temp__4126__auto___9576 = cljs.core.seq.call(null,seq__9553_9567);if(temp__4126__auto___9576)
{var seq__9553_9577__$1 = temp__4126__auto___9576;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9553_9577__$1))
{var c__4299__auto___9578 = cljs.core.chunk_first.call(null,seq__9553_9577__$1);{
var G__9579 = cljs.core.chunk_rest.call(null,seq__9553_9577__$1);
var G__9580 = c__4299__auto___9578;
var G__9581 = cljs.core.count.call(null,c__4299__auto___9578);
var G__9582 = (0);
seq__9553_9567 = G__9579;
chunk__9554_9568 = G__9580;
count__9555_9569 = G__9581;
i__9556_9570 = G__9582;
continue;
}
} else
{var class_9583 = cljs.core.first.call(null,seq__9553_9577__$1);class_list_9566.add(class_9583);
{
var G__9584 = cljs.core.next.call(null,seq__9553_9577__$1);
var G__9585 = null;
var G__9586 = (0);
var G__9587 = (0);
seq__9553_9567 = G__9584;
chunk__9554_9568 = G__9585;
count__9555_9569 = G__9586;
i__9556_9570 = G__9587;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_9588 = elem__$1.className;var seq__9557_9589 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__9558_9590 = null;var count__9559_9591 = (0);var i__9560_9592 = (0);while(true){
if((i__9560_9592 < count__9559_9591))
{var class_9593 = cljs.core._nth.call(null,chunk__9558_9590,i__9560_9592);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_9588,class_9593)))
{} else
{elem__$1.className = (((class_name_9588 === ""))?class_9593:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_9588)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_9593)));
}
{
var G__9594 = seq__9557_9589;
var G__9595 = chunk__9558_9590;
var G__9596 = count__9559_9591;
var G__9597 = (i__9560_9592 + (1));
seq__9557_9589 = G__9594;
chunk__9558_9590 = G__9595;
count__9559_9591 = G__9596;
i__9560_9592 = G__9597;
continue;
}
} else
{var temp__4126__auto___9598 = cljs.core.seq.call(null,seq__9557_9589);if(temp__4126__auto___9598)
{var seq__9557_9599__$1 = temp__4126__auto___9598;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9557_9599__$1))
{var c__4299__auto___9600 = cljs.core.chunk_first.call(null,seq__9557_9599__$1);{
var G__9601 = cljs.core.chunk_rest.call(null,seq__9557_9599__$1);
var G__9602 = c__4299__auto___9600;
var G__9603 = cljs.core.count.call(null,c__4299__auto___9600);
var G__9604 = (0);
seq__9557_9589 = G__9601;
chunk__9558_9590 = G__9602;
count__9559_9591 = G__9603;
i__9560_9592 = G__9604;
continue;
}
} else
{var class_9605 = cljs.core.first.call(null,seq__9557_9599__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_9588,class_9605)))
{} else
{elem__$1.className = (((class_name_9588 === ""))?class_9605:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_9588)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_9605)));
}
{
var G__9606 = cljs.core.next.call(null,seq__9557_9599__$1);
var G__9607 = null;
var G__9608 = (0);
var G__9609 = (0);
seq__9557_9589 = G__9606;
chunk__9558_9590 = G__9607;
count__9559_9591 = G__9608;
i__9560_9592 = G__9609;
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
var G__9610__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9561_9611 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__9562_9612 = null;var count__9563_9613 = (0);var i__9564_9614 = (0);while(true){
if((i__9564_9614 < count__9563_9613))
{var c_9615 = cljs.core._nth.call(null,chunk__9562_9612,i__9564_9614);add_class_BANG_.call(null,elem__$1,c_9615);
{
var G__9616 = seq__9561_9611;
var G__9617 = chunk__9562_9612;
var G__9618 = count__9563_9613;
var G__9619 = (i__9564_9614 + (1));
seq__9561_9611 = G__9616;
chunk__9562_9612 = G__9617;
count__9563_9613 = G__9618;
i__9564_9614 = G__9619;
continue;
}
} else
{var temp__4126__auto___9620 = cljs.core.seq.call(null,seq__9561_9611);if(temp__4126__auto___9620)
{var seq__9561_9621__$1 = temp__4126__auto___9620;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9561_9621__$1))
{var c__4299__auto___9622 = cljs.core.chunk_first.call(null,seq__9561_9621__$1);{
var G__9623 = cljs.core.chunk_rest.call(null,seq__9561_9621__$1);
var G__9624 = c__4299__auto___9622;
var G__9625 = cljs.core.count.call(null,c__4299__auto___9622);
var G__9626 = (0);
seq__9561_9611 = G__9623;
chunk__9562_9612 = G__9624;
count__9563_9613 = G__9625;
i__9564_9614 = G__9626;
continue;
}
} else
{var c_9627 = cljs.core.first.call(null,seq__9561_9621__$1);add_class_BANG_.call(null,elem__$1,c_9627);
{
var G__9628 = cljs.core.next.call(null,seq__9561_9621__$1);
var G__9629 = null;
var G__9630 = (0);
var G__9631 = (0);
seq__9561_9611 = G__9628;
chunk__9562_9612 = G__9629;
count__9563_9613 = G__9630;
i__9564_9614 = G__9631;
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
var G__9610 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9610__delegate.call(this,elem,classes,more_classes);};
G__9610.cljs$lang$maxFixedArity = 2;
G__9610.cljs$lang$applyTo = (function (arglist__9632){
var elem = cljs.core.first(arglist__9632);
arglist__9632 = cljs.core.next(arglist__9632);
var classes = cljs.core.first(arglist__9632);
var more_classes = cljs.core.rest(arglist__9632);
return G__9610__delegate(elem,classes,more_classes);
});
G__9610.cljs$core$IFn$_invoke$arity$variadic = G__9610__delegate;
return G__9610;
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
var G__9633 = (function (){var end = (i + class$.length);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((end < class_len))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substring((0),i))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substr((end + (1))))):class_name.substring((0),(i - (1))))));
})();
class_name = G__9633;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto___9642 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___9642))
{var class_list_9643 = temp__4124__auto___9642;class_list_9643.remove(class$__$1);
} else
{var class_name_9644 = elem__$1.className;var new_class_name_9645 = dommy.attrs.remove_class_str.call(null,class_name_9644,class$__$1);if((class_name_9644 === new_class_name_9645))
{} else
{elem__$1.className = new_class_name_9645;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__9646__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9638 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__9639 = null;var count__9640 = (0);var i__9641 = (0);while(true){
if((i__9641 < count__9640))
{var c = cljs.core._nth.call(null,chunk__9639,i__9641);remove_class_BANG_.call(null,elem__$1,c);
{
var G__9647 = seq__9638;
var G__9648 = chunk__9639;
var G__9649 = count__9640;
var G__9650 = (i__9641 + (1));
seq__9638 = G__9647;
chunk__9639 = G__9648;
count__9640 = G__9649;
i__9641 = G__9650;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9638);if(temp__4126__auto__)
{var seq__9638__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9638__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__9638__$1);{
var G__9651 = cljs.core.chunk_rest.call(null,seq__9638__$1);
var G__9652 = c__4299__auto__;
var G__9653 = cljs.core.count.call(null,c__4299__auto__);
var G__9654 = (0);
seq__9638 = G__9651;
chunk__9639 = G__9652;
count__9640 = G__9653;
i__9641 = G__9654;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__9638__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__9655 = cljs.core.next.call(null,seq__9638__$1);
var G__9656 = null;
var G__9657 = (0);
var G__9658 = (0);
seq__9638 = G__9655;
chunk__9639 = G__9656;
count__9640 = G__9657;
i__9641 = G__9658;
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
var G__9646 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9646__delegate.call(this,elem,class$,classes);};
G__9646.cljs$lang$maxFixedArity = 2;
G__9646.cljs$lang$applyTo = (function (arglist__9659){
var elem = cljs.core.first(arglist__9659);
arglist__9659 = cljs.core.next(arglist__9659);
var class$ = cljs.core.first(arglist__9659);
var classes = cljs.core.rest(arglist__9659);
return G__9646__delegate(elem,class$,classes);
});
G__9646.cljs$core$IFn$_invoke$arity$variadic = G__9646__delegate;
return G__9646;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto___9660 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___9660))
{var class_list_9661 = temp__4124__auto___9660;class_list_9661.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__9664){var vec__9665 = p__9664;var k = cljs.core.nth.call(null,vec__9665,(0),null);var v = cljs.core.nth.call(null,vec__9665,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,v))+";");
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__9672_9678 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__9673_9679 = null;var count__9674_9680 = (0);var i__9675_9681 = (0);while(true){
if((i__9675_9681 < count__9674_9680))
{var vec__9676_9682 = cljs.core._nth.call(null,chunk__9673_9679,i__9675_9681);var k_9683 = cljs.core.nth.call(null,vec__9676_9682,(0),null);var v_9684 = cljs.core.nth.call(null,vec__9676_9682,(1),null);(style[cljs.core.name.call(null,k_9683)] = v_9684);
{
var G__9685 = seq__9672_9678;
var G__9686 = chunk__9673_9679;
var G__9687 = count__9674_9680;
var G__9688 = (i__9675_9681 + (1));
seq__9672_9678 = G__9685;
chunk__9673_9679 = G__9686;
count__9674_9680 = G__9687;
i__9675_9681 = G__9688;
continue;
}
} else
{var temp__4126__auto___9689 = cljs.core.seq.call(null,seq__9672_9678);if(temp__4126__auto___9689)
{var seq__9672_9690__$1 = temp__4126__auto___9689;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9672_9690__$1))
{var c__4299__auto___9691 = cljs.core.chunk_first.call(null,seq__9672_9690__$1);{
var G__9692 = cljs.core.chunk_rest.call(null,seq__9672_9690__$1);
var G__9693 = c__4299__auto___9691;
var G__9694 = cljs.core.count.call(null,c__4299__auto___9691);
var G__9695 = (0);
seq__9672_9678 = G__9692;
chunk__9673_9679 = G__9693;
count__9674_9680 = G__9694;
i__9675_9681 = G__9695;
continue;
}
} else
{var vec__9677_9696 = cljs.core.first.call(null,seq__9672_9690__$1);var k_9697 = cljs.core.nth.call(null,vec__9677_9696,(0),null);var v_9698 = cljs.core.nth.call(null,vec__9677_9696,(1),null);(style[cljs.core.name.call(null,k_9697)] = v_9698);
{
var G__9699 = cljs.core.next.call(null,seq__9672_9690__$1);
var G__9700 = null;
var G__9701 = (0);
var G__9702 = (0);
seq__9672_9678 = G__9699;
chunk__9673_9679 = G__9700;
count__9674_9680 = G__9701;
i__9675_9681 = G__9702;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__9703){
var elem = cljs.core.first(arglist__9703);
var kvs = cljs.core.rest(arglist__9703);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9710_9716 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__9711_9717 = null;var count__9712_9718 = (0);var i__9713_9719 = (0);while(true){
if((i__9713_9719 < count__9712_9718))
{var vec__9714_9720 = cljs.core._nth.call(null,chunk__9711_9717,i__9713_9719);var k_9721 = cljs.core.nth.call(null,vec__9714_9720,(0),null);var v_9722 = cljs.core.nth.call(null,vec__9714_9720,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_9721,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_9722)+"px"));
{
var G__9723 = seq__9710_9716;
var G__9724 = chunk__9711_9717;
var G__9725 = count__9712_9718;
var G__9726 = (i__9713_9719 + (1));
seq__9710_9716 = G__9723;
chunk__9711_9717 = G__9724;
count__9712_9718 = G__9725;
i__9713_9719 = G__9726;
continue;
}
} else
{var temp__4126__auto___9727 = cljs.core.seq.call(null,seq__9710_9716);if(temp__4126__auto___9727)
{var seq__9710_9728__$1 = temp__4126__auto___9727;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9710_9728__$1))
{var c__4299__auto___9729 = cljs.core.chunk_first.call(null,seq__9710_9728__$1);{
var G__9730 = cljs.core.chunk_rest.call(null,seq__9710_9728__$1);
var G__9731 = c__4299__auto___9729;
var G__9732 = cljs.core.count.call(null,c__4299__auto___9729);
var G__9733 = (0);
seq__9710_9716 = G__9730;
chunk__9711_9717 = G__9731;
count__9712_9718 = G__9732;
i__9713_9719 = G__9733;
continue;
}
} else
{var vec__9715_9734 = cljs.core.first.call(null,seq__9710_9728__$1);var k_9735 = cljs.core.nth.call(null,vec__9715_9734,(0),null);var v_9736 = cljs.core.nth.call(null,vec__9715_9734,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_9735,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_9736)+"px"));
{
var G__9737 = cljs.core.next.call(null,seq__9710_9728__$1);
var G__9738 = null;
var G__9739 = (0);
var G__9740 = (0);
seq__9710_9716 = G__9737;
chunk__9711_9717 = G__9738;
count__9712_9718 = G__9739;
i__9713_9719 = G__9740;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__9741){
var elem = cljs.core.first(arglist__9741);
var kvs = cljs.core.rest(arglist__9741);
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
{var G__9750 = dommy.template.__GT_node_like.call(null,elem);(G__9750[cljs.core.name.call(null,k)] = v);
return G__9750;
} else
{var G__9751 = dommy.template.__GT_node_like.call(null,elem);G__9751.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",-496642736)))?dommy.attrs.style_str.call(null,v):v));
return G__9751;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__9758__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9752_9759 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));var chunk__9753_9760 = null;var count__9754_9761 = (0);var i__9755_9762 = (0);while(true){
if((i__9755_9762 < count__9754_9761))
{var vec__9756_9763 = cljs.core._nth.call(null,chunk__9753_9760,i__9755_9762);var k_9764__$1 = cljs.core.nth.call(null,vec__9756_9763,(0),null);var v_9765__$1 = cljs.core.nth.call(null,vec__9756_9763,(1),null);set_attr_BANG_.call(null,elem__$1,k_9764__$1,v_9765__$1);
{
var G__9766 = seq__9752_9759;
var G__9767 = chunk__9753_9760;
var G__9768 = count__9754_9761;
var G__9769 = (i__9755_9762 + (1));
seq__9752_9759 = G__9766;
chunk__9753_9760 = G__9767;
count__9754_9761 = G__9768;
i__9755_9762 = G__9769;
continue;
}
} else
{var temp__4126__auto___9770 = cljs.core.seq.call(null,seq__9752_9759);if(temp__4126__auto___9770)
{var seq__9752_9771__$1 = temp__4126__auto___9770;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9752_9771__$1))
{var c__4299__auto___9772 = cljs.core.chunk_first.call(null,seq__9752_9771__$1);{
var G__9773 = cljs.core.chunk_rest.call(null,seq__9752_9771__$1);
var G__9774 = c__4299__auto___9772;
var G__9775 = cljs.core.count.call(null,c__4299__auto___9772);
var G__9776 = (0);
seq__9752_9759 = G__9773;
chunk__9753_9760 = G__9774;
count__9754_9761 = G__9775;
i__9755_9762 = G__9776;
continue;
}
} else
{var vec__9757_9777 = cljs.core.first.call(null,seq__9752_9771__$1);var k_9778__$1 = cljs.core.nth.call(null,vec__9757_9777,(0),null);var v_9779__$1 = cljs.core.nth.call(null,vec__9757_9777,(1),null);set_attr_BANG_.call(null,elem__$1,k_9778__$1,v_9779__$1);
{
var G__9780 = cljs.core.next.call(null,seq__9752_9771__$1);
var G__9781 = null;
var G__9782 = (0);
var G__9783 = (0);
seq__9752_9759 = G__9780;
chunk__9753_9760 = G__9781;
count__9754_9761 = G__9782;
i__9755_9762 = G__9783;
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
var G__9758 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__9758__delegate.call(this,elem,k,v,kvs);};
G__9758.cljs$lang$maxFixedArity = 3;
G__9758.cljs$lang$applyTo = (function (arglist__9784){
var elem = cljs.core.first(arglist__9784);
arglist__9784 = cljs.core.next(arglist__9784);
var k = cljs.core.first(arglist__9784);
arglist__9784 = cljs.core.next(arglist__9784);
var v = cljs.core.first(arglist__9784);
var kvs = cljs.core.rest(arglist__9784);
return G__9758__delegate(elem,k,v,kvs);
});
G__9758.cljs$core$IFn$_invoke$arity$variadic = G__9758__delegate;
return G__9758;
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
var G__9793__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__9789_9794 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__9790_9795 = null;var count__9791_9796 = (0);var i__9792_9797 = (0);while(true){
if((i__9792_9797 < count__9791_9796))
{var k_9798__$1 = cljs.core._nth.call(null,chunk__9790_9795,i__9792_9797);remove_attr_BANG_.call(null,elem__$1,k_9798__$1);
{
var G__9799 = seq__9789_9794;
var G__9800 = chunk__9790_9795;
var G__9801 = count__9791_9796;
var G__9802 = (i__9792_9797 + (1));
seq__9789_9794 = G__9799;
chunk__9790_9795 = G__9800;
count__9791_9796 = G__9801;
i__9792_9797 = G__9802;
continue;
}
} else
{var temp__4126__auto___9803 = cljs.core.seq.call(null,seq__9789_9794);if(temp__4126__auto___9803)
{var seq__9789_9804__$1 = temp__4126__auto___9803;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9789_9804__$1))
{var c__4299__auto___9805 = cljs.core.chunk_first.call(null,seq__9789_9804__$1);{
var G__9806 = cljs.core.chunk_rest.call(null,seq__9789_9804__$1);
var G__9807 = c__4299__auto___9805;
var G__9808 = cljs.core.count.call(null,c__4299__auto___9805);
var G__9809 = (0);
seq__9789_9794 = G__9806;
chunk__9790_9795 = G__9807;
count__9791_9796 = G__9808;
i__9792_9797 = G__9809;
continue;
}
} else
{var k_9810__$1 = cljs.core.first.call(null,seq__9789_9804__$1);remove_attr_BANG_.call(null,elem__$1,k_9810__$1);
{
var G__9811 = cljs.core.next.call(null,seq__9789_9804__$1);
var G__9812 = null;
var G__9813 = (0);
var G__9814 = (0);
seq__9789_9794 = G__9811;
chunk__9790_9795 = G__9812;
count__9791_9796 = G__9813;
i__9792_9797 = G__9814;
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
var G__9793 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9793__delegate.call(this,elem,k,ks);};
G__9793.cljs$lang$maxFixedArity = 2;
G__9793.cljs$lang$applyTo = (function (arglist__9815){
var elem = cljs.core.first(arglist__9815);
arglist__9815 = cljs.core.next(arglist__9815);
var k = cljs.core.first(arglist__9815);
var ks = cljs.core.rest(arglist__9815);
return G__9793__delegate(elem,k,ks);
});
G__9793.cljs$core$IFn$_invoke$arity$variadic = G__9793__delegate;
return G__9793;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__9817 = dommy.template.__GT_node_like.call(null,elem);G__9817.style.display = ((show_QMARK_)?"":"none");
return G__9817;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__9819 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__9819,false);
return G__9819;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__9821 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__9821,true);
return G__9821;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__9823 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__9823["constructor"] = Object);
return G__9823;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map