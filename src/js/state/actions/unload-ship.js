import { UNLOAD_SHIP_ACTION } from '../../constants.js'

/**
 * @typedef {object} UNLOAD_SHIP_ACTION
 * @property {import('../../constants.js').UNLOAD_SHIP_ACTION} UNLOAD_SHIP_ACTION.type
 * @property {object} UNLOAD_SHIP_ACTION.payload
 * @property {import('../cities.js').CityName} UNLOAD_SHIP_ACTION.payload.city
 * @property {string} UNLOAD_SHIP_ACTION.payload.ship
 * @property {import('../wares.js').Ware} UNLOAD_SHIP_ACTION.payload.ware
 * @property {number} UNLOAD_SHIP_ACTION.payload.quantity
 */

/**
 * Action creator to unload the cargo of a ship in a city.
 *
 * @argument {object} payload
 * @argument {import('../cities.js').CityName} payload.city
 * @argument {string} payload.ship
 * @argument {import('../wares.js').Ware} payload.ware
 * @argument {number} payload.quantity
 * @returns {UNLOAD_SHIP_ACTION}
 */
export function unloadShipAction ({ city, ship, ware, quantity }) {
  return {
    type: UNLOAD_SHIP_ACTION,
    payload: {
      city,
      ship,
      ware,
      quantity
    }
  }
}
