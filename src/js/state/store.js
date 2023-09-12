import {
  DELETE_GAME_ACTION,
  LOCAL_STORAGE_KEY,
  SAVE_GAME_ACTION,
  SET_COLOR_PREFERENCE_ACTION,
  SWITCH_TO_SCENE_ACTION,
  SWITCH_TO_VIEW_ACTION
} from '../constants.js'
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
   * @argument {import('./actions/index.js').ACTION} action
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
   * @argument {import('./actions/index.js').ACTION} action
   */
  _applySideEffects (action) {
    if (action.type === DELETE_GAME_ACTION) {
      this._deleteSnapshot(action.payload.playername)
    }

    if (action.type === SAVE_GAME_ACTION) {
      this._saveSnapshot()
    }

    if (action.type === SET_COLOR_PREFERENCE_ACTION) {
      this._applyColorTheme(action.payload.color)
    }

    if (action.type === SWITCH_TO_SCENE_ACTION) {
      this._setDocumentTitle()
    }

    if (action.type === SWITCH_TO_VIEW_ACTION) {
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
    ['system', 'light', 'dark'].forEach((theme) => {
      document.body.classList.remove(`theme-${theme}`)
    })
    document.body.classList.add(`theme-${color}`)
  }

  /**
   * Helper method to remove an entry from localStorage.
   *
   * @private
   * @argument {string} playername
   */
  _deleteSnapshot (playername) {
    const serialisedStorage = window.localStorage.getItem(LOCAL_STORAGE_KEY) || '[]'
    const storage = /** @type {Array<import('./initial-state.js').State>} */(JSON.parse(serialisedStorage))
    const snapshot = storage.filter((entry) => entry.playername !== playername)
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(snapshot))
  }

  /**
   * Helper method to handle localStorage manipulation.
   *
   * @private
   */
  _saveSnapshot () {
    const state = this.getState()
    const playername = state.playername
    const serialisedStorage = window.localStorage.getItem(LOCAL_STORAGE_KEY) || '[]'
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

    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(snapshot))
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
