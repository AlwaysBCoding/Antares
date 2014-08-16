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
sandbox.core.create_output_structure = (function create_output_structure(input_data){var create_map = (function (input_csv){var matrix = antares.core.string__GT_matrix.call(null,input_data);var headers = cljs.core.first.call(null,matrix);var rows = cljs.core.rest.call(null,matrix);return headers;
});return antares.core.string__GT_matrix.call(null,cljs.core.pr_str.call(null,input_data));
});

//# sourceMappingURL=core.js.map