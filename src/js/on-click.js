import store from './state/store.js'
import { switchToSceneAction } from './state/actions/switch-to-scene.js'
async function onClick (event) {
  const target = event.target
  if (target.dataset.scene) return store.dispatch(switchToSceneAction(target.dataset.scene))
}
export function registerEventListeners () {
  document.body.addEventListener('click', onClick)
}
