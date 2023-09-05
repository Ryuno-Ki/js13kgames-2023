import { el } from './el.js'

/**
 * Component to display the overview on a city.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function cityOverview (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true))

  const city = state.cities.find((city) => city.name === state.activeCity)
  if (!city) {
    console.warn('Could not find city')
    return element
  }

  element.innerHTML = ''

  element.appendChild(el('div', [], {}, '', [
    ['div', [], {}, city.name],
    ['div', [], { 'data-component': 'docks' }],
    ['div', [], { 'data-component': 'market', 'data-type': 'Supply', 'data-wares': JSON.stringify(city.supply) }],
    ['div', [], { 'data-component': 'market', 'data-type': 'Demand', 'data-wares': JSON.stringify(city.demand) }],
    ['button', [], { type: 'button', 'data-view': 'sea' }, 'See other city']
  ]))

  return element
}
