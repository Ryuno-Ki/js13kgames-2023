import { FORWARD_TO_NEXT_MONTH_ACTION } from '../../constants.js'

/**
 * @typedef {object} FORWARD_TO_NEXT_MONTH_ACTION
 * @property {'FORWARD_TO_NEXT_MONTH_ACTION'} FORWARD_TO_NEXT_MONTH_ACTION.type
 * @property {object} FORWARD_TO_NEXT_MONTH_ACTION.payload
 */

/**
 * Action creator to allow for forwarding to the next month.
 *
 * @returns {FORWARD_TO_NEXT_MONTH_ACTION}
 */
export function forwardToNextMonthAction () {
  return {
    type: FORWARD_TO_NEXT_MONTH_ACTION,
    payload: {}
  }
}
