import { expect } from 'chai'

import store from '../../src/js/state/store.js'

describe('store', function () {
  it('should be a singleton', function () {
    // Arrange
    // Nothing to prepare

    // Act
    // Nothing to run

    // Assert
    expect(store).to.be.a.class
  })

  it('should have a dispatch method', function () {
    // Arrange
    // Nothing to prepare

    // Act
    // Nothing to run

    // Assert
    expect(store).to.respondTo('dispatch')
  })

  it('should have a getState method', function () {
    // Arrange
    // Nothing to prepare

    // Act
    // Nothing to run

    // Assert
    expect(store).to.respondTo('getState')
  })
})
