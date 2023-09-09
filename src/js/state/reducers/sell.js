/**
 * Reducer to sell a ware from the market and stock it in the warehouse.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/sell.js').SELL_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function sellReducer (state, payload) {
  let cities = state.cities

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
      warehouse: city.warehouse.map((ware) => {
        if (ware.ware !== payload.ware) {
          return ware
        }

        return {
          ...ware,
          quantity: ware.quantity - payload.quantity
        }
      }),
      supply
    }
  })

  return Object.assign({}, state, { cities })
}
