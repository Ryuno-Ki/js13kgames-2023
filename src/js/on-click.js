import store from './state/store.js'
import { forwardToNextMonthAction } from './state/actions/forward-to-next-month.js'
import { updateShipsAction } from './state/actions/update-ships.js'
import { switchToCityAction } from './state/actions/switch-to-city.js'
import { switchToSceneAction } from './state/actions/switch-to-scene.js'
import { switchToViewAction } from './state/actions/switch-to-view.js'

/**
 * Click event handler
 *
 * @argument {MouseEvent} event
 */
export async function onClick (event) {
  const target = /** @type {HTMLElement} */(event.target)

  if (!target) {
    return
  }

  if (target.dataset.action) {
    await store.dispatch(forwardToNextMonthAction())
    await store.dispatch(updateShipsAction())
    return
  }

  if (target.dataset.city) {
    const city = /** @type {import('./state/initial-state.js').CityName} */(target.dataset.city)
    return store.dispatch(switchToCityAction(city))
  }

  if (target.dataset.scene) {
    const scene = /** @type {import('./state/initial-state.js').Scene} */(target.dataset.scene)
    return store.dispatch(switchToSceneAction(scene))
  }

  if (target.dataset.view) {
    const view = /** @type {import('./state/initial-state.js').View} */(target.dataset.view)
    return store.dispatch(switchToViewAction(view))
  }
}
