import { expect } from 'chai'

import { resetAction } from '../../../src/js/state/actions/reset.js'
import store from '../../../src/js/state/store.js'
import { setTutorialReducer } from '../../../src/js/state/reducers/set-tutorial.js'

describe('setTutorialReducer', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
  })

  describe('when scene is not level', function () {
    it('should leave the showTutorial flags unchanged', function () {
    // Arrange
      const state = store.getState()
      const payload = { scene: 'about-section' }

      // Act
      const newState = setTutorialReducer(state, payload)

      // Assert
      expect(newState).not.to.equal(state)
      Object.keys(newState.showTutorial).forEach((view) => {
        expect(newState.showTutorial[view]).to.equal(state.showTutorial[view])
      })
    })
  })

  describe('when scene is level', function () {
    it('should set the color preference', function () {
    // Arrange
      const state = store.getState()
      const payload = { scene: 'level-section' }

      // Act
      const newState = setTutorialReducer(state, payload)

      // Assert
      expect(newState).not.to.equal(state)
      Object.keys(newState.showTutorial).forEach((view) => {
        expect(newState.showTutorial[view]).to.be.true
      })
    })
  })
})
