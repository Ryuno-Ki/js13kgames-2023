import chai from 'chai'
import chaiDom from 'chai-dom'

import { monthMeter } from '../../src/js/components/month-meter.js'
import store from '../../src/js/state/store.js'

chai.use(chaiDom)
const { expect } = chai

describe('monthMeter', function () {
  beforeEach(async function () {
    await store.dispatch({ type: 'RESET', payload: {} })
  })

  // I haven't thought about how I want to handle missing data for this component.
  // Therefore no tests covering it.

  it('should render a meter to visualise current progress in the year', function () {
    // Arrange
    const targetElement = document.createElement('div')
    targetElement.setAttribute('data-month', '9')
    targetElement.setAttribute('data-active-month', '8')
    const state = store.getState()

    // Act
    const monthMeterComponent = monthMeter(targetElement, state)

    // Assert
    expect(monthMeterComponent).not.to.equal(targetElement)
    expect(monthMeterComponent).to.contain.text(['Next month'])
    expect(monthMeterComponent).to.contain('meter[value="8"]')
    expect(monthMeterComponent).to.contain('button[type="button"][data-action="next-month"]')
  })
})
