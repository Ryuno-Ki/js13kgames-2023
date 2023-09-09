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
    describe('when the scenario is free-play', function () {
      it('should unset the tutorial flags', function () {
      // Arrange
        const state = Object.assign({}, store.getState(), { activeScenario: 'free-play' })
        const payload = { scene: 'level-section' }

        // Act
        const newState = setTutorialReducer(state, payload)

        // Assert
        expect(newState).not.to.equal(state)
        Object.keys(newState.showTutorial).forEach((view) => {
          expect(newState.showTutorial[view]).to.be.false
        })
      })

      it('should set the view to warehouse', function () {
        // Arrange
        const state = Object.assign({}, store.getState(), { activeScenario: 'free-play' })
        const payload = { scene: 'level-section' }

        // Act
        const newState = setTutorialReducer(state, payload)

        // Assert
        expect(newState).not.to.equal(state)
        expect(newState.activeView).to.equal('warehouse')
      })
    })

    describe('when the scenario is tutorial', function () {
      it('should set the tutorial flags', function () {
        // Arrange
        const state = Object.assign({}, store.getState(), { activeScenario: 'tutorial' })
        const payload = { scene: 'level-section' }

        // Act
        const newState = setTutorialReducer(state, payload)

        // Assert
        expect(newState).not.to.equal(state)
        Object.keys(newState.showTutorial).forEach((view) => {
          expect(newState.showTutorial[view]).to.be.true
        })
      })

      it('should set the view to story', function () {
        // Arrange
        const state = Object.assign({}, store.getState(), { activeScenario: 'tutorial' })
        const payload = { scene: 'level-section' }

        // Act
        const newState = setTutorialReducer(state, payload)

        // Assert
        expect(newState).not.to.equal(state)
        expect(newState.activeView).to.equal('story')
      })
    })
  })
})
