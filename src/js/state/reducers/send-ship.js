export function sendShipReducer (state, payload) {
  let activeCity = state.activeCity
  let ships = state.ships

  const ship = state.ships
    .filter((ship) => ship.docked)
    .filter((ship) => ship.position === payload.from)
    .find((ship) => ship.name === payload.ship)

  if (ship) {
    activeCity = payload.to
    ships = state.ships.map((s) => {
      return {
        ...s,
        position: payload.to
      }
    })
  }

  return Object.assign({}, state, {
    activeCity,
    ships
  })
}
