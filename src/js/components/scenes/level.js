import { el } from '../el.js'

export function sectionLevel (targetElement, state) {
  const element = targetElement.cloneNode(true)
  element.innerHTML = ''
  if (state.activeScene === 'level-section') {
    element.appendChild(el('div', [], {}, '', [['h1', [], {}, 'Level'], ['div', [], { 'data-component': 'month-meter' }], ['div', ['actions'], {}, '', [['button', ['action'], {
      'data-scene': 'win-section'
    }, 'Win'], ['button', ['action'], {
      'data-scene': 'game-over-section'
    }, 'GameOver']]]]))
  }
  return element
}
