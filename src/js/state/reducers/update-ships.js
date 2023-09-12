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
  let { activeCity, playermoney } = state

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

    const distance = departure.distances[itinerary.to]
    const monthOfArrival = Number(itinerary.month) + distance

    if (monthOfArrival > Number(state.activeMonth)) {
      // Still sailing
      return ship
    }

    // Pay the crew on arrival for every month on sea
    playermoney = Math.max(playermoney - state.shipTypes[ship.type].upkeep * distance, 0)

    // You arrived in another city!
    activeCity = itinerary.to

    return {
      ...ship,
      itinerary: null,
      moored: true,
      position: itinerary.to
    }
  })

  return copy(state, { activeCity, playermoney, ships })
}
