/**
 * Reducer to compute the transition of a ship from one city to another
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/send-ship.js').SEND_SHIP_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function sendShipReducer(state: import('../initial-state.js').State, payload: import('../actions/send-ship.js').SEND_SHIP_ACTION['payload']): import('../initial-state.js').State;
