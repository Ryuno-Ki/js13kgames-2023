import chai from 'chai'
import chaiDeepEqual from 'chai-better-shallow-deep-equal'

import { resetAction } from '../../../src/js/state/actions/reset.js'
import store from '../../../src/js/state/store.js'
import { sendShipReducer } from '../../../src/js/state/reducers/send-ship.js'

chai.use(chaiDeepEqual)
const { expect } = chai

describe('sendShipReducer', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
  })

  describe('if ship was not found', function () {
    it('should not apply any changes', function () {
      // Arrange
      const state = store.getState()
      const payload = { ship: 'Santa Maria' }

      // Act
      const newState = sendShipReducer(state, payload)

      // Assert
      expect(newState).not.to.equal(state)
      expect(newState).to.shallowDeepEqual(state)
    })
  })

  describe('if ship was found', function () {
    it('should remove the position of a ship', function () {
      // Arrange
      const state = store.getState()
      const payload = { from: 'Lübeck', ship: 'Marie', to: 'Wismar' }
      const shipIndex = state.ships.findIndex((s) => s.name === payload.ship)

      // Act
      const newState = sendShipReducer(state, payload)

      // Assert
      expect(newState).not.to.equal(state)
      expect(newState.ships[shipIndex].position).to.be.null
      expect(newState.ships[shipIndex].moored).to.be.false
    })

    it('should track its itinerary', function () {
      // Arrange
      const state = store.getState()
      const payload = { from: 'Lübeck', ship: 'Marie', to: 'Wismar' }
      const shipIndex = state.ships.findIndex((s) => s.name === payload.ship)

      // Act
      const newState = sendShipReducer(state, payload)

      // Assert
      expect(newState).not.to.equal(state)
      expect(newState.ships[shipIndex].itinerary).to.shallowDeepEqual({
        from: 'Lübeck',
        to: 'Wismar',
        month: state.activeMonth
      })
    })
  })
})
