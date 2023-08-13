import { el } from '../el.js'

export function sectionTitle (targetElement, state) {
  const element = targetElement.cloneNode(true)
  element.innerHTML = ''
  if (state.activeScene === 'title-section') {
    element.appendChild(el('div', [], {}, '', [['h1', [], {}, 'Title'], ['div', ['actions'], {}, '', [['button', ['action'], {
      'data-scene': 'new-game-section'
    }, 'NewGame'], ['button', ['action'], {
      'data-scene': 'settings-section'
    }, 'Settings'], ['button', ['action'], {
      'data-scene': 'about-section'
    }, 'About']]]]))
  }
  return element
}
