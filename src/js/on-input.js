import store from './state/store.js'
import { loadShipAction } from './state/actions/load-ship.js'
import { unloadShipAction } from './state/actions/unload-ship.js'

/**
 * Input event handler
 *
 * @argument {Event} event
 */
export async function onInput (event) {
  const target = /** @type {HTMLInputElement} */(event.target)
  if (!target) {
    return
  }

  if (target.dataset.load === 'load') {
    const city = store.getState().activeCity
    const ship = target.dataset.ship
    const ware = target.dataset.ware
    const quantity = Number(target.value)
    return store.dispatch(loadShipAction({ city, ship, ware, quantity }))
  }

  if (target.dataset.load === 'unload') {
    const city = store.getState().activeCity
    const ship = target.dataset.ship
    const ware = target.dataset.ware
    const quantity = Number(target.value)

    return store.dispatch(unloadShipAction({ city, ship, ware, quantity }))
  }
}
