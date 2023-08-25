import chai from 'chai'
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import { applyToDOM } from '../src/js/apply-to-dom.js'

chai.use(sinonChai)
const { expect } = chai

describe('applyToDOM', () => {
	afterEach(() => {
		sinon.restore()
	})

	it('should remove a DOM node if it is not present in the virtual DOM', () => {
		// Arrange
		const parentNode = document.createElement('div')
		const realNode = document.createElement('button')
		const virtualNode = null
		sinon.spy(realNode, 'remove')

		// Act
		applyToDOM(parentNode, realNode, virtualNode)

		// Assert
		expect(realNode.remove).to.have.been.calledOnce
	})

	it('should add a node to the DOM if it is present in the virtual DOM', () => {
		// Arrange
		const parentNode = document.createElement('div')
		const realNode = null
		const virtualNode = document.createElement('button')
		sinon.spy(parentNode, 'appendChild')

		// Act
		applyToDOM(parentNode, realNode, virtualNode)

		// Assert
		expect(parentNode.appendChild).to.have.been.calledOnce
		expect(parentNode.appendChild).to.have.been.calledWith(virtualNode)
	})

	it('should replace a real node if attribute values differ', () => {
		// Arrange
		const parentNode = document.createElement('div')
		const realNode = document.createElement('button')
		realNode.type = 'button'
		const virtualNode = document.createElement('button')
		virtualNode.type = 'submit'
		sinon.spy(realNode, 'replaceWith')

		// Act
		applyToDOM(parentNode, realNode, virtualNode)

		// Assert
		expect(realNode.replaceWith).to.have.been.calledOnce
		expect(realNode.replaceWith).to.have.been.calledWith(virtualNode)
	})

	it('should replace a real node if tag names differ', () => {
		// Arrange
		const parentNode = document.createElement('div')
		const realNode = document.createElement('button')
		const virtualNode = document.createElement('a')
		sinon.spy(realNode, 'replaceWith')

		// Act
		applyToDOM(parentNode, realNode, virtualNode)

		// Assert
		expect(realNode.replaceWith).to.have.been.calledOnce
		expect(realNode.replaceWith).to.have.been.calledWith(virtualNode)
	})

	it('should replace a real node if number of attributes differ', () => {
		// Arrange
		const parentNode = document.createElement('div')
		const realNode = document.createElement('button')
		realNode.type = 'button'
		const virtualNode = document.createElement('button')
		sinon.spy(realNode, 'replaceWith')

		// Act
		applyToDOM(parentNode, realNode, virtualNode)

		// Assert
		expect(realNode.replaceWith).to.have.been.calledOnce
		expect(realNode.replaceWith).to.have.been.calledWith(virtualNode)
	})

	it('should replace a real node if text content differ', () => {
		// Arrange
		const parentNode = document.createElement('div')
		const realNode = document.createElement('button')
		realNode.textContent = 'click me'
		const virtualNode = document.createElement('button')
		sinon.spy(realNode, 'replaceWith')

		// Act
		applyToDOM(parentNode, realNode, virtualNode)

		// Assert
		expect(realNode.replaceWith).to.have.been.calledOnce
		expect(realNode.replaceWith).to.have.been.calledWith(virtualNode)
	})

	it('should not replace identical nodes', () => {
		// Arrange
		const parentNode = document.createElement('div')
		const realNode = document.createElement('button')
		const virtualNode = document.createElement('button')
		sinon.spy(realNode, 'replaceWith')

		// Act
		applyToDOM(parentNode, realNode, virtualNode)

		// Assert
		expect(realNode.replaceWith).not.to.have.been.called
	})

	it('should recurse into children', () => {
		// Arrange
		const parentNode = document.createElement('div')
		const realNode = document.createElement('button')
		const icon = document.createElement('i')
		realNode.appendChild(icon)
		const virtualNode = document.createElement('button')
		sinon.spy(realNode, 'replaceWith')
		sinon.spy(icon, 'remove')

		// Act
		applyToDOM(parentNode, realNode, virtualNode)

		// Assert
		expect(realNode.replaceWith).not.to.have.been.called
		expect(icon.remove).to.have.been.calledOnce
	})
})
