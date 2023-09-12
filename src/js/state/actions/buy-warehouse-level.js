import { BUY_WAREHOUSE_LEVEL_ACTION } from '../../constants.js'

/**
 * @typedef {object} BUY_WAREHOUSE_LEVEL_ACTION
 * @property {import('../../constants.js').BUY_WAREHOUSE_LEVEL_ACTION} BUY_WAREHOUSE_LEVEL_ACTION.type
 * @property {object} BUY_WAREHOUSE_LEVEL_ACTION.payload
 * @property {import('../cities.js').CityName} BUY_WAREHOUSE_LEVEL_ACTION.payload.city
 */

/**
 * Action creator to buy another level of the warehouse in a city.
 *
 * @argument {import('../cities.js').CityName} city
 * @returns {BUY_WAREHOUSE_LEVEL_ACTION}
 */
export function buyWarehouseLevelAction (city) {
  return {
    type: BUY_WAREHOUSE_LEVEL_ACTION,
    payload: {
      city
    }
  }
}
