/**
 * Reducer to compute the next month and year.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/forward-to-next-month.js').FORWARD_TO_NEXT_MONTH_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function forwardToNextMonthReducer (state, payload) {
  let activeMonth = Number(state.activeMonth) + 1
  let activeYear = state.activeYear

  if (activeMonth > 12) {
    activeMonth = activeMonth - 12
    activeYear = activeYear + 1
  }

  return Object.assign({}, state, {
    activeMonth: String(activeMonth),
    activeYear
  })
}
