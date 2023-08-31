import chai from 'chai'
import chaiDom from 'chai-dom'

import { sectionSettings } from '../../../src/js/components/scenes/settings.js'
import { resetAction } from '../../../src/js/state/actions/reset.js'
import store from '../../../src/js/state/store.js'

chai.use(chaiDom)
const { expect } = chai

describe('sectionSettings', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
  })

  describe('when settings is not the active scene', function () {
    it('should be empty', function () {
      // Arrange
      const targetElement = document.createElement('section')
      const state = store.getState()

      // Act
      const settingsScene = sectionSettings(targetElement, state)

      // Assert
      expect(settingsScene).to.have.empty.html
    })
  })

  describe('when settings is the active scene', function () {
    it('should allow to choose colour preference', function () {
      // Arrange
      const targetElement = document.createElement('section')
      const state = Object.assign({}, store.getState(), { activeScene: 'settings-section' })

      // Act
      const settingsScene = sectionSettings(targetElement, state)

      // Assert
      expect(settingsScene).to.have.descendant('select#color-preference')
      expect(settingsScene).to.have.descendant('option[value="system"]')
      expect(settingsScene).to.have.descendant('option[value="light"]')
      expect(settingsScene).to.have.descendant('option[value="dark"]')
    })

    it('should link to the title scene', function () {
      // Arrange
      const targetElement = document.createElement('section')
      const state = Object.assign({}, store.getState(), { activeScene: 'settings-section' })

      // Act
      const settingsScene = sectionSettings(targetElement, state)

      // Assert
      expect(settingsScene).to.have.descendant('button[data-scene="title-section"]')
    })
  })
})
