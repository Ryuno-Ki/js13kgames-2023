import store from './state/store.js'
import { forwardToNextMonthAction } from './state/actions/forward-to-next-month.js'
import { loadShipAction } from './state/actions/load-ship.js'
import { sendShipAction } from './state/actions/send-ship.js'
import { switchToCityAction } from './state/actions/switch-to-city.js'
import { switchToSceneAction } from './state/actions/switch-to-scene.js'
import { switchToViewAction } from './state/actions/switch-to-view.js'
import { unloadShipAction } from './state/actions/unload-ship.js'

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

export async function onChange (event) {
  const target = event.target

  if (target.id === 'destination') {
    const ship = target.dataset.ship
    const from = store.getState().activeCity
    const to = target.value

    return store.dispatch(sendShipAction({ ship, from, to }))
  }
}

async function onInput (event) {
  const target = event.target

  if (target.dataset.load === 'load') {
    const city = store.getState().activeCity
    const ship = target.dataset.ship
    const ware = target.dataset.ware
    const quantity = target.value - 0
    return store.dispatch(loadShipAction({ city, ship, ware, quantity }))
  }

  if (target.dataset.load === 'unload') {
    const city = store.getState().activeCity
    const ship = target.dataset.ship
    const ware = target.dataset.ware
    const quantity = target.value - 0
    return store.dispatch(unloadShipAction({ city, ship, ware, quantity }))
  }
}

export function registerEventListeners () {
  document.body.addEventListener('change', onChange)
  document.body.addEventListener('click', onClick)
  document.body.addEventListener('input', onInput)
  window.onerror = (e) => {
    document.body.appendChild(document.createTextNode(e.message))
  }
}
