import { copy } from '../../helpers/copy.js'
import { NO_CITY } from '../../constants.js'

/**
 * Reducer to sell a ware from the market and stock it in the warehouse.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/sell.js').SELL_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function sellReducer (state, payload) {
  let cities = state.cities
  const price = payload.quantity * computeSKU(state, payload.ware)
  const playermoney = state.playermoney + price

  cities = state.cities.map((city) => {
    if (city.name !== payload.city) {
      return city
    }

    let supply = city.supply
    const updatePreviousSupply = supply.find((w) => w.ware === payload.ware)
    if (updatePreviousSupply) {
      supply = supply.map((w) => {
        if (w.ware !== payload.ware) {
          return w
        }

        return {
          ware: payload.ware,
          quantity: w.quantity + payload.quantity
        }
      })
    } else {
      supply = supply.concat([{
        ware: payload.ware,
        quantity: payload.quantity
      }])
    }

    supply = supply.filter((w) => w.quantity > 0)

    return {
      ...city,
      warehouse: {
        ...city.warehouse,
        stock: city.warehouse.stock
          .map((ware) => {
            if (ware.ware !== payload.ware) {
              return ware
            }

            return {
              ...ware,
              quantity: ware.quantity - payload.quantity
            }
          })
          .filter((ware) => ware.quantity > 0)
      },
      supply
    }
  })

  return copy(state, { cities, playermoney })
}

/**
 * Helper function to compute the price for a ware.
 *
 * @private
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../wares.js').Ware} ware
 * @returns {number}
 */
function computeSKU (state, ware) {
  const city = state.cities.find((city) => city.name === state.activeCity)

  if (!city) {
    console.warn(NO_CITY)
    return -1
  }

  const cityDemandForWare = city.demand.find((w) => w.ware === ware)
  const demandQuantity = cityDemandForWare ? cityDemandForWare.quantity : 0
  const citySupplyForWare = city.supply.find((w) => w.ware === ware)
  const supplyQuantity = citySupplyForWare ? citySupplyForWare.quantity : 1
  const basePriceForWare = state.wares[ware]

  return basePriceForWare * (demandQuantity / supplyQuantity) || -1
}
