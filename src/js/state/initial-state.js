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
 */

/**
 * @typedef { '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' } Month
 */

/**
 * @typedef {object} HistoryEntry
 * @property {CityName} city
 * @property {number} year
 * @property {Month} month
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
 * @property {Record<View, boolean>} showTutorial
 * @property {Array<Ship>} ships
 * @property {string} title
 * @property {number} volume
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
  cities: [{
    name: 'Danzig',
    distances: {
      // Hooray to TypeScript!
      Danzig: 0,
      Elbing: 1, // against current
      Greifswald: 2, // with current
      Hamburg: -1,
      Kiel: 2, // with current
      Kopenhagen: 2, // with current
      Königsberg: 1, // against current
      Lübeck: 2, // with current
      Malmö: 2, // with current
      Nowgorod: 6, // against current
      Reval: 4, // against current
      Riga: 4, // against current
      Rostock: 2, // with current
      Stockholm: 4, // against current
      Stralsund: 2, // with current
      Turku: 4, // against current
      Visby: 3, // with current
      Wismar: 2 // with current
    },
    isFounded: true,
    demand: [],
    supply: []
  }, {
    name: 'Elbing',
    distances: {
      Danzig: 1, // with current
      // Hooray to TypeScript!
      Elbing: 0,
      Greifswald: 2, // with current
      Hamburg: -1,
      Kiel: 2, // with current
      Königsberg: 1, // with current
      Kopenhagen: 2, // with current
      Lübeck: 2, // with current
      Malmö: 2, // with current
      Nowgorod: 6, // against current
      Reval: 4, // against current
      Riga: 4, // against current
      Rostock: 2, // with current
      Stockholm: 4, // against current
      Stralsund: 2, // with current
      Turku: 4, // against current
      Visby: 3, // with current
      Wismar: 4 // with current
    },
    isFounded: false,
    demand: [],
    supply: []
  }, {
    name: 'Greifswald',
    distances: {
      Danzig: 4, // against current
      Elbing: 4, // against current
      // Hooray to TypeScript!
      Greifswald: 0,
      Hamburg: -1,
      Kiel: 1, // with current
      Königsberg: 4, // against current
      Kopenhagen: 1, // with current
      Lübeck: 1, // with current
      Malmö: 1, // with current
      Nowgorod: 8, // against current
      Reval: 8, // against current
      Riga: 6, // against current
      Rostock: 1, // with current
      Stockholm: 6, // against current
      Stralsund: 1, // with current
      Turku: 6, // against current
      Visby: 6, // against current
      Wismar: 1 // with current
    },
    isFounded: false,
    demand: [],
    supply: []
  }, {
    name: 'Hamburg',
    distances: {
      Danzig: -1,
      Elbing: -1,
      Greifswald: -1,
      // Hooray to TypeScript!
      Hamburg: 0,
      Kiel: -1,
      Königsberg: -1,
      Kopenhagen: -1,
      Lübeck: 1, // land only
      Malmö: -1,
      Nowgorod: -1,
      Reval: -1,
      Riga: -1,
      Rostock: -1,
      Stockholm: -1,
      Stralsund: -1,
      Turku: -1,
      Visby: -1,
      Wismar: -1
    },
    isFounded: true,
    demand: [],
    supply: []
  }, {
    name: 'Kiel',
    distances: {
      Danzig: 4, // againt current
      Elbing: 4, // against current
      Greifswald: 2, // against current
      Hamburg: -1,
      // Hooray to TypeScript!
      Kiel: 0,
      Königsberg: 4, // against current
      Kopenhagen: 1, // with current
      Lübeck: 1, // against current
      Malmö: 1, // with current
      Nowgorod: 8, // against current
      Reval: 8, // against current
      Riga: 6, // against current
      Rostock: 1, // against current
      Stockholm: 6, // against current
      Stralsund: 1, // against current
      Turku: 8, // against current
      Visby: 6, // against current
      Wismar: 1 // against current
    },
    isFounded: false,
    demand: [],
    supply: []
  }, {
    name: 'Königsberg',
    distances: {
      Danzig: 1, // with current
      Elbing: 1, // against current
      Greifswald: 2, // with current
      Hamburg: -1,
      Kiel: 2, // with current
      // Hooray to TypeScript!
      Königsberg: 0,
      Kopenhagen: 2, // with current
      Lübeck: 2, // with current
      Malmö: 2, // with current
      Nowgorod: 6, // against current
      Reval: 4, // against current
      Riga: 4, // against current
      Rostock: 2, // with current
      Stockholm: 4, // against current
      Stralsund: 2, // with current
      Turku: 4, // against current
      Visby: 3, // with current
      Wismar: 2 // with current
    },
    isFounded: false,
    demand: [],
    supply: []
  }, {
    name: 'Kopenhagen',
    distances: {
      Danzig: 4, // against current
      Elbing: 4, // against current
      Greifswald: 2, // against current
      Hamburg: -1,
      Königsberg: 4, // against current
      // Hooray to TypeScript!
      Kopenhagen: 0,
      Kiel: 2, // against current
      Lübeck: 2, // against current
      Malmö: 1, // with current
      Nowgorod: 8, // against current
      Reval: 8, // against current
      Riga: 6, // against current
      Rostock: 2, // against current
      Stockholm: 6, // against current
      Stralsund: 2, // against current
      Turku: 8, // against current
      Visby: 6, // against current
      Wismar: 2 // against current
    },
    isFounded: true,
    demand: [],
    supply: []
  }, {
    name: 'Lübeck',
    distances: {
      Danzig: 4, // against current
      Elbing: 4, // against current
      Greifswald: 2, // against current
      Hamburg: 1, // land only
      Kiel: 1, // with current
      Königsberg: 4, // against current
      Kopenhagen: 1, // with current
      // Hooray to TypeScript!
      Lübeck: 0,
      Malmö: 1, // with current
      Nowgorod: 8, // against current
      Reval: 8, // against current
      Riga: 6, // against current
      Rostock: 2, // against current
      Stockholm: 6, // against current
      Stralsund: 2, // against current
      Turku: 8, // against current
      Visby: 6, // against current
      Wismar: 2 // against current
    },
    isFounded: true,
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
    name: 'Malmö',
    distances: {
      Danzig: 4, // against current
      Elbing: 4, // against current
      Greifswald: 2, // against current
      Hamburg: -1,
      Kiel: 2, // against current
      Königsberg: 4, // against current
      Kopenhagen: 1, // with current
      Lübeck: 2, // against current
      // Hooray to TypeScript!
      Malmö: 0,
      Nowgorod: 8, // against current
      Reval: 8, // against current
      Riga: 6, // against current
      Rostock: 2, // against current
      Stockholm: 6, // against current
      Stralsund: 2, // against current
      Turku: 8, // against current
      Visby: 6, // against current
      Wismar: 2 // against current
    },
    isFounded: true,
    demand: [],
    supply: []
  }, {
    name: 'Nowgorod',
    distances: {
      Danzig: 3, // with current
      Elbing: 3, // with current
      Greifswald: 4, // with current
      Hamburg: -1,
      Kiel: 4, // with current
      Königsberg: 3, // with current
      Kopenhagen: 4, // with current
      Lübeck: 4, // with current
      Malmö: 4, // with current
      // Hooray to TypeScript!
      Nowgorod: 0,
      Reval: 1, // with current
      Riga: 2, // with current
      Rostock: 4, // with current
      Stockholm: 2, // with current
      Stralsund: 4, // with current
      Turku: 1, // with current
      Visby: 2, // with current
      Wismar: 4 // with current
    },
    isFounded: true,
    demand: [],
    supply: []
  }, {
    name: 'Reval',
    distances: {
      Danzig: 2, // with current
      Elbing: 2, // with current
      Greifswald: 4, // with current
      Hamburg: -1,
      Kiel: 4, // with current
      Königsberg: 2, // with current
      Kopenhagen: 4, // with current
      Lübeck: 4, // with current
      Malmö: 4, // with current
      Nowgorod: 1, // against current
      // Hooray to TypeScript!
      Reval: 0,
      Riga: 1, // with current
      Rostock: 4, // with current
      Stockholm: 1, // with current
      Stralsund: 4, // with current
      Turku: 1, // with current
      Visby: 1, // with current
      Wismar: 4 // with current
    },
    isFounded: false,
    demand: [],
    supply: []
  }, {
    name: 'Riga',
    distances: {
      Danzig: 2, // with current
      Elbing: 2, // with current
      Greifswald: 3, // with current
      Hamburg: -1,
      Kiel: 3, // with current
      Königsberg: 2, // with current
      Kopenhagen: 3, // with current
      Lübeck: 3, // with current
      Malmö: 3, // with current
      Nowgorod: 4, // against current
      Reval: 2, // against current
      // Hooray to TypeScript!
      Riga: 0,
      Rostock: 3, // with current
      Stockholm: 2, // with current
      Stralsund: 3, // with current
      Turku: 2, // against current
      Visby: 1, // with current
      Wismar: 3 // with current
    },
    isFounded: false,
    demand: [],
    supply: []
  }, {
    name: 'Rostock',
    distances: {
      Danzig: 4, // against current
      Elbing: 4, // against current
      Greifswald: 1, // against current
      Hamburg: -1,
      Kiel: 1, // with current
      Kopenhagen: 1, // with current
      Königsberg: 4, // against current
      Lübeck: 1, // with current
      Malmö: 1, // with current
      Nowgorod: 8, // against current
      Reval: 8, // against current
      Riga: 6, // against current
      // Hooray to TypeScript!
      Rostock: 0,
      Stockholm: 6, // against current
      Stralsund: 1, // against current
      Turku: 8, // against current
      Visby: 6, // against current
      Wismar: 2 // against current
    },
    isFounded: true,
    demand: [],
    supply: []
  }, {
    name: 'Stockholm',
    distances: {
      Danzig: 2, // with current
      Elbing: 2, // with current
      Greifswald: 3, // with current
      Hamburg: -1,
      Kiel: 3, // with current
      Königsberg: 2, // with current
      Kopenhagen: 3, // with current
      Lübeck: 3, // with current
      Malmö: 3, // with current
      Nowgorod: 4, // against current
      Reval: 2, // against current
      Riga: 4, // against current
      Rostock: 3, // with current
      // Hooray to TypeScript!
      Stockholm: 0,
      Stralsund: 3, // with current
      Turku: 2, // against current
      Visby: 1, // with current
      Wismar: 3 // with current
    },
    isFounded: false,
    demand: [],
    supply: []
  }, {
    name: 'Stralsund',
    distances: {
      Danzig: 4, // against current
      Elbing: 4, // against current
      Greifswald: 1, // against current
      Hamburg: -1,
      Kiel: 1, // with current
      Königsberg: 4, // against current
      Kopenhagen: 1, // with current
      Lübeck: 1, // with current
      Malmö: 1, // with current
      Nowgorod: 8, // against current
      Reval: 8, // against current
      Riga: 6, // against current
      Rostock: 1, // with current
      Stockholm: 6, // against current
      // Hooray to TypeScript!
      Stralsund: 0,
      Turku: 8, // against current
      Visby: 6, // against current
      Wismar: 1 // with current
    },
    isFounded: false,
    demand: [],
    supply: []
  }, {
    name: 'Turku',
    distances: {
      Danzig: 2, // with current
      Elbing: 2, // with current
      Greifswald: 3, // with current
      Hamburg: -1,
      Kiel: 4, // with current
      Königsberg: 2, // with current
      Kopenhagen: 4, // with current
      Lübeck: 4, // with current
      Malmö: 4, // with current
      Nowgorod: 2, // against current
      Reval: 2, // against current
      Riga: 1, // with current
      Rostock: 4, // with current
      Stockholm: 1, // with current
      Stralsund: 4, // with current
      // Hooray to TypeScript!
      Turku: 0,
      Visby: 1, // with current
      Wismar: 3 // with current
    },
    isFounded: false,
    demand: [],
    supply: []
  }, {
    name: 'Visby',
    distances: {
      Danzig: 6, // against current
      Elbing: 6, // against current
      Greifswald: 3, // with current
      Hamburg: -1,
      Kiel: 3, // with current
      Königsberg: 6, // against current
      Kopenhagen: 3, // with current
      Lübeck: 3, // with current
      Malmö: 3, // with current
      Nowgorod: 4, // against current
      Reval: 2, // against current
      Riga: 2, // against current
      Rostock: 3, // with current
      Stockholm: 6, // against current
      Stralsund: 3, // with current
      Turku: 2, // against current
      // Hooray to TypeScript!
      Visby: 0,
      Wismar: 3 // with current
    },
    isFounded: true,
    demand: [],
    supply: []
  }, {
    name: 'Wismar',
    distances: {
      Danzig: 4, // against current
      Elbing: 4, // against current
      Greifswald: 1, // against current
      Hamburg: -1,
      Kiel: 1, // with current
      Königsberg: 4, // against current
      Kopenhagen: 1, // with current
      Lübeck: 1, // with current
      Malmö: 1, // with current
      Nowgorod: 8, // against current
      Reval: 8, // against current
      Riga: 6, // against current
      Rostock: 1, // with current
      Stockholm: 6, // against current
      Stralsund: 1, // against current
      Turku: 6, // against current
      Visby: 6, // against current
      // Hooray to TypeScript!
      Wismar: 0
    },
    isFounded: true,
    demand: [{
      ware: 'honey',
      quantity: 10
    }, {
      ware: 'salt',
      quantity: 5
    }],
    supply: [{
      ware: 'salt',
      quantity: 8
    }, {
      ware: 'wool',
      quantity: 4
    }]
  }],
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
  history: [{
    year: 1201,
    month: '6',
    city: 'Riga'
  }, {
    year: 1229,
    month: '7',
    city: 'Turku'
  }, {
    year: 1230,
    month: '8',
    city: 'Reval'
  }, {
    year: 1233,
    month: '4',
    city: 'Kiel'
  }, {
    year: 1234,
    month: '3',
    city: 'Stralsund'
  }, {
    year: 1237,
    month: '5',
    city: 'Elbing'
  }, {
    year: 1241,
    month: '6',
    city: 'Greifswald'
  }, {
    year: 1252,
    month: '3',
    city: 'Stockholm'
  }, {
    year: 1283,
    month: '10',
    city: 'Königsberg'
  }],
  showTutorial: {
    docks: false,
    market: false,
    sea: false,
    story: true,
    warehouse: false
  },
  playername: '',
  title: '',
  volume: 0
}
