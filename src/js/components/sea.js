import { el } from './el.js'

export function sea (targetElement, state) {
  const element = targetElement.cloneNode(true)
  element.innerHTML = ''

  // TODO: Filter for reachable cities later here
  const cities = state.cities
  const mooredShips = state.ships.filter((ship) => ship.moored)

  element.appendChild(el('div', [], {}, '', [
    ['div', [], {}, 'Where do you want to go?'],
    ['ul', [], {}, '', [
      ...cities.map((city) => [
        'li', [], {}, '', [
          ['button', [], { type: 'button', 'data-city': city.name }, city.name]
        ]
      ])
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
        ['ul', [], {}, '', [
          ...state.itineraries.map((itinerary) => [
            'li', [], {}, `${itinerary.ship} from ${itinerary.from} to ${itinerary.to}`
          ])
        ]]
      ]]
    ]]
  ]))

  return element
}
