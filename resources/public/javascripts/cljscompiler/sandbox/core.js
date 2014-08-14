// Compiled by ClojureScript 0.0-2277
goog.provide('sandbox.core');
goog.require('cljs.core');
goog.require('hiccups.runtime');
goog.require('hiccups.runtime');
goog.require('cljs_http.client');
goog.require('cljs_http.client');
goog.require('antares.core');
goog.require('antares.core');
sandbox.core.activate_file = (function activate_file(event){antares.core.update_cursor_async.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-file","active-file",1544777749)], null),("http://antares-services.herokuapp.com/services/s3/vendoriq-data-imports/get-object/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(event.target.dataset.fileName)));
return antares.core.update_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-template","active-template",-1511987141)], null),(function (old_value){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"invoice-number","invoice-number",-1359609604),"123456",new cljs.core.Keyword(null,"invoice-amount","invoice-amount",366970402),"$125.35",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item-name","item-name",1560972259),"Tomatoes",new cljs.core.Keyword(null,"overpayment-percentage","overpayment-percentage",680045144),(20)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item-name","item-name",1560972259),"Celery",new cljs.core.Keyword(null,"overpayment-percentage","overpayment-percentage",680045144),(11)], null)], null)], null);
}));
});
sandbox.core.render_files_list = (function render_files_list(data){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,cljs.core.map.call(null,(function (file_name){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.file-name","li.file-name",-1752034445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-file-name","data-file-name",1306288466),file_name], null),file_name], null);
}),data))));
});
antares.core.create_component.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files-list","files-list",-1021882299)], null),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),".files-list",new cljs.core.Keyword(null,"interactions","interactions",550841811),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-type","event-type",319722813),"click",new cljs.core.Keyword(null,"event-selector","event-selector",1193857930),"li.file-name",new cljs.core.Keyword(null,"event-action","event-action",-974748529),sandbox.core.activate_file], null)], null),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),sandbox.core.render_files_list,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),"s3Bucket",new cljs.core.Keyword(null,"bucket-name","bucket-name",-971156135),"vendoriq-data-imports"], null)], null));
sandbox.core.render_active_file_content = (function render_active_file_content(data){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs10718 = new cljs.core.Keyword(null,"filecontent","filecontent",-1743873514).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.map_QMARK_.call(null,attrs10718))
{return ("<pre"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs10718)))+"></pre>");
} else
{return ("<pre>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs10718))+"</pre>");
}
})()));
});
antares.core.create_component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-file","active-file",1544777749)], null),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),".active-file-content",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),sandbox.core.render_active_file_content], null));
sandbox.core.render_week1_template = (function render_week1_template(data){return ("<div class=\"template week1\"><div class=\"header\"><img src=\"\" /></div><div class=\"subheader\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs10726 = new cljs.core.Keyword(null,"invoice-number","invoice-number",-1359609604).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.map_QMARK_.call(null,attrs10726))
{return ("<p"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"invoice-number"], null),attrs10726)))+" />");
} else
{return ("<p class=\"invoice-number\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs10726))+"</p>");
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs10727 = new cljs.core.Keyword(null,"invoice-amount","invoice-amount",366970402).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.map_QMARK_.call(null,attrs10727))
{return ("<p"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"invoice-amount"], null),attrs10727)))+" />");
} else
{return ("<p class=\"invoice-amount\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs10727))+"</p>");
}
})())+"</div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs10728 = cljs.core.mapcat.call(null,(function (item){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.item-name","p.item-name",1411298139),new cljs.core.Keyword(null,"item-name","item-name",1560972259).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.overpayment","p.overpayment",-420319192),new cljs.core.Keyword(null,"overpayment-percentage","overpayment-percentage",680045144).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overpayment-slider","div.overpayment-slider",1232369535),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slider-segment.segment1","div.slider-segment.segment1",-324630914),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.segment-text","p.segment-text",1491528761),"GREAT VALUE"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slider-segment.segment2","div.slider-segment.segment2",701144250),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.segment-text","p.segment-text",1491528761),"TARGET VALUE"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slider-segment.segment3","div.slider-segment.segment3",-1435389386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.segment-text","p.segment-text",1491528761),"OVERPAYING"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slider-marker","div.slider-marker",1618750244),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),("left: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3857__auto__ = (new cljs.core.Keyword(null,"overpayment-percentage","overpayment-percentage",680045144).cljs$core$IFn$_invoke$arity$1(item) + (60));var y__3858__auto__ = (90);return ((x__3857__auto__ < y__3858__auto__) ? x__3857__auto__ : y__3858__auto__);
})())+"%")], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null)], null);
}),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(data));if(cljs.core.map_QMARK_.call(null,attrs10728))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"items"], null),attrs10728)))+"></div>");
} else
{return ("<div class=\"items\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs10728))+"</div>");
}
})())+"</div>");
});
antares.core.create_component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-template","active-template",-1511987141)], null),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),".active-template-content",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),sandbox.core.render_week1_template], null));

//# sourceMappingURL=core.js.map