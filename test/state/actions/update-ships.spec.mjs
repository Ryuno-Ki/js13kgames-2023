import chai from 'chai'
import chaiFlux from 'chai-flux'
import chaiInterface from 'chai-interface'

import { UPDATE_SHIPS_ACTION } from '../../../src/js/constants.js'
import { updateShipsAction } from '../../../src/js/state/actions/update-ships.js'

chai.use(chaiFlux)
chai.use(chaiInterface)
const { expect } = chai

describe('updateShipsAction', function () {
  it(`should create a ${UPDATE_SHIPS_ACTION}`, function () {
    // Arrange
    // Nothing to prepare

    // Act
    const action = updateShipsAction()

    // Assert
    expect(action).to.be.an.FSA
    expect(action).to.have.interface({
      type: String,
      payload: {}
    })
    expect(action.type).to.equal(UPDATE_SHIPS_ACTION)
  })
})
