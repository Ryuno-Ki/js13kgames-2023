import { CHECK_ON_WIN_CONDITION_ACTION } from '../../constants.js'

/**
 * @typedef {object} CHECK_ON_WIN_CONDITION_ACTION
 * @property {import('../../constants.js').CHECK_ON_WIN_CONDITION_ACTION} CHECK_ON_WIN_CONDITION_ACTION.type
 * @property {object} CHECK_ON_WIN_CONDITION_ACTION.payload
 */

/**
 * Action creator to check on win condition.
 *
 * @returns {CHECK_ON_WIN_CONDITION_ACTION}
 */
export function checkOnWinConditionAction () {
  return {
    type: CHECK_ON_WIN_CONDITION_ACTION,
    payload: {}
  }
}
