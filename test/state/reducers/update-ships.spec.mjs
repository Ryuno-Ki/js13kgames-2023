import chai from 'chai'
import chaiDeepEqual from 'chai-better-shallow-deep-equal'

import store from '../../../src/js/state/store.js'
import { updateShipsReducer } from '../../../src/js/state/reducers/update-ships.js'

chai.use(chaiDeepEqual)
const { expect } = chai

describe('updateShipsReducer', function () {
  beforeEach(async function () {
    await store.dispatch({ type: 'RESET', payload: {} })
  })

  describe('if ship is moored', function () {
    it('should not apply any changes', function () {
      // Arrange
      const state = store.getState()
      const payload = {}

      // Act
      const newState = updateShipsReducer(state, payload)

      // Assert
      expect(newState).not.to.equal(state)
      expect(newState).to.shallowDeepEqual(state)
    })
  })

  describe('if ship is sailing', function () {
    it('should handle itineraries across year boundaries', function () {
      // Arrange
      const activeMonth = '1'
      const activeYear = 1251
      const ships = [{
        name: 'Marie',
        type: 'cog',
        position: null,
        moored: false,
        itinerary: {
          from: 'Lübeck',
          to: 'Wismar',
          month: '12',
          year: 1250
        },
        costs: 5,
        cargo: [],
        maxFreightWeight: 10
      }]
      const state = Object.assign({}, store.getState(), { activeMonth, activeYear, ships })

      const payload = {}

      // Act
      const newState = updateShipsReducer(state, payload)

      // Assert
      expect(newState).not.to.equal(state)
      expect(newState).to.shallowDeepEqual(state)
    })

    describe('when it did not arrive yet', function () {
      it('should not apply any changes', function () {
        // Arrange
        const activeMonth = '2'
        const ships = [{
          name: 'Marie',
          type: 'cog',
          position: null,
          moored: false,
          itinerary: {
            from: 'Lübeck',
            to: 'Wismar',
            month: '1',
            year: 1250
          },
          costs: 5,
          cargo: [],
          maxFreightWeight: 10
        }]
        const state = Object.assign({}, store.getState(), { activeMonth, ships })
        const payload = {}

        // Act
        const newState = updateShipsReducer(state, payload)

        // Assert
        expect(newState).not.to.equal(state)
        expect(newState.ships).to.shallowDeepEqual(ships)
      })
    })

    describe('when it arrived', function () {
      it('should update its status', function () {
      // Arrange
        const activeMonth = '3'
        const ships = [{
          name: 'Marie',
          type: 'cog',
          position: null,
          moored: false,
          itinerary: {
            from: 'Lübeck',
            to: 'Wismar',
            month: '1',
            year: 1250
          },
          costs: 5,
          cargo: [],
          maxFreightWeight: 10
        }]
        const state = Object.assign({}, store.getState(), { activeMonth, ships })
        const payload = {}

        // Act
        const newState = updateShipsReducer(state, payload)

        // Assert
        expect(newState).not.to.equal(state)
        expect(newState.ships).to.shallowDeepEqual([{
          name: 'Marie',
          type: 'cog',
          position: 'Wismar',
          moored: true,
          itinerary: null,
          costs: 5,
          cargo: [],
          maxFreightWeight: 10
        }])
      })
    })
  })
})
