import { expect } from 'chai'

import { resetAction } from '../../../src/js/state/actions/reset.js'
import store from '../../../src/js/state/store.js'
import { setShipTypeReducer } from '../../../src/js/state/reducers/set-ship-type.js'

describe('setShipTypeReducer', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
  })

  it('should set the chosen ship type', function () {
    // Arrange
    const state = store.getState()
    const payload = { shipType: 'nef' }

    // Act
    const newState = setShipTypeReducer(state, payload)

    // Assert
    expect(newState).not.to.equal(state)
    expect(newState.newShipType).to.equal('nef')
  })
})
