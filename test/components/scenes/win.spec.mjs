import chai from 'chai'
import chaiDom from 'chai-dom'

import { sectionWin } from '../../../src/js/components/scenes/win.js'
import { resetAction } from '../../../src/js/state/actions/reset.js'
import store from '../../../src/js/state/store.js'

chai.use(chaiDom)
const { expect } = chai

describe('sectionWin', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
  })

  describe('when win is not the active scene', function () {
    it('should be empty', function () {
      // Arrange
      const targetElement = document.createElement('section')
      const state = store.getState()

      // Act
      const winScene = sectionWin(targetElement, state)

      // Assert
      expect(winScene).to.have.empty.html
    })
  })

  describe('when win is the active scene', function () {
    it('should link to the title scene', function () {
      // Arrange
      const targetElement = document.createElement('section')
      const state = Object.assign({}, store.getState(), { activeScene: 'win-section' })

      // Act
      const winScene = sectionWin(targetElement, state)

      // Assert
      expect(winScene).to.have.descendant('[data-scene="title-section"]')
    })
  })
})
