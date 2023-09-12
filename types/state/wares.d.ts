/**
 * @typedef {'beer' | 'honey' | 'salt' | 'sprats' | 'wool'} Ware
 */
/**
 * @typedef {Record<Ware, number>} Wares
 */
/** @type {Wares} */
export const wares: Wares;
export type Ware = 'beer' | 'honey' | 'salt' | 'sprats' | 'wool';
export type Wares = Record<Ware, number>;
