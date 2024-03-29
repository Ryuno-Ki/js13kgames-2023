import { expect } from 'chai'

import { resetAction } from '../../../src/js/state/actions/reset.js'
import store from '../../../src/js/state/store.js'
import { switchToSceneReducer } from '../../../src/js/state/reducers/switch-to-scene.js'

describe('switchToSceneReducer', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
  })

  it('should update the active scene', function () {
    // Arrange
    const state = store.getState()
    const payload = { scene: 'about-section' }

    // Act
    const newState = switchToSceneReducer(state, payload)

    // Assert
    expect(newState).not.to.equal(state)
    expect(newState.activeScene).to.equal('about-section')
  })
})
