import chai from 'chai'
import chaiFlux from 'chai-flux'
import chaiInterface from 'chai-interface'

import { SWITCH_TO_VIEW_ACTION } from '../../../src/js/constants.js'
import { switchToViewAction } from '../../../src/js/state/actions/switch-to-view.js'

chai.use(chaiFlux)
chai.use(chaiInterface)
const { expect } = chai

describe('switchToViewAction', function () {
  it(`should create a ${SWITCH_TO_VIEW_ACTION}`, function () {
    // Arrange
    const view = 'city'

    // Act
    const action = switchToViewAction(view)

    // Assert
    expect(action).to.be.an.FSA
    expect(action).to.have.interface({
      type: String,
      payload: {
        view: String
      }
    })
    expect(action.type).to.equal(SWITCH_TO_VIEW_ACTION)
    expect(action.payload.view).to.equal(view)
  })
})
