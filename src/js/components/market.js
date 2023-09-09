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

  element.appendChild(el('div', [], {}, '', [
    ['div', [], { 'data-component': 'tutorial' }],
    ['fieldset', [], {}, '', [
      ['legend', [], {}, 'Buy'],
      ['ul', [], {}, '', city.supply.map((ware) => [
        'li', [], {}, '', [
          ['label', [], { for: `market-${ware.ware}` }, ware.ware],
          ['span', [], {}, '0'],
          ['input', [], {
            id: `market-${ware.ware}`,
            name: ware.ware,
            type: 'range',
            min: 0,
            max: ware.quantity,
            step: 1,
            value: 0,
            'data-buy': ware.ware,
            'data-city': city.name
          }],
          ['span', [], {}, ware.quantity]
        ]
      ])]
    ]],
    ['fieldset', [], {}, '', [
      ['legend', [], {}, 'Sell'],
      ['ul', [], {}, '', city.warehouse.stock.map((ware) => [
        'li', [], {}, '', [
          ['label', [], { for: `warehouse-${ware.ware}` }, ware.ware],
          ['span', [], {}, '0'],
          ['input', [], {
            id: `warehouse-${ware.ware}`,
            name: ware.ware,
            type: 'range',
            min: 0,
            max: ware.quantity,
            step: 1,
            value: 0,
            'data-sell': ware.ware,
            'data-city': city.name
          }],
          ['span', [], {}, ware.quantity]
        ]
      ])]
    ]],
    ['button', [], { type: 'button', 'data-view': 'warehouse' }, 'To the warehouse']
  ]))

  return element
}
