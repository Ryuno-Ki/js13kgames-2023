import { SET_LEVEL_SCENARIO_ACTION } from '../../constants.js'

/**
 * @typedef {object} SET_LEVEL_SCENARIO_ACTION
 * @property {import('../../constants.js').SET_LEVEL_SCENARIO_ACTION} SET_LEVEL_SCENARIO_ACTION.type
 * @property {object} SET_LEVEL_SCENARIO_ACTION.payload
 * @property {import('../initial-state.js').Scenario} SET_LEVEL_SCENARIO_ACTION.payload.scenario
 */

/**
 * Action creator to set the chosen level scenario.
 *
 * @argument {import('../initial-state.js').Scenario} scenario
 * @returns {SET_LEVEL_SCENARIO_ACTION}
 */
export function setLevelScenarioAction (scenario) {
  return {
    type: SET_LEVEL_SCENARIO_ACTION,
    payload: {
      scenario
    }
  }
}
