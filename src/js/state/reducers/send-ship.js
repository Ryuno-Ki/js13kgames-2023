/**
 * Reducer to compute the transition of a ship from one city to another
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/send-ship.js').SEND_SHIP_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function sendShipReducer (state, payload) {
  let ships = state.ships

  const ship = state.ships
    .filter((ship) => ship.moored)
    .filter((ship) => ship.position === payload.from)
    .find((ship) => ship.name === payload.ship)

  if (ship) {
    ships = state.ships.map((s) => {
      if (s.name !== payload.ship) {
        return s
      }

      return {
        ...s,
        itinerary: {
          from: payload.from,
          to: payload.to,
          month: Number(state.activeMonth),
          year: state.activeYear
        },
        moored: false,
        position: null
      }
    })
  }

  return Object.assign({}, state, {
    ships
  })
}
