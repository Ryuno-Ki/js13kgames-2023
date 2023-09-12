import { RESET_ACTION } from '../../constants.js'

/**
 * @typedef {object} RESET_ACTION
 * @property {'RESET_ACTION'} RESET_ACTION.type
 * @property {object} RESET_ACTION.payload
 */

/**
 * Action creator to reset the complete state.
 *
 * @returns {RESET_ACTION}
 */
export function resetAction () {
  return {
    type: RESET_ACTION,
    payload: {}
  }
}
