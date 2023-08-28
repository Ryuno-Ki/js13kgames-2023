import { el } from '../el.js'

/**
 * Component to display the game over scene when the game is lost.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function sectionGameOver (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true))
  element.innerHTML = ''

  if (state.activeScene === 'game-over-section') {
    element.appendChild(el('div', [], {}, '', [
      ['h1', [], {}, 'Game Over'],
      ['div', ['actions'], {}, '', [
        ['button', ['action'], { 'data-scene': 'title-section' }, 'Title']
      ]]
    ]))
  }

  return element
}
