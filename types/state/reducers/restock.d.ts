/**
 * Reducer to restock the stock in each city every month.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/restock.js').RESTOCK_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function restockReducer(state: import('../initial-state.js').State, payload: import('../actions/restock.js').RESTOCK_ACTION['payload']): import('../initial-state.js').State;
