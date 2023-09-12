import { NO_CITY } from '../constants.js'
import { clone } from '../helpers/clone.js'
import { el } from './el.js'

/**
 * Component to display the docks in a city.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function docks (targetElement, state) {
  const element = clone(targetElement)

  element.appendChild(el('div', [], {}, '', [
    ['div', [], { 'data-component': 'tutorial' }],
    ...mapShipsToTree(state),
    ['button', [], { type: 'button', 'data-view': 'warehouse' }, 'To the warehouse']
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
    console.warn(NO_CITY)
    return [['span']]
  }

  const stock = city.warehouse.stock
  const destinations = cities
    .filter((c) => c.isFounded)
    .filter((c) => c.name !== activeCity)
    .filter((c) => {
      // Starting as of November (the 11th month) the sea is frozen and cannot be sailed.
      // I limit the range of available month first by subtracting the active
      // month. When I then subtract the distance to the city in question
      const destinationMonth = 10 - Number(activeMonth) - city.distances[c.name]
      // I can compare the number of months I would still have available in the
      // active year.
      return destinationMonth >= 0
    })

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
          ...stock.map((ware) => [
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
