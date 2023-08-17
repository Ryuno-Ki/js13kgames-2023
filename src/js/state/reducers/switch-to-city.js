export function switchToCityReducer (state, payload) {
  const activeView = 'city'
  // TODO: Validate for eligible city once flag is introduced
  const activeCity = payload.city

  return Object.assign({}, state, {
    activeCity,
    activeView
  })
}
