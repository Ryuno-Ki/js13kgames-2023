import { SWITCH_TO_CITY_ACTION } from '../../constants.js'

/**
 * @typedef {object} SWITCH_TO_CITY_ACTION
 * @property {'SWITCH_TO_CITY_ACTION'} SWITCH_TO_CITY_ACTION.type
 * @property {object} SWITCH_TO_CITY_ACTION.payload
 * @property {import('../cities.js').CityName} SWITCH_TO_CITY_ACTION.payload.city
 */

/**
 * Action creator to switch to another city overview.
 *
 * @argument {import('../cities.js').CityName} city
 * @returns {SWITCH_TO_CITY_ACTION}
 */
export function switchToCityAction (city) {
  return {
    type: SWITCH_TO_CITY_ACTION,
    payload: {
      city
    }
  }
}
