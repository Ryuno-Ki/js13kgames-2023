import chai from 'chai'
import chaiDeepEqual from 'chai-better-shallow-deep-equal'

import { resetAction } from '../../../src/js/state/actions/reset.js'
import store from '../../../src/js/state/store.js'
import { unveilHistoryReducer } from '../../../src/js/state/reducers/unveil-history.js'

chai.use(chaiDeepEqual)
const { expect } = chai

describe('unveilHistoryReducer', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
  })

  it('should unlock new-founded cities', function () {
    // Arrange
    const state = Object.assign({}, store.getState(), { activeMonth: '6', activeYear: 1201 })
    const payload = {}

    // Act
    const newState = unveilHistoryReducer(state, payload)
    const riga = newState.cities.find((city) => city.name === 'Riga')

    // Assert
    expect(newState).not.to.equal(state)
    expect(riga).not.to.be.undefined
    expect(riga.isFounded).to.be.true
  })

  it('should unlock new introduced ship types', function () {
    // Arrange
    const state = Object.assign({}, store.getState(), { activeMonth: '8', activeYear: 1251 })
    const payload = {}

    // Act
    const newState = unveilHistoryReducer(state, payload)

    // Assert
    expect(newState).not.to.equal(state)
    expect(newState.shipTypes.cog.isKnown).to.be.true
  })
})
