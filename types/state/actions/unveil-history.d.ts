/**
 * @typedef {object} UNVEIL_HISTORY_ACTION
 * @property {import('../../constants.js').UNVEIL_HISTORY_ACTION} UNVEIL_HISTORY_ACTION.type
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
    type: "W";
    payload: object;
};
import { UNVEIL_HISTORY_ACTION } from '../../constants.js';
