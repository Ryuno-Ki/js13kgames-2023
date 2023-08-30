/**
 * Reducer to compute the positions of all ships.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/update-ships.js').UPDATE_SHIPS_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function updateShipsReducer(state: import('../initial-state.js').State, payload: import('../actions/update-ships.js').UPDATE_SHIPS_ACTION['payload']): import('../initial-state.js').State;
