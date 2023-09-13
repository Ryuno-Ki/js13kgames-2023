/**
 * @typedef {object} RESTOCK_ACTION
 * @property {import('../../constants.js').RESTOCK_ACTION} RESTOCK_ACTION.type
 * @property {object} RESTOCK_ACTION.payload
 */
/**
 * Action creator to restock the cities each month.
 *
 * @returns {RESTOCK_ACTION}
 */
export function restockAction(): RESTOCK_ACTION;
export type RESTOCK_ACTION = {
    type: "J";
    payload: object;
};
import { RESTOCK_ACTION } from '../../constants.js';
