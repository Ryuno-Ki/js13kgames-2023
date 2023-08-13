import { el } from '../el.js'

export function sectionNewgame (targetElement, state) {
  const element = targetElement.cloneNode(true)
  element.innerHTML = ''
  if (state.activeScene === 'new-game-section') {
    element.appendChild(el('div', [], {}, '', [['h1', [], {}, 'New game'], ['div', ['actions'], {}, '', [['button', ['action'], {
      'data-scene': 'title-section'
    }, 'Title'], ['button', ['action'], {
      'data-scene': 'world-section'
    }, 'World']]]]))
  }
  return element
}
