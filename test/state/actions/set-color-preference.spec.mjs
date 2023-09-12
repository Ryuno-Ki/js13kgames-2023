import chai from 'chai'
import chaiFlux from 'chai-flux'
import chaiInterface from 'chai-interface'

import { SET_COLOR_PREFERENCE_ACTION } from '../../../src/js/constants.js'
import { setColorPreferenceAction } from '../../../src/js/state/actions/set-color-preference.js'

chai.use(chaiFlux)
chai.use(chaiInterface)
const { expect } = chai

describe('setColorPreferenceAction', function () {
  it(`should create a ${SET_COLOR_PREFERENCE_ACTION}`, function () {
    // Arrange
    const color = 'dark'

    // Act
    const action = setColorPreferenceAction(color)

    // Assert
    expect(action).to.be.an.FSA
    expect(action).to.have.interface({
      type: String,
      payload: {
        color: String
      }
    })
    expect(action.type).to.equal(SET_COLOR_PREFERENCE_ACTION)
    expect(action.payload.color).to.equal(color)
  })
})
