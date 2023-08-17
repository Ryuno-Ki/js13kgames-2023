import { initialState } from '../initial-state.js'
import { sendShipReducer } from './send-ship.js'
import { switchToSceneReducer } from './switch-to-scene.js'
export function reducer (state, action) {
  if (typeof state === 'undefined') return initialState
  const type = action.type
  const payload = action.payload

  if (type === 'SWITCH_TO_SCENE_ACTION') return switchToSceneReducer(state, payload)
  if (type === 'SEND_SHIP') return sendShipReducer(state, payload)

  return state
}
