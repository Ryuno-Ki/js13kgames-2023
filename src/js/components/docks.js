import { el } from './el.js'

/**
 * Component to display the docks in a city.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function docks (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true))
  element.innerHTML = ''

  const maybeDestinations = element.getAttribute('data-destinations')
  const maybeShips = element.getAttribute('data-ships')
  const maybeWarehouse = element.getAttribute('data-warehouse')

  const destinations = /** @type {Array<import('../state/initial-state.js').City>} */(JSON.parse(maybeDestinations || '[]'))
  const ships = /** @type {Array<import('../state/initial-state.js').Ship>} */(JSON.parse(maybeShips || '[]'))
  const warehouse = /** @type {Array<import('../state/initial-state.js').CitySupply>} */(JSON.parse(maybeWarehouse || '[]'))

  element.appendChild(el('div', [], {}, '', [
    ...ships.map((ship) => [
      'div', [], {}, ship.name, [
        ['div', [], {}, 'Load', [
          ['ul', [], {}, '', [
            ...warehouse.map((ware) => [
              'li', [], {}, '', [
                ['label', [], { for: `${ship.name}-load-${ware.ware}` }, ware.ware],
                ['span', [], {}, '0'],
                ['input', [], { id: `${ship.name}-load-${ware.ware}`, name: `${ship.name}-load-${ware.ware}`, type: 'range', min: 0, max: ware.quantity, step: 1, value: 0, 'data-load': 'load', 'data-ship': ship.name, 'data-ware': ware.ware }],
                ['span', [], {}, ware.quantity]
              ]
            ])
          ]]
        ]],
        ['div', [], {}, 'Unload', [
          ['ul', [], {}, '', [
            ...ship.cargo.map((ware) => [
              'li', [], {}, '', [
                ['label', [], { for: `${ship.name}-unload-${ware.ware}` }, ware.ware],
                ['span', [], {}, '0'],
                ['input', [], { id: `${ship.name}-unload-${ware.ware}`, name: `${ship.name}-unload-${ware.ware}`, type: 'range', min: 0, max: ware.quantity, step: 1, value: 0, 'data-load': 'unload', 'data-ship': ship.name, 'data-ware': ware.ware }],
                ['span', [], {}, ware.quantity]
              ]
            ])
          ]]
        ]],
        ['div', [], {}, '', [
          ['label', [], { for: 'destination' }],
          ['select', [], { id: 'destination', 'data-ship': ship.name }, '', [
            ['option', [], { selected: 'selected', value: '', 'data-ship': ship.name }, 'Please select'
            ],
            ...destinations.map((destination) => [
              'option', [], { value: destination.name }, 'to ' + destination.name
            ])
          ]]
        ]]
      ]
    ])]
  ))

  return element
}
