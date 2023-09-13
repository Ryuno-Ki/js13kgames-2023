/**
 * @typedef {object} UPDATE_SHIPS_ACTION
 * @property {import('../../constants.js').UPDATE_SHIPS_ACTION} UPDATE_SHIPS_ACTION.type
 * @property {object} UPDATE_SHIPS_ACTION.payload
 */
/**
 * Action creator to update the position of all ships.
 *
 * @returns {UPDATE_SHIPS_ACTION}
 */
export function updateShipsAction(): UPDATE_SHIPS_ACTION;
export type UPDATE_SHIPS_ACTION = {
    type: "W";
    payload: object;
};
import { UPDATE_SHIPS_ACTION } from '../../constants.js';
