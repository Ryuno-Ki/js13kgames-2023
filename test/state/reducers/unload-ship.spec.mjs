import chai from 'chai'
import chaiDeepEqual from 'chai-better-shallow-deep-equal'

import { resetAction } from '../../../src/js/state/actions/reset.js'
import store from '../../../src/js/state/store.js'
import { unloadShipReducer } from '../../../src/js/state/reducers/unload-ship.js'

chai.use(chaiDeepEqual)
const { expect } = chai

describe('unloadShipReducer', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
  })

  describe('if ship was not found', function () {
    it('should not apply any changes', function () {
      // Arrange
      const state = store.getState()
      const payload = { ship: 'Santa Maria' }

      // Act
      const newState = unloadShipReducer(state, payload)

      // Assert
      expect(newState).not.to.equal(state)
      expect(newState).to.shallowDeepEqual(state)
    })
  })

  describe('if ship was found', function () {
    describe('if cargo was not loaded unto the ship before', function () {
      it('should not remove it', function () {
        // Arrange
        const state = Object.assign({}, store.getState(), { activeCity: 'Lübeck' })
        const payload = { ship: 'Marie', ware: 'grok', quantity: 42 }
        const shipIndex = state.ships.findIndex((s) => s.name === payload.ship)

        // Act
        const newState = unloadShipReducer(state, payload)

        // Assert
        expect(newState).not.to.equal(state)
        expect(newState.ships[shipIndex].cargo).to.shallowDeepEqual([])
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
              cargo: [{ ware: 'grok', quantity: 42 }, { ware: 'wool', quantity: 2 }]
            }]
          }
        )
        const payload = { ship: 'Marie', ware: 'grok', quantity: 2 }
        const shipIndex = state.ships.findIndex((s) => s.name === payload.ship)

        // Act
        const newState = unloadShipReducer(state, payload)

        // Assert
        expect(newState).not.to.equal(state)
        expect(newState.ships[shipIndex].cargo).to.shallowDeepEqual([
          { ware: 'grok', quantity: 40 },
          { ware: 'wool', quantity: 2 }
        ])
      })
    })

    it('should update the warehouse of that city', function () {
      // Arrange
      const cities = [{ name: 'Lübeck', warehouse: { stock: [{ ware: 'wool', quantity: 10 }] } }]
      const state = Object.assign({}, store.getState(), { activeCity: 'Lübeck', cities })
      const payload = { city: 'Lübeck', ship: 'Marie', ware: 'wool', quantity: 2 }
      const cityIndex = state.cities.findIndex((c) => c.name === payload.city)

      // Act
      const newState = unloadShipReducer(state, payload)

      // Assert
      expect(newState).not.to.equal(state)
      expect(newState.cities[cityIndex].warehouse.stock).to.shallowDeepEqual([
        { ware: 'wool', quantity: 12 }
      ])
    })
  })
})
