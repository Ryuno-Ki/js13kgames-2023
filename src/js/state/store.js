import { resetAction } from './actions/reset.js'
import { reducer } from './reducers/index.js'

class Store {
  /**
   * @argument {import('./reducers/index.js').reducer} reducer
   */
  constructor (reducer) {
    this.reducer = reducer
    /** @type {import('./initial-state.js').State} */
    this.state = reducer(undefined, resetAction())
  }

  /**
   * Compute a new state.
   *
   * It's asynchronous because I might need to call out to an API. Not relevant
   * to this game, but I keep the habit.
   *
   * @argument {import('./actions/check-on-gameover-condition.js').CHECK_ON_GAMEOVER_CONDITION_ACTION | import('./actions/check-on-win-condition.js').CHECK_ON_WIN_CONDITION_ACTION | import('./actions/delete-game.js').DELETE_GAME_ACTION | import('./actions/forward-to-next-month.js').FORWARD_TO_NEXT_MONTH_ACTION | import('./actions/load-game.js').LOAD_GAME_ACTION | import('./actions/load-ship.js').LOAD_SHIP_ACTION | import('./actions/reset.js').RESET_ACTION | import('./actions/save-game.js').SAVE_GAME_ACTION | import('./actions/send-ship.js').SEND_SHIP_ACTION | import('./actions/set-color-preference.js').SET_COLOR_PREFERENCE_ACTION | import('./actions/set-level-scenario.js').SET_LEVEL_SCENARIO_ACTION | import('./actions/set-playername.js').SET_PLAYERNAME_ACTION | import('./actions/set-tutorial.js').SET_TUTORIAL_ACTION | import('./actions/switch-to-city.js').SWITCH_TO_CITY_ACTION | import('./actions/switch-to-scene.js').SWITCH_TO_SCENE_ACTION | import('./actions/switch-to-view.js').SWITCH_TO_VIEW_ACTION | import('./actions/unload-ship.js').UNLOAD_SHIP_ACTION | import('./actions/update-ships.js').UPDATE_SHIPS_ACTION} action
  */
  async dispatch (action) {
    this.state = this.reducer(this.state, action)
    this._applySideEffects(action)
  }

  /**
   * Return the current state.
   */
  getState () {
    return this.state
  }

  /**
   * Run side effects on certain actions.
   *
   * @private
   * @argument {import('./actions/check-on-gameover-condition.js').CHECK_ON_GAMEOVER_CONDITION_ACTION | import('./actions/check-on-win-condition.js').CHECK_ON_WIN_CONDITION_ACTION | import('./actions/delete-game.js').DELETE_GAME_ACTION | import('./actions/forward-to-next-month.js').FORWARD_TO_NEXT_MONTH_ACTION | import('./actions/load-game.js').LOAD_GAME_ACTION | import('./actions/load-ship.js').LOAD_SHIP_ACTION | import('./actions/reset.js').RESET_ACTION | import('./actions/save-game.js').SAVE_GAME_ACTION | import('./actions/send-ship.js').SEND_SHIP_ACTION | import('./actions/set-color-preference.js').SET_COLOR_PREFERENCE_ACTION | import('./actions/set-level-scenario.js').SET_LEVEL_SCENARIO_ACTION | import('./actions/set-playername.js').SET_PLAYERNAME_ACTION | import('./actions/set-tutorial.js').SET_TUTORIAL_ACTION | import('./actions/switch-to-city.js').SWITCH_TO_CITY_ACTION | import('./actions/switch-to-scene.js').SWITCH_TO_SCENE_ACTION | import('./actions/switch-to-view.js').SWITCH_TO_VIEW_ACTION | import('./actions/unload-ship.js').UNLOAD_SHIP_ACTION | import('./actions/update-ships.js').UPDATE_SHIPS_ACTION} action
   */
  _applySideEffects (action) {
    if (action.type === 'DELETE_GAME_ACTION') {
      this._deleteSnapshot(action.payload.playername)
    }

    if (action.type === 'SAVE_GAME_ACTION') {
      this._saveSnapshot()
    }

    if (action.type === 'SET_COLOR_PREFERENCE_ACTION') {
      this._applyColorTheme(action.payload.color)
    }

    if (action.type === 'SWITCH_TO_SCENE_ACTION') {
      this._setDocumentTitle()
    }

    if (action.type === 'SWITCH_TO_VIEW_ACTION') {
      this._setDocumentTitle()
    }
  }

  /**
   * Helper method to manipulate the DOM.
   *
   * @private
   * @argument {import('./initial-state.js').Color} color
   */
  _applyColorTheme (color) {
    document.body.classList.remove('theme-system')
    document.body.classList.remove('theme-light')
    document.body.classList.remove('theme-dark')
    document.body.classList.add(`theme-${color}`)
  }

  /**
   * Helper method to remove an entry from localStorage.
   *
   * @private
   * @argument {string} playername
   */
  _deleteSnapshot (playername) {
    const serialisedStorage = window.localStorage.getItem('THE_BALTIC_LEAGUE') || '[]'
    const storage = /** @type {Array<import('./initial-state.js').State>} */(JSON.parse(serialisedStorage))
    const snapshot = storage.filter((entry) => entry.playername !== playername)
    window.localStorage.setItem('THE_BALTIC_LEAGUE', JSON.stringify(snapshot))
  }

  /**
   * Helper method to handle localStorage manipulation.
   *
   * @private
   */
  _saveSnapshot () {
    const state = this.getState()
    const playername = state.playername
    const serialisedStorage = window.localStorage.getItem('THE_BALTIC_LEAGUE') || '[]'
    const storage = /** @type {Array<import('./initial-state.js').State>} */(JSON.parse(serialisedStorage))
    let snapshot = []

    if (storage.length > 0) {
      if (storage.find((entry) => entry.playername === playername)) {
        // Third time => update
        snapshot = storage.map((entry) => {
          if (entry.playername !== playername) {
            return entry
          }

          return state
        })
      } else {
        // Second time => append
        snapshot = storage.concat([state])
      }
    } else {
      // First time => create
      snapshot = [state]
    }

    window.localStorage.setItem('THE_BALTIC_LEAGUE', JSON.stringify(snapshot))
  }

  /**
   * Helper method to keep the document.title in sync with the game.
   *
   * @private
   */
  _setDocumentTitle () {
    const { activeCity, activeScene, activeView } = this.getState()
    const sceneToTitleMapping = {
      'about-section': 'About',
      'game-over-section': 'Game Over',
      'level-section': '', // Empty on purpose
      'load-game-section': 'Load Game',
      'new-game-section': 'New Game',
      'settings-section': 'Settings',
      'title-section': '', // Empty on purpose
      'win-section': 'You Win',
      'world-section': 'World'
    }
    const viewToTitleMapping = {
      city: activeCity || 'City',
      docks: `Docks of ${activeCity}`,
      market: `Market of ${activeCity}`,
      sea: 'Baltic Sea',
      story: 'Tutorial',
      warehouse: `Warehouse of ${activeCity}`
    }

    let viewTitle = ''
    if (activeScene === 'level-section') {
      viewTitle = viewToTitleMapping[activeView]
    }

    const sceneTitle = sceneToTitleMapping[activeScene]
    const parts = [
      viewTitle,
      sceneTitle,
      'The Baltic League',
      'js13kgames-2023'
    ]
    document.title = parts.filter(Boolean).join(' | ')
  }
}

const store = new Store(reducer)
export default store
