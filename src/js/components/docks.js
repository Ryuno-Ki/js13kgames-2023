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

  const { activeCity, cities, ships } = state
  const city = cities.find((c) => c.name === activeCity)

  if (!city) {
    console.warn('Did not find city')
    return element
  }

  const warehouse = city.supply
  const destinations = cities.filter((c) => c.name !== activeCity)
  const mooredShipsInCity = ships
    .filter((ship) => ship.position === activeCity)
    .filter((ship) => ship.moored)

  element.appendChild(el('div', [], {}, '', [
    ...mooredShipsInCity.map((ship) => [
      'div', [], {}, ship.name, [
        ['div', [], {}, 'Load', [
          ['ul', [], {}, '', [
            ...warehouse.map((ware) => [
              'li', [], {}, '', [
                ['label', [], { for: `${ship.name}-load-${ware.ware}` }, ware.ware],
                ['span', [], {}, '0'],
                ['input', [], { id: `${ship.name}-load-${ware.ware}`, name: `${ship.name}-load-${ware.ware}`, type: 'range', min: 0, max: ware.quantity, step: 1, value: 0, 'data-city': city, 'data-load': 'load', 'data-ship': ship.name, 'data-ware': ware.ware }],
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
                ['input', [], { id: `${ship.name}-unload-${ware.ware}`, name: `${ship.name}-unload-${ware.ware}`, type: 'range', min: 0, max: ware.quantity, step: 1, value: 0, 'data-city': city, 'data-load': 'unload', 'data-ship': ship.name, 'data-ware': ware.ware }],
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
              'option', [], { value: destination.name }, `to  ${destination.name}`
            ])
          ]]
        ]]
      ]
    ])]
  ))

  return element
}
