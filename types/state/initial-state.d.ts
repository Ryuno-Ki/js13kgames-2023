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
 * @property {string} title
 * @property {number} volume
*/
/** @type {State} */
export const initialState: State;
export type Color = 'dark' | 'light' | 'system';
export type Scene = 'about-section' | 'game-over-section' | 'level-section' | 'load-game-section' | 'new-game-section' | 'settings-section' | 'title-section' | 'win-section' | 'world-section';
export type SceneName = 'About' | 'GameOver' | 'Level' | 'NewGame' | 'Settings' | 'Title' | 'Win' | 'World';
export type Scenario = 'free-play' | 'tutorial';
export type State = {
    activeCity: import('./cities.js').CityName;
    activeColor: Color;
    activeMonth: import('./months.js').Month;
    activeScene: Scene;
    activeScenario: Scenario | null;
    activeView: import('./views.js').View;
    activeYear: number;
    cities: import('./cities.js').Cities;
    history: import('./history.js').HistoryEntries;
    playername: string;
    playermoney: number;
    showTutorial: import('./show-tutorial.js').ShowTutorial;
    ships: import('./ships.js').Ships;
    shipTypes: import('./ships.js').ShipTypes;
    wares: import('./wares.js').Wares;
    title: string;
    volume: number;
};
