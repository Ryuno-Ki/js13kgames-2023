import { copy } from '../../helpers/copy.js'

/**
 * Reducer to compute the transition to another city.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/switch-to-city.js').SWITCH_TO_CITY_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function switchToCityReducer (state, payload) {
  const activeView = 'city'
  // TODO: Validate for eligible city once flag is introduced
  const activeCity = payload.city

  return copy(state, { activeCity, activeView })
}
