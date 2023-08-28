import chai from 'chai'
import chaiDom from 'chai-dom'

import { sectionGameOver } from '../../../src/js/components/scenes/game-over.js'
import store from '../../../src/js/state/store.js'

chai.use(chaiDom)
const { expect } = chai

describe('sectionGameOver', () => {
	beforeEach(() => {
		store.dispatch(undefined)
	})

	describe('when game-over is not the active scene', () => {
		it('should be empty', () => {
			// Arrange
			const targetElement = document.createElement('section')
			const state = store.getState()

			// Act
			const gameOverScene = sectionGameOver(targetElement, state)

			// Assert
			expect(gameOverScene).to.have.empty.html
		})
	})

	describe('when game-over is the active scene', () => {
		it('should display GAME OVER', () => {
			// Arrange
			const targetElement = document.createElement('section')
			const state = Object.assign({}, store.getState(), { activeScene: 'game-over-section' })

			// Act
			const gameOverScene = sectionGameOver(targetElement, state)

			// Assert
			expect(gameOverScene).to.have.descendant('h1')
		})

		it('should link to the title scene', () => {
			// Arrange
			const targetElement = document.createElement('section')
			const state = Object.assign({}, store.getState(), { activeScene: 'game-over-section' })

			// Act
			const gameOverScene = sectionGameOver(targetElement, state)

			// Assert
			expect(gameOverScene).to.have.descendant('button.action[data-scene="title-section"]')
		})
	})
})
