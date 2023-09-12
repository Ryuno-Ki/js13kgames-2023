import chai from 'chai'
import chaiFlux from 'chai-flux'
import chaiInterface from 'chai-interface'

import { CHECK_ON_GAMEOVER_CONDITION_ACTION } from '../../../src/js/constants.js'
import { checkOnGameoverConditionAction } from '../../../src/js/state/actions/check-on-gameover-condition.js'

chai.use(chaiFlux)
chai.use(chaiInterface)
const { expect } = chai

describe('checkOnGameoverConditionAction', function () {
  it(`should create a ${CHECK_ON_GAMEOVER_CONDITION_ACTION}`, function () {
    // Arrange
    // Nothing to prepare

    // Act
    const action = checkOnGameoverConditionAction()

    // Assert
    expect(action).to.be.an.FSA
    expect(action).to.have.interface({
      type: String,
      payload: {}
    })
    expect(action.type).to.equal(CHECK_ON_GAMEOVER_CONDITION_ACTION)
  })
})
