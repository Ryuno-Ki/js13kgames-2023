/**
 * Helper function to read the data attribute from an element.
 *
 * @argument {HTMLElement} el
 * @argument {string} name
 * @returns {string}
 */
export function attr (el, name) {
  return el.getAttribute(`data-${name}`) || ''
}
