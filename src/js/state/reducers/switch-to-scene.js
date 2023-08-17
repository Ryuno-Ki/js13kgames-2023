export function switchToSceneReducer (state, payload) {
  const activeScene = payload.scene

  return Object.assign({}, state, {
    activeScene
  })
}
