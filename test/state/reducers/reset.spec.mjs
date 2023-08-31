import chai from 'chai'
import chaiDeepEqual from 'chai-better-shallow-deep-equal'

import store from '../../../src/js/state/store.js'
import { resetReducer } from '../../../src/js/state/reducers/reset.js'

chai.use(chaiDeepEqual)
const { expect } = chai

describe('resetReducer', function () {
  beforeEach(async function () {
    await store.dispatch({ type: 'RESET', payload: {} })
  })

  it('should reset the state to initial', function () {
    // Arrange
    const state = store.getState()
    const payload = {}

    // Act
    const newState = resetReducer(state, payload)

    // Assert
    expect(newState).not.to.equal(state)
    expect(newState).to.shallowDeepEqual(state)
  })
})
