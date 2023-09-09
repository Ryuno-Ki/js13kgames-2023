/**
 * Reducer to sell a ware from the market and stock it in the warehouse.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/sell.js').SELL_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function sellReducer(state: import('../initial-state.js').State, payload: import('../actions/sell.js').SELL_ACTION['payload']): import('../initial-state.js').State;
