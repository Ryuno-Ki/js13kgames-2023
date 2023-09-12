import chai from 'chai'
import chaiFlux from 'chai-flux'
import chaiInterface from 'chai-interface'

import { SET_SHIP_NAME_ACTION } from '../../../src/js/constants.js'
import { setShipNameAction } from '../../../src/js/state/actions/set-ship-name.js'

chai.use(chaiFlux)
chai.use(chaiInterface)
const { expect } = chai

describe('setShipNameAction', function () {
  it(`should create a ${SET_SHIP_NAME_ACTION}`, function () {
    // Arrange
    const shipName = 'Christoph'

    // Act
    const action = setShipNameAction(shipName)

    // Assert
    expect(action).to.be.an.FSA
    expect(action).to.have.interface({
      type: String,
      payload: {
        shipName: String
      }
    })
    expect(action.type).to.equal(SET_SHIP_NAME_ACTION)
    expect(action.payload.shipName).to.equal(shipName)
  })
})
