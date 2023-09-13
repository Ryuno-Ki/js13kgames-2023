import chai from 'chai'
import chaiFlux from 'chai-flux'
import chaiInterface from 'chai-interface'

import { RESTOCK_ACTION } from '../../../src/js/constants.js'
import { restockAction } from '../../../src/js/state/actions/restock.js'

chai.use(chaiFlux)
chai.use(chaiInterface)
const { expect } = chai

describe('restockAction', function () {
  it(`should create a ${RESTOCK_ACTION}`, function () {
    // Arrange
    // Nothing to prepare

    // Act
    const action = restockAction()

    // Assert
    expect(action).to.be.an.FSA
    expect(action).to.have.interface({
      type: String,
      payload: {}
    })
    expect(action.type).to.equal(RESTOCK_ACTION)
  })
})
