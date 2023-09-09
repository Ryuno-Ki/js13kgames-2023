/**
 * Reducer to compute the cargo of a ship and update the city's warehouse.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/load-ship.js').LOAD_SHIP_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function loadShipReducer (state, payload) {
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
            quantity: w.quantity + payload.quantity
          }
        })
      } else {
        cargo = cargo.concat([{
          ware: payload.ware,
          quantity: Number(payload.quantity)
        }])
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
        warehouse: {
          ...city.warehouse,
          stock: city.warehouse.stock.map((ware) => {
            if (ware.ware !== payload.ware) {
              return ware
            }

            return {
              ...ware,
              quantity: ware.quantity - payload.quantity
            }
          })
        }
      }
    })
  }

  return Object.assign({}, state, {
    cities,
    ships
  })
}
