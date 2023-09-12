/**
 * @typedef {object} BUY_WARE_ACTION
 * @property {import('../../constants.js').BUY_WARE_ACTION} BUY_WARE_ACTION.type
 * @property {object} BUY_WARE_ACTION.payload
 * @property {import('../cities.js').CityName} BUY_WARE_ACTION.payload.city
 * @property {import('../wares.js').Ware} BUY_WARE_ACTION.payload.ware
 * @property {number} BUY_WARE_ACTION.payload.quantity
 */
/**
 * Action creator to buy a ware on the market of a city.
 *
 * @argument {object} payload
 * @argument {import('../cities.js').CityName} payload.city
 * @argument {import('../wares.js').Ware} payload.ware
 * @argument {number} payload.quantity
 * @returns {BUY_WARE_ACTION}
 */
export function buyWareAction({ city, ware, quantity }: {
    city: import('../cities.js').CityName;
    ware: import('../wares.js').Ware;
    quantity: number;
}): BUY_WARE_ACTION;
export type BUY_WARE_ACTION = {
    type: "B";
    payload: {
        city: import('../cities.js').CityName;
        ware: import('../wares.js').Ware;
        quantity: number;
    };
};
import { BUY_WARE_ACTION } from '../../constants.js';
