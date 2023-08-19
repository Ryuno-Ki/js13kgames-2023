import { el } from './el.js'

export function docks (targetElement, state) {
  const destinations = JSON.parse(targetElement.getAttribute('data-destinations'))
  const ships = JSON.parse(targetElement.getAttribute('data-ships'))
  const element = targetElement.cloneNode(true)
  element.innerHTML = ''

  element.appendChild(el('div', [], {}, '', [
    ...ships.map((ship) => [
      'div', [], {}, ship.name, [
        ['div', [], {}, '', [
          ['label', [], { forId: 'destination' }],
          ['select', [], { id: 'destination', 'data-ship': ship.name }, '', [
            ['option', [], { selected: 'selected', value: '', 'data-ship': ship.name }, 'Please select'
            ],
            ...destinations.map((destination) => [
              'option', [], { value: destination.name }, 'to ' + destination.name
            ])
          ]]
        ]]
      ]
    ])]
  ))

  return element
}
