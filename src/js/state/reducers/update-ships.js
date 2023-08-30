export function updateShipsReducer (state, payload) {
  const itineraries = state.itineraries

  const ships = state.ships.map((ship) => {
    if (ship.moored) {
      return ship
    }

    const activeMonth = state.activeMonth
    const activeYear = state.activeYear
    return {
      ...ship
    }
  })

  return Object.assign({}, state, {
    itineraries,
    ships
  })
}
