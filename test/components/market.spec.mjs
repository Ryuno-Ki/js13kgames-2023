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

  it('should render an empty list in case passed data is empty', function () {
    // Arrange
    const targetElement = document.createElement('div')
    targetElement.setAttribute('data-type', 'supply')
    targetElement.setAttribute('data-wares', JSON.stringify([]))
    const state = store.getState()

    // Act
    const marketComponent = market(targetElement, state)

    // Assert
    expect(marketComponent).not.to.equal(targetElement)
    expect(marketComponent).to.contain.text(['supply'])
  })

  it('should render a list item for each ware', function () {
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
    expect(marketComponent).to.contain.text(['supply'])
    expect(marketComponent).to.contain.text(['met'])
    expect(marketComponent).to.contain.text(['42'])
  })
})
