import chai from 'chai'
import chaiDom from 'chai-dom'

import { sectionWin } from '../../../src/js/components/scenes/win.js'
import store from '../../../src/js/state/store.js'

chai.use(chaiDom)
const { expect } = chai

describe('sectionWin', () => {
	beforeEach(() => {
		store.dispatch(undefined)
	})

	describe('when win is not the active scene', () => {
		it('should be empty', () => {
			// Arrange
			const targetElement = document.createElement('section')
			const state = store.getState()

			// Act
			const winScene = sectionWin(targetElement, state)

			// Assert
			expect(winScene).to.have.empty.html
		})
	})

	describe('when win is the active scene', () => {
		it('should link to the title scene', () => {
			// Arrange
			const targetElement = document.createElement('section')
			const state = Object.assign({}, store.getState(), { activeScene: 'win-section' })

			// Act
			const winScene = sectionWin(targetElement, state)

			// Assert
			expect(winScene).to.have.descendant('button.action[data-scene="title-section"]')
		})
	})
})
