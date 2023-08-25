import chai from 'chai'
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import { init } from '../src/js/init.js'

chai.use(sinonChai)
const { expect } = chai

describe('init', () => {
	afterEach(() => {
		sinon.restore()
	})

	it('should initialise the game', () => {
		// Arrange
		sinon.spy(window, 'requestAnimationFrame')

		// Act
		init()

		// Assert
		expect(window.requestAnimationFrame).to.have.been.calledOnce
	})
})
	
