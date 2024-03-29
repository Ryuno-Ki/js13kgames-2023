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

  describe('when active view is market', function () {
    it('should explain the functionality', function () {
    // Arrange
      const targetElement = document.createElement('div')
      const state = Object.assign({}, store.getState(), { activeView: 'market', showTutorial: { market: true } })

      // Act
      const tutorialComponent = tutorial(targetElement, state)

      // Assert
      expect(tutorialComponent).not.to.equal(targetElement)
      expect(tutorialComponent).to.have.descendant('p.story')
      expect(tutorialComponent).not.to.have.descendant('[data-view]')
    })
  })

  describe('when active view is warehouse', function () {
    it('should explain the functionality', function () {
      // Arrange
      const targetElement = document.createElement('div')
      const state = Object.assign({}, store.getState(), { activeView: 'warehouse', showTutorial: { warehouse: true } })

      // Act
      const tutorialComponent = tutorial(targetElement, state)

      // Assert
      expect(tutorialComponent).not.to.equal(targetElement)
      expect(tutorialComponent).to.have.descendant('p.story')
      expect(tutorialComponent).to.have.descendant('button[data-view="sea"]')
    })
  })

  describe('when active view is sea', function () {
    it('should explain the functionality', function () {
      // Arrange
      const targetElement = document.createElement('div')
      const state = Object.assign({}, store.getState(), { activeView: 'sea', showTutorial: { sea: true } })

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
      const state = Object.assign({}, store.getState(), { showTutorial: { story: true } })

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
      const state = Object.assign({}, store.getState(), { activeView: 'docks', showTutorial: { docks: true } })

      // Act
      const tutorialComponent = tutorial(targetElement, state)

      // Assert
      expect(tutorialComponent).not.to.equal(targetElement)
      expect(tutorialComponent).to.have.descendant('p.story')
      expect(tutorialComponent).to.have.descendant('button[data-view="warehouse"]')
    })
  })
})
