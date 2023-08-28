import chai from 'chai'
import chaiDom from 'chai-dom'

import { sectionSettings } from '../../../src/js/components/scenes/settings.js'
import store from '../../../src/js/state/store.js'

chai.use(chaiDom)
const { expect } = chai

describe('sectionSettings', () => {
	beforeEach(() => {
		store.dispatch(undefined)
	})

	describe('when settings is not the active scene', () => {
		it('should be empty', () => {
			// Arrange
			const targetElement = document.createElement('section')
			const state = store.getState()

			// Act
			const settingsScene = sectionSettings(targetElement, state)

			// Assert
			expect(settingsScene).to.have.empty.html
		})
	})

	describe('when settings is the active scene', () => {
		it('should link to the title scene', () => {
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
