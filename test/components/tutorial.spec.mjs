import chai from 'chai'
import chaiDom from 'chai-dom'

import { tutorial } from '../../src/js/components/tutorial.js'
import { resetAction } from '../../src/js/state/actions/reset.js'
import store from '../../src/js/state/store.js'

chai.use(chaiDom)
const { expect } = chai

describe('tutorial', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
  })

  it('should explain the functionality', function () {
    // Arrange
    const targetElement = document.createElement('div')
    const state = store.getState()

    // Act
    const tutorialComponent = tutorial(targetElement, state)

    // Assert
    expect(tutorialComponent).not.to.equal(targetElement)
    expect(tutorialComponent).to.have.descendant('p.story')
  })
})
