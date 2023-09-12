import { copy } from '../../helpers/copy.js'
import { sanitise } from '../../helpers/sanitise.js'

/**
 * Reducer to set the name of the new ship (sanitised).
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/set-ship-name.js').SET_SHIP_NAME_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function setShipNameReducer (state, payload) {
  const newShipName = sanitise(payload.shipName)

  return copy(state, { newShipName })
}
