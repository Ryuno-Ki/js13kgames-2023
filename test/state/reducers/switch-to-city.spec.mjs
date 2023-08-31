import { expect } from 'chai'

import { resetAction } from '../../../src/js/state/actions/reset.js'
import store from '../../../src/js/state/store.js'
import { switchToCityReducer } from '../../../src/js/state/reducers/switch-to-city.js'

describe('switchToCityReducer', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
  })

  it('should update the active view to "city"', function () {
    // Arrange
    const state = store.getState()
    const payload = { city: 'Wismar' }

    // Act
    const newState = switchToCityReducer(state, payload)

    // Assert
    expect(newState).not.to.equal(state)
    expect(newState.activeView).to.equal('city')
  })

  it('should update the active city', function () {
    // Arrange
    const state = store.getState()
    const payload = { city: 'Wismar' }

    // Act
    const newState = switchToCityReducer(state, payload)

    // Assert
    expect(newState).not.to.equal(state)
    expect(newState.activeCity).to.equal('Wismar')
  })
})
