export function unloadShipAction ({ city, ship, ware, quantity }) {
  return {
    type: 'UNLOAD_SHIP_ACTION',
    payload: {
      city,
      ship,
      ware,
      quantity
    }
  }
}
