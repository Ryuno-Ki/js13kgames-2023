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
 * @property {Array<ShipCargo>} cargo
 * @property {ShipItinerary | null} itinerary
 * @property {boolean} moored
 * @property {import('./cities.js').CityName | null} position
 */
/**
 * @typedef {Array<Ship>} Ships
 */
/** @type {Ships} */
export const ships: Ships;
/** @type {ShipTypes} */
export const shipTypes: ShipTypes;
export type ShipCargo = {
    ware: import('./wares.js').Ware;
    quantity: number;
};
export type ShipItinerary = {
    from: import('./cities.js').CityName;
    to: import('./cities.js').CityName;
    month: import('./months.js').Month;
};
export type ShipType = 'cog' | 'nef';
export type ShipCharacteristics = {
    isKnown: boolean;
    maxFreightWeight: number;
    price: number;
    upkeep: number;
};
export type ShipTypes = Record<ShipType, ShipCharacteristics>;
export type Ship = {
    name: string;
    type: ShipType;
    cargo: Array<ShipCargo>;
    itinerary: ShipItinerary | null;
    moored: boolean;
    position: import('./cities.js').CityName | null;
};
export type Ships = Array<Ship>;
