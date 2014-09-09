// Compiled by ClojureScript 0.0-2311
goog.provide('cljs.hackpad.reagent');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('reagent.core');
cljs.hackpad.reagent.some_component = (function some_component(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"I am a component!"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.some-class","p.some-class",-36716681),"I have ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"bold"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null)," and red"], null)," text."], null)], null);
});
cljs.hackpad.reagent.parent_component = (function parent_component(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"I am a parent component"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.hackpad.reagent.some_component], null)], null);
});
cljs.hackpad.reagent.hello_component = (function hello_component(name){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Hello, ",name,"!"], null);
});
cljs.hackpad.reagent.say_hello = (function say_hello(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.hackpad.reagent.hello_component,"world"], null);
});
cljs.hackpad.reagent.lister = (function lister(items){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4278__auto__ = (function iter__17144(s__17145){return (new cljs.core.LazySeq(null,(function (){var s__17145__$1 = s__17145;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17145__$1);if(temp__4126__auto__)
{var s__17145__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17145__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__17145__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__17147 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__17146 = (0);while(true){
if((i__17146 < size__4277__auto__))
{var item = cljs.core._nth.call(null,c__4276__auto__,i__17146);cljs.core.chunk_append.call(null,b__17147,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Item ",item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));
{
var G__17148 = (i__17146 + (1));
i__17146 = G__17148;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17147),iter__17144.call(null,cljs.core.chunk_rest.call(null,s__17145__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17147),null);
}
} else
{var item = cljs.core.first.call(null,s__17145__$2);return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Item ",item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),iter__17144.call(null,cljs.core.rest.call(null,s__17145__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,items);
})()], null);
});
cljs.hackpad.reagent.lister_user = (function lister_user(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Here is a list:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.hackpad.reagent.lister,cljs.core.range.call(null,(5))], null)], null);
});
cljs.hackpad.reagent.counting_component_2 = (function counting_component_2(){var click_count = reagent.core.atom.call(null,(0));return ((function (click_count){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The atom ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"click-count"], null)," has value: ",cljs.core.deref.call(null,click_count),"."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Click me!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (click_count){
return (function (){return cljs.core.swap_BANG_.call(null,click_count,cljs.core.inc);
});})(click_count))
], null)], null)], null);
});
;})(click_count))
});
cljs.hackpad.reagent.counting_component = (function counting_component(){var click_count = reagent.core.atom.call(null,(0));return ((function (click_count){
return (function (){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The atom ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"click-count"], null)," has value: ",cljs.core.deref.call(null,click_count),"."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Click me!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (click_count){
return (function (){return cljs.core.swap_BANG_.call(null,click_count,cljs.core.inc);
});})(click_count))
], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.hackpad.reagent.counting_component_2], null)], null);
});
;})(click_count))
});
cljs.hackpad.reagent.atom_input = (function atom_input(value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17149_SHARP_){return cljs.core.reset_BANG_.call(null,value,p1__17149_SHARP_.target.value);
})], null)], null);
});
cljs.hackpad.reagent.shared_state = (function shared_state(){var initial_value = reagent.core.atom.call(null,"initial value...");return ((function (initial_value){
return (function (){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This is two way data binding by passing the atom as property of sub-component"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.deref.call(null,initial_value)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Change it here: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.hackpad.reagent.atom_input,initial_value], null)], null)], null);
});
;})(initial_value))
});
cljs.hackpad.reagent.bmi_data = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(180),new cljs.core.Keyword(null,"weight","weight",-1262796205),(80)], null));
cljs.hackpad.reagent.calculate_bmi = (function calculate_bmi(){var map__17151 = cljs.core.deref.call(null,cljs.hackpad.reagent.bmi_data);var map__17151__$1 = ((cljs.core.seq_QMARK_.call(null,map__17151))?cljs.core.apply.call(null,cljs.core.hash_map,map__17151):map__17151);var data = map__17151__$1;var bmi = cljs.core.get.call(null,map__17151__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));var weight = cljs.core.get.call(null,map__17151__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));var height = cljs.core.get.call(null,map__17151__$1,new cljs.core.Keyword(null,"height","height",1025178622));if((bmi == null))
{return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"bmi","bmi",1421979636),(weight / ((height / (100)) * (height / (100)))));
} else
{return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"weight","weight",-1262796205),((bmi * (height / (100))) * (height / (100))));
}
});
cljs.hackpad.reagent.slider = (function slider(param,value,min,max){var reset = (function (){var G__17154 = (((param instanceof cljs.core.Keyword))?param.fqn:null);switch (G__17154) {
case "bmi":
return new cljs.core.Keyword(null,"weight","weight",-1262796205);

break;
default:
return new cljs.core.Keyword(null,"bmi","bmi",1421979636);

}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (reset){
return (function (p1__17152_SHARP_){return cljs.core.swap_BANG_.call(null,cljs.hackpad.reagent.bmi_data,cljs.core.assoc,param,p1__17152_SHARP_.target.value,reset,null);
});})(reset))
], null)], null);
});
cljs.hackpad.reagent.bmi_component = (function bmi_component(){var map__17158 = cljs.hackpad.reagent.calculate_bmi.call(null);var map__17158__$1 = ((cljs.core.seq_QMARK_.call(null,map__17158))?cljs.core.apply.call(null,cljs.core.hash_map,map__17158):map__17158);var bmi = cljs.core.get.call(null,map__17158__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));var height = cljs.core.get.call(null,map__17158__$1,new cljs.core.Keyword(null,"height","height",1025178622));var weight = cljs.core.get.call(null,map__17158__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));var vec__17159 = (((bmi < 18.5))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","underweight"], null):(((bmi < (25)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit","normal"], null):(((bmi < (30)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","overweight"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","obese"], null)
)));var color = cljs.core.nth.call(null,vec__17159,(0),null);var diagnose = cljs.core.nth.call(null,vec__17159,(1),null);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"BMI Calculator"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Height: ",(height | (0)),"cm",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.hackpad.reagent.slider,new cljs.core.Keyword(null,"height","height",1025178622),height,(100),(220)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Weight: ",(weight | (0)),"kg",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.hackpad.reagent.slider,new cljs.core.Keyword(null,"weight","weight",-1262796205),weight,(30),(150)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"BMI: ",(bmi | (0))," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null),diagnose], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.hackpad.reagent.slider,new cljs.core.Keyword(null,"bmi","bmi",1421979636),bmi,(10),(50)], null)], null)], null);
});
cljs.hackpad.reagent.timer = reagent.core.atom.call(null,(new Date()));
cljs.hackpad.reagent.time_color = reagent.core.atom.call(null,"coral");
cljs.hackpad.reagent.update_time = (function update_time(time){return setTimeout((function (){return cljs.core.reset_BANG_.call(null,time,(new Date()));
}),(100));
});
cljs.hackpad.reagent.greeting = (function greeting(message){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),message], null);
});
cljs.hackpad.reagent.clock = (function clock(){cljs.hackpad.reagent.update_time.call(null,cljs.hackpad.reagent.timer);
var time_string = cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.deref.call(null,cljs.hackpad.reagent.timer).toTimeString()," "));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-clock","div.example-clock",1559289088),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.deref.call(null,cljs.hackpad.reagent.time_color)], null)], null),time_string], null);
});
cljs.hackpad.reagent.color_input = (function color_input(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-input","div.color-input",-879914246),"Time Color: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,cljs.hackpad.reagent.time_color),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17160_SHARP_){return cljs.core.reset_BANG_.call(null,cljs.hackpad.reagent.time_color,p1__17160_SHARP_.target.value);
})], null)], null)], null);
});
cljs.hackpad.reagent.simple_example = (function simple_example(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.hackpad.reagent.greeting,"Hello world, it is now"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.hackpad.reagent.clock], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.hackpad.reagent.color_input], null)], null);
});
cljs.hackpad.reagent.sports_list = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"NBA"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"NFL"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"MLB"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"NHL"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"MMA"], null)], null));
cljs.hackpad.reagent.active_sport = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.hackpad.reagent.teams_list = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cljs.hackpad.reagent.active_team = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.hackpad.reagent.nba_teams = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Wizards"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Bucks"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Spurs"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"TrailBlazers"], null)], null);
cljs.hackpad.reagent.activate_team_BANG_ = (function activate_team_BANG_(team){var G__17162 = team.call(null,new cljs.core.Keyword(null,"display","display",242065432));if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),G__17162))
{return cljs.core.reset_BANG_.call(null,cljs.hackpad.reagent.teams_list,cljs.core.PersistentVector.EMPTY);
} else
{if(cljs.core._EQ_.call(null,"NBA",G__17162))
{return cljs.core.reset_BANG_.call(null,cljs.hackpad.reagent.teams_list,cljs.hackpad.reagent.nba_teams);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(team.call(null,new cljs.core.Keyword(null,"display","display",242065432))))));

}
}
});
cljs.hackpad.reagent.activatable_item_component = (function activatable_item_component(item,active_item,activate_fn){var stateful_mappings = ((cljs.core._EQ_.call(null,item,cljs.core.deref.call(null,active_item)))?(function (){console.log("active item...");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"active",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null);
})():cljs.core.PersistentArrayMap.EMPTY);return ((function (stateful_mappings){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.into.call(null,stateful_mappings,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (stateful_mappings){
return (function (){return cljs.core.reset_BANG_.call(null,active_item,item);
});})(stateful_mappings))
], null)),item.call(null,new cljs.core.Keyword(null,"display","display",242065432))], null);
});
;})(stateful_mappings))
});
cljs.hackpad.reagent.activatable_items_list_component = (function activatable_items_list_component(items,active_item,activate_fn){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),(function (){var iter__4278__auto__ = (function iter__17167(s__17168){return (new cljs.core.LazySeq(null,(function (){var s__17168__$1 = s__17168;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17168__$1);if(temp__4126__auto__)
{var s__17168__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17168__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__17168__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__17170 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__17169 = (0);while(true){
if((i__17169 < size__4277__auto__))
{var item = cljs.core._nth.call(null,c__4276__auto__,i__17169);cljs.core.chunk_append.call(null,b__17170,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.hackpad.reagent.activatable_item_component,item,active_item,activate_fn], null));
{
var G__17171 = (i__17169 + (1));
i__17169 = G__17171;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17170),iter__17167.call(null,cljs.core.chunk_rest.call(null,s__17168__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17170),null);
}
} else
{var item = cljs.core.first.call(null,s__17168__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.hackpad.reagent.activatable_item_component,item,active_item,activate_fn], null),iter__17167.call(null,cljs.core.rest.call(null,s__17168__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,cljs.core.deref.call(null,items));
})()], null);
});
cljs.hackpad.reagent.app = (function app(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Hello from the most logical framework I've ever seen..."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.hackpad.reagent.activatable_items_list_component,cljs.hackpad.reagent.sports_list,cljs.hackpad.reagent.active_sport,(function (item){return null;
})], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.hackpad.reagent.app], null),document.querySelector("#app-target"));
cljs.hackpad.reagent.todos = reagent.core.atom.call(null,cljs.core.sorted_map.call(null));
cljs.hackpad.reagent.counter = reagent.core.atom.call(null,(0));
cljs.hackpad.reagent.add_todo = (function add_todo(text){var id = cljs.core.swap_BANG_.call(null,cljs.hackpad.reagent.counter,cljs.core.inc);return cljs.core.swap_BANG_.call(null,cljs.hackpad.reagent.todos,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),text,new cljs.core.Keyword(null,"done","done",-889844188),false], null));
});
cljs.hackpad.reagent.toggle = (function toggle(id){return cljs.core.swap_BANG_.call(null,cljs.hackpad.reagent.todos,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"done","done",-889844188)], null),cljs.core.not);
});
cljs.hackpad.reagent.save = (function save(id,title){return cljs.core.swap_BANG_.call(null,cljs.hackpad.reagent.todos,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"title","title",636505583)], null),title);
});
cljs.hackpad.reagent.delete$ = (function delete$(id){return cljs.core.swap_BANG_.call(null,cljs.hackpad.reagent.todos,cljs.core.dissoc,id);
});
cljs.hackpad.reagent.mmap = (function mmap(m,f,a){return cljs.core.into.call(null,cljs.core.empty.call(null,m),f.call(null,a,m));
});
cljs.hackpad.reagent.complete_all = (function complete_all(v){return cljs.core.swap_BANG_.call(null,cljs.hackpad.reagent.todos,cljs.hackpad.reagent.mmap,cljs.core.map,(function (p1__17172_SHARP_){return cljs.core.assoc_in.call(null,p1__17172_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"done","done",-889844188)], null),v);
}));
});
cljs.hackpad.reagent.clear_done = (function clear_done(){return cljs.core.swap_BANG_.call(null,cljs.hackpad.reagent.todos,cljs.hackpad.reagent.mmap,cljs.core.remove,(function (p1__17173_SHARP_){return cljs.core.get_in.call(null,p1__17173_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"done","done",-889844188)], null));
}));
});
cljs.hackpad.reagent.add_todo.call(null,"Rename Cloact to Reagent");
cljs.hackpad.reagent.add_todo.call(null,"Add undo demo");
cljs.hackpad.reagent.add_todo.call(null,"Make all rendering async");
cljs.hackpad.reagent.add_todo.call(null,"Allow any arguments to component functions");
cljs.hackpad.reagent.complete_all.call(null,true);
cljs.hackpad.reagent.todo_input = (function todo_input(p__17176){var map__17179 = p__17176;var map__17179__$1 = ((cljs.core.seq_QMARK_.call(null,map__17179))?cljs.core.apply.call(null,cljs.core.hash_map,map__17179):map__17179);var on_stop = cljs.core.get.call(null,map__17179__$1,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515));var on_save = cljs.core.get.call(null,map__17179__$1,new cljs.core.Keyword(null,"on-save","on-save",1618176266));var title = cljs.core.get.call(null,map__17179__$1,new cljs.core.Keyword(null,"title","title",636505583));var val = reagent.core.atom.call(null,title);var stop = ((function (val,map__17179,map__17179__$1,on_stop,on_save,title){
return (function (){cljs.core.reset_BANG_.call(null,val," ");
if(cljs.core.truth_(on_stop))
{return on_stop.call(null);
} else
{return null;
}
});})(val,map__17179,map__17179__$1,on_stop,on_save,title))
;var save = ((function (val,stop,map__17179,map__17179__$1,on_stop,on_save,title){
return (function (){var v = clojure.string.trim.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,val))));if(!(cljs.core.empty_QMARK_.call(null,v)))
{on_save.call(null,v);
} else
{}
return stop.call(null);
});})(val,stop,map__17179,map__17179__$1,on_stop,on_save,title))
;return ((function (val,stop,save,map__17179,map__17179__$1,on_stop,on_save,title){
return (function (props){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.call(null,props,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,val),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),save,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (val,stop,save,map__17179,map__17179__$1,on_stop,on_save,title){
return (function (p1__17174_SHARP_){return cljs.core.reset_BANG_.call(null,val,p1__17174_SHARP_.target.value);
});})(val,stop,save,map__17179,map__17179__$1,on_stop,on_save,title))
,new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),((function (val,stop,save,map__17179,map__17179__$1,on_stop,on_save,title){
return (function (p1__17175_SHARP_){var G__17180 = p1__17175_SHARP_.which;switch (G__17180) {
case (13):
return save.call(null);

break;
case (27):
return stop.call(null);

break;
default:
return null;

}
});})(val,stop,save,map__17179,map__17179__$1,on_stop,on_save,title))
], null))], null);
});
;})(val,stop,save,map__17179,map__17179__$1,on_stop,on_save,title))
});
cljs.hackpad.reagent.todo_edit = cljs.core.with_meta.call(null,cljs.hackpad.reagent.todo_input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (p1__17182_SHARP_){return reagent.core.dom_node.call(null,p1__17182_SHARP_).focus();
})], null));
cljs.hackpad.reagent.todo_stats = (function todo_stats(p__17183){var map__17186 = p__17183;var map__17186__$1 = ((cljs.core.seq_QMARK_.call(null,map__17186))?cljs.core.apply.call(null,cljs.core.hash_map,map__17186):map__17186);var done = cljs.core.get.call(null,map__17186__$1,new cljs.core.Keyword(null,"done","done",-889844188));var active = cljs.core.get.call(null,map__17186__$1,new cljs.core.Keyword(null,"active","active",1895962068));var filt = cljs.core.get.call(null,map__17186__$1,new cljs.core.Keyword(null,"filt","filt",169229082));var props_for = ((function (map__17186,map__17186__$1,done,active,filt){
return (function (name){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,name,cljs.core.deref.call(null,filt)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__17186,map__17186__$1,done,active,filt){
return (function (){return cljs.core.reset_BANG_.call(null,filt,name);
});})(map__17186,map__17186__$1,done,active,filt))
], null);
});})(map__17186,map__17186__$1,done,active,filt))
;return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span#todo-count","span#todo-count",-1116128108),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),active], null)," ",(function (){var G__17187 = active;switch (G__17187) {
case (1):
return "item";

break;
default:
return "items";

}
})()," left"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul#filters","ul#filters",-899831395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),props_for.call(null,new cljs.core.Keyword(null,"all","all",892129742)),"All"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),props_for.call(null,new cljs.core.Keyword(null,"active","active",1895962068)),"Active"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),props_for.call(null,new cljs.core.Keyword(null,"done","done",-889844188)),"Completed"], null)], null)], null),(((done > (0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#clear-completed","button#clear-completed",-1698725142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.hackpad.reagent.clear_done], null),"Clear completed",done], null):null)], null);
});
cljs.hackpad.reagent.todo_item = (function todo_item(){var editing = reagent.core.atom.call(null,false);return ((function (editing){
return (function (p__17192){var map__17193 = p__17192;var map__17193__$1 = ((cljs.core.seq_QMARK_.call(null,map__17193))?cljs.core.apply.call(null,cljs.core.hash_map,map__17193):map__17193);var title = cljs.core.get.call(null,map__17193__$1,new cljs.core.Keyword(null,"title","title",636505583));var done = cljs.core.get.call(null,map__17193__$1,new cljs.core.Keyword(null,"done","done",-889844188));var id = cljs.core.get.call(null,map__17193__$1,new cljs.core.Keyword(null,"id","id",-1388402092));new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(done)?"completed ":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.deref.call(null,editing))?"editing":null)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.view","div.view",-1680900976),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle","input.toggle",-519545942),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),done,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__17193,map__17193__$1,title,done,id,editing){
return (function (){return cljs.hackpad.reagent.toggle.call(null,id);
});})(map__17193,map__17193__$1,title,done,id,editing))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),((function (map__17193,map__17193__$1,title,done,id,editing){
return (function (){return cljs.core.reset_BANG_.call(null,editing,true);
});})(map__17193,map__17193__$1,title,done,id,editing))
], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.destroy","button.destroy",1044866871),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__17193,map__17193__$1,title,done,id,editing){
return (function (){return cljs.hackpad.reagent.delete$.call(null,id);
});})(map__17193,map__17193__$1,title,done,id,editing))
], null)], null)], null)], null);
if(cljs.core.truth_(cljs.core.deref.call(null,editing)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.hackpad.reagent.todo_edit,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"edit",new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"on-save","on-save",1618176266),((function (map__17193,map__17193__$1,title,done,id,editing){
return (function (p1__17189_SHARP_){return cljs.hackpad.reagent.save.call(null,id,p1__17189_SHARP_);
});})(map__17193,map__17193__$1,title,done,id,editing))
,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515),((function (map__17193,map__17193__$1,title,done,id,editing){
return (function (){return cljs.core.reset_BANG_.call(null,editing,false);
});})(map__17193,map__17193__$1,title,done,id,editing))
], null)], null);
} else
{return null;
}
});
;})(editing))
});
cljs.hackpad.reagent.todo_app = (function todo_app(props){var filt = reagent.core.atom.call(null,new cljs.core.Keyword(null,"all","all",892129742));return ((function (filt){
return (function (){var items = cljs.core.vals.call(null,cljs.core.deref.call(null,cljs.hackpad.reagent.todos));var done = cljs.core.count.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"done","done",-889844188),items));var active = (cljs.core.count.call(null,items) - done);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section#todoapp","section#todoapp",41606040),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header#header","header#header",1650878621),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Todos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.hackpad.reagent.todo_input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"new-todo",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What needs to be done?",new cljs.core.Keyword(null,"on-save","on-save",1618176266),cljs.hackpad.reagent.add_todo], null)], null)], null),(((cljs.core.count.call(null,items) > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section#main","section#main",559170339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#toggle-all","input#toggle-all",-512330812),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),(active === (0)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (items,done,active,filt){
return (function (){return cljs.hackpad.reagent.complete_all.call(null,(active > (0)));
});})(items,done,active,filt))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"toggle-all"], null),"Mark all as complete"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul#todo-list","ul#todo-list",-1648361723),(function (){var iter__4278__auto__ = ((function (items,done,active,filt){
return (function iter__17199(s__17200){return (new cljs.core.LazySeq(null,((function (items,done,active,filt){
return (function (){var s__17200__$1 = s__17200;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17200__$1);if(temp__4126__auto__)
{var s__17200__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17200__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__17200__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__17202 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__17201 = (0);while(true){
if((i__17201 < size__4277__auto__))
{var todo = cljs.core._nth.call(null,c__4276__auto__,i__17201);cljs.core.chunk_append.call(null,b__17202,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.hackpad.reagent.todo_item,todo], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)));
{
var G__17204 = (i__17201 + (1));
i__17201 = G__17204;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17202),iter__17199.call(null,cljs.core.chunk_rest.call(null,s__17200__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17202),null);
}
} else
{var todo = cljs.core.first.call(null,s__17200__$2);return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.hackpad.reagent.todo_item,todo], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)),iter__17199.call(null,cljs.core.rest.call(null,s__17200__$2)));
}
} else
{return null;
}
break;
}
});})(items,done,active,filt))
,null,null));
});})(items,done,active,filt))
;return iter__4278__auto__.call(null,cljs.core.filter.call(null,(function (){var G__17203 = (((cljs.core.deref.call(null,filt) instanceof cljs.core.Keyword))?cljs.core.deref.call(null,filt).fqn:null);switch (G__17203) {
case "all":
return cljs.core.identity;

break;
case "done":
return new cljs.core.Keyword(null,"done","done",-889844188);

break;
case "active":
return cljs.core.complement.call(null,new cljs.core.Keyword(null,"done","done",-889844188));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,filt)))));

}
})(),items));
})()], null)], null)], null):null)], null)], null);
});
;})(filt))
});

//# sourceMappingURL=reagent.js.map