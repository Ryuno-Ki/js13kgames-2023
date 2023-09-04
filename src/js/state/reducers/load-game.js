/**
 * Reducer to replace most of the current state with a loaded one.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/load-game.js').LOAD_GAME_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function loadGameReducer (state, payload) {
  const loadedState = payload.state
  const { activeColor, playername, volume } = state

  return Object.assign({}, state, loadedState, {
    activeColor,
    playername,
    volume
  })
}
