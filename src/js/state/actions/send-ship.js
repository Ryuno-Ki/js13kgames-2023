export function sendShipAction ({ ship, from, to }) {
  return {
    type: 'SEND_SHIP_ACTION',
    payload: {
      ship,
      from,
      to
    }
  }
}
