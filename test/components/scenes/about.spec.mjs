import chai from 'chai'
import chaiDom from 'chai-dom'

import { sectionAbout } from '../../../src/js/components/scenes/about.js'
import { resetAction } from '../../../src/js/state/actions/reset.js'
import store from '../../../src/js/state/store.js'

chai.use(chaiDom)
const { expect } = chai

describe('sectionAbout', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
  })

  describe('when about is not the active scene', function () {
    it('should be empty', function () {
      // Arrange
      const targetElement = document.createElement('section')
      const state = store.getState()

      // Act
      const aboutScene = sectionAbout(targetElement, state)

      // Assert
      expect(aboutScene).to.have.empty.html
    })
  })

  describe('when about is the active scene', function () {
    it('should display information about the game', function () {
      // Arrange
      const targetElement = document.createElement('section')
      const state = Object.assign({}, store.getState(), { activeScene: 'about-section' })

      // Act
      const aboutScene = sectionAbout(targetElement, state)

      // Assert
      expect(aboutScene).to.have.descendant('h1')
    })

    it('should link to my homepage', function () {
      // Arrange
      const targetElement = document.createElement('section')
      const state = Object.assign({}, store.getState(), { activeScene: 'about-section' })

      // Act
      const aboutScene = sectionAbout(targetElement, state)

      // Assert
      expect(aboutScene).to.have.descendant('a[href="https://jaenis.ch/"]')
    })

    it('should link to the LICENSE', function () {
      // Arrange
      const targetElement = document.createElement('section')
      const state = Object.assign({}, store.getState(), { activeScene: 'about-section' })

      // Act
      const aboutScene = sectionAbout(targetElement, state)

      // Assert
      expect(aboutScene).to.have.descendant('a[href$="LICENSE.txt"]')
    })

    it('should link to the source code', function () {
      // Arrange
      const targetElement = document.createElement('section')
      const state = Object.assign({}, store.getState(), { activeScene: 'about-section' })

      // Act
      const aboutScene = sectionAbout(targetElement, state)

      // Assert
      expect(aboutScene).to.have.descendant('a[href^="https://code.jaenis.ch/js13kgames/js13kgames-2023/"]')
    })

    it('should link to the title scene', function () {
      // Arrange
      const targetElement = document.createElement('section')
      const state = Object.assign({}, store.getState(), { activeScene: 'about-section' })

      // Act
      const aboutScene = sectionAbout(targetElement, state)

      // Assert
      expect(aboutScene).to.have.descendant('button.action[data-scene="title-section"]')
    })
  })
})
