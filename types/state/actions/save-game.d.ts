/**
 * @typedef {object} SAVE_GAME_ACTION
 * @property {'SAVE_GAME_ACTION'} SAVE_GAME_ACTION.type
 * @property {object} SAVE_GAME_ACTION.payload
 */
/**
 * Action creator to trigger a game save.
 *
 * @returns {SAVE_GAME_ACTION}
 */
export function saveGameAction(): SAVE_GAME_ACTION;
export type SAVE_GAME_ACTION = {
    type: 'SAVE_GAME_ACTION';
    payload: object;
};
