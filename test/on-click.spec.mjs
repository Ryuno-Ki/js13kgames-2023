import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

import { onClick } from '../src/js/on-click.js'
import { checkOnGameoverConditionAction } from '../src/js/state/actions/check-on-gameover-condition.js'
import { checkOnWinConditionAction } from '../src/js/state/actions/check-on-win-condition.js'
import { deleteGameAction } from '../src/js/state/actions/delete-game.js'
import { forwardToNextMonthAction } from '../src/js/state/actions/forward-to-next-month.js'
import { resetAction } from '../src/js/state/actions/reset.js'
import { loadGameAction } from '../src/js/state/actions/load-game.js'
import { saveGameAction } from '../src/js/state/actions/save-game.js'
import { setTutorialAction } from '../src/js/state/actions/set-tutorial.js'
import { switchToCityAction } from '../src/js/state/actions/switch-to-city.js'
import { switchToSceneAction } from '../src/js/state/actions/switch-to-scene.js'
import { switchToViewAction } from '../src/js/state/actions/switch-to-view.js'
import { unveilHistoryAction } from '../src/js/state/actions/unveil-history.js'
import { updateShipsAction } from '../src/js/state/actions/update-ships.js'
import store from '../src/js/state/store.js'

chai.use(chaiAsPromised)
chai.use(sinonChai)
const { expect } = chai

describe('onClick', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
  })

  afterEach(function () {
    sinon.restore()
  })

  it('should dispatch several actions on forward to next month', async function () {
    // Arrange
    const event = {
      target: {
        getAttribute: () => 'next-month'
      }
    }
    sinon.spy(store, 'dispatch')

    // Act
    await onClick(event)

    // Assert
    expect(store.dispatch).to.have.been.callCount(6)
    // TODO: Check the order! At the moment I can swap the win and gameover checks and tests still pass
    expect(store.dispatch).to.have.been.calledWith(forwardToNextMonthAction())
    expect(store.dispatch).to.have.been.calledWith(updateShipsAction())
    expect(store.dispatch).to.have.been.calledWith(unveilHistoryAction())
    expect(store.dispatch).to.have.been.calledWith(saveGameAction())
    expect(store.dispatch).to.have.been.calledWith(checkOnWinConditionAction())
    expect(store.dispatch).to.have.been.calledWith(checkOnGameoverConditionAction())
  })

  it('should dispatch to delete a game', function () {
    // Arrange
    const playername = 'Kolumbus'
    const event = new window.Event('click')
    const target = document.createElement('button')
    target.type = 'button'
    target.setAttribute('data-playername', playername)
    target.addEventListener('click', onClick)
    sinon.spy(store, 'dispatch')

    // Act
    target.dispatchEvent(event)

    // Assert
    expect(store.dispatch).to.have.been.calledOnce
    expect(store.dispatch).to.have.been.calledWith(deleteGameAction(playername))
  })

  // See https://stackoverflow.com/a/24068018
  it('should dispatch to forward to the next month', function () {
    // Arrange
    const event = new window.Event('click')
    const target = document.createElement('button')
    target.type = 'button'
    target.setAttribute('data-action', 'something')
    target.addEventListener('click', onClick)
    sinon.spy(store, 'dispatch')

    // Act
    target.dispatchEvent(event)

    // Assert
    // I _thought_ I could check on call count of the spy here but the test
    // only sees the first invocation. So instead I separate the callback tests
    // from the event listener one.
    expect(store.dispatch).to.have.been.called
  })

  it('should dispatch to load a game', function () {
    // Arrange
    const state = store.getState()
    const event = new window.Event('click')
    const target = document.createElement('button')
    target.type = 'button'
    target.setAttribute('data-state', JSON.stringify(state))
    target.addEventListener('click', onClick)
    sinon.spy(store, 'dispatch')

    // Act
    target.dispatchEvent(event)

    // Assert
    expect(store.dispatch).to.have.been.calledOnce
    expect(store.dispatch).to.have.been.calledWith(loadGameAction(state))
  })

  it('should dispatch to switch to a city', function () {
    // Arrange
    const event = new window.Event('click')
    const target = document.createElement('button')
    target.type = 'button'
    target.setAttribute('data-city', 'Munich')
    target.addEventListener('click', onClick)
    sinon.spy(store, 'dispatch')

    // Act
    target.dispatchEvent(event)

    // Assert
    expect(store.dispatch).to.have.been.calledOnce
    expect(store.dispatch).to.have.been.calledWith(switchToCityAction('Munich'))
  })

  it('should dispatch to switch to a scene', function () {
    // Arrange
    const event = new window.Event('click')
    const target = document.createElement('button')
    target.type = 'button'
    target.setAttribute('data-scene', 'Game Over')
    target.addEventListener('click', onClick)
    sinon.spy(store, 'dispatch')

    // Act
    target.dispatchEvent(event)

    // Assert
    expect(store.dispatch).to.have.been.calledOnce
    expect(store.dispatch).to.have.been.calledWith(switchToSceneAction('Game Over'))
  })

  it('should dispatch several actions on switch to scene', async function () {
    // Arrange
    const event = {
      target: {
        getAttribute: (attr) => {
          if (attr === 'data-scene') {
            return 'level-scene'
          }
          return ''
        }
      }
    }
    sinon.spy(store, 'dispatch')

    // Act
    await onClick(event)

    // Assert
    expect(store.dispatch).to.have.been.callCount(2)
    expect(store.dispatch).to.have.been.calledWith(switchToSceneAction('level-scene'))
    expect(store.dispatch).to.have.been.calledWith(setTutorialAction('level-scene'))
  })

  it('should dispatch to switch to a view', function () {
    // Arrange
    const event = new window.Event('click')
    const target = document.createElement('button')
    target.type = 'button'
    target.setAttribute('data-view', 'Docks')
    target.addEventListener('click', onClick)
    sinon.spy(store, 'dispatch')

    // Act
    target.dispatchEvent(event)

    // Assert
    expect(store.dispatch).to.have.been.calledOnce
    expect(store.dispatch).to.have.been.calledWith(switchToViewAction('Docks'))
  })
})
