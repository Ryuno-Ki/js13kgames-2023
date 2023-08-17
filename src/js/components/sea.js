import { el } from './el.js'

export function sea (targetElement, state) {
  const element = targetElement.cloneNode(true)
  element.innerHTML = ''

  // TODO: Filter for reachable cities later here
  const cities = state.cities

  element.appendChild(el('div', [], {}, '', [
    ['div', [], {}, 'Where do you want to go?'],
    ['ul', [], {}, '', [
      ...cities.map((city) => [
        'li', [], {}, '', [
          ['button', [], { type: 'button', 'data-city': city.name }, city.name]
        ]
      ])
    ]]
  ]))

  return element
}
