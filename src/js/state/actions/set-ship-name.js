import { SET_SHIP_NAME_ACTION } from '../../constants.js'

/**
 * @typedef {object} SET_SHIP_NAME_ACTION
 * @property {'SET_SHIP_NAME_ACTION'} SET_SHIP_NAME_ACTION.type
 * @property {object} SET_SHIP_NAME_ACTION.payload
 * @property {string} SET_SHIP_NAME_ACTION.payload.shipName
 */

/**
 * Action creator to set name of a new ship to buy.
 *
 * @argument {string} shipName
 * @returns {SET_SHIP_NAME_ACTION}
 */
export function setShipNameAction (shipName) {
  return {
    type: SET_SHIP_NAME_ACTION,
    payload: {
      shipName
    }
  }
}
