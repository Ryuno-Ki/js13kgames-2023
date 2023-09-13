import { copy } from '../../helpers/copy.js'

/**
 * Reducer to sell a ware from the market and stock it in the warehouse.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/sell.js').SELL_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function sellReducer (state, payload) {
  const { city, quantity, ware } = payload

  let cities = state.cities
  const price = quantity * state.wares[ware]
  const playermoney = state.playermoney + price

  cities = state.cities.map((c) => {
    if (c.name !== city) {
      return c
    }

    const supply = {
      ...c.supply
    }
    supply[ware] = supply[ware] + quantity

    const stock = {
      ...c.warehouse.stock
    }
    stock[ware] = stock[ware] - quantity

    return {
      ...c,
      supply,
      warehouse: {
        ...c.warehouse,
        stock
      }
    }
  })

  return copy(state, { cities, playermoney })
}
