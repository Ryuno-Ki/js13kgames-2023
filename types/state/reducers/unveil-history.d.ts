/**
 * Reducer to unlock content whenever a historic event is met.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/unveil-history.js').UNVEIL_HISTORY_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function unveilHistoryReducer(state: import('../initial-state.js').State, payload: import('../actions/unveil-history.js').UNVEIL_HISTORY_ACTION['payload']): import('../initial-state.js').State;
