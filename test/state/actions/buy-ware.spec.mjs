import chai from 'chai'
import chaiFlux from 'chai-flux'
import chaiInterface from 'chai-interface'

import { BUY_WARE_ACTION } from '../../../src/js/constants.js'
import { buyWareAction } from '../../../src/js/state/actions/buy-ware.js'

chai.use(chaiFlux)
chai.use(chaiInterface)
const { expect } = chai

describe('buyWareAction', function () {
  it(`should create a ${BUY_WARE_ACTION}`, function () {
    // Arrange
    const city = 'Lübeck'
    const ware = 'grok'
    const quantity = 42

    // Act
    const action = buyWareAction({ city, ware, quantity })

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
    expect(action.type).to.equal(BUY_WARE_ACTION)
    expect(action.payload.city).to.equal(city)
    expect(action.payload.ware).to.equal(ware)
    expect(action.payload.quantity).to.equal(quantity)
  })
})
