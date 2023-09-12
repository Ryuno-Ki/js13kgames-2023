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

  describe('when the player has no money', function () {
    it('should render an information that nothing can be bought for free', function () {
    // Arrange
      const targetElement = document.createElement('div')
      const state = Object.assign({}, store.getState(), { playermoney: 0 })

      // Act
      const marketComponent = market(targetElement, state)

      // Assert
      expect(marketComponent).not.to.equal(targetElement)
      expect(marketComponent).to.contain.text(['You cannot buy without 💰'])
    })
  })

  describe("when the city's supply ran out", function () {
    it('should render an information that there is nothing to buy', function () {
    // Arrange
      const cities = [{
        name: 'Lübeck',
        supply: [],
        demand: [],
        warehouse: {
          stock: []
        }
      }]
      const targetElement = document.createElement('div')
      const state = Object.assign({}, store.getState(), { activeCity: 'Lübeck', cities })

      // Act
      const marketComponent = market(targetElement, state)

      // Assert
      expect(marketComponent).not.to.equal(targetElement)
      expect(marketComponent).to.contain.text(["I'm afraid there is nothing to buy right now."])
    })
  })

  describe('when the city has supply', function () {
    it('should render a list item for each ware', function () {
    // Arrange
      const activeCity = 'Lübeck'
      const cities = [{
        name: 'Lübeck',
        demand: {},
        supply: { wool: 42 },
        warehouse: {
          stock: {}
        }
      }]
      const targetElement = document.createElement('div')
      const state = Object.assign({}, store.getState(), { activeCity, cities })

      // Act
      const marketComponent = market(targetElement, state)

      // Assert
      expect(marketComponent).not.to.equal(targetElement)
      expect(marketComponent).to.contain.text(['Buy'])
      expect(marketComponent).to.contain.text(['wool'])
      expect(marketComponent).to.contain.text(['42'])
    })
  })
})
