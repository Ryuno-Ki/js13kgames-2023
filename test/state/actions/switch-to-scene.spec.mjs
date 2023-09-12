import chai from 'chai'
import chaiFlux from 'chai-flux'
import chaiInterface from 'chai-interface'

import { SWITCH_TO_SCENE_ACTION } from '../../../src/js/constants.js'
import { switchToSceneAction } from '../../../src/js/state/actions/switch-to-scene.js'

chai.use(chaiFlux)
chai.use(chaiInterface)
const { expect } = chai

describe('switchToSceneAction', function () {
  it(`should create a ${SWITCH_TO_SCENE_ACTION}`, function () {
    // Arrange
    const scene = 'about-section'

    // Act
    const action = switchToSceneAction(scene)

    // Assert
    expect(action).to.be.an.FSA
    expect(action).to.have.interface({
      type: String,
      payload: {
        scene: String
      }
    })
    expect(action.type).to.equal(SWITCH_TO_SCENE_ACTION)
    expect(action.payload.scene).to.equal(scene)
  })
})
