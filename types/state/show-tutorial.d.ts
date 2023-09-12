/**
 * @typedef {Record<import('./views.js').View, boolean>} ShowTutorial
*/
/** @type {ShowTutorial} */
export const showTutorial: ShowTutorial;
export type ShowTutorial = Record<import('./views.js').View, boolean>;
