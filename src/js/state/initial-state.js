export const initialState = {
  activeScene: 'title-section',
  scenes: {
    id: 'XState definition for scenes',
    predictableActionArguments: true,
    preserveActionOrder: true,
    initial: 'title-section',
    states: {
      Title: {
        component: 'title-section',
        name: 'Title',
        on: {
          navigateToNewGame: {
            target: 'NewGame'
          },
          navigateToSettings: {
            target: 'Settings'
          },
          navigateToAbout: {
            target: 'About'
          }
        }
      },
      Settings: {
        component: 'settings-section',
        name: 'Settings',
        on: {
          navigateToTitle: {
            target: 'Title'
          }
        }
      },
      About: {
        component: 'about-section',
        name: 'About',
        on: {
          navigateToTitle: {
            target: 'Title'
          }
        }
      },
      NewGame: {
        component: 'new-game-section',
        name: 'New game',
        on: {
          navigateToTitle: {
            target: 'Title'
          },
          navigateToWorld: {
            target: 'World'
          }
        }
      },
      Level: {
        component: 'level-section',
        name: 'Level',
        on: {
          navigateToWin: {
            target: 'Win'
          },
          navigateToGameOver: {
            target: 'GameOver'
          }
        }
      },
      World: {
        component: 'world-section',
        name: 'World selection',
        on: {
          navigateToLevel: {
            target: 'Level'
          }
        }
      },
      Win: {
        component: 'win-section',
        name: 'Win',
        on: {
          navigateToTitle: {
            target: 'Title'
          }
        }
      },
      GameOver: {
        component: 'game-over-section',
        name: 'Game Over',
        on: {
          navigateToTitle: {
            target: 'Title'
          }
        }
      }
    }
  },
  title: '',
  volume: 0
}
