import store from './state/store.js'
import { forwardToNextMonthAction } from './state/actions/forward-to-next-month.js'
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
    return store.dispatch(forwardToNextMonthAction())
  }

  if (target.dataset.city) {
    return store.dispatch(switchToCityAction(target.dataset.city))
  }

  if (target.dataset.scene) {
    return store.dispatch(switchToSceneAction(target.dataset.scene))
  }

  if (target.dataset.view) {
    return store.dispatch(switchToViewAction(target.dataset.view))
  }
}
