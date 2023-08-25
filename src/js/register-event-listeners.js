import { onChange } from './on-change.js'
import { onClick } from './on-click.js'
import { onInput } from './on-input.js'

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
  document.body.addEventListener('change', onChange)
  document.body.addEventListener('click', onClick)
  document.body.addEventListener('input', onInput)

  window.addEventListener('error', onError)
}
