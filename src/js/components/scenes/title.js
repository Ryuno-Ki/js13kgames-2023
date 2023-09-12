import { clone } from '../../helpers/clone.js'
import { el } from '../el.js'

/**
 * Component to initialise the game.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function sectionTitle (targetElement, state) {
  const element = clone(targetElement)
  element.innerHTML = ''

  if (state.activeScene === 'title-section') {
    element.appendChild(el('div', [], {}, '', [
      // The glyphs are messed up in boeticher. Workaround …
      ['h1', [], {}, 'thE BALtiC LEAGuE'],
      ['div', ['f', 'fc', 'g'], {}, '', [
        ['button', [], { 'data-scene': 'new-game-section' }, 'New Game'],
        ['button', [], { 'data-scene': 'load-game-section' }, 'Load Game'],
        ['button', [], { 'data-scene': 'settings-section' }, 'Settings'],
        ['button', [], { 'data-scene': 'about-section' }, 'About']
      ]]
    ]))
  }
  return element
}
