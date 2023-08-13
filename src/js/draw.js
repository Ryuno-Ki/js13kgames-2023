import { applyToDOM } from './apply-to-dom.js'
import * as componentRegistry from './registry.js'
import store from './state/store.js'
const selector = 'app'
function step () {
  const main = document.getElementById(selector)
  if (!main) return console.error('Could not find element with id "app"')
  const newMain = componentRegistry.render(main, store.getState())
  applyToDOM(document.body, main, newMain)
  window.requestAnimationFrame(step)
}
export async function draw () {
  if (draw._runOnlyOnce) return step()
  return window.requestAnimationFrame(step)
}
draw._runOnlyOnce = false
