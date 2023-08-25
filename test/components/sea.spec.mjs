import chai from 'chai'
import chaiDom from 'chai-dom'

import { sea } from '../../src/js/components/sea.js'
import store from '../../src/js/state/store.js'

chai.use(chaiDom)
const { expect } = chai

describe('sea', () => {
	beforeEach(() => {
		store.dispatch(undefined)
	})

	it('should render a button for each city', () => {
		// Arrange
		const targetElement = document.createElement('div')
		const state = store.getState()

		// Act
		const seaComponent = sea(targetElement, state)

		// Assert
		expect(seaComponent).not.to.equal(targetElement)
		expect(seaComponent).to.contain('button[type="button"][data-city="Wismar"]')
	})

	it('should render a list of moored ships', () => {
		// Arrange
		const targetElement = document.createElement('div')
		const state = store.getState()

		// Act
		const seaComponent = sea(targetElement, state)

		// Assert
		expect(seaComponent).not.to.equal(targetElement)
		expect(seaComponent).to.contain.text([ 'Marie in Lübeck' ])
	})

	it('should render a list of sailing ships', () => {
		// Arrange
		const itineraries = {
			itineraries: [{
				ship: 'Marie',
				from: 'Lübeck',
				to: 'Wismar'
			}]
		}
		const targetElement = document.createElement('div')
		const state = Object.assign({}, store.getState(), itineraries)

		// Act
		const seaComponent = sea(targetElement, state)

		// Assert
		expect(seaComponent).not.to.equal(targetElement)
		expect(seaComponent).to.contain.text([ 'Marie from Lübeck to Wismar' ])
	})
})
