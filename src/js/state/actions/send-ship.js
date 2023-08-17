export function sendShip ({ ship, from, to }) {
  return {
    type: 'SEND_SHIP',
    payload: {
      ship,
      from,
      to
    }
  }
}
