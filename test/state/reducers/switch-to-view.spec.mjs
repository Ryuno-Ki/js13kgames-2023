import { expect } from 'chai'

import { resetAction } from '../../../src/js/state/actions/reset.js'
import store from '../../../src/js/state/store.js'
import { switchToViewReducer } from '../../../src/js/state/reducers/switch-to-view.js'

describe('switchToViewReducer', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
  })

  it('should unset the tutorial flag of the previous view', function () {
    // Arrange
    const showTutorial = { market: true, warehouse: true }
    const state = Object.assign(
      {},
      store.getState(),
      { activeCity: 'Lübeck', activeView: 'market', showTutorial }
    )
    const payload = { view: 'warehouse' }

    // Act
    const newState = switchToViewReducer(state, payload)

    // Assert
    expect(newState).not.to.equal(state)
    expect(newState.showTutorial.market).to.be.false
    expect(newState.showTutorial.warehouse).to.be.true
  })

  it('should update the active view', function () {
    // Arrange
    const state = Object.assign({}, store.getState(), { activeCity: 'Lübeck' })
    const payload = { view: 'warehouse' }

    // Act
    const newState = switchToViewReducer(state, payload)

    // Assert
    expect(newState).not.to.equal(state)
    expect(newState.activeView).to.equal('warehouse')
    expect(newState.activeCity).to.equal('Lübeck')
  })
})
