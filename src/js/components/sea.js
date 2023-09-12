import { NO_CITY } from '../constants.js'
import { clone } from '../helpers/clone.js'
import { el } from './el.js'

/**
 * Component to display the Baltic sea with all cities.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function sea (targetElement, state) {
  const element = clone(targetElement)

  const city = state.cities.find((c) => c.name === state.activeCity)

  if (!city) {
    console.warn(NO_CITY)
    return element
  }

  const cities = state.cities
    .filter((c) => c.isFounded)
    .filter((c) => c.name !== state.activeCity)

  const mooredShips = state.ships.filter((ship) => ship.moored)
  const sailingShips = state.ships.filter((ship) => !ship.moored)

  element.appendChild(el('div', [], {}, '', [
    ['div', [], { 'data-component': 'tutorial' }],
    ['div', [], {}, '', [
      ['div', ['f', 'fr'], {}, '', [
        ['div', [], { 'data-component': 'sea-map' }],
        ['div', [], {}, '', [
          ['div', [], {}, 'Plan your moves carefully'],
          ['ul', ['cities'], {}, '', [
            ...cities.map((c) => [
              'li',
              [],
              {},
              `${c.name} (${pluralise('month', 'months', city.distances[c.name])} away, ${formatDemands(c)}})`
            ])
          ]]
        ]]
      ]],
      ['div', [], {}, 'Ships', [
        ['div', [], {}, 'moored in a port:', [
          ['ul', [], {}, '', [
            ...mooredShips.map((ship) => [
              'li', [], {}, `${ship.name} in ${ship.position}`
            ])
          ]]
        ]],
        ['div', [], {}, 'sailing:', [
          ['ul', [], {}, '', [...mapSailingShipsToElement(sailingShips)]]
        ]]
      ]],
      ['button', [], { type: 'button', 'data-view': 'warehouse' }, 'To the warehouse']
    ]]
  ]))

  return element
}

/**
 * Helper function because TypeScript.
 *
 * @private
 * @argument {Array<import('../state/ships.js').Ship>} ships
 * @returns {Array<*>}
 */
function mapSailingShipsToElement (ships) {
  return ships.map((ship) => {
    if (ship.itinerary === null) {
      console.warn(`${ship.name} is sailing but has invalid data structure`)
      return []
    }

    return ['li', [], {}, `${ship.name} from ${ship.itinerary.from} to ${ship.itinerary.to}`]
  })
}

/**
 * Helper function to handle plural case.
 *
 * @private
 * @argument {string} singular
 * @argument {string} plural
 * @argument {number} amount
 * @returns {string}
 */
function pluralise (singular, plural, amount) {
  if (amount === 1) {
    return `${amount} ${singular}`
  }

  return `${amount} ${plural}`
}

/**
 * Helper function to format the demands.
 *
 * @private
 * @argument {import('../state/cities.js').City} city
 * @returns {string}
 */
function formatDemands (city) {
  const demandedItems = Object
    .entries(city.demand)
    .filter((item) => item[1] > 0)
    .map((item) => item[0])

  return `demands ${demandedItems.join(', ')})`
}
