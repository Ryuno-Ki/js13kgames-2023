import { el } from './el.js'

/**
 * Component to display the tutorial.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function tutorial (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true))
  element.innerHTML = ''

  const story = [
    "It's with great sadness I have to inform you that your father did not ",
    'make it home. Now you have to inherit his work. I have trust in you ',
    'you will accomplish it and make him proud. Here allow me to show you ',
    'around. Meet me at the docks.'
  ].join('')

  element.appendChild(el('div', [], {}, '', [
    ['p', ['story'], {}, story],
    ['button', [], { type: 'button', 'data-view': 'docks' }, 'To the docks']
  ]))

  return element
}
