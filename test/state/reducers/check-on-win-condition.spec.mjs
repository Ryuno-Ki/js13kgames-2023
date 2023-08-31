import chai from 'chai'
import chaiDeepEqual from 'chai-better-shallow-deep-equal'

import { resetAction } from '../../../src/js/state/actions/reset.js'
import store from '../../../src/js/state/store.js'
import { checkOnWinConditionReducer } from '../../../src/js/state/reducers/check-on-win-condition.js'

chai.use(chaiDeepEqual)
const { expect } = chai

describe('checkOnWinConditionReducer', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
  })

  describe('when not reached the goal', function () {
    it('should not change the scene', function () {
    // Arrange
      const state = store.getState()
      const payload = {}

      // Act
      const newState = checkOnWinConditionReducer(state, payload)

      // Assert
      expect(newState).not.to.equal(state)
      expect(newState).to.shallowDeepEqual(state)
    })
  })

  describe('when reached the goal', function () {
    it('should transition to win scene', function () {
    // Arrange
      const state = Object.assign({}, store.getState(), { activeScenario: 'tutorial', activeYear: 1251, activeMonth: '2' })
      const payload = {}

      // Act
      const newState = checkOnWinConditionReducer(state, payload)

      // Assert
      expect(newState).not.to.equal(state)
      expect(newState.activeScene).to.equal('win-section')
    })
  })
})
