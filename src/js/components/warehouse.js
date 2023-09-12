import { NO_CITY } from '../constants.js'
import { clone } from '../helpers/clone.js'
import { el } from './el.js'

/**
 * Component to display your warehouse in a city.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function warehouse (targetElement, state) {
  const element = clone(targetElement)

  const city = state.cities.find((city) => city.name === state.activeCity)
  if (!city) {
    console.warn(NO_CITY)
    return element
  }

  element.appendChild(el('div', [], {}, '', [
    ['div', [], { 'data-component': 'tutorial' }],
    informOnHistoricEvents(state),
    renderStock(city.warehouse.stock),
    ['button', [], { type: 'button', 'data-view': 'docks' }, 'To the docks'],
    ['button', [], { type: 'button', 'data-view': 'market' }, 'To the market'],
    ['button', [], { type: 'button', 'data-view': 'sea' }, 'To the sea map']
  ]))

  return element
}

/**
 * Helper function to inform on new historic events.
 *
 * @private
 * @argument {import('../state/initial-state.js').State} state
 * @returns {Array<*>}
 */
function informOnHistoricEvents (state) {
  const { activeMonth, activeYear, history } = state

  const maybeHistoricEvent = history.find((historicEvent) => {
    const { month, year } = historicEvent

    return year === activeYear && month === activeMonth
  })

  if (maybeHistoricEvent) {
    if (/** @type {import('../state/history.js').CityFounded} */(maybeHistoricEvent).city) {
      const city = /** @type {import('../state/history.js').CityFounded} */(maybeHistoricEvent).city

      return ['p', [], {}, `${city} was founded!`]
    }

    if (
      /** @type {import('../state/history.js').ShipTypeIntroduced} */(maybeHistoricEvent).shipType) {
      const shipType = /** @type {import('../state/history.js').ShipTypeIntroduced} */(maybeHistoricEvent).shipType

      return ['p', [], {}, `You can now buy ${shipType}s!`]
    }
  }

  return ['p', [], {}, 'This is your warehouse. Organise your activities here.']
}

/**
 * Helper function to conditionally render the stock.
 *
 * @private
 * @argument {Record<import('../state/wares.js').Ware, number>} stock
 * @returns {Array<*>}
 */
function renderStock (stock) {
  const stockItems = Object.entries(stock).filter((stockItem) => stockItem[1] > 0)

  if (stockItems.length === 0) {
    return ['p', [], {}, 'It appears you have nothing in stock here. Go visit the market.']
  }

  return ['ul', [], {}, '', stockItems.map((stockItem) => [
    'li', [], {}, `${stockItem[0]} (${stockItem[1]})`
  ])
  ]
}
