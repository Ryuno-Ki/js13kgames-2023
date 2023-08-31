import { expect } from 'chai'

import { resetAction } from '../../../src/js/state/actions/reset.js'
import store from '../../../src/js/state/store.js'
import { setPlayernameReducer } from '../../../src/js/state/reducers/set-playername.js'

describe('setPlayernameReducer', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
  })

  it('should set a sanitised playername', function () {
    // Arrange
    const state = store.getState()
    const payload = { playername: 'I <script> a \'$H4(k\' into Ur "G&me"' }

    // Act
    const newState = setPlayernameReducer(state, payload)

    // Assert
    expect(newState).not.to.equal(state)
    expect(newState.playername).to.equal('I script a H4k into Ur Gme')
  })
})
