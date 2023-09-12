/**
 * @typedef {'Danzig' | 'Greifswald' | 'Hamburg' | 'Kiel' | 'Königsberg' | 'Kopenhagen' | 'Lübeck' | 'Malmö' | 'Nowgorod' | 'Reval' | 'Riga' | 'Rostock' | 'Stockholm' | 'Turku' | 'Visby' | 'Wismar'} CityName
 */

/**
 * @typedef {Record<CityName, number>} CityDistance
 */

/**
 * @typedef {object} CityDemand
 * @property {import('./wares.js').Ware} ware
 * @property {number} quantity
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
 * @typedef {object} CitySupply
 * @property {import('./wares.js').Ware} ware
 * @property {number} quantity
 */

/**
 * @typedef {object} WarehouseStock
 * @property {import('./wares.js').Ware} ware
 * @property {number} quantity
 */

/**
 * @typedef {object} Warehouse
 * @property {'1' | '2' | '3' | '4'} level
 * @property {boolean} hasScribe
 * @property {Array<WarehouseStock>} stock
 */

/**
 * @typedef {Array<City>} Cities
 */

/** @type {Cities} */
export const cities = [{
  name: 'Danzig',
  distances: {
    // Hooray to TypeScript!
    Danzig: 0,
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
    Turku: 4, // against current
    Visby: 3, // with current
    Wismar: 2 // with current
  },
  isFounded: true,
  demand: [],
  supply: [],
  warehouse: {
    hasScribe: false,
    level: '1',
    stock: []
  }
}, {
  name: 'Greifswald',
  distances: {
    Danzig: 4, // against current
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
    Turku: 6, // against current
    Visby: 6, // against current
    Wismar: 1 // with current
  },
  isFounded: false,
  demand: [],
  supply: [{
    ware: 'wood',
    quantity: 80
  }],
  warehouse: {
    hasScribe: false,
    level: '1',
    stock: []
  }
}, {
  name: 'Hamburg',
  distances: {
    Danzig: -1,
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
    Turku: -1,
    Visby: -1,
    Wismar: -1
  },
  isFounded: true,
  demand: [],
  supply: [{
    ware: 'crop',
    quantity: 100
  }],
  warehouse: {
    hasScribe: false,
    level: '1',
    stock: []
  }
}, {
  name: 'Kiel',
  distances: {
    Danzig: 4, // againt current
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
    Turku: 8, // against current
    Visby: 6, // against current
    Wismar: 1 // against current
  },
  isFounded: false,
  demand: [],
  supply: [],
  warehouse: {
    hasScribe: false,
    level: '1',
    stock: []
  }
}, {
  name: 'Königsberg',
  distances: {
    Danzig: 1, // with current
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
    Turku: 4, // against current
    Visby: 3, // with current
    Wismar: 2 // with current
  },
  isFounded: false,
  demand: [],
  supply: [],
  warehouse: {
    hasScribe: false,
    level: '1',
    stock: []
  }
}, {
  name: 'Kopenhagen',
  distances: {
    Danzig: 4, // against current
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
    Turku: 8, // against current
    Visby: 6, // against current
    Wismar: 2 // against current
  },
  isFounded: true,
  demand: [],
  supply: [],
  warehouse: {
    hasScribe: false,
    level: '1',
    stock: []
  }
}, {
  name: 'Lübeck',
  distances: {
    Danzig: 4, // against current
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
  }],
  warehouse: {
    hasScribe: false,
    level: '1',
    stock: []
  }
}, {
  name: 'Malmö',
  distances: {
    Danzig: 4, // against current
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
    Turku: 8, // against current
    Visby: 6, // against current
    Wismar: 2 // against current
  },
  isFounded: true,
  demand: [{
    ware: 'salt',
    quantity: 100
  }],
  supply: [{
    ware: 'sprats',
    quantity: 50
  }],
  warehouse: {
    hasScribe: false,
    level: '1',
    stock: []
  }
}, {
  name: 'Nowgorod',
  distances: {
    Danzig: 3, // with current
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
    Turku: 1, // with current
    Visby: 2, // with current
    Wismar: 4 // with current
  },
  isFounded: true,
  demand: [],
  supply: [],
  warehouse: {
    hasScribe: false,
    level: '1',
    stock: []
  }
}, {
  name: 'Reval',
  distances: {
    Danzig: 2, // with current
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
    Turku: 1, // with current
    Visby: 1, // with current
    Wismar: 4 // with current
  },
  isFounded: false,
  demand: [],
  supply: [],
  warehouse: {
    hasScribe: false,
    level: '1',
    stock: []
  }
}, {
  name: 'Riga',
  distances: {
    Danzig: 2, // with current
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
    Turku: 2, // against current
    Visby: 1, // with current
    Wismar: 3 // with current
  },
  isFounded: false,
  demand: [],
  supply: [],
  warehouse: {
    hasScribe: false,
    level: '1',
    stock: []
  }
}, {
  name: 'Rostock',
  distances: {
    Danzig: 4, // against current
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
    Turku: 8, // against current
    Visby: 6, // against current
    Wismar: 2 // against current
  },
  isFounded: true,
  demand: [],
  supply: [{
    ware: 'beer',
    quantity: 50
  }],
  warehouse: {
    hasScribe: false,
    level: '1',
    stock: []
  }
}, {
  name: 'Stockholm',
  distances: {
    Danzig: 2, // with current
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
    Turku: 2, // against current
    Visby: 1, // with current
    Wismar: 3 // with current
  },
  isFounded: false,
  demand: [],
  supply: [],
  warehouse: {
    hasScribe: false,
    level: '1',
    stock: []
  }
}, {
  name: 'Turku',
  distances: {
    Danzig: 2, // with current
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
    // Hooray to TypeScript!
    Turku: 0,
    Visby: 1, // with current
    Wismar: 3 // with current
  },
  isFounded: false,
  demand: [],
  supply: [],
  warehouse: {
    hasScribe: false,
    level: '1',
    stock: []
  }
}, {
  name: 'Visby',
  distances: {
    Danzig: 6, // against current
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
    Turku: 2, // against current
    // Hooray to TypeScript!
    Visby: 0,
    Wismar: 3 // with current
  },
  isFounded: true,
  demand: [],
  supply: [],
  warehouse: {
    hasScribe: false,
    level: '1',
    stock: []
  }
}, {
  name: 'Wismar',
  distances: {
    Danzig: 4, // against current
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
  }],
  warehouse: {
    hasScribe: false,
    level: '1',
    stock: []
  }
}]
