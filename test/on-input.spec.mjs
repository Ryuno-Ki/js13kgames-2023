import chai from 'chai'
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import { onInput } from '../src/js/on-click.js'
import { loadShipAction } from '../src/js/state/actions/load-ship.js'
import { unloadShipAction } from '../src/js/state/actions/unload-ship.js'
import store from '../src/js/state/store.js'

chai.use(sinonChai)
const { expect } = chai

describe('onInput', () => {
	afterEach(() => {
		sinon.restore()
	})

	it('should dispatch to load a ship', () => {
		// Arrange
		// FIXME: The city is a side effect by another test. No good.
		const city = 'Munich'
		const ship = 'Santa Maria'
		const quantity = 42
		const ware = 'potatoes'

		const event = new window.Event('input')
		const target = document.createElement('input')
		target.type = 'number'
		target.value = '42'
		target.setAttribute('data-load', 'load')
		target.setAttribute('data-city', city)
		target.setAttribute('data-ship', ship)
		target.setAttribute('data-ware', ware)
		target.addEventListener('input', onInput)
		sinon.spy(store, 'dispatch')

		// Act
		target.dispatchEvent(event)

		// Assert
		expect(store.dispatch).to.have.been.calledOnce
		expect(store.dispatch).to.have.been.calledWith(loadShipAction({ city, ship, ware, quantity }))
	})

	it('should dispatch to unload a ship', () => {
		// Arrange
		// FIXME: The city is a side effect by another test. No good.
		const city = 'Munich'
		const ship = 'Santa Maria'
		const quantity = 42
		const ware = 'potatoes'

		const event = new window.Event('input')
		const target = document.createElement('input')
		target.type = 'number'
		target.value = '42'
		target.setAttribute('data-load', 'unload')
		target.setAttribute('data-city', city)
		target.setAttribute('data-ship', ship)
		target.setAttribute('data-ware', ware)
		target.addEventListener('input', onInput)
		sinon.spy(store, 'dispatch')

		// Act
		target.dispatchEvent(event)

		// Assert
		expect(store.dispatch).to.have.been.calledOnce
		expect(store.dispatch).to.have.been.calledWith(unloadShipAction({ city, ship, ware, quantity }))
	})
})
