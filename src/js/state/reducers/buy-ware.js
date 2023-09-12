import { computeUnitPrice } from '../../helpers/compute-unit-price.js'
import { copy } from '../../helpers/copy.js'

/**
 * Reducer to buy a ware from the market and stock it in the warehouse.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/buy-ware.js').BUY_WARE_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function buyWareReducer (state, payload) {
  let cities = state.cities
  let playermoney = state.playermoney
  const price = payload.quantity * computeUnitPrice(state, payload.ware)

  if (price >= 0 && price <= playermoney) {
    playermoney = playermoney - price

    cities = state.cities.map((city) => {
      if (city.name !== payload.city) {
        return city
      }

      let stock = city.warehouse.stock
      const updatePreviousWarehouse = stock.find((w) => w.ware === payload.ware)
      if (updatePreviousWarehouse) {
        stock = stock.map((w) => {
          if (w.ware !== payload.ware) {
            return w
          }

          return {
            ware: payload.ware,
            quantity: w.quantity + payload.quantity
          }
        })
      } else {
        stock = stock.concat([{
          ware: payload.ware,
          quantity: payload.quantity
        }])
      }

      stock = stock.filter((w) => w.quantity > 0)

      return {
        ...city,
        supply: city.supply.map((ware) => {
          if (ware.ware !== payload.ware) {
            return ware
          }

          return {
            ...ware,
            quantity: ware.quantity - payload.quantity
          }
        }),
        warehouse: {
          ...city.warehouse,
          stock
        }
      }
    })
  }

  return copy(state, { cities, playermoney })
}
