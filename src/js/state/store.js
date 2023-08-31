import { resetAction } from './actions/reset.js'
import { reducer } from './reducers/index.js'

class Store {
  /**
   * @argument {import('./reducers/index.js').reducer} reducer
   */
  constructor (reducer) {
    this.reducer = reducer
    /** @type {import('./initial-state.js').State} */
    this.state = reducer(undefined, resetAction())
  }

  /**
   * Compute a new state.
   *
   * It's asynchronous because I might need to call out to an API. Not relevant
   * to this game, but I keep the habit.
   *
   * @argument {import('./actions/forward-to-next-month.js').FORWARD_TO_NEXT_MONTH_ACTION | import('./actions/load-ship.js').LOAD_SHIP_ACTION | import('./actions/reset.js').RESET_ACTION | import('./actions/send-ship.js').SEND_SHIP_ACTION | import('./actions/switch-to-city.js').SWITCH_TO_CITY_ACTION | import('./actions/switch-to-scene.js').SWITCH_TO_SCENE_ACTION | import('./actions/switch-to-view.js').SWITCH_TO_VIEW_ACTION | import('./actions/unload-ship.js').UNLOAD_SHIP_ACTION | import('./actions/update-ships.js').UPDATE_SHIPS_ACTION} action
  */
  async dispatch (action) {
    this.state = this.reducer(this.state, action)
  }

  getState () {
    return this.state
  }
}

const store = new Store(reducer)
export default store
