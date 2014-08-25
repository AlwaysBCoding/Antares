// Compiled by ClojureScript 0.0-2311
goog.provide('antares.interactions');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('antares.core');
goog.require('goog.dom.dataset');
goog.require('goog.dom.dataset');
goog.require('goog.dom.classes');
goog.require('antares.core');
goog.require('goog.dom');
goog.require('goog.events');
antares.interactions.add_class = (function add_class(element,class$){return goog.dom.classes.add(element,class$);
});
antares.interactions.remove_class = (function remove_class(element,class$){return goog.dom.classes.remove(element,class$);
});
antares.interactions.listen = (function listen(component_binding,event_type,handler){return goog.events.listen(document.querySelector(antares.core.get_attr.call(null,component_binding,new cljs.core.Keyword(null,"dom-cursor","dom-cursor",-1375555677))),event_type,handler,true);
});
antares.interactions.get_data = (function get_data(element,attr){return goog.dom.dataset.get(element,attr);
});

//# sourceMappingURL=interactions.js.map