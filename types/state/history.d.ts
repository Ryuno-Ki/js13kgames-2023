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
 * @property {import('./ships.js').ShipType} shipType
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
    shipType: import('./ships.js').ShipType;
};
export type HistoryEntry = CityFounded | ShipTypeIntroduced;
export type HistoryEntries = Array<HistoryEntry>;
