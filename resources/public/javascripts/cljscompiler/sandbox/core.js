// Compiled by ClojureScript 0.0-2277
goog.provide('sandbox.core');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs_http.client');
goog.require('antares.core');
goog.require('antares.core');
antares.core.two_way_bind.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"firstname","firstname",1659984849)], null),".firstname-input");
antares.core.data_bind.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"firstname","firstname",1659984849)], null),".firstname-binding",(function (data){return data;
}));
antares.core.create_component.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files-list","files-list",-1021882299)], null),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),".files-list",new cljs.core.Keyword(null,"interactions","interactions",550841811),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-type","event-type",319722813),"click",new cljs.core.Keyword(null,"event-selector","event-selector",1193857930),"li.file-name",new cljs.core.Keyword(null,"event-action","event-action",-974748529),(function (event){return antares.core.update_cursor_async.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-file","active-file",1544777749)], null),("http://antares-services.herokuapp.com/services/s3/vendoriq-data-imports/get-object/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(event.target.dataset.filename)));
})], null)], null),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (data){return cljs.core.map.call(null,(function (file_name){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.file-name","li.file-name",-1752034445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-filename","data-filename",1476355539),file_name], null),file_name], null);
}),data);
}),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),"s3Bucket",new cljs.core.Keyword(null,"bucket-name","bucket-name",-971156135),"vendoriq-data-imports"], null)], null));
antares.core.create_component.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app-cursor","app-cursor",1859881648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-file","active-file",1544777749)], null),new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677),".active-file-content",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (data){return data;
})], null));

//# sourceMappingURL=core.js.map