/**
 * @typedef {object} RESET_ACTION
 * @property {'RESET_ACTION'} RESET_ACTION.type
 * @property {object} RESET_ACTION.payload
 */
/**
 * Action creator to reset the complete state.
 *
 * @returns {RESET_ACTION}
 */
export function resetAction(): RESET_ACTION;
export type RESET_ACTION = {
    type: 'RESET_ACTION';
    payload: object;
};
