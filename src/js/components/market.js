import { el } from './el.js'

export function market (targetElement, state) {
  const element = targetElement.cloneNode(true)
  const type = targetElement.getAttribute('data-type')
  const wares = JSON.parse(targetElement.dataset.wares)
  element.innerHTML = ''

  element.appendChild(el('div', [], {}, type, [
    ['ul', [], {}, '', wares.map((ware) => [
      'li', [], {}, `${ware.ware}: ${ware.amount}`
    ])]
  ]))

  return element
}
