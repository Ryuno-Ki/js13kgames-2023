import chai from 'chai'
import chaiFlux from 'chai-flux'
import chaiInterface from 'chai-interface'

import { setLevelScenarioAction } from '../../../src/js/state/actions/set-level-scenario.js'

chai.use(chaiFlux)
chai.use(chaiInterface)
const { expect } = chai

describe('setLevelScenarioAction', function () {
  it('should create a SET_LEVEL_SCENARIO_ACTION', function () {
    // Arrange
    const scenario = 'free-play'

    // Act
    const action = setLevelScenarioAction(scenario)

    // Assert
    expect(action).to.be.an.FSA
    expect(action).to.have.interface({
      type: String,
      payload: {
        scenario: String
      }
    })
    expect(action.type).to.equal('SET_LEVEL_SCENARIO_ACTION')
    expect(action.payload.scenario).to.equal(scenario)
  })
})
