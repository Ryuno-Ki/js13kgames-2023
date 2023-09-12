/**
 * @typedef {'beer' | 'crop' | 'salt' | 'sprats' | 'wax' | 'wood'} Ware
 */
/**
 * @typedef {Record<Ware, number>} Wares
 */
/** @type {Wares} */
export const wares: Wares;
export type Ware = 'beer' | 'crop' | 'salt' | 'sprats' | 'wax' | 'wood';
export type Wares = Record<Ware, number>;
