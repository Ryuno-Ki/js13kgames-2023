/**
 * Helper function to deep clone an HTMLElement.
 *
 * @argument {HTMLElement} el
 * @returns {HTMLElement}
 */
export function clone (el) {
  return /** @type {HTMLElement} */(el.cloneNode(true))
}
