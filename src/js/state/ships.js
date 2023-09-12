/**
 * @typedef {object} ShipCargo
 * @property {import('./wares.js').Ware} ware
 * @property {number} quantity
 */

/**
 * @typedef {object} ShipItinerary
 * @property {import('./cities.js').CityName} from
 * @property {import('./cities.js').CityName} to
 * @property {import('./months.js').Month} month
 * @property {number} year
 */

/**
 * @typedef {'cog' | 'nef'} ShipType
 */

/**
 * @typedef {object} Ship
 * @property {Array<ShipCargo>} cargo
 * @property {number} costs
 * @property {ShipItinerary | null} itinerary
 * @property {number} maxFreightWeight
 * @property {boolean} moored
 * @property {string} name
 * @property {import('./cities.js').CityName | null} position
 * @property {ShipType} type
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
  costs: 30,
  cargo: [],
  maxFreightWeight: 100
}]
