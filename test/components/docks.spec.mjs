import chai from 'chai'
import chaiDom from 'chai-dom'

import { docks } from '../../src/js/components/docks.js'
import { resetAction } from '../../src/js/state/actions/reset.js'
import store from '../../src/js/state/store.js'

chai.use(chaiDom)
const { expect } = chai

describe('docks', function () {
  beforeEach(async function () {
    await store.dispatch(resetAction())
  })

  it('should contain a tutorial component', function () {
    // Arrange
    const ships = []
    const targetElement = document.createElement('div')
    const state = Object.assign({}, store.getState(), { ships })

    // Act
    const docksComponent = docks(targetElement, state)

    // Assert
    expect(docksComponent).not.to.equal(targetElement)
    expect(docksComponent).to.have.descendant('[data-component="tutorial"]')
  })

  describe('when ships are not available', function () {
    it('should inform that there is nothing to do', function () {
      // Arrange
      const ships = []
      const targetElement = document.createElement('div')
      const state = Object.assign({}, store.getState(), { ships })

      // Act
      const docksComponent = docks(targetElement, state)

      // Assert
      expect(docksComponent).not.to.equal(targetElement)
      expect(docksComponent).not.to.contain.text(['Load'])
      expect(docksComponent).not.to.contain.text(['Unload'])
      expect(docksComponent).to.have.descendant('p.no-ships')
    })
  })

  describe('when ships are available', function () {
    describe('when the sea is frozen', function () {
      it('should inform that no ship can depart', function () {
        // Arrange
        const targetElement = document.createElement('div')
        const state = Object.assign({}, store.getState(), { activeMonth: '11' })

        // Act
        const docksComponent = docks(targetElement, state)

        // Assert
        expect(docksComponent).not.to.equal(targetElement)
        expect(docksComponent).not.to.contain.text(['Load'])
        expect(docksComponent).not.to.contain.text(['Unload'])
        expect(docksComponent).to.have.descendant('p.frozen-sea')
      })
    })

    it('should render the load and unload forms', function () {
      // Arrange
      const ships = [{
        name: 'Santa Maria',
        cargo: [],
        moored: true,
        position: 'Lübeck'
      }]
      const targetElement = document.createElement('div')
      const state = Object.assign({}, store.getState(), { activeMonth: '5', ships })

      // Act
      const docksComponent = docks(targetElement, state)

      // Assert
      expect(docksComponent).not.to.equal(targetElement)
      expect(docksComponent).to.contain.text(['Load'])
      expect(docksComponent).to.contain.text(['Unload'])
    })

    describe('when warehouse is stocked', function () {
      it('should display an input to load ware onto the ship', function () {
        // Arrange
        const ships = [{
          name: 'Santa Maria',
          cargo: [],
          moored: true,
          position: 'Lübeck'
        }]
        const cities = [{
          name: 'Lübeck',
          isFounded: true,
          warehouse: [{
            ware: 'met',
            quantity: 42
          }]
        }]

        const targetElement = document.createElement('div')
        const state = Object.assign({}, store.getState(), { activeMonth: '5', ships, cities })

        // Act
        const docksComponent = docks(targetElement, state)

        // Assert
        expect(docksComponent).not.to.equal(targetElement)
        expect(docksComponent).to.contain.text(['met'])
        expect(docksComponent).to.contain('label[for="Santa Maria-load-met"]')
        expect(docksComponent).to.contain('input[id="Santa Maria-load-met"]')
      })
    })

    describe('when ship is loaded', function () {
      it('should display an input to unload ware from the ship', function () {
        // Arrange
        const ships = [{
          name: 'Santa Maria',
          cargo: [{
            ware: 'met',
            quantity: 2
          }],
          moored: true,
          position: 'Lübeck'
        }]

        const targetElement = document.createElement('div')
        const state = Object.assign({}, store.getState(), { activeMonth: '5', ships })

        // Act
        const docksComponent = docks(targetElement, state)

        // Assert
        expect(docksComponent).not.to.equal(targetElement)
        expect(docksComponent).to.contain.text(['met'])
        expect(docksComponent).to.contain('label[for="Santa Maria-unload-met"]')
        expect(docksComponent).to.contain('input[id="Santa Maria-unload-met"]')
      })
    })

    describe('when destinations are available', function () {
      it('should display a select to choose one', function () {
        // Arrange
        const cities = [{
          name: 'India',
          isFounded: true,
          warehouse: []
        }, {
          name: 'Lübeck',
          isFounded: true,
          warehouse: []
        }]

        const ships = [{
          name: 'Santa Maria',
          cargo: [],
          moored: true,
          position: 'Lübeck'
        }]

        const targetElement = document.createElement('div')
        const state = Object.assign({}, store.getState(), { activeMonth: '5', cities, ships })

        // Act
        const docksComponent = docks(targetElement, state)

        // Assert
        expect(docksComponent).not.to.equal(targetElement)
        expect(docksComponent).to.contain.text(['India'])
        expect(docksComponent).to.contain('option[value="India"]')
      })
    })
  })
})
