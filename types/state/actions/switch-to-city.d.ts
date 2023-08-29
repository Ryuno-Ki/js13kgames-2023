/**
 * @typedef {object} SWITCH_TO_CITY_ACTION
 * @property {'SWITCH_TO_CITY_ACTION'} SWITCH_TO_CITY_ACTION.type
 * @property {object} SWITCH_TO_CITY_ACTION.payload
 * @property {import('../initial-state.js').CityName} SWITCH_TO_CITY_ACTION.payload.city
 */
/**
 * Action creator to switch to another city overview.
 *
 * @argument {import('../initial-state.js').CityName} city
 * @returns {SWITCH_TO_CITY_ACTION}
 */
export function switchToCityAction(city: import('../initial-state.js').CityName): SWITCH_TO_CITY_ACTION;
export type SWITCH_TO_CITY_ACTION = {
    type: 'SWITCH_TO_CITY_ACTION';
    payload: {
        city: import('../initial-state.js').CityName;
    };
};
