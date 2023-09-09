import chai from 'chai'
import chaiFlux from 'chai-flux'
import chaiInterface from 'chai-interface'

import { buyAction } from '../../../src/js/state/actions/buy.js'

chai.use(chaiFlux)
chai.use(chaiInterface)
const { expect } = chai

describe('buyAction', function () {
  it('should create a BUY_ACTION', function () {
    // Arrange
    const city = 'Lübeck'
    const ware = 'grok'
    const quantity = 42

    // Act
    const action = buyAction({ city, ware, quantity })

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
    expect(action.type).to.equal('BUY_ACTION')
    expect(action.payload.city).to.equal(city)
    expect(action.payload.ware).to.equal(ware)
    expect(action.payload.quantity).to.equal(quantity)
  })
})
