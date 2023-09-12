/**
 * @typedef {object} SEND_SHIP_ACTION
 * @property {import('../../constants.js').SEND_SHIP_ACTION} SEND_SHIP_ACTION.type
 * @property {object} SEND_SHIP_ACTION.payload
 * @property {import('../cities.js').CityName} SEND_SHIP_ACTION.payload.from
 * @property {string} SEND_SHIP_ACTION.payload.ship
 * @property {import('../cities.js').CityName} SEND_SHIP_ACTION.payload.to
 */
/**
 * Action creator to send a ship from a city to another.
 *
 * @argument {object} payload
 * @argument {import('../cities.js').CityName} payload.from
 * @argument {string} payload.ship
 * @argument {import('../cities.js').CityName} payload.to
 * @returns {SEND_SHIP_ACTION}
 */
export function sendShipAction({ ship, from, to }: {
    from: import('../cities.js').CityName;
    ship: string;
    to: import('../cities.js').CityName;
}): SEND_SHIP_ACTION;
export type SEND_SHIP_ACTION = {
    type: "M";
    payload: {
        from: import('../cities.js').CityName;
        ship: string;
        to: import('../cities.js').CityName;
    };
};
import { SEND_SHIP_ACTION } from '../../constants.js';
