export function loadShipAction ({ city, ship, ware, quantity }) {
  return {
    type: 'LOAD_SHIP_ACTION',
    payload: {
      city,
      ship,
      ware,
      quantity
    }
  }
}
