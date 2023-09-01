import chai from 'chai'
import chaiDom from 'chai-dom'

import { sectionLoadgame } from '../../../src/js/components/scenes/load-game.js'
import { resetAction } from '../../../src/js/state/actions/reset.js'
import store from '../../../src/js/state/store.js'

chai.use(chaiDom)
const { expect } = chai

describe('sectionLoadgame', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
  })

  describe('when load-game is not the active scene', function () {
    it('should be empty', function () {
      // Arrange
      const targetElement = document.createElement('section')
      const state = store.getState()

      // Act
      const loadGameScene = sectionLoadgame(targetElement, state)

      // Assert
      expect(loadGameScene).to.have.empty.html
    })
  })

  describe('when load-game is the active scene', function () {
    it('should link to the title scene', function () {
      // Arrange
      const targetElement = document.createElement('section')
      const state = Object.assign({}, store.getState(), { activeScene: 'load-game-section' })

      // Act
      const loadGameScene = sectionLoadgame(targetElement, state)

      // Assert
      expect(loadGameScene).to.have.descendant('button[data-scene="title-section"]')
    })
  })
})
