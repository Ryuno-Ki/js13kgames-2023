/**
 * Reducer to compute the stock of a warehouse and update the cargo of a ship.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/unload-ship.js').UNLOAD_SHIP_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function unloadShipReducer(state: import('../initial-state.js').State, payload: import('../actions/unload-ship.js').UNLOAD_SHIP_ACTION['payload']): import('../initial-state.js').State;
