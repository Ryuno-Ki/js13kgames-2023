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
export const cities: Cities;
export type CityName = 'Danzig' | 'Greifswald' | 'Hamburg' | 'Kiel' | 'Lübeck' | 'Malmö' | 'Nowgorod' | 'Reval' | 'Riga' | 'Rostock' | 'Turku' | 'Visby' | 'Wismar';
export type CityDistance = Record<CityName, number>;
export type CityDemand = Record<import('./wares.js').Ware, number>;
export type CitySupply = Record<import('./wares.js').Ware, number>;
export type Warehouse = {
    level: '1' | '2' | '3' | '4';
    stock: Record<import('./wares.js').Ware, number>;
};
export type City = {
    name: CityName;
    distances: CityDistance;
    isFounded: boolean;
    demand: CityDemand;
    supply: CitySupply;
    warehouse: Warehouse;
};
export type Cities = Array<City>;
