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
 * @property {Scenario | null} activeScenario
 * @property {View} activeView
 * @property {number} activeYear
 * @property {Array<City>} cities
 * @property {Distances} distances
 * @property {Array<HistoryEntry>} history
 * @property {string} playername
 * @property {Array<Ship>} ships
 * @property {string} title
 * @property {number} volume
*/

/** @type {State} */
export const initialState = {
  activeCity: null,
  activeColor: 'system',
  activeScene: 'title-section',
  activeScenario: null,
  activeView: 'sea',
  activeMonth: '1',
  activeYear: 1250,
  cities: [{
    name: 'Lübeck',
    demand: [{
      ware: 'honey',
      quantity: 10
    }, {
      ware: 'salt',
      quantity: 5
    }, {
      ware: 'wool',
      quantity: 3
    }],
    supply: [{
      ware: 'honey',
      quantity: 5
    }, {
      ware: 'salt',
      quantity: 2
    }, {
      ware: 'wool',
      quantity: 10
    }]
  }, {
    name: 'Wismar',
    demand: [{
      ware: 'honey',
      quantity: 10
    }, {
      ware: 'salt',
      quantity: 5
    }],
    // warehouse = Kontor
    supply: [{
      ware: 'salt',
      quantity: 8
    }, {
      ware: 'wool',
      quantity: 4
    }]
  }],
  distances: {
    Lübeck: {
      // Hooray to TypeScript!
      Lübeck: 0,
      Wismar: 2
    },
    Wismar: {
      Lübeck: 1,
      // Hooray to TypeScript!
      Wismar: 0
    }
  },
  ships: [{
    name: 'Marie',
    type: 'cog',
    position: 'Lübeck',
    moored: true,
    itinerary: null,
    costs: 5,
    cargo: [],
    // 80 - 200t
    maxFreightWeight: 10
    // speed: 3 - 6 kn = sea miles / hour.
    // 1 sea mile = 1852 m
  }],
  // Nef with 60 - 100t
  // evtl. auch Knorr
  history: [],
  playername: '',
  title: '',
  volume: 0
}
