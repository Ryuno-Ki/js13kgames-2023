import chai from 'chai'
import chaiFlux from 'chai-flux'
import chaiInterface from 'chai-interface'

import { SAVE_GAME_ACTION } from '../../../src/js/constants.js'
import { saveGameAction } from '../../../src/js/state/actions/save-game.js'

chai.use(chaiFlux)
chai.use(chaiInterface)
const { expect } = chai

describe('saveGameAction', function () {
  it(`should create a ${SAVE_GAME_ACTION}`, function () {
    // Arrange
    // Nothing to prepare

    // Act
    const action = saveGameAction()

    // Assert
    expect(action).to.be.an.FSA
    expect(action).to.have.interface({
      type: String,
      payload: {}
    })
    expect(action.type).to.equal(SAVE_GAME_ACTION)
  })
})
