import { copy } from '../../helpers/copy.js'

/**
 * Reducer to buy a ship from the docks in a city.
 *
 * @argument {import('../initial-state.js').State} state
 * @argument {import('../actions/buy-ship.js').BUY_SHIP_ACTION['payload']} payload
 * @returns {import('../initial-state.js').State}
 */
export function buyShipReducer (state, payload) {
  const { activeCity, newShipName, newShipType } = state

  const { city } = payload

  if (activeCity !== city) {
    return copy(state, {})
  }

  if (!newShipName) {
    return copy(state, {})
  }

  if (!newShipType) {
    return copy(state, {})
  }

  if (state.ships.find((ship) => ship.name === newShipName)) {
    return copy(state, {})
  }

  const { price } = state.shipTypes[newShipType]

  let { playermoney, ships } = state

  if (price <= playermoney) {
    playermoney = playermoney - price

    ships = state.ships.concat({
      name: newShipName,
      type: newShipType,
      position: city,
      moored: true,
      itinerary: null,
      cargo: {
        beer: 0,
        crop: 0,
        salt: 0,
        sprats: 0,
        wax: 0,
        wood: 0
      }
    })
  }

  return copy(state, { newShipName: '', newShipType: null, playermoney, ships })
}
