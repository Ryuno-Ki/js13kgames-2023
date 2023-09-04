import { expect } from 'chai'

import { resetAction } from '../../src/js/state/actions/reset.js'
import { deleteGameAction } from '../../src/js/state/actions/delete-game.js'
import { saveGameAction } from '../../src/js/state/actions/save-game.js'
import { setColorPreferenceAction } from '../../src/js/state/actions/set-color-preference.js'
import { setPlayernameAction } from '../../src/js/state/actions/set-playername.js'
import store from '../../src/js/state/store.js'

describe('store', function () {
  it('should be a singleton', function () {
    // Arrange
    // Nothing to prepare

    // Act
    // Nothing to run

    // Assert
    expect(store).to.be.a.class
  })

  it('should have a dispatch method', function () {
    // Arrange
    // Nothing to prepare

    // Act
    // Nothing to run

    // Assert
    expect(store).to.respondTo('dispatch')
  })

  it('should have a getState method', function () {
    // Arrange
    // Nothing to prepare

    // Act
    // Nothing to run

    // Assert
    expect(store).to.respondTo('getState')
  })

  describe('when color preference is changed', function () {
    it('should update the document.body', async function () {
      // Arrange
      const color = 'dark'

      // Act
      await store.dispatch(setColorPreferenceAction(color))

      // Assert
      expect(document.body).to.have.class('theme-dark')
    })
  })

  describe('when level scenario is chosen and player forwards to next month', function () {
    beforeEach(async function () {
      await store.dispatch(resetAction())

      if (window.localStorage.getItem('THE_BALTIC_LEAGUE')) {
        window.localStorage.removeItem('THE_BALTIC_LEAGUE')
      }
    })

    it('should save the current state in localStorage', async function () {
      // Arrange
      const state = store.getState()

      // Act
      await store.dispatch(saveGameAction())

      // Assert
      const snapshot = window.localStorage.getItem('THE_BALTIC_LEAGUE')
      expect(snapshot).to.exist
      expect(JSON.parse(snapshot)).to.be.an('Array').and.have.length(1)
      expect(JSON.parse(snapshot)).to.shallowDeepEqual([state])
    })

    it('should save different playthroughs next to each other', async function () {
      // Arrange
      const firstPlay = Object.assign({}, store.getState(), { playername: 'One' })
      const secondPlay = Object.assign({}, store.getState(), { playername: 'Two' })

      // Act
      await store.dispatch(setPlayernameAction(firstPlay.playername))
      await store.dispatch(saveGameAction())
      await store.dispatch(setPlayernameAction(secondPlay.playername))
      await store.dispatch(saveGameAction())
      await store.dispatch(saveGameAction())

      // Assert
      const snapshot = window.localStorage.getItem('THE_BALTIC_LEAGUE')
      expect(snapshot).to.exist
      expect(JSON.parse(snapshot)).to.be.an('Array').and.have.length(2)
    })
  })

  describe('when a game is flagged for deletion', function () {
    it('should only remove that game from localStorage', async function () {
      // Arrange
      const firstPlay = Object.assign({}, store.getState(), { playername: 'One' })
      const secondPlay = Object.assign({}, store.getState(), { playername: 'Two' })

      // Act
      await store.dispatch(setPlayernameAction(firstPlay.playername))
      await store.dispatch(saveGameAction())
      await store.dispatch(setPlayernameAction(secondPlay.playername))
      await store.dispatch(saveGameAction())
      await store.dispatch(deleteGameAction(firstPlay.playername))

      // Assert
      const snapshot = window.localStorage.getItem('THE_BALTIC_LEAGUE')
      expect(snapshot).to.exist
      expect(JSON.parse(snapshot)).to.be.an('Array').and.have.length(1)
      expect(JSON.parse(snapshot)[0]).to.not.have.property('playername', firstPlay.playername)
    })
  })
})
