/**
 * @typedef {object} SWITCH_TO_VIEW_ACTION
 * @property {'SWITCH_TO_VIEW_ACTION'} SWITCH_TO_VIEW_ACTION.type
 * @property {object} SWITCH_TO_VIEW_ACTION.payload
 * @property {import('../views.js').View} SWITCH_TO_VIEW_ACTION.payload.view
 */
/**
 * Action creator to switch to another view.
 *
 * @argument {import('../views.js').View} view
 * @returns {SWITCH_TO_VIEW_ACTION}
 */
export function switchToViewAction(view: import('../views.js').View): SWITCH_TO_VIEW_ACTION;
export type SWITCH_TO_VIEW_ACTION = {
    type: 'SWITCH_TO_VIEW_ACTION';
    payload: {
        view: import('../views.js').View;
    };
};
import { SWITCH_TO_VIEW_ACTION } from '../../constants.js';
