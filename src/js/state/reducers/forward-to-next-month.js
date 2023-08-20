export function forwardToNextMonthReducer (state, payload) {
  let activeMonth = state.activeMonth + 1
  let activeYear = state.activeYear

  if (activeMonth > 12) {
    activeMonth = activeMonth - 12
    activeYear = activeYear + 1
  }

  return Object.assign({}, state, {
    activeMonth,
    activeYear
  })
}
