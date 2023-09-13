import { copy } from '../../helpers/copy.js'
import { initialState } from '../initial-state.js'

/**
 * Reducer to check on win condition based on scenario.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/check-on-win-condition.js').CHECK_ON_WIN_CONDITION_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function checkOnWinConditionReducer (state, payload) {
  let { activeScene } = state
  const { activeMonth, activeScenario, activeYear, playermoney } = state
  const aYearLater = initialState.activeYear + 1
  const aMonthLater = Number(initialState.activeMonth) + 1
  const initalPlayerMoney = initialState.playermoney

  if (activeScenario === 'tutorial') {
    if (activeYear >= aYearLater && Number(activeMonth) >= aMonthLater) {
      if (playermoney > initalPlayerMoney) {
        activeScene = 'win-section'
      }
    }
  }

  if (activeScenario === 'free-play') {
    if (activeYear >= 1300) {
      activeScene = 'win-section'
    }
  }

  return copy(state, { activeScene })
}
