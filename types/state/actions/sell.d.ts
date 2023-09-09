/**
 * @typedef {object} SELL_ACTION
 * @property {'SELL_ACTION'} SELL_ACTION.type
 * @property {object} SELL_ACTION.payload
 * @property {import('../initial-state.js').CityName} SELL_ACTION.payload.city
 * @property {import('../initial-state.js').Ware} SELL_ACTION.payload.ware
 * @property {number} SELL_ACTION.payload.quantity
 */
/**
 * Action creator to sell a ware on the market of a city.
 *
 * @argument {object} payload
 * @argument {import('../initial-state.js').CityName} payload.city
 * @argument {import('../initial-state.js').Ware} payload.ware
 * @argument {number} payload.quantity
 * @returns {SELL_ACTION}
 */
export function sellAction({ city, ware, quantity }: {
    city: import('../initial-state.js').CityName;
    ware: import('../initial-state.js').Ware;
    quantity: number;
}): SELL_ACTION;
export type SELL_ACTION = {
    type: 'SELL_ACTION';
    payload: {
        city: import('../initial-state.js').CityName;
        ware: import('../initial-state.js').Ware;
        quantity: number;
    };
};
