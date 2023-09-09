/**
 * Reducer to buy a ware from the market and stock it in the warehouse.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/buy.js').BUY_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function buyReducer (state, payload) {
  let cities = state.cities

  cities = state.cities.map((city) => {
    if (city.name !== payload.city) {
      return city
    }

    let warehouse = city.warehouse
    const updatePreviousWarehouse = warehouse.find((w) => w.ware === payload.ware)
    if (updatePreviousWarehouse) {
      warehouse = warehouse.map((w) => {
        if (w.ware !== payload.ware) {
          return w
        }

        return {
          ware: payload.ware,
          quantity: w.quantity + payload.quantity
        }
      })
    } else {
      warehouse = warehouse.concat([{
        ware: payload.ware,
        quantity: payload.quantity
      }])
    }

    warehouse = warehouse.filter((w) => w.quantity > 0)

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
      warehouse
    }
  })

  return Object.assign({}, state, { cities })
}
