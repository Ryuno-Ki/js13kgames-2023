/**
 * @typedef {object} CHECK_ON_GAMEOVER_CONDITION_ACTION
 * @property {import('../../constants.js').CHECK_ON_GAMEOVER_CONDITION_ACTION} CHECK_ON_GAMEOVER_CONDITION_ACTION.type
 * @property {object} CHECK_ON_GAMEOVER_CONDITION_ACTION.payload
 */
/**
 * Action creator to check on gameover condition.
 *
 * @returns {CHECK_ON_GAMEOVER_CONDITION_ACTION}
 */
export function checkOnGameoverConditionAction(): CHECK_ON_GAMEOVER_CONDITION_ACTION;
export type CHECK_ON_GAMEOVER_CONDITION_ACTION = {
    type: "D";
    payload: object;
};
import { CHECK_ON_GAMEOVER_CONDITION_ACTION } from '../../constants.js';
