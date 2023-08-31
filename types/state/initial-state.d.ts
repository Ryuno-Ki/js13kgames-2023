/**
 * @typedef {'dark' | 'light' | 'system'} Color
 */
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
 * @typedef {Record<CityName, number>} CityDistance
 */
/**
 * @typedef {Record<CityName, CityDistance>} Distances
 */
/**
 * @typedef {object} HistoryEntry
 * @todo Define properties
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
 * @property {Record<string, SceneStateTargetMapping>} on
 */
/**
 * @typedef {object} Scenes
 * @property {string} id
 * @property {Scene} initial
 * @property {boolean} predictableActionArguments
 * @property {boolean} preserveActionOrder
 * @property {Record<SceneName, SceneStateMapping>} states
 */
/**
 * @typedef {object} ShipCargo
 * @property {Ware} ware
 * @property {number} quantity
 */
/**
 * @typedef {object} ShipItinerary
 * @property {CityName} from
 * @property {CityName} to
 * @property {Month} month
 * @property {number} year
 */
/**
 * @typedef {'cog'} ShipType
 * @todo Define more ship types
 */
/**
 * @typedef {object} Ship
 * @property {Array<ShipCargo>} cargo
 * @property {number} costs
 * @property {ShipItinerary | null} itinerary
 * @property {number} maxFreightWeight
 * @property {boolean} moored
 * @property {string} name
 * @property {CityName | null} position
 * @property {ShipType} type
 */
/**
 * @typedef {'city' | 'sea'} View
 */
/**
 * @typedef {object} State
 * @property {CityName | null} activeCity
 * @property {Color} activeColor
 * @property {Month} activeMonth
 * @property {Scene} activeScene
 * @property {View} activeView
 * @property {number} activeYear
 * @property {Array<City>} cities
 * @property {Distances} distances
 * @property {Array<HistoryEntry>} history
 * @property {string} playername
 * @property {Scenes} scenes
 * @property {Array<Ship>} ships
 * @property {string} title
 * @property {number} volume
*/
/** @type {State} */
export const initialState: State;
export type Color = 'dark' | 'light' | 'system';
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
export type CityDistance = Record<CityName, number>;
export type Distances = Record<CityName, CityDistance>;
export type HistoryEntry = object;
export type Month = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
export type Scene = 'about-section' | 'game-over-section' | 'level-section' | 'new-game-section' | 'settings-section' | 'title-section' | 'win-section' | 'world-section';
export type SceneName = 'About' | 'GameOver' | 'Level' | 'NewGame' | 'Settings' | 'Title' | 'Win' | 'World';
export type SceneStateTargetMapping = {
    target: SceneName;
};
export type SceneStateMapping = {
    component: Scene;
    name: string;
    on: Record<string, SceneStateTargetMapping>;
};
export type Scenes = {
    id: string;
    initial: Scene;
    predictableActionArguments: boolean;
    preserveActionOrder: boolean;
    states: Record<SceneName, SceneStateMapping>;
};
export type ShipCargo = {
    ware: Ware;
    quantity: number;
};
export type ShipItinerary = {
    from: CityName;
    to: CityName;
    month: Month;
    year: number;
};
export type ShipType = 'cog';
export type Ship = {
    cargo: Array<ShipCargo>;
    costs: number;
    itinerary: ShipItinerary | null;
    maxFreightWeight: number;
    moored: boolean;
    name: string;
    position: CityName | null;
    type: ShipType;
};
export type View = 'city' | 'sea';
export type State = {
    activeCity: CityName | null;
    activeColor: Color;
    activeMonth: Month;
    activeScene: Scene;
    activeView: View;
    activeYear: number;
    cities: Array<City>;
    distances: Distances;
    history: Array<HistoryEntry>;
    playername: string;
    scenes: Scenes;
    ships: Array<Ship>;
    title: string;
    volume: number;
};
