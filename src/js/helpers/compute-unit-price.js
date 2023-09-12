import { NO_CITY } from '../constants.js'

/**
 * Helper function to compute the price for a ware.
 *
 * @argument {import('../state/initial-state.js').State} state
 * @argument {import('../state/wares.js').Ware} ware
 * @returns {number}
 */
export function computeUnitPrice (state, ware) {
  const city = state.cities.find((city) => city.name === state.activeCity)

  if (!city) {
    console.warn(NO_CITY)
    return -1
  }

  const demandQuantity = city.demand[ware]
  const supplyQuantity = city.supply[ware]
  const basePriceForWare = state.wares[ware]

  return basePriceForWare * (demandQuantity / supplyQuantity) || -1
}
