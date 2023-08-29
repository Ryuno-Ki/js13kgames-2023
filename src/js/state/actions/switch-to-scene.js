/**
 * @typedef {object} SWITCH_TO_SCENE_ACTION
 * @property {'SWITCH_TO_SCENE_ACTION'} SWITCH_TO_SCENE_ACTION.type
 * @property {object} SWITCH_TO_SCENE_ACTION.payload
 * @property {import('../initial-state.js').Scene} SWITCH_TO_SCENE_ACTION.payload.scene
 */

/**
 * Action creator to switch to another scene.
 *
 * @argument {import('../initial-state.js').Scene} scene
 * @returns {SWITCH_TO_SCENE_ACTION}
 */
export function switchToSceneAction (scene) {
  return {
    type: 'SWITCH_TO_SCENE_ACTION',
    payload: {
      scene
    }
  }
}
