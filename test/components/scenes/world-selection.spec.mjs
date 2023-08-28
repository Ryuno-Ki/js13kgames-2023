import chai from 'chai'
import chaiDom from 'chai-dom'

import { sectionWorldselection } from '../../../src/js/components/scenes/world-selection.js'
import store from '../../../src/js/state/store.js'

chai.use(chaiDom)
const { expect } = chai

describe('sectionWorldselection', function () {
  beforeEach(async function () {
		await store.dispatch({ type: 'RESET', payload: {} })
  })

  describe('when world-selection is not the active scene', function () {
    it('should be empty', function () {
      // Arrange
      const targetElement = document.createElement('section')
      const state = store.getState()

      // Act
      const worldSelectionScene = sectionWorldselection(targetElement, state)

      // Assert
      expect(worldSelectionScene).to.have.empty.html
    })
  })

  describe('when world-selection is the active scene', function () {
    it('should allow for selecting the scenario', function () {
      // Arrange
      const targetElement = document.createElement('section')
      const state = Object.assign({}, store.getState(), { activeScene: 'world-section' })

      // Act
      const worldSelectionScene = sectionWorldselection(targetElement, state)

      // Assert
      expect(worldSelectionScene).to.have.descendant('select#level-scenario')
      expect(worldSelectionScene).to.have.descendant('option[value=""][checked="checked"]')
      expect(worldSelectionScene).to.have.descendant('option[value="free-play"]')
      expect(worldSelectionScene).to.have.descendant('option[value="tutorial"]')
    })

    it('should link to the level scene', function () {
      // Arrange
      const targetElement = document.createElement('section')
      const state = Object.assign({}, store.getState(), { activeScene: 'world-section' })

      // Act
      const worldSelectionScene = sectionWorldselection(targetElement, state)

      // Assert
      expect(worldSelectionScene).to.have.descendant('button.action[data-scene="level-section"]')
    })
  })
})
