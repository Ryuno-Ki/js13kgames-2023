import { copy } from '../../helpers/copy.js'

/**
 * Reducer to buy a ware from the market and stock it in the warehouse.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/buy-ware.js').BUY_WARE_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function buyWareReducer (state, payload) {
  const { city, quantity, ware } = payload
  let cities = state.cities
  let playermoney = state.playermoney

  const price = quantity * state.wares[ware]

  if (price >= 0 && price <= playermoney) {
    playermoney = playermoney - price

    cities = state.cities.map((c) => {
      if (c.name !== city) {
        return c
      }

      const supply = {
        ...c.supply
      }
      supply[ware] = supply[ware] - quantity

      const warehouse = {
        ...c.warehouse
      }
      warehouse[ware] = warehouse[ware] + quantity

      return {
        ...c,
        supply,
        warehouse
      }
    })
  }

  return copy(state, { cities, playermoney })
}
