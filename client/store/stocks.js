import axios from "axios";
/**
 * ACTION TYPES
 */
const GOT_STOCK = "GOT_STOCK";
/**
 * INITIAL STATE
 */
const defaultStock = [];

/**
 * ACTION CREATORS
 */
const gotStock = stock => ({ type: GOT_STOCK, stock });
/**
 * THUNK CREATORS
 */
export const getStock = () => async dispatch => {
  try {
    const res = await axios.get("/api/portfolio");
    dispatch(gotStock(res.data || defaultStock));
  } catch (err) {
    console.error(err);
  }
};

/**
 * REDUCER
 */
export default function(state = defaultStock, action) {
  switch (action.type) {
    case GOT_STOCK:
      return action.stock;
    default:
      return state;
  }
}
