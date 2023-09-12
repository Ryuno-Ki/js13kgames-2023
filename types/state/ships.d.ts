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
export const ships: Ships;
export type ShipCargo = {
    ware: import('./wares.js').Ware;
    quantity: number;
};
export type ShipItinerary = {
    from: import('./cities.js').CityName;
    to: import('./cities.js').CityName;
    month: import('./months.js').Month;
    year: number;
};
export type ShipType = 'cog' | 'nef';
export type Ship = {
    cargo: Array<ShipCargo>;
    costs: number;
    itinerary: ShipItinerary | null;
    maxFreightWeight: number;
    moored: boolean;
    name: string;
    position: import('./cities.js').CityName | null;
    type: ShipType;
};
export type Ships = Array<Ship>;
