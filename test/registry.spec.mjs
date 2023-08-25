import chai from 'chai'
import chaiDom from 'chai-dom'
import sinon from 'sinon';
import sinonChai from 'sinon-chai'

import { add, render } from '../src/js/registry.js'

chai.use(chaiDom)
chai.use(sinonChai)
const { expect } = chai

describe('add', () => {
	it('should register a component', () => {
		// Arrange
		const component = document.createElement('div')

		// Act
		add('nobody', component)

		// Assert
		// Nothing to assert
	})
})

describe('render', () => {
	it('should render a clone of a component', () => {
		// Arrange
		const root = document.createElement('div')
		const state = {}

		// Act
		const component = render(root, state)

		// Assert
		expect(component).not.to.equal(root)
		expect(component).to.have.tagName('div')
	})

	it('should recurse into known child components', () => {
		// Arrange
		const root = document.createElement('div')
		const child = document.createElement('span')
		child.setAttribute('data-component', child)
		root.appendChild(child)
		const state = {}

		// Act
		const component = render(root, state)

		// Assert
		expect(component).not.to.equal(root)
		expect(component).to.have.tagName('div')
		expect(component.firstChild).not.to.equal(child)
		expect(component.firstChild).to.have.tagName('span')
	})
})


