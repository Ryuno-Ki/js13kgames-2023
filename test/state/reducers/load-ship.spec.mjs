import chai from 'chai'
import chaiDeepEqual from 'chai-better-shallow-deep-equal'

import { resetAction } from '../../../src/js/state/actions/reset.js'
import store from '../../../src/js/state/store.js'
import { loadShipReducer } from '../../../src/js/state/reducers/load-ship.js'

chai.use(chaiDeepEqual)
const { expect } = chai

describe('loadShipReducer', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
  })

  describe('if ship was not found', function () {
    it('should not apply any changes', function () {
      // Arrange
      const state = store.getState()
      const payload = { ship: 'Santa Maria' }

      // Act
      const newState = loadShipReducer(state, payload)

      // Assert
      expect(newState).not.to.equal(state)
      expect(newState).to.shallowDeepEqual(state)
    })
  })

  describe('if ship was found', function () {
    describe('if cargo was not loaded unto the ship before', function () {
      it('should add it as a new cargo', function () {
        // Arrange
        const state = Object.assign({}, store.getState(), { activeCity: 'Lübeck' })
        const payload = { ship: 'Marie', ware: 'wax', quantity: 42 }
        const shipIndex = state.ships.findIndex((s) => s.name === payload.ship)

        // Act
        const newState = loadShipReducer(state, payload)

        // Assert
        expect(newState).not.to.equal(state)
        expect(newState.ships[shipIndex].cargo).to.shallowDeepEqual({
          beer: 0,
          crop: 0,
          salt: 0,
          sprats: 0,
          wax: 42,
          wood: 0
        })
      })
    })

    describe('if cargo was loaded unto the ship before', function () {
      it('should update its quantity', function () {
        // Arrange
        const state = Object.assign(
          {},
          store.getState(),
          {
            activeCity: 'Lübeck',
            ships: [{
              name: 'Marie',
              moored: true,
              position: 'Lübeck',
              cargo: { grok: 2 }
            }]
          }
        )
        const payload = { ship: 'Marie', ware: 'grok', quantity: 42 }
        const shipIndex = state.ships.findIndex((s) => s.name === payload.ship)

        // Act
        const newState = loadShipReducer(state, payload)

        // Assert
        expect(newState).not.to.equal(state)
        expect(newState.ships[shipIndex].cargo).to.shallowDeepEqual({ grok: 44 })
      })
    })

    it('should update the warehouse of that city', function () {
      // Arrange
      const cities = [{ name: 'Lübeck', warehouse: { wool: 10 } }]
      const state = Object.assign({}, store.getState(), { activeCity: 'Lübeck', cities })
      const payload = { city: 'Lübeck', ship: 'Marie', ware: 'wool', quantity: 2 }
      const cityIndex = state.cities.findIndex((c) => c.name === payload.city)

      // Act
      const newState = loadShipReducer(state, payload)

      // Assert
      expect(newState).not.to.equal(state)
      expect(newState.cities[cityIndex].warehouse).to.shallowDeepEqual({ wool: 8 })
    })
  })
})
