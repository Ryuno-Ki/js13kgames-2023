/**
 * @typedef {object} SET_COLOR_PREFERENCE_ACTION
 * @property {'SET_COLOR_PREFERENCE_ACTION'} SET_COLOR_PREFERENCE_ACTION.type
 * @property {object} SET_COLOR_PREFERENCE_ACTION.payload
 * @property {import('../initial-state.js').Color} SET_COLOR_PREFERENCE_ACTION.payload.color
 */

/**
 * Action creator to set a color preference.
 *
 * @argument {import('../initial-state.js').Color} color
 * @returns {SET_COLOR_PREFERENCE_ACTION}
 */
export function setColorPreferenceAction (color) {
  return {
    type: 'SET_COLOR_PREFERENCE_ACTION',
    payload: {
      color
    }
  }
}
