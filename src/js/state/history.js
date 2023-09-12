/**
 * @typedef {object} CityFounded
 * @property {import('./months.js').Month} month
 * @property {number} year
 * @property {import('./cities.js').CityName} city
 */

/**
 * @typedef {object} ShipTypeIntroduced
 * @property {import('./months.js').Month} month
 * @property {number} year
 * @property {object} ship
 * @property {import('./ships.js').ShipType} ship.type
 * @property {number} ship.costs
 * @property {number} ship.maxFreightWeight
 */

/**
 * @typedef {CityFounded | ShipTypeIntroduced} HistoryEntry
 */

/**
 * @typedef {Array<HistoryEntry>} HistoryEntries
 */

/** @type {HistoryEntries} */
export const history = [{
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
  year: 1241,
  month: '6',
  city: 'Greifswald'
}, {
  year: 1251,
  month: '8',
  ship: {
    type: 'cog',
    costs: 50,
    maxFreightWeight: 200
  }
}, {
  year: 1252,
  month: '3',
  city: 'Stockholm'
}, {
  year: 1283,
  month: '10',
  city: 'Königsberg'
}]

// 1282: Everyone knows the German merchants as Hanseatic League now
// Source: https://geschichte-s-h.de/sh-von-a-bis-z/h/hanse/
