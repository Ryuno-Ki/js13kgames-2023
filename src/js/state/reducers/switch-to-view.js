import { copy } from '../../helpers/copy.js'

/**
 * Reducer to compute the transition to another view within level scene.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/switch-to-view.js').SWITCH_TO_VIEW_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function switchToViewReducer (state, payload) {
  const activeView = payload.view

  return copy(state, { activeView })
}
