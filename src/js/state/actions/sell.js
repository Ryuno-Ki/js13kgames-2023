import { SELL_ACTION } from '../../constants.js'

/**
 * @typedef {object} SELL_ACTION
 * @property {import('../../constants.js').SELL_ACTION} SELL_ACTION.type
 * @property {object} SELL_ACTION.payload
 * @property {import('../cities.js').CityName} SELL_ACTION.payload.city
 * @property {import('../wares.js').Ware} SELL_ACTION.payload.ware
 * @property {number} SELL_ACTION.payload.quantity
 */

/**
 * Action creator to sell a ware on the market of a city.
 *
 * @argument {object} payload
 * @argument {import('../cities.js').CityName} payload.city
 * @argument {import('../wares.js').Ware} payload.ware
 * @argument {number} payload.quantity
 * @returns {SELL_ACTION}
 */
export function sellAction ({ city, ware, quantity }) {
  return {
    type: SELL_ACTION,
    payload: {
      city,
      ware,
      quantity
    }
  }
}
