import { copy } from '../../helpers/copy.js'

/**
 * Reducer to buy a ship from the docks in a city.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/buy-ship.js').BUY_SHIP_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function buyShipReducer (state, payload) {
  const { activeCity } = state
  const newShipName = ''
  const newShipType = null

  const { city, shipName, shipType } = payload
  const { price } = state.shipTypes[shipType]

  let { playermoney, ships } = state

  if (activeCity !== city) {
    return copy(state, { playermoney, ships })
  }

  if (ships.find((ship) => ship.name === shipName)) {
    return copy(state, { playermoney, ships })
  }

  if (price <= playermoney) {
    playermoney = playermoney - price

    ships = state.ships.concat({
      name: shipName,
      type: shipType,
      position: city,
      moored: true,
      itinerary: null,
      cargo: []
    })
  }

  return copy(state, { newShipName, newShipType, playermoney, ships })
}
