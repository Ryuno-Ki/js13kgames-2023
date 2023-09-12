/**
 * @typedef {object} BUY_SHIP_ACTION
 * @property {import('../../constants.js').BUY_SHIP_ACTION} BUY_SHIP_ACTION.type
 * @property {object} BUY_SHIP_ACTION.payload
 * @property {import('../cities.js').CityName} BUY_SHIP_ACTION.payload.city
 */
/**
 * Action creator to buy a ship in the docks of a city.
 *
 * @argument {import('../cities.js').CityName} city
 * @returns {BUY_SHIP_ACTION}
 */
export function buyShipAction(city: import('../cities.js').CityName): BUY_SHIP_ACTION;
export type BUY_SHIP_ACTION = {
    type: "A";
    payload: {
        city: import('../cities.js').CityName;
    };
};
import { BUY_SHIP_ACTION } from '../../constants.js';
