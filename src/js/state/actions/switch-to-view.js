import { SWITCH_TO_VIEW_ACTION } from '../../constants.js'

/**
 * @typedef {object} SWITCH_TO_VIEW_ACTION
 * @property {import('../../constants.js').SWITCH_TO_VIEW_ACTION} SWITCH_TO_VIEW_ACTION.type
 * @property {object} SWITCH_TO_VIEW_ACTION.payload
 * @property {import('../views.js').View} SWITCH_TO_VIEW_ACTION.payload.view
 */

/**
 * Action creator to switch to another view.
 *
 * @argument {import('../views.js').View} view
 * @returns {SWITCH_TO_VIEW_ACTION}
 */
export function switchToViewAction (view) {
  return {
    type: SWITCH_TO_VIEW_ACTION,
    payload: {
      view
    }
  }
}
