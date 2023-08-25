import store from './state/store.js'
import { sendShipAction } from './state/actions/send-ship.js'

/**
 * Event listener on change events.
 *
 * @argument {Event} event
 */
export async function onChange (event) {
  const target = /** @type {HTMLSelectElement} */(event.target)

  if (!target) {
    return
  }

  if (target.id === 'destination') {
    const ship = target.dataset.ship
    const from = store.getState().activeCity
    const to = target.value

    return store.dispatch(sendShipAction({ ship, from, to }))
  }
}
