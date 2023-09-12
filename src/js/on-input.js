import { FALLBACK_SHIP_NAME } from './constants.js'
import { attr } from './helpers/attr.js'
import store from './state/store.js'
import { buyAction } from './state/actions/buy.js'
import { loadShipAction } from './state/actions/load-ship.js'
import { sellAction } from './state/actions/sell.js'
import { setPlayernameAction } from './state/actions/set-playername.js'
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

  if (target.id === 'playername') {
    return store.dispatch(setPlayernameAction(target.value))
  }

  if (attr(target, 'buy')) {
    const city = /** @type {import('./state/cities.js').CityName} */(attr(target, 'city'))
    const ware = /** @type {import('./state/wares.js').Ware} */(attr(target, 'buy'))
    const quantity = Number(target.value)
    return store.dispatch(buyAction({ city, ware, quantity }))
  }

  if (attr(target, 'sell')) {
    const city = /** @type {import('./state/cities.js').CityName} */(attr(target, 'city'))
    const ware = /** @type {import('./state/wares.js').Ware} */(attr(target, 'sell'))
    const quantity = Number(target.value)
    return store.dispatch(sellAction({ city, ware, quantity }))
  }

  if (attr(target, 'load') === 'load') {
    const city = /** @type {import('./state/cities.js').CityName} */(attr(target, 'city'))
    const ship = attr(target, 'ship') || FALLBACK_SHIP_NAME
    const ware = /** @type {import('./state/wares.js').Ware} */(attr(target, 'ware'))
    const quantity = Number(target.value)
    return store.dispatch(loadShipAction({ city, ship, ware, quantity }))
  }

  if (attr(target, 'load') === 'unload') {
    const city = /** @type {import('./state/cities.js').CityName} */(attr(target, 'city'))
    const ship = attr(target, 'ship') || FALLBACK_SHIP_NAME
    const ware = /** @type {import('./state/wares.js').Ware} */(attr(target, 'ware'))
    const quantity = Number(target.value)

    return store.dispatch(unloadShipAction({ city, ship, ware, quantity }))
  }
}
