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

  const city = state.cities.find((city) => city.name === state.activeCity)
  if (!city) {
    console.warn('Could not find city')
    return element
  }

  element.appendChild(el('div', [], {}, '', [
    ['div', [], { 'data-component': 'tutorial' }],
    ['p', [], {}, 'This is your warehouse. Organise your activities here.'],
    ['ul', [], {}, '', city.warehouse.stock.map((ware) => [
      'li', [], {}, `${ware.ware} (${ware.quantity})`
    ])],
    ['button', [], { type: 'button', 'data-view': 'docks' }, 'To the docks'],
    ['button', [], { type: 'button', 'data-view': 'market' }, 'To the market'],
    ['button', [], { type: 'button', 'data-view': 'sea' }, 'To the sea map']
  ]))

  return element
}
