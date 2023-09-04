import { expect } from 'chai'

import { resetAction } from '../../src/js/state/actions/reset.js'
import { deleteGameAction } from '../../src/js/state/actions/delete-game.js'
import { saveGameAction } from '../../src/js/state/actions/save-game.js'
import { setColorPreferenceAction } from '../../src/js/state/actions/set-color-preference.js'
import { setPlayernameAction } from '../../src/js/state/actions/set-playername.js'
import { switchToCityAction } from '../../src/js/state/actions/switch-to-city.js'
import { switchToSceneAction } from '../../src/js/state/actions/switch-to-scene.js'
import { switchToViewAction } from '../../src/js/state/actions/switch-to-view.js'
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

  describe('when player navigates to a new scene', function () {
    describe('when that scene is about', function () {
      it('should include About in the title', async function () {
        // Arrange
        // Nothing to prepare

        // Act
        await store.dispatch(switchToSceneAction('about-section'))

        // Assert
        expect(document.title).to.equal('About | The Baltic League | js13kgames-2023')
      })
    })

    describe('when that scene is game-over', function () {
      it('should include Game Over in the title', async function () {
        // Arrange
        // Nothing to prepare

        // Act
        await store.dispatch(switchToSceneAction('game-over-section'))

        // Assert
        expect(document.title).to.equal('Game Over | The Baltic League | js13kgames-2023')
      })
    })

    describe('when that scene is level', function () {
      describe('when the view is sea', function () {
        it('should include Baltic Sea in the title', async function () {
        // Arrange
        // Nothing to prepare

          // Act
          await store.dispatch(switchToSceneAction('level-section'))
          await store.dispatch(switchToViewAction('sea'))

          // Assert
          expect(document.title).to.equal('Baltic Sea | The Baltic League | js13kgames-2023')
        })
      })

      describe('when the view is city', function () {
        it('should include the city name in the title', async function () {
        // Arrange
        // Nothing to prepare

          // Act
          await store.dispatch(switchToSceneAction('level-section'))
          await store.dispatch(switchToCityAction('Wismar'))
          await store.dispatch(switchToViewAction('city'))

          // Assert
          expect(document.title).to.equal('Wismar | The Baltic League | js13kgames-2023')
        })
      })
    })

    describe('when that scene is load-game', function () {
      it('should include Load Game in the title', async function () {
        // Arrange
        // Nothing to prepare

        // Act
        await store.dispatch(switchToSceneAction('load-game-section'))

        // Assert
        expect(document.title).to.equal('Load Game | The Baltic League | js13kgames-2023')
      })
    })

    describe('when that scene is new-game', function () {
      it('should include New Game in the title', async function () {
        // Arrange
        // Nothing to prepare

        // Act
        await store.dispatch(switchToSceneAction('new-game-section'))

        // Assert
        expect(document.title).to.equal('New Game | The Baltic League | js13kgames-2023')
      })
    })

    describe('when that scene is settings', function () {
      it('should include Settings in the title', async function () {
        // Arrange
        // Nothing to prepare

        // Act
        await store.dispatch(switchToSceneAction('settings-section'))

        // Assert
        expect(document.title).to.equal('Settings | The Baltic League | js13kgames-2023')
      })
    })

    describe('when that scene is title', function () {
      it('should reset the title', async function () {
        // Arrange
        // Nothing to prepare

        // Act
        await store.dispatch(switchToSceneAction('title-section'))

        // Assert
        expect(document.title).to.equal('The Baltic League | js13kgames-2023')
      })
    })

    describe('when that scene is win', function () {
      it('should include You Win in the title', async function () {
        // Arrange
        // Nothing to prepare

        // Act
        await store.dispatch(switchToSceneAction('win-section'))

        // Assert
        expect(document.title).to.equal('You Win | The Baltic League | js13kgames-2023')
      })
    })

    describe('when that scene is world', function () {
      it('should include World Selection in the title', async function () {
        // Arrange
        // Nothing to prepare

        // Act
        await store.dispatch(switchToSceneAction('world-section'))

        // Assert
        expect(document.title).to.equal('World | The Baltic League | js13kgames-2023')
      })
    })
  })
})
