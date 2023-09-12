import { clone } from '../../helpers/clone.js'
import { el } from '../el.js'

/**
 * Component to display the victory at the end of the game.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function sectionWin (targetElement, state) {
  const element = clone(targetElement)
  element.innerHTML = ''

  if (state.activeScene === 'win-section') {
    element.appendChild(el('div', [], {}, '', [
      ['h1', [], {}, 'Win'],
      ['div', [], {}, '', [
        ['button', [], { 'data-scene': 'title-section' }, 'Title']
      ]]
    ]))
  }

  return element
}
