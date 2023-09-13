import { clone } from '../helpers/clone.js'
import { el } from './el.js'

/**
 * Component to display a map of the Baltic sea with all cities.
 *
 * @argument {HTMLElement} targetElement
 * @argument {import('../state/initial-state.js').State} state
 * @returns {HTMLElement}
 */
export function seaMap (targetElement, state) {
  const element = clone(targetElement)

  element.appendChild(el(
    'svg',
    [],
    {
      'aria-role': 'presentation',
      viewBox: '0 0 341 353',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    '',
    [
      ['polygon', ['kingdom', 'norway'], { points: getCoordinatesForBalticSeaMap('norway') }],
      ['polygon', ['kingdom', 'sweden'], { points: getCoordinatesForBalticSeaMap('sweden') }],
      ['polygon', ['kingdom', 'sweden'], { points: getCoordinatesForBalticSeaMap('finnland') }],
      ['polygon', ['republic', 'nowgorod'], { points: getCoordinatesForBalticSeaMap('nowgorod') }],
      ['polygon', ['republic', 'pskow'], { points: getCoordinatesForBalticSeaMap('pskow') }],
      ['polygon', ['teutonic', 'order'], { points: getCoordinatesForBalticSeaMap('order') }],
      ['polygon', ['grand', 'duchy', 'lithuania'], { points: getCoordinatesForBalticSeaMap('lithuania') }],
      ['polygon', ['roman', 'empire'], { points: getCoordinatesForBalticSeaMap('roman') }],
      // Sealand and Funen belong to kingdom of denmark
      ['polygon', ['kingdom', 'denmark'], { points: getCoordinatesForBalticSeaMap('denmark') }],
      ['text', [], { x: 35, y: 91 }, '', [
        ['tspan', [], { x: 35, dy: '1em' }, 'Kingdom'],
        ['tspan', [], { x: 35, dy: '1em' }, 'of Norway']
      ]],
      ['text', [], { x: 80, y: 151 }, '', [
        ['tspan', [], { x: 80, dy: '1em' }, 'Kingdom'],
        ['tspan', [], { x: 80, dy: '1em' }, 'of Sweden']
      ]],
      ['text', [], { x: 262, y: 26 }, '', [
        ['tspan', [], { x: 262, dy: '1em' }, 'Republic of'],
        ['tspan', [], { x: 262, dy: '1em' }, 'Nowgorod']
      ]],
      ['text', [], { x: 262, y: 166 }, '', [
        ['tspan', [], { x: 262, dy: '1em' }, 'Republic'],
        ['tspan', [], { x: 262, dy: '1em' }, 'of Pskow']
      ]],
      ['text', [], { x: 200, y: 293 }, '', [
        ['tspan', [], { x: 200, dy: '1em' }, 'Teutonic'],
        ['tspan', [], { x: 200, dy: '1em' }, 'Order']
      ]],
      ['text', [], { x: 255, y: 298 }, '', [
        ['tspan', [], { x: 255, dy: '1em' }, 'Grand Duchy'],
        ['tspan', [], { x: 255, dy: '1em' }, 'of Lithuania']
      ]],
      ['text', [], { x: 25, y: 298 }, '', [
        ['tspan', [], { x: 25, dy: '1em' }, 'Holy Roman Empire']
      ]]
    ]))

  return element
}

/**
 * Helper function to describe the map to be rendered.
 *
 * @private
 * @argument {'denmark' | 'finnland' | 'lithuania' | 'norway' | 'nowgorod' | 'order' | 'pskow' | 'roman' | 'sweden'} country
 * @returns {string}
 */
function getCoordinatesForBalticSeaMap (country) {
  if (country === 'denmark') {
    return [
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
    ].join(' ')
  }

  if (country === 'finnland') {
    return [
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
      // close-up
      [309, 99],
      [253, 33]
    ].join(' ')
  }

  if (country === 'lithuania') {
    return [
      // This country has no city in this game
      // Therefore no close-up
      [240, 338],
      [260, 300],
      [260, 280],
      [245, 275],
      [245, 255],
      [321, 245],
      [321, 190],
      [341, 205],
      [341, 350],
      [240, 350]
    ].join(' ')
  }

  if (country === 'norway') {
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
      // close-up
      [77, 159],
      [170, 42],
      [180, 1],
      [80, 1],
      [3, 125]
    ].join(' ')
  }

  if (country === 'nowgorod') {
    return [
      [309, 126],
      [341, 135],
      [323, 139],
      [315, 143],
      [309, 147],
      // close-up
      [341, 205],
      [341, 3],
      [301, 3],
      [284, 50],
      [309, 99]
    ].join(' ')
  }

  if (country === 'order') {
    return [
      [306, 158],
      [272, 159],
      [262, 164],
      [251, 170],
      [244, 184],
      [258, 200],
      [266, 198],
      [265, 232],
      [238, 217],
      [219, 256],
      [225, 282],
      [217, 297],
      [210, 298],
      [190, 316],
      [182, 306],
      // close-up
      [180, 338],
      [240, 338],
      [260, 300],
      [260, 280],
      [245, 275],
      [245, 255],
      [321, 245],
      [321, 190],
      [306, 180]
    ].join(' ')
  }

  if (country === 'pskow') {
    return [
      [309, 147],
      [306, 158],
      // close-up
      [306, 180],
      [311, 185],
      [321, 190],
      [341, 205]
    ].join(' ')
  }

  if (country === 'roman') {
    return [
      [182, 306],
      [117, 337],
      [103, 336],
      [102, 331],
      [87, 322],
      [76, 326],
      [57, 336],
      [49, 335],
      [52, 325],
      [31, 322],
      // close-up
      [31, 350],
      [182, 350]
    ].join(' ')
  }

  if (country === 'sweden') {
    return [
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
      // close-up
      [180, 1],
      [170, 42],
      [77, 159]
    ].join(' ')
  }

  return ''
}
