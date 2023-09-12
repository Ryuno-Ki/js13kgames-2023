import { cities } from './cities.js'
import { history } from './history.js'
import { ships, shipTypes } from './ships.js'
import { showTutorial } from './show-tutorial.js'
import { wares } from './wares.js'

/**
 * @typedef {'dark' | 'light' | 'system'} Color
 */

/**
 * @typedef {'about-section' | 'game-over-section' | 'level-section' | 'load-game-section' | 'new-game-section' | 'settings-section' | 'title-section' | 'win-section' | 'world-section'} Scene
 * @todo Move to scenes components
 */

/**
 * @typedef {'About' | 'GameOver' | 'Level' | 'NewGame' | 'Settings' | 'Title' | 'Win' | 'World'} SceneName
 * @todo Move to scenes components
 */

/**
 * @typedef {'free-play' | 'tutorial'} Scenario
 */

/**
 * @typedef {object} State
 * @property {import('./cities.js').CityName} activeCity
 * @property {Color} activeColor
 * @property {import('./months.js').Month} activeMonth
 * @property {Scene} activeScene
 * @property {Scenario | null} activeScenario
 * @property {import('./views.js').View} activeView
 * @property {number} activeYear
 * @property {import('./cities.js').Cities} cities
 * @property {import('./history.js').HistoryEntries} history
 * @property {string} playername
 * @property {number} playermoney
 * @property {import('./show-tutorial.js').ShowTutorial} showTutorial
 * @property {import('./ships.js').Ships} ships
 * @property {import('./ships.js').ShipTypes} shipTypes
 * @property {import('./wares.js').Wares} wares
*/

/** @type {State} */
export const initialState = {
  activeCity: 'Lübeck',
  activeColor: 'system',
  activeScene: 'title-section',
  activeScenario: null,
  activeView: 'story',
  activeMonth: '1',
  activeYear: 1250,
  cities,
  wares,
  ships,
  shipTypes,
  history,
  showTutorial,
  playername: '',
  playermoney: 100
}
