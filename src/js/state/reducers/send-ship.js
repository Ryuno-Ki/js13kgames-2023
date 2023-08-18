export function sendShipReducer (state, payload) {
  let ships = state.ships
  let itineraries = state.itineraries

  const ship = state.ships
    .filter((ship) => ship.moored)
    .filter((ship) => ship.position === payload.from)
    .find((ship) => ship.name === payload.ship)

  if (ship) {
    itineraries = [
      ...itineraries,
      {
        from: payload.from,
        to: payload.to,
        ship: payload.ship,
        departed: {
          month: state.activeMonth,
          year: state.activeYear
        }
      }
    ]
    ships = state.ships.map((s) => {
      if (s.name !== payload.ship) {
        return s
      }

      return {
        ...s,
        moored: false,
        position: null
      }
    })
  }

  return Object.assign({}, state, {
    itineraries,
    ships
  })
}
