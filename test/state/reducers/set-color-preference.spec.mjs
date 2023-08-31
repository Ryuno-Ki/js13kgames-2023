import { expect } from 'chai'

import { resetAction } from '../../../src/js/state/actions/reset.js'
import store from '../../../src/js/state/store.js'
import { setColorPreferenceReducer } from '../../../src/js/state/reducers/set-color-preference.js'

describe('setColorPreferenceReducer', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
  })

  it('should set the color preference', function () {
    // Arrange
    const state = store.getState()
    const payload = { color: 'dark' }

    // Act
    const newState = setColorPreferenceReducer(state, payload)

    // Assert
    expect(newState).not.to.equal(state)
    expect(newState.activeColor).to.equal('dark')
  })
})
