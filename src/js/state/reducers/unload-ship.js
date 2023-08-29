/**
 * Reducer to compute the stock of a warehouse and update the cargo of a ship.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/unload-ship.js').UNLOAD_SHIP_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function unloadShipReducer (state, payload) {
  let cities = state.cities
  let ships = state.ships

  const ship = state.ships
    .filter((ship) => ship.moored)
    .filter((ship) => ship.position === state.activeCity)
    .find((ship) => ship.name === payload.ship)

  if (ship) {
    ships = state.ships.map((s) => {
      if (s.name !== payload.ship) {
        return s
      }

      let cargo = s.cargo
      const updatePreviousCargo = cargo.find((w) => w.ware === payload.ware)
      if (updatePreviousCargo) {
        cargo = cargo.map((w) => {
          if (w.ware !== payload.ware) {
            return w
          }

          return {
            ware: payload.ware,
            quantity: w.quantity - payload.quantity
          }
        })
      }

      cargo = cargo.filter((w) => w.quantity > 0)

      return {
        ...s,
        cargo
      }
    })

    cities = state.cities.map((city) => {
      if (city.name !== payload.city) {
        return city
      }

      return {
        ...city,
        supply: city.supply.map((ware) => {
          if (ware.ware !== payload.ware) {
            return ware
          }

          return {
            ...ware,
            quantity: Number(ware.quantity) + Number(payload.quantity)
          }
        })
      }
    })
  }

  return Object.assign({}, state, {
    cities,
    ships
  })
}
