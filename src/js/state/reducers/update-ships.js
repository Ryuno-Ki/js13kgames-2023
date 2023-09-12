import { copy } from '../../helpers/copy.js'
import { NO_CITY } from '../../constants.js'

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

    const departure = state.cities.find((city) => city.name === itinerary.from)

    if (!departure) {
      console.warn(NO_CITY)
      return copy(state, {})
    }

    const { activeMonth, activeYear } = state
    const distance = departure.distances[itinerary.to]
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

  return copy(state, { ships })
}
