import chai from 'chai'
import chaiFlux from 'chai-flux'
import chaiInterface from 'chai-interface'

import { SWITCH_TO_CITY_ACTION } from '../../../src/js/constants.js'
import { switchToCityAction } from '../../../src/js/state/actions/switch-to-city.js'

chai.use(chaiFlux)
chai.use(chaiInterface)
const { expect } = chai

describe('switchToCityAction', function () {
  it(`should create a ${SWITCH_TO_CITY_ACTION}`, function () {
    // Arrange
    const city = 'Lübeck'

    // Act
    const action = switchToCityAction(city)

    // Assert
    expect(action).to.be.an.FSA
    expect(action).to.have.interface({
      type: String,
      payload: {
        city: String
      }
    })
    expect(action.type).to.equal(SWITCH_TO_CITY_ACTION)
    expect(action.payload.city).to.equal(city)
  })
})
