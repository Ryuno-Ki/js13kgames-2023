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

  describe('when ships are available', function () {
    it('should render the load and unload forms', function () {
      // Arrange
      const ships = [{
        name: 'Santa Maria',
        cargo: [],
        moored: true,
        position: 'Lübeck'
      }]
      const targetElement = document.createElement('div')
      const state = Object.assign({}, store.getState(), { ships })

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
          supply: [{
            ware: 'met',
            quantity: 42
          }]
        }]

        const targetElement = document.createElement('div')
        const state = Object.assign({}, store.getState(), { ships, cities })

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
        const state = Object.assign({}, store.getState(), { ships })

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
          supply: []
        }, {
          name: 'Lübeck',
          supply: []
        }]

        const ships = [{
          name: 'Santa Maria',
          cargo: [],
          moored: true,
          position: 'Lübeck'
        }]

        const targetElement = document.createElement('div')
        const state = Object.assign({}, store.getState(), { cities, ships })

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
