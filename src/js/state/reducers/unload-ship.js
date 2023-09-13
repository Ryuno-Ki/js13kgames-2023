import { copy } from '../../helpers/copy.js'

/**
 * Reducer to compute the stock of a warehouse and update the cargo of a ship.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/unload-ship.js').UNLOAD_SHIP_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function unloadShipReducer (state, payload) {
  const { city, quantity, ship, ware } = payload

  let cities = state.cities
  let ships = state.ships

  const shipToUnload = state.ships
    .filter((s) => s.moored)
    .filter((s) => s.position === state.activeCity)
    .find((s) => s.name === ship)

  if (shipToUnload) {
    ships = state.ships.map((s) => {
      if (s.name !== ship) {
        return s
      }

      const cargo = {
        ...s.cargo
      }
      cargo[ware] = Math.max(cargo[ware] - quantity, 0)

      return {
        ...s,
        cargo
      }
    })

    cities = state.cities.map((c) => {
      if (c.name !== city) {
        return c
      }

      const warehouse = {
        ...c.warehouse
      }
      warehouse[ware] = warehouse[ware] + quantity

      return {
        ...c,
        warehouse
      }
    })
  }

  return copy(state, { cities, ships })
}
