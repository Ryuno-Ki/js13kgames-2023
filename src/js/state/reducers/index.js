import { initialState } from '../initial-state.js'
import { checkOnWinConditionReducer } from './check-on-win-condition.js'
import { forwardToNextMonthReducer } from './forward-to-next-month.js'
import { loadGameReducer } from './load-game.js'
import { loadShipReducer } from './load-ship.js'
import { resetReducer } from './reset.js'
import { sendShipReducer } from './send-ship.js'
import { setColorPreferenceReducer } from './set-color-preference.js'
import { setPlayernameReducer } from './set-playername.js'
import { setLevelScenarioReducer } from './set-level-scenario.js'
import { switchToCityReducer } from './switch-to-city.js'
import { switchToSceneReducer } from './switch-to-scene.js'
import { switchToViewReducer } from './switch-to-view.js'
import { unloadShipReducer } from './unload-ship.js'
import { updateShipsReducer } from './update-ships.js'

/**
 * Combined reducer.
 *
 * @argument {import('../initial-state.js').State | undefined} state
 * @argument {import('../actions/check-on-win-condition.js').CHECK_ON_WIN_CONDITION_ACTION | import('../actions/forward-to-next-month.js').FORWARD_TO_NEXT_MONTH_ACTION | import('../actions/load-game.js').LOAD_GAME_ACTION | import('../actions/load-ship.js').LOAD_SHIP_ACTION | import('../actions/reset.js').RESET_ACTION | import('../actions/save-game.js').SAVE_GAME_ACTION | import('../actions/send-ship.js').SEND_SHIP_ACTION | import('../actions/set-color-preference.js').SET_COLOR_PREFERENCE_ACTION | import('../actions/set-level-scenario.js').SET_LEVEL_SCENARIO_ACTION | import('../actions/set-playername.js').SET_PLAYERNAME_ACTION | import('../actions/switch-to-city.js').SWITCH_TO_CITY_ACTION | import('../actions/switch-to-scene.js').SWITCH_TO_SCENE_ACTION | import('../actions/switch-to-view.js').SWITCH_TO_VIEW_ACTION | import('../actions/unload-ship.js').UNLOAD_SHIP_ACTION | import('../actions/update-ships.js').UPDATE_SHIPS_ACTION} action
 * @returns {import('../initial-state.js').State}
 */
export function reducer (state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }

  const { payload, type } = action

  if (type === 'CHECK_ON_WIN_CONDITION_ACTION') {
    return checkOnWinConditionReducer(
      state,
      /** @type {import('../actions/check-on-win-condition.js').CHECK_ON_WIN_CONDITION_ACTION['payload']} */(payload)
    )
  }

  if (type === 'FORWARD_TO_NEXT_MONTH_ACTION') {
    return forwardToNextMonthReducer(
      state,
      /** @type {import('../actions/forward-to-next-month.js').FORWARD_TO_NEXT_MONTH_ACTION['payload']} */(payload)
    )
  }

  if (type === 'LOAD_GAME_ACTION') {
    return loadGameReducer(
      state,
      /** @type {import('../actions/load-game.js').LOAD_GAME_ACTION['payload']} */(payload)
    )
  }

  if (type === 'LOAD_SHIP_ACTION') {
    return loadShipReducer(
      state,
      /** @type {import('../actions/load-ship.js').LOAD_SHIP_ACTION['payload']} */(payload)
    )
  }

  if (type === 'RESET_ACTION') {
    return resetReducer(
      state,
      /** @type {import('../actions/reset.js').RESET_ACTION['payload']} */(payload)
    )
  }

  if (type === 'SAVE_GAME_ACTION') {
    // No reducer on purpose
    return state
  }

  if (type === 'SEND_SHIP_ACTION') {
    return sendShipReducer(
      state,
      /** @type {import('../actions/send-ship.js').SEND_SHIP_ACTION['payload']} */(payload)
    )
  }

  if (type === 'SET_COLOR_PREFERENCE_ACTION') {
    return setColorPreferenceReducer(
      state,
      /** @type {import('../actions/set-color-preference.js').SET_COLOR_PREFERENCE_ACTION['payload']} */(payload)
    )
  }

  if (type === 'SET_LEVEL_SCENARIO_ACTION') {
    return setLevelScenarioReducer(
      state,
      /** @type {import('../actions/set-level-scenario.js').SET_LEVEL_SCENARIO_ACTION['payload']} */(payload)
    )
  }

  if (type === 'SET_PLAYERNAME_ACTION') {
    return setPlayernameReducer(
      state,
      /** @type {import('../actions/set-playername.js').SET_PLAYERNAME_ACTION['payload']} */(payload)
    )
  }

  if (type === 'SWITCH_TO_CITY_ACTION') {
    return switchToCityReducer(
      state,
      /** @type {import('../actions/switch-to-city.js').SWITCH_TO_CITY_ACTION['payload']} */(payload)
    )
  }

  if (type === 'SWITCH_TO_SCENE_ACTION') {
    return switchToSceneReducer(
      state,
      /** @type {import('../actions/switch-to-scene.js').SWITCH_TO_SCENE_ACTION['payload']} */(payload)
    )
  }

  if (type === 'SWITCH_TO_VIEW_ACTION') {
    return switchToViewReducer(
      state,
      /** @type {import('../actions/switch-to-view.js').SWITCH_TO_VIEW_ACTION['payload']} */(payload)
    )
  }

  if (type === 'UNLOAD_SHIP_ACTION') {
    return unloadShipReducer(
      state,
      /** @type {import('../actions/unload-ship.js').UNLOAD_SHIP_ACTION['payload']} */(payload)
    )
  }

  if (type === 'UPDATE_SHIPS_ACTION') {
    return updateShipsReducer(
      state,
      /** @type {import('../actions/update-ships.js').UPDATE_SHIPS_ACTION['payload']} */(payload)
    )
  }

  return state
}
