import { el } from '../el.js'

export function sectionWorldselection (targetElement, state) {
  const element = targetElement.cloneNode(true)
  element.innerHTML = ''
  if (state.activeScene === 'world-section') {
    element.appendChild(el('div', [], {}, '', [['h1', [], {}, 'World'], ['div', ['actions'], {}, '', [['button', ['action'], {
      'data-scene': 'level-section'
    }, 'Level']]]]))
  }
  return element
}
