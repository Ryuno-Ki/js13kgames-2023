import chai from 'chai'
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import { draw } from '../src/js/draw.js'

chai.use(sinonChai)
const { expect } = chai

describe('draw', () => {
	afterEach(() => {
		sinon.restore()
	})

	it('should bail out if the app cannot be bootstrapped', async () => {
		// Arrange
		sinon.spy(document, 'getElementById')
		sinon.spy(window, 'requestAnimationFrame')
		draw._runOnlyOnce = true

		// Act
		await draw()

		// Assert
		expect(document.getElementById).to.have.been.calledOnce
		expect(window.requestAnimationFrame).not.to.have.been.called
	})

	it('should render the game', async () => {
		// Arrange
		const restore = document.body.innerHTML
		document.body.innerHTML = '<main id="app"></main>'
		sinon.spy(document, 'getElementById')
		sinon.spy(window, 'requestAnimationFrame')
		draw._runOnlyOnce = true

		// Act
		await draw()

		// Assert
		expect(document.getElementById).to.have.been.calledOnce
		expect(window.requestAnimationFrame).to.have.been.calledOnce
		document.body.innerHTML = restore
	})
})
