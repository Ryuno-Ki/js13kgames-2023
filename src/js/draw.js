import { applyToDOM } from './apply-to-dom.js'
import * as componentRegistry from './registry.js'
import store from './state/store.js'

const selector = 'app'

/**
 * A single iteration on the render loop. Calls itself recursively.
 *
 * @private
 */
function step () {
  const main = document.getElementById(selector)

  if (!main) {
    return console.error('Could not find element with id "app"')
  }

  const newMain = componentRegistry.render(main, store.getState())
  applyToDOM(document.body, main, newMain)
  window.requestAnimationFrame(step)
}

/**
 * Initialises the render loop.
 */
export async function draw () {
  if (draw._runOnlyOnce) {
    step()
    // Ensure that the function signature does not differ
    return -1
  }

  return window.requestAnimationFrame(step)
}

/**
 * In order to test this function I need a way to not run into a recursion.
 *
 * @protected
 */
draw._runOnlyOnce = false
