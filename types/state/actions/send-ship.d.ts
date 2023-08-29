/**
 * @typedef {object} SEND_SHIP_ACTION
 * @property {'SEND_SHIP_ACTION'} SEND_SHIP_ACTION.type
 * @property {object} SEND_SHIP_ACTION.payload
 * @property {import('../initial-state.js').CityName} SEND_SHIP_ACTION.payload.from
 * @property {string} SEND_SHIP_ACTION.payload.ship
 * @property {import('../initial-state.js').CityName} SEND_SHIP_ACTION.payload.to
 */
/**
 * Action creator to send a ship from a city to another.
 *
 * @argument {object} payload
 * @argument {import('../initial-state.js').CityName} payload.from
 * @argument {string} payload.ship
 * @argument {import('../initial-state.js').CityName} payload.to
 * @returns {SEND_SHIP_ACTION}
 */
export function sendShipAction({ ship, from, to }: {
    from: import('../initial-state.js').CityName;
    ship: string;
    to: import('../initial-state.js').CityName;
}): SEND_SHIP_ACTION;
export type SEND_SHIP_ACTION = {
    type: 'SEND_SHIP_ACTION';
    payload: {
        from: import('../initial-state.js').CityName;
        ship: string;
        to: import('../initial-state.js').CityName;
    };
};
