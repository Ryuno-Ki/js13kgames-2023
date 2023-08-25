import { JSDOM } from 'jsdom'

const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>', { url: 'https://jaenis.ch/' })

global.document = dom.window.document

global.window = {
  ...dom.window,
  localStorage: {
    getItem: () => null,
    setItem: () => {}
  }
}
