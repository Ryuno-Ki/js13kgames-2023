import chai from 'chai'
import chaiDom from 'chai-dom'

import { sectionTitle } from '../../../src/js/components/scenes/title.js'
import { resetAction } from '../../../src/js/state/actions/reset.js'
import store from '../../../src/js/state/store.js'

chai.use(chaiDom)
const { expect } = chai

describe('sectionTitle', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
  })

  describe('when title is not the active scene', function () {
    it('should be empty', function () {
      // Arrange
      const targetElement = document.createElement('section')
      const state = Object.assign({}, store.getState(), { activeScene: 'about-section' })

      // Act
      const titleScene = sectionTitle(targetElement, state)

      // Assert
      expect(titleScene).to.have.empty.html
    })
  })

  describe('when title is the active scene', function () {
    it('should link to the new-game scene', function () {
      // Arrange
      const targetElement = document.createElement('section')
      const state = store.getState()

      // Act
      const titleScene = sectionTitle(targetElement, state)

      // Assert
      expect(titleScene).to.have.descendant('button[data-scene="new-game-section"]')
    })

    it('should link to the settings scene', function () {
      // Arrange
      const targetElement = document.createElement('section')
      const state = store.getState()

      // Act
      const titleScene = sectionTitle(targetElement, state)

      // Assert
      expect(titleScene).to.have.descendant('button[data-scene="settings-section"]')
    })

    it('should link to the about scene', function () {
      // Arrange
      const targetElement = document.createElement('section')
      const state = store.getState()

      // Act
      const titleScene = sectionTitle(targetElement, state)

      // Assert
      expect(titleScene).to.have.descendant('button[data-scene="about-section"]')
    })
  })
})
