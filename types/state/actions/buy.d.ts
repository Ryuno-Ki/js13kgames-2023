/**
 * @typedef {object} BUY_ACTION
 * @property {'BUY_ACTION'} BUY_ACTION.type
 * @property {object} BUY_ACTION.payload
 * @property {import('../initial-state.js').CityName} BUY_ACTION.payload.city
 * @property {import('../initial-state.js').Ware} BUY_ACTION.payload.ware
 * @property {number} BUY_ACTION.payload.quantity
 */
/**
 * Action creator to buy a ware on the market of a city.
 *
 * @argument {object} payload
 * @argument {import('../initial-state.js').CityName} payload.city
 * @argument {import('../initial-state.js').Ware} payload.ware
 * @argument {number} payload.quantity
 * @returns {BUY_ACTION}
 */
export function buyAction({ city, ware, quantity }: {
    city: import('../initial-state.js').CityName;
    ware: import('../initial-state.js').Ware;
    quantity: number;
}): BUY_ACTION;
export type BUY_ACTION = {
    type: 'BUY_ACTION';
    payload: {
        city: import('../initial-state.js').CityName;
        ware: import('../initial-state.js').Ware;
        quantity: number;
    };
};
