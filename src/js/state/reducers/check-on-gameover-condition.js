import { copy } from '../../helpers/copy.js'
import { initialState } from '../initial-state.js'

/**
 * Reducer to check on gameover condition based on scenario.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/check-on-gameover-condition.js').CHECK_ON_GAMEOVER_CONDITION_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function checkOnGameoverConditionReducer (state, payload) {
  let { activeScene } = state
  const { activeMonth, activeScenario, activeYear, playermoney } = state
  const aYearLater = initialState.activeYear + 1
  const aMonthLater = Number(initialState.activeMonth) + 1
  const initalPlayerMoney = initialState.playermoney

  if (activeScenario === 'tutorial') {
    if (activeYear >= aYearLater && Number(activeMonth) >= aMonthLater) {
      if (playermoney <= initalPlayerMoney) {
        activeScene = 'game-over-section'
      }
    }
  }

  if (activeScenario === 'free-play') {
    if (activeYear >= 1300) {
      activeScene = 'game-over-section'
    }
  }

  // Should not be negative, but let's catch the case here as well
  if (playermoney < 1) {
    activeScene = 'game-over-section'
  }

  return copy(state, { activeScene })
}
