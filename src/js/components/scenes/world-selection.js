import { el } from '../el.js'

/**
 * Component to choose between scenarios.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function sectionWorldselection (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true))
  element.innerHTML = ''

  if (state.activeScene === 'world-section') {
    element.appendChild(el('div', [], {}, '', [
      ['h1', [], {}, 'World'],
      ['label', [], { for: 'level-scenario' }, 'Choose your scenario'],
      ['select', [], { id: 'level-scenario' }, '', [
        ['option', [], { value: '', checked: 'checked' }, 'Please choose'],
        ['option', [], { value: 'tutorial' }, 'Learn the ropes'],
        ['option', [], { value: 'free-play' }, 'Sail away']
      ]],
      ['div', ['actions'], {}, '', [
        ['button', ['action'], { 'data-scene': 'level-section' }, 'Level']
      ]]
    ]))
  }

  return element
}
