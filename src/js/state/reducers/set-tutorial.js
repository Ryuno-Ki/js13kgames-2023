/**
 * Reducer to set the tutorial flags.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/set-tutorial.js').SET_TUTORIAL_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function setTutorialReducer (state, payload) {
  const { scene } = payload

  if (scene !== 'level-section') {
    return Object.assign({}, state)
  }

  const { activeScenario, showTutorial } = state
  const activeView = activeScenario === 'tutorial' ? 'story' : 'warehouse'
  const tutorialFlag = activeScenario === 'tutorial'

  Object.keys(showTutorial).forEach((view) => {
    // I failed to tell TypeScript here that view is of type View instead of string
    // @ts-ignore
    showTutorial[view] = tutorialFlag
  })

  return Object.assign({}, state, { activeView, showTutorial })
}
