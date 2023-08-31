export default store;
declare const store: Store;
declare class Store {
    /**
     * @argument {import('./reducers/index.js').reducer} reducer
     */
    constructor(reducer: typeof reducer);
    reducer: typeof reducer;
    /** @type {import('./initial-state.js').State} */
    state: import('./initial-state.js').State;
    /**
     * Compute a new state.
     *
     * It's asynchronous because I might need to call out to an API. Not relevant
     * to this game, but I keep the habit.
     *
     * @argument {import('./actions/check-on-win-condition.js').CHECK_ON_WIN_CONDITION_ACTION | import('./actions/forward-to-next-month.js').FORWARD_TO_NEXT_MONTH_ACTION | import('./actions/load-ship.js').LOAD_SHIP_ACTION | import('./actions/reset.js').RESET_ACTION | import('./actions/send-ship.js').SEND_SHIP_ACTION | import('./actions/set-color-preference.js').SET_COLOR_PREFERENCE_ACTION | import('./actions/set-level-scenario.js').SET_LEVEL_SCENARIO_ACTION | import('./actions/set-playername.js').SET_PLAYERNAME_ACTION | import('./actions/switch-to-city.js').SWITCH_TO_CITY_ACTION | import('./actions/switch-to-scene.js').SWITCH_TO_SCENE_ACTION | import('./actions/switch-to-view.js').SWITCH_TO_VIEW_ACTION | import('./actions/unload-ship.js').UNLOAD_SHIP_ACTION | import('./actions/update-ships.js').UPDATE_SHIPS_ACTION} action
    */
    dispatch(action: import('./actions/check-on-win-condition.js').CHECK_ON_WIN_CONDITION_ACTION | import('./actions/forward-to-next-month.js').FORWARD_TO_NEXT_MONTH_ACTION | import('./actions/load-ship.js').LOAD_SHIP_ACTION | import('./actions/reset.js').RESET_ACTION | import('./actions/send-ship.js').SEND_SHIP_ACTION | import('./actions/set-color-preference.js').SET_COLOR_PREFERENCE_ACTION | import('./actions/set-level-scenario.js').SET_LEVEL_SCENARIO_ACTION | import('./actions/set-playername.js').SET_PLAYERNAME_ACTION | import('./actions/switch-to-city.js').SWITCH_TO_CITY_ACTION | import('./actions/switch-to-scene.js').SWITCH_TO_SCENE_ACTION | import('./actions/switch-to-view.js').SWITCH_TO_VIEW_ACTION | import('./actions/unload-ship.js').UNLOAD_SHIP_ACTION | import('./actions/update-ships.js').UPDATE_SHIPS_ACTION): Promise<void>;
    /**
     * Return the current state.
     */
    getState(): import("./initial-state.js").State;
    /**
     * Run side effects on certain actions.
     *
     * @private
     * @argument {import('./actions/check-on-win-condition.js').CHECK_ON_WIN_CONDITION_ACTION | import('./actions/forward-to-next-month.js').FORWARD_TO_NEXT_MONTH_ACTION | import('./actions/load-ship.js').LOAD_SHIP_ACTION | import('./actions/reset.js').RESET_ACTION | import('./actions/send-ship.js').SEND_SHIP_ACTION | import('./actions/set-color-preference.js').SET_COLOR_PREFERENCE_ACTION | import('./actions/set-level-scenario.js').SET_LEVEL_SCENARIO_ACTION | import('./actions/set-playername.js').SET_PLAYERNAME_ACTION | import('./actions/switch-to-city.js').SWITCH_TO_CITY_ACTION | import('./actions/switch-to-scene.js').SWITCH_TO_SCENE_ACTION | import('./actions/switch-to-view.js').SWITCH_TO_VIEW_ACTION | import('./actions/unload-ship.js').UNLOAD_SHIP_ACTION | import('./actions/update-ships.js').UPDATE_SHIPS_ACTION} action
     */
    private _applySideEffects;
}
import { reducer } from './reducers/index.js';
