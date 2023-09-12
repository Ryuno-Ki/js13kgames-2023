import { NO_CITY } from '../constants.js'
import { clone } from '../helpers/clone.js'
import { computeUnitPrice } from '../helpers/compute-unit-price.js'
import { el } from './el.js'

/**
 * Component to display the market in a city.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function market (targetElement, state) {
  const element = clone(targetElement)

  const city = state.cities.find((city) => city.name === state.activeCity)
  if (!city) {
    console.warn(NO_CITY)
    return element
  }

  element.appendChild(el('div', [], {}, '', [
    ['div', [], { 'data-component': 'tutorial' }],
    showBuyForm(state, city),
    ['fieldset', [], {}, '', [
      ['legend', [], {}, 'Sell'],
      ['ul', [], {}, '', city.warehouse.stock.map((ware) => [
        'li', [], {}, '', [
          ['label', [], { for: `warehouse-${ware.ware}` }, ware.ware],
          ['span', [], {}, '', [
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
            ['span', [], {}, ware.quantity],
            ['span', [], {}, ` (${computeUnitPrice(state, ware.ware)} 💰 each)`]
          ]]
        ]
      ])]
    ]],
    ['button', [], { type: 'button', 'data-view': 'warehouse' }, 'To the warehouse']
  ]))

  return element
}

/**
 * Helper function to handle the case of lack of money.
 *
 * @private
 * @argument {import('../state/initial-state.js').State} state
 * @argument {import('../state/cities.js').City} city
 * @returns {Array<*>}
 */
function showBuyForm (state, city) {
  if (state.playermoney <= 1) {
    return ['p', [], {}, 'You cannot buy without 💰']
  }

  if (city.supply.length === 0) {
    return ['p', [], {}, "I'm afraid there is nothing to buy right now."]
  }

  return ['fieldset', [], {}, '', [
    ['legend', [], {}, 'Buy'],
    ['ul', [], {}, '', city.supply.map((ware) => [
      'li', [], {}, '', [
        ['label', [], { for: `market-${ware.ware}` }, ware.ware],
        ['span', [], {}, '', [
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
          ['span', [], {}, ware.quantity],
          ['span', [], {}, ` (${computeUnitPrice(state, ware.ware)} 💰 each)`]
        ]]
      ]
    ])]
  ]]
}
