import { clone } from '../../helpers/clone.js'
import { el } from '../el.js'

/**
 * Component to choose between scenarios.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function sectionWorldselection (targetElement, state) {
  const element = clone(targetElement)
  element.innerHTML = ''

  if (state.activeScene === 'world-section') {
    element.appendChild(el('div', [], {}, '', [
      ['h1', [], {}, 'World'],
      ['fieldset', [], {}, '', [
        ['legend', [], {}, 'Scenarios'],
        ['div', [], {}, '', [
          ['label', [], { for: 'level-scenario' }, 'Choose your scenario']
        ]],
        ['div', [], {}, '', [
          ['select', [], { id: 'level-scenario' }, '', [
            ['option', [], { value: '', checked: 'checked' }, 'Please choose'],
            ['option', [], { value: 'tutorial' }, 'Learn the ropes'],
            ['option', [], { value: 'free-play' }, 'Sail away']
          ]]
        ]]
      ]],
      showContentWarning(state),
      ['div', [], {}, '', showActionButtons(state)]
    ]))
  }

  return element
}

/**
 * Helper function to only show the action button once a choice was made.
 *
 * @private
 * @argument {import('../../state/initial-state.js').State} state
 * @returns {Array<*>}
 */
function showActionButtons (state) {
  if (state.activeScenario) {
    return [
      ['button', [], { 'data-scene': 'level-section' }, 'Level']
    ]
  }

  return [['span']]
}

/**
 * Helper function to show a content warning for tutorial.
 *
 * @private
 * @argument {import('../../state/initial-state.js').State} state
 * @returns {Array<*>}
 */
function showContentWarning (state) {
  if (state.activeScenario === 'tutorial') {
    return ['p', [], {}, 'Content Warning: Death mention.']
  }

  return ['span']
}
