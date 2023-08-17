export function switchToViewReducer (state, payload) {
  let activeCity = state.activeCity
  const activeView = payload.view

	if (payload.view === 'sea') {
		// FIXME: causes a runtime crash
		//activeCity = null
	}

  return Object.assign({}, state, {
    activeCity,
    activeView
  })
}
