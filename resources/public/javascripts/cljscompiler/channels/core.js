// Compiled by ClojureScript 0.0-2311
goog.provide('channels.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.dom');
var mouse_channel_15539 = cljs.core.async.chan.call(null);var click_channel_15540 = cljs.core.async.chan.call(null);goog.events.listen(goog.dom.getDocument(),"mousemove",((function (mouse_channel_15539,click_channel_15540){
return (function (event){return cljs.core.async.put_BANG_.call(null,mouse_channel_15539,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event.clientX,event.clientY], null));
});})(mouse_channel_15539,click_channel_15540))
);
goog.events.listen(goog.dom.getDocument(),"click",((function (mouse_channel_15539,click_channel_15540){
return (function (event){return cljs.core.async.put_BANG_.call(null,click_channel_15540,event.clientX);
});})(mouse_channel_15539,click_channel_15540))
);
var c__5906__auto___15541 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5906__auto___15541,mouse_channel_15539,click_channel_15540){
return (function (){var f__5907__auto__ = (function (){var switch__5891__auto__ = ((function (c__5906__auto___15541,mouse_channel_15539,click_channel_15540){
return (function (state_15518){var state_val_15519 = (state_15518[(1)]);if((state_val_15519 === (7)))
{var inst_15513 = (state_15518[(2)]);var state_15518__$1 = (function (){var statearr_15520 = state_15518;(statearr_15520[(7)] = inst_15513);
return statearr_15520;
})();var statearr_15521_15542 = state_15518__$1;(statearr_15521_15542[(2)] = null);
(statearr_15521_15542[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15519 === (1)))
{var state_15518__$1 = state_15518;var statearr_15522_15543 = state_15518__$1;(statearr_15522_15543[(2)] = null);
(statearr_15522_15543[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15519 === (4)))
{var inst_15501 = (state_15518[(8)]);var inst_15499 = (state_15518[(2)]);var inst_15500 = cljs.core.nth.call(null,inst_15499,(0),null);var inst_15501__$1 = cljs.core.nth.call(null,inst_15499,(1),null);var inst_15502 = cljs.core._EQ_.call(null,inst_15501__$1,mouse_channel_15539);var state_15518__$1 = (function (){var statearr_15523 = state_15518;(statearr_15523[(9)] = inst_15500);
(statearr_15523[(8)] = inst_15501__$1);
return statearr_15523;
})();if(inst_15502)
{var statearr_15524_15544 = state_15518__$1;(statearr_15524_15544[(1)] = (5));
} else
{var statearr_15525_15545 = state_15518__$1;(statearr_15525_15545[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15519 === (6)))
{var inst_15501 = (state_15518[(8)]);var inst_15506 = cljs.core._EQ_.call(null,inst_15501,click_channel_15540);var state_15518__$1 = state_15518;if(inst_15506)
{var statearr_15526_15546 = state_15518__$1;(statearr_15526_15546[(1)] = (8));
} else
{var statearr_15527_15547 = state_15518__$1;(statearr_15527_15547[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15519 === (3)))
{var inst_15516 = (state_15518[(2)]);var state_15518__$1 = state_15518;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15518__$1,inst_15516);
} else
{if((state_val_15519 === (2)))
{var inst_15495 = cljs.core.PersistentVector.EMPTY_NODE;var inst_15496 = [click_channel_15540,mouse_channel_15539];var inst_15497 = (new cljs.core.PersistentVector(null,2,(5),inst_15495,inst_15496,null));var state_15518__$1 = state_15518;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15518__$1,(4),inst_15497);
} else
{if((state_val_15519 === (9)))
{var state_15518__$1 = state_15518;var statearr_15528_15548 = state_15518__$1;(statearr_15528_15548[(2)] = null);
(statearr_15528_15548[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15519 === (5)))
{var inst_15504 = console.log("MOUSEMOVE");var state_15518__$1 = state_15518;var statearr_15529_15549 = state_15518__$1;(statearr_15529_15549[(2)] = inst_15504);
(statearr_15529_15549[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15519 === (10)))
{var inst_15511 = (state_15518[(2)]);var state_15518__$1 = state_15518;var statearr_15530_15550 = state_15518__$1;(statearr_15530_15550[(2)] = inst_15511);
(statearr_15530_15550[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15519 === (8)))
{var inst_15508 = console.log("CLICK");var state_15518__$1 = state_15518;var statearr_15531_15551 = state_15518__$1;(statearr_15531_15551[(2)] = inst_15508);
(statearr_15531_15551[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__5906__auto___15541,mouse_channel_15539,click_channel_15540))
;return ((function (switch__5891__auto__,c__5906__auto___15541,mouse_channel_15539,click_channel_15540){
return (function() {
var state_machine__5892__auto__ = null;
var state_machine__5892__auto____0 = (function (){var statearr_15535 = [null,null,null,null,null,null,null,null,null,null];(statearr_15535[(0)] = state_machine__5892__auto__);
(statearr_15535[(1)] = (1));
return statearr_15535;
});
var state_machine__5892__auto____1 = (function (state_15518){while(true){
var ret_value__5893__auto__ = (function (){try{while(true){
var result__5894__auto__ = switch__5891__auto__.call(null,state_15518);if(cljs.core.keyword_identical_QMARK_.call(null,result__5894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5894__auto__;
}
break;
}
}catch (e15536){if((e15536 instanceof Object))
{var ex__5895__auto__ = e15536;var statearr_15537_15552 = state_15518;(statearr_15537_15552[(5)] = ex__5895__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15518);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15536;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15553 = state_15518;
state_15518 = G__15553;
continue;
}
} else
{return ret_value__5893__auto__;
}
break;
}
});
state_machine__5892__auto__ = function(state_15518){
switch(arguments.length){
case 0:
return state_machine__5892__auto____0.call(this);
case 1:
return state_machine__5892__auto____1.call(this,state_15518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5892__auto____0;
state_machine__5892__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5892__auto____1;
return state_machine__5892__auto__;
})()
;})(switch__5891__auto__,c__5906__auto___15541,mouse_channel_15539,click_channel_15540))
})();var state__5908__auto__ = (function (){var statearr_15538 = f__5907__auto__.call(null);(statearr_15538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5906__auto___15541);
return statearr_15538;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5908__auto__);
});})(c__5906__auto___15541,mouse_channel_15539,click_channel_15540))
);

//# sourceMappingURL=core.js.map