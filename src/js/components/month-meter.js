import { attr } from '../helpers/attr.js'
import { clone } from '../helpers/clone.js'
import { el } from './el.js'

/**
 * Component to display the current month in a year.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function monthMeter (targetElement, state) {
  const element = clone(targetElement)

  const month = /** @type {import('../state/months.js').Month} */(attr(element, 'month'))
  const activeMonth = /** @type {import('../state/months.js').Month} */(attr(element, 'active-month'))

  element.appendChild(el('div', ['status'], {}, '', [
    ['meter', [], { min: 0, max: 11, value: activeMonth }],
    ['div', [], {}, month, [
      ['button', [], { type: 'button', 'data-action': 'next-month' }, 'Next month']
    ]]
  ]))

  return element
}
