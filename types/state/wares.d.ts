/**
 * @typedef {'honey' | 'salt' | 'wool'} Ware
 */
/**
 * @typedef {Record<Ware, number>} Wares
 */
/** @type {Wares} */
export const wares: Wares;
export type Ware = 'honey' | 'salt' | 'wool';
export type Wares = Record<Ware, number>;
