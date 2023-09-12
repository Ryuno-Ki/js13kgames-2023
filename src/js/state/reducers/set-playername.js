import { copy } from '../../helpers/copy.js'
import { sanitise } from '../../helpers/sanitise.js'

/**
 * Reducer to set the name of the player (sanitised).
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/set-playername.js').SET_PLAYERNAME_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function setPlayernameReducer (state, payload) {
  const playername = sanitise(payload.playername)

  return copy(state, { playername })
}
