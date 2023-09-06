import chai from 'chai'
import chaiDom from 'chai-dom'

import { market } from '../../src/js/components/market.js'
import { resetAction } from '../../src/js/state/actions/reset.js'
import store from '../../src/js/state/store.js'

chai.use(chaiDom)
const { expect } = chai

describe('market', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
  })

  it('should contain a tutorial component', function () {
    // Arrange
    const targetElement = document.createElement('div')
    const state = store.getState()

    // Act
    const marketComponent = market(targetElement, state)

    // Assert
    expect(marketComponent).not.to.equal(targetElement)
    expect(marketComponent).to.have.descendant('[data-component="tutorial"]')
  })

  it('should render an empty list in case passed data is empty', function () {
    // Arrange
    const targetElement = document.createElement('div')
    targetElement.setAttribute('data-type', 'supply')
    const state = store.getState()

    // Act
    const marketComponent = market(targetElement, state)

    // Assert
    expect(marketComponent).not.to.equal(targetElement)
    expect(marketComponent).to.contain.text(['supply'])
  })

  it('should render a list item for each ware', function () {
    // Arrange
    const activeCity = 'Lübeck'
    const cities = [{
      name: 'Lübeck',
      supply: [{
        ware: 'met',
        quantity: 42
      }]
    }]
    const targetElement = document.createElement('div')
    targetElement.setAttribute('data-type', 'supply')
    const state = Object.assign({}, store.getState(), { activeCity, cities })

    // Act
    const marketComponent = market(targetElement, state)

    // Assert
    expect(marketComponent).not.to.equal(targetElement)
    expect(marketComponent).to.contain.text(['supply'])
    expect(marketComponent).to.contain.text(['met'])
    expect(marketComponent).to.contain.text(['42'])
  })
})
