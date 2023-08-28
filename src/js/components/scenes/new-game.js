import { el } from '../el.js'

/**
 * Component to query for player information such as display name.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function sectionNewgame (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true))
  element.innerHTML = ''

  if (state.activeScene === 'new-game-section') {
    element.appendChild(el('div', [], {}, '', [
      ['h1', [], {}, 'New game'],
      ['label', [], { for: 'playername' }, 'How do you want to be known?'],
      ['input', [], { id: 'playername', type: 'text', max: '64' }],
      ['div', ['actions'], {}, '', [
        ['button', ['action'], { 'data-scene': 'title-section' }, 'Title'],
        ['button', ['action'], { 'data-scene': 'world-section' }, 'World']
      ]]
    ]))
  }

  return element
}
