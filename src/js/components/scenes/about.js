import { el } from '../el.js'

/**
 * Component to display the about scene containing information about the game.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function sectionAbout (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true))
  element.innerHTML = ''

  if (state.activeScene === 'about-section') {
    element.appendChild(el('div', [], {}, '', [
      ['h1', [], {}, 'About'],
      ['p', [], {}, 'This game was developed entirely by me, ', [
        ['a', [], { href: 'https://jaenis.ch/' }, 'André Jaenisch']
      ]],
      ['p', [], {}, 'It is licensed under ', [
        ['a', [], { href: 'https://code.jaenis.ch/js13kgames/js13kgames-2023/src/branch/main/LICENSE.txt' }, 'AGPL version 3 or newer']
      ]],
      ['p', [], {}, 'Find the source code on ', [
        ['a', [], { href: 'https://code.jaenis.ch/js13kgames/js13kgames-2023/' }, 'my Forgejo instance']
      ]],
			['p', [], {}, 'Boeticher font is developed by ', [
				['a', [], { href: 'https://velvetyne.fr/fonts/boeticher/' }, 'Velvetyne Type Foundry']
			]],
      ['div', ['actions'], {}, '', [
        ['button', ['action'], { 'data-scene': 'title-section' }, 'Back to Title']
      ]]
    ]))
  }

  return element
}
