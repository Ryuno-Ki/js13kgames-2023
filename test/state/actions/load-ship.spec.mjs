import chai from 'chai'
import chaiFlux from 'chai-flux'
import chaiInterface from 'chai-interface'

import { loadShipAction } from '../../../src/js/state/actions/load-ship.js'

chai.use(chaiFlux)
chai.use(chaiInterface)
const { expect } = chai

describe('loadShipAction', function () {
  it('should create a LOAD_SHIP_ACTION', function () {
    // Arrange
    const city = 'Lübeck'
    const ship = 'Santa Maria'
    const ware = 'grok'
    const quantity = 42

    // Act
    const action = loadShipAction({ city, ship, ware, quantity })

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
    expect(action.type).to.equal('LOAD_SHIP_ACTION')
    expect(action.payload.city).to.equal(city)
    expect(action.payload.ship).to.equal(ship)
    expect(action.payload.ware).to.equal(ware)
    expect(action.payload.quantity).to.equal(quantity)
  })
})
