import store from './state/store.js'
import { checkOnWinConditionAction } from './state/actions/check-on-win-condition.js'
import { forwardToNextMonthAction } from './state/actions/forward-to-next-month.js'
import { loadGameAction } from './state/actions/load-game.js'
import { saveGameAction } from './state/actions/save-game.js'
import { switchToCityAction } from './state/actions/switch-to-city.js'
import { switchToSceneAction } from './state/actions/switch-to-scene.js'
import { switchToViewAction } from './state/actions/switch-to-view.js'
import { updateShipsAction } from './state/actions/update-ships.js'

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
    await store.dispatch(saveGameAction())
    await store.dispatch(checkOnWinConditionAction())
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

  if (target.dataset.state) {
    const savedGameState = target.dataset.state || '{}'
    const state = /** @type {import('./state/initial-state.js').State} */(JSON.parse(savedGameState))
    return store.dispatch(loadGameAction(state))
  }

  if (target.dataset.view) {
    const view = /** @type {import('./state/initial-state.js').View} */(target.dataset.view)
    return store.dispatch(switchToViewAction(view))
  }
}
