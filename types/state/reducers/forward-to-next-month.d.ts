/**
 * Reducer to compute the next month and year.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/forward-to-next-month.js').FORWARD_TO_NEXT_MONTH_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function forwardToNextMonthReducer(state: import('../initial-state.js').State, payload: import('../actions/forward-to-next-month.js').FORWARD_TO_NEXT_MONTH_ACTION['payload']): import('../initial-state.js').State;
