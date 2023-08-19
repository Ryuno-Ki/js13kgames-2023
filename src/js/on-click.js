import store from './state/store.js'
import { loadShipAction } from './state/actions/load-ship.js'
import { switchToCityAction } from './state/actions/switch-to-city.js'
import { switchToSceneAction } from './state/actions/switch-to-scene.js'
import { switchToViewAction } from './state/actions/switch-to-view.js'
import { sendShipAction } from './state/actions/send-ship.js'

async function onClick (event) {
  const target = event.target

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

async function onChange (event) {
  const target = event.target
  document.body.appenChild(document.createTextNode(target.outerHTML))
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
    const quantity = target.value
    return store.dispatch(loadShipAction({ city, ship, ware, quantity }))
  }

  if (target.dataset.load === 'unload') {
		// TODO: implement
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
