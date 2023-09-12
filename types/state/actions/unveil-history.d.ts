/**
 * @typedef {object} UNVEIL_HISTORY_ACTION
 * @property {'UNVEIL_HISTORY_ACTION'} UNVEIL_HISTORY_ACTION.type
 * @property {object} UNVEIL_HISTORY_ACTION.payload
 */
/**
 * Action creator to unlock historic events.
 *
 * @argument {object} payload
 * @argument {number} payload.quantity
 * @returns {UNVEIL_HISTORY_ACTION}
 */
export function unveilHistoryAction(): UNVEIL_HISTORY_ACTION;
export type UNVEIL_HISTORY_ACTION = {
    type: 'UNVEIL_HISTORY_ACTION';
    payload: object;
};
import { UNVEIL_HISTORY_ACTION } from '../../constants.js';
