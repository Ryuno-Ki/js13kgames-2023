import chai from 'chai'
import chaiFlux from 'chai-flux'
import chaiInterface from 'chai-interface'

import { RESET_ACTION } from '../../../src/js/constants.js'
import { resetAction } from '../../../src/js/state/actions/reset.js'

chai.use(chaiFlux)
chai.use(chaiInterface)
const { expect } = chai

describe('resetAction', function () {
  it(`should create a ${RESET_ACTION}`, function () {
    // Arrange
    // Nothing to prepare

    // Act
    const action = resetAction()

    // Assert
    expect(action).to.be.an.FSA
    expect(action).to.have.interface({
      type: String,
      payload: {}
    })
    expect(action.type).to.equal(RESET_ACTION)
  })
})
