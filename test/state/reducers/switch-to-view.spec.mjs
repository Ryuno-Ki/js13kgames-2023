import { expect } from 'chai'

import { resetAction } from '../../../src/js/state/actions/reset.js'
import store from '../../../src/js/state/store.js'
import { switchToViewReducer } from '../../../src/js/state/reducers/switch-to-view.js'

describe('switchToViewReducer', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
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
})
