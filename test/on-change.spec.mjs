import chai from 'chai'
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import { sendShipAction } from '../src/js/state/actions/send-ship.js'
import { onChange } from '../src/js/on-change.js'
import store from '../src/js/state/store.js'

chai.use(sinonChai)
const { expect } = chai

describe('onChange', () => {
	afterEach(() => {
		sinon.restore()
	})

	it('should dispatch to send a ship', () => {
		// Arrange
		const event = new window.Event('change')
		const ship = 'Santa Maria'
		const from = store.getState().activeCity
		const to = 'there'
		const target = document.createElement('input')
		target.setAttribute('id', 'destination')
		target.setAttribute('data-ship', ship)
		target.setAttribute('value', to)
		target.addEventListener('change', onChange)
		sinon.spy(store, 'dispatch')

		// Act
		target.dispatchEvent(event)

		// Assert
		expect(store.dispatch).to.have.been.calledOnce
		expect(store.dispatch).to.have.been.calledWith(sendShipAction({ ship, from, to }))
	})
})
