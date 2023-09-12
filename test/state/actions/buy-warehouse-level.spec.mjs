import chai from 'chai'
import chaiFlux from 'chai-flux'
import chaiInterface from 'chai-interface'

import { BUY_WAREHOUSE_LEVEL_ACTION } from '../../../src/js/constants.js'
import { buyWarehouseLevelAction } from '../../../src/js/state/actions/buy-warehouse-level.js'

chai.use(chaiFlux)
chai.use(chaiInterface)
const { expect } = chai

describe('buyWarehouseLevelAction', function () {
  it(`should create a ${BUY_WAREHOUSE_LEVEL_ACTION}`, function () {
    // Arrange
    const city = 'Lübeck'

    // Act
    const action = buyWarehouseLevelAction(city)

    // Assert
    expect(action).to.be.an.FSA
    expect(action).to.have.interface({
      type: String,
      payload: {
        city: String
      }
    })
    expect(action.type).to.equal(BUY_WAREHOUSE_LEVEL_ACTION)
    expect(action.payload.city).to.equal(city)
  })
})
