import { initialState } from '../initial-state.js'
import { sendShipReducer } from './send-ship.js'
import { switchToCityReducer } from './switch-to-city.js'
import { switchToSceneReducer } from './switch-to-scene.js'
import { switchToViewReducer } from './switch-to-view.js'

export function reducer (state, action) {
  if (typeof state === 'undefined') return initialState
  const type = action.type
  const payload = action.payload

  if (type === 'SWITCH_TO_CITY_ACTION') {
    return switchToCityReducer(state, payload)
  }

  if (type === 'SWITCH_TO_SCENE_ACTION') {
    return switchToSceneReducer(state, payload)
  }

  if (type === 'SWITCH_TO_VIEW_ACTION') {
    return switchToViewReducer(state, payload)
  }

  if (type === 'SEND_SHIP_ACTION') {
    return sendShipReducer(state, payload)
  }

  return state
}
