import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

import { resetAction } from '../src/js/state/actions/reset.js'
import { sendShipAction } from '../src/js/state/actions/send-ship.js'
import { setColorPreferenceAction } from '../src/js/state/actions/set-color-preference.js'
import { onChange } from '../src/js/on-change.js'
import store from '../src/js/state/store.js'

chai.use(sinonChai)
const { expect } = chai

describe('onChange', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
  })

  afterEach(function () {
    sinon.restore()
  })

  it('should set another color preference', function () {
    // Arrange
    const event = new window.Event('change')
    const color = 'dark'
    const target = document.createElement('input')
    target.setAttribute('id', 'color-preference')
    target.setAttribute('value', color)
    target.addEventListener('change', onChange)
    sinon.spy(store, 'dispatch')

    // Act
    target.dispatchEvent(event)

    // Assert
    expect(store.dispatch).to.have.been.calledOnce
    expect(store.dispatch).to.have.been.calledWith(setColorPreferenceAction(color))
  })

  it('should dispatch to send a ship', function () {
    // Arrange
    const event = new window.Event('change')
    const ship = 'Santa Maria'
    const from = store.getState().activeCity
    const to = 'there'
    const target = document.createElement('input')
    target.setAttribute('id', 'destination')
    target.setAttribute('data-ship', ship)
    target.setAttribute('value', to)
    target.addEventListener('change', onChange)
    sinon.spy(store, 'dispatch')

    // Act
    target.dispatchEvent(event)

    // Assert
    expect(store.dispatch).to.have.been.calledOnce
    expect(store.dispatch).to.have.been.calledWith(sendShipAction({ ship, from, to }))
  })
})
