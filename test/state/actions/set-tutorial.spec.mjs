import chai from 'chai'
import chaiFlux from 'chai-flux'
import chaiInterface from 'chai-interface'

import { SET_TUTORIAL_ACTION } from '../../../src/js/constants.js'
import { setTutorialAction } from '../../../src/js/state/actions/set-tutorial.js'

chai.use(chaiFlux)
chai.use(chaiInterface)
const { expect } = chai

describe('setTutorialAction', function () {
  it(`should create a ${SET_TUTORIAL_ACTION}`, function () {
    // Arrange
    const scene = 'about-section'

    // Act
    const action = setTutorialAction(scene)

    // Assert
    expect(action).to.be.an.FSA
    expect(action).to.have.interface({
      type: String,
      payload: {
        scene: String
      }
    })
    expect(action.type).to.equal(SET_TUTORIAL_ACTION)
    expect(action.payload.scene).to.equal(scene)
  })
})
