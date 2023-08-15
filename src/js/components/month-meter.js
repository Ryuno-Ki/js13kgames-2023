import { el } from './el.js'

export function monthMeter (targetElement, state) {
  const element = targetElement.cloneNode(true)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']
  const activeMonth = state.activeMonth - 1
  const month = `${months[activeMonth]} ${state.activeYear}`
  element.appendChild(el('div', [], {}, '', [
    ['meter', [], { min: 0, max: 11, value: activeMonth }],
    ['div', [], {}, month]
  ]))
  return element
}
