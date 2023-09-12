import chai from 'chai'
import chaiDeepEqual from 'chai-better-shallow-deep-equal'

import { resetAction } from '../../../src/js/state/actions/reset.js'
import store from '../../../src/js/state/store.js'
import { buyWarehouseLevelReducer } from '../../../src/js/state/reducers/buy-warehouse-level.js'

chai.use(chaiDeepEqual)
const { expect } = chai

describe('buyWarehouseLevelReducer', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
  })

  describe('when there is enough money', function () {
    it("should deduct it from the player's money", function () {
      // Arrange
      const activeCity = 'Lübeck'
      const playermoney = 1000000
      const state = Object.assign({}, store.getState(), { activeCity, playermoney })
      const payload = { city: 'Lübeck' }
      const cityIndex = state.cities.findIndex((c) => c.name === payload.city)

      // Act
      const newState = buyWarehouseLevelReducer(state, payload)

      // Assert
      expect(newState).not.to.equal(state)
      expect(newState.playermoney).to.be.below(state.playermoney)
      expect(newState.cities[cityIndex].warehouse.level).to.equal('2')
    })
  })

  describe('when not in the same city', function () {
    it('should negate the order', function () {
      // Arrange
      const activeCity = 'Kiel'
      const playermoney = 1000000
      const state = Object.assign({}, store.getState(), { activeCity, playermoney })
      const payload = { city: 'Lübeck' }
      const cityIndex = state.cities.findIndex((c) => c.name === payload.city)

      // Act
      const newState = buyWarehouseLevelReducer(state, payload)

      // Assert
      expect(newState).not.to.equal(state)
      expect(newState.playermoney).to.equal(state.playermoney)
      expect(newState.cities[cityIndex].warehouse.level).to.equal('1')
    })
  })

  describe('when there is not enough money', function () {
    it('should negate the order', function () {
      // Arrange
      const activeCity = 'Lübeck'
      const playermoney = 100
      const state = Object.assign({}, store.getState(), { activeCity, playermoney })
      const payload = { city: 'Lübeck' }
      const cityIndex = state.cities.findIndex((c) => c.name === payload.city)

      // Act
      const newState = buyWarehouseLevelReducer(state, payload)

      // Assert
      expect(newState).not.to.equal(state)
      expect(newState.playermoney).to.equal(state.playermoney)
      expect(newState.cities[cityIndex].warehouse.level).to.equal('1')
    })
  })
})
