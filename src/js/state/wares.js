/**
 * @typedef {'beer' | 'crop' | 'salt' | 'sprats' | 'wax' | 'wood'} Ware
 */

/**
 * @typedef {Record<Ware, number>} Wares
 */

/** @type {Wares} */
export const wares = {
  beer: 30,
  crop: 10,
  salt: 30,
  sprats: 40,
  wax: 100,
  wood: 5
}
