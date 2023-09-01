import { JSDOM } from 'jsdom'

const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>', { url: 'https://jaenis.ch/' })
const fakeStorage = {}

global.document = dom.window.document

global.window = {
  ...dom.window,
  addEventListener: function (eventType, callback) {
    const event = {}
    callback(event)
  },
  Event: dom.window.Event,
  localStorage: {
    setItem: (key, value) => {
      fakeStorage[key] = value
    },
    getItem: (key) => {
      return fakeStorage[key] || null
    },
    removeItem: (key) => {
      delete fakeStorage[key]
    }
  },
  requestAnimationFrame: () => {}
}
