import chai from 'chai'
import chaiDeepEqual from 'chai-better-shallow-deep-equal'

import { restockAction } from '../../../src/js/state/actions/restock.js'
import store from '../../../src/js/state/store.js'
import { initialState } from '../../../src/js/state/initial-state.js'
import { restockReducer } from '../../../src/js/state/reducers/restock.js'

chai.use(chaiDeepEqual)
const { expect } = chai

describe('restockReducer', function () {
  beforeEach(async function () {
    await store.dispatch(restockAction())
  })

  it('should restock the supply and demand to initial', function () {
    // Arrange
    const cities = initialState.cities.map((city) => {
      const demand = {}
      const supply = {}

      Object.entries(city.demand).forEach((item) => {
        demand[item[0]] = item[1] > 0 ? item[1] - 1 : 0
      })
      Object.entries(city.supply).forEach((item) => {
        supply[item[0]] = item[1] > 0 ? item[1] - 1 : 0
      })

      return {
        ...city,
        demand,
        supply
      }
    })
    const state = Object.assign({}, store.getState(), { cities })
    const payload = {}

    // Act
    const newState = restockReducer(state, payload)

    // Assert
    expect(newState).not.to.equal(state)
    expect(newState.cities).to.shallowDeepEqual(initialState.cities)
  })
})
