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
    element.appendChild(el(...child))
  })
  return element
}
