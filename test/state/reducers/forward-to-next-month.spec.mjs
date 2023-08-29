import chai from 'chai'

import store from '../../../src/js/state/store.js'
import { forwardToNextMonthReducer } from '../../../src/js/state/reducers/forward-to-next-month.js'

const { expect } = chai

describe('forwardToNextMonthReducer', function () {
  beforeEach(async function () {
    await store.dispatch({ type: 'RESET', payload: {} })
  })

  it('should update the activeMonth of the state', function () {
    // Arrange
    const state = store.getState()
    const payload = {}

    // Act
    const newState = forwardToNextMonthReducer(state, payload)

    // Assert
    expect(newState).not.to.equal(state)
    expect(Number(newState.activeMonth)).to.be.above(Number(state.activeMonth))
  })

  it('should advance to the next year past December', function () {
    // Arrange
    const state = Object.assign({}, store.getState(), { activeMonth: '12' })
    const payload = {}

    // Act
    const newState = forwardToNextMonthReducer(state, payload)

    // Assert
    expect(newState).not.to.equal(state)
    expect(newState.activeMonth).to.be.equal('1')
    expect(Number(newState.activeYear)).to.be.above(Number(state.activeYear))
  })
})
