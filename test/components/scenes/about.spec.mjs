import chai from 'chai'
import chaiDom from 'chai-dom'

import { sectionAbout } from '../../../src/js/components/scenes/about.js'
import store from '../../../src/js/state/store.js'

chai.use(chaiDom)
const { expect } = chai

describe('sectionAbout', () => {
	beforeEach(() => {
		store.dispatch(undefined)
	})

	describe('when about is not the active scene', () => {
		it('should be empty', () => {
			// Arrange
			const targetElement = document.createElement('section')
			const state = store.getState()

			// Act
			const aboutScene = sectionAbout(targetElement, state)

			// Assert
			expect(aboutScene).to.have.empty.html
		})
	})

	describe('when about is the active scene', () => {
		it('should display information about the game', () => {
			// Arrange
			const targetElement = document.createElement('section')
			const state = Object.assign({}, store.getState(), { activeScene: 'about-section' })

			// Act
			const aboutScene = sectionAbout(targetElement, state)

			// Assert
			expect(aboutScene).to.have.descendant('h1')
		})

		it('should link to the title scene', () => {
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
