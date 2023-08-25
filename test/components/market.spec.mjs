import chai from 'chai'
import chaiDom from 'chai-dom'

import { market } from '../../src/js/components/market.js'
import store from '../../src/js/state/store.js'

chai.use(chaiDom)
const { expect } = chai

describe('market', () => {
	beforeEach(() => {
		store.dispatch(undefined)
	})

	it('should render an empty list in case passed data is empty', () => {
		// Arrange
		const targetElement = document.createElement('div')
		targetElement.setAttribute('data-type', 'supply')
		targetElement.setAttribute('data-wares', JSON.stringify([]))
		const state = store.getState()

		// Act
		const marketComponent = market(targetElement, state)

		// Assert
		expect(marketComponent).not.to.equal(targetElement)
		expect(marketComponent).to.contain.text([ 'supply' ])
	})

	it('should render a list item for each ware', () => {
		// Arrange
		const wares = [{
			ware: 'met',
			quantity: 42
		}]
		const targetElement = document.createElement('div')
		targetElement.setAttribute('data-type', 'supply')
		targetElement.setAttribute('data-wares', JSON.stringify(wares))
		const state = store.getState()

		// Act
		const marketComponent = market(targetElement, state)

		// Assert
		expect(marketComponent).not.to.equal(targetElement)
		expect(marketComponent).to.contain.text([ 'supply' ])
		expect(marketComponent).to.contain.text([ 'met' ])
		expect(marketComponent).to.contain.text([ '42' ])
	})
})
