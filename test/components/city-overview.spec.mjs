import chai from 'chai'
import chaiDom from 'chai-dom'

import { cityOverview } from '../../src/js/components/city-overview.js'
import store from '../../src/js/state/store.js'

chai.use(chaiDom)
const { expect } = chai

describe('cityOverview', () => {
	beforeEach(() => {
		store.dispatch(undefined)
	})

	it('should render the unchanged element in case the city is not to be found', () => {
		// Arrange
		const targetElement = document.createElement('div')
		const state = store.getState()

		// Act
		const cityOverviewComponent = cityOverview(targetElement, state)

		// Assert
		expect(cityOverviewComponent).not.to.equal(targetElement)
		expect(cityOverviewComponent).not.to.contain.text([ 'Lübeck' ])
	})

	it('should display the name of the city', () => {
		// Arrange
		const targetElement = document.createElement('div')
		const state = Object.assign({}, store.getState(), { activeCity: 'Lübeck' })

		// Act
		const cityOverviewComponent = cityOverview(targetElement, state)

		// Assert
		expect(cityOverviewComponent).not.to.equal(targetElement)
		expect(cityOverviewComponent).to.contain.text([ 'Lübeck' ])
	})

	it('should display a navigation to the docks', () => {
		// Arrange
		const targetElement = document.createElement('div')
		const state = Object.assign({}, store.getState(), { activeCity: 'Lübeck' })

		// Act
		const cityOverviewComponent = cityOverview(targetElement, state)

		// Assert
		expect(cityOverviewComponent).not.to.equal(targetElement)
		expect(cityOverviewComponent).to.have.descendant('[data-component="docks"]')
	})

	it('should display a navigation to the market', () => {
		// Arrange
		const targetElement = document.createElement('div')
		const state = Object.assign({}, store.getState(), { activeCity: 'Lübeck' })

		// Act
		const cityOverviewComponent = cityOverview(targetElement, state)

		// Assert
		expect(cityOverviewComponent).not.to.equal(targetElement)
		expect(cityOverviewComponent).to.have.descendant('[data-component="market"]')
	})

	it('should display a navigation to the sea', () => {
		// Arrange
		const targetElement = document.createElement('div')
		const state = Object.assign({}, store.getState(), { activeCity: 'Lübeck' })

		// Act
		const cityOverviewComponent = cityOverview(targetElement, state)

		// Assert
		expect(cityOverviewComponent).not.to.equal(targetElement)
		expect(cityOverviewComponent).to.have.descendant('button[data-view="sea"]')
	})
})
