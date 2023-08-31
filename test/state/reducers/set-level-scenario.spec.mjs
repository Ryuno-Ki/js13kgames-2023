import { expect } from 'chai'

import { resetAction } from '../../../src/js/state/actions/reset.js'
import store from '../../../src/js/state/store.js'
import { setLevelScenarioReducer } from '../../../src/js/state/reducers/set-level-scenario.js'

describe('setLevelScenarioReducer', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
  })

  it('should set the chosen level scenario', function () {
    // Arrange
    const state = store.getState()
    const payload = { scenario: 'free-play' }

    // Act
    const newState = setLevelScenarioReducer(state, payload)

    // Assert
    expect(newState).not.to.equal(state)
    expect(newState.activeScenario).to.equal('free-play')
  })
})
