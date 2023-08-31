import store from './state/store.js'
import { sendShipAction } from './state/actions/send-ship.js'
import { setColorPreferenceAction } from './state/actions/set-color-preference.js'

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

  if (target.id === 'color-preference') {
    const color = /** @type {import('./state/initial-state.js').Color} */(target.value)
    return store.dispatch(setColorPreferenceAction(color))
  }

  if (target.id === 'destination') {
    const ship = target.dataset.ship || 'The Flying Dutchman'
    const from = /** @type {import('./state/initial-state.js').CityName} */(store.getState().activeCity)
    const to = /** @type {import('./state/initial-state.js').CityName} */(target.value)

    return store.dispatch(sendShipAction({ ship, from, to }))
  }
}
