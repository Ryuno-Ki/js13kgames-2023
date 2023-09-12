import { copy } from '../../helpers/copy.js'

/**
 * Reducer to set the type of the new ship.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/set-ship-type.js').SET_SHIP_TYPE_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function setShipTypeReducer (state, payload) {
  const newShipType = payload.shipType || null

  return copy(state, { newShipType })
}
