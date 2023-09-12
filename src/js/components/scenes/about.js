import { clone } from '../../helpers/clone.js'
import { el } from '../el.js'

/**
 * Component to display the about scene containing information about the game.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function sectionAbout (targetElement, state) {
  const element = clone(targetElement)
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
      ['p', [], {}, 'Research was done using ', [
        ['a', [], { href: 'https://www.geo.de/magazine/geo-epoche/15023-rtkl-geoepoche-nr-82-vorschau-die-hanse' }, 'GEO Epoche Nr. 82']
      ]],
      ['p', [], {}, 'Map of the baltic sea is derived from ', [
        ['a', [], { href: 'https://nrv.de/reviere' }, 'North German regatta club']
      ]],
      ['p', [], {}, 'If you want to support the further development of this game, consider a donation via PayPal: ', [
        ['a', [], { href: 'https://www.paypal.com/donate/?hosted_button_id=UHBGQXAL4VQUN' }, 'Donate for js13kgames „The Baltic League”']
      ]],
      ['div', [], {}, '', [
        ['button', [], { 'data-scene': 'title-section' }, 'Back to Title']
      ]]
    ]))
  }

  return element
}
