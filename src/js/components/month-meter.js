import { el } from './el.js'

/**
 * Component to display the current month in a year.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function monthMeter (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true))
  element.innerHTML = ''

  const month = /** @type {import('../state/initial-state.js').Month} */(element.getAttribute('data-month'))
  const activeMonth = /** @type {import('../state/initial-state.js').Month} */(element.getAttribute('data-active-month'))

  element.appendChild(el('div', [], {}, '', [
    ['meter', [], { min: 0, max: 11, value: activeMonth }],
    ['div', [], {}, month, [
      ['button', [], { type: 'button', 'data-action': 'next-month' }, 'Next month']
    ]]
  ]))

  return element
}
