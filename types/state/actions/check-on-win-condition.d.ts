/**
 * @typedef {object} CHECK_ON_WIN_CONDITION_ACTION
 * @property {'CHECK_ON_WIN_CONDITION_ACTION'} CHECK_ON_WIN_CONDITION_ACTION.type
 * @property {object} CHECK_ON_WIN_CONDITION_ACTION.payload
 */
/**
 * Action creator to check on win condition.
 *
 * @returns {CHECK_ON_WIN_CONDITION_ACTION}
 */
export function checkOnWinConditionAction(): CHECK_ON_WIN_CONDITION_ACTION;
export type CHECK_ON_WIN_CONDITION_ACTION = {
    type: 'CHECK_ON_WIN_CONDITION_ACTION';
    payload: object;
};
