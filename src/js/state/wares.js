/**
 * @typedef {'beer' | 'crop' | 'salt' | 'sprats' | 'wax' | 'wood'} Ware
 */

/**
 * @typedef {Record<Ware, number>} Wares
 */

/** @type {Wares} */
export const wares = {
  beer: 20,
  crop: 10,
  salt: 80,
  sprats: 40,
  wax: 100,
  wood: 5
}
