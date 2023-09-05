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

  element.appendChild(el('div', [], {}, '', getStoryByView(state.activeView)))

  return element
}

/**
 * Helper function to map the view to a story.
 *
 * @private
 * @argument {import('../state/initial-state.js').View} view
 * @returns {Array<*>}
 */
function getStoryByView (view) {
  /** @type {Record<import('../state/initial-state.js').View, string>} */
  const viewToStoryMap = {
    city: '',
    docks: [
      "See this ship over there? It's yours now. The Marie. A beautiful ",
      'watercraft. You know, your father bought it. Next to another one, the ',
      "Joseph. This one got caught by pirates. We weren't able to rescue ",
      'him. As you know, we have winter now. No ships are sailing. The sea ',
      "is frozen so we can't pass. But once the ice thaws, you can load and ",
      'unload your cargo here. Carriers will bring it to your warehouse. ',
      'Once you are done, set sail to a destination of your choice here. ',
      "Speaking of, let's go to your warehouse next."
    ].join(''),
    market: [
      'Quite noisy and loud here, huh? Yeah, people from all around the city ',
      'convene here to buy and sell their goods. I recommend you to spend ',
      'some time learning what each city is known for. For example, here in ',
      'the Northern part of the Holy Roman Empire of the German Nation we ',
      'are famous for our grain. And the sprats! You know that during the ',
      'fasting period, meat is forbidden. Fish is not. Come, trade goods ',
      'and then come to me and we look at the map of the Baltic Sea together.'
    ].join(''),
    sea: [
      'Did your father taught you how to read a map? See, we are here. You ',
      'can buy goods like grain from the surroundings of the city and the ',
      'region. Seaman have made notes on which way the water flows within ',
      'the sea. This is important! It will control how fast your ships will ',
      "get from one city to another. Since most people here can't read or ",
      'write you will need to plan carefully where do you want to go. After ',
      'all you are going to travel with them to do your business. Noone of ',
      'us can be at different places at the same time, right? Here, this map ',
      "is my parting gift for you. I'm going to see you in a year and a ",
      "month. Farewell. I wish you always a hand's breadth of water under ",
      'the keel!'
    ].join(''),
    story: [
      "It's with great sadness I have to inform you that your father did not ",
      'make it home. Now you have to inherit his work. I have trust in you ',
      'you will accomplish it and make him proud. Here allow me to show you ',
      'around. Meet me at the docks.'
    ].join(''),
    warehouse: [
      'Did you make it through? I know, all those pigs on the street are ',
      "annoying, aren't they? And don't get me started on the smell. But ",
      "let's talk about business here. I'm going to pay your scribe a year ",
      'and a month worth of wage. I am curious whether you are as talented ',
      'as your farther was. In this building you can store your wares in the ',
      'upper floors. If you can afford it I would suggest to add more levels ',
      'to it. It might be prudent to stock certain goods.',
      "Speaking of, why don't you accompany me to the market?"
    ].join('')
  }

  /** @type {Record<import('../state/initial-state.js').View, Array<*>>} */
  const viewToButtonMap = {
    city: ['span'],
    docks: ['button', [], { type: 'button', 'data-view': 'warehouse' }, 'To the warehouse'],
    market: ['button', [], { type: 'button', 'data-view': 'sea' }, 'To the sea map'],
    sea: ['span'],
    story: ['button', [], { type: 'button', 'data-view': 'docks' }, 'To the docks'],
    warehouse: ['button', [], { type: 'button', 'data-view': 'market' }, 'To the market']
  }

  const story = viewToStoryMap[view]
  const button = viewToButtonMap[view]

  return [
    ['p', ['story'], {}, story],
    button
  ]
}
