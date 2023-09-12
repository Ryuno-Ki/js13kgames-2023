/**
 * @typedef {object} DELETE_GAME_ACTION
 * @property {'DELETE_GAME_ACTION'} DELETE_GAME_ACTION.type
 * @property {object} DELETE_GAME_ACTION.payload
 * @property {string} DELETE_GAME_ACTION.payload.playername
 */
/**
 * Action creator to trigger the deletion of a game.
 *
 * @argument {string} playername
 * @returns {DELETE_GAME_ACTION}
 */
export function deleteGameAction(playername: string): DELETE_GAME_ACTION;
export type DELETE_GAME_ACTION = {
    type: 'DELETE_GAME_ACTION';
    payload: {
        playername: string;
    };
};
import { DELETE_GAME_ACTION } from '../../constants.js';
