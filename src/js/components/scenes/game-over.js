import { el } from '../el.js'

export function sectionGameOver (targetElement, state) {
  const element = targetElement.cloneNode(true)
  element.innerHTML = ''
  if (state.activeScene === 'game-over-section') {
    element.appendChild(el('div', [], {}, '', [['h1', [], {}, 'Game Over'], ['div', ['actions'], {}, '', [['button', ['action'], {
      'data-scene': 'title-section'
    }, 'Title']]]]))
  }
  return element
}
