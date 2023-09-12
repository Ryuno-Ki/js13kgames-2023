import chai from 'chai'
import chaiFlux from 'chai-flux'
import chaiInterface from 'chai-interface'

import { UNLOAD_SHIP_ACTION } from '../../../src/js/constants.js'
import { unloadShipAction } from '../../../src/js/state/actions/unload-ship.js'

chai.use(chaiFlux)
chai.use(chaiInterface)
const { expect } = chai

describe('unloadShipAction', function () {
  it(`should create a ${UNLOAD_SHIP_ACTION}`, function () {
    // Arrange
    const city = 'Lübeck'
    const ship = 'Santa Maria'
    const ware = 'grok'
    const quantity = 42

    // Act
    const action = unloadShipAction({ city, ship, ware, quantity })

    // Assert
    expect(action).to.be.an.FSA
    expect(action).to.have.interface({
      type: String,
      payload: {
        city: String,
        ship: String,
        ware: String,
        quantity: Number
      }
    })
    expect(action.type).to.equal(UNLOAD_SHIP_ACTION)
    expect(action.payload.city).to.equal(city)
    expect(action.payload.ship).to.equal(ship)
    expect(action.payload.ware).to.equal(ware)
    expect(action.payload.quantity).to.equal(quantity)
  })
})
