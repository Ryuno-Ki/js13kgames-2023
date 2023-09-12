import { SAVE_GAME_ACTION } from '../../constants.js'

/**
 * @typedef {object} SAVE_GAME_ACTION
 * @property {import('../../constants.js').SAVE_GAME_ACTION} SAVE_GAME_ACTION.type
 * @property {object} SAVE_GAME_ACTION.payload
 */

/**
 * Action creator to trigger a game save.
 *
 * @returns {SAVE_GAME_ACTION}
 */
export function saveGameAction () {
  return {
    type: SAVE_GAME_ACTION,
    payload: {}
  }
}
