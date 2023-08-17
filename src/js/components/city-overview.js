import { el } from './el.js'

export function cityOverview (targetElement, state) {
  const element = targetElement.cloneNode(true)
  const city = state.cities[state.activeCity]
  const ships = state.ships
    .filter((ship) => ship.position === state.activeCity)
    .filter((ship) => ship.docked)

  element.innerHTML = ''
  element.appendChild(el('div', [], {}, '', [
    ['div', [], {}, city.name],
    ...ships.map((ship) => [
      'div', [], {}, ship.name
    ]),
    ['div', [], {}, 'Supply', [
      ['ul', [], {}, '', city.supply.map((s) => [
        'li', [], {}, `${s.ware}: ${s.amount}`
      ])]
    ]],
    ['div', [], {}, 'Demand', [
      ['ul', [], {}, '', city.demand.map((s) => [
        'li', [], {}, `${s.ware}: ${s.amount}`
      ])]
    ]]
  ]))
  return element
}