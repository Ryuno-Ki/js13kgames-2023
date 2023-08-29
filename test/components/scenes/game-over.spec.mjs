import chai from 'chai'
import chaiDom from 'chai-dom'

import { sectionGameOver } from '../../../src/js/components/scenes/game-over.js'
import store from '../../../src/js/state/store.js'

chai.use(chaiDom)
const { expect } = chai

describe('sectionGameOver', function () {
  beforeEach(async function () {
    await store.dispatch({ type: 'RESET', payload: {} })
  })

  describe('when game-over is not the active scene', function () {
    it('should be empty', function () {
      // Arrange
      const targetElement = document.createElement('section')
      const state = store.getState()

      // Act
      const gameOverScene = sectionGameOver(targetElement, state)

      // Assert
      expect(gameOverScene).to.have.empty.html
    })
  })

  describe('when game-over is the active scene', function () {
    it('should display GAME OVER', function () {
      // Arrange
      const targetElement = document.createElement('section')
      const state = Object.assign({}, store.getState(), { activeScene: 'game-over-section' })

      // Act
      const gameOverScene = sectionGameOver(targetElement, state)

      // Assert
      expect(gameOverScene).to.have.descendant('h1')
    })

    it('should link to the title scene', function () {
      // Arrange
      const targetElement = document.createElement('section')
      const state = Object.assign({}, store.getState(), { activeScene: 'game-over-section' })

      // Act
      const gameOverScene = sectionGameOver(targetElement, state)

      // Assert
      expect(gameOverScene).to.have.descendant('button.action[data-scene="title-section"]')
    })
  })
})
