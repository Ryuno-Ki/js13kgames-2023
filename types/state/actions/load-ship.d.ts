/**
 * @typedef {object} LOAD_SHIP_ACTION
 * @property {import('../../constants.js').LOAD_SHIP_ACTION} LOAD_SHIP_ACTION.type
 * @property {object} LOAD_SHIP_ACTION.payload
 * @property {import('../cities.js').CityName} LOAD_SHIP_ACTION.payload.city
 * @property {string} LOAD_SHIP_ACTION.payload.ship
 * @property {import('../wares.js').Ware} LOAD_SHIP_ACTION.payload.ware
 * @property {number} LOAD_SHIP_ACTION.payload.quantity
 */
/**
 * Action creator to load a ship in a city with quantity of a ware.
 *
 * @argument {object} payload
 * @argument {import('../cities.js').CityName} payload.city
 * @argument {string} payload.ship
 * @argument {import('../wares.js').Ware} payload.ware
 * @argument {number} payload.quantity
 * @returns {LOAD_SHIP_ACTION}
 */
export function loadShipAction({ city, ship, ware, quantity }: {
    city: import('../cities.js').CityName;
    ship: string;
    ware: import('../wares.js').Ware;
    quantity: number;
}): LOAD_SHIP_ACTION;
export type LOAD_SHIP_ACTION = {
    type: "H";
    payload: {
        city: import('../cities.js').CityName;
        ship: string;
        ware: import('../wares.js').Ware;
        quantity: number;
    };
};
import { LOAD_SHIP_ACTION } from '../../constants.js';
