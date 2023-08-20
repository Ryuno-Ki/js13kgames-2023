import { el } from './el.js'

export function docks (targetElement, state) {
  const destinations = JSON.parse(targetElement.getAttribute('data-destinations'))
  const ships = JSON.parse(targetElement.getAttribute('data-ships'))
  const warehouse = JSON.parse(targetElement.getAttribute('data-warehouse'))
  const element = targetElement.cloneNode(true)
  element.innerHTML = ''

  element.appendChild(el('div', [], {}, '', [
    ...ships.map((ship) => [
      'div', [], {}, ship.name, [
        ['div', [], {}, 'Load', [
          ['ul', [], {}, '', [
            ...warehouse.map((ware) => [
              'li', [], {}, '', [
                ['label', [], { 'for': `${ship.name}-load-${ware.ware}` }, ware.ware],
								['span', [], {}, '0'],
								['input', [], { id: `${ship.name}-load-${ware.ware}`, name: `${ship.name}-load-${ware.ware}`, type: 'range', min: 0, max: ware.amount, step: 1, value: 0, 'data-load': 'load', 'data-ship': ship.name, 'data-ware': ware.ware }],
								['span', [], {}, ware.amount],
              ]
            ])
          ]]
        ]],
        ['div', [], {}, 'Unload', [
          ['ul', [], {}, '', [
            ...ship.cargo.map((ware) => [
              'li', [], {}, '', [
                ['label', [], { 'for': `${ship.name}-unload-${ware.ware}` }, ware.ware],
								['span', [], {}, '0'],
								['input', [], { id: `${ship.name}-unload-${ware.ware}`, name: `${ship.name}-unload-${ware.ware}`, type: 'range', min: 0, max: ware.quantity, step: 1, value: 0, 'data-load': 'unload', 'data-ship': ship.name, 'data-ware': ware.ware }],
								['span', [], {}, ware.quantity],
              ]
            ])
          ]]
        ]],
        ['div', [], {}, '', [
          ['label', [], { 'for': 'destination' }],
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
