import { el } from '../el.js'

export function sectionAbout (targetElement, state) {
  const element = targetElement.cloneNode(true)
  element.innerHTML = ''
  if (state.activeScene === 'about-section') {
    element.appendChild(el('div', [], {}, '', [['h1', [], {}, 'About'], ['div', ['actions'], {}, '', [['button', ['action'], {
      'data-scene': 'title-section'
    }, 'Title']]]]))
  }
  return element
}
