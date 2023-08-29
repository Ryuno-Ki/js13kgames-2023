import { expect } from 'chai'

import store from '../../../src/js/state/store.js'
import { switchToViewReducer } from '../../../src/js/state/reducers/switch-to-view.js'

describe('switchToViewReducer', function () {
  beforeEach(async function () {
    await store.dispatch({ type: 'RESET', payload: {} })
  })

  it('should update the active view', function () {
    // Arrange
    const state = Object.assign({}, store.getState(), { activeCity: 'Lübeck' })
    const payload = { view: 'city' }

    // Act
    const newState = switchToViewReducer(state, payload)

    // Assert
    expect(newState).not.to.equal(state)
    expect(newState.activeView).to.equal('city')
    expect(newState.activeCity).to.equal('Lübeck')
  })

  it('should reset the activeCity on sea view', function () {
    // Arrange
    const state = Object.assign({}, store.getState(), { activeCity: 'Lübeck' })
    const payload = { view: 'sea' }

    // Act
    const newState = switchToViewReducer(state, payload)

    // Assert
    expect(newState).not.to.equal(state)
    expect(newState.activeView).to.equal('sea')
    expect(newState.activeCity).to.be.null
  })
})
