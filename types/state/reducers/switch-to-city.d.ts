/**
 * Reducer to compute the transition to another city.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/switch-to-city.js').SWITCH_TO_CITY_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function switchToCityReducer(state: import('../initial-state.js').State, payload: import('../actions/switch-to-city.js').SWITCH_TO_CITY_ACTION['payload']): import('../initial-state.js').State;
