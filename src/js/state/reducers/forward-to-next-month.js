import { copy } from '../../helpers/copy.js'

/**
 * Reducer to compute the next month and year.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/forward-to-next-month.js').FORWARD_TO_NEXT_MONTH_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function forwardToNextMonthReducer (state, payload) {
  let activeMonth = Number(state.activeMonth) + 1
  let activeYear = state.activeYear

  if (activeMonth > 12) {
    activeMonth = activeMonth - 12
    activeYear = activeYear + 1
  }

  const shipsInTransit = state.ships.some((ship) => ship.itinerary !== null)

  if (shipsInTransit) {
    // forward to the arrival at the closest destination
    const monthOfArrival = state.ships
      .map((ship) => ship.itinerary)
      .map((itinerary) => {
        // We are not interested in moored ships
        // But tell TypeScript to understand .filter((itinerary) => Boolean(itinerary))
        if (itinerary === null) {
          return Number.POSITIVE_INFINITY
        }

        const departure = state.cities.find((city) => city.name === itinerary.from)

        // Cannot happen but TypeScript is not convinced
        if (!departure) {
          return Number.POSITIVE_INFINITY
        }

        const distance = departure.distances[itinerary.to]

        return Number(itinerary.month) + distance
      })

    // Math.min cannot handle Arrays, so spread it to this variadic method
    activeMonth = Math.min(...monthOfArrival)
  }

  return copy(state, { activeMonth: String(activeMonth), activeYear })
}
