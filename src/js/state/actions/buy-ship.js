import { BUY_SHIP_ACTION } from '../../constants.js'

/**
 * @typedef {object} BUY_SHIP_ACTION
 * @property {import('../../constants.js').BUY_SHIP_ACTION} BUY_SHIP_ACTION.type
 * @property {object} BUY_SHIP_ACTION.payload
 * @property {import('../cities.js').CityName} BUY_SHIP_ACTION.payload.city
 * @property {string} BUY_SHIP_ACTION.payload.shipName
 * @property {import('../ships.js').ShipType} BUY_SHIP_ACTION.payload.shipType
 */

/**
 * Action creator to buy a ship in the docks of a city.
 *
 * @argument {object} payload
 * @argument {import('../cities.js').CityName} payload.city
 * @argument {string} payload.shipName
 * @argument {import('../ships.js').ShipType} payload.shipType
 * @returns {BUY_SHIP_ACTION}
 */
export function buyShipAction ({ city, shipName, shipType }) {
  return {
    type: BUY_SHIP_ACTION,
    payload: {
      city,
      shipName,
      shipType
    }
  }
}
