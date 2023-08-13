import { el } from '../el.js'

export function sectionWin (targetElement, state) {
  const element = targetElement.cloneNode(true)
  element.innerHTML = ''
  if (state.activeScene === 'win-section') {
    element.appendChild(el('div', [], {}, '', [['h1', [], {}, 'Win'], ['div', ['actions'], {}, '', [['button', ['action'], {
      'data-scene': 'title-section'
    }, 'Title']]]]))
  }
  return element
}
