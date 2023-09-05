import { el } from './el.js'

/**
 * Component to display your warehouse in a city.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function warehouse (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true))
  element.innerHTML = ''

  element.appendChild(el('div', [], {}, '', [
    ['div', [], { 'data-component': 'tutorial' }]
  ]))

  return element
}
