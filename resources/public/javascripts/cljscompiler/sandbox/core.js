// Compiled by ClojureScript 0.0-2277
goog.provide('sandbox.core');
goog.require('cljs.core');
goog.require('antares.core');
goog.require('antares.core');
antares.core.data_bind.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"firstname","firstname",1659984849)], null),".firstname",(function (data){return data.toUpperCase();
}));
antares.core.data_bind.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lastname","lastname",-265181465)], null),cljs.core.list(".lastname",".lastname2"),(function (data){return data;
}));
antares.core.data_bind.call(null,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"firstname","firstname",1659984849)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lastname","lastname",-265181465)], null)),".displayName",(function (p__11906){var vec__11907 = p__11906;var firstname = cljs.core.nth.call(null,vec__11907,(0),null);var lastname = cljs.core.nth.call(null,vec__11907,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(firstname.toUpperCase())+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lastname));
}));
antares.core.data_bind.call(null,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),new cljs.core.Keyword(null,"nba","nba",2141838965)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),new cljs.core.Keyword(null,"nfl","nfl",-791494797)], null)),cljs.core.list(".sportsTeams1",".sportsTeams2"),(function (p__11908){var vec__11909 = p__11908;var nba_team = cljs.core.nth.call(null,vec__11909,(0),null);var nfl_team = cljs.core.nth.call(null,vec__11909,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nba_team)+"--"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nfl_team.toUpperCase()));
}));
cljs.core.reset_BANG_.call(null,antares.core.app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"firstname","firstname",1659984849),"jordan",new cljs.core.Keyword(null,"lastname","lastname",-265181465),"leigh",new cljs.core.Keyword(null,"teams","teams",1677714510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nba","nba",2141838965),"wizards",new cljs.core.Keyword(null,"nfl","nfl",-791494797),"redskins"], null)], null));
setTimeout((function (){return cljs.core.reset_BANG_.call(null,antares.core.app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"firstname","firstname",1659984849),"dexter",new cljs.core.Keyword(null,"lastname","lastname",-265181465),"jackson",new cljs.core.Keyword(null,"teams","teams",1677714510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nba","nba",2141838965),"bulls",new cljs.core.Keyword(null,"nfl","nfl",-791494797),"bears"], null)], null));
}),(2500));

//# sourceMappingURL=core.js.map