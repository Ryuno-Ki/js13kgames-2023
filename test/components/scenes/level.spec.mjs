import chai from 'chai'
import chaiDom from 'chai-dom'

import { sectionLevel } from '../../../src/js/components/scenes/level.js'
import { resetAction } from '../../../src/js/state/actions/reset.js'
import store from '../../../src/js/state/store.js'

chai.use(chaiDom)
const { expect } = chai

describe('sectionLevel', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
  })

  describe('when level is not the active scene', function () {
    it('should be empty', function () {
      // Arrange
      const targetElement = document.createElement('section')
      const state = store.getState()

      // Act
      const levelScene = sectionLevel(targetElement, state)

      // Assert
      expect(levelScene).to.have.empty.html
    })
  })

  describe('when level is the active scene', function () {
    it('should display the tutorial view', function () {
      // Arrange
      const targetElement = document.createElement('section')
      const state = Object.assign({}, store.getState(), { activeScene: 'level-section' })

      // Act
      const levelScene = sectionLevel(targetElement, state)

      // Assert
      expect(levelScene).to.have.descendant('h1')
    })

    it('should show the tutorial view', function () {
      // Arrange
      const targetElement = document.createElement('section')
      const state = Object.assign({}, store.getState(), { activeScene: 'level-section', activeView: 'story' })

      // Act
      const levelScene = sectionLevel(targetElement, state)

      // Assert
      expect(levelScene).to.have.descendant('[data-component="tutorial"]')
    })

    it('should show the sea view', function () {
      // Arrange
      const targetElement = document.createElement('section')
      const state = Object.assign({}, store.getState(), { activeScene: 'level-section', activeView: 'sea' })

      // Act
      const levelScene = sectionLevel(targetElement, state)

      // Assert
      expect(levelScene).to.have.descendant('[data-component="sea"]')
    })

    it('should show the market view', function () {
      // Arrange
      const targetElement = document.createElement('section')
      const state = Object.assign({}, store.getState(), { activeScene: 'level-section', activeView: 'market' })

      // Act
      const levelScene = sectionLevel(targetElement, state)

      // Assert
      expect(levelScene).to.have.descendant('[data-component="market"]')
    })

    it('should show the warehouse view', function () {
      // Arrange
      const targetElement = document.createElement('section')
      const state = Object.assign({}, store.getState(), { activeScene: 'level-section', activeView: 'warehouse' })

      // Act
      const levelScene = sectionLevel(targetElement, state)

      // Assert
      expect(levelScene).to.have.descendant('[data-component="warehouse"]')
    })

    it('should show the docks view', function () {
      // Arrange
      const targetElement = document.createElement('section')
      const state = Object.assign({}, store.getState(), { activeScene: 'level-section', activeView: 'docks' })

      // Act
      const levelScene = sectionLevel(targetElement, state)

      // Assert
      expect(levelScene).to.have.descendant('[data-component="docks"]')
    })

    it('should show the city view', function () {
      // Arrange
      const targetElement = document.createElement('section')
      const state = Object.assign({}, store.getState(), { activeScene: 'level-section', activeView: 'city' })

      // Act
      const levelScene = sectionLevel(targetElement, state)

      // Assert
      expect(levelScene).to.have.descendant('[data-component="city-overview"]')
    })

    it('should display the month-meter', function () {
      // Arrange
      const targetElement = document.createElement('section')
      const state = Object.assign({}, store.getState(), { activeScene: 'level-section' })

      // Act
      const levelScene = sectionLevel(targetElement, state)

      // Assert
      expect(levelScene).to.have.descendant('[data-component="month-meter"]')
    })
  })
})
