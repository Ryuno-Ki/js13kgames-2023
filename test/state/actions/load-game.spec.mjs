import chai from 'chai'
import chaiFlux from 'chai-flux'
import chaiInterface from 'chai-interface'

import { initialState } from '../../../src/js/state/initial-state.js'
import { loadGameAction } from '../../../src/js/state/actions/load-game.js'

chai.use(chaiFlux)
chai.use(chaiInterface)
const { expect } = chai

describe('loadGameAction', function () {
  it('should create a LOAD_GAME_ACTION', function () {
    // Arrange
    const state = Object.assign({}, initialState, { playername: 'Kolumbus' })

    // Act
    const action = loadGameAction(state)

    // Assert
    expect(action).to.be.an.FSA
    expect(action).to.have.interface({
      type: String,
      payload: {
        state: Object
      }
    })
    expect(action.type).to.equal('LOAD_GAME_ACTION')
    expect(action.payload.state).to.equal(state)
  })
})
