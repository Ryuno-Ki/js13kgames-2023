/**
 * Reducer to buy a ware from the market and stock it in the warehouse.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/buy.js').BUY_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function buyReducer (state, payload) {
  let cities = state.cities
  let playermoney = state.playermoney
  const price = payload.quantity * computeSKU(state, payload.ware)

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

  return Object.assign({}, state, { cities, playermoney })
}

/**
 * Helper function to compute the price for a ware.
 *
 * @private
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../initial-state.js').Ware} ware
 * @returns {number}
 */
function computeSKU (state, ware) {
  const city = state.cities.find((city) => city.name === state.activeCity)

  if (!city) {
    console.warn('Could not find city')
    return -1
  }

  const cityDemandForWare = city.demand.find((w) => w.ware === ware)
  const demandQuantity = cityDemandForWare ? cityDemandForWare.quantity : 0
  const citySupplyForWare = city.supply.find((w) => w.ware === ware)
  const supplyQuantity = citySupplyForWare ? citySupplyForWare.quantity : 1
  const basePriceForWare = state.wares[ware]

  return basePriceForWare * (demandQuantity / supplyQuantity) || -1
}
