import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

import { onInput } from '../src/js/on-input.js'
import { buyWareAction } from '../src/js/state/actions/buy-ware.js'
import { loadShipAction } from '../src/js/state/actions/load-ship.js'
import { resetAction } from '../src/js/state/actions/reset.js'
import { sellAction } from '../src/js/state/actions/sell.js'
import { setPlayernameAction } from '../src/js/state/actions/set-playername.js'
import { unloadShipAction } from '../src/js/state/actions/unload-ship.js'
import store from '../src/js/state/store.js'

chai.use(sinonChai)
const { expect } = chai

describe('onInput', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
  })

  afterEach(function () {
    sinon.restore()
  })

  it('should dispatch to set the playername', function () {
    // Arrange
    const playername = 'Christoph'

    const event = new window.Event('input')
    const target = document.createElement('input')
    target.id = 'playername'
    target.type = 'text'
    target.value = playername
    target.addEventListener('input', onInput)
    sinon.spy(store, 'dispatch')

    // Act
    target.dispatchEvent(event)

    // Assert
    expect(store.dispatch).to.have.been.calledOnce
    expect(store.dispatch).to.have.been.calledWith(setPlayernameAction(playername))
  })

  it('should dispatch to buy a good', function () {
    // Arrange
    const city = 'Costa Rica'
    const quantity = 42
    const ware = 'potatoes'

    const event = new window.Event('input')
    const target = document.createElement('input')
    target.type = 'number'
    target.value = '42'
    target.setAttribute('data-buy', ware)
    target.setAttribute('data-city', city)
    target.addEventListener('input', onInput)
    sinon.spy(store, 'dispatch')

    // Act
    target.dispatchEvent(event)

    // Assert
    expect(store.dispatch).to.have.been.calledOnce
    expect(store.dispatch).to.have.been.calledWith(buyWareAction({ city, ware, quantity }))
  })

  it('should dispatch to sell a good', function () {
    // Arrange
    const city = 'Costa Rica'
    const quantity = 42
    const ware = 'potatoes'

    const event = new window.Event('input')
    const target = document.createElement('input')
    target.type = 'number'
    target.value = '42'
    target.setAttribute('data-sell', ware)
    target.setAttribute('data-city', city)
    target.addEventListener('input', onInput)
    sinon.spy(store, 'dispatch')

    // Act
    target.dispatchEvent(event)

    // Assert
    expect(store.dispatch).to.have.been.calledOnce
    expect(store.dispatch).to.have.been.calledWith(sellAction({ city, ware, quantity }))
  })

  it('should dispatch to load a ship', function () {
    // Arrange
    const city = 'Costa Rica'
    const ship = 'Santa Maria'
    const quantity = 42
    const ware = 'potatoes'

    const event = new window.Event('input')
    const target = document.createElement('input')
    target.type = 'number'
    target.value = '42'
    target.setAttribute('data-load', 'load')
    target.setAttribute('data-city', city)
    target.setAttribute('data-ship', ship)
    target.setAttribute('data-ware', ware)
    target.addEventListener('input', onInput)
    sinon.spy(store, 'dispatch')

    // Act
    target.dispatchEvent(event)

    // Assert
    expect(store.dispatch).to.have.been.calledOnce
    expect(store.dispatch).to.have.been.calledWith(loadShipAction({ city, ship, ware, quantity }))
  })

  it('should dispatch to unload a ship', function () {
    // Arrange
    const city = 'Costa Rica'
    const ship = 'Santa Maria'
    const quantity = 42
    const ware = 'potatoes'

    const event = new window.Event('input')
    const target = document.createElement('input')
    target.type = 'number'
    target.value = '42'
    target.setAttribute('data-load', 'unload')
    target.setAttribute('data-city', city)
    target.setAttribute('data-ship', ship)
    target.setAttribute('data-ware', ware)
    target.addEventListener('input', onInput)
    sinon.spy(store, 'dispatch')

    // Act
    target.dispatchEvent(event)

    // Assert
    expect(store.dispatch).to.have.been.calledOnce
    expect(store.dispatch).to.have.been.calledWith(unloadShipAction({ city, ship, ware, quantity }))
  })
})
