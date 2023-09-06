/**
 * Helper function to generate DOM elements from a data structure.
 *
 * The last argument is basically arguments of this function.
 *
 * @argument {string} name
 * @argument {Array<string>} classList
 * @argument {Object<string, *>} attributes
 * @argument {string} text
 * @argument {Array<*>} children
 * @returns {HTMLElement | SVGElement}
 */
export function el (name, classList = [], attributes = {}, text = '', children = []) {
  /** @type {HTMLElement | SVGElement} */
  let element

  if (['svg'].includes(name)) {
    element = document.createElementNS('http://www.w3.org/2000/svg', name)
  } else {
    element = document.createElement(name)
  }

  classList.forEach(function addClassName (className) {
    element.classList.add(className)
  })

  Object.entries(attributes).forEach(function setAttribute (attribute) {
    const key = attribute[0]
    const value = attribute[1]
    element.setAttribute(key, value)
  })

  element.textContent = text
  children.forEach(function recurse (child) {
    // I don't know how to properly define the type here
    // @ts-ignore
    element.appendChild(el(...child))
  })

  return element
}

/**
 * Turn coordinates to a SVG path d value.
 *
 * @argument {Array<Array<number>>} coordinates
 * @returns {string}
 */
export function mapCoordinatesToPath (coordinates) {
  if (coordinates.length === 0) {
    return ''
  }

  return [
      `M${coordinates[0].join(',')}`,
      coordinates.slice(1).map((segment) => `L${segment.join(',')}`).join('')
  ].join('')
}
