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
export const history: HistoryEntries;
export type CityFounded = {
    month: import('./months.js').Month;
    year: number;
    city: import('./cities.js').CityName;
};
export type ShipTypeIntroduced = {
    month: import('./months.js').Month;
    year: number;
    ship: {
        type: import('./ships.js').ShipType;
        costs: number;
        maxFreightWeight: number;
    };
};
export type HistoryEntry = CityFounded | ShipTypeIntroduced;
export type HistoryEntries = Array<HistoryEntry>;
