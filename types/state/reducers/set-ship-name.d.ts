/**
 * Reducer to set the name of the new ship (sanitised).
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/set-ship-name.js').SET_SHIP_NAME_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function setShipNameReducer(state: import('../initial-state.js').State, payload: import('../actions/set-ship-name.js').SET_SHIP_NAME_ACTION['payload']): import('../initial-state.js').State;
