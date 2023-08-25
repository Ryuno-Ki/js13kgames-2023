/**
 * @typedef {'honey' | 'salt' | 'wool'} Ware
 */
/**
 * @typedef {object} CityDemand
 * @property {Ware} ware
 * @property {number} quantity
 */
/**
 * @typedef {object} CitySupply
 * @property {Ware} ware
 * @property {number} quantity
 */
/**
 * @typedef {'Lübeck' | 'Wismar'} CityName
 */
/**
 * @typedef {object} City
 * @property {CityName} name
 * @property {Array<CityDemand>} demand
 * @property {Array<CitySupply>} supply
 */
/**
 * @typedef {object} HistoryEntry
 * @todo Define properties
 */
/**
 * @typedef {object} Itinerary
 * @todo Add properties
 */
/**
 * @typedef { '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' } Month
 */
/**
 * @typedef {'about-section' | 'game-over-section' | 'level-section' | 'new-game-section' | 'settings-section' | 'title-section' | 'win-section' | 'world-section'} Scene
 * @todo Move to scenes components
 */
/**
 * @typedef {'About' | 'GameOver' | 'Level' | 'NewGame' | 'Settings' | 'Title' | 'Win' | 'World'} SceneName
 * @todo Move to scenes components
 */
/**
 * @typedef {object} SceneStateTargetMapping
 * @property {SceneName} target
 */
/**
 * @typedef {object} SceneStateMapping
 * @property {Scene} component
 * @property {string} name
 * @property {Object.<string, SceneStateTargetMapping>} on
 */
/**
 * @typedef {object} Scenes
 * @property {string} id
 * @property {Scene} initial
 * @property {boolean} predictableActionArguments
 * @property {boolean} preserveActionOrder
 * @property {Object.<SceneName, SceneStateMapping>} states
 */
/**
 * @typedef {object} ShipCargo
 * @property {Ware} ware
 * @property {number} quantity
 */
/**
 * @typedef {'cog'} ShipType
 * @todo Define more ship types
 */
/**
 * @typedef {object} Ship
 * @property {Array<ShipCargo>} cargo
 * @property {number} costs
 * @property {number} maxFreightWeight
 * @property {boolean} moored
 * @property {string} name
 * @property {CityName | null} position
 * @property {ShipType} type
 */
/**
 * @typedef {'sea'} View
 * @todo Define all views
 */
/**
 * @typedef {object} State
 * @property {CityName | null} activeCity
 * @property {Month} activeMonth
 * @property {Scene} activeScene
 * @property {View} activeView
 * @property {number} activeYear
 * @property {Array<City>} cities
 * @property {Array<HistoryEntry>} history
 * @property {Array<Itinerary>} itineraries
 * @property {Scenes} scenes
 * @property {Array<Ship>} ships
 * @property {string} title
 * @property {number} volume
*/
/** @type {State} */
export const initialState: State;
export type Ware = 'honey' | 'salt' | 'wool';
export type CityDemand = {
    ware: Ware;
    quantity: number;
};
export type CitySupply = {
    ware: Ware;
    quantity: number;
};
export type CityName = 'Lübeck' | 'Wismar';
export type City = {
    name: CityName;
    demand: Array<CityDemand>;
    supply: Array<CitySupply>;
};
export type HistoryEntry = object;
export type Itinerary = object;
export type Month = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
export type Scene = 'about-section' | 'game-over-section' | 'level-section' | 'new-game-section' | 'settings-section' | 'title-section' | 'win-section' | 'world-section';
export type SceneName = 'About' | 'GameOver' | 'Level' | 'NewGame' | 'Settings' | 'Title' | 'Win' | 'World';
export type SceneStateTargetMapping = {
    target: SceneName;
};
export type SceneStateMapping = {
    component: Scene;
    name: string;
    on: {
        [x: string]: SceneStateTargetMapping;
    };
};
export type Scenes = {
    id: string;
    initial: Scene;
    predictableActionArguments: boolean;
    preserveActionOrder: boolean;
    states: any;
};
export type ShipCargo = {
    ware: Ware;
    quantity: number;
};
export type ShipType = 'cog';
export type Ship = {
    cargo: Array<ShipCargo>;
    costs: number;
    maxFreightWeight: number;
    moored: boolean;
    name: string;
    position: CityName | null;
    type: ShipType;
};
export type View = 'sea';
export type State = {
    activeCity: CityName | null;
    activeMonth: Month;
    activeScene: Scene;
    activeView: View;
    activeYear: number;
    cities: Array<City>;
    history: Array<HistoryEntry>;
    itineraries: Array<Itinerary>;
    scenes: Scenes;
    ships: Array<Ship>;
    title: string;
    volume: number;
};
