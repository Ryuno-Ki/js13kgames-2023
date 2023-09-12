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
      ['ul', [], {}, '', Object.entries(city.warehouse.stock).map((stockItem) => [
        'li', [], {}, '', [
          ['label', [], { for: `warehouse-${stockItem[0]}` }, stockItem[0]],
          ['span', [], {}, '', [
            ['span', [], {}, '0'],
            ['input', [], {
              id: `warehouse-${stockItem[0]}`,
              name: stockItem[0],
              type: 'range',
              min: 0,
              max: stockItem[1],
              step: 1,
              value: 0,
              'data-sell': stockItem[0],
              'data-city': city.name
            }],
            ['span', [], {}, stockItem[1]],
            [
              'span',
              [],
              {},
              ` (${computeUnitPrice(state, /** @type {import('../state/wares.js').Ware} */(stockItem[0]))} 💰 each)`
            ]
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

  if (Object.values(city.supply).every((quantity) => quantity === 0)) {
    return ['p', [], {}, "I'm afraid there is nothing to buy right now."]
  }

  return ['fieldset', [], {}, '', [
    ['legend', [], {}, 'Buy'],
    ['ul', [], {}, '', Object.entries(city.supply).map((item) => [
      'li', [], {}, '', [
        ['label', [], { for: `market-${item[0]}` }, item[0]],
        ['span', [], {}, '', [
          ['span', [], {}, '0'],
          ['input', [], {
            id: `market-${item[0]}`,
            name: item[0],
            type: 'range',
            min: 0,
            max: item[1],
            step: 1,
            value: 0,
            'data-buy': item[0],
            'data-city': city.name
          }],
          ['span', [], {}, item[1]],
          [
            'span',
            [],
            {},
            ` (${computeUnitPrice(state, /** @type {import('../state/wares.js').Ware} */(item[0]))} 💰 each)`
          ]
        ]]
      ]
    ])]
  ]]
}
