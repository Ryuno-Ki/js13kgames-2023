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

  element.appendChild(el('div', [], {}, '', [
    ['div', [], { 'data-component': 'tutorial' }],
    ...mapShipsToTree(state)
  ]))

  return element
}

/**
 * Helper function to render tree conditionally.
 *
 * @private
 * @argument {import('../state/initial-state.js').State} state
 * @returns {Array<*>}
 */
function mapShipsToTree (state) {
  const { activeCity, activeMonth, cities, ships } = state
  const city = cities.find((c) => c.name === activeCity)

  if (!city) {
    console.warn('Did not find city')
    return [['span']]
  }

  const warehouse = city.supply
  const destinations = cities
    .filter((c) => c.isFounded)
    .filter((c) => c.name !== activeCity)

  const mooredShipsInCity = ships
    .filter((ship) => ship.position === activeCity)
    .filter((ship) => ship.moored)

  if (ships.length === 0) {
    return [['p', ['no-ships'], {}, 'No ships here. Perhaps they are sailing?']]
  }

  if (['1', '2', '11', '12'].includes(activeMonth)) {
    return [['p', ['frozen-sea'], {}, 'No ships can depart as long as the sea is frozen.']]
  }

  return mooredShipsInCity.map((ship) => [
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
  ])
}
