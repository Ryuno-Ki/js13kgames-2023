/**
 * Reducer to set the name of the player (sanitised).
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/set-playername.js').SET_PLAYERNAME_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function setPlayernameReducer (state, payload) {
  const playername = payload.playername
    .replace(/</g, '')
    .replace(/>/g, '')
    .replace(/{/g, '')
    .replace(/}/g, '')
    .replace(/\(/g, '')
    .replace(/\)/g, '')
    .replace(/"/g, '')
    .replace(/'/g, '')
    .replace(/%/g, '')
    .replace(/&/g, '')
    .replace(/=/g, '')
    .replace(/\$/g, '')
    .replace(/\//g, '')
    .replace(/\\/g, '')
    .replace(/\s+/, ' ')

  return Object.assign({}, state, { playername })
}
