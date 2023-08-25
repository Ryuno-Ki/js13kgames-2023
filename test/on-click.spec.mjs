import chai from 'chai'
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import { onClick } from '../src/js/on-click.js'
import { forwardToNextMonthAction } from '../src/js/state/actions/forward-to-next-month.js'
import { switchToCityAction } from '../src/js/state/actions/switch-to-city.js'
import { switchToSceneAction } from '../src/js/state/actions/switch-to-scene.js'
import { switchToViewAction } from '../src/js/state/actions/switch-to-view.js'
import store from '../src/js/state/store.js'

chai.use(sinonChai)
const { expect } = chai

describe('onClick', () => {
	afterEach(() => {
		sinon.restore()
	})

	it('should dispatch to forward to the next month', () => {
		// Arrange
		const event = new window.Event('click')
		const target = document.createElement('button')
		target.type = 'button'
		target.setAttribute('data-action', 'something')
		target.addEventListener('click', onClick)
		sinon.spy(store, 'dispatch')

		// Act
		target.dispatchEvent(event)

		// Assert
		expect(store.dispatch).to.have.been.calledOnce
		expect(store.dispatch).to.have.been.calledWith(forwardToNextMonthAction())
	})

	it('should dispatch to switch to a city', () => {
		// Arrange
		const event = new window.Event('click')
		const target = document.createElement('button')
		target.type = 'button'
		target.setAttribute('data-city', 'Munich')
		target.addEventListener('click', onClick)
		sinon.spy(store, 'dispatch')

		// Act
		target.dispatchEvent(event)

		// Assert
		expect(store.dispatch).to.have.been.calledOnce
		expect(store.dispatch).to.have.been.calledWith(switchToCityAction('Munich'))
	})

	it('should dispatch to switch to a scene', () => {
		// Arrange
		const event = new window.Event('click')
		const target = document.createElement('button')
		target.type = 'button'
		target.setAttribute('data-scene', 'Game Over')
		target.addEventListener('click', onClick)
		sinon.spy(store, 'dispatch')

		// Act
		target.dispatchEvent(event)

		// Assert
		expect(store.dispatch).to.have.been.calledOnce
		expect(store.dispatch).to.have.been.calledWith(switchToSceneAction('Game Over'))
	})

	it('should dispatch to switch to a view', () => {
		// Arrange
		const event = new window.Event('click')
		const target = document.createElement('button')
		target.type = 'button'
		target.setAttribute('data-view', 'Docks')
		target.addEventListener('click', onClick)
		sinon.spy(store, 'dispatch')

		// Act
		target.dispatchEvent(event)

		// Assert
		expect(store.dispatch).to.have.been.calledOnce
		expect(store.dispatch).to.have.been.calledWith(switchToViewAction('Docks'))
	})
})
