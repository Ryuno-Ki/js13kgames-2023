import { copy } from '../../helpers/copy.js'

/**
 * Reducer to unlock content whenever a historic event is met.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/unveil-history.js').UNVEIL_HISTORY_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function unveilHistoryReducer (state, payload) {
  const { activeMonth, activeYear, history } = state

  const pastEvents = history
    .filter((historicEvent) => {
      const { month, year } = historicEvent

      return year <= activeYear && Number(month) <= Number(activeMonth)
    })

  const pastCityFoundedEvents = pastEvents
    .filter((historicEvent) => {
      return Boolean(/** @type {import('../history.js').CityFounded} */(historicEvent).city)
    })

  const pastShipTypeIntroducedEvents = pastEvents
    .filter((historicEvent) => {
      return Boolean(/** @type {import('../history.js').ShipTypeIntroduced} */(historicEvent).shipType)
    })

  const cities = state.cities.map((city) => {
    if (city.isFounded) {
      return city
    }

    return {
      ...city,
      isFounded: Boolean(pastCityFoundedEvents.find((historicEvent) => {
        return /** @type {import('../history.js').CityFounded} */(historicEvent).city === city.name
      }))
    }
  })

  const shipTypes = {
    ...state.shipTypes
  }

  pastShipTypeIntroducedEvents.forEach((historicEvent) => {
    const shipType = /** @type {import('../history.js').ShipTypeIntroduced} */(historicEvent).shipType
    shipTypes[shipType] = {
      ...state.shipTypes[shipType],
      isKnown: true
    }
  })

  return copy(state, { cities, shipTypes })
}
