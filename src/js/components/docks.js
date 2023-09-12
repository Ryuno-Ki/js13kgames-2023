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

  const city = state.cities.find((c) => c.name === state.activeCity)

  if (!city) {
    console.warn(NO_CITY)
    return element
  }

  element.appendChild(el('div', [], {}, '', [
    ['div', [], { 'data-component': 'tutorial' }],
    ...mapShipsToTree(state, city),
    renderBuyShip(state, city),
    ['button', [], { type: 'button', 'data-view': 'warehouse' }, 'To the warehouse']
  ]))

  return element
}

/**
 * Helper function to render tree conditionally.
 *
 * @private
 * @argument {import('../state/initial-state.js').State} state
 * @argument {import('../state/cities.js').City} city
 * @returns {Array<*>}
 */
function mapShipsToTree (state, city) {
  const { activeCity, activeMonth, cities, ships } = state

  const { stock } = city.warehouse
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
    return [['p', [], {}, 'No ships here. Perhaps they are sailing?']]
  }

  if (['1', '2', '11', '12'].includes(activeMonth)) {
    return [['p', [], {}, 'No ships can depart as long as the sea is frozen.']]
  }

  return mooredShipsInCity.map((ship) => [
    'div', [], {}, ship.name, [
      ['div', [], {}, 'Load', [
        ['ul', [], {}, '', [
          ...Object.entries(stock).map((stockItem) => [
            'li', [], {}, '', [
              ['label', [], { for: `${ship.name}-load-${stockItem[0]}` }, stockItem[0]],
              ['span', [], {}, '0'],
              ['input', [], {
                id: `${ship.name}-load-${stockItem[0]}`,
                name: `${ship.name}-load-${stockItem[0]}`,
                type: 'range',
                min: 0,
                max: stockItem[1],
                step: 1,
                value: 0,
                'data-city': city.name,
                'data-load': 'load',
                'data-ship': ship.name,
                'data-ware': stockItem[0]
              }],
              ['span', [], {}, stockItem[1]]
            ]
          ])
        ]]
      ]],
      ['div', [], {}, 'Unload', [
        ['ul', [], {}, '', [
          ...Object.entries(ship.cargo).map((item) => [
            'li', [], {}, '', [
              ['label', [], { for: `${ship.name}-unload-${item[0]}` }, item[0]],
              ['span', [], {}, '0'],
              ['input', [], {
                id: `${ship.name}-unload-${item[0]}`,
                name: `${ship.name}-unload-${item[0]}`,
                type: 'range',
                min: 0,
                max: item[1],
                step: 1,
                value: 0,
                'data-city': city.name,
                'data-load': 'unload',
                'data-ship': ship.name,
                'data-ware': item[0]
              }],
              ['span', [], {}, item[1]]
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
            'option',
            [],
            { value: destination.name },
            `to  ${destination.name} (for ${state.shipTypes[ship.type].upkeep * city.distances[destination.name]} 💰)`
          ])
        ]]
      ]]
    ]
  ])
}

/**
 * Helper function to conditionally render the form to buy a ship.
 *
 * @private
 * @argument {import('../state/initial-state.js').State} state
 * @argument {import('../state/cities.js').City} city
 * @returns {Array<*>}
 */
function renderBuyShip (state, city) {
  if (state.showTutorial.docks) {
    return ['div']
  }

  return ['fieldset', [], {}, '', [
    ['legend', [], {}, 'Buy'],
    ['div', [], {}, '', [
      ['label', [], { for: 'shipName' }, 'Name of your new ship?'],
      ['input', [], {
        id: 'shipName',
        name: 'shipName',
        type: 'text',
        'data-city': city.name
      }]
    ]],
    ['div', [], {}, '', [
      ['label', [], { for: 'shipType' }, 'What type of ship do you want?'],
      ['select', [], { id: 'shipType', 'data-city': city.name }, '', [
        ['option', [], { value: '' }, 'Please choose'],
        ...Object.entries(state.shipTypes)
          .filter((shipTypes) => {
            return shipTypes[1].isKnown
          })
          .map((shipTypes) => {
            const [type] = shipTypes

            return ['option', [], { value: type }, type]
          })
      ]],
      [
        'button',
        [],
        { type: 'button', 'data-acquire': 'ship' },
        state.newShipType ? `Buy for ${state.shipTypes[state.newShipType].price} 💰` : 'Decide on your ship type first.'
      ]
    ]]
  ]]
}
