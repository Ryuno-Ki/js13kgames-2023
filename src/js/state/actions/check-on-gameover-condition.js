import { CHECK_ON_GAMEOVER_CONDITION_ACTION } from '../../constants.js'

/**
 * @typedef {object} CHECK_ON_GAMEOVER_CONDITION_ACTION
 * @property {'CHECK_ON_GAMEOVER_CONDITION_ACTION'} CHECK_ON_GAMEOVER_CONDITION_ACTION.type
 * @property {object} CHECK_ON_GAMEOVER_CONDITION_ACTION.payload
 */

/**
 * Action creator to check on gameover condition.
 *
 * @returns {CHECK_ON_GAMEOVER_CONDITION_ACTION}
 */
export function checkOnGameoverConditionAction () {
  return {
    type: CHECK_ON_GAMEOVER_CONDITION_ACTION,
    payload: {}
  }
}
