/**
 * Reducer to compute the cargo of a ship and update the city's warehouse.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/load-ship.js').LOAD_SHIP_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 * @todo Think about check on payload.ware in city.supply before loading
 */
export function loadShipReducer(state: import('../initial-state.js').State, payload: import('../actions/load-ship.js').LOAD_SHIP_ACTION['payload']): import('../initial-state.js').State;
