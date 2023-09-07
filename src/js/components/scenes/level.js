import { el } from '../el.js'

/**
 * Component to display the level.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function sectionLevel (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true))
  element.innerHTML = ''

  if (state.activeScene === 'level-section') {
    const view = getViewFromState(state)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']
    const activeMonth = Number(state.activeMonth) - 1
    const month = `${months[activeMonth]} ${state.activeYear}`

    element.appendChild(el('div', [], {}, '', [
      ['h1', [], {}, getHeadlineFromView(state.activeView, state.activeCity)],
      view,
      ['div', [], { 'data-component': 'month-meter', 'data-month': month, 'data-active-month': activeMonth }],
      ['div', ['actions'], {}, '', [
        ['button', ['action'], { 'data-scene': 'game-over-section' }, 'GameOver']
      ]]
    ]))
  }

  return element
}

/**
 * Helper functiom to map active view to headline.
 *
 * @private
 * @argument {import('../../state/initial-state.js').View} view
 * @returns {string}
 */
function getHeadlineFromView (view, city) {
  const mapViewToHeadline = {
    docks: `Docks of ${city}`,
    market: `Market of ${city}`,
    sea: 'Baltic Sea',
    story: 'Tutorial',
    warehouse: `Warehouse of ${city}`
  }

  return mapViewToHeadline[view]
}

/**
 * Helper function to map active view to a component tree.
 *
 * @private
 * @argument {import('../../state/initial-state.js').State} state
 * @returns {Array<*>}
 */
function getViewFromState (state) {
  /** @type {Record<import('../../state/initial-state.js').View, Array<*>>} */
  const viewToComponentMap = {
    city: ['div', [], { 'data-component': 'city-overview' }],
    docks: ['div', [], { 'data-component': 'docks' }],
    market: ['div', [], { 'data-component': 'market' }],
    sea: ['div', [], { 'data-component': 'sea' }],
    story: ['div', [], { 'data-component': 'tutorial' }],
    warehouse: ['div', [], { 'data-component': 'warehouse' }]
  }

  return viewToComponentMap[state.activeView] || ['div']
}
