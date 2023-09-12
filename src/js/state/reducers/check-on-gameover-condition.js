import { copy } from '../../helpers/copy.js'

/**
 * Reducer to check on gameover condition based on scenario.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/check-on-gameover-condition.js').CHECK_ON_GAMEOVER_CONDITION_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function checkOnGameoverConditionReducer (state, payload) {
  let { activeScene } = state
  const { activeMonth, activeScenario, activeYear } = state

  if (activeScenario === 'tutorial') {
    // TODO: Update if I decide to pick another start year
    if (activeYear >= 1251 && Number(activeMonth) >= 2) {
      // TODO: Check on balance. Should exceed the starting value.
      activeScene = 'game-over-section'
    }
  }

  if (activeScenario === 'free-play') {
    if (activeYear >= 1300) {
      activeScene = 'game-over-section'
    }
  }

  return copy(state, { activeScene })
}
