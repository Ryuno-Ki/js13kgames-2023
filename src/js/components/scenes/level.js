import { el } from '../el.js'

export function sectionLevel (targetElement, state) {
  const element = targetElement.cloneNode(true)
  element.innerHTML = ''

  if (state.activeScene === 'level-section') {
    const view = getViewFromState(state)

    element.appendChild(el('div', [], {}, '', [
      ['h1', [], {}, 'Level'],
      view,
      ['div', [], { 'data-component': 'month-meter' }],
      ['div', ['actions'], {}, '', [
        ['button', ['action'], { 'data-scene': 'win-section' }, 'Win'],
        ['button', ['action'], { 'data-scene': 'game-over-section' }, 'GameOver']
      ]]
    ]))
  }

  return element
}

function getViewFromState (state) {
  const view = state.activeView

  if (view === 'sea') {
    return ['div', [], { 'data-component': 'sea' }]
  }

  if (view === 'city') {
    return ['div', [], { 'data-component': 'city-overview' }]
  }

  return []
}
