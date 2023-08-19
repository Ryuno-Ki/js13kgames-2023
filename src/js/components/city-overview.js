import { el } from './el.js'

export function cityOverview (targetElement, state) {
  const element = targetElement.cloneNode(true)
  const city = state.cities.find((city) => city.name === state.activeCity)
  const destinations = state.cities.filter((city) => city.name !== state.activeCity)
  const ships = state.ships
    .filter((ship) => ship.position === state.activeCity)
    .filter((ship) => ship.moored)

  element.innerHTML = ''
  element.appendChild(el('div', [], {}, '', [
    ['div', [], {}, city.name],
    ['div', [], { 'data-component': 'docks', 'data-destinations': JSON.stringify(destinations), 'data-ships': JSON.stringify(ships), 'data-warehouse': JSON.stringify(city.supply) }],
    ['div', [], { 'data-component': 'market', 'data-type': 'Supply', 'data-wares': JSON.stringify(city.supply) }],
    ['div', [], { 'data-component': 'market', 'data-type': 'Demand', 'data-wares': JSON.stringify(city.demand) }],
    ['button', [], { type: 'button', 'data-view': 'sea' }, 'See other city']
  ]))
  return element
}
