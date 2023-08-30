/**
 * Combined reducer.
 *
 * @argument {import('../initial-state.js').State | undefined} state
 * @argument {import('../actions/forward-to-next-month.js').FORWARD_TO_NEXT_MONTH_ACTION | import('../actions/load-ship.js').LOAD_SHIP_ACTION | import('../actions/send-ship.js').SEND_SHIP_ACTION | import('../actions/switch-to-city.js').SWITCH_TO_CITY_ACTION | import('../actions/switch-to-scene.js').SWITCH_TO_SCENE_ACTION | import('../actions/switch-to-view.js').SWITCH_TO_VIEW_ACTION | import('../actions/unload-ship.js').UNLOAD_SHIP_ACTION | import('../actions/update-ships.js').UPDATE_SHIPS_ACTION} action
 * @returns {import('../initial-state.js').State}
 */
export function reducer(state: import('../initial-state.js').State | undefined, action: import('../actions/forward-to-next-month.js').FORWARD_TO_NEXT_MONTH_ACTION | import('../actions/load-ship.js').LOAD_SHIP_ACTION | import('../actions/send-ship.js').SEND_SHIP_ACTION | import('../actions/switch-to-city.js').SWITCH_TO_CITY_ACTION | import('../actions/switch-to-scene.js').SWITCH_TO_SCENE_ACTION | import('../actions/switch-to-view.js').SWITCH_TO_VIEW_ACTION | import('../actions/unload-ship.js').UNLOAD_SHIP_ACTION | import('../actions/update-ships.js').UPDATE_SHIPS_ACTION): import('../initial-state.js').State;
