import chai from 'chai'
import chaiFlux from 'chai-flux'
import chaiInterface from 'chai-interface'

import { SELL_ACTION } from '../../../src/js/constants.js'
import { sellAction } from '../../../src/js/state/actions/sell.js'

chai.use(chaiFlux)
chai.use(chaiInterface)
const { expect } = chai

describe('sellAction', function () {
  it(`should create a ${SELL_ACTION}`, function () {
    // Arrange
    const city = 'Lübeck'
    const ware = 'grok'
    const quantity = 42

    // Act
    const action = sellAction({ city, ware, quantity })

    // Assert
    expect(action).to.be.an.FSA
    expect(action).to.have.interface({
      type: String,
      payload: {
        city: String,
        ware: String,
        quantity: Number
      }
    })
    expect(action.type).to.equal(SELL_ACTION)
    expect(action.payload.city).to.equal(city)
    expect(action.payload.ware).to.equal(ware)
    expect(action.payload.quantity).to.equal(quantity)
  })
})
