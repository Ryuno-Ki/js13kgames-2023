/**
 * @typedef {object} SET_SHIP_TYPE_ACTION
 * @property {'SET_SHIP_TYPE_ACTION'} SET_SHIP_TYPE_ACTION.type
 * @property {object} SET_SHIP_TYPE_ACTION.payload
 * @property {import('../ships.js').ShipType} SET_SHIP_TYPE_ACTION.payload.shipType
 */
/**
 * Action creator to set type of a new ship to buy.
 *
 * @argument {import('../ships.js').ShipType} shipType
 * @returns {SET_SHIP_TYPE_ACTION}
 */
export function setShipTypeAction(shipType: import('../ships.js').ShipType): SET_SHIP_TYPE_ACTION;
export type SET_SHIP_TYPE_ACTION = {
    type: 'SET_SHIP_TYPE_ACTION';
    payload: {
        shipType: import('../ships.js').ShipType;
    };
};
import { SET_SHIP_TYPE_ACTION } from '../../constants.js';
