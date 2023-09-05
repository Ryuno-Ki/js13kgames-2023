import chai from 'chai'
import chaiDom from 'chai-dom'

import { tutorial } from '../../src/js/components/tutorial.js'
import { resetAction } from '../../src/js/state/actions/reset.js'
import store from '../../src/js/state/store.js'

chai.use(chaiDom)
const { expect } = chai

describe('tutorial', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
  })

  describe('when active view is warehouse', function () {
    it('should explain the functionality', function () {
      // Arrange
      const targetElement = document.createElement('div')
      const state = Object.assign({}, store.getState(), { activeView: 'warehouse' })

      // Act
      const tutorialComponent = tutorial(targetElement, state)

      // Assert
      expect(tutorialComponent).not.to.equal(targetElement)
      expect(tutorialComponent).to.have.descendant('p.story')
      expect(tutorialComponent).to.have.descendant('button[data-view="market"]')
    })
  })

  describe('when active view is story', function () {
    it('should explain the functionality', function () {
    // Arrange
      const targetElement = document.createElement('div')
      const state = store.getState()

      // Act
      const tutorialComponent = tutorial(targetElement, state)

      // Assert
      expect(tutorialComponent).not.to.equal(targetElement)
      expect(tutorialComponent).to.have.descendant('p.story')
      expect(tutorialComponent).to.have.descendant('button[data-view="docks"]')
    })
  })

  describe('when active view is docks', function () {
    it('should explain the functionality', function () {
      // Arrange
      const targetElement = document.createElement('div')
      const state = Object.assign({}, store.getState(), { activeView: 'docks' })

      // Act
      const tutorialComponent = tutorial(targetElement, state)

      // Assert
      expect(tutorialComponent).not.to.equal(targetElement)
      expect(tutorialComponent).to.have.descendant('p.story')
      expect(tutorialComponent).to.have.descendant('button[data-view="warehouse"]')
    })
  })
})
