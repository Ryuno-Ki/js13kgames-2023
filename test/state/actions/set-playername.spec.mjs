import chai from 'chai'
import chaiFlux from 'chai-flux'
import chaiInterface from 'chai-interface'

import { SET_PLAYERNAME_ACTION } from '../../../src/js/constants.js'
import { setPlayernameAction } from '../../../src/js/state/actions/set-playername.js'

chai.use(chaiFlux)
chai.use(chaiInterface)
const { expect } = chai

describe('setPlayernameAction', function () {
  it(`should create a ${SET_PLAYERNAME_ACTION}`, function () {
    // Arrange
    const playername = 'Christoph'

    // Act
    const action = setPlayernameAction(playername)

    // Assert
    expect(action).to.be.an.FSA
    expect(action).to.have.interface({
      type: String,
      payload: {
        playername: String
      }
    })
    expect(action.type).to.equal(SET_PLAYERNAME_ACTION)
    expect(action.payload.playername).to.equal(playername)
  })
})
