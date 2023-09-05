import chai from 'chai'
import chaiDom from 'chai-dom'

import { warehouse } from '../../src/js/components/warehouse.js'
import { resetAction } from '../../src/js/state/actions/reset.js'
import store from '../../src/js/state/store.js'

chai.use(chaiDom)
const { expect } = chai

describe('warehouse', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
  })

  it('should contain a tutorial component', function () {
    // Arrange
    const ships = []
    const targetElement = document.createElement('div')
    const state = Object.assign({}, store.getState(), { ships })

    // Act
    const warehouseComponent = warehouse(targetElement, state)

    // Assert
    expect(warehouseComponent).not.to.equal(targetElement)
    expect(warehouseComponent).to.have.descendant('[data-component="tutorial"]')
  })
})
