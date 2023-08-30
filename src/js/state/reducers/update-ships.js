/**
 * Reducer to compute the positions of all ships.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/update-ships.js').UPDATE_SHIPS_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function updateShipsReducer (state, payload) {
  const ships = state.ships.map((ship) => {
    const { itinerary, moored } = ship
    if (moored) {
      return ship
    }

    if (!itinerary) {
      console.warn(`${ship.name} is not moored but also not in transit.`)
      return ship
    }

    const { activeMonth, activeYear, distances } = state
    const distance = distances[itinerary.from][itinerary.to]
    let monthOfArrival = Number(itinerary.month) + distance
    let yearOfArrival = itinerary.year

    if (monthOfArrival + distance > 12) {
      monthOfArrival = monthOfArrival - 12
      yearOfArrival = yearOfArrival + 1
    }

    if (activeYear === yearOfArrival) {
      if (monthOfArrival > Number(activeMonth)) {
        // Still sailing
        return ship
      }
    }

    return {
      ...ship,
      itinerary: null,
      moored: true,
      position: itinerary.to
    }
  })

  return Object.assign({}, state, {
    ships
  })
}
