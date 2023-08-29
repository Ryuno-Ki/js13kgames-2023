/**
 * @typedef {object} LOAD_SHIP_ACTION
 * @property {'LOAD_SHIP_ACTION'} LOAD_SHIP_ACTION.type
 * @property {object} LOAD_SHIP_ACTION.payload
 * @property {import('../initial-state.js').CityName} LOAD_SHIP_ACTION.payload.city
 * @property {string} LOAD_SHIP_ACTION.payload.ship
 * @property {import('../initial-state.js').Ware} LOAD_SHIP_ACTION.payload.ware
 * @property {number} LOAD_SHIP_ACTION.payload.quantity
 */

/**
 * Action creator to load a ship in a city with quantity of a ware.
 *
 * @argument {object} payload
 * @argument {import('../initial-state.js').CityName} payload.city
 * @argument {string} payload.ship
 * @argument {import('../initial-state.js').Ware} payload.ware
 * @argument {number} payload.quantity
 * @returns {LOAD_SHIP_ACTION}
 */
export function loadShipAction ({ city, ship, ware, quantity }) {
  return {
    type: 'LOAD_SHIP_ACTION',
    payload: {
      city,
      ship,
      ware,
      quantity
    }
  }
}
