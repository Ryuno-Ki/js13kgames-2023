import store from './state/store.js'
import { switchToSceneAction } from './state/actions/switch-to-scene.js'
import { sendShip } from './state/actions/send-ship.js'

async function onClick (event) {
  const target = event.target
  if (target.dataset.scene) return store.dispatch(switchToSceneAction(target.dataset.scene))
}

async function onChange (event) {
  const target = event.target
  if (target.id === 'destination') {
    const ship = target.dataset.ship
    const from = store.getState().activeCity
    const to = target.value
    return store.dispatch(sendShip({ ship, from, to }))
  }
}

export function registerEventListeners () {
  document.body.addEventListener('change', onChange)
  document.body.addEventListener('click', onClick)
}
