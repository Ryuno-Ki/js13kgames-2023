import { el } from '../el.js'

/**
 * Component to allow for tweaking the interface (visual and audio).
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function sectionSettings (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true))
  element.innerHTML = ''

  if (state.activeScene === 'settings-section') {
    element.appendChild(el('div', [], {}, '', [
      ['h1', [], {}, 'Settings'],
      ['label', [], { for: 'color-preference' }, 'Choose your theme'],
      ['select', [], { id: 'color-preference' }, '', [
        ['option', [], { value: 'system', checked: 'checked' }, 'System'],
        ['option', [], { value: 'light' }, 'Light'],
        ['option', [], { value: 'dark' }, 'Dark']
      ]],
      ['div', ['actions'], {}, '', [
        ['button', ['action'], { 'data-scene': 'title-section' }, 'Title']
      ]]
    ]))
  }

  return element
}
