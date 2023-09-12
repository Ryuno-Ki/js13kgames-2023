import { FALLBACK_SHIP_NAME } from './constants.js'
import { attr } from './helpers/attr.js'
import store from './state/store.js'
import { sendShipAction } from './state/actions/send-ship.js'
import { setColorPreferenceAction } from './state/actions/set-color-preference.js'
import { setLevelScenarioAction } from './state/actions/set-level-scenario.js'

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
    const ship = attr(target, 'ship') || FALLBACK_SHIP_NAME
    const from = /** @type {import('./state/cities.js').CityName} */(store.getState().activeCity)
    const to = /** @type {import('./state/cities.js').CityName} */(target.value)

    return store.dispatch(sendShipAction({ ship, from, to }))
  }

  if (target.id === 'level-scenario') {
    const scenario = /** @type {import('./state/initial-state.js').Scenario} */(target.value)
    return store.dispatch(setLevelScenarioAction(scenario))
  }
}
