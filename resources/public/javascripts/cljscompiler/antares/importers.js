// Compiled by ClojureScript 0.0-2311
goog.provide('antares.importers');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs_http.client');
antares.importers.s3File = (function s3File(bucket_name,file_name){return cljs_http.client.get.call(null,("http://s3.amazonaws.com/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(bucket_name)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null));
});
antares.importers.s3Bucket = (function s3Bucket(bucket_name){return cljs_http.client.get.call(null,("http://antares-services.herokuapp.com/services/s3/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(bucket_name)+"/list-objects"),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=importers.js.map