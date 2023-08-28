import chai from 'chai'
import chaiDom from 'chai-dom'

import { sectionWorldselection } from '../../../src/js/components/scenes/world-selection.js'
import store from '../../../src/js/state/store.js'

chai.use(chaiDom)
const { expect } = chai

describe('sectionWorldselection', () => {
	beforeEach(() => {
		store.dispatch(undefined)
	})

	describe('when world-selection is not the active scene', () => {
		it('should be empty', () => {
			// Arrange
			const targetElement = document.createElement('section')
			const state = store.getState()

			// Act
			const worldSelectionScene = sectionWorldselection(targetElement, state)

			// Assert
			expect(worldSelectionScene).to.have.empty.html
		})
	})

	describe('when world-selection is the active scene', () => {
		it('should link to the level scene', () => {
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
