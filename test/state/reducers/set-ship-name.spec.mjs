import { expect } from 'chai'

import { resetAction } from '../../../src/js/state/actions/reset.js'
import store from '../../../src/js/state/store.js'
import { setShipNameReducer } from '../../../src/js/state/reducers/set-ship-name.js'

describe('setShipNameReducer', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
  })

  it('should set a sanitised ship name', function () {
    // Arrange
    const state = store.getState()
    const payload = { shipName: 'I <script> a \'$H4(k\' into Ur "G&me"' }

    // Act
    const newState = setShipNameReducer(state, payload)

    // Assert
    expect(newState).not.to.equal(state)
    expect(newState.newShipName).to.equal('I script a H4k into Ur Gme')
  })
})
