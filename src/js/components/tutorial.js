import { clone } from '../helpers/clone.js'
import { el } from './el.js'

/**
 * Component to display the tutorial.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function tutorial (targetElement, state) {
  const element = clone(targetElement)

  element.appendChild(el('div', [], {}, '', getStoryByView(state)))

  return element
}

/**
 * Helper function to map the view to a story.
 *
 * @private
 * @argument {import('../state/initial-state.js').State} state
 * @returns {Array<*>}
 */
function getStoryByView (state) {
  const { playername, showTutorial } = state
  const view = state.activeView

  if (!showTutorial[view]) {
    return [['span']]
  }

  /** @type {Record<import('../state/views.js').View, string>} */
  const viewToStoryMap = {
    docks: [
      "See this ship over there? It's yours now. The Marie. A beautiful ",
      'nef. You know, your father bought it. Next to another one, the ',
      "Joseph. That one got caught by pirates. We weren't able to rescue ",
      'him. As you know, we have winter now. No ships are sailing. The sea ',
      "is frozen so we can't pass. But once the ice thaws, you can load and ",
      'unload your cargo here. Carriers will bring it to your warehouse. ',
      'Once you are done, set sail to a destination of your choice here. ',
      "Speaking of, let's go to your warehouse next."
    ].join(''),
    market: [
      'Quite noisy and loud here, huh? Yeah, people from all around the city ',
      'convene here to buy and sell their wares. I recommend you to spend ',
      'some time learning what each city is known for. For example, here in ',
      'the Northern part of the Holy Roman Empire of the German Nation we ',
      'are famous for our crop and beer. And the sprats! You know that during ',
      'the fasting period, meat is forbidden. Fish is not. I have to leave ',
      "you now to attend my own businesses. I wish you always a hand's ",
      'breadth of water under the keel! See you in a year and a month!'
    ].join(''),
    sea: [
      'Did your father taught you how to read a map? See, we are here. You ',
      'can buy goods like crop from the surroundings of the city and the ',
      'region. Seaman have made notes on how long they travel to other cities.',
      "Since most people here can't read or write you will need to plan ",
      'carefully where do you want to go. After all you are going to travel ',
      'with them to do your business. Noone of us can be at different places ',
      "at the same time, right? Why don't you meet me at the market?"
    ].join(''),
    story: [
      `${playername} was it, right? `,
      "It's with great sadness I have to inform you that your father did not ",
      'make it home. Now you have to inherit his work. I have trust in you ',
      'you will accomplish it and make him proud. Here allow me to show you ',
      'around. Meet me at the docks.'
    ].join(''),
    warehouse: [
      'Did you make it through? I know, all those pigs on the street are ',
      "annoying, aren't they? And don't get me started on the smell. But ",
      "let's talk about business here. I'm going to pay the upkeep for a year ",
      'and a month. I am curious whether you are as talented as your farther ',
      'was. In this building you can store your wares in the upper floors. If ',
      'you can afford it I would suggest to add more levels to it. It might ',
      "be prudent to stock certain goods. Let's take a look at the map next."
    ].join('')
  }

  /** @type {Record<import('../state/views.js').View, Array<*>>} */
  const viewToButtonMap = {
    docks: ['button', [], { type: 'button', 'data-view': 'warehouse' }, 'To the warehouse'],
    market: ['span'],
    sea: ['button', [], { type: 'button', 'data-view': 'market' }, 'To the market'],
    story: ['button', [], { type: 'button', 'data-view': 'docks' }, 'To the docks'],
    warehouse: ['button', [], { type: 'button', 'data-view': 'sea' }, 'To the sea map']
  }

  const story = viewToStoryMap[view]
  const button = viewToButtonMap[view]

  return [
    ['p', ['story'], {}, story],
    button
  ]
}
