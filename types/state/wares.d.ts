/**
 * @typedef {'beer' | 'crop' | 'honey' | 'salt' | 'sprats' | 'wood' | 'wool'} Ware
 */
/**
 * @typedef {Record<Ware, number>} Wares
 */
/** @type {Wares} */
export const wares: Wares;
export type Ware = 'beer' | 'crop' | 'honey' | 'salt' | 'sprats' | 'wood' | 'wool';
export type Wares = Record<Ware, number>;
