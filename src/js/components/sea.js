import { el } from './el.js'

/**
 * Component to display the Baltic sea with all cities.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function sea (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true))
  element.innerHTML = ''

  const cities = state.cities.filter((city) => city.isFounded)
  const mooredShips = state.ships.filter((ship) => ship.moored)
  const sailingShips = state.ships.filter((ship) => !ship.moored)

  element.appendChild(el('div', [], {}, '', [
    ['div', [], { 'data-component': 'tutorial' }],
    ['div', [], {}, '', [
      ['div', ['side-by-side'], {}, '', [
        ['div', [], { 'data-component': 'sea-map' }],
        ['div', [], {}, '', [
          ['div', [], {}, 'Where do you want to go?'],
          ['ul', ['cities'], {}, '', [
            ...cities.map((city) => [
              'li', [], {}, '', [
                ['button', [], { type: 'button', 'data-city': city.name }, city.name]
              ]
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
 * @argument {Array<import('../state/initial-state.js').Ship>} ships
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
