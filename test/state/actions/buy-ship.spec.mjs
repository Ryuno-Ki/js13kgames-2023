import chai from 'chai'
import chaiFlux from 'chai-flux'
import chaiInterface from 'chai-interface'

import { BUY_SHIP_ACTION } from '../../../src/js/constants.js'
import { buyShipAction } from '../../../src/js/state/actions/buy-ship.js'

chai.use(chaiFlux)
chai.use(chaiInterface)
const { expect } = chai

describe('buyShipAction', function () {
  it(`should create a ${BUY_SHIP_ACTION}`, function () {
    // Arrange
    const city = 'Lübeck'
    const shipName = 'Santa Maria'
    const shipType = 'nef'

    // Act
    const action = buyShipAction({ city, shipName, shipType })

    // Assert
    expect(action).to.be.an.FSA
    expect(action).to.have.interface({
      type: String,
      payload: {
        city: String,
        shipName: String,
        shipType: String
      }
    })
    expect(action.type).to.equal(BUY_SHIP_ACTION)
    expect(action.payload.city).to.equal(city)
    expect(action.payload.shipName).to.equal(shipName)
    expect(action.payload.shipType).to.equal(shipType)
  })
})
