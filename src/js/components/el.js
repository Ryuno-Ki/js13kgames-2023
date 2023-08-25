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
 * @returns {HTMLElement}
 */
export function el (name, classList = [], attributes = {}, text = '', children = []) {
  const element = document.createElement(name)

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
