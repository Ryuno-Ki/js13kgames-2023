import chai from 'chai'
import chaiFlux from 'chai-flux'
import chaiInterface from 'chai-interface'

import { checkOnWinConditionAction } from '../../../src/js/state/actions/check-on-win-condition.js'

chai.use(chaiFlux)
chai.use(chaiInterface)
const { expect } = chai

describe('checkOnWinConditionAction', function () {
  it('should create a CHECK_ON_WIN_CONDITION_ACTION', function () {
    // Arrange
    // Nothing to prepare

    // Act
    const action = checkOnWinConditionAction()

    // Assert
    expect(action).to.be.an.FSA
    expect(action).to.have.interface({
      type: String,
      payload: {}
    })
    expect(action.type).to.equal('CHECK_ON_WIN_CONDITION_ACTION')
  })
})
