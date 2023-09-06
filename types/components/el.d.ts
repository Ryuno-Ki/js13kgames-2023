/**
 * Helper function to generate DOM elements from a data structure.
 *
 * The last argument is basically arguments of this function.
 *
 * @argument {string} name
 * @argument {Array<string>} classList
 * @argument {Object<string, *>} attributes
 * @argument {string} text
 * @argument {Array<*>} children
 * @returns {HTMLElement | SVGElement}
 */
export function el(name: string, classList?: Array<string>, attributes?: {
    [x: string]: any;
}, text?: string, children?: Array<any>): HTMLElement | SVGElement;
/**
 * Turn coordinates to a SVG path d value.
 *
 * @argument {Array<Array<number>>} coordinates
 * @returns {string}
 */
export function mapCoordinatesToPath(coordinates: Array<Array<number>>): string;
