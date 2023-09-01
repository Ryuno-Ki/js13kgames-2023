import { el } from '../el.js'

/**
 * Component to load an exisiting game.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function sectionLoadgame (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true))
  element.innerHTML = ''

  if (state.activeScene === 'load-game-section') {
    const savedGames = getSavedGames()

    element.appendChild(el('div', [], {}, '', [
      ['h1', [], {}, 'Load game'],
      ['ul', [], {}, '', [
        ...savedGames.map((savedGame) => {
          return ['li', [], { 'data-state': JSON.stringify(savedGame) }, savedGame.playername]
        })
      ]],
      ['div', ['actions'], {}, '', [
        ['button', ['action'], { 'data-scene': 'title-section' }, 'Back to Title']
      ]]
    ]))
  }

  return element
}

/**
 * Helper function to load saved game states from localStorage.
 *
 * @private
 * @returns {Array<import('../../state/initial-state.js').State>}
 */
function getSavedGames () {
  const savedGames = window.localStorage.getItem('THE_BALTIC_LEAGUE') || '[]'

  return JSON.parse(savedGames)
}
