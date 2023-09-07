import { el } from './el.js'

/**
 * Component to display the Baltic sea with all cities.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function sea (targetElement, state) {
  const element = /** @type {HTMLElement} */(targetElement.cloneNode(true))
  element.innerHTML = ''

  const cities = state.cities.filter((city) => city.isFounded)
  const mooredShips = state.ships.filter((ship) => ship.moored)
  const sailingShips = state.ships.filter((ship) => !ship.moored)

  element.appendChild(el('div', [], {}, '', [
    ['div', [], { 'data-component': 'tutorial' }],
    ['div', [], {}, '', [
      ['svg', [], { viewBox: '0 0 341 353', xmlns: 'http://www.w3.org/2000/svg' }, '', [
        ['polyline', [], { points: getCoordinatesForBalticSeaMap() }]
      ]]
    ]],
    ['div', [], {}, 'Where do you want to go?'],
    ['ul', [], {}, '', [
      ...cities.map((city) => [
        'li', [], {}, '', [
          ['button', [], { type: 'button', 'data-city': city.name }, city.name]
        ]
      ])
    ]],
    ['div', [], {}, 'Ships', [
      ['div', [], {}, 'moored in a port:', [
        ['ul', [], {}, '', [
          ...mooredShips.map((ship) => [
            'li', [], {}, `${ship.name} in ${ship.position}`
          ])
        ]]
      ]],
      ['div', [], {}, 'sailing:', [
        ['ul', [], {}, '', [...mapSailingShipsToElement(sailingShips)]]
      ]]
    ]]
  ]))

  return element
}

/**
 * Helper function because TypeScript.
 *
 * @private
 * @argument {Array<import('../state/initial-state.js').Ship>} ships
 * @returns {Array<*>}
 */
function mapSailingShipsToElement (ships) {
  return ships.map((ship) => {
    if (ship.itinerary === null) {
      console.warn(`${ship.name} is sailing but has invalid data structure`)
      return []
    }

    return ['li', [], {}, `${ship.name} from ${ship.itinerary.from} to ${ship.itinerary.to}`]
  })
}

/**
 * Helper function to describe the map to be rendered.
 *
 * @private
 * @returns {string}
 */
function getCoordinatesForBalticSeaMap () {
  return [
    [3, 225],
    [16, 212],
    [22, 205],
    [26, 198],
    [33, 200],
    [39, 194],
    [37, 187],
    [43, 179],
    [50, 198],
    [54, 218],
    [64, 218],
    [62, 235],
    [68, 242],
    [77, 259],
    [82, 274],
    [76, 273],
    [84, 296],
    [96, 297],
    [108, 294],
    [115, 279],
    [114, 275],
    [134, 275],
    [142, 247],
    [139, 226],
    [144, 218],
    [132, 207],
    [152, 199],
    [154, 191],
    [157, 200],
    [173, 172],
    [142, 150],
    [137, 123],
    [138, 101],
    [141, 86],
    [162, 70],
    [187, 42],
    [179, 33],
    [181, 19],
    [190, 3],
    [203, 1],
    [213, 0],
    [233, 23],
    [199, 73],
    [192, 99],
    [203, 120],
    [202, 132],
    [224, 148],
    [253, 152],
    [269, 141],
    [279, 138],
    [280, 134],
    [291, 130],
    [295, 132],
    [299, 130],
    [299, 128],
    [312, 121],
    [313, 128],
    [309, 126],
    [341, 135],
    [323, 139],
    [321, 145],
    [315, 143],
    [314, 149],
    [309, 147],
    [306, 158],
    [292, 159],
    [277, 160],
    [274, 158],
    [275, 161],
    [272, 159],
    [262, 164],
    [262, 167],
    [253, 171],
    [251, 170],
    [251, 173],
    [247, 175],
    [245, 183],
    [246, 181],
    [244, 184],
    [246, 188],
    [252, 187],
    [251, 195],
    [258, 200],
    [266, 198],
    [267, 214],
    [265, 232],
    [250, 227],
    [238, 217],
    [223, 237],
    [220, 257],
    [219, 256],
    [225, 282],
    [217, 297],
    [210, 298],
    [209, 301],
    [190, 316],
    [182, 306],
    [147, 318],
    [129, 328],
    [114, 335],
    [117, 337],
    [117, 343],
    [103, 336],
    [102, 331],
    [96, 331],
    [87, 322],
    [78, 328],
    [76, 326],
    [71, 332],
    [64, 330],
    [62, 334],
    [57, 336],
    [49, 335],
    [52, 325],
    [36, 326],
    [37, 323],
    [31, 322],
    [32, 314],
    [23, 313],
    [27, 310],
    [28, 312],
    [24, 308],
    [29, 302],
    [25, 295],
    [31, 292],
    [26, 290],
    [32, 286],
    [36, 286],
    [41, 274],
    [42, 277],
    [44, 276],
    [45, 278],
    [49, 269],
    [39, 266],
    [36, 269],
    [39, 263],
    [30, 265],
    [39, 263],
    [34, 254],
    [26, 256],
    [20, 260],
    [22, 268],
    [17, 267],
    [17, 260],
    [15, 263],
    [10, 269],
    [4, 267],
    [4, 262],
    [1, 274],
    [6, 284],
    [2, 289],
    [1, 294],
    [4, 296],
    [4, 293],
    [10, 313],
    [16, 321],
    [9, 325],
    [10, 328],
    [15, 327],
    [15, 335],
    [13, 334],
    [22, 339],
    [25, 346],
    [11, 339],
    [6, 352]
  ]
    .map((point) => point.join(' ')).join(' ')
}
