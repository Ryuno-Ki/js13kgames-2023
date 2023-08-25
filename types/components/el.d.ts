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
 */
export function el(name: string, classList?: Array<string>, attributes?: {
    [x: string]: any;
}, text?: string, children?: Array<any>): HTMLElement;
