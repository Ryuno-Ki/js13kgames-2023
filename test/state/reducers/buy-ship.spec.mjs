import chai from 'chai'
import chaiDeepEqual from 'chai-better-shallow-deep-equal'

import { resetAction } from '../../../src/js/state/actions/reset.js'
import store from '../../../src/js/state/store.js'
import { buyShipReducer } from '../../../src/js/state/reducers/buy-ship.js'

chai.use(chaiDeepEqual)
const { expect } = chai

describe('buyShipReducer', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
  })

  it('should reset the inputs', function () {
    // Arrange
    const activeCity = 'Lübeck'
    const playermoney = 1000000
    const shipName = 'Santa Maria'
    const shipType = 'cog'
    const ships = []
    const state = Object.assign(
      {},
      store.getState(),
      { activeCity, newShipName: shipName, newShipType: shipType, playermoney, ships }
    )
    const payload = { city: 'Lübeck', shipName, shipType }

    // Act
    const newState = buyShipReducer(state, payload)

    // Assert
    expect(newState).not.to.equal(state)
    expect(newState.newShipName).to.equal('')
    expect(newState.newShipType).to.be.null
  })

  describe('when there is enough money', function () {
    it("should deduct it from the player's money", function () {
      // Arrange
      const activeCity = 'Lübeck'
      const playermoney = 1000000
      const ships = []
      const state = Object.assign({}, store.getState(), { activeCity, playermoney, ships })
      const payload = { city: 'Lübeck', shipName: 'Santa Maria', shipType: 'nef' }

      // Act
      const newState = buyShipReducer(state, payload)

      // Assert
      expect(newState).not.to.equal(state)
      expect(newState.ships).to.shallowDeepEqual([{
        name: payload.shipName,
        type: payload.shipType,
        position: payload.city,
        moored: true,
        itinerary: null,
        cargo: []
      }])
      expect(newState.playermoney).to.be.below(state.playermoney)
    })
  })

  describe('when not in the same city', function () {
    it('should negate the order', function () {
      // Arrange
      const activeCity = 'Kiel'
      const playermoney = 100
      const ships = []
      const state = Object.assign({}, store.getState(), { activeCity, playermoney, ships })
      const payload = { city: 'Lübeck', shipName: 'Santa Maria', shipType: 'nef' }

      // Act
      const newState = buyShipReducer(state, payload)

      // Assert
      expect(newState).not.to.equal(state)
      expect(newState.ships).to.shallowDeepEqual([])
      expect(newState.playermoney).to.equal(state.playermoney)
    })
  })

  describe('when there is a ship of that name', function () {
    it('should negate the order', function () {
      // Arrange
      const activeCity = 'Lübeck'
      const playermoney = 1000000
      const ships = [{
        name: 'Santa Maria',
        type: 'nef',
        position: 'Lübeck',
        moored: true,
        itinerary: null,
        cargo: []
      }]
      const state = Object.assign({}, store.getState(), { activeCity, playermoney, ships })
      const payload = { city: 'Lübeck', shipName: 'Santa Maria', shipType: 'nef' }

      // Act
      const newState = buyShipReducer(state, payload)

      // Assert
      expect(newState).not.to.equal(state)
      expect(newState.ships).to.shallowDeepEqual(ships)
      expect(newState.playermoney).to.equal(state.playermoney)
    })
  })

  describe('when there is not enough money', function () {
    it('should negate the order', function () {
      // Arrange
      const activeCity = 'Lübeck'
      const playermoney = 100
      const ships = []
      const state = Object.assign({}, store.getState(), { activeCity, playermoney, ships })
      const payload = { city: 'Lübeck', shipName: 'Santa Maria', shipType: 'nef' }

      // Act
      const newState = buyShipReducer(state, payload)

      // Assert
      expect(newState).not.to.equal(state)
      expect(newState.ships).to.shallowDeepEqual([])
      expect(newState.playermoney).to.equal(state.playermoney)
    })
  })
})
