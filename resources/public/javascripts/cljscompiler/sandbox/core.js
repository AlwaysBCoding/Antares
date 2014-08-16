// Compiled by ClojureScript 0.0-2277
goog.provide('sandbox.core');
goog.require('cljs.core');
goog.require('components.core');
goog.require('components.core');
goog.require('antares.core');
goog.require('antares.core');
antares.core.create_component.call(null,components.core.files_list);
antares.core.create_component.call(null,components.core.templates_list);
antares.core.create_component.call(null,components.core.active_file);
antares.core.create_component.call(null,components.core.week1_template);
sandbox.core.create_output_structure = (function create_output_structure(input_data){var matrix = antares.core.string__GT_matrix.call(null,input_data);var headers = cljs.core.map.call(null,((function (matrix){
return (function (p1__16258_SHARP_){return cljs.core.keyword.call(null,p1__16258_SHARP_);
});})(matrix))
,cljs.core.first.call(null,matrix));var rows = cljs.core.rest.call(null,matrix);var input_data_map = cljs.core.map.call(null,((function (matrix,headers,rows){
return (function (row){return cljs.core.zipmap.call(null,headers,row);
});})(matrix,headers,rows))
,rows);return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"restaurant","restaurant",-1643127983),new cljs.core.Keyword(null,"restaurant","restaurant",-1643127983).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,input_data_map)),new cljs.core.Keyword(null,"vendor","vendor",1931975424),new cljs.core.Keyword(null,"vendor_invoiceanalyzer","vendor_invoiceanalyzer",522045614).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,input_data_map)),new cljs.core.Keyword(null,"invoice-number","invoice-number",-1359609604),new cljs.core.Keyword(null,"invoicenumber_invoiceanalyzer","invoicenumber_invoiceanalyzer",-342607661).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,input_data_map)),new cljs.core.Keyword(null,"invoice-amount","invoice-amount",366970402),new cljs.core.Keyword(null,"invoiceamount_invoiceanalyzer","invoiceamount_invoiceanalyzer",-1390845101).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,input_data_map)),new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.map.call(null,((function (matrix,headers,rows,input_data_map){
return (function (item_row){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item-name","item-name",1560972259),new cljs.core.Keyword(null,"description_invoiceanalyzer","description_invoiceanalyzer",1319963185).cljs$core$IFn$_invoke$arity$1(item_row),new cljs.core.Keyword(null,"overpayment","overpayment",-530558288),new cljs.core.Keyword(null,"variance_invoiceanalyzer","variance_invoiceanalyzer",-1497581216).cljs$core$IFn$_invoke$arity$1(item_row)], null);
});})(matrix,headers,rows,input_data_map))
,cljs.core.filter.call(null,((function (matrix,headers,rows,input_data_map){
return (function (row){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"variance_invoiceanalyzer","variance_invoiceanalyzer",-1497581216).cljs$core$IFn$_invoke$arity$1(row));
});})(matrix,headers,rows,input_data_map))
,input_data_map))], null);
});
sandbox.core.input_data = cljs.core.get_in.call(null,cljs.core.deref.call(null,antares.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-file-data","active-file-data",-495140405),new cljs.core.Keyword(null,"filecontent","filecontent",-1743873514)], null));
sandbox.core.create_output_structure.call(null,sandbox.core.input_data);

//# sourceMappingURL=core.js.map