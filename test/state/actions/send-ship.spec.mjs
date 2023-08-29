import chai from 'chai'
import chaiFlux from 'chai-flux'
import chaiInterface from 'chai-interface'

import { sendShipAction } from '../../../src/js/state/actions/send-ship.js'

chai.use(chaiFlux)
chai.use(chaiInterface)
const { expect } = chai

describe('sendShipAction', function () {
  it('should create a SEND_SHIP_ACTION', function () {
    // Arrange
    const from = 'Lübeck'
    const ship = 'Santa Maria'
    const to = 'Wismar'

    // Act
    const action = sendShipAction({ ship, from, to })

    // Assert
    expect(action).to.be.an.FSA
    expect(action).to.have.interface({
      type: String,
      payload: {
        from: String,
        ship: String,
        to: String
      }
    })
    expect(action.type).to.equal('SEND_SHIP_ACTION')
    expect(action.payload.from).to.equal(from)
    expect(action.payload.ship).to.equal(ship)
    expect(action.payload.to).to.equal(to)
  })
})
