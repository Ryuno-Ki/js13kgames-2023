import { el } from './el.js'

export function monthMeter (targetElement, state) {
  const element = targetElement.cloneNode(true)
  const month = targetElement.getAttribute('data-month')
  const activeMonth = targetElement.getAttribute('data-active-month')

  element.innerHTML = ''
  element.appendChild(el('div', [], {}, '', [
    ['meter', [], { min: 0, max: 11, value: activeMonth }],
    ['div', [], {}, month, [
      ['button', [], { type: 'button', 'data-action': 'next-month' }, 'Next month']
    ]]
  ]))
  return element
}
