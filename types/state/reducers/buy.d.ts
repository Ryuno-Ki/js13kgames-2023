/**
 * Reducer to buy a ware from the market and stock it in the warehouse.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/buy.js').BUY_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function buyReducer(state: import('../initial-state.js').State, payload: import('../actions/buy.js').BUY_ACTION['payload']): import('../initial-state.js').State;
