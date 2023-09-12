/**
 * @typedef {object} BUY_WAREHOUSE_LEVEL_ACTION
 * @property {'BUY_WAREHOUSE_LEVEL_ACTION'} BUY_WAREHOUSE_LEVEL_ACTION.type
 * @property {object} BUY_WAREHOUSE_LEVEL_ACTION.payload
 * @property {import('../cities.js').CityName} BUY_WAREHOUSE_LEVEL_ACTION.payload.city
 */
/**
 * Action creator to buy another level of the warehouse in a city.
 *
 * @argument {object} payload
 * @argument {import('../cities.js').CityName} payload.city
 * @returns {BUY_WAREHOUSE_LEVEL_ACTION}
 */
export function buyWarehouseLevelAction({ city }: {
    city: import('../cities.js').CityName;
}): BUY_WAREHOUSE_LEVEL_ACTION;
export type BUY_WAREHOUSE_LEVEL_ACTION = {
    type: 'BUY_WAREHOUSE_LEVEL_ACTION';
    payload: {
        city: import('../cities.js').CityName;
    };
};
import { BUY_WAREHOUSE_LEVEL_ACTION } from '../../constants.js';
