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
export const cities: Cities;
export type CityName = 'Danzig' | 'Greifswald' | 'Hamburg' | 'Kiel' | 'Königsberg' | 'Kopenhagen' | 'Lübeck' | 'Malmö' | 'Nowgorod' | 'Reval' | 'Riga' | 'Rostock' | 'Stockholm' | 'Turku' | 'Visby' | 'Wismar';
export type CityDistance = Record<CityName, number>;
export type CityDemand = {
    ware: import('./wares.js').Ware;
    quantity: number;
};
export type City = {
    name: CityName;
    distances: CityDistance;
    isFounded: boolean;
    demand: Array<CityDemand>;
    supply: Array<CitySupply>;
    warehouse: Warehouse;
};
export type CitySupply = {
    ware: import('./wares.js').Ware;
    quantity: number;
};
export type WarehouseStock = {
    ware: import('./wares.js').Ware;
    quantity: number;
};
export type Warehouse = {
    level: '1' | '2' | '3' | '4';
    hasScribe: boolean;
    stock: Array<WarehouseStock>;
};
export type Cities = Array<City>;
