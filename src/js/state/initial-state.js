export const initialState = {
  activeCity: null,
  activeScene: 'title-section',
  activeView: 'sea',
  activeMonth: 1,
  activeYear: 1250,
  cities: [{
    name: 'Lübeck',
    demand: [{
      ware: 'honey',
      amount: 10
    }, {
      ware: 'salt',
      amount: 5
    }, {
      ware: 'wool',
      amount: 3
    }],
    supply: [{
      ware: 'honey',
      amount: 5
    }, {
      ware: 'salt',
      amount: 2
    }, {
      ware: 'wool',
      amount: 10
    }]
  }, {
    name: 'Wismar',
    demand: [{
      ware: 'honey',
      amount: 10
    }, {
      ware: 'salt',
      amount: 5
    }],
    // warehouse = Kontor
    supply: [{
      ware: 'salt',
      amount: 8
    }, {
      ware: 'wool',
      amount: 4
    }]
  }],
  itineraries: [],
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
  ships: [{
    name: 'Marie',
    type: 'cog',
    position: 'Lübeck',
    moored: true,
    costs: 5,
    cargo: [],
    // 80 - 200t
    maxFreightWeight: 10
    // speed: 3 - 6 kn = sea miles / hour.
    // 1 sea mile = 1852 m
  }],
  // Nef with 60 - 100t
  // evtl. auch Knorr
  history: [],
  title: '',
  volume: 0
}
