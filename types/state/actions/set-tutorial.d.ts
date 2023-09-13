/**
 * @typedef {object} SET_TUTORIAL_ACTION
 * @property {import('../../constants.js').SET_TUTORIAL_ACTION} SET_TUTORIAL_ACTION.type
 * @property {object} SET_TUTORIAL_ACTION.payload
 * @property {import('../initial-state.js').Scene} SET_TUTORIAL_ACTION.payload.scene
 */
/**
 * Action creator to set the tutorial flags.
 *
 * @argument {import('../initial-state.js').Scene} scene
 * @returns {SET_TUTORIAL_ACTION}
 */
export function setTutorialAction(scene: import('../initial-state.js').Scene): SET_TUTORIAL_ACTION;
export type SET_TUTORIAL_ACTION = {
    type: "R";
    payload: {
        scene: import('../initial-state.js').Scene;
    };
};
import { SET_TUTORIAL_ACTION } from '../../constants.js';
