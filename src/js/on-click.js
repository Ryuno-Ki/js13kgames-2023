import { attr } from './helpers/attr.js'
import store from './state/store.js'
import { buyShipAction } from './state/actions/buy-ship.js'
import { checkOnGameoverConditionAction } from './state/actions/check-on-gameover-condition.js'
import { checkOnWinConditionAction } from './state/actions/check-on-win-condition.js'
import { deleteGameAction } from './state/actions/delete-game.js'
import { forwardToNextMonthAction } from './state/actions/forward-to-next-month.js'
import { loadGameAction } from './state/actions/load-game.js'
import { restockAction } from './state/actions/restock.js'
import { saveGameAction } from './state/actions/save-game.js'
import { setTutorialAction } from './state/actions/set-tutorial.js'
import { switchToSceneAction } from './state/actions/switch-to-scene.js'
import { switchToViewAction } from './state/actions/switch-to-view.js'
import { unveilHistoryAction } from './state/actions/unveil-history.js'
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

  if (attr(target, 'action')) {
    await Promise.all([
      forwardToNextMonthAction(),
      restockAction(),
      updateShipsAction(),
      unveilHistoryAction(),
      saveGameAction(),
      checkOnWinConditionAction(),
      checkOnGameoverConditionAction()
    ].map((action) => store.dispatch(action)))
    return
  }

  if (attr(target, 'acquire') === 'ship') {
    const city = /** @type {import('./state/cities.js').CityName} */(attr(target, 'city'))
    return store.dispatch(buyShipAction(city))
  }

  if (attr(target, 'playername')) {
    const playername = attr(target, 'playername')
    return store.dispatch(deleteGameAction(playername))
  }

  if (attr(target, 'scene')) {
    const scene = /** @type {import('./state/initial-state.js').Scene} */(attr(target, 'scene'))
    await store.dispatch(switchToSceneAction(scene))
    await store.dispatch(setTutorialAction(scene))
    return
  }

  if (attr(target, 'state')) {
    const savedGameState = attr(target, 'state') || '{}'
    const state = /** @type {import('./state/initial-state.js').State} */(JSON.parse(savedGameState))
    return store.dispatch(loadGameAction(state))
  }

  if (attr(target, 'view')) {
    const view = /** @type {import('./state/views.js').View} */(attr(target, 'view'))
    return store.dispatch(switchToViewAction(view))
  }
}
