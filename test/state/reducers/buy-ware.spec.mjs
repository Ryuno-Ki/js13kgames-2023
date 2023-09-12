import chai from 'chai'
import chaiDeepEqual from 'chai-better-shallow-deep-equal'

import { resetAction } from '../../../src/js/state/actions/reset.js'
import store from '../../../src/js/state/store.js'
import { buyWareReducer } from '../../../src/js/state/reducers/buy-ware.js'

chai.use(chaiDeepEqual)
const { expect } = chai

describe('buyWareReducer', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
  })

  describe('when there is enough money', function () {
    it("should deduct it from the player's money", function () {
      // Arrange
      const activeCity = 'Lübeck'
      const playermoney = 100
      const wares = {
        grok: 1
      }
      const cities = [{
        name: 'Lübeck',
        supply: { grok: 100 },
        demand: { grok: 50 },
        warehouse: {
          stock: { grok: 0 }
        }
      }]
      const state = Object.assign({}, store.getState(), { activeCity, cities, playermoney, wares })
      const payload = { city: 'Lübeck', ware: 'grok', quantity: 42 }
      const cityIndex = state.cities.findIndex((c) => c.name === payload.city)

      // Act
      const newState = buyWareReducer(state, payload)

      // Assert
      expect(newState).not.to.equal(state)
      expect(newState.cities[cityIndex].warehouse.stock).to.shallowDeepEqual({ grok: 42 })
      expect(newState.playermoney).to.be.below(state.playermoney)
    })
  })

  describe('when there is not enough money', function () {
    it('should negate the order', function () {
      // Arrange
      const state = Object.assign({}, store.getState(), { activeCity: 'Lübeck' })
      const payload = { city: 'Lübeck', ware: 'grok', quantity: 42 }
      const cityIndex = state.cities.findIndex((c) => c.name === payload.city)

      // Act
      const newState = buyWareReducer(state, payload)

      // Assert
      expect(newState).not.to.equal(state)
      expect(newState.cities[cityIndex].warehouse.stock).to.shallowDeepEqual({
        beer: 0,
        crop: 0,
        salt: 0,
        sprats: 0,
        wax: 0,
        wood: 0
      }
      )
      expect(newState.playermoney).to.equal(state.playermoney)
    })
  })

  describe('if ware was not bought before', function () {
    it('should add it as a new warehouse stock', function () {
      // Arrange
      const activeCity = 'Lübeck'
      const playermoney = 100
      const wares = {
        grok: 1
      }
      const cities = [{
        name: 'Lübeck',
        supply: { grok: 100 },
        demand: { grok: 50 },
        warehouse: {
          stock: { grok: 0 }
        }
      }]
      const state = Object.assign({}, store.getState(), { activeCity, cities, playermoney, wares })
      const payload = { city: 'Lübeck', ware: 'grok', quantity: 42 }
      const cityIndex = state.cities.findIndex((c) => c.name === payload.city)

      // Act
      const newState = buyWareReducer(state, payload)

      // Assert
      expect(newState).not.to.equal(state)
      expect(newState.cities[cityIndex].warehouse.stock).to.shallowDeepEqual({ grok: 42 })
    })
  })

  describe('if ware was bought before', function () {
    it('should update its quantity', function () {
      // Arrange
      const state = Object.assign(
        {},
        store.getState(),
        {
          activeCity: 'Lübeck',
          cities: [{
            name: 'Lübeck',
            supply: { grok: 42 },
            demand: { grok: 50 },
            warehouse: {
              stock: { grok: 2 }
            }
          }],
          wares: {
            grok: 1
          },
          playermoney: 100
        }
      )
      const payload = { city: 'Lübeck', ware: 'grok', quantity: 42 }
      const cityIndex = state.cities.findIndex((c) => c.name === payload.city)

      // Act
      const newState = buyWareReducer(state, payload)

      // Assert
      expect(newState).not.to.equal(state)
      expect(newState.cities[cityIndex].warehouse.stock).to.shallowDeepEqual({ grok: 44 })
    })
  })

  it('should update the market of that city', function () {
    // Arrange
    const cities = [{
      name: 'Lübeck',
      demand: { wax: 100 },
      supply: { salt: 2, wax: 10 },
      warehouse: { stock: {} }
    }]
    const state = Object.assign({}, store.getState(), { activeCity: 'Lübeck', cities, playermoney: 1000000 })
    const payload = { city: 'Lübeck', ware: 'wax', quantity: 2 }
    const cityIndex = state.cities.findIndex((c) => c.name === payload.city)

    // Act
    const newState = buyWareReducer(state, payload)

    // Assert
    expect(newState).not.to.equal(state)
    expect(newState.cities[cityIndex].supply).to.shallowDeepEqual(
      { salt: 2, wax: 8 }
    )
  })
})
