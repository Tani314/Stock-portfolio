import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_STOCK = 'GET_STOCK'

/**
 * INITIAL STATE
 */
const defaultStock = {}

/**
 * ACTION CREATORS
 */
const getStock = stock => ({type: GET_STOCK, stock})


/**
 * THUNK CREATORS
 */

 /**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_STOCK:
      return action.stock
    default:
      return state
  }
}
