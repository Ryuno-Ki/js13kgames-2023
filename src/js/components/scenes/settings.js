import { el } from '../el.js'

export function sectionSettings (targetElement, state) {
  const element = targetElement.cloneNode(true)
  element.innerHTML = ''
  if (state.activeScene === 'settings-section') {
    element.appendChild(el('div', [], {}, '', [['h1', [], {}, 'Settings'], ['div', ['actions'], {}, '', [['button', ['action'], {
      'data-scene': 'title-section'
    }, 'Title']]]]))
  }
  return element
}
