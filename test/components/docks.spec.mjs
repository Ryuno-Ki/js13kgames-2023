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

  it('should render the unchanged element in case passed data is empty', function () {
    // Arrange
    const targetElement = document.createElement('div')
    targetElement.setAttribute('data-destinations', JSON.stringify([]))
    targetElement.setAttribute('data-ships', JSON.stringify([]))
    targetElement.setAttribute('data-warehouse', JSON.stringify([]))
    const state = store.getState()

    // Act
    const docksComponent = docks(targetElement, state)

    // Assert
    expect(docksComponent).not.to.equal(targetElement)
  })

  describe('when ships are available', function () {
    it('should render the load and unload forms', function () {
      // Arrange
      const ships = [{
        name: 'Santa Maria',
        cargo: []
      }]
      const targetElement = document.createElement('div')
      targetElement.setAttribute('data-destinations', JSON.stringify([]))
      targetElement.setAttribute('data-ships', JSON.stringify(ships))
      targetElement.setAttribute('data-warehouse', JSON.stringify([]))
      const state = store.getState()

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
          cargo: []
        }]
        const warehouse = [{
          ware: 'met',
          quantity: 42
        }]

        const targetElement = document.createElement('div')
        targetElement.setAttribute('data-destinations', JSON.stringify([]))
        targetElement.setAttribute('data-ships', JSON.stringify(ships))
        targetElement.setAttribute('data-warehouse', JSON.stringify(warehouse))
        const state = store.getState()

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
          }]
        }]

        const targetElement = document.createElement('div')
        targetElement.setAttribute('data-destinations', JSON.stringify([]))
        targetElement.setAttribute('data-ships', JSON.stringify(ships))
        targetElement.setAttribute('data-warehouse', JSON.stringify([]))
        const state = store.getState()

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
        const destinations = [{
          name: 'India'
        }]

        const ships = [{
          name: 'Santa Maria',
          cargo: []
        }]

        const targetElement = document.createElement('div')
        targetElement.setAttribute('data-destinations', JSON.stringify(destinations))
        targetElement.setAttribute('data-ships', JSON.stringify(ships))
        targetElement.setAttribute('data-warehouse', JSON.stringify([]))
        const state = store.getState()

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
