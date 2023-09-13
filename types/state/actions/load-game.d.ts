/**
 * @typedef {object} LOAD_GAME_ACTION
 * @property {import('../../constants.js').LOAD_GAME_ACTION} LOAD_GAME_ACTION.type
 * @property {object} LOAD_GAME_ACTION.payload
 * @property {import('../initial-state.js').State} LOAD_GAME_ACTION.payload.state
 */
/**
 * Action creator to trigger a game load.
 *
 * @argument {import('../initial-state.js').State} state
 * @returns {LOAD_GAME_ACTION}
 */
export function loadGameAction(state: import('../initial-state.js').State): LOAD_GAME_ACTION;
export type LOAD_GAME_ACTION = {
    type: "G";
    payload: {
        state: import('../initial-state.js').State;
    };
};
import { LOAD_GAME_ACTION } from '../../constants.js';
