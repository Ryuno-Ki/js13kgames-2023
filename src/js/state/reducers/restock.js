import { copy } from '../../helpers/copy.js'
import { initialState } from '../initial-state.js'

/**
 * Reducer to restock the stock in each city every month.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/restock.js').RESTOCK_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function restockReducer (state, payload) {
  const cities = state.cities.map((city, index) => {
    return {
      ...city,
      demand: initialState.cities[index].demand,
      supply: initialState.cities[index].supply
    }
  })

  return copy(state, { cities })
}
