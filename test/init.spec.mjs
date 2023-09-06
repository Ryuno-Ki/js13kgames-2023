import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

import { init } from '../src/js/init.js'

chai.use(sinonChai)
const { expect } = chai

describe('init', function () {
  afterEach(function () {
    sinon.restore()
  })

  it('should initialise the game', async function () {
    // Arrange
    const restore = document.body.innerHTML
    document.body.innerHTML = '<main id="app"></main>'
    sinon.spy(window, 'requestAnimationFrame')

    // Act
    await init()

    // Assert
    expect(window.requestAnimationFrame).to.have.been.calledOnce
    document.body.innerHTML = restore
  })
})
