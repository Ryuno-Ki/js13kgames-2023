import chai from 'chai'
import chaiDeepEqual from 'chai-better-shallow-deep-equal'

import { resetAction } from '../../../src/js/state/actions/reset.js'
import store from '../../../src/js/state/store.js'
import { sellReducer } from '../../../src/js/state/reducers/sell.js'

chai.use(chaiDeepEqual)
const { expect } = chai

describe('sellReducer', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
  })

  it("should add to the player's money", function () {
    // Arrange
    const activeCity = 'Lübeck'
    const playermoney = 100
    const wares = {
      grok: 1
    }
    const cities = [{
      name: 'Lübeck',
      supply: [{
        ware: 'grok',
        quantity: 100
      }],
      demand: [{
        ware: 'grok',
        quantity: 50
      }],
      warehouse: {
        stock: [{
          ware: 'grok',
          quantity: 42
        }]
      }
    }]
    const state = Object.assign({}, store.getState(), { activeCity, cities, playermoney, wares })
    const payload = { city: 'Lübeck', ware: 'grok', quantity: 42 }
    const cityIndex = state.cities.findIndex((c) => c.name === payload.city)

    // Act
    const newState = sellReducer(state, payload)

    // Assert
    expect(newState).not.to.equal(state)
    expect(newState.cities[cityIndex].warehouse.stock).to.shallowDeepEqual([])
    expect(newState.playermoney).to.be.above(state.playermoney)
  })

  describe('if ware was not sold before', function () {
    it('should add it as a new supply', function () {
      // Arrange
      const playermoney = 100
      const wares = {
        grok: 1
      }
      const cities = [{
        name: 'Lübeck',
        supply: [],
        demand: [{
          ware: 'grok',
          quantity: 50
        }],
        warehouse: {
          stock: [{
            ware: 'grok',
            quantity: 42
          }]
        }
      }]
      const state = Object.assign({}, store.getState(), { activeCity: 'Lübeck', cities, playermoney, wares })
      const payload = { city: 'Lübeck', ware: 'grok', quantity: 42 }
      const cityIndex = state.cities.findIndex((c) => c.name === payload.city)

      // Act
      const newState = sellReducer(state, payload)

      // Assert
      expect(newState).not.to.equal(state)
      expect(newState.cities[cityIndex].supply).to.shallowDeepEqual([{ ware: 'grok', quantity: 42 }])
    })
  })

  describe('if ware was sold before', function () {
    it('should update its quantity', function () {
      // Arrange
      const state = Object.assign(
        {},
        store.getState(),
        {
          activeCity: 'Lübeck',
          cities: [{
            name: 'Lübeck',
            demand: [{ ware: 'grok', quantity: 50 }],
            supply: [{ ware: 'grok', quantity: 2 }],
            warehouse: {
              stock: [{ ware: 'grok', quantity: 42 }]
            }
          }]
        }
      )
      const payload = { city: 'Lübeck', ware: 'grok', quantity: 2 }
      const cityIndex = state.cities.findIndex((c) => c.name === payload.city)

      // Act
      const newState = sellReducer(state, payload)

      // Assert
      expect(newState).not.to.equal(state)
      expect(newState.cities[cityIndex].warehouse.stock).to.shallowDeepEqual([{ ware: 'grok', quantity: 40 }])
    })
  })

  it('should update the market of that city', function () {
    // Arrange
    const state = Object.assign({}, store.getState(), { activeCity: 'Lübeck' })
    const payload = { city: 'Lübeck', ware: 'wool', quantity: 2 }
    const cityIndex = state.cities.findIndex((c) => c.name === payload.city)

    // Act
    const newState = sellReducer(state, payload)

    // Assert
    expect(newState).not.to.equal(state)
    expect(newState.cities[cityIndex].supply).to.shallowDeepEqual([
      { ware: 'honey', quantity: 5 },
      { ware: 'salt', quantity: 2 },
      { ware: 'wool', quantity: 12 }
    ])
  })
})
