/**
 * @typedef {object} SET_TUTORIAL_ACTION
 * @property {'SET_TUTORIAL_ACTION'} SET_TUTORIAL_ACTION.type
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
    type: 'SET_TUTORIAL_ACTION';
    payload: {
        scene: import('../initial-state.js').Scene;
    };
};
