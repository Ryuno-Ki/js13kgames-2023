import { el } from './el.js'

/**
 * Component to display the market in a city.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function market (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true))
  element.innerHTML = ''

  const city = state.cities.find((city) => city.name === state.activeCity)
  if (!city) {
    console.warn('Could not find city')
    return element
  }

  const type = /** @type {'demand' | 'supply'} */(element.getAttribute('data-type'))
  const wares = city[type] || []

  element.appendChild(el('div', [], {}, type, [
    ['div', [], { 'data-component': 'tutorial' }],
    ['fieldset', [], {}, '', [
      ['legend', [], {}, 'Buy'],
      ['ul', [], {}, '', wares.map((ware) => [
        'li', [], {}, '', [
          ['label', [], { for: ware.ware }, `${ware.ware}: ${ware.quantity}`],
          ['span', [], {}, '0'],
          ['input', [], { id: ware.ware, name: ware.ware, type: 'range', min: 0, max: ware.quantity, step: 1, value: 0, 'data-ware': ware.ware }],
          ['span', [], {}, ware.quantity]
        ]
      ])]
    ]],
    ['fieldset', [], {}, '', [
      ['legend', [], {}, 'Sell'],
      ['ul', [], {}, '']
    ]]
  ]))

  return element
}
