import { initialState } from '../initial-state.js'
import { forwardToNextMonthReducer } from './forward-to-next-month.js'
import { loadShipReducer } from './load-ship.js'
import { sendShipReducer } from './send-ship.js'
import { switchToCityReducer } from './switch-to-city.js'
import { switchToSceneReducer } from './switch-to-scene.js'
import { switchToViewReducer } from './switch-to-view.js'
import { unloadShipReducer } from './unload-ship.js'
import { updateShipsReducer } from './update-ships.js'

/**
 * Combined reducer.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/forward-to-next-month.js').FORWARD_TO_NEXT_MONTH_ACTION | import('../actions/load-ship.js').LOAD_SHIP_ACTION | import('../actions/send-ship.js').SEND_SHIP_ACTION | import('../actions/switch-to-city.js').SWITCH_TO_CITY_ACTION | import('../actions/switch-to-scene.js').SWITCH_TO_SCENE_ACTION | import('../actions/switch-to-view.js').SWITCH_TO_VIEW_ACTION | import('../actions/unload-ship.js').UNLOAD_SHIP_ACTION | import('../actions/update-ships.js').UPDATE_SHIPS_ACTION} action
 * @returns {import('../initial-state.js').State}
 */
export function reducer (state, action) {
  if (typeof state === 'undefined') return initialState
  const type = action.type
  const payload = action.payload

  if (type === 'FORWARD_TO_NEXT_MONTH_ACTION') {
    return forwardToNextMonthReducer(
      state,
      /** @type {import('../actions/forward-to-next-month.js').FORWARD_TO_NEXT_MONTH_ACTION['payload']} */(payload)
    )
  }

  if (type === 'LOAD_SHIP_ACTION') {
    return loadShipReducer(
      state,
      /** @type {import('../actions/load-ship.js').LOAD_SHIP_ACTION['payload']} */(payload)
    )
  }

  if (type === 'SEND_SHIP_ACTION') {
    return sendShipReducer(
      state,
      /** @type {import('../actions/send-ship.js').SEND_SHIP_ACTION['payload']} */(payload)
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
