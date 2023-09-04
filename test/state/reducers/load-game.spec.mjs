import chai from 'chai'
import chaiDeepEqual from 'chai-better-shallow-deep-equal'

import { resetAction } from '../../../src/js/state/actions/reset.js'
import store from '../../../src/js/state/store.js'
import { loadGameReducer } from '../../../src/js/state/reducers/load-game.js'

chai.use(chaiDeepEqual)
const { expect } = chai

describe('loadGameReducer', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
  })

  it('should replace most of the current state', function () {
    // Arrange
    const state = Object.assign({}, store.getState(), { activeColor: 'dark', playername: 'Kolumbus', volume: 1 })
    const payload = {
      state: Object.assign({}, store.getState(), { activeCity: 'Lübeck' })
    }

    // Act
    const newState = loadGameReducer(state, payload)

    // Assert
    expect(newState).not.to.equal(state)
    expect(newState).to.shallowDeepEqual(
      Object.assign(
        {},
        newState,
        { activeCity: 'Lübeck', activeColor: 'dark', playername: 'Kolumbus', volume: 1 }
      ))
  })
})
