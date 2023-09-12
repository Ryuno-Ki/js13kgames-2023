import chai from 'chai'
import chaiFlux from 'chai-flux'
import chaiInterface from 'chai-interface'

import { DELETE_GAME_ACTION } from '../../../src/js/constants.js'
import { deleteGameAction } from '../../../src/js/state/actions/delete-game.js'

chai.use(chaiFlux)
chai.use(chaiInterface)
const { expect } = chai

describe('deleteGameAction', function () {
  it(`should create a ${DELETE_GAME_ACTION}`, function () {
    // Arrange
    const playername = 'Kolumbus'

    // Act
    const action = deleteGameAction(playername)

    // Assert
    expect(action).to.be.an.FSA
    expect(action).to.have.interface({
      type: String,
      payload: {
        playername: String
      }
    })
    expect(action.type).to.equal(DELETE_GAME_ACTION)
    expect(action.payload.playername).to.equal(playername)
  })
})
