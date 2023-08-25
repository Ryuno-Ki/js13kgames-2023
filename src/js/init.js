import { cityOverview } from './components/city-overview.js'
import { docks } from './components/docks.js'
import { market } from './components/market.js'
import { monthMeter } from './components/month-meter.js'
import { sea } from './components/sea.js'

import { sectionTitle } from './components/scenes/title.js'
import { sectionSettings } from './components/scenes/settings.js'
import { sectionAbout } from './components/scenes/about.js'
import { sectionNewgame } from './components/scenes/new-game.js'
import { sectionLevel } from './components/scenes/level.js'
import { sectionWorldselection } from './components/scenes/world-selection.js'
import { sectionWin } from './components/scenes/win.js'
import { sectionGameOver } from './components/scenes/game-over.js'

import { registerEventListeners } from './register-event-listeners.js'
import { draw } from './draw.js'
import { add } from './registry.js'

/**
 * Entry point to the game. Registers components and event listeners before
 * triggering the render loop.
 */
export function init () {
  add('city-overview', cityOverview)
  add('docks', docks)
  add('market', market)
  add('month-meter', monthMeter)
  add('sea', sea)
  add('title-section', sectionTitle)
  add('settings-section', sectionSettings)
  add('about-section', sectionAbout)
  add('new-game-section', sectionNewgame)
  add('level-section', sectionLevel)
  add('world-section', sectionWorldselection)
  add('win-section', sectionWin)
  add('game-over-section', sectionGameOver)

  registerEventListeners()
  draw()
}
