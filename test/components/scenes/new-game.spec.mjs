import chai from 'chai'
import chaiDom from 'chai-dom'

import { sectionNewgame } from '../../../src/js/components/scenes/new-game.js'
import store from '../../../src/js/state/store.js'

chai.use(chaiDom)
const { expect } = chai

describe('sectionNewgame', () => {
	beforeEach(() => {
		store.dispatch(undefined)
	})

	describe('when new-game is not the active scene', () => {
		it('should be empty', () => {
			// Arrange
			const targetElement = document.createElement('section')
			const state = store.getState()

			// Act
			const newGameScene = sectionNewgame(targetElement, state)

			// Assert
			expect(newGameScene).to.have.empty.html
		})
	})

	describe('when new-game is the active scene', () => {
		it('should query for player name', () => {
			// Arrange
			const targetElement = document.createElement('section')
			const state = Object.assign({}, store.getState(), { activeScene: 'new-game-section' })

			// Act
			const newGameScene = sectionNewgame(targetElement, state)

			// Assert
			expect(newGameScene).to.have.descendant('input#playername[type="text"]')
		})

		it('should link to the title scene', () => {
			// Arrange
			const targetElement = document.createElement('section')
			const state = Object.assign({}, store.getState(), { activeScene: 'new-game-section' })

			// Act
			const newGameScene = sectionNewgame(targetElement, state)

			// Assert
			expect(newGameScene).to.have.descendant('button[data-scene="title-section"]')
		})

		it('should link to the world scene', () => {
			// Arrange
			const targetElement = document.createElement('section')
			const state = Object.assign({}, store.getState(), { activeScene: 'new-game-section' })

			// Act
			const newGameScene = sectionNewgame(targetElement, state)

			// Assert
			expect(newGameScene).to.have.descendant('button[data-scene="world-section"]')
		})
	})
})
