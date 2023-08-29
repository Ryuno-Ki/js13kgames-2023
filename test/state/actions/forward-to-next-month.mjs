import chai from 'chai'
import chaiFlux from 'chai-flux'
import chaiInterface from 'chai-interface'

import { forwardToNextMonthAction } from '../../../src/js/state/actions/forward-to-next-month.js'

chai.use(chaiFlux)
chai.use(chaiInterface)
const { expect } = chai

describe('forwardToNextMonthAction', function () {
  it('should create a FORWARD_TO_NEXT_MONTH_ACTION', function () {
    // Arrange
    // Nothing to prepare

    // Act
    const action = forwardToNextMonthAction()

    // Assert
    expect(action).to.be.an.FSA
    expect(action).to.have.interface({ type: String, payload: Object })
    expect(action.type).to.equal('FORWARD_TO_NEXT_MONTH_ACTION')
  })
})
