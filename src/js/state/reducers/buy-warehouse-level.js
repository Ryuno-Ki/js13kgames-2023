import { NO_CITY } from '../../constants.js'
import { copy } from '../../helpers/copy.js'

/**
 * Reducer to buy another warehouse level in a city.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/buy-warehouse-level.js').BUY_WAREHOUSE_LEVEL_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function buyWarehouseLevelReducer (state, payload) {
  const { activeCity } = state
  const { city } = payload

  let { playermoney, cities } = state

  if (activeCity !== city) {
    return copy(state, { playermoney, cities })
  }

  const cityWithWarehouse = state.cities.find((c) => c.name === city)

  if (!cityWithWarehouse) {
    console.warn(NO_CITY)
    return copy(state, { playermoney, cities })
  }

  const price = 1000 * Number(cityWithWarehouse.warehouse.level)

  if (price <= playermoney) {
    playermoney = playermoney - price

    cities = state.cities.map((c) => {
      if (c.name !== city) {
        return c
      }

      const level = /** @type {'2' | '3' | '4'} */(String(Math.min(Number(c.warehouse.level) + 1, 4)))

      return {
        ...c,
        warehouse: {
          ...c.warehouse,
          level
        }
      }
    })
  }

  return copy(state, { cities, playermoney })
}
