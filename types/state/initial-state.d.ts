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
 * @typedef {object} WarehouseStock
 * @property {Ware} ware
 * @property {number} quantity
 */
/**
 * @typedef {object} Warehouse
 * @property {'1' | '2' | '3' | '4'} level
 * @property {Array<WarehouseStock>} stock
 */
/**
 * @typedef {'Danzig' | 'Elbing' | 'Greifswald' | 'Hamburg' | 'Kiel' | 'Königsberg' | 'Kopenhagen' | 'Lübeck' | 'Malmö' | 'Nowgorod' | 'Reval' | 'Riga' | 'Rostock' | 'Stockholm' | 'Stralsund' | 'Turku' | 'Visby' | 'Wismar'} CityName
 */
/**
 * @typedef {Record<CityName, number>} CityDistance
 */
/**
 * @typedef {object} City
 * @property {CityName} name
 * @property {CityDistance} distances
 * @property {boolean} isFounded
 * @property {Array<CityDemand>} demand
 * @property {Array<CitySupply>} supply
 * @property {Warehouse} warehouse
 */
/**
 * @typedef { '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' } Month
 */
/**
 * @typedef {'cog' | 'nef'} ShipType
 */
/**
 * @typedef {object} ShipTypeIntroduced
 * @property {Month} month
 * @property {number} year
 * @property {object} ship
 * @property {ShipType} ship.type
 * @property {number} ship.costs
 * @property {number} ship.maxFreightWeight
 */
/**
 * @typedef {object} CityFounded
 * @property {Month} month
 * @property {number} year
 * @property {CityName} city
 */
/**
 * @typedef {CityFounded | ShipTypeIntroduced} HistoryEntry
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
 * @typedef {'docks' | 'market' | 'sea' | 'story' | 'warehouse'} View
 */
/**
 * @typedef {object} State
 * @property {CityName} activeCity
 * @property {Color} activeColor
 * @property {Month} activeMonth
 * @property {Scene} activeScene
 * @property {Scenario | null} activeScenario
 * @property {View} activeView
 * @property {number} activeYear
 * @property {Array<City>} cities
 * @property {Array<HistoryEntry>} history
 * @property {string} playername
 * @property {number} playermoney
 * @property {Record<View, boolean>} showTutorial
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
export type WarehouseStock = {
    ware: Ware;
    quantity: number;
};
export type Warehouse = {
    level: '1' | '2' | '3' | '4';
    stock: Array<WarehouseStock>;
};
export type CityName = 'Danzig' | 'Elbing' | 'Greifswald' | 'Hamburg' | 'Kiel' | 'Königsberg' | 'Kopenhagen' | 'Lübeck' | 'Malmö' | 'Nowgorod' | 'Reval' | 'Riga' | 'Rostock' | 'Stockholm' | 'Stralsund' | 'Turku' | 'Visby' | 'Wismar';
export type CityDistance = Record<CityName, number>;
export type City = {
    name: CityName;
    distances: CityDistance;
    isFounded: boolean;
    demand: Array<CityDemand>;
    supply: Array<CitySupply>;
    warehouse: Warehouse;
};
export type Month = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
export type ShipType = 'cog' | 'nef';
export type ShipTypeIntroduced = {
    month: Month;
    year: number;
    ship: {
        type: ShipType;
        costs: number;
        maxFreightWeight: number;
    };
};
export type CityFounded = {
    month: Month;
    year: number;
    city: CityName;
};
export type HistoryEntry = CityFounded | ShipTypeIntroduced;
export type Scene = 'about-section' | 'game-over-section' | 'level-section' | 'load-game-section' | 'new-game-section' | 'settings-section' | 'title-section' | 'win-section' | 'world-section';
export type SceneName = 'About' | 'GameOver' | 'Level' | 'NewGame' | 'Settings' | 'Title' | 'Win' | 'World';
export type Scenario = 'free-play' | 'tutorial';
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
export type View = 'docks' | 'market' | 'sea' | 'story' | 'warehouse';
export type State = {
    activeCity: CityName;
    activeColor: Color;
    activeMonth: Month;
    activeScene: Scene;
    activeScenario: Scenario | null;
    activeView: View;
    activeYear: number;
    cities: Array<City>;
    history: Array<HistoryEntry>;
    playername: string;
    playermoney: number;
    showTutorial: Record<View, boolean>;
    ships: Array<Ship>;
    title: string;
    volume: number;
};
