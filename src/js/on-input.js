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

  if (target.dataset.buy) {
    const city = /** @type {import('./state/initial-state.js').CityName} */(target.dataset.city)
    const ware = /** @type {import('./state/initial-state.js').Ware} */(target.dataset.buy)
    const quantity = Number(target.value)
    return store.dispatch(buyAction({ city, ware, quantity }))
  }

  if (target.dataset.sell) {
    const city = /** @type {import('./state/initial-state.js').CityName} */(target.dataset.city)
    const ware = /** @type {import('./state/initial-state.js').Ware} */(target.dataset.sell)
    const quantity = Number(target.value)
    return store.dispatch(sellAction({ city, ware, quantity }))
  }

  if (target.dataset.load === 'load') {
    const city = /** @type {import('./state/initial-state.js').CityName} */(target.dataset.city)
    const ship = target.dataset.ship || 'The Flying Dutchman'
    const ware = /** @type {import('./state/initial-state.js').Ware} */(target.dataset.ware)
    const quantity = Number(target.value)
    return store.dispatch(loadShipAction({ city, ship, ware, quantity }))
  }

  if (target.dataset.load === 'unload') {
    const city = /** @type {import('./state/initial-state.js').CityName} */(target.dataset.city)
    const ship = target.dataset.ship || 'The Flying Dutchman'
    const ware = /** @type {import('./state/initial-state.js').Ware} */(target.dataset.ware)
    const quantity = Number(target.value)

    return store.dispatch(unloadShipAction({ city, ship, ware, quantity }))
  }
}
