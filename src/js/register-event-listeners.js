import { onChange } from './on-change.js'
import { onClick } from './on-click.js'
import { onInput } from './on-input.js'

/**
 * @typedef {*} EventListener
 * @todo Frigging TypeScript is not able to detect document.body event listeners
 * with an union of window event listeners.
 */

/**
 * Catch-all error handler to aid with debugging on mobile.
 *
 * @private
 * @argument {ErrorEvent} event
 */
function onError (event) {
  document.body.appendChild(document.createTextNode(event.message))
}

/**
 * Registers event listeners.
 */
export function registerEventListeners () {
  on(/** @type {HTMLBodyElement} */(document.body), 'change', onChange)
  on(/** @type {HTMLBodyElement} */(document.body), 'click', onClick)
  on(/** @type {HTMLBodyElement} */(document.body), 'input', onInput)
  on(window, 'error', onError)
}

/**
 * Helper function to reduce file size.
 *
 * @private
 * @argument {HTMLBodyElement | Window} el
 * @argument {'change' | 'click' | 'error' | 'input'} eventType
 * @argument {EventListener} eventListener
 */
function on (el, eventType, eventListener) {
  el.addEventListener(eventType, eventListener)
}
