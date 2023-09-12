import {
  BUY_SHIP_ACTION,
  BUY_WARE_ACTION,
  BUY_WAREHOUSE_LEVEL_ACTION,
  CHECK_ON_GAMEOVER_CONDITION_ACTION,
  CHECK_ON_WIN_CONDITION_ACTION,
  FORWARD_TO_NEXT_MONTH_ACTION,
  LOAD_GAME_ACTION,
  LOAD_SHIP_ACTION,
  RESET_ACTION,
  SAVE_GAME_ACTION,
  SELL_ACTION,
  SEND_SHIP_ACTION,
  SET_COLOR_PREFERENCE_ACTION,
  SET_LEVEL_SCENARIO_ACTION,
  SET_PLAYERNAME_ACTION,
  SET_TUTORIAL_ACTION,
  SWITCH_TO_CITY_ACTION,
  SWITCH_TO_SCENE_ACTION,
  SWITCH_TO_VIEW_ACTION,
  UNLOAD_SHIP_ACTION,
  UNVEIL_HISTORY_ACTION,
  UPDATE_SHIPS_ACTION
} from '../../constants.js'
import { initialState } from '../initial-state.js'
import { buyShipReducer } from './buy-ship.js'
import { buyWareReducer } from './buy-ware.js'
import { buyWarehouseLevelReducer } from './buy-warehouse-level.js'
import { checkOnGameoverConditionReducer } from './check-on-gameover-condition.js'
import { checkOnWinConditionReducer } from './check-on-win-condition.js'
import { forwardToNextMonthReducer } from './forward-to-next-month.js'
import { loadGameReducer } from './load-game.js'
import { loadShipReducer } from './load-ship.js'
import { resetReducer } from './reset.js'
import { sellReducer } from './sell.js'
import { sendShipReducer } from './send-ship.js'
import { setColorPreferenceReducer } from './set-color-preference.js'
import { setLevelScenarioReducer } from './set-level-scenario.js'
import { setPlayernameReducer } from './set-playername.js'
import { setTutorialReducer } from './set-tutorial.js'
import { switchToCityReducer } from './switch-to-city.js'
import { switchToSceneReducer } from './switch-to-scene.js'
import { switchToViewReducer } from './switch-to-view.js'
import { unloadShipReducer } from './unload-ship.js'
import { unveilHistoryReducer } from './unveil-history.js'
import { updateShipsReducer } from './update-ships.js'

/**
 * Combined reducer.
 *
 * @argument {import('../initial-state.js').State | undefined} state
 * @argument {import('../actions/index.js').ACTION} action
 * @returns {import('../initial-state.js').State}
 */
export function reducer (state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }

  const { payload, type } = action

  if (type === BUY_SHIP_ACTION) {
    return buyShipReducer(
      state,
      /** @type {import('../actions/buy-ship.js').BUY_SHIP_ACTION['payload']} */(payload)
    )
  }
  if (type === BUY_WARE_ACTION) {
    return buyWareReducer(
      state,
      /** @type {import('../actions/buy-ware.js').BUY_WARE_ACTION['payload']} */(payload)
    )
  }
  if (type === BUY_WAREHOUSE_LEVEL_ACTION) {
    return buyWarehouseLevelReducer(
      state,
      /** @type {import('../actions/buy-warehouse-level.js').BUY_WAREHOUSE_LEVEL_ACTION['payload']} */(payload)
    )
  }

  if (type === CHECK_ON_GAMEOVER_CONDITION_ACTION) {
    return checkOnGameoverConditionReducer(
      state,
      /** @type {import('../actions/check-on-gameover-condition.js').CHECK_ON_GAMEOVER_CONDITION_ACTION['payload']} */(payload)
    )
  }

  if (type === CHECK_ON_WIN_CONDITION_ACTION) {
    return checkOnWinConditionReducer(
      state,
      /** @type {import('../actions/check-on-win-condition.js').CHECK_ON_WIN_CONDITION_ACTION['payload']} */(payload)
    )
  }

  if (type === FORWARD_TO_NEXT_MONTH_ACTION) {
    return forwardToNextMonthReducer(
      state,
      /** @type {import('../actions/forward-to-next-month.js').FORWARD_TO_NEXT_MONTH_ACTION['payload']} */(payload)
    )
  }

  if (type === LOAD_GAME_ACTION) {
    return loadGameReducer(
      state,
      /** @type {import('../actions/load-game.js').LOAD_GAME_ACTION['payload']} */(payload)
    )
  }

  if (type === LOAD_SHIP_ACTION) {
    return loadShipReducer(
      state,
      /** @type {import('../actions/load-ship.js').LOAD_SHIP_ACTION['payload']} */(payload)
    )
  }

  if (type === RESET_ACTION) {
    return resetReducer(
      state,
      /** @type {import('../actions/reset.js').RESET_ACTION['payload']} */(payload)
    )
  }

  if (type === SAVE_GAME_ACTION) {
    // No reducer on purpose
    return state
  }

  if (type === SELL_ACTION) {
    return sellReducer(
      state,
      /** @type {import('../actions/sell.js').SELL_ACTION['payload']} */(payload)
    )
  }

  if (type === SEND_SHIP_ACTION) {
    return sendShipReducer(
      state,
      /** @type {import('../actions/send-ship.js').SEND_SHIP_ACTION['payload']} */(payload)
    )
  }

  if (type === SET_COLOR_PREFERENCE_ACTION) {
    return setColorPreferenceReducer(
      state,
      /** @type {import('../actions/set-color-preference.js').SET_COLOR_PREFERENCE_ACTION['payload']} */(payload)
    )
  }

  if (type === SET_LEVEL_SCENARIO_ACTION) {
    return setLevelScenarioReducer(
      state,
      /** @type {import('../actions/set-level-scenario.js').SET_LEVEL_SCENARIO_ACTION['payload']} */(payload)
    )
  }

  if (type === SET_PLAYERNAME_ACTION) {
    return setPlayernameReducer(
      state,
      /** @type {import('../actions/set-playername.js').SET_PLAYERNAME_ACTION['payload']} */(payload)
    )
  }

  if (type === SET_TUTORIAL_ACTION) {
    return setTutorialReducer(
      state,
      /** @type {import('../actions/set-tutorial.js').SET_TUTORIAL_ACTION['payload']} */(payload)
    )
  }

  if (type === SWITCH_TO_CITY_ACTION) {
    return switchToCityReducer(
      state,
      /** @type {import('../actions/switch-to-city.js').SWITCH_TO_CITY_ACTION['payload']} */(payload)
    )
  }

  if (type === SWITCH_TO_SCENE_ACTION) {
    return switchToSceneReducer(
      state,
      /** @type {import('../actions/switch-to-scene.js').SWITCH_TO_SCENE_ACTION['payload']} */(payload)
    )
  }

  if (type === SWITCH_TO_VIEW_ACTION) {
    return switchToViewReducer(
      state,
      /** @type {import('../actions/switch-to-view.js').SWITCH_TO_VIEW_ACTION['payload']} */(payload)
    )
  }

  if (type === UNLOAD_SHIP_ACTION) {
    return unloadShipReducer(
      state,
      /** @type {import('../actions/unload-ship.js').UNLOAD_SHIP_ACTION['payload']} */(payload)
    )
  }

  if (type === UNVEIL_HISTORY_ACTION) {
    return unveilHistoryReducer(
      state,
      /** @type {import('../actions/unveil-history.js').UNVEIL_HISTORY_ACTION['payload']} */(payload)
    )
  }

  if (type === UPDATE_SHIPS_ACTION) {
    return updateShipsReducer(
      state,
      /** @type {import('../actions/update-ships.js').UPDATE_SHIPS_ACTION['payload']} */(payload)
    )
  }

  return state
}
