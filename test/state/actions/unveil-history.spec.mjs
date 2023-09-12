import chai from 'chai'
import chaiFlux from 'chai-flux'
import chaiInterface from 'chai-interface'

import { UNVEIL_HISTORY_ACTION } from '../../../src/js/constants.js'
import { unveilHistoryAction } from '../../../src/js/state/actions/unveil-history.js'

chai.use(chaiFlux)
chai.use(chaiInterface)
const { expect } = chai

describe('unveilHistoryAction', function () {
  it(`should create a ${UNVEIL_HISTORY_ACTION}`, function () {
    // Arrange
    // Nothing to prepare

    // Act
    const action = unveilHistoryAction()

    // Assert
    expect(action).to.be.an.FSA
    expect(action).to.have.interface({
      type: String,
      payload: {}
    })
    expect(action.type).to.equal(UNVEIL_HISTORY_ACTION)
  })
})
