import chai from 'chai'
import chaiFlux from 'chai-flux'
import chaiInterface from 'chai-interface'

import { SET_SHIP_TYPE_ACTION } from '../../../src/js/constants.js'
import { setShipTypeAction } from '../../../src/js/state/actions/set-ship-type.js'

chai.use(chaiFlux)
chai.use(chaiInterface)
const { expect } = chai

describe('setShipTypeAction', function () {
  it(`should create a ${SET_SHIP_TYPE_ACTION}`, function () {
    // Arrange
    const shipType = 'cog'

    // Act
    const action = setShipTypeAction(shipType)

    // Assert
    expect(action).to.be.an.FSA
    expect(action).to.have.interface({
      type: String,
      payload: {
        shipType: String
      }
    })
    expect(action.type).to.equal(SET_SHIP_TYPE_ACTION)
    expect(action.payload.shipType).to.equal(shipType)
  })
})
