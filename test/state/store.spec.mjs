import { expect } from 'chai'

import { setColorPreferenceAction } from '../../src/js/state/actions/set-color-preference.js'
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

  describe('when color preference is changed', function () {
    it('should update the document.body', async function () {
      // Arrange
      const color = 'dark'

      // Act
      await store.dispatch(setColorPreferenceAction(color))

      // Assert
      expect(document.body).to.have.class('theme-dark')
    })
  })
})
