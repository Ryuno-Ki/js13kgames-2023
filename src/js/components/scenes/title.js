import { el } from '../el.js'

/**
 * Component to initialise the game.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function sectionTitle (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true))
  element.innerHTML = ''

  if (state.activeScene === 'title-section') {
    element.appendChild(el('div', [], {}, '', [
      ['h1', [], {}, 'The Baltic League'],
      ['div', ['actions'], {}, '', [
        ['button', ['action'], { 'data-scene': 'new-game-section' }, 'NewGame'],
        ['button', ['action'], { 'data-scene': 'settings-section' }, 'Settings'],
        ['button', ['action'], { 'data-scene': 'about-section' }, 'About']
      ]]
    ]))
  }
  return element
}
