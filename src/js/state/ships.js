/**
 * @typedef {Record<import('./wares.js').Ware, number>} ShipCargo
 */

/**
 * @typedef {object} ShipItinerary
 * @property {import('./cities.js').CityName} from
 * @property {import('./cities.js').CityName} to
 * @property {import('./months.js').Month} month
 */

/**
 * @typedef {'cog' | 'nef'} ShipType
 */

/**
 * @typedef {object} ShipCharacteristics
 * @property {boolean} isKnown
 * @property {number} maxFreightWeight
 * @property {number} price
 * @property {number} upkeep
 */

/**
 * @typedef {Record<ShipType, ShipCharacteristics>} ShipTypes
 */

/**
 * @typedef {object} Ship
 * @property {string} name
 * @property {ShipType} type
 * @property {ShipCargo} cargo
 * @property {ShipItinerary | null} itinerary
 * @property {boolean} moored
 * @property {import('./cities.js').CityName | null} position
 */

/**
 * @typedef {Array<Ship>} Ships
 */

/** @type {Ships} */
export const ships = [{
  name: 'Marie',
  type: 'nef',
  position: 'Lübeck',
  moored: true,
  itinerary: null,
  cargo: {
    beer: 0,
    crop: 0,
    salt: 0,
    sprats: 0,
    wax: 0,
    wood: 0
  }
}]

/** @type {ShipTypes} */
export const shipTypes = {
  nef: {
    isKnown: true,
    maxFreightWeight: 100,
    price: 5000,
    upkeep: 30
  },
  cog: {
    isKnown: false,
    maxFreightWeight: 200,
    price: 10000,
    upkeep: 50
  }
}
