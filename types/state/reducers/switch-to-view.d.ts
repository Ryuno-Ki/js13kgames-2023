/**
 * Reducer to compute the transition to another view within level scene.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/switch-to-view.js').SWITCH_TO_VIEW_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function switchToViewReducer(state: import('../initial-state.js').State, payload: import('../actions/switch-to-view.js').SWITCH_TO_VIEW_ACTION['payload']): import('../initial-state.js').State;
