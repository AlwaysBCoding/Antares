// Compiled by ClojureScript 0.0-2311
goog.provide('refsareblind.test');
goog.require('cljs.core');
goog.require('antares.core');
goog.require('antares.core');
cljs.core.reset_BANG_.call(null,antares.core.app_state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"sports","sports",1233675774),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"NBA"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"NFL"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"EPL"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"MLB"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"NHL"], null)], null),new cljs.core.Keyword(null,"active-sport","active-sport",2007602554),"",new cljs.core.Keyword(null,"active-team","active-team",-709241146),"",new cljs.core.Keyword(null,"active-sport-teams-list","active-sport-teams-list",-1584232956),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"teams","teams",1677714510),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"nba","nba",2141838965),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Atlanta Hawks"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Charlotte Hornets"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Miami Heat"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Orlando Magic"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Washington Wizards"], null)], null),new cljs.core.Keyword(null,"nfl","nfl",-791494797),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Dallas Cowboys"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"New York Giants"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Philadelphia Eagles"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Washington Redskins"], null)], null),new cljs.core.Keyword(null,"nhl","nhl",1113652357),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"New York Islanders"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"New York Rangers"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Washington Capitals"], null)], null),new cljs.core.Keyword(null,"mlb","mlb",1027939081),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Boston Red Sox"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"New York Yankees"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Tampa Bay Rays"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Toronto Blue Jays"], null)], null),new cljs.core.Keyword(null,"epl","epl",545440251),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Tottenham"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Everton"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Manchester United"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Chelsea"], null)], null)], null)], null));
refsareblind.test.sport_item = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"sport-item","sport-item",1431098311),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sport.item","div.sport.item",-1674063201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sport.content","div.sport.content",-1046199146),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(data)], null)], null);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sport","div.sport",552134301),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null)], null)], null));
refsareblind.test.sports_list = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"sports-list","sports-list",-1306646973),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sports-list","div.sports-list",-1036308293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.divided.list","div.ui.divided.list",-105123695),(function (){var iter__4278__auto__ = (function iter__16710(s__16711){return (new cljs.core.LazySeq(null,(function (){var s__16711__$1 = s__16711;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16711__$1);if(temp__4126__auto__)
{var s__16711__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16711__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__16711__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__16713 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__16712 = (0);while(true){
if((i__16712 < size__4277__auto__))
{var sport = cljs.core._nth.call(null,c__4276__auto__,i__16712);cljs.core.chunk_append.call(null,b__16713,antares.core.render_html.call(null,refsareblind.test.sport_item,sport));
{
var G__16714 = (i__16712 + (1));
i__16712 = G__16714;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16713),iter__16710.call(null,cljs.core.chunk_rest.call(null,s__16711__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16713),null);
}
} else
{var sport = cljs.core.first.call(null,s__16711__$2);return cljs.core.cons.call(null,antares.core.render_html.call(null,refsareblind.test.sport_item,sport),iter__16710.call(null,cljs.core.rest.call(null,s__16711__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,data);
})()], null)], null);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sports-list","div.sports-list",-1036308293),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(refsareblind.test.sport_item)], null)], null));
refsareblind.test.active_sport = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"active-sport","active-sport",2007602554),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.active-sport","div.active-sport",1285273255),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(data)], null)], null);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (self){return console.log(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(self));
})], null));
refsareblind.test.team_item = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"team-item","team-item",-171999793),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.team.item","div.team.item",-1498369025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.team.content","div.team.content",-757249947),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(data)], null)], null);
}),new cljs.core.Keyword(null,"stlye","stlye",-762304846),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sport","div.sport",552134301),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"orange"], null)], null)], null)], null));
refsareblind.test.active_sport_active_team = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"active-sport-active-team","active-sport-active-team",-2088102934),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.active-sport-active-team","div.active-sport-active-team",-782025591),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(data)], null)], null);
})], null));
refsareblind.test.active_sport_teams_list = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"active-sport-team-list","active-sport-team-list",-1022562032),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.team-list","div.team-list",-20781728),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.divided.list","div.ui.divided.list",-105123695),(function (){var iter__4278__auto__ = (function iter__16715(s__16716){return (new cljs.core.LazySeq(null,(function (){var s__16716__$1 = s__16716;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16716__$1);if(temp__4126__auto__)
{var s__16716__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16716__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__16716__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__16718 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__16717 = (0);while(true){
if((i__16717 < size__4277__auto__))
{var team = cljs.core._nth.call(null,c__4276__auto__,i__16717);cljs.core.chunk_append.call(null,b__16718,antares.core.render_html.call(null,refsareblind.test.team_item,team));
{
var G__16719 = (i__16717 + (1));
i__16717 = G__16719;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16718),iter__16715.call(null,cljs.core.chunk_rest.call(null,s__16716__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16718),null);
}
} else
{var team = cljs.core.first.call(null,s__16716__$2);return cljs.core.cons.call(null,antares.core.render_html.call(null,refsareblind.test.team_item,team),iter__16715.call(null,cljs.core.rest.call(null,s__16716__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,data);
})()], null)], null);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.team-list","div.team-list",-20781728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(refsareblind.test.team_item)], null)], null));
refsareblind.test.root = antares.core.component.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"subcomponents","subcomponents",-1115692349),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refsareblind.test.active_sport], null),new cljs.core.Keyword(null,"render","render",-1408033454),(function (data){new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Refs Are Blind Test App"], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.ui.grid","div.container.ui.grid",1464028043),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.wide.four","div.column.wide.four",-1641566707),antares.core.render_html.call(null,refsareblind.test.active_sport,new cljs.core.Keyword(null,"active-sport","active-sport",2007602554).cljs$core$IFn$_invoke$arity$1(data)),antares.core.render_html.call(null,refsareblind.test.sports_list,new cljs.core.Keyword(null,"sports","sports",1233675774).cljs$core$IFn$_invoke$arity$1(data))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.wide.four","div.column.wide.four",-1641566707),antares.core.render_html.call(null,refsareblind.test.active_sport_active_team,new cljs.core.Keyword(null,"active-team","active-team",-709241146).cljs$core$IFn$_invoke$arity$1(data)),antares.core.render_html.call(null,refsareblind.test.active_sport_teams_list,new cljs.core.Keyword(null,"active-sport-teams-list","active-sport-teams-list",-1584232956).cljs$core$IFn$_invoke$arity$1(data))], null)], null)], null);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(refsareblind.test.active_sport),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(refsareblind.test.sports_list),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(refsareblind.test.active_sport_teams_list)], null)], null));
antares.core.bind.call(null,refsareblind.test.root,cljs.core.PersistentVector.EMPTY,"#antares");
refsareblind.test.event_mappings = (function event_mappings(event){if(cljs.core.truth_((function (){var and__3541__auto__ = cljs.core._EQ_.call(null,event.type,"click");if(and__3541__auto__)
{return event.target.classList.contains("sport");
} else
{return and__3541__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activate-sport","activate-sport",1606670169),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),event.target.textContent,new cljs.core.Keyword(null,"teams-cursor","teams-cursor",-1332129864),(function (){var G__16721 = event.target.textContent;switch (G__16721) {
case "NBA":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),new cljs.core.Keyword(null,"nba","nba",2141838965)], null);

break;
case "NHL":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),new cljs.core.Keyword(null,"nhl","nhl",1113652357)], null);

break;
case "MLB":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),new cljs.core.Keyword(null,"mlb","mlb",1027939081)], null);

break;
case "NFL":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),new cljs.core.Keyword(null,"nfl","nfl",-791494797)], null);

break;
case "EPL":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),new cljs.core.Keyword(null,"epl","epl",545440251)], null);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(event.target.textContent))));

}
})()], null)], null);
} else
{if(cljs.core.truth_((function (){var and__3541__auto__ = cljs.core._EQ_.call(null,event.type,"click");if(and__3541__auto__)
{return event.target.classList.contains("team");
} else
{return and__3541__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activate-team","activate-team",154736699),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),event.target.textContent], null)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"no-action","no-action",-517532536),cljs.core.PersistentArrayMap.EMPTY], null);

}
}
});
refsareblind.test.controller = (function controller(p__16723){var vec__16725 = p__16723;var control = cljs.core.nth.call(null,vec__16725,(0),null);var data = cljs.core.nth.call(null,vec__16725,(1),null);if(cljs.core._EQ_.call(null,control,new cljs.core.Keyword(null,"activate-sport","activate-sport",1606670169)))
{antares.core.cursor__GT_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-sport","active-sport",2007602554)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(data)], null));
antares.core.cursor__GT_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-sport-teams-list","active-sport-teams-list",-1584232956)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,antares.core.app_state),new cljs.core.Keyword(null,"teams-cursor","teams-cursor",-1332129864).cljs$core$IFn$_invoke$arity$1(data)));
return antares.core.cursor__GT_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-team","active-team",-709241146)], null),"");
} else
{if(cljs.core._EQ_.call(null,control,new cljs.core.Keyword(null,"activate-team","activate-team",154736699)))
{return antares.core.cursor__GT_value.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-team","active-team",-709241146)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(data)], null));
} else
{return null;
}
}
});
antares.core.event_loop.call(null,refsareblind.test.event_mappings,refsareblind.test.controller);
antares.core.renderer.call(null,refsareblind.test.root);

//# sourceMappingURL=test.js.map