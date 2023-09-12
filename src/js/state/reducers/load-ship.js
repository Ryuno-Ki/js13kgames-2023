import { copy } from '../../helpers/copy.js'

/**
 * Reducer to compute the cargo of a ship and update the city's warehouse.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/load-ship.js').LOAD_SHIP_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function loadShipReducer (state, payload) {
  const { city, quantity, ship, ware } = payload
  let cities = state.cities
  let ships = state.ships

  const shipToLoad = state.ships
    .filter((s) => s.moored)
    .filter((s) => s.position === state.activeCity)
    .find((s) => s.name === ship)

  if (shipToLoad) {
    ships = state.ships.map((s) => {
      if (s.name !== ship) {
        return s
      }

      const cargo = {
        ...s.cargo
      }
      cargo[ware] = cargo[ware] + quantity

      return {
        ...s,
        cargo
      }
    })

    cities = state.cities.map((c) => {
      if (c.name !== city) {
        return c
      }

      const stock = {
        ...c.warehouse.stock
      }
      stock[ware] = stock[ware] - quantity

      return {
        ...c,
        warehouse: {
          ...c.warehouse,
          stock
        }
      }
    })
  }

  return copy(state, { cities, ships })
}
