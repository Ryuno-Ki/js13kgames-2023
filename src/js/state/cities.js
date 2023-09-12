/**
 * @typedef {'Danzig' | 'Greifswald' | 'Hamburg' | 'Kiel' | 'Lübeck' | 'Malmö' | 'Nowgorod' | 'Reval' | 'Riga' | 'Rostock' | 'Turku' | 'Visby' | 'Wismar'} CityName
 */

/**
 * @typedef {Record<CityName, number>} CityDistance
 */

/**
 * @typedef {Record<import('./wares.js').Ware, number>} CityDemand
 */

/**
 * @typedef {Record<import('./wares.js').Ware, number>} CitySupply
 */

/**
 * @typedef {object} Warehouse
 * @property {'1' | '2' | '3' | '4'} level
 * @property {Record<import('./wares.js').Ware, number>} stock
 */

/**
 * @typedef {object} City
 * @property {CityName} name
 * @property {CityDistance} distances
 * @property {boolean} isFounded
 * @property {CityDemand} demand
 * @property {CitySupply} supply
 * @property {Warehouse} warehouse
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
    Lübeck: 2, // with current
    Malmö: 2, // with current
    Nowgorod: 6, // against current
    Reval: 4, // against current
    Riga: 4, // against current
    Rostock: 2, // with current
    Turku: 4, // against current
    Visby: 3, // with current
    Wismar: 2 // with current
  },
  isFounded: true,
  demand: {
    beer: 500,
    crop: 10000,
    salt: 0,
    sprats: 1000,
    wax: 0,
    wood: 0
  },
  supply: {
    beer: 0,
    crop: 0,
    salt: 0,
    sprats: 0,
    wax: 0,
    wood: 600
  },
  warehouse: {
    level: '1',
    stock: {
      beer: 0,
      crop: 0,
      salt: 0,
      sprats: 0,
      wax: 0,
      wood: 0
    }
  }
}, {
  name: 'Greifswald',
  distances: {
    Danzig: 4, // against current
    // Hooray to TypeScript!
    Greifswald: 0,
    Hamburg: -1,
    Kiel: 1, // with current
    Lübeck: 1, // with current
    Malmö: 1, // with current
    Nowgorod: 8, // against current
    Reval: 8, // against current
    Riga: 6, // against current
    Rostock: 1, // with current
    Turku: 6, // against current
    Visby: 6, // against current
    Wismar: 1 // with current
  },
  isFounded: false,
  demand: {
    beer: 200,
    crop: 100,
    salt: 1000,
    sprats: 5000,
    wax: 300,
    wood: 0
  },
  supply: {
    beer: 0,
    crop: 0,
    salt: 0,
    sprats: 0,
    wax: 0,
    wood: 80
  },
  warehouse: {
    level: '1',
    stock: {
      beer: 0,
      crop: 0,
      salt: 0,
      sprats: 0,
      wax: 0,
      wood: 0
    }
  }
}, {
  name: 'Hamburg',
  distances: {
    Danzig: -1,
    Greifswald: -1,
    // Hooray to TypeScript!
    Hamburg: 0,
    Kiel: -1,
    Lübeck: 1, // land only
    Malmö: -1,
    Nowgorod: -1,
    Reval: -1,
    Riga: -1,
    Rostock: -1,
    Turku: -1,
    Visby: -1,
    Wismar: -1
  },
  isFounded: true,
  demand: {
    beer: 0,
    crop: 0,
    salt: 0,
    sprats: 0,
    wax: 0,
    wood: 0
  },
  supply: {
    beer: 0,
    crop: 100,
    salt: 0,
    sprats: 0,
    wax: 0,
    wood: 0
  },
  warehouse: {
    level: '1',
    stock: {
      beer: 0,
      crop: 0,
      salt: 0,
      sprats: 0,
      wax: 0,
      wood: 0
    }
  }
}, {
  name: 'Kiel',
  distances: {
    Danzig: 4, // againt current
    Greifswald: 2, // against current
    Hamburg: -1,
    // Hooray to TypeScript!
    Kiel: 0,
    Lübeck: 1, // against current
    Malmö: 1, // with current
    Nowgorod: 8, // against current
    Reval: 8, // against current
    Riga: 6, // against current
    Rostock: 1, // against current
    Turku: 8, // against current
    Visby: 6, // against current
    Wismar: 1 // against current
  },
  isFounded: false,
  demand: {
    beer: 0,
    crop: 0,
    salt: 0,
    sprats: 0,
    wax: 0,
    wood: 0
  },
  supply: {
    beer: 0,
    crop: 0,
    salt: 0,
    sprats: 0,
    wax: 0,
    wood: 0
  },
  warehouse: {
    level: '1',
    stock: {
      beer: 0,
      crop: 0,
      salt: 0,
      sprats: 0,
      wax: 0,
      wood: 0
    }
  }
}, {
  name: 'Lübeck',
  distances: {
    Danzig: 4, // against current
    Greifswald: 2, // against current
    Hamburg: 1, // land only
    Kiel: 1, // with current
    // Hooray to TypeScript!
    Lübeck: 0,
    Malmö: 1, // with current
    Nowgorod: 8, // against current
    Reval: 8, // against current
    Riga: 6, // against current
    Rostock: 2, // against current
    Turku: 8, // against current
    Visby: 6, // against current
    Wismar: 2 // against current
  },
  isFounded: true,
  demand: {
    beer: 0,
    crop: 0,
    salt: 5,
    sprats: 0,
    wax: 0,
    wood: 0
  },
  supply: {
    beer: 0,
    crop: 0,
    salt: 2,
    sprats: 0,
    wax: 0,
    wood: 0
  },
  warehouse: {
    level: '1',
    stock: {
      beer: 0,
      crop: 0,
      salt: 0,
      sprats: 0,
      wax: 0,
      wood: 0
    }
  }
}, {
  name: 'Malmö',
  distances: {
    Danzig: 4, // against current
    Greifswald: 2, // against current
    Hamburg: -1,
    Kiel: 2, // against current
    Lübeck: 2, // against current
    // Hooray to TypeScript!
    Malmö: 0,
    Nowgorod: 8, // against current
    Reval: 8, // against current
    Riga: 6, // against current
    Rostock: 2, // against current
    Turku: 8, // against current
    Visby: 6, // against current
    Wismar: 2 // against current
  },
  isFounded: true,
  demand: {
    beer: 0,
    crop: 0,
    salt: 100,
    sprats: 0,
    wax: 0,
    wood: 0
  },
  supply: {
    beer: 0,
    crop: 0,
    salt: 0,
    sprats: 50,
    wax: 0,
    wood: 0
  },
  warehouse: {
    level: '1',
    stock: {
      beer: 0,
      crop: 0,
      salt: 0,
      sprats: 0,
      wax: 0,
      wood: 0
    }
  }
}, {
  name: 'Nowgorod',
  distances: {
    Danzig: 3, // with current
    Greifswald: 4, // with current
    Hamburg: -1,
    Kiel: 4, // with current
    Lübeck: 4, // with current
    Malmö: 4, // with current
    // Hooray to TypeScript!
    Nowgorod: 0,
    Reval: 1, // with current
    Riga: 2, // with current
    Rostock: 4, // with current
    Turku: 1, // with current
    Visby: 2, // with current
    Wismar: 4 // with current
  },
  isFounded: true,
  demand: {
    beer: 0,
    crop: 0,
    salt: 0,
    sprats: 0,
    wax: 0,
    wood: 0
  },
  supply: {
    beer: 0,
    crop: 0,
    salt: 0,
    sprats: 0,
    wax: 0,
    wood: 0
  },
  warehouse: {
    level: '1',
    stock: {
      beer: 0,
      crop: 0,
      salt: 0,
      sprats: 0,
      wax: 0,
      wood: 0
    }
  }
}, {
  name: 'Reval',
  distances: {
    Danzig: 2, // with current
    Greifswald: 4, // with current
    Hamburg: -1,
    Kiel: 4, // with current
    Lübeck: 4, // with current
    Malmö: 4, // with current
    Nowgorod: 1, // against current
    // Hooray to TypeScript!
    Reval: 0,
    Riga: 1, // with current
    Rostock: 4, // with current
    Turku: 1, // with current
    Visby: 1, // with current
    Wismar: 4 // with current
  },
  isFounded: false,
  demand: {
    beer: 0,
    crop: 0,
    salt: 0,
    sprats: 0,
    wax: 0,
    wood: 0
  },
  supply: {
    beer: 0,
    crop: 0,
    salt: 0,
    sprats: 0,
    wax: 0,
    wood: 0
  },
  warehouse: {
    level: '1',
    stock: {
      beer: 0,
      crop: 0,
      salt: 0,
      sprats: 0,
      wax: 0,
      wood: 0
    }
  }
}, {
  name: 'Riga',
  distances: {
    Danzig: 2, // with current
    Greifswald: 3, // with current
    Hamburg: -1,
    Kiel: 3, // with current
    Lübeck: 3, // with current
    Malmö: 3, // with current
    Nowgorod: 4, // against current
    Reval: 2, // against current
    // Hooray to TypeScript!
    Riga: 0,
    Rostock: 3, // with current
    Turku: 2, // against current
    Visby: 1, // with current
    Wismar: 3 // with current
  },
  isFounded: false,
  demand: {
    beer: 0,
    crop: 0,
    salt: 0,
    sprats: 0,
    wax: 0,
    wood: 0
  },
  supply: {
    beer: 0,
    crop: 0,
    salt: 0,
    sprats: 0,
    wax: 0,
    wood: 0
  },
  warehouse: {
    level: '1',
    stock: {
      beer: 0,
      crop: 0,
      salt: 0,
      sprats: 0,
      wax: 0,
      wood: 0
    }
  }
}, {
  name: 'Rostock',
  distances: {
    Danzig: 4, // against current
    Greifswald: 1, // against current
    Hamburg: -1,
    Kiel: 1, // with current
    Lübeck: 1, // with current
    Malmö: 1, // with current
    Nowgorod: 8, // against current
    Reval: 8, // against current
    Riga: 6, // against current
    // Hooray to TypeScript!
    Rostock: 0,
    Turku: 8, // against current
    Visby: 6, // against current
    Wismar: 2 // against current
  },
  isFounded: true,
  demand: {
    beer: 0,
    crop: 0,
    salt: 0,
    sprats: 0,
    wax: 0,
    wood: 0
  },
  supply: {
    beer: 50,
    crop: 0,
    salt: 0,
    sprats: 0,
    wax: 0,
    wood: 0
  },
  warehouse: {
    level: '1',
    stock: {
      beer: 0,
      crop: 0,
      salt: 0,
      sprats: 0,
      wax: 0,
      wood: 0
    }
  }
}, {
  name: 'Turku',
  distances: {
    Danzig: 2, // with current
    Greifswald: 3, // with current
    Hamburg: -1,
    Kiel: 4, // with current
    Lübeck: 4, // with current
    Malmö: 4, // with current
    Nowgorod: 2, // against current
    Reval: 2, // against current
    Riga: 1, // with current
    Rostock: 4, // with current
    // Hooray to TypeScript!
    Turku: 0,
    Visby: 1, // with current
    Wismar: 3 // with current
  },
  isFounded: false,
  demand: {
    beer: 0,
    crop: 0,
    salt: 0,
    sprats: 0,
    wax: 0,
    wood: 0
  },
  supply: {
    beer: 0,
    crop: 0,
    salt: 0,
    sprats: 0,
    wax: 0,
    wood: 0
  },
  warehouse: {
    level: '1',
    stock: {
      beer: 0,
      crop: 0,
      salt: 0,
      sprats: 0,
      wax: 0,
      wood: 0
    }
  }
}, {
  name: 'Visby',
  distances: {
    Danzig: 6, // against current
    Greifswald: 3, // with current
    Hamburg: -1,
    Kiel: 3, // with current
    Lübeck: 3, // with current
    Malmö: 3, // with current
    Nowgorod: 4, // against current
    Reval: 2, // against current
    Riga: 2, // against current
    Rostock: 3, // with current
    Turku: 2, // against current
    // Hooray to TypeScript!
    Visby: 0,
    Wismar: 3 // with current
  },
  isFounded: true,
  demand: {
    beer: 0,
    crop: 0,
    salt: 0,
    sprats: 0,
    wax: 0,
    wood: 0
  },
  supply: {
    beer: 0,
    crop: 0,
    salt: 0,
    sprats: 0,
    wax: 0,
    wood: 0
  },
  warehouse: {
    level: '1',
    stock: {
      beer: 0,
      crop: 0,
      salt: 0,
      sprats: 0,
      wax: 0,
      wood: 0
    }
  }
}, {
  name: 'Wismar',
  distances: {
    Danzig: 4, // against current
    Greifswald: 1, // against current
    Hamburg: -1,
    Kiel: 1, // with current
    Lübeck: 1, // with current
    Malmö: 1, // with current
    Nowgorod: 8, // against current
    Reval: 8, // against current
    Riga: 6, // against current
    Rostock: 1, // with current
    Turku: 6, // against current
    Visby: 6, // against current
    // Hooray to TypeScript!
    Wismar: 0
  },
  isFounded: true,
  demand: {
    beer: 0,
    crop: 0,
    salt: 5,
    sprats: 0,
    wax: 0,
    wood: 0
  },
  supply: {
    beer: 0,
    crop: 0,
    salt: 8,
    sprats: 0,
    wax: 0,
    wood: 0
  },
  warehouse: {
    level: '1',
    stock: {
      beer: 0,
      crop: 0,
      salt: 0,
      sprats: 0,
      wax: 0,
      wood: 0
    }
  }
}]
